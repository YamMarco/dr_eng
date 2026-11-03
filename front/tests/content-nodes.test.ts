// Every lesson node and exam passes the schemas /api/content-edit checks saves against,
// so the editor can always save what's already there.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lessonNodeSchema, quizNodeSchema } from '../src/lib/lesson-screens/schema.ts';
import { c1Lessons } from '../src/lib/content/c/c-1.ts';
import { c2Lessons } from '../src/lib/content/c/c-2.ts';
import { c3Lessons } from '../src/lib/content/c/c-3.ts';
import { d1Lessons } from '../src/lib/content/d/d-1.ts';
import { d2Lessons } from '../src/lib/content/d/d-2.ts';
import { d3Lessons } from '../src/lib/content/d/d-3.ts';
import { d4Lessons } from '../src/lib/content/d/d-4.ts';
import { d5Lessons } from '../src/lib/content/d/d-5.ts';
import { e1Lessons } from '../src/lib/content/e/e-1.ts';
import { f1Lessons } from '../src/lib/content/f/f-1.ts';
import { f2Lessons } from '../src/lib/content/f/f-2.ts';
import { f3Lessons } from '../src/lib/content/f/f-3.ts';
import { g1Lessons } from '../src/lib/content/g/g-1.ts';
import { g2Lessons } from '../src/lib/content/g/g-2.ts';
import { cobe1Lessons } from '../src/lib/content/cobe/cobe-1.ts';
import { cobe2Lessons } from '../src/lib/content/cobe/cobe-2.ts';
import { cobe3Lessons } from '../src/lib/content/cobe/cobe-3.ts';
import { cQuizzes } from '../src/lib/quiz/c/index.ts';
import { eQuizzes } from '../src/lib/quiz/e/index.ts';
import { gQuizzes } from '../src/lib/quiz/g/index.ts';

const issues = (r: {
	success: boolean;
	error?: { issues: { message: string; path: PropertyKey[] }[] };
}) =>
	r.success ? [] : r.error!.issues.slice(0, 2).map((i) => `${i.message} at ${i.path.join('.')}`);

test('every lesson node passes the save schema', () => {
	const lessons = [
		...c1Lessons,
		...c2Lessons,
		...c3Lessons,
		...d1Lessons,
		...d2Lessons,
		...d3Lessons,
		...d4Lessons,
		...d5Lessons,
		...e1Lessons,
		...f1Lessons,
		...f2Lessons,
		...f3Lessons,
		...g1Lessons,
		...g2Lessons,
		...cobe1Lessons,
		...cobe2Lessons,
		...cobe3Lessons
	];
	const bad = lessons.flatMap((l) =>
		issues(lessonNodeSchema.safeParse(l)).map((m) => `${l.id}: ${m}`)
	);
	assert.deepEqual(bad, []);
});

test('every exam passes the save schema', () => {
	const bad = [...cQuizzes, ...eQuizzes, ...gQuizzes].flatMap((q) =>
		issues(quizNodeSchema.safeParse(q)).map((m) => `${q.id}: ${m}`)
	);
	assert.deepEqual(bad, []);
});

test('a malformed node is refused', () => {
	assert.equal(
		lessonNodeSchema.safeParse({ ...c2Lessons[0], content: { preface: 'oops' } }).success,
		false
	);
});
