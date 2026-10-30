// Official marking rubrics, stored as data (Supabase later). Each essay prompt
// (server/prompts/grade-essay[-g].md) is written from its file; the criteria's
// ids and maxima here are what the grader's reply is validated against.
import moduleCWriting from './module-c-writing.json';
import moduleGWriting from './module-g-writing.json';
import cobe from './cobe.json';

export type RubricCriterion = {
	id: string;
	name: string;
	max: number;
	levels: { band: string; points: number; descriptors: string[] }[];
	notes: string[];
};

export type Rubric = {
	id: string;
	title: string;
	totalPoints: number;
	criteria: RubricCriterion[];
	generalComments: string[];
	lengthDeductions: { minWords: number; maxWords: number; pointsOff: number }[];
};

export const essayRubric = moduleCWriting as Rubric;

/** Exam writing rubrics by module; other modules use Module C's. */
export const writingRubrics = { c: essayRubric, g: moduleGWriting as Rubric };
export type WritingRubricId = keyof typeof writingRubrics;

export function writingRubricId(moduleId: string): WritingRubricId {
	return moduleId === 'g' ? 'g' : 'c';
}

/** COBE (oral exam): one rubric per level (4 / 5 points), the same four
 *  criteria with different weights. A criterion is judged in one of four
 *  bands (percent ranges); the part's points are split by weight. */
export type CobeBand = 'high' | 'mid' | 'low' | 'none';
export type CobeCriterion = {
	id: 'topic' | 'delivery' | 'vocabulary' | 'language';
	name: string;
	/** Percent of the part's points. */
	weight: number;
	descriptors: Record<CobeBand, string[]>;
};
export type CobeRubric = {
	id: string;
	title: string;
	timeLimitMinutes: number;
	parts: {
		id: 'A' | 'B' | 'C';
		name: string;
		points: number;
		timeFrame: string;
		description: string;
		topics: string[];
	}[];
	bands: { id: CobeBand; range: [number, number] }[];
	levels: Record<'4' | '5', CobeCriterion[]>;
	notes: string[];
	deductions: {
		minSeconds: number;
		partBLength: { minSeconds: number; maxSeconds: number; percentOff: number }[];
		onlyOneQuestionAnsweredPercentOff: number;
		zeroForSection: string[];
		hashad: string[];
	};
};

export const cobeRubric = cobe as unknown as CobeRubric;
