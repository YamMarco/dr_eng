// Derived data for the home dashboard: a module's route (its sections in
// study order, with progress), today's lesson and the next step overall.
// Pure reads of the progress stores - call from $derived for reactivity.
import {
	getLesson,
	getLessonsBySection,
	moduleSections as sectionsOf,
	type LessonNode
} from '$lib/content';
import { hasContent, isLessonDone, isLessonGold, isLessonUnlocked } from '$lib/lessonPath';
import { moduleLocation } from '$lib/moduleLocation.svelte';
import { getInProgress } from '$lib/quiz/progress';
import { examStats } from '$lib/quiz/stats';
import { getQuiz, type Quiz } from '$lib/quizzes';
import { deckToday } from '$lib/deck';
import { lastEngagement, type Engagement } from '$lib/lastEngagement.svelte';

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

/** Has a writing task anywhere - those are best done on a computer. */
export function isWritingLesson(lesson: LessonNode): boolean {
	const all = [lesson.content.preface, ...lesson.content.rounds.map((r) => r.screens)];
	return all.some((screens) => screens.some((s) => s.type === 'writing-task'));
}

export type NextStep =
	| { kind: 'lesson'; lesson: LessonNode }
	| { kind: 'exam'; quiz: Quiz; reason: 'resume' | 'diagnostic' | 'section-done' | 'path-done' }
	| { kind: 'done' };

/** The coach's pick for right now: an exam left open, a diagnostic exam before
 *  anything else, a practice exam once a section is finished (one per finished
 *  section), else today's lesson. */
export function nextStep(moduleId: string): NextStep {
	const exams = examStats(moduleId);
	const next = exams.next;
	if (next && getInProgress(next.id)) return { kind: 'exam', quiz: next, reason: 'resume' };
	const route = moduleRoute(moduleId);
	if (next && exams.taken === 0 && route.every((s) => s.done === 0))
		return { kind: 'exam', quiz: next, reason: 'diagnostic' };
	const sectionsDone = route.filter((s) => s.total && s.done === s.total).length;
	if (next && sectionsDone > exams.taken)
		return { kind: 'exam', quiz: next, reason: 'section-done' };
	const lesson = todayLesson(moduleId);
	if (lesson) return { kind: 'lesson', lesson };
	return next ? { kind: 'exam', quiz: next, reason: 'path-done' } : { kind: 'done' };
}

export type ContinueItem =
	| { kind: 'lesson'; moduleId: string; lesson: LessonNode }
	| { kind: 'exam'; moduleId: string; quiz: Quiz }
	| { kind: 'words'; moduleId: string };

/** What "continue" resumes: the latest engagement while it's still open (an exam
 *  mid-way, words still due), else that module's lesson to continue. */
export function continueFrom(engagement: Engagement | null): ContinueItem | undefined {
	if (!engagement) return undefined;
	const { kind, moduleId, id } = engagement;
	if (kind === 'exam' && id && getInProgress(id)) {
		const quiz = getQuiz(id);
		if (quiz) return { kind, moduleId, quiz };
	}
	if (kind === 'words') {
		const today = deckToday(moduleId);
		if (today.reviews + today.fresh > 0) return { kind, moduleId };
	}
	const lesson = todayLesson(moduleId);
	return lesson && { kind: 'lesson', moduleId, lesson };
}

/** The latest engagement, or for progress saved before it was tracked, the
 *  most recently opened lesson. */
export function latestEngagement(): Engagement | null {
	if (lastEngagement.value) return lastEngagement.value;
	const recent = moduleLocation.mostRecent();
	return recent ? { kind: 'lesson', moduleId: recent.moduleId, id: recent.lessonId } : null;
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
