import type { LessonNode } from './types';

const fivePoint = new WeakMap<LessonNode, LessonNode>();

/** The lesson as the path's level plays it: on the 5-point path a node with
 *  `content5` plays that instead. Cached, so the result is a stable object. */
export function lessonForUnits(lesson: LessonNode, units: number): LessonNode {
	if (units !== 5 || !lesson.content5) return lesson;
	let out = fivePoint.get(lesson);
	if (!out) fivePoint.set(lesson, (out = { ...lesson, content: lesson.content5 }));
	return out;
}
