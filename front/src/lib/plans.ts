// The plan catalogue, shared by the plans page, checkout and the server (which
// prices orders from here, never from the client). Names and feature lists are
// UI text and live in i18n (`plans.items[id]`, `plans.offers[offer]`). Prices are placeholders.

export type PlanId =
	| 'free'
	| 'premium-month'
	| 'premium-year'
	| 'group-month'
	| 'group-year'
	| 'personal-month'
	| 'personal-year'
	| 'cobe-month'
	| 'cobe-year';

/** A plan with COBE added on (see `planById`). */
export type BundleId = `${PlanId}${typeof COBE_SUFFIX}`;

export type Plan = {
	id: PlanId | BundleId;
	/** Price in agorot (ILS cents). 0 = free tier. */
	price: number;
	/** How long one purchase gives access. */
	months: number;
	/** Not offered yet. */
	soon?: boolean;
	/** Includes COBE (built in, or added on as a bundle). */
	cobe?: boolean;
};

export const PLANS: Plan[] = [
	{ id: 'free', price: 0, months: 0, soon: true },
	// Software only: a deep yearly discount costs nothing to serve.
	{ id: 'premium-month', price: 4900, months: 1 },
	{ id: 'premium-year', price: 29900, months: 12 },
	// Teacher hours: small yearly discounts, COBE built in.
	{ id: 'group-month', price: 14900, months: 1, cobe: true },
	{ id: 'group-year', price: 129000, months: 12, cobe: true },
	{ id: 'personal-month', price: 59000, months: 1, cobe: true },
	{ id: 'personal-year', price: 599000, months: 12, cobe: true },
	{ id: 'cobe-month', price: 5900, months: 1, cobe: true },
	{ id: 'cobe-year', price: 39000, months: 12, cobe: true }
];

export type Cycle = 'month' | 'year';
export type OfferId = 'premium' | 'group' | 'personal' | 'cobe';

/** What the plans page sells: one card per offer, a plan per billing cycle. */
export const OFFERS: { id: OfferId; month: PlanId; year: PlanId }[] = [
	{ id: 'premium', month: 'premium-month', year: 'premium-year' },
	{ id: 'group', month: 'group-month', year: 'group-year' },
	{ id: 'personal', month: 'personal-month', year: 'personal-year' },
	{ id: 'cobe', month: 'cobe-month', year: 'cobe-year' }
];

/** The offer the page pushes. */
export const FEATURED_OFFER: OfferId = 'group';

const COBE_SUFFIX = '-cobe';

/** COBE added to a plan costs less than COBE alone. */
export const COBE_ADDON: Record<Cycle, number> = { month: 3900, year: 29000 };

/** A private tutor's hourly rate, in agorot: the page's price anchor. */
export const TUTOR_HOUR = 15000;

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const DEFAULT_PLAN: PlanId = 'premium-year';

export const cycleOf = (plan: Plan): Cycle => (plan.months === 1 ? 'month' : 'year');

/** "group-month" or a bundle, "group-month-cobe": the base plan's price plus COBE_ADDON. */
export function planById(id: string | null | undefined): Plan | undefined {
	if (!id?.endsWith(COBE_SUFFIX)) return PLANS.find((plan) => plan.id === id);
	const base = planById(id.slice(0, -COBE_SUFFIX.length));
	if (!base || base.cobe || base.soon || base.price === 0) return;
	return {
		...base,
		id: `${base.id as PlanId}${COBE_SUFFIX}`,
		price: base.price + COBE_ADDON[cycleOf(base)],
		cobe: true
	};
}

/** The plan id, with COBE added when `cobe` is on. */
export const withCobe = (id: PlanId, cobe: boolean): string => (cobe ? id + COBE_SUFFIX : id);

/** A plan with COBE added on, not built in. */
export const isBundle = (plan: Plan): boolean => plan.id.endsWith(COBE_SUFFIX);

/** "premium-month-cobe" -> "premium-month" */
export const baseId = (plan: Plan): PlanId =>
	(isBundle(plan) ? plan.id.slice(0, -COBE_SUFFIX.length) : plan.id) as PlanId;

export function isPurchasable(plan: Plan | undefined): plan is Plan {
	return !!plan && plan.price > 0 && !plan.soon;
}

/** Whole shekels a month, rounded. */
export function monthlyShekels(plan: Plan): number {
	return Math.round(plan.price / plan.months / 100);
}

/** How much the yearly plan saves over paying monthly, in percent. */
export function yearSavingPercent(month: Plan, year: Plan): number {
	return Math.round((1 - year.price / (month.price * year.months)) * 100);
}

/** 4900 -> "49", 4950 -> "49.50" */
export function formatPrice(agorot: number): string {
	return agorot % 100 === 0 ? String(agorot / 100) : (agorot / 100).toFixed(2);
}
