// Builds one deck item; the id is the word in kebab case (the progress key).
// `form` overrides how the exam prints it (see DeckWord.form); `to` alone
// means "to" + the word, `-` means the bare word.
import type { DeckWord, WordPos } from '$lib/deck/types';

/** A word's id: kebab case, the progress key. */
export const wordId = (word: string) =>
	word
		.toLowerCase()
		.replace(/[^a-z]+/g, '-')
		.replace(/^-|-$/g, '');

export const w = (
	word: string,
	pos: WordPos,
	defEn: string,
	he: string,
	exampleEn: string,
	form?: 'to' | '-' | string
): DeckWord => ({
	id: wordId(word),
	word,
	pos,
	defEn,
	he,
	exampleEn,
	...(form && { form: form === 'to' ? `to ${word}` : form === '-' ? word : form })
});
