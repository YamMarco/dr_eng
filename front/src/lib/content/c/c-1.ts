// Part A — Reading Skills. One node per programme lesson (lesson00…lesson12).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from '../types';

export const c1Lessons: LessonNode[] = [
	{
		id: 'l00',
		section: 'c-1',
		titleHe: 'אני מחפש, לא קורא',
		titleEn: 'Mindset',
		code: 'c.1.1',
		required: [],
		position: { x: 0, y: 120 },
		big: false,
		content: {
			preface: [
				{
					type: 'preface',
					text: 'קבוצת וואטסאפ. 500 הודעות.\nחבר שואל: "מתי הבחינה?"\n\nאתם גוללים 500 הודעות מההתחלה?\n\nלא. לוחצים על 🔍 ומחפשים מילה אחת. תוך שנייה — שם.'
				},
				{
					type: 'preface',
					text: 'זה בדיוק מה שעושים בטקסט האנגלי.\n\nהטקסט = קבוצת הוואטסאפ.\nהשאלה = החיפוש.\nמילת המפתח = מה שמחפשים ב-🔍'
				},
				{
					type: 'preface',
					text: 'רוב התלמידים עושים את הטעות הזאת:\n\nמתחילים לקרוא מהמילה הראשונה. מנסים להבין הכל. נתקעים. הפאניקה מתחילה.\nאחרי 10 דקות — עדיין בפסקה 1. לכתיבה לא נשאר זמן.'
				},
				{
					type: 'summary',
					title: 'THE TOOL — שני עקרונות',
					lines: [
						'1 · הטקסט שם — התשובה כתובה בתוכו. לא צריך אנגלית מושלמת.',
						'2 · לא צריך להבין הכל — רק למצוא את מה שהשאלה מבקשת.'
					]
				},
				{
					type: 'preface',
					text: 'WATCH IT — ראו איך זה עובד.\n\n"Elephants are the largest land animals on Earth. They live in Africa and Asia. African elephants are bigger than Asian elephants. Elephants can live for up to 70 years."\n\nהשאלה: Where do elephants live?'
				},
				{
					type: 'steps',
					steps: [
						'קוראים את השאלה: "Where do elephants live?" — המילה שמחפשים היא live.',
						'לא קוראים מההתחלה — סורקים ומחפשים live בטקסט.',
						'מצאנו: "They live in Africa and Asia".',
						'כותבים: They live in Africa and Asia. — 8 שניות, בלי לקרוא את כל הפסקה.'
					]
				}
			],
			rounds: [
				{
					screens: [
						{
							type: 'passage-mcq',
							text: 'Dogs are one of the most popular pets in the world. They were first tamed from wolves thousands of years ago. Today, there are more than 400 different breeds of dog.',
							questions: [
								{
									prompt: 'השאלה: When were dogs first tamed? — מה המילה שאתם מחפשים בטקסט?',
									options: ['popular', 'tamed / first', 'breeds', 'world'],
									correctIndex: 1
								},
								{
									prompt: 'מצאתם את "first tamed from wolves thousands of years ago". מה התשובה?',
									options: [
										'Thousands of years ago',
										'More than 400',
										'From dogs',
										'It is not written in the text'
									],
									correctIndex: 0
								}
							]
						}
					]
				},
				{
					screens: [
						{
							type: 'preface',
							text: 'YOUR TURN — עכשיו לבד, בדיוק כמו בבחינה.'
						},
						{
							type: 'passage-mcq',
							text: 'The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.',
							questions: [
								{
									prompt: 'Why was the Great Wall of China built?',
									options: [
										'Because it is 21,000 km long',
										'To protect China from its enemies',
										'For the millions of tourists',
										'It is not written in the text'
									],
									correctIndex: 1
								}
							]
						},
						{
							type: 'self-check',
							text: 'The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.',
							prompt: 'How long is the Great Wall? — כתבו את התשובה באנגלית, במילים של הטקסט.',
							modelAnswer: 'About 21,000 kilometers long.'
						},
						{
							type: 'mcq',
							prompt: 'אם אתם לא מבינים מילה בטקסט — מה עושים?',
							options: [
								'עוצרים ומתרגמים את כל הפסקה',
								'ממשיכים — מחפשים את מה שהשאלה ביקשה',
								'מדלגים על השאלה',
								'מנחשים תשובה'
							],
							correctIndex: 1
						},
						{
							type: 'summary',
							title: 'ONE SENTENCE',
							lines: ['"הטקסט שם."', '"אני לא קורא אותו — אני מחפש בו."']
						}
					]
				}
			]
		}
	}
];
