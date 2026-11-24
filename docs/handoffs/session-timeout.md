# Handoff: session timeout (when Supabase is on Pro)

Today a login never expires: the browser client (`front/src/lib/supabase.ts`) keeps the session in `localStorage` and refreshes it automatically. There is no idle logout in code.

## When we move to Supabase Pro

1. Dashboard → Authentication → Sessions:
   - **Inactivity timeout:** 14 days (active students never get logged out).
   - **Time-box user sessions:** leave off, or 90 days at most.
2. Check: sign in, then sign out on the server side (or wait for the timeout on a test account), and confirm the app returns to the login screen with no errors and local progress kept.
3. Update docs/security.md rule 35 if the timeout changes the risk picture, then delete this handoff.

No code change needed: an expired refresh token signs the user out through the existing `onAuthStateChange` flow.
