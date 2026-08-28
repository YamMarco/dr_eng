// Tracks how many of the questions the student answered correctly out of the
// part's total question count — shared via context so any question-type
// screen (mcq, mark-word, timed-passage, ...) can record onto it.
//
// `total` is fixed upfront by the runner (see countQuestions in types.ts), so
// the badge reads e.g. 1/3, 1/3, 2/3 as questions are answered — never a
// growing denominator like 1/1, 1/2, 2/3.
//
// getContext/setContext only work during a component's synchronous init, not
// from inside a later event handler — so every consumer must call
// getLessonScore() once at the top of its script (like getLessonSession())
// and hang onto the returned object, then mutate it directly (or via
// recordAnswer) whenever an answer is checked.

import { getContext, setContext } from 'svelte';

const KEY = Symbol('lesson-score');

export type LessonScore = { correct: number; total: number };

export function createLessonScore(total: number): LessonScore {
	const score = $state<LessonScore>({ correct: 0, total });
	setContext(KEY, score);
	return score;
}

export function getLessonScore(): LessonScore {
	const score = getContext<LessonScore>(KEY);
	if (!score) throw new Error('getLessonScore() called outside a LessonRunner');
	return score;
}

export function recordAnswer(score: LessonScore, correct: boolean) {
	if (correct) score.correct += 1;
}
