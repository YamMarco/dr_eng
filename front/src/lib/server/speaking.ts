// COBE recording -> the LLM listens and judges it against the official rubric
// for the student's level. Only the audio, the question set and the level are
// sent; no user info. Points are computed on the client (feedback/speaking.ts)
// from the bands returned here.
import { z } from 'zod';
import PROMPT from './prompts/grade-speaking.md?raw';
import { cobeRubric } from '$lib/content/rubrics';
import type { SpeakingVerdict } from '$lib/feedback/types';
import { chatJson } from './llm';

/** ~2 minutes of 12 kHz mono 16-bit WAV, base64 (the client trims longer takes). */
export const MAX_AUDIO_CHARS = 4_000_000;

export type SpeakingRequest = {
	level: '4' | '5';
	part?: 'A' | 'B' | 'C';
	question: string;
	seconds: number;
	audio: string;
};

const band = z.enum(['high', 'mid', 'low', 'none']);
const verdictSchema = z.object({
	transcript: z.string().max(6000),
	answeredAll: z.boolean(),
	bands: z.object({ topic: band, delivery: band, vocabulary: band, language: band }),
	strengths: z.array(z.string().max(300)).max(3),
	tips: z.array(z.string().max(300)).max(4)
});

const block = (label: string, text: string) => `${label}:\n"""\n${text}\n"""`;

export function speakingPrompt(req: Omit<SpeakingRequest, 'audio'>): string {
	const part = cobeRubric.parts.find((p) => p.id === req.part);
	const rubric = cobeRubric.levels[req.level]
		.map(
			(c) =>
				`${c.name} (${c.weight}%):\n` +
				(['high', 'mid', 'low', 'none'] as const)
					.map((b) => `- ${b}: ${c.descriptors[b].join('; ')}`)
					.join('\n')
		)
		.join('\n\n');
	return [
		`LEVEL: ${req.level}-point COBE`,
		part ? `PART: ${part.id} - ${part.name}. ${part.description}` : 'PART: practice question',
		`RECORDING LENGTH: ${Math.round(req.seconds)} seconds`,
		block('QUESTION SET', req.question),
		block('RUBRIC', rubric)
	].join('\n\n');
}

export async function gradeSpeakingAudio(req: SpeakingRequest): Promise<SpeakingVerdict> {
	const v = await chatJson(
		{
			role: 'grade-speaking',
			system: PROMPT,
			user: speakingPrompt(req),
			audio: req.audio,
			maxTokens: 2500
		},
		verdictSchema
	);
	return {
		transcript: v.transcript,
		judgement: { bands: v.bands, answeredAll: v.answeredAll },
		strengths: v.strengths,
		tips: v.tips
	};
}
