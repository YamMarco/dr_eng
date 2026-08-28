// Persisted record of which sub-lessons (path nodes) the student has
// completed, keyed by "moduleId-lessonId". Lives outside the lesson page so
// the debug tooltip (in the root layout) can reset it.

const STORAGE_KEY = 'lesson-progress';

type ProgressMap = Record<string, number[]>;

function load(): ProgressMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}

function persist(map: ProgressMap) {
	if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

class LessonProgressStore {
	private map = $state<ProgressMap>(load());

	isCompleted(lessonKey: string, partIndex: number): boolean {
		return (this.map[lessonKey] ?? []).includes(partIndex);
	}

	markCompleted(lessonKey: string, partIndex: number) {
		const current = this.map[lessonKey] ?? [];
		if (current.includes(partIndex)) return;
		this.map = { ...this.map, [lessonKey]: [...current, partIndex] };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map);
	}
}

export const lessonProgress = new LessonProgressStore();
