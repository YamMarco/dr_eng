import { redirect, type Handle } from '@sveltejs/kit';
import { accountsEnabled, userIdFrom } from '$lib/server/supabase';

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

// The student APIs: signed-in users only (once accounts are on), and open to
// the Capacitor app's webview origins (iOS, Android). The authoring APIs stay
// same-origin behind their own password.
const APP_APIS = /^\/api\/(grade|ocr|account)$/;
const APP_ORIGINS = new Set(['capacitor://localhost', 'https://localhost']);

function cors(origin: string): Record<string, string> {
	return {
		'Access-Control-Allow-Origin': origin,
		'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Max-Age': '86400',
		Vary: 'Origin'
	};
}

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	// url.search is off-limits while prerendering, so only read it on a match.
	if (MOVED.test(pathname)) redirect(308, `/app${pathname}${event.url.search}`);
	if (!APP_APIS.test(pathname)) return resolve(event);

	const origin = event.request.headers.get('origin');
	const headers = origin && APP_ORIGINS.has(origin) ? cors(origin) : {};
	if (event.request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

	if (accountsEnabled) {
		const userId = await userIdFrom(event.request);
		if (!userId) return new Response('sign in required', { status: 401, headers });
		event.locals.userId = userId;
	}

	const response = await resolve(event);
	for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
	return response;
};
