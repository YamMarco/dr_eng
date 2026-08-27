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

/** Shows the elapsed time recorded under `timerKey` by an earlier timed-reading screen. */
export type TimeResultScreen = { type: 'time-result'; label: string; timerKey: string };

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
	| TimeComparisonScreen;
