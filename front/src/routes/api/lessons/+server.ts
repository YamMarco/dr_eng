// The weekly group Zoom lesson (home's lesson card). GET: the next lesson, the student's
// personal join link and the latest recording, for a plan with group lessons (staff pass).
// POST { name }: registers the student in the Zoom meeting under that name, once.
// The user comes from the verified token (hooks.server.ts), never the body.
import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { zoomRegistrants } from '$lib/server/db/schema';
import { access } from '$lib/server/billing';
import { jsonBody } from '$lib/server/llmRoute';
import { register, schedule, zoomEnabled } from '$lib/server/zoom';
import { NAME_MAX, NAME_MIN, NAME_PATTERN, nextSlot, type LessonsInfo } from '$lib/liveLesson';
import type { RequestHandler } from './$types';

const nameBody = z.object({
	name: z.string().trim().min(NAME_MIN).max(NAME_MAX).regex(NAME_PATTERN)
});

/** Off (503) without Zoom, the DB or a signed-in user. Fails closed: a failed access
 *  check throws, it never opens the lesson. */
async function entitled(locals: App.Locals): Promise<{ userId: string; ok: boolean }> {
	if (!zoomEnabled || !db || !locals.userId) error(503, 'lessons are not configured');
	const ok = locals.isAdmin === true || !!(await access(locals.userId)).lessons;
	return { userId: locals.userId, ok };
}

async function info(userId: string): Promise<LessonsInfo> {
	const [row] = await db!
		.select({ joinUrl: zoomRegistrants.joinUrl })
		.from(zoomRegistrants)
		.where(eq(zoomRegistrants.userId, userId));
	let lessons;
	try {
		lessons = await schedule();
	} catch {
		error(502, 'zoom unavailable');
	}
	const next = nextSlot(lessons.slots, Date.now());
	if (!row) return { status: 'needs-name', next };
	return { status: 'ready', next, joinUrl: row.joinUrl, recording: lessons.recording };
}

export const GET: RequestHandler = async ({ locals }) => {
	const { userId, ok } = await entitled(locals);
	if (!ok) return json({ status: 'locked' } satisfies LessonsInfo);
	return json(await info(userId));
};

export const POST: RequestHandler = async ({ request, locals }) => {
	const { userId, ok } = await entitled(locals);
	if (!ok) error(403, 'no group lessons in this plan');
	const { name } = await jsonBody(request, nameBody);

	const [existing] = await db!
		.select({ userId: zoomRegistrants.userId })
		.from(zoomRegistrants)
		.where(eq(zoomRegistrants.userId, userId));
	if (!existing) {
		let registrant;
		try {
			registrant = await register(userId, name);
		} catch {
			error(502, 'zoom unavailable');
		}
		// A concurrent request may have won: the same alias email gets the same registration.
		await db!
			.insert(zoomRegistrants)
			.values({ userId, ...registrant, displayName: name })
			.onConflictDoNothing();
	}
	return json(await info(userId));
};
