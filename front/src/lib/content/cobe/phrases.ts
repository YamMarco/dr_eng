// The COBE phrase bank: ready spoken chunks by job. They feed the rubric
// directly - Vocabulary rewards "words, chunks, and expressions", and the
// official guidelines allow compensation strategies (fillers, rephrasing,
// "I don't remember exactly, but..."). `parts` marks where a group helps most.
import type { CobePart } from '$lib/feedback/speaking';

export type PhraseGroup = {
	id: string;
	titleHe: string;
	parts: CobePart[];
	phrases: string[];
};

export const phraseGroups: PhraseGroup[] = [
	{
		id: 'open',
		titleHe: 'לפתוח',
		parts: ['A', 'B', 'C'],
		phrases: ["Well, I'd say that...", 'For me, the answer is clear...', 'Let me start with...']
	},
	{
		id: 'time',
		titleHe: 'לקנות זמן',
		parts: ['A', 'B', 'C'],
		phrases: [
			"That's a good question. Let me think...",
			"It's hard to say, but...",
			"I've never really thought about it, but..."
		]
	},
	{
		id: 'rescue',
		titleHe: 'לחלץ את עצמכם',
		parts: ['B', 'C'],
		phrases: [
			"To be completely honest, I don't recall the exact number, but the main point was...",
			"I don't remember the exact details, but what surprised me most was...",
			'What I mean is...'
		]
	},
	{
		id: 'opinion',
		titleHe: 'להביע דעה',
		parts: ['A', 'C'],
		phrases: ['In my view...', 'I strongly believe that...', "I'm not sure I agree, because..."]
	},
	{
		id: 'example',
		titleHe: 'לתת דוגמה',
		parts: ['A', 'B', 'C'],
		phrases: [
			'For instance, last year I...',
			'A good example of this is...',
			'In the clip, for example,...'
		]
	},
	{
		id: 'link',
		titleHe: 'לחבר רעיונות',
		parts: ['A', 'B', 'C'],
		phrases: ['On top of that...', "What's more...", 'On the other hand...', 'That is why...']
	},
	{
		id: 'project',
		titleHe: 'הפרויקט',
		parts: ['B'],
		phrases: [
			'I chose this topic because...',
			'What surprised me most was...',
			'This topic matters because...',
			'If I could do it again, I would...'
		]
	},
	{
		id: 'clip',
		titleHe: 'לתאר את הקליפ',
		parts: ['C'],
		phrases: [
			'At the beginning of the clip...',
			'After that...',
			'In the end...',
			'If I were in her place, I would...'
		]
	},
	{
		id: 'close',
		titleHe: 'לסגור',
		parts: ['A', 'B', 'C'],
		phrases: ['So, all in all...', "That's why I think...", 'To sum up...']
	}
];
