# Policies: legal and billing

`/privacy`, `/terms`, `/accessibility`: copy in i18n `legal` (`he.ts`), rendered by `$lib/site/LegalPage.svelte`, linked from the footer, settings (accessibility) and sign-up consent. Final without a lawyer. Plain Hebrew a 16-18 student can read. Bump `legal.updated` on every change; material changes need notice before they apply. New services fall under "עדכונים ומשוב" (privacy) and "שינויים בשירות" (terms).

## Facts the texts must match

- **Stored (Supabase, Ireland):** account (email, password hash, `terms_accepted_at`, `marketing_consent_at` only if opted in); `progress`; `orders`, `coupons` (no card data); `push_subscriptions` (endpoint + hour); `llm_usage` (daily counts); `waitlist` (delete after the launch email, promised).
- **Feedback reports:** not stored; emailed via Resend to support@, forwarded to Gmail by ImprovMX: text, URL, screen, viewport, language, browser, email, account id, pre-ticked screenshot (can show answers). Kept while needed, deleted on request.
- **Sent to AI (Google Gemini only; Vercel AI Gateway, Gemini API fallback; `llmModels.ts` + its test enforce it):** written answers (`/api/grade`), COBE audio (12 kHz WAV, max 2 min) and chat turns (`/api/speak`, `/api/chat-speak`), handwriting photos (`/api/ocr`). No user ids; paid tier, so no training; AI Studio logs 14 days; Google's own retention per its terms. COBE attempts keep transcript + feedback, never audio. Another AI provider needs a policy update first.
- **Device only:** lesson-practice recordings (IndexedDB), settings, theme, language.
- **Third parties:** Supabase, Vercel, Google, browser push, Resend, ImprovMX, Cloudflare Turnstile, Sentry (EU, account id only), WhatsApp (external group). No ads. Texts promise only what we control; a provider's own handling is "לפי התנאים שלהם" plus its link (`links` in a legal section). New provider: add it with its link.
- **Rights:** delete account in settings (`/api/account` DELETE removes user, progress, usage, attempts, push; orders stay for tax records, said so). Export on email request.
- **Other:** no DPO; liability capped at 12 months' payments; courts: Haifa district; Zoom is group only.

## Accessibility

Contact: role + support@ only. Listed as not accessible: COBE speaking (alternative on request). Keep true: focus ring everywhere (global `:focus-visible`; negative offset in clipped scroll containers), `mdInline` sets `lang` per run, clips require `captions`, the AI chat has a transcript. Contrast not listed by choice; risk: the statement claims AA, teal on white is below 4.5:1 for small text.

## Billing

Code: `docs/platform.md` "Plans, checkout, access".

**Live** (terms "ביטול והחזר כספי", `$lib/refund.ts`), one-time plans:
- Within 14 days: everything minus the fee and teacher lessons held. After: unstarted months at the price paid per month, minus the fee; a started month or a monthly plan: nothing. No discount clawback.
- Fee: 5% of the price paid or ₪100, the lower. Refund is on the full price, also with installments.
- Installments: plans of 3+ months, up to one a month, interest-free (provider must allow `maxPayments`).
- `GUARANTEE` stays off: its copy promises more than the terms.

**Decided, not built.** Build only when asked, with the payment provider; terms, FAQ, plans and checkout copy ship in the same release.
- Seller: Yam's עוסק פטור; no VAT, prices final, receipts (קבלה). Track revenue against the ceiling (accountant); above it VAT comes out of the same prices. Name the owner in "מי אנחנו".
- Auto-renew until cancelled. `pack3`/`pack6` renew as the same offer's monthly (COBE kept) at the regular price. No stop at the exam date. Coupons discount the first payment only; a 100% coupon never renews.
- Reminder email 7 days before every charge (plan, amount, date, cancel link). No forgot-to-cancel refund.
- Cancel any time in settings: no further charges, access to the end of the period. Plans and checkout state renewal, price and how to cancel; the parent consents explicitly.
- Refunds: first-ever purchase within 7 days: everything, no fee (`GUARANTEE` copy becomes this). Other purchases: the live rules. Renewal charges: none.
- Provider needs: hosted page, installments (first payment), saved card token, automatic receipts, signed webhooks, refunds via API.
- To change: `refund.ts`, `plans.ts` (`GUARANTEE`, pack renewal), plans/checkout copy (renewal, consent, terms + refund link at the pay button), FAQ + terms (drop "בלי חיוב מתחדש", provider in "תשלום"), privacy (provider, card token), settings (status, cancel), reminder email, renewal job.
- Ask lawyer/accountant: 14-day right per renewal, or partial refund of a started month; notice before a renewal and before a pack turns monthly; parent consent for a minor's renewals; whether the 7-day refund deducts teacher lessons; failed charge (proposed: retry daily for 3 days, email the parent, then access ends).

## Open (owner)

- DPAs: Supabase, Vercel, Resend, Cloudflare. ImprovMX has DPAs on paid plans only (free stores no content, metadata 7 days).
- Register the business before payments.
- Notify testers of the 04.11.2026 and 05.11.2026 policy updates.
- Zoom: owner said 1 a month, plans copy says weekly; align both. Then replace "הכללים יפורסמו כאן לפני שהשיעורים ייפתחו" with: lessons are per month, a missed one is lost (no rollover, no refund), also on the plans page. Open: teacher cancels. Recording only with notice and consent.
- Analytics: name the provider in the privacy list when installed.
- Marketing email, before the first one: restore the unticked opt-in (`updates` saves `marketing_consent_at`), send only to opted-in users, one-click unsubscribe, record removals (no in-app toggle).
