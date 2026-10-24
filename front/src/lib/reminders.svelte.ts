// The daily practice reminder (Web Push, src/service-worker.ts). This device's push
// subscription is the on/off state; the server keeps a copy to send to (/api/reminders).
// iPhone: push exists only inside the installed app (Add to Home Screen).
import { apiFetch } from './api';
import { install } from './install.svelte';
import { MOBILE_BUILD } from './platform';

const KEY: string | undefined = import.meta.env.VITE_VAPID_PUBLIC_KEY;

export type ReminderStatus =
	'loading' | 'off' | 'on' | 'denied' | 'needs-install' | 'ios-update' | 'in-app' | 'unsupported';

async function currentSubscription(): Promise<PushSubscription | null> {
	const reg = await navigator.serviceWorker.getRegistration();
	return (await reg?.pushManager.getSubscription()) ?? null;
}

/** The service worker, or a rejection if it never activates. */
function worker(): Promise<ServiceWorkerRegistration> {
	return Promise.race([
		navigator.serviceWorker.ready,
		new Promise<never>((_, reject) => setTimeout(() => reject(new Error('no worker')), 10_000))
	]);
}

class RemindersStore {
	/** Off entirely until the VAPID key is configured. */
	readonly available = Boolean(KEY) && !MOBILE_BUILD;
	status = $state<ReminderStatus>('loading');
	busy = $state(false);
	failed = $state(false);

	async load(): Promise<void> {
		if (install.inApp) {
			this.status = 'in-app';
		} else if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
			// iPhone: push only in the installed app, and only from iOS 16.4.
			this.status =
				install.platform !== 'ios'
					? 'unsupported'
					: install.installed
						? 'ios-update'
						: 'needs-install';
		} else if (Notification.permission === 'denied') {
			this.status = 'denied';
		} else {
			this.status = (await currentSubscription()) ? 'on' : 'off';
		}
	}

	async enable(): Promise<void> {
		this.busy = true;
		this.failed = false;
		try {
			const permission = await Notification.requestPermission();
			if (permission !== 'granted') {
				this.status = permission === 'denied' ? 'denied' : 'off';
				return;
			}
			const reg = await worker();
			const sub = await reg.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: KEY
			});
			const res = await apiFetch('/api/reminders', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(sub.toJSON())
			});
			if (!res.ok) {
				await sub.unsubscribe();
				throw new Error(`reminders ${res.status}`);
			}
			this.status = 'on';
		} catch {
			this.failed = true;
			this.status = 'off';
		} finally {
			this.busy = false;
		}
	}

	/** Also on sign-out: a shared device stops getting the previous account's reminders. */
	async disable(): Promise<void> {
		if (!this.available || !('serviceWorker' in navigator)) return;
		this.busy = true;
		this.failed = false;
		try {
			const sub = await currentSubscription();
			if (sub) {
				// Best effort: if the server misses this, its next send gets a 410 and drops the row.
				await apiFetch('/api/reminders', {
					method: 'DELETE',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ endpoint: sub.endpoint })
				}).catch(() => null);
				await sub.unsubscribe();
			}
			if (this.status === 'on') this.status = 'off';
		} finally {
			this.busy = false;
		}
	}
}

export const reminders = new RemindersStore();
