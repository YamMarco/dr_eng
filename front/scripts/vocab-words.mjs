// Every vocab word the app reads aloud from a recording: word-card and
// spell-word screens in all lessons, the Module E word decks, and EXTRA (the
// settings preview). Used by scripts/vocab-audio.mjs.
import { SECTION_FILES } from './lesson-meta.mjs';

const root = new URL('../src/lib/', import.meta.url);

/** Spoken outside the content. */
const EXTRA = ['Welcome'];

/** @returns {Promise<{ key: string, text: string }[]>} `text` as spoken (speechText.ts), one per key */
export async function vocabWords() {
	const { vocabAudioKey } = await import(new URL('vocabAudio.ts', root).href);
	const { speechText } = await import(new URL('speechText.ts', root).href);

	const words = new Set(EXTRA);
	for (const [file, name] of SECTION_FILES) {
		const mod = await import(new URL(`content/${file}.ts`, root).href);
		for (const lesson of mod[name]) {
			const screens = [
				lesson.content.preface,
				...lesson.content.rounds.map((/** @type {any} */ r) => r.screens)
			].flat();
			for (const s of screens)
				if (s && (s.type === 'word-card' || s.type === 'spell-word')) words.add(s.word);
		}
	}
	for (const list of ['a', 'b', 'c', 'd']) {
		const mod = await import(new URL(`content/e/list-${list}.ts`, root).href);
		for (const w of mod[`list${list.toUpperCase()}`]) words.add(w.word);
	}

	/** @type {Map<string, string>} */
	const byKey = new Map();
	for (const text of words) {
		const key = vocabAudioKey(text);
		if (key && !byKey.has(key)) byKey.set(key, speechText(text));
	}
	return [...byKey].map(([key, text]) => ({ key, text }));
}
