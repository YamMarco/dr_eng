// COBE grading of one recording: the rubric's four criteria, each judged in a
// band, weighted by level (4 / 5 points), then the official deductions in code.
// Today the student picks the bands (self-assessment in the exam report); the
// voice-LLM grader will pass its own bands to the same function. Pure: the
// rubric (content/rubrics/cobe.json) is passed in.
import type { CobeBand, CobeCriterion, CobeRubric } from '$lib/content/rubrics';
import type { ExamGrade } from './types';

export type CobeLevel = '4' | '5';
export type CobePart = 'A' | 'B' | 'C';

export type SpeakingJudgement = {
	bands: Record<CobeCriterion['id'], CobeBand>;
	/** Every question in the set was answered (else Topic Development loses half). */
	answeredAll: boolean;
};

const half = (n: number) => Math.round(n * 2) / 2;

/** Percent taken off every criterion for the recording's length: under the
 *  minimum is 0 for the section; Part B also loses points below a minute. */
export function lengthPercentOff(rubric: CobeRubric, part: CobePart, seconds: number): number {
	const { minSeconds, partBLength } = rubric.deductions;
	if (seconds < minSeconds) return 100;
	if (part !== 'B') return 0;
	return partBLength.find((row) => seconds >= row.minSeconds)?.percentOff ?? 0;
}

export function gradeSpeaking(
	rubric: CobeRubric,
	input: { level: CobeLevel; part: CobePart; points: number; seconds: number },
	judgement: SpeakingJudgement
): ExamGrade {
	// A band counts as its midpoint, e.g. 76-100 -> 88%.
	const share = (band: CobeBand) => {
		const [lo, hi] = rubric.bands.find((b) => b.id === band)!.range;
		return (lo + hi) / 200;
	};
	const lengthOff = lengthPercentOff(rubric, input.part, input.seconds);
	const setOff = judgement.answeredAll ? 0 : rubric.deductions.onlyOneQuestionAnsweredPercentOff;
	const criteria: Record<string, number> = {};
	for (const c of rubric.levels[input.level]) {
		let points = ((input.points * c.weight) / 100) * share(judgement.bands[c.id]);
		if (c.id === 'topic') points *= 1 - setOff / 100;
		criteria[c.id] = half(points * (1 - lengthOff / 100));
	}
	return {
		kind: 'speaking',
		status: 'graded',
		earned: Object.values(criteria).reduce((sum, p) => sum + p, 0),
		max: input.points,
		text: '',
		marks: [],
		criteria,
		lengthPercentOff: lengthOff || undefined,
		seconds: Math.round(input.seconds),
		judgement
	};
}
