// Progress sync merges: two devices' copies of a key combine without losing work.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isSyncedKey, mergeItems } from '../src/lib/progressMerge.ts';

const item = (value: unknown, at = 0) => ({ value, at });

test('lesson rounds: the higher count per lesson, union of lessons', () => {
	const a = item({ c: { 'c-l01': 2, 'c-l02': 1 } });
	const b = item({ c: { 'c-l01': 1, 'c-l03': 1 }, reading: { 'r-1': 1 } });
	assert.deepEqual(mergeItems('lesson-progress', a, b).value, {
		c: { 'c-l01': 2, 'c-l02': 1, 'c-l03': 1 },
		reading: { 'r-1': 1 }
	});
});

test('deck: the later review per word', () => {
	const a = item({ e: { w1: { box: 3, due: '2026-10-20', lapses: 0 } } });
	const b = item({
		e: {
			w1: { box: 1, due: '2026-10-18', lapses: 1 },
			w2: { box: 2, due: '2026-10-19', lapses: 0 }
		}
	});
	const merged = mergeItems('deck-progress', a, b).value as Record<
		string,
		Record<string, { box: number }>
	>;
	assert.equal(merged.e.w1.box, 3);
	assert.equal(merged.e.w2.box, 2);
});

test('activity days and exam results: union, sorted', () => {
	assert.deepEqual(
		mergeItems(
			'activity-days',
			item(['2026-10-02', '2026-10-01']),
			item(['2026-10-03', '2026-10-01'])
		).value,
		['2026-10-01', '2026-10-02', '2026-10-03']
	);
	const results = mergeItems(
		'quiz:results:c-exam-4',
		item([{ at: 3, percent: 80 }]),
		item([
			{ at: 1, percent: 60 },
			{ at: 3, percent: 80 }
		])
	).value;
	assert.deepEqual(results, [
		{ at: 1, percent: 60 },
		{ at: 3, percent: 80 }
	]);
});

test('profile: the newer copy; replace overwrites', () => {
	assert.deepEqual(mergeItems('profile', item({ units: '4' }, 5), item({ units: '5' }, 9)).value, {
		units: '5'
	});
	assert.deepEqual(mergeItems('profile', item({ units: '4' }, 9), item({ units: '5' }, 5)).value, {
		units: '4'
	});
	assert.deepEqual(
		mergeItems('lesson-progress', item({ c: { x: 3 } }), { value: {}, at: 1, replace: true }).value,
		{}
	);
});

test('hostile shapes do not throw or pollute', () => {
	const evil = JSON.parse('{"__proto__": {"polluted": 1}, "c": "not an object"}');
	const merged = mergeItems('lesson-progress', item(evil), item({ c: { x: 1 } })).value as object;
	assert.equal(({} as Record<string, unknown>).polluted, undefined);
	assert.equal(Object.getPrototypeOf(merged), Object.prototype);
	mergeItems('deck-progress', item(null), item([1, 2]));
	mergeItems('quiz:results:x', item('str'), item(null));
});

test('only progress keys sync', () => {
	assert.ok(isSyncedKey('lesson-progress'));
	assert.ok(isSyncedKey('quiz:attempt:c-exam-4'));
	assert.ok(!isSyncedKey('quiz:progress:c-exam-4'));
	assert.ok(!isSyncedKey('theme-mode'));
	assert.ok(!isSyncedKey('quiz:attempt:../x'));
});
