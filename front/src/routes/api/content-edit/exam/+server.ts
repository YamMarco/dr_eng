// Saves exam-editor changes: merges a patch of changed/removed QuizNodes into
// the module's quiz-content array (src/lib/quiz/<module>/index.ts) and a
// patch of changed/removed metadata entries into quizzes.ts's assortedQuizzes
// / ministryQuizzes arrays - same merge-by-id / `emit` / Prettier pipeline as
// the lesson save endpoint (see ../+server.ts), just against two files
// instead of one, since an exam's content and its routing/list metadata live
// in separate registries. Same dev-disk-write / prod-GitHub-commit split.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import prettier from 'prettier';
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

type Patch = { upserts: unknown[]; deletes: string[] };

type Body = {
	moduleId: string;
	content: Patch;
	metaAssorted: Patch;
	metaMinistry: Patch;
};

function isPatch(v: unknown): v is Patch {
	return (
		!!v &&
		typeof v === 'object' &&
		Array.isArray((v as Patch).upserts) &&
		Array.isArray((v as Patch).deletes)
	);
}

/** One file's worth of work: relative path, the const to patch, and the patch
 *  itself. Skipped entirely if the patch is empty. */
type FileJob = { relPath: string; constName: string; patch: Patch; label: string };

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');

	const body = (await request.json()) as Body;
	if (!body.moduleId) throw error(400, 'missing moduleId');
	if (!isPatch(body.content) || !isPatch(body.metaAssorted) || !isPatch(body.metaMinistry))
		throw error(400, 'missing content/metaAssorted/metaMinistry patch');

	const jobs: FileJob[] = [];
	if (body.content.upserts.length || body.content.deletes.length) {
		jobs.push({
			relPath: `src/lib/quiz/${body.moduleId}/index.ts`,
			constName: `${body.moduleId}Quizzes`,
			patch: body.content,
			label: `exam content (${body.moduleId})`
		});
	}
	if (body.metaAssorted.upserts.length || body.metaAssorted.deletes.length) {
		jobs.push({
			relPath: `src/lib/quizzes.ts`,
			constName: 'assortedQuizzes',
			patch: body.metaAssorted,
			label: `exam metadata (${body.moduleId}, assorted)`
		});
	}
	if (body.metaMinistry.upserts.length || body.metaMinistry.deletes.length) {
		jobs.push({
			relPath: `src/lib/quizzes.ts`,
			constName: 'ministryQuizzes',
			patch: body.metaMinistry,
			label: `exam metadata (${body.moduleId}, ministry)`
		});
	}
	if (!jobs.length) return json({ ok: true, files: [], committed: false });

	async function rewrite(relPath: string, constName: string, patch: Patch, raw: string) {
		const head = splitArrayHead(raw, constName);
		const { arrayText, tail } = extractArrayLiteral(raw, head);
		const fresh = parseArrayLiteral(arrayText);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const merged = mergeById(fresh as any[], patch.upserts as any[], patch.deletes);
		const next = `${head}${emit(merged, 0)}${tail}`;
		const prettierCfg = await prettier
			.resolveConfig(join(process.cwd(), relPath))
			.catch(() => null);
		return prettier.format(next, { ...(prettierCfg ?? {}), parser: 'typescript' });
	}

	if (dev) {
		for (const job of jobs) {
			const abs = join(process.cwd(), job.relPath);
			writeFileSync(
				abs,
				await rewrite(job.relPath, job.constName, job.patch, readFileSync(abs, 'utf8'))
			);
		}
		return json({ ok: true, files: jobs.map((j) => j.relPath), committed: false });
	}

	// Production: one commit per file, one retry each if another save landed
	// in between and made that file's sha stale.
	for (const job of jobs) {
		const githubPath = `front/${job.relPath}`;
		let lastError: unknown;
		let done = false;
		for (let attempt = 0; attempt < 2 && !done; attempt++) {
			const { content: raw, sha } = await getGithubFile(githubPath);
			const next = await rewrite(job.relPath, job.constName, job.patch, raw);
			try {
				const author = env.CONTENT_EDIT_AUTHOR;
				const prefix = author ? `[${author}] ` : '';
				await putGithubFile(githubPath, next, sha, `${prefix}content-edit: ${job.label}`);
				done = true;
			} catch (e) {
				lastError = e;
				if (!String(e).includes('409')) break;
			}
		}
		if (!done)
			throw error(
				502,
				`GitHub commit failed for ${job.relPath}: ${lastError instanceof Error ? lastError.message : String(lastError)}`
			);
	}
	return json({ ok: true, files: jobs.map((j) => j.relPath), committed: true });
};
