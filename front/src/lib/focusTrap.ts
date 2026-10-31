// Keyboard and screen-reader behaviour for a modal (sheets, overlays): on open,
// focus moves to the dialog (so its label is read), Tab cycles inside it, and on
// close focus returns to what opened it. Use as `{@attach trapFocus}` on the
// role="dialog" element; give it tabindex="-1". Nested dialogs (a sheet over a
// lesson): only the top one handles Tab.
const FOCUSABLE =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const open: HTMLElement[] = [];

export function trapFocus(dialog: HTMLElement): () => void {
	const opener = document.activeElement as HTMLElement | null;
	open.push(dialog);
	dialog.focus({ preventScroll: true });

	function onKeydown(e: KeyboardEvent) {
		if (e.key !== 'Tab' || open.at(-1) !== dialog) return;
		const items = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
			(el) => el.offsetParent !== null
		);
		if (!items.length) return e.preventDefault();
		const first = items[0];
		const last = items[items.length - 1];
		const active = document.activeElement;
		if (e.shiftKey && (active === first || active === dialog)) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
			e.preventDefault();
			first.focus();
		}
	}

	document.addEventListener('keydown', onKeydown);
	return () => {
		document.removeEventListener('keydown', onKeydown);
		open.splice(open.indexOf(dialog), 1);
		// The opener may be gone (a screen that changed under the dialog).
		if (opener?.isConnected) opener.focus({ preventScroll: true });
	};
}
