// Tracks which MarkdownInput's contenteditable last had focus, so ONE shared
// formatting toolbar (bold / italic / code / link — see SlideStage's header)
// can act on whichever field the author is editing right now, instead of
// every field carrying its own popup toolbar. Works for every screen type,
// since it doesn't know or care which screen the field belongs to.
// Detachable — part of src/lib/content-edit/.

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
