// Keeps the student's progress on their account, so it follows them across
// devices. localStorage stays the working copy (instant, offline); the server
// holds one copy per key and merges what each device sends ($lib/progressMerge).
// - Sign-in: pull every key, merge it into this device's, push what the server lacks.
// - Each save (saveSynced): pushed a few seconds later, and when the page is hidden.
// - Another account signs in on this device: the old one's progress is cleared, not merged.
// Off while accounts or the database are off: saveSynced then only writes locally.
import { apiFetch } from './api';
import { auth } from './auth.svelte';
import { isSyncedKey, mergeItems, type Item } from './progressMerge';

/** When each synced key last changed on this device: { [key]: ms }. */
const AT_KEY = 'progress-at';
/** The account this device's progress belongs to. */
const OWNER_KEY = 'progress-owner';
const PUSH_DELAY = 3000;
/** A first sync on this device holds the app this long at most, then opens with what's here. */
const PULL_TIMEOUT = 4000;
/** Matches MAX_BATCH in /api/progress. */
const BATCH = 100;

// A registry, not reactive state.
// eslint-disable-next-line svelte/prefer-svelte-reactivity
const reloaders = new Map<string, () => void>();

/** A store re-reads its key when a sync changes it underneath. */
export function onSyncedChange(key: string, reload: () => void) {
	reloaders.set(key, reload);
}

function readAt(): Record<string, number> {
	try {
		return JSON.parse(localStorage.getItem(AT_KEY) ?? '{}');
	} catch {
		return {};
	}
}

function localItem(key: string): Item | undefined {
	const raw = localStorage.getItem(key);
	if (raw === null) return undefined;
	try {
		return { value: JSON.parse(raw), at: readAt()[key] ?? 0 };
	} catch {
		return undefined;
	}
}

function writeLocal(key: string, value: unknown, at: number) {
	localStorage.setItem(key, JSON.stringify(value));
	localStorage.setItem(AT_KEY, JSON.stringify({ ...readAt(), [key]: at }));
}

const syncedKeys = () => Object.keys(localStorage).filter(isSyncedKey);

class ProgressSync {
	/** False until the signed-in user's progress is here: at once on a device they
	 *  used before, after the first pull (or PULL_TIMEOUT) on a new one. */
	ready = $state(!auth.enabled);
	private userId: string | undefined;
	private off = false;
	private dirty = new Set<string>();
	private replace = new Set<string>();
	private timer: ReturnType<typeof setTimeout> | undefined;

	constructor() {
		if (typeof document === 'undefined') return;
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'hidden') this.push(true);
		});
	}

	/** Follows the signed-in user (call from an effect). */
	start(userId: string | undefined) {
		if (!auth.enabled || userId === this.userId) return;
		this.userId = userId;
		this.off = false;
		clearTimeout(this.timer);
		if (!userId) return;
		const owner = localStorage.getItem(OWNER_KEY);
		if (owner && owner !== userId) this.clearLocal();
		localStorage.setItem(OWNER_KEY, userId);
		// Same owner: this device is already close, so merge in the background.
		this.ready = owner === userId;
		if (!this.ready) setTimeout(() => (this.ready = true), PULL_TIMEOUT);
		this.pull(userId).finally(() => {
			if (userId === this.userId) this.ready = true;
		});
	}

	/** A synced key was saved here. */
	changed(key: string, replace: boolean) {
		this.dirty.add(key);
		if (replace) this.replace.add(key);
		clearTimeout(this.timer);
		this.timer = setTimeout(() => this.push(), PUSH_DELAY);
	}

	private clearLocal() {
		for (const key of syncedKeys()) localStorage.removeItem(key);
		for (const key of Object.keys(localStorage))
			if (key.startsWith('quiz:progress:')) localStorage.removeItem(key);
		localStorage.removeItem(AT_KEY);
		for (const reload of reloaders.values()) reload();
	}

	/** Merges arriving copies into this device's and refreshes the stores they touch. */
	private mergeIn(items: Record<string, Item>) {
		for (const [key, remote] of Object.entries(items)) {
			if (!isSyncedKey(key)) continue;
			const merged = mergeItems(key, localItem(key), remote);
			if (JSON.stringify(merged.value) === localStorage.getItem(key)) continue;
			writeLocal(key, merged.value, merged.at);
			reloaders.get(key)?.();
		}
	}

	private async pull(userId: string) {
		try {
			const response = await apiFetch('/api/progress');
			if (!response.ok) throw response.status;
			const { items } = (await response.json()) as { items: Record<string, Item> };
			if (userId !== this.userId) return;
			this.mergeIn(items);
			for (const key of syncedKeys())
				if (JSON.stringify(items[key]?.value) !== localStorage.getItem(key)) this.dirty.add(key);
			this.push();
		} catch (status) {
			// 503: no database on the server. Anything else (offline): retry on the next start.
			if (status === 503) this.off = true;
		}
	}

	private async push(leaving = false) {
		if (!this.userId || this.off || this.dirty.size === 0) return;
		clearTimeout(this.timer);
		const keys = [...this.dirty].slice(0, BATCH);
		const items: Record<string, Item> = {};
		for (const key of keys) {
			this.dirty.delete(key);
			const item = localItem(key);
			if (item) items[key] = this.replace.delete(key) ? { ...item, replace: true } : item;
		}
		try {
			const response = await apiFetch('/api/progress', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items }),
				keepalive: leaving
			});
			if (response.status === 503) this.off = true;
			if (!response.ok) throw response.status;
			this.mergeIn((await response.json()).items);
			if (this.dirty.size) this.push(leaving);
		} catch {
			// Kept for the next save; the next start re-sends everything that differs anyway.
			for (const [key, item] of Object.entries(items)) {
				this.dirty.add(key);
				if (item.replace) this.replace.add(key);
			}
		}
	}
}

export const progressSync = new ProgressSync();

/** Saves a synced key on this device and queues it for the account.
 *  `replace`: overwrite the account's copy instead of merging (resets). */
export function saveSynced(key: string, value: unknown, { replace = false } = {}) {
	if (typeof localStorage === 'undefined') return;
	writeLocal(key, value, Date.now());
	if (auth.enabled) progressSync.changed(key, replace);
}
