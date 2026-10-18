import * as Sentry from '@sentry/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { accountsEnabled, userFrom } from '$lib/server/supabase';

// Error reporting: same DSN and rules as hooks.client.ts (off until set).
const dsn = import.meta.env.VITE_SENTRY_DSN;
if (dsn) Sentry.init({ dsn, environment: import.meta.env.MODE });

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

// Every /api route needs a signed-in user (once accounts are on); a new route is
// never public by accident. Matched on the resolved route id, not the raw path:
// SvelteKit routes /api/%67rade to /api/grade, so a path regex can be skipped.
// Student APIs are open to the Capacitor app's webview origins (iOS, Android).
const APP_ORIGINS = new Set(['capacitor://localhost', 'https://localhost']);
// Authoring APIs: staff only, same-origin.
const ADMIN_APIS = /^\/api\/content-edit(\/|$)/;

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
	if (!routeId.startsWith('/api/')) return resolve(event);
	const admin = ADMIN_APIS.test(routeId);
	const student = !admin;

	const origin = event.request.headers.get('origin');
	const headers = student && origin && APP_ORIGINS.has(origin) ? cors(origin) : {};
	if (event.request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

	if (accountsEnabled) {
		const user = await userFrom(event.request);
		if (!user) return new Response('sign in required', { status: 401, headers });
		if (admin && !user.isAdmin) return new Response('staff only', { status: 403, headers });
		event.locals.userId = user.id;
		event.locals.isAdmin = user.isAdmin;
	}

	const response = await resolve(event);
	for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
	return response;
};

export const handle = sequence(Sentry.sentryHandle(), app);
export const handleError = Sentry.handleErrorWithSentry();
