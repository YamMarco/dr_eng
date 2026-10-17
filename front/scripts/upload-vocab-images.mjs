// Copies a folder of word-card images into the public `vocab-images` Storage
// bucket (created if missing). Files already there are skipped, so it's safe to re-run.
//
//   node --env-file=.env.local scripts/upload-vocab-images.mjs <folder>
import { readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { createClient } from '@supabase/supabase-js';

const BUCKET = 'vocab-images';
const TYPES = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.png': 'image/png' };

const folder = process.argv[2];
if (!folder) throw new Error('usage: upload-vocab-images.mjs <folder>');

const storage = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
	auth: { persistSession: false, autoRefreshToken: false }
}).storage;

const { data: bucket } = await storage.getBucket(BUCKET);
if (!bucket) {
	const { error } = await storage.createBucket(BUCKET, { public: true });
	if (error) throw error;
	console.log(`created bucket ${BUCKET}`);
}

let uploaded = 0;
let skipped = 0;
for (const name of readdirSync(folder)) {
	const contentType = TYPES[extname(name).toLowerCase()];
	if (!contentType) continue;
	const { error } = await storage
		.from(BUCKET)
		.upload(name, readFileSync(join(folder, name)), { contentType, upsert: false });
	if (!error) uploaded++;
	else if (error.statusCode === '409' || /exists/i.test(error.message)) skipped++;
	else throw new Error(`${name}: ${error.message}`);
}
console.log(`uploaded ${uploaded}, already there ${skipped}`);
