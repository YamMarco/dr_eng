// The payment provider seam. Nothing is wired yet: startPayment returns null and
// checkout answers "payments unavailable". To add a provider (Cardcom, PayPlus,
// Grow, Stripe...):
//   1. startPayment: create the provider's hosted payment page for the order,
//      save its id in orders.providerRef, return its URL.
//   2. a webhook route (/api/payments/<provider>): verify the signature, then
//      completeOrder(orderId, 'paid') from billing.ts.

export type PaymentRequest = {
	orderId: string;
	/** Agorot. */
	amount: number;
	description: string;
	/** Where the provider sends the student back. */
	returnUrl: string;
};

export type PaymentStart = { provider: string; providerRef: string; redirectUrl: string };

export async function startPayment(request: PaymentRequest): Promise<PaymentStart | null> {
	void request;
	return null;
}
