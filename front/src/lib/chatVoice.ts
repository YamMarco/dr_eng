// The COBE chat's AI voice. Today the browser's own voice (speech.ts); a
// server voice (e.g. Gemini TTS through /api) would be another ChatVoice
// with the same two calls, and the chat screen stays as is.
import { RATE, hush, say } from './speech';

export interface ChatVoice {
	/** Speaks `text`, resolving when it ends or is stopped. */
	say(text: string): Promise<void>;
	stop(): void;
}

const browserVoice: ChatVoice = {
	say: (text) => say(text, RATE.normal),
	stop: hush
};

export const chatVoice: ChatVoice = browserVoice;
