CREATE TABLE "llm_usage" (
	"user_id" uuid NOT NULL,
	"day" date DEFAULT current_date NOT NULL,
	"calls" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "llm_usage_user_id_day_pk" PRIMARY KEY("user_id","day")
);
--> statement-breakpoint
ALTER TABLE "llm_usage" ENABLE ROW LEVEL SECURITY;