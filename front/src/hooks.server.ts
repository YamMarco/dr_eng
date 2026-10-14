import { redirect, type Handle } from '@sveltejs/kit';

// The app moved under /app; old bookmarks and installed shortcuts land there.
const MOVED = /^\/(unit|settings|streak|book)(\/|$)/;

// The Capacitor app's webview origins (iOS, Android). Only the student APIs
// accept them; the authoring APIs stay same-origin.
const APP_ORIGINS = new Set(['capacitor://localhost', 'https://localhost']);
const APP_APIS = /^\/api\/(grade|ocr)$/;

function cors(origin: string): Record<string, string> {
	return {
		'Access-Control-Allow-Origin': origin,
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Max-Age': '86400',
		Vary: 'Origin'
	};
}

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	// url.search is off-limits while prerendering, so only read it on a match.
	if (MOVED.test(pathname)) redirect(308, `/app${pathname}${event.url.search}`);

	const origin = event.request.headers.get('origin');
	if (!origin || !APP_ORIGINS.has(origin) || !APP_APIS.test(pathname)) return resolve(event);

	if (event.request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
	const response = await resolve(event);
	for (const [key, value] of Object.entries(cors(origin))) response.headers.set(key, value);
	return response;
};
