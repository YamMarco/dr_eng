// "Did you mean gmail.com?": a mistyped email domain (gmial.com, icloud.con) is a silent dead end,
// because the sign-up email bounces. Only suggests; an unknown domain (a school's, a custom one) is
// fine and gets no hint.

/** Domains students actually use, with the Israeli ones. */
const COMMON = [
	'gmail.com',
	'hotmail.com',
	'outlook.com',
	'icloud.com',
	'yahoo.com',
	'walla.co.il',
	'walla.com',
	'live.com',
	'me.com',
	'msn.com',
	'outlook.co.il',
	'proton.me',
	'protonmail.com',
	'aol.com'
];

/** Edits (insert, delete, replace, swap two neighbours) between two strings. */
function distance(a: string, b: string): number {
	const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i]);
	for (let j = 1; j <= b.length; j++) d[0][j] = j;
	for (let i = 1; i <= a.length; i++)
		for (let j = 1; j <= b.length; j++) {
			d[i][j] = Math.min(
				d[i - 1][j] + 1,
				d[i][j - 1] + 1,
				d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
			);
			if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
				d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
		}
	return d[a.length][b.length];
}

/** The corrected address, or null when the domain is a known one, far from all of them, or the
 *  address is not shaped like name@domain. One edit apart only: a real domain two edits from a big
 *  one (gmx.com) is left alone. */
export function suggestEmail(address: string): string | null {
	const at = address.lastIndexOf('@');
	if (at < 1) return null;
	const local = address.slice(0, at);
	const domain = address.slice(at + 1).toLowerCase();
	if (!domain.includes('.') || COMMON.includes(domain)) return null;
	let best: string | null = null;
	let bestDistance = 2;
	for (const known of COMMON) {
		const edits = distance(domain, known);
		if (edits < bestDistance) {
			best = known;
			bestDistance = edits;
		}
	}
	return best && `${local}@${best}`;
}
