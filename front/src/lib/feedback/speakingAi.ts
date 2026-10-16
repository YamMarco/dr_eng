// Client side of /api/speak: a take's audio -> the AI's transcript, rubric
// bands and tips. Works from the mobile build too (apiFetch).
import { apiFetch } from '$lib/api';
import { toWavBase64 } from '$lib/audioWav';
import type { CobeLevel, CobePart } from './speaking';
import type { SpeakingVerdict } from './types';

export async function requestSpeakingFeedback(input: {
	level: CobeLevel;
	part?: CobePart;
	question: string;
	seconds: number;
	audioUrl: string;
}): Promise<SpeakingVerdict> {
	const blob = await (await fetch(input.audioUrl)).blob();
	const res = await apiFetch('/api/speak', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			level: input.level,
			part: input.part,
			question: input.question,
			seconds: input.seconds,
			audio: await toWavBase64(blob)
		})
	});
	if (!res.ok) throw new Error(`speak ${res.status}`);
	return res.json();
}
