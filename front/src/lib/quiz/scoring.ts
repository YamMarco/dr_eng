// Pure scoring - no components, no Svelte state. QuizRunner calls scoreQuiz
// once at submit time with the answers it collected.

import type { LessonScreen } from '$lib/lesson-screens/types';
import { isMarkAllPass, MATCH_PAIRS_MAX_MISTAKES } from '$lib/lesson-screens/types';
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

/** Score one screen's answer. `points` is currently the only scoring mode
 *  (absolute, per-screen weight) - this switch is the extension point for
 *  rule-based/gradient scoring later. Screen types not listed here (teaching
 *  screens) score as 0/0/auto - they contribute nothing and are excluded from
 *  the report entirely. */
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
		case 'mark-word': {
			const points = screen.points ?? 1;
			const correct = userAnswer === screen.correctWordIndex;
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'cloze-pick': {
			const points = screen.points ?? 1;
			const correct = typeof userAnswer === 'number' && screen.correctIndices.includes(userAnswer);
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'spell-word': {
			const points = screen.points ?? 1;
			const given = typeof userAnswer === 'string' ? normalize(userAnswer) : '';
			const correct = given.length > 0 && given === normalize(screen.word);
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'mark-all': {
			const points = screen.points ?? 1;
			const picked = Array.isArray(userAnswer) ? (userAnswer as number[]) : [];
			const correct = picked.length > 0 && isMarkAllPass(screen, picked);
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		case 'match-pairs': {
			const points = screen.points ?? 1;
			const correct = typeof userAnswer === 'number' && userAnswer <= MATCH_PAIRS_MAX_MISTAKES;
			return { earned: correct ? points : 0, max: points, auto: true };
		}
		// passage-mcq/passage-quiz: scoring is wired here, but PassageMcq.svelte/
		// PassageQuiz.svelte don't write a per-question answer into the quiz
		// answer slot yet (they're still lesson-style self-contained multi-
		// question screens) - authors should stick to plain `mcq`/
		// `sentence-completion` screens per paragraph in exams until that's done.
		case 'passage-mcq': {
			const answers =
				userAnswer && typeof userAnswer === 'object' ? (userAnswer as Record<number, number>) : {};
			let earned = 0;
			let max = 0;
			screen.questions.forEach((q, qi) => {
				const points = q.points ?? 1;
				max += points;
				if (answers[qi] === q.correctIndex) earned += points;
			});
			return { earned, max, auto: true };
		}
		case 'passage-quiz': {
			const answers =
				userAnswer && typeof userAnswer === 'object' ? (userAnswer as Record<number, string>) : {};
			let earned = 0;
			let max = 0;
			screen.questions.forEach((q, qi) => {
				const points = q.points ?? 1;
				max += points;
				const given = typeof answers[qi] === 'string' ? normalize(answers[qi]) : '';
				if (given.length > 0 && q.keywords.every((k) => given.includes(k.toLowerCase()))) {
					earned += points;
				}
			});
			return { earned, max, auto: true };
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
