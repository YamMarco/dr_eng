// Persisted record of how many rounds of each lesson the student has
// completed, keyed by progress scope (a module id, or a shared scope like
// 'reading' - see progressScope in lib/content) then lesson id (globally unique within a
// module — see lib/content/types.ts, LessonNode.id). Lives outside the
// lessons page so the debug tooltip (in the root layout) can reset it, and
// so cross-section prerequisite checks (lessons path page) can look up any
// lesson's status directly.
//
// A lesson unlocks the rest of the path once its first `requiredRounds`
// rounds (default 1) are done — later rounds are optional further practice
// and don't affect anything downstream.

import './legacyIds';
import { progressScope } from '$lib/content';
import { activity } from './activity.svelte';

const STORAGE_KEY = 'lesson-progress';

type ProgressMap = Record<string, Record<string, number>>;

function load(): ProgressMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? rescope(JSON.parse(raw)) : {};
	} catch {
		return {};
	}
}

/** Moves any entry saved under a key that is no longer its lesson's scope (C reading
 *  progress saved under 'c' before 'reading' existed), keeping the higher count. */
function rescope(map: ProgressMap): ProgressMap {
	let moved = false;
	for (const [key, lessons] of Object.entries(map)) {
		for (const [lessonId, rounds] of Object.entries(lessons)) {
			const scope = progressScope(lessonId);
			if (!scope || scope === key) continue;
			map[scope] = { ...map[scope], [lessonId]: Math.max(map[scope]?.[lessonId] ?? 0, rounds) };
			delete lessons[lessonId];
			moved = true;
		}
	}
	if (moved) persist(map);
	return map;
}

function persist(map: ProgressMap) {
	if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

class LessonProgressStore {
	private map = $state<ProgressMap>(load());

	/** How many rounds of this lesson have been completed (0 = never started). */
	completedRounds(scope: string, lessonId: string): number {
		return this.map[scope]?.[lessonId] ?? 0;
	}

	/** Marks `roundIndex` (0-based) done; only ever moves the count forward. */
	markRoundCompleted(scope: string, lessonId: string, roundIndex: number) {
		activity.recordToday();
		const current = this.completedRounds(scope, lessonId);
		const next = Math.max(current, roundIndex + 1);
		if (next === current) return;
		this.map = { ...this.map, [scope]: { ...this.map[scope], [lessonId]: next } };
		persist(this.map);
	}

	resetAll() {
		this.map = {};
		persist(this.map);
	}
}

export const lessonProgress = new LessonProgressStore();
