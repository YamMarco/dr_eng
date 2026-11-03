// Phase 7 (accounts off): the server fails closed, CORS only for the app, CSP on pages.
// Accounts-on checks (401 without a token, another user's data) wait for a test Supabase.
import { test, expect } from '@playwright/test';

const lesson = { kind: 'lesson', question: 'q', text: 'hello' };

test('staff APIs refuse when accounts are off outside dev', async ({ request }) => {
	for (const path of ['/api/finance', '/api/kanban', '/api/content-edit/rules'])
		expect((await request.get(path)).status(), path).toBe(403);
});

test('AI grading is closed without accounts and a database', async ({ request }) => {
	expect((await request.post('/api/grade', { data: lesson })).status()).toBe(503);
	// %-encoded paths route to the same handler, so they get the same answer.
	expect((await request.post('/api/%67rade', { data: lesson })).status()).toBe(503);
});

test('cron, waitlist and progress are off without their secrets', async ({ request }) => {
	expect((await request.get('/api/cron/reminders')).status()).toBe(503);
	expect((await request.post('/api/waitlist', { data: { email: 'a@b.co' } })).status()).toBe(503);
	expect((await request.get('/api/progress')).status()).toBe(503);
});

test('CORS: the mobile app origin only, student APIs only', async ({ request }) => {
	const preflight = (path: string, origin: string) =>
		request.fetch(path, { method: 'OPTIONS', headers: { Origin: origin } });
	const allowed = (r: Awaited<ReturnType<typeof preflight>>) =>
		r.headers()['access-control-allow-origin'];
	expect(allowed(await preflight('/api/grade', 'https://localhost'))).toBe('https://localhost');
	// (`vite preview` adds its own `*`, which Vercel doesn't: assert only the app's echo.)
	expect(allowed(await preflight('/api/grade', 'https://evil.example'))).not.toBe(
		'https://evil.example'
	);
	expect(allowed(await preflight('/api/kanban', 'https://localhost'))).not.toBe(
		'https://localhost'
	);
});

test('pages carry the CSP', async ({ request }) => {
	// Rendered pages: a header. Pre-rendered ones: a meta tag, where frame-ancestors is
	// ignored (vercel.json's X-Frame-Options covers framing there).
	const app = (await request.get('/app')).headers()['content-security-policy'];
	expect(app).toContain("frame-ancestors 'none'");
	expect(app).toContain("object-src 'none'");
	expect(await (await request.get('/')).text()).toMatch(
		/http-equiv="content-security-policy"[^>]*object-src 'none'/
	);
});
