// A signed access token stays valid until it expires (~1h), also after its account was deleted.
// Mutating requests check the user still exists, so a second signed-in device can't write a
// deleted user's data back. Without a database there is nothing to protect.
import { sql } from 'drizzle-orm';
import { db } from './db';

export async function userExists(userId: string): Promise<boolean> {
	if (!db) return true;
	const rows = await db.execute(sql`select 1 from auth.users where id = ${userId} limit 1`);
	return rows.length > 0;
}
