import type { CheckIssue } from './types';

/** Mechanics (rubric: spelling, capitalization, punctuation, run-on sentences).
 *  Spelling lives in typos.ts; this file is the pattern rules. */

const issue = (
	rule: string,
	start: number,
	end: number,
	text: string,
	suggestions: string[] = [],
	confidence: CheckIssue['confidence'] = 'sure'
): CheckIssue => ({ rule, area: 'mechanics', confidence, start, end, text, suggestions });

const ALWAYS_CAPITAL = new Set(
	`monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december israel israeli english hebrew arabic jewish jerusalem tel aviv europe america`.split(
		/\s+/
	)
);
// "may" and "march" are also ordinary words; only flag them where the capital is
// unambiguous elsewhere. Kept out of the proper-noun list on purpose.
ALWAYS_CAPITAL.delete('may');
ALWAYS_CAPITAL.delete('march');

const CONNECTORS = new Set(
	`however therefore moreover furthermore finally also besides firstly secondly thirdly first second third next then so yes no well now still instead otherwise`.split(
		/\s+/
	)
);
const SUBORDINATORS = new Set(
	`if when because although though while since after before as unless whenever whether until once`.split(
		/\s+/
	)
);
const SUBJECTS = new Set(['i', 'he', 'she', 'it', 'we', 'they', 'you', 'this', 'there']);

/** Splits into sentences, keeping offsets. A newline also ends a sentence. */
export function sentenceSpans(text: string): { start: number; end: number }[] {
	const spans: { start: number; end: number }[] = [];
	const re = /[^.!?\n]+[.!?]*/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text))) {
		const lead = m[0].length - m[0].trimStart().length;
		const body = m[0].trim();
		if (!/[\p{L}\p{N}]/u.test(body)) continue;
		spans.push({ start: m.index + lead, end: m.index + lead + body.length });
	}
	return spans;
}

export function mechanicsIssues(text: string): CheckIssue[] {
	const out: CheckIssue[] = [];
	const spans = sentenceSpans(text);

	// capital letter at the start of a sentence
	for (const { start } of spans) {
		const first = text[start];
		if (/\p{Ll}/u.test(first))
			out.push(issue('capital-start', start, start + 1, first, [first.toUpperCase()]));
	}

	// "i" on its own, or as i'm / i'll / i've / i'd
	for (const m of text.matchAll(/(?<![\p{L}'’])i(?=$|[\s,.!?;:]|['’](?:m|ll|ve|d)\b)/gu))
		out.push(issue('capital-i', m.index, m.index + 1, 'i', ['I']));

	// days, months, languages, nationalities, places
	for (const m of text.matchAll(/\p{L}+/gu)) {
		const w = m[0];
		if (/^\p{Ll}/u.test(w) && ALWAYS_CAPITAL.has(w))
			out.push(
				issue('capital-name', m.index, m.index + w.length, w, [w[0].toUpperCase() + w.slice(1)])
			);
	}

	// a sentence with no closing mark (each sentence ends before the next capital/newline)
	for (const { start, end } of spans) {
		const s = text.slice(start, end);
		if (/[.!?]$/.test(s)) continue;
		const last = s.match(/\p{L}+(?=[^\p{L}]*$)/u);
		if (last)
			out.push(
				issue('end-mark', start + last.index!, start + last.index! + last[0].length, last[0], [
					last[0] + '.'
				])
			);
	}

	// space before , . ! ?   and   no space after , . ! ? : ;
	for (const m of text.matchAll(/(?<=\p{L}) +([,.!?;:])/gu))
		out.push(issue('space-before-mark', m.index, m.index + m[0].length, m[0], [m[1]]));
	for (const m of text.matchAll(/(?<=\p{L})([,;:])(?=\p{L})/gu))
		out.push(issue('space-after-mark', m.index, m.index + 1, m[1], [m[1] + ' ']));
	for (const m of text.matchAll(/(?<=\p{Ll})([.!?])(?=\p{Lu}\p{Ll})/gu))
		out.push(issue('space-after-mark', m.index, m.index + 1, m[1], [m[1] + ' ']));

	// the the
	for (const m of text.matchAll(/\b(\p{L}+)\s+\1\b/giu))
		if (m[1].length > 1)
			out.push(issue('repeat-word', m.index, m.index + m[0].length, m[0], [m[1]]));

	// run-on: two full clauses joined by a comma ("I like it, it is fun")
	for (const { start, end } of spans) {
		const s = text.slice(start, end);
		for (const m of s.matchAll(/,\s+(\p{L}+)\s+(\p{L}+)/gu)) {
			const before = s.slice(0, m.index);
			const word = m[1]!,
				next = m[2]!;
			const lead = before.toLowerCase().match(/\p{L}+(?:'\p{L}+)?/gu) ?? [];
			if (!SUBJECTS.has(word.toLowerCase()) || lead.length < 4) continue;
			if (SUBORDINATORS.has(lead[0] ?? '') || CONNECTORS.has(lead[0] ?? '')) continue;
			if (/^(think|believe|agree|feel|know)$/i.test(next) && lead.length < 6) continue;
			out.push(issue('run-on', start + m.index, start + m.index + 1, ',', ['. '], 'maybe'));
		}
	}

	return out;
}
