// Replaces a lesson's `content` ({ lessonId, content }), merges a patch of
// changed/removed nodes into a lesson section ({ sectionId, upserts,
// deletes }), or merges a patch of changed/removed exams into a module's
// quiz-content file ({ examModuleId, upserts, deletes }) — one save = one
// write/commit, however many screens/nodes changed since the last save.
// Untouched nodes pass through from the file's current content, not from the
// caller's copy, so a save never reverts someone else's already-committed
// changes to a different node. The result is re-serialised in the files'
// hand-written style (`emit`) and then run through Prettier so the on-disk
// diff stays small and lint-clean.
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
import { checkAuth } from '$lib/content-edit/auth';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import {
	splitArrayHead,
	extractArrayLiteral,
	parseArrayLiteral,
	mergeById,
	emit
} from '$lib/content-edit/fileEmit';
import type { RequestHandler } from './$types';

// One request either replaces a single lesson's `content` ({ lessonId,
// content }), merges a patch of changed/removed nodes into a lesson section
// ({ sectionId, upserts, deletes }), or merges a patch of changed/removed
// exams into a module's quiz-content file ({ examModuleId, upserts,
// deletes }) — each array-literal-shaped file (one lesson section, one
// module's exams) is patched the same way. Merging (rather than replacing
// the whole array) means a save only ever touches the nodes it actually
// changed: two people editing different nodes in the same file never stomp
// on each other, in the file or in git history.
type Body =
	| {
			lessonId: string;
			content: unknown;
			sectionId?: undefined;
			examModuleId?: undefined;
			upserts?: undefined;
			deletes?: undefined;
	  }
	| {
			sectionId: string;
			upserts: unknown[];
			deletes: string[];
			lessonId?: undefined;
			examModuleId?: undefined;
			content?: undefined;
	  }
	| {
			examModuleId: string;
			upserts: unknown[];
			deletes: string[];
			lessonId?: undefined;
			sectionId?: undefined;
			content?: undefined;
	  };

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const body = (await request.json()) as Body;

	// Which file, and how to transform its `= [ … ];` array literal.
	let relPath: string;
	let label: string;
	let transform: (raw: string) => string;

	if (body.sectionId) {
		const { sectionId, upserts, deletes } = body;
		if (!Array.isArray(upserts) || !Array.isArray(deletes))
			throw error(400, 'missing upserts[]/deletes[]');
		const fileNum = sectionId.replace(/^c-/, '');
		relPath = `src/lib/content/c/c-${fileNum}.ts`;
		label = `section ${sectionId}`;
		transform = (raw) => {
			const head = splitArrayHead(raw, `c${fileNum}Lessons`);
			const { arrayText, tail } = extractArrayLiteral(raw, head);
			const fresh = parseArrayLiteral(arrayText);
			const merged = mergeById(fresh, upserts, deletes);
			return `${head}${emit(merged, 0)}${tail}`;
		};
	} else if (body.examModuleId) {
		const { examModuleId, upserts, deletes } = body;
		if (!Array.isArray(upserts) || !Array.isArray(deletes))
			throw error(400, 'missing upserts[]/deletes[]');
		relPath = `src/lib/quiz/${examModuleId}/index.ts`;
		label = `exams (${examModuleId})`;
		transform = (raw) => {
			const head = splitArrayHead(raw, `${examModuleId}Quizzes`);
			const { arrayText, tail } = extractArrayLiteral(raw, head);
			const fresh = parseArrayLiteral(arrayText);
			const merged = mergeById(fresh, upserts, deletes);
			return `${head}${emit(merged, 0)}${tail}`;
		};
	} else {
		const { lessonId, content } = body;
		if (!lessonId || !content) throw error(400, 'missing lessonId/content');
		const meta = getLesson(lessonId);
		if (!meta) throw error(404, `unknown lesson: ${lessonId}`);
		const fileNum = meta.section.replace(/^c-/, ''); // 'c-3' -> '3'
		relPath = `src/lib/content/c/c-${fileNum}.ts`;
		label = lessonId;
		transform = (raw) => {
			const head = splitArrayHead(raw, `c${fileNum}Lessons`);
			const { arrayText, tail } = extractArrayLiteral(raw, head);
			const lessons = parseArrayLiteral(arrayText);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const lesson = lessons.find((l: any) => l.id === lessonId);
			if (!lesson) throw error(404, `lesson ${lessonId} not found in ${relPath}`);
			lesson.content = content;
			return `${head}${emit(lessons, 0)}${tail}`;
		};
	}

	// `emit` gets it into house style; Prettier makes it exact (quotes, final
	// line-width calls, trailing commas) so a save never trips `npm run lint`.
	const prettierCfg = await prettier.resolveConfig(join(process.cwd(), relPath)).catch(() => null);
	const rewrite = async (raw: string) =>
		prettier.format(transform(raw), { ...(prettierCfg ?? {}), parser: 'typescript' });

	if (dev) {
		const abs = join(process.cwd(), relPath);
		writeFileSync(abs, await rewrite(readFileSync(abs, 'utf8')));
		return json({ ok: true, file: relPath, committed: false });
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
			return json({ ok: true, file: relPath, committed: true });
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
