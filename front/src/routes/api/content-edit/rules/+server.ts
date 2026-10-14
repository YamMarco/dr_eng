// Rule settings above the screen (module > section > lesson): src/lib/content/rules.json.
// Same storage split as the other content-edit endpoints: disk in dev, a GitHub
// commit in production. The whole (small) file is replaced on save.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';
import { checkAuth } from '$lib/content-edit/auth';
import { getGithubFile, putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

const REL_PATH = 'src/lib/content/rules.json';
const GITHUB_PATH = `front/${REL_PATH}`;

const rules = z.strictObject({
	llmGrade: z.boolean().optional(),
	llmFix: z.boolean().optional(),
	maxTypos: z.number().int().min(0).optional(),
	capitalIsError: z.boolean().optional(),
	autoCheck: z.boolean().optional(),
	rulesLock: z.boolean().optional()
});
const fileSchema = z.strictObject({
	modules: z.record(z.string(), rules),
	sections: z.record(z.string(), rules),
	lessons: z.record(z.string(), rules)
});

const serialize = (file: unknown) => JSON.stringify(file, null, '\t') + '\n';

export const GET: RequestHandler = async ({ request }) => {
	if (!checkAuth()) throw error(401, 'content editing needs accounts enabled');
	if (dev) return json(JSON.parse(readFileSync(join(process.cwd(), REL_PATH), 'utf8')));
	try {
		return json(JSON.parse((await getGithubFile(GITHUB_PATH)).content));
	} catch (e) {
		throw error(502, `GitHub read failed: ${e instanceof Error ? e.message : String(e)}`);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth()) throw error(401, 'content editing needs accounts enabled');
	const parsed = fileSchema.safeParse(await request.json().catch(() => null));
	if (!parsed.success) throw error(400, parsed.error.issues[0]?.message ?? 'bad rules file');

	if (dev) {
		writeFileSync(join(process.cwd(), REL_PATH), serialize(parsed.data));
		return json({ ok: true, committed: false });
	}
	let lastError: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		const { sha } = await getGithubFile(GITHUB_PATH);
		try {
			const prefix = env.CONTENT_EDIT_AUTHOR ? `[${env.CONTENT_EDIT_AUTHOR}] ` : '';
			await putGithubFile(GITHUB_PATH, serialize(parsed.data), sha, `${prefix}rule settings`);
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
