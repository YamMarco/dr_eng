// The closed list of tags the LLM may use. The Hebrew text for each lives in
// i18n (`feedback.tag`); the prompt gets the English `desc`. Spelling and
// punctuation are not here: Layer 1 owns them.
export type TagDef = {
	id: string;
	area: 'content' | 'vocabulary' | 'language';
	desc: string;
	/** A lesson answer carrying one of these cannot pass. */
	fatal?: boolean;
};

export const TAGS: TagDef[] = [
	{ id: 'off-topic', area: 'content', fatal: true, desc: 'Does not answer the question asked.' },
	{ id: 'incomplete', area: 'content', fatal: true, desc: 'Answers only part of what was asked.' },
	{ id: 'unclear', area: 'content', desc: 'The meaning cannot be understood.' },
	{ id: 'repeats', area: 'content', desc: 'Repeats an idea already given.' },
	{
		id: 'wrong-word',
		area: 'vocabulary',
		desc: 'A real word, but not the one meant (form/from, their/there).'
	},
	{
		id: 'word-choice',
		area: 'vocabulary',
		desc: 'A word that does not fit here; a better one exists.'
	},
	{ id: 'tense', area: 'language', desc: 'Wrong verb tense.' },
	{ id: 'agreement', area: 'language', desc: 'Subject and verb do not agree.' },
	{
		id: 'word-form',
		area: 'language',
		desc: 'Wrong form of a word (plural, -ing, adjective/adverb).'
	},
	{ id: 'preposition', area: 'language', desc: 'Wrong or missing preposition.' },
	{ id: 'word-order', area: 'language', desc: 'Words in the wrong order.' },
	{ id: 'missing-word', area: 'language', desc: 'A word is missing.' },
	{ id: 'extra-word', area: 'language', desc: 'A word that should not be there.' }
];

export const TAG_IDS = new Set(TAGS.map((t) => t.id));
export const FATAL_TAGS = new Set(TAGS.filter((t) => t.fatal).map((t) => t.id));

/** Bagrut Module C writing criteria and their points (mechanics is Layer 1's). */
export const EXAM_CRITERIA = [
	{ id: 'content', max: 10 },
	{ id: 'vocabulary', max: 8 },
	{ id: 'language', max: 8 },
	{ id: 'mechanics', max: 4 }
] as const;
