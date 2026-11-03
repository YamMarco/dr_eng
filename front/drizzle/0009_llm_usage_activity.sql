ALTER TABLE "llm_usage" DROP CONSTRAINT "llm_usage_user_id_day_pk";--> statement-breakpoint
ALTER TABLE "llm_usage" ALTER COLUMN "day" SET DEFAULT (now() at time zone 'Asia/Jerusalem')::date;--> statement-breakpoint
ALTER TABLE "llm_usage" ADD COLUMN "activity" text NOT NULL DEFAULT 'lesson';--> statement-breakpoint
INSERT INTO "llm_usage" ("user_id", "day", "activity", "calls") SELECT "user_id", "day", 'chat', "cobe_calls" FROM "llm_usage" WHERE "cobe_calls" > 0;--> statement-breakpoint
UPDATE "llm_usage" SET "calls" = "calls" - "cobe_calls" WHERE "activity" = 'lesson';--> statement-breakpoint
ALTER TABLE "llm_usage" ALTER COLUMN "activity" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "llm_usage" ADD CONSTRAINT "llm_usage_user_id_day_activity_pk" PRIMARY KEY("user_id","day","activity");
