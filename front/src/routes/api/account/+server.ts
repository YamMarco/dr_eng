// Account deletion (the app stores require it in-app). The user is already
// verified by hooks.server.ts; deleting needs the admin (secret) key.
import { error } from '@sveltejs/kit';
import { adminClient } from '$lib/server/supabase';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ locals }) => {
	const admin = adminClient();
	if (!locals.userId || !admin) error(503, 'accounts are not configured');
	const { error: failed } = await admin.auth.admin.deleteUser(locals.userId);
	if (failed) error(500, 'delete failed');
	return new Response(null, { status: 204 });
};
