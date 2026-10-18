-- The browser never reads these tables (only the server, as the owner). RLS already
-- hides every row; this also drops Supabase's default grants (incl. TRUNCATE, which
-- RLS doesn't cover) from the API roles. New tables: add them here in their migration.
REVOKE ALL ON TABLE "coupons", "orders", "llm_usage", "progress" FROM anon, authenticated;
--> statement-breakpoint
-- Word-card images: uploaded by the server only; cap size and type.
UPDATE storage.buckets
SET file_size_limit = 2097152, allowed_mime_types = ARRAY['image/jpeg', 'image/webp']
WHERE id = 'vocab-images';
