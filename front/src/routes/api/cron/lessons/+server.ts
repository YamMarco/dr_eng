// Run hourly (.github/workflows/reminders.yml): a student whose group lessons ended (plan
// over or refunded) loses their Zoom registration, so their personal join link stops working.
// Public route by name (hooks.server.ts): it checks CRON_SECRET itself and fails closed.
// A registrant without any order is staff (only a plan or staff can register): kept.
import { error, json } from '@sveltejs/kit';
import { eq, inArray } from 'drizzle-orm';
import { access } from '$lib/server/billing';
import { cronAuthorized } from '$lib/server/cron';
import { db } from '$lib/server/db';
import { orders, zoomRegistrants } from '$lib/server/db/schema';
import { unregister, zoomEnabled } from '$lib/server/zoom';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	if (!zoomEnabled || !db) error(503, 'lessons are not configured');
	if (!cronAuthorized(request.headers.get('authorization'))) error(401, 'unauthorized');

	const rows = await db.select().from(zoomRegistrants);
	if (!rows.length) return json({ removed: 0 });
	const buyers = new Set(
		(
			await db
				.selectDistinct({ userId: orders.userId })
				.from(orders)
				.where(
					inArray(
						orders.userId,
						rows.map((row) => row.userId)
					)
				)
		).map((row) => row.userId)
	);

	let removed = 0;
	for (const row of rows) {
		if (!buyers.has(row.userId) || (await access(row.userId)).lessons) continue;
		await unregister(row.registrantId);
		await db.delete(zoomRegistrants).where(eq(zoomRegistrants.userId, row.userId));
		removed++;
	}
	return json({ removed });
};
