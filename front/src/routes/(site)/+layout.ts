import { redirect } from '@sveltejs/kit';
import { MOBILE_BUILD } from '$lib/platform';

// The public site is static marketing: pre-rendered to HTML for search engines.
// The mobile app has no front door - it opens straight into /app.
export const prerender = !MOBILE_BUILD;

export const load = () => {
	if (MOBILE_BUILD) redirect(307, '/app');
};
