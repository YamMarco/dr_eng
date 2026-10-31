// Staff finance: expenses list (GET).
import { error, json } from '@sveltejs/kit';
import { checkAuth } from '$lib/content-edit/auth';
import { expenses } from '$lib/server/finance';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ locals }) => {
	// Second check after hooks.server.ts.
	if (!checkAuth(locals)) error(403, 'staff only');
	return json(expenses);
};
