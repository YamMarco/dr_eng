// Persisted "where the student left off" per module — the last lesson node
// they opened. The lessons path page uses it to scroll straight back there
// and to anchor the load-up animation's cascade at that node instead of
// always starting from the first one (a long wait once someone is deep in).

const STORAGE_KEY = 'module-location';

type LocationMap = Record<string, string>;

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
		return this.map[moduleId];
	}

	set(moduleId: string, lessonId: string) {
		if (this.map[moduleId] === lessonId) return;
		this.map = { ...this.map, [moduleId]: lessonId };
		persist(this.map);
	}
}

export const moduleLocation = new ModuleLocationStore();
