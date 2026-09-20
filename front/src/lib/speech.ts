// Text-to-speech through the browser's built-in speechSynthesis (British
// English). Phones use the OS voices, so there is nothing to host or pay for.

export const RATE = { normal: 1, slow: 0.6 } as const;

// Ordered rewrite rules applied before speaking. Add a line to teach the
// reader a new quirk.
const RULES: [RegExp, string][] = [
	[/\*\*|\{\/?\w*:?[^}]*\}/g, ''], // mini-markdown markers: **bold**, {c:red}...{/c}
	[/\s*\/\s*/g, ', '] // singular/plural -> a short pause between the forms
];

export function speechText(text: string): string {
	return RULES.reduce((t, [pattern, to]) => t.replace(pattern, to), text).trim();
}

export function speechSupported(): boolean {
	return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Speaks `text` (cutting off whatever is playing). Silent if unsupported. */
export function speak(text: string, rate: number) {
	if (!speechSupported()) return;
	const spoken = speechText(text);
	if (!spoken) return;
	const utterance = new SpeechSynthesisUtterance(spoken);
	utterance.lang = 'en-GB';
	utterance.rate = rate;
	// Android reports `en_GB`. The voice list can still be empty on the first
	// call; `lang` alone then lets the browser choose.
	const voice = speechSynthesis
		.getVoices()
		.find((v) => v.lang.replace('_', '-').toLowerCase() === 'en-gb');
	if (voice) utterance.voice = voice;
	speechSynthesis.cancel();
	speechSynthesis.speak(utterance);
}
