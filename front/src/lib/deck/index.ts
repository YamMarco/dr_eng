// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/app/unit/[unitId]/module/[moduleId]/words).
// Module E has one deck per Ministry list (Band III Core I, A-D); all four are tested.
// The shell holds only each list's word ids (generated, scripts/lesson-meta.mjs); the words
// themselves load on the words page (load.ts).
import { deckProgress } from './deckProgress.svelte';
import { deckMeta } from './meta.generated';
import { dayKey, dueWords } from './scheduler';
import { MAX_REVIEWS, NEW_PER_SESSION } from './session';
import type { DeckWord } from './types';

/** One list: `id` is its progress key, `letter` labels it, `wordIds` its words' ids. */
export type Deck = {
	id: string;
	letter: string;
	wordIds: string[];
};

/** A list with its words (loaded, see load.ts). */
export type DeckWithWords = Deck & { words: DeckWord[] };

// Progress saved before the split was keyed by module; each word joins every list it is in.
deckProgress.migrate('e', deckMeta.e);

export function getDecks(moduleId: string): Deck[] | undefined {
	return deckMeta[moduleId];
}

/** Today's session size for one list: reviews first, new words only while
 *  reviews leave room. Reactive: call from $derived. */
export function deckToday(deck: Deck): { reviews: number; fresh: number } {
	const progress = deckProgress.get(deck.id);
	const due = dueWords(progress, dayKey(new Date())).length;
	const unseen = deck.wordIds.filter((id) => !progress[id]).length;
	return {
		reviews: Math.min(due, MAX_REVIEWS),
		fresh: due >= MAX_REVIEWS ? 0 : Math.min(NEW_PER_SESSION, unseen)
	};
}

/** A word is won once it was answered right after its first meeting (box 2+). */
const WON_BOX = 2;
/** Step of the encouragement bar: the student chases the next 50, never the whole list. */
const MILESTONE = 50;

/** The next round number above n - the bar's target, so the full list size stays hidden. */
export function nextMilestone(n: number): number {
	return (Math.floor(n / MILESTONE) + 1) * MILESTONE;
}

/** Words met and words won in one list. Reactive: call from $derived. */
export function deckStats(deck: Deck): { seen: number; won: number; total: number } {
	const progress = deckProgress.get(deck.id);
	return {
		seen: deck.wordIds.filter((id) => progress[id]).length,
		won: deck.wordIds.filter((id) => (progress[id]?.box ?? 0) >= WON_BOX).length,
		total: deck.wordIds.length
	};
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

/** Words won across a module's lists. Reactive: call from $derived. */
export function moduleWon(moduleId: string): number {
	return (getDecks(moduleId) ?? []).reduce((sum, d) => sum + deckStats(d).won, 0);
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
