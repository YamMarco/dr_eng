// Staff expenses page: the shared shape. The list itself is server-only
// ($lib/server/expenses), so it never ships in the client bundle.

export type Currency = 'USD' | 'ILS';
export type Cycle = 'month' | 'year' | 'once';

export type Expense = {
	name: string;
	amount: number;
	currency: Currency;
	cycle: Cycle;
	/** ISO date the charge started (or was paid, for 'once'). */
	since?: string;
	note?: string;
	url?: string;
};

export const cycleLabel: Record<Cycle, string> = {
	month: 'חודשי',
	year: 'שנתי',
	once: 'חד-פעמי'
};

/** Recurring cost per month; one-time charges count as 0. */
export function monthly(expense: Expense): number {
	if (expense.cycle === 'month') return expense.amount;
	if (expense.cycle === 'year') return expense.amount / 12;
	return 0;
}
