// The 24h exam lock (quiz/retake, used by server/examLock) and the exam's grading parts
// (quiz/examParts): the only parts /api/grade accepts for an exam.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RETAKE_WAIT_MS, examLocked } from '../src/lib/quiz/retake.ts';
import { examParts } from '../src/lib/quiz/examParts.ts';
import { cQuizzes } from '../src/lib/quiz/c/index.ts';
import { eQuizzes } from '../src/lib/quiz/e/index.ts';
import { gQuizzes } from '../src/lib/quiz/g/index.ts';
import type { QuizNode } from '../src/lib/quiz/types.ts';

const now = Date.parse('2026-11-13T12:00:00Z');
const ago = (ms: number) => new Date(now - ms);
const HOUR = 3_600_000;

test('no stored attempt: open', () => {
	assert.equal(examLocked(undefined, 2, now), false);
});

test('a done attempt locks another one for 24h, then opens', () => {
	const row = { attempt: 1, startedAt: ago(HOUR), doneAt: ago(HOUR) };
	assert.equal(examLocked(row, 2, now), true);
	assert.equal(examLocked({ ...row, doneAt: ago(RETAKE_WAIT_MS + 1) }, 2, now), false);
});

test('the same attempt is never locked: a retry of its failed parts', () => {
	assert.equal(examLocked({ attempt: 1, startedAt: ago(HOUR), doneAt: ago(HOUR) }, 1, now), false);
	assert.equal(examLocked({ attempt: 1, startedAt: ago(HOUR), doneAt: null }, 1, now), false);
});

test('an attempt that never finished locks from its first graded part', () => {
	// a part held back (or failing) can't dodge the lock with a new attempt
	const partial = { attempt: 1, startedAt: ago(HOUR), doneAt: null };
	assert.equal(examLocked(partial, 2, now), true);
	assert.equal(examLocked({ ...partial, startedAt: ago(RETAKE_WAIT_MS + 1) }, 2, now), false);
});

test('an attempt with nothing graded (every part failed) locks nothing', () => {
	assert.equal(examLocked({ attempt: 1, startedAt: null, doneAt: null }, 2, now), false);
});

test('every exam has its parts: a reading part per passage with open answers, the essay alone', () => {
	const quizzes: QuizNode[] = [...cQuizzes, ...eQuizzes, ...gQuizzes];
	assert.ok(quizzes.length > 0);
	for (const quiz of quizzes) {
		const parts = examParts(quiz);
		const essays = [...parts.values()].filter((k) => k === 'essay').length;
		const writing = quiz.parts.some((p) =>
			p.screens.some((s) => s.type === 'writing-task' && s.minWords !== undefined)
		);
		assert.equal(essays > 0, writing, `${quiz.id}: essay part`);
		assert.ok(parts.size <= 8, `${quiz.id}: at most 8 parts (the server's cap)`);
		for (const [id, kind] of parts)
			if (kind === 'reading')
				assert.ok(
					quiz.parts.some((p) => p.id === id),
					`${quiz.id}: reading part ${id} is a part id`
				);
	}
});
