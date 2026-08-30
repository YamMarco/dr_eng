// Persisted record of which lessons the student has completed, keyed by
// moduleId then lesson id (globally unique within a module — see
// sectionContent.ts). Lives outside the lessons page so the debug tooltip
// (in the root layout) can reset it, and so cross-section prerequisite
// checks (lessons path page) can look up any lesson's status directly.

const STORAGE_KEY = 'lesson-progress';

type ProgressMap = Record<string, string[]>;

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

	isCompleted(moduleId: string, lessonId: string): boolean {
		return (this.map[moduleId] ?? []).includes(lessonId);
	}

	markCompleted(moduleId: string, lessonId: string) {
		const current = this.map[moduleId] ?? [];
		if (current.includes(lessonId)) return;
		this.map = { ...this.map, [moduleId]: [...current, lessonId] };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map);
	}
}

export const lessonProgress = new LessonProgressStore();
