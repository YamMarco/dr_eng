// The student shell's view of the lessons: everything but the screens. The shell (home, module
// page, lesson path) needs only this; the lesson content (~1 MB) loads when a lesson opens
// (see load.ts). The data is generated from the lesson files (scripts/lesson-meta.mjs).
import { lessonMeta } from './meta.generated';
import { sectionMeta } from './sectionMeta';
import { SKILLS, type LessonNode, type SectionMeta, type Skill } from './types';

export { sectionMeta, SKILLS };
export type { SectionMeta, Skill };

/** A lesson node without its content. */
export type LessonMeta = Omit<LessonNode, 'content' | 'content5'> & {
	/** The lesson file it lives in (load.ts key), e.g. 'c/c-1'. */
	file: string;
	/** Rounds the lesson has (the 5-point version has the same count). */
	rounds: number;
	/** Some screen is written: the node can unlock. */
	ready: boolean;
	/** Has a writing task (best done on a computer). */
	writing: boolean;
};

const byId = new Map(lessonMeta.map((l) => [l.id, l]));

export function getLessonMeta(id: string): LessonMeta | undefined {
	return byId.get(id);
}

export function getLessonMetaBySection(section: string): LessonMeta[] {
	return lessonMeta.filter((l) => l.section === section);
}

/** The sections on a module's path, in study order. */
export function moduleSections(moduleId: string) {
	return sectionMeta.filter((section) => section.modules.includes(moduleId));
}

/** Where a lesson's progress is saved: its section's shared scope, else the owning module. */
export function progressScope(lessonId: string): string | undefined {
	const section = sectionMeta.find((s) => s.id === byId.get(lessonId)?.section);
	return section && (section.progressScope ?? section.modules[0]);
}
