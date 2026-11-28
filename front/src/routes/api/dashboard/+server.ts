// Staff dashboard numbers (GET): non-staff users.
import { error, json } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { checkAuth } from '$lib/content-edit/auth';
import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	// Second check after hooks.server.ts.
	if (!checkAuth(locals)) error(403, 'staff only');
	if (!db) return json({ error: 'unavailable' }, { status: 503 });

	const users = await db.execute<{ count: number }>(
		sql`select count(*)::int as count from auth.users where coalesce(raw_app_meta_data->>'role', '') <> 'admin'`
	);
	return json({ users: users[0].count });
};
