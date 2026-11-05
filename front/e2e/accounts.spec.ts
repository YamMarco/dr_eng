// Phase 4/7: accounts ON, against a real Supabase project (docs/handoffs/testing-plan.md).
// Opt-in, never in CI: it creates throwaway users (e2e-<run>-*@example.com, confirmed through
// the admin API, so no email is sent), a throwaway coupon and their rows, and removes all of it
// at the end. The dev server must run WITHOUT a Gemini key, so nothing can spend on the LLM:
//   npx vite dev --port 5199   (env: Supabase keys + DATABASE_URL only; vite.config fs.allow if
//   node_modules is a junction)   then   E2E_ACCOUNTS=1 E2E_PORT=5199 npm run e2e:accounts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import postgres from 'postgres';
import { test, expect, type APIRequestContext, type Browser } from '@playwright/test';
import { playThrough, he } from './fixtures';

test.skip(!process.env.E2E_ACCOUNTS, 'set E2E_ACCOUNTS=1 (creates and deletes test users)');
test.describe.configure({ mode: 'serial' });

try {
	process.loadEnvFile('.env.local');
} catch {
	// env may come from the shell
}
const {
	VITE_SUPABASE_URL: URL_,
	VITE_SUPABASE_PUBLISHABLE_KEY: PUB,
	SUPABASE_SECRET_KEY: SECRET
} = process.env;
const DB_URL = process.env.DATABASE_URL;

const run = Date.now().toString(36);
const noSession = { auth: { persistSession: false, autoRefreshToken: false } };
type TestUser = { id: string; email: string; token: string; session: unknown };
const users: Record<string, TestUser> = {};
let admin: SupabaseClient;
let sql: ReturnType<typeof postgres>;
const coupon = `E2E-${run}`.toUpperCase();

async function makeUser(label: string): Promise<TestUser> {
	const email = `e2e-${run}-${label}@example.com`;
	const { data, error } = await admin.auth.admin.createUser({
		email,
		password: crypto.randomUUID() + 'Aa1!',
		email_confirm: true,
		user_metadata: { name: 'e2e' }
	});
	if (error) throw error;
	// A real session without email or CAPTCHA: a one-time link token, redeemed at once.
	const link = await admin.auth.admin.generateLink({ type: 'magiclink', email });
	if (link.error) throw link.error;
	const anon = createClient(URL_!, PUB!, noSession);
	const { data: s, error: e2 } = await anon.auth.verifyOtp({
		token_hash: link.data.properties.hashed_token,
		type: 'magiclink'
	});
	if (e2 || !s.session) throw e2 ?? new Error('no session');
	return { id: data.user.id, email, token: s.session.access_token, session: s.session };
}

const auth = (u?: TestUser | string) => ({
	headers: u ? { Authorization: `Bearer ${typeof u === 'string' ? u : u.token}` } : {}
});

test.beforeAll(async () => {
	if (!URL_ || !PUB || !SECRET || !DB_URL) throw new Error('Supabase env missing (.env.local)');
	admin = createClient(URL_, SECRET, noSession);
	sql = postgres(DB_URL, { max: 2 });
	for (const label of ['a', 'b', 'c', 'del', 'q']) users[label] = await makeUser(label);
});

test.afterAll(async () => {
	if (!admin) return;
	const ids = Object.values(users).map((u) => u.id);
	// Every row a test user (or the throwaway coupon) could have left, then the users.
	for (const table of ['progress', 'llm_usage', 'exam_attempts', 'push_subscriptions', 'orders'])
		if (ids.length) await sql.unsafe(`delete from ${table} where user_id = any($1::uuid[])`, [ids]);
	await sql`delete from coupons where code like ${coupon + '%'}`;
	for (const id of ids) await admin.auth.admin.deleteUser(id);
	// Nothing of this run may remain.
	const left = await admin.auth.admin.listUsers({ perPage: 1000 });
	const stray = left.data.users.filter((u) => u.email?.startsWith(`e2e-${run}-`));
	await sql.end();
	expect(
		stray.map((u) => u.email),
		'test users left behind'
	).toEqual([]);
});

const studentRoutes: [string, string][] = [
	['GET', '/api/progress'],
	['POST', '/api/progress'],
	['POST', '/api/grade'],
	['POST', '/api/ocr'],
	['POST', '/api/speak'],
	['POST', '/api/chat-speak'],
	['GET', '/api/access'],
	['POST', '/api/checkout'],
	['POST', '/api/checkout/quote'],
	['DELETE', '/api/account'],
	['POST', '/api/feedback']
];

test('no token: every student API answers 401', async ({ request }) => {
	for (const [method, path] of studentRoutes) {
		const res = await request.fetch(path, { method, data: {} });
		expect(res.status(), `${method} ${path}`).toBe(401);
	}
	// SvelteKit routes the decoded path: %67 is "g".
	expect((await request.post('/api/%67rade', { data: {} })).status()).toBe(401);
	expect((await request.get('/api/pro%67ress')).status()).toBe(401);
});

test('forged, tampered and junk tokens answer 401', async ({ request }) => {
	const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url');
	const valid = users.a.token;
	const [h, p, s] = valid.split('.');
	const forged = [
		'garbage',
		'',
		`${b64({ alg: 'none', typ: 'JWT' })}.${b64({ sub: users.a.id, role: 'authenticated' })}.`,
		`${h}.${p}.${s.slice(0, -3)}AAA`,
		// valid header+signature, payload swapped to another user (signature no longer matches)
		`${h}.${b64({ ...JSON.parse(Buffer.from(p, 'base64url').toString()), sub: users.b.id })}.${s}`,
		`${h}.${b64({ sub: users.a.id, app_metadata: { role: 'admin' } })}.${s}`
	];
	for (const token of forged) {
		const res = await request.get('/api/progress', auth(token));
		expect(res.status(), token.slice(0, 40)).toBe(401);
	}
});

test('a student is refused on staff APIs', async ({ request }) => {
	for (const [method, path] of [
		['GET', '/api/kanban'],
		['GET', '/api/finance'],
		['GET', '/api/content-edit/rules'],
		['POST', '/api/content-edit']
	]) {
		const res = await request.fetch(path, { method, data: {}, ...auth(users.a) });
		expect(res.status(), `${method} ${path}`).toBe(403);
	}
});

test("progress: one student never sees or changes another's", async ({ request }) => {
	const at = Date.now();
	const item = { value: { c: { 'c-l00': 3 } }, at };
	const put = await request.post('/api/progress', {
		...auth(users.a),
		data: { items: { 'lesson-progress': item } }
	});
	expect(put.status()).toBe(200);
	const mine = await (await request.get('/api/progress', auth(users.a))).json();
	expect(mine.items['lesson-progress'].value).toEqual(item.value);
	// B sees nothing of A's.
	const theirs = await (await request.get('/api/progress', auth(users.b))).json();
	expect(theirs.items).toEqual({});
	// A user id in the body is ignored: this still writes to A.
	const spoof = await request.post('/api/progress', {
		...auth(users.a),
		data: {
			userId: users.b.id,
			user_id: users.b.id,
			items: { streak: { value: [], at, userId: users.b.id } }
		}
	});
	expect([200, 400]).toContain(spoof.status());
	const after = await (await request.get('/api/progress', auth(users.b))).json();
	expect(after.items).toEqual({});
	const rows = await sql`select user_id from progress where user_id = ${users.b.id}`;
	expect(rows.length).toBe(0);
});

test('progress: bad input is rejected', async ({ request }) => {
	const post = (data: unknown) => request.post('/api/progress', { ...auth(users.a), data });
	expect((await post({})).status()).toBe(400);
	expect((await post({ items: [] })).status()).toBe(400);
	expect((await post({ items: { 'not-a-synced-key': { value: 1, at: 1 } } })).status()).toBe(400);
	expect((await post({ items: { 'lesson-progress': { value: {}, at: 1.5 } } })).status()).toBe(400);
	expect((await post({ items: { 'lesson-progress': { value: {}, at: -1 } } })).status()).toBe(400);
	const many = Object.fromEntries(
		Array.from({ length: 101 }, (_, i) => [`quiz:attempt:x${i}`, { value: {}, at: 1 }])
	);
	expect((await post({ items: many })).status()).toBe(413);
	const huge = { value: 'x'.repeat(150_000), at: 1 };
	expect((await post({ items: { 'lesson-progress': huge } })).status()).toBe(413);
	expect(
		(
			await request.post('/api/progress', {
				...auth(users.a),
				data: 'not json {',
				headers: { ...auth(users.a).headers, 'Content-Type': 'application/json' }
			})
		).status()
	).toBe(400);
});

test('database: a signed-in student cannot read or write other tables directly', async () => {
	const asA = createClient(URL_!, PUB!, {
		...noSession,
		global: { headers: { Authorization: `Bearer ${users.a.token}` } }
	});
	const anon = createClient(URL_!, PUB!, noSession);
	for (const [who, client] of [
		['A', asA],
		['anon', anon]
	] as const)
		for (const table of [
			'progress',
			'orders',
			'llm_usage',
			'coupons',
			'exam_attempts',
			'push_subscriptions',
			'waitlist',
			'kanban_tasks'
		]) {
			const res = await client.from(table).select('*').limit(5);
			expect(res.data ?? [], `${who} reads ${table}`).toEqual([]);
		}
	// Writes are refused too.
	const w = await asA
		.from('orders')
		.insert({ user_id: users.a.id, plan_id: 'x', price: 0, discount: 0, total: 0, status: 'free' });
	expect(w.error, 'insert into orders').not.toBeNull();
	const w2 = await asA
		.from('progress')
		.insert({ user_id: users.a.id, key: 'lesson-progress', value: {}, at: 1 });
	expect(w2.error, 'insert into progress').not.toBeNull();
});

test('paywall: a student with no plan gets 402 before any LLM call', async ({ request }) => {
	const access = await (await request.get('/api/access', auth(users.a))).json();
	expect(JSON.stringify(access)).not.toMatch(/"app":"20/);
	const grade = await request.post('/api/grade', {
		...auth(users.a),
		data: { kind: 'lesson', question: 'Describe your day.', text: 'I wake up and go to school.' }
	});
	expect(grade.status()).toBe(402);
	// Nothing was counted for the student.
	const used =
		await sql`select coalesce(sum(calls),0)::int n from llm_usage where user_id = ${users.a.id}`;
	expect(used[0].n).toBe(0);
});

test('coupon: a single-use 100% code redeems exactly once under a race', async ({ request }) => {
	await sql`insert into coupons (code, percent_off, max_redemptions, expires_at, note)
		values (${coupon}, 100, 1, now() + interval '1 day', 'e2e throwaway')`;
	const racers = [users.a, users.b, users.c];
	const results = await Promise.all(
		racers.map((u) => request.post('/api/checkout', { ...auth(u), data: { coupon } }))
	);
	const codes = results.map((r) => r.status()).sort();
	const bodies = await Promise.all(results.map((r) => r.json().catch(() => ({}))));
	expect(codes, JSON.stringify(bodies)).toEqual([200, 400, 400]);
	const orders =
		await sql`select count(*)::int n from orders where coupon_code = ${coupon} and status = 'free'`;
	expect(orders[0].n).toBe(1);
	// The winner now has access; a losing request left no order behind.
	const winner = racers[results.findIndex((r) => r.status() === 200)];
	const acc = await (await request.get('/api/access', auth(winner))).json();
	expect(JSON.stringify(acc)).toMatch(/20\d\d-/);
	const again = await request.post('/api/checkout', { ...auth(winner), data: { coupon } });
	expect(again.status()).toBe(400);
	// An expired / unknown / wrong-case code.
	expect(
		(
			await request.post('/api/checkout', { ...auth(users.del), data: { coupon: 'NO-SUCH-CODE' } })
		).status()
	).toBe(400);
	expect(
		(
			await request.post('/api/checkout', { ...auth(users.del), data: { coupon: 'x'.repeat(500) } })
		).status()
	).toBe(400);
});

async function signedIn(browser: Browser, user: TestUser) {
	const ref = new URL(URL_!).hostname.split('.')[0];
	const ctx = await browser.newContext({ locale: 'he-IL', timezoneId: 'Asia/Jerusalem' });
	await ctx.addInitScript(
		([key, session]) => {
			if (sessionStorage.getItem('e2e-signed')) return;
			sessionStorage.setItem('e2e-signed', '1');
			localStorage.setItem(key, JSON.stringify(session));
			localStorage.setItem('profile', '{"units":"4","exam":null}');
			localStorage.setItem('tester-welcome-seen', '1');
			localStorage.setItem('debug-tools-enabled', 'false');
		},
		[`sb-${ref}-auth-token`, user.session] as const
	);
	return ctx;
}

const newCoupon = (suffix: string) =>
	sql`insert into coupons (code, percent_off, max_redemptions, expires_at, note)
		values (${coupon + suffix}, 100, 1, now() + interval '1 day', 'e2e throwaway')`;

test('no plan: the app shows the paywall, and a code in its box opens the app', async ({
	browser
}) => {
	const user = users.del;
	await newCoupon('-U');
	const ctx = await signedIn(browser, user);
	const page = await ctx.newPage();
	await page.goto('/app');
	await expect(page.getByRole('heading', { name: 'עוד צעד אחד' })).toBeVisible({ timeout: 20_000 });
	// A wrong code says so and stays on the paywall.
	await page.getByRole('textbox', { name: 'קוד הטבה' }).fill('NOT-A-CODE');
	await page.getByRole('button', { name: 'הפעלה' }).click();
	await expect(page.getByRole('heading', { name: 'עוד צעד אחד' })).toBeVisible();
	await page.getByRole('textbox', { name: 'קוד הטבה' }).fill(coupon.toLowerCase() + '-u');
	await page.getByRole('button', { name: 'הפעלה' }).click();
	await expect(page.getByRole('link', { name: /^C מודול C / })).toBeVisible({ timeout: 20_000 });
	await ctx.close();
});

test('two devices: a finished lesson on one shows on the other', async ({ browser, request }) => {
	const user = users.c;
	// Give the student access (the race winner may be someone else).
	const has = await sql`select 1 from orders where user_id = ${user.id} and status = 'free'`;
	if (!has.length) {
		await newCoupon('-S');
		const res = await request.post('/api/checkout', {
			...auth(user),
			data: { coupon: coupon + '-S' }
		});
		expect(res.status()).toBe(200);
	}
	const one = await signedIn(browser, user);
	const p1 = await one.newPage();
	await p1.goto('/app/unit/4/module/c');
	await p1.getByRole('link', { name: 'מתחילים' }).click();
	await playThrough(p1);
	// Wait until the sync reached the server.
	await expect
		.poll(
			async () => JSON.stringify(await (await request.get('/api/progress', auth(user))).json()),
			{ timeout: 20_000 }
		)
		.toContain('lesson-progress');
	await one.close();

	const two = await signedIn(browser, user);
	const p2 = await two.newPage();
	await p2.goto('/app/unit/4/module/c');
	await expect(p2.getByRole('link', { name: /אוצר מילים/ })).toContainText('1/12', {
		timeout: 20_000
	});
	await two.close();
});

test('a user deleted from the dashboard (no app cleanup) leaves no rows', async () => {
	const [{ n }] =
		await sql`select count(*)::int n from pg_trigger where tgname = 'purge_user_data'`;
	test.skip(n === 0, 'migration 0012 (purge_user_data trigger) is not applied to this project');
	const u = await makeUser('dash');
	users.dash = u;
	await sql`insert into progress (user_id, key, value, at) values (${u.id}, 'lesson-progress', '{}'::jsonb, 1)`;
	await sql`insert into llm_usage (user_id, activity, calls) values (${u.id}, 'ocr', 3)`;
	await sql`insert into exam_attempts (user_id, quiz_id, attempt, done_parts) values (${u.id}, 'c-exam-2', 1, 1)`;
	await sql`insert into push_subscriptions (user_id, endpoint, p256dh, auth) values (${u.id}, ${'https://e2e.invalid/' + u.id}, 'k', 'a')`;
	// What the Supabase dashboard does: delete the user only.
	expect((await admin.auth.admin.deleteUser(u.id)).error).toBeNull();
	for (const table of ['progress', 'llm_usage', 'exam_attempts', 'push_subscriptions'])
		expect(
			(await sql.unsafe(`select 1 from ${table} where user_id = $1`, [u.id])).length,
			table
		).toBe(0);
});

test('delete account: user, rows and the session are gone', async ({ request }) => {
	const u = users.del;
	await request.post('/api/progress', {
		...auth(u),
		data: { items: { 'lesson-progress': { value: { c: { 'c-l00': 1 } }, at: Date.now() } } }
	});
	expect((await sql`select 1 from progress where user_id = ${u.id}`).length).toBeGreaterThan(0);

	const res = await request.delete('/api/account', auth(u));
	expect(res.status()).toBe(204);
	expect((await admin.auth.admin.getUserById(u.id)).data.user).toBeNull();
	for (const table of ['progress', 'llm_usage', 'exam_attempts', 'push_subscriptions'])
		expect(
			(await sql.unsafe(`select 1 from ${table} where user_id = $1`, [u.id])).length,
			table
		).toBe(0);

	// The access token is still signed and unexpired: a second signed-in device must not be able
	// to write the deleted user's data back (writes and LLM calls check the user still exists).
	const after = await request.post('/api/progress', {
		...auth(u),
		data: { items: { 'lesson-progress': { value: {}, at: Date.now() } } }
	});
	expect(after.status()).toBe(401);
	expect((await request.post('/api/checkout', { ...auth(u), data: {} })).status()).toBe(401);
	expect((await sql`select 1 from progress where user_id = ${u.id}`).length).toBe(0);
});

test('quota: the 10th OCR call of the day answers 429 (counted before the LLM runs)', async ({
	request
}) => {
	const u = users.q;
	await newCoupon('-Q');
	expect(
		(await request.post('/api/checkout', { ...auth(u), data: { coupon: coupon + '-Q' } })).status()
	).toBe(200);
	// A JPEG header is enough to reach the LLM call; the dummy key makes it fail (502), no cost.
	const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0, 0, 0, 0]);
	const call = () =>
		request.post('/api/ocr', {
			headers: { ...auth(u).headers, 'Content-Type': 'image/jpeg' },
			data: jpeg
		});
	const statuses: number[] = [];
	for (let i = 0; i < 10; i++) statuses.push((await call()).status());
	expect(
		statuses.slice(0, 9).every((s) => s !== 429 && s !== 402),
		String(statuses)
	).toBe(true);
	expect(statuses[9], String(statuses)).toBe(429);
	const [row] = await sql`select calls from llm_usage where user_id = ${u.id} and activity = 'ocr'`;
	expect(row.calls).toBe(10);
	// Other activities of the same student are not blocked by the OCR limit.
	const grade = await request.post('/api/grade', {
		...auth(u),
		data: { kind: 'lesson', question: 'Describe your day.', text: 'I go to school.' }
	});
	expect(grade.status()).not.toBe(429);
});

test('exam lock: a new attempt within 24h of a finished one answers 429, after 24h it opens', async ({
	request
}) => {
	const u = users.q;
	const exam = (attempt: number) => ({ quizId: 'c-exam-2', attempt, parts: 2 });
	const essay = (attempt: number) =>
		request.post('/api/grade', {
			...auth(u),
			data: { kind: 'essay', exam: exam(attempt), question: 'Q?', text: 'I like it.' }
		});
	await sql`insert into exam_attempts (user_id, quiz_id, attempt, done_parts, done_at)
		values (${u.id}, 'c-exam-2', 111, 2, now())
		on conflict (user_id, quiz_id) do update set attempt = 111, done_parts = 2, done_at = now()`;
	expect((await essay(222)).status(), 'a new attempt right after').toBe(429);
	// The same attempt (a retry of a part) is not locked.
	expect((await essay(111)).status(), 'a retry of the same attempt').not.toBe(429);
	await sql`update exam_attempts set done_at = now() - interval '25 hours' where user_id = ${u.id}`;
	expect((await essay(222)).status(), '25h later').not.toBe(429);
	// Another exam is never locked by this one.
	const other = await request.post('/api/grade', {
		...auth(u),
		data: {
			kind: 'essay',
			exam: { quizId: 'c-exam-3', attempt: 5, parts: 2 },
			question: 'Q?',
			text: 'Hi.'
		}
	});
	expect(other.status()).not.toBe(429);
});

// ---------------------------------------------------------------------------------------------
// Email links. The admin API makes the same links the emails carry (no CAPTCHA, no email sent).
// Supabase's verify URL is followed without a browser; its redirect (tokens or an error in the
// fragment) is replayed on the app under test, which is what a student's click lands on.
const t = he.login;

async function landing(
	baseURL: string,
	type: 'signup' | 'recovery',
	email: string,
	extra: Record<string, unknown> = {}
): Promise<{ url: string; link: string }> {
	const { data, error } = await admin.auth.admin.generateLink({
		type,
		email,
		...extra,
		options: { redirectTo: `${baseURL}/app`, ...(extra.options as object) }
	} as Parameters<typeof admin.auth.admin.generateLink>[0]);
	if (error) throw error;
	const link = data.properties.action_link;
	const res = await fetch(link, { redirect: 'manual' });
	const where = res.headers.get('location');
	if (!where) throw new Error(`no redirect from the verify link (${res.status})`);
	const target = new URL(where);
	return { url: `${baseURL}/app${target.search}${target.hash}`, link };
}

test('sign-up link: confirms the email, signs in, keeps consent and name', async ({
	browser,
	baseURL
}) => {
	const email = `e2e-${run}-conf@example.com`;
	const at = new Date().toISOString();
	const { url } = await landing(baseURL!, 'signup', email, {
		password: crypto.randomUUID() + 'Aa1!',
		options: { data: { terms_accepted_at: at, marketing_consent_at: at, name: 'e2e' } }
	});
	// generateLink created the user: remember it for the cleanup.
	const created = (await admin.auth.admin.listUsers({ perPage: 1000 })).data.users.find(
		(u) => u.email === email
	)!;
	users.conf = { id: created.id, email, token: '', session: null };

	const ctx = await browser.newContext({ locale: 'he-IL' });
	const page = await ctx.newPage();
	await page.goto(url);
	// Signed in, no plan yet: the paywall, not the login screen.
	await expect(page.getByRole('heading', { name: 'עוד צעד אחד' })).toBeVisible({ timeout: 20_000 });
	const { data } = await admin.auth.admin.getUserById(created.id);
	expect(data.user?.email_confirmed_at, 'email confirmed').toBeTruthy();
	expect(data.user?.user_metadata).toMatchObject({
		terms_accepted_at: at,
		marketing_consent_at: at,
		name: 'e2e'
	});
	await ctx.close();
});

test('reset link: asks for a new password, rejects a weak one, saves a good one', async ({
	browser,
	baseURL
}) => {
	const u = await makeUser('rec');
	users.rec = u;
	const { url } = await landing(baseURL!, 'recovery', u.email);

	const ctx = await browser.newContext({ locale: 'he-IL' });
	const page = await ctx.newPage();
	await page.goto(url);
	await expect(page.getByRole('heading', { name: t.recoveryTitle })).toBeVisible({
		timeout: 20_000
	});
	// Verifying the link already touched the user: compare from here.
	const before = (await admin.auth.admin.getUserById(u.id)).data.user!.updated_at;
	const field = page.getByLabel(t.newPasswordLabel);
	// Too short: stays on the form, nothing changes.
	await field.fill('a');
	await page.getByRole('button', { name: t.savePassword }).click();
	await expect(page.getByRole('heading', { name: t.recoveryTitle })).toBeVisible();
	expect((await admin.auth.admin.getUserById(u.id)).data.user!.updated_at).toBe(before);
	const sessions = () =>
		sql`select count(*)::int n from auth.sessions where user_id = ${u.id}`.then((r) => r[0].n);
	expect(await sessions(), 'the link session plus the user').toBeGreaterThan(1);
	// A good one: saved, and the app opens (no plan: the paywall).
	await field.fill(crypto.randomUUID() + 'Bb2!');
	await page.getByRole('button', { name: t.savePassword }).click();
	await expect(page.getByRole('heading', { name: 'עוד צעד אחד' })).toBeVisible({ timeout: 20_000 });
	expect((await admin.auth.admin.getUserById(u.id)).data.user!.updated_at).not.toBe(before);
	// A reset signs the account out everywhere else: u.session (another device, made before the
	// reset) can no longer be refreshed.
	const other = await createClient(URL_!, PUB!, noSession).auth.refreshSession({
		refresh_token: (u.session as { refresh_token: string }).refresh_token
	});
	expect(other.error, 'the other session survived the password reset').not.toBeNull();
	expect(await sessions(), 'only this session is left').toBe(1);
	await ctx.close();
});

test('a used or expired link says so and offers the login', async ({ browser, baseURL }) => {
	const u = await makeUser('used');
	users.used = u;
	const first = await landing(baseURL!, 'recovery', u.email);
	expect(first.url).toContain('access_token');
	// The same link again: Supabase answers with an error in the URL.
	const again = await fetch(first.link, { redirect: 'manual' });
	const where = new URL(again.headers.get('location')!);
	expect(where.hash + where.search).toContain('otp_expired');

	const ctx = await browser.newContext({ locale: 'he-IL' });
	const page = await ctx.newPage();
	await page.goto(`${baseURL}/app${where.search}${where.hash}`);
	await expect(page.getByText(t.errors.linkExpired)).toBeVisible({ timeout: 20_000 });
	await expect(page.getByRole('heading', { name: t.title })).toBeVisible();
	await ctx.close();
});

// The real Turnstile widget (needs VITE_TURNSTILE_SITE_KEY on the dev server) does not issue a token to
// an automated browser, so the forms can't be completed here; what a student sees when the captcha
// fails (an ad blocker, a school filter) and that Supabase enforces it on all three endpoints can be.
test('captcha that never solves: each form answers 400 and says so in Hebrew', async ({
	browser,
	baseURL
}) => {
	test.skip(!process.env.VITE_TURNSTILE_SITE_KEY, 'no VITE_TURNSTILE_SITE_KEY in .env.local');
	test.setTimeout(180_000);
	const ctx = await browser.newContext({ locale: 'he-IL', viewport: { width: 1280, height: 800 } });
	const page = await ctx.newPage();
	const calls: string[] = [];
	page.on(
		'response',
		(r) => r.url().includes('/auth/v1/') && calls.push(`${new URL(r.url()).pathname} ${r.status()}`)
	);
	const crashes: string[] = [];
	page.on('pageerror', (e) => crashes.push(e.message));
	const message = 'לא הצלחנו לוודא שאתם לא רובוט. נסו שוב.';

	// The widget stays pending for a bot; a click makes it fail, which unlocks the button.
	async function unlock(name: string) {
		const button = page.getByRole('button', { name, exact: true });
		for (let attempt = 0; attempt < 5 && !(await button.isEnabled()); attempt++) {
			await page.waitForTimeout(5000);
			const frame = page.frames().find((f) => f.url().includes('challenges.cloudflare.com'));
			const box = frame ? await (await frame.frameElement()).boundingBox() : null;
			if (box) await page.mouse.click(box.x + box.width - 28, box.y + box.height / 2);
			await page.waitForTimeout(3000);
		}
		await expect(button).toBeEnabled({ timeout: 10_000 });
	}

	await page.goto(`${baseURL}/app`);
	await page.getByLabel(t.emailLabel).fill('e2e-nobody@example.com');
	await page.getByLabel(t.passwordLabel).fill('Wrong-Password-1!');
	await unlock(t.signIn);
	await page.getByRole('button', { name: t.signIn, exact: true }).click();
	await expect(page.getByText(message)).toBeVisible();

	await page.goto(`${baseURL}/app`);
	await page.getByRole('button', { name: t.forgot }).click();
	await page.getByLabel(t.emailLabel).fill('e2e-nobody@example.com');
	await unlock(t.sendLink);
	await page.getByRole('button', { name: t.sendLink, exact: true }).click();
	await expect(page.getByText(message)).toBeVisible();

	await page.goto(`${baseURL}/app`);
	await page.getByRole('button', { name: t.toSignUp }).click();
	await page.getByLabel(t.emailLabel).fill('e2e-nobody@example.com');
	await page.getByLabel(/^סיסמה/).fill('Some-Password-123!');
	await page.getByRole('checkbox').first().check();
	await unlock(t.signUp);
	await page.getByRole('button', { name: t.signUp, exact: true }).click();
	await expect(page.getByText(message)).toBeVisible();

	expect(
		calls
			.filter((c) => c.endsWith('400'))
			.map((c) => c.split(' ')[0])
			.sort()
	).toEqual(['/auth/v1/recover', '/auth/v1/signup', '/auth/v1/token']);
	expect(crashes).toEqual([]);
	// Refused before anything was checked: no account came of it.
	const created = (await admin.auth.admin.listUsers({ perPage: 1000 })).data.users.some(
		(u) => u.email === 'e2e-nobody@example.com'
	);
	expect(created).toBe(false);
	await ctx.close();
});

// Delete account (Settings): held, not tapped. A student with a plan, signed in, on /app/settings.
async function onSettings(
	browser: Browser,
	baseURL: string,
	request: APIRequestContext,
	label: string
) {
	const u = await makeUser(label);
	users[label] = u;
	const code = `${coupon}-${label.toUpperCase()}`;
	await sql`insert into coupons (code, percent_off, max_redemptions, expires_at, note)
		values (${code}, 100, 1, now() + interval '1 day', 'e2e throwaway')`;
	expect(
		(await request.post('/api/checkout', { ...auth(u), data: { coupon: code } })).status()
	).toBe(200);
	const ctx = await signedIn(browser, u);
	const page = await ctx.newPage();
	await page.goto(`${baseURL}/app/settings`);
	const del = page.getByRole('button', { name: /מחיקת חשבון/ });
	await expect(del).toBeVisible({ timeout: 20_000 });
	const exists = async () => (await admin.auth.admin.getUserById(u.id)).data.user !== null;
	return { ctx, page, del, exists, u };
}

test('delete account: a tap or a short hold does nothing, a long hold deletes', async ({
	browser,
	baseURL,
	request
}) => {
	const { ctx, page, del, exists } = await onSettings(browser, baseURL!, request, 'hold');
	await del.click(); // a tap
	await del.hover();
	await page.mouse.down(); // a hold that is let go too early
	await page.waitForTimeout(600);
	await page.mouse.up();
	await page.waitForTimeout(800);
	expect(await exists(), 'a tap or a short hold deleted the account').toBe(true);
	await del.hover();
	await page.mouse.down();
	await page.waitForTimeout(2300);
	await page.mouse.up();
	await expect.poll(exists, { timeout: 20_000 }).toBe(false);
	await expect(page.getByRole('heading', { name: t.title })).toBeVisible({ timeout: 20_000 });
	await ctx.close();
});

test('delete account: holding Enter works, a quick key press does not', async ({
	browser,
	baseURL,
	request
}) => {
	const { ctx, page, del, exists } = await onSettings(browser, baseURL!, request, 'keyh');
	await del.focus();
	await page.keyboard.press('Enter'); // down and up at once
	await page.waitForTimeout(800);
	expect(await exists()).toBe(true);
	await page.keyboard.down('Enter');
	await page.waitForTimeout(2300);
	await page.keyboard.up('Enter');
	await expect.poll(exists, { timeout: 20_000 }).toBe(false);
	await ctx.close();
});

test('delete account: assistive technology (a plain click) arms it, the next click confirms', async ({
	browser,
	baseURL,
	request
}) => {
	const { ctx, page, del, exists } = await onSettings(browser, baseURL!, request, 'at');
	await del.dispatchEvent('click'); // no pointer, no key: what a screen reader sends
	await expect(page.getByText(he.settings.deleteConfirm)).toBeVisible();
	expect(await exists()).toBe(true);
	await del.dispatchEvent('click');
	await expect.poll(exists, { timeout: 20_000 }).toBe(false);
	await ctx.close();
});

test('captcha script that never arrives: the form says it is checking, then explains', async ({
	browser,
	baseURL
}) => {
	test.skip(!process.env.VITE_TURNSTILE_SITE_KEY, 'no VITE_TURNSTILE_SITE_KEY in .env.local');
	const ctx = await browser.newContext({ locale: 'he-IL' });
	const page = await ctx.newPage();
	await page.route('**/challenges.cloudflare.com/**', () => {}); // never answered
	await page.goto(`${baseURL}/app`);
	await expect(page.getByText(t.captchaLoading)).toBeVisible({ timeout: 20_000 });
	await expect(page.getByRole('button', { name: t.signIn, exact: true })).toBeDisabled();
	await expect(page.getByText(t.captchaSlow)).toBeVisible({ timeout: 15_000 });
	await ctx.close();
});

test('a reset link opened in another tab does not put the form in the tab that asked', async ({
	browser,
	baseURL
}) => {
	const u = await makeUser('rtab');
	users.rtab = u;
	const { url } = await landing(baseURL!, 'recovery', u.email);
	const ctx = await browser.newContext({ locale: 'he-IL' });
	const asked = await ctx.newPage(); // the tab that asked for the reset
	await asked.goto(`${baseURL}/app`);
	await expect(asked.getByRole('heading', { name: t.title })).toBeVisible({ timeout: 20_000 });
	const opened = await ctx.newPage(); // the tab the email link opens
	await opened.goto(url);
	await expect(opened.getByRole('heading', { name: t.recoveryTitle })).toBeVisible({
		timeout: 20_000
	});
	// Same browser, so one session: the asking tab is signed in (the app), never a second form.
	await expect(asked.getByRole('heading', { name: 'עוד צעד אחד' })).toBeVisible({
		timeout: 20_000
	});
	await expect(asked.getByRole('heading', { name: t.recoveryTitle })).toHaveCount(0);
	await ctx.close();
});

test('logout still ends the session when the server never answers', async ({
	browser,
	baseURL
}) => {
	const u = await makeUser('lo');
	users.lo = u;
	const ctx = await signedIn(browser, u);
	const page = await ctx.newPage();
	await page.route('**/auth/v1/logout*', () => {}); // a hung call: never answered
	await page.goto(`${baseURL}/app/settings`);
	await page.getByRole('button', { name: 'יציאה מהחשבון' }).click();
	// Within the wait (4 s), not "nothing happens until a refresh".
	await expect(page.getByRole('heading', { name: t.title })).toBeVisible({ timeout: 10_000 });
	expect(
		await page.evaluate(() => Object.keys(localStorage).filter((k) => /^sb-.+-auth-token/.test(k)))
	).toEqual([]);
	await ctx.close();
});
