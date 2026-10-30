CREATE TABLE "feedback_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "feedback_reports" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE INDEX "feedback_reports_user_id_created_at_index" ON "feedback_reports" USING btree ("user_id","created_at");--> statement-breakpoint
-- Server-only table, like the rest (see 0003).
REVOKE ALL ON TABLE "feedback_reports" FROM anon, authenticated;
