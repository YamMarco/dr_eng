// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/unit/[unitId]/module/[moduleId]/words).
import { eWords } from '$lib/content/e/words';
import { deckProgress } from './deckProgress.svelte';
import { dayKey, dueWords } from './scheduler';
import type { DeckWord } from './types';

export const decks: Record<string, DeckWord[]> = { e: eWords };

export function getDeck(moduleId: string): DeckWord[] | undefined {
	return decks[moduleId];
}

/** Words due for review today. Reactive: call from $derived. */
export function dueToday(moduleId: string): number {
	return dueWords(deckProgress.get(moduleId), dayKey(new Date())).length;
}
