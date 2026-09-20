// Tracks which MarkdownInput's contenteditable last had focus, so ONE shared
// formatting toolbar (bold / italic / underline / strikethrough / code /
// link / color, plus line-level header / align / direction — see
// SlideStage's header) can act on whichever field the author is editing
// right now, instead of every field carrying its own popup toolbar. Works
// for every screen type, since it doesn't know or care which screen the
// field belongs to.
// Detachable — part of src/lib/content-edit/.

import { TEXT_COLOR_PALETTE, type TextColorName } from '$lib/lesson-screens/textColors';
import { TEXT_BLOCK_CLASS } from '$lib/lesson-screens/miniMarkdown';

class ActiveField {
	el = $state<HTMLDivElement | null>(null);
}

export const activeField = new ActiveField();

/** The header level of the line the caret is currently in (0 = regular
 *  text) — kept live via `selectionchange` so the toolbar's header button
 *  can show the current line's mode without waiting for a click. */
class ActiveLine {
	level = $state<0 | 1 | 2 | 3>(0);
}

export const activeLine = new ActiveLine();

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

/** Every line the selection touches (just the caret's line when collapsed) —
 *  so line-level formatting can act on a whole selected paragraph range, not
 *  only the line the caret ends in. Blank spacer lines and a line the
 *  selection merely ends at the very start of are left out. */
function selectedBlocks(root: HTMLDivElement): HTMLElement[] {
	const sel = window.getSelection();
	if (!sel || sel.rangeCount === 0) return [];
	const range = sel.getRangeAt(0);
	let blocks = [...root.children].filter(
		(c): c is HTMLElement => c instanceof HTMLElement && range.intersectsNode(c)
	);
	if (blocks.length > 1) {
		const last = blocks[blocks.length - 1];
		const head = document.createRange();
		head.setStart(last, 0);
		head.setEnd(range.endContainer, range.endOffset);
		if (head.toString() === '') blocks = blocks.slice(0, -1);
		blocks = blocks.filter((b) => (b.textContent ?? '').trim() !== '');
	}
	return blocks;
}

function notifyInput(el: HTMLDivElement) {
	el.dispatchEvent(new Event('input', { bubbles: true }));
}

/** Refreshes `activeLine.level` from wherever the caret is right now. Call
 *  after any DOM mutation that might move the caret to a different line
 *  (header/align/direction changes) — `selectionchange` covers everything
 *  else (typing, clicking, arrow keys, refocusing another field). */
export function updateActiveLine() {
	const el = activeField.el;
	if (!el || !el.isConnected) {
		activeLine.level = 0;
		return;
	}
	const block = currentBlock(el);
	const tag = block?.tagName.toLowerCase();
	activeLine.level = tag === 'h1' ? 1 : tag === 'h2' ? 2 : tag === 'h3' ? 3 : 0;
}

if (typeof document !== 'undefined') {
	document.addEventListener('selectionchange', updateActiveLine);
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

/** Sets the current line's header size (0 = regular text). Line-level: acts
 *  on the whole line the caret is in, ignoring selection extent. */
export function formatHeader(level: 0 | 1 | 2 | 3) {
	withActive((el) => {
		const block = currentBlock(el);
		if (!block) return;
		const targetTag = level ? `h${level}` : 'div';
		if (block.tagName.toLowerCase() === targetTag) return;
		const replacement = document.createElement(targetTag);
		replacement.innerHTML = block.innerHTML;
		if (block.style.textAlign) replacement.style.textAlign = block.style.textAlign;
		if (block.hasAttribute('dir')) replacement.setAttribute('dir', block.getAttribute('dir')!);
		if (block.dataset.p === 'text') applyTextBlock(replacement, true);
		else if (block.style.direction) replacement.style.direction = block.style.direction;
		block.replaceWith(replacement);

		const range = document.createRange();
		range.selectNodeContents(replacement);
		range.collapse(false);
		const sel = window.getSelection();
		sel?.removeAllRanges();
		sel?.addRange(range);

		notifyInput(el);
		updateActiveLine();
	});
}

/** Line-level text alignment, on every selected line. Toggles off (back to
 *  default) when all of them already have this alignment. */
export function formatAlign(align: 'left' | 'center' | 'right') {
	withActive((el) => {
		const blocks = selectedBlocks(el);
		if (!blocks.length) return;
		const on = !blocks.every((b) => b.style.textAlign === align);
		for (const b of blocks) b.style.textAlign = on ? align : '';
		notifyInput(el);
	});
}

function applyTextBlock(block: HTMLElement, on: boolean) {
	const classes = TEXT_BLOCK_CLASS.split(' ');
	if (on) {
		block.dataset.p = 'text';
		block.style.direction = 'ltr';
		block.classList.add(...classes);
	} else {
		delete block.dataset.p;
		block.style.direction = '';
		block.classList.remove(...classes);
	}
}

/** Toggles the selected lines (or the caret line) between an app instruction (default) and English
 *  study text (`{p:text}`: set apart visually, left-to-right). */
export function formatTextBlock() {
	withActive((el) => {
		const blocks = selectedBlocks(el);
		if (!blocks.length) return;
		// All already study text -> turn off; otherwise turn every selected line on.
		const on = !blocks.every((b) => b.dataset.p === 'text');
		for (const b of blocks) applyTextBlock(b, on);
		notifyInput(el);
	});
}

/** Line-level direction override, on every selected line. Toggles off (back
 *  to the field's default direction) when all of them already have it. */
export function formatDirection(dir: 'ltr' | 'rtl') {
	withActive((el) => {
		const blocks = selectedBlocks(el);
		if (!blocks.length) return;
		const on = !blocks.every((b) => b.getAttribute('dir') === dir);
		for (const b of blocks) {
			if (on) b.setAttribute('dir', dir);
			else b.removeAttribute('dir');
		}
		notifyInput(el);
	});
}
