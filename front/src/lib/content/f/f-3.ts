// Module F: comparing the two stories (CD9).
// Source: docs/material/module-f/module_F_two_stories.json (scripts/module-f-import.py).
import type { LessonNode } from '../types';

export const f3Lessons: LessonNode[] = [
	{
		id: 'f-compare',
		section: 'f-3',
		titleEn: 'Compare',
		required: ['f-summer-mastery', 'f-know-all-mastery'],
		position: {
			x: 0,
			y: 2130
		},
		big: false,
		content: {
			preface: [],
			rounds: [
				{
					screens: [
						{
							type: 'preface',
							text: '## משווים בין הסיפורים\n{d:rtl}בחמש יחידות שואלים גם על שתי יצירות יחד. תשובה טובה מראה במה הדמויות או הרעיונות **דומים**, במה הם **שונים**, ומביאה אירוע מכל סיפור.\n{p:text}Both... / Similarly, ... / However, ... / while ... / In contrast, ...'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Compare Mr. Cattanzara and Mr. Kelada. How are they similar, and how are they different?**\n{p:callout}80-100 מילים, אירוע אחד לפחות מכל סיפור.',
							wordBank: ['Both', 'Similarly,', 'However,', 'In contrast,'],
							minWords: 80,
							maxWords: 100,
							modelAnswer:
								"Both men protect someone's dignity by hiding the truth. Mr. Cattanzara knows that George has not read the books, but it seems that he tells the neighbors George finished them. Similarly, Mr. Kelada knows the pearls are real, but he says they are fake to protect Mrs. Ramsay. However, their goals are different: Mr. Cattanzara wants to push George to change, while Mr. Kelada wants to save Mrs. Ramsay from trouble. In both stories, a kind lie shows the goodness of a character.",
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" and "Mr. Know-All" by Malamud and Maugham (Bagrut Module F, B2 level; content and language count equally). Compare the two stories: similarities AND differences, an event from each story.'
						},
						{
							type: 'writing-task',
							prompt:
								'{p:text}**Compare how respect works in the two stories.**\n{p:callout}80-100 מילים, אירוע אחד לפחות מכל סיפור.',
							wordBank: ['Both', 'Similarly,', 'However,', 'In contrast,'],
							minWords: 80,
							maxWords: 100,
							modelAnswer:
								"In both stories, respect is connected to how other people see us. George enjoys respect that he has not earned, because people believe a lie about him. In contrast, Mr. Kelada does not get respect at first, although he deserves it, because the narrator judges him by his origin. In the end, both stories suggest that real respect comes from actions: George starts to earn it at the library, and Mr. Kelada earns the narrator's respect through his sacrifice.",
							llmGrade: true,
							gradingNotes:
								'A short literature answer about "A Summer\'s Reading" and "Mr. Know-All" by Malamud and Maugham (Bagrut Module F, B2 level; content and language count equally). Compare the two stories: similarities AND differences, an event from each story.'
						}
					],
					retryMissed: true
				}
			]
		}
	}
];
