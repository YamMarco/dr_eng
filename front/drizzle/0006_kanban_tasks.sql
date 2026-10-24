CREATE TABLE "kanban_tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"status" text DEFAULT 'todo' NOT NULL,
	"priority" integer DEFAULT 2 NOT NULL,
	"assignee" text,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "kanban_tasks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
-- Server-only table, like the rest (see 0003).
REVOKE ALL ON TABLE "kanban_tasks" FROM anon, authenticated;
