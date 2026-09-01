// The Module C programme: 26 sections of micro-skill nodes, built from
// docs/module c/duolingo-program.md (which is itself built from the teacher's
// 24-lesson programme in docs/module c/program).
//
// A section file declares only teaching content — id, titles, and its lessons'
// screens. Path geometry (x/y) and the prerequisite chain are derived here, so
// inserting or reordering a node never means hand-editing coordinates.

import type { Section } from '../sections';
import type { Lesson, SectionContent, SectionIntro } from '../sectionContent';
import type { LessonScreen } from '../lesson-screens/types';

import { section1 } from './s01';

/** A node as a section file declares it — no coordinates, no prerequisites. */
export type ProgramLesson = {
	/** Unique within the module; convention is `s{section}-l{n}`. */
	id: string;
	titleHe: string;
	screens?: LessonScreen[];
	rounds?: LessonScreen[][];
	/** Material code suffix shown on the node, e.g. '2a'. Defaults to position. */
	code?: string;
};

export type ProgramSection = {
	id: number;
	titleEn: string;
	titleHe: string;
	intro?: SectionIntro;
	lessons: ProgramLesson[];
};

const sections: ProgramSection[] = [section1];

// Geometry of the continuous path. The x cycle keeps it from being a
// dead-straight vertical line; y just steps down, section after section.
const X_CYCLE = [0, 70, 100, 70, 0, -70, -100, -70];
const FIRST_Y = 120;
const STEP_Y = 120;

function place(): Record<string, SectionContent> {
	const content: Record<string, SectionContent> = {};
	let row = 0;
	let previousId: string | undefined;

	for (const section of sections) {
		const lessons: Lesson[] = section.lessons.map((lesson) => {
			const placed: Lesson = {
				id: lesson.id,
				titleHe: lesson.titleHe,
				screens: lesson.screens,
				rounds: lesson.rounds,
				code: lesson.code,
				prerequisites: previousId ? [previousId] : undefined,
				x: X_CYCLE[row % X_CYCLE.length],
				y: FIRST_Y + row * STEP_Y
			};
			previousId = lesson.id;
			row++;
			return placed;
		});
		content[`c-${section.id}`] = { intro: section.intro, lessons };
	}

	return content;
}

export const programSectionMeta: Section[] = sections.map((s) => ({
	id: s.id,
	titleEn: s.titleEn,
	titleHe: s.titleHe
}));

export const programContent: Record<string, SectionContent> = place();
