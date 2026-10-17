import type { SvelteMap } from 'svelte/reactivity';

export type MarkColor = 'yellow' | 'green' | 'pink' | 'blue';
// lineKey is the DOM attribute value, so always a string (line keys may be numbers).
export type Highlight = { lineKey: string; start: number; end: number; color: MarkColor };

/** Context key: a quiz provides a store so one passage's highlights are shared
 *  between its standalone screen and the in-question "show passage" panel. */
export const PASSAGE_MARKS = Symbol('passage-marks');
export type PassageMarksStore = SvelteMap<object, Highlight[]>;
