// Server-only: the write gate shared by every /api/content-edit endpoint.
// Dev is open; elsewhere the request must carry the unlocked session's password.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';

export function checkAuth(request: Request): boolean {
	if (dev) return true;
	const key = request.headers.get('x-content-edit-key');
	return !!key && !!env.CONTENT_EDIT_PASSWORD && key === env.CONTENT_EDIT_PASSWORD;
}
