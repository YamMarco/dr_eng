import * as Sentry from '@sentry/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { accountsEnabled, userFrom } from '$lib/server/supabase';
import { userExists } from '$lib/server/userExists';
import { sentryOptions } from '$lib/sentry';

// Initialized here, not in instrumentation.server.ts: adapter-auto doesn't support that file.
// Errors only, so the missing early auto-instrumentation (tracing) doesn't matter.
const vercel = process.env.VERCEL_ENV;
Sentry.init(sentryOptions(vercel === 'production' ? 'production' : vercel ? 'dev' : 'local'));

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

// Every /api route needs a signed-in user (once accounts are on); a new route is
// never public by accident. Matched on the resolved route id, not the raw path:
// SvelteKit routes /api/%67rade to /api/grade, so a path regex can be skipped.
// Student APIs are open to the mobile build's webview origins.
const APP_ORIGINS = new Set(['https://localhost']);
// Authoring and staff-board APIs: staff only, same-origin.
const ADMIN_APIS = /^\/api\/(content-edit|kanban|finance|dashboard)(\/|$)/;
// Open to anyone, by name: the hourly crons (no user; they check CRON_SECRET themselves).
const PUBLIC_APIS = new Set(['/api/cron/reminders', '/api/cron/lessons', '/api/cron/renewals']);

function cors(origin: string): Record<string, string> {
	return {
		'Access-Control-Allow-Origin': origin,
		'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Max-Age': '86400',
		Vary: 'Origin'
	};
}

const app: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	// url.search is off-limits while prerendering, so only read it on a match.
	if (MOVED.test(pathname)) redirect(308, `/app${pathname}${event.url.search}`);

	const routeId = event.route.id ?? '';
	if (!routeId.startsWith('/api/') || PUBLIC_APIS.has(routeId)) return resolve(event);
	const admin = ADMIN_APIS.test(routeId);
	const student = !admin;

	const origin = event.request.headers.get('origin');
	const headers = student && origin && APP_ORIGINS.has(origin) ? cors(origin) : {};
	if (event.request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

	if (accountsEnabled) {
		const user = await userFrom(event.request);
		if (!user) return new Response('sign in required', { status: 401, headers });
		if (admin && !user.isAdmin) return new Response('staff only', { status: 403, headers });
		// Writes and LLM calls: the token may outlive a deleted account.
		if (event.request.method !== 'GET' && !(await userExists(user.id)))
			return new Response('account deleted', { status: 401, headers });
		event.locals.userId = user.id;
		event.locals.isAdmin = user.isAdmin;
		event.locals.email = user.email;
		// Errors carry the account id only, never the email.
		Sentry.setUser({ id: user.id });
	}

	const response = await resolve(event);
	for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
	return response;
};

export const handle = sequence(Sentry.sentryHandle(), app);
export const handleError = Sentry.handleErrorWithSentry();
