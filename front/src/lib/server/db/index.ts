// Postgres (Supabase) via Drizzle. Server-only: lives under $lib/server so
// SvelteKit refuses to bundle it into client code.
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

// DATABASE_URL is Supabase's transaction pooler (port 6543) - the right one
// for serverless (Vercel). That pooler doesn't support prepared statements.
const client = postgres(env.DATABASE_URL, { prepare: false });

export const db = drizzle(client, { schema, casing: 'snake_case' });
