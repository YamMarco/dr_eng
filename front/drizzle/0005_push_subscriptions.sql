CREATE TABLE "push_subscriptions" (
	"endpoint" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"p256dh" text NOT NULL,
	"auth" text NOT NULL,
	"last_sent_day" date,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "push_subscriptions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE INDEX "push_subscriptions_user_id_index" ON "push_subscriptions" USING btree ("user_id");--> statement-breakpoint
-- Server-only table, like the rest (see 0003).
REVOKE ALL ON TABLE "push_subscriptions" FROM anon, authenticated;
