// Plan catalogue: prices depend on the date (pass months left, launch), coupons see the
// app part only, and access per product never depends on the date.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	COBE_ADDON,
	LAUNCH_ZOOM_OFF,
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

test('launch takes LAUNCH_ZOOM_OFF off the Zoom part only, until 31.12', () => {
	const launch = planById('group-pass', NOV)!;
	assert.equal(launch.launch, true);
	assert.equal(launch.price / launch.months, 10900);
	assert.equal(launch.app, 2900 * 8);
	assert.equal(launch.regular - launch.price, LAUNCH_ZOOM_OFF * 8);
	assert.equal(planById('group-month', NOV)!.price, 12900);
	assert.equal(planById('personal-month', NOV)!.price, 47900);
	const after = planById('group-month', FEB)!;
	assert.equal(after.launch, false);
	assert.equal(after.price, 14900);
	// No launch on app-only plans or the teacher's own lesson price.
	assert.equal(planById('premium-month', NOV)!.launch, false);
	assert.equal(planById('lesson', NOV)!.price, 17900);
});

test('COBE adds to the app part of any plan but COBE itself and a lesson', () => {
	const bundle = planById('group-month-cobe', FEB)!;
	assert.equal(bundle.price, 14900 + COBE_ADDON.month);
	assert.equal(bundle.app, 4900 + COBE_ADDON.month);
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
