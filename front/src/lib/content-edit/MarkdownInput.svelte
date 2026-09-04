<script lang="ts">
	// WYSIWYG-ish single-field editor: shows bold / italic / code / links
	// rendered (not as `**` syntax), stores plain markdown. Dev tooling only —
	// uses the deprecated-but-universal execCommand path to stay dependency-free.
	import { untrack } from 'svelte';
	import { mdInline } from '$lib/lesson-screens/miniMarkdown';

	let {
		value = $bindable(''),
		dir = 'auto',
		minRows = 3
	}: { value?: string; dir?: 'rtl' | 'ltr' | 'auto'; minRows?: number } = $props();

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
		return el ? htmlToMd(el).replace(/\n{3,}/g, '\n\n').replace(/\n+$/, '') : '';
	}

	function sync() {
		value = serialize();
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

<div class="rounded-xl border-2 border-line bg-canvas">
	<div class="flex gap-1 border-b border-line px-2 py-1">
		<button type="button" class="rounded px-2 py-0.5 text-xs font-bold hover:bg-line/60" onclick={() => exec('bold')}>B</button>
		<button type="button" class="rounded px-2 py-0.5 text-xs italic hover:bg-line/60" onclick={() => exec('italic')}>I</button>
		<button type="button" class="rounded px-2 py-0.5 font-mono text-xs hover:bg-line/60" onclick={toggleCode}>{'<>'}</button>
		<button type="button" class="rounded px-2 py-0.5 text-xs hover:bg-line/60" onclick={addLink}>🔗</button>
	</div>
	<div
		bind:this={el}
		contenteditable="true"
		role="textbox"
		aria-multiline="true"
		tabindex="0"
		{dir}
		oninput={sync}
		class="w-full px-3 py-2 text-sm leading-relaxed outline-none [&_code]:rounded [&_code]:bg-line/60 [&_code]:px-1"
		style="min-height: {minRows * 1.6}rem"
	></div>
</div>
