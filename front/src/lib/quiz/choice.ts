// "Answer N of these" (QuizPart.choose). Every question stays open to the
// student; the first N answered, in exam order, count. Fewer than N answered:
// the first unanswered ones fill the empty slots and score 0, so the part is
// always out of N questions. Pure - scoring, grading, the runner and the
// report all read the same set.

/** Did the student give an answer? Erased text or an empty pick list is none. */
export function isAnswered(value: unknown): boolean {
	if (value === undefined || value === null) return false;
	if (typeof value === 'string') return value.trim().length > 0;
	if (Array.isArray(value)) return value.some((v) => v !== null && v !== undefined);
	if (typeof value === 'object') return Object.keys(value).length > 0;
	return true;
}

/** The ids (a part's scored questions, in order) that count toward the score. */
export function pickCounted(
	ids: string[],
	choose: number | undefined,
	answers: Record<string, unknown>
): Set<string> {
	if (choose === undefined || choose >= ids.length) return new Set(ids);
	const counted = ids.filter((id) => isAnswered(answers[id])).slice(0, choose);
	for (const id of ids) {
		if (counted.length >= choose) break;
		if (!counted.includes(id)) counted.push(id);
	}
	return new Set(counted);
}
