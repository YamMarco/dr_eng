// Creates (or promotes) staff accounts: confirmed email, a random password, and
// app_metadata.role = "admin" (writable only with the secret key, so students
// can't grant it to themselves). Staff see the editing and debug tools.
//
//   node --env-file=.env.local scripts/create-admin.mjs a@example.com b@example.com
//
// Passwords go to admin-users.local.txt (gitignored), never to the console.
import { randomBytes } from 'node:crypto';
import { appendFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const emails = process.argv.slice(2).map((e) => e.trim().toLowerCase());
if (!emails.length) throw new Error('usage: create-admin.mjs <email> [<email>...]');

const admin = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
	auth: { persistSession: false, autoRefreshToken: false }
}).auth.admin;

const { data: list, error: listError } = await admin.listUsers({ perPage: 1000 });
if (listError) throw listError;

for (const email of emails) {
	const password = randomBytes(12).toString('base64url');
	const fields = { password, email_confirm: true, app_metadata: { role: 'admin' } };
	const existing = list.users.find((u) => u.email?.toLowerCase() === email);
	const { error } = existing
		? await admin.updateUserById(existing.id, fields)
		: await admin.createUser({ email, ...fields });
	if (error) throw new Error(`${email}: ${error.message}`);
	appendFileSync('admin-users.local.txt', `${email}  ${password}\n`);
	console.log(`${existing ? 'promoted' : 'created '} ${email}`);
}
console.log('passwords: front/admin-users.local.txt');
