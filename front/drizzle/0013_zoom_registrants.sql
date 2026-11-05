CREATE TABLE "zoom_registrants" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"registrant_id" text NOT NULL,
	"join_url" text NOT NULL,
	"display_name" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "zoom_registrants" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
-- Server-only table, like the rest (see 0003).
REVOKE ALL ON TABLE "zoom_registrants" FROM anon, authenticated;
--> statement-breakpoint
-- Deleting a user also drops their lesson registration row (see 0012).
CREATE OR REPLACE FUNCTION app_private.purge_user_data() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
	DELETE FROM public.progress WHERE user_id = OLD.id;
	DELETE FROM public.llm_usage WHERE user_id = OLD.id;
	DELETE FROM public.exam_attempts WHERE user_id = OLD.id;
	DELETE FROM public.push_subscriptions WHERE user_id = OLD.id;
	DELETE FROM public.zoom_registrants WHERE user_id = OLD.id;
	RETURN OLD;
END;
$$;
