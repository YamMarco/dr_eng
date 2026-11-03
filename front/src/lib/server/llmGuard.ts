// Who may spend LLM money: every /api/grade, /api/speak, /api/chat-speak and /api/ocr call passes
// here first. hooks.server.ts enforces sign-in; this checks again and fails closed.
// - Outside dev: accounts and the database must be on, and the user signed in.
// - Billing on: a plan with the product is required, the app or COBE (staff always pass).
// - Caps (server/llmLimits.ts), counted in Postgres so they hold across instances: per user per
//   activity per day, app-wide per day, and COBE per user per month.
// - A short burst limiter in memory (per instance) catches loops and scripts.
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { and, eq, inArray, sql } from 'drizzle-orm';
import { cobeVisible } from '$lib/alpha';
import { access, billingEnabled } from './billing';
import { accountsEnabled } from './supabase';
import { db } from './db';
import { israelToday, llmUsage } from './db/schema';
import {
	COBE_ACTIVITIES,
	COBE_MONTHLY_CAP,
	DAILY_CAPS,
	GLOBAL_DAILY_CAP,
	type Activity
} from './llmLimits';

const BURST_WINDOW_MS = 5 * 60_000;
const BURST_MAX = 30;
const calls = new Map<string, number[]>();

function burstLimited(key: string): boolean {
	const now = Date.now();
	const recent = (calls.get(key) ?? []).filter((t) => now - t < BURST_WINDOW_MS);
	const limited = recent.length >= BURST_MAX;
	if (!limited) recent.push(now);
	calls.set(key, recent);
	return limited;
}

const callsSum = sql<number>`coalesce(sum(${llmUsage.calls}), 0)::int`;

/** Counts this call and returns the user's total for this activity today. */
async function countToday(userId: string, activity: Activity): Promise<number> {
	const [row] = await db!
		.insert(llmUsage)
		.values({ userId, activity, calls: 1 })
		.onConflictDoUpdate({
			target: [llmUsage.userId, llmUsage.day, llmUsage.activity],
			set: { calls: sql`${llmUsage.calls} + 1` }
		})
		.returning({ calls: llmUsage.calls });
	return row.calls;
}

async function cobeThisMonth(userId: string): Promise<number> {
	const [row] = await db!
		.select({ calls: callsSum })
		.from(llmUsage)
		.where(
			and(
				eq(llmUsage.userId, userId),
				inArray(llmUsage.activity, COBE_ACTIVITIES),
				sql`${llmUsage.day} >= date_trunc('month', ${israelToday})`
			)
		);
	return row.calls;
}

async function countAllToday(): Promise<number> {
	const [row] = await db!
		.select({ calls: callsSum })
		.from(llmUsage)
		.where(sql`${llmUsage.day} = ${israelToday}`);
	return row.calls;
}

/** Throws 402 (no plan with the product) or 429 (over a limit); otherwise counts the call. */
export async function guardLlm(
	locals: App.Locals,
	clientAddress: string,
	activity: Activity
): Promise<void> {
	const { userId, isAdmin } = locals;
	const cobe = COBE_ACTIVITIES.includes(activity);
	// Without accounts or the database there's no plan or quota to check: deny.
	if (!dev && (!accountsEnabled || !db)) throw error(503, 'accounts are not configured');
	if (accountsEnabled && !userId) throw error(401, 'sign in required');
	if (burstLimited(userId ?? clientAddress)) throw error(429, 'too many requests');
	if (!dev && cobe && !cobeVisible(isAdmin)) throw error(403, 'not open yet');
	if (!userId || isAdmin || !db) return;
	if (billingEnabled && !(await access(userId))[cobe ? 'cobe' : 'app'])
		throw error(402, 'no active plan');
	if ((await countAllToday()) >= GLOBAL_DAILY_CAP) throw error(503, 'service is busy');
	if (cobe && (await cobeThisMonth(userId)) >= COBE_MONTHLY_CAP)
		throw error(429, 'monthly limit reached');
	const count = await countToday(userId, activity);
	if (count > (DAILY_CAPS[activity] ?? Infinity)) throw error(429, 'daily limit reached');
}
