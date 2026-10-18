// Server-only: the write gate shared by every /api/content-edit endpoint.
// Dev is open. Elsewhere it needs accounts on and a staff user. hooks.server.ts
// checks the same, this is the second check in case a route slips past it.
import { dev } from '$app/environment';
import { accountsEnabled } from '$lib/server/supabase';

export function checkAuth(locals: App.Locals): boolean {
	return dev || (accountsEnabled && locals.isAdmin === true);
}
