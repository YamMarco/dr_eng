// One lesson "part" (a path node) is just an ordered list of these screens.
// Each variant here has exactly one matching component in registry.ts — to
// add a new exercise type: add the shape here, write the component, register
// it. Nothing else in the app needs to change.

export type PrefaceScreen = { type: 'preface'; text: string };

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

export type LessonScreen =
	| PrefaceScreen
	| StepsScreen
	| SummaryScreen
	| McqScreen
	| MarkWordScreen
	| TimedReadingScreen
	| QuestionPreviewScreen
	| TimeResultScreen
	| TimeComparisonScreen
	| TimedPassageScreen
	| PassageQuizScreen;

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
		case 'question-preview':
			return screen.prompts.length === 0;
		case 'timed-passage':
		case 'passage-quiz':
			return !screen.text.trim() || screen.questions.length === 0;
		case 'time-result':
		case 'time-comparison':
			return false;
	}
}
