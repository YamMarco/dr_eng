ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "checkout_id" uuid;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "orders_checkout_id_index" ON "orders" USING btree ("checkout_id");