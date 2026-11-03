// Phase 2: every route loads with no console errors or failed requests; axe and a focus walk.
import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';

const site = ['/', '/about', '/plans', '/privacy', '/terms', '/accessibility'];
const app = [
	'/app',
	'/app/settings',
	'/app/streak',
	'/app/book',
	'/app/install',
	...['c', 'd', 'e'].flatMap((m) => [
		`/app/unit/4/module/${m}`,
		`/app/unit/4/module/${m}/lessons`,
		`/app/unit/4/module/${m}/exam`
	]),
	'/app/unit/4/module/e/words',
	'/app/unit/5/module/f',
	'/app/unit/5/module/g'
];

// Entrance animations fade in: axe would read half-transparent text.
test.use({ reducedMotion: 'reduce' });

/** Tabs through the page: every stop is a visible element with a visible focus ring. */
async function focusWalk(page: Page) {
	const stops = await page
		.locator('a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]')
		.count();
	const bad: string[] = [];
	for (let i = 0; i < Math.min(stops, 60); i++) {
		await page.keyboard.press('Tab');
		const info = await page.evaluate(() => {
			const el = document.activeElement as HTMLElement | null;
			if (!el || el === document.body) return null;
			const r = el.getBoundingClientRect();
			const s = getComputedStyle(el);
			const ring = s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0;
			const shadow = s.boxShadow !== 'none';
			return {
				label: `${el.tagName.toLowerCase()} "${(el.getAttribute('aria-label') ?? el.textContent ?? '').trim().slice(0, 30)}"`,
				visible: r.width > 0 && r.height > 0,
				ring: ring || shadow
			};
		});
		if (!info) continue;
		if (!info.visible) bad.push(`hidden: ${info.label}`);
		else if (!info.ring) bad.push(`no ring: ${info.label}`);
	}
	expect(bad, 'focus walk').toEqual([]);
}

for (const path of [...site, ...app]) {
	test(`loads ${path}`, async ({ page }) => {
		const res = await page.goto(path);
		expect(res?.status()).toBeLessThan(400);
		await expect(page.locator('main').first()).toBeVisible();
		await page.waitForLoadState('networkidle');
		// Contrast is off: the brand teal is the owner's call (no darker teal).
		const axe = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa'])
			.disableRules(['color-contrast'])
			.analyze();
		const issues = axe.violations.map(
			(v) =>
				`${v.id}: ${v.nodes
					.map((n) => n.target.join(' '))
					.slice(0, 3)
					.join(' | ')}`
		);
		expect.soft(issues, 'axe violations').toEqual([]);
		await focusWalk(page);
	});
}

test('unknown path shows the error page', async ({ page, problems }) => {
	const res = await page.goto('/no-such-page');
	expect(res?.status()).toBe(404);
	await expect(page.locator('body')).toContainText('404');
	problems.length = 0; // the 404 itself is expected
});
