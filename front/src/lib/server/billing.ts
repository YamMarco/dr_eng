// Plans, coupons, orders and access. Prices always come from $lib/plans, never
// from the client. Billing is off (everyone has access) until DATABASE_URL is set.
// Each product (the app plan, COBE) is its own order, period, renewal and cancel; a
// checkout of both makes two orders with one checkoutId and one payment.
import { and, desc, eq, gt, inArray, isNull, sql } from 'drizzle-orm';
import { db } from './db';
import { coupons, orders } from './db/schema';
import {
	defaultPlan,
	maxPayments,
	planById,
	productsOf,
	renewalOf,
	type Plan,
	type Product
} from '$lib/plans';
import { startPayment } from './payments';

export const billingEnabled = !!db;

type Db = NonNullable<typeof db>;
type Tx = Parameters<Parameters<Db['transaction']>[0]>[0];
type Coupon = typeof coupons.$inferSelect;

export type CouponProblem = 'unknown' | 'expired' | 'used-up' | 'wrong-plan' | 'already-used';

export type Quote = {
	/** Each product's own price, before the coupon. */
	items: { planId: string; price: number }[];
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
/** Products in one checkout: the app plan and COBE. */
const MAX_ITEMS = 2;

export function normalizeCode(code: string | null | undefined): string | null {
	const trimmed = code?.trim().toUpperCase();
	return trimmed ? trimmed : null;
}

export type Access = { app: Date | null; cobe: Date | null; lessons: Date | null };

/** Until when the user has the app, COBE and the group lessons (null = no access). A plan id
 *  the catalogue no longer knows (an older plan) opens the app and COBE. */
export async function access(userId: string): Promise<Access> {
	const rows = await db!
		.select({ planId: orders.planId, until: orders.accessUntil })
		.from(orders)
		.where(
			and(
				eq(orders.userId, userId),
				inArray(orders.status, DONE),
				gt(orders.accessUntil, sql`now()`)
			)
		);
	const result: Access = { app: null, cobe: null, lessons: null };
	const later = (a: Date | null, b: Date) => (a && a > b ? a : b);
	for (const row of rows) {
		const products = productsOf(row.planId) ?? { app: true, cobe: true, lessons: false };
		for (const product of ['app', 'cobe', 'lessons'] as const)
			if (products[product]) result[product] = later(result[product], row.until!);
	}
	return result;
}

async function couponProblem(
	tx: Tx | Db,
	coupon: Coupon | undefined,
	plans: Plan[],
	userId: string
): Promise<CouponProblem | null> {
	if (!coupon) return 'unknown';
	if (coupon.expiresAt && coupon.expiresAt.getTime() < Date.now()) return 'expired';
	if (coupon.planId && !plans.some((p) => p.id === coupon.planId)) return 'wrong-plan';
	// A coupon goes on one order of a checkout, so each row is one redemption.
	const used = await tx
		.select({ userId: orders.userId })
		.from(orders)
		.where(and(eq(orders.couponCode, coupon.code), inArray(orders.status, DONE)));
	if (used.some((row) => row.userId === userId)) return 'already-used';
	if (coupon.maxRedemptions !== null && used.length >= coupon.maxRedemptions) return 'used-up';
	return null;
}

/** The products of one checkout, priced. Without plans, a coupon decides (its own plan, else
 *  defaultPlan). At most one plan per product. COBE costs its with-app price when the app is
 *  in the cart or still running. The coupon takes off one item's app part (its own plan, else
 *  the app plan): the Zoom part is the teacher's. */
async function resolve(tx: Tx | Db, planIds: string[], code: string | null, userId: string) {
	const [coupon] = code ? await tx.select().from(coupons).where(eq(coupons.code, code)) : [];
	const ids = planIds.length ? planIds : [coupon?.planId ?? defaultPlan().id];
	const base = ids.map((id) => planById(id));
	if (ids.length > MAX_ITEMS || base.some((p) => !p || p.price === 0))
		throw new BillingError('unknown-plan');
	const products = base.map((p) => p!.product);
	if (new Set(products).size < products.length) throw new BillingError('unknown-plan');
	const appRuns = products.includes('app') || !!(await access(userId)).app;
	const plans = ids.map((id) => planById(id, undefined, appRuns)!);

	const problem = code ? await couponProblem(tx, coupon, plans, userId) : null;
	const applied = code && !problem ? coupon : undefined;
	const target = applied
		? (plans.find((p) => p.id === applied.planId) ??
			plans.find((p) => p.product === 'app') ??
			plans[0])
		: undefined;
	const discount = target ? Math.round((target.app * applied!.percentOff) / 100) : 0;
	const price = plans.reduce((sum, p) => sum + p.price, 0);
	const quote: Quote = {
		items: plans.map((p) => ({ planId: p.id, price: p.price })),
		price,
		discount,
		total: price - discount,
		coupon: applied ? { code: applied.code, percentOff: applied.percentOff } : null,
		couponProblem: problem
	};
	return { plans, quote, target };
}

export async function quote(planIds: string[], code: string | null, userId: string) {
	return (await resolve(db!, planIds, normalizeCode(code), userId)).quote;
}

/** A plan adds its months to `start`. */
function accessEnd(plan: Plan, start: Date): Date {
	const until = new Date(start);
	until.setMonth(until.getMonth() + plan.months);
	return until;
}

/** Where a new period of `product` starts: the end of the one still running, else now. */
function startOf(current: Access, product: Product): Date {
	const until = current[product];
	return until && until > new Date() ? until : new Date();
}

export type CheckoutResult =
	{ status: 'active'; accessUntil: string } | { status: 'redirect'; url: string };

/**
 * One order per product, one checkoutId, one payment for the total. Free (100% coupon):
 * every order completes at once. Paid: pending orders and the provider's payment page.
 * The coupon row is locked so its limit holds under concurrent redemptions.
 */
export async function checkout(
	planIds: string[],
	rawCode: string | null,
	userId: string,
	returnUrl: string
): Promise<CheckoutResult> {
	const code = normalizeCode(rawCode);
	const checkoutId = crypto.randomUUID();
	const { rows, plans, total } = await db!.transaction(async (tx) => {
		if (code)
			await tx.execute(sql`select 1 from ${coupons} where ${coupons.code} = ${code} for update`);
		const { plans, quote, target } = await resolve(tx, planIds, code, userId);
		if (quote.couponProblem) throw new BillingError(quote.couponProblem);

		const current = await access(userId);
		const free = quote.total === 0;
		const rows = await tx
			.insert(orders)
			.values(
				plans.map((plan) => {
					const discount = plan === target ? quote.discount : 0;
					return {
						userId,
						checkoutId,
						planId: plan.id,
						price: plan.price,
						discount,
						total: plan.price - discount,
						couponCode: plan === target ? quote.coupon!.code : null,
						status: free ? ('free' as const) : ('pending' as const),
						accessUntil: free ? accessEnd(plan, startOf(current, plan.product)) : null,
						completedAt: free ? new Date() : null
					};
				})
			)
			.returning();
		return { rows, plans, total: quote.total };
	});

	if (total === 0) {
		const until = Math.max(...rows.map((row) => row.accessUntil!.getTime()));
		return { status: 'active', accessUntil: new Date(until).toISOString() };
	}

	const payment = await startPayment({
		checkoutId,
		amount: total,
		maxPayments: Math.max(...plans.map(maxPayments)),
		description: plans.map((p) => p.id).join(' + '),
		returnUrl
	});
	if (!payment) {
		await db!.update(orders).set({ status: 'failed' }).where(eq(orders.checkoutId, checkoutId));
		throw new BillingError('payments-unavailable');
	}
	await db!
		.update(orders)
		.set({ provider: payment.provider, providerRef: payment.providerRef })
		.where(eq(orders.checkoutId, checkoutId));
	return { status: 'redirect', url: payment.redirectUrl };
}

/** For the provider webhook: grants each product its period from the moment of payment.
 *  Idempotent: a repeated or concurrent webhook finds the orders no longer pending. */
export async function completeCheckout(checkoutId: string, status: 'paid' | 'failed') {
	const pending = await db!
		.select()
		.from(orders)
		.where(and(eq(orders.checkoutId, checkoutId), eq(orders.status, 'pending')));
	if (!pending.length) return;
	const current = await access(pending[0].userId);
	for (const order of pending) {
		const plan = planById(order.planId);
		await db!
			.update(orders)
			.set({
				status,
				completedAt: new Date(),
				accessUntil:
					status === 'paid' && plan ? accessEnd(plan, startOf(current, plan.product)) : null
			})
			.where(and(eq(orders.id, order.id), eq(orders.status, 'pending')));
	}
}

export type Subscription = {
	orderId: string;
	planId: string;
	product: Product;
	/** The current period; its end is the next charge, unless cancelled. */
	from: Date;
	until: Date;
	renews: boolean;
	/** What the renewal charges: the same offer, monthly, regular price. */
	renewPlanId: string;
	renewPrice: number;
};

/** The user's running subscriptions, one per product: its latest-ending paid order still in
 *  its period. Free (coupon) orders never renew, so they aren't one. COBE renews at the
 *  with-app price when the app still runs at that date. */
export async function subscriptions(userId: string): Promise<Subscription[]> {
	const rows = await db!
		.select()
		.from(orders)
		.where(
			and(eq(orders.userId, userId), eq(orders.status, 'paid'), gt(orders.accessUntil, sql`now()`))
		)
		.orderBy(desc(orders.accessUntil));
	const latest = new Map<Product, { row: (typeof rows)[number]; plan: Plan }>();
	for (const row of rows) {
		const plan = planById(row.planId);
		if (plan && !latest.has(plan.product)) latest.set(plan.product, { row, plan });
	}
	const app = latest.get('app');
	const appUntil = (await access(userId)).app;
	return [...latest.values()].map(({ row, plan }) => {
		const until = row.accessUntil!;
		const appRuns = (!!app && !app.row.renewCancelledAt) || (!!appUntil && appUntil > until);
		const next = renewalOf(plan, appRuns);
		const from = new Date(until);
		from.setMonth(from.getMonth() - plan.months);
		return {
			orderId: row.id,
			planId: row.planId,
			product: plan.product,
			from,
			until,
			renews: !row.renewCancelledAt,
			renewPlanId: next.id,
			renewPrice: next.price
		};
	});
}

/** Turns auto-renewal off for one product, or all: no further charges; access runs to the end
 *  of each paid period. Every running order of that product stops, so none renews later. */
export async function cancelRenewal(userId: string, product: Product | 'all') {
	const running = await db!
		.select({ id: orders.id, planId: orders.planId })
		.from(orders)
		.where(
			and(
				eq(orders.userId, userId),
				eq(orders.status, 'paid'),
				gt(orders.accessUntil, sql`now()`),
				isNull(orders.renewCancelledAt)
			)
		);
	const ids = running
		.filter((row) => product === 'all' || planById(row.planId)?.product === product)
		.map((row) => row.id);
	if (ids.length)
		await db!.update(orders).set({ renewCancelledAt: new Date() }).where(inArray(orders.id, ids));
}
