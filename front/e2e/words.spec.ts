// Phase 3: the word deck - a session from the words page, then the counters move.
import { test, expect, playThrough } from './fixtures';

test('a word session to the end moves words into "learning"', async ({ page }) => {
	await page.goto('/app/unit/4/module/e/words');
	await page.getByRole('button', { name: /מתחילים תרגול/ }).click();
	await playThrough(page, 'addition');
	await page
		.getByRole('dialog')
		.first()
		.getByRole('button')
		.filter({ hasText: /חזרה|סיום/ })
		.first()
		.click();
	const learning = page.getByText('בלמידה').locator('xpath=preceding-sibling::*[1]');
	await expect(learning).not.toHaveText('0');
});
