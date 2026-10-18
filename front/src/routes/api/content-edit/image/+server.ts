// Stores one cropped word-card image (the /edit workspace's image cropper posts
// the finished JPEG as the raw body) in the public `vocab-images` Storage bucket.
// It's live at once, no deploy. The file name is a hash of the bytes, so
// re-uploading the same picture is a no-op and never piles up duplicates.
// The screen keeps the short path; $lib/lesson-screens/vocabImage maps it to the bucket.
import { error, json } from '@sveltejs/kit';
import { createHash } from 'node:crypto';
import { checkAuth } from '$lib/content-edit/auth';
import { adminClient } from '$lib/server/supabase';
import type { RequestHandler } from './$types';

const MAX_BYTES = 2 * 1024 * 1024;

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!checkAuth(locals)) throw error(403, 'staff only');
	if (request.headers.get('content-type') !== 'image/jpeg') throw error(415, 'expected image/jpeg');
	const supabase = adminClient();
	if (!supabase) throw error(503, 'image storage is not configured');

	const bytes = Buffer.from(await request.arrayBuffer());
	if (bytes.length === 0 || bytes.length > MAX_BYTES) throw error(413, 'image is empty or too big');

	const name = `word-${createHash('sha1').update(bytes).digest('hex').slice(0, 10)}.jpg`;
	const { error: uploadError } = await supabase.storage
		.from('vocab-images')
		.upload(name, bytes, { contentType: 'image/jpeg', upsert: false });
	// 409 = the same bytes are already stored under this name - fine.
	if (uploadError && !/exists/i.test(uploadError.message))
		throw error(502, `image upload failed: ${uploadError.message}`);
	return json({ url: `/vocab-images/${name}` });
};
