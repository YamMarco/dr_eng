// Daily practice reminder, run hourly (.github/workflows/reminders.yml). Public route by name
// (hooks.server.ts) because no user calls it: it checks CRON_SECRET itself and fails closed.
// Sends to devices whose chosen hour has come, and skips students who already practiced today
// (their synced `activity-days`).
import { timingSafeEqual } from 'node:crypto';
import { error, json } from '@sveltejs/kit';
import { and, between, eq, inArray, isNull, lt, or } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { progress, pushSubscriptions } from '$lib/server/db/schema';
import { pushEnabled, sendPush } from '$lib/server/push';
import type { RequestHandler } from './$types';

const MESSAGES = [
	'כמה דקות של אנגלית היום? השיעור הבא מחכה לכם.',
	'עוד יום של תרגול מקרב אתכם ליעד השבועי.',
	'סבב קצר של מילים? זה לוקח פחות מחמש דקות.'
];

function authorized(header: string | null): boolean {
	const expected = Buffer.from(`Bearer ${env.CRON_SECRET}`);
	const got = Buffer.from(header ?? '');
	return got.length === expected.length && timingSafeEqual(got, expected);
}

/** A late or missed run still sends, up to this many hours after the chosen one. */
const LATE_HOURS = 2;

/** Today in Israel, as `activity-days` stores it (YYYY-MM-DD). */
const israelDay = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jerusalem' });
const israelHour = () =>
	Number(
		new Date().toLocaleString('en-US', {
			timeZone: 'Asia/Jerusalem',
			hour: 'numeric',
			hourCycle: 'h23'
		})
	);

export const GET: RequestHandler = async ({ request }) => {
	if (!env.CRON_SECRET || !pushEnabled || !db) error(503, 'reminders are not configured');
	if (!authorized(request.headers.get('authorization'))) error(401, 'unauthorized');

	const today = israelDay();
	const hour = israelHour();
	const subs = await db
		.select()
		.from(pushSubscriptions)
		.where(
			and(
				between(pushSubscriptions.remindHour, hour - LATE_HOURS, hour),
				or(isNull(pushSubscriptions.lastSentDay), lt(pushSubscriptions.lastSentDay, today))
			)
		);
	if (!subs.length) return json({ sent: 0 });

	const days = await db
		.select({ userId: progress.userId, value: progress.value })
		.from(progress)
		.where(
			and(
				eq(progress.key, 'activity-days'),
				inArray(progress.userId, [...new Set(subs.map((s) => s.userId))])
			)
		);
	const practiced = new Set(
		days.filter((d) => Array.isArray(d.value) && d.value.includes(today)).map((d) => d.userId)
	);

	const body = MESSAGES[new Date().getDate() % MESSAGES.length];
	const sent: string[] = [];
	const gone: string[] = [];
	await Promise.allSettled(
		subs
			.filter((s) => !practiced.has(s.userId))
			.map(async (s) => {
				const ok = await sendPush(s, { title: 'EngUp', body, url: '/app' });
				(ok ? sent : gone).push(s.endpoint);
			})
	);
	if (sent.length)
		await db
			.update(pushSubscriptions)
			.set({ lastSentDay: today })
			.where(inArray(pushSubscriptions.endpoint, sent));
	if (gone.length)
		await db.delete(pushSubscriptions).where(inArray(pushSubscriptions.endpoint, gone));
	return json({ sent: sent.length, removed: gone.length });
};
