// Done / unlocked rules for a lesson node, shared by the lessons path canvas
// and the home dashboard so both always agree on what's open.
import { getLesson, type LessonNode } from '$lib/content';
import { isScreenEmpty } from '$lib/lesson-screens/types';
import { debugStore } from '$lib/debug.svelte';
import { lessonProgress } from '$lib/lessonProgress.svelte';

/** No screens written yet anywhere — the node still shows (title only) but never unlocks. */
export function hasContent(lesson: LessonNode): boolean {
	const all = [lesson.content.preface, ...lesson.content.rounds.map((r) => r.screens)];
	return all.some((screens) => screens.some((screen) => !isScreenEmpty(screen)));
}

export function isLessonDone(moduleId: string, lessonId: string): boolean {
	return lessonProgress.isCompleted(moduleId, lessonId, getLesson(lessonId)?.requiredRounds);
}

// The debug "unlock all" flag is a full override — it comes before every
// other check, content-availability included, so it always does what it
// says regardless of what's been authored yet. A lesson the student has
// already completed always stays open too, even if debug-unlocking was
// used earlier to reach it out of order and its formal prerequisites
// still aren't otherwise satisfied — turning "unlock all" back off must
// never re-lock real progress.
export function isLessonUnlocked(moduleId: string, lesson: LessonNode): boolean {
	if (debugStore.unlockAll) return true;
	if (isLessonDone(moduleId, lesson.id)) return true;
	if (!hasContent(lesson)) return false;
	return lesson.required.every((id) => isLessonDone(moduleId, id));
}
