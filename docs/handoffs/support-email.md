# Handoff: support email (receive + send as support@engup.co.il)

The app shows `support@engup.co.il` (`front/src/lib/support.ts`), but nothing receives that address yet: mail to it is lost. Outgoing auth emails already work (Supabase → Resend, sender `team@engup.co.il`, domain verified in Resend).

## Receive: ImprovMX (free forwarding)

1. Sign up at improvmx.com with domain `engup.co.il`; alias `support` → the owner's personal email.
2. internic.co.il → the domain → **עריכת Zone** (not "שינוי DNS", which is the nameservers). Names end with a dot (`engup.co.il.`).
3. Replace the MX record (`engup.co.il.` → `mail.engup.co.il.`) with `mx1.improvmx.com.` (priority 10) and `mx2.improvmx.com.` (priority 20).
4. Add the SPF TXT record ImprovMX shows on `engup.co.il.`. There is no SPF on the root today; Resend's SPF lives on `send.engup.co.il`, so no merge is needed.
5. Check: `nslookup -type=mx engup.co.il ns1.sitesdepot.com`, then send a test mail to support@.

Before step 3: confirm nobody uses a mailbox at `webmail.engup.co.il` (the old host, `80.244.162.32`); the MX change cuts it off. Leave the `mail` / `webmail` A records alone.

## Send as support@ (Gmail "Send mail as")

Gmail → Settings → Accounts → **Send mail as** → `support@engup.co.il`, SMTP `smtp.resend.com`, port `465`, username `resend`, password = a new Resend API key (sending access, domain `engup.co.il`). Replies from Gmail then come from support@.

## After it works

- Add a WhatsApp number in `support.ts` (`SUPPORT_WHATSAPP`, digits, `972...`) to show that row again.
- Remove `https://dr-eng-five.vercel.app/**` from Supabase → Authentication → URL Configuration → Redirect URLs once nothing uses the old address.
