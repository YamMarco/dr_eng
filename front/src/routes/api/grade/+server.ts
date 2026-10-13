// Layer 2 endpoint: the student's (already typo-corrected, anonymous) text and its
// question in, a tag-and-span verdict out. No user info ever reaches the LLM.
import { dev } from '$app/environment';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';
import { llmConfigured } from '$lib/server/llm';
import {
	MAX_TEXT,
	gradeEssay,
	gradeLesson,
	gradeReading,
	rateLimited,
	systemPrompt,
	userPrompt
} from '$lib/server/grade';
import type { GradeRequest } from '$lib/feedback/types';
import type { RequestHandler } from './$types';

const count = z.number().int().min(0).max(500);
const body = z.object({
	kind: z.enum(['lesson', 'reading', 'essay']),
	question: z.string().min(1).max(2000),
	text: z.string().min(1).max(MAX_TEXT),
	notes: z.string().max(2000).optional(),
	passage: z.string().max(6000).optional(),
	points: z.number().int().min(1).max(100).optional(),
	mechanics: z.object({ spelling: count, punctuation: count, runOn: count }).optional()
});

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	if (!llmConfigured()) throw error(503, 'LLM is not configured');
	if (rateLimited(getClientAddress())) throw error(429, 'too many requests');
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, 'bad request');
	const req = parsed.data;
	if (req.kind === 'reading' && req.points === undefined) throw error(400, 'reading needs points');
	try {
		if (req.kind === 'lesson') return json(await gradeLesson(req));
		if (req.kind === 'reading') return json(await gradeReading({ ...req, points: req.points! }));
		return json(await gradeEssay(req));
	} catch (e) {
		console.error('grade failed:', e);
		throw error(502, 'grading failed');
	}
};

/** Dev only: the assembled prompt for ?kind=lesson|reading|essay, to copy into AI Studio. */
export const GET: RequestHandler = ({ url }) => {
	if (!dev) throw error(404);
	const kind =
		(['reading', 'essay'] as const).find((k) => k === url.searchParams.get('kind')) ?? 'lesson';
	const sample: GradeRequest = {
		kind,
		question: '<question>',
		text: '<student answer>',
		notes: '<notes>',
		...(kind === 'reading' && { passage: '<paragraph>', points: 8 }),
		...(kind === 'essay' && { mechanics: { spelling: 0, punctuation: 0, runOn: 0 } })
	};
	return new Response(
		`${systemPrompt(kind)}\n\n----- user message -----\n${userPrompt(sample)}\n`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
};
