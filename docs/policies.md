# Policies: legal and billing

`/privacy`, `/terms`, `/accessibility`: copy in i18n `legal` (`he.ts`), rendered by `$lib/site/LegalPage.svelte`, linked from the footer, settings (accessibility) and sign-up consent. Final without a lawyer. Plain Hebrew a 16-18 student can read. Bump `legal.updated` on every change; material changes need notice before they apply. New services fall under "עדכונים ומשוב" (privacy) and "שינויים בשירות" (terms).

## Facts the texts must match

- **Stored (Supabase, Ireland):** account (email, password hash, `terms_accepted_at`, `marketing_consent_at` only if opted in); `progress`; `orders`, `coupons` (no card data); `push_subscriptions` (endpoint + hour); `llm_usage` (daily counts).
- **Feedback reports:** not stored; emailed via Resend to support@, forwarded to Gmail by ImprovMX: text, URL, screen, viewport, language, browser, email, account id, pre-ticked screenshot (can show answers). Kept while needed, deleted on request.
- **Sent to AI (OpenAI GPT only; Vercel AI Gateway, OpenAI API fallback; providers set in `llmModels.ts`):** written answers (`/api/grade`), handwriting photos (`/api/ocr`). COBE audio and chat turns (`/api/speak`, `/api/chat-speak`) have no provider yet (`docs/handoffs/cobe-audio.md`). No user ids; API data is not used for training; OpenAI keeps data per its terms. COBE attempts keep transcript + feedback, never audio. Another AI provider needs a policy update first.
- **Device only:** lesson-practice recordings (IndexedDB), settings, theme, language.
- **Third parties:** Supabase, Vercel, OpenAI, Google (team Gmail), browser push, Resend, ImprovMX, Cloudflare Turnstile, Sentry (EU, account id only), WhatsApp (external group). No ads. Texts promise only what we control; a provider's own handling is "לפי התנאים שלהם" plus its link (`links` in a legal section). New provider: add it with its link.
- **Rights:** delete account in settings (`/api/account` DELETE: see `docs/platform.md` "Settings > account"; orders stay for tax records, said so). Export on email request.
- **Other:** no DPO; liability capped at 12 months' payments; courts: Haifa district; Zoom is group only.

## Accessibility

Contact: role + support@ only. Listed as not accessible: COBE speaking (alternative on request). Keep true: focus ring everywhere (global `:focus-visible`; negative offset in clipped scroll containers), `mdInline` sets `lang` per run, clips require `captions`, the AI chat has a transcript. Contrast not listed by choice; risk: the statement claims AA, teal on white is below 4.5:1 for small text.

## Billing

Code: `docs/platform.md` "Plans, checkout, access".

Terms "מסלולים ותשלום" and "ביטול והחזר כספי"; rule in `$lib/refund.ts`. Payment-provider work: `docs/handoffs/payments.md`.
- Seller: Yam's עוסק פטור; no VAT, prices final, receipts (קבלה). Track revenue against the ceiling (accountant); above it VAT comes out of the same prices.
- **Products:** the app plan and COBE are separate subscriptions, each with its own dates, renewal and cancel, also when bought together (one payment). COBE costs less while an app plan runs.
- **Auto-renewal:** each `paid` subscription renews until cancelled; `pack3`/`pack6` renew as the same offer's monthly at the regular price (`renewalOf`); COBE at the full price once the app plan has ended. No stop at the exam date. Coupons discount the first payment only; a free (100% coupon) order never renews. Sign-up consent to the terms covers it; no extra tick.
- **Reminder:** email per subscription 7 days before its period ends (product, amount, date, link to settings). No forgot-to-cancel refund.
- **Cancel:** any time in settings, per subscription or all at once; no further charges for it, access to the end of its paid period. Plans and checkout state the renewal, its price and how to cancel.
- **Refunds:** first-ever purchase within 7 days: everything, no fee, no teacher lessons deducted (`GUARANTEE` line, on). Within 14 days: everything minus the fee and teacher lessons held. After: unstarted months at the price paid per month, minus the fee; a started month or a monthly plan: nothing. Renewal charges: nothing. No discount clawback.
- Fee: 5% of the price paid or ₪100, the lower. Refund is on the full price, also with installments.
- Installments: plans of 3+ months, up to one a month, interest-free (provider must allow `maxPayments`).

## Open (owner)

- DPAs: Supabase, Vercel, Resend, Cloudflare. ImprovMX has DPAs on paid plans only (free stores no content, metadata 7 days).
- Register the business before payments; name the owner in "מי אנחנו" (privacy + terms).
- Zoom: one group lesson a week; a missed one is lost (terms say so). Open: what the student gets when the teacher cancels.
- Analytics: name the provider in the privacy list when installed.
- Marketing email, before the first one: restore the unticked opt-in (`updates` saves `marketing_consent_at`), send only to opted-in users, one-click unsubscribe, record removals (no in-app toggle).
