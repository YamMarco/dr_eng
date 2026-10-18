// COBE chat ("שיחה עם AI"): short spoken conversations for confidence and
// fluency. Banter topics are light picks from the official Part A list; the
// mini COBE draws two Part A topics (the exam's choice) or asks about the
// student's project (Part B). Shared by the chat screen and /api/chat-speak.
import { cobeRubric } from '../rubrics';
import type { ChatMode } from '$lib/feedback/chat';

export type BanterTopic = {
	id: string;
	/** The official Part A topic it comes from. */
	en: string;
	he: string;
	/** The AI's first line, spoken when the chat opens (no LLM call). */
	opener: string;
};

export const BANTER_TOPICS: BanterTopic[] = [
	{
		id: 'free-time',
		en: 'Free time activities',
		he: 'זמן פנוי',
		opener: "Hi! Let's talk about free time. What did you do last weekend?"
	},
	{
		id: 'music',
		en: 'Music',
		he: 'מוזיקה',
		opener: "Hi! Let's talk about music. What have you been listening to lately?"
	},
	{
		id: 'movies',
		en: 'Favorite books and movies',
		he: 'סרטים וספרים',
		opener: "Hi! Let's talk about movies and series. What's the last thing you watched?"
	},
	{
		id: 'food',
		en: 'Food',
		he: 'אוכל',
		opener: "Hi! Let's talk about food. What's your favorite thing to eat?"
	},
	{
		id: 'technology',
		en: 'Technology',
		he: 'טכנולוגיה',
		opener: "Hi! Let's talk about phones and apps. Which app do you use the most?"
	},
	{
		id: 'friendship',
		en: 'Friendship',
		he: 'חברים',
		opener: "Hi! Let's talk about friends. What do you like to do with your friends?"
	},
	{
		id: 'vacations',
		en: 'Vacations',
		he: 'חופשות',
		opener: "Hi! Let's talk about vacations. What's the best trip you've ever had?"
	},
	{
		id: 'sports',
		en: 'Sports',
		he: 'ספורט',
		opener: "Hi! Let's talk about sports. Do you play any sport, or watch one?"
	},
	{
		id: 'hometown',
		en: 'Hometown',
		he: 'העיר שלי',
		opener: "Hi! Let's talk about where you live. What's your favorite place in your town?"
	},
	{
		id: 'future',
		en: 'Future plans',
		he: 'תוכניות לעתיד',
		opener: "Hi! Let's talk about the future. What would you like to do after school?"
	}
];

/** Part A topics, from the official table of specifications. */
export const PART_A_TOPICS: string[] = cobeRubric.parts.find((p) => p.id === 'A')!.topics;
/** What Part B questions ask about the project. */
export const PROJECT_POINTS: string[] = cobeRubric.parts.find((p) => p.id === 'B')!.topics;

/** The chat's first AI line. `topics`: the banter topic id, or the two Part A topics. */
export function chatOpener(mode: ChatMode, topics: string[]): string {
	if (mode === 'banter') return BANTER_TOPICS.find((t) => t.id === topics[0])?.opener ?? '';
	if (mode === 'cobe-a')
		return `Let's begin. You can choose one of two topics: ${topics[0]}, or ${topics[1]}. Which one would you like to talk about?`;
	return "Let's talk about your project. First, tell me: what is the topic of your project?";
}

/** Whether `topics` is valid for `mode` (the server takes no free-text topic). */
export function validChatTopics(mode: ChatMode, topics: string[]): boolean {
	if (mode === 'banter')
		return topics.length === 1 && BANTER_TOPICS.some((t) => t.id === topics[0]);
	if (mode === 'cobe-a')
		return (
			topics.length === 2 &&
			topics[0] !== topics[1] &&
			topics.every((t) => PART_A_TOPICS.includes(t))
		);
	return topics.length === 0;
}
