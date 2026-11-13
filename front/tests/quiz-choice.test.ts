// "Answer N of these" (quiz/choice.ts): which questions count.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnswered, pickCounted } from '../src/lib/quiz/choice.ts';

const ids = ['a-0', 'a-1', 'a-2'];
const counted = (answers: Record<string, unknown>, choose?: number) => [
	...pickCounted(ids, choose, answers)
];

test('answered: erased text, empty picks and null are no answer', () => {
	for (const v of [undefined, null, '', '  ', [], [null], {}]) assert.equal(isAnswered(v), false);
	for (const v of [0, 'x', [1], { 0: 2 }, { seconds: 30 }]) assert.equal(isAnswered(v), true);
});

test('no choose: every question counts', () => {
	assert.deepEqual(counted({}), ids);
});

test('more than N answered: the first N count', () => {
	assert.deepEqual(counted({ 'a-0': 'x', 'a-1': 'y', 'a-2': 'z' }, 2), ['a-0', 'a-1']);
	assert.deepEqual(counted({ 'a-1': 'y', 'a-2': 'z' }, 1), ['a-1']);
});

test('fewer than N answered: the first unanswered fill the slots (scored 0)', () => {
	assert.deepEqual(counted({ 'a-2': 'z' }, 2), ['a-2', 'a-0']);
	assert.deepEqual(counted({ 'a-0': ' ' }, 1), ['a-0']);
	assert.deepEqual(counted({}, 2), ['a-0', 'a-1']);
});
