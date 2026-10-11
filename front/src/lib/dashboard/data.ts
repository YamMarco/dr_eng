// Derived data for the home dashboard: a module's route (its sections in
// study order, with progress), today's lesson, and the latest exam score.
// Pure reads of the progress stores - call from $derived for reactivity.
import { getLesson, getLessonsBySection, sectionMeta, type LessonNode } from '$lib/content';
import { hasContent, isLessonDone, isLessonGold, isLessonUnlocked } from '$lib/lessonPath';
import { moduleLocation } from '$lib/moduleLocation.svelte';
import { getQuizzesForModule } from '$lib/quizzes';
import { getLastAttempt } from '$lib/quiz/progress';

/** `total` counts only lessons with content written ("ready" to play). */
export type RouteSection = { id: string; done: number; gold: number; total: number };

/** Section ids are `<moduleId>-<n>`; sectionMeta order is the study order. */
function moduleSections(moduleId: string): string[] {
	return sectionMeta
		.map((s) => s.id)
		.filter((id) => id.startsWith(`${moduleId}-`) && getLessonsBySection(id).length > 0);
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
			done: lessons.filter((l) => isLessonDone(moduleId, l.id)).length,
			gold: lessons.filter((l) => isLessonGold(moduleId, l)).length,
			total: lessons.length
		};
	});
}

/** The lesson last opened if it isn't done yet, otherwise the first open,
 *  undone lesson along the route. Undefined once everything is done. */
export function todayLesson(moduleId: string): LessonNode | undefined {
	const recent = getLesson(moduleLocation.get(moduleId) ?? '');
	if (recent && !isLessonDone(moduleId, recent.id) && isLessonUnlocked(moduleId, recent))
		return recent;
	for (const sectionId of moduleSections(moduleId)) {
		const next = lessonsInOrder(sectionId).find(
			(l) => !isLessonDone(moduleId, l.id) && isLessonUnlocked(moduleId, l)
		);
		if (next) return next;
	}
	return undefined;
}

export type ExamStats = { taken: number; total: number; lastPercent: number | undefined };

/** How many of the module's exams were submitted at least once, and the
 *  auto-graded percent of the most recent submission. */
export function examStats(moduleId: string): ExamStats {
	const { assorted, ministry } = getQuizzesForModule(moduleId);
	const quizzes = [...assorted, ...ministry];
	let taken = 0;
	let latest: { at: number; percent: number } | undefined;
	for (const quiz of quizzes) {
		const attempt = getLastAttempt(quiz.id);
		if (!attempt) continue;
		taken++;
		if (attempt.score.auto.max === 0 || (latest && attempt.submittedAt <= latest.at)) continue;
		latest = {
			at: attempt.submittedAt,
			percent: Math.round((attempt.score.auto.earned / attempt.score.auto.max) * 100)
		};
	}
	return { taken, total: quizzes.length, lastPercent: latest?.percent };
}
