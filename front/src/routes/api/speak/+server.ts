// COBE voice feedback: a recording (base64 WAV) and its question set in, a
// transcript + rubric bands + Hebrew tips out. No user info reaches the LLM.
import * as Sentry from '@sentry/sveltekit';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';
import { llmConfigured } from '$lib/server/llm';
import { guardLlm } from '$lib/server/llmGuard';
import { MAX_AUDIO_CHARS, gradeSpeakingAudio } from '$lib/server/speaking';
import type { RequestHandler } from './$types';

const body = z.object({
	level: z.enum(['4', '5']),
	part: z.enum(['A', 'B', 'C']).optional(),
	question: z.string().min(1).max(2000),
	seconds: z.number().min(0).max(600),
	audio: z.string().min(100).max(MAX_AUDIO_CHARS)
});

export const POST: RequestHandler = async ({ request, locals, getClientAddress }) => {
	if (!llmConfigured()) throw error(503, 'LLM is not configured');
	await guardLlm(locals, getClientAddress());
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, 'bad request');
	try {
		return json(await gradeSpeakingAudio(parsed.data));
	} catch (e) {
		console.error('speaking feedback failed:', e);
		Sentry.captureException(e);
		throw error(502, 'grading failed');
	}
};
