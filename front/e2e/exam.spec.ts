// Phase 3: an exam from start to report, with mocked grading (good, weak, error, quota).
import type { Page } from '@playwright/test';
import { test, expect, he } from './fixtures';

const q = he.quiz;
const ESSAY =
	'I think smart glasses are a great idea for blind people. They can help them walk in the street, read signs and find the bus stop. ' +
	'For example, a blind student can read the board in class. However, the glasses are expensive, so not every family can buy them. ' +
	'In my opinion, the government should help families pay for them, because everyone deserves to see the world. ' +
	'I also believe that companies will make them cheaper and better in the future.';

/** Answers every question (first option, or an English sentence) and submits. */
async function takeExam(page: Page, quizId = 'c-exam-2', essay = ESSAY) {
	await page.goto(`/app/unit/4/module/c/exam/${quizId}`);
	await page.getByRole('button', { name: q.startButton }).click();
	const exam = page.getByRole('dialog');
	const next = exam.getByRole('button', { name: q.nextButton, exact: true });
	const submit = exam.getByRole('button', { name: q.submitButton });
	for (let i = 0; i < 40 && !(await submit.isVisible()); i++) {
		const main = exam.getByRole('main');
		const box = main.getByRole('textbox');
		if (await box.count()) {
			for (const b of await box.all())
				await b.fill('The glasses help blind people read signs and find their way.');
		} else if (await main.getByRole('button').count()) {
			await main.getByRole('button').first().click();
		}
		if (await next.isVisible()) await next.click();
	}
	// The essay is the last screen: write it before submitting.
	const box = exam.getByRole('main').getByRole('textbox');
	if (await box.count()) await box.first().fill(essay);
	await submit.click();
}

test('a short essay can still be submitted (graded with a length deduction)', async ({ page }) => {
	await takeExam(page, 'c-exam-2', 'I like this idea because it helps blind people a lot.');
	await expect(
		page
			.getByRole('heading', { name: q.passedTitle })
			.or(page.getByRole('heading', { name: q.failedTitle }))
	).toBeVisible({ timeout: 15_000 });
});

test('good answers: a passing report with the essay criteria', async ({ page }) => {
	await takeExam(page);
	await expect(page.getByRole('heading', { name: q.passedTitle })).toBeVisible({ timeout: 15_000 });
	for (const name of Object.values(q.criterion))
		await expect(page.getByText(name).first()).toBeVisible();
});

test('an exam as the first thing of the day counts for the streak without the popup', async ({
	page
}) => {
	await takeExam(page);
	await expect(page.getByRole('heading', { name: q.passedTitle })).toBeVisible({ timeout: 15_000 });
	// The result is not covered, and today is a practice day.
	await expect(page.getByRole('dialog', { name: /יום ברצף/ })).toHaveCount(0);
	const days = await page.evaluate(() => JSON.parse(localStorage.getItem('activity-days') ?? '[]'));
	expect(days).toHaveLength(1);
	// Later practice the same day does not bring the popup either.
	await page.goto('/app/unit/4/module/c');
	await expect(page.getByRole('dialog', { name: /יום ברצף/ })).toHaveCount(0);
});

test.describe('weak answers', () => {
	test.use({ mocks: { grade: 'weak' } });
	test('a failing report', async ({ page }) => {
		await takeExam(page);
		await expect(page.getByRole('heading', { name: q.failedTitle })).toBeVisible({
			timeout: 15_000
		});
	});
});

test.describe('grading down', () => {
	test.use({ mocks: { grade: 503 } });
	test('open answers say "not graded" and offer a retry', async ({ page, problems }) => {
		await takeExam(page);
		await expect(page.getByText(q.notGraded).first()).toBeVisible({ timeout: 15_000 });
		await expect(page.getByRole('button', { name: q.retryGrading }).first()).toBeVisible();
		problems.length = 0; // the 503s are the point
	});
});

test.describe('quota used up', () => {
	test.use({ mocks: { grade: 429 } });
	test('open answers say the quota is used up', async ({ page, problems }) => {
		await takeExam(page);
		await expect(page.getByText(q.notGradedLimit).first()).toBeVisible({ timeout: 15_000 });
		problems.length = 0;
	});
});

test('leaving mid-exam asks first, then nothing is kept', async ({ page }) => {
	await page.goto('/app/unit/4/module/c/exam/c-exam-2');
	await page.getByRole('button', { name: q.startButton }).click();
	await page.getByRole('button', { name: q.exitLabel }).click();
	const prompt = page.getByRole('dialog', { name: q.exitPromptTitle });
	await prompt.getByRole('button', { name: q.exitConfirm }).click();
	await expect(prompt).toBeHidden();
	await page.goto('/app/unit/4/module/c/exam/c-exam-2');
	await expect(page.getByRole('button', { name: q.startButton })).toBeVisible();
});

test('when time runs out the exam is submitted', async ({ page }) => {
	await page.clock.install();
	await page.goto('/app/unit/4/module/c/exam/c-exam-2');
	await page.getByRole('button', { name: q.startButton }).click();
	// Phone: the passage is its own first screen; desktop shows it beside question 1.
	const next = page.getByRole('dialog').getByRole('button', { name: q.nextButton, exact: true });
	if (await next.isEnabled()) await next.click();
	await page.getByRole('main').getByRole('button').first().click();
	await page.clock.fastForward(91 * 60_000);
	await expect(
		page
			.getByRole('heading', { name: q.passedTitle })
			.or(page.getByRole('heading', { name: q.failedTitle }))
	).toBeVisible({ timeout: 15_000 });
});

test('passage lines keep the printed line breaks (no wrapping)', async ({ page }) => {
	await page.goto('/app/unit/4/module/c/exam/c-exam-2');
	await page.getByRole('button', { name: q.startButton }).click();
	const wrapped = await page
		.locator('p[data-line-key]')
		.evaluateAll(
			(ps) =>
				ps.filter(
					(p) => p.getBoundingClientRect().height > parseFloat(getComputedStyle(p).lineHeight) * 1.5
				).length
		);
	expect(wrapped).toBe(0);
});
