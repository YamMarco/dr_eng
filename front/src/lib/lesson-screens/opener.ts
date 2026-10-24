// Splits a round-opening preface into the parts its title card shows. The first
// line is the headline; the rest stays body text. No content changes needed:
// "סיבוב 2 | כותבים עמדה", "סבב 1: חימום", "סיכום - שלושה כלים", "רמת בחינה 💎"
// all yield a kicker and/or badge emoji next to a short title.

export type OpenerParts = {
	/** Small label above the title ("סיבוב 2", "סיכום"), if the line had one. */
	kicker: string;
	title: string;
	/** An emoji pulled out of the headline, shown in the badge instead of the icon. */
	emoji: string;
	/** The remaining lines, still mini-markdown for `mdBlock`. */
	body: string;
	/** `{d:..}` direction of the headline line, if set. */
	dir: 'rtl' | 'ltr' | undefined;
};

const EMOJI = /\p{Extended_Pictographic}\uFE0F?/u;
const TITLE_MAX = 70;

/** `undefined` when the text doesn't open with a plain line (a header, an English
 *  `{p:text}` quote, ...) - those keep the normal teaching layout. */
export function openerParts(text: string): OpenerParts | undefined {
	const [first, ...restLines] = text.split('\n');
	let line = first.trim();
	let dir: OpenerParts['dir'];
	const d = line.match(/^\{d:(rtl|ltr)\}/);
	if (d) {
		dir = d[1] as 'rtl' | 'ltr';
		line = line.slice(d[0].length).trim();
	}
	if (!line || /^(\{[api]:|#|---)/.test(line)) return undefined;

	let emoji = '';
	const e = line.match(EMOJI);
	if (e) {
		emoji = e[0];
		line = line
			.replace(e[0], '')
			.replace(/\s{2,}/g, ' ')
			.trim();
	}

	let kicker = '';
	const k =
		line.match(/^(.{1,30}?)\s+\|\s+(.+)$/) ??
		line.match(/^(\S+(?: \S+){0,2}) - (.+)$/) ??
		line.match(/^(\S+(?: \S+)?): (.+)$/);
	if (k) {
		kicker = k[1];
		line = k[2];
	}

	// A long headline keeps only its first sentence; the rest leads the body.
	let lead = '';
	const s = line.length > TITLE_MAX ? line.match(/^(.+?[.?!])\s+(.+)$/) : null;
	if (s) {
		line = s[1];
		lead = (dir ? `{d:${dir}}` : '') + s[2];
	}

	const body = [lead, ...restLines]
		.join('\n')
		.replace(/^(\s*\{d:\w+\}\s*\n)+/, '')
		.trim();
	return { kicker, title: line, emoji, body, dir };
}
