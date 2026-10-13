// Official marking rubrics, stored as data (Supabase later). The essay prompt
// (server/prompts/grade-essay.md) is written from this file; the criteria's
// ids and maxima here are what the grader's reply is validated against.
import moduleCWriting from './module-c-writing.json';

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
