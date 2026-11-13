// Layer 2 endpoint: the student's (already typo-corrected, anonymous) text and its
// question in, a tag-and-span verdict out. No user info ever reaches the LLM.
// An exam attempt's open answers come in one request: a part per reading passage (its answers
// batched, the reading prompt) + the essay (the essay prompt), graded in parallel. The 24h retake
// lock starts once every part came back graded (server/examLock).
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { openAttempt, saveAttempt } from '$lib/server/examLock';
import { jsonBody, llmRoute } from '$lib/server/llmRoute';
import {
	MAX_READING_ITEMS,
	MAX_TEXT,
	gradeEssay,
	gradeLesson,
	gradeReading,
	systemPrompt,
	userPrompt
} from '$lib/server/grade';
import { getQuizNode } from '$lib/quiz';
import { examParts } from '$lib/quiz/examParts';
import type { GradeRequest, PartVerdict } from '$lib/feedback/types';
import type { RequestHandler } from './$types';

/** Grading parts per exam (reading passages + the essay): a handful. */
const MAX_EXAM_PARTS = 8;
const count = z.number().int().min(0).max(500);
const text = z.string().min(1).max(MAX_TEXT);
const question = z.string().min(1).max(2000);
const notes = z.string().max(2000).optional();
const reading = z.object({
	kind: z.literal('reading'),
	passage: z.string().min(1).max(8000),
	items: z
		.array(
			z.object({
				id: z.string().max(20),
				question,
				paragraph: z.string().max(10).optional(),
				points: z.number().int().min(1).max(100),
				text,
				notes
			})
		)
		.min(1)
		.max(MAX_READING_ITEMS)
});
const essay = z.object({
	kind: z.literal('essay'),
	question,
	text,
	notes,
	mechanics: z.object({ spelling: count, punctuation: count, runOn: count }).optional(),
	rubric: z.enum(['c', 'g']).optional()
});
const partId = z.string().min(1).max(80);
const body = z.discriminatedUnion('kind', [
	z.object({
		kind: z.literal('lesson'),
		question,
		text,
		notes,
		fixes: z.boolean().optional()
	}),
	// a lesson's typed reading answers (lesson quota, no exam lock)
	reading,
	z.object({
		kind: z.literal('exam'),
		quizId: z.string().min(1).max(80),
		attempt: z.number().int().positive(),
		parts: z
			.array(
				z.discriminatedUnion('kind', [reading.extend({ id: partId }), essay.extend({ id: partId })])
			)
			.min(1)
			.max(MAX_EXAM_PARTS)
	})
]);
type ExamBody = Extract<z.output<typeof body>, { kind: 'exam' }>;

/** Only the exam's own parts, each once and of its kind; anything else is a 400. */
function checkParts(req: ExamBody) {
	const quiz = getQuizNode(req.quizId);
	if (!quiz) throw error(400, 'unknown exam');
	const expected = examParts(quiz);
	const ids = new Set(req.parts.map((p) => p.id));
	if (ids.size !== req.parts.length || req.parts.some((p) => expected.get(p.id) !== p.kind))
		throw error(400, 'bad exam parts');
}

/** Each part not graded yet, in parallel; a failed part stays out (null) for a retry. */
async function gradeParts(req: ExamBody & { done: Record<string, PartVerdict> }) {
	const graded: Record<string, PartVerdict> = {};
	await Promise.all(
		req.parts
			.filter((p) => !req.done[p.id])
			.map(async (p) => {
				try {
					if (p.kind === 'essay') graded[p.id] = await gradeEssay(p);
					else {
						const verdict = await gradeReading(p);
						// an answer the model skipped fails the part: a retry grades it again
						if (verdict.answers.length === p.items.length) graded[p.id] = verdict;
					}
				} catch (e) {
					console.error(`exam part ${p.id} failed:`, e);
				}
			})
	);
	const results = Object.fromEntries(
		req.parts.map((p) => [p.id, req.done[p.id] ?? graded[p.id] ?? null])
	);
	return { graded, results, complete: Object.values(results).every(Boolean) };
}

export const POST = llmRoute({
	failure: 'grading failed',
	parse: async ({ request, locals }) => {
		const req = await jsonBody(request, body);
		if (req.kind !== 'exam') return req;
		checkParts(req);
		return { ...req, done: await openAttempt(locals, req) };
	},
	activity: (req) => (req.kind === 'exam' ? 'exam' : 'lesson'),
	calls: (req) => (req.kind === 'exam' ? req.parts.filter((p) => !req.done[p.id]).length : 1),
	run: async (req, { locals }) => {
		if (req.kind === 'lesson') return gradeLesson(req);
		if (req.kind === 'reading') return gradeReading(req);
		const { graded, results, complete } = await gradeParts(req);
		await saveAttempt(locals, req, graded, complete);
		return { results };
	}
});

/** Dev only: the assembled prompt for ?kind=lesson|reading|essay (&rubric=g), to copy into AI Studio. */
export const GET: RequestHandler = ({ url }) => {
	if (!dev) throw error(404);
	const kind =
		(['reading', 'essay'] as const).find((k) => k === url.searchParams.get('kind')) ?? 'lesson';
	const sample: GradeRequest =
		kind === 'reading'
			? {
					kind,
					passage: '[I] <paragraph>\n\n[II] <paragraph>',
					items: [
						{ id: 'q1', question: '<question>', paragraph: 'I', points: 8, text: '<answer>' },
						{ id: 'q2', question: '<question>', paragraph: 'II', points: 7, text: '<answer>' }
					]
				}
			: {
					kind,
					question: '<question>',
					text: '<student answer>',
					notes: '<notes>',
					...(kind === 'essay' && { mechanics: { spelling: 0, punctuation: 0, runOn: 0 } })
				};
	return new Response(
		`${systemPrompt(kind, url.searchParams.get('rubric') === 'g' ? 'g' : 'c')}\n\n----- user message -----\n${userPrompt(sample)}\n`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
};
