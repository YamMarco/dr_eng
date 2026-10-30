// /edit's working copy of content/rules.json (module > section > lesson rule settings).
// Saved by the workspace's one save button, next to the lesson changes.
import { apiFetch } from '$lib/api';
import { ownerModule, rulesFile, type RulesFile } from '$lib/content/rules';
import { clearBelow, ownKeys, type Rules } from '$lib/feedback/rules';
import type { LessonNode } from '$lib/content';

export type RuleLevel = 'modules' | 'sections' | 'lessons';

const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v));

class RulesStore {
	file = $state<RulesFile>(clone(rulesFile));
	#baseline = $state(JSON.stringify(rulesFile));

	get dirty(): boolean {
		return JSON.stringify(this.file) !== this.#baseline;
	}

	/** Fresh copy from the server (production edits may be ahead of this deploy). */
	async load() {
		const res = await apiFetch('/api/content-edit/rules');
		if (!res.ok) return;
		const file = (await res.json()) as RulesFile;
		this.file = file;
		this.#baseline = JSON.stringify(file);
	}

	markClean() {
		this.#baseline = JSON.stringify(this.file);
	}

	get(level: RuleLevel, id: string): Rules {
		return this.file[level][id] ?? {};
	}

	/** `undefined` clears the field (the level inherits it again); an empty level is removed. */
	set(level: RuleLevel, id: string, key: keyof Rules, value: boolean | number | undefined) {
		const next: Rules = { ...this.get(level, id), [key]: value };
		// an unset field, or a lock turned off, leaves nothing in the file
		if (value === undefined || (key === 'rulesLock' && !value)) delete next[key];
		if (Object.keys(next).length) this.file[level][id] = next;
		else delete this.file[level][id];
	}

	/** "Apply to all below": every unlocked level and screen under this one drops the
	 *  fields this level sets, so they inherit them. Screens change in `nodes` in place. */
	applyBelow(
		level: RuleLevel,
		id: string,
		nodes: LessonNode[]
	): { levels: number; screens: number } {
		const fields = ownKeys(this.get(level, id));
		if (!fields.length) return { levels: 0, screens: 0 };
		const sections =
			level === 'modules'
				? Object.keys(this.file.sections).filter((s) => ownerModule(s) === id)
				: [];
		const lessons = nodes.filter((n) =>
			level === 'modules'
				? ownerModule(n.section) === id
				: level === 'sections'
					? n.section === id
					: n.id === id
		);
		const levelRows = [
			...sections.map((s) => this.file.sections[s]),
			...(level !== 'lessons' ? lessons.map((n) => this.file.lessons[n.id]) : [])
		].filter((r): r is Rules => !!r);
		const levels = clearBelow(levelRows, fields);
		this.#dropEmpty();
		const screens = clearBelow(
			lessons.flatMap((n) =>
				[n.content.preface, ...n.content.rounds.map((r) => r.screens)]
					.flat()
					.filter((s) => s.type === 'writing-task' || s.type === 'mcq' || s.type === 'cloze-pick')
			) as Rules[],
			fields
		);
		return { levels, screens };
	}

	#dropEmpty() {
		for (const level of ['modules', 'sections', 'lessons'] as const)
			for (const [id, rules] of Object.entries(this.file[level]))
				if (!Object.keys(rules).length) delete this.file[level][id];
	}
}

export const rulesStore = new RulesStore();
