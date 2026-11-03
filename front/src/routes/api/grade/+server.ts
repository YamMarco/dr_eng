// Layer 2 endpoint: the student's (already typo-corrected, anonymous) text and its
// question in, a tag-and-span verdict out. No user info ever reaches the LLM.
// An exam's open reading answers come as one batch per passage, the essay alone. Exam requests
// name their attempt: the 24h retake lock starts once every part was graded.
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { assertExamOpen, recordExamPart } from '$lib/server/examLock';
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
import type { GradeRequest } from '$lib/feedback/types';
import type { RequestHandler } from './$types';

/** Grading requests per exam (reading passages + the essay): a handful. */
const MAX_EXAM_PARTS = 8;
const count = z.number().int().min(0).max(500);
const text = z.string().min(1).max(MAX_TEXT);
const question = z.string().min(1).max(2000);
const notes = z.string().max(2000).optional();
const exam = z.object({
	quizId: z.string().min(1).max(80),
	attempt: z.number().int().positive(),
	parts: z.number().int().min(1).max(MAX_EXAM_PARTS)
});
const body = z.discriminatedUnion('kind', [
	z.object({
		kind: z.literal('lesson'),
		question,
		text,
		notes,
		fixes: z.boolean().optional()
	}),
	z.object({
		kind: z.literal('essay'),
		exam,
		question,
		text,
		notes,
		mechanics: z.object({ spelling: count, punctuation: count, runOn: count }).optional(),
		rubric: z.enum(['c', 'g']).optional()
	}),
	z.object({
		kind: z.literal('reading'),
		exam,
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
	})
]);

export const POST = llmRoute({
	failure: 'grading failed',
	parse: async ({ request, locals }) => {
		const req = await jsonBody(request, body);
		if (req.kind !== 'lesson') await assertExamOpen(locals, req.exam);
		return req;
	},
	activity: (req) => (req.kind === 'lesson' ? 'lesson' : 'exam'),
	run: async (req, { locals }) => {
		if (req.kind === 'lesson') return gradeLesson(req);
		// a failure throws (502) before the tick: the exam is done only when every part is graded
		const verdict = req.kind === 'reading' ? await gradeReading(req) : await gradeEssay(req);
		await recordExamPart(locals, req.exam);
		return verdict;
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
