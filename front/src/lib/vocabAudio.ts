// Recorded vocab words (Kokoro, generated offline by scripts/vocab-audio.py) live
// in the public `vocab-audio` Supabase Storage bucket: <voice>/<key>.mp3 and
// <voice>/<key>.slow.mp3. The key comes from the word itself, so content needs
// no audio field; a word without a recording falls back to the browser voice.
import { speechText } from './speechText.ts';

export const VOICES = { female: 'bf_emma', male: 'bm_george' } as const;
export type VoiceGender = keyof typeof VOICES;

/** File-name key for a word: 'Look forward to' -> 'look-forward-to'. Empty = not recordable. */
export function vocabAudioKey(word: string): string {
	return speechText(word)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

const BASE = `${import.meta.env?.VITE_SUPABASE_URL ?? ''}/storage/v1/object/public/vocab-audio/`;

export function vocabAudioUrl(word: string, gender: VoiceGender, slow: boolean): string | null {
	const key = vocabAudioKey(word);
	if (!key || !import.meta.env?.VITE_SUPABASE_URL) return null;
	return `${BASE}${VOICES[gender]}/${key}${slow ? '.slow' : ''}.mp3`;
}
