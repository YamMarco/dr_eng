// Checks the content-edit password server-side, so the client never has to
// hold the real secret to know whether a guess was right. Always succeeds in
// dev (no password needed there).
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	if (dev) return json({ ok: true });

	const { password } = (await request.json()) as { password?: string };
	if (!env.CONTENT_EDIT_PASSWORD) throw error(500, 'CONTENT_EDIT_PASSWORD is not configured');
	if (password !== env.CONTENT_EDIT_PASSWORD) throw error(401, 'wrong password');

	return json({ ok: true });
};
