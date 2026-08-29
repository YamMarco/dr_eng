// Persisted record of which lessons (path nodes) the student has completed,
// keyed by "moduleId-sectionId". Lives outside the lessons page so the debug
// tooltip (in the root layout) can reset it.

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

	isCompleted(sectionKey: string, lessonIndex: number): boolean {
		return (this.map[sectionKey] ?? []).includes(lessonIndex);
	}

	markCompleted(sectionKey: string, lessonIndex: number) {
		const current = this.map[sectionKey] ?? [];
		if (current.includes(lessonIndex)) return;
		this.map = { ...this.map, [sectionKey]: [...current, lessonIndex] };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map);
	}
}

export const lessonProgress = new LessonProgressStore();
