# Auth emails (Supabase)

Sent by Supabase Auth through Resend SMTP (sender `team@engup.co.il`). Paste each file into Supabase → Authentication → Emails:

| File | Supabase template | Subject |
|---|---|---|
| `confirm-signup.html` | Confirm signup | אישור ההרשמה ל־EngUp |
| `reset-password.html` | Reset password | איפוס הסיסמה ב־EngUp |
| `password-changed.html` | Security → Password changed (turn the notification on) | הסיסמה ב־EngUp עודכנה |

- Variables are Supabase's (`{{ .ConfirmationURL }}`, `{{ .Email }}`); keep them when editing.
- The logo loads from `https://www.engup.co.il/icons/icon-192.png`; keep that file deployed.
- Email-safe HTML only: tables, inline styles, no SVG, no external CSS beyond the Heebo font (Arial fallback).
