<script lang="ts">
	// Single-field editor: shows bold / italic / strikethrough / code / links
	// rendered (not as `**` syntax), stores plain markdown. Formatting is done
	// by the ONE
	// shared toolbar in SlideStage's header, acting on whichever field last had
	// focus (see activeField.svelte.ts) — no per-field toolbar here. Dev
	// tooling only — uses the deprecated-but-universal execCommand path to
	// stay dependency-free.
	import { untrack } from 'svelte';
	import { mdInline } from '$lib/lesson-screens/miniMarkdown';
	import { activeField } from './activeField.svelte';

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
		return mdInline(md).replace(/\n/g, '<br>');
	}

	function htmlToMd(node: Node): string {
		let out = '';
		node.childNodes.forEach((child) => {
			if (child.nodeType === Node.TEXT_NODE) {
				out += child.textContent ?? '';
				return;
			}
			if (!(child instanceof HTMLElement)) return;
			const inner = htmlToMd(child);
			switch (child.tagName.toLowerCase()) {
				case 'br':
					out += '\n';
					break;
				case 'div':
				case 'p':
					out += (out && !out.endsWith('\n') ? '\n' : '') + inner;
					break;
				case 'b':
				case 'strong':
					out += inner.trim() ? `**${inner}**` : inner;
					break;
				case 'i':
				case 'em':
					out += inner.trim() ? `*${inner}*` : inner;
					break;
				case 'code':
					out += inner.trim() ? `\`${inner}\`` : inner;
					break;
				case 's':
				case 'strike':
				case 'del':
					out += inner.trim() ? `~~${inner}~~` : inner;
					break;
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

	function serialize(): string {
		return el
			? htmlToMd(el)
					.replace(/\n{3,}/g, '\n\n')
					.replace(/\n+$/, '')
			: '';
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
		onfocus={() => (activeField.el = el ?? null)}
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
