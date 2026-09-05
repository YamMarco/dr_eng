// Set / insert / delete one screen inside a content file.
// - In dev: writes straight to the local file (fast, no password needed).
// - Elsewhere (the deployed site): requires the content-edit password and
//   commits the change through the GitHub API instead — there's no writable
//   local filesystem in production. See src/lib/content-edit/README.md.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getLesson } from '$lib/content';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

type Body = {
	lessonId: string;
	/** 'preface' or a round index. */
	bucket: 'preface' | number;
	index: number;
	op?: 'set' | 'insert' | 'delete';
	screen?: unknown;
};

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

function applyOp(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	lessons: any[],
	lessonId: string,
	bucket: 'preface' | number,
	index: number,
	op: 'set' | 'insert' | 'delete',
	screen: unknown
) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const lesson = lessons.find((l: any) => l.id === lessonId);
	if (!lesson) throw error(404, `lesson ${lessonId} not found`);

	const list =
		bucket === 'preface' ? lesson.content.preface : lesson.content.rounds?.[bucket]?.screens;
	if (!Array.isArray(list)) throw error(400, `no screen list at ${String(bucket)}`);

	if (op === 'delete') {
		if (index < 0 || index >= list.length) throw error(400, `bad index ${index}`);
		list.splice(index, 1);
	} else if (op === 'insert') {
		if (screen == null) throw error(400, 'insert needs a screen');
		if (index < 0 || index > list.length) throw error(400, `bad index ${index}`);
		list.splice(index, 0, screen);
	} else {
		if (screen == null) throw error(400, 'set needs a screen');
		if (index < 0 || index >= list.length) throw error(400, `bad index ${index}`);
		list[index] = screen;
	}
}

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const { lessonId, bucket, index, op = 'set', screen } = (await request.json()) as Body;

	const meta = getLesson(lessonId);
	if (!meta) throw error(404, `unknown lesson: ${lessonId}`);

	const fileNum = meta.section.replace(/^c-/, ''); // 'c-3' -> '3'
	const relPath = `src/lib/content/c/c-${fileNum}.ts`; // relative to front/

	if (dev) {
		const abs = join(process.cwd(), relPath);
		const raw = readFileSync(abs, 'utf8');
		const head = splitHead(raw);
		const lessons = JSON.parse(raw.slice(head.length).replace(/;\s*$/, ''));
		applyOp(lessons, lessonId, bucket, index, op, screen);
		writeFileSync(abs, `${head}${JSON.stringify(lessons, null, 2)};\n`);
		return json({ ok: true, file: `c-${fileNum}.ts`, committed: false });
	}

	// Production: read -> mutate -> commit via the GitHub API. One retry if
	// another save landed in between and made our sha stale.
	const githubPath = `front/${relPath}`;
	let lastError: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		const { content: raw, sha } = await getGithubFile(githubPath);
		const head = splitHead(raw);
		const lessons = JSON.parse(raw.slice(head.length).replace(/;\s*$/, ''));
		applyOp(lessons, lessonId, bucket, index, op, screen);
		const next = `${head}${JSON.stringify(lessons, null, 2)};\n`;
		try {
			await putGithubFile(githubPath, next, sha, `content-edit: ${lessonId} ${bucket}[${index}] ${op}`);
			return json({ ok: true, file: `c-${fileNum}.ts`, committed: true });
		} catch (e) {
			lastError = e;
			if (!String(e).includes('409')) break;
			// else: stale sha, loop and retry once with a fresh fetch
		}
	}
	throw error(502, `GitHub commit failed: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
};
