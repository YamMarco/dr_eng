// Builds one deck item; the id is the word in kebab case (the progress key).
import type { DeckWord, WordPos } from '$lib/deck/types';

export const w = (
	word: string,
	pos: WordPos,
	defEn: string,
	he: string,
	exampleEn: string
): DeckWord => ({
	id: word
		.toLowerCase()
		.replace(/[^a-z]+/g, '-')
		.replace(/^-|-$/g, ''),
	word,
	pos,
	defEn,
	he,
	exampleEn
});
