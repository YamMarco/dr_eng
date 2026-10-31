# Handoff: legal (privacy, terms, accessibility)

`/privacy`, `/terms` and `/accessibility` are live and final: copy in i18n `legal` (`front/src/lib/i18n/locales/he.ts`), rendered by `$lib/site/LegalPage.svelte`, linked from the site footer, settings (accessibility), sign-up consent and `TesterWelcome`. Services not open yet are covered by the "שירות בפיתוח ובהרצה" clause in both privacy and terms. Students are mostly minors (16-18): plain Hebrew a student can read. Bump `legal.updated` on every change.

## Facts the texts must match

**Collected (Supabase; confirm the region):**
- Account: email, password hash (Supabase Auth).
- Progress (`progress` table): lessons, exam results, word decks, streak, profile (unit level, goals), synced across devices.
- Orders and coupons (`orders`, `coupons`). No card details: payment provider not wired yet.
- Push reminder subscriptions (`push_subscriptions`): endpoint + chosen hour.
- AI usage counts (`llm_usage`): per user per day, for the daily quota.
- Waitlist emails (`waitlist`).
- Feedback reports are not stored: the report (text, page URL, device, an optional screenshot of the screen) is emailed to support@ through Resend and lands in the team's Gmail via ImprovMX: say so, screenshots can show the student's answers.

**Sent to an AI model (Google Gemini, via Vercel AI Gateway):**
- Written answers and essays, for grading (`/api/grade`).
- COBE recordings (12 kHz WAV, max 2 min) and AI-chat turns (`/api/speak`, `/api/chat-speak`). The app says "sent to AI only to answer, not saved" (`he.ts` cobe privacy line): confirm that matches Google's API data terms (no training on paid API data, retention period).
- Photos of handwriting for OCR (`/api/ocr`).

**Stays on the device only:** recordings in lesson practice (IndexedDB, first + latest take), settings, theme, language.

**Third parties:** Supabase (DB, auth), Vercel (hosting, AI Gateway), Google (Gemini), Resend (auth and feedback emails), ImprovMX (support@ forwarding), Cloudflare Turnstile (captcha), WhatsApp (testers group, external). No analytics or ads yet: update the policy when added.

**User rights already built:** delete account (settings; `/api/account` DELETE removes the user, progress, AI usage and push rows; orders stay, for tax records: say so). Export: by email request (the policy says so).

## Unfinished: owner

- [ ] DPAs: accept each provider's data-processing agreement (Supabase, Vercel, Resend, Cloudflare: dashboards / terms; ImprovMX: paid plans only, free plan stores no mail content, metadata 7 days)
- [ ] Register the business before payments

## Unfinished: update the pages before opening each service

- **Payments:** name the business in "מי אנחנו" (privacy + terms); add the payment provider to the privacy providers list and the terms' "תשלום" line; checkout needs a terms + refund link next to the pay button; `GUARANTEE` in `lib/plans.ts` turns on the refund line ("החזר מלא תוך 3 ימים").
- **Zoom lessons:** publish scheduling, cancellation notice and unused-lesson rules in the terms (now: "הכללים יפורסמו כאן לפני שהשיעורים ייפתחו"); recording only with notice and consent.
- **Analytics / error monitoring:** none installed; add the provider, its data and retention to the privacy policy first.
- **Marketing emails:** sign-up has no opt-in yet; before the first update email add a separate, unticked opt-in (Israeli anti-spam law) and its stored consent to the policy.

## Unfinished: accessibility gaps (listed on `/accessibility`)

Fix as part of UI work (`docs/ux-principles.md` section 8); remove each from "מה עוד לא נגיש" when done:

- Keyboard focus not visible on every screen
- COBE listening / speaking: no full written alternative
- Color contrast not checked on every screen (current teal kept on purpose)
- Mixed Hebrew-English sentences read in one language
- Videos: no captions

## Owner decisions (accepted, no lawyer review)

- Texts are final without a lawyer.
- Accessibility contact: role + support@ email only; no name, phone or postal address.
- No privacy officer (DPO).
- Refund: 3 days full; days 4-14 minus fee (5% or ₪100, the lower); after 14 days none. Open risk: 3/6-month and school-year plans might count as an ongoing transaction (Consumer Protection Law 13D) requiring prorated refunds.
- Liability capped at 12 months' payments; courts: Haifa district.
