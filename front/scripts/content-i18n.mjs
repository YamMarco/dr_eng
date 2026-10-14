// Content translation status: which Hebrew strings in lessons / exams have no
// entry in a language table (missing), and which entries no longer match any
// content string (stale - usually a string edited after it was translated).
//   node scripts/content-i18n.mjs [lang]            report
//   node scripts/content-i18n.mjs [lang] --missing  print missing strings as JSON
//   node scripts/content-i18n.mjs [lang] --prune    drop stale entries
// Translate by adding "<Hebrew>": "<translation>" pairs to
// src/lib/content/translations/<lang>.json (see src/lib/content/localize.svelte.ts).
import { readFileSync, writeFileSync } from 'node:fs';
import { hebrewContentStrings } from './content-strings.mjs';

const lang = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'ar';
const file = new URL(`../src/lib/content/translations/${lang}.json`, import.meta.url);
const table = JSON.parse(readFileSync(file, 'utf8'));

const strings = new Set(await hebrewContentStrings());
const missing = [...strings].filter((s) => !(s in table));
const stale = Object.keys(table).filter((k) => !strings.has(k));

if (process.argv.includes('--missing')) {
	console.log(JSON.stringify(missing, null, '\t'));
} else if (process.argv.includes('--prune')) {
	for (const k of stale) delete table[k];
	writeFileSync(file, JSON.stringify(table, null, '\t') + '\n');
	console.log(`${lang}: removed ${stale.length} stale entries`);
} else {
	console.log(
		`${lang}: ${strings.size - missing.length}/${strings.size} translated, ${missing.length} missing, ${stale.length} stale`
	);
	for (const s of stale) console.log(`  stale: ${s.slice(0, 80).replace(/\n/g, ' ')}`);
}
