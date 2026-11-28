// The signed-in user's subscription (settings): GET its state, DELETE turns auto-renewal off.
// `null` when there is none (billing off, no paid order running, or staff).
import { error, json } from '@sveltejs/kit';
import { billingEnabled, cancelRenewal, subscription } from '$lib/server/billing';
import type { RequestHandler } from './$types';

const view = async (userId: string) => {
	const sub = await subscription(userId);
	return (
		sub && {
			planId: sub.planId,
			until: sub.until.toISOString(),
			renews: sub.renews,
			renewPrice: sub.renewPrice
		}
	);
};

export const GET: RequestHandler = async ({ locals }) => {
	if (!billingEnabled || !locals.userId) return json(null);
	return json(await view(locals.userId));
};

export const DELETE: RequestHandler = async ({ locals }) => {
	if (!billingEnabled || !locals.userId) error(404, 'no subscription');
	await cancelRenewal(locals.userId);
	return json(await view(locals.userId));
};
