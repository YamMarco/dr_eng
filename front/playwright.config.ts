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
		{ name: 'phone', use: { ...devices['Pixel 7'] }, testIgnore: /(content|personas)\.spec/ },
		// Persona runs (break-it): phone only, one worker (RAM).
		{ name: 'persona', use: { ...devices['Pixel 7'] }, testMatch: /personas\.spec/ },
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'], colorScheme: 'dark' },
			testIgnore: /(content|api|personas)\.spec/
		},
		// The content crawler: slow (every lesson screen), phone only.
		{ name: 'content', use: { ...devices['Pixel 7'] }, testMatch: /content\.spec/ }
	],
	webServer: {
		command: `npm run build && npx vite preview --port ${PORT} --strictPort`,
		port: PORT,
		reuseExistingServer: !process.env.CI,
		timeout: 180_000,
		// Accounts off like CI, even with .env.local's keys (with them, the build also hangs).
		env: { VITE_SUPABASE_URL: '', VITE_SUPABASE_PUBLISHABLE_KEY: '', DATABASE_URL: '' }
	}
});
