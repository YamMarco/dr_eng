// Every unique string containing Hebrew in lesson and exam content - the keys a
// content translation table needs. Shared by scripts/content-i18n.mjs and the tests.
const sources = [
	['../src/lib/content/c/c-1.ts', 'c1Lessons'],
	['../src/lib/content/c/c-2.ts', 'c2Lessons'],
	['../src/lib/content/c/c-3.ts', 'c3Lessons'],
	['../src/lib/quiz/c/index.ts', 'cQuizzes']
];

const HEBREW = /[֐-׿]/;

/** @param {unknown} value @param {Set<string>} out */
function collect(value, out) {
	if (typeof value === 'string') {
		if (HEBREW.test(value)) out.add(value);
	} else if (Array.isArray(value)) value.forEach((v) => collect(v, out));
	else if (value && typeof value === 'object') Object.values(value).forEach((v) => collect(v, out));
}

/** @returns {Promise<string[]>} */
export async function hebrewContentStrings() {
	const out = new Set();
	for (const [path, name] of sources) {
		const mod = await import(new URL(path, import.meta.url).href);
		collect(mod[name], out);
	}
	return [...out];
}

/** Every mark-all screen whose text is Hebrew: its tokens are scored by position.
 *  @returns {Promise<string[]>} */
export async function hebrewMarkAllTexts() {
	const out = new Set();
	/** @param {any} v */
	const visit = (v) => {
		if (Array.isArray(v)) v.forEach(visit);
		else if (v && typeof v === 'object') {
			if (v.type === 'mark-all' && typeof v.text === 'string' && HEBREW.test(v.text)) out.add(v.text);
			Object.values(v).forEach(visit);
		}
	};
	for (const [path, name] of sources) visit((await import(new URL(path, import.meta.url).href))[name]);
	return [...out];
}
