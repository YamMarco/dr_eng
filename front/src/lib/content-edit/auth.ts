// Server-only: the write gate shared by every /api/content-edit endpoint.
// Dev is open. Elsewhere hooks.server.ts already enforces the staff role on
// these routes, so this only refuses when accounts are off (nothing to check).
import { dev } from '$app/environment';
import { accountsEnabled } from '$lib/server/supabase';

export function checkAuth(): boolean {
	return dev || accountsEnabled;
}
