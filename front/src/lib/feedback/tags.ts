// The closed list of tags the LLM may use. The prompt files (server/prompts/grade-*.md)
// list them with their English descriptions; the Hebrew text for each is in i18n
// (`feedback.tag`). tests/feedback.test.ts keeps the three in step. Spelling and
// punctuation are not here: Layer 1 owns them.
export type TagDef = {
	id: string;
	area: 'content' | 'vocabulary' | 'language';
	/** A lesson answer carrying one of these cannot pass. */
	fatal?: boolean;
};

export const TAGS: TagDef[] = [
	{ id: 'off-topic', area: 'content', fatal: true },
	{ id: 'incomplete', area: 'content', fatal: true },
	{ id: 'unclear', area: 'content' },
	{ id: 'repeats', area: 'content' },
	{ id: 'off-point', area: 'content' },
	{ id: 'wrong-word', area: 'vocabulary' },
	{ id: 'word-choice', area: 'vocabulary' },
	{ id: 'tense', area: 'language' },
	{ id: 'agreement', area: 'language' },
	{ id: 'word-form', area: 'language' },
	{ id: 'preposition', area: 'language' },
	{ id: 'word-order', area: 'language' },
	{ id: 'missing-word', area: 'language' },
	{ id: 'extra-word', area: 'language' }
];

export const TAG_IDS = new Set(TAGS.map((t) => t.id));
export const FATAL_TAGS = new Set(TAGS.filter((t) => t.fatal).map((t) => t.id));

/** Bagrut Module C writing criteria scored by the LLM (mechanics, 4 pts, is Layer 1's). */
export const EXAM_CRITERIA = [
	{ id: 'content', max: 10 },
	{ id: 'vocabulary', max: 8 },
	{ id: 'language', max: 8 }
] as const;
