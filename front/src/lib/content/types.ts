// The flat content model. One Lesson = one path node = one future DB row
// (see schema.sql). Screens keep the existing strict union so authoring
// and the runner share one type.
import type { LessonScreen } from '$lib/lesson-screens/types';

export type { LessonScreen };

export interface LessonRound {
	screens: LessonScreen[];
}

/** At least one round; round 0 is the main one, later rounds are optional practice. */
export interface LessonContent {
	rounds: LessonRound[];
}

export interface LessonNode {
	/** Unique within the module; the join key for progress and `required`. */
	id: string;
	/** Grouping key, matches a SectionMeta.id (e.g. 'c-4'). */
	section: string;
	titleHe: string;
	titleEn?: string;
	/** Display code on the node label, e.g. 'c.4.2a'. */
	code: string;
	/** Lesson ids that must have round 1 done before this unlocks (AND'd). */
	required: string[];
	/** Canvas placement in px, relative to the path's horizontal center. */
	position: { x: number; y: number };
	/** Bigger node — no scored screen in any round. */
	big: boolean;
	image?: string;
	content: LessonContent;
}

export interface SectionMeta {
	id: string;
	titleHe: string;
	titleEn?: string;
	intro?: { greeting: string; goal?: string };
}
