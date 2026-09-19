// Persisted record of how many rounds of each lesson the student has
// completed, keyed by moduleId then lesson id (globally unique within a
// module — see lib/content/types.ts, LessonNode.id). Lives outside the
// lessons page so the debug tooltip (in the root layout) can reset it, and
// so cross-section prerequisite checks (lessons path page) can look up any
// lesson's status directly.
//
// A lesson unlocks the rest of the path once its first `requiredRounds`
// rounds (default 1) are done — later rounds are optional further practice
// and don't affect anything downstream.

const STORAGE_KEY = 'lesson-progress';

type ProgressMap = Record<string, Record<string, number>>;

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

	/** How many rounds of this lesson have been completed (0 = never started). */
	completedRounds(moduleId: string, lessonId: string): number {
		return this.map[moduleId]?.[lessonId] ?? 0;
	}

	/** Enough rounds done (default: the first) — this is what unlocks the rest of the path. */
	isCompleted(moduleId: string, lessonId: string, requiredRounds = 1): boolean {
		return this.completedRounds(moduleId, lessonId) >= requiredRounds;
	}

	/** Marks `roundIndex` (0-based) done; only ever moves the count forward. */
	markRoundCompleted(moduleId: string, lessonId: string, roundIndex: number) {
		const current = this.completedRounds(moduleId, lessonId);
		const next = Math.max(current, roundIndex + 1);
		if (next === current) return;
		this.map = { ...this.map, [moduleId]: { ...this.map[moduleId], [lessonId]: next } };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map);
	}
}

export const lessonProgress = new LessonProgressStore();
