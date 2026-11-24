// What a text sounds like when read aloud: content markup out, small rewrites
// in. Shared by the browser voice (speech.ts) and the recording keys
// (vocabAudio.ts, also run by the offline generator), so it stays dependency-free.

// Ordered rewrite rules applied before speaking. Add a line to teach the
// reader a new quirk.
const RULES: [RegExp, string][] = [
	[/\*\*|\{\/?\w*:?[^}]*\}/g, ''], // mini-markdown markers: **bold**, {c:red}...{/c}
	[/\s*\([^)]*\)/g, ''], // (optional words) are not read: '(all) on your own' -> 'on your own'
	[/\s*\/\s*/g, ', '] // singular/plural -> a short pause between the forms
];

export function speechText(text: string): string {
	return RULES.reduce((t, [pattern, to]) => t.replace(pattern, to), text).trim();
}
