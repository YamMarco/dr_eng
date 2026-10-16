import type { QuizNode } from '../types';

// One array literal of every COBE exam (same shape as quiz/c/index.ts). Built
// on the official COBE structure (content/rubrics/cobe.json): three parts, a
// set of two questions each, one recording per set, 30 minutes. Recordings
// are graded in the report against the rubric.
export const cobeQuizzes: QuizNode[] = [
	{
		id: 'cobe-exam-1',
		module: 'cobe',
		uuid: 'cobe-t-0001',
		kind: 'assorted',
		options: { passThreshold: 0.6, durationMinutes: 30, warnAtMinutes: 5 },
		parts: [
			{
				id: 'a',
				instructionsHe:
					'בחרו נושא אחד מתוך שניים וענו על שתי השאלות שלו בהקלטה אחת. פחות מ-20 שניות מקבל 0.',
				points: 25,
				screens: [
					{
						type: 'speak',
						part: 'A',
						points: 25,
						targetSeconds: 60,
						prompt:
							'Choose ONE topic and answer both of its questions in one recording.\n\n**Topic 1: Friendship**\n1. What makes someone a good friend?\n2. Tell me about a time a friend helped you.\n\n**Topic 2: Technology**\n1. Which piece of technology could you not live without? Why?\n2. How has technology changed the way teenagers spend their free time?'
					}
				]
			},
			{
				id: 'b',
				instructionsHe:
					'שתי שאלות על הפרויקט שלכם, בהקלטה אחת של דקה עד שתיים. פחות מדקה מוריד נקודות מכל הקריטריונים.',
				points: 25,
				screens: [
					{
						type: 'speak',
						part: 'B',
						points: 25,
						targetSeconds: 90,
						prompt:
							'Tell me about your project.\n\n1. What is the topic of your project, and why did you choose it?\n2. What was the most surprising thing you learned?'
					}
				]
			},
			{
				id: 'c',
				instructionsHe:
					'צפו בקליפ וענו על שני סטים של שאלות, הקלטה לכל סט. התשובות צריכות להתבסס על מה שראיתם ושמעתם.',
				points: 50,
				screens: [
					{ type: 'video', caption: 'צפו בקליפ. אחריו יש שני סטים של שאלות.' },
					{
						type: 'speak',
						part: 'C',
						points: 25,
						targetSeconds: 60,
						prompt:
							'Set 1:\n1. Where does the conversation take place, and who is in it?\n2. What problem do the people in the clip have?'
					},
					{
						type: 'speak',
						part: 'C',
						points: 25,
						targetSeconds: 60,
						prompt:
							'Set 2:\n1. Do you think the solution they chose is a good one? Why or why not?\n2. What would you suggest instead, and why?'
					}
				]
			}
		]
	}
];
