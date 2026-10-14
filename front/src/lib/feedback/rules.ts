// Rule settings that cascade module -> section -> lesson -> screen. Resolved
// when read: the nearest level that sets a field wins, so a lower level's own
// value is already an override. `rulesLock` only protects a level from the
// editor's bulk "apply to everything below" action (see clearBelow).
export type RuleSet = {
	/** Grade the answer with the LLM (Layer 2) after the local checks pass. */
	llmGrade: boolean;
	/** The LLM also returns the right word for wrong-word / word-choice / missing-word, shown in the text. */
	llmFix: boolean;
	/** Small slips forgiven before the local gate says "wrong". */
	maxTypos: number;
	capitalIsError: boolean;
	/** Lesson advice panel + capital/period check. */
	autoCheck: boolean;
};

export type Rules = Partial<RuleSet> & { rulesLock?: boolean };

export const RULE_KEYS = ['llmGrade', 'llmFix', 'maxTypos', 'capitalIsError', 'autoCheck'] as const;

export const DEFAULT_RULES: RuleSet = {
	llmGrade: false,
	llmFix: true,
	maxTypos: 1,
	capitalIsError: true,
	autoCheck: true
};

/** `chain` runs from the top (module) down to the screen; undefined levels are skipped. */
export function resolveRules(chain: (Rules | undefined)[]): RuleSet {
	const out: Record<string, unknown> = { ...DEFAULT_RULES };
	for (const level of chain) {
		if (!level) continue;
		for (const key of RULE_KEYS) if (level[key] !== undefined) out[key] = level[key];
	}
	return out as RuleSet;
}

/** The fields a level sets itself. */
export function ownKeys(level: Rules | undefined): (keyof RuleSet)[] {
	return level ? RULE_KEYS.filter((k) => level[k] !== undefined) : [];
}

/** "Apply to all below": drop the given fields from every child level that isn't locked.
 *  Returns how many levels changed. */
export function clearBelow(children: Rules[], fields: (keyof RuleSet)[]): number {
	let changed = 0;
	for (const child of children) {
		if (child.rulesLock || !fields.some((f) => child[f] !== undefined)) continue;
		for (const f of fields) delete child[f];
		changed++;
	}
	return changed;
}
