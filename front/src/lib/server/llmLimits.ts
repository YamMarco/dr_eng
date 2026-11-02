// How much LLM use we allow: the same numbers for every user. Days reset at Israel midnight.
// Enforced by server/llmGuard.ts.

/** What an LLM call does; each has its own daily cap per user. */
export type Activity = 'lesson' | 'reading' | 'essay' | 'ocr' | 'speak' | 'chat';

/** Calls per user per day, by activity. */
export const DAILY_CAPS: Record<Activity, number> = {
	/** A free-text lesson answer. */
	lesson: 60,
	/** An exam's open reading answers, one call per passage. */
	reading: 10,
	essay: 10,
	/** A photo of handwriting. */
	ocr: 15,
	/** COBE: feedback on one recording. */
	speak: 20,
	/** COBE: one turn of the AI chat. */
	chat: 100
};

/** All users together per day: the app-wide safety ceiling on spend. */
export const GLOBAL_DAILY_CAP = 1000;

/** COBE calls (speak + chat) per user per calendar month (~₪0.06 each): keeps a heavy user below the COBE price. */
export const COBE_MONTHLY_CAP = 400;

export const COBE_ACTIVITIES: Activity[] = ['speak', 'chat'];
