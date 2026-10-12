// Word decks by module. A module listed here gets a "words" page and a
// dashboard link (see routes/unit/[unitId]/module/[moduleId]/words).
import { eWords } from '$lib/content/e/words';
import type { DeckWord } from './types';

export const decks: Record<string, DeckWord[]> = { e: eWords };

export function getDeck(moduleId: string): DeckWord[] | undefined {
	return decks[moduleId];
}
