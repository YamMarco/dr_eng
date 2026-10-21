// Join the waitlist from the home page. The one public /api route (see hooks.server.ts):
// email only, no account. A daily cap bounds what a script can write.
import { json } from '@sveltejs/kit';
import { gt, sql } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { waitlist } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

const DAILY_CAP = 500;

const body = z.object({
	email: z.string().trim().toLowerCase().pipe(z.email().max(254)),
	// Honeypot: a hidden field people never fill.
	website: z.string().max(200).optional()
});

export const POST: RequestHandler = async ({ request }) => {
	if (!db) return json({ error: 'unavailable' }, { status: 503 });
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) return json({ error: 'invalid' }, { status: 400 });
	if (parsed.data.website) return json({ ok: true });

	const [{ count }] = await db
		.select({ count: sql<number>`count(*)::int` })
		.from(waitlist)
		.where(gt(waitlist.createdAt, sql`now() - interval '1 day'`));
	if (count >= DAILY_CAP) return json({ error: 'busy' }, { status: 429 });

	await db.insert(waitlist).values({ email: parsed.data.email }).onConflictDoNothing();
	return json({ ok: true });
};
