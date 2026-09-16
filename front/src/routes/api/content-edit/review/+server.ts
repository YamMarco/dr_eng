// QA review notes for the /edit map (GraphEditor's per-node float): tick
// preface/round-done + a free comment, keyed by lesson id. Deliberately kept
// out of the LessonNode schema (src/lib/content/c/*.ts) — this is authoring
// scratch state, not curriculum content — but still synced across devices
// through the same disk-write (dev) / GitHub-commit (production) split as
// the main content-edit endpoint. See ../+server.ts and content-edit/README.md.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

const REL_PATH = 'src/lib/content-edit/review-notes.json';
const GITHUB_PATH = `front/${REL_PATH}`;

type ReviewNote = { preface: boolean; rounds: boolean[]; comment: string };
type ReviewNotes = Record<string, ReviewNote>;

function checkAuth(request: Request): boolean {
	if (dev) return true;
	const key = request.headers.get('x-content-edit-key');
	return !!key && !!env.CONTENT_EDIT_PASSWORD && key === env.CONTENT_EDIT_PASSWORD;
}

export const GET: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	if (dev) {
		const abs = join(process.cwd(), REL_PATH);
		const notes: ReviewNotes = existsSync(abs) ? JSON.parse(readFileSync(abs, 'utf8') || '{}') : {};
		return json(notes);
	}
	const { content } = await getGithubFile(GITHUB_PATH);
	return json(JSON.parse(content || '{}') as ReviewNotes);
};

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const { id, patch } = (await request.json()) as { id: string; patch: Partial<ReviewNote> };
	if (!id || !patch) throw error(400, 'missing id/patch');
	const blank: ReviewNote = { preface: false, rounds: [], comment: '' };

	if (dev) {
		const abs = join(process.cwd(), REL_PATH);
		const notes: ReviewNotes = existsSync(abs) ? JSON.parse(readFileSync(abs, 'utf8') || '{}') : {};
		notes[id] = { ...blank, ...notes[id], ...patch };
		writeFileSync(abs, JSON.stringify(notes, null, '\t') + '\n');
		return json({ ok: true, committed: false });
	}

	let lastError: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		const { content: raw, sha } = await getGithubFile(GITHUB_PATH);
		const notes: ReviewNotes = JSON.parse(raw || '{}');
		notes[id] = { ...blank, ...notes[id], ...patch };
		try {
			const author = env.CONTENT_EDIT_AUTHOR;
			const prefix = author ? `[${author}] ` : '';
			await putGithubFile(
				GITHUB_PATH,
				JSON.stringify(notes, null, '\t') + '\n',
				sha,
				`${prefix}review notes: ${id}`
			);
			return json({ ok: true, committed: true });
		} catch (e) {
			lastError = e;
			if (!String(e).includes('409')) break;
		}
	}
	throw error(
		502,
		`GitHub commit failed: ${lastError instanceof Error ? lastError.message : String(lastError)}`
	);
};
