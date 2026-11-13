// Plan catalogue: coupons see the app part only, and access per product never depends on the date.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	COBE_ADDON,
	PRICING,
	maxPayments,
	planById,
	productsOf,
	withCobe
} from '../src/lib/plans.ts';

test('regular prices: 179 a month for the group, 64 for premium, less for longer cycles', () => {
	const month = (id: string) => planById(id)!.price / planById(id)!.months;
	assert.deepEqual(['group-month', 'group-pack3', 'group-pack6'].map(month), [17900, 15900, 14900]);
	assert.deepEqual(
		['premium-month', 'premium-pack3', 'premium-pack6'].map(month),
		[6400, 4900, 4400]
	);
});

test('a pack buys fixed months from the day of purchase', () => {
	assert.equal(planById('group-pack3')!.months, 3);
	assert.equal(planById('group-pack6')!.months, 6);
	assert.equal(planById('premium-pass'), undefined);
});

test('the regular list: a month of the group is 179', () => {
	assert.equal(planById('group-month')!.price, 17900);
});

test('COBE adds to the app part of any plan but COBE itself', () => {
	const bundle = planById('group-month-cobe')!;
	assert.equal(bundle.price, 17900 + COBE_ADDON.month);
	assert.equal(bundle.app, 4900 + COBE_ADDON.month);
	assert.equal(planById('premium-pack3-cobe')!.price, (4900 + COBE_ADDON.pack3) * 3);
	assert.equal(bundle.cobe, true);
	assert.equal(bundle.bundle, true);
	assert.equal(withCobe(planById('group-month')!, true)!.id, 'group-month-cobe');
	assert.equal(withCobe(bundle, false)!.id, 'group-month');
	for (const id of [
		'cobe-month-cobe',
		'personal-month',
		'lesson',
		'group-month-cobe-cobe',
		'group-year',
		'x'
	])
		assert.equal(planById(id), undefined, id);
});

test('what an order opens never depends on the date', () => {
	assert.deepEqual(productsOf('premium-pack6'), { app: true, cobe: false, lessons: false });
	assert.deepEqual(productsOf('premium-pack6-cobe'), { app: true, cobe: true, lessons: false });
	assert.deepEqual(productsOf('cobe-month'), { app: false, cobe: true, lessons: false });
	assert.deepEqual(productsOf('group-month'), { app: true, cobe: false, lessons: true });
	// An older plan id: billing opens both.
	assert.equal(productsOf('premium-year'), undefined);
});

test('the site charges PRICING; launch only lowers the group lessons, to 80 a month', () => {
	assert.equal(PRICING, 'regular');
	const launch = (id: string) => planById(id, 'launch')!.price / planById(id)!.months;
	assert.deepEqual(
		['group-month', 'group-pack3', 'group-pack6'].map(launch),
		[12900, 11900, 11400]
	);
	assert.equal(launch('premium-pack6'), 4400);
	assert.equal(
		withCobe(planById('group-pack3', 'launch')!, true, 'launch')!.price,
		(11900 + COBE_ADDON.pack3) * 3
	);
});

test('installments: up to one a month of the plan, a single payment for a month', () => {
	const payments = (id: string) => maxPayments(planById(id)!);
	assert.equal(payments('premium-month'), 1);
	assert.equal(payments('group-pack3'), 3);
	assert.equal(payments('premium-pack6'), 6);
});
