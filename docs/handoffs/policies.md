# Handoff: policies (privacy, terms, consent)

`/privacy` and `/terms` show only a "draft" line (`site.draft` in `he.ts`). Students are mostly minors (16-18), so these must be real before open testers, and reviewed by an Israeli lawyer before paid launch. Write in plain Hebrew a student can read.

## Facts the texts must match

**Collected (Supabase; confirm the region):**
- Account: email, password hash (Supabase Auth).
- Progress (`progress` table): lessons, exam results, word decks, streak, profile (unit level, goals), synced across devices.
- Orders and coupons (`orders`, `coupons`). No card details: payment provider not wired yet.
- Push reminder subscriptions (`push_subscriptions`): endpoint + chosen hour.
- AI usage counts (`llm_usage`): per user per day, for the daily quota.
- Waitlist emails (`waitlist`).
- Feedback reports (`feedback_reports`: user id + time, for the daily cap). The report itself (text, page URL, device, an optional screenshot of the screen) is emailed to support@ through Resend and lands in the team's Gmail via ImprovMX: say so, screenshots can show the student's answers.

**Sent to an AI model (Google Gemini, via Vercel AI Gateway):**
- Written answers and essays, for grading (`/api/grade`).
- COBE recordings (12 kHz WAV, max 2 min) and AI-chat turns (`/api/speak`, `/api/chat-speak`). The app says "sent to AI only to answer, not saved" (`he.ts` cobe privacy line): confirm that matches Google's API data terms (no training on paid API data, retention period).
- Photos of handwriting for OCR (`/api/ocr`).

**Stays on the device only:** recordings in lesson practice (IndexedDB, first + latest take), settings, theme, language.

**Third parties:** Supabase (DB, auth), Vercel (hosting, AI Gateway), Google (Gemini), Resend (auth and feedback emails), ImprovMX (support@ forwarding), Cloudflare Turnstile (captcha), WhatsApp (testers group, external). No analytics or ads yet: update the policy when added.

**User rights already built:** delete account (settings; `/api/account` DELETE removes the user, progress, AI usage and push rows; orders stay, for tax records: say so). Add: export my data (by email request is enough at first).

## Documents to write

1. **Privacy policy** - the facts above; purpose of each item; retention; rights (access, fix, delete); contact `support@engup.co.il` (receiving it: `support-email.md`). Israeli Privacy Protection Law incl. Amendment 13 (in force Aug 2025): check whether a database registration / privacy officer duty applies at our size.
2. **Terms of use** - what the service is (practice, not an official Ministry product, no grade guarantee); account rules; AI feedback can be wrong; content ownership (ours; literature texts not included, copyright); acceptable use; limitation of liability; Israeli law and court.
3. **Minors and parental consent** - under-18 users: a consent checkbox at sign-up ("my parent/guardian agrees"), or a parent email confirmation for paid plans. Decide with the lawyer; build after.
4. **Refunds** (before payments) - Israeli Consumer Protection Law: 14-day cancellation for distance purchases; how pass / pack refunds are prorated. `GUARANTEE` in `lib/plans.ts` turns on the page's refund line.
5. **Testers note** (now) - short text in the feedback sheet or the coupon message: a test version, data may be reset, feedback goes to a WhatsApp group where other testers see your number.
6. **Accessibility statement** - required for Israeli websites (Equal Rights for Persons with Disabilities regs, standard IS 5568). Needs the accessibility pass first (postponed); publish a statement with a contact even before.

## Where it goes in the app

- Pages: `routes/(site)/privacy`, `routes/(site)/terms` (copy in `he.ts` `site`); add `/accessibility`.
- Sign-up (`LoginScreen.svelte`): "by signing up you agree to the terms and privacy policy" + the minors checkbox.
- Checkout: terms + refund line next to the pay button.
