<script lang="ts">
	// Single-field editor: shows bold / italic / underline / strikethrough /
	// code / links / color rendered (not as `**` syntax), plus per-line header
	// size / alignment / direction, and stores plain markdown. Formatting is
	// done by the ONE shared toolbar in SlideStage's header, acting on
	// whichever field last had focus (see activeField.svelte.ts) — no
	// per-field toolbar here. Dev tooling only — uses the
	// deprecated-but-universal execCommand path to stay dependency-free.
	//
	// Each markdown line renders as its own top-level block element (div, or
	// h1/h2/h3 for a header line) so line-level toolbar actions can target
	// "the line the caret is in" by walking up to the root's direct child —
	// see activeField.svelte.ts's currentBlock(). Inline marks (bold, color,
	// …) live inside those blocks same as before.
	import { untrack } from 'svelte';
	import { mdBlock } from '$lib/lesson-screens/miniMarkdown';
	import { colorNameFromHex } from '$lib/lesson-screens/textColors';
	import { activeField, updateActiveLine } from './activeField.svelte';

	let {
		value = $bindable(''),
		dir = 'auto',
		minRows = 3,
		/** Chromeless: no border box — for editing prose straight on a screen canvas. */
		bare = false,
		/** Fired after every edit with the new markdown (for dirty tracking). */
		onInput
	}: {
		value?: string;
		dir?: 'rtl' | 'ltr' | 'auto';
		minRows?: number;
		bare?: boolean;
		onInput?: (value: string) => void;
	} = $props();

	let el = $state<HTMLDivElement>();

	function mdToHtml(md: string): string {
		return mdBlock(md);
	}

	/** Inline content of one line-block: mirrors mdInline's marks. */
	function inlineHtmlToMd(node: Node): string {
		let out = '';
		node.childNodes.forEach((child) => {
			if (child.nodeType === Node.TEXT_NODE) {
				out += child.textContent ?? '';
				return;
			}
			if (!(child instanceof HTMLElement)) return;
			const inner = inlineHtmlToMd(child);
			switch (child.tagName.toLowerCase()) {
				case 'br':
					break;
				case 'b':
				case 'strong':
					out += inner.trim() ? `**${inner}**` : inner;
					break;
				case 'i':
				case 'em':
					out += inner.trim() ? `*${inner}*` : inner;
					break;
				case 'u':
					out += inner.trim() ? `++${inner}++` : inner;
					break;
				case 'code':
					out += inner.trim() ? `\`${inner}\`` : inner;
					break;
				case 's':
				case 'strike':
				case 'del':
					out += inner.trim() ? `~~${inner}~~` : inner;
					break;
				case 'font': {
					const name = colorNameFromHex(child.getAttribute('color') ?? '');
					out += name && inner.trim() ? `{c:${name}}${inner}{/c}` : inner;
					break;
				}
				case 'span': {
					const name = colorNameFromHex(child.style.color ?? '');
					out += name && inner.trim() ? `{c:${name}}${inner}{/c}` : inner;
					break;
				}
				case 'a': {
					const href = child.getAttribute('href') ?? '';
					out += href ? `[${inner}](${href})` : inner;
					break;
				}
				default:
					out += inner;
			}
		});
		return out;
	}

	/** One line-block -> its markdown line, with leading `{a:..}`/`{d:..}`/`{p:text}`
	 *  attribute tokens and `#`/`##`/`###` header marker re-added. */
	function lineToMd(block: HTMLElement): string {
		const tag = block.tagName.toLowerCase();
		const level = tag === 'h1' ? 1 : tag === 'h2' ? 2 : tag === 'h3' ? 3 : 0;

		const align = block.style.textAlign;
		// `dir` set by the toolbar, or the inline `direction` mdBlock renders for `{d:..}`.
		const explicitDir = block.getAttribute('dir') || block.style.direction;
		const isText = block.dataset.p === 'text';

		let prefix = '';
		if (isText) prefix += '{p:text}';
		if (align === 'center' || align === 'right' || align === 'left') prefix += `{a:${align}}`;
		// `{p:text}` already implies ltr.
		if ((explicitDir === 'rtl' || explicitDir === 'ltr') && !(isText && explicitDir === 'ltr'))
			prefix += `{d:${explicitDir}}`;
		if (level) prefix += `${'#'.repeat(level)} `;

		return prefix + inlineHtmlToMd(block);
	}

	function htmlToMd(root: HTMLElement): string {
		const lines: string[] = [];
		root.childNodes.forEach((child) => {
			if (child.nodeType === Node.TEXT_NODE) {
				lines.push(child.textContent ?? '');
				return;
			}
			if (!(child instanceof HTMLElement)) return;
			lines.push(lineToMd(child));
		});
		return lines.join('\n');
	}

	function serialize(): string {
		return el ? htmlToMd(el).replace(/\n{3,}/g, '\n\n') : '';
	}

	function sync() {
		value = serialize();
		onInput?.(value);
	}

	// Pull an external `value` in only when it doesn't already match the DOM,
	// so typing (which updates `value` via sync) never fights the caret.
	$effect(() => {
		void value;
		if (el && value !== untrack(serialize)) el.innerHTML = mdToHtml(value);
	});
</script>

<div class="mdi {bare ? '' : 'rounded-xl border-2 border-line bg-canvas'}">
	<!-- dir="auto" on a contenteditable is flaky in Chrome (caret jumps, empty
	     fields default to LTR until a strong char is typed). unicode-bidi:
	     plaintext resolves per-paragraph direction from content the same way,
	     without the HTML attribute's contenteditable-specific bugs, and falls
	     back to RTL (this app's base direction) for empty/neutral fields. -->
	<div
		bind:this={el}
		contenteditable="true"
		role="textbox"
		aria-multiline="true"
		tabindex="0"
		dir={dir === 'auto' ? undefined : dir}
		oninput={sync}
		onfocus={() => {
			activeField.el = el ?? null;
			document.execCommand('defaultParagraphSeparator', false, 'div');
			updateActiveLine();
		}}
		class="w-full outline-none [&_code]:rounded [&_code]:bg-line/60 [&_code]:px-1 {bare
			? ''
			: 'px-3 py-2 text-sm leading-relaxed'}"
		style="min-height: {minRows * 1.6}rem{dir === 'auto'
			? '; direction: rtl; unicode-bidi: plaintext'
			: ''}"
	></div>
</div>

<style>
	.mdi:has(:focus) {
		outline: 2px solid var(--color-brand, #6366f1);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}
</style>
