// Replaces a lesson's `content` ({ lessonId, content }) or a whole section's
// node array ({ sectionId, nodes }) inside its content file — one save = one
// write/commit, however many screens/nodes changed since the last save. The
// result is re-serialised in the files' hand-written style (`emit`) and then
// run through Prettier so the on-disk diff stays small and lint-clean.
// - In dev: writes straight to the local file (fast, no password needed).
// - Elsewhere (the deployed site): requires the content-edit password and
//   commits through the GitHub API instead — there's no writable local
//   filesystem in production. See src/lib/content-edit/README.md.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import prettier from 'prettier';
import { getLesson } from '$lib/content';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

// One request either replaces a single lesson's `content` ({ lessonId,
// content }) or the whole section array ({ sectionId, nodes }) — the /edit
// workspace uses the latter so one save covers graph + content edits.
type Body =
	| { lessonId: string; content: unknown; sectionId?: undefined; nodes?: undefined }
	| { sectionId: string; nodes: unknown[]; lessonId?: undefined; content?: undefined };

function checkAuth(request: Request): boolean {
	if (dev) return true;
	const key = request.headers.get('x-content-edit-key');
	return !!key && !!env.CONTENT_EDIT_PASSWORD && key === env.CONTENT_EDIT_PASSWORD;
}

/** Everything up to and including the array literal's opening `[`. */
function splitHead(raw: string): string {
	const head = raw.match(/^([\s\S]*?=\s*)\[/)?.[1];
	if (!head) throw error(500, 'could not locate array literal in content file');
	return head;
}

const IDENT = /^[A-Za-z_$][\w$]*$/;

/** A single-quoted JS string literal, keeping JSON's escapes (\n, \uXXXX, …). */
function sq(s: string): string {
	return `'${JSON.stringify(s).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`;
}

/** Emit the content array the way the files are hand-written: tab-indented,
 *  small primitive-only objects/arrays kept on one line. Keeps `git diff`
 *  after a save small instead of exploding every `position` / `indices`. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function emit(v: any, depth: number): string {
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

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const body = (await request.json()) as Body;

	// Which file, and how to transform its `= [ … ];` array literal.
	let fileNum: string;
	let transform: (raw: string) => string;

	if (body.sectionId) {
		const { sectionId, nodes } = body;
		if (!Array.isArray(nodes)) throw error(400, 'missing nodes[]');
		fileNum = sectionId.replace(/^c-/, '');
		transform = (raw) => `${splitHead(raw)}${emit(nodes, 0)};\n`;
	} else {
		const { lessonId, content } = body;
		if (!lessonId || !content) throw error(400, 'missing lessonId/content');
		const meta = getLesson(lessonId);
		if (!meta) throw error(404, `unknown lesson: ${lessonId}`);
		fileNum = meta.section.replace(/^c-/, ''); // 'c-3' -> '3'
		transform = (raw) => {
			const head = splitHead(raw);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const lessons: any[] = JSON.parse(raw.slice(head.length).replace(/;\s*$/, ''));
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const lesson = lessons.find((l: any) => l.id === lessonId);
			if (!lesson) throw error(404, `lesson ${lessonId} not found in c-${fileNum}.ts`);
			lesson.content = content;
			return `${head}${emit(lessons, 0)};\n`;
		};
	}

	const relPath = `src/lib/content/c/c-${fileNum}.ts`; // relative to front/
	const label = body.sectionId ? `section ${body.sectionId}` : body.lessonId;

	// `emit` gets it into house style; Prettier makes it exact (quotes, final
	// line-width calls, trailing commas) so a save never trips `npm run lint`.
	const prettierCfg = await prettier.resolveConfig(join(process.cwd(), relPath)).catch(() => null);
	const rewrite = async (raw: string) =>
		prettier.format(transform(raw), { ...(prettierCfg ?? {}), parser: 'typescript' });

	if (dev) {
		const abs = join(process.cwd(), relPath);
		writeFileSync(abs, await rewrite(readFileSync(abs, 'utf8')));
		return json({ ok: true, file: `c-${fileNum}.ts`, committed: false });
	}

	// Production: read -> replace -> commit via the GitHub API. One retry if
	// another save landed in between and made our sha stale.
	const githubPath = `front/${relPath}`;
	let lastError: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		const { content: raw, sha } = await getGithubFile(githubPath);
		const next = await rewrite(raw);
		try {
			const author = env.CONTENT_EDIT_AUTHOR;
			const prefix = author ? `[${author}] ` : '';
			await putGithubFile(githubPath, next, sha, `${prefix}content-edit: ${label}`);
			return json({ ok: true, file: `c-${fileNum}.ts`, committed: true });
		} catch (e) {
			lastError = e;
			if (!String(e).includes('409')) break;
			// else: stale sha, loop and retry once with a fresh fetch
		}
	}
	throw error(
		502,
		`GitHub commit failed: ${lastError instanceof Error ? lastError.message : String(lastError)}`
	);
};
