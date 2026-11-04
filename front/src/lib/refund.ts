// Refund on cancellation (terms "ביטול והחזר כספי"; Consumer Protection Law 14ה, 13ד).
// Within 14 days of payment: everything back, minus the fee and `held` (teacher lessons already
// given, priced by the caller). After that: the paid months not
// started yet, at the price actually paid per month; a month that started is not refunded.
// Fee: 5% of the price paid or ₪100, the lower.
// Paid months are the last `months` before `accessUntil`: this covers extensions (access
// stacked after earlier time) and a pass's free months (the rest of a month from the 15th, summer).
import { israelDate } from './plans.ts';

export const REFUND_FULL_DAYS = 14;
const FEE_RATE = 0.05;
const FEE_CAP = 10000;
const DAY_MS = 86_400_000;

export type RefundOrder = {
	/** Agorot actually paid (after coupons). */
	total: number;
	/** Paid months (`Plan.months`). */
	months: number;
	paidAt: Date;
	accessUntil: Date;
};

export type Refund = { amount: number; fee: number; monthsBack: number; withinFull: boolean };

export const cancelFee = (total: number) => Math.min(Math.round(total * FEE_RATE), FEE_CAP);

/** Whole months from `at` to `end`, by Israel calendar dates. */
function monthsLeft(at: Date, end: Date): number {
	const a = israelDate(at);
	const b = israelDate(end);
	return Math.max(0, (b.y - a.y) * 12 + (b.m - a.m) - (b.d < a.d ? 1 : 0));
}

export function refundOf(order: RefundOrder, cancelAt: Date, held = 0): Refund {
	const fee = cancelFee(order.total);
	if (cancelAt.getTime() - order.paidAt.getTime() <= REFUND_FULL_DAYS * DAY_MS) {
		const amount = Math.max(0, order.total - fee - held);
		return { amount, fee, monthsBack: order.months, withinFull: true };
	}
	// The access end is inclusive (a pass ends 30.6 23:59:59): count up to the next instant.
	const end = new Date(order.accessUntil.getTime() + 1000);
	const monthsBack = Math.min(order.months, monthsLeft(cancelAt, end));
	const back = Math.round((order.total * monthsBack) / order.months);
	return { amount: Math.max(0, back - fee), fee, monthsBack, withinFull: false };
}
