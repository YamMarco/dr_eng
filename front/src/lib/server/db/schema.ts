// Drizzle table definitions. Add tables here, then run `npm run db:generate`
// (writes a migration to /drizzle) and `npm run db:migrate`.
// Column names are written camelCase and stored snake_case (see `casing`).
//
// Every table enables RLS with no policies: Supabase exposes the public schema
// to the publishable key, and RLS keeps it closed. The server connects as the
// database owner, which bypasses RLS.
import { sql } from 'drizzle-orm';
import { index, integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

/** Discount codes. Created with scripts/create-coupon.mjs. */
export const coupons = pgTable('coupons', {
	/** Stored upper-case; matched case-insensitively by upper-casing the input. */
	code: text().primaryKey(),
	percentOff: integer().notNull(),
	/** Only this plan; null = any plan (and the in-app code box redeems DEFAULT_PLAN). */
	planId: text(),
	/** null = unlimited. Counts completed orders only. */
	maxRedemptions: integer(),
	expiresAt: timestamp({ withTimezone: true }),
	note: text(),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
}).enableRLS();

/**
 * One row per checkout. Access = a `paid` or `free` order whose accessUntil is
 * still ahead. `pending` waits for the payment provider (not wired yet).
 */
export const orders = pgTable(
	'orders',
	{
		id: uuid().primaryKey().defaultRandom(),
		/** Supabase auth user id (no FK: auth.users is outside our schema). */
		userId: uuid().notNull(),
		planId: text().notNull(),
		/** Amounts in agorot. */
		price: integer().notNull(),
		discount: integer().notNull().default(0),
		total: integer().notNull(),
		couponCode: text().references(() => coupons.code),
		status: text({ enum: ['pending', 'paid', 'free', 'failed'] }).notNull(),
		provider: text(),
		providerRef: text(),
		accessUntil: timestamp({ withTimezone: true }),
		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
		completedAt: timestamp({ withTimezone: true })
	},
	(table) => [
		index().on(table.userId),
		index()
			.on(table.couponCode)
			.where(sql`${table.status} in ('paid', 'free')`)
	]
).enableRLS();
