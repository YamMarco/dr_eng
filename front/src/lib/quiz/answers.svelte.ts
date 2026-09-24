// Quiz-mode answer collection. A screen doesn't know it's being scored — it
// just writes its raw answer into the slot for whichever screen is currently
// mounted. QuizRunner owns the actual `Record<string, unknown>` and moves the
// slot's `id` as it advances; the slot object itself is created once (context
// can only be set during a component's synchronous init), and its getters
// close over QuizRunner's reactive state so reads/writes stay live.

import { getContext, setContext } from 'svelte';

const KEY = Symbol('quiz-answer-slot');

export interface QuizAnswerSlot {
	/** Stable id for the screen currently mounted, e.g. `${partId}-${index}`. */
	readonly id: string;
	get(): unknown;
	set(value: unknown): void;
}

export function provideQuizAnswerSlot(slot: QuizAnswerSlot) {
	setContext(KEY, slot);
}

export function getQuizAnswerSlot(): QuizAnswerSlot {
	const slot = getContext<QuizAnswerSlot>(KEY);
	if (!slot) throw new Error('getQuizAnswerSlot() called outside a QuizRunner');
	return slot;
}
