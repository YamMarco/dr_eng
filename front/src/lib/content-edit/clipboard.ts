// navigator.clipboard.writeText silently rejects (or is undefined) outside a
// secure context / permitted origin — e.g. testing over a plain-http LAN IP.
// Falls back to the old textarea+execCommand trick so "copy" always does
// something instead of failing invisibly.
export async function copyText(text: string): Promise<boolean> {
	try {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return true;
		}
	} catch {
		// fall through to the fallback below
	}
	try {
		const ta = document.createElement('textarea');
		ta.value = text;
		ta.style.position = 'fixed';
		ta.style.opacity = '0';
		document.body.appendChild(ta);
		ta.focus();
		ta.select();
		const ok = document.execCommand('copy');
		document.body.removeChild(ta);
		return ok;
	} catch {
		return false;
	}
}
