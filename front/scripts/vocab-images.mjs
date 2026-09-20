// Downloads the CC0 / public-domain vocab images listed in docs/vocab-images.json
// into static/vocab-images/ and writes a gallery page next to them.
//   node scripts/vocab-images.mjs   ->   open static/vocab-images/index.html
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entries = JSON.parse(await readFile(path.join(root, '../docs/vocab-images.json'), 'utf8'));
const outDir = path.join(root, 'static/vocab-images');
await mkdir(outDir, { recursive: true });

// Some hosts (StockSnap) reject requests without a browser-like User-Agent.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36';
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' };
const slug = (w) =>
	w
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
const exists = (p) =>
	access(p).then(
		() => true,
		() => false
	);
const esc = (s) =>
	String(s ?? '').replace(
		/[&<>"]/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]
	);

// Words sharing one image (e.g. cause / affect-effect) are downloaded once.
const fileByUrl = new Map();
let failed = 0;
for (const e of entries) {
	if (!e.url && !e.manual) continue;
	if (e.url && fileByUrl.has(e.url)) {
		e.file = fileByUrl.get(e.url);
		continue;
	}
	const base = slug(e.word);
	const known = ['jpg', 'png', 'webp', 'gif'].map((x) => `${base}.${x}`);
	let file;
	for (const k of known) if (await exists(path.join(outDir, k))) file = k;
	// `manual` entries (Pixabay: its download links reject scripts) are never
	// fetched - save the file by hand as static/vocab-images/<slug>.jpg.
	if (!file && e.url) {
		try {
			const res = await fetch(e.url, { headers: { 'User-Agent': UA } });
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const ext = EXT[res.headers.get('content-type')?.split(';')[0] ?? ''] ?? 'jpg';
			file = `${base}.${ext}`;
			await writeFile(path.join(outDir, file), Buffer.from(await res.arrayBuffer()));
			console.log('saved', file);
		} catch (err) {
			failed++;
			console.warn('FAILED', e.word, err.message);
		}
	}
	e.file = file;
	if (file && e.url) fileByUrl.set(e.url, file);
}

const cards = entries
	.map((e) =>
		e.file
			? `<figure><a href="${esc(e.file)}" download><img src="${esc(e.file)}" alt="${esc(e.word)}" loading="lazy"></a>
<figcaption><b>${esc(e.word)}</b><span>${esc(e.license)} · <a href="${esc(e.page)}" target="_blank" rel="noopener">source</a></span></figcaption></figure>`
			: `<figure class="none"><div>${e.manual ? `save as ${slug(e.word)}.jpg` : e.url ? 'download failed' : 'no image'}</div>
<figcaption><b>${esc(e.word)}</b><span>${e.manual ? `<a href="${esc(e.download)}" target="_blank" rel="noopener">download</a> · ` : ''}${esc(e.note ?? '')}</span></figcaption></figure>`
	)
	.join('\n');

await writeFile(
	path.join(outDir, 'index.html'),
	`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vocab images</title>
<style>
body{font:15px system-ui,sans-serif;margin:0;padding:20px;background:#f6f4f0;color:#222}
h1{margin:0 0 4px}p{margin:0 0 16px;color:#666}
main{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
figure{margin:0;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px #0002}
img{display:block;width:100%;height:170px;object-fit:cover;background:#eee}
.none div{height:170px;display:flex;align-items:center;justify-content:center;background:#eee;color:#999}
figcaption{padding:8px 10px;display:flex;flex-direction:column;gap:2px}span{font-size:12px;color:#777}a{color:#0a6}
</style>
<p><a href="/">← back to the app</a></p><h1>Vocab images</h1><p>${entries.filter((e) => e.file).length} images (CC0 / Public Domain). Click an image to download it.</p>
<main>
${cards}
</main></html>`
);
console.log(`done - open static/vocab-images/index.html${failed ? ` (${failed} failed)` : ''}`);
