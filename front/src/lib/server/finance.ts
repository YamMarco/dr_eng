// Our running costs, edited by hand (like the lessons' content). Served to staff
// only by /api/finance. Amounts of 0 are still to fill in.
import type { Expense, LedgerEntry } from '$lib/finance';

export const expenses: Expense[] = [
	{
		name: 'Vercel',
		amount: 0,
		currency: 'USD',
		cycle: 'month',
		url: 'https://vercel.com/dashboard'
	},
	{
		name: 'Supabase',
		amount: 0,
		currency: 'USD',
		cycle: 'month',
		url: 'https://supabase.com/dashboard'
	},
	{ name: 'Vercel AI Gateway', amount: 0, currency: 'USD', cycle: 'month', note: 'לפי שימוש' },
	{ name: 'Gemini API', amount: 0, currency: 'USD', cycle: 'month', note: 'לפי שימוש' },
	{ name: 'Resend', amount: 0, currency: 'USD', cycle: 'month', url: 'https://resend.com' },
	{ name: 'GitHub', amount: 0, currency: 'USD', cycle: 'month' },
	{ name: 'דומיין', amount: 94, currency: 'ILS', cycle: 'year' }
];

// What each of us actually paid, split 50/50. Add a line per payment or transfer.
export const ledger: LedgerEntry[] = [
	{ what: 'דומיין', amount: 94, currency: 'ILS', paidBy: 'yam' },
	{ what: 'החזר חצי דומיין (מזומן)', amount: 47, currency: 'ILS', paidBy: 'emil', transfer: true },
	{ what: 'Gemini API (טעינה ראשונה)', amount: 15, currency: 'ILS', paidBy: 'yam' }
];
