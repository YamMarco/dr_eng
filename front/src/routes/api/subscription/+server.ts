// The signed-in user's subscriptions (settings), one per product: GET the list; DELETE
// { product: 'app' | 'cobe' | 'all' } turns that auto-renewal off and returns the list.
// Empty when there is none (billing off, no paid order running).
import { error, json } from '@sveltejs/kit';
import { billingEnabled, cancelRenewal, subscriptions } from '$lib/server/billing';
import type { RequestHandler } from './$types';

const view = async (userId: string) =>
	(await subscriptions(userId)).map((sub) => ({
		product: sub.product,
		planId: sub.planId,
		from: sub.from.toISOString(),
		until: sub.until.toISOString(),
		renews: sub.renews,
		renewPrice: sub.renewPrice
	}));

export const GET: RequestHandler = async ({ locals }) => {
	if (!billingEnabled || !locals.userId) return json([]);
	return json(await view(locals.userId));
};

const TARGETS = ['app', 'cobe', 'all'] as const;

export const DELETE: RequestHandler = async ({ locals, request }) => {
	if (!billingEnabled || !locals.userId) error(404, 'no subscription');
	const body = (await request.json().catch(() => ({}))) as { product?: unknown };
	const product = TARGETS.find((target) => target === body.product);
	if (!product) error(400, 'product must be app, cobe or all');
	await cancelRenewal(locals.userId, product);
	return json(await view(locals.userId));
};
