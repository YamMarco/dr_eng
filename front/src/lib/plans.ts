// The plan catalogue, shared by the plans page, checkout and the server (which
// prices orders from here, never from the client). Names and feature lists are
// UI text and live in i18n (`plans.items[id]`). Prices are placeholders.

export type PlanId = 'free' | 'premium-month' | 'premium-year';

export type Plan = {
	id: PlanId;
	/** Price in agorot (ILS cents). 0 = free tier. */
	price: number;
	/** How long one purchase gives access. */
	months: number;
	/** Not offered yet: shown on the plans page as "coming soon". */
	soon?: boolean;
	highlight?: boolean;
};

export const PLANS: Plan[] = [
	{ id: 'free', price: 0, months: 0, soon: true },
	{ id: 'premium-month', price: 4900, months: 1 },
	{ id: 'premium-year', price: 29900, months: 12, highlight: true }
];

/** What a coupon without its own plan unlocks, and what the in-app code box redeems. */
export const DEFAULT_PLAN: PlanId = 'premium-year';

export function planById(id: string | null | undefined): Plan | undefined {
	return PLANS.find((plan) => plan.id === id);
}

export function isPurchasable(plan: Plan | undefined): plan is Plan {
	return !!plan && plan.price > 0 && !plan.soon;
}

/** 4900 -> "49", 4950 -> "49.50" */
export function formatPrice(agorot: number): string {
	return agorot % 100 === 0 ? String(agorot / 100) : (agorot / 100).toFixed(2);
}
