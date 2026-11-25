// Server-only: the write gate shared by every /api/content-edit endpoint.
// Dev is open. Elsewhere it needs accounts on and a staff user. hooks.server.ts
// checks the same, this is the second check in case a route slips past it.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { createHash, timingSafeEqual } from 'node:crypto';
import { accountsEnabled } from '$lib/server/supabase';

export function checkAuth(locals: App.Locals): boolean {
	return dev || (accountsEnabled && locals.isAdmin === true);
}

/** Header the editor sends with the production unlock password (unlock.svelte.ts). */
const UNLOCK_HEADER = 'x-edit-password';

const digest = (s: string) => createHash('sha256').update(s).digest();

/** Content is edited on dev.engup.co.il (branch `dev`) and released to
 *  production by merging. A git-committing save on production itself also
 *  needs CONTENT_EDIT_PASSWORD (fails closed when unset): 423 otherwise. */
export function assertWriteUnlocked(request: Request) {
	if (env.VERCEL_ENV !== 'production') return;
	const expected = env.CONTENT_EDIT_PASSWORD;
	const given = request.headers.get(UNLOCK_HEADER) ?? '';
	if (!expected || !timingSafeEqual(digest(given), digest(expected)))
		throw error(423, 'העריכה באתר החי נעולה. עורכים ב-dev.engup.co.il');
}
