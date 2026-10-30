// Drizzle table definitions. Add tables here, then run `npm run db:generate`
// (writes a migration to /drizzle) and `npm run db:migrate`.
// Column names are written camelCase and stored snake_case (see `casing`).
//
// Every table enables RLS with no policies: Supabase exposes the public schema
// to the publishable key, and RLS keeps it closed. Its migration also revokes
// the API roles' grants (see drizzle/0003). The server connects as the
// database owner, which bypasses RLS.
import { sql } from 'drizzle-orm';
import {
	bigint,
	date,
	index,
	integer,
	jsonb,
	pgTable,
	primaryKey,
	smallint,
	text,
	timestamp,
	uuid
} from 'drizzle-orm/pg-core';

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

/** LLM calls per user per day (UTC), for the daily quota in server/llmGuard.ts. */
export const llmUsage = pgTable(
	'llm_usage',
	{
		userId: uuid().notNull(),
		day: date()
			.notNull()
			.default(sql`current_date`),
		calls: integer().notNull().default(0),
		/** Of `calls`, how many were COBE (its monthly quota). */
		cobeCalls: integer().notNull().default(0)
	},
	(table) => [primaryKey({ columns: [table.userId, table.day] })]
).enableRLS();

/** The student's progress, one row per synced localStorage key ($lib/progressSync). */
export const progress = pgTable(
	'progress',
	{
		userId: uuid().notNull(),
		key: text().notNull(),
		value: jsonb().notNull(),
		/** When it last changed on the device that wrote it (ms); newer-copy keys compare it. */
		at: bigint({ mode: 'number' }).notNull().default(0),
		updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow()
	},
	(table) => [primaryKey({ columns: [table.userId, table.key] })]
).enableRLS();

/** Web Push subscriptions for the daily practice reminder (one per device). */
export const pushSubscriptions = pgTable(
	'push_subscriptions',
	{
		endpoint: text().primaryKey(),
		userId: uuid().notNull(),
		p256dh: text().notNull(),
		auth: text().notNull(),
		/** Israel hour (0-23) the student chose for the reminder. */
		remindHour: smallint().notNull().default(17),
		/** Israel date of the last reminder sent: at most one a day. */
		lastSentDay: date(),
		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
	},
	(table) => [index().on(table.userId)]
).enableRLS();

/** Emails waiting for open sign-up (the home page form). Email only: users are minors. */
export const waitlist = pgTable('waitlist', {
	/** Stored trimmed and lower-cased. */
	email: text().primaryKey(),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
}).enableRLS();

/** Staff kanban board of project tasks (/kanban). Values: $lib/kanban.ts. */
export const kanbanTasks = pgTable('kanban_tasks', {
	id: uuid().primaryKey().defaultRandom(),
	title: text().notNull(),
	status: text({ enum: ['todo', 'doing', 'done'] })
		.notNull()
		.default('todo'),
	/** 1 = low, 2 = medium, 3 = high. */
	priority: integer().notNull().default(2),
	/** Who made it / it's assigned to; null = nobody yet. */
	assignee: text({ enum: ['yam', 'emil'] }),
	tags: text().array().notNull().default([]),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow()
}).enableRLS();

/** Feedback reports sent from the app (/api/feedback), for its daily caps. The report itself is emailed. */
export const feedbackReports = pgTable(
	'feedback_reports',
	{
		id: uuid().primaryKey().defaultRandom(),
		userId: uuid().notNull(),
		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
	},
	(table) => [index().on(table.userId, table.createdAt)]
).enableRLS();
