import { defineConfig, devices } from '@playwright/test';

// Browser tests (docs/handoffs/testing-plan.md). Accounts off, AI mocked (e2e/fixtures.ts).
// Runs against the built site (the CSP only applies to built pages).
const PORT = 4173;

export default defineConfig({
	testDir: 'e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
	use: {
		baseURL: `http://localhost:${PORT}`,
		locale: 'he-IL',
		timezoneId: 'Asia/Jerusalem',
		trace: 'retain-on-failure'
	},
	projects: [
		{ name: 'phone', use: { ...devices['Pixel 7'] } },
		{ name: 'desktop', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } }
	],
	webServer: {
		command: `npm run build && npx vite preview --port ${PORT} --strictPort`,
		port: PORT,
		reuseExistingServer: !process.env.CI,
		timeout: 180_000
	}
});
