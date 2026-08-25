export type WordBankSentence = {
	id: number;
	before: string;
	after: string;
	answer: string;
};

export type WordBankSet = {
	id: string;
	title: string;
	description: string;
	words: string[];
	sentences: WordBankSentence[];
};

export const wordSets: WordBankSet[] = [
	{
		id: 'set-1',
		title: 'סט 1 — תיאורים',
		description: 'התאימו את המילה המתאימה ביותר לכל משפט',
		words: ['generous', 'reluctant', 'essential', 'curious', 'flexible'],
		sentences: [
			{
				id: 1,
				before: 'Water is',
				after: 'for all forms of life on Earth.',
				answer: 'essential'
			},
			{
				id: 2,
				before: 'She was',
				after: 'to leave her hometown after living there for thirty years.',
				answer: 'reluctant'
			},
			{
				id: 3,
				before: 'The new employee showed a',
				after: 'attitude and was always willing to change his schedule.',
				answer: 'flexible'
			}
		]
	},
	{
		id: 'set-2',
		title: 'סט 2 — פעולות והתנהגות',
		description: 'התאימו את המילה המתאימה ביותר לכל משפט',
		words: ['achieve', 'criticize', 'hesitate', 'recommend', 'convince'],
		sentences: [
			{
				id: 1,
				before: 'It took him years of hard work to',
				after: 'his goal of becoming a doctor.',
				answer: 'achieve'
			},
			{
				id: 2,
				before: "Don't",
				after: "to ask for help if you don't understand the material.",
				answer: 'hesitate'
			},
			{
				id: 3,
				before: 'The teacher tried to',
				after: 'the students that reading daily improves their vocabulary.',
				answer: 'convince'
			}
		]
	}
];

export function getWordSet(id: string): WordBankSet | undefined {
	return wordSets.find((set) => set.id === id);
}
