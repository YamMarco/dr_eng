// Plan catalogue: COBE bundles are priced from the base plan, never from the client.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COBE_ADDON, baseId, planById } from '../src/lib/plans.ts';

test('a bundle adds COBE_ADDON to its base plan', () => {
	const month = planById('group-month-cobe')!;
	assert.equal(month.price, planById('group-month')!.price + COBE_ADDON.month);
	assert.equal(month.months, 1);
	assert.equal(month.cobe, true);
	assert.equal(baseId(month), 'group-month');
	const year = planById('premium-year-cobe')!;
	assert.equal(year.price, planById('premium-year')!.price + COBE_ADDON.year);
});

test('no bundle of COBE itself, the free tier, a bundle or an unknown plan', () => {
	for (const id of ['cobe-month-cobe', 'free-cobe', 'group-month-cobe-cobe', 'nope-cobe', '-cobe'])
		assert.equal(planById(id), undefined, id);
});
