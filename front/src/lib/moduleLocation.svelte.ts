// Persisted "where the student left off" per module — the last lesson node
// they opened, and when. The lessons path page uses the lesson id to scroll
// straight back there and to anchor the load-up animation's cascade at that
// node instead of always starting from the first one (a long wait once
// someone is deep in). The timestamp lets the home page find the single most
// recently touched lesson across every module, for its "continue" card.

const STORAGE_KEY = 'module-location';

type Entry = { lessonId: string; ts: number };
type LocationMap = Record<string, Entry>;

function load(): LocationMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}

function persist(map: LocationMap) {
	if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

class ModuleLocationStore {
	private map = $state<LocationMap>(load());

	/** The last lesson node opened in this module, if any. */
	get(moduleId: string): string | undefined {
		return this.map[moduleId]?.lessonId;
	}

	set(moduleId: string, lessonId: string) {
		if (this.map[moduleId]?.lessonId === lessonId) return;
		this.map = { ...this.map, [moduleId]: { lessonId, ts: Date.now() } };
		persist(this.map);
	}

	/** The single most recently opened lesson across all modules, if any. */
	mostRecent(): { moduleId: string; lessonId: string } | undefined {
		let best: { moduleId: string; entry: Entry } | undefined;
		for (const [moduleId, entry] of Object.entries(this.map)) {
			if (!best || entry.ts > best.entry.ts) best = { moduleId, entry };
		}
		return best && { moduleId: best.moduleId, lessonId: best.entry.lessonId };
	}
}

export const moduleLocation = new ModuleLocationStore();
