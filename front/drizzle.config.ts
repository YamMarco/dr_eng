import { defineConfig } from 'drizzle-kit';

// drizzle-kit runs outside Vite, so load .env / .env.local ourselves.
for (const file of ['.env', '.env.local']) {
	try {
		process.loadEnvFile(file);
	} catch {
		// file is optional
	}
}

// Migrations want a session connection (Supabase session pooler, port 5432,
// or the direct URL); the app's DATABASE_URL is the transaction pooler.
const url = process.env.DATABASE_MIGRATE_URL ?? process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_MIGRATE_URL or DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: { url },
	casing: 'snake_case',
	strict: true,
	verbose: true
});
