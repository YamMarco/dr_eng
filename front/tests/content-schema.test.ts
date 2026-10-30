// Generated literature content matches the zod schemas (strict: no unknown fields).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lessonScreenSchema } from '../src/lib/lesson-screens/schema.ts';
import type { LessonNode } from '../src/lib/content/types.ts';
import { d1Lessons } from '../src/lib/content/d/d-1.ts';
import { d2Lessons } from '../src/lib/content/d/d-2.ts';
import { d3Lessons } from '../src/lib/content/d/d-3.ts';
import { d4Lessons } from '../src/lib/content/d/d-4.ts';
import { d5Lessons } from '../src/lib/content/d/d-5.ts';

const lessons: LessonNode[] = [
	...d1Lessons,
	...d2Lessons,
	...d3Lessons,
	...d4Lessons,
	...d5Lessons
];

test('every literature screen passes the schema', () => {
	const bad: string[] = [];
	for (const lesson of lessons)
		for (const screen of [
			...lesson.content.preface,
			...lesson.content.rounds.flatMap((r) => r.screens)
		]) {
			const r = lessonScreenSchema.safeParse(screen);
			if (!r.success)
				bad.push(
					`${lesson.id} ${screen.type}: ${r.error.issues[0].message} at ${r.error.issues[0].path.join('.')}`
				);
		}
	assert.deepEqual(bad, []);
});

test('literature mcqs: one right answer, feedback on every wrong option', () => {
	for (const lesson of lessons)
		for (const screen of lesson.content.rounds.flatMap((r) => r.screens))
			if (screen.type === 'mcq')
				screen.options.forEach((o, i) =>
					assert.equal(
						typeof o === 'string',
						i === screen.correctIndex,
						`${lesson.id}: ${screen.prompt}`
					)
				);
});
