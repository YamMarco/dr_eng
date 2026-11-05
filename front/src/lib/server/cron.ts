// The scheduled routes (.github/workflows/reminders.yml) send `Bearer CRON_SECRET`.
import { timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';

export function cronAuthorized(header: string | null): boolean {
	if (!env.CRON_SECRET) return false;
	const expected = Buffer.from(`Bearer ${env.CRON_SECRET}`);
	const got = Buffer.from(header ?? '');
	return got.length === expected.length && timingSafeEqual(got, expected);
}
