// Our running costs, edited by hand (like the lessons' content). Served to staff
// only by /api/expenses. Amounts of 0 are still to fill in.
import type { Expense } from '$lib/expenses';

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
	{ name: 'דומיין', amount: 0, currency: 'USD', cycle: 'year' }
];
