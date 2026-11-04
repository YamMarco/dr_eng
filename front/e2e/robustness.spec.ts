// Break-it checks: malformed stored values (an old version, a bad sync, a hand edit) and
// hand-typed URLs must never blank the app.
import { test, expect, he } from './fixtures';

const corrupt: Record<string, string[]> = {
	'activity-days': ['{}', '123', 'null', '"x"'],
	'module-location': ['null', '{"c":null}', '[]'],
	'speak-stats': ['null', '{"a":null}'],
	'quiz:attempt:c-exam-2': ['{}', '{"score":{}}', '[]'],
	'quiz:results:c-exam-2': ['{}', '[null]', '"x"'],
	'quiz:progress:c-exam-2': ['{}', '[]'],
	profile: ['{"units":"9","exam":"bogus"}', '{"units":"4","exam":{"season":5,"year":"x"}}']
};
const pages = ['/app', '/app/unit/4/module/c', '/app/unit/4/module/c/exam', '/app/streak'];

for (const [key, values] of Object.entries(corrupt))
	for (const value of values)
		test(`stored ${key} = ${value}`, async ({ page }) => {
			await page.addInitScript(
				([k, v]) => {
					localStorage.setItem('tester-welcome-seen', '1');
					if (k !== 'profile') localStorage.setItem('profile', '{"units":"4","exam":null}');
					localStorage.setItem(k, v);
				},
				[key, value]
			);
			for (const path of pages) {
				await page.goto(path);
				await expect(page.getByRole('navigation').first(), path).toBeVisible();
			}
		});

test.describe('rushed and interrupted', () => {
	test.use({
		studentState: {
			profile: { units: '4', exam: null },
			'tester-welcome-seen': '1',
			'lesson-progress': { c: { 'c-5cd02dfa': 1 } },
			'activity-days': ['2020-01-01']
		}
	});

	test('a double tap on "check" still shows the feedback', async ({ page }) => {
		await page.goto('/app/unit/4/module/c/lessons?lesson=c-q-words-1');
		const runner = page.getByRole('dialog').first();
		const footer = runner.locator('button:not(main button):not([aria-label])').last();
		for (let i = 0; i < 30 && (await footer.isEnabled()); i++) await footer.click();
		const question = (await runner.getByRole('main').innerText()).slice(0, 40);
		await runner.getByRole('main').getByRole('button').first().click();
		await footer.dblclick();
		await expect(runner.getByRole('main')).toContainText(question);
	});

	test('back mid-exam asks before dropping it', async ({ page }) => {
		await page.goto('/app/unit/4/module/c/exam');
		await page.getByRole('link', { name: /Smart Glasses/ }).click();
		await page.getByRole('button', { name: 'התחלת מבחן' }).click();
		await page.goBack();
		await expect(page.getByRole('dialog', { name: 'לצאת מהמבחן?' })).toBeVisible();
		await page.getByRole('button', { name: 'המשך במבחן' }).click();
		await expect(page.getByRole('button', { name: 'זמן שנותר' })).toBeVisible();
	});

	test('offline at submit: "not graded" with a retry, never stuck', async ({
		page,
		context,
		problems
	}) => {
		await page.goto('/app/unit/4/module/c/exam/c-exam-2');
		await page.getByRole('button', { name: 'התחלת מבחן' }).click();
		await page
			.getByRole('button', { name: /^שאלה \d+$/ })
			.last()
			.click();
		await page
			.getByRole('main')
			.getByRole('textbox')
			.fill(
				'I think this is a good idea because it helps people a lot. They can walk in the street, read signs and find the bus. For example a student can read the board in class.'
			);
		await context.setOffline(true);
		await page.getByRole('button', { name: 'הגש מבחן' }).click();
		await expect(page.getByRole('button', { name: 'בדיקה חוזרת' }).first()).toBeVisible({
			timeout: 15_000
		});
		await expect(page.getByText('בודקים את התשובות הפתוחות...')).toHaveCount(0);
		problems.length = 0;
	});
});

test.describe('two tabs', () => {
	test.use({
		studentState: {
			profile: { units: '4', exam: null },
			'tester-welcome-seen': '1',
			'debug-unlock-all': 'true',
			'activity-days': ['2020-01-01']
		}
	});

	test("a lesson finished in one tab isn't undone by the other", async ({ page, context }) => {
		const skipRound = async (p: typeof page) => {
			const runner = p.getByRole('dialog').first();
			await runner.getByRole('button', { name: 'כלי דיבוג' }).click();
			await runner.getByRole('button', { name: 'דלג על סבב (דיבוג)' }).click();
		};
		await page.goto('/app/unit/4/module/c/lessons');
		const other = await context.newPage();
		await other.goto('/app/unit/4/module/c/lessons?lesson=c-5cd02dfa');
		await skipRound(other);
		await expect
			.poll(() => other.evaluate(() => localStorage.getItem('lesson-progress')))
			.toContain('c-5cd02dfa');
		// The first tab never reloaded: it opens and finishes another lesson.
		await page.locator('[data-lesson-node-id="c-q-words-1"] button').first().click();
		await page
			.getByRole('button', { name: /מתחילים/ })
			.first()
			.click();
		await skipRound(page);
		const progress = await page.evaluate(() =>
			JSON.parse(localStorage.getItem('lesson-progress')!)
		);
		expect(Object.keys(progress.c).sort()).toEqual(['c-5cd02dfa', 'c-q-words-1']);
	});
});

// A phone whose clock ran ahead, then got fixed: what it saved then is dated in the future.
const takenAt = (label: string, at: number, locked: boolean) =>
	test.describe(`exam taken ${label}`, () => {
		test.use({
			studentState: {
				profile: { units: '4', exam: null },
				'tester-welcome-seen': '1',
				'quiz:results:c-exam-2': [{ at, percent: 70 }]
			}
		});
		test(locked ? 'is locked for 24h' : "isn't locked", async ({ page }) => {
			await page.goto('/app/unit/4/module/c/exam/c-exam-2');
			await expect(page.getByRole('heading', { name: he.quizzes.scoreboardTitle })).toBeVisible();
			await expect(page.getByRole('button', { name: he.quizzes.retakeButton })).toHaveCount(
				locked ? 0 : 1
			);
		});
	});
takenAt('an hour ago', Date.now() - 60 * 60_000, true);
takenAt("'next year' (clock ran ahead)", Date.now() + 365 * 24 * 60 * 60_000, false);
