// Lesson and exam content in the UI language. Content is authored in Hebrew
// (with English study text); a language table maps each whole Hebrew string to
// its translation, keeping the English and the markup inside it. Pure-English
// strings (passages, options) have no entry and stay as they are. A string with
// no entry - e.g. edited after it was translated - falls back to Hebrew.
// Applied where content is played (lessons page, exam page), never in the
// editor. Missing / stale entries: `node scripts/content-i18n.mjs`.
import { i18n, type Language } from '$lib/i18n/index.svelte';

type Table = Record<string, string>;

// Tables are large, so each loads on first use - Hebrew users never fetch one.
const loaders: Partial<Record<Language, () => Promise<{ default: Table }>>> = {
	ar: () => import('./translations/ar.json')
};

// raw: the tables are read-only data, no need to proxy every entry.
let tables = $state.raw<Partial<Record<Language, Table>>>({});
const loading = new Set<Language>();
const cache = new Map<Language, WeakMap<object, unknown>>();

function ensureLoaded(language: Language) {
	const load = loaders[language];
	if (!load || loading.has(language)) return;
	loading.add(language);
	load().then((m) => (tables = { ...tables, [language]: m.default }));
}

// Start fetching as soon as a page that plays content is loaded, so the table
// is usually there before the first lesson opens.
ensureLoaded(i18n.language);

function translate(value: unknown, table: Table): unknown {
	if (typeof value === 'string') return table[value] ?? value;
	if (Array.isArray(value)) return value.map((v) => translate(v, table));
	if (value && typeof value === 'object')
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, translate(v, table)]));
	return value;
}

/** False while the language's table is still loading (always true for Hebrew). */
export function contentReady(language: Language): boolean {
	return !loaders[language] || !!tables[language];
}

/** A translated copy of a lesson / exam node (the same object for Hebrew, and
 *  until the language's table has loaded). Reactive: call from $derived or
 *  markup. Cached per node and language, so the result is stable across renders. */
export function localizeContent<T extends object>(node: T, language: Language): T {
	if (!loaders[language]) return node;
	const table = tables[language];
	if (!table) {
		ensureLoaded(language);
		return node;
	}
	let byNode = cache.get(language);
	if (!byNode) cache.set(language, (byNode = new WeakMap()));
	let out = byNode.get(node) as T | undefined;
	if (!out) byNode.set(node, (out = translate(node, table) as T));
	return out;
}
