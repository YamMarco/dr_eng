// Plans, coupons, orders and access. Prices always come from $lib/plans, never
// from the client. Billing is off (everyone has access) until DATABASE_URL is set.
import { and, eq, gt, inArray, sql } from 'drizzle-orm';
import { db } from './db';
import { coupons, orders } from './db/schema';
import { DEFAULT_PLAN, planById, type Plan } from '$lib/plans';
import { startPayment } from './payments';

export const billingEnabled = !!db;

type Db = NonNullable<typeof db>;
type Tx = Parameters<Parameters<Db['transaction']>[0]>[0];
type Coupon = typeof coupons.$inferSelect;

export type CouponProblem = 'unknown' | 'expired' | 'used-up' | 'wrong-plan' | 'already-used';

export type Quote = {
	planId: string;
	price: number;
	discount: number;
	total: number;
	coupon: { code: string; percentOff: number } | null;
	couponProblem: CouponProblem | null;
};

export class BillingError extends Error {
	constructor(readonly code: 'unknown-plan' | 'payments-unavailable' | CouponProblem) {
		super(code);
	}
}

const DONE = ['paid', 'free'] as const;

export function normalizeCode(code: string | null | undefined): string | null {
	const trimmed = code?.trim().toUpperCase();
	return trimmed ? trimmed : null;
}

/** The active order's end date, or null when the user has no access. */
export async function accessUntil(userId: string): Promise<Date | null> {
	const [row] = await db!
		.select({ until: orders.accessUntil })
		.from(orders)
		.where(
			and(
				eq(orders.userId, userId),
				inArray(orders.status, DONE),
				gt(orders.accessUntil, sql`now()`)
			)
		)
		.orderBy(sql`${orders.accessUntil} desc`)
		.limit(1);
	return row?.until ?? null;
}

async function couponProblem(
	tx: Tx | Db,
	coupon: Coupon | undefined,
	plan: Plan,
	userId: string
): Promise<CouponProblem | null> {
	if (!coupon) return 'unknown';
	if (coupon.expiresAt && coupon.expiresAt.getTime() < Date.now()) return 'expired';
	if (coupon.planId && coupon.planId !== plan.id) return 'wrong-plan';
	const used = await tx
		.select({ userId: orders.userId })
		.from(orders)
		.where(and(eq(orders.couponCode, coupon.code), inArray(orders.status, DONE)));
	if (used.some((row) => row.userId === userId)) return 'already-used';
	if (coupon.maxRedemptions !== null && used.length >= coupon.maxRedemptions) return 'used-up';
	return null;
}

/** Without a plan, a coupon decides it (its own plan, else DEFAULT_PLAN). */
async function resolve(tx: Tx | Db, planId: string | null, code: string | null, userId: string) {
	const [coupon] = code ? await tx.select().from(coupons).where(eq(coupons.code, code)) : [];
	const plan = planById(planId ?? coupon?.planId ?? DEFAULT_PLAN);
	if (!plan || plan.soon || plan.price === 0) throw new BillingError('unknown-plan');
	const problem = code ? await couponProblem(tx, coupon, plan, userId) : null;
	const applied = code && !problem ? coupon : undefined;
	const discount = applied ? Math.round((plan.price * applied.percentOff) / 100) : 0;
	const quote: Quote = {
		planId: plan.id,
		price: plan.price,
		discount,
		total: plan.price - discount,
		coupon: applied ? { code: applied.code, percentOff: applied.percentOff } : null,
		couponProblem: problem
	};
	return { plan, quote };
}

export async function quote(planId: string | null, code: string | null, userId: string) {
	return (await resolve(db!, planId, normalizeCode(code), userId)).quote;
}

function addMonths(from: Date, months: number): Date {
	const until = new Date(from);
	until.setMonth(until.getMonth() + months);
	return until;
}

export type CheckoutResult =
	{ status: 'active'; accessUntil: string } | { status: 'redirect'; url: string };

/**
 * Free (100% coupon): the order completes at once. Paid: a pending order and
 * the provider's payment page. The coupon row is locked so its limit holds
 * under concurrent redemptions.
 */
export async function checkout(
	planId: string | null,
	rawCode: string | null,
	userId: string,
	returnUrl: string
): Promise<CheckoutResult> {
	const code = normalizeCode(rawCode);
	const order = await db!.transaction(async (tx) => {
		if (code)
			await tx.execute(sql`select 1 from ${coupons} where ${coupons.code} = ${code} for update`);
		const { plan, quote } = await resolve(tx, planId, code, userId);
		if (quote.couponProblem) throw new BillingError(quote.couponProblem);

		// Stacks on any access the user still has.
		const current = await accessUntil(userId);
		const start = current && current > new Date() ? current : new Date();
		const free = quote.total === 0;
		const [row] = await tx
			.insert(orders)
			.values({
				userId,
				planId: plan.id,
				price: quote.price,
				discount: quote.discount,
				total: quote.total,
				couponCode: quote.coupon?.code ?? null,
				status: free ? 'free' : 'pending',
				accessUntil: free ? addMonths(start, plan.months) : null,
				completedAt: free ? new Date() : null
			})
			.returning();
		return row;
	});

	if (order.status === 'free')
		return { status: 'active', accessUntil: order.accessUntil!.toISOString() };

	const payment = await startPayment({
		orderId: order.id,
		amount: order.total,
		description: order.planId,
		returnUrl
	});
	if (!payment) {
		await db!.update(orders).set({ status: 'failed' }).where(eq(orders.id, order.id));
		throw new BillingError('payments-unavailable');
	}
	await db!
		.update(orders)
		.set({ provider: payment.provider, providerRef: payment.providerRef })
		.where(eq(orders.id, order.id));
	return { status: 'redirect', url: payment.redirectUrl };
}

/** For the provider webhook: grants access from the moment of payment. */
export async function completeOrder(orderId: string, status: 'paid' | 'failed') {
	const [order] = await db!.select().from(orders).where(eq(orders.id, orderId));
	if (!order || order.status !== 'pending') return;
	const plan = planById(order.planId);
	const current = await accessUntil(order.userId);
	const start = current && current > new Date() ? current : new Date();
	await db!
		.update(orders)
		.set({
			status,
			completedAt: new Date(),
			accessUntil: status === 'paid' && plan ? addMonths(start, plan.months) : null
		})
		.where(eq(orders.id, orderId));
}
