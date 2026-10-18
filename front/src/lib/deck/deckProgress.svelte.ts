// Persisted Leitner state per word, keyed by deck id then word id. Same
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
	private migrations: (() => void)[] = [];

	constructor() {
		onSyncedChange(STORAGE_KEY, () => {
			this.map = load();
			for (const run of this.migrations) run();
		});
	}

	get(deckId: string): DeckProgress {
		return this.map[deckId] ?? {};
	}

	/** Applies one session's answers (one result per word) as of `today`. */
	apply(deckId: string, results: Record<string, boolean>, today: string) {
		const ids = Object.keys(results);
		if (ids.length === 0) return;
		activity.recordToday();
		const deck = { ...this.get(deckId) };
		for (const id of ids) deck[id] = review(deck[id], results[id], today);
		this.map = { ...this.map, [deckId]: deck };
		persist(this.map);
	}

	/** Moves progress saved under an old key (a module) to every deck holding
	 *  the word, without overwriting newer state. Runs again whenever synced
	 *  data arrives, since an older device may still send the old key. */
	migrate(oldKey: string, decks: { id: string; words: { id: string }[] }[]) {
		const run = () => {
			const old = this.map[oldKey];
			if (!old) return;
			const map = { ...this.map };
			delete map[oldKey];
			for (const deck of decks) {
				const moved = deck.words.filter((w) => old[w.id] && !map[deck.id]?.[w.id]);
				if (moved.length)
					map[deck.id] = {
						...map[deck.id],
						...Object.fromEntries(moved.map((w) => [w.id, old[w.id]]))
					};
			}
			this.map = map;
			persist(map);
		};
		this.migrations.push(run);
		run();
	}

	resetAll() {
		this.map = {};
		persist(this.map, true);
	}
}

export const deckProgress = new DeckProgressStore();
