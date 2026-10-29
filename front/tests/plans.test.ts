// Plan catalogue: COBE bundles are priced from the base plan, never from the client.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COBE_ADDON, baseId, isBundle, planById } from '../src/lib/plans.ts';

test('a bundle adds COBE_ADDON to its base plan', () => {
	const month = planById('premium-month-cobe')!;
	assert.equal(month.price, planById('premium-month')!.price + COBE_ADDON.month);
	assert.equal(month.months, 1);
	assert.equal(month.cobe, true);
	assert.equal(isBundle(month), true);
	assert.equal(baseId(month), 'premium-month');
	const year = planById('premium-year-cobe')!;
	assert.equal(year.price, planById('premium-year')!.price + COBE_ADDON.year);
});

test('no bundle of a plan with COBE built in, the free tier, a bundle or an unknown plan', () => {
	const ids = ['cobe-month-cobe', 'group-year-cobe', 'personal-month-cobe', 'free-cobe'];
	for (const id of [...ids, 'premium-month-cobe-cobe', 'nope-cobe', '-cobe'])
		assert.equal(planById(id), undefined, id);
});

test('COBE built in is not a bundle', () => {
	const group = planById('group-month')!;
	assert.equal(group.cobe, true);
	assert.equal(isBundle(group), false);
	assert.equal(baseId(group), 'group-month');
});
