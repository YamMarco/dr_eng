// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/unit/[unitId]/module/[moduleId]/words).
import { eWords } from '$lib/content/e/words';
import { deckProgress } from './deckProgress.svelte';
import { dayKey, dueWords } from './scheduler';
import { MAX_REVIEWS, NEW_PER_SESSION } from './session';
import type { DeckWord } from './types';

export const decks: Record<string, DeckWord[]> = { e: eWords };

export function getDeck(moduleId: string): DeckWord[] | undefined {
	return decks[moduleId];
}

/** Words due for review today. Reactive: call from $derived. */
export function dueToday(moduleId: string): number {
	return dueWords(deckProgress.get(moduleId), dayKey(new Date())).length;
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
