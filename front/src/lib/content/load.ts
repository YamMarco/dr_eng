// The lesson content, loaded when a lesson opens: one chunk per section file, so the student
// shell never downloads the ~1 MB of screens. Add a new lesson file to SECTIONS below, to
// index.ts and to scripts/lesson-meta.mjs (tests/lesson-meta.test.ts checks the three agree).
import { getLessonMeta } from './meta';
import type { LessonNode } from './types';

type Loader = () => Promise<LessonNode[]>;

/** Lesson file (as in meta.file) -> its lessons. */
export const SECTIONS: Record<string, Loader> = {
	'c/c-1': () => import('./c/c-1').then((m) => m.c1Lessons),
	'c/c-2': () => import('./c/c-2').then((m) => m.c2Lessons),
	'c/c-3': () => import('./c/c-3').then((m) => m.c3Lessons),
	'd/d-1': () => import('./d/d-1').then((m) => m.d1Lessons),
	'd/d-2': () => import('./d/d-2').then((m) => m.d2Lessons),
	'd/d-3': () => import('./d/d-3').then((m) => m.d3Lessons),
	'd/d-4': () => import('./d/d-4').then((m) => m.d4Lessons),
	'd/d-5': () => import('./d/d-5').then((m) => m.d5Lessons),
	'e/e-1': () => import('./e/e-1').then((m) => m.e1Lessons),
	'f/f-1': () => import('./f/f-1').then((m) => m.f1Lessons),
	'f/f-2': () => import('./f/f-2').then((m) => m.f2Lessons),
	'f/f-3': () => import('./f/f-3').then((m) => m.f3Lessons),
	'g/g-1': () => import('./g/g-1').then((m) => m.g1Lessons),
	'g/g-2': () => import('./g/g-2').then((m) => m.g2Lessons),
	'cobe/cobe-1': () => import('./cobe/cobe-1').then((m) => m.cobe1Lessons),
	'cobe/cobe-2': () => import('./cobe/cobe-2').then((m) => m.cobe2Lessons),
	'cobe/cobe-3': () => import('./cobe/cobe-3').then((m) => m.cobe3Lessons)
};

const loaded = new Map<string, Promise<LessonNode[]>>();

/** A lesson with its screens, or undefined for an unknown id. A failed load is not cached. */
export async function loadLesson(id: string): Promise<LessonNode | undefined> {
	const file = getLessonMeta(id)?.file;
	const load = file ? SECTIONS[file] : undefined;
	if (!file || !load) return undefined;
	let lessons = loaded.get(file);
	if (!lessons) {
		lessons = load();
		loaded.set(file, lessons);
		lessons.catch(() => loaded.delete(file));
	}
	return (await lessons).find((l) => l.id === id);
}
