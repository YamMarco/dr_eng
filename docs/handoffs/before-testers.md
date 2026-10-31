# Handoff: before testers (owner's to-do)

Things only the owner can do (dashboards, accounts, decisions). Tick and delete as done.

## 2FA on every account

2FA = a second step after the password (a code from an app on your phone), so a leaked password alone can't get in. Someone inside GitHub, Vercel or Supabase gets every student's data: start with those.

How: install an authenticator app (Google Authenticator, Microsoft Authenticator or 1Password), turn on 2FA in each account's security settings, scan the QR code, and save the recovery codes somewhere safe (not only on the phone).

- [ ] GitHub: Settings > Password and authentication
- [ ] Vercel: Account Settings > Authentication
- [ ] Supabase: Account > Security
- [ ] Google (Gmail, AI Studio): myaccount.google.com/security
- [ ] Resend, Cloudflare, ImprovMX: account security settings
- [ ] The engup.co.il domain registrar
- [ ] WhatsApp of the testers group admin: Settings > Account > Two-step verification

## Vercel

- [ ] `CRON_SECRET` (daily reminders don't send without it):
  1. `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
  2. In `front/`: `npx vercel env add CRON_SECRET production --sensitive`
  3. GitHub repo > Settings > Secrets and variables > Actions: `CRON_SECRET`, same value
  4. Redeploy production; test: Actions > reminders > Run workflow (green = works)
- [ ] Preview env holds `SUPABASE_SECRET_KEY` and `GEMINI_API_KEY`: remove them (previews aren't used; any preview URL would reach the real users)
- [ ] AI Gateway has credits (it's the main LLM path; the Gemini key is the fallback)

## GitHub token

- [ ] Test a small edit in `/edit` on the live site: a commit should appear
- [ ] Delete the old token in GitHub settings
- [ ] Calendar: the token expires 30.12.2026; renew a week before (Vercel `GITHUB_TOKEN` + `front/.env.local`, then redeploy)

## Supabase dashboard

- [ ] Authentication > Emails > SMTP Settings: custom SMTP through Resend (`team@engup.co.il`). The built-in sender mails only the team, ~2 an hour: testers couldn't sign up
- [ ] Authentication > URL Configuration: Site URL `https://www.engup.co.il`, Redirect URLs `https://www.engup.co.il/**`
- [ ] Authentication > Providers > Email: minimum password length 8

## Google AI Studio (Gemini fallback key's project)

- [ ] Never share a logs dataset with Google (shared datasets are used for training)
- [ ] Contributor Tier (discount for training on your data) is invite-only: decline if invited

## Privacy and terms

- [ ] Decide: are Zoom lessons recorded? (`[[...]]` in `docs/legal/privacy-policy.md`)
- [ ] Register the business (before payments), then fill the owner in the privacy policy
- [ ] Choose the error-monitoring and analytics providers, then fill them in the policy's provider table
- [ ] Lawyer: review the privacy policy and terms of use (`docs/legal/`); DPO needed?; data-processing agreements with each provider; marketing-email consent for minors
- [ ] With Claude: move the approved drafts to `/privacy` and `/terms`
- [ ] Before the first update / marketing email: a separate opt-in (unticked, e.g. in settings); Israeli anti-spam law needs explicit consent
- [ ] Terms (`docs/legal/terms-of-use.md`), decide: refund policy, private-lesson cancellation notice, unused Zoom lessons carry-over, lesson scheduling, court city
- [ ] Lawyer: adapted reading passages (credit the source? permission needed?); liability cap of 12 months' payments
- [ ] With Claude: accessibility statement (required for Israeli sites, IS 5568): publish with a contact address now, even before the accessibility pass

## Testers

- [ ] A random 100% coupon: `node --env-file=.env.local scripts/create-coupon.mjs <RANDOM-CODE> --percent 100 --max 50 --expires 2027-01-01`; send testers `https://www.engup.co.il/checkout?coupon=<code>`
