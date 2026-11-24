import { error } from '@sveltejs/kit';
import { cobeVisible } from '$lib/flags';
import { productsOf } from '$lib/plans';
import { billingEnabled } from '$lib/server/billing';

// Shared by /api/checkout and /api/checkout/quote.
export async function checkoutBody(request: Request, locals: App.Locals) {
	const { userId } = locals;
	if (!billingEnabled || !userId) error(503, 'billing is not configured');
	const body = (await request.json().catch(() => ({}))) as { plan?: unknown; coupon?: unknown };
	const plan = typeof body.plan === 'string' ? body.plan : null;
	const coupon = typeof body.coupon === 'string' ? body.coupon.slice(0, 64) : null;
	// COBE isn't sold while it's closed, even to a hand-typed plan id.
	if (plan && productsOf(plan)?.cobe && !cobeVisible(locals.isAdmin)) error(403, 'not open yet');
	return { plan, coupon, userId };
}
