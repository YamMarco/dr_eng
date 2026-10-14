// Derived data for the home dashboard: a module's route (its sections in
// study order, with progress), today's lesson, when to suggest an exam and
// what "continue" resumes.
// Pure reads of the progress stores - call from $derived for reactivity.
import {
	getLesson,
	getLessonsBySection,
	moduleSections as sectionsOf,
	sectionMeta,
	SKILLS,
	type LessonNode,
	type Skill
} from '$lib/content';
import { i18n } from '$lib/i18n/index.svelte';
import {
	hasContent,
	isLessonDone,
	isLessonGold,
	isLessonUnlocked,
	roundsCompleted
} from '$lib/lessonPath';
import { moduleLocation } from '$lib/moduleLocation.svelte';
import { getInProgress } from '$lib/quiz/progress';
import { examStats } from '$lib/quiz/stats';
import { getQuiz, type Quiz } from '$lib/quizzes';
import { deckStats, deckToday, getDeck } from '$lib/deck';
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

/** A module's lessons done out of those written. */
export function lessonStats(route: RouteSection[]): Progress {
	return {
		done: route.reduce((sum, s) => sum + s.done, 0),
		total: route.reduce((sum, s) => sum + s.total, 0)
	};
}

export type Progress = { done: number; total: number };

export type SkillRow = {
	skill: Skill;
	progress: Progress;
	/** The word engine (E's vocabulary) or the lesson path. */
	kind: 'engine' | 'path';
	/** For a path skill: the section it opens on. */
	section?: string;
};

/** A module's rows on its page, always in SKILLS order (vocabulary, reading,
 *  writing); a skill the module doesn't train is simply absent. Vocabulary is the
 *  word engine when the module has one (E), else its vocab section (C). */
export function moduleSkills(moduleId: string, route: RouteSection[]): SkillRow[] {
	const skillOf = (sectionId: string) => sectionMeta.find((s) => s.id === sectionId)?.skill;
	return SKILLS.flatMap((skill): SkillRow[] => {
		if (skill === 'vocab' && getDeck(moduleId)) {
			const { seen, total } = deckStats(moduleId);
			return [{ skill, kind: 'engine', progress: { done: seen, total } }];
		}
		const sections = route.filter((s) => skillOf(s.id) === skill);
		if (!sections.length) return [];
		return [{ skill, kind: 'path', section: sections[0].id, progress: lessonStats(sections) }];
	});
}

/** Share of a module's lessons that must be done before exams are suggested -
 *  they stay open any time, but a student far from done isn't pushed to them. */
export const EXAM_READY = 0.75;

export type ExamAdvice = 'resume' | 'ready' | 'path-done';

/** Whether to suggest an exam for this module now: one left open, else the next
 *  untaken one once most (or all) of the path is done. Undefined = don't push. */
export function examAdvice(moduleId: string): ExamAdvice | undefined {
	const next = examStats(moduleId).next;
	if (!next) return undefined;
	if (getInProgress(next.id)) return 'resume';
	const { done, total } = lessonStats(moduleRoute(moduleId));
	if (!total || done === total) return 'path-done';
	return done / total >= EXAM_READY ? 'ready' : undefined;
}

export type DeckSummary = { progress: Progress; today: number };

/** A module's word deck on home: words met out of all, and today's session size.
 *  Undefined when the module has no deck. */
export function deckSummary(moduleId: string): DeckSummary | undefined {
	if (!getDeck(moduleId)) return undefined;
	const { seen, total } = deckStats(moduleId);
	const { reviews, fresh } = deckToday(moduleId);
	return { progress: { done: seen, total }, today: reviews + fresh };
}

export type ModuleHook = { text: string; tone: 'go' | 'info' };

/** The one line under a module on home - the reason to open it. In order: an exam
 *  left open, an exam worth taking now, how many lessons until the
 *  student is ready for the exam (the goal-gradient), else a plain invitation. */
export function moduleHook(moduleId: string, route: RouteSection[]): ModuleHook {
	const t = i18n.dict.home;
	const advice = examAdvice(moduleId);
	if (advice === 'resume') return { tone: 'go', text: t.hookResume };
	if (advice) return { tone: 'go', text: t.hookReady };
	const { done, total } = lessonStats(route);
	const hasExams = examStats(moduleId).total > 0;
	const left = hasExams ? Math.ceil(total * EXAM_READY) - done : total - done;
	if (total && left > 0)
		return { tone: 'info', text: hasExams ? t.hookToExam(left) : t.hookLessonsLeft(left) };
	return { tone: 'info', text: t.hookOpen };
}

/** Second line under a lesson: where the student is in it, or that it's better
 *  on a computer (writing). */
export function lessonSubtitle(lesson: LessonNode, onPhone: boolean): string {
	const t = i18n.dict;
	if (onPhone && isWritingLesson(lesson)) return t.home.desktopNote;
	const done = roundsCompleted(lesson.id);
	const rounds = lesson.content.rounds.length;
	return [
		done ? t.home.lessonMidway : t.home.lessonNext,
		rounds > 1 ? t.lesson.roundLabel(Math.min(done + 1, rounds), rounds) : ''
	]
		.filter(Boolean)
		.join(' · ');
}

export type ContinueItem =
	| { kind: 'lesson'; moduleId: string; lesson: LessonNode }
	| { kind: 'exam'; moduleId: string; quiz: Quiz }
	| { kind: 'words'; moduleId: string };

/** Where a continue item leads. The same string identifies "already offered up top". */
export function continueHref(item: ContinueItem, groupId: string): string {
	const base = `/unit/${groupId}/module/${item.moduleId}`;
	if (item.kind === 'exam') return `${base}/exam/${item.quiz.id}`;
	if (item.kind === 'words') return `${base}/words`;
	return `${base}/lessons?lesson=${item.lesson.id}`;
}

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
function latestEngagement(): Engagement | null {
	if (lastEngagement.value) return lastEngagement.value;
	const recent = moduleLocation.mostRecent();
	return recent ? { kind: 'lesson', moduleId: recent.moduleId, id: recent.lessonId } : null;
}

/** What home's continue bar offers for a unit level's modules: the latest thing
 *  done if it's one of them, else the next lesson of any module with progress
 *  (so a student with progress always has somewhere to continue). Undefined for
 *  a student who hasn't started. */
export function resumeItem(moduleIds: string[]): ContinueItem | undefined {
	const latest = continueFrom(latestEngagement());
	if (latest && moduleIds.includes(latest.moduleId)) return latest;
	for (const moduleId of moduleIds) {
		if (!lessonStats(moduleRoute(moduleId)).done && !moduleLocation.get(moduleId)) continue;
		const lesson = todayLesson(moduleId);
		if (lesson) return { kind: 'lesson', moduleId, lesson };
	}
	return undefined;
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
