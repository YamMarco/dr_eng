// Finds lesson-runner screens that scroll at a given viewport (the phone is the
// binding case). Needs a running dev server (localhost:5173), the debug tools
// (the script sets them in localStorage) and `playwright-core` plus a Chromium
// (not project dependencies - install them in a scratch dir and run from there).
//
// usage: node measure-overflow.mjs 390 700 out.json [lessonIds,comma] [maxRounds]
//
// Walks every lesson node of module C with the debug "skip screen" button and
// writes one row per screen: { id, round, i, btn, over, text, len }.
//   over = scrollHeight - clientHeight of the runner (px); > 0 means it scrolls.
//   btn  = the footer button label; "המשך" marks a teaching screen (preface,
//          steps, summary), the others are scored screens.
// Later rounds are reached by marking the round done (debug), so only the first
// maxRounds rounds per lesson are covered. The Chromium path is the Playwright
// cache default on Windows; adjust `exe` for other machines.
import { chromium } from 'playwright-core';
import os from 'os';
import fs from 'fs';
const [, , w, h, out, only, maxRounds = '5'] = process.argv;
const DBG = 'כלי דיבוג';
const SKIP = 'דלג על מסך';
const MARK = 'סמן סבב כהושלם';
const START = 'מתחילים';
const exe = os.homedir() + '/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
const b = await chromium.launch({ executablePath: exe });
const URL = 'http://localhost:5173/app/unit/4/module/c/lessons';
const mk = async () => {
	const p = await b.newPage({ viewport: { width: +w, height: +h } });
	await p.addInitScript(() => {
		localStorage.setItem('profile', JSON.stringify({ units: '4', exam: null }));
		localStorage.setItem('debug-tools-enabled', 'true');
		localStorage.setItem('debug-unlock-all', 'true');
	});
	return p;
};
let p = await mk();
await p.goto(URL, { waitUntil: 'networkidle' });
let ids = await p.$$eval('[data-lesson-node-id]', (els) => [...new Set(els.map((e) => e.getAttribute('data-lesson-node-id')))]);
if (only) ids = only.split(',');
const rows = [];
for (const id of ids) {
	const seen = new Set();
	for (let round = 0; round < +maxRounds; round++) {
		await p.goto(URL, { waitUntil: 'networkidle' });
		const n = p.locator(`[data-lesson-node-id="${id}"]`).first();
		await n.scrollIntoViewIfNeeded();
		await n.locator('button').first().click({ force: true }).catch(() => {});
		await p.waitForTimeout(400);
		const st = p.locator(`text=${START}`).first();
		if (!(await st.count())) break;
		await st.click();
		await p.waitForTimeout(900);
		let progressed = false;
		for (let i = 0; i < 80; i++) {
			const info = await p.evaluate(() => {
				const m = document.querySelector('div.fixed main');
				if (!m) return null;
				const foot = document.querySelector('div.fixed .sticky.bottom-0 button'); return { btn: foot ? foot.innerText.trim() : '', over: m.scrollHeight - m.clientHeight, text: m.innerText.replace(/\s+/g, ' ').slice(0, 110), len: m.innerText.length };
			});
			if (!info) break;
			const key = info.text;
			if (!seen.has(key)) {
				seen.add(key);
				progressed = true;
				rows.push({ id, round, i, ...info });
			}
			const root = p.locator('.z-50 button[aria-label="' + DBG + '"]').first();
			if (await root.count()) {
				if ((await p.locator(`text=${SKIP}`).count()) === 0) await root.click();
			}
			if (!(await p.locator(`text=${SKIP}`).count())) {
				// result screen: mark round complete (debug) and go again
				const mk2 = p.locator(`text=${MARK}`).first();
				if (await mk2.count()) await mk2.click();
				break;
			}
			await p.locator(`text=${SKIP}`).first().click();
			await p.waitForTimeout(250);
		}
		if (!progressed) break;
	}
	console.error(id, rows.filter((r) => r.id === id).length);
}
fs.writeFileSync(out, JSON.stringify(rows, null, 1));
await b.close();
