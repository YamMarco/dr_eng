// Section 1 — לפענח את השאלה (programme sections table, L1 · Circle 1).
// Goal: before touching the text, the student knows three things — what is
// being asked, which paragraph it points at, and how long the answer should be.

import type { ProgramSection } from './index';
import { vocabRounds, type VocabWord } from '../vocabLesson';
import { mcqs, rule, takeaway } from './builders';

// 4.c.1.1 — the five words that open almost every Module C question. Taught,
// then drilled both ways: the point is recall without hesitation, not
// understanding.
const questionWords: VocabWord[] = [
	{
		en: 'paragraph',
		he: 'פסקה',
		heWrong: ['משפט', 'כותרת', 'עמוד'],
		cloze: 'Read ______ II and answer the question.',
		context: 'In paragraph II, the writer describes the study.'
	},
	{
		en: 'according to',
		he: 'לפי / על פי',
		heWrong: ['למרות', 'בגלל', 'בניגוד ל־'],
		cloze: '______ Dr. Klein, adults learn quickly.',
		context: 'According to a recent survey, over 30% of adults cannot swim.'
	},
	{
		en: 'explain / explains',
		he: 'להסביר / מסביר',
		heWrong: ['לתאר', 'לשאול', 'לתרגם'],
		cloze: 'What does Dr. Klein ______ about adult swimmers?',
		context: 'Adults understand what the teacher explains.'
	},
	{
		en: 'give ONE answer',
		he: 'תנו תשובה אחת בלבד',
		heWrong: ['תנו כמה דוגמאות', 'הסבירו בהרחבה', 'אל תענו'],
		cloze: '______ from paragraph II — not a list.',
		context: 'Give ONE answer from paragraph II.'
	},
	{
		en: 'complete the sentence',
		he: 'השלימו את המשפט',
		heWrong: ['כתבו משפט חדש', 'תקנו את השגיאה', 'קצרו את המשפט'],
		cloze: '______: "They could not ___."',
		context: 'Complete the sentence: They could not swim.'
	}
];

export const section1: ProgramSection = {
	id: 1,
	titleEn: 'Reading the Question',
	titleHe: 'לפענח את השאלה',
	intro: {
		greeting: 'What is the question actually asking?',
		goal: 'לפני שנוגעים בטקסט — לדעת מה נשאל, לאן זה שולח אותנו, ובאיזה אורך לענות.'
	},
	lessons: [
		{
			id: 's1-l1',
			titleHe: 'חמש המילים שפותחות כל שאלה',
			rounds: vocabRounds(
				'בכל שאלה בשאלון C חוזרות אותן חמש מילים. הן לא קשות — אבל אם אתם עוצרים לחשוב עליהן באמצע הבחינה, איבדתם שניות שאין לכם. המטרה כאן היא לא להבין אותן, אלא לדעת אותן בלי לחשוב.',
				questionWords
			)
		},
		{
			id: 's1-l2',
			titleHe: 'כל מילה — לאן היא שולחת אותי',
			screens: [
				rule(
					'תרגום לבד לא עוזר בבחינה. "according to Dr. Klein" לא אומר רק "לפי דוקטור קליין" — הוא אומר: לכו לפסקה שבה מופיע השם קליין, וקראו רק אותה.\n\nכל מילת שאלה היא הוראת ניווט. עכשיו נלמד את ההוראה של כל אחת.'
				),
				...mcqs([
					{
						prompt: '"According to Dr. Klein..." — מה עושים?',
						answer: 'הולכים לפסקה שבה מופיע קליין',
						wrong: ['מחפשים מספר בטקסט', 'עונים מהידע הכללי שלי']
					},
					{
						prompt: '"Read paragraph II and answer" — מה עושים?',
						answer: 'קוראים את פסקה II בלבד',
						wrong: ['קוראים את כל הטקסט מההתחלה', 'קוראים את הפסקה האחרונה']
					},
					{
						prompt: '"How many trees did the charity plant?" — מה מחפשים?',
						answer: 'מספר שצמוד למילה trees',
						wrong: ['את כל המספרים בטקסט', 'את שם הארגון']
					},
					{
						prompt: '"Give ONE answer" — איך עונים?',
						answer: 'משפט אחד',
						wrong: ['כל מה שמצאתי בפסקה', 'רשימה של שלושה דברים']
					},
					{
						prompt: '"Complete the sentence: They could not..." — מה עושים?',
						answer: 'מוצאים את המשפט בטקסט וממשיכים אותו',
						wrong: ['כותבים משפט חדש משלי', 'מתרגמים את המשפט לעברית']
					},
					{
						prompt: '"What does Dr. Klein explain?" — מה מחפשים?',
						answer: 'את מה שקליין אומר בטקסט',
						wrong: ['סיכום של כל הפסקה', 'את דעתי על מה שקליין אומר']
					},
					{
						prompt: '"Which statement is NOT true?" — מה מחפשים?',
						answer: 'את המשפט השגוי',
						wrong: ['את המשפט הנכון', 'את המשפט הארוך ביותר']
					},
					{
						prompt: '"What is the main idea of paragraph II?" — מה מחפשים?',
						answer: 'משפט שמכסה את כל הפסקה',
						wrong: ['את הפרט הכי מעניין בפסקה', 'את המשפט האחרון בפסקה']
					}
				]),
				takeaway('כל מילה = פעולה', [
					'according to X ← לפסקה של X.',
					'paragraph II ← רק לשם.',
					'how many ← מספר שצמוד לשם העצם שבשאלה.',
					'give ONE answer ← משפט אחד.',
					'NOT ← מחפשים את השגוי.'
				])
			]
		}
	]
};
