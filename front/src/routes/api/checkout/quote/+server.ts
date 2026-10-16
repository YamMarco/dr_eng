// Price of a plan with an optional coupon, for the checkout summary.
import { json } from '@sveltejs/kit';
import { BillingError, quote } from '$lib/server/billing';
import { checkoutBody } from '../body';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
	const { plan, coupon, userId } = await checkoutBody(request, locals.userId);
	try {
		return json(await quote(plan, coupon, userId));
	} catch (failure) {
		if (failure instanceof BillingError) return json({ error: failure.code }, { status: 400 });
		throw failure;
	}
};
