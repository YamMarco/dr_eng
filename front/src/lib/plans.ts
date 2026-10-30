// The plan catalogue, shared by the plans page, checkout and the server (which
// prices orders from here, never from the client). Copy lives in i18n (`plans`).
//
// Every price has two parts: `app` (the app and COBE, ours) and `zoom` (the teacher's:
// group lessons and private lessons). Coupons take off the app part only.
// Cycles: `month`; `pack3` / `pack6` (months from the day of purchase); and `pass`
// (the school year, sold by the months left until 30.6). Longer cycles cost less a month.
// The pass depends on the date (months left), so every lookup takes one.
// Two price lists: `regular` and `launch`. The site charges PRICING; the other is only
// previewed in the /plans debug panel.

export type OfferId = 'premium' | 'group' | 'personal' | 'cobe' | 'lesson';
export type Cycle = 'month' | 'pack3' | 'pack6' | 'pass';
export const CYCLES: Cycle[] = ['month', 'pack3', 'pack6', 'pass'];
type Split = { app: number; zoom: number };

/** Months a cycle buys; the pass's depend on the date. */
const CYCLE_MONTHS: Record<Exclude<Cycle, 'pass'>, number> = { month: 1, pack3: 3, pack6: 6 };

/** Per cycle, in agorot: month, pack3, pack6, pass. */
const per = (month: number, pack3: number, pack6: number, pass: number) =>
	({ month, pack3, pack6, pass }) as Record<Cycle, number>;
const APP = per(4900, 3900, 3400, 2900);
/** The teacher's part for the weekly group lesson. Launch: 80 on every cycle. */
const GROUP_ZOOM = {
	regular: per(13000, 12000, 11500, 11000),
	launch: per(8000, 8000, 8000, 8000)
};
/** Two private lessons a month (2 x LESSON), never discounted. */
const PRIVATE = 35800;

export type Pricing = keyof typeof GROUP_ZOOM;
/** What the site charges. */
export const PRICING: Pricing = 'regular';
/** The launch list's deadline (its copy says 31.12). */
export const LAUNCH_END = new Date('2026-12-31T23:59:59+02:00');

/** Whole days left to the launch price, counting today. */
export const launchDaysLeft = (at: Date) =>
	Math.max(0, Math.ceil((LAUNCH_END.getTime() - at.getTime()) / 86_400_000));

/** Monthly prices in agorot (VAT included), per price list. */
const MONTHLY = Object.fromEntries(
	(['regular', 'launch'] as const).map((pricing) => [
		pricing,
		{
			premium: split(APP, per(0, 0, 0, 0)),
			group: split(APP, GROUP_ZOOM[pricing]),
			// Rounded down to a price ending in 9: the app part takes the difference.
			personal: split(per(4100, 3100, 2600, 2100), GROUP_ZOOM[pricing], PRIVATE),
			cobe: split(per(5900, 5500, 5000, 4500), per(0, 0, 0, 0))
		}
	])
) as Record<Pricing, Record<Exclude<OfferId, 'lesson'>, Record<Cycle, Split>>>;

/** Per cycle; `lessons`: private lessons a month, added to the Zoom part. */
function split(app: Record<Cycle, number>, zoom: Record<Cycle, number>, lessons = 0) {
	return Object.fromEntries(
		CYCLES.map((c) => [c, { app: app[c], zoom: zoom[c] + lessons }])
	) as Record<Cycle, Split>;
}

/** One private Zoom lesson: all of it goes to the teacher; a month of the app comes free. */
const LESSON: Split = { app: 0, zoom: 17900 };

/** COBE added to a plan, per month (cheaper than COBE alone). */
export const COBE_ADDON = per(3900, 3500, 3200, 2900);

/** The pass is sold while at least this many months are left. */
const PASS_MIN_MONTHS = 3;

/** A private tutor's hourly rate, in agorot: the page's price anchor. */
export const TUTOR_HOUR = 15000;

/** On only once the terms promise a 14-day refund / the payment provider takes installments. */
export const GUARANTEE = false;
export const INSTALLMENTS = false;

/** The plans on the page, in order; the featured one is pushed. `personal` is priced but hidden for now. */
export const TIERS = ['premium', 'group'] as const;
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

type Parsed = { offer: OfferId; cycle: Cycle | null; bundle: boolean };

/** "premium-month-cobe" -> its parts; undefined for an id the catalogue doesn't know. */
function parse(id: string): Parsed | undefined {
	if (id === 'lesson') return { offer: 'lesson', cycle: null, bundle: false };
	const bundle = id.endsWith(COBE_SUFFIX);
	const [offer, cycle, ...rest] = (bundle ? id.slice(0, -COBE_SUFFIX.length) : id).split('-');
	if (rest.length || !CYCLES.includes(cycle as Cycle) || !(offer in MONTHLY.regular)) return;
	if (bundle && offer === 'cobe') return;
	return { offer: offer as OfferId, cycle: cycle as Cycle, bundle };
}

/** What an order of this plan opens, whatever the date; undefined for an unknown id. */
export function productsOf(id: string): { app: boolean; cobe: boolean } | undefined {
	const parsed = parse(id);
	return parsed && { app: parsed.offer !== 'cobe', cobe: parsed.offer === 'cobe' || parsed.bundle };
}

/** "group-pass", "premium-month-cobe" or "lesson", priced on `at`. Undefined when not sold then.
 *  `pricing` other than PRICING is for the page's preview only. */
export function planById(
	id: string | null | undefined,
	at = new Date(),
	pricing: Pricing = PRICING
): Plan | undefined {
	const parsed = id ? parse(id) : undefined;
	if (!id || !parsed) return;
	const { offer, cycle, bundle } = parsed;
	if (!cycle) return build(id, offer, null, LESSON, 1, undefined, false);
	const monthly = MONTHLY[pricing][offer as Exclude<OfferId, 'lesson'>][cycle];
	const split = { ...monthly, app: monthly.app + (bundle ? COBE_ADDON[cycle] : 0) };
	if (cycle !== 'pass')
		return build(id, offer, cycle, split, CYCLE_MONTHS[cycle], undefined, bundle);
	const months = passMonths(at);
	if (months < PASS_MIN_MONTHS) return;
	return build(id, offer, cycle, split, months, passEnd(at), bundle);
}

function build(
	id: string,
	offer: OfferId,
	cycle: Cycle | null,
	monthly: Split,
	months: number,
	until: Date | undefined,
	bundle: boolean
): Plan {
	const app = monthly.app * months;
	const zoom = monthly.zoom * months;
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
		bundle
	};
}

export const planId = (offer: OfferId, cycle: Cycle, cobe = false) =>
	`${offer}-${cycle}${cobe ? COBE_SUFFIX : ''}`;

/** The same plan with COBE added or removed; undefined when it can't take COBE. */
export function withCobe(
	plan: Plan,
	on: boolean,
	at = new Date(),
	pricing: Pricing = PRICING
): Plan | undefined {
	if (!plan.cycle) return;
	return planById(planId(plan.offer, plan.cycle, on), at, pricing);
}

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const defaultPlan = (at = new Date()): Plan =>
	planById('premium-pass', at) ?? planById('premium-month', at)!;

export function isPurchasable(plan: Plan | undefined): plan is Plan {
	return !!plan && plan.price > 0;
}

/** Whole shekels a month, rounded. */
export const monthlyShekels = (agorot: number, months: number) => Math.round(agorot / months / 100);

/** 4900 -> "49", 4950 -> "49.50" */
export function formatPrice(agorot: number): string {
	return agorot % 100 === 0 ? String(agorot / 100) : (agorot / 100).toFixed(2);
}
