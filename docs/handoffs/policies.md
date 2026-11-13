# Handoff: legal (privacy, terms, accessibility)

`/privacy`, `/terms` and `/accessibility` are live and final: copy in i18n `legal` (`front/src/lib/i18n/locales/he.ts`), rendered by `$lib/site/LegalPage.svelte`, linked from the site footer, settings (accessibility), sign-up consent and `TesterWelcome`. Services not open yet are covered by the "שירות בפיתוח ובהרצה" clause in both privacy and terms. Students are mostly minors (16-18): plain Hebrew a student can read. Bump `legal.updated` on every change.

## Facts the texts must match

**Collected (Supabase, eu-west-1 Ireland):**
- Account: email, password hash, `terms_accepted_at`, and `marketing_consent_at` only when a marketing opt-in was ticked (Supabase Auth user metadata). No opt-in checkbox is shown now; `auth.signUp`'s `updates` parameter and the policy's marketing lines are kept for when it returns.
- Progress (`progress` table): lessons, exam results, word decks, streak, profile (unit level, goals), synced across devices.
- Orders and coupons (`orders`, `coupons`). No card details: payment provider not wired yet.
- Push reminder subscriptions (`push_subscriptions`): endpoint + chosen hour.
- AI usage counts (`llm_usage`): per user per day, for the daily quota.
- Waitlist emails (`waitlist`).
- Feedback reports are not stored: the report (text, page URL, screen, viewport, language, browser, email, account id, a pre-ticked screenshot of the screen) is emailed to support@ through Resend and lands in the team's Gmail via ImprovMX: say so, screenshots can show the student's answers.

**Sent to an AI model (Google only: Gemini via Vercel AI Gateway, Gemini's own API as fallback; `llmModels.ts` and its test keep it Google-only, the policy names no other AI provider; no user identifiers sent; direct key on a paid tier (Tier 1), so no training; the team can read AI Studio logs (set to 14 days); Google's own retention (55 days for abuse monitoring) is left to its terms):**
- Written answers and essays, for grading (`/api/grade`).
- COBE recordings (12 kHz WAV, max 2 min) and AI-chat turns (`/api/speak`, `/api/chat-speak`). The app says "sent to AI only to answer, not saved with us" (`he.ts` cobe privacy line).
- Photos of handwriting for OCR (`/api/ocr`).
- COBE exam attempts keep the AI's transcript and feedback (synced `quiz:attempt:*`); the audio itself is never uploaded.

**Stays on the device only:** recordings in lesson practice (IndexedDB, first + latest take), settings, theme, language.

**Third parties:** Supabase (DB, auth), Vercel (hosting, AI Gateway), Google (Gemini), browser push services (reminders), Resend (auth and feedback emails), ImprovMX (support@ forwarding), Cloudflare Turnstile (captcha), WhatsApp (testers group, external). No ads. Analytics: the policy already reserves usage data for internal product improvement (no provider named yet).

**User rights already built:** delete account (settings; `/api/account` DELETE removes the user, progress, AI usage, exam attempts and push rows; orders stay, for tax records: say so). Export: by email request (the policy says so).

## Unfinished: owner

- [ ] DPAs: accept each provider's data-processing agreement (Supabase, Vercel, Resend, Cloudflare: dashboards / terms; ImprovMX: paid plans only, free plan stores no mail content, metadata 7 days)
- [ ] Register the business before payments
- [x] Keep the direct `GEMINI_API_KEY` on a paid tier (free tier may train on data; the policy says no training)
- [ ] Waitlist: delete the list after the launch email (the policy promises it)
- [ ] Tell testers (WhatsApp group) about the 04.11.2026 policy update (AI retention now per the providers' terms, refund per the law) and the 05.11.2026 one (installments, refund on the full price): material changes need notice before they apply
- [ ] Marketing withdrawals: no in-app toggle; removals come by email or the unsubscribe link, record them before the first campaign
- [ ] Zoom count: owner said 1 a month; plans copy says the group lesson is weekly ("כל שבוע", "4 שיעורים בחודש"). Align both before writing the terms


## Unfinished: update the pages before opening each service

- **Payments:** name the business in "מי אנחנו" (privacy + terms); add the payment provider to the privacy providers list and the terms' "תשלום" line; checkout needs a terms + refund link next to the pay button; keep `GUARANTEE` (`lib/plans.ts`) off: its lines promise a full refund (plans: 14 days, checkout: 3 days), beyond the terms. The provider must offer interest-free installments up to `maxPayments` (10 for a pass bought in September): the terms promise them.
- **Zoom lessons:** replace "הכללים יפורסמו כאן לפני שהשיעורים ייפתחו" with the rule: the plan's lessons are per month; a lesson not attended is lost (no rollover, no refund). Say it on the plans page too, before purchase. Open: what the student gets when the teacher cancels. Recording only with notice and consent.
- **Analytics / error monitoring:** the policy covers usage data for internal improvement; when installing, name the provider in the privacy providers list (the text promises it).
- **Marketing emails:** none now, and no opt-in checkbox. Before the first update email: put the unticked opt-in back (sign-up passes `updates`, saving `marketing_consent_at`), send only to users with it, include a one-click unsubscribe, and honor removals.

## Accessibility (`/accessibility`)

Listed as not accessible: COBE speaking (inherent to the exam; alternative on request). Keep true:
- Focus ring on every screen (global `:focus-visible`; scroll containers inside clipping parents use a negative outline offset).
- Mixed Hebrew-English text: `mdInline` tags each run with its `lang`.
- Clips: `captions` (.vtt) is required with `src` (schema); the AI chat has a transcript.

## Owner decisions (accepted, no lawyer review)

- Texts are final without a lawyer.
- Accessibility contact: role + support@ email only; no name, phone or postal address.
- No privacy officer (DPO).
- Refund (`$lib/refund.ts`, terms "ביטול והחזר כספי"): within 14 days everything minus the fee (5% of the price paid or ₪100, the lower) and teacher lessons held; after 14 days, 3/6-month and school-year plans get the months not started yet (price paid per month) minus the fee; a started month and a monthly plan get nothing. Prorating covers the ongoing-transaction reading of the law (13ג/13ד). No discount clawback.
- Liability capped at 12 months' payments; courts: Haifa district.
- Feedback emails: no fixed retention period (kept while needed for support, deleted on request).
- AI: Google only; no other AI provider without updating the policy first.
- Third parties: the texts promise only what we control (provider, purpose, region, what we send, no training); providers' own retention and handling = "לפי התנאים שלהם", linked from the privacy providers list (`links` in a legal section). Adding a provider: add its link too.
- Zoom: group only, no private lessons; lessons are per month, use it or lose it.
- Installments: plans of 3+ months, up to one payment a month, no interest; a refund is computed on the full price, whatever was collected so far.
- Color contrast: not listed on `/accessibility` by choice (brand teal kept). Open risk: the statement claims AA, and teal on white is below 4.5:1 for small text.
- Feedback screenshot is pre-ticked (the policy says so).
