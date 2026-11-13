// Lessons whose preface (teaching intro) the student already went through, so
// a failed first round restarts at its questions, not the intro. This device only.
import { storeItem } from './storedJson';

const STORAGE_KEY = 'preface-seen';

function load(): string[] {
	try {
		const v = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
		return Array.isArray(v) ? v.filter((id) => typeof id === 'string') : [];
	} catch {
		return [];
	}
}

class PrefaceSeenStore {
	private ids = $state<string[]>(typeof localStorage === 'undefined' ? [] : load());

	has(lessonId: string): boolean {
		return this.ids.includes(lessonId);
	}

	add(lessonId: string) {
		if (this.has(lessonId)) return;
		this.ids = [...this.ids, lessonId];
		storeItem(STORAGE_KEY, JSON.stringify(this.ids));
	}

	resetAll() {
		this.ids = [];
		storeItem(STORAGE_KEY, '[]');
	}
}

export const prefaceSeen = new PrefaceSeenStore();
