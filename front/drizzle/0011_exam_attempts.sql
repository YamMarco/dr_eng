CREATE TABLE "exam_attempts" (
	"user_id" uuid NOT NULL,
	"quiz_id" text NOT NULL,
	"attempt" bigint NOT NULL,
	"done_parts" integer DEFAULT 0 NOT NULL,
	"done_at" timestamp with time zone,
	CONSTRAINT "exam_attempts_user_id_quiz_id_pk" PRIMARY KEY("user_id","quiz_id")
);
--> statement-breakpoint
ALTER TABLE "exam_attempts" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
-- Server-only table, like the rest (see 0003).
REVOKE ALL ON TABLE "exam_attempts" FROM anon, authenticated;
