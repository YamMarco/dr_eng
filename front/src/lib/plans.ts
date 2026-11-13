// The plan catalogue, shared by the plans page, checkout and the server (which
// prices orders from here, never from the client). Copy lives in i18n (`plans`).
//
// Every price has two parts: `app` (the app and COBE, ours) and `zoom` (the teacher's:
// the group lessons). Coupons take off the app part only.
// Cycles: `month`, `pack3` and `pack6` (months from the day of purchase). Longer cycles
// cost less a month.
// Two price lists: `regular` and `launch`. The site charges PRICING; the other is only
// previewed in the /plans debug panel.

export type OfferId = 'premium' | 'group' | 'cobe';
export type Cycle = 'month' | 'pack3' | 'pack6';
export const CYCLES: Cycle[] = ['month', 'pack3', 'pack6'];
type Split = { app: number; zoom: number };

/** Months a cycle buys. */
const CYCLE_MONTHS: Record<Cycle, number> = { month: 1, pack3: 3, pack6: 6 };

/** Per cycle, in agorot: month, pack3, pack6. */
const per = (month: number, pack3: number, pack6: number) =>
	({ month, pack3, pack6 }) as Record<Cycle, number>;
const APP = per(4900, 3900, 3400);

/** Off the monthly price, per cycle (for prices derived with `ladder`). */
const CYCLE_OFF: Record<Cycle, number> = { month: 0, pack3: 0.2, pack6: 0.3 };
/** The nearest whole-shekel price ending in 4 or 9, in agorot. */
const charm = (agorot: number) => (Math.round((agorot / 100 - 4) / 5) * 5 + 4) * 100;
/** A monthly price and each longer cycle `CYCLE_OFF` cheaper. */
const ladder = (month: number) =>
	Object.fromEntries(CYCLES.map((c) => [c, charm(month * (1 - CYCLE_OFF[c]))])) as Record<
		Cycle,
		number
	>;
/** The teacher's part for the weekly group lesson. Launch: 80 on every cycle. */
const GROUP_ZOOM = {
	regular: per(13000, 12000, 11500),
	launch: per(8000, 8000, 8000)
};
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
			premium: split(ladder(6400), per(0, 0, 0)),
			group: split(APP, GROUP_ZOOM[pricing]),
			cobe: split(per(5900, 5500, 5000), per(0, 0, 0))
		}
	])
) as Record<Pricing, Record<OfferId, Record<Cycle, Split>>>;

function split(app: Record<Cycle, number>, zoom: Record<Cycle, number>) {
	return Object.fromEntries(CYCLES.map((c) => [c, { app: app[c], zoom: zoom[c] }])) as Record<
		Cycle,
		Split
	>;
}

/** COBE added to a plan, per month (cheaper than COBE alone). */
export const COBE_ADDON = per(3900, 3500, 3200);

/** A private tutor's hourly rate, in agorot: the page's price anchor. */
export const TUTOR_HOUR = 15000;

/** On only once the terms promise a 14-day full refund. */
export const GUARANTEE = false;
/** Plans of 3+ months split into card installments, up to one a month (terms "מסלולים ותשלום"). */
export const INSTALLMENTS = true;

/** Most installments the payment page offers for a plan (1 = a single payment). */
export const maxPayments = (plan: Plan) => (INSTALLMENTS ? plan.months : 1);

/** The plans on the page, in order; the featured one is pushed. */
export const TIERS = ['premium', 'group'] as const;
export const FEATURED_OFFER: OfferId = 'group';

export type Plan = {
	id: string;
	offer: OfferId;
	cycle: Cycle;
	/** Total in agorot = app + zoom. */
	price: number;
	app: number;
	zoom: number;
	/** Months paid for. */
	months: number;
	/** Includes COBE: COBE alone or added on. */
	cobe: boolean;
	/** COBE added on: the id ends with COBE_SUFFIX. */
	bundle: boolean;
};

const COBE_SUFFIX = '-cobe';

/** Year, month (0-11) and day in Israel. */
export function israelDate(at: Date) {
	const [y, m, d] = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' })
		.format(at)
		.split('-')
		.map(Number);
	return { y, m: m - 1, d };
}

type Parsed = { offer: OfferId; cycle: Cycle; bundle: boolean };

/** "premium-month-cobe" -> its parts; undefined for an id the catalogue doesn't know. */
function parse(id: string): Parsed | undefined {
	const bundle = id.endsWith(COBE_SUFFIX);
	const [offer, cycle, ...rest] = (bundle ? id.slice(0, -COBE_SUFFIX.length) : id).split('-');
	if (rest.length || !CYCLES.includes(cycle as Cycle) || !(offer in MONTHLY.regular)) return;
	if (bundle && offer === 'cobe') return;
	return { offer: offer as OfferId, cycle: cycle as Cycle, bundle };
}

export type Products = { app: boolean; cobe: boolean; lessons: boolean };

/** What an order of this plan opens, whatever the date; undefined for an unknown id.
 *  `lessons`: the weekly group Zoom lesson. */
export function productsOf(id: string): Products | undefined {
	const parsed = parse(id);
	return (
		parsed && {
			app: parsed.offer !== 'cobe',
			cobe: parsed.offer === 'cobe' || parsed.bundle,
			lessons: parsed.offer === 'group'
		}
	);
}

/** "group-pack6" or "premium-month-cobe"; undefined for an unknown id.
 *  `pricing` other than PRICING is for the page's preview only. */
export function planById(
	id: string | null | undefined,
	pricing: Pricing = PRICING
): Plan | undefined {
	const parsed = id ? parse(id) : undefined;
	if (!id || !parsed) return;
	const { offer, cycle, bundle } = parsed;
	const monthly = MONTHLY[pricing][offer][cycle];
	const split = { ...monthly, app: monthly.app + (bundle ? COBE_ADDON[cycle] : 0) };
	return build(id, offer, cycle, split, CYCLE_MONTHS[cycle], bundle);
}

function build(
	id: string,
	offer: OfferId,
	cycle: Cycle,
	monthly: Split,
	months: number,
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
		cobe: offer === 'cobe' || bundle,
		bundle
	};
}

export const planId = (offer: OfferId, cycle: Cycle, cobe = false) =>
	`${offer}-${cycle}${cobe ? COBE_SUFFIX : ''}`;

/** The same plan with COBE added or removed; undefined when it can't take COBE. */
export function withCobe(plan: Plan, on: boolean, pricing: Pricing = PRICING): Plan | undefined {
	return planById(planId(plan.offer, plan.cycle, on), pricing);
}

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const defaultPlan = (): Plan => planById('premium-pack6')!;

export function isPurchasable(plan: Plan | undefined): plan is Plan {
	return !!plan && plan.price > 0;
}

/** Whole shekels a month, rounded. */
export const monthlyShekels = (agorot: number, months: number) => Math.round(agorot / months / 100);

/** Whole percent a plan saves against paying monthly for the same months. */
export const savingPercent = (plan: Plan, monthly: Plan) =>
	Math.max(0, Math.round((1 - plan.price / (monthly.price * plan.months)) * 100));

/** 4900 -> "49", 4950 -> "49.50" */
export function formatPrice(agorot: number): string {
	return agorot % 100 === 0 ? String(agorot / 100) : (agorot / 100).toFixed(2);
}
