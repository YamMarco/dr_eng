// The single source of truth for lesson-screen shapes. TypeScript types
// (types.ts), the /edit paste check and the /mcp endpoint all derive from
// these schemas, and the `.describe()` texts double as the field docs an AI
// editor reads. To add a screen type: add its schema here and to
// `lessonScreenSchema`, then follow "Adding a screen type" in
// docs/lesson-structure.md (component + registry + badge).
//
// Objects are strict: an unknown field is an error, so a misspelled or
// invented field never slips through.
import * as z from 'zod';

const dir = z.enum(['rtl', 'ltr']).describe('Text direction override. Omit to auto-detect.');
const index = z.number().int().min(0).describe('0-based index');
const points = z
	.number()
	.min(0)
	.describe('Quiz mode only: weight for scoring. Ignored in lesson mode. Default 1.');
const autoCheck = z
	.boolean()
	.describe(
		'Lesson mode only: spelling/punctuation advice and the capital/period check. Default true. Exams never auto-check.'
	);
const paragraphRef = z
	.string()
	.describe('Quiz mode only: shows a small "פסקה X" chip above the question, e.g. "II".');
const timerKey = z
	.string()
	.describe(
		'Runs a stopwatch and records elapsed ms in the round under this key, so a later time-result / time-comparison screen can read it back.'
	);

// ---- teaching screens (not scored) ----

export const prefaceSchema = z
	.strictObject({
		type: z.literal('preface'),
		text: z.string().describe('Teaching text. Mini-markdown (see the formatting rules).'),
		dir: dir.optional()
	})
	.describe('A paragraph of teaching. Not scored.');

export const stepsSchema = z
	.strictObject({
		type: z.literal('steps'),
		steps: z.array(z.string()).describe('One string per step. Mini-markdown.'),
		ordered: z
			.boolean()
			.optional()
			.describe('true numbers the steps; omit for the plain card look.')
	})
	.describe('A list of steps. Not scored.');

export const summarySchema = z
	.strictObject({
		type: z.literal('summary'),
		title: z.string(),
		lines: z.array(z.string()).describe('Short, punchy recap lines. Mini-markdown.')
	})
	.describe('A recap card. Not scored.');

export const wordCardSchema = z
	.strictObject({
		type: z.literal('word-card'),
		word: z.string(),
		translationHe: z.string().optional(),
		image: z
			.string()
			.optional()
			.describe('Site path of a 16:9 picture. Set in the app (crop dialog) - never invent one.'),
		imageAlt: z.string().optional().describe('Alt text; falls back to the word.'),
		hookHe: z
			.string()
			.optional()
			.describe('One memory hook (cognate, word family, sound-alike), under the translation.'),
		exampleEn: z
			.string()
			.optional()
			.describe('An exam-style sentence using the word. `**word**` bolds it.'),
		exampleHe: z.string().optional()
	})
	.describe(
		'Introduces one word before any question about it. A word is never an answer or a decoy before its card. Not scored.'
	);

export const questionPreviewSchema = z
	.strictObject({
		type: z.literal('question-preview'),
		intro: z.string(),
		prompts: z.array(z.string()).describe('Question prompts to read before the text.')
	})
	.describe('Questions to read before a text (priming). Not scored.');

export const selfCheckSchema = z
	.strictObject({
		type: z.literal('self-check'),
		prompt: z.string(),
		text: z.string().optional().describe('Optional English passage shown above the prompt.'),
		modelAnswer: z.string(),
		placeholder: z.string().optional(),
		minWords: z.number().int().min(0).optional().describe('With maxWords: live word counter.'),
		maxWords: z.number().int().min(0).optional(),
		autoCheck: autoCheck.optional()
	})
	.describe(
		'The student writes freely, then reveals a model answer to compare. Never scored ("YOUR TURN").'
	);

export const passageSchema = z
	.strictObject({
		type: z.literal('passage'),
		title: z.string().optional(),
		paragraphs: z
			.array(z.strictObject({ id: z.string(), text: z.string() }))
			.describe('Paragraphs, labelled I, II, III... in the margin. `id` is display order only.')
	})
	.describe('A titled, scrollable reading passage. Exams only for now. Not scored.');

// ---- timing screens (not scored) ----

export const timedReadingSchema = z
	.strictObject({
		type: z.literal('timed-reading'),
		label: z.string(),
		text: z.string(),
		timerKey
	})
	.describe('Shows a text while a stopwatch runs. Not scored.');

export const timeResultSchema = z
	.strictObject({
		type: z.literal('time-result'),
		label: z.string(),
		timerKey: z.string().describe('Must match a timerKey set by an earlier screen in the round.')
	})
	.describe('Shows the time recorded under timerKey. Not scored.');

export const timeComparisonSchema = z
	.strictObject({
		type: z.literal('time-comparison'),
		aLabel: z.string(),
		aKey: z.string(),
		bLabel: z.string(),
		bKey: z.string(),
		fasterMessage: z.string(),
		tieMessage: z.string()
	})
	.describe('Compares two recorded times. Not scored.');

// ---- exercises (scored) ----

export const mcqSchema = z
	.strictObject({
		type: z.literal('mcq'),
		prompt: z.string(),
		options: z.array(z.string()).min(2),
		correctIndex: index.describe('0-based index into options of the one right answer.'),
		explanation: z
			.string()
			.optional()
			.describe('Shown after checking. Say why the others fail, not only why the answer is right.'),
		layout: z
			.enum(['rows', 'honeycomb'])
			.optional()
			.describe(
				"'honeycomb' for a fill-the-blank vocab pick where every option is one short word or phrase."
			),
		points: points.optional(),
		paragraphRef: paragraphRef.optional()
	})
	.describe('Multiple choice. Scored: 1 point.');

export const clozePickSchema = z
	.strictObject({
		type: z.literal('cloze-pick'),
		clause: z
			.string()
			.describe(
				'The fixed part, appended after the picked tile, e.g. "schools should be open 5 days instead of six."'
			),
		options: z
			.array(z.string())
			.min(2)
			.describe('Tiles for the blank: right answers mixed with decoys.'),
		correctIndices: z
			.array(index)
			.min(1)
			.describe('Indices into options that count - any one passes.'),
		explanation: z.string().optional(),
		points: points.optional()
	})
	.describe(
		'Fill a blank by picking a tile; any tile in correctIndices passes. Use instead of typed answers when the "free" part is a small closed set (stance opener, verb form, connector). Scored: 1 point.'
	);

export const markAllCategorySchema = z.strictObject({
	name: z.string(),
	color: z.string().describe('A key in lesson-screens/markAllColors.ts.'),
	indices: z.array(index).describe('Token positions in this category.')
});

export const markAllSchema = z
	.strictObject({
		type: z.literal('mark-all'),
		instruction: z.string(),
		text: z.string().describe('Flowing text; every whitespace-separated token is tappable.'),
		correctIndices: z
			.array(index)
			.describe('0-based token positions (split text on whitespace) of the uncategorised targets.'),
		categories: z
			.array(markAllCategorySchema)
			.optional()
			.describe('Optional colour-coded buckets; their indices also count as targets.'),
		dir: dir.optional(),
		wordBank: z
			.array(z.string())
			.optional()
			.describe('Optional scaffold: words to hunt, as chips.'),
		timerKey: timerKey.optional(),
		points: points.optional()
	})
	.describe(
		'Tap every target in a text (one target = tap the one right word). Passes on >=70% of targets found with <=1 stray tap; a single target allows none. Exhaustive marking only on short material. Scored: 1 point.'
	);

export const spellWordSchema = z
	.strictObject({
		type: z.literal('spell-word'),
		word: z.string(),
		mode: z
			.enum(['copy', 'listen'])
			.describe(
				"'copy' shows the word (right after its card); 'listen' is dictation (later, in review/tests). Don't dictate homophones."
			),
		hintHe: z
			.string()
			.optional()
			.describe('Listen mode only: Hebrew meaning, for sound-alike words.'),
		points: points.optional()
	})
	.describe('Type the word. Scored: 1 point.');

export const matchPairsSchema = z
	.strictObject({
		type: z.literal('match-pairs'),
		pairs: z.array(z.strictObject({ en: z.string(), he: z.string() })).min(2),
		points: points.optional()
	})
	.describe(
		'Match English words to Hebrew meanings. Passes with at most 1 wrong tap. Scored: 1 point.'
	);

export const writingTaskSchema = z
	.strictObject({
		type: z.literal('writing-task'),
		prompt: z
			.string()
			.describe(
				'May contain {sentences} / {words}, replaced with the Hebrew phrase for the minimums.'
			),
		wordBank: z
			.array(z.string())
			.optional()
			.describe('Required in lesson mode (the auto-check needs it).'),
		acceptedAnswers: z
			.array(z.string())
			.optional()
			.describe(
				'Lesson mode, fixed-shape tasks only: whole sentences the student may write; (a|b) = a or b. When set, each line must match one of them (case/punctuation ignored) and the word-bank and lint checks are skipped.'
			),
		modelAnswer: z
			.string()
			.optional()
			.describe('Lesson mode: shown after the check, to compare with. Not scored.'),
		checklist: z
			.array(z.string())
			.optional()
			.describe(
				'Lesson mode: items the student ticks about their own text after the check (self-review). Not scored.'
			),
		minSentences: z.number().int().min(0).optional(),
		minWordsUsed: z.number().int().min(0).optional(),
		maxTypos: z.number().int().min(0).optional().describe('Forgiven small slips. Default 1.'),
		capitalIsError: z.boolean().optional().describe('Default true.'),
		autoCheck: autoCheck.optional(),
		minWords: z
			.number()
			.int()
			.min(0)
			.optional()
			.describe('Live word-count target. Lesson mode: setting it turns the task into one paragraph box (the exam shape); valid words (a copied prompt does not count) must reach it, and minSentences is a minimum.'),
		maxWords: z.number().int().min(0).optional(),
		points: points.optional(),
		paragraphRef: paragraphRef.optional()
	})
	.describe(
		'Open writing, lightly auto-checked (sentence count, capitals, word bank use). Scored: 1 point.'
	);

export const sentenceCompletionSchema = z
	.strictObject({
		type: z.literal('sentence-completion'),
		before: z.string(),
		after: z.string(),
		modelAnswers: z
			.array(z.string())
			.describe('Accepted completions (normalized match, first match wins).'),
		points: points.optional(),
		paragraphRef: paragraphRef.optional()
	})
	.describe('before ___ after: the student types the blank. Scored: 1 point.');

export const passageQuizSchema = z
	.strictObject({
		type: z.literal('passage-quiz'),
		text: z
			.string()
			.describe('Paragraphs may start with a roman numeral and two spaces ("I  For years...").'),
		questions: z
			.array(
				z.strictObject({
					prompt: z.string(),
					keywords: z
						.array(z.string())
						.describe('All must appear in the typed answer. Content words only, avoid numbers.'),
					answerHint: z.string().describe('The correct answer, shown after submitting.'),
					points: points.optional()
				})
			)
			.min(1)
	})
	.describe('A text with typed short-answer questions. Scored: 1 point per question.');

export const passageMcqSchema = z
	.strictObject({
		type: z.literal('passage-mcq'),
		text: z
			.string()
			.describe('Paragraphs may start with a roman numeral and two spaces ("I  For years...").'),
		label: z.string().optional().describe('Shown beside the stopwatch when timerKey is set.'),
		timerKey: timerKey.optional(),
		questions: z
			.array(
				z.strictObject({
					prompt: z.string(),
					options: z.array(z.string()).min(2),
					correctIndex: index,
					points: points.optional(),
					paragraphRef: paragraphRef.optional()
				})
			)
			.min(1)
	})
	.describe('A text with multiple-choice questions on one screen. Scored: 1 point per question.');

export const lessonScreenSchema = z.discriminatedUnion('type', [
	prefaceSchema,
	stepsSchema,
	summarySchema,
	mcqSchema,
	clozePickSchema,
	markAllSchema,
	timedReadingSchema,
	questionPreviewSchema,
	timeResultSchema,
	timeComparisonSchema,
	passageQuizSchema,
	passageMcqSchema,
	writingTaskSchema,
	wordCardSchema,
	spellWordSchema,
	matchPairsSchema,
	selfCheckSchema,
	passageSchema,
	sentenceCompletionSchema
]);

/** Every screen type with its schema, in the order above. */
export const screenSchemas = Object.fromEntries(
	lessonScreenSchema.options.map((s) => [s.shape.type.value, s])
) as Record<
	z.infer<typeof lessonScreenSchema>['type'],
	(typeof lessonScreenSchema.options)[number]
>;
