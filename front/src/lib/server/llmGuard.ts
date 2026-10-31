// Who may spend LLM money: every /api/grade, /api/speak, /api/chat-speak and /api/ocr call passes
// here first. hooks.server.ts enforces sign-in; this checks again and fails closed.
// - Outside dev: accounts and the database must be on, and the user signed in.
// - Billing on: a plan with the product is required, the app or COBE (staff always pass).
// - A per-user daily quota and a global one, counted in Postgres so they hold across instances.
// - COBE (live AI chat on audio, the costly part) also has a monthly quota per user.
// - A short burst limiter in memory (per instance) catches loops and scripts.
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { cobeVisible } from '$lib/alpha';
import { access, billingEnabled } from './billing';
import { accountsEnabled } from './supabase';
import { db } from './db';
import { llmUsage } from './db/schema';

/** Calls per user per day (UTC). One exam submit is 2 calls (reading batch + essay). */
const DAILY_LIMIT = 80;
/** All students together per day: a ceiling on spend (many new accounts each using their quota). */
const GLOBAL_DAILY_LIMIT = 1000;
/** COBE calls per user per calendar month (~₪0.06 each): caps a heavy user below the COBE price. */
const COBE_MONTHLY_LIMIT = 400;

export type Product = 'app' | 'cobe';

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

/** Counts this call and returns the user's total for today. */
async function countToday(userId: string, product: Product): Promise<number> {
	const cobe = product === 'cobe' ? 1 : 0;
	const [row] = await db!
		.insert(llmUsage)
		.values({ userId, calls: 1, cobeCalls: cobe })
		.onConflictDoUpdate({
			target: [llmUsage.userId, llmUsage.day],
			set: { calls: sql`${llmUsage.calls} + 1`, cobeCalls: sql`${llmUsage.cobeCalls} + ${cobe}` }
		})
		.returning({ calls: llmUsage.calls });
	return row.calls;
}

async function cobeThisMonth(userId: string): Promise<number> {
	const [row] = await db!
		.select({ calls: sql<number>`coalesce(sum(${llmUsage.cobeCalls}), 0)::int` })
		.from(llmUsage)
		.where(
			sql`${llmUsage.userId} = ${userId} and ${llmUsage.day} >= date_trunc('month', current_date)`
		);
	return row.calls;
}

async function countAllToday(): Promise<number> {
	const [row] = await db!
		.select({ calls: sql<number>`coalesce(sum(${llmUsage.calls}), 0)::int` })
		.from(llmUsage)
		.where(sql`${llmUsage.day} = current_date`);
	return row.calls;
}

/** Throws 402 (no plan with the product) or 429 (over a limit); otherwise counts the call. */
export async function guardLlm(
	locals: App.Locals,
	clientAddress: string,
	product: Product
): Promise<void> {
	const { userId, isAdmin } = locals;
	// Without accounts or the database there's no plan or quota to check: deny.
	if (!dev && (!accountsEnabled || !db)) throw error(503, 'accounts are not configured');
	if (accountsEnabled && !userId) throw error(401, 'sign in required');
	if (burstLimited(userId ?? clientAddress)) throw error(429, 'too many requests');
	if (!dev && product === 'cobe' && !cobeVisible(isAdmin)) throw error(403, 'not open yet');
	if (!userId || isAdmin || !db) return;
	if (billingEnabled && !(await access(userId))[product]) throw error(402, 'no active plan');
	if ((await countAllToday()) >= GLOBAL_DAILY_LIMIT) throw error(503, 'service is busy');
	if (product === 'cobe' && (await cobeThisMonth(userId)) >= COBE_MONTHLY_LIMIT)
		throw error(429, 'monthly limit reached');
	if ((await countToday(userId, product)) > DAILY_LIMIT) throw error(429, 'daily limit reached');
}
