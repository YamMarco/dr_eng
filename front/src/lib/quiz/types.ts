import type { LessonScreen } from '$lib/lesson-screens/types';

export interface QuizOptions {
	/** undefined -> no timer, no auto-submit. */
	durationMinutes?: number;
	/** Default: true if durationMinutes is set. */
	showTimer?: boolean;
	/** Minutes remaining at which the timer switches to its warning color. Default 5. */
	warnAtMinutes?: number;
	/** Shows a "זמן שנותר" text label next to the timer's digits. Default false (numbers only, more compact). */
	showTimerLabel?: boolean;
	/** Default false. */
	shuffleParts?: boolean;
	/** Default false. */
	shuffleWithinPart?: boolean;
	/** Default 0.6. Applied to the auto-graded score only (see scoring.ts). */
	passThreshold?: number;
	/** Can the student move to a previous screen? Default true. */
	allowBackWithinPart?: boolean;

	// Navigator (question-jump grid covering every screen in the quiz)
	/** Default true. */
	showNavigator?: boolean;
	/** Default 'numbers'. */
	navigatorStyle?: 'dots' | 'numbers';
	/** Default true -> jumping ahead of the current unanswered question is blocked. */
	allowSkip?: boolean;
}

export interface QuizPart {
	id: string;
	titleHe: string;
	instructionsHe?: string;
	/** For display only (e.g. "20 נק'") - screen-level `points` are the scoring source of truth. */
	points?: number;
	screens: LessonScreen[];
}

export type QuizKind = 'assorted' | 'ministry';

export interface QuizNode {
	/** Unique across the app, e.g. "c-quiz-3". */
	id: string;
	module: string;
	/** Same exam, different format - short id shaped `<module letter>-t-xxxx`,
	 *  alongside the readable `id` slug. Used by the exam list/routing layer
	 *  (see $lib/quizzes), not by anything content-related. */
	uuid: string;
	kind: QuizKind;
	/** Required when kind is 'ministry'. */
	year?: number;
	titleHe: string;
	titleEn?: string;
	descriptionHe?: string;
	options: QuizOptions;
	parts: QuizPart[];
}
