// Who may spend LLM money: every /api/grade, /api/speak, /api/chat-speak and /api/ocr call passes
// here first. hooks.server.ts enforces sign-in; this checks again and fails closed.
// - Outside dev: accounts must be on and the user signed in.
// - Billing on: an active plan is required (staff always pass).
// - A per-user daily quota and a global one, counted in Postgres so they hold across instances.
// - A short burst limiter in memory (per instance) catches loops and scripts.
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { accessUntil, billingEnabled } from './billing';
import { accountsEnabled } from './supabase';
import { db } from './db';
import { llmUsage } from './db/schema';

/** Calls per user per day (UTC). One exam submit is 2 calls (reading batch + essay). */
const DAILY_LIMIT = 80;
/** All students together per day: a ceiling on spend (many new accounts each using their quota). */
const GLOBAL_DAILY_LIMIT = 1000;

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
async function countToday(userId: string): Promise<number> {
	const [row] = await db!
		.insert(llmUsage)
		.values({ userId, calls: 1 })
		.onConflictDoUpdate({
			target: [llmUsage.userId, llmUsage.day],
			set: { calls: sql`${llmUsage.calls} + 1` }
		})
		.returning({ calls: llmUsage.calls });
	return row.calls;
}

async function countAllToday(): Promise<number> {
	const [row] = await db!
		.select({ calls: sql<number>`coalesce(sum(${llmUsage.calls}), 0)::int` })
		.from(llmUsage)
		.where(sql`${llmUsage.day} = current_date`);
	return row.calls;
}

/** Throws 402 (no plan) or 429 (over a limit); otherwise counts the call. */
export async function guardLlm(locals: App.Locals, clientAddress: string): Promise<void> {
	const { userId, isAdmin } = locals;
	if (!dev && !accountsEnabled) throw error(503, 'accounts are not configured');
	if (accountsEnabled && !userId) throw error(401, 'sign in required');
	if (burstLimited(userId ?? clientAddress)) throw error(429, 'too many requests');
	if (!userId || isAdmin || !db) return;
	if (billingEnabled && !(await accessUntil(userId))) throw error(402, 'no active plan');
	if ((await countAllToday()) >= GLOBAL_DAILY_LIMIT) throw error(503, 'service is busy');
	if ((await countToday(userId)) > DAILY_LIMIT) throw error(429, 'daily limit reached');
}
