# Handoff: support email (receive + send as support@engup.co.il)

Receiving works: `support@engup.co.il` forwards to the owner's Gmail via ImprovMX (free plan; MX `mx1`/`mx2.improvmx.com`, SPF `include:spf.improvmx.com` on the root, set in internic's zone editor 2026-10-30). Outgoing auth emails go through Resend (sender `team@engup.co.il`).

## Send as support@ (Gmail "Send mail as")

Gmail → Settings → Accounts → **Send mail as** → `support@engup.co.il`, SMTP `smtp.resend.com`, port `465`, username `resend`, password = a new Resend API key (sending access, domain `engup.co.il`). Replies from Gmail then come from support@.

## After it works

- Add a WhatsApp number in `support.ts` (`SUPPORT_WHATSAPP`, digits, `972...`) to show that row again.
- Remove `https://dr-eng-five.vercel.app/**` from Supabase → Authentication → URL Configuration → Redirect URLs once nothing uses the old address.
