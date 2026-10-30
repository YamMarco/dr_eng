import type { CheckOptions, LengthReport } from './types';

/** Module C writing: required length (the default range). */
export const MIN_WORDS = 70;
export const MAX_WORDS = 90;

/** Official deduction tables by required range (content/rubrics/*.json):
 *  [from words, points off], taken off Content first; under `zeroBelow` the task scores 0. */
const TABLES: { min: number; max: number; zeroBelow: number; rows: [number, number][] }[] = [
	// Module C
	{
		min: 70,
		max: 90,
		zeroBelow: 25,
		rows: [
			[70, 0],
			[60, 1],
			[50, 3],
			[40, 6],
			[30, 10],
			[25, 15]
		]
	},
	// Module G
	{
		min: 120,
		max: 140,
		zeroBelow: 50,
		rows: [
			[120, 0],
			[110, 2],
			[100, 4],
			[90, 8],
			[80, 12],
			[70, 16],
			[60, 18],
			[50, 20]
		]
	}
];
/** A range with no official table (lesson tasks): no deduction, zero under 25. */
const ZERO_BELOW = 25;
/** Consecutive words shared with the source/prompt that make a sentence "copied". */
const COPY_RUN = 6;

export function tokens(text: string): string[] {
	return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w));
}

function normWords(text: string): string[] {
	return text.toLowerCase().match(/[\p{L}\p{N}]+(?:'[\p{L}]+)?/gu) ?? [];
}

function sentencesOf(text: string): string[] {
	return text.match(/[^.!?\n]+[.!?]*/g) ?? [];
}

function sharesRun(sentence: string, reference: string[]): boolean {
	const words = normWords(sentence);
	if (words.length < COPY_RUN) return false;
	const joined = ' ' + reference.join(' ') + ' ';
	for (let i = 0; i + COPY_RUN <= words.length; i++) {
		if (joined.includes(' ' + words.slice(i, i + COPY_RUN).join(' ') + ' ')) return true;
	}
	return false;
}

/** The whole sentence appears word for word in the reference (a copied question). */
function isCopiedWhole(sentence: string, reference: string[]): boolean {
	const words = normWords(sentence);
	return (
		words.length >= COPY_RUN &&
		(' ' + reference.join(' ') + ' ').includes(' ' + words.join(' ') + ' ')
	);
}

/** Word count the way the Ministry counts it: an instruction sentence copied
 *  word for word and substantial copied passage sentences do not count. Using
 *  the question inside your own sentence ("I think all pupils should...
 *  because...") does count. (A title or letter frame cannot be told apart from
 *  the essay here, so they are not removed.) */
export function countValidWords(text: string, opts: CheckOptions = {}): number {
	const prompt = opts.prompt ? normWords(opts.prompt) : [];
	const source = opts.source ? normWords(opts.source) : [];
	if (!prompt.length && !source.length) return tokens(text).length;
	return sentencesOf(text)
		.filter((s) => !isCopiedWhole(s, prompt) && !sharesRun(s, source))
		.reduce((sum, s) => sum + tokens(s).length, 0);
}

export function lengthReport(text: string, opts: CheckOptions = {}): LengthReport {
	const typed = tokens(text).length;
	const valid = countValidWords(text, opts);
	const { min, max } = opts.range ?? { min: MIN_WORDS, max: MAX_WORDS };
	const table = TABLES.find((t) => t.min === min && t.max === max);
	const zero = valid < (table?.zeroBelow ?? ZERO_BELOW);
	const deduction = zero || !table ? 0 : (table.rows.find(([from]) => valid >= from)?.[1] ?? 0);
	return {
		valid,
		typed,
		deduction,
		zero,
		status: valid < min ? 'short' : valid > max ? 'long' : 'ok',
		min,
		max
	};
}
