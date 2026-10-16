import { error } from '@sveltejs/kit';
import { billingEnabled } from '$lib/server/billing';

// Shared by /api/checkout and /api/checkout/quote.
export async function checkoutBody(request: Request, userId: string | undefined) {
	if (!billingEnabled || !userId) error(503, 'billing is not configured');
	const body = (await request.json().catch(() => ({}))) as { plan?: unknown; coupon?: unknown };
	const plan = typeof body.plan === 'string' ? body.plan : null;
	const coupon = typeof body.coupon === 'string' ? body.coupon.slice(0, 64) : null;
	return { plan, coupon, userId };
}
