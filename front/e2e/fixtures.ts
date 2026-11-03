// Shared e2e setup: Hebrew copy from the i18n dict, seeded student states, API mocks,
// and a guard that fails a test on console errors or failed requests.
import { test as base, expect, type Page } from '@playwright/test';
import { he } from '../src/lib/i18n/locales/he';

export { expect, he };

/** localStorage values per student state (written before the first page script runs). */
export const states = {
	new: {},
	onboarded: {
		profile: { units: '4', exam: null },
		'tester-welcome-seen': '1'
	}
} satisfies Record<string, Record<string, unknown>>;

export type StudentState = Record<string, unknown>;

/** Seeds localStorage once per test (later navigations keep what the app wrote). */
export async function seed(page: Page, state: StudentState) {
	await page.addInitScript((s) => {
		if (sessionStorage.getItem('e2e-seeded')) return;
		sessionStorage.setItem('e2e-seeded', '1');
		for (const [k, v] of Object.entries(s))
			localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
	}, state);
}

const PIXEL = Buffer.from('R0lGODlhAQABAAAAACw=', 'base64');

type GradeBody = { kind: string; items?: { id: string; points: number }[]; rubric?: string };

/** Canned AI replies. `grade`: 'good' passes everything, 'weak' fails, or an HTTP status. */
export type Mocks = { grade: 'good' | 'weak' | number };

export async function mockApi(page: Page, mocks: Mocks) {
	await page.route('**/api/grade', async (route) => {
		if (typeof mocks.grade === 'number') return route.fulfill({ status: mocks.grade, body: '{}' });
		const good = mocks.grade === 'good';
		const body = route.request().postDataJSON() as GradeBody;
		if (body.kind === 'lesson') return route.fulfill({ json: { pass: good, marks: [] } });
		if (body.kind === 'reading')
			return route.fulfill({
				json: {
					answers: body.items!.map((i) => ({ id: i.id, score: good ? i.points : 0, marks: [] }))
				}
			});
		const scores = good
			? { content: 10, vocabulary: 10, language: 10, mechanics: 10 }
			: { content: 1, vocabulary: 1, language: 1, mechanics: 1 };
		return route.fulfill({ json: { scores, marks: [] } });
	});
	// Word-card images live in Supabase Storage (no Supabase URL in tests): a 1px stand-in.
	await page.route('**/storage/v1/object/public/**', (route) =>
		route.fulfill({ contentType: 'image/gif', body: PIXEL })
	);
	await page.route('**/api/feedback', (route) => route.fulfill({ json: { ok: true } }));
}

type Fixtures = {
	/** Seeded before the page loads. Default: onboarded. */
	studentState: StudentState;
	mocks: Mocks;
	/** Console errors and failed requests seen so far; checked after each test. */
	problems: string[];
};

export const test = base.extend<Fixtures>({
	studentState: [states.onboarded, { option: true }],
	mocks: [{ grade: 'good' }, { option: true }],
	// eslint-disable-next-line no-empty-pattern -- Playwright fixtures must destructure
	problems: async ({}, use) => use([]),
	page: async ({ page, studentState, mocks, problems }, use) => {
		page.on('console', (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`));
		page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
		page.on('requestfailed', (r) => {
			const why = r.failure()?.errorText ?? '';
			// Navigating away aborts in-flight media/prefetch: not a bug.
			if (!why.includes('ERR_ABORTED')) problems.push(`requestfailed: ${r.url()} ${why}`);
		});
		page.on(
			'response',
			(r) => r.status() >= 400 && problems.push(`http ${r.status()}: ${r.url()}`)
		);
		await seed(page, studentState);
		await mockApi(page, mocks);
		await use(page);
		expect(problems, 'console errors / failed requests').toEqual([]);
	}
});

const NOT_ANSWERS = /^(השמעה|השמעה לאט|יציאה מהשיעור|כלי דיבוג|משוב)$/;

/**
 * Plays a lesson-runner dialog to its finish screen like a hurried student: the footer
 * button when it's enabled, else the first option or some typed text. Returns the screens seen.
 */
export async function playThrough(page: Page, typed = 'answer') {
	const runner = page.getByRole('dialog').first();
	const done = runner.getByRole('heading', { name: 'כל הכבוד!' });
	const seen: string[] = [];
	for (let i = 0; i < 150; i++) {
		if (await done.isVisible()) return seen;
		const main = runner.getByRole('main');
		// The footer's main button: outside the screen, no icon-only aria-label.
		const footer = runner.locator('button:not(main button):not([aria-label])').last();
		seen.push(((await main.innerText().catch(() => '')) ?? '').slice(0, 40));
		if (await footer.isEnabled().catch(() => false)) {
			await footer.click();
			continue;
		}
		const box = main.getByRole('textbox');
		if (await box.count()) {
			for (const b of await box.all()) await b.fill(typed);
		} else {
			const options = main.getByRole('button').filter({ hasNotText: NOT_ANSWERS });
			const enabled = options.and(page.locator(':enabled'));
			if (await enabled.count()) await enabled.first().click();
		}
		if (await footer.isEnabled().catch(() => false)) await footer.click();
		else throw new Error(`stuck on screen: ${seen.at(-1)}`);
	}
	throw new Error('no finish screen after 150 steps');
}
