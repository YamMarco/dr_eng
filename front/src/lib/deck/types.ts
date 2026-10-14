// Shapes for the spaced-repetition word deck (Module E, Part II vocabulary).
// See docs/modules/module-e.md.

/** Word class. The exam groups each matching set by class, so distractors must share it. */
export type WordPos = 'verb' | 'noun' | 'adj' | 'adv' | 'chunk' | 'other';

export type DeckWord = {
	/** Unique in its deck; the progress key. */
	id: string;
	/** As the exam prints it: `acquire`, `burst into tears`. */
	word: string;
	pos: WordPos;
	/** Exam-style English definition. */
	defEn: string;
	he: string;
	/** One sentence with the word in `**bold**`. When the bold part is exactly `word`, it also feeds the fill-the-blank screen. */
	exampleEn: string;
	hookHe?: string;
};

/** Leitner box 1-5 and the day the word is next due (YYYY-MM-DD, local). */
export type WordState = { box: number; due: string; lapses: number };

export type DeckProgress = Record<string, WordState>;
