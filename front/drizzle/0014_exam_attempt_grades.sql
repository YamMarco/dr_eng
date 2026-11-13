ALTER TABLE "exam_attempts" ADD COLUMN "grades" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_attempts" ADD COLUMN "started_at" timestamp with time zone;