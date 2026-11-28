# Handoff: before launch (paid)

What's left before taking payments and moving to paid Vercel / Supabase. Order: 1 and 3 first (slowest, they decide the copy), then 4 and 5 together, 6 last. Delete a line when done, the file when empty.

## 1. Business and legal (owner)

- Register the עוסק פטור; name the owner in "מי אנחנו" (privacy + terms).
- Lawyer / accountant: the questions in `payments.md`, plus: OpenAI's terms allow a service used by minors (parental consent at sign-up).
- DPAs: Supabase, Vercel, Resend, Cloudflare, OpenAI.
- Decide what a student gets when the teacher cancels a Zoom lesson.

## 2. AI provider

- Remove `GEMINI_API_KEY` from Vercel, then delete the key in Google AI Studio.
- On the live site: grade one exam and one handwriting photo (OpenAI end to end).
- Optional: top up Vercel AI Gateway credits (free tier refuses OpenAI models, so every call now falls through to OpenAI direct).
- Calibrate on 20-30 real past answers against teacher marks.
- COBE audio: `cobe-audio.md` (before COBE opens, not before launch).

## 3. Payment provider (biggest code item)

Choose one (requirements in `payments.md`), then build payment + webhook, renewal job, failed-charge rule, admin refund, cancel at the provider, privacy + terms copy.

## 4. Zoom (`zoom-lessons.md`)

Teacher on Zoom Pro, move to the teacher's account, regenerate the Client Secret, remove unused scopes, run the checks table, delete test users / orders / registrants, find the stray 404 on `/app`.

## 5. Infra

- Vercel Pro (Hobby bars commercial use).
- Supabase Pro: 14-day inactivity timeout (`session-timeout.md`), backups / PITR.
- Run the Supabase security and performance advisors on production.
- Email: DMARC review ~2026-12-02, then `p=quarantine`; mail-tester score.
- Analytics: name the provider in the privacy list when installed.

## 6. Final checks (after 3)

- Full `docs/security.md` checklist.
- Accessibility: fix teal-on-white contrast or stop claiming AA.
- End-to-end on a phone: sign up, buy, use, cancel, refund.
