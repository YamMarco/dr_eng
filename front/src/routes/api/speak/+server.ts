// COBE voice feedback: a recording (base64 WAV) and its question set in, a
// transcript + rubric bands + Hebrew tips out. No user info reaches the LLM.
import { z } from 'zod';
import { jsonBody, llmRoute } from '$lib/server/llmRoute';
import { MAX_AUDIO_CHARS, gradeSpeakingAudio } from '$lib/server/speaking';

const body = z.object({
	level: z.enum(['4', '5']),
	part: z.enum(['A', 'B', 'C']).optional(),
	question: z.string().min(1).max(2000),
	seconds: z.number().min(0).max(600),
	audio: z.string().min(100).max(MAX_AUDIO_CHARS)
});

export const POST = llmRoute('grading failed', async ({ request }) =>
	gradeSpeakingAudio(await jsonBody(request, body))
);
