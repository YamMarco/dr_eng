// Who may spend LLM money: every /api/grade, /api/speak and /api/ocr call passes
// here first. Sign-in is already enforced by hooks.server.ts (once accounts are on).
// - Billing on: an active plan is required (staff always pass).
// - A per-user daily quota, counted in Postgres so it holds across server instances.
// - A short burst limiter in memory (per instance) catches loops and scripts.
import { error } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { accessUntil, billingEnabled } from './billing';
import { db } from './db';
import { llmUsage } from './db/schema';

/** Calls per user per day (UTC). One exam submit is 2 calls (reading batch + essay). */
const DAILY_LIMIT = 150;

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

/** Throws 402 (no plan) or 429 (over a limit); otherwise counts the call. */
export async function guardLlm(locals: App.Locals, clientAddress: string): Promise<void> {
	const { userId, isAdmin } = locals;
	if (burstLimited(userId ?? clientAddress)) throw error(429, 'too many requests');
	if (!userId || isAdmin || !db) return;
	if (billingEnabled && !(await accessUntil(userId))) throw error(402, 'no active plan');
	if ((await countToday(userId)) > DAILY_LIMIT) throw error(429, 'daily limit reached');
}
