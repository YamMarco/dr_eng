// The student's own phrases, collected from AI tips (localStorage, synced to
// the account); shown first in the phrase bank.
import { onSyncedChange, saveSynced } from './progressSync.svelte';

const KEY = 'my-phrases';

function load(): string[] {
	try {
		return JSON.parse(localStorage.getItem(KEY) ?? '[]');
	} catch {
		return [];
	}
}

class MyPhrases {
	list = $state<string[]>(load());

	constructor() {
		onSyncedChange(KEY, () => (this.list = load()));
	}

	has(phrase: string) {
		return this.list.includes(phrase);
	}

	toggle(phrase: string) {
		this.list = this.has(phrase) ? this.list.filter((p) => p !== phrase) : [phrase, ...this.list];
		try {
			saveSynced(KEY, this.list);
		} catch {
			// a nicety: works for this session only
		}
	}
}

export const myPhrases = new MyPhrases();

/** English phrases quoted in an AI tip ("What surprised me most was..."), to add to the bank. */
export function quotedPhrases(tip: string): string[] {
	return [...tip.matchAll(/"([A-Za-z][^"]{2,90})"/g)].map((m) => m[1].trim());
}
