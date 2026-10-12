// Done / unlocked rules for a lesson node, shared by the lessons path canvas
// and the home dashboard so both always agree on what's open. Progress is
// read and written under the lesson's progress scope (see progressScope), not
// the module being viewed, so a section shared by two modules (C and E
// reading) has one progress for both.
import { getLesson, progressScope, type LessonNode } from '$lib/content';
import { isScreenEmpty } from '$lib/lesson-screens/types';
import { debugStore } from '$lib/debug.svelte';
import { lessonProgress } from '$lib/lessonProgress.svelte';

/** No screens written yet anywhere — the node still shows (title only) but never unlocks. */
export function hasContent(lesson: LessonNode): boolean {
	const all = [lesson.content.preface, ...lesson.content.rounds.map((r) => r.screens)];
	return all.some((screens) => screens.some((screen) => !isScreenEmpty(screen)));
}

export function roundsCompleted(lessonId: string): number {
	const scope = progressScope(lessonId);
	return scope ? lessonProgress.completedRounds(scope, lessonId) : 0;
}

export function markRoundCompleted(lessonId: string, roundIndex: number) {
	const scope = progressScope(lessonId);
	if (scope) lessonProgress.markRoundCompleted(scope, lessonId, roundIndex);
}

export function isLessonDone(lessonId: string): boolean {
	return roundsCompleted(lessonId) >= (getLesson(lessonId)?.requiredRounds ?? 1);
}

/** Every round played, not just the required ones - the path's gold node. */
export function isLessonGold(lesson: LessonNode): boolean {
	return roundsCompleted(lesson.id) >= lesson.content.rounds.length;
}

// The debug "unlock all" flag is a full override — it comes before every
// other check, content-availability included, so it always does what it
// says regardless of what's been authored yet. A lesson the student has
// already completed always stays open too, even if debug-unlocking was
// used earlier to reach it out of order and its formal prerequisites
// still aren't otherwise satisfied — turning "unlock all" back off must
// never re-lock real progress.
export function isLessonUnlocked(lesson: LessonNode): boolean {
	if (debugStore.unlockAll) return true;
	if (isLessonDone(lesson.id)) return true;
	if (!hasContent(lesson)) return false;
	return lesson.required.every((id) => isLessonDone(id));
}
