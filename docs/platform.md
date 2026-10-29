# Platform: web, mobile, accounts

One SvelteKit codebase (`front/`), two build targets.

## Routes

| Path | What | Web | Mobile |
|---|---|---|---|
| `/`, `/about`, `/plans`, `/privacy`, `/terms` | `routes/(site)` - public pages, pre-rendered | yes | redirects to `/app` |
| `/checkout` | `routes/(site)/checkout` - client-only (needs the session) | yes | redirects to `/app` |
| `/app/...` | `routes/app` - the student app, client-only (`ssr = false`) | yes | yes (the whole bundle) |
| `/edit`, `/edit-exam`, `/edit-words`, `/vocab-images` | `routes/(admin)` - authoring tools | yes | redirects to `/app`, links hidden |
| `/kanban` | `routes/(admin)/kanban` - staff task board (to do / doing / done; assignee, priority, tags), table `kanban_tasks` via `/api/kanban`; on mobile the columns swipe (tabs on top) and a card select moves tasks | yes | redirects to `/app`, link hidden |
| `/api/...` | server routes | yes | absent - the app calls the web deployment |

Home page (`/`) photos and looping videos: files in `front/static/home/`, paths in `$lib/site/media.ts`; an empty slot shows gradient art.

Old app URLs (`/unit/...`, `/settings`, `/streak`, `/book`) 308 to `/app/...` (`hooks.server.ts`).

## Builds

- **Web:** `npm run build` - `adapter-auto` (picks Vercel/Netlify/Cloudflare on the host). Vercel is only the dev site for now. Security headers and the install command (`npm ci`) are in `front/vercel.json`; the CSP (built pages only) in `vite.config.ts` - a new external origin (fonts, CDN, analytics) must be added there.
- **Mobile:** `npm run build:mobile` (`vite build --mode mobile`) - `adapter-static` SPA in `build-mobile/`.
  - `$lib/platform.ts` `MOBILE_BUILD` is the compile-time switch.
  - `.env.mobile` (committed, public values only) sets `VITE_API_BASE` to the web deployment (`https://www.engup.co.il`).
- **All calls to our server go through `apiFetch` (`$lib/api.ts`):** base URL + the session's bearer token.
- **CORS:** the student APIs (`STUDENT_APIS` in `hooks.server.ts`) accept the mobile webview origin (`https://localhost`).

## Accounts (Supabase Auth, email + password)

Off until the env vars are set; the app then runs open, as before. Once set:

- `/app` shows the login screen until there's a session (`$lib/auth.svelte.ts`, `LoginScreen.svelte`): sign in, sign up, forgot password.
- **The email only verifies.** Sign-up and password reset send a link; everyday sign-in is email + password. Links open in a browser and point at the web deployment (`VITE_API_BASE` from the mobile app, else the current origin) + `/app`. A reset link lands on `/app` in "choose a new password" mode.
- The phone-code (OTP) sign-in is a disabled mockup (`OTP_ENABLED` in `LoginScreen.svelte`), not wired to anything.
- **Roles:** staff have `app_metadata.role = "admin"` (set only with the secret key: `node --env-file=.env.local scripts/create-admin.mjs <email>...`, passwords to `front/admin-users.local.txt`). `auth.isAdmin` gates the editing links, the `/edit`, `/edit-exam`, `/edit-words`, `/vocab-images` and `/kanban` pages, the debug tools and the settings developer section; `/api/content-edit/*` and `/api/kanban/*` return 403 to non-staff. With accounts off, everything stays open (dev).
- Every `/api` route needs `Authorization: Bearer <token>`, otherwise 401, except those named in `PUBLIC_APIS` (`hooks.server.ts`): `/api/waitlist` and `/api/cron/reminders` (checks `CRON_SECRET`). `hooks.server.ts` matches on `event.route.id`, never the raw path (`/api/%67rade` routes to `/api/grade`), and handlers check `locals` again.
- **LLM spend guard** (`server/llmGuard.ts`, on `/api/grade`, `/api/speak`, `/api/chat-speak`, `/api/ocr`): outside dev, accounts and `DATABASE_URL` on and a signed-in user (fails closed, so a preview without a DB has no LLM); with billing on, an active plan (402 otherwise; staff pass); a daily quota per user (`DAILY_LIMIT`, counted in the `llm_usage` table, 429 when over) and for everyone together (`GLOBAL_DAILY_LIMIT`, 503); a per-instance burst limit.
- **Settings > account:** sign out, and delete account (`DELETE /api/account`, which uses the secret key). Deleting also removes the account's progress and LLM usage rows and clears this device's; orders stay (purchase records for tax law).

### Turning it on

1. Env vars in `.env.local` and on the host:
   - `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (public; the mobile build reads them from `.env.local` too)
   - `SUPABASE_SECRET_KEY` (server only)
2. **Authentication > Sign In / Providers > Email:** "Confirm email" on, minimum password length 8.
3. **Authentication > URL Configuration:** Site URL = the web deployment; add `<web deployment>/**` to Redirect URLs (the email links go to `/app`).
4. **Email sending:** Supabase's built-in sender is for testing only: a couple of emails an hour, and only to your organization's team members. Before real students sign up, set custom SMTP (needs a domain for Resend; Gmail with an app password works for development). Custom SMTP is Resend (`team@engup.co.il`); the branded Hebrew templates and their subjects are in `emails/auth/` (see its README).
5. **CAPTCHA (Cloudflare Turnstile):** create a widget in Cloudflare (hostnames: the web deployment's domain, plus `localhost` for the mobile webview), set its site key as `VITE_TURNSTILE_SITE_KEY` (public, web and mobile), and paste its secret key in Supabase **Authentication > Attack Protection > CAPTCHA** (provider Turnstile). Set both together: with only the Supabase side on, sign-in fails; with only the site key, the widget shows but nothing checks it. `Captcha.svelte` is invisible unless Cloudflare wants a click; sign in, sign up, reset and resend each spend one token.

## Plans, checkout, access

Off until `DATABASE_URL` is set (and accounts are on): `/api/access` then answers "active" for everyone and the app stays open.

- **Plans** live in `$lib/plans.ts` (id, price in agorot, months); plan names in i18n `plans.items`. The server prices orders from there, never from the client. Prices are placeholders.
- **Offers** (`OFFERS`, the `/plans` page): עצמאי (the app), קבוצתי (+ weekly group Zoom + COBE, featured, anchored against a private tutor's `TUTOR_HOUR`), אישי (+ 2 private Zoom lessons a month), and COBE alone. Each has a monthly and an "until the Bagrut" (12 months, shown first) plan; copy in i18n `plans.offers`.
- **Pricing rules:** deep yearly discount only on software (עצמאי, COBE); tiers with teacher hours get a small one so they stay above teacher cost. 14-day full refund and up to 12 interest-free installments are promised on the page: the terms and the payment provider must match.
- **COBE:** built into קבוצתי and אישי (`cobe: true` on the plan). עצמאי has a COBE switch, off by default, on the card, the comparison table and in checkout (order bump). A bundle is the plan id + `-cobe` (`premium-month-cobe`, `isBundle`), priced by `planById` as the base plan + `COBE_ADDON` (cheaper than COBE alone).
- **Access is not per product yet:** any active order opens the whole app, COBE included. Selling COBE apart needs a product on the order and a check in `/api/access` and `llmGuard` (`/api/chat-speak`).
- **Tables** (`server/db/schema.ts`, RLS on with no policies and no grants to the API roles, so the publishable key can't touch them): `coupons` (code, percent off, optional plan, max uses, expiry) and `orders` (one per checkout; `paid`/`free` with `access_until` ahead = access).
- **Access gate:** `/app` shows `Paywall.svelte` (redeem a code; plans link on web only, store apps can't link to outside purchases) while `/api/access` says no. Staff always pass. If the server can't be reached the app stays open (offline use).
- **Checkout** (`/checkout?plan=<id>&coupon=<code>`): sign up / in (the confirmation email returns to the same URL), apply a code (`/api/checkout/quote`), then `/api/checkout`. A 100% code completes at once (`free` order); access stacks on any remaining time. A paid total goes to `startPayment` in `server/payments.ts`, which returns null until a provider is wired (503 `payments-unavailable`). Wiring one: implement `startPayment`, add a webhook route that calls `completeOrder`.
- **Coupons:** `node --env-file=.env.local scripts/create-coupon.mjs <RANDOM-CODE> --percent 100 --max 50 --expires 2027-01-01` (no code = list with use counts). The repo is public: a 100% code is random, never a word, and needs `--max` and `--expires`. Tester link: `<web>/checkout?coupon=<code>`.
- **Migrations:** `npm run db:migrate` (needs `DATABASE_MIGRATE_URL`, the session pooler on 5432). Set `DATABASE_URL` (transaction pooler, 6543) on the host too.

## Waitlist

The home page CTAs (`$lib/site/JoinCtas.svelte`: waitlist or code, side by side) post an email to `/api/waitlist`: no account, stored lower-cased in the `waitlist` table (email + time only, users are minors). Duplicates are ignored, a honeypot field drops bots, and a daily cap (`DAILY_CAP`, 429) bounds what a script can write. Off (503) without `DATABASE_URL`. Read the list in Supabase's table editor.

## Progress sync

Progress follows the account (needs accounts and `DATABASE_URL`; otherwise it stays on the device). `localStorage` is the working copy; the `progress` table keeps one JSON row per key.

- **Synced keys:** `isSyncedKey` in `$lib/progressMerge.ts` (lessons, word deck, practice days, module location, last engagement, profile, my phrases, speaking stats, chat count, exam attempts and results). Theme, language, debug flags and the exam in-progress marker stay on the device; spoken-take audio never leaves it.
- **Writes:** stores save with `saveSynced(key, value)` (`$lib/progressSync.svelte.ts`), never `localStorage.setItem`, for a synced key. Pushed 3 s later in batches, and when the page is hidden. A store that holds the value in state registers `onSyncedChange(key, reload)`.
- **Merge** (`progressMerge.ts`, same code on client and `/api/progress`): never loses work. Max rounds per lesson, later review per word, union of days / phrases / results, newer `ts` / `submittedAt`; profile and last engagement keep the newer copy (`at`, the device clock). `{ replace: true }` overwrites (debug reset).
- **Sign-in:** pull, merge, push what differs. On a device the account used before, the app opens at once and merges in the background; on a new one it waits for the pull (max 4 s). Another account signing in on the device clears the previous one's local progress first (`progress-owner`).
- **Limits** (`/api/progress`): known keys only, 100 keys a request, 100 KB a value, 1 MB a body, 400 rows per user.
- **Renaming a lesson or exam id** (`legacyIds.ts`) now also needs the same rename on the `progress` rows.
- New synced key: add it to `isSyncedKey` and give it a merge in `mergeFor` (else newer copy wins).

## Install and daily reminder (web)

The site installs as a home-screen app (PWA) and sends one push reminder a day, at the hour the student picks. Web build only (`MOBILE_BUILD` hides it and skips the service worker).

- **Install:**
  - `static/manifest.webmanifest` plus the icons in `static/icons/` (rendered from the logo; re-render if the logo changes). `start_url` is `/app`.
  - `$lib/install.svelte.ts` keeps Chrome/Edge's one-time install prompt.
  - The student guide is `/app/install`: one tap where the browser offers it, otherwise steps per device (iPhone, Android, computer). Settings > practice links to it until the app is installed.
- **Service worker** (`src/service-worker.ts`): push and notification click only, no offline cache.
- **Reminder:**
  - Settings > practice > "תזכורת יומית" (`ReminderRow.svelte`, also on the streak screen and the install screen once installed). This device's push subscription is the on/off state; `/api/reminders` saves it (POST) or drops it (DELETE), max 5 devices per account.
  - Hour: once on, a picker (07:00-22:00 Israel time, default 17:00). Kept per device (`remind_hour`, and `localStorage` for display); changing it re-POSTs the subscription.
  - Endpoints are limited to the browsers' push services (`server/push.ts`, no SSRF).
  - Sign-out and account deletion drop it.
- **Send:** a GitHub Actions schedule (`.github/workflows/reminders.yml`, hourly at :05; Vercel Hobby crons are daily only) calls `/api/cron/reminders` (public by name, checks `CRON_SECRET`, fails closed).
  - Sends to devices whose hour has come, up to 2 hours late (GitHub schedules can lag or skip a run). Skips students whose synced `activity-days` already has today (Israel date), and sends at most once a day per device.
  - Expired subscriptions (404/410) are deleted. A reminder not delivered within 4 hours is dropped.
- **Per device** (`ReminderStatus`): the reminder row explains what this device needs instead of offering a switch that can't work. On iPhone, push works only in the installed app (iOS 16.4+): not installed means an "להתקנה" button (the browser's install dialog where it has one, else the guide), installed but older means "update iOS". A social app's in-app browser (Instagram, TikTok...) gets "open in Safari / Chrome", and the guide says the same. On the iPhone tab, the guide notes that reminders need the install.

### Turning it on

1. `npx web-push generate-vapid-keys`. Set `VITE_VAPID_PUBLIC_KEY` (public) and `VAPID_PRIVATE_KEY` (server only) in `.env.local` and on Vercel.
2. `CRON_SECRET` (long random string) on Vercel and as a GitHub repo secret (the workflow sends it).
3. `npm run db:migrate` (table `push_subscriptions`).
4. Redeploy. Until the keys are set, the reminder row is hidden and the routes answer 503.

## Word-card images

Public Supabase Storage bucket `vocab-images`. Content keeps `/vocab-images/<file>`; `lesson-screens/vocabImage.ts` maps it to the bucket URL. `/edit` uploads go straight to the bucket (live at once). Bulk copy: `node --env-file=.env.local scripts/upload-vocab-images.mjs <folder>`.

