// Does the signed-in user have an active plan? Open (active) while accounts or
// billing are off, and for staff. The app shows the paywall when it's not.
import { json } from '@sveltejs/kit';
import { accessUntil, billingEnabled } from '$lib/server/billing';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	if (!billingEnabled || !locals.userId || locals.isAdmin)
		return json({ active: true, until: null });
	const until = await accessUntil(locals.userId);
	return json({ active: !!until, until: until?.toISOString() ?? null });
};
