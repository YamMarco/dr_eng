// Keeps the `vocab-audio` bucket in step with the app: lists what's in the bucket per
// voice, records the vocab words it lacks with Kokoro (scripts/vocab-audio.py, on this
// PC only) into a temp folder, uploads them and deletes the folder. Safe to re-run.
//
//   node --env-file=.env.local scripts/vocab-audio.mjs [model-dir]
//
// model-dir defaults to ../../SDK/kokoro/model (next to this repo).
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { vocabWords } from './vocab-words.mjs';

const BUCKET = 'vocab-audio';
const front = new URL('..', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');
const modelDir = resolve(process.argv[2] ?? join(front, '../../SDK/kokoro/model'));

const { VOICES } = await import(new URL('../src/lib/vocabAudio.ts', import.meta.url).href);
const voices = /** @type {string[]} */ (Object.values(VOICES));

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

/** @param {string} voice @returns {Promise<Set<string>>} keys already in the bucket */
async function inBucket(voice) {
	const keys = new Set();
	for (let offset = 0; ; offset += 1000) {
		const { data, error } = await storage.from(BUCKET).list(voice, { limit: 1000, offset });
		if (error) throw error;
		for (const f of data) if (f.name.endsWith('.mp3')) keys.add(f.name.slice(0, -4));
		if (data.length < 1000) return keys;
	}
}

const words = await vocabWords();
const appKeys = new Set(words.map((w) => w.key));
const jobs = [];
for (const voice of voices) {
	const have = await inBucket(voice);
	const missing = words.filter((w) => !have.has(w.key));
	const unused = [...have].filter((k) => !appKeys.has(k));
	console.log(
		`${voice}: ${words.length} words, ${have.size} in bucket, ${missing.length} to record` +
			(unused.length ? `, ${unused.length} no longer used (${unused.slice(0, 5).join(', ')})` : '')
	);
	for (const w of missing) jobs.push({ voice, ...w });
}
if (!jobs.length) process.exit(0);

const tmp = mkdtempSync(join(tmpdir(), 'vocab-audio-'));
try {
	writeFileSync(join(tmp, 'jobs.json'), JSON.stringify(jobs));
	const out = join(tmp, 'out');
	const run = spawnSync(
		'uv',
		['run', 'scripts/vocab-audio.py', modelDir, join(tmp, 'jobs.json'), out],
		{
			cwd: front,
			stdio: 'inherit'
		}
	);
	if (run.status !== 0) throw new Error(`recording failed (exit ${run.status})`);

	for (const { voice, key } of jobs) {
		const path = `${voice}/${key}.mp3`;
		const { error } = await storage.from(BUCKET).upload(path, readFileSync(join(out, path)), {
			contentType: 'audio/mpeg',
			cacheControl: '31536000',
			upsert: false
		});
		if (error) throw new Error(`${path}: ${error.message}`);
	}
	console.log(`uploaded ${jobs.length}`);
} finally {
	rmSync(tmp, { recursive: true, force: true });
}
