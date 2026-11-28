// Renewal reminder email, 7 days before a subscription renews; run hourly
// (.github/workflows/reminders.yml). Public route by name (hooks.server.ts): it checks
// CRON_SECRET itself and fails closed. Once per order (renewalRemindedAt). Only the user's
// latest-ending paid order renews, so a reminder goes out for that one alone.
// The renewal charge itself waits for the payment provider (docs/handoffs/payments.md).
import { error, json } from '@sveltejs/kit';
import { and, eq, gt, isNull, lte, sql } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
import { cronAuthorized } from '$lib/server/cron';
import { db } from '$lib/server/db';
import { orders } from '$lib/server/db/schema';
import { subscription } from '$lib/server/billing';
import { adminClient } from '$lib/server/supabase';
import { renewalHtml, renewalSubject } from '$lib/server/renewalEmail';
import type { RequestHandler } from './$types';

const FROM = 'EngUp <team@engup.co.il>';
const REPLY_TO = 'support@engup.co.il';
const REMIND_DAYS = 7;

export const GET: RequestHandler = async ({ request }) => {
	const admin = adminClient();
	if (!env.CRON_SECRET || !env.RESEND_API_KEY || !db || !admin)
		error(503, 'renewal reminders are not configured');
	if (!cronAuthorized(request.headers.get('authorization'))) error(401, 'unauthorized');

	const due = await db
		.select({ id: orders.id, userId: orders.userId })
		.from(orders)
		.where(
			and(
				eq(orders.status, 'paid'),
				isNull(orders.renewCancelledAt),
				isNull(orders.renewalRemindedAt),
				gt(orders.accessUntil, sql`now()`),
				lte(orders.accessUntil, sql`now() + make_interval(days => ${REMIND_DAYS})`)
			)
		);

	let sent = 0;
	for (const order of due) {
		const sub = await subscription(order.userId);
		if (sub?.orderId !== order.id || !sub.renews) continue;
		const { data } = await admin.auth.admin.getUserById(order.userId);
		const to = data.user?.email;
		if (!to) continue;
		const renewal = { planId: sub.renewPlanId, price: sub.renewPrice, at: sub.until };
		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: FROM,
				to: [to],
				reply_to: [REPLY_TO],
				subject: renewalSubject(renewal),
				html: renewalHtml(renewal)
			}),
			signal: AbortSignal.timeout(15_000)
		}).catch(() => null);
		if (!res?.ok) continue; // the next hourly run retries
		await db.update(orders).set({ renewalRemindedAt: new Date() }).where(eq(orders.id, order.id));
		sent++;
	}
	return json({ due: due.length, sent });
};
