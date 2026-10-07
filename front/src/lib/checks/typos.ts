import NSpell from 'nspell';
import type { CheckIssue, CheckOptions } from './types';

/** Hunspell data for one dialect. */
export type DictData = { aff: Uint8Array; dic: Uint8Array };
export type DictLoader = () => Promise<DictData[]>;

/** The Bagrut accepts British or American spelling, so a word is fine if any
 *  loaded dictionary knows it. */
const utf8 = (b: Uint8Array) => new TextDecoder().decode(b);
let speller: Promise<NSpell[]> | undefined;

export function loadSpellers(load: DictLoader): Promise<NSpell[]> {
	speller ??= load().then((all) => all.map((d) => NSpell(utf8(d.aff), utf8(d.dic))));
	return speller;
}

/** Words the dictionaries don't know but the exam is full of. */
const ALLOWED = new Set(
	`bagrut ok okay email emails online internet app apps website websites smartphone smartphones whatsapp instagram tiktok facebook youtube google covid zoom`.split(
		/\s+/
	)
);

const CONTRACTIONS: Record<string, string> = {
	dont: "don't",
	doesnt: "doesn't",
	didnt: "didn't",
	cant: "can't",
	wont: "won't",
	isnt: "isn't",
	arent: "aren't",
	wasnt: "wasn't",
	werent: "weren't",
	shouldnt: "shouldn't",
	couldnt: "couldn't",
	wouldnt: "wouldn't",
	havent: "haven't",
	hasnt: "hasn't",
	im: "I'm",
	ive: "I've",
	ill: "I'll",
	thats: "that's",
	whats: "what's",
	lets: "let's"
};

const WORD = /\p{L}+(?:['’]\p{L}+)*/gu;

function sentenceStarts(text: string): Set<number> {
	const starts = new Set<number>();
	const re = /(?:^|[.!?\n]\s*)(\p{L})/gu;
	for (const m of text.matchAll(re)) starts.add(m.index + m[0].length - 1);
	return starts;
}

export function typoIssues(
	spellers: NSpell[],
	text: string,
	opts: CheckOptions = {}
): CheckIssue[] {
	const skip = new Set<string>(ALLOWED);
	for (const w of [...(opts.extraWords ?? []), opts.prompt ?? '', opts.source ?? ''])
		for (const x of w.toLowerCase().match(WORD) ?? []) skip.add(x.replace(/’/g, "'"));

	const starts = sentenceStarts(text);
	const out: CheckIssue[] = [];
	for (const m of text.matchAll(WORD)) {
		const raw = m[0];
		const word = raw.replace(/’/g, "'");
		const lower = word.toLowerCase();
		if (word.length < 2 || skip.has(lower)) continue;
		// hebrew / other scripts are reported once as `notEnglish`, not as typos
		if (!/^[A-Za-z']+$/.test(word)) continue;
		// names and acronyms: a capital in the middle of a sentence, or ALL CAPS
		if (/^\p{Lu}/u.test(word) && !starts.has(m.index)) continue;
		if (word.length > 1 && word === word.toUpperCase() && word !== 'I') continue;
		const contraction = CONTRACTIONS[lower];
		if (contraction && lower !== 'ill' && lower !== 'lets') {
			out.push({
				rule: 'typo',
				area: 'mechanics',
				confidence: 'sure',
				start: m.index,
				end: m.index + raw.length,
				text: raw,
				suggestions: [contraction]
			});
			continue;
		}
		if (spellers.some((s) => s.correct(word) || s.correct(lower))) continue;
		const suggestions = [...new Set(spellers.flatMap((s) => s.suggest(word).slice(0, 3)))].slice(
			0,
			3
		);
		out.push({
			rule: 'typo',
			area: 'mechanics',
			confidence: 'sure',
			start: m.index,
			end: m.index + raw.length,
			text: raw,
			suggestions
		});
	}
	return out;
}
