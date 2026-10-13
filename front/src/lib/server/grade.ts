// Layer 2: builds the grading prompt, asks the LLM, validates what comes back.
// The model only picks tags from a closed list (the Hebrew text is in i18n), so replies stay tiny.
import { z } from 'zod';
import { chat, type LlmRole } from './llm';
import LESSON_PROMPT from './prompts/grade-short.md?raw';
import READING_PROMPT from './prompts/grade-reading.md?raw';
import ESSAY_PROMPT from './prompts/grade-essay.md?raw';
import { CONTENT_TAGS, FATAL_TAGS, TAG_IDS } from '$lib/feedback/tags';
import { essayRubric } from '$lib/content/rubrics';
import type {
	EssayVerdict,
	GradeRequest,
	LessonVerdict,
	LlmMark,
	ReadingRequest,
	ReadingVerdict,
	SingleRequest
} from '$lib/feedback/types';

export const MAX_TEXT = 4000;
/** A reading batch holds at most this many answers (an exam passage has ~6 open questions). */
export const MAX_READING_ITEMS = 15;

const KINDS: Record<
	GradeRequest['kind'],
	{ prompt: string; role: LlmRole; maxTokens: number; maxMarks: number }
> = {
	lesson: { prompt: LESSON_PROMPT, role: 'grade-short', maxTokens: 1000, maxMarks: 6 },
	// per batch; ask() adds room for every answer in it
	reading: { prompt: READING_PROMPT, role: 'grade-reading', maxTokens: 1000, maxMarks: 4 },
	essay: { prompt: ESSAY_PROMPT, role: 'grade-essay', maxTokens: 3000, maxMarks: 8 }
};

/** The system prompt exactly as the model gets it: the .md file, untouched, so it can be
 *  pasted as-is into Gemini's web UI (AI Studio) to try changes. */
export function systemPrompt(kind: GradeRequest['kind']): string {
	return KINDS[kind].prompt;
}

const block = (label: string, text: string) => `${label}:\n"""\n${text}\n"""`;

export function userPrompt(req: GradeRequest): string {
	if (req.kind === 'reading')
		return [
			block('PASSAGE', req.passage),
			...req.items.map((it) =>
				[
					`ANSWER ${it.id}`,
					`QUESTION: ${it.question}`,
					it.paragraph ? `PARAGRAPH: ${it.paragraph}` : '',
					`POINTS: ${it.points}`,
					it.notes ? block('EDITOR NOTES', it.notes) : '',
					block('STUDENT ANSWER', it.text)
				]
					.filter(Boolean)
					.join('\n')
			)
		].join('\n\n');
	const m = req.mechanics;
	return [
		block('QUESTION', req.question),
		req.notes ? block('EDITOR NOTES', req.notes) : '',
		m
			? `MECHANICS COUNT: spelling ${m.spelling}, punctuation/capitalization ${m.punctuation}, run-on sentences ${m.runOn}`
			: '',
		block('STUDENT ANSWER', req.text)
	]
		.filter(Boolean)
		.join('\n\n');
}

const markSchema = z.object({
	span: z.string().max(200),
	tag: z.string(),
	nth: z.number().int().min(1).max(20).optional()
});
const marksSchema = z.array(markSchema).default([]);

/** Unknown tags and the overflow are dropped, not errors: a slightly off reply is still useful. */
function cleanMarks(marks: z.infer<typeof markSchema>[], kind: GradeRequest['kind']): LlmMark[] {
	return marks.filter((m) => TAG_IDS.has(m.tag)).slice(0, KINDS[kind].maxMarks);
}

// maxTokens also covers the model's hidden reasoning (Gemini "thinking"): too low cuts the JSON off.
async function ask(req: GradeRequest): Promise<unknown> {
	const { role } = KINDS[req.kind];
	const maxTokens =
		KINDS[req.kind].maxTokens + (req.kind === 'reading' ? 300 * req.items.length : 0);
	for (let attempt = 0; ; attempt++) {
		const result = await chat({
			role,
			system: systemPrompt(req.kind),
			user: userPrompt(req),
			json: true,
			maxTokens
		});
		console.info(
			`grade ${req.kind}: ${result.model} in=${result.inputTokens} out=${result.outputTokens}`
		);
		try {
			return JSON.parse(result.text);
		} catch (e) {
			if (attempt > 0) throw e; // one more try on a cut-off or malformed reply
		}
	}
}

export async function gradeLesson(req: SingleRequest): Promise<LessonVerdict> {
	const parsed = z.object({ pass: z.boolean(), marks: marksSchema }).parse(await ask(req));
	const marks = cleanMarks(parsed.marks, 'lesson');
	// a fatal tag means fail, whatever the model said
	return { pass: parsed.pass && !marks.some((m) => FATAL_TAGS.has(m.tag)), marks };
}

export async function gradeReading(req: ReadingRequest): Promise<ReadingVerdict> {
	const parsed = z
		.object({
			answers: z.array(z.object({ id: z.string(), score: z.number(), marks: marksSchema }))
		})
		.parse(await ask(req));
	const byId = new Map(parsed.answers.map((a) => [a.id, a]));
	// answers the model skipped are left out; the client counts them as not graded
	const answers = req.items.flatMap((item) => {
		const a = byId.get(item.id);
		if (!a) return [];
		const score = Math.max(0, Math.min(item.points, Math.round(a.score)));
		let marks = cleanMarks(a.marks, 'reading');
		// a full-score answer can't be off-topic or incomplete: drop contradicting content tags
		if (score === item.points) marks = marks.filter((m) => !CONTENT_TAGS.has(m.tag));
		return [{ id: item.id, score, marks }];
	});
	return { answers };
}

export async function gradeEssay(req: SingleRequest): Promise<EssayVerdict> {
	const shape = Object.fromEntries(
		essayRubric.criteria.map((c) => [c.id, z.number().min(0).max(c.max)])
	);
	const parsed = z.object({ scores: z.object(shape), marks: marksSchema }).parse(await ask(req));
	const scores = Object.fromEntries(
		Object.entries(parsed.scores as Record<string, number>).map(([k, v]) => [k, Math.round(v)])
	);
	return { scores, marks: cleanMarks(parsed.marks, 'essay') };
}

// Best-effort limiter (per server instance). Per-student auth is the real fix; see llm-gateway/README.
// One exam submit is 2 calls (reading batch + essay).
const WINDOW_MS = 5 * 60_000;
const MAX_CALLS = 30;
const calls = new Map<string, number[]>();

export function rateLimited(key: string): boolean {
	const now = Date.now();
	const recent = (calls.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
	if (recent.length >= MAX_CALLS) {
		calls.set(key, recent);
		return true;
	}
	recent.push(now);
	calls.set(key, recent);
	return false;
}
