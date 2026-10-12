// Layer 2 endpoint: the student's (already typo-corrected, anonymous) text and its
// question in, a tag-and-span verdict out. No user info ever reaches the LLM.
import { dev } from '$app/environment';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';
import { llmConfigured } from '$lib/server/llm';
import {
	MAX_TEXT,
	gradeExam,
	gradeLesson,
	rateLimited,
	systemPrompt,
	userPrompt
} from '$lib/server/grade';
import type { RequestHandler } from './$types';

const body = z.object({
	kind: z.enum(['lesson', 'exam']),
	question: z.string().min(1).max(2000),
	text: z.string().min(1).max(MAX_TEXT),
	notes: z.string().max(2000).optional()
});

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	if (!llmConfigured()) throw error(503, 'LLM is not configured');
	if (rateLimited(getClientAddress())) throw error(429, 'too many requests');
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, 'bad request');
	try {
		return json(
			parsed.data.kind === 'lesson' ? await gradeLesson(parsed.data) : await gradeExam(parsed.data)
		);
	} catch (e) {
		console.error('grade failed:', e);
		throw error(502, 'grading failed');
	}
};

/** Dev only: the assembled prompt for ?kind=lesson|exam, to copy into the workbench / a playground. */
export const GET: RequestHandler = ({ url }) => {
	if (!dev) throw error(404);
	const kind = url.searchParams.get('kind') === 'exam' ? 'exam' : 'lesson';
	const sample = {
		kind,
		question: '<question>',
		text: '<student answer>',
		notes: '<notes>'
	} as const;
	return new Response(
		`${systemPrompt(kind)}\n\n----- user message -----\n${userPrompt(sample)}\n`,
		{
			headers: { 'Content-Type': 'text/plain; charset=utf-8' }
		}
	);
};
