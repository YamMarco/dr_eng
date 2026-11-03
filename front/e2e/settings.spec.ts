// Phase 3: settings (profile, theme, language), the streak page and the feedback report.
import { test, expect, he } from './fixtures';

const s = he.settings;

test('dark theme sticks after a reload', async ({ page }) => {
	await page.goto('/app/settings');
	await page.getByRole('radio', { name: s.themeDark }).click();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('switching to 5 units changes the home route', async ({ page }) => {
	await page.goto('/app/settings');
	await page
		.getByRole('combobox', { name: s.unitsLabel })
		.selectOption({ label: he.onboarding.units5 });
	await page
		.getByRole('navigation', { name: he.nav.mainNav })
		.getByRole('link', { name: he.nav.home })
		.click();
	await expect(page.getByRole('link', { name: /^F מודול F / })).toBeVisible();
	await expect(page.getByRole('link', { name: /^C מודול C / })).toHaveCount(0);
});

test('the name is saved', async ({ page }) => {
	await page.goto('/app/settings');
	await page.getByRole('textbox', { name: s.nameLabel }).fill('נועה');
	await page.getByRole('textbox', { name: s.nameLabel }).blur();
	await page.reload();
	await expect(page.getByRole('textbox', { name: s.nameLabel })).toHaveValue('נועה');
});

test('Arabic interface', async ({ page }) => {
	await page.goto('/app/settings');
	await page.getByRole('combobox', { name: s.interfaceLanguage }).selectOption('ar');
	await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
	await expect(
		page.getByRole('navigation').getByRole('link', { name: he.nav.settings })
	).toHaveCount(0);
});

test('the streak page loads for a new student', async ({ page }) => {
	await page.goto('/app/streak');
	await expect(page.getByRole('heading', { name: 'הרצף שלי', level: 1 })).toBeVisible();
});

test('a feedback report is sent', async ({ page }) => {
	const t = he.testerFeedback;
	let body: Record<string, unknown> = {};
	await page.route('**/api/feedback', (r) => {
		body = r.request().postDataJSON();
		return r.fulfill({ json: { ok: true } });
	});
	await page.goto('/app');
	await page.getByRole('button', { name: t.button }).click();
	const dialog = page.getByRole('dialog', { name: t.title });
	await dialog.getByRole('textbox', { name: t.messageLabel }).fill('הכפתור לא עובד');
	await dialog.getByRole('button', { name: t.send }).click();
	await expect(page.getByText(t.sent)).toBeVisible({ timeout: 15_000 });
	expect(JSON.stringify(body)).toContain('הכפתור לא עובד');
});
