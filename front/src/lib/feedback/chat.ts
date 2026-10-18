// COBE chat turns: how long a chat runs and when it ends. Pure, shared by the
// chat screen and /api/chat-speak (the server has the final say).

export type ChatMode = 'banter' | 'cobe-a' | 'cobe-b';

export type ChatLine = { who: 'ai' | 'me'; text: string };

/** The end-of-chat summary: Hebrew strengths and closing, English phrases to keep. */
export type ChatSummary = { strengths: string[]; phrases: string[]; closing: string };

/** /api/chat-speak's reply to one student turn. */
export type ChatTurnReply = {
	/** What the AI heard the student say. */
	heard: string;
	/** The AI's next line, spoken to the student. */
	reply: string;
	done: boolean;
	summary?: ChatSummary;
};

/** Student turns per chat; the chat always ends on the last one. */
export const MAX_TURNS: Record<ChatMode, number> = { banter: 6, 'cobe-a': 4, 'cobe-b': 4 };
/** A chat may wrap up from this turn on (mini COBE: the set + one follow-up). */
export const MIN_TURNS: Record<ChatMode, number> = { banter: 4, 'cobe-a': 4, 'cobe-b': 4 };
/** Soft per-turn goal: the exam gives 0 to an answer under 20 seconds. */
export const TURN_TARGET_SECONDS = 20;

/** The number of the student turn being sent, counting it. */
export const turnNumber = (history: ChatLine[]) => history.filter((l) => l.who === 'me').length + 1;

/** Whether the chat ends after this turn: always on the last one, earlier only if the model wraps up with a summary. */
export function chatEnds(mode: ChatMode, turn: number, modelDone: boolean, hasSummary: boolean) {
	if (turn >= MAX_TURNS[mode]) return true;
	return modelDone && hasSummary && turn >= MIN_TURNS[mode];
}

/** Two different picks from `list` (Part A offers a choice of two topics). */
export function drawTwo<T>(list: T[], random = Math.random): [T, T] {
	const i = Math.floor(random() * list.length);
	let j = Math.floor(random() * (list.length - 1));
	if (j >= i) j++;
	return [list[i], list[j]];
}
