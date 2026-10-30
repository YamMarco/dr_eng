// A student's feedback report (the "משוב" sheet): emailed to support@ via Resend, with the
// page URL, the lesson screen and an optional screenshot. Signed-in only; daily caps per
// user and overall bound what one account or a script can send.
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { and, eq, gt, sql } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { feedbackReports } from '$lib/server/db/schema';
import { feedbackHtml, feedbackSubject } from '$lib/server/feedbackEmail';
import type { RequestHandler } from './$types';

const USER_DAILY = 10;
const GLOBAL_DAILY = 300;
const TO = 'support@engup.co.il';
const FROM = 'EngUp <team@engup.co.il>';
const JPEG_PREFIX = 'data:image/jpeg;base64,';

const body = z.object({
	message: z.string().trim().max(2000),
	url: z.url().max(500),
	screen: z.string().max(200),
	viewport: z.string().max(40),
	language: z.string().max(10),
	// ~1.5 MB of JPEG; the client sends at most 1280 px wide.
	screenshot: z
		.string()
		.max(2_000_000)
		.regex(/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/)
		.optional()
});

const lastDay = sql`now() - interval '1 day'`;

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.userId) error(401, 'sign in required');
	if (!db || !env.RESEND_API_KEY) error(503, 'feedback is off');
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) error(400, 'invalid');
	const report = parsed.data;
	if (!report.message && !report.screenshot) error(400, 'empty');

	const [mine, all] = await Promise.all([
		db
			.select({ count: sql<number>`count(*)::int` })
			.from(feedbackReports)
			.where(and(eq(feedbackReports.userId, locals.userId), gt(feedbackReports.createdAt, lastDay))),
		db
			.select({ count: sql<number>`count(*)::int` })
			.from(feedbackReports)
			.where(gt(feedbackReports.createdAt, lastDay))
	]);
	if (mine[0].count >= USER_DAILY || all[0].count >= GLOBAL_DAILY)
		return json({ error: 'limit' }, { status: 429 });
	await db.insert(feedbackReports).values({ userId: locals.userId });

	const email = {
		...report,
		userId: locals.userId,
		email: locals.email,
		userAgent: (request.headers.get('user-agent') ?? '').slice(0, 300),
		screenshot: !!report.screenshot
	};
	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: FROM,
			to: [TO],
			reply_to: locals.email ? [locals.email] : undefined,
			subject: feedbackSubject(email),
			html: feedbackHtml(email, new Date()),
			attachments: report.screenshot
				? [
						{
							filename: 'screenshot.jpg',
							content: report.screenshot.slice(JPEG_PREFIX.length),
							content_id: 'screenshot'
						}
					]
				: undefined
		}),
		signal: AbortSignal.timeout(15_000)
	}).catch(() => null);
	if (!res?.ok) error(502, 'send failed');
	return json({ ok: true });
};
