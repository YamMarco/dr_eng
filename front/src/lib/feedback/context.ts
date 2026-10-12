// The runner hands its screens the rule levels above them (module > section > lesson),
// so a screen only adds its own fields on top (see resolveRules).
import { getContext, setContext } from 'svelte';
import type { Rules } from './rules';

const KEY = Symbol('rule-chain');

/** A getter, because the runner's lesson prop can change under a live context. */
export function provideRuleChain(chain: () => (Rules | undefined)[]) {
	setContext(KEY, chain);
}

export function getRuleChain(): (Rules | undefined)[] {
	return getContext<(() => (Rules | undefined)[]) | undefined>(KEY)?.() ?? [];
}
