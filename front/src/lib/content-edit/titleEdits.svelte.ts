// The editor's working copy of the Hebrew content titles (i18n/locales/
// titles.he.ts), keyed by section / lesson / exam / exam-part id. Nodes carry
// no title text, so the lesson and exam models each hold one of these next to
// their nodes. `changes()` is the key-level patch a save sends: untouched keys
// never leave the browser, so two editors never stomp on each other's titles.
//
// Detachable — part of src/lib/content-edit/. See README.md.

import { titlesHe } from '$lib/i18n/locales/titles.he';

export class TitleEdits {
	map = $state<Record<string, string>>({});
	#baseline: Record<string, string> = {};

	load() {
		this.map = { ...titlesHe };
		this.#baseline = { ...titlesHe };
	}

	get(id: string): string {
		return this.map[id] ?? '';
	}

	set(id: string, title: string) {
		this.map[id] = title;
	}

	/** Drops `id` and every `id.<suffix>` key (an exam's description and parts). */
	remove(id: string) {
		for (const key of Object.keys(this.map)) {
			if (key === id || key.startsWith(`${id}.`)) delete this.map[key];
		}
	}

	rename(oldId: string, newId: string) {
		if (oldId in this.map) {
			this.map[newId] = this.map[oldId];
			delete this.map[oldId];
		}
	}

	copy(fromId: string, toId: string) {
		if (fromId in this.map) this.map[toId] = this.map[fromId];
	}

	changes(): { upserts: Record<string, string>; deletes: string[] } {
		const upserts = Object.fromEntries(
			Object.entries(this.map).filter(([k, v]) => this.#baseline[k] !== v)
		);
		const deletes = Object.keys(this.#baseline).filter((k) => !(k in this.map));
		return { upserts, deletes };
	}

	get changed(): boolean {
		const { upserts, deletes } = this.changes();
		return Object.keys(upserts).length > 0 || deletes.length > 0;
	}

	markClean() {
		this.#baseline = { ...this.map };
	}

	restore(map: Record<string, string>) {
		this.map = map;
	}
}
