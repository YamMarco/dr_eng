// Lesson and exam content in the UI language. Content is authored in Hebrew
// (with English study text); a language table maps each whole Hebrew string to
// its translation, keeping the English and the markup inside it. Pure-English
// strings (passages, options) have no entry and stay as they are. A string with
// no entry - e.g. edited after it was translated - falls back to Hebrew.
// Applied where content is played (lessons page, exam page), never in the
// editor. Missing / stale entries: `node scripts/content-i18n.mjs`.
import type { Language } from '$lib/i18n/index.svelte';
import ar from './translations/ar.json';

const tables: Partial<Record<Language, Record<string, string>>> = { ar };

const cache = new Map<Language, WeakMap<object, unknown>>();

function translate(value: unknown, table: Record<string, string>): unknown {
	if (typeof value === 'string') return table[value] ?? value;
	if (Array.isArray(value)) return value.map((v) => translate(v, table));
	if (value && typeof value === 'object')
		return Object.fromEntries(
			Object.entries(value).map(([k, v]) => [k, translate(v, table)])
		);
	return value;
}

/** A translated copy of a lesson / exam node (the same object for Hebrew).
 *  Cached per node and language, so the result is stable across renders. */
export function localizeContent<T extends object>(node: T, language: Language): T {
	const table = tables[language];
	if (!table) return node;
	let byNode = cache.get(language);
	if (!byNode) cache.set(language, (byNode = new WeakMap()));
	let out = byNode.get(node) as T | undefined;
	if (!out) byNode.set(node, (out = translate(node, table) as T));
	return out;
}
