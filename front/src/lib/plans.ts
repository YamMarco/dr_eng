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

export type Plan = {
	id: PlanId;
	/** Price in agorot (ILS cents). 0 = free tier. */
	price: number;
	/** How long one purchase gives access. */
	months: number;
	/** Not offered yet. */
	soon?: boolean;
};

export const PLANS: Plan[] = [
	{ id: 'free', price: 0, months: 0, soon: true },
	{ id: 'premium-month', price: 4900, months: 1 },
	{ id: 'premium-year', price: 29900, months: 12 },
	{ id: 'group-month', price: 15000, months: 1 },
	{ id: 'group-year', price: 119000, months: 12 },
	{ id: 'personal-month', price: 39000, months: 1 },
	{ id: 'personal-year', price: 349000, months: 12 },
	{ id: 'cobe-month', price: 5900, months: 1 },
	{ id: 'cobe-year', price: 39000, months: 12 }
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

/** A private tutor's hourly rate, in agorot: the page's price anchor. */
export const TUTOR_HOUR = 15000;

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const DEFAULT_PLAN: PlanId = 'premium-year';

export function planById(id: string | null | undefined): Plan | undefined {
	return PLANS.find((plan) => plan.id === id);
}

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
