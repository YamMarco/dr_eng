// One lesson "part" (a path node) is just an ordered list of these screens.
// Each variant here has exactly one matching component in registry.ts — to
// add a new exercise type: add the shape here, write the component, register
// it. Nothing else in the app needs to change.

export type PrefaceScreen = { type: 'preface'; text: string; dir?: 'rtl' | 'ltr' };

export type StepsScreen = { type: 'steps'; steps: string[] };

export type SummaryScreen = { type: 'summary'; title: string; lines: string[] };

export type McqScreen = { type: 'mcq'; prompt: string; options: string[]; correctIndex: number };

/** Tap the question word inside a sentence. */
export type MarkWordScreen = {
	type: 'mark-word';
	sentence: string;
	correctWordIndex: number;
	dir?: 'rtl' | 'ltr';
};

/**
 * Shows a text while a stopwatch runs; records elapsed ms into the lesson
 * session under `timerKey` so a later time-result / time-comparison screen
 * can read it back.
 */
export type TimedReadingScreen = {
	type: 'timed-reading';
	label: string;
	text: string;
	timerKey: string;
};

/** A list of question prompts to read (no options yet) — priming before a text. */
export type QuestionPreviewScreen = { type: 'question-preview'; intro: string; prompts: string[] };

/**
 * A text and its questions together on one screen, with a stopwatch running
 * while it's unanswered. One shared "submit" checks every question at once
 * and freezes the timer, recording the elapsed ms under `timerKey`.
 */
export type TimedPassageScreen = {
	type: 'timed-passage';
	label: string;
	text: string;
	timerKey: string;
	questions: { prompt: string; options: string[]; correctIndex: number }[];
};

/** Shows the elapsed time recorded under `timerKey` by an earlier timed-reading screen. */
export type TimeResultScreen = { type: 'time-result'; label: string; timerKey: string };

/**
 * A short-answer question: the student types an English answer instead of
 * picking one. Marked correct if every keyword appears (case-insensitive)
 * somewhere in what they typed — lenient on wording, not on content.
 */
export type PassageQuizQuestion = {
	prompt: string;
	/** All of these (lowercased) must appear in the answer for it to count. */
	keywords: string[];
	/** The exact correct-answer text shown after submitting. */
	answerHint: string;
	points?: number;
};

/** A text and several short-answer questions about it, no timer — a mini test. */
export type PassageQuizScreen = {
	type: 'passage-quiz';
	text: string;
	questions: PassageQuizQuestion[];
};

/** A text and multiple-choice questions about it, no timer — like timed-passage without the clock. */
export type PassageMcqScreen = {
	type: 'passage-mcq';
	text: string;
	questions: { prompt: string; options: string[]; correctIndex: number }[];
};

/**
 * Open-ended writing task, lightly auto-checked (not graded for real grammar):
 * enough sentences, each one capitalized and period-terminated, and enough
 * of the given word bank actually used. One overall right/wrong, no per-word
 * grading.
 */
export type WritingTaskScreen = {
	type: 'writing-task';
	prompt: string;
	wordBank: string[];
	minSentences: number;
	minWordsUsed: number;
};

/** Compares two previously-recorded timer values. */
export type TimeComparisonScreen = {
	type: 'time-comparison';
	aLabel: string;
	aKey: string;
	bLabel: string;
	bKey: string;
	fasterMessage: string;
	tieMessage: string;
};

/**
 * Introduces one word before quizzing on it — reusable across any lesson in
 * any module. Not scored: pure teaching, like preface/summary. Image and
 * audio are both placeholders for now (see WordCard.svelte).
 */
export type WordCardScreen = {
	type: 'word-card';
	word: string;
	translationHe?: string;
	/** Alt text for the (placeholder) image — falls back to the word itself. */
	imageAlt?: string;
};

/**
 * Type the word into a text input. `mode: 'copy'` shows the word to
 * transcribe; `mode: 'listen'` hides it behind a (not yet wired up) audio
 * button instead — a dictation exercise, ready for real audio later.
 */
export type SpellWordScreen = {
	type: 'spell-word';
	word: string;
	mode: 'copy' | 'listen';
};

/** A colour-coded bucket of things to mark (e.g. "names", "negatives"). */
export type MarkAllCategory = {
	name: string;
	/** A key into MARK_ALL_PALETTE (see markAllColors.ts). */
	color: string;
	/** Token positions belonging to this category. */
	indices: number[];
};

/**
 * Skim a whole paragraph and tap every "eye catcher" (numbers, names,
 * negatives, key words). The text is split on whitespace into tappable
 * tokens. `correctIndices` are the uncategorised targets; `categories` adds
 * optional colour-coded buckets on top (their `indices` also count as
 * targets). Multi-select, one shared submit. Scored leniently — see
 * MarkAll.svelte.
 */
export type MarkAllScreen = {
	type: 'mark-all';
	instruction: string;
	text: string;
	correctIndices: number[];
	/** Optional colour-coded buckets — for teaching what kinds of thing to look for. */
	categories?: MarkAllCategory[];
	dir?: 'rtl' | 'ltr';
	/** Optional scaffold: the words to hunt for, shown as chips above the text. */
	wordBank?: string[];
	/**
	 * Set to run a stopwatch while the student marks, recording the elapsed ms
	 * into the lesson session under this key — same contract as timed-passage,
	 * so a later time-result screen can read it back.
	 */
	timerKey?: string;
};

export type LessonScreen =
	| PrefaceScreen
	| StepsScreen
	| SummaryScreen
	| McqScreen
	| MarkWordScreen
	| MarkAllScreen
	| TimedReadingScreen
	| QuestionPreviewScreen
	| TimeResultScreen
	| TimeComparisonScreen
	| TimedPassageScreen
	| PassageQuizScreen
	| PassageMcqScreen
	| WritingTaskScreen
	| WordCardScreen
	| SpellWordScreen;

/**
 * A screen with no real content (e.g. a message left with empty text, or a
 * question with no options) is skipped by the runner instead of being shown
 * blank — lets a part's screens list be authored incrementally.
 */
export function isScreenEmpty(screen: LessonScreen): boolean {
	switch (screen.type) {
		case 'preface':
		case 'timed-reading':
			return !screen.text.trim();
		case 'steps':
			return screen.steps.length === 0;
		case 'summary':
			return screen.lines.length === 0;
		case 'mcq':
			return !screen.prompt.trim() || screen.options.length === 0;
		case 'mark-word':
			return !screen.sentence.trim();
		case 'mark-all':
			return (
				!screen.text.trim() ||
				(screen.correctIndices.length === 0 &&
					!(screen.categories ?? []).some((c) => c.indices.length > 0))
			);
		case 'question-preview':
			return screen.prompts.length === 0;
		case 'timed-passage':
		case 'passage-quiz':
		case 'passage-mcq':
			return !screen.text.trim() || screen.questions.length === 0;
		case 'writing-task':
			return !screen.prompt.trim();
		case 'word-card':
		case 'spell-word':
			return !screen.word.trim();
		case 'time-result':
		case 'time-comparison':
			return false;
	}
}

/** How many scored questions a screen contributes, for a fixed-denominator score badge. */
export function countQuestions(screen: LessonScreen): number {
	switch (screen.type) {
		case 'mcq':
		case 'mark-word':
		case 'mark-all':
			return 1;
		case 'timed-passage':
		case 'passage-quiz':
		case 'passage-mcq':
			return screen.questions.length;
		case 'writing-task':
		case 'spell-word':
			return 1;
		default:
			return 0;
	}
}
