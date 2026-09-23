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
		passThreshold: 0.6
	},
	parts: [
		{
			id: 'reading',
			titleHe: 'קריאה',
			instructionsHe: 'קראו את הקטע וענו על השאלות שאחריו.',
			screens: [
				{
					type: 'passage',
					title: 'Green Africa',
					paragraphs: [
						{
							id: 'p1',
							text: 'Green Africa is a project that helps farmers in dry regions grow more food. Volunteers teach local people how to save water and protect the soil.'
						},
						{
							id: 'p2',
							text: 'Since the project started, crop yields have grown by 40%. Many villages now have enough food for the whole year, and some even sell the extra crops at markets.'
						}
					]
				},
				{
					type: 'mcq',
					paragraphRef: 'I',
					prompt: 'What do the volunteers teach the local people?',
					options: [
						'How to build new roads',
						'How to save water and protect the soil',
						'How to sell crops at markets',
						'How to read and write'
					],
					correctIndex: 1,
					points: 2
				},
				{
					type: 'mcq',
					paragraphRef: 'II',
					prompt: 'By how much have crop yields grown since the project started?',
					options: ['4%', '14%', '40%', '400%'],
					correctIndex: 2,
					points: 2
				},
				{
					type: 'sentence-completion',
					paragraphRef: 'II',
					before: 'Some villages now have enough food for the whole year, and some even',
					after: 'at markets.',
					modelAnswers: ['sell the extra crops', 'sell extra crops'],
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
					prompt: 'Do you think projects like Green Africa are important? Explain why.',
					minWords: 40,
					maxWords: 90,
					points: 10
				}
			]
		}
	]
};
