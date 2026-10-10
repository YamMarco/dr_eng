/**
 * Offline "is it empty?" checks for a writing-task answer (tier 1 of the
 * writing-feedback ladder in docs/module-c-audit.md). Pure and deterministic:
 * catches answers that pass the structural checks but say nothing, e.g.
 * "I think yes because it is good. For example it is good."
 */

export type LintIssue =
	| { kind: 'vague'; line: number; word: string }
	| { kind: 'repeat'; line: number; of: number }
	| { kind: 'short'; line: number }
	| { kind: 'no-detail'; line: number };

/** Words that sound like a reason but explain nothing on their own. */
const VAGUE = new Set(
	`good bad nice fun cool great important interesting boring amazing awesome ok okay things stuff`.split(
		/\s+/
	)
);

/** A vague word followed by one of these is being explained ("good for your heart"). */
const EXPLAINERS = new Set(['for', 'because', 'since', 'when', 'to', 'if', 'as']);

const STOP = new Set(
	`i you he she it we they me him her us them my your his its our their a an the this that these those is am are was were be been do does did have has had will can should would could not don't doesn't no yes and or but so because in on at to of for with from by about very really also too more think believe opinion addition example instance conclusion such as all every there what which who`.split(
		/\s+/
	)
);

const CONCLUSION = /^(in conclusion|to sum up|to conclude|in summary)\b/i;
const EXAMPLE = /\b(for example|for instance|such as)\b/i;
const MIN_WORDS = 4;
const REPEAT_RATIO = 0.6;

function words(line: string): string[] {
	return line.toLowerCase().match(/[a-z']+/g) ?? [];
}

function contentWords(line: string, bank: Set<string>): string[] {
	return words(line).filter((w) => w.length > 2 && !STOP.has(w) && !VAGUE.has(w) && !bank.has(w));
}

/** Whole-word (or whole-phrase) match, so "fun" doesn't count inside "function".
 *  A bank entry may carry a translation ("travel / לטייל"): only the English part counts. */
export function usesWord(text: string, word: string): boolean {
	const escaped = word
		.split(' / ')[0]
		.trim()
		.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		.replace(/\s+/g, '\\s+');
	return new RegExp(`\\b${escaped}\\b`, 'i').test(text);
}

/** At most one issue per line (the most useful one), lines are 0-based. */
export function lintWriting(lines: string[], wordBank: string[] = []): LintIssue[] {
	const bank = new Set(wordBank.flatMap((w) => words(w)));
	const issues: LintIssue[] = [];
	const earlier: Set<string>[] = [];

	lines.forEach((raw, line) => {
		const text = raw.trim();
		const all = words(text);
		const content = contentWords(text, bank);
		earlier.push(new Set(content));
		if (!text) return;

		if (all.length < MIN_WORDS) {
			issues.push({ kind: 'short', line });
			return;
		}

		const vagueAt = all.findIndex(
			(w, i) => VAGUE.has(w) && !bank.has(w) && !EXPLAINERS.has(all[i + 1] ?? '')
		);
		if (vagueAt >= 0) {
			issues.push({ kind: 'vague', line, word: all[vagueAt] });
			return;
		}

		const example = text.match(EXAMPLE);
		if (example) {
			const after = text.slice(example.index! + example[0].length);
			const hasNumber = /\d/.test(after);
			const hasName = /\s[A-Z][a-z]+/.test(` ${after}`.replace(/\sI\b/g, ''));
			if (!hasNumber && !hasName && contentWords(after, bank).length < 3) {
				issues.push({ kind: 'no-detail', line });
				return;
			}
		}

		// A conclusion may restate the opinion; every other line must add something.
		if (CONCLUSION.test(text) || content.length < 2) return;
		for (let prev = 0; prev < line; prev++) {
			const shared = content.filter((w) => earlier[prev].has(w)).length;
			if (shared / content.length >= REPEAT_RATIO) {
				issues.push({ kind: 'repeat', line, of: prev });
				return;
			}
		}
	});

	return issues;
}
