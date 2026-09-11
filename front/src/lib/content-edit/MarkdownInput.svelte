<script lang="ts">
	// WYSIWYG-ish single-field editor: shows bold / italic / code / links
	// rendered (not as `**` syntax), stores plain markdown. Dev tooling only —
	// uses the deprecated-but-universal execCommand path to stay dependency-free.
	import { untrack } from 'svelte';
	import { mdInline } from '$lib/lesson-screens/miniMarkdown';

	let {
		value = $bindable(''),
		dir = 'auto',
		minRows = 3,
		/** Chromeless: no border box, toolbar only on focus — for editing prose
		    straight on a screen canvas. */
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

	function exec(command: string) {
		el?.focus();
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand(command);
		sync();
	}

	function toggleCode() {
		el?.focus();
		const sel = window.getSelection();
		const text = sel?.toString() ?? '';
		document.execCommand('insertText', false, `\`${text || 'code'}\``);
		sync();
	}

	function addLink() {
		const url = prompt('כתובת קישור (https://…)')?.trim();
		if (!url) return;
		el?.focus();
		if (window.getSelection()?.toString()) document.execCommand('createLink', false, url);
		else document.execCommand('insertText', false, `[טקסט](${url})`);
		sync();
	}
</script>

<div class="mdi {bare ? 'mdi-bare' : 'rounded-xl border-2 border-line bg-canvas'}">
	<div class="mdi-tools flex gap-1 px-2 py-1 {bare ? '' : 'border-b border-line'}">
		<button
			type="button"
			class="rounded px-2 py-0.5 text-xs font-bold hover:bg-line/60"
			onclick={() => exec('bold')}>B</button
		>
		<button
			type="button"
			class="rounded px-2 py-0.5 text-xs italic hover:bg-line/60"
			onclick={() => exec('italic')}>I</button
		>
		<button
			type="button"
			class="rounded px-2 py-0.5 font-mono text-xs hover:bg-line/60"
			onclick={toggleCode}>{'<>'}</button
		>
		<button type="button" class="rounded px-2 py-0.5 text-xs hover:bg-line/60" onclick={addLink}
			>🔗</button
		>
	</div>
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
		class="w-full outline-none [&_code]:rounded [&_code]:bg-line/60 [&_code]:px-1 {bare
			? ''
			: 'px-3 py-2 text-sm leading-relaxed'}"
		style="min-height: {minRows * 1.6}rem{dir === 'auto'
			? '; direction: rtl; unicode-bidi: plaintext'
			: ''}"
	></div>
</div>

<style>
	/* Bare mode: toolbar hidden until the field is focused, then floats just
	   below the field so it never clips under a card header. */
	.mdi-bare .mdi-tools {
		display: none;
	}
	.mdi-bare:focus-within .mdi-tools {
		display: flex;
		position: absolute;
		z-index: 20;
		top: 100%;
		inset-inline-start: 0;
		margin-top: 3px;
		border: 1px solid var(--color-line, #e5e7eb);
		border-radius: 0.5rem;
		background: var(--color-canvas, #fff);
		box-shadow: 0 2px 10px rgb(0 0 0 / 0.18);
	}
	.mdi-bare {
		position: relative;
	}
	/* A faint frame on the focused field so it reads as editable. */
	.mdi-bare:focus-within {
		outline: 2px solid var(--color-brand, #6366f1);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}
</style>
