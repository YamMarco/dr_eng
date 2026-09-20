// Stores one cropped word-card image (the /edit workspace's image cropper posts
// the finished JPEG as the raw body). The file name is a hash of the bytes, so
// re-uploading the same picture is a no-op and never piles up duplicates.
// - In dev: writes straight into static/vocab-images/.
// - Elsewhere: commits it through the GitHub API (it goes live on the next
//   deploy). See src/lib/content-edit/README.md.
import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';
import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { checkAuth } from '$lib/content-edit/auth';
import { putGithubFile } from '$lib/content-edit/github';
import type { RequestHandler } from './$types';

const MAX_BYTES = 2 * 1024 * 1024;

export const POST: RequestHandler = async ({ request }) => {
	if (!checkAuth(request)) throw error(401, 'wrong or missing content-edit password');
	if (request.headers.get('content-type') !== 'image/jpeg') throw error(415, 'expected image/jpeg');

	const bytes = Buffer.from(await request.arrayBuffer());
	if (bytes.length === 0 || bytes.length > MAX_BYTES) throw error(413, 'image is empty or too big');

	const name = `word-${createHash('sha1').update(bytes).digest('hex').slice(0, 10)}.jpg`;
	const relPath = `static/vocab-images/${name}`; // relative to front/

	if (dev) {
		writeFileSync(join(process.cwd(), relPath), bytes);
	} else {
		const author = env.CONTENT_EDIT_AUTHOR;
		try {
			await putGithubFile(
				`front/${relPath}`,
				bytes,
				undefined,
				`${author ? `[${author}] ` : ''}content-edit: image ${name}`
			);
		} catch (e) {
			// 422 = the same bytes are already committed under this name — fine.
			if (!String(e).includes('422'))
				throw error(502, `GitHub commit failed: ${e instanceof Error ? e.message : String(e)}`);
		}
	}
	return json({ url: `/vocab-images/${name}` });
};
