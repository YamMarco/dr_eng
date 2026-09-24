// File-agnostic helpers for rewriting a hand-written `export const X = [ ... ];`
// array literal in place: locate it, evaluate it as plain JS (the files use
// single-quoted strings, so it's not valid JSON), merge a patch of
// upserted/deleted-by-id entries into it, and re-serialize in the repo's house
// style (small primitive-only objects/arrays inline, everything else
// multi-line) before Prettier does the final formatting pass. Shared by every
// content-edit save endpoint (lessons, exams, ...) that patches a
// section-shaped file instead of replacing it outright.
import { error } from '@sveltejs/kit';

/** Everything up to (but not including) the array literal's opening `[`, so
 *  `raw.slice(head.length)` still starts with `[` - a full, parseable array
 *  literal, and `emit()`'s own `[...]` wrapping isn't duplicated. */
export function splitArrayHead(raw: string, constName: string): string {
	const re = new RegExp(`^([\\s\\S]*?export const ${constName}[^=]*=\\s*)\\[`);
	const head = raw.match(re)?.[1];
	if (!head) throw error(500, `could not locate "export const ${constName} = [...]" in file`);
	return head;
}

/** The index right after the `[` at `raw[openIndex]`'s matching `]` - a
 *  simple bracket depth counter that skips over string contents (so a `]`
 *  inside authored text doesn't throw it off). Content files have no
 *  comments, so those aren't handled. */
function matchingBracketEnd(raw: string, openIndex: number): number {
	let depth = 0;
	let inString: '"' | "'" | '`' | null = null;
	for (let i = openIndex; i < raw.length; i++) {
		const c = raw[i];
		if (inString) {
			if (c === '\\') i += 1;
			else if (c === inString) inString = null;
			continue;
		}
		if (c === '"' || c === "'" || c === '`') inString = c;
		else if (c === '[') depth += 1;
		else if (c === ']') {
			depth -= 1;
			if (depth === 0) return i;
		}
	}
	throw error(500, 'unbalanced array literal in content file');
}

/** Splits `raw` (given `head`, ending right before the array's `[`) into the
 *  array literal's own text and everything after it - so a file with more
 *  than one top-level statement (e.g. quizzes.ts's two arrays) only has the
 *  one array literal touched, not "everything to end of file". */
export function extractArrayLiteral(
	raw: string,
	head: string
): { arrayText: string; tail: string } {
	const openIndex = head.length;
	const closeIndex = matchingBracketEnd(raw, openIndex);
	return { arrayText: raw.slice(openIndex, closeIndex + 1), tail: raw.slice(closeIndex + 1) };
}

/** The array literal is plain JS data (strings/numbers/booleans/null/arrays/
 *  objects) but not valid JSON - evaluate it as JS instead. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseArrayLiteral(src: string): any[] {
	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	return new Function(`'use strict'; return (${src});`)();
}

/** Merge a patch of changed/new entries and deleted ids into the array's
 *  current content - entries the patch doesn't mention pass through
 *  untouched, so a save never reverts anyone else's already-committed
 *  changes. New ids are appended in the order the patch gives them; existing
 *  ids keep their position. */
export function mergeById<T extends { id: string }>(
	fresh: T[],
	upserts: T[],
	deletes: string[]
): T[] {
	const deleteSet = new Set(deletes);
	const byId = new Map<string, T>(fresh.filter((n) => !deleteSet.has(n.id)).map((n) => [n.id, n]));
	const order = fresh.map((n) => n.id).filter((id) => !deleteSet.has(id));
	for (const u of upserts) {
		if (!byId.has(u.id)) order.push(u.id);
		byId.set(u.id, u);
	}
	return order.map((id) => byId.get(id)!);
}

const IDENT = /^[A-Za-z_$][\w$]*$/;

/** A single-quoted JS string literal, keeping JSON's escapes (\n, \uXXXX, …). */
function sq(s: string): string {
	return `'${JSON.stringify(s).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`;
}

/** Emit a value the way the content files are hand-written: tab-indented,
 *  small primitive-only objects/arrays kept on one line. Keeps `git diff`
 *  after a save small instead of exploding every small object/array. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function emit(v: any, depth: number): string {
	const pad = '\t'.repeat(depth);
	const pad1 = '\t'.repeat(depth + 1);
	if (v === null || v === undefined) return 'null';
	if (typeof v === 'string') return sq(v);
	if (typeof v !== 'object') return String(v);

	if (Array.isArray(v)) {
		if (v.length === 0) return '[]';
		const parts = v.map((x) => emit(x, depth + 1));
		const inline = `[${parts.join(', ')}]`;
		if (!inline.includes('\n') && inline.length <= 76) return inline;
		return `[\n${parts.map((p) => pad1 + p).join(',\n')}\n${pad}]`;
	}

	const keys = Object.keys(v).filter((k) => v[k] !== undefined);
	if (keys.length === 0) return '{}';
	const parts = keys.map((k) => `${IDENT.test(k) ? k : sq(k)}: ${emit(v[k], depth + 1)}`);
	const inline = `{ ${parts.join(', ')} }`;
	if (!inline.includes('\n') && inline.length <= 76) return inline;
	return `{\n${parts.map((p) => pad1 + p).join(',\n')}\n${pad}}`;
}
