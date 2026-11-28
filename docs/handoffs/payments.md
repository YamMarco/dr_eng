# Handoff: payment provider (not chosen)

Built without it: refund rule, auto-renewal state, cancel in settings, the 7-day reminder email, renewal and refund copy (`docs/policies.md`, `docs/platform.md` "Plans, checkout, access"). Today checkout takes only free (coupon) orders; paid answers 503.

## Provider must offer

Hosted payment page; interest-free installments up to `maxPayments` (first payment only); a saved card token for renewal charges; automatic receipts (קבלה, עוסק פטור); signed webhooks; refunds via API or dashboard.

## To build with it

- `startPayment` (one payment per checkout, its orders share `checkout_id`) + webhook route calling `completeCheckout` (`server/payments.ts` has the steps). Save the card token on the orders.
- Renewal job: per product, at `access_until` of a renewing subscription, charge `renewalOf(plan, appRuns)` (COBE at the with-app price while the app plan still runs) and insert a new `paid` order (stacks on that product). A failed charge: proposed retry daily for 3 days with an email to the parent, then access ends. Not decided.
- Refunds: an admin action using `refundOf` (`firstPurchase` = the account's first paid checkout, one refund for all its orders, `renewal` = a renewal order; needs a column marking renewal orders), then the provider's refund API. Today refunds are by email to support@.
- Cancel at the provider too, if it holds its own recurring schedule.
- Copy: privacy (provider in the providers list + its link, saved card token), terms "תשלום" (name the provider).

## Ask lawyer / accountant

- Whether a renewal charge carries its own 14-day cancellation right, or a partial refund of a started month (ongoing-transaction rules).
- Notice requirements before a renewal and when a pack turns into a monthly plan.
- That the sign-up consent covers a parent authorizing renewals for a minor.
