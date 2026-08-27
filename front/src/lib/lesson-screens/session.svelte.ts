// A small shared bag of numbers (timer readings, etc.) that screen components
// within the same lesson part can write to and read from, without wiring
// props through the runner. Scoped per LessonRunner instance via context.

import { getContext, setContext } from 'svelte';

const KEY = Symbol('lesson-session');

export type LessonSession = Record<string, number>;

export function createLessonSession(): LessonSession {
	const session = $state<LessonSession>({});
	setContext(KEY, session);
	return session;
}

export function getLessonSession(): LessonSession {
	const session = getContext<LessonSession>(KEY);
	if (!session) throw new Error('getLessonSession() called outside a LessonRunner');
	return session;
}
