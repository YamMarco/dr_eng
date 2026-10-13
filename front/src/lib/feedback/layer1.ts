// Layer 1: the local, free, instant judge. Turns the checks into marks and decides
// whether the submit may go on to the LLM at all (a gate = outright "wrong", no API call).
import { checkWriting, type CheckIssue, type CheckOptions } from '$lib/checks';
import { browserDictionaries } from '$lib/checks/dictionaries';
import type { RuleSet } from './rules';
import type { GateReason, Mark } from './types';

export function issuesToMarks(issues: CheckIssue[]): Mark[] {
	return issues.map((i) => ({
		tag: i.rule,
		source: 'l1',
		start: i.start,
		end: i.end,
		text: i.text,
		suggestions: i.suggestions,
		maybe: i.confidence === 'maybe'
	}));
}

export type Layer1 = { gate?: GateReason; marks: Mark[] };

export type Layer1Options = {
	check: CheckOptions;
	/** Valid-word minimum (paragraph tasks); fewer is a gate. */
	minWords?: number;
	/** The task's word-bank minimum was met. */
	wordBankOk?: boolean;
};

export async function runLayer1(
	text: string,
	rules: RuleSet,
	opts: Layer1Options
): Promise<Layer1> {
	if (!text.trim()) return { gate: 'empty', marks: [] };
	const report = await checkWriting(text, browserDictionaries, opts.check);
	const marks = issuesToMarks(report.issues);
	if (report.notEnglish) return { gate: 'not-english', marks };
	// an OCR word the reader could not make out: the student must fix it first
	if (text.includes('[?]')) return { gate: 'unreadable', marks };
	if (opts.minWords !== undefined && report.length.valid < opts.minWords)
		return { gate: 'too-short', marks };
	if (opts.wordBankOk === false) return { gate: 'word-bank', marks };
	const slips = report.issues.filter((i) => i.area === 'mechanics' && i.confidence === 'sure');
	if (slips.length > rules.maxTypos) return { gate: 'typos', marks };
	return { marks };
}
