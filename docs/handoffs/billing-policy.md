# Handoff: billing policy (decided, not built)

Decided by the owner. Nothing here is live: today's code and copy still sell one-time packs (`$lib/plans.ts`, `$lib/refund.ts`, terms "ביטול והחזר כספי"). Build it together with the payment provider; terms, FAQ, plans and checkout copy change in the same release.

## Seller and prices

- Sold by Yam's עוסק פטור. No VAT is added: the current prices are final, and every payment gets a receipt (קבלה), not a tax invoice.
- The עוסק פטור yearly revenue ceiling (current figure from the accountant): above it the business becomes עוסק מורשה and VAT comes out of the same prices. Track revenue from the first sale.
- Price list: `regular` (`PRICING`).
- Name the business owner in "מי אנחנו" (privacy and terms).

## Auto-renewal

- Every paid plan renews automatically until cancelled.
- `month` renews monthly. `pack3` / `pack6` renew, after their period, as the same offer's monthly plan (with COBE if the pack had it), at the regular monthly price, charged in a single payment.
- No automatic stop at the student's exam date.
- Coupons discount the first payment only; renewals charge the full monthly price.
- A 100% coupon (free order) has no card, so nothing renews.
- Reminder email 7 days before every renewal charge: plan, amount, charge date, and a link to cancel.
- Cancel any time in the app (settings), the channel the purchase was made in: no further charges from that moment (the law allows up to 3 business days); access continues to the end of the paid period.
- No "forgot to cancel" refund: the reminder email replaces it.
- Before buying, the plans and checkout pages say plainly that the plan renews, at what price, and how to cancel; the parent consents explicitly (the payer is the parent's card).

## Refunds

| Case | Refund |
|---|---|
| First-ever purchase on the account, within 7 days | Everything, no fee |
| Any new purchase (also after cancelling and coming back), within 14 days | Everything minus the fee and teacher lessons already held |
| 3/6-month pack, after 14 days | The months not started yet, at the price paid per month, minus the fee |
| Monthly plan, after 14 days | Nothing |
| A renewal charge | Nothing; cancelling stops the next charges |

- Fee: 5% of the price paid or ₪100, the lower (as `cancelFee` today).
- A refund is computed on the full price, also when paid in installments.
- The 7-day full refund replaces the earlier 48-hour idea; `GUARANTEE` copy changes to it.

## Payment provider requirements (still to choose)

Hosted payment page; interest-free installments up to the plan's months (first payment only); a saved card token for renewal charges; automatic receipts; signed webhooks; refunds through its API or dashboard.

## Open: ask the lawyer / accountant

- Whether a renewal charge carries its own 14-day cancellation right, or a partial refund of a started month on cancellation (ongoing-transaction rules).
- Notice requirements before a renewal and when a pack turns into a monthly plan.
- That the sign-up consent covers a parent authorizing renewals for a minor.
- Whether the 7-day full refund also deducts teacher lessons already held.
- A failed renewal charge: proposed retry daily for 3 days with an email to the parent, then access ends. Not decided.

## Copy and code to change when building

`$lib/refund.ts` (7-day first purchase rule, renewals), `$lib/plans.ts` (`GUARANTEE`, renewal plan of a pack), checkout and plans copy (renewal disclosure, consent), FAQ and terms (drop "בלי חיוב מתחדש"), privacy (provider, saved card token), settings (subscription status, cancel), reminder email, renewal job.
