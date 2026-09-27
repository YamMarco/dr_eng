// Identifies one screen's position inside a LessonNode's content, so the
// dev editor can save back to the right spot from anywhere it's shown from
// (the lessons-path popover, or live in the runner).
import type { LessonContent, LessonScreen } from '$lib/content';

// `bucket` is a lesson round index or 'preface' for lessons, and a QuizPart id
// (string) for exams - the shared editor components (SlideFilmstrip/SlideStage/
// EditableScreen) don't care which, they just address a screen list by key.
export type ScreenPath = { bucket: 'preface' | string | number; index: number };

/** The screens actually played for a round: round 0 plays preface + its own
 *  round; later rounds play alone. Shared by the lessons path page and
 *  LessonRunner's live-editing draft, which both need to stay in sync. */
export function screensForRound(content: LessonContent, roundIndex: number): LessonScreen[] {
	const round = content.rounds[roundIndex]?.screens ?? [];
	return roundIndex === 0 ? [...content.preface, ...round] : round;
}

/** 1-based, human-facing location string for pointing someone at one exact
 *  screen - e.g. "q-words-1 · round 3 · screen 6". `bucket` is 0-based
 *  internally (a round index, or a QuizPart id for exams); shown as typed
 *  when it isn't a plain round number. */
export function formatScreenLocation(lessonId: string | undefined, path: ScreenPath): string {
	const bucket =
		path.bucket === 'preface'
			? 'preface'
			: typeof path.bucket === 'number'
				? `round ${path.bucket + 1}`
				: path.bucket;
	return `${lessonId ?? '?'} · ${bucket} · screen ${path.index + 1}`;
}

/** Same split LessonRunner is fed with: preface + round 0 screens play together. */
export function screenPathsForRound(
	prefaceLength: number,
	roundIndex: number,
	roundLength: number
): ScreenPath[] {
	if (roundIndex !== 0) {
		return Array.from({ length: roundLength }, (_, i) => ({ bucket: roundIndex, index: i }));
	}
	const preface: ScreenPath[] = Array.from({ length: prefaceLength }, (_, i) => ({
		bucket: 'preface',
		index: i
	}));
	const round: ScreenPath[] = Array.from({ length: roundLength }, (_, i) => ({
		bucket: 0,
		index: i
	}));
	return [...preface, ...round];
}
