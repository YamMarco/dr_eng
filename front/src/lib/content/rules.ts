// Rule settings above the screen: module > section > lesson, all in rules.json
// (edited from /edit's "rules" panel). A screen's own fields sit on top of these.
import type { Rules } from '$lib/feedback/rules';
import { sectionMeta } from './sectionMeta';
import data from './rules.json';

export type RulesFile = {
	modules: Record<string, Rules>;
	sections: Record<string, Rules>;
	lessons: Record<string, Rules>;
};

export const rulesFile = data as RulesFile;

/** The module that owns a section (a shared section takes its owner's rules). */
export function ownerModule(sectionId: string): string | undefined {
	return sectionMeta.find((s) => s.id === sectionId)?.modules[0];
}

/** Module, section and lesson levels for one lesson, top first. */
export function ruleChain(file: RulesFile, lesson: { id: string; section: string }): Rules[] {
	const module = ownerModule(lesson.section);
	return [
		module ? file.modules[module] : undefined,
		file.sections[lesson.section],
		file.lessons[lesson.id]
	].filter((r): r is Rules => !!r);
}
