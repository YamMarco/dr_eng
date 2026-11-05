// Account deletion (the app stores require it in-app). The user is already
// verified by hooks.server.ts; deleting needs the admin (secret) key.
// Progress and usage rows go first (no FK to auth.users), and the Zoom lesson
// registration is cancelled. Orders stay: purchase records are kept for tax law.
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import {
	examAttempts,
	llmUsage,
	progress,
	pushSubscriptions,
	zoomRegistrants
} from '$lib/server/db/schema';
import { adminClient } from '$lib/server/supabase';
import { unregister, zoomEnabled } from '$lib/server/zoom';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ locals }) => {
	const admin = adminClient();
	if (!locals.userId || !admin) error(503, 'accounts are not configured');
	if (db) {
		await db.delete(progress).where(eq(progress.userId, locals.userId));
		await db.delete(llmUsage).where(eq(llmUsage.userId, locals.userId));
		await db.delete(examAttempts).where(eq(examAttempts.userId, locals.userId));
		await db.delete(pushSubscriptions).where(eq(pushSubscriptions.userId, locals.userId));
		const [lesson] = await db
			.delete(zoomRegistrants)
			.where(eq(zoomRegistrants.userId, locals.userId))
			.returning({ registrantId: zoomRegistrants.registrantId });
		// Best effort: the account goes even if Zoom is down.
		if (lesson && zoomEnabled) await unregister(lesson.registrantId).catch(() => {});
	}
	const { error: failed } = await admin.auth.admin.deleteUser(locals.userId);
	if (failed) error(500, 'delete failed');
	return new Response(null, { status: 204 });
};
