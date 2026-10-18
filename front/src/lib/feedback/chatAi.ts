// Client side of /api/chat-speak: one spoken turn -> what the AI heard and its
// next line. Works from the mobile build too (apiFetch). Also the chat count
// (synced) for the module page.
import { apiFetch } from '$lib/api';
import { toWavBase64 } from '$lib/audioWav';
import { saveSynced } from '$lib/progressSync.svelte';
import type { ChatLine, ChatMode, ChatTurnReply } from './chat';

/** A failed turn: `limit` when today's AI quota is used up. */
export class ChatTurnError extends Error {
	constructor(readonly limit: boolean) {
		super(limit ? 'daily limit' : 'chat turn failed');
	}
}

export async function sendChatTurn(input: {
	mode: ChatMode;
	level: '4' | '5';
	topics: string[];
	history: ChatLine[];
	seconds: number;
	audioUrl: string;
}): Promise<ChatTurnReply> {
	const blob = await (await fetch(input.audioUrl)).blob();
	const res = await apiFetch('/api/chat-speak', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			mode: input.mode,
			level: input.level,
			topics: input.topics,
			history: input.history,
			seconds: input.seconds,
			audio: await toWavBase64(blob)
		})
	}).catch(() => undefined);
	if (!res?.ok) throw new ChatTurnError(res?.status === 429);
	return res.json();
}

const COUNT_KEY = 'chat-count';

export function chatCount(): number {
	try {
		return Number(localStorage.getItem(COUNT_KEY)) || 0;
	} catch {
		return 0;
	}
}

export function addChat() {
	try {
		saveSynced(COUNT_KEY, chatCount() + 1);
	} catch {
		// a nicety
	}
}
