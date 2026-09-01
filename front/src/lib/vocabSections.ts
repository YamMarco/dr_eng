// Module C sections 2..25. Each program lesson (docs/module c/program, L1..L24)
// maps to one section: L(n) -> section (n+1). Every section here holds exactly
// its opening lesson, s{id}-l1 (4.c.{id}.1), a 3-round vocab lesson teaching
// that program lesson's five words — same structure as section 1's lessons.
// Sections are chained straight down the path, below section 1.

import type { Section } from './sections';
import type { Lesson, SectionContent } from './sectionContent';
import { vocabRounds, type VocabWord } from './vocabLesson';

type VocabSectionSpec = {
	/** Section id, 2..25. */
	id: number;
	titleEn: string;
	titleHe: string;
	/** Shown before round 1. */
	intro: string;
	words: VocabWord[];
};

const specs: VocabSectionSpec[] = [
	{
		id: 2,
		titleEn: 'Strategic Reading',
		titleHe: 'קריאה אסטרטגית',
		intro: 'חמש מילים שמופיעות כמעט בכל הוראה בשאלון C. בלעדיהן קשה להבין מה השאלה מבקשת.',
		words: [
			{
				en: 'paragraph',
				he: 'פסקה',
				heWrong: ['משפט', 'כותרת', 'עמוד'],
				cloze: 'Read the second ______ and answer the question.',
				context: 'In paragraph II, the writer describes the study.'
			},
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'בזכות'],
				cloze: '______ the text, the study lasted two months.',
				context: 'According to Dr. Klein, adults learn quickly.'
			},
			{
				en: 'explain / explains',
				he: 'להסביר / מסביר',
				heWrong: ['לשאול', 'לתרגם', 'לספור'],
				cloze: 'Question 3 asks you to ______ why prices rose.',
				context: 'The article explains how the system works.'
			},
			{
				en: 'give ONE answer',
				he: 'תנו תשובה אחת בלבד',
				heWrong: ['תנו כמה תשובות', 'תנו דוגמה', 'אל תענו'],
				cloze: '______ from paragraph III — not a list.',
				context: 'Give ONE answer, in a full sentence.'
			},
			{
				en: 'complete the sentence',
				he: 'השלימו את המשפט',
				heWrong: ['כתבו משפט חדש', 'תקנו שגיאה', 'קצרו את המשפט'],
				cloze: '______: "They could not ___."',
				context: 'Complete the sentence using words from the text.'
			}
		]
	},
	{
		id: 3,
		titleEn: 'Eye Catchers — Numbers & Names',
		titleHe: 'מגנטים לעין — מספרים ושמות',
		intro: 'מילים שחוזרות בטקסטים על מחקרים וסקרים — במיוחד סביב מספרים ושמות.',
		words: [
			{
				en: 'result(s)',
				he: 'תוצאה / תוצאות',
				heWrong: ['שאלה', 'סיבה', 'כותרת'],
				cloze: "The study's ______ showed a clear drop in noise.",
				context: 'The results showed that most residents were happier.'
			},
			{
				en: 'found (past of find)',
				he: 'מצא / גילה',
				heWrong: ['איבד', 'בנה', 'שכח'],
				cloze: 'Scientists ______ that short workouts also help.',
				context: 'The researchers found that the effect lasted for months.'
			},
			{
				en: 'volunteer(s)',
				he: 'מתנדב / מתנדבים',
				heWrong: ['עובד בשכר', 'מנהל', 'לקוח'],
				cloze: 'About 300 ______ took part in the project.',
				context: 'The volunteers worked for free every weekend.'
			},
			{
				en: 'residents',
				he: 'תושבים',
				heWrong: ['תיירים', 'עובדים', 'אורחים'],
				cloze: 'Most ______ of the village said they felt safer.',
				context: 'The residents complained about the noise at night.'
			},
			{
				en: 'stress',
				he: 'לחץ / מתח',
				heWrong: ['מנוחה', 'שמחה', 'שקט'],
				cloze: 'Regular exercise can lower ______ levels.',
				context: 'Stress levels fell by almost 40 percent.'
			}
		]
	},
	{
		id: 4,
		titleEn: 'Eye Catchers — Negatives & Contrast',
		titleHe: 'מגנטים לעין — שלילה וניגוד',
		intro: 'מילים שמסמנות ניגוד או שינוי כיוון בטקסט — ומילות מפתח שכדאי לשים לב אליהן.',
		words: [
			{
				en: 'however',
				he: 'אולם / אבל',
				heWrong: ['לכן', 'לדוגמה', 'בנוסף'],
				cloze: 'The apps are popular. ______, not all of them work well.',
				context: 'However, experts say it is never too late to learn.'
			},
			{
				en: 'although',
				he: 'למרות ש־',
				heWrong: ['מכיוון ש־', 'לכן', 'כלומר'],
				cloze: '______ the class was free, few people came.',
				context: 'Although adults start later, they often improve faster.'
			},
			{
				en: 'benefit(s)',
				he: 'יתרון / תועלת',
				heWrong: ['חיסרון', 'מחיר', 'סיכון'],
				cloze: 'One ______ of working is learning responsibility.',
				context: 'The benefits of volunteering go beyond a good feeling.'
			},
			{
				en: 'effective',
				he: 'יעיל',
				heWrong: ['יקר', 'איטי', 'מסוכן'],
				cloze: 'Short workouts can be just as ______ as long ones.',
				context: 'The most effective programmes meet twice a week.'
			},
			{
				en: 'responsible',
				he: 'אחראי',
				heWrong: ['עצלן', 'מפוזר', 'ביישן'],
				cloze: 'Volunteering makes teenagers more ______.',
				context: 'Students became more responsible after the programme.'
			}
		]
	},
	{
		id: 5,
		titleEn: 'The Traffic-Light Method',
		titleHe: 'שיטת הרמזור',
		intro: 'מילים שמופיעות סביב מחקרים, סיבה ותוצאה.',
		words: [
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'במקום'],
				cloze: '______ the survey, 30% of adults cannot swim.',
				context: 'According to Dr. Okafor, the results were surprising.'
			},
			{
				en: 'suggest(s)',
				he: 'מרמז / מציע',
				heWrong: ['מוכיח', 'מכחיש', 'שוכח'],
				cloze: 'The data ______ that sleep affects memory.',
				context: 'The study suggests a link, but does not prove it.'
			},
			{
				en: 'affect / effect',
				he: 'משפיע / השפעה',
				heWrong: ['מונע', 'מסתיר', 'מודד'],
				cloze: 'Loud noise can ______ how well you sleep.',
				context: 'Noise affects sleep, and the effect can be serious.'
			},
			{
				en: 'focus(ed)',
				he: 'מרוכז / התמקד',
				heWrong: ['מבולבל', 'עייף', 'משועמם'],
				cloze: 'After the change, students were more ______.',
				context: 'The students stayed focused for the whole lesson.'
			},
			{
				en: 'produce(s)',
				he: 'מייצר / יוצר',
				heWrong: ['הורס', 'מוכר', 'קונה'],
				cloze: 'Not all methods ______ the same results.',
				context: 'The factory produces thousands of devices a day.'
			}
		]
	},
	{
		id: 6,
		titleEn: 'Detail Questions',
		titleHe: 'שאלות פרטים',
		intro: 'מילים לשאלות פרטים — סיבה, שיפור והתניה.',
		words: [
			{
				en: 'despite',
				he: 'למרות',
				heWrong: ['בגלל', 'בזכות', 'לפי'],
				cloze: '______ the noise, she managed to fall asleep.',
				context: 'Despite the problems, the programme succeeded.'
			},
			{
				en: 'improve',
				he: 'לשפר',
				heWrong: ['להחמיר', 'לשמור', 'למחוק'],
				cloze: 'Reading every day can ______ your English.',
				context: 'Students improved their results within two months.'
			},
			{
				en: 'cause(s)',
				he: 'גורם ל־ / סיבה',
				heWrong: ['מונע', 'פותר', 'מסתיר'],
				cloze: 'Too much noise can ______ stress.',
				context: 'The main cause of the problem was lack of sleep.'
			},
			{
				en: 'require(s)',
				he: 'דורש / זקוק ל־',
				heWrong: ['מבטל', 'מציע', 'שוכח'],
				cloze: 'The task ______ full concentration.',
				context: 'The programme requires two hours of training a week.'
			},
			{
				en: 'quality',
				he: 'איכות',
				heWrong: ['כמות', 'מחיר', 'מהירות'],
				cloze: 'The ______ of your sleep matters more than the hours.',
				context: 'The quality of the classes was very high.'
			}
		]
	},
	{
		id: 7,
		titleEn: 'Multiple Choice',
		titleHe: 'שאלות רב־ברירה',
		intro: 'מילים לשאלות רב־ברירה — דעה, החלפה והצלחה.',
		words: [
			{
				en: 'argue(s)',
				he: 'טוען',
				heWrong: ['מסכים', 'שותק', 'מוכיח'],
				cloze: 'Professor Nkosi ______ that homework is useful.',
				context: 'She argues that schools should teach kindness.'
			},
			{
				en: 'replace',
				he: 'להחליף',
				heWrong: ['להוסיף', 'לשבור', 'לתקן'],
				cloze: 'No app can ______ a real conversation.',
				context: 'Machines will not replace teachers completely.'
			},
			{
				en: 'successful',
				he: 'מצליח / מוצלח',
				heWrong: ['כושל', 'יקר', 'קשה'],
				cloze: 'The students became more ______ after the change.',
				context: 'The project was successful in every school that tried it.'
			},
			{
				en: 'introduce(d)',
				he: 'הכניס / הציג לראשונה',
				heWrong: ['ביטל', 'הסתיר', 'המשיך'],
				cloze: 'The school ______ a new reading programme this year.',
				context: 'The government introduced a law to protect forests.'
			},
			{
				en: 'entire',
				he: 'כל / שלם',
				heWrong: ['חצי', 'מעט', 'אף'],
				cloze: 'The ______ class took part in the experiment.',
				context: 'The entire village agreed to ban cars.'
			}
		]
	},
	{
		id: 8,
		titleEn: 'Complete the Sentence',
		titleHe: 'השלמת משפט',
		intro: 'מילים להשלמת משפטים — יצירה, צורך והחלפה.',
		words: [
			{
				en: 'develop(s)',
				he: 'מפתח',
				heWrong: ['הורס', 'מעתיק', 'מוכר'],
				cloze: 'Companies ______ new technology every year.',
				context: 'Volunteering helps young people develop new skills.'
			},
			{
				en: 'require(s)',
				he: 'דורש',
				heWrong: ['מבטל', 'מציע', 'מסתיר'],
				cloze: 'The programme ______ regular practice.',
				context: 'This job requires patience and attention.'
			},
			{
				en: 'replace',
				he: 'להחליף',
				heWrong: ['להוסיף', 'לשבור', 'לשמור'],
				cloze: 'Nothing can ______ a real teacher.',
				context: 'They replaced the old system with a digital one.'
			},
			{
				en: 'introduce(d)',
				he: 'הכניס לראשונה',
				heWrong: ['ביטל', 'סיים', 'הסתיר'],
				cloze: 'The company ______ a shorter working week.',
				context: 'The school introduced tablets in every classroom.'
			},
			{
				en: 'benefit(s)',
				he: 'תועלת / להפיק תועלת',
				heWrong: ['נזק', 'מחיר', 'סיכון'],
				cloze: 'Workers ______ from the new training programme.',
				context: 'One benefit of the change was less stress.'
			}
		]
	},
	{
		id: 9,
		titleEn: 'Two Correct Answers',
		titleHe: 'שתי תשובות נכונות',
		intro: 'מילים לשאלות "שתי תשובות נכונות" — נתינה, הגנה וגדילה.',
		words: [
			{
				en: 'responsible',
				he: 'אחראי',
				heWrong: ['עצלן', 'מפוזר', 'תלותי'],
				cloze: 'The programme makes students more ______.',
				context: 'Each teacher is responsible for one small group.'
			},
			{
				en: 'provide(s)',
				he: 'מספק / נותן',
				heWrong: ['לוקח', 'מוכר', 'מסתיר'],
				cloze: 'The centre ______ free classes for adults.',
				context: 'The programme provides books and computers.'
			},
			{
				en: 'community',
				he: 'קהילה',
				heWrong: ['ממשלה', 'חברה מסחרית', 'משפחה'],
				cloze: 'The whole ______ helped to clean the park.',
				context: 'The local community raised money for the school.'
			},
			{
				en: 'protect(s)',
				he: 'מגן על',
				heWrong: ['הורס', 'מוכר', 'מסתיר'],
				cloze: 'New laws ______ the forests from damage.',
				context: 'Parents want to protect their children from danger.'
			},
			{
				en: 'increase(d)',
				he: 'הגדיל / עלה',
				heWrong: ['ירד', 'נעצר', 'נעלם'],
				cloze: 'The number of volunteers ______ every year.',
				context: 'Noise increased after the new road was built.'
			}
		]
	},
	{
		id: 10,
		titleEn: 'Reference Questions',
		titleHe: 'שאלות התייחסות',
		intro: 'מילים לשאלות התייחסות — למה מתייחסת מילה, ומה נחקר.',
		words: [
			{
				en: 'refer(s) to',
				he: 'מתייחס ל־',
				heWrong: ['מתעלם מ־', 'מוחק', 'מסתיר'],
				cloze: "In line 4, the word 'it' ______ the study.",
				context: "The pronoun 'they' refers to the volunteers."
			},
			{
				en: 'experiment',
				he: 'ניסוי',
				heWrong: ['סיפור', 'דעה', 'כותרת'],
				cloze: 'The scientists ran a two-year ______.',
				context: 'In the experiment, one group exercised daily.'
			},
			{
				en: 'similar',
				he: 'דומה',
				heWrong: ['זהה', 'הפוך', 'רחוק'],
				cloze: "The results were ______ to last year's.",
				context: 'Adults and children showed similar progress.'
			},
			{
				en: 'intense',
				he: 'עז / חזק',
				heWrong: ['חלש', 'קל', 'איטי'],
				cloze: 'Seven minutes of ______ exercise is enough.',
				context: 'The training was short but very intense.'
			},
			{
				en: 'claim(s)',
				he: 'טוען',
				heWrong: ['מוכיח', 'מכחיש', 'שואל'],
				cloze: 'The writer ______ that the method always works.',
				context: 'He claims the study is wrong, but shows no proof.'
			}
		]
	},
	{
		id: 11,
		titleEn: 'Inference Questions',
		titleHe: 'שאלות הסקה',
		intro: 'מילים לשאלות הסקה — מה נרמז, ומה חלש במחקר.',
		words: [
			{
				en: 'imply / implies',
				he: 'רומז',
				heWrong: ['אומר במפורש', 'מכחיש', 'מוכיח'],
				cloze: 'The text does not say it, but it ______ that costs rose.',
				context: 'The ending implies that the project will continue.'
			},
			{
				en: 'conclude',
				he: 'להסיק',
				heWrong: ['להתחיל', 'לשאול', 'לפקפק'],
				cloze: 'From this we can ______ that sleep matters.',
				context: 'The researchers conclude that more study is needed.'
			},
			{
				en: 'limitation(s)',
				he: 'מגבלה / חיסרון',
				heWrong: ['יתרון', 'מטרה', 'תוצאה'],
				cloze: 'The study has one clear ______: it was too short.',
				context: 'Critics point to the limitations of the research.'
			},
			{
				en: 'maintain',
				he: 'לשמור על / להתמיד',
				heWrong: ['להפסיק', 'לשכוח', 'לאבד'],
				cloze: 'Most people cannot ______ this routine for long.',
				context: 'It is hard to maintain the habit after a month.'
			},
			{
				en: 'challenge(s)',
				he: 'אתגר / לערער על',
				heWrong: ['הוכחה', 'הסכמה', 'סיכום'],
				cloze: 'This finding ______ what experts believed for years.',
				context: 'The new data challenges the old theory.'
			}
		]
	},
	{
		id: 12,
		titleEn: 'Main Idea',
		titleHe: 'הרעיון המרכזי',
		intro: 'מילים לשאלות רעיון מרכזי — הרס, אזהרה וחומרה.',
		words: [
			{
				en: 'destroy / destruction',
				he: 'הורס / הרס',
				heWrong: ['בונה', 'שומר', 'מתקן'],
				cloze: 'Fires ______ large areas of forest every year.',
				context: 'The destruction of the forest happened very fast.'
			},
			{
				en: 'cause(s)',
				he: 'גורם / סיבה',
				heWrong: ['תוצאה', 'פתרון', 'מטרה'],
				cloze: 'Farming is the main ______ of deforestation.',
				context: 'Cutting trees causes soil to wash away.'
			},
			{
				en: 'warn(s)',
				he: 'מזהיר',
				heWrong: ['מבטיח', 'מרגיע', 'מכחיש'],
				cloze: 'Scientists ______ that the situation is getting worse.',
				context: 'Dr. Diallo warns that the forests may not recover.'
			},
			{
				en: 'severe',
				he: 'חמור / קשה',
				heWrong: ['קל', 'נעים', 'זמני'],
				cloze: 'The region now faces more ______ droughts.',
				context: 'The damage was severe and hard to repair.'
			},
			{
				en: 'individual',
				he: 'יחיד / אדם בודד',
				heWrong: ['קבוצה', 'ממשלה', 'חברה'],
				cloze: 'Every ______ can help by using less plastic.',
				context: 'One individual cannot fix the problem alone.'
			}
		]
	},
	{
		id: 13,
		titleEn: "Author's Attitude",
		titleHe: 'עמדת הכותב',
		intro: 'מילים שמגלות את עמדת הכותב — דאגה, הקלה וזהירות.',
		words: [
			{
				en: 'unfortunately',
				he: 'לרוע המזל / למרבה הצער',
				heWrong: ['למרבה השמחה', 'במקרה', 'בוודאי'],
				cloze: '______, many forests are disappearing fast.',
				context: 'Unfortunately, the plan did not work as hoped.'
			},
			{
				en: 'fortunately',
				he: 'למרבה המזל',
				heWrong: ['למרבה הצער', 'במקרה', 'לבסוף'],
				cloze: '______, some governments have started to act.',
				context: 'Fortunately, the fire was stopped in time.'
			},
			{
				en: 'concerned',
				he: 'מודאג',
				heWrong: ['רגוע', 'אדיש', 'מרוצה'],
				cloze: 'Scientists are deeply ______ about the change.',
				context: 'Parents are concerned about screen time.'
			},
			{
				en: 'argue',
				he: 'לטעון / לצדד',
				heWrong: ['להסכים', 'לשתוק', 'לתאר'],
				cloze: 'The writer ______ strongly that change is needed.',
				context: 'She argues that schools must do more.'
			},
			{
				en: 'cautiously',
				he: 'בזהירות',
				heWrong: ['בביטחון מלא', 'בפזיזות', 'באדישות'],
				cloze: 'Experts are ______ optimistic about the results.',
				context: 'He answered cautiously, not sure of the facts.'
			}
		]
	},
	{
		id: 14,
		titleEn: 'Vocabulary — Social',
		titleHe: 'אוצר מילים — חברה',
		intro: 'אוצר מילים לנושאים חברתיים — מתנדבים, קהילה והזדמנויות.',
		words: [
			{
				en: 'community',
				he: 'קהילה',
				heWrong: ['ממשלה', 'כיתה', 'מדינה'],
				cloze: 'The local ______ came together to help.',
				context: 'The community centre offers free classes.'
			},
			{
				en: 'volunteer',
				he: 'מתנדב / להתנדב',
				heWrong: ['עובד בשכר', 'מנהל', 'מבקר'],
				cloze: 'She ______ at the hospital twice a week.',
				context: 'As a volunteer, he helps children read.'
			},
			{
				en: 'responsible',
				he: 'אחראי',
				heWrong: ['תלותי', 'מפוזר', 'עצל'],
				cloze: 'Work makes young people more ______.',
				context: 'Each student is responsible for one task.'
			},
			{
				en: 'programme',
				he: 'תוכנית',
				heWrong: ['סרט', 'כרטיס', 'פרס'],
				cloze: 'The training ______ lasted two years.',
				context: 'The after-school programme helps with homework.'
			},
			{
				en: 'opportunity',
				he: 'הזדמנות',
				heWrong: ['בעיה', 'חובה', 'סכנה'],
				cloze: 'Volunteering is a great ______ to learn.',
				context: 'This job is an opportunity to gain experience.'
			}
		]
	},
	{
		id: 15,
		titleEn: 'Vocabulary — Tech & Environment',
		titleHe: 'אוצר מילים — טכנולוגיה וסביבה',
		intro: 'אוצר מילים לנושאי טכנולוגיה וסביבה.',
		words: [
			{
				en: 'research',
				he: 'מחקר',
				heWrong: ['סקר קצר', 'דעה', 'סיפור'],
				cloze: 'New ______ shows that sleep affects memory.',
				context: 'The research took three years to complete.'
			},
			{
				en: 'technology',
				he: 'טכנולוגיה',
				heWrong: ['טבע', 'אמנות', 'היסטוריה'],
				cloze: 'New ______ is changing the way we work.',
				context: 'Modern technology makes learning easier.'
			},
			{
				en: 'environment',
				he: 'סביבה',
				heWrong: ['כלכלה', 'ממשלה', 'תרבות'],
				cloze: 'We must protect the ______ for the future.',
				context: 'The factory harmed the local environment.'
			},
			{
				en: 'affect / effect',
				he: 'משפיע / השפעה',
				heWrong: ['מונע', 'מודד', 'מסתיר'],
				cloze: "Pollution can ______ people's health.",
				context: 'Noise affects sleep, and the effect is serious.'
			},
			{
				en: 'prevent',
				he: 'למנוע',
				heWrong: ['לגרום', 'לעודד', 'לזרז'],
				cloze: 'Exercise can ______ many health problems.',
				context: 'The new rule was made to prevent accidents.'
			}
		]
	},
	{
		id: 16,
		titleEn: 'Words for Writing',
		titleHe: 'מילים לכתיבה',
		intro: 'מילים שימושיות לכתיבת חיבור — לנימוק ולביסוס.',
		words: [
			{
				en: 'volunteer',
				he: 'להתנדב / מתנדב',
				heWrong: ['לעבוד בשכר', 'לנוח', 'לבקר'],
				cloze: 'Many young people ______ in their free time.',
				context: 'Volunteering helps me develop useful skills.'
			},
			{
				en: 'benefit',
				he: 'יתרון / תועלת',
				heWrong: ['חיסרון', 'מחיר', 'סכנה'],
				cloze: 'One ______ of working is earning your own money.',
				context: 'The benefits of reading are clear.'
			},
			{
				en: 'effective',
				he: 'יעיל',
				heWrong: ['יקר', 'איטי', 'מיותר'],
				cloze: 'An ______ way to improve is to practise daily.',
				context: 'The most effective method is regular practice.'
			},
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'במקום'],
				cloze: '______ many experts, experience matters most.',
				context: 'According to researchers, teenagers need more sleep.'
			},
			{
				en: 'responsible',
				he: 'אחראי',
				heWrong: ['תלותי', 'עצל', 'מפוזר'],
				cloze: 'Work teaches us to be ______.',
				context: 'Being responsible means doing what you promised.'
			}
		]
	},
	{
		id: 17,
		titleEn: 'Sentences That Work',
		titleHe: 'משפטים שעובדים',
		intro: 'מבנים שפותחים ומחברים משפטים בחיבור דעה.',
		words: [
			{
				en: 'I think / I believe',
				he: 'אני חושב/ת / אני מאמין/ה',
				heWrong: ['אני יודע בוודאות', 'אחרים חושבים', 'ייתכן ש־'],
				cloze: '______ that all pupils should do volunteer work.',
				context: 'I believe that reading is the best way to learn English.'
			},
			{
				en: 'because',
				he: 'כי / מכיוון ש־',
				heWrong: ['למרות ש־', 'לכן', 'לדוגמה'],
				cloze: 'Volunteering is good ______ it teaches responsibility.',
				context: 'I agree, because working builds confidence.'
			},
			{
				en: 'for example',
				he: 'לדוגמה',
				heWrong: ['לסיכום', 'לעומת זאת', 'בנוסף'],
				cloze: 'Many students help others. ______, they visit the elderly.',
				context: 'For example, a teenager who works learns time management.'
			},
			{
				en: 'in addition / also',
				he: 'בנוסף / גם',
				heWrong: ['לעומת זאת', 'לכן', 'לבסוף'],
				cloze: 'It builds skills. ______, it looks good on a CV.',
				context: 'In addition, volunteering helps you meet new people.'
			},
			{
				en: 'in conclusion',
				he: 'לסיכום',
				heWrong: ['ראשית', 'לדוגמה', 'אולם'],
				cloze: '______, I believe the benefits are clear.',
				context: 'In conclusion, every teenager should try volunteering.'
			}
		]
	},
	{
		id: 18,
		titleEn: 'Connectors — Error Clinic',
		titleHe: 'מילות קישור',
		intro: 'מילות קישור נפוצות — ושגיאות שכדאי להימנע מהן.',
		words: [
			{
				en: 'because',
				he: 'כי / מכיוון ש־',
				heWrong: ['אבל', 'לכן', 'כלומר'],
				cloze: 'I support it ______ it helps the community.',
				context: 'She stayed home because she was ill.'
			},
			{
				en: 'however',
				he: 'אולם / אבל',
				heWrong: ['לכן', 'לדוגמה', 'מכיוון ש־'],
				cloze: 'The idea is good. ______, it costs a lot of money.',
				context: 'However, not everyone agrees with the plan.'
			},
			{
				en: 'for example',
				he: 'לדוגמה',
				heWrong: ['לסיכום', 'אולם', 'בנוסף'],
				cloze: 'Some jobs teach real skills — ______, working in a shop.',
				context: 'For example, many students volunteer once a week.'
			},
			{
				en: 'in addition / also',
				he: 'בנוסף / גם',
				heWrong: ['אולם', 'לכן', 'לבסוף'],
				cloze: 'It builds confidence. ______, it teaches teamwork.',
				context: 'In addition, the programme is completely free.'
			},
			{
				en: 'although',
				he: 'למרות ש־',
				heWrong: ['מכיוון ש־', 'לכן', 'לדוגמה'],
				cloze: '______ the work was hard, the students enjoyed it.',
				context: 'Although it rained, the event went ahead.'
			}
		]
	},
	{
		id: 19,
		titleEn: 'Time Management',
		titleHe: 'ניהול זמן',
		intro: 'מילות הוראה שצריך לזהות מייד — כדי לא לבזבז זמן במבחן.',
		words: [
			{
				en: 'paragraph',
				he: 'פסקה',
				heWrong: ['משפט', 'עמוד', 'כותרת'],
				cloze: 'Read ______ III before you answer.',
				context: 'The answer is in paragraph II, near the end.'
			},
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'לפני'],
				cloze: '______ the researcher, the effect was small.',
				context: 'According to the text, the study lasted a year.'
			},
			{
				en: 'complete',
				he: 'להשלים',
				heWrong: ['להתחיל', 'למחוק', 'לקצר'],
				cloze: '______ the sentence with words from the text.',
				context: 'Complete the missing part using the passage.'
			},
			{
				en: 'give ONE answer',
				he: 'תנו תשובה אחת בלבד',
				heWrong: ['תנו שתי תשובות', 'תנו דוגמה', 'אל תענו'],
				cloze: '______ — do not write a list.',
				context: 'Give ONE answer, taken from paragraph III.'
			},
			{
				en: 'put a √ by the TWO',
				he: 'סמנו √ ליד השתיים',
				heWrong: ['סמנו אחת', 'סמנו הכל', 'אל תסמנו'],
				cloze: '______ correct statements.',
				context: 'Put a √ by the TWO answers that match the text.'
			}
		]
	},
	{
		id: 20,
		titleEn: 'Timed Challenge',
		titleHe: 'אתגר מתוזמן',
		intro: 'הוראות מפתח לתרגול מתוזמן — לזהות מהר ולפעול.',
		words: [
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'במקום'],
				cloze: '______ Dr. Tanaka, apps cannot replace people.',
				context: 'According to the study, most learners are adults.'
			},
			{
				en: 'explain(s)',
				he: 'מסביר',
				heWrong: ['שואל', 'מתרגם', 'מונה'],
				cloze: 'Question 2 asks what the writer ______.',
				context: 'The text explains why the plan failed.'
			},
			{
				en: 'complete',
				he: 'להשלים',
				heWrong: ['להתחיל', 'לתקן', 'לקצר'],
				cloze: '______ the sentence: "They could not ___."',
				context: 'Complete the answer with two or three words.'
			},
			{
				en: 'two correct',
				he: 'שתי תשובות נכונות',
				heWrong: ['תשובה אחת נכונה', 'אין תשובה נכונה', 'שלוש נכונות'],
				cloze: 'Mark the ______ answers, not just one.',
				context: 'There are two correct options in this question.'
			},
			{
				en: 'not',
				he: 'לא / שלילה',
				heWrong: ['כן', 'אולי', 'תמיד'],
				cloze: 'Which statement is ______ true according to the text?',
				context: 'The question asks which detail is NOT mentioned.'
			}
		]
	},
	{
		id: 21,
		titleEn: 'Yes / No Questions',
		titleHe: 'שאלות כן/לא',
		intro: 'מבנים לפתיחת עמדה בשאלת כן/לא בחיבור.',
		words: [
			{
				en: 'I think / I believe',
				he: 'אני חושב/ת / אני מאמין/ה',
				heWrong: ['כולם חושבים', 'ידוע ש־', 'ספק אם'],
				cloze: '______ that school days are too long.',
				context: 'I think that every teenager should learn to cook.'
			},
			{
				en: 'In my opinion',
				he: 'לדעתי',
				heWrong: ['לדעת כולם', 'בעובדה', 'אולי'],
				cloze: '______, tests are held too often.',
				context: 'In my opinion, homework should be shorter.'
			},
			{
				en: 'because',
				he: 'כי / מכיוון ש־',
				heWrong: ['אבל', 'למרות', 'לכן'],
				cloze: 'I disagree ______ the plan is too expensive.',
				context: 'I agree, because it gives students real experience.'
			},
			{
				en: 'important',
				he: 'חשוב',
				heWrong: ['מיותר', 'קל', 'זול'],
				cloze: 'It is ______ for teenagers to have free time.',
				context: 'It is important to start every opinion clearly.'
			},
			{
				en: 'agree / disagree',
				he: 'מסכים / לא מסכים',
				heWrong: ['שואל', 'שוכח', 'מתאר'],
				cloze: 'I ______ with the idea that phones help learning.',
				context: 'I disagree with the statement in the prompt.'
			}
		]
	},
	{
		id: 22,
		titleEn: 'Reason · Explanation · Example',
		titleHe: 'נימוק, הסבר ודוגמה',
		intro: 'מבנים לבניית פסקת נימוק מסודרת: נימוק ← הסבר ← דוגמה.',
		words: [
			{
				en: 'reason',
				he: 'סיבה / נימוק',
				heWrong: ['תוצאה', 'דוגמה', 'סיכום'],
				cloze: 'One ______ to volunteer is that it builds skills.',
				context: 'The main reason is that it teaches responsibility.'
			},
			{
				en: 'this means',
				he: 'כלומר / זאת אומרת',
				heWrong: ['למרות זאת', 'לדוגמה', 'לסיכום'],
				cloze: 'Students practise daily. ______, they improve fast.',
				context: 'The class is free — this means anyone can join.'
			},
			{
				en: 'for example',
				he: 'לדוגמה',
				heWrong: ['לסיכום', 'אולם', 'ראשית'],
				cloze: 'Work teaches skills — ______, how to manage money.',
				context: 'For example, a student who volunteers learns teamwork.'
			},
			{
				en: 'therefore',
				he: 'לכן / לפיכך',
				heWrong: ['למרות זאת', 'לדוגמה', 'מכיוון ש־'],
				cloze: 'It builds confidence. ______, I support it.',
				context: 'The evidence is strong; therefore, the plan should go ahead.'
			},
			{
				en: 'another reason',
				he: 'סיבה נוספת',
				heWrong: ['אותה סיבה', 'ללא סיבה', 'הסיבה היחידה'],
				cloze: '______ is that it helps the community.',
				context: 'Another reason is that it looks good on a CV.'
			}
		]
	},
	{
		id: 23,
		titleEn: 'Example Bank for the Exam',
		titleHe: 'בנק דוגמאות למבחן',
		intro: 'חמישה משפטי פתיחה שמתאימים כמעט לכל נושא בחיבור.',
		words: [
			{
				en: 'Many students...',
				he: '"תלמידים רבים..."',
				heWrong: ['"תלמיד אחד..."', '"אף תלמיד לא..."', '"המורים..."'],
				cloze: '______ benefit from doing volunteer work.',
				context: 'Many students find that a part-time job builds confidence.'
			},
			{
				en: 'For example, a teenager who...',
				he: '"לדוגמה, מתבגר ש..."',
				heWrong: ['"לסיכום..."', '"אולם..."', '"ראשית..."'],
				cloze: '______ works part-time learns to manage time.',
				context: 'For example, a teenager who volunteers meets new people.'
			},
			{
				en: 'Studies show...',
				he: '"מחקרים מראים..."',
				heWrong: ['"אני מרגיש ש..."', '"ייתכן ש..."', '"כולם יודעים ש..."'],
				cloze: '______ that experience helps students later in life.',
				context: 'Studies show that reading every day improves writing.'
			},
			{
				en: 'In many schools...',
				he: '"בבתי ספר רבים..."',
				heWrong: ['"בבית ספר אחד..."', '"בשום בית ספר..."', '"בבית..."'],
				cloze: '______, pupils do volunteer work once a week.',
				context: 'In many schools, students join work-experience programmes.'
			},
			{
				en: 'According to many experts...',
				he: '"לדעת מומחים רבים..."',
				heWrong: ['"לדעתי..."', '"בניגוד למומחים..."', '"אף מומחה לא..."'],
				cloze: '______, real-life experience is very valuable.',
				context: 'According to many experts, teenagers learn best by doing.'
			}
		]
	},
	{
		id: 24,
		titleEn: 'Full Simulation',
		titleHe: 'סימולציה מלאה',
		intro: 'הוראות המבחן שחוזרות בכל סימולציה — לזהות ולפעול בלי היסוס.',
		words: [
			{
				en: 'according to',
				he: 'לפי / על פי',
				heWrong: ['בניגוד ל־', 'למרות', 'לפני'],
				cloze: '______ paragraph II, the effect lasts for months.',
				context: 'According to the writer, kindness helps the giver.'
			},
			{
				en: 'complete the sentence',
				he: 'השלימו את המשפט',
				heWrong: ['כתבו משפט חדש', 'תקנו שגיאה', 'קצרו את המשפט'],
				cloze: '______: "They could not ___."',
				context: 'Complete the sentence with words from paragraph I.'
			},
			{
				en: 'what do we learn',
				he: 'מה אנחנו לומדים',
				heWrong: ['מה דעתכם', 'מה הכותרת', 'כמה מילים'],
				cloze: '"______ from paragraph I about the study?"',
				context: "The question 'what do we learn' asks for the main point."
			},
			{
				en: 'put a √',
				he: 'סמנו √',
				heWrong: ['מחקו', 'כתבו מחדש', 'השאירו ריק'],
				cloze: '______ by the TWO correct answers.',
				context: 'Put a √ next to each statement that the text supports.'
			},
			{
				en: 'not true',
				he: 'לא נכון',
				heWrong: ['נכון', 'חשוב', 'כתוב בטקסט'],
				cloze: 'Which statement is ______ according to the text?',
				context: 'Three options are correct; one is not true.'
			}
		]
	},
	{
		id: 25,
		titleEn: 'Error Analysis',
		titleHe: 'ניתוח שגיאות מסכם',
		intro: 'מילים לשיחה על טעויות ולמידה מהן — הסיכום של הקורס.',
		words: [
			{
				en: 'error',
				he: 'שגיאה / טעות',
				heWrong: ['הצלחה', 'שאלה', 'כלל'],
				cloze: 'I made one ______ in question 3.',
				context: 'An error is a signal that shows what to fix.'
			},
			{
				en: 'pattern',
				he: 'דפוס / תבנית',
				heWrong: ['מקרה', 'ניחוש', 'סיכום'],
				cloze: 'Which ______ did I forget to use?',
				context: 'Every wrong answer had a missing pattern.'
			},
			{
				en: 'confident',
				he: 'בטוח בעצמי',
				heWrong: ['מבולבל', 'מודאג', 'אדיש'],
				cloze: 'After practice, I feel ______ about P3.',
				context: 'She felt confident before the exam.'
			},
			{
				en: 'ready',
				he: 'מוכן',
				heWrong: ['עייף', 'מבולבל', 'מאחר'],
				cloze: 'I feel ______ for the real exam now.',
				context: 'After the simulation, the class was ready.'
			},
			{
				en: 'improve',
				he: 'להשתפר / לשפר',
				heWrong: ['להחמיר', 'לוותר', 'לשכוח'],
				cloze: 'Fixing one pattern helped me ______.',
				context: 'I improved a lot by checking my errors.'
			}
		]
	}
];

// One node per section, chained straight down below section 1 (which ends at
// y = 770). x zig-zags so the path isn't a dead-straight vertical line.
const X_CYCLE = [0, 70, 100, 70, 0, -70, -100, -70];
const FIRST_Y = 900;
const STEP_Y = 120;
// Sections hand-extended past their generated opener in sectionContent.ts,
// and how many extra node rows each adds below it. Later sections shift down
// by that much so the chain stays strictly top-to-bottom.
const EXTRA_ROWS: Record<number, number> = { 3: 2, 4: 2 };

function extraOffset(id: number): number {
	let rows = 0;
	for (const [sectionId, count] of Object.entries(EXTRA_ROWS)) {
		if (Number(sectionId) < id) rows += count;
	}
	return rows * STEP_Y;
}

export const vocabSectionMeta: Section[] = specs.map((s) => ({
	id: s.id,
	titleEn: s.titleEn,
	titleHe: s.titleHe
}));

export const vocabSectionContent: Record<string, SectionContent> = Object.fromEntries(
	specs.map((s, index): [string, SectionContent] => {
		const lesson: Lesson = {
			id: `s${s.id}-l1`,
			titleHe: `מילים: ${s.titleHe}`,
			prerequisites: [index === 0 ? 's1-l8' : `s${s.id - 1}-l1`],
			x: X_CYCLE[index % X_CYCLE.length],
			y: FIRST_Y + index * STEP_Y + extraOffset(s.id),
			rounds: vocabRounds(s.intro, s.words)
		};
		return [`c-${s.id}`, { lessons: [lesson] }];
	})
);
