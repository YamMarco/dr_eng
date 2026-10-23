// Aggregates every section's LessonNode[] into one lookup.
// Add new sections to the imports + list below.
import type { LessonNode } from './types';
import { c1Lessons } from './c/c-1';
import { c2Lessons } from './c/c-2';
import { c3Lessons } from './c/c-3';
import { e1Lessons } from './e/e-1';
import { g1Lessons } from './g/g-1';
import { g2Lessons } from './g/g-2';
import { cobe1Lessons } from './cobe/cobe-1';
import { cobe2Lessons } from './cobe/cobe-2';
import { cobe3Lessons } from './cobe/cobe-3';

export * from './types';
import { sectionMeta } from './sectionMeta';
export { sectionMeta };

const all: LessonNode[] = [
	...c1Lessons,
	...c2Lessons,
	...c3Lessons,
	...e1Lessons,
	...g1Lessons,
	...g2Lessons,
	...cobe1Lessons,
	...cobe2Lessons,
	...cobe3Lessons
];

export const allLessons: Record<string, LessonNode> = Object.fromEntries(
	all.map((lesson) => [lesson.id, lesson])
);

export function getLesson(id: string): LessonNode | undefined {
	return allLessons[id];
}

export function getLessonsBySection(section: string): LessonNode[] {
	return all.filter((lesson) => lesson.section === section);
}

const fivePoint = new WeakMap<LessonNode, LessonNode>();

/** The lesson as the path's level plays it: on the 5-point path a node with
 *  `content5` plays that instead. Cached, so the result is a stable object. */
export function lessonForUnits(lesson: LessonNode, units: number): LessonNode {
	if (units !== 5 || !lesson.content5) return lesson;
	let out = fivePoint.get(lesson);
	if (!out) fivePoint.set(lesson, (out = { ...lesson, content: lesson.content5 }));
	return out;
}

/** The sections on a module's path, in study order. */
export function moduleSections(moduleId: string) {
	return sectionMeta.filter((section) => section.modules.includes(moduleId));
}

/** Where a lesson's progress is saved: its section's shared scope, else the owning module. */
export function progressScope(lessonId: string): string | undefined {
	const section = sectionMeta.find((s) => s.id === allLessons[lessonId]?.section);
	return section && (section.progressScope ?? section.modules[0]);
}
