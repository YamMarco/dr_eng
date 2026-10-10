/**
 * The moves of an opinion paragraph, and the words that show each one. A
 * writing task lists the moves it asks for (`requiredMoves`); the check says
 * which are missing. Synonyms count, so it checks the structure, not the
 * exact wording. Also meant as input for the LLM grader later.
 */

export const MOVE_IDS = [
	'stance',
	'because',
	'in-addition',
	'for-example',
	'for-instance',
	'as-a-result',
	'in-conclusion'
] as const;

export type MoveId = (typeof MOVE_IDS)[number];

const MARKERS: Record<MoveId, RegExp> = {
	stance:
		/\b(i (do not |don'?t )?(think|believe|agree|feel)|i (would|'d) (like|prefer|choose)|i prefer|in my opinion)\b/i,
	because: /\bbecause\b/i,
	'in-addition': /\b(in addition|also|moreover|furthermore|another reason|secondly|second,)/i,
	'for-example': /\b(for example|for instance|such as)\b/i,
	'for-instance': /\bfor instance\b/i,
	'as-a-result': /\b(as a result|therefore|because of this|this means|that is why|so that)\b/i,
	'in-conclusion': /\b(in conclusion|to sum up|to conclude|in summary|all in all)\b/i
};

/** Required moves with no marker in the text, in the order they were listed. */
export function missingMoves(text: string, moves: readonly MoveId[] = []): MoveId[] {
	return moves.filter((m) => !MARKERS[m].test(text));
}
