import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

// Server side of auth. Every request carries its own token (Authorization:
// Bearer - the same on web and in the mobile app), so nothing is persisted here.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const noSession = { auth: { persistSession: false, autoRefreshToken: false } };

/** Accounts are on once the project's URL and publishable key are set. */
export const accountsEnabled = Boolean(url && key);

const client = url && key ? createClient(url, key, noSession) : null;

/** The signed-in user's id, or null when the token is missing, invalid or expired. */
export async function userIdFrom(request: Request): Promise<string | null> {
	const token = request.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
	if (!client || !token) return null;
	try {
		const { data, error } = await client.auth.getClaims(token);
		return error || !data ? null : data.claims.sub;
	} catch {
		return null; // malformed token, or the key set couldn't be fetched
	}
}

/** Admin client (secret key, server only) - for actions a user can't do with their own token. */
export function adminClient() {
	if (!url || !env.SUPABASE_SECRET_KEY) return null;
	return createClient(url, env.SUPABASE_SECRET_KEY, noSession);
}
