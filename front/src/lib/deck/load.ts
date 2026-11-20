// A module's words, loaded when the words page opens: the shell has only the word ids
// (index.ts). Add a new list here and to DECK_FILES in scripts/lesson-meta.mjs
// (tests/lesson-meta.test.ts checks they agree).
import type { Language } from '$lib/i18n/index.svelte';
import { getDecks, type DeckWithWords } from './index';
import type { DeckWord } from './types';

/** Deck id -> its words. */
export const DECK_FILES: Record<string, () => Promise<DeckWord[]>> = {
	'e-a': () => import('$lib/content/e/list-a').then((m) => m.listA),
	'e-b': () => import('$lib/content/e/list-b').then((m) => m.listB),
	'e-c': () => import('$lib/content/e/list-c').then((m) => m.listC),
	'e-d': () => import('$lib/content/e/list-d').then((m) => m.listD)
};

/** Meanings in other UI languages, by word id (Hebrew is `he` itself). */
export type Glosses = Partial<Record<Language, Record<string, string>>>;

const GLOSSES: Record<string, () => Promise<Glosses>> = {
	e: () => import('$lib/content/e/words.ar').then((m) => ({ ar: m.eGlossAr }))
};

/** A module's lists with their words and glosses, or undefined when it has no deck. */
export async function loadDecks(
	moduleId: string
): Promise<{ decks: DeckWithWords[]; glosses: Glosses } | undefined> {
	const decks = getDecks(moduleId);
	if (!decks) return undefined;
	const [words, glosses] = await Promise.all([
		Promise.all(decks.map((d) => DECK_FILES[d.id]())),
		GLOSSES[moduleId]?.() ?? {}
	]);
	return { decks: decks.map((d, i) => ({ ...d, words: words[i] })), glosses };
}

/** The words with `he` holding the meaning in the UI language (falls back to
 *  Hebrew per word), so the session builder stays language-agnostic. */
export function localizeDeck(words: DeckWord[], glosses: Glosses, language: Language): DeckWord[] {
	const table = glosses[language];
	return table ? words.map((w) => ({ ...w, he: table[w.id] ?? w.he })) : words;
}
