// A small library of full reading texts for module C. Section 2's preview
// lessons each work a snippet of the SAME text (title -> first paragraph ->
// first sentence of every paragraph), so the student previews one real text
// progressively before drilling eye-catcher marking on another. Authored
// English teaching material — not UI chrome, so not run through i18n (same
// convention as curriculum.ts labels).

export type ReadingText = {
	id: string;
	title: string;
	/** Paragraphs in reading order. */
	paragraphs: string[];
};

export const readingTexts: Record<string, ReadingText> = {
	robots: {
		id: 'robots',
		title: 'Robots in the Classroom',
		paragraphs: [
			'In the last few years, several schools around the world have started using small robots to help teach young children. The robots read stories, ask simple questions, and play word games. Teachers say that many shy students are less afraid to answer a robot than a person.',
			'The robots do not replace teachers. Each lesson is planned by a human teacher, who decides what the class will learn and watches how every child reacts. The robot only repeats an activity as many times as a child needs, without getting tired or annoyed.',
			'One primary school in Finland tested the idea for a full school year. Children who used the robot for twenty minutes a day improved their reading faster than children in the other classes. The school now plans to buy three more robots.',
			'Still, not everyone is happy about the change. Some parents worry that their children will spend too much time with machines and too little time with friends. Others say the money would be better spent on hiring more teachers.'
		]
	},
	village: {
		id: 'village',
		title: 'A Village Without Cars',
		paragraphs: [
			'In 2019, the small village of Giethoorn in the Netherlands decided to close its center to all cars. Only boats and bicycles are allowed on its narrow paths. About 2,600 people live there, and most of them say they will never go back to the old way.',
			'A team from the University of Groningen studied the village for six months. They found that noise dropped by almost 40 percent and that most residents walked twice as far each day. However, a few shop owners cannot receive large deliveries, and they want the rule changed.'
		]
	}
};

/** First sentence of a paragraph (naive: up to the first . ! or ?). */
export function firstSentence(paragraph: string): string {
	const match = paragraph.match(/^.*?[.!?](?=\s|$)/);
	return match ? match[0] : paragraph;
}

const STRIP = /[.,;:!?"'()‘’“”]/g;

/**
 * Token indices of every occurrence of the given phrases within
 * `text.split(/\s+/)` — for a `mark-all` screen's `correctIndices`. Matching
 * is punctuation- and case-insensitive, and multi-word phrases must appear
 * as a consecutive run.
 */
export function markTargets(text: string, phrases: string[]): number[] {
	const norm = (w: string) => w.replace(STRIP, '').toLowerCase();
	const tokens = text.split(/\s+/).map(norm);
	const hits = new Set<number>();
	for (const phrase of phrases) {
		const words = phrase.split(/\s+/).map(norm);
		for (let i = 0; i + words.length <= tokens.length; i++) {
			if (words.every((w, j) => tokens[i + j] === w)) {
				for (let j = 0; j < words.length; j++) hits.add(i + j);
			}
		}
	}
	return [...hits].sort((a, b) => a - b);
}
