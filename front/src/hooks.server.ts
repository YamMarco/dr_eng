import { redirect, type Handle } from '@sveltejs/kit';
import { accountsEnabled, userFrom } from '$lib/server/supabase';

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

// Student APIs: signed-in users only (once accounts are on), and open to the
// Capacitor app's webview origins (iOS, Android).
const STUDENT_APIS = /^\/api\/(grade|ocr|speak|account|access|checkout|checkout\/quote)$/;
const APP_ORIGINS = new Set(['capacitor://localhost', 'https://localhost']);
// Authoring APIs: staff only, same-origin. Staff role only.
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

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	// url.search is off-limits while prerendering, so only read it on a match.
	if (MOVED.test(pathname)) redirect(308, `/app${pathname}${event.url.search}`);

	const student = STUDENT_APIS.test(pathname);
	const admin = ADMIN_APIS.test(pathname);
	if (!student && !admin) return resolve(event);

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
