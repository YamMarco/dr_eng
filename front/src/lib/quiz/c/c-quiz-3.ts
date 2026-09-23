import type { QuizNode } from '../types';

// First real quiz content, proving the QuizNode model end-to-end. Reuses the
// same id as the "rotating-subject" catalog entry in lib/quizzes.ts, so the
// existing /exam/[quizId] detail page can find and run it.
export const cQuiz3: QuizNode = {
	id: 'rotating-subject',
	module: 'c',
	titleHe: 'נושא מתחלף',
	descriptionHe: 'כל סבב עובר לנושא אחר - קריאה, מילים, כתיבה.',
	options: {
		passThreshold: 0.6,
		durationMinutes: 10,
		warnAtMinutes: 3
	},
	parts: [
		{
			id: 'reading',
			titleHe: 'קריאה',
			instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו.',
			screens: [
				{
					type: 'passage',
					title: 'A Special Library',
					paragraphs: [
						{
							id: 'p1',
							text: [
								'Last September, Jenny Briggs moved to Geneva,',
								'Switzerland, to study at the university there. She rented',
								'an apartment where she planned to live for three years.',
								'Jenny liked everything about the apartment except',
								'the color of the walls - they were bright pink. She',
								'decided to paint them white. However, she did not own',
								'paintbrushes or a ladder, and she did not want to buy',
								'them. Fortunately, there is a special library in Geneva,',
								'and she went there to borrow the things that she needed.'
							].join('\n')
						},
						{
							id: 'p2',
							text: [
								"The library that Jenny went to does not have any books. Instead, it has things that you don't",
								'expect to find in a library - for example, suitcases, toys and kitchen equipment. People pay a fee',
								'to become members of the library. Then they can borrow any item from the library and keep it for',
								'two weeks.'
							].join('\n')
						},
						{
							id: 'p3',
							text: [
								'This type of library is called a "sharing library," and many cities in Europe have one. Each',
								'sharing library has a website where people can see all the items in the library. They can also',
								'check when an item that they need is available. They can then reserve* the item for the days',
								'that they want it. It will be ready when they go to collect it.'
							].join('\n')
						},
						{
							id: 'p4',
							text: [
								'There are two main ways that a sharing library gets the items that it lends. "There are many',
								"people who own things that they don't want anymore. They give them to us because they want",
								'other people to be able to use them," says Paul Keller, who works at the library in Geneva. "There',
								"are also people who own things that they don't use very often. They like the idea of sharing, so they",
								'give these things to us."'
							].join('\n')
						},
						{
							id: 'p5',
							text: [
								'When Jenny finished painting her apartment, she decided to have a party there with her',
								'friends. On the morning of the party, she went back to the library and borrowed a machine for',
								'making popcorn. "We were all so happy at the party," said Jenny. "We enjoyed spending time',
								'together in my new home. And everyone said the walls looked wonderful."'
							].join('\n')
						}
					]
				},
				{
					type: 'mcq',
					paragraphRef: 'I',
					prompt: 'Why did Jenny go to the special library?',
					options: [
						'To buy paint for her walls',
						'To borrow paintbrushes and a ladder',
						'To find a new apartment',
						'To meet other students'
					],
					correctIndex: 1,
					points: 2
				},
				{
					type: 'mcq',
					paragraphRef: 'II',
					prompt: 'For how long can a member keep an item from the library?',
					options: ['Two days', 'One week', 'Two weeks', 'Two months'],
					correctIndex: 2,
					points: 2
				},
				{
					type: 'sentence-completion',
					paragraphRef: 'III',
					before: 'People can check when an item is available on the website and then',
					after: 'for the days that they want it.',
					modelAnswers: ['reserve the item', 'reserve it', 'reserve that item'],
					points: 2
				},
				{
					type: 'mcq',
					paragraphRef: 'IV',
					prompt: 'According to Paul Keller, why do some people give items to the library?',
					options: [
						"They don't want the items anymore, or they don't use them often and like sharing",
						'The library pays them for every item they give',
						'The government requires them to donate items',
						'They want free membership for their family'
					],
					correctIndex: 0,
					points: 2
				}
			]
		},
		{
			id: 'writing',
			titleHe: 'כתיבה',
			instructionsHe: 'כתבו תשובה מלאה לשאלה הבאה.',
			screens: [
				{
					type: 'writing-task',
					prompt: 'Do you think sharing libraries are a good idea? Explain why.',
					minWords: 40,
					maxWords: 90,
					points: 10
				}
			]
		}
	]
};
