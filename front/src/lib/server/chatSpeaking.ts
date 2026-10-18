// COBE chat: one student turn (audio) + the conversation so far (text) -> what
// the AI heard, its next line and, on the last turn, an encouraging summary.
// Only the audio, the chat text, the topic and the level are sent; no user info.
import { z } from 'zod';
import PROMPT from './prompts/chat-speaking.md?raw';
import { BANTER_TOPICS, PROJECT_POINTS } from '$lib/content/cobe/chatTopics';
import {
	MAX_TURNS,
	MIN_TURNS,
	chatEnds,
	turnNumber,
	type ChatLine,
	type ChatMode,
	type ChatTurnReply
} from '$lib/feedback/chat';
import { chat } from './llm';

export type ChatTurnRequest = {
	mode: ChatMode;
	level: '4' | '5';
	topics: string[];
	history: ChatLine[];
	seconds: number;
	audio: string;
};

const replySchema = z.object({
	heard: z.string().max(4000),
	reply: z.string().min(1).max(600),
	done: z.boolean().optional(),
	summary: z
		.object({
			strengths: z.array(z.string().max(300)).min(1).max(3),
			phrases: z.array(z.string().max(120)).max(3),
			closing: z.string().max(300)
		})
		.optional()
});

const block = (label: string, text: string) => `${label}:\n"""\n${text}\n"""`;

export function chatPrompt(req: Omit<ChatTurnRequest, 'audio'>): string {
	const turn = turnNumber(req.history);
	const max = MAX_TURNS[req.mode];
	const topic =
		req.mode === 'banter'
			? `TOPIC: ${BANTER_TOPICS.find((t) => t.id === req.topics[0])?.en}`
			: req.mode === 'cobe-a'
				? `TOPICS (the student chooses one): ${req.topics.join(' / ')}`
				: `PROJECT POINTS: ${PROJECT_POINTS.join('; ')}`;
	return [
		`MODE: ${req.mode}`,
		`LEVEL: ${req.level}-point student`,
		topic,
		`TURN: ${turn} of ${max} (MIN ${MIN_TURNS[req.mode]})${turn >= max ? ' - FINAL TURN' : ''}`,
		`THIS ANSWER LENGTH: ${Math.round(req.seconds)} seconds`,
		block(
			'CONVERSATION SO FAR',
			req.history.map((l) => `${l.who === 'ai' ? 'YOU' : 'STUDENT'}: ${l.text}`).join('\n')
		)
	].join('\n\n');
}

export async function chatTurn(req: ChatTurnRequest): Promise<ChatTurnReply> {
	const user = chatPrompt(req);
	const turn = turnNumber(req.history);
	const final = turn >= MAX_TURNS[req.mode];
	for (let attempt = 0; ; attempt++) {
		const result = await chat({
			role: 'chat-speaking',
			system: PROMPT,
			user,
			audio: req.audio,
			json: true,
			maxTokens: 1200
		});
		console.info(
			`chat speaking: ${result.model} in=${result.inputTokens} out=${result.outputTokens}`
		);
		try {
			const v = replySchema.parse(JSON.parse(result.text));
			// The last turn should carry its summary: one more try, then end without it.
			if (final && !v.summary && attempt === 0) throw new Error('summary missing');
			const done = chatEnds(req.mode, turn, Boolean(v.done), Boolean(v.summary));
			return { heard: v.heard, reply: v.reply, done, ...(done && { summary: v.summary }) };
		} catch (e) {
			if (attempt > 0) throw e;
		}
	}
}
