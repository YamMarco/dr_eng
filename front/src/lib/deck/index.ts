// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/app/unit/[unitId]/module/[moduleId]/words).
import { eWords } from '$lib/content/e/words';
import { eGlossAr } from '$lib/content/e/words.ar';
import type { Language } from '$lib/i18n/index.svelte';
import { deckProgress } from './deckProgress.svelte';
import { dayKey, dueWords } from './scheduler';
import { MAX_REVIEWS, NEW_PER_SESSION } from './session';
import type { DeckWord } from './types';

export const decks: Record<string, DeckWord[]> = { e: eWords };

export function getDeck(moduleId: string): DeckWord[] | undefined {
	return decks[moduleId];
}

/** Each deck's meanings in other UI languages, by word id (Hebrew is `he` itself). */
const glosses: Record<string, Partial<Record<Language, Record<string, string>>>> = {
	e: { ar: eGlossAr }
};

/** The deck with `he` holding the meaning in the UI language (falls back to
 *  Hebrew per word), so the session builder stays language-agnostic. */
export function localizeDeck(moduleId: string, words: DeckWord[], language: Language): DeckWord[] {
	const table = glosses[moduleId]?.[language];
	return table ? words.map((w) => ({ ...w, he: table[w.id] ?? w.he })) : words;
}

/** Words due for review today. Reactive: call from $derived. */
export function dueToday(moduleId: string): number {
	return dueWords(deckProgress.get(moduleId), dayKey(new Date())).length;
}

/** How far a module's word deck has come: words met so far out of all of them.
 *  Reactive: call from $derived. */
export function deckStats(moduleId: string): { seen: number; total: number } {
	const deck = getDeck(moduleId) ?? [];
	const progress = deckProgress.get(moduleId);
	return { seen: deck.filter((w) => progress[w.id]).length, total: deck.length };
}

/** Today's session size: reviews first, new words only while reviews leave room.
 *  Reactive: call from $derived. */
export function deckToday(moduleId: string): { reviews: number; fresh: number } {
	const progress = deckProgress.get(moduleId);
	const due = dueToday(moduleId);
	const unseen = (getDeck(moduleId) ?? []).filter((w) => !progress[w.id]).length;
	return {
		reviews: Math.min(due, MAX_REVIEWS),
		fresh: due >= MAX_REVIEWS ? 0 : Math.min(NEW_PER_SESSION, unseen)
	};
}
