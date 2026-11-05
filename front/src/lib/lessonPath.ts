// Done / unlocked rules for a lesson node, shared by the lessons path canvas
// and the home dashboard so both always agree on what's open. Progress is
// read and written under the lesson's progress scope (see progressScope), not
// the module being viewed, so a section shared by two modules (C and E
// reading) has one progress for both.
import { getLessonMeta, progressScope, type LessonMeta } from '$lib/content/meta';
import { debugStore } from '$lib/debug.svelte';
import { lessonProgress } from '$lib/lessonProgress.svelte';

/** No screens written yet anywhere — the node still shows (title only) but never unlocks. */
export function hasContent(lesson: LessonMeta): boolean {
	return lesson.ready;
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
	return roundsCompleted(lessonId) >= (getLessonMeta(lessonId)?.requiredRounds ?? 1);
}

/** Every round played, not just the required ones - the path's gold node. */
export function isLessonGold(lesson: LessonMeta): boolean {
	return roundsCompleted(lesson.id) >= lesson.rounds;
}

// The debug "unlock all" flag is a full override — it comes before every
// other check, content-availability included, so it always does what it
// says regardless of what's been authored yet. A lesson the student has
// already completed always stays open too, even if debug-unlocking was
// used earlier to reach it out of order and its formal prerequisites
// still aren't otherwise satisfied — turning "unlock all" back off must
// never re-lock real progress.
export function isLessonUnlocked(lesson: LessonMeta): boolean {
	if (debugStore.unlockAll) return true;
	if (isLessonDone(lesson.id)) return true;
	if (!hasContent(lesson)) return false;
	return lesson.required.every((id) => isLessonDone(id));
}
