// Lets a screen component branch its behavior between lesson practice (check
// → feedback → advance) and quiz mode (record → advance, no feedback) without
// LessonRunner ever needing to know quiz mode exists. Lesson mode is the
// default when no QuizRunner has set the context, so LessonRunner itself
// never has to call createScreenMode().

import { getContext, setContext } from 'svelte';

const KEY = Symbol('screen-mode');

export type ScreenMode = 'lesson' | 'quiz';

export function createScreenMode(mode: ScreenMode) {
	setContext(KEY, mode);
}

export function getScreenMode(): ScreenMode {
	return getContext<ScreenMode>(KEY) ?? 'lesson';
}
