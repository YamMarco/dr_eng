// Replaces one lesson's whole `content` (preface + all rounds) inside its
// content file — one save = one write/commit, however many screens the
// editor touched (edit/add/delete/reorder) since the last save.
// - In dev: writes straight to the local file (fast, no password needed).
// - Elsewhere (the deployed site): requires the content-edit password and
//   commits through the GitHub API instead — there's no writable local
//   filesystem in production. See src/lib/content-edit/README.md.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getLesson } from '$lib/content';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

type Body = { lessonId: string; content: unknown };

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

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const { lessonId, content } = (await request.json()) as Body;
	if (!content) throw error(400, 'missing content');

	const meta = getLesson(lessonId);
	if (!meta) throw error(404, `unknown lesson: ${lessonId}`);

	const fileNum = meta.section.replace(/^c-/, ''); // 'c-3' -> '3'
	const relPath = `src/lib/content/c/c-${fileNum}.ts`; // relative to front/

	function replaceLessonContent(raw: string): string {
		const head = splitHead(raw);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const lessons: any[] = JSON.parse(raw.slice(head.length).replace(/;\s*$/, ''));
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const lesson = lessons.find((l: any) => l.id === lessonId);
		if (!lesson) throw error(404, `lesson ${lessonId} not found in ${relPath}`);
		lesson.content = content;
		return `${head}${JSON.stringify(lessons, null, 2)};\n`;
	}

	if (dev) {
		const abs = join(process.cwd(), relPath);
		writeFileSync(abs, replaceLessonContent(readFileSync(abs, 'utf8')));
		return json({ ok: true, file: `c-${fileNum}.ts`, committed: false });
	}

	// Production: read -> replace -> commit via the GitHub API. One retry if
	// another save landed in between and made our sha stale.
	const githubPath = `front/${relPath}`;
	let lastError: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		const { content: raw, sha } = await getGithubFile(githubPath);
		const next = replaceLessonContent(raw);
		try {
			const author = env.CONTENT_EDIT_AUTHOR || 'Emil';
			await putGithubFile(githubPath, next, sha, `[${author}] content-edit: ${lessonId}`);
			return json({ ok: true, file: `c-${fileNum}.ts`, committed: true });
		} catch (e) {
			lastError = e;
			if (!String(e).includes('409')) break;
			// else: stale sha, loop and retry once with a fresh fetch
		}
	}
	throw error(502, `GitHub commit failed: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
};
