// Each exam module's own grading rules, one entry per module. Official sources: /rubrics
// (handbook-4pt/5pt-2025 for the open-question deductions, C/G-writing for the essays).
// The LLM instructions per module are server-side: server/prompts/grade-<kind>-<module>.md.
// Plain TS (no JSON import) so the Node tests and checks/length.ts can use it.

export type ModuleId = 'c' | 'e' | 'g';
/** How bad the grammar of an open answer is, as judged by the grader. */
export type Grammar = 'none' | 'minor' | 'major';

/** An essay's required range and official length table: [from words, points off],
 *  taken off Content first; under `zeroBelow` valid words the task scores 0. */
export type LengthTable = { min: number; max: number; zeroBelow: number; rows: [number, number][] };

export type ModuleRules = {
	reading: {
		/** Grammar points off an open answer, by its value: the first row whose
		 *  maxPoints covers the answer (the last row above it). minor = low end, major = high end. */
		grammar: { maxPoints: number; minor: number; major: number }[];
		/** Points off an answer that has any spelling mistake. */
		spelling: number;
	};
	/** The module's writing task, if it has one. */
	essay?: { rubric: 'c' | 'g'; length: LengthTable };
};

export const MODULE_RULES: Record<ModuleId, ModuleRules> = {
	// 4-point handbook, Module C: 5-7 pts -1, 8-10 pts -1..-2, no spelling deduction.
	c: {
		reading: {
			grammar: [
				{ maxPoints: 7, minor: 1, major: 1 },
				{ maxPoints: 10, minor: 1, major: 2 }
			],
			spelling: 0
		},
		essay: {
			rubric: 'c',
			length: {
				min: 70,
				max: 90,
				zeroBelow: 25,
				rows: [
					[70, 0],
					[60, 1],
					[50, 3],
					[40, 6],
					[30, 10],
					[25, 15]
				]
			}
		}
	},
	// 4- and 5-point handbooks, Module E: 5-7 pts -1..-2, 8-10 pts -2..-3, no spelling deduction.
	e: {
		reading: {
			grammar: [
				{ maxPoints: 7, minor: 1, major: 2 },
				{ maxPoints: 10, minor: 2, major: 3 }
			],
			spelling: 0
		}
	},
	// 5-point handbook, Module G: 6-7 pts -1..-2, 8-10 pts -2..-3, 1 point for spelling per item.
	g: {
		reading: {
			grammar: [
				{ maxPoints: 7, minor: 1, major: 2 },
				{ maxPoints: 10, minor: 2, major: 3 }
			],
			spelling: 1
		},
		essay: {
			rubric: 'g',
			length: {
				min: 120,
				max: 140,
				zeroBelow: 50,
				rows: [
					[120, 0],
					[110, 2],
					[100, 4],
					[90, 8],
					[80, 12],
					[70, 16],
					[60, 18],
					[50, 20]
				]
			}
		}
	}
};

/** The exam's module as a graded module; undefined for one with no open answers (COBE). */
export function moduleId(module: string): ModuleId | undefined {
	return module in MODULE_RULES ? (module as ModuleId) : undefined;
}

/** Every essay length table, for checks/length.ts. */
export const LENGTH_TABLES: LengthTable[] = Object.values(MODULE_RULES).flatMap((m) =>
	m.essay ? [m.essay.length] : []
);

/** The official points off one open answer for its grammar and spelling. */
export function readingDeductions(
	module: ModuleId,
	points: number,
	grammar: Grammar,
	typos: number
): { grammar: number; spelling: number } {
	const rules = MODULE_RULES[module].reading;
	const row = rules.grammar.find((r) => points <= r.maxPoints) ?? rules.grammar.at(-1)!;
	return {
		grammar: grammar === 'none' ? 0 : row[grammar],
		spelling: typos > 0 ? rules.spelling : 0
	};
}
