// Refund on cancellation: 14 days full minus the fee, then the months not started.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cancelFee, refundOf } from '../src/lib/refund.ts';

const at = (s: string) => new Date(s);

test('fee: 5% of the price paid, at most ₪100', () => {
	assert.equal(cancelFee(89400), 4470);
	assert.equal(cancelFee(300000), 10000);
});

const pack6 = {
	total: 89400,
	months: 6,
	paidAt: at('2026-11-04T12:00:00+02:00'),
	accessUntil: at('2027-05-04T12:00:00+03:00')
};

test('within 14 days: everything back minus the fee', () => {
	const r = refundOf(pack6, at('2026-11-14T12:00:00+02:00'));
	assert.deepEqual(r, { amount: 84930, fee: 4470, monthsBack: 6, withinFull: true });
});

test('within 14 days: lessons already held come off too', () => {
	assert.equal(refundOf(pack6, at('2026-11-10T12:00:00+02:00'), 3000).amount, 84930 - 3000);
});

test('6 months, cancelled on day 20: the 5 months not started, minus the fee', () => {
	const r = refundOf(pack6, at('2026-11-24T12:00:00+02:00'));
	assert.equal(r.monthsBack, 5);
	assert.equal(r.amount, 74500 - 4470);
});

test('a started month is not refunded', () => {
	assert.equal(refundOf(pack6, at('2026-12-05T12:00:00+02:00')).monthsBack, 4);
	assert.equal(refundOf(pack6, at('2027-04-10T12:00:00+03:00')).amount, 0);
});

test('3 months, cancelled in month 2: month 3 back', () => {
	const r = refundOf(
		{
			total: 47700,
			months: 3,
			paidAt: at('2026-11-04T12:00:00+02:00'),
			accessUntil: at('2027-02-04T12:00:00+02:00')
		},
		at('2026-12-14T12:00:00+02:00')
	);
	assert.equal(r.monthsBack, 1);
	assert.equal(r.amount, 15900 - 2385);
});

test('monthly plan after 14 days: nothing back', () => {
	const r = refundOf(
		{
			total: 17900,
			months: 1,
			paidAt: at('2026-11-04T12:00:00+02:00'),
			accessUntil: at('2026-12-04T12:00:00+02:00')
		},
		at('2026-11-24T12:00:00+02:00')
	);
	assert.equal(r.amount, 0);
});

test('school-year pass from 1.11, cancelled 15.1: Feb-June back', () => {
	const r = refundOf(
		{
			total: 111200,
			months: 8,
			paidAt: at('2026-11-01T12:00:00+02:00'),
			accessUntil: at('2027-06-30T23:59:59+03:00')
		},
		at('2027-01-15T12:00:00+02:00')
	);
	assert.equal(r.monthsBack, 5);
	assert.equal(r.amount, 69500 - 5560);
});

test("a pass bought in summer: the free summer months aren't refunded on top", () => {
	const r = refundOf(
		{
			total: 139000,
			months: 10,
			paidAt: at('2026-07-01T12:00:00+03:00'),
			accessUntil: at('2027-06-30T23:59:59+03:00')
		},
		at('2026-08-01T12:00:00+03:00')
	);
	assert.equal(r.monthsBack, 10);
	assert.equal(r.amount, 139000 - 6950);
});

test('an extension that starts later: all its months are still ahead', () => {
	const r = refundOf(
		{
			total: 47700,
			months: 3,
			paidAt: at('2026-11-04T12:00:00+02:00'),
			accessUntil: at('2027-05-04T12:00:00+03:00')
		},
		at('2026-12-01T12:00:00+02:00')
	);
	assert.equal(r.monthsBack, 3);
});
