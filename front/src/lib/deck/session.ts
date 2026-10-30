// Turns due and new words into one playable list of lesson screens.
// Pure: words, progress and the day go in; screens come out, plus `targets`
// (the word ids each screen grades, aligned with `screens`) so the deck page
// can feed every answer back to the scheduler. Kept beside the screens, not in
// the screen schema, which stays content-only.
//
// New words follow Module C's vocab pattern, two at a time: card -> meaning
// question -> copy-spelling, then match-pairs of everything met so far.
// Reviews get harder as a word climbs the boxes, ending in the exam's own
// format (match 3 of 6 items to definitions).
import type { LessonScreen } from '$lib/lesson-screens/types';
import { dueWords } from './scheduler.ts';
import type { DeckProgress, DeckWord } from './types';

export const NEW_PER_SESSION = 6;
export const MAX_REVIEWS = 15;
/** From this box on, a word is reviewed in the exam format. */
export const EXAM_BOX = 3;

export type DeckSession = { screens: LessonScreen[]; targets: string[][] };

type Rng = () => number;

function shuffle<T>(items: T[], random: Rng): T[] {
	const a = [...items];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

const BOLD = /\*\*(.+?)\*\*/;

/** The example sentence with the word blanked, when the bold part is exactly the word. */
export function blankedExample(word: DeckWord): string | undefined {
	const bold = word.exampleEn.match(BOLD)?.[1];
	if (!bold || bold.toLowerCase() !== word.word.toLowerCase()) return undefined;
	return word.exampleEn.replace(BOLD, '______');
}

/** Two words that would make a matching item ambiguous: one's headword shows up in the other's definition. */
export function clashes(a: DeckWord, b: DeckWord): boolean {
	return (
		b.defEn.toLowerCase().includes(a.word.toLowerCase()) ||
		a.defEn.toLowerCase().includes(b.word.toLowerCase())
	);
}

/** The word as the exam prints it: `to wrap`, `an idiom`, `reliable`, `to mix up`. */
export function printed(word: DeckWord): string {
	if (word.form) return word.form;
	if (word.pos === 'verb') return `to ${word.word}`;
	if (word.pos === 'noun') return `${/^[aeiou]/i.test(word.word) ? 'an' : 'a'} ${word.word}`;
	return word.word;
}

/** The exam's set class: the part of speech, with phrasal chunks (`to give up`)
 *  apart from the others (`at least`), since the printed `to` tells them apart. */
export function wordClass(word: DeckWord): string {
	return word.pos === 'chunk' && printed(word).startsWith('to ') ? 'phrasal' : word.pos;
}

/**
 * `n` decoys for `targets`: same class first, then (unless `strict`) any class.
 * Only words from `pool` (already met - a word is never a decoy before its
 * card), unless the pool is too small. Strict decoys can come up short.
 */
function decoys(
	targets: DeckWord[],
	pool: DeckWord[],
	all: DeckWord[],
	n: number,
	random: Rng,
	strict = false
): DeckWord[] {
	const classes = new Set(targets.map(wordClass));
	const ok = (w: DeckWord) => !targets.some((t) => t.id === w.id || t.he === w.he || clashes(t, w));
	const out: DeckWord[] = [];
	for (const source of [pool, all]) {
		const fresh = shuffle(source.filter(ok), random).filter((w) => !out.includes(w));
		const same = fresh.filter((w) => classes.has(wordClass(w)));
		for (const w of strict ? same : [...same, ...fresh]) {
			if (out.length === n) return out;
			if (!out.includes(w)) out.push(w);
		}
	}
	return out;
}

function explanation(word: DeckWord): string {
	return `**${printed(word)}** = ${word.he}\n{p:text}${word.defEn}`;
}

/** The question lines above each mcq, in the UI language - passed in so this
 *  module stays pure (no i18n store). */
export type DeckPrompts = { meaning: string; context: string; definition: string };

function meaningMcq(word: DeckWord, all: DeckWord[], random: Rng, p: DeckPrompts): LessonScreen {
	// Hebrew options: no English decoy is shown, so any word may supply one.
	const options = shuffle([word, ...decoys([word], all, all, 3, random)], random);
	return {
		type: 'mcq',
		prompt: `${p.meaning}\n\n{p:text}{a:center}## ${printed(word)}`,
		options: options.map((w) => w.he),
		correctIndex: options.indexOf(word),
		explanation: explanation(word)
	};
}

// English options: other classes only when the class is too small, since the
// printed form (`to`, `a`) would give the answer away.
function wordMcq(word: DeckWord, prompt: string, pool: DeckWord[], all: DeckWord[], random: Rng) {
	const same = decoys([word], pool, all, 3, random, true);
	const rest = decoys([word, ...same], pool, all, 3 - same.length, random);
	const options = shuffle([word, ...same, ...rest], random);
	const screen: LessonScreen = {
		type: 'mcq',
		prompt,
		options: options.map(printed),
		correctIndex: options.indexOf(word),
		layout: 'honeycomb',
		explanation: explanation(word)
	};
	return screen;
}

function contextMcq(
	word: DeckWord,
	pool: DeckWord[],
	all: DeckWord[],
	random: Rng,
	p: DeckPrompts
) {
	const sentence = blankedExample(word);
	if (!sentence) return definitionMcq(word, pool, all, random, p);
	return wordMcq(word, `${p.context}\n\n{p:text}${sentence}`, pool, all, random);
}

function definitionMcq(
	word: DeckWord,
	pool: DeckWord[],
	all: DeckWord[],
	random: Rng,
	p: DeckPrompts
) {
	return wordMcq(word, `${p.definition}\n\n{p:text}${word.defEn}`, pool, all, random);
}

/** The exam's Part II item: 6 numbered items of one class, definitions for the
 *  targets only. Undefined when the class has too few words for the decoys. */
function matchDefinitions(
	targets: DeckWord[],
	pool: DeckWord[],
	all: DeckWord[],
	random: Rng
): LessonScreen | undefined {
	const extra = decoys(targets, pool, all, 6 - targets.length, random, true);
	if (targets.length + extra.length < 6) return undefined;
	const items = shuffle([...targets, ...extra], random);
	return {
		type: 'match-definitions',
		items: items.map(printed),
		definitions: targets.map((t) => ({ text: t.defEn, itemIndex: items.indexOf(t) }))
	};
}

function spellable(word: DeckWord): boolean {
	return /^[a-z' -]+$/i.test(word.word);
}

export function buildSession(
	words: DeckWord[],
	progress: DeckProgress,
	today: string,
	{
		random = Math.random,
		extra = false,
		prompts = { meaning: '', context: '', definition: '' }
	}: { random?: Rng; extra?: boolean; prompts?: DeckPrompts } = {}
): DeckSession {
	const byId = new Map(words.map((w) => [w.id, w]));
	const seen = words.filter((w) => progress[w.id]);
	// `extra`: nothing is due, practice the soonest-due words anyway.
	const reviewIds = extra
		? Object.keys(progress).sort((a, b) => progress[a].due.localeCompare(progress[b].due))
		: dueWords(progress, today);
	const reviews = reviewIds
		.map((id) => byId.get(id))
		.filter((w): w is DeckWord => !!w)
		.slice(0, MAX_REVIEWS);
	const fresh =
		extra || reviews.length >= MAX_REVIEWS
			? []
			: words.filter((w) => !progress[w.id]).slice(0, NEW_PER_SESSION);

	const screens: LessonScreen[] = [];
	const targets: string[][] = [];
	const add = (screen: LessonScreen, ids: string[] = []) => {
		screens.push(screen);
		targets.push(ids);
	};

	// Reviews: single questions shuffled, then the exam-format sets, each of one
	// class like the exam (leftovers and too-small classes go single).
	const examWords = reviews.filter((w) => progress[w.id].box >= EXAM_BOX);
	const sets: { words: DeckWord[]; screen: LessonScreen }[] = [];
	for (const cls of new Set(examWords.map(wordClass))) {
		const group = examWords.filter((w) => wordClass(w) === cls);
		for (let i = 0; i + 3 <= group.length; i += 3) {
			const set = group.slice(i, i + 3);
			const screen = matchDefinitions(set, seen, words, random);
			if (screen) sets.push({ words: set, screen });
		}
	}
	const inSets = new Set(sets.flatMap((s) => s.words));
	const singles = shuffle(
		reviews.filter((w) => !inSets.has(w)),
		random
	);
	for (const w of singles) {
		const box = progress[w.id].box;
		const screen =
			box <= 1
				? meaningMcq(w, words, random, prompts)
				: box === 2
					? contextMcq(w, seen, words, random, prompts)
					: definitionMcq(w, seen, words, random, prompts);
		add(screen, [w.id]);
	}
	for (const set of sets)
		add(
			set.screen,
			set.words.map((w) => w.id)
		);

	// New words, two at a time.
	const met: DeckWord[] = [];
	for (let i = 0; i < fresh.length; i += 2) {
		for (const w of fresh.slice(i, i + 2)) {
			add({
				type: 'word-card',
				word: printed(w),
				translationHe: w.he,
				definitionEn: w.defEn,
				exampleEn: w.exampleEn,
				hookHe: w.hookHe
			});
			add(meaningMcq(w, words, random, prompts), [w.id]);
			if (spellable(w)) add({ type: 'spell-word', word: w.word, mode: 'copy' });
			met.push(w);
		}
		if (met.length >= 2)
			add({
				type: 'match-pairs',
				pairs: shuffle(met, random)
					.slice(0, 5)
					.map((w) => ({ en: printed(w), he: w.he }))
			});
	}

	return { screens, targets };
}

/** One result per word: a word answered more than once counts as right only if every answer was. */
export function wordResults(
	targets: string[][],
	results: Record<number, boolean[]>
): Record<string, boolean> {
	const out: Record<string, boolean> = {};
	for (const [index, answers] of Object.entries(results)) {
		const ids = targets[Number(index)] ?? [];
		// A screen grading one word may log one answer; a set logs one per definition.
		ids.forEach((id, k) => {
			const answer = ids.length === 1 ? answers.every(Boolean) : answers[k];
			if (answer === undefined) return;
			out[id] = (out[id] ?? true) && answer;
		});
	}
	return out;
}
