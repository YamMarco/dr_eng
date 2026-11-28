ALTER TABLE "orders" ADD COLUMN "renew_cancelled_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "renewal_reminded_at" timestamp with time zone;