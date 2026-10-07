import { languageIssues } from './language';
import { lengthReport } from './length';
import { mechanicsIssues } from './mechanics';
import { loadSpellers, typoIssues, type DictLoader } from './typos';
import type { CheckIssue, CheckOptions, CheckReport } from './types';

export * from './types';
export { lengthReport, MIN_WORDS, MAX_WORDS } from './length';

/** Deterministic checks for a piece of student writing: spelling, mechanics,
 *  common language-use errors, and the Ministry's length rules. Free of cost
 *  and instant - run it before (and instead of) asking the LLM about these. */
export async function checkWriting(
	text: string,
	load: DictLoader,
	opts: CheckOptions = {}
): Promise<CheckReport> {
	const length = lengthReport(text, opts);
	const hebrew = (text.match(/[֐-׿]/g) ?? []).length;
	const letters = (text.match(/\p{L}/gu) ?? []).length;
	if (letters > 0 && hebrew / letters > 0.3) return { length, issues: [], notEnglish: true };

	const spellers = await loadSpellers(load);
	const found: CheckIssue[] = [
		...typoIssues(spellers, text, opts),
		...mechanicsIssues(text),
		...languageIssues(text)
	];
	// the same span flagged twice (e.g. "i" as typo and capital) keeps the first rule
	const seen = new Set<string>();
	const issues = found
		.sort((a, b) => a.start - b.start)
		.filter((i) => {
			const key = `${i.start}:${i.end}`;
			if (seen.has(key)) return false;
			seen.add(key);
			return true;
		});
	return { length, issues, notEnglish: false };
}

/** A screen's slip settings (writing-task `maxTypos` / `capitalIsError`). */
export type SlipLimit = { maxTypos?: number; capitalIsError?: boolean };

/** Slips = confirmed mechanics detections (spelling, capitals, punctuation).
 *  The engine detects; the limit comes from the screen (default: 1 forgiven,
 *  capitals count). Language-use and `maybe` detections never count. */
export function slipCheck(report: CheckReport, limit: SlipLimit = {}) {
	const max = Number.isFinite(limit.maxTypos) ? limit.maxTypos! : 1;
	const capitals = limit.capitalIsError ?? true;
	const slips = report.issues.filter(
		(i) =>
			i.area === 'mechanics' &&
			i.confidence === 'sure' &&
			(capitals || !i.rule.startsWith('capital-'))
	);
	return { slips, max, capitals, ok: slips.length <= max };
}

/** Should the LLM be asked at all? Under 25 valid words the task scores 0 by rule. */
export function worthGrading(report: CheckReport): boolean {
	return !report.notEnglish && !report.length.zero;
}
