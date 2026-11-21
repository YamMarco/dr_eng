// Staff dashboard numbers (GET): non-staff users and waitlist signups.
import { error, json } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { checkAuth } from '$lib/content-edit/auth';
import { db } from '$lib/server/db';
import { waitlist } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	// Second check after hooks.server.ts.
	if (!checkAuth(locals)) error(403, 'staff only');
	if (!db) return json({ error: 'unavailable' }, { status: 503 });

	const [users, waiting] = await Promise.all([
		db.execute<{ count: number }>(
			sql`select count(*)::int as count from auth.users where coalesce(raw_app_meta_data->>'role', '') <> 'admin'`
		),
		db.select({ count: sql<number>`count(*)::int` }).from(waitlist)
	]);
	return json({ users: users[0].count, waitlist: waiting[0].count });
};
