-- Deleting a user (also from the Supabase dashboard, which skips the app's own cleanup in
-- /api/account) removes the student's rows. These tables have no FK to auth.users. Orders stay:
-- purchase records are kept for tax law. The function is a trigger helper outside `public`
-- (not exposed by the API), runs as its owner and sets an empty search_path.
CREATE SCHEMA IF NOT EXISTS app_private;
--> statement-breakpoint
REVOKE ALL ON SCHEMA app_private FROM PUBLIC, anon, authenticated;
--> statement-breakpoint
CREATE OR REPLACE FUNCTION app_private.purge_user_data() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
	DELETE FROM public.progress WHERE user_id = OLD.id;
	DELETE FROM public.llm_usage WHERE user_id = OLD.id;
	DELETE FROM public.exam_attempts WHERE user_id = OLD.id;
	DELETE FROM public.push_subscriptions WHERE user_id = OLD.id;
	RETURN OLD;
END;
$$;
--> statement-breakpoint
REVOKE ALL ON FUNCTION app_private.purge_user_data() FROM PUBLIC, anon, authenticated;
--> statement-breakpoint
DROP TRIGGER IF EXISTS purge_user_data ON auth.users;
--> statement-breakpoint
CREATE TRIGGER purge_user_data AFTER DELETE ON auth.users
FOR EACH ROW EXECUTE FUNCTION app_private.purge_user_data();
