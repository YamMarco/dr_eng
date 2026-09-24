// Screens don't carry their own id, so both QuizRunner (walking) and
// scoring.ts (grading) derive the same stable id the same way: position in
// the *authored* part.screens array, skipping empty screens entirely (they
// never appear in the played sequence and never get an id).

import { isScreenEmpty, type LessonScreen } from '$lib/lesson-screens/types';
import type { QuizPart } from './types';

export interface IdentifiedScreen {
	id: string;
	screen: LessonScreen;
}

export function screensWithIds(part: QuizPart): IdentifiedScreen[] {
	return part.screens.flatMap((screen, index) =>
		isScreenEmpty(screen) ? [] : [{ id: `${part.id}-${index}`, screen }]
	);
}
