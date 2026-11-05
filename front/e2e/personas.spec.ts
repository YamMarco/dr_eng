// Phase 6: persona runs. Each persona has a goal, a device and habits: it does the usual
// things first, then tries to break them. Accounts off, AI mocked (the real-AI probes are
// in docs/handoffs/test-findings.md). Run: `npm run e2e:persona` (one worker, phone).
import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { test, expect, he, playThrough, states, type StudentState } from './fixtures';

/** Strings a hostile or careless user types into a text field. */
const HOSTILE = [
	'<img src=x onerror="window.__xss=1">',
	'"><script>window.__xss=1</script>',
	'javascript:window.__xss=1',
	'[x](javascript:window.__xss=1)',
	'{{7*7}} ${7*7} <%= 7*7 %>',
	"'; DROP TABLE users; --",
	'‮evil‬ ​\u0000 �',
	'😀'.repeat(300),
	'א'.repeat(5000),
	'a\n'.repeat(500),
	' '.repeat(40),
	'__proto__ constructor toString'
];

const noXss = (page: Page) => page.evaluate(() => (window as { __xss?: number }).__xss);

/** The root error boundary (a crash) shows this instead of the app. */
async function expectNotCrashed(page: Page, where: string) {
	await expect(page.getByText(he.error.crashSubtitle), `crashed at ${where}`).toHaveCount(0);
}

test.use({ reducedMotion: 'reduce' });

// ---------------------------------------------------------------------------------------
test.describe('persona: weak 4-unit student on a phone, rushes and taps wrong answers', () => {
	test.use({ studentState: states.new, mocks: { grade: 'weak' } });

	test('onboards with a hostile name, then rushes the first lesson', async ({ page }) => {
		await page.goto('/app');
		const t = he.onboarding;
		for (const name of HOSTILE.slice(0, 4)) {
			await page.getByRole('textbox', { name: t.nameTitle }).fill(name);
			await expect(page.getByRole('button', { name: t.next })).toBeEnabled();
		}
		await page.getByRole('textbox', { name: t.nameTitle }).fill(HOSTILE[0]);
		await page.getByRole('button', { name: t.next }).click();
		await page.getByRole('radio', { name: t.units4 }).click();
		await page.getByRole('button', { name: t.next }).click();
		await page.getByRole('radio', { name: t.examUnknown }).click();
		await page.getByRole('button', { name: t.finish }).click();
		await page.getByRole('dialog').getByRole('button', { name: he.common.close }).first().click();
		await expect(page.getByRole('navigation', { name: he.nav.mainNav })).toBeVisible();
		// The name is text, never markup.
		expect(await noXss(page), 'name executed as HTML').toBeUndefined();
		await expect(page.locator('main img[src="x"]')).toHaveCount(0);

		// Rushes the opening lesson: the footer button first, garbage text, wrong options.
		await page.goto('/app/unit/4/module/c');
		await page.getByRole('link', { name: 'מתחילים' }).click();
		const seen = await playThrough(page, 'asdf qwer');
		expect(seen.length).toBeGreaterThan(2);
		await expectNotCrashed(page, 'after the first lesson');
	});

	test('mashes the answer and exit buttons without breaking the runner', async ({ page }) => {
		await page.goto('/app/unit/4/module/c/lessons?lesson=c-q-words-1');
		const runner = page.getByRole('dialog').first();
		const footer = runner.locator('button:not(main button):not([aria-label])').last();
		for (let i = 0; i < 40; i++) {
			const opts = runner.getByRole('main').getByRole('button');
			const n = await opts.count();
			if (n)
				await opts
					.nth(i % n)
					.click({ timeout: 300 })
					.catch(() => {});
			await footer.click({ timeout: 300, force: true }).catch(() => {});
		}
		await expectNotCrashed(page, 'after mashing');
		await expect(page.getByRole('dialog').first().or(page.getByRole('main').first())).toBeVisible();
	});
});

// ---------------------------------------------------------------------------------------
test.describe('persona: strong 5-unit student going straight to exams', () => {
	test.use({
		studentState: { profile: { units: '5', exam: null }, 'tester-welcome-seen': '1' }
	});

	test('hand-typed exam, lesson and module URLs never blank the app', async ({
		page,
		problems
	}) => {
		const urls = [
			'/app/unit/5/module/g',
			'/app/unit/5/module/g/exam',
			'/app/unit/4/module/c/exam/no-such-exam',
			'/app/unit/4/module/c/exam/c-exam-2?x=<script>',
			'/app/unit/4/module/c/lessons?lesson=c-l99',
			'/app/unit/4/module/c/lessons?lesson=<img src=x onerror=1>',
			'/app/unit/4/module/c/lessons?lesson=' + 'a'.repeat(3000),
			'/app/unit/9/module/z',
			'/app/unit/4/module/c/words?card=-1',
			'/app/unit/4/module/e/words?x=%00',
			'/app/unit/4/module/c/chat',
			'/app/settings?theme=<b>',
			'/checkout?plan=<script>&coupon=' + 'x'.repeat(2000),
			'/plans?ref=%27%22'
		];
		for (const u of urls) {
			const res = await page.goto(u).catch(() => null);
			if (res) expect(res.status(), u).toBeLessThan(500);
			await expectNotCrashed(page, u);
			expect(await noXss(page), u).toBeUndefined();
		}
		// 404s on junk URLs are expected; a page error is not.
		const real = problems.filter((x) => x.startsWith('pageerror'));
		problems.length = 0;
		expect(real).toEqual([]);
	});
});

// ---------------------------------------------------------------------------------------
test.describe('persona: keyboard-only user', () => {
	test('reaches and operates a lesson with the keyboard alone', async ({ page }) => {
		await page.goto('/app/unit/4/module/c');
		const start = page.getByRole('link', { name: 'מתחילים' });
		await start.focus();
		await page.keyboard.press('Enter');
		const runner = page.getByRole('dialog').first();
		await expect(runner).toBeVisible();
		// Focus must be inside the dialog and stay there while tabbing.
		for (let i = 0; i < 25; i++) {
			await page.keyboard.press('Tab');
			const inside = await page.evaluate(() => {
				const d = document.querySelector('[role="dialog"]');
				return !!d && d.contains(document.activeElement);
			});
			expect(inside, `focus escaped the dialog on tab ${i + 1}`).toBe(true);
		}
		const axe = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa'])
			.disableRules(['color-contrast'])
			.analyze();
		expect(axe.violations.map((v) => v.id)).toEqual([]);
		await page.keyboard.press('Escape');
		await expectNotCrashed(page, 'after Escape');
	});

	test('every control on the main pages has an accessible name', async ({ page }) => {
		for (const path of [
			'/app',
			'/app/settings',
			'/app/unit/4/module/c',
			'/app/unit/4/module/c/exam'
		]) {
			await page.goto(path);
			const nameless = await page.evaluate(() =>
				[...document.querySelectorAll('button, a[href], input, select, textarea, [role=button]')]
					.filter((el) => {
						const r = el.getBoundingClientRect();
						if (!r.width || !r.height) return false;
						const label =
							el.getAttribute('aria-label') ||
							el.getAttribute('aria-labelledby') ||
							(el as HTMLElement).innerText?.trim() ||
							el.getAttribute('title') ||
							(el as HTMLInputElement).labels?.[0]?.textContent?.trim() ||
							(el.querySelector('img')?.getAttribute('alt') ?? '');
						return !label;
					})
					.map((el) => el.outerHTML.slice(0, 80))
			);
			expect(nameless, `controls without a name on ${path}`).toEqual([]);
		}
	});
});

// ---------------------------------------------------------------------------------------
test.describe('persona: distracted student (leaves, loses network, storage fails)', () => {
	test('localStorage that throws (private mode / full disk) does not crash the app', async ({
		page
	}) => {
		await page.addInitScript(() => {
			const boom = () => {
				throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
			};
			Storage.prototype.setItem = boom;
		});
		for (const path of ['/app', '/app/settings', '/app/unit/4/module/c', '/app/streak']) {
			await page.goto(path);
			await expectNotCrashed(page, path);
		}
		await page.goto('/app/unit/4/module/c');
		await page.getByRole('link', { name: 'מתחילים' }).click();
		await playThrough(page);
		await expectNotCrashed(page, 'finishing a lesson with failing storage');
	});

	// Known (test-findings.md, "to fix later"): reads of `localStorage` itself throw in ~20 files.
	test.fixme('storage blocked entirely (cookies off) does not crash the app', async ({ page }) => {
		await page.addInitScript(() => {
			Object.defineProperty(window, 'localStorage', {
				get() {
					throw new DOMException('The operation is insecure.', 'SecurityError');
				}
			});
		});
		await page.goto('/app');
		await expectNotCrashed(page, '/app');
		await expect(page.getByText('500 Internal Error')).toHaveCount(0);
		await expect(page.getByRole('main').first()).toBeVisible();
	});

	test('offline mid-lesson, then back online', async ({ page, context, problems }) => {
		await page.goto('/app/unit/4/module/c');
		await page.getByRole('link', { name: 'מתחילים' }).click();
		await context.setOffline(true);
		const runner = page.getByRole('dialog').first();
		const next = runner.getByRole('button', { name: 'המשך', exact: true });
		for (let i = 0; i < 3 && (await next.isVisible()); i++) await next.click();
		await context.setOffline(false);
		// Lazy assets (fonts) that failed while offline are not bugs.
		problems.length = 0;
		await playThrough(page);
		await expectNotCrashed(page, 'after reconnecting');
	});

	test('cleared storage in another tab, then keeps working', async ({ page, context }) => {
		await page.goto('/app/unit/4/module/c');
		const other = await context.newPage();
		await other.goto('/app/settings');
		await other.evaluate(() => localStorage.clear());
		await other.close();
		await page.reload();
		await expectNotCrashed(page, 'after storage cleared elsewhere');
		await expect(page.getByRole('main').first()).toBeVisible();
	});

	test('reload mid-lesson and mid-exam, then continue', async ({ page }) => {
		await page.goto('/app/unit/4/module/c/lessons?lesson=c-q-words-1');
		await page.reload();
		await expectNotCrashed(page, 'reload mid-lesson');
		await page.goto('/app/unit/4/module/c/exam/c-exam-2');
		await page.getByRole('button', { name: he.quiz.startButton }).click();
		await page.reload();
		await expectNotCrashed(page, 'reload mid-exam');
	});
});

// ---------------------------------------------------------------------------------------
test.describe('persona: parent checking privacy, plans and checkout', () => {
	test('reads the policy pages; every link works', async ({ page, request }) => {
		const origin = new URL(page.url() === 'about:blank' ? 'http://localhost:4173' : page.url())
			.origin;
		for (const path of ['/', '/about', '/plans', '/privacy', '/terms', '/accessibility']) {
			await page.goto(path);
			const hrefs = await page
				.locator('a[href]')
				.evaluateAll((as) => [...new Set(as.map((a) => (a as HTMLAnchorElement).href))]);
			for (const href of hrefs) {
				const u = new URL(href);
				if (u.origin !== origin || (u.hash && u.pathname === new URL(page.url()).pathname))
					continue;
				const res = await request.get(u.pathname + u.search);
				expect(res.status(), `${path} -> ${href}`).toBeLessThan(400);
			}
			await expect(page.locator('h1')).toHaveCount(1);
		}
	});

	test('the plans page shows prices and checkout takes junk plan ids', async ({ page }) => {
		await page.goto('/plans');
		await expect(page.getByText(/₪/).first()).toBeVisible();
		for (const q of [
			'?plan=__proto__',
			'?plan=constructor',
			'?plan=',
			'?plan=%00',
			'?plan=cobe&coupon=<b>'
		]) {
			await page.goto('/checkout' + q);
			await expectNotCrashed(page, 'checkout' + q);
			expect(await noXss(page)).toBeUndefined();
		}
	});
});

// ---------------------------------------------------------------------------------------
// The monkey: random taps, typing, back/forward and reloads for a fixed number of steps
// (seeded: a failure prints the seed, rerun with PERSONA_SEED=<n>).
function rng(seed: number) {
	return () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
}

const SEED = Number(process.env.PERSONA_SEED ?? 20261105);
const STEPS = Number(process.env.PERSONA_STEPS ?? 120);

for (const [label, state] of [
	['new student', states.new],
	[
		'mid-course student',
		{
			profile: { units: '4', exam: null },
			'tester-welcome-seen': '1',
			'lesson-progress': { c: { 'c-5cd02dfa': 1 } },
			'activity-days': ['2020-01-01']
		}
	]
] as [string, StudentState][])
	test.describe(`persona: monkey (${label})`, () => {
		test.use({ studentState: state });
		test.setTimeout(240_000);

		test(`${STEPS} random actions, seed ${SEED}`, async ({ page, problems }) => {
			const rand = rng(SEED);
			const pick = <T>(xs: T[]) => xs[Math.floor(rand() * xs.length)];
			await page.goto('/app');
			const log: string[] = [];
			for (let i = 0; i < STEPS; i++) {
				const r = rand();
				try {
					if (r < 0.62) {
						const targets = page.locator(
							'button:visible:not([disabled]), a[href^="/"]:visible, [role=radio]:visible, [role=checkbox]:visible'
						);
						const n = await targets.count();
						if (n) {
							const el = targets.nth(Math.floor(rand() * n));
							log.push(
								`click ${(await el.innerText({ timeout: 500 })).slice(0, 20).replace(/\n/g, ' ')}`
							);
							await el.click({ timeout: 1500, noWaitAfter: true });
						}
					} else if (r < 0.8) {
						const boxes = page.locator(
							'input[type=text]:visible, input:not([type]):visible, textarea:visible'
						);
						const n = await boxes.count();
						if (n) {
							const text = pick(HOSTILE);
							log.push(`type ${text.slice(0, 15)}`);
							await boxes.nth(Math.floor(rand() * n)).fill(text, { timeout: 1500 });
						}
					} else if (r < 0.87) {
						log.push('back');
						await page.goBack({ timeout: 3000 });
					} else if (r < 0.92) {
						log.push('forward');
						await page.goForward({ timeout: 3000 });
					} else if (r < 0.96) {
						log.push('reload');
						await page.reload({ timeout: 8000 });
					} else {
						log.push('key');
						await page.keyboard.press(
							pick(['Escape', 'Enter', 'Tab', 'Space', 'ArrowLeft', 'ArrowRight'])
						);
					}
				} catch {
					// element gone, navigation raced: that is the monkey's life
				}
				if (await page.getByText(he.error.crashSubtitle).count()) {
					throw new Error(`crash after step ${i} (seed ${SEED}): ${log.slice(-8).join(' > ')}`);
				}
			}
			expect(await noXss(page)).toBeUndefined();
			// A 404 from a random back/forward is not a bug; console/page errors are.
			const real = problems.filter((p) => !p.startsWith('http 4'));
			problems.length = 0;
			expect(real, `seed ${SEED}; last steps: ${log.slice(-8).join(' > ')}`).toEqual([]);
		});
	});
