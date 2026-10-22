// Rewrites the Module E word files in place: a list file (`list-a.ts`, an array
// of `w(word, pos, defEn, he, exampleEn, form?)` calls) and the Arabic meanings
// (`words.ar.ts`, an object by word id). Used by /api/content-edit.
import { error } from '@sveltejs/kit';
import { wordId } from '../content/e/word.ts';
import { extractArrayLiteral, parseArrayLiteral, splitArrayHead } from './fileEmit.ts';

/** The editable fields of one word; `id` picks it, the rest replace its text. */
export type WordPatch = { id: string; defEn: string; he: string; exampleEn: string };

/** A single-quoted JS string literal (Prettier settles the final quotes). */
const sq = (s: string) =>
	`'${JSON.stringify(s).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`;

/** The list's file and array name: 'e-a' -> content/e/list-a.ts, listA. */
export function wordListFile(deckId: string) {
	const letter = /^e-([a-d])$/.exec(deckId)?.[1];
	if (!letter) throw error(400, `bad deck id: ${deckId}`);
	return {
		relPath: `src/lib/content/e/list-${letter}.ts`,
		arrayName: `list${letter.toUpperCase()}`
	};
}

/** Replaces the patched words' definition, Hebrew and example; every other word
 *  and argument (word, pos, form) passes through from the file as it is now. */
export function patchWordList(raw: string, arrayName: string, patches: WordPatch[]): string {
	const head = splitArrayHead(raw, arrayName);
	const { arrayText, tail } = extractArrayLiteral(raw, head);
	// Each `w(...)` call evaluates to its raw arguments, so `form` stays as written.
	const calls = new Function('w', `'use strict'; return (${arrayText});`)(
		(...args: string[]) => args
	) as string[][];
	for (const p of patches) {
		const call = calls.find((args) => wordId(args[0]) === p.id);
		if (!call) throw error(404, `word ${p.id} not found in ${arrayName}`);
		call[2] = p.defEn;
		call[3] = p.he;
		call[4] = p.exampleEn;
	}
	const body = calls.map((args) => `\tw(${args.map(sq).join(', ')})`).join(',\n');
	return `${head}[\n${body}\n]${tail}`;
}

/** Merges changed Arabic meanings by word id; an empty one is removed (falls back to Hebrew). */
export function patchGlosses(raw: string, constName: string, upserts: Record<string, string>) {
	const open = raw.indexOf('{', raw.indexOf(`export const ${constName}`));
	const close = raw.lastIndexOf('}');
	if (open < 0 || close < open) throw error(500, `could not locate ${constName} in file`);
	const fresh = parseArrayLiteral(`[${raw.slice(open, close + 1)}]`)[0] as Record<string, string>;
	for (const [id, value] of Object.entries(upserts)) {
		if (value.trim()) fresh[id] = value.trim();
		else delete fresh[id];
	}
	return `${raw.slice(0, open)}${JSON.stringify(fresh, null, '\t')}${raw.slice(close + 1)}`;
}
