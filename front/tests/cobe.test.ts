// COBE grading: the rubric data and the official deductions in code.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { gradeSpeaking, lengthPercentOff } from '../src/lib/feedback/speaking.ts';
import type { CobeRubric } from '../src/lib/content/rubrics/index.ts';

const rubric = JSON.parse(
	readFileSync(new URL('../src/lib/content/rubrics/cobe.json', import.meta.url), 'utf8')
) as CobeRubric;

const all = (band: 'high' | 'mid' | 'low' | 'none') => ({
	topic: band,
	delivery: band,
	vocabulary: band,
	language: band
});

test('rubric: weights add up to 100 at both levels, parts to 100 points', () => {
	for (const level of ['4', '5'] as const)
		assert.equal(
			rubric.levels[level].reduce((s, c) => s + c.weight, 0),
			100
		);
	assert.equal(
		rubric.parts.reduce((s, p) => s + p.points, 0),
		100
	);
});

test('length: under 20 s is 0 anywhere; Part B follows the deduction table', () => {
	assert.equal(lengthPercentOff(rubric, 'A', 19), 100);
	assert.equal(lengthPercentOff(rubric, 'A', 25), 0);
	assert.equal(lengthPercentOff(rubric, 'B', 30), 50);
	assert.equal(lengthPercentOff(rubric, 'B', 45), 20);
	assert.equal(lengthPercentOff(rubric, 'B', 60), 0);
	assert.equal(lengthPercentOff(rubric, 'B', 150), 0);
});

test('grade: weights by level, band midpoints, set and length deductions', () => {
	const input = { level: '4' as const, part: 'A' as const, points: 25, seconds: 70 };
	const top = gradeSpeaking(rubric, input, { bands: all('high'), answeredAll: true });
	// 88% of 15 / 2.5 / 5 / 2.5, each rounded to a half point.
	assert.deepEqual(top.criteria, { topic: 13, delivery: 2, vocabulary: 4.5, language: 2 });
	assert.equal(top.earned, 21.5);

	const oneQuestion = gradeSpeaking(rubric, input, { bands: all('high'), answeredAll: false });
	assert.equal(oneQuestion.criteria!.topic, 6.5);
	assert.equal(oneQuestion.criteria!.vocabulary, 4.5);

	const shortB = gradeSpeaking(
		rubric,
		{ ...input, part: 'B', seconds: 45 },
		{ bands: all('high'), answeredAll: true }
	);
	assert.equal(shortB.lengthPercentOff, 20);
	assert.equal(shortB.criteria!.topic, 10.5);

	const tooShort = gradeSpeaking(
		rubric,
		{ ...input, seconds: 10 },
		{ bands: all('high'), answeredAll: true }
	);
	assert.equal(tooShort.earned, 0);

	const five = gradeSpeaking(
		rubric,
		{ ...input, level: '5' },
		{ bands: all('high'), answeredAll: true }
	);
	// 5 points weighs delivery and language more (15% each).
	assert.equal(five.criteria!.delivery, 3.5);
});
