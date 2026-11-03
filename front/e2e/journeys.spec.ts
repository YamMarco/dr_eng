// Phase 3: core student journeys, accounts off, AI mocked.
import { test, expect, he, states } from './fixtures';

const moduleC = /^C מודול C /;

test.describe('new student', () => {
	test.use({ studentState: states.new });

	test('onboarding builds the home dashboard', async ({ page }) => {
		const t = he.onboarding;
		await page.goto('/app');
		await expect(page.getByRole('heading', { name: t.nameTitle })).toBeVisible();
		await page.getByRole('textbox', { name: t.nameTitle }).fill('נועה');
		await page.getByRole('button', { name: t.next }).click();
		const next = page.getByRole('button', { name: t.next });
		await expect(next).toBeDisabled();
		await page.getByRole('radio', { name: t.units4 }).click();
		await next.click();
		await page.getByRole('radio', { name: t.examUnknown }).click();
		await page.getByRole('button', { name: t.finish }).click();
		// The tester welcome shows once, then the dashboard.
		await page.getByRole('dialog').getByRole('button', { name: he.common.close }).first().click();
		await expect(page.getByRole('navigation', { name: he.nav.mainNav })).toBeVisible();
		await expect(page.getByRole('link', { name: moduleC })).toBeVisible();
		await page.reload();
		await expect(page.getByRole('link', { name: moduleC })).toBeVisible();
	});
});

/** Plays the opening lesson of module C to its "well done" screen. */
async function finishFirstLesson(page: import('@playwright/test').Page) {
	await page.goto('/app/unit/4/module/c');
	await page.getByRole('link', { name: 'מתחילים' }).click();
	const runner = page.getByRole('dialog', { name: 'פתיחה - Module C' });
	await expect(runner.getByRole('progressbar')).toBeVisible();
	const next = runner.getByRole('button', { name: 'המשך', exact: true });
	while (await next.isVisible()) await next.click();
	await runner.getByRole('button', { name: 'סיום' }).click();
	await expect(runner.getByRole('heading', { name: 'כל הכבוד!' })).toBeVisible();
	return runner;
}

test('a finished lesson is saved, even if the student leaves from the finish screen', async ({
	page
}) => {
	await finishFirstLesson(page);
	await page.reload();
	await page.goto('/app/unit/4/module/c');
	await expect(page.getByRole('link', { name: /אוצר מילים/ })).toContainText('1/12');
});

test('the streak popup greets the first lesson, then the next lesson opens', async ({ page }) => {
	const runner = await finishFirstLesson(page);
	const streak = page.getByRole('dialog', { name: /יום ברצף/ });
	await expect(streak).toBeVisible();
	await streak.getByRole('button', { name: he.streakModal.cta }).click();
	await runner.getByRole('button', { name: 'המשך לשיעור הבא' }).click();
	const next = page.getByRole('dialog', { name: 'מילות שאלה: איפה ומה' });
	await expect(next.getByRole('progressbar')).toBeVisible();
	await expect(streak).toBeHidden();
	await next.getByRole('button', { name: 'יציאה מהשיעור' }).click();
	await page.goto('/app');
	await expect(page.getByRole('link', { name: moduleC })).toBeVisible();
});
