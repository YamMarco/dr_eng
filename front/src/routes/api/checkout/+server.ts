// Places an order: a 100% coupon activates at once; otherwise the payment
// provider's page (not wired yet: 503 payments-unavailable).
import { json } from '@sveltejs/kit';
import { BillingError, checkout } from '$lib/server/billing';
import { checkoutBody } from './body';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals, url }) => {
	const { plan, coupon, userId } = await checkoutBody(request, locals.userId);
	try {
		return json(await checkout(plan, coupon, userId, `${url.origin}/app`));
	} catch (failure) {
		if (failure instanceof BillingError) {
			const status = failure.code === 'payments-unavailable' ? 503 : 400;
			return json({ error: failure.code }, { status });
		}
		throw failure;
	}
};
