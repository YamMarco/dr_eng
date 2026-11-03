// Phase 3: handwriting scan on the exam essay - pick a photo, read it (OCR mocked), insert.
import { test, expect, he } from './fixtures';

const t = he.ocr;
// Any real photo will do: the OCR reply is mocked.
const PHOTO = 'static/icons/icon-192.png';

test('a scanned page lands in the essay box', async ({ page }) => {
	await page.route('**/api/ocr', (r) => r.fulfill({ json: { text: 'My best friend is Dana.' } }));
	await page.goto('/app/unit/4/module/c/exam/c-exam-2');
	await page.getByRole('button', { name: he.quiz.startButton }).click();
	// The essay is the last question.
	await page
		.getByRole('button', { name: /^שאלה \d+$/ })
		.last()
		.click();
	await page.getByRole('button', { name: t.button }).click();
	const album = page.getByRole('dialog', { name: t.albumTitle });
	// The file inputs sit beside the sheet (hidden): the gallery one takes several photos.
	await page.locator('input[type=file][multiple]').setInputFiles(PHOTO);
	await album.getByRole('button', { name: t.read(1) }).click();
	const review = page.getByRole('dialog', { name: t.reviewTitle });
	await review.getByRole('button', { name: t.insert }).click();
	await expect(page.getByRole('main').getByRole('textbox')).toHaveValue(/My best friend is Dana\./);
});
