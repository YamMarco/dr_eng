// Pure helpers for exam grading (tested in tests/feedback.test.ts).
import type { MechanicsCount } from './types';

/** Layer-1 issues sorted into the rubric's mechanics buckets for the essay grader. */
export function mechanicsCount(issues: { rule: string; area: string }[]): MechanicsCount {
	const out: MechanicsCount = { spelling: 0, punctuation: 0, runOn: 0 };
	for (const i of issues) {
		if (i.rule === 'typo') out.spelling++;
		else if (i.rule === 'run-on') out.runOn++;
		else if (i.area === 'mechanics') out.punctuation++;
	}
	return out;
}

/** Rubric rule 5: score on merit, then take the length deduction off, starting with
 *  Content and carrying what is left over to the next criterion. `order` = rubric order. */
export function applyLength(
	scores: Record<string, number>,
	order: string[],
	deduction: number
): Record<string, number> {
	const out = { ...scores };
	let left = deduction;
	for (const id of order) {
		if (left <= 0) break;
		const take = Math.min(out[id] ?? 0, left);
		out[id] = (out[id] ?? 0) - take;
		left -= take;
	}
	return out;
}

const ROMAN: Record<string, number> = { I: 1, V: 5, X: 10 };

/** "III" -> 2 (paragraph index). Unknown -> -1. */
export function paragraphIndex(ref: string): number {
	const s = ref.trim().toUpperCase();
	if (!/^[IVX]+$/.test(s)) return -1;
	let total = 0;
	for (let i = 0; i < s.length; i++) {
		const v = ROMAN[s[i]];
		total += v < (ROMAN[s[i + 1]] ?? 0) ? -v : v;
	}
	return total - 1;
}
