// The student's synced progress ($lib/progressSync). GET: every key.
// POST { items: { [key]: Item } }: merges each into the stored copy
// ($lib/progressMerge) and returns the merged items.
import { error, json } from '@sveltejs/kit';
import { and, count, eq, inArray, sql } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { progress } from '$lib/server/db/schema';
import { isSyncedKey, mergeItems, type Item } from '$lib/progressMerge';
import type { RequestHandler } from './$types';

const MAX_BODY = 1_000_000;
const MAX_ITEM = 100_000;
/** Keys per request; the client sends in batches of this size. */
const MAX_BATCH = 100;
/** Rows per user: every exam twice plus the stores, with room to grow. */
const MAX_KEYS = 400;

function scope(locals: App.Locals) {
	if (!locals.userId || !db) error(503, 'progress sync is off');
	return { userId: locals.userId, db };
}

export const GET: RequestHandler = async ({ locals }) => {
	const { userId, db } = scope(locals);
	const rows = await db
		.select({ key: progress.key, value: progress.value, at: progress.at })
		.from(progress)
		.where(eq(progress.userId, userId));
	return json({
		items: Object.fromEntries(rows.map((r) => [r.key, { value: r.value, at: r.at }]))
	});
};

function parseItems(text: string): [string, Item][] {
	let body: unknown;
	try {
		body = JSON.parse(text);
	} catch {
		error(400, 'bad json');
	}
	const items = (body as { items?: unknown })?.items;
	if (typeof items !== 'object' || items === null || Array.isArray(items)) error(400, 'no items');
	const entries = Object.entries(items);
	if (entries.length > MAX_BATCH) error(413, 'too many keys');
	return entries.map(([key, item]) => {
		const { value, at, replace } = (item ?? {}) as Item;
		if (!isSyncedKey(key) || value === undefined || !Number.isSafeInteger(at) || at < 0)
			error(400, `bad item: ${key.slice(0, 100)}`);
		if (JSON.stringify(value).length > MAX_ITEM) error(413, `too large: ${key}`);
		return [key, { value, at, replace: replace === true }];
	});
}

export const POST: RequestHandler = async ({ locals, request }) => {
	const { userId, db } = scope(locals);
	const text = await request.text();
	if (text.length > MAX_BODY) error(413, 'too large');
	const incoming = parseItems(text);
	if (incoming.length === 0) return json({ items: {} });
	const keys = incoming.map(([key]) => key);

	const merged = await db.transaction(async (tx) => {
		const stored = await tx
			.select({ key: progress.key, value: progress.value, at: progress.at })
			.from(progress)
			.where(and(eq(progress.userId, userId), inArray(progress.key, keys)))
			.for('update');
		const have = new Map(stored.map((r) => [r.key, { value: r.value, at: r.at }]));
		const added = keys.filter((key) => !have.has(key)).length;
		if (added) {
			const [{ n }] = await tx
				.select({ n: count() })
				.from(progress)
				.where(eq(progress.userId, userId));
			if (n + added > MAX_KEYS) error(413, 'too many keys');
		}
		const out = incoming.map(([key, item]) => [key, mergeItems(key, have.get(key), item)] as const);
		await tx
			.insert(progress)
			.values(out.map(([key, item]) => ({ userId, key, value: item.value, at: item.at })))
			.onConflictDoUpdate({
				target: [progress.userId, progress.key],
				set: { value: sql`excluded.value`, at: sql`excluded.at`, updatedAt: sql`now()` }
			});
		return Object.fromEntries(out);
	});
	return json({ items: merged });
};
