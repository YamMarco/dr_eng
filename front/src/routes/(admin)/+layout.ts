import { redirect } from '@sveltejs/kit';
import { MOBILE_BUILD } from '$lib/platform';

// Authoring tools are web-only: they need the server (/api/content-edit).
export const load = () => {
	if (MOBILE_BUILD) redirect(307, '/app');
};
