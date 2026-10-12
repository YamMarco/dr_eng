// Rule settings that cascade module -> section -> lesson -> screen. Resolved
// when read: the nearest level that sets a field wins, so a screen's own value
// is already an override. `lock` only protects a level from the editor's bulk
// "apply to everything below" action (see clearBelow).
export type RuleSet = {
	/** Grade the answer with the LLM (Layer 2) after the local checks pass. */
	llmGrade: boolean;
	/** Submits allowed before the student moves on (the screen then replays at the end). */
	maxAttempts: number;
	/** Small slips forgiven before the local gate says "wrong". */
	maxTypos: number;
	capitalIsError: boolean;
	/** Lesson advice panel + capital/period check. */
	autoCheck: boolean;
};

export type Rules = Partial<RuleSet> & { lock?: boolean };

export const DEFAULT_RULES: RuleSet = {
	llmGrade: false,
	maxAttempts: 2,
	maxTypos: 1,
	capitalIsError: true,
	autoCheck: true
};

/** `chain` runs from the top (module) down to the screen; undefined levels are skipped. */
export function resolveRules(chain: (Rules | undefined)[]): RuleSet {
	const out: Record<string, unknown> = { ...DEFAULT_RULES };
	for (const level of chain) {
		if (!level) continue;
		for (const key of Object.keys(DEFAULT_RULES) as (keyof RuleSet)[]) {
			if (level[key] !== undefined) out[key] = level[key];
		}
	}
	return out as RuleSet;
}

/** The editor's "apply to all below": drop the given fields from every child level that isn't locked. */
export function clearBelow(children: Rules[], fields: (keyof RuleSet)[]): void {
	for (const child of children) {
		if (child.lock) continue;
		for (const f of fields) delete child[f];
	}
}
