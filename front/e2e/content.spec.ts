// Phase 5: walks every screen of every lesson round (debug "skip screen") and fails on a
// screen that throws, renders empty or overflows sideways on a phone. Run: npm run e2e:content
import { allLessons, lessonForUnits, progressScope } from '../src/lib/content';
import { test, expect } from './fixtures';

// COBE is parked (staff-only alpha): not crawled.
const UNITS: Record<string, '4' | '5'> = { c: '4', d: '4', e: '4', f: '5', g: '5' };
const SKIP = 'דלג על מסך (דיבוג)';

test.use({ reducedMotion: 'reduce' });

for (const lesson of Object.values(allLessons)) {
	const moduleId = lesson.section.split('-')[0];
	const units = UNITS[moduleId];
	if (!units) continue;
	const { content } = lessonForUnits(lesson, Number(units));
	// A placeholder (no screens yet) never unlocks for students.
	if (!content.preface.length && content.rounds.every((r) => !r.screens.length)) continue;
	const rounds = content.rounds.length;
	for (let round = 0; round < rounds; round++) {
		test(`${lesson.id} round ${round + 1}`, async ({ page }) => {
			await page.addInitScript(
				([id, scope, round, units]) => {
					if (sessionStorage.getItem('crawl')) return;
					sessionStorage.setItem('crawl', '1');
					localStorage.setItem('profile', JSON.stringify({ units, exam: null }));
					localStorage.setItem('debug-unlock-all', 'true');
					localStorage.setItem('lesson-progress', JSON.stringify({ [scope]: { [id]: round } }));
				},
				[lesson.id, progressScope(lesson.id)!, round, units] as const
			);
			await page.goto(`/app/unit/${units}/module/${moduleId}/lessons?lesson=${lesson.id}`);
			const runner = page.getByRole('dialog');
			await expect(runner).toBeVisible();
			// The feedback button covers the debug button (same corner): click it by event.
			await runner.getByRole('button', { name: 'כלי דיבוג' }).dispatchEvent('click');
			const skip = runner.getByRole('button', { name: SKIP });
			const bad: string[] = [];
			for (let i = 0; i < 300 && (await skip.isVisible()); i++) {
				const s = await runner.evaluate((el) => {
					const main = el.querySelector('main');
					return {
						text: (main?.innerText ?? '').trim().length,
						media: !!main?.querySelector('img, video, audio, iframe, svg'),
						wide: document.documentElement.scrollWidth - window.innerWidth
					};
				});
				if (!s.text && !s.media) bad.push(`screen ${i + 1}: empty`);
				if (s.wide > 1) bad.push(`screen ${i + 1}: ${s.wide}px wider than the phone`);
				await skip.dispatchEvent('click');
			}
			expect(bad).toEqual([]);
		});
	}
}
