// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/app/unit/[unitId]/module/[moduleId]/words).
// Module E has one deck per Ministry list; each list belongs to an exam date.
import { listA } from '$lib/content/e/list-a';
import { listB } from '$lib/content/e/list-b';
import { listC } from '$lib/content/e/list-c';
import { listD } from '$lib/content/e/list-d';
import { eGlossAr } from '$lib/content/e/words.ar';
import type { Language } from '$lib/i18n/index.svelte';
import { deckProgress } from './deckProgress.svelte';
import { dayKey, dueWords } from './scheduler';
import { MAX_REVIEWS, NEW_PER_SESSION } from './session';
import type { DeckWord } from './types';

/** One list: `id` is its progress key, `letter` and the exam date label it. */
export type Deck = {
	id: string;
	letter: string;
	season: 'winter' | 'summer';
	year: number;
	words: DeckWord[];
};

export const decks: Record<string, Deck[]> = {
	e: [
		{ id: 'e-a', letter: 'A', season: 'winter', year: 2023, words: listA },
		{ id: 'e-b', letter: 'B', season: 'summer', year: 2023, words: listB },
		{ id: 'e-c', letter: 'C', season: 'winter', year: 2024, words: listC },
		{ id: 'e-d', letter: 'D', season: 'summer', year: 2024, words: listD }
	]
};

// Progress saved before the split was keyed by module; each word joins every list it is in.
deckProgress.migrate('e', decks.e);

export function getDecks(moduleId: string): Deck[] | undefined {
	return decks[moduleId];
}

/** Each module's meanings in other UI languages, by word id (Hebrew is `he` itself). */
const glosses: Record<string, Partial<Record<Language, Record<string, string>>>> = {
	e: { ar: eGlossAr }
};

/** The words with `he` holding the meaning in the UI language (falls back to
 *  Hebrew per word), so the session builder stays language-agnostic. */
export function localizeDeck(moduleId: string, words: DeckWord[], language: Language): DeckWord[] {
	const table = glosses[moduleId]?.[language];
	return table ? words.map((w) => ({ ...w, he: table[w.id] ?? w.he })) : words;
}

/** Today's session size for one list: reviews first, new words only while
 *  reviews leave room. Reactive: call from $derived. */
export function deckToday(deck: Deck): { reviews: number; fresh: number } {
	const progress = deckProgress.get(deck.id);
	const due = dueWords(progress, dayKey(new Date())).length;
	const unseen = deck.words.filter((w) => !progress[w.id]).length;
	return {
		reviews: Math.min(due, MAX_REVIEWS),
		fresh: due >= MAX_REVIEWS ? 0 : Math.min(NEW_PER_SESSION, unseen)
	};
}

/** Words met so far out of all of them, in one list. Reactive: call from $derived. */
export function deckStats(deck: Deck): { seen: number; total: number } {
	const progress = deckProgress.get(deck.id);
	return { seen: deck.words.filter((w) => progress[w.id]).length, total: deck.words.length };
}

/** The lists a student is working on: those started, or the first one before any. */
function activeDecks(moduleId: string): Deck[] {
	const all = getDecks(moduleId) ?? [];
	const started = all.filter((d) => deckStats(d).seen > 0);
	return started.length ? started : all.slice(0, 1);
}

/** Words due for review today across a module's lists. Reactive: call from $derived. */
export function dueToday(moduleId: string): number {
	return (getDecks(moduleId) ?? []).reduce(
		(sum, d) => sum + dueWords(deckProgress.get(d.id), dayKey(new Date())).length,
		0
	);
}

/** Words met out of all words, across a module's lists. Reactive: call from $derived. */
export function moduleDeckStats(moduleId: string): { seen: number; total: number } {
	return (getDecks(moduleId) ?? [])
		.map(deckStats)
		.reduce((a, b) => ({ seen: a.seen + b.seen, total: a.total + b.total }), { seen: 0, total: 0 });
}

/** Today's work across the lists in progress. Reactive: call from $derived. */
export function moduleDeckToday(moduleId: string): { reviews: number; fresh: number } {
	return activeDecks(moduleId)
		.map(deckToday)
		.reduce((a, b) => ({ reviews: a.reviews + b.reviews, fresh: a.fresh + b.fresh }), {
			reviews: 0,
			fresh: 0
		});
}
