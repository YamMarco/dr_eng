// Aggregates every section's LessonNode[] into one lookup.
// Add new sections to the imports + list below.
import type { LessonNode } from './types';
import { c1Lessons } from './c/c-1';
import { c2Lessons } from './c/c-2';
import { c3Lessons } from './c/c-3';

export * from './types';
export { sectionMeta } from './sectionMeta';

const all: LessonNode[] = [...c1Lessons, ...c2Lessons, ...c3Lessons];

export const allLessons: Record<string, LessonNode> = Object.fromEntries(
	all.map((lesson) => [lesson.id, lesson])
);

export function getLesson(id: string): LessonNode | undefined {
	return allLessons[id];
}

export function getLessonsBySection(section: string): LessonNode[] {
	return all.filter((lesson) => lesson.section === section);
}
