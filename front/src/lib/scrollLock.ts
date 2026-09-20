// Freezes the page behind a full-screen overlay (lesson runner, sheets), so
// touches on the overlay's non-scrolling parts can't scroll the page under it
// (on phones this also moved the page whenever the browser bar showed/hid).
// Ref-counted: overlays can nest. Use as `$effect(() => lockScroll())`.
let locks = 0;
let previous = { html: '', body: '' };

export function lockScroll(): () => void {
	if (locks++ === 0) {
		previous = {
			html: document.documentElement.style.overflow,
			body: document.body.style.overflow
		};
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
	}
	return () => {
		if (--locks === 0) {
			document.documentElement.style.overflow = previous.html;
			document.body.style.overflow = previous.body;
		}
	};
}
