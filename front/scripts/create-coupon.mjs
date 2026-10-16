// Creates or updates a coupon, and lists them all with their use counts.
//
//   node --env-file=.env.local scripts/create-coupon.mjs TESTERS --percent 100 --max 50 --expires 2027-01-01
//   node --env-file=.env.local scripts/create-coupon.mjs            (list only)
//
// Options: --percent (default 100), --plan <plan id> (default: any plan),
// --max <redemptions> (default unlimited), --expires <date>, --note <text>.
// Testers then go to <site>/checkout?coupon=TESTERS (or enter it in the app).
import { parseArgs } from 'node:util';
import postgres from 'postgres';

const { values, positionals } = parseArgs({
	allowPositionals: true,
	options: {
		percent: { type: 'string', default: '100' },
		plan: { type: 'string' },
		max: { type: 'string' },
		expires: { type: 'string' },
		note: { type: 'string' }
	}
});

const url = process.env.DATABASE_MIGRATE_URL ?? process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_URL is not set');
const sql = postgres(url, { prepare: false });

const code = positionals[0]?.trim().toUpperCase();
if (code) {
	const percent = Number(values.percent);
	if (!Number.isInteger(percent) || percent < 1 || percent > 100)
		throw new Error('--percent: 1-100');
	const row = {
		code,
		percent_off: percent,
		plan_id: values.plan ?? null,
		max_redemptions: values.max ? Number(values.max) : null,
		expires_at: values.expires ? new Date(values.expires) : null,
		note: values.note ?? null
	};
	await sql`
		insert into coupons ${sql(row)}
		on conflict (code) do update set ${sql(row, 'percent_off', 'plan_id', 'max_redemptions', 'expires_at', 'note')}
	`;
	console.log(`saved ${code}`);
}

const rows = await sql`
	select c.code, c.percent_off, c.plan_id, c.max_redemptions, c.expires_at,
		count(o.id) filter (where o.status in ('paid', 'free'))::int as used
	from coupons c left join orders o on o.coupon_code = c.code
	group by c.code order by c.created_at
`;
console.table(rows);
await sql.end();
