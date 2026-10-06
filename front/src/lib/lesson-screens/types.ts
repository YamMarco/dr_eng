// Lesson-screen types, derived from the zod schemas in schema.ts - the single
// source of truth for every screen's shape and field docs. Add or change a
// screen there, not here. Each variant has exactly one matching component in
// registry.ts.
import type * as z from 'zod';
import type * as s from './schema';

export type PrefaceScreen = z.infer<typeof s.prefaceSchema>;
export type StepsScreen = z.infer<typeof s.stepsSchema>;
export type SummaryScreen = z.infer<typeof s.summarySchema>;
export type McqScreen = z.infer<typeof s.mcqSchema>;
export type MarkWordScreen = z.infer<typeof s.markWordSchema>;
export type TimedReadingScreen = z.infer<typeof s.timedReadingSchema>;
export type QuestionPreviewScreen = z.infer<typeof s.questionPreviewSchema>;
export type TimeResultScreen = z.infer<typeof s.timeResultSchema>;
export type PassageQuizScreen = z.infer<typeof s.passageQuizSchema>;
export type PassageQuizQuestion = PassageQuizScreen['questions'][number];
export type PassageMcqScreen = z.infer<typeof s.passageMcqSchema>;
export type WritingTaskScreen = z.infer<typeof s.writingTaskSchema>;
export type ClozePickScreen = z.infer<typeof s.clozePickSchema>;
export type TimeComparisonScreen = z.infer<typeof s.timeComparisonSchema>;
export type WordCardScreen = z.infer<typeof s.wordCardSchema>;
export type MatchPairsScreen = z.infer<typeof s.matchPairsSchema>;
export type SpellWordScreen = z.infer<typeof s.spellWordSchema>;
export type MarkAllCategory = z.infer<typeof s.markAllCategorySchema>;
export type MarkAllScreen = z.infer<typeof s.markAllSchema>;
export type SelfCheckScreen = z.infer<typeof s.selfCheckSchema>;
export type PassageScreen = z.infer<typeof s.passageSchema>;
export type SentenceCompletionScreen = z.infer<typeof s.sentenceCompletionSchema>;
export type LessonScreen = z.infer<typeof s.lessonScreenSchema>;

/** A match-pairs attempt passes with at most this many wrong taps — shared by
 *  the live component (lesson mode) and the quiz scorer so both agree. */
export const MATCH_PAIRS_MAX_MISTAKES = 1;

/** Lenient pass rule shared by the live component (lesson mode) and the quiz
 *  scorer: skimming is about spotting most eye catchers fast, not a perfect
 *  sweep — pass on 70%+ of targets found with at most one stray tap. */
export function isMarkAllPass(screen: MarkAllScreen, picked: number[]): boolean {
	const targets = new Set([
		...screen.correctIndices,
		...(screen.categories ?? []).flatMap((c) => c.indices)
	]);
	let hits = 0;
	let wrong = 0;
	for (const i of picked) {
		if (targets.has(i)) hits += 1;
		else wrong += 1;
	}
	return wrong <= 1 && hits >= Math.ceil(targets.size * 0.7);
}


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
		case 'passage':
			return screen.paragraphs.length === 0;
		case 'sentence-completion':
			return !screen.before.trim() && !screen.after.trim();
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
		case 'sentence-completion':
			return 1;
		case 'passage':
			return 0;
		default:
			return 0;
	}
}
