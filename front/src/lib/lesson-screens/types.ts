// One lesson "part" (a path node) is just an ordered list of these screens.
// Each variant here has exactly one matching component in registry.ts — to
// add a new exercise type: add the shape here, write the component, register
// it. Nothing else in the app needs to change.

export type PrefaceScreen = { type: 'preface'; text: string; dir?: 'rtl' | 'ltr' };

/** `ordered` numbers the steps; omitted/false keeps the plain card look. */
export type StepsScreen = { type: 'steps'; steps: string[]; ordered?: boolean };

export type SummaryScreen = { type: 'summary'; title: string; lines: string[] };

/**
 * `explanation` is the answer key: shown only after the student has checked,
 * so a practice question can teach why the answer is what it is.
 */
export type McqScreen = {
	type: 'mcq';
	prompt: string;
	options: string[];
	correctIndex: number;
	explanation?: string;
	/** 'honeycomb' fits a fill-the-blank vocab pick where every option is a
	 *  single word or short phrase — a stacked full-width row per option
	 *  (the default) reads oddly once options are that short. */
	layout?: 'rows' | 'honeycomb';
};

/** Tap the question word inside a sentence. */
export type MarkWordScreen = {
	type: 'mark-word';
	/** Optional instruction shown above the sentence (what to tap). */
	prompt?: string;
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

/**
 * A text and multiple-choice questions about it. Set `timerKey` to run a
 * stopwatch until the last question is checked, recording the elapsed ms into
 * the lesson session under that key (and showing `label` beside the clock).
 */
export type PassageMcqScreen = {
	type: 'passage-mcq';
	text: string;
	label?: string;
	timerKey?: string;
	questions: { prompt: string; options: string[]; correctIndex: number }[];
};

/**
 * Open-ended writing task, lightly auto-checked (not graded for real grammar):
 * enough sentences, each one capitalized and period-terminated, and enough
 * of the given word bank actually used. One overall right/wrong, no per-word
 * grading.
 *
 * `prompt` may contain `{sentences}` / `{words}`, replaced with the Hebrew
 * phrase for `minSentences` / `minWordsUsed` (e.g. "שני משפטים"), so the
 * question text never drifts from the actual rules.
 */
export type WritingTaskScreen = {
	type: 'writing-task';
	prompt: string;
	wordBank: string[];
	minSentences: number;
	minWordsUsed: number;
	/** Small slips (missing initial capital / final punctuation) forgiven across the whole answer. Default 1. */
	maxTypos?: number;
	/** A sentence not starting with a capital letter counts as a slip. Default true. */
	capitalIsError?: boolean;
};

/**
 * Fill-in-the-blank by picking a tile instead of typing: `clause` is the
 * fixed part of a sentence/phrase, `options` is a small fixed set of
 * candidates for the blank (some right, some decoys), and any option in
 * `correctIndices` counts. Scoring is a plain lookup, never fuzzy text
 * matching, which is the point — use this wherever the "free" part of an
 * answer is really a small closed set (e.g. a stance opener, a verb form, a
 * connector word), in any lesson, not just writing ones.
 */
export type ClozePickScreen = {
	type: 'cloze-pick';
	/** The fixed part of the sentence, appended after the picked tile, e.g. "schools should be open 5 days instead of six." */
	clause: string;
	/** Candidate tiles for the blank: correct answers mixed with decoys. */
	options: string[];
	/** Indices into `options` that count as correct — any one passes. */
	correctIndices: number[];
	explanation?: string;
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
	/** Site path of the picture (e.g. `/vocab-images/word-ab12.jpg`), 16:9. Placeholder when absent. */
	image?: string;
	/** Alt text for the image — falls back to the word itself. */
	imageAlt?: string;
	/** One memory hook (cognate, word family, sound-alike...), shown under the translation. */
	hookHe?: string;
	/** An exam-style sentence using the word. `**word**` bolds it (mini-markdown). */
	exampleEn?: string;
	exampleHe?: string;
};

/**
 * Match every English word to its Hebrew meaning by tapping one from each
 * column. Scored as one question: passes with at most one wrong tap (same
 * leniency spirit as mark-all). The right column is shuffled on each mount.
 */
export type MatchPairsScreen = {
	type: 'match-pairs';
	pairs: { en: string; he: string }[];
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
	 * into the lesson session under this key — same contract as passage-mcq's timerKey,
	 * so a later time-result screen can read it back.
	 */
	timerKey?: string;
};

/**
 * Free written answer with no marking: the student types, taps to reveal the
 * model answer, and compares. Never scored — the programme's YOUR TURN screens
 * are for learning, not grading. `minWords`/`maxWords` turn on a live word
 * counter (green inside the range) for the writing lessons.
 */
export type SelfCheckScreen = {
	type: 'self-check';
	prompt: string;
	/** Optional English passage shown above the prompt. */
	text?: string;
	modelAnswer: string;
	placeholder?: string;
	minWords?: number;
	maxWords?: number;
};

export type LessonScreen =
	| PrefaceScreen
	| StepsScreen
	| SummaryScreen
	| McqScreen
	| MarkWordScreen
	| ClozePickScreen
	| MarkAllScreen
	| TimedReadingScreen
	| QuestionPreviewScreen
	| TimeResultScreen
	| TimeComparisonScreen
	| PassageQuizScreen
	| PassageMcqScreen
	| WritingTaskScreen
	| WordCardScreen
	| SpellWordScreen
	| MatchPairsScreen
	| SelfCheckScreen;

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
		case 'cloze-pick':
			return !screen.clause.trim() || screen.options.length === 0;
		case 'mark-all':
			return (
				!screen.text.trim() ||
				(screen.correctIndices.length === 0 &&
					!(screen.categories ?? []).some((c) => c.indices.length > 0))
			);
		case 'question-preview':
			return screen.prompts.length === 0;
		case 'passage-quiz':
		case 'passage-mcq':
			return !screen.text.trim() || screen.questions.length === 0;
		case 'writing-task':
			return !screen.prompt.trim();
		case 'word-card':
		case 'spell-word':
			return !screen.word.trim();
		case 'self-check':
			return !screen.prompt.trim();
		case 'match-pairs':
			return screen.pairs.length < 2;
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
		case 'cloze-pick':
		case 'mark-all':
		case 'match-pairs':
			return 1;
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
