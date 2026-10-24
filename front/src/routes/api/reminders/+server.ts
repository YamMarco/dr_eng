// The daily practice reminder: save (POST) or drop (DELETE) this device's push subscription.
// The user comes from the verified token (hooks.server.ts), never the body.
import { error } from '@sveltejs/kit';
import { and, count, eq, ne } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { pushSubscriptions } from '$lib/server/db/schema';
import { isPushEndpoint, pushEnabled } from '$lib/server/push';
import { jsonBody } from '$lib/server/llmRoute';
import type { RequestHandler } from './$types';

/** Devices per account. */
const MAX_DEVICES = 5;

const endpoint = z.string().max(1000).refine(isPushEndpoint);
const key = z
	.string()
	.regex(/^[\w-]+=*$/)
	.max(200);
const subscribeBody = z.object({ endpoint, keys: z.object({ p256dh: key, auth: key }) });
const unsubscribeBody = z.object({ endpoint });

function ready(locals: App.Locals): string {
	if (!pushEnabled || !db || !locals.userId) error(503, 'reminders are not configured');
	return locals.userId;
}

export const POST: RequestHandler = async ({ request, locals }) => {
	const userId = ready(locals);
	const { endpoint, keys } = await jsonBody(request, subscribeBody);
	const [{ devices }] = await db!
		.select({ devices: count() })
		.from(pushSubscriptions)
		.where(and(eq(pushSubscriptions.userId, userId), ne(pushSubscriptions.endpoint, endpoint)));
	if (devices >= MAX_DEVICES) error(429, 'too many devices');
	// Same device, another account: the subscription moves to whoever turned it on last.
	await db!
		.insert(pushSubscriptions)
		.values({ endpoint, userId, ...keys })
		.onConflictDoUpdate({ target: pushSubscriptions.endpoint, set: { userId, ...keys } });
	return new Response(null, { status: 204 });
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
	const userId = ready(locals);
	const { endpoint } = await jsonBody(request, unsubscribeBody);
	await db!
		.delete(pushSubscriptions)
		.where(and(eq(pushSubscriptions.endpoint, endpoint), eq(pushSubscriptions.userId, userId)));
	return new Response(null, { status: 204 });
};
