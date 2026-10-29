// The plan catalogue, shared by the plans page, checkout and the server (which
// prices orders from here, never from the client). Copy lives in i18n (`plans`).
//
// Every price has two parts: `app` (the app and COBE, ours to discount) and
// `zoom` (the teacher's share, never discounted). Coupons take off the app part only.
// Two cycles: `month`, and `pass` (the school year, sold by the months left until 30.6).
// Prices depend on the date (months left, launch), so every lookup takes one.

export type OfferId = 'premium' | 'group' | 'personal' | 'cobe' | 'lesson';
export type Cycle = 'month' | 'pass';
type Split = { app: number; zoom: number };

/** Monthly prices in agorot (VAT included). */
const MONTHLY: Record<Exclude<OfferId, 'lesson'>, Record<Cycle, Split>> = {
	premium: { month: { app: 4900, zoom: 0 }, pass: { app: 2900, zoom: 0 } },
	group: { month: { app: 4900, zoom: 10000 }, pass: { app: 2900, zoom: 10000 } },
	// group + 2 private lessons (2 x 17900)
	personal: { month: { app: 4100, zoom: 45800 }, pass: { app: 3100, zoom: 45800 } },
	cobe: { month: { app: 5900, zoom: 0 }, pass: { app: 4500, zoom: 0 } }
};

/** One private Zoom lesson: all of it goes to the teacher; a month of the app comes free. */
const LESSON: Split = { app: 0, zoom: 17900 };

/** COBE added to a plan, per month (cheaper than COBE alone). */
export const COBE_ADDON: Record<Cycle, number> = { month: 3900, pass: 2900 };

/** Launch: the teacher takes this off the Zoom part of every plan bought until LAUNCH_END. */
export const LAUNCH_ZOOM_OFF = 2000;
export const LAUNCH_END = new Date('2026-12-31T23:59:59+02:00');

/** The pass is sold while at least this many months are left. */
const PASS_MIN_MONTHS = 3;

/** A private tutor's hourly rate, in agorot: the page's price anchor. */
export const TUTOR_HOUR = 15000;

/** On only once the terms promise a 14-day refund / the payment provider takes installments. */
export const GUARANTEE = false;
export const INSTALLMENTS = false;

/** The plans on the page, in order; the featured one is pushed. */
export const TIERS = ['premium', 'group', 'personal'] as const;
export const FEATURED_OFFER: OfferId = 'group';

export type Plan = {
	id: string;
	offer: OfferId;
	/** null for a lesson. */
	cycle: Cycle | null;
	/** Total in agorot = app + zoom. */
	price: number;
	app: number;
	zoom: number;
	/** Months paid for (a pass: the months left). */
	months: number;
	/** A pass ends on this date instead of after `months`. */
	until?: Date;
	/** Includes COBE: COBE alone or added on. */
	cobe: boolean;
	/** COBE added on: the id ends with COBE_SUFFIX. */
	bundle: boolean;
	/** Bought at the launch price; `regular` is the price after launch. */
	launch: boolean;
	regular: number;
};

const COBE_SUFFIX = '-cobe';

/** Year, month (0-11) and day in Israel. */
function israelDate(at: Date) {
	const [y, m, d] = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' })
		.format(at)
		.split('-')
		.map(Number);
	return { y, m: m - 1, d };
}

/** The end of the school year a purchase on `at` belongs to (from July: the next one). */
export function passEnd(at: Date): Date {
	const { y, m } = israelDate(at);
	return new Date(`${m >= 6 ? y + 1 : y}-06-30T23:59:59+03:00`);
}

/** Months paid on a pass bought on `at`: this month to June, at most 10; from the 15th the
 *  rest of this month is free. Bought in the summer, the summer is free. */
export function passMonths(at: Date): number {
	const { y, m, d } = israelDate(at);
	const end = israelDate(passEnd(at));
	const months = (end.y - y) * 12 + (end.m - m) + 1 - (d >= 15 ? 1 : 0);
	return Math.min(months, 10);
}

export const isLaunch = (at: Date) => at <= LAUNCH_END;

/** Whole days left to the launch price, counting today. */
export const launchDaysLeft = (at: Date) =>
	Math.max(0, Math.ceil((LAUNCH_END.getTime() - at.getTime()) / 86_400_000));

type Parsed = { offer: OfferId; cycle: Cycle | null; bundle: boolean };

/** "premium-month-cobe" -> its parts; undefined for an id the catalogue doesn't know. */
function parse(id: string): Parsed | undefined {
	if (id === 'lesson') return { offer: 'lesson', cycle: null, bundle: false };
	const bundle = id.endsWith(COBE_SUFFIX);
	const [offer, cycle, ...rest] = (bundle ? id.slice(0, -COBE_SUFFIX.length) : id).split('-');
	if (rest.length || (cycle !== 'month' && cycle !== 'pass') || !(offer in MONTHLY)) return;
	if (bundle && offer === 'cobe') return;
	return { offer: offer as OfferId, cycle, bundle };
}

/** What an order of this plan opens, whatever the date; undefined for an unknown id. */
export function productsOf(id: string): { app: boolean; cobe: boolean } | undefined {
	const parsed = parse(id);
	return parsed && { app: parsed.offer !== 'cobe', cobe: parsed.offer === 'cobe' || parsed.bundle };
}

/** "group-pass", "premium-month-cobe" or "lesson", priced on `at`. Undefined when not sold then. */
export function planById(id: string | null | undefined, at = new Date()): Plan | undefined {
	const parsed = id ? parse(id) : undefined;
	if (!id || !parsed) return;
	const { offer, cycle, bundle } = parsed;
	if (!cycle) return build(id, offer, null, LESSON, 1, undefined, false, at);
	const monthly = MONTHLY[offer as keyof typeof MONTHLY][cycle];
	const split = { ...monthly, app: monthly.app + (bundle ? COBE_ADDON[cycle] : 0) };
	if (cycle === 'month') return build(id, offer, cycle, split, 1, undefined, bundle, at);
	const months = passMonths(at);
	if (months < PASS_MIN_MONTHS) return;
	return build(id, offer, cycle, split, months, passEnd(at), bundle, at);
}

function build(
	id: string,
	offer: OfferId,
	cycle: Cycle | null,
	monthly: Split,
	months: number,
	until: Date | undefined,
	bundle: boolean,
	at: Date
): Plan {
	// The lesson is the teacher's own price: no launch discount.
	const launch = isLaunch(at) && monthly.zoom > 0 && offer !== 'lesson';
	const app = monthly.app * months;
	const zoom = (monthly.zoom - (launch ? LAUNCH_ZOOM_OFF : 0)) * months;
	return {
		id,
		offer,
		cycle,
		price: app + zoom,
		app,
		zoom,
		months,
		until,
		cobe: offer === 'cobe' || bundle,
		bundle,
		launch,
		regular: (monthly.app + monthly.zoom) * months
	};
}

export const planId = (offer: OfferId, cycle: Cycle, cobe = false) =>
	`${offer}-${cycle}${cobe ? COBE_SUFFIX : ''}`;

/** The same plan with COBE added or removed; undefined when it can't take COBE. */
export function withCobe(plan: Plan, on: boolean, at = new Date()): Plan | undefined {
	if (!plan.cycle) return;
	return planById(planId(plan.offer, plan.cycle, on), at);
}

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const defaultPlan = (at = new Date()): Plan =>
	planById('premium-pass', at) ?? planById('premium-month', at)!;

export function isPurchasable(plan: Plan | undefined): plan is Plan {
	return !!plan && plan.price > 0;
}

/** Whole shekels a month, rounded. */
export const monthlyShekels = (agorot: number, months: number) => Math.round(agorot / months / 100);

/** How much a pass saves on paying monthly, in percent. */
export function passSavingPercent(offer: OfferId): number {
	if (offer === 'lesson') return 0;
	const total = (cycle: Cycle) => MONTHLY[offer][cycle].app + MONTHLY[offer][cycle].zoom;
	return Math.round((1 - total('pass') / total('month')) * 100);
}

/** 4900 -> "49", 4950 -> "49.50" */
export function formatPrice(agorot: number): string {
	return agorot % 100 === 0 ? String(agorot / 100) : (agorot / 100).toFixed(2);
}
