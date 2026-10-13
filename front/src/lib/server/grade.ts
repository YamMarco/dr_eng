// Layer 2: builds the grading prompt, asks the LLM, validates what comes back.
// The model only picks tags from a closed list (the Hebrew text is in i18n), so replies stay tiny.
import { z } from 'zod';
import { chat } from './llm';
import LESSON_PROMPT from './prompts/grade-short.md?raw';
import EXAM_PROMPT from './prompts/grade-essay.md?raw';
import { EXAM_CRITERIA, FATAL_TAGS, TAG_IDS } from '$lib/feedback/tags';
import type { ExamVerdict, GradeRequest, LessonVerdict, LlmMark } from '$lib/feedback/types';

export const MAX_TEXT = 4000;

/** The system prompt exactly as the model gets it: the .md file, untouched, so it can be
 *  pasted as-is into Gemini's web UI (AI Studio) to try changes. */
export function systemPrompt(kind: GradeRequest['kind']): string {
	return kind === 'lesson' ? LESSON_PROMPT : EXAM_PROMPT;
}

export function userPrompt(req: GradeRequest): string {
	return [
		`QUESTION:\n"""\n${req.question}\n"""`,
		req.notes ? `EDITOR NOTES:\n"""\n${req.notes}\n"""` : '',
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

/** Unknown tags and the overflow are dropped, not errors: a slightly off reply is still useful. */
function cleanMarks(marks: z.infer<typeof markSchema>[], max: number): LlmMark[] {
	return marks.filter((m) => TAG_IDS.has(m.tag)).slice(0, max);
}

async function ask(req: GradeRequest): Promise<unknown> {
	const result = await chat({
		role: req.kind === 'lesson' ? 'grade-short' : 'grade-essay',
		system: systemPrompt(req.kind),
		user: userPrompt(req),
		json: true,
		maxTokens: req.kind === 'lesson' ? 400 : 700
	});
	console.info(
		`grade ${req.kind}: ${result.model} in=${result.inputTokens} out=${result.outputTokens}`
	);
	return JSON.parse(result.text);
}

export async function gradeLesson(req: GradeRequest): Promise<LessonVerdict> {
	const parsed = z
		.object({ pass: z.boolean(), marks: z.array(markSchema).default([]) })
		.parse(await ask(req));
	const marks = cleanMarks(parsed.marks, 6);
	// a fatal tag means fail, whatever the model said
	return { pass: parsed.pass && !marks.some((m) => FATAL_TAGS.has(m.tag)), marks };
}

export async function gradeExam(req: GradeRequest): Promise<ExamVerdict> {
	const shape = Object.fromEntries(
		EXAM_CRITERIA.map((c) => [c.id, z.number().int().min(0).max(c.max)])
	);
	const parsed = z
		.object({ scores: z.object(shape), marks: z.array(markSchema).default([]) })
		.parse(await ask(req));
	return { scores: parsed.scores as Record<string, number>, marks: cleanMarks(parsed.marks, 8) };
}

// Best-effort limiter (per server instance). Per-student auth is the real fix; see llm-gateway/README.
const WINDOW_MS = 5 * 60_000;
const MAX_CALLS = 20;
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
