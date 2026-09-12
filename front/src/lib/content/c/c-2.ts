// Part B - Vocabulary. One node per word group (split from the original
// lesson13...lesson16 into smaller chunks so each node teaches fewer words).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from "../types";

export const c2Lessons: LessonNode[] = [
  {
    id: "q-words-1",
    section: "c-2",
    titleHe: "מילות שאלה: איפה ומה",
    titleEn: "Question Words: Where & What",
    code: "c.2.1",
    required: [],
    position: { x: 0, y: 120 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'כמה נקודות אבדו בגלל מילה אחת?\n\n"What do we learn from paragraph II?" - התלמיד ידע את התשובה, אבל כתב אותה מפסקה III.\nציון: 0 נקודות. הוא לא שם לב לאיזו פסקה ההוראה שלחה אותו.',
        },
        {
          type: "preface",
          text: 'ומה קורה עם "Give ONE" מול "Give TWO"?\n\nתלמיד שכתב תשובה אחת כששאלו TWO - מפסיד חצי מהניקוד.\nתלמיד שכתב שתי תשובות כששאלו ONE - גם מפסיד.\nחמש מילים קטנות, המון נקודות.',
        },
        { type: "word-card", word: "paragraph", translationHe: "פסקה" },
        {
          type: "word-card",
          word: "according to",
          translationHe: "לפי / על פי",
        },
        {
          type: "word-card",
          word: "what do we learn",
          translationHe: "מה אנחנו לומדים",
        },
        {
          type: "word-card",
          word: "give ONE answer",
          translationHe: "תנו תשובה אחת בלבד",
        },
        {
          type: "word-card",
          word: "give TWO answers",
          translationHe: "תנו שתי תשובות",
        },
        {
          type: "steps",
          steps: [
            '"What do we learn from paragraph I about Redonda?" ← "what do we learn" = מה לומדים · "paragraph I" = רק פסקה I.',
            '"According to Dr. Diallo, give ONE reason why trees survive." ← "according to" = לפי הדובר הזה בדיוק · "give ONE" = תשובה אחת.',
            "אם ההוראה אומרת TWO - סופרים עד שתיים. לא עוצרים אחרי הראשונה.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: 'מה המשמעות של "paragraph"?',
              options: ["פסקה", "שאלה", "עמוד", "משפט"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "according to"?',
              options: ["בניגוד ל־", "לפי / על פי", "בנוסף ל־", "למרות"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "what do we learn"?',
              options: [
                "מה אנחנו לומדים",
                "מי כתב את הטקסט",
                "כמה פסקאות יש",
                "מתי זה קרה",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "give ONE answer"?',
              options: [
                "תנו כמה תשובות שתמצאו",
                "תנו תשובה ארוכה",
                "תנו תשובה אחת בלבד",
                "תנו דוגמה",
              ],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "give TWO answers"?',
              options: [
                "תנו תשובה אחת מפורטת",
                "תנו שתי תשובות",
                "תנו שלוש תשובות",
                "תנו דוגמה אחת",
              ],
              correctIndex: 1,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - בכל שאלה, לאן ההוראה שולחת אתכם?",
            },
            {
              type: "mcq",
              prompt:
                '"What do we learn from paragraph III about the volunteers?" - מה ההוראה?',
              options: [
                "לקרוא את כל הטקסט",
                '"what do we learn" + "paragraph III" ← ללכת רק לפסקה III',
                "לתת שתי תשובות",
                "להשלים משפט",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                '"According to Professor Mills, give ONE reason why volunteering is important." - מה ההוראה?',
              options: [
                "לכתוב את כל הסיבות",
                "לכתוב מה שאני חושב",
                '"according to" ← לפסקה של Mills, "give ONE" ← סיבה אחת',
                "להקיף תשובה",
              ],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt:
                '"Give TWO answers: How did the students change?" - מה ההוראה?',
              options: [
                "תשובה אחת מפורטת",
                "שלוש תשובות ליתר ביטחון",
                "לפי מה שכתוב בפסקה הראשונה בלבד",
                "שתי תשובות - ממוספרות",
              ],
              correctIndex: 3,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"paragraph + according to = לאן הולכים. what do we learn / give ONE / give TWO = כמה כותבים."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: קודם בודקים לאן, אחר כך כמה.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "paragraph = פסקה · according to = לפי · what do we learn = מה לומדים · give ONE = תשובה אחת",
                "paragraph = עמוד · according to = בניגוד ל־ · what do we learn = מתי · give ONE = שתי תשובות",
                "paragraph = שאלה · according to = בנוסף · what do we learn = מי · give ONE = דוגמה",
                "כל המילים האלה אומרות אותו דבר",
              ],
              correctIndex: 0,
              explanation: "חמש מילות המיקום והכימות הבסיסיות.",
            },
            {
              type: "mcq",
              prompt: '"Read paragraph II and give ONE answer." - מה עושים?',
              options: [
                "קוראים את כל הטקסט ונותנים תשובה",
                "הולכים לפסקה II בלבד ונותנים תשובה אחת",
                "קוראים פסקאות I ו-II ונותנים שתיים",
              ],
              correctIndex: 1,
              explanation: "paragraph II = רק שם. give ONE = תשובה אחת.",
            },
            {
              type: "mcq",
              prompt: '"Give TWO answers" - אפשר לכתוב תשובה אחת ארוכה.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. TWO = שתי תשובות נפרדות, לא אחת ארוכה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעכשיו על שאלות בחינה אמיתיות.",
            },
            {
              type: "passage-mcq",
              text: "III  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.",
              questions: [
                {
                  prompt:
                    "What do we learn from paragraph III about schools? (לכו רק לפסקה III)",
                  options: [
                    "Schools stopped volunteering programmes",
                    "Students who volunteer become more responsible",
                    "Professor Mills works at a school",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: "III  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              prompt:
                'Give TWO answers: How did the area change? כתבו (1) ו-(2).',
              modelAnswer:
                "(1) The number of birds increased by 60% in Ethiopia. (2) Rivers in Kenya that were dry for 20 years began to flow again.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: "II  The project is led by Dr. Amara Diallo. According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.",
              prompt:
                'According to Dr. Diallo, give ONE reason why trees survive.',
              modelAnswer:
                "According to Dr. Diallo, trees survive because local people are involved and care for them.",
            },
            {
              type: "self-check",
              prompt:
                'תלמיד קיבל את השאלה "Give TWO answers" וכתב תשובה אחת ארוכה עם "and" באמצע. מה הבעיה?',
              modelAnswer:
                "זו עדיין תשובה אחת - הבודק מחפש שתי נקודות נפרדות וממוספרות, לא משפט אחד ארוך.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "q-words-2",
    section: "c-2",
    titleHe: "מילות שאלה: איך עונים",
    titleEn: "Question Words: How to Answer",
    code: "c.2.2",
    required: ["q-words-1"],
    position: { x: 70, y: 240 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'עוד טעות יקרה:\n\n"Complete the sentence: People left because…" - התלמיד כתב משפט חדש לגמרי במקום להמשיך את מה שכבר כתוב.\nציון: 0 נקודות. הוא לא הבין את ההוראה "complete" - להשלים, לא לכתוב מחדש.',
        },
        {
          type: "word-card",
          word: "complete the sentence",
          translationHe: "השלימו את המשפט",
        },
        {
          type: "word-card",
          word: "circle the correct answer",
          translationHe: "הקיפו את התשובה הנכונה",
        },
        {
          type: "word-card",
          word: "explain / explains",
          translationHe: "להסביר / מסביר",
        },
        { type: "word-card", word: "because", translationHe: "כי / מפני ש־" },
        { type: "word-card", word: "in order to", translationHe: "כדי ל־" },
        {
          type: "steps",
          steps: [
            '"Complete the sentence: People left because…" ← ממשיכים את המשפט, לא כותבים חדש.',
            '"Explain why the goats were removed." ← נותנים סיבה מהטקסט, לא רק מעתיקים משפט.',
            '"Because" בשאלה ← מחפשים סיבה. "In order to" בשאלה ← מחפשים מטרה.',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: 'מה המשמעות של "complete the sentence"?',
              options: [
                "השלימו את המשפט שהתחיל",
                "כתבו משפט חדש משלכם",
                "תרגמו את המשפט",
                "מחקו את המשפט",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "circle the correct answer"?',
              options: [
                "כתבו תשובה משלכם",
                "סמנו את כל התשובות",
                "העתיקו מהטקסט",
                "הקיפו את התשובה הנכונה",
              ],
              correctIndex: 3,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "explain"?',
              options: ["לתרגם", "להסביר", "להעתיק", "לספור"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "because"?',
              options: ["למרות ש־", "כדי ל־", "כי / מפני ש־", "בנוסף ל־"],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: 'מה המשמעות של "in order to"?',
              options: ["כדי ל־", "כי / מפני ש־", "לפי", "אבל"],
              correctIndex: 0,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - בכל שאלה, מהי ההוראה שמסתתרת בתוכה?",
            },
            {
              type: "mcq",
              prompt:
                '"Complete the sentence: Students volunteer because…" - מה ההוראה?',
              options: [
                '"complete" + "because" ← להשלים את הסיבה מהטקסט, בלי לכתוב שוב because',
                "לכתוב משפט חדש לגמרי",
                "להקיף את התשובה הנכונה",
                "לתרגם את המשפט לעברית",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt:
                '"Explain why the number of trees increased in Kenya." - מה ההוראה?',
              options: [
                "להעתיק משפט מהטקסט בלי לשנות",
                "לתת סיבה, בהבנה שלי, מבוססת על הטקסט",
                "לענות רב-ברירה",
                "לתת שתי תשובות",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                '"They removed the goats in order to ___" - מה מחפשים?',
              options: [
                "סיבה - because",
                "מטרה - מה רצו להשיג",
                "מקום",
                "זמן",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"complete = ממשיכים, לא מתחילים. because = סיבה. in order to = מטרה."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: complete = ממשיכים, לא כותבים חדש.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "complete the sentence = השלימו · circle = הקיפו · explain = הסבירו · because = סיבה · in order to = מטרה",
                "complete the sentence = תרגמו · circle = מחקו · explain = העתיקו · because = מטרה · in order to = סיבה",
                "כל המילים האלה אומרות אותו דבר",
                "complete the sentence = הקיפו · circle = השלימו · explain = תרגמו",
              ],
              correctIndex: 0,
              explanation: "חמש מילות ההוראה הבסיסיות - כל אחת ופעולה אחרת.",
            },
            {
              type: "mcq",
              prompt: '"Circle the correct answer" = כמה תשובות שרוצים.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. circle = מקיפים תשובה אחת. זו שאלת רב-ברירה.",
            },
            {
              type: "mcq",
              prompt:
                '"Because" כבר כתוב בשאלה - לא כותבים אותו שוב בתשובה.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation:
                'נכון. "Because they wanted food" - ולא "Because because they wanted".',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים.",
            },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030.",
              questions: [
                {
                  prompt:
                    "Why did scientists start the project? COMPLETE: Because ___",
                  options: [
                    "Because the birds needed to return",
                    "Because forests around the world are being destroyed",
                    "Because Kenya had dry rivers",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                'השלימו: "In 2016, environmentalists removed the goats in order to ___"',
              modelAnswer: "In order to let the plants grow back.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them."',
              prompt:
                "Explain what Dr. Diallo does differently from other tree-planting projects.",
              modelAnswer:
                "She teaches local people how to care for the trees, instead of only planting them.",
            },
            {
              type: "self-check",
              prompt:
                'תלמיד ענה על "Circle the correct answer" בכך שהוא כתב תשובה משלו במקום להקיף אחת מהאפשרויות. מה קרה לו?',
              modelAnswer:
                "הוא קיבל 0 - ההוראה דורשת הקפה של אפשרות קיימת, לא כתיבת תשובה חדשה.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "nav-words-1",
    section: "c-2",
    titleHe: "מילות ניווט: ניגוד וסיבה",
    titleEn: "Navigation Words: Contrast & Reason",
    code: "c.2.3",
    required: ["q-words-2"],
    position: { x: 100, y: 360 },
    big: false,
    content: {
      preface: [
        {
          type: "summary",
          title: "Eye Catchers - סימנים שאומרים לאן ללכת",
          lines: [
            "however / although ← פנייה. מה שאחריו חשוב.",
            "in addition ← עוד מידע בא מיד - לפעמים התשובה השנייה.",
            "therefore / as a result ← תוצאה. מה שקרה בגלל מה שנאמר קודם.",
          ],
        },
        { type: "word-card", word: "however", translationHe: "אולם / אבל" },
        { type: "word-card", word: "although", translationHe: "למרות ש־" },
        { type: "word-card", word: "in addition", translationHe: "בנוסף" },
        {
          type: "word-card",
          word: "therefore / as a result",
          translationHe: "לכן / כתוצאה מכך",
        },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Every year, forests are destroyed. However, there is good news. As a result, scientists started a project, and in addition, local people were trained to care for the trees."\n\nhowever = פנייה · as a result = תוצאה · in addition = עוד מידע.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: '"However…" - מה זה אומר לכם?',
              options: [
                "פנייה - מה שאחריו חשוב יותר",
                "סיבה - מה שאחריו מסביר",
                "דוגמה מגיעה",
                "סוף הפסקה",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: '"Although…" - מה זה אומר לכם?',
              options: [
                "פנייה - למרות מה שנאמר, ההפך קורה",
                "תוצאה",
                "דוגמה",
                "הגבלה",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: '"In addition…" - מה זה אומר לכם?',
              options: [
                "סתירה למה שנאמר",
                "סוף הרעיון",
                "מידע נוסף מגיע - אולי תשובה שנייה",
                "סיבה",
              ],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: '"Therefore / as a result…" - מה זה אומר לכם?',
              options: [
                "תוצאה - מה שקרה בגלל מה שלפני",
                "ניגוד",
                "דוגמה",
                "הגבלה",
              ],
              correctIndex: 0,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - סמנו כל Eye Catcher ניגוד/תוצאה בטקסט.",
            },
            {
              type: "mark-all",
              instruction: "סמנו: however, although, in addition, as a result",
              text: 'I  Learning to swim as an adult is more common than many people think. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  Although some adults are afraid of the water, they usually make good progress. As a result, more swimming schools now offer adult-only classes.',
              correctIndices: [26, 35, 48, 49, 50],
              wordBank: ["however", "although", "as a result", "in addition"],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"ראיתי however/although - עוצר. ראיתי as a result - קורא תוצאה."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: however/although = ניגוד. as a result = תוצאה.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "however = פנייה · although = למרות ש־ · in addition = בנוסף · as a result = תוצאה",
                "however = תוצאה · although = בנוסף · in addition = פנייה · as a result = למרות ש־",
                "כל מילות הניווט מסמנות את אותו דבר",
                "however = הגבלה · although = תוצאה · as a result = ניגוד",
              ],
              correctIndex: 0,
              explanation: "ארבע מילות הניגוד/תוצאה הבסיסיות.",
            },
            {
              type: "mcq",
              prompt:
                '"Although he trained hard, he did not win." - מה קרה?',
              options: [
                "הוא התאמן קשה וגם ניצח",
                "הוא התאמן קשה אבל בכל זאת לא ניצח",
                "הוא לא התאמן בכלל",
              ],
              correctIndex: 1,
              explanation: 'although = למרות ש־. יש ניגוד בין שני חלקי המשפט.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים.",
            },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030.",
              questions: [
                {
                  prompt:
                    'מה תפקיד המילה "However" במשפט?',
                  options: [
                    "מציינת שהמשפט הבא הוא הרקע",
                    "מציינת פנייה - מה שבא אחריה חשוב יותר",
                    "מציינת תוצאה",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              prompt: "השלימו: however = ___ · although = ___ · as a result = ___",
              modelAnswer:
                "however = פנייה, מה שלפני הוא רקע. although = למרות ש־, יש ניגוד. as a result = תוצאה של מה שנאמר קודם.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              prompt:
                '"Although the city was polluted, residents did not complain. As a result, nothing changed for years." - מה קרה, ולמה?',
              modelAnswer:
                "התושבים לא התלוננו למרות הזיהום, ולכן (as a result) שום דבר לא השתנה במשך שנים.",
            },
            {
              type: "self-check",
              prompt:
                "הסבירו: למה חשוב להבחין בין however/although (ניגוד) לבין as a result (תוצאה)?",
              modelAnswer:
                "ניגוד אומר שמה שבא הפוך למה שציפינו; תוצאה אומרת שמה שבא קרה בגלל מה שלפני. בלבול ביניהם משנה איך מבינים את הטקסט.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "nav-words-2",
    section: "c-2",
    titleHe: "מילות ניווט: דוגמאות וממצאים",
    titleEn: "Navigation Words: Examples & Findings",
    code: "c.2.4",
    required: ["nav-words-1"],
    position: { x: 70, y: 480 },
    big: false,
    content: {
      preface: [
        {
          type: "summary",
          title: "Eye Catchers - עוד סימנים חשובים",
          lines: [
            "for example ← דוגמה קונקרטית מגיעה, לא רעיון חדש.",
            "increase / decrease ← עלייה / ירידה - שימו לב לכיוון.",
            "found / discovered ← מישהו מצא/גילה משהו - לרוב ממצא מחקר.",
          ],
        },
        { type: "word-card", word: "for example", translationHe: "לדוגמה" },
        {
          type: "word-card",
          word: "increase / decrease",
          translationHe: "עלה / ירד",
        },
        {
          type: "word-card",
          word: "found / discovered",
          translationHe: "מצא / גילה",
        },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Scientists found that stress levels decreased. For example, in one group, stress fell by 35%."\n\nfound = ממצא · decreased = ירד · for example = הדוגמה הקונקרטית ל-35%.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: '"For example…" - מה זה אומר לכם?',
              options: [
                "רעיון חדש לגמרי",
                "דוגמה קונקרטית למה שנאמר לפני",
                "ניגוד",
                "תוצאה",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: '"Increase" - מה זה?',
              options: ["לרדת", "לעלות / לגדול", "להישאר אותו דבר", "להיעלם"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: '"Decrease" - מה זה?',
              options: ["לעלות", "לרדת / לקטון", "להישאר אותו דבר", "להיעלם"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: '"Found / discovered" - מה זה מסמן?',
              options: [
                "דעה אישית של הכותב",
                "ממצא - משהו שהתגלה, לרוב במחקר",
                "ניגוד",
                "הוראה",
              ],
              correctIndex: 1,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - שימו לב לכיוון: עלייה או ירידה?",
            },
            {
              type: "mcq",
              prompt:
                '"The number of birds increased by 60%." - מה קרה למספר הציפורים?',
              options: ["ירד", "עלה", "נשאר אותו דבר"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                '"Stress levels decreased by 35%." - מה קרה לרמת הלחץ?',
              options: ["עלתה", "ירדה", "נשארה אותו דבר"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                '"Scientists found that handwriting improves memory. For example, students who wrote notes by hand remembered more." - מה תפקיד המשפט השני?',
              options: [
                "רעיון חדש שסותר את הראשון",
                "דוגמה קונקרטית לממצא שנמצא",
                "תוצאה",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"increase = עלה. decrease = ירד. for example = דוגמה למה שכבר נאמר."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: increase = עלה, decrease = ירד.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "for example = לדוגמה · increase = עלה · decrease = ירד · found = מצא",
                "for example = תוצאה · increase = ירד · decrease = עלה · found = איבד",
                "כל המילים האלה אומרות אותו דבר",
                "for example = ניגוד · increase = מצא · decrease = דוגמה",
              ],
              correctIndex: 0,
              explanation: "שלוש מילות הכיוון והדוגמה הבסיסיות.",
            },
            {
              type: "mcq",
              prompt: '"Increase" ו-"decrease" הן אותה מילה בכיוונים שונים.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: "נכון. תמיד שימו לב לכיוון - עלייה או ירידה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים.",
            },
            {
              type: "passage-mcq",
              text: "III  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              questions: [
                {
                  prompt: "What happened to the number of birds in Ethiopia?",
                  options: [
                    "It decreased by 60%",
                    "It increased by 60%",
                    "It stayed the same",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                'השלימו: "Scientists found that ___" (כתבו משפט על ממצא כלשהו, עם דוגמה).',
              modelAnswer:
                "Scientists found that stress levels decreased. For example, one group felt 35% less stressed.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: "Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed.",
              prompt: 'מה הממצא (finding) של ד"ר אוקאפור, ואיזו מילה בטקסט מסמנת אותו?',
              modelAnswer:
                'הממצא: מתנדבים מרגישים פחות לחוצים. המילה שמסמנת: "found".',
            },
            {
              type: "self-check",
              prompt:
                "כתבו משפט אחד עם increase ומשפט אחד עם decrease, על נושא מהמודול (סביבה, בריאות או קהילה).",
              modelAnswer:
                "The number of trees increased after the project started. Stress levels decreased among volunteers.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-1a",
    section: "c-2",
    titleHe: "מילות תוכן: אנשים וקהילה",
    titleEn: "Content Words: People & Community",
    code: "c.2.5",
    required: ["nav-words-2"],
    position: { x: 0, y: 600 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'מה קורה כשלא מכירים מילת תוכן?\n\n"In 2016, a group of environmentalists decided to make Redonda green again."\n\nהתלמיד עוצר: "environmentalists? מה זה?" מדלג. מאבד את ההקשר. שאלה 3 מתייחסת בדיוק למשפט הזה - והוא לא יכול לענות.',
        },
        { type: "word-card", word: "environment", translationHe: "סביבה" },
        {
          type: "word-card",
          word: "volunteer(s)",
          translationHe: "מתנדב / מתנדבים",
        },
        { type: "word-card", word: "community", translationHe: "קהילה" },
        { type: "word-card", word: "charity", translationHe: "ארגון צדקה" },
        { type: "word-card", word: "residents", translationHe: "תושבים" },
        {
          type: "preface",
          text: 'WATCH IT - מצאו את מילות התוכן:\n\n"A local charity decided to help the environment. Young volunteers from the community joined, and residents said the change was remarkable."\n\ncharity · environment · volunteers · community · residents - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "The ______ is under threat. - סביבה",
              options: ["environment", "community", "charity", "residents"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Young ______ give their time to help others. - מתנדבים",
              options: ["residents", "volunteers", "charities", "communities"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "The local ______ helped with the project. - קהילה",
              options: ["result", "charity", "residents", "community"],
              correctIndex: 3,
            },
            {
              type: "mcq",
              prompt: "A local ______ raised money for the school. - ארגון צדקה",
              options: ["charity", "volunteer", "community", "resident"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "85% of ______ say they are satisfied with their city. - תושבים",
              options: ["charities", "volunteers", "residents", "communities"],
              correctIndex: 2,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - השלימו את המילה החסרה." },
            {
              type: "mcq",
              prompt: "Many ______ in the city offered to plant trees.",
              options: ["charities", "volunteers", "environments", "results"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "The ______ worked together to clean the river.",
              options: ["community", "charity", "environment", "result"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Local ______ said the air was cleaner than before.",
              options: ["charities", "volunteers", "residents", "communities"],
              correctIndex: 2,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"environment, volunteer, community, charity, residents - אני מזהה ועובר הלאה."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: environment, volunteer, community, charity, residents.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "environment = סביבה · volunteer = מתנדב · community = קהילה · charity = ארגון צדקה · residents = תושבים",
                "environment = קהילה · volunteer = חוקר · community = תוצאה · charity = תושב",
                "environment = תוצאה · volunteer = תושב · community = סביבה",
                "כל המילים האלה קשורות רק לבריאות",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של אנשים וקהילה.",
            },
            {
              type: "mcq",
              prompt: '"Residents" = מחקרים.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. residents = תושבים, לא חוקרים.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים מתוך טקסטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. A local _______ decided to help the environment.\n2. Young people who _______ feel happier.\n3. The _______ worked together on the project.\n4. Most _______ said the change was remarkable.",
              modelAnswer:
                "1. charity  2. volunteer  3. community  4. residents",
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילות התוכן שאתם מזהים",
              text: "A local charity decided to change the environment. Volunteers from the community joined, and residents said the results were remarkable.",
              correctIndices: [2, 7, 8, 11, 14],
              wordBank: [
                "charity",
                "environment",
                "volunteers",
                "community",
                "residents",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: "The air was polluted, and most residents felt the city was unpleasant. However, a local charity decided to change this.",
              prompt: '"What did the charity decide to do?" - ענו באנגלית.',
              modelAnswer:
                "The charity decided to change the polluted city that most residents found unpleasant.",
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על הסביבה, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "The environment is under threat because of pollution. A local charity and its volunteers worked with the community to protect it.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-1b",
    section: "c-2",
    titleHe: "מילות תוכן: מחקר וממצאים",
    titleEn: "Content Words: Research & Findings",
    code: "c.2.6",
    required: ["content-1a"],
    position: { x: -70, y: 720 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "המילים בשיעור הזה מתארות מחקר ומה מצאו בו - מופיעות כמעט בכל טקסט במודול C. ללמוד אותן = לקרוא בביטחון, בלי לעצור.",
        },
        {
          type: "word-card",
          word: "discover / found",
          translationHe: "גילה / מצא",
        },
        {
          type: "word-card",
          word: "result(s)",
          translationHe: "תוצאה / תוצאות",
        },
        { type: "word-card", word: "researchers", translationHe: "חוקרים" },
        { type: "word-card", word: "affect", translationHe: "להשפיע על" },
        { type: "word-card", word: "effective", translationHe: "יעיל" },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Researchers discovered that stress affects sleep. The results were clear: the most effective solution was daily exercise."\n\nresearchers · discovered · results · affects · effective - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "The ______ of the study were surprising. - תוצאות",
              options: ["species", "charity", "results", "environment"],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: "______ say that exercise improves memory. - חוקרים",
              options: ["Residents", "Charities", "Researchers", "Volunteers"],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: "The most ______ method was face-to-face work. - יעיל",
              options: ["effective", "destroyed", "increased", "responsible"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Stress can ______ how well people sleep. - להשפיע על",
              options: ["affect", "discover", "protect", "reduce"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Scientists ______ a new way to plant trees. - גילו",
              options: ["destroyed", "discovered", "reduced", "required"],
              correctIndex: 1,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - השלימו את המילה החסרה." },
            {
              type: "mcq",
              prompt: "The ______ were already visible in Ethiopia.",
              options: ["charities", "results", "species", "residents"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "The most ______ programmes bring people face to face.",
              options: ["destroyed", "effective", "responsible", "increased"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "Noise can ______ how well students concentrate.",
              options: ["discover", "affect", "protect", "achieve"],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"discover, result, researcher, affect, effective - אני מזהה ועובר הלאה."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: discover, result, researcher, affect, effective.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "discover = לגלות · result = תוצאה · researcher = חוקר · affect = להשפיע · effective = יעיל",
                "discover = להרוס · result = מחקר · researcher = תושב · affect = יעיל",
                "discover = תוצאה · result = לגלות · researcher = יעיל",
                "כל המילים האלה קשורות רק לחינוך",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של מחקר וממצאים.",
            },
            {
              type: "mcq",
              prompt: '"The results were remarkable." - מה זה results?',
              options: ["בעיות", "תוצאות", "פרויקטים"],
              correctIndex: 1,
              explanation: "results = תוצאות. מופיע כמעט בכל טקסט במודול C.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים מתוך טקסטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. Over 200 million trees were planted. The _______ are already visible.\n2. _______ studied the effects of volunteering for ten years.\n3. The programme was very _______.\n4. Stress can _______ sleep.",
              modelAnswer: "1. results  2. Researchers  3. effective  4. affect",
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילות התוכן שאתם מזהים",
              text: "Researchers discovered that the results were remarkable. The most effective programmes affect people directly.",
              correctIndices: [0, 1, 4, 9, 11],
              wordBank: [
                "researchers",
                "discovered",
                "results",
                "effective",
                "affect",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: "Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.",
              prompt: '"What did the researcher discover about the most effective programmes?" - ענו באנגלית.',
              modelAnswer:
                "She discovered that the most effective programmes bring young people face to face with the people they help.",
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על מחקר, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "Researchers discovered that volunteering affects happiness. The results showed that the most effective programmes involve real contact with people.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-1c",
    section: "c-2",
    titleHe: "מילות תוכן: שינוי וסביבה",
    titleEn: "Content Words: Change & Environment",
    code: "c.2.7",
    required: ["content-1b"],
    position: { x: -100, y: 840 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "המילים בשיעור הזה מתארות שינוי - עלייה, ירידה, הגנה או הרס. הן חוזרות בכל טקסט על סביבה, בעלי חיים או אקלים.",
        },
        { type: "word-card", word: "increase", translationHe: "לגדול / לעלות" },
        {
          type: "word-card",
          word: "reduce / decrease",
          translationHe: "להקטין / לרדת",
        },
        { type: "word-card", word: "protect", translationHe: "להגן" },
        { type: "word-card", word: "destroy", translationHe: "להרוס" },
        { type: "word-card", word: "species", translationHe: "מין (ביולוגי)" },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Pollution can destroy habitats and reduce the number of species. Projects that protect forests can increase the population of endangered animals."\n\ndestroy · reduce · species · protect · increase - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "The scientists wanted to ______ the forests. - להגן",
              options: ["protect", "destroy", "increase", "affect"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Fire and pollution ______ habitats. - הורסים",
              options: ["protect", "destroy", "reduce", "increase"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "The project could ______ carbon in the air. - להקטין",
              options: ["increase", "reduce", "discover", "protect"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "Some ______ of birds returned after the trees were planted. - מין",
              options: ["species", "results", "communities", "residents"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "The number of trees will ______ every year. - לעלות",
              options: ["decrease", "destroy", "increase", "reduce"],
              correctIndex: 2,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - השלימו את המילה החסרה." },
            {
              type: "mcq",
              prompt: "The number of birds began to ______ after the project.",
              options: ["destroy", "increase", "reduce", "protect"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "Without help, many ______ could disappear completely.",
              options: ["species", "results", "residents", "charities"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "New laws aim to ______ endangered animals.",
              options: ["destroy", "reduce", "protect", "affect"],
              correctIndex: 2,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"increase = עלה. reduce/decrease = ירד. protect ≠ destroy. species = מין."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: increase, reduce, protect, destroy, species.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "increase = לעלות · reduce = לרדת · protect = להגן · destroy = להרוס · species = מין",
                "increase = להרוס · reduce = להגן · protect = לעלות · destroy = לרדת",
                "increase = מין · reduce = להרוס · protect = לרדת",
                "כל המילים האלה מתארות תחושות",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של שינוי וסביבה.",
            },
            {
              type: "mcq",
              prompt: '"Protect" ו-"destroy" הן הפכים.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: "נכון. protect = להגן, destroy = להרוס - הפכים ממש.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים מתוך טקסטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. The scientists wanted to _______ the forests from destruction.\n2. Fire and farming _______ many habitats.\n3. The project could _______ carbon in the atmosphere.\n4. Some _______ of birds returned to the area.",
              modelAnswer:
                "1. protect  2. destroy  3. reduce  4. species",
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילות התוכן שאתם מזהים",
              text: "Every year, forests are destroyed by fire and pollution. Projects that protect trees can increase the number of species and reduce damage.",
              correctIndices: [4, 11, 14, 18, 20],
              wordBank: ["destroyed", "protect", "increase", "species", "reduce"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              text: "Every year, forests around the world are destroyed by fire, farming, and pollution. In 2019, scientists started a project to plant one billion trees in Africa.",
              prompt: '"Why is the project important?" - ענו באנגלית, והשתמשו במילות תוכן.',
              modelAnswer:
                "The project is important because it helps protect forests that are being destroyed, and it can increase the number of species that live there.",
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על שינוי סביבתי, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "Pollution can destroy habitats and reduce biodiversity. Projects that protect forests help increase the population of endangered species.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-2a",
    section: "c-2",
    titleHe: "מילות תוכן: התפתחות ולמידה",
    titleEn: "Content Words: Growth & Learning",
    code: "c.llby7",
    required: ["content-1c"],
    position: { x: -70, y: 960 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "אוצר מילים שווה 8 מתוך 30 נקודות בכתיבה. המילים בשיעור הזה חוזרות בטקסטים על חינוך, מיומנויות והתפתחות אישית.",
        },
        { type: "word-card", word: "improve", translationHe: "לשפר" },
        { type: "word-card", word: "develop", translationHe: "לפתח" },
        { type: "word-card", word: "achieve", translationHe: "להשיג" },
        {
          type: "word-card",
          word: "skill(s)",
          translationHe: "מיומנות / מיומנויות",
        },
        { type: "word-card", word: "education", translationHe: "חינוך" },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Good education helps students develop new skills, improve their confidence, and achieve their goals."\n\neducation · develop · skills · improve · achieve - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "Volunteering can ______ your skills. - לשפר",
              options: ["improve", "require", "reduce", "encourage"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Volunteering ______ important social skills. - מפתח",
              options: ["destroys", "develops", "reduces", "affects"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                "Students ______ better grades after the programme. - השיגו",
              options: ["required", "supported", "achieved", "encouraged"],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: "This programme teaches important ______. - מיומנויות",
              options: ["societies", "skills", "opportunities", "results"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "Good ______ opens many doors in life. - חינוך",
              options: ["education", "society", "opportunity", "benefit"],
              correctIndex: 0,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - השלימו את המילה החסרה." },
            {
              type: "mcq",
              prompt: "Volunteering can ______ my English and social skills.",
              options: ["improve", "require", "reduce", "protect"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "The programme helps teenagers ______ important skills.",
              options: ["destroy", "develop", "reduce", "affect"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "She worked hard and finally ______ her goal.",
              options: ["required", "achieved", "reduced", "affected"],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"improve, develop, achieve, skill, education - אני מזהה, וגם משתמש בהם בכתיבה."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: improve, develop, achieve, skill, education.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "improve = לשפר · develop = לפתח · achieve = להשיג · skill = מיומנות · education = חינוך",
                "improve = לדרוש · develop = להרוס · achieve = לעודד · skill = הזדמנות",
                "improve = להשיג · develop = לעודד · achieve = לפתח",
                "כל המילים האלה מתארות רגשות",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של התפתחות ולמידה.",
            },
            {
              type: "mcq",
              prompt: '"Volunteering develops important skills." - מה זה develops?',
              options: ["מספר", "מפתח / מגדל", "מוכר"],
              correctIndex: 1,
              explanation: "develop = לפתח · skills = מיומנויות.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. Volunteering can _______ your skills.\n2. The programme helps students _______ new skills.\n3. She _______ her goal after years of practice.\n4. Good _______ opens many doors.",
              modelAnswer: "1. improve  2. develop  3. achieved  4. education",
            },
            {
              type: "mark-all",
              instruction: "סמנו את כל מילות התוכן",
              text: "Good education helps students develop important skills, improve their confidence, and achieve their goals.",
              correctIndices: [1, 4, 6, 7, 11],
              wordBank: ["education", "develop", "skills", "improve", "achieve"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              prompt:
                'השלימו את משפטי P14: "I think education is important because it _______ important _______. For example, students who study hard usually _______ their goals."',
              modelAnswer:
                "…because it develops important skills. For example, students who study hard usually achieve their goals.",
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על חינוך, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "Education develops important skills for the future. It also helps students improve their confidence and achieve their goals.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-2b",
    section: "c-2",
    titleHe: "מילות תוכן: השפעה וערך",
    titleEn: "Content Words: Cause & Value",
    code: "c.q5yrp",
    required: ["content-2a"],
    position: { x: 0, y: 1080 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "המילים בשיעור הזה מתארות סיבה, השפעה וערך - חוזרות בטקסטים על בריאות, כלכלה וחברה.",
        },
        {
          type: "word-card",
          word: "affect / effect",
          translationHe: "להשפיע / השפעה",
        },
        { type: "word-card", word: "cause", translationHe: "לגרום / סיבה" },
        { type: "word-card", word: "require", translationHe: "לדרוש" },
        {
          type: "word-card",
          word: "benefit",
          translationHe: "יתרון / להפיק תועלת",
        },
        { type: "word-card", word: "opportunity", translationHe: "הזדמנות" },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Stress can cause health problems and affect sleep. This is why exercise programmes that require only a little time can still benefit everyone - it is an opportunity worth taking."\n\ncause · affect · require · benefit · opportunity - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "Stress has a negative ______ on health. - השפעה",
              options: ["affect", "effect", "benefit", "cause"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "What ______ the number of trees to increase? - גרם ל",
              options: ["caused", "required", "benefited", "affected"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "The programme ______ two hours of practice a week. - דורש",
              options: ["benefits", "requires", "achieves", "improves"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "One ______ of exercise is better sleep. - יתרון",
              options: ["cause", "requirement", "benefit", "effect"],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: "This is a great ______ to learn something new. - הזדמנות",
              options: ["society", "skill", "education", "opportunity"],
              correctIndex: 3,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - השלימו את המילה החסרה." },
            {
              type: "mcq",
              prompt: "Noise can ______ how well people sleep.",
              options: ["cause", "affect", "benefit", "require"],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "Pollution can ______ serious health problems.",
              options: ["cause", "require", "benefit", "achieve"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Volunteering gives young people a real ______ to grow.",
              options: ["cause", "requirement", "opportunity", "effect"],
              correctIndex: 2,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"cause = גורם ל. affect/effect = משפיע/השפעה. require = דורש. benefit/opportunity = יתרון/הזדמנות."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: cause, affect/effect, require, benefit, opportunity.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "cause = לגרום · affect = להשפיע · require = לדרוש · benefit = יתרון · opportunity = הזדמנות",
                "cause = יתרון · affect = לדרוש · require = לגרום · benefit = הזדמנות",
                "cause = הזדמנות · affect = יתרון · require = להשפיע",
                "כל המילים האלה מתארות רגשות",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של סיבה והשפעה.",
            },
            {
              type: "mcq",
              prompt: '"Affect" ו-"effect" הן אותה מילה.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                'שקר. affect (פועל) = להשפיע על · effect (שם עצם) = השפעה. "Noise AFFECTS sleep. The EFFECT is serious."',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. Stress has a negative _______ on health.\n2. Pollution can _______ serious problems.\n3. The programme _______ two hours a week.\n4. Volunteering is a great _______ to grow.",
              modelAnswer: "1. effect  2. cause  3. requires  4. opportunity",
            },
            {
              type: "mark-all",
              instruction: "סמנו את כל מילות התוכן",
              text: "Stress can cause health problems and affect sleep. Programmes that require little time can still benefit everyone.",
              correctIndices: [2, 6, 10, 15],
              wordBank: ["cause", "affect", "require", "benefit"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              prompt: 'מה ההבדל בין "affect" ל-"effect"? תנו דוגמה לכל אחד.',
              modelAnswer:
                'affect הוא פועל: "Stress affects sleep." effect הוא שם עצם: "The effect of stress is bad sleep."',
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על בריאות, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "Stress can cause serious health problems and affect sleep. Regular exercise requires only a little time but can benefit everyone.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "content-2c",
    section: "c-2",
    titleHe: "מילות תוכן: אחריות חברתית",
    titleEn: "Content Words: Social Responsibility",
    code: "c.q6yby",
    required: ["content-2b"],
    position: { x: 70, y: 1200 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "המילים בשיעור הזה מתארות אחריות אישית וחברתית - חוזרות בטקסטים על התנדבות, בריאות ותמיכה קהילתית.",
        },
        { type: "word-card", word: "responsible", translationHe: "אחראי" },
        { type: "word-card", word: "encourage", translationHe: "לעודד" },
        { type: "word-card", word: "support", translationHe: "תמיכה / לתמוך" },
        { type: "word-card", word: "society", translationHe: "חברה" },
        {
          type: "word-card",
          word: "health / healthy",
          translationHe: "בריאות / בריא",
        },
        {
          type: "preface",
          text: 'WATCH IT\n\n"Schools encourage students to volunteer, which makes them more responsible. Society benefits, and studies show volunteering also supports better health."\n\nencourage · responsible · society · support · health - חמש מילות תוכן במשפט אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "Volunteering makes students more ______. - אחראי",
              options: ["responsible", "healthy", "supportive", "social"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Schools ______ students to volunteer. - מעודדים",
              options: ["encourage", "require", "affect", "develop"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Family and friends can ______ a person during hard times. - לתמוך ב",
              options: ["support", "encourage", "require", "achieve"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Volunteering benefits ______ as a whole. - חברה",
              options: ["society", "opportunity", "education", "result"],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt: "Regular exercise improves ______. - בריאות",
              options: ["society", "health", "opportunity", "education"],
              correctIndex: 1,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "בכתיבה - השתמשו במילות התוכן שלמדתם.\nכל מילה כזאת במשפטי ה-P14 שלכם = אוצר מילים = ציון גבוה יותר.",
            },
            {
              type: "self-check",
              prompt: 'השלימו באנגלית: "Students who volunteer become more ..."',
              placeholder: "Students who volunteer become more...",
              modelAnswer: "Students who volunteer become more responsible.",
            },
            {
              type: "self-check",
              prompt: 'השלימו באנגלית: "This helps society because ..."',
              placeholder: "This helps society because...",
              modelAnswer:
                "This helps society because everyone learns to support each other.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"responsible, encourage, support, society, health - אני מזהה, וגם משתמש בהם בכתיבה."',
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המילים.\n\n📌 זכור: responsible, encourage, support, society, health.",
            },
            {
              type: "mcq",
              prompt: "איזו שורה נכונה?",
              options: [
                "responsible = אחראי · encourage = לעודד · support = לתמוך · society = חברה · health = בריאות",
                "responsible = בריאות · encourage = חברה · support = אחראי · society = לתמוך",
                "responsible = לעודד · encourage = אחראי · support = בריאות",
                "כל המילים האלה קשורות רק לכסף",
              ],
              correctIndex: 0,
              explanation: "חמש מילות הבסיס של אחריות חברתית.",
            },
            {
              type: "mcq",
              prompt: '"Society" = בית ספר בודד.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. society = חברה בכלל, לא מוסד אחד.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם משפטים אמיתיים.",
            },
            {
              type: "self-check",
              prompt:
                "השלימו:\n1. Volunteering makes students more _______.\n2. Schools _______ students to volunteer.\n3. Friends can _______ you during hard times.\n4. This helps _______ as a whole.\n5. Exercise improves _______.",
              modelAnswer:
                "1. responsible  2. encourage  3. support  4. society  5. health",
            },
            {
              type: "mark-all",
              instruction: "סמנו את כל מילות התוכן",
              text: "Volunteering has many benefits. It makes students more responsible. Society benefits too, and studies show it supports better health.",
              correctIndices: [8, 9, 16, 18],
              wordBank: ["responsible", "society", "supports", "health"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "self-check",
              prompt:
                'השלימו את משפטי P14: "I think volunteering is important because it makes students more _______. For example, it _______ society and also improves _______."',
              modelAnswer:
                "…because it makes students more responsible. For example, it supports society and also improves health.",
            },
            {
              type: "self-check",
              prompt: "כתבו שני משפטים על אחריות חברתית, עם שלוש מהמילים מהשיעור.",
              modelAnswer:
                "Volunteering encourages young people to become more responsible. It also supports society and improves public health.",
            },
          ],
        },
      ],
    },
  },
];
