// What the signed-in user may open: the app and COBE are sold apart. Both open while
// accounts or billing are off, and for staff. The app shows the paywall when neither is.
import { json } from '@sveltejs/kit';
import { access, billingEnabled } from '$lib/server/billing';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	if (!billingEnabled || !locals.userId || locals.isAdmin)
		return json({ active: true, cobe: true, until: null });
	const { app, cobe } = await access(locals.userId);
	return json({ active: !!app, cobe: !!cobe, until: app?.toISOString() ?? null });
};
