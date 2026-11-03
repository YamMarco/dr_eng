# Handoff: legal (privacy, terms, accessibility)

`/privacy`, `/terms` and `/accessibility` are live and final: copy in i18n `legal` (`front/src/lib/i18n/locales/he.ts`), rendered by `$lib/site/LegalPage.svelte`, linked from the site footer, settings (accessibility), sign-up consent and `TesterWelcome`. Services not open yet are covered by the "שירות בפיתוח ובהרצה" clause in both privacy and terms. Students are mostly minors (16-18): plain Hebrew a student can read. Bump `legal.updated` on every change.

## Facts the texts must match

**Collected (Supabase; confirm the region):**
- Account: email, password hash, `terms_accepted_at`, and `marketing_consent_at` only when the optional sign-up opt-in was ticked (Supabase Auth user metadata).
- Progress (`progress` table): lessons, exam results, word decks, streak, profile (unit level, goals), synced across devices.
- Orders and coupons (`orders`, `coupons`). No card details: payment provider not wired yet.
- Push reminder subscriptions (`push_subscriptions`): endpoint + chosen hour.
- AI usage counts (`llm_usage`): per user per day, for the daily quota.
- Waitlist emails (`waitlist`).
- Feedback reports are not stored: the report (text, page URL, screen, viewport, language, browser, email, account id, a pre-ticked screenshot of the screen) is emailed to support@ through Resend and lands in the team's Gmail via ImprovMX: say so, screenshots can show the student's answers.

**Sent to an AI model (Google only: Gemini via Vercel AI Gateway, Gemini's own API as fallback; `llmModels.ts` and its test keep it Google-only, the policy names no other AI provider; no user identifiers sent; Google keeps logs 14 days):**
- Written answers and essays, for grading (`/api/grade`).
- COBE recordings (12 kHz WAV, max 2 min) and AI-chat turns (`/api/speak`, `/api/chat-speak`). The app says "sent to AI only to answer, not saved" (`he.ts` cobe privacy line): confirm that matches Google's API data terms (no training on paid API data, retention period).
- Photos of handwriting for OCR (`/api/ocr`).
- COBE exam attempts keep the AI's transcript and feedback (synced `quiz:attempt:*`); the audio itself is never uploaded.

**Stays on the device only:** recordings in lesson practice (IndexedDB, first + latest take), settings, theme, language.

**Third parties:** Supabase (DB, auth), Vercel (hosting, AI Gateway), Google (Gemini), browser push services (reminders), Resend (auth and feedback emails), ImprovMX (support@ forwarding), Cloudflare Turnstile (captcha), WhatsApp (testers group, external). No ads. Analytics: the policy already reserves usage data for internal product improvement (no provider named yet).

**User rights already built:** delete account (settings; `/api/account` DELETE removes the user, progress, AI usage and push rows; orders stay, for tax records: say so). Export: by email request (the policy says so).

## Unfinished: owner

- [ ] DPAs: accept each provider's data-processing agreement (Supabase, Vercel, Resend, Cloudflare: dashboards / terms; ImprovMX: paid plans only, free plan stores no mail content, metadata 7 days)
- [ ] Register the business before payments
- [ ] Keep the direct `GEMINI_API_KEY` on a paid tier (free tier may train on data; the policy says no training)
- [ ] Waitlist: delete the list after the launch email (the policy promises it)
- [ ] Tell testers (WhatsApp group) about the 03.11.2026 policy update: material changes need notice before they apply
- [ ] Marketing withdrawals: no in-app toggle; removals come by email or the unsubscribe link, record them before the first campaign

## Unfinished: update the pages before opening each service

- **Payments:** name the business in "מי אנחנו" (privacy + terms); add the payment provider to the privacy providers list and the terms' "תשלום" line; checkout needs a terms + refund link next to the pay button; `GUARANTEE` in `lib/plans.ts` turns on the refund line ("החזר מלא תוך 3 ימים").
- **Zoom lessons:** publish scheduling, cancellation notice and unused-lesson rules in the terms (now: "הכללים יפורסמו כאן לפני שהשיעורים ייפתחו"); recording only with notice and consent.
- **Analytics / error monitoring:** the policy covers usage data for internal improvement; when installing, name the provider in the privacy providers list (the text promises it).
- **Marketing emails:** opt-in is live (sign-up, unticked, `marketing_consent_at`). Before the first update email: send only to users with it, include a one-click unsubscribe, and honor removals.

## Accessibility (`/accessibility`)

Listed as not accessible: COBE speaking (inherent to the exam; alternative on request). Keep true:
- Focus ring on every screen (global `:focus-visible`; scroll containers inside clipping parents use a negative outline offset).
- Mixed Hebrew-English text: `mdInline` tags each run with its `lang`.
- Clips: `captions` (.vtt) is required with `src` (schema); the AI chat has a transcript.

## Owner decisions (accepted, no lawyer review)

- Texts are final without a lawyer.
- Accessibility contact: role + support@ email only; no name, phone or postal address.
- No privacy officer (DPO).
- Refund: 3 days full; days 4-14 minus fee (5% or ₪100, the lower); after 14 days none. Open risk: 3/6-month and school-year plans might count as an ongoing transaction (Consumer Protection Law 13D) requiring prorated refunds.
- Liability capped at 12 months' payments; courts: Haifa district.
- Feedback emails: no fixed retention period (kept while needed for support, deleted on request).
- AI: Google only (Gemini, logs kept 14 days); no other AI provider without updating the policy first.
- Color contrast: not listed on `/accessibility` by choice (brand teal kept). Open risk: the statement claims AA, and teal on white is below 4.5:1 for small text.
- Feedback screenshot is pre-ticked (the policy says so).
