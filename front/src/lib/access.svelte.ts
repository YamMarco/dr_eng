// What this account may open (/api/access): the app and COBE are sold apart. The app
// layout shows the paywall when neither is open; a module the plan lacks shows a lock. Open while accounts are off. If the server can't be
// reached the app stays open: progress is on the device and the app works
// offline; only a definite "no" from the server closes it.
import { apiFetch } from './api';
import { auth } from './auth.svelte';

class AccessStore {
	/** The app (everything but COBE). null while checking. */
	active = $state<boolean | null>(auth.enabled ? null : true);
	cobe = $state<boolean | null>(auth.enabled ? null : true);
	until = $state<string | null>(null);
	private checkedFor: string | undefined;

	/** Re-checks when the signed-in user changes (call from an effect). */
	sync(userId: string | undefined) {
		if (!auth.enabled || userId === this.checkedFor) return;
		this.checkedFor = userId;
		this.active = this.cobe = null;
		if (userId) this.refresh();
	}

	async refresh() {
		try {
			const response = await apiFetch('/api/access');
			if (!response.ok) throw new Error(String(response.status));
			const body = (await response.json()) as {
				active: boolean;
				cobe: boolean;
				until: string | null;
			};
			this.active = body.active;
			this.cobe = body.cobe;
			this.until = body.until;
		} catch {
			this.active = this.cobe = true;
		}
	}
}

export const access = new AccessStore();

export type CheckoutError =
	| 'unknown'
	| 'expired'
	| 'used-up'
	| 'wrong-plan'
	| 'already-used'
	| 'unknown-plan'
	| 'payments-unavailable'
	| 'unavailable'
	| 'network';

export type Quote = {
	planId: string;
	price: number;
	discount: number;
	total: number;
	coupon: { code: string; percentOff: number } | null;
	couponProblem: CheckoutError | null;
};

async function post<T>(path: string, body: object): Promise<T> {
	let response: Response;
	try {
		response = await apiFetch(path, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
	} catch {
		throw 'network' satisfies CheckoutError;
	}
	const data = await response.json().catch(() => ({}));
	// A bare 503 = billing isn't configured on the server.
	if (!response.ok)
		throw (data.error ?? (response.status === 503 ? 'unavailable' : 'network')) as CheckoutError;
	return data as T;
}

export function fetchQuote(plan: string | null, coupon: string | null) {
	return post<Quote>('/api/checkout/quote', { plan, coupon });
}

/** Activates (100% coupon) or returns the payment page to go to. Throws a CheckoutError.
 *  On activation the store re-checks, since the plan decides which products open. */
export async function placeOrder(plan: string | null, coupon: string | null) {
	const result = await post<
		{ status: 'active'; accessUntil: string } | { status: 'redirect'; url: string }
	>('/api/checkout', { plan, coupon });
	if (result.status === 'active') await access.refresh();
	return result;
}
