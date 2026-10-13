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
	ReadingVerdict
} from '$lib/feedback/types';

export const MAX_TEXT = 4000;

const KINDS: Record<
	GradeRequest['kind'],
	{ prompt: string; role: LlmRole; maxTokens: number; maxMarks: number }
> = {
	lesson: { prompt: LESSON_PROMPT, role: 'grade-short', maxTokens: 1000, maxMarks: 6 },
	reading: { prompt: READING_PROMPT, role: 'grade-reading', maxTokens: 1000, maxMarks: 4 },
	essay: { prompt: ESSAY_PROMPT, role: 'grade-essay', maxTokens: 3000, maxMarks: 8 }
};

/** The system prompt exactly as the model gets it: the .md file, untouched, so it can be
 *  pasted as-is into Gemini's web UI (AI Studio) to try changes. */
export function systemPrompt(kind: GradeRequest['kind']): string {
	return KINDS[kind].prompt;
}

export function userPrompt(req: GradeRequest): string {
	const m = req.mechanics;
	return [
		`QUESTION:\n"""\n${req.question}\n"""`,
		req.passage ? `PASSAGE:\n"""\n${req.passage}\n"""` : '',
		req.points !== undefined ? `POINTS: ${req.points}` : '',
		req.notes ? `EDITOR NOTES:\n"""\n${req.notes}\n"""` : '',
		m
			? `MECHANICS COUNT: spelling ${m.spelling}, punctuation/capitalization ${m.punctuation}, run-on sentences ${m.runOn}`
			: '',
		`STUDENT ANSWER:\n"""\n${req.text}\n"""`
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
	const { role, maxTokens } = KINDS[req.kind];
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

export async function gradeLesson(req: GradeRequest): Promise<LessonVerdict> {
	const parsed = z.object({ pass: z.boolean(), marks: marksSchema }).parse(await ask(req));
	const marks = cleanMarks(parsed.marks, 'lesson');
	// a fatal tag means fail, whatever the model said
	return { pass: parsed.pass && !marks.some((m) => FATAL_TAGS.has(m.tag)), marks };
}

export async function gradeReading(
	req: GradeRequest & { points: number }
): Promise<ReadingVerdict> {
	const parsed = z.object({ score: z.number(), marks: marksSchema }).parse(await ask(req));
	const score = Math.max(0, Math.min(req.points, Math.round(parsed.score)));
	let marks = cleanMarks(parsed.marks, 'reading');
	// a full-score answer can't be off-topic or incomplete: drop the model's contradicting content tags
	if (score === req.points) marks = marks.filter((m) => !CONTENT_TAGS.has(m.tag));
	return { score, marks };
}

export async function gradeEssay(req: GradeRequest): Promise<EssayVerdict> {
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
// One exam submit grades every open answer at once (~10 calls).
const WINDOW_MS = 5 * 60_000;
const MAX_CALLS = 40;
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
