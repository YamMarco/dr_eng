// Plan catalogue: the pass depends on the date (months left), coupons see the
// app part only, and access per product never depends on the date.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	COBE_ADDON,
	PRICING,
	passEnd,
	passMonths,
	planById,
	productsOf,
	withCobe
} from '../src/lib/plans.ts';

const at = (iso: string) => new Date(`${iso}T12:00:00+02:00`);
const NOV = at('2026-11-10');
const FEB = at('2027-02-10');

test('the pass counts this month to June; from the 15th this month is free', () => {
	assert.equal(passMonths(at('2026-09-01')), 10);
	assert.equal(passMonths(at('2026-10-29')), 8);
	assert.equal(passMonths(NOV), 8);
	assert.equal(passMonths(FEB), 5);
	// Bought in the summer: the next school year, summer free.
	assert.equal(passMonths(at('2027-07-10')), 10);
	assert.equal(passEnd(at('2027-07-10')).toISOString(), '2028-06-30T20:59:59.000Z');
});

test('the pass is sold while 3 or more months are left', () => {
	assert.ok(planById('premium-pass', at('2027-04-10')));
	assert.equal(planById('premium-pass', at('2027-04-20')), undefined);
	assert.equal(planById('premium-pass', at('2027-05-10')), undefined);
	assert.ok(planById('premium-month', at('2027-05-10')));
});

test('a pass prices the months left and ends on 30.6', () => {
	const pass = planById('premium-pass', FEB)!;
	assert.equal(pass.months, 5);
	assert.equal(pass.price, 2900 * 5);
	assert.equal(pass.until!.toISOString(), '2027-06-30T20:59:59.000Z');
});

test('regular prices: 179 a month for the group, less for longer cycles', () => {
	const month = (id: string) => planById(id, FEB)!.price / planById(id, FEB)!.months;
	assert.deepEqual(
		['group-month', 'group-pack3', 'group-pack6', 'group-pass'].map(month),
		[17900, 15900, 14900, 13900]
	);
	assert.deepEqual(
		['personal-month', 'personal-pack3', 'personal-pack6', 'personal-pass'].map(month),
		[52900, 50900, 49900, 48900]
	);
	assert.equal(planById('premium-pack6', FEB)!.price, 3400 * 6);
});

test('a pack buys fixed months from the day of purchase', () => {
	const pack = planById('group-pack3', FEB)!;
	assert.equal(pack.months, 3);
	assert.equal(pack.until, undefined);
	assert.equal(planById('group-pack6', at('2027-05-10'))!.months, 6);
});

test('prices are the same on any date: no launch price', () => {
	for (const id of ['group-month', 'group-pack3', 'personal-pack6'])
		assert.equal(planById(id, NOV)!.price, planById(id, FEB)!.price, id);
	assert.equal(planById('group-month', NOV)!.price, 17900);
	assert.equal(planById('lesson', NOV)!.price, 17900);
});

test('COBE adds to the app part of any plan but COBE itself and a lesson', () => {
	const bundle = planById('group-month-cobe', FEB)!;
	assert.equal(bundle.price, 17900 + COBE_ADDON.month);
	assert.equal(bundle.app, 4900 + COBE_ADDON.month);
	assert.equal(planById('premium-pack3-cobe', FEB)!.price, (3900 + COBE_ADDON.pack3) * 3);
	assert.equal(bundle.cobe, true);
	assert.equal(bundle.bundle, true);
	assert.equal(withCobe(planById('group-month', FEB)!, true, FEB)!.id, 'group-month-cobe');
	assert.equal(withCobe(bundle, false, FEB)!.id, 'group-month');
	for (const id of ['cobe-month-cobe', 'lesson-cobe', 'group-month-cobe-cobe', 'group-year', 'x'])
		assert.equal(planById(id, FEB), undefined, id);
	assert.equal(withCobe(planById('lesson', FEB)!, true, FEB), undefined);
});

test('what an order opens never depends on the date', () => {
	assert.deepEqual(productsOf('premium-pass'), { app: true, cobe: false });
	assert.deepEqual(productsOf('premium-pass-cobe'), { app: true, cobe: true });
	assert.deepEqual(productsOf('cobe-month'), { app: false, cobe: true });
	assert.deepEqual(productsOf('lesson'), { app: true, cobe: false });
	// An older plan id: billing opens both.
	assert.equal(productsOf('premium-year'), undefined);
});

test('the site charges PRICING; launch only lowers the group lessons on longer cycles', () => {
	assert.equal(PRICING, 'regular');
	const launch = (id: string) => planById(id, FEB, 'launch')!.price / planById(id, FEB)!.months;
	assert.deepEqual(
		['group-month', 'group-pack3', 'group-pack6', 'group-pass'].map(launch),
		[17900, 11900, 11400, 10900]
	);
	assert.equal(launch('premium-pass'), 2900);
	assert.equal(launch('personal-pack3'), 3100 + 8000 + 35800);
	assert.equal(
		withCobe(planById('group-pack3', FEB, 'launch')!, true, FEB, 'launch')!.price,
		(11900 + COBE_ADDON.pack3) * 3
	);
});
