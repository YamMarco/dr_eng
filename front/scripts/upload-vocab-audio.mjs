// Copies the recordings made by scripts/vocab-audio.py (<folder>/<voice>/<key>.mp3)
// into the public `vocab-audio` Storage bucket (created if missing). Files already
// there are skipped, so it's safe to re-run.
//
//   node --env-file=.env.local scripts/upload-vocab-audio.mjs <folder>
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createClient } from '@supabase/supabase-js';

const BUCKET = 'vocab-audio';

const folder = process.argv[2];
if (!folder) throw new Error('usage: upload-vocab-audio.mjs <folder>');

const storage = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
	auth: { persistSession: false, autoRefreshToken: false }
}).storage;

const { data: bucket } = await storage.getBucket(BUCKET);
if (!bucket) {
	const { error } = await storage.createBucket(BUCKET, {
		public: true,
		allowedMimeTypes: ['audio/mpeg']
	});
	if (error) throw error;
	console.log(`created bucket ${BUCKET}`);
}

let uploaded = 0;
let skipped = 0;
for (const voice of readdirSync(folder)) {
	for (const name of readdirSync(join(folder, voice))) {
		if (!name.endsWith('.mp3')) continue;
		const { error } = await storage
			.from(BUCKET)
			.upload(`${voice}/${name}`, readFileSync(join(folder, voice, name)), {
				contentType: 'audio/mpeg',
				cacheControl: '31536000',
				upsert: false
			});
		if (!error) uploaded++;
		else if (error.statusCode === '409' || /exists/i.test(error.message)) skipped++;
		else throw new Error(`${voice}/${name}: ${error.message}`);
	}
}
console.log(`uploaded ${uploaded}, already there ${skipped}`);
