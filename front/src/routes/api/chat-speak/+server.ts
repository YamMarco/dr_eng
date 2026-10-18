// COBE chat: one spoken turn (base64 WAV) and the chat so far in, what the AI
// heard + its next line (+ the summary on the last turn) out. No user info
// reaches the LLM. Every turn counts toward the daily LLM quota.
import * as Sentry from '@sentry/sveltekit';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';
import { llmConfigured } from '$lib/server/llm';
import { guardLlm } from '$lib/server/llmGuard';
import { MAX_AUDIO_CHARS } from '$lib/server/speaking';
import { chatTurn } from '$lib/server/chatSpeaking';
import { validChatTopics } from '$lib/content/cobe/chatTopics';
import { MAX_TURNS, turnNumber } from '$lib/feedback/chat';
import type { RequestHandler } from './$types';

const body = z
	.object({
		mode: z.enum(['banter', 'cobe-a', 'cobe-b']),
		level: z.enum(['4', '5']),
		topics: z.array(z.string().max(80)).max(2),
		// Opener + 2 lines per earlier turn.
		history: z
			.array(z.object({ who: z.enum(['ai', 'me']), text: z.string().max(1500) }))
			.min(1)
			.max(2 * Math.max(...Object.values(MAX_TURNS)) - 1),
		seconds: z.number().min(0).max(600),
		audio: z.string().min(100).max(MAX_AUDIO_CHARS)
	})
	.refine((b) => validChatTopics(b.mode, b.topics))
	.refine((b) => turnNumber(b.history) <= MAX_TURNS[b.mode]);

export const POST: RequestHandler = async ({ request, locals, getClientAddress }) => {
	if (!llmConfigured()) throw error(503, 'LLM is not configured');
	await guardLlm(locals, getClientAddress());
	const parsed = body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, 'bad request');
	try {
		return json(await chatTurn(parsed.data));
	} catch (e) {
		console.error('chat turn failed:', e);
		Sentry.captureException(e);
		throw error(502, 'chat failed');
	}
};
