// Persisted Leitner state per word, keyed by moduleId then word id. Same
// pattern as lessonProgress: localStorage, synced to the account.

import { activity } from '$lib/activity.svelte';
import { onSyncedChange, saveSynced } from '$lib/progressSync.svelte';
import { review } from './scheduler';
import type { DeckProgress } from './types';

const STORAGE_KEY = 'deck-progress';

type ProgressMap = Record<string, DeckProgress>;

function load(): ProgressMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}

function persist(map: ProgressMap, replace = false) {
	saveSynced(STORAGE_KEY, map, { replace });
}

class DeckProgressStore {
	private map = $state<ProgressMap>(load());

	constructor() {
		onSyncedChange(STORAGE_KEY, () => (this.map = load()));
	}

	get(moduleId: string): DeckProgress {
		return this.map[moduleId] ?? {};
	}

	/** Applies one session's answers (one result per word) as of `today`. */
	apply(moduleId: string, results: Record<string, boolean>, today: string) {
		const ids = Object.keys(results);
		if (ids.length === 0) return;
		activity.recordToday();
		const deck = { ...this.get(moduleId) };
		for (const id of ids) deck[id] = review(deck[id], results[id], today);
		this.map = { ...this.map, [moduleId]: deck };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map, true);
	}
}

export const deckProgress = new DeckProgressStore();
