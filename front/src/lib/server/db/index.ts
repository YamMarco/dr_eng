// Postgres (Supabase) via Drizzle. Server-only: lives under $lib/server so
// SvelteKit refuses to bundle it into client code.
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

// DATABASE_URL is Supabase's transaction pooler (port 6543) - the right one
// for serverless (Vercel). That pooler doesn't support prepared statements.
// null when unset: features that need the database report themselves off.
export const db = env.DATABASE_URL
	? drizzle(postgres(env.DATABASE_URL, { prepare: false }), { schema, casing: 'snake_case' })
	: null;
