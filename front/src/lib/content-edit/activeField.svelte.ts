// Tracks which MarkdownInput's contenteditable last had focus, so ONE shared
// formatting toolbar (bold / italic / underline / strikethrough / code /
// link / color, plus line-level header / align / direction — see
// SlideStage's header) can act on whichever field the author is editing
// right now, instead of every field carrying its own popup toolbar. Works
// for every screen type, since it doesn't know or care which screen the
// field belongs to.
// Detachable — part of src/lib/content-edit/.

import { TEXT_COLOR_PALETTE, type TextColorName } from '$lib/lesson-screens/textColors';

class ActiveField {
	el = $state<HTMLDivElement | null>(null);
}

export const activeField = new ActiveField();

/** Refocus the last-active field (if it's still in the document) and run
 *  `fn` while it holds focus/selection — for toolbar buttons to call
 *  document.execCommand against the right element. */
function withActive(fn: (el: HTMLDivElement) => void) {
	const el = activeField.el;
	if (!el || !el.isConnected) return;
	el.focus();
	fn(el);
}

/** The line (direct child of the field's root) the caret/selection is
 *  currently in — MarkdownInput renders one markdown line per top-level
 *  block element (div/h1/h2/h3), so this is the element line-level
 *  formatting (header size, align, direction) should act on. */
function currentBlock(root: HTMLDivElement): HTMLElement | null {
	const sel = window.getSelection();
	if (!sel || sel.rangeCount === 0) return null;
	let node: Node | null = sel.getRangeAt(0).startContainer;
	while (node && node.parentElement !== root) node = node.parentElement;
	return node instanceof HTMLElement ? node : null;
}

function notifyInput(el: HTMLDivElement) {
	el.dispatchEvent(new Event('input', { bubbles: true }));
}

export function formatBold() {
	withActive(() => {
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand('bold');
	});
}

export function formatItalic() {
	withActive(() => {
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand('italic');
	});
}

export function formatUnderline() {
	withActive(() => {
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand('underline');
	});
}

export function formatStrike() {
	withActive(() => {
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand('strikeThrough');
	});
}

export function formatCode() {
	withActive(() => {
		const text = window.getSelection()?.toString() ?? '';
		document.execCommand('insertText', false, `\`${text || 'code'}\``);
	});
}

export function formatLink() {
	withActive(() => {
		const url = prompt('כתובת קישור (https://…)')?.trim();
		if (!url) return;
		if (window.getSelection()?.toString()) document.execCommand('createLink', false, url);
		else document.execCommand('insertText', false, `[טקסט](${url})`);
	});
}

export function formatColor(name: TextColorName) {
	withActive(() => {
		document.execCommand('styleWithCSS', false, 'false');
		document.execCommand('foreColor', false, TEXT_COLOR_PALETTE[name]);
	});
}

/** Sets (or, if already at that level, clears back to a regular line) the
 *  current line's header size. Line-level: acts on the whole line the caret
 *  is in, ignoring selection extent. */
export function formatHeader(level: 1 | 2 | 3) {
	withActive((el) => {
		const block = currentBlock(el);
		if (!block) return;
		const currentTag = block.tagName.toLowerCase();
		const targetTag = currentTag === `h${level}` ? 'div' : `h${level}`;
		const replacement = document.createElement(targetTag);
		replacement.innerHTML = block.innerHTML;
		if (block.style.textAlign) replacement.style.textAlign = block.style.textAlign;
		if (block.hasAttribute('dir')) replacement.setAttribute('dir', block.getAttribute('dir')!);
		block.replaceWith(replacement);

		const range = document.createRange();
		range.selectNodeContents(replacement);
		range.collapse(false);
		const sel = window.getSelection();
		sel?.removeAllRanges();
		sel?.addRange(range);

		notifyInput(el);
	});
}

/** Line-level text alignment. Toggles off (back to default) when the line
 *  already has this alignment. */
export function formatAlign(align: 'left' | 'center' | 'right') {
	withActive((el) => {
		const block = currentBlock(el);
		if (!block) return;
		block.style.textAlign = block.style.textAlign === align ? '' : align;
		notifyInput(el);
	});
}

/** Line-level direction override. Toggles off (back to the field's default
 *  direction) when the line already has this direction. */
export function formatDirection(dir: 'ltr' | 'rtl') {
	withActive((el) => {
		const block = currentBlock(el);
		if (!block) return;
		if (block.getAttribute('dir') === dir) block.removeAttribute('dir');
		else block.setAttribute('dir', dir);
		notifyInput(el);
	});
}
