// Staff finance page: the shared shape. The list itself is server-only
// ($lib/server/finance), so it never ships in the client bundle.

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

// Split 50/50 between the two partners.
export type Partner = 'yam' | 'emil';

export const partnerName: Record<Partner, string> = { yam: 'ים', emil: 'אמיל' };

/** A real payment: a shared cost one of us paid, or a transfer between us. */
export type LedgerEntry = {
	/** ISO date. */
	date?: string;
	what: string;
	amount: number;
	currency: Currency;
	paidBy: Partner;
	/** A transfer to the other partner (not a shared cost). */
	transfer?: boolean;
};

/** Per currency: how much Emil owes Yam (negative = Yam owes Emil). */
export function emilOwesYam(ledger: LedgerEntry[], currency: Currency): number {
	return ledger
		.filter((e) => e.currency === currency)
		.reduce((sum, e) => {
			const credit = e.transfer ? e.amount : e.amount / 2;
			return sum + (e.paidBy === 'yam' ? credit : -credit);
		}, 0);
}
