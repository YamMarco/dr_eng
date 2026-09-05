// Identifies one screen's position inside a LessonNode's content, so the
// dev editor can save back to the right spot from anywhere it's shown from
// (the lessons-path popover, or live in the runner).
export type ScreenPath = { bucket: 'preface' | number; index: number };

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
	const round: ScreenPath[] = Array.from({ length: roundLength }, (_, i) => ({ bucket: 0, index: i }));
	return [...preface, ...round];
}
