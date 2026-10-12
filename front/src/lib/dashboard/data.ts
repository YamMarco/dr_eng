// Derived data for the home dashboard: a module's route (its sections in
// study order, with progress) and today's lesson.
// Pure reads of the progress stores - call from $derived for reactivity.
import {
	getLesson,
	getLessonsBySection,
	moduleSections as sectionsOf,
	type LessonNode
} from '$lib/content';
import { hasContent, isLessonDone, isLessonGold, isLessonUnlocked } from '$lib/lessonPath';
import { moduleLocation } from '$lib/moduleLocation.svelte';

/** `total` counts only lessons with content written ("ready" to play). */
export type RouteSection = { id: string; done: number; gold: number; total: number };

/** The module's sections that have lessons, in study order. */
function moduleSections(moduleId: string): string[] {
	return sectionsOf(moduleId)
		.map((s) => s.id)
		.filter((id) => getLessonsBySection(id).length > 0);
}

/** A section's lessons top to bottom, as they sit on the path. */
function lessonsInOrder(sectionId: string): LessonNode[] {
	return [...getLessonsBySection(sectionId)].sort((a, b) => a.position.y - b.position.y);
}

export function moduleRoute(moduleId: string): RouteSection[] {
	return moduleSections(moduleId).map((id) => {
		const lessons = getLessonsBySection(id).filter(hasContent);
		return {
			id,
			done: lessons.filter((l) => isLessonDone(l.id)).length,
			gold: lessons.filter((l) => isLessonGold(l)).length,
			total: lessons.length
		};
	});
}

/** The lesson last opened if it isn't done yet, otherwise the first open,
 *  undone lesson along the route. Undefined once everything is done. */
export function todayLesson(moduleId: string): LessonNode | undefined {
	const recent = getLesson(moduleLocation.get(moduleId) ?? '');
	if (recent && !isLessonDone(recent.id) && isLessonUnlocked(recent)) return recent;
	for (const sectionId of moduleSections(moduleId)) {
		const next = lessonsInOrder(sectionId).find((l) => !isLessonDone(l.id) && isLessonUnlocked(l));
		if (next) return next;
	}
	return undefined;
}
