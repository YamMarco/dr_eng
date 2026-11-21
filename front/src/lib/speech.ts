// Text-to-speech. Vocab words play a recorded natural voice (vocabAudio.ts);
// everything else, and any word without a recording, uses the browser's
// built-in speechSynthesis (British English).
import { speechText } from './speechText';
import { vocabAudioUrl } from './vocabAudio';
import { voicePref } from './voicePref.svelte';

export { speechText };

export const RATE = { normal: 1, slow: 0.4 } as const;

/** A recording's slow speed: stretched in the browser, pitch kept (slower smears it). */
const RECORDING_SLOW = 0.75;

export function speechSupported(): boolean {
	return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Speaks `text` (cutting off whatever is playing). Silent if unsupported. */
export function speak(text: string, rate: number) {
	void say(text, rate);
}

let player: HTMLAudioElement | undefined;

/**
 * A vocab word: its recording in the student's chosen voice, else the browser
 * voice. Recordings play even where the browser can't speak.
 */
export function speakWord(word: string, rate: number) {
	hush();
	const url = vocabAudioUrl(word, voicePref.gender);
	if (!url || typeof Audio === 'undefined') return speak(word, rate);
	player ??= new Audio();
	const audio = player;
	audio.src = url;
	audio.preservesPitch = true;
	audio.playbackRate = rate === RATE.slow ? RECORDING_SLOW : 1;
	// A missing file (404), a network error or a blocked autoplay: the browser voice instead.
	const fallback = () => {
		if (audio.src === url) speak(word, rate);
	};
	audio.onerror = fallback;
	audio.play().catch((e: unknown) => {
		if (!(e instanceof DOMException && e.name === 'AbortError')) fallback();
	});
}

/** Like `speak`, resolving when the speech ends (or is cut off). */
export function say(text: string, rate: number): Promise<void> {
	if (!speechSupported()) return Promise.resolve();
	const spoken = speechText(text);
	if (!spoken) return Promise.resolve();
	const utterance = new SpeechSynthesisUtterance(spoken);
	utterance.lang = 'en-GB';
	utterance.rate = rate;
	// Android reports `en_GB`. The voice list can still be empty on the first
	// call; `lang` alone then lets the browser choose.
	const voice = speechSynthesis
		.getVoices()
		.find((v) => v.lang.replace('_', '-').toLowerCase() === 'en-gb');
	if (voice) utterance.voice = voice;
	hush();
	return new Promise((resolve) => {
		// Some browsers never fire `end`: give up after a generous reading time.
		const timer = setTimeout(resolve, 4000 + spoken.length * 120);
		const done = () => {
			clearTimeout(timer);
			resolve();
		};
		utterance.onend = done;
		utterance.onerror = done;
		speechSynthesis.speak(utterance);
	});
}

/** Stops whatever is being spoken or played. */
export function hush() {
	if (player) {
		player.onerror = null;
		player.pause();
	}
	if (speechSupported()) speechSynthesis.cancel();
}
