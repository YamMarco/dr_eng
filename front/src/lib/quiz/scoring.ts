// Pure scoring - no components, no Svelte state. QuizRunner calls scoreQuiz
// once at submit time with the answers it collected.

import type { LessonScreen } from '$lib/lesson-screens/types';
import type { QuizNode } from './types';
import { screensWithIds } from './screenIds';

export type Scored = {
	earned: number;
	max: number;
	/** false -> not graded automatically; shown in the report's manual-review section instead. */
	auto: boolean;
};

export interface QuizScore {
	auto: { earned: number; max: number };
	manual: { max: number; items: { screenId: string; points: number }[] };
	byPart: Record<string, { earned: number; max: number; auto: boolean }>;
	/** Auto-graded score vs. options.passThreshold. Manual items aren't counted (no grader for them yet). */
	passed: boolean;
}

function normalize(value: string) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Score one screen's answer. Screen types not listed here (teaching screens,
 *  and any question type not yet wired into quiz mode) score as 0/0/auto -
 *  they contribute nothing and are excluded from the report entirely. */
export function scoreScreen(screen: LessonScreen, userAnswer: unknown): Scored {
	switch (screen.type) {
		case 'mcq': {
			const points = screen.points ?? 1;
			const correct = userAnswer === screen.correctIndex;
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'sentence-completion': {
			const points = screen.points ?? 1;
			const given = typeof userAnswer === 'string' ? normalize(userAnswer) : '';
			const correct = given.length > 0 && screen.modelAnswers.some((m) => normalize(m) === given);
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'writing-task':
			return { earned: 0, max: screen.points ?? 0, auto: false };
		case 'self-check':
			return { earned: 0, max: 0, auto: false };
		default:
			return { earned: 0, max: 0, auto: true };
	}
}

export function scoreQuiz(quiz: QuizNode, answers: Record<string, unknown>): QuizScore {
	const auto = { earned: 0, max: 0 };
	const manual: QuizScore['manual'] = { max: 0, items: [] };
	const byPart: QuizScore['byPart'] = {};

	for (const part of quiz.parts) {
		let partEarned = 0;
		let partMax = 0;
		let partHasManual = false;

		for (const { id, screen } of screensWithIds(part)) {
			const scored = scoreScreen(screen, answers[id]);
			// Teaching / not-yet-scorable screens: nothing to add or report.
			if (scored.auto && scored.max === 0 && scored.earned === 0) continue;

			partMax += scored.max;
			if (scored.auto) {
				auto.earned += scored.earned;
				auto.max += scored.max;
				partEarned += scored.earned;
			} else {
				manual.max += scored.max;
				manual.items.push({ screenId: id, points: scored.max });
				partHasManual = true;
			}
		}

		byPart[part.id] = { earned: partEarned, max: partMax, auto: !partHasManual };
	}

	const passThreshold = quiz.options.passThreshold ?? 0.6;
	const passed = auto.max === 0 || auto.earned / auto.max >= passThreshold;

	return { auto, manual, byPart, passed };
}
