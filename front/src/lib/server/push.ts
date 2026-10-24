// Web Push (the daily practice reminder). Off until the VAPID keys are set.
// Generate them once: `npx web-push generate-vapid-keys`.
import webpush from 'web-push';
import { env } from '$env/dynamic/private';

const publicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;

export const pushEnabled = Boolean(publicKey && env.VAPID_PRIVATE_KEY);

if (pushEnabled)
	webpush.setVapidDetails('mailto:support@engup.co.il', publicKey, env.VAPID_PRIVATE_KEY!);

// The server POSTs to whatever endpoint a client registers: only the browsers' push services,
// never an arbitrary URL (SSRF).
const PUSH_HOSTS = [
	/^fcm\.googleapis\.com$/,
	/^updates\.push\.services\.mozilla\.com$/,
	/^[\w-]+\.notify\.windows\.com$/,
	/^web\.push\.apple\.com$/
];

export function isPushEndpoint(url: string): boolean {
	try {
		const { protocol, hostname } = new URL(url);
		return protocol === 'https:' && PUSH_HOSTS.some((host) => host.test(hostname));
	} catch {
		return false;
	}
}

export type Subscription = { endpoint: string; p256dh: string; auth: string };

/** Sends one notification. Returns false when the subscription is gone (unsubscribed, expired). */
export async function sendPush(
	sub: Subscription,
	payload: { title: string; body: string; url: string }
): Promise<boolean> {
	try {
		await webpush.sendNotification(
			{ endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
			JSON.stringify(payload),
			// A reminder that arrives the next morning is noise: drop it after 4 hours.
			{ TTL: 4 * 3600, topic: 'daily-reminder' }
		);
		return true;
	} catch (e) {
		const status = (e as { statusCode?: number }).statusCode;
		if (status === 404 || status === 410) return false;
		throw e;
	}
}
