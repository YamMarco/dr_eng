// How much LLM use we allow: the same numbers for every user. Days reset at Israel midnight.
// Enforced by server/llmGuard.ts.

/** What an LLM call does; each has its own daily cap per user. */
export type Activity = 'lesson' | 'reading' | 'essay' | 'ocr' | 'speak' | 'chat';

/** Calls per user per day, by activity. */
export const DAILY_CAPS: Record<Activity, number> = {
	/** A free-text lesson answer. */
	lesson: 36,
	/** An exam's open reading answers, one call per passage. */
	reading: 6,
	essay: 6,
	/** A photo of handwriting. */
	ocr: 9,
	/** COBE: feedback on one recording. */
	speak: 12,
	/** COBE: one turn of the AI chat. */
	chat: 60
};

/** All users together per day: the app-wide safety ceiling on spend. */
export const GLOBAL_DAILY_CAP = 600;

/** COBE calls (speak + chat) per user per calendar month (~₪0.06 each): keeps a heavy user below the COBE price. */
export const COBE_MONTHLY_CAP = 240;

export const COBE_ACTIVITIES: Activity[] = ['speak', 'chat'];
