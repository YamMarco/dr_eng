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
    required: ["n-5cd02dfa"],
    requiredRounds: 3,
    position: { x: -200, y: 130 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "לפני שמחפשים תשובה בטקסט, צריך להבין **מה בדיוק השאלה מבקשת מאיתנו לעשות**.\n\nקראו את שלוש השאלות:\n\n**What do we learn** from **paragraph III** about Ethiopia?\n\n**According to** Dr. Diallo, why do most trees die? \n\n**Give ONE answer.****Give TWO answers**: how did the area change?\n\nהמילים המודגשות הן לא סתם חלק מהשאלה\n.הן **הוראות ניווט**.הן אומרות לנו:**איפה לחפש** את התשובה, **של מי המידע** שצריך למצוא, ו־**כמה תשובות** צריך לכתוב.\n\nאם מפספסים מילה אחת בהוראה, אפשר להבין את הטקסט — ועדיין לענות לא נכון.לכן לפני שמתחילים לחפש בטקסט, עוצרים לשנייה ושואלים:**איפה אני מחפש? ממי המידע? וכמה אני צריך לענות?**",
        },
        {
          type: "preface",
          text: 'לכאורה, ההוראות האלה נראות פשוטות:\n\n**paragraph III** → חפשו בפסקה\n 3**According to Dr. Diallo** → חפשו מה ד"ר דיאלו אומר\n**Give ONE answer** → כתבו תשובה אחת בלבד**Give TWO answers** → כתבו שתי תשובות\n\nאז למה בכל זאת כל כך הרבה תלמידים טועים?\nכי במבחן יש לחץ וזמן מוגבל.\n\n תלמיד יכול להבין את הטקסט מצוין — ועדיין לאבד נקודות רק מפני שלא שם לב להוראה.\n\nלפעמים הוא כותב **תשובה אחת במקום שתיים**.לפעמים הוא נותן **שתי תשובות כשביקשו אחת**.ולפעמים הוא מוצא מידע נכון — אבל **בפסקה הלא נכונה** או לא לפי האדם שהשאלה ביקשה.\nֿ\nאלה טעויות קטנות, אבל הן עולות בנקודות.\n\nלכן לפני שאתם רצים לחפש תשובה בטקסט, עצרו לשנייה ושאלו את עצמכם שתי שאלות:\n\n**איפה אני צריך לחפש?****וכמה אני צריך לענות?**\nֿהבסיס הזה אולי נראה פשוט — אבל במבחן הוא עושה הבדל גדול.',
        },
        {
          type: "preface",
          text: "חמש הוראות שחוזרות כמעט בכל בחינה יעזרו לכם להבין שני דברים חשובים: **איפה לחפש את התשובה, ומה בדיוק צריך לענות.**\n\nכשקוראים את ההוראה נכון, יודעים לאיזו פסקה לגשת, כמה תשובות צריך לתת, ומתי אפשר לעצור.נלמד כל הוראה בנפרד, ומיד אחריה נתרגל אותה בשאלות ברמת הבגרות.\n\n",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "paragraph",
              translationHe: "פסקה",
              exampleEn: "What do we learn from **paragraph** II?",
              exampleHe: "מה אנחנו לומדים מפסקה II?",
              hookHe:
                'paragraph = פסקה. נשמע כמו "פרגרף". בטקסט הפסקאות ממוספרות I, II, III, וההוראה שולחת אתכם לאחת מהן בלבד.',
            },
            {
              type: "mcq",
              prompt: "What do we learn from paragraph II? -\n\n איפה מחפשים?",
              options: [
                "בכותרת",
                "רק בפסקה II",
                "בכל הטקסט",
                "בפסקה הראשונה והשניה כי הראשונה כוללת את הרעיון המרכזי\n",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "paragraph II = רק שם.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שאומרת לאן ללכת:",
              sentence: "Answer using paragraph III only.",
              correctWordIndex: 2,
            },
            { type: "spell-word", word: "paragraph", mode: "copy" },
            {
              type: "word-card",
              word: "according to",
              translationHe: "לפי / על פי",
              exampleEn:
                "**According to** Dr. Diallo, most trees die when nobody cares for them.",
              exampleHe: 'לפי ד"ר דיאלו, רוב העצים מתים כשאף אחד לא דואג להם.',
              hookHe:
                "according to = לפי. אחריה בא שם, וזה הרמז: עונים רק מה שהאדם הזה אמר.",
            },
            {
              type: "mcq",
              prompt: '"According to Professor Mills, ..." - מה מחפשים בטקסט?',
              options: [
                "מה שפרופסור Mills אמר",
                "את הפסקה הראשונה",
                "מה שכל החוקרים אמרו",
                "את הכותרת",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "according to = רק מה שהאדם הזה אמר.",
            },
            {
              type: "cloze-pick",
              clause: "Dr. Diallo, most trees die when nobody cares for them.",
              options: ["Without", "According to", "Before", "Except for"],
              correctIndices: [1],
              explanation: "According to = לפי.",
            },
            { type: "spell-word", word: "according to", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "paragraph", he: "פסקה" },
                { en: "according to", he: "לפי / על פי" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "what do we learn",
              translationHe: "מה אנחנו לומדים",
              exampleEn: "**What do we learn** from paragraph I about Redonda?",
              exampleHe: "מה אנחנו לומדים מפסקה I על Redonda?",
              hookHe:
                "what do we learn = מה אנחנו לומדים. זו שאלה שמבקשת מידע שכתוב בפסקה, לא דעה שלכם.",
            },
            {
              type: "mcq",
              prompt:
                '"What do we learn from paragraph I about Redonda?" - מה מבקשים ממכם?',
              options: [
                "לתרגם את פסקה I",
                "מה אני חושב על Redonda",
                "לכתוב סיפור על Redonda",
                "מה כתוב בפסקה I על Redonda",
              ],
              correctIndex: 3,
              layout: "rows",
              explanation: "מבקשים מידע מהטקסט.",
            },
            {
              type: "cloze-pick",
              clause: "from paragraph III about the schools?",
              options: [
                "Where do we go",
                "What do we learn",
                "When do we sleep",
                "Who do we ask",
              ],
              correctIndices: [1],
              explanation: "What do we learn - מה אנחנו לומדים.",
            },
            { type: "spell-word", word: "what do we learn", mode: "copy" },
            {
              type: "word-card",
              word: "give ONE answer",
              translationHe: "תנו תשובה אחת בלבד",
              exampleEn: "**Give ONE answer** from paragraph II.",
              exampleHe: "תנו תשובה אחת מפסקה II.",
              hookHe:
                "ONE באותיות גדולות אינו מקרי: כותבים תשובה אחת בלבד. תשובה נוספת לא מוסיפה נקודות, ועלולה לעלות בהן.",
            },
            {
              type: "mcq",
              prompt: '"Give ONE answer from paragraph II." - כמה כותבים?',
              options: [
                "כמה שמצליחים",
                "שתי תשובות",
                "תשובה אחת",
                "שלוש תשובות",
              ],
              correctIndex: 2,
              layout: "rows",
              explanation: "ONE = אחת בלבד.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שאומרת כמה תשובות לכתוב:",
              sentence: "Please give ONE reason from the text.",
              correctWordIndex: 2,
            },
            { type: "spell-word", word: "give ONE answer", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "paragraph", he: "פסקה" },
                { en: "according to", he: "לפי / על פי" },
                { en: "what do we learn", he: "מה אנחנו לומדים" },
                { en: "give ONE answer", he: "תנו תשובה אחת בלבד" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "give TWO answers",
              translationHe: "תנו שתי תשובות",
              exampleEn: "**Give TWO answers**: how did the students change?",
              exampleHe: "תנו שתי תשובות: איך התלמידים השתנו?",
              hookHe:
                'TWO = שתי תשובות נפרדות וממוספרות, (1) ו-(2). לא משפט ארוך אחד עם "and".',
            },
            {
              type: "mcq",
              prompt:
                '"Give TWO answers: How did the students change?" - מה כותבים?',
              options: [
                "משפט אחד ארוך",
                "(1) ... (2) ... שתי נקודות נפרדות",
                "שלוש נקודות",
                "תשובה אחת מפורטת",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "TWO = שתי נקודות נפרדות וממוספרות.",
            },
            {
              type: "mcq",
              prompt:
                'תלמיד כתב "They became responsible and focused." (משפט אחד) על "Give TWO answers". מה חסר?',
              options: [
                "הפרדה לשתי תשובות ממוספרות (1) ו-(2)",
                "כלום, זה בסדר",
                "כותרת",
                "עוד פרטים",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "הבודק מחפש שתי נקודות נפרדות.",
            },
            { type: "spell-word", word: "give TWO answers", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "paragraph", he: "פסקה" },
                { en: "according to", he: "לפי / על פי" },
                { en: "what do we learn", he: "מה אנחנו לומדים" },
                { en: "give ONE answer", he: "תנו תשובה אחת בלבד" },
                { en: "give TWO answers", he: "תנו שתי תשובות" },
              ],
            },
            {
              type: "steps",
              steps: [
                '"What do we learn from paragraph I about Redonda?" ← "what do we learn" = מה לומדים · "paragraph I" = רק פסקה I.',
                '"According to Dr. Diallo, give ONE reason why trees survive." ← "according to" = לפי הדובר הזה בדיוק · "give ONE" = תשובה אחת.',
                "אם ההוראה אומרת TWO - סופרים עד שתיים. לא עוצרים אחרי הראשונה.",
              ],
            },
            {
              type: "preface",
              text: "זוכרים את שלוש השאלות מההתחלה? עכשיו יש לכם את הפסקאות. ענו עליהן, והפעם אתם יודעים מה כל הוראה מבקשת.",
            },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming and pollution.\n\nII  The project is led by Dr. Amara Diallo. According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              questions: [
                {
                  prompt: "What do we learn from paragraph III about Ethiopia?",
                  options: [
                    "Trees die because nobody looks after them",
                    "Forests are destroyed by fire",
                    "85% of trees survive",
                    "The number of birds increased by 60%",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    "According to Dr. Diallo, why do most trees die? (Give ONE answer)",
                  options: [
                    "Birds left",
                    "Nobody looks after them",
                    "Fire and farming",
                    "Rivers were dry",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "Give TWO answers: how did the area change? Which pair fits?",
                  options: [
                    "(1) 85% of trees die. (2) Rivers are dry.",
                    "(1) Trees survive when locals help. (2) Dr. Diallo leads the project.",
                    "(1) Forests are destroyed by fire. (2) Nobody looks after trees.",
                    "(1) Birds in Ethiopia increased by 60%. (2) Dry rivers in Kenya flowed again.",
                  ],
                  correctIndex: 3,
                },
              ],
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt:
                '"What do we learn from paragraph III about schools?" - לאן הולכים?',
              options: [
                "לפסקה הראשונה",
                "לכל הטקסט",
                "לפסקה III בלבד",
                "לכותרת",
              ],
              correctIndex: 2,
              layout: "rows",
              explanation: "paragraph III = רק שם.",
            },
            {
              type: "mcq",
              prompt:
                '"According to Professor Mills, give ONE reason." - מה כותבים?',
              options: [
                "סיבה אחת, לפי מה ש-Mills אמר",
                "שתי סיבות",
                "כל הסיבות שבטקסט",
                "מה שאני חושב",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "according to = הדובר. give ONE = אחת.",
            },
            {
              type: "mcq",
              prompt: '"Give TWO answers" - אפשר לכתוב תשובה אחת ארוכה.',
              options: ["❌ לא נכון", "✅ נכון"],
              correctIndex: 0,
              layout: "rows",
              explanation: "TWO = שתי תשובות נפרדות, לא אחת ארוכה.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שאומרת לאן ללכת:",
              sentence: "Answer from paragraph II only.",
              correctWordIndex: 2,
            },
            {
              type: "mark-all",
              instruction: "סמנו את ההוראות. הצבעים: איפה מחפשים, וכמה עונים.",
              text: "According to Dr. Santos, give TWO answers from paragraph II.",
              correctIndices: [],
              categories: [
                { name: "איפה", color: "amber", indices: [0, 1, 8] },
                { name: "כמה", color: "sky", indices: [4, 5, 6] },
              ],
              wordBank: ["according to", "give TWO answers", "paragraph"],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim.\n\nII  One study found that adults who learn to swim later in life often become stronger swimmers. According to Dr. Anna Klein, adults understand what the teacher explains and correct their mistakes quickly. They are also not afraid to ask questions.",
              questions: [
                {
                  prompt:
                    "According to the survey, what percentage of adults cannot swim?",
                  options: ["Over 3%", "Over 30%", "Over 13%", "Over 60%"],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "What do we learn from paragraph II about adult swimmers?",
                  options: [
                    "They often become stronger swimmers",
                    "They are afraid of teachers",
                    "They never ask questions",
                    "They learn slowly",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "Give TWO answers: why do adults improve, according to Dr. Klein? Which pair fits?",
                  options: [
                    "(1) They understand the teacher. (2) They correct mistakes quickly.",
                    "(1) They are afraid. (2) They stay silent.",
                    "(1) 30% cannot swim. (2) Cities are large.",
                    "(1) Studies are long. (2) Pools are cheap.",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                'תלמיד קיבל את ההוראה "Give TWO answers" וכתב תשובה אחת ארוכה עם "and" באמצע. מה הבעיה?',
              modelAnswer:
                "זו עדיין תשובה אחת: הבודק מחפש שתי נקודות נפרדות וממוספרות, לא משפט אחד ארוך.",
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
    required: ["q-words-1"],
    requiredRounds: 3,
    position: { x: -200, y: 310 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עוד שלוש שאלות אמיתיות. המילים המודגשות הן ההוראות, והפעם הן אומרות איך לענות.\n\n{d:ltr}1. **Complete the sentence**: People left the island **because** ...\n{d:ltr}2. **Circle the correct answer**: Why did the scientists remove the goats?\n{d:ltr}3. **Explain** why the trees grew back. Use **in order to**.\n\nלכמה מהן אתם יודעים להסביר מה הן מבקשות?",
        },
        {
          type: "preface",
          text: "חמש מילים שקובעות איך התשובה נראית: להשלים, להקיף, להסביר, וגם סיבה ומטרה.\n\nתלמידים מפסידים כאן נקודות בלי לדעת: הם יודעים את התשובה, אבל עונים בצורה הלא נכונה. כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "complete the sentence",
              translationHe: "השלימו את המשפט",
              exampleEn: "**Complete the sentence**: People left because…",
              exampleHe: "השלימו את המשפט: אנשים עזבו כי…",
              hookHe:
                "complete = להשלים: ממשיכים את מה שכבר כתוב. לא כותבים משפט חדש, ולא כותבים שוב את מה שכבר שם.",
            },
            {
              type: "mcq",
              prompt:
                '"Complete the sentence: Students volunteer because…" - מה עושים?',
              options: [
                "ממשיכים את המשפט מהמקום שבו הוא נעצר",
                "כותבים משפט חדש לגמרי",
                "מקיפים תשובה",
                "מתרגמים לעברית",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "complete = ממשיכים.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שאומרת "להשלים":',
              sentence: "Please complete the sentence below.",
              correctWordIndex: 1,
            },
            { type: "spell-word", word: "complete the sentence", mode: "copy" },
            {
              type: "word-card",
              word: "circle the correct answer",
              translationHe: "הקיפו את התשובה הנכונה",
              exampleEn: "**Circle the correct answer**.",
              exampleHe: "הקיפו את התשובה הנכונה.",
              hookHe:
                "circle = להקיף. זו שאלת רב-ברירה: בוחרים אחת מהאפשרויות ומקיפים אותה. לא כותבים תשובה משלכם.",
            },
            {
              type: "mcq",
              prompt: '"Circle the correct answer" - מה עושים?',
              options: [
                "כותבים תשובה חדשה",
                "מקיפים אפשרות אחת מהרשומות",
                "מקיפים את כולן",
                "מוחקים אפשרות",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "circle = מקיפים אחת מהאפשרויות.",
            },
            {
              type: "mcq",
              prompt:
                "תלמיד כתב תשובה משלו במקום להקיף אחת מהאפשרויות. מה קרה?",
              options: [
                "הוא קיבל נקודה נוספת",
                "ההוראה דורשת בחירה מהאפשרויות, אז הוא הפסיד את הנקודה",
                "לא קרה כלום",
                "הוא קיבל חצי נקודה",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "ההוראה דורשת הקפה של אפשרות קיימת.",
            },
            { type: "spell-word", word: "circle", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "complete the sentence", he: "השלימו את המשפט" },
                {
                  en: "circle the correct answer",
                  he: "הקיפו את התשובה הנכונה",
                },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "explain",
              translationHe: "להסביר",
              exampleEn: "**Explain** why the trees grew back.",
              exampleHe: "הסבירו למה העצים חזרו לגדול.",
              hookHe:
                "explain = להסביר: לתת סיבה או תיאור במילים שלכם, לפי הטקסט. לא רק להעתיק משפט.",
            },
            {
              type: "mcq",
              prompt:
                '"Explain why the number of trees increased." - מה נותנים?',
              options: [
                "רק את המספר",
                "שתי תשובות",
                "סיבה מהטקסט, בניסוח שלי",
                "תרגום",
              ],
              correctIndex: 2,
              layout: "rows",
              explanation: "explain = סיבה בהבנה שלי.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "הסבירו":',
              sentence: "Explain your answer in one sentence.",
              correctWordIndex: 0,
            },
            { type: "spell-word", word: "explain", mode: "copy" },
            {
              type: "word-card",
              word: "because",
              translationHe: "כי / מפני ש־",
              exampleEn: "People left **because** the water was dirty.",
              exampleHe: "אנשים עזבו כי המים היו מלוכלכים.",
              hookHe:
                "because = כי. אחריה בא הסבר. כשהיא בשאלה, מחפשים סיבה. וכשהיא כבר כתובה בשאלה, לא כותבים אותה שוב בתשובה.",
            },
            {
              type: "mcq",
              prompt: "The match was cancelled ______ it rained all day.",
              options: ["so", "and", "but", "because"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "הגשם הוא הסיבה = because.",
            },
            {
              type: "mcq",
              prompt:
                '"Complete the sentence: Students volunteer because..." - מה כותבים אחרי because?',
              options: ["סיבה", "מטרה", "זמן", "מקום"],
              correctIndex: 0,
              layout: "rows",
              explanation: "because = סיבה.",
            },
            { type: "spell-word", word: "because", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "complete the sentence", he: "השלימו את המשפט" },
                {
                  en: "circle the correct answer",
                  he: "הקיפו את התשובה הנכונה",
                },
                { en: "explain", he: "להסביר" },
                { en: "because", he: "כי / מפני ש־" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "in order to",
              translationHe: "כדי ל־",
              exampleEn:
                "The goats were removed **in order to** let the plants grow back.",
              exampleHe: "העזים הוסרו כדי לתת לצמחים לגדול מחדש.",
              hookHe:
                "in order to = כדי ל. מה שבא אחריה הוא מטרה: מה רצו להשיג. because = סיבה מאחור · in order to = מטרה קדימה.",
            },
            {
              type: "mcq",
              prompt: "She saved money ______ buy a bicycle.",
              options: ["in order to", "explain", "because", "circle"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "חסכה כדי לקנות = in order to.",
            },
            {
              type: "mcq",
              prompt:
                '"They removed the goats in order to ___" - מה מחפשים בטקסט?',
              options: ["סיבה - מה גרם", "מקום", "מטרה - מה רצו להשיג", "זמן"],
              correctIndex: 2,
              layout: "rows",
              explanation: "in order to = מטרה.",
            },
            { type: "spell-word", word: "in order to", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "complete the sentence", he: "השלימו את המשפט" },
                {
                  en: "circle the correct answer",
                  he: "הקיפו את התשובה הנכונה",
                },
                { en: "explain", he: "להסביר" },
                { en: "because", he: "כי / מפני ש־" },
                { en: "in order to", he: "כדי ל־" },
              ],
            },
            {
              type: "steps",
              steps: [
                '"Complete the sentence: People left because…" ← ממשיכים את המשפט, לא כותבים חדש.',
                '"Explain why the goats were removed." ← נותנים סיבה מהטקסט, לא רק מעתיקים משפט.',
                '"Because" בשאלה ← מחפשים סיבה. "In order to" בשאלה ← מחפשים מטרה.',
              ],
            },
            {
              type: "preface",
              text: "זוכרים את שלוש השאלות מההתחלה? עכשיו יש לכם את הטקסט. ענו, והפעם אתם יודעים איך כל הוראה רוצה שתענו.",
            },
            {
              type: "passage-mcq",
              text: "I  Redonda is a small island. In 2016, environmentalists removed the goats from the island. The goats had eaten all the plants, so the island was brown and empty.\n\nII  The goats were removed in order to let the plants grow back. Two years later, the trees began to grow again because nothing was eating the young plants.",
              questions: [
                {
                  prompt:
                    "Complete the sentence: People removed the goats because ...",
                  options: [
                    "the goats ate all the plants",
                    "nobody lived there",
                    "the island was too small",
                    "the trees were too tall",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "Circle the correct answer: Why did the scientists remove the goats?",
                  options: [
                    "To make the island brown",
                    "To build houses",
                    "To let the plants grow back",
                    "To sell the goats",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "Explain why the trees grew back.",
                  options: [
                    "Nothing was eating the young plants",
                    "People painted them",
                    "The goats planted them",
                    "It rained less",
                  ],
                  correctIndex: 0,
                },
              ],
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt:
                '"Complete the sentence: The trees grew back because…" - מה כותבים?',
              options: [
                "שתי תשובות",
                "משפט חדש שלא קשור",
                "אפשרות מסומנת בעיגול",
                "את הסיבה, בלי לחזור על because",
              ],
              correctIndex: 3,
              layout: "rows",
              explanation: "complete = ממשיכים, ולא חוזרים על because.",
            },
            {
              type: "mcq",
              prompt:
                '"Circle the correct answer" = אפשר לכתוב כמה תשובות שרוצים.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              layout: "rows",
              explanation: "circle = מקיפים תשובה אחת.",
            },
            {
              type: "mcq",
              prompt: '"Explain" ו-"complete" מבקשים את אותו דבר.',
              options: ["❌ לא נכון", "✅ נכון"],
              correctIndex: 0,
              layout: "rows",
              explanation:
                "complete = ממשיכים משפט. explain = נותנים סיבה בהבנה שלי.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שמסמנת סיבה:",
              sentence: "The road was closed because of the storm.",
              correctWordIndex: 3,
            },
            {
              type: "mark-all",
              instruction: "סמנו את ההוראות. הצבעים: הוראה, סיבה ומטרה.",
              text: "Complete the sentence. Explain why people left because the water was dirty. They moved in order to find food.",
              correctIndices: [],
              categories: [
                { name: "הוראה", color: "amber", indices: [0, 3] },
                { name: "סיבה", color: "rose", indices: [7] },
                { name: "מטרה", color: "emerald", indices: [14, 15, 16] },
              ],
              wordBank: [
                "complete the sentence",
                "explain",
                "because",
                "in order to",
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming and pollution.\n\nII  In 2019, scientists started a project to plant one billion trees. They did it in order to protect wildlife. The project is led by Dr. Diallo, who teaches local people how to care for trees because most trees die when nobody looks after them.",
              questions: [
                {
                  prompt:
                    "Circle the correct answer: Why did scientists start the project?",
                  options: [
                    "In order to stop rain",
                    "In order to protect wildlife",
                    "Because forests are growing",
                    "Because trees are cheap",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "Complete the sentence: Most trees die because ...",
                  options: [
                    "they are too old",
                    "it is too sunny",
                    "birds eat them",
                    "nobody looks after them",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt: "Explain: why does Dr. Diallo teach local people?",
                  options: [
                    "So that they leave",
                    "Because trees are cheap",
                    "So that trees are looked after and survive",
                    "To reduce pollution",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                'תלמיד ענה על "Circle the correct answer" בכך שכתב תשובה משלו במקום להקיף אחת מהאפשרויות. מה קרה לו?',
              modelAnswer:
                "הוא קיבל 0: ההוראה דורשת הקפה של אפשרות קיימת, לא כתיבת תשובה חדשה.",
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
    required: ["n-5cd02dfa"],
    requiredRounds: 2,
    position: { x: -70, y: 130 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "לפעמים אנחנו מבינים את הכיוון של הטקסט עוד לפני שהבנו כל מילה. יש מילים שמאותתות לנו:\n**עכשיו מגיע ניגוד. עכשיו מוסיפים מידע. עכשיו מגיעה תוצאה. **אלה **מילות ניווט**.\n\nקראו את הפסקה הבאה:\n*The city wanted to plant more trees. ****However****, there was not enough money. ****In addition****, there was not enough space. ****As a result****, the project was delayed.*\n\nשימו לב למילים המודגשות. גם אם לא הבנתם כל מילה, הן כבר נותנות לכם רמז:\n**However** → עכשיו מגיעה בעיה או ניגוד.**In addition** → עכשיו מוסיפים עוד דבר.**As a result** → עכשיו מגיעה התוצאה.\n\nמילות ניווט הן כמו שלטים בדרך: הן אומרות לנו **מה עומד להגיע עכשיו בטקסט**.",
        },
        {
          type: "preface",
          text: "מה שראינו זה ארבע מילות ניווט: פנייה, ניגוד, עוד מידע ותוצאה.\n\nהן אומרות לכם איפה יושב הרעיון החשוב, ולפעמים הן מסמנות את התשובה עצמה.\n\n כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "however",
              translationHe: "אולם / אבל",
              exampleEn: "**However**, there is good news.",
              exampleHe: "אולם, יש חדשות טובות.",
              hookHe:
                "however = אולם. פנייה חדה: מה שלפניה הוא הרקע, ומה שאחריה הוא הנקודה.",
            },
            {
              type: "mcq",
              prompt:
                "Every year forests are destroyed. ______, there is good news.",
              options: ["However", "Yesterday", "Sometimes", "Usually"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "רקע רע ואז פנייה = However.",
            },
            {
              type: "mcq",
              prompt:
                '"The city is very old. However, it is very modern." - מה חשוב יותר?',
              options: [
                "המשפט לפני however",
                "שניהם אותו דבר",
                "אף אחד מהם",
                "המשפט אחרי however",
              ],
              correctIndex: 3,
              layout: "rows",
              explanation: "מה שאחרי however הוא הנקודה.",
            },
            { type: "spell-word", word: "however", mode: "copy" },
            {
              type: "word-card",
              word: "although",
              translationHe: "למרות ש־",
              exampleEn: "**Although** it was raining, we went to the park.",
              exampleHe: "למרות שירד גשם, הלכנו לפארק.",
              hookHe:
                "although = למרות ש. בתוך משפט אחד יש שני חלקים שמנוגדים זה לזה.",
            },
            {
              type: "mcq",
              prompt: '"Although he trained hard, he did not win." - מה קרה?',
              options: [
                "התאמן קשה ובכל זאת לא ניצח",
                "התאמן קשה ולכן ניצח",
                "לא התאמן וגם לא ניצח",
                "ניצח ואז התאמן",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "although = למרות ש, ניגוד.",
            },
            {
              type: "mcq",
              prompt: "איזה משפט אומר שדבר צפוי לא קרה?",
              options: [
                "Although she studied, she failed the test.",
                "She did not study and failed.",
                "She studied, so she passed the test.",
                "She studied and passed the test.",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "although = הניגוד: למדה ובכל זאת נכשלה.",
            },
            { type: "spell-word", word: "although", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "however", he: "אולם / אבל" },
                { en: "although", he: "למרות ש־" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "in addition",
              translationHe: "בנוסף",
              exampleEn:
                "The project saves water. **In addition**, it creates jobs.",
              exampleHe: "הפרויקט חוסך מים. בנוסף, הוא יוצר מקומות עבודה.",
              hookHe:
                'in addition = בנוסף. עוד נקודה באותו כיוון, ולפעמים זו התשובה השנייה בשאלה של "give TWO".',
            },
            {
              type: "mcq",
              prompt: "The library is quiet. ______, it is free.",
              options: ["Yesterday", "Although", "In addition", "However"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "עוד יתרון באותו כיוון = In addition.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שמסמנת "עוד מידע":',
              sentence: "The park is clean. In addition, it is free.",
              correctWordIndex: 5,
            },
            { type: "spell-word", word: "in addition", mode: "copy" },
            {
              type: "word-card",
              word: "therefore / as a result",
              translationHe: "לכן / כתוצאה מכך",
              exampleEn:
                "It rained all day. **As a result**, the match was cancelled.",
              exampleHe: "ירד גשם כל היום. כתוצאה מכך המשחק בוטל.",
              hookHe:
                "as a result = כתוצאה. מה שאחריה קרה בגלל מה שלפניה. החץ: סיבה ← תוצאה. therefore = לכן, אותה משמעות.",
            },
            {
              type: "mcq",
              prompt: "He forgot his umbrella. ______, he got wet.",
              options: ["As a result", "However", "In addition", "Although"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "סיבה ואז תוצאה = As a result.",
            },
            {
              type: "mcq",
              prompt:
                '"Stress increased. As a result, sleep got worse." - מה קרה בגלל מה?',
              options: [
                "אין קשר ביניהם",
                "השינה החמירה בגלל הלחץ",
                "השינה השתפרה",
                "הלחץ עלה בגלל השינה",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "as a result = מה שאחרי נגרם ממה שלפני.",
            },
            { type: "spell-word", word: "therefore", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "however", he: "אולם / אבל" },
                { en: "although", he: "למרות ש־" },
                { en: "in addition", he: "בנוסף" },
                { en: "therefore / as a result", he: "לכן / כתוצאה מכך" },
              ],
            },
            {
              type: "summary",
              title: "Eye Catchers - סימנים שאומרים לאן ללכת",
              lines: [
                "however / although ← פנייה. מה שאחריו חשוב.",
                "in addition ← עוד מידע בא מיד, לפעמים התשובה השנייה.",
                "therefore / as a result ← תוצאה. מה שקרה בגלל מה שנאמר קודם.",
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? עכשיו אתם יודעים מה כל מילה מסמנת.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Every year, forests are destroyed. However, there is good news. Although the project is expensive, it is working. In addition, local people learn new jobs. As a result, the forest is coming back.",
              questions: [
                {
                  prompt: 'What is the main point after "however"?',
                  options: [
                    "There is good news",
                    "Nobody cares",
                    "The project is old",
                    "Forests are destroyed",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    'What is the second good thing about the project (after "in addition")?',
                  options: [
                    "It is expensive",
                    "It is old",
                    "Local people learn new jobs",
                    "Forests are destroyed",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What was the result?",
                  options: [
                    "Nobody learned",
                    "The project stopped",
                    "Trees died",
                    "The forest is coming back",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"ראיתי however/although - עוצר. ראיתי in addition - עוד נקודה. ראיתי as a result - קורא תוצאה."',
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt: "The exam was difficult. ______, most students passed.",
              options: ["As a result", "However", "Although", "In addition"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "ניגוד: קשה אבל עברו = However.",
            },
            {
              type: "mcq",
              prompt: "She studied all week. ______, she got a high grade.",
              options: ["However", "As a result", "Although", "In addition"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "למדה ולכן ציון גבוה = As a result.",
            },
            {
              type: "mcq",
              prompt: "______ the weather was bad, the trip was great.",
              options: ["Although", "As a result", "However", "In addition"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "Although פותחת חלק מנוגד בתוך משפט אחד.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שמסמנת "לכן":',
              sentence: "It was late, therefore we went home.",
              correctWordIndex: 3,
            },
            {
              type: "mark-all",
              instruction:
                "סמנו את מילות הניווט. הצבעים: ניגוד, עוד מידע ותוצאה.",
              text: "Many adults cannot swim. However, experts say it is never too late. Although some adults are afraid of water, they make good progress. In addition, lessons are cheap. As a result, more adults are learning.",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "rose", indices: [4, 12] },
                { name: "עוד מידע", color: "sky", indices: [23, 24] },
                { name: "תוצאה", color: "emerald", indices: [28, 29, 30] },
              ],
              wordBank: ["however", "although", "in addition", "as a result"],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think.\n\nII  Many adults feel embarrassed and never try to learn. However, experts say it is never too late. Although some adults are afraid of the water, they usually make good progress.\n\nIII  Lessons for adults are now cheap. In addition, many pools offer evening classes. As a result, more adults are learning to swim every year.",
              questions: [
                {
                  prompt: "What do experts say?",
                  options: [
                    "Adults cannot learn",
                    "Lessons are expensive",
                    "It is never too late",
                    "Swimming is dangerous",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "What do adults usually do although they are afraid of the water?",
                  options: [
                    "Move away",
                    "Buy a pool",
                    "Stop learning",
                    "Make good progress",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    "What is the result of cheap lessons and evening classes?",
                  options: [
                    "More children",
                    "Higher prices",
                    "Fewer pools",
                    "More adults are learning to swim",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                "כתבו משפט אחד עם however ומשפט אחד עם as a result, על נושא מהמודול.",
              modelAnswer:
                "Many forests are destroyed. However, some projects protect them. The project worked well. As a result, the forest is coming back.",
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
    required: ["nav-words-1"],
    requiredRounds: 2,
    position: { x: -70, y: 310 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עוד מילות ניווט. המילים המודגשות אומרות מה נמצא, לאן זה זז ואיזו דוגמה מגיעה.\n\n{d:ltr}Scientists **found** that noise can hurt learning. Stress levels **decreased** in quiet classrooms. **For example**, in one school, stress fell by 35%, and the number of calm students **increased** by 20%.\n\nכמה מהן אתם יודעים להסביר מה הן מסמנות?",
        },
        {
          type: "preface",
          text: "שלוש מילות ניווט: דוגמה, כיוון וממצא.\n\nהכיוון חשוב במיוחד: עלייה או ירידה. טעות בכיוון הופכת תשובה נכונה לשגויה. כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "for example",
              translationHe: "לדוגמה",
              exampleEn:
                "Many animals live here. **For example**, there are foxes and owls.",
              exampleHe: "הרבה חיות חיות כאן. לדוגמה, יש שועלים וינשופים.",
              hookHe:
                "for example = לדוגמה. אחריה מגיע משהו קונקרטי: שם, מספר או מקום. זה לא רעיון חדש, זו הדגמה של מה שנאמר קודם.",
            },
            {
              type: "mcq",
              prompt:
                "Many sports are popular. ______, football and basketball.",
              options: ["Although", "However", "For example", "In addition"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "אחריה שמות של ספורט = For example.",
            },
            {
              type: "mcq",
              prompt:
                '"Scientists found that handwriting helps memory. For example, students who wrote by hand remembered more." - מה תפקיד המשפט השני?',
              options: [
                "דוגמה קונקרטית לממצא",
                "תוצאה",
                "דעה של הכותב",
                "רעיון חדש שסותר",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: "for example = הדגמה של מה שנאמר.",
            },
            { type: "spell-word", word: "for example", mode: "copy" },
            {
              type: "word-card",
              word: "increase / decrease",
              translationHe: "לעלות / לרדת",
              exampleEn:
                "The number of birds **increased** by 60%, but noise **decreased**.",
              exampleHe: "מספר הציפורים עלה ב-60%, אבל הרעש ירד.",
              hookHe:
                "increase ↑ = עלה. decrease ↓ = ירד. תמיד לבדוק את הכיוון לפני שעונים, לפעמים זה ההבדל בין נכון לשגוי.",
            },
            {
              type: "mcq",
              prompt:
                '"The number of birds increased by 60%." - מה קרה למספר הציפורים?',
              options: ["נעלם", "נשאר אותו דבר", "עלה", "ירד"],
              correctIndex: 2,
              layout: "rows",
              explanation: "increase = עלה.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שמראה שהמספר ירד:",
              sentence: "Stress levels decreased by 35%.",
              correctWordIndex: 2,
            },
            { type: "spell-word", word: "increase", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "for example", he: "לדוגמה" },
                { en: "increase / decrease", he: "לעלות / לרדת" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "found / discovered",
              translationHe: "מצא / גילה",
              exampleEn: "Researchers **found** that walking improves memory.",
              exampleHe: "חוקרים מצאו שהליכה משפרת את הזיכרון.",
              hookHe:
                "found (מצא) ו-discovered (גילה) בטקסט מסמנות ממצא, בדרך כלל של מחקר. אחריהן בא מה שנמצא.",
            },
            {
              type: "mcq",
              prompt: "Scientists ______ that the drug helps people sleep.",
              options: ["sang", "ate", "painted", "found"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "ממצא של מדענים = found.",
            },
            {
              type: "mcq",
              prompt:
                '"Scientists found that stress decreased. For example, one group felt calmer." - איזו מילה מסמנת את הממצא?',
              options: ["found", "calmer", "group", "example"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "found = מסמנת ממצא.",
            },
            { type: "spell-word", word: "discovered", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "for example", he: "לדוגמה" },
                { en: "increase / decrease", he: "לעלות / לרדת" },
                { en: "found / discovered", he: "מצא / גילה" },
              ],
            },
            {
              type: "summary",
              title: "Eye Catchers - עוד סימנים חשובים",
              lines: [
                "for example ← דוגמה קונקרטית מגיעה, לא רעיון חדש.",
                "increase / decrease ← עלייה / ירידה - שימו לב לכיוון.",
                "found / discovered ← מישהו מצא או גילה משהו, לרוב ממצא מחקר.",
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? עכשיו אתם יודעים מה כל מילה מסמנת.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Scientists found that noise can hurt learning. Stress levels decreased in quiet classrooms. For example, in one school, stress fell by 35%, and the number of calm students increased by 20%.",
              questions: [
                {
                  prompt: "What did scientists find?",
                  options: [
                    "Noise can hurt learning",
                    "Students sleep more",
                    "Quiet is expensive",
                    "Stress is always high",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What happened to stress levels in quiet classrooms?",
                  options: [
                    "They stayed the same",
                    "They increased",
                    "They decreased",
                    "They disappeared",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What was the example?",
                  options: [
                    "In one school, stress fell by 35%",
                    "Noise increased by 35%",
                    "Students left school",
                    "Teachers found new jobs",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: [
                '"for example = דוגמה. increase = עלה, decrease = ירד. found = ממצא."',
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt: "Many fruits are healthy. ______, apples and oranges.",
              options: ["However", "For example", "In addition", "Although"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "שמות של פירות = For example.",
            },
            {
              type: "mcq",
              prompt: "The number of visitors ______ from 500 to 800.",
              options: ["increased", "example", "decreased", "found"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "מ-500 ל-800 = עלה.",
            },
            {
              type: "mcq",
              prompt:
                "The number of accidents ______ after the new law: there were fewer.",
              options: ["discovered", "increased", "decreased", "example"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "פחות תאונות = ירד.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שמסמנת ממצא:",
              sentence: "Doctors discovered that sleep helps memory.",
              correctWordIndex: 1,
            },
            {
              type: "mark-all",
              instruction:
                "סמנו את מילות הניווט. הצבעים: ממצא, ירידה, עלייה ודוגמה.",
              text: "Scientists found that stress decreased in quiet rooms. For example, in one class it decreased by 35%, while calm students increased by 20%.",
              correctIndices: [],
              categories: [
                { name: "ממצא", color: "sky", indices: [1] },
                { name: "ירידה", color: "rose", indices: [4, 14] },
                { name: "דוגמה", color: "amber", indices: [8, 9] },
                { name: "עלייה", color: "emerald", indices: [20] },
              ],
              wordBank: ["found", "decreased", "increased", "for example"],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Sleep is important for teenagers.\n\nII  Researchers found that teenagers who sleep eight hours get better grades. For example, in one school, average grades increased by 10 points after classes started later.\n\nIII  At the same time, the number of students who felt tired decreased by 30%.",
              questions: [
                {
                  prompt: "What did researchers find?",
                  options: [
                    "Teenagers who sleep eight hours get better grades",
                    "Teenagers should study more",
                    "Schools should close",
                    "Grades decreased",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What happened to grades in one school?",
                  options: [
                    "They stayed the same",
                    "They increased by 10 points",
                    "They decreased",
                    "They disappeared",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "What happened to the number of tired students?",
                  options: [
                    "It stayed the same",
                    "It increased by 30%",
                    "It doubled",
                    "It decreased by 30%",
                  ],
                  correctIndex: 3,
                },
              ],
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
    required: ["n-5cd02dfa"],
    requiredRounds: 3,
    position: { x: 60, y: 130 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "קראו את הקטע. המילים המודגשות הן מילות תוכן.\n\n{d:ltr}Five years ago the river in Millbrook was full of rubbish. A local **charity** asked **residents** to help, and more than 200 **volunteers** joined the clean-up. The whole **community** worked together for three weekends. Today the **environment** around the river is healthy again.\n\nכמה מהן אתם בטוחים במשמעות שלהן, בלי לחשוב? אם פחות מחמש - השיעור הזה בשבילכם.",
        },
        {
          type: "preface",
          text: "חמש מילים על **אנשים וקהילה**: מי מתנדב, מי מארגן, מי גר שם, ועל מה שומרים.\n\nכל מילה מגיעה עם תרגילים מיד אחריה. בסוף תחזרו לקטע שקראתם, ותפרקו גם מילה ארוכה שלא הכרתם: **environmentalists**.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "environment",
              translationHe: "סביבה",
              exampleEn: "The **environment** is under threat.",
              exampleHe: "הסביבה נמצאת בסכנה.",
              hookHe:
                'נשמע כמו "אנווירונמנט". ומילה ארוכה כמו environmentalists היא environment + ist: מי שאכפת לו מהסביבה. נחזור אליה בסוף.',
            },
            {
              type: "mcq",
              prompt:
                "Factories pollute the air and the rivers. They harm the ______.",
              options: ["holiday", "environment", "teacher", "homework"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "אוויר ונהרות = הסביבה.",
            },
            {
              type: "cloze-pick",
              clause: "is polluted, and many trees are being cut down.",
              options: [
                "The weather",
                "The environment",
                "The homework",
                "The bicycle",
              ],
              correctIndices: [1],
              explanation: "זיהום וכריתת עצים = The environment.",
            },
            { type: "spell-word", word: "environment", mode: "copy" },
            {
              type: "word-card",
              word: "volunteer(s)",
              translationHe: "מתנדב / מתנדבים",
              exampleEn: "Young **volunteers** planted 200 trees.",
              exampleHe: "מתנדבים צעירים נטעו 200 עצים.",
              hookHe:
                'נשמע כמו "וולונטרי" - מרצון. מתנדב עושה משהו מרצונו, בלי שכר. אפשר גם כפועל: to volunteer = להתנדב.',
            },
            {
              type: "mcq",
              prompt:
                "Dana helps at the animal shelter every Friday. She does it of her own choice and gets no money. She is a ______.",
              options: ["volunteer", "bicycle", "teacher", "environment"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "מרצון ובלי שכר = מתנדבת.",
            },
            {
              type: "cloze-pick",
              clause: "give their time to help others. They do not get paid.",
              options: ["The environment", "Bicycles", "Doctors", "Volunteers"],
              correctIndices: [3],
              explanation: "Volunteers - נותנים מזמנם, בלי שכר.",
            },
            { type: "spell-word", word: "volunteers", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "environment", he: "סביבה" },
                { en: "volunteers", he: "מתנדב / מתנדבים" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "community",
              translationHe: "קהילה",
              exampleEn: "The whole **community** came to the meeting.",
              exampleHe: "כל הקהילה הגיעה לאסיפה.",
              hookHe:
                'נשמע כמו "קומיוניטי", ודומה ל-common = משותף. קהילה היא אנשים שיש להם משהו משותף: שכונה, בית ספר, עיירה.',
            },
            {
              type: "mcq",
              prompt:
                "Families, teachers and shop owners all came to the meeting. The whole ______ wanted to help.",
              options: ["environment", "community", "volunteers", "holiday"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "משפחות, מורים ובעלי חנויות ביחד = קהילה.",
            },
            {
              type: "cloze-pick",
              clause:
                "helped each other after the storm. Neighbours, shops and schools all worked together.",
              options: [
                "A bicycle",
                "The environment",
                "The community",
                "A volunteer",
              ],
              correctIndices: [2],
              explanation:
                "שכנים, חנויות ובתי ספר שעובדים יחד = The community.",
            },
            { type: "spell-word", word: "community", mode: "copy" },
            {
              type: "word-card",
              word: "charity",
              translationHe: "ארגון צדקה",
              exampleEn: "A local **charity** raised money for the school.",
              exampleHe: "ארגון צדקה מקומי גייס כסף לבית הספר.",
              hookHe:
                'נשמע כמו "צ\'ריטי". זה ארגון שאוסף כסף וזמן כדי לעזור, לא כדי להרוויח. שימו לב: זה הארגון, לא האדם.',
            },
            {
              type: "mcq",
              prompt:
                "The organisation collects money for sick children. It does not make a profit. It is a ______.",
              options: ["environment", "community", "charity", "volunteers"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "אוסף כסף כדי לעזור ולא כדי להרוויח = ארגון צדקה.",
            },
            {
              type: "cloze-pick",
              clause:
                "is an organisation that raises money to help people, not to make a profit.",
              options: [
                "A volunteer",
                "A charity",
                "The environment",
                "A holiday",
              ],
              correctIndices: [1],
              explanation: "ארגון שאוסף כסף כדי לעזור = A charity.",
            },
            { type: "spell-word", word: "charity", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "environment", he: "סביבה" },
                { en: "volunteers", he: "מתנדב / מתנדבים" },
                { en: "community", he: "קהילה" },
                { en: "charity", he: "ארגון צדקה" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "residents",
              translationHe: "תושבים",
              exampleEn: "Most **residents** said the air was cleaner.",
              exampleHe: "רוב התושבים אמרו שהאוויר נקי יותר.",
              hookHe:
                'נשמע כמו "רזידנס" - מגורים. resident הוא מי שגר במקום, לא אורח ולא תייר.',
            },
            {
              type: "mcq",
              prompt:
                "People who live in a city, and not just visit it, are its ______.",
              options: ["charity", "residents", "volunteers", "community"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "מי שגר במקום = תושב.",
            },
            {
              type: "cloze-pick",
              clause:
                "of the city all agreed that the new park made it a better place to live.",
              options: [
                "Volunteers",
                "Residents",
                "A charity",
                "The environment",
              ],
              correctIndices: [1],
              explanation: "מי שגר בעיר = Residents.",
            },
            { type: "spell-word", word: "residents", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "environment", he: "סביבה" },
                { en: "volunteers", he: "מתנדב / מתנדבים" },
                { en: "community", he: "קהילה" },
                { en: "charity", he: "ארגון צדקה" },
                { en: "residents", he: "תושבים" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Five years ago the river in Millbrook was full of rubbish. A local charity asked residents to help, and more than 200 volunteers joined the clean-up. The whole community worked together for three weekends. Today the environment around the river is healthy again.",
              questions: [
                {
                  prompt: "Who asked the residents to help?",
                  options: [
                    "The environment",
                    "A local charity",
                    "The volunteers",
                    "The community",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "What happened to the environment around the river?",
                  options: [
                    "It was full of rubbish",
                    "It became healthy again",
                    "The charity closed it",
                    "The volunteers left it",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                "In 2016, a group of environmentalists decided to make the island of Redonda green again.\n\nפרקו את המילה: environment + -ist + -s. מי החליט להפוך את האי לירוק?",
              options: [
                "People who care about the environment",
                "People who sell trees",
                "People who visit the island",
                "People who work in a factory",
              ],
              correctIndex: 0,
              explanation:
                "environment + ist = מי שאכפת לו מהסביבה. כך מפרקים מילה ארוכה שלא הכרתם.",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt:
                "Many ______ in the city offered to plant trees. They did it for free.",
              options: ["residents", "environments", "charities", "volunteers"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מרצון ובחינם = מתנדבים.",
            },
            {
              type: "mcq",
              prompt: "The ______ worked together to clean the river.",
              options: ["environment", "charity", "resident", "community"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation:
                "worked together = אנשים רבים שפועלים יחד. charity הוא ארגון אחד, ו-environment הוא הנהר עצמו.",
            },
            {
              type: "mcq",
              prompt: "Local ______ said the air was cleaner than before.",
              options: ["communities", "charities", "volunteers", "residents"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "אלה שגרים במקום ומרגישים את האוויר = תושבים.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "תושבים":',
              sentence: "Most residents said the change was remarkable.",
              correctWordIndex: 1,
            },
            {
              type: "mark-all",
              instruction:
                "סרקו את הטקסט וסמנו את חמש המילים. הצבעים מראים איזה סוג מילה זו: אנשים, ארגון וקבוצה, או טבע.",
              text: "A local charity decided to change the environment. Volunteers from the community joined, and residents said the results were remarkable.",
              correctIndices: [],
              categories: [
                { name: "ארגון / קבוצה", color: "sky", indices: [2, 11] },
                { name: "טבע", color: "emerald", indices: [7] },
                { name: "אנשים", color: "amber", indices: [8, 14] },
              ],
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
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  The city of Greenfield had a problem. The parks were dirty, and many residents stopped using them.\n\nII  A local charity started a project. It asked young people to volunteer for two hours a week. However, the charity could not do it alone. The whole community had to take part.\n\nIII  After a year, the parks were clean again. Residents said they felt safer, and the environment in the city was healthier.",
              questions: [
                {
                  prompt: "Why did many residents stop using the parks?",
                  options: [
                    "The charity closed them",
                    "The community did not care",
                    "The parks were dirty",
                    "The volunteers were too young",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What did the charity ask young people to do?",
                  options: [
                    "To volunteer for two hours a week",
                    "To pay for the project",
                    "To move to another city",
                    "To close the parks",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "According to paragraph II, why did the whole community have to take part?",
                  options: [
                    "The residents felt safer",
                    "The charity could not do it alone",
                    "The parks were clean again",
                    "The environment was healthy",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "writing-task",
              prompt:
                "כתבו שני משפטים באנגלית על איך אפשר לעזור לקהילה שלכם.\nהשתמשו בלפחות שתיים מהמילים מהשיעור.",
              wordBank: [
                "environment",
                "volunteers",
                "community",
                "charity",
                "residents",
              ],
              minSentences: 2,
              minWordsUsed: 2,
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
    required: ["content-2c"],
    requiredRounds: 3,
    position: { x: 190, y: 310 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "יש מילים בטקסט שנותנות לנו את **המידע החשוב באמת**.\nהן אומרות לנו: **מי עשה משהו, מה קרה, מה הייתה התוצאה, ומה היה יעיל. **אלה **מילות תוכן**.\n\nקראו את הפסקה הבאה\n\n*A team of ****researchers**** studied 500 students for a year. They ****discovered**** that noise can ****affect**** how well students learn. The ****results**** were clear: the most ****effective**** solution was a quiet room.*\nשימו לב למילים המודגשות.\nאם אתם יודעים אותן, כבר הרבה יותר קל להבין את הקטע:\n**researchers** → חוקרים**discovered** → גילו**affect** → להשפיע**results** → תוצאות**effective** → יעיל\nאלה מילים שכדאי לזהות מיד, בלי לפתוח מילון בכל פעם.\nכמה מהן אתם כבר מכירים בלי לחשוב?\nאם פחות מחמש — השיעור הזה בדיוק בשבילכם.",
        },
        {
          type: "preface",
          text: "חמש מילים על **מחקר וממצאים**: מי חוקר, מה הוא מגלה, ומה עובד באמת.\n\nהן מופיעות כמעט בכל טקסט מדעי, ובדרך כלל התשובה יושבת לידן. כל מילה מגיעה עם תרגילים מיד אחריה, ובסוף תחזרו לקטע שקראתם.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "discover / found",
              translationHe: "לגלות / מצא",
              exampleEn: "Scientists **discovered** a new way to plant trees.",
              exampleHe: "מדענים גילו דרך חדשה לשתול עצים.",
              hookHe:
                'discover = לגלות משהו שלא היה ידוע. וגם "found that…" בטקסט אומר "מצאו ש…": בדרך כלל זה ממצא של מחקר, והתשובה קרובה.',
            },
            {
              type: "mcq",
              prompt:
                "Scientists ______ a new medicine last year, and now doctors can use it.",
              options: ["cooked", "discovered", "painted", "borrowed"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "גילו תרופה חדשה = discovered.",
            },
            {
              type: "cloze-pick",
              clause: "that noise makes it harder to learn.",
              options: [
                "Scientists borrowed",
                "Scientists forgot",
                "Scientists painted",
                "Scientists found",
              ],
              correctIndices: [3],
              explanation: "found that = מצאו ש - הממצא.",
            },
            { type: "spell-word", word: "discover", mode: "copy" },
            {
              type: "word-card",
              word: "result(s)",
              translationHe: "תוצאה / תוצאות",
              exampleEn: "The **results** of the study were surprising.",
              exampleHe: "תוצאות המחקר היו מפתיעות.",
              hookHe:
                "result = מה שיוצא בסוף. results במחקר = התשובה שהמחקר נתן, ולכן המילה מצביעה על ממצא.",
            },
            {
              type: "mcq",
              prompt:
                "We tested the new method for a month. The ______ were very good.",
              options: ["homework", "discover", "results", "holiday"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "The ... were (רבים) = results.",
            },
            {
              type: "cloze-pick",
              clause: "of the survey were published yesterday.",
              options: [
                "The shoes",
                "The results",
                "The breakfast",
                "The window",
              ],
              correctIndices: [1],
              explanation: "תוצאות של סקר = The results.",
            },
            { type: "spell-word", word: "results", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "discover / found", he: "לגלות / מצא" },
                { en: "results", he: "תוצאה / תוצאות" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "researchers",
              translationHe: "חוקרים",
              exampleEn: "**Researchers** studied 500 students for a year.",
              exampleHe: "חוקרים חקרו 500 תלמידים במשך שנה.",
              hookHe:
                "research = מחקר. researchers = מי שעושה מחקר: research + er. כשרואים researchers בטקסט, מגיע ממצא.",
            },
            {
              type: "mcq",
              prompt:
                "People who study a subject carefully to learn new things are ______.",
              options: ["holidays", "results", "shoes", "researchers"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "חוקרים = researchers.",
            },
            {
              type: "cloze-pick",
              clause: "studied the sleep of 300 teenagers for two years.",
              options: ["Results", "Holidays", "Sandwiches", "Researchers"],
              correctIndices: [3],
              explanation: "מי שחוקר = Researchers.",
            },
            { type: "spell-word", word: "researchers", mode: "copy" },
            {
              type: "word-card",
              word: "affect",
              translationHe: "להשפיע על",
              exampleEn: "Noise can **affect** how well you sleep.",
              exampleHe: "רעש יכול להשפיע על איכות השינה.",
              hookHe:
                "affect = להשפיע. X affects Y: הראשון משפיע על השני. (השם effect מגיע בשיעור אחר.)",
            },
            {
              type: "mcq",
              prompt:
                "Bad weather can ______ how many people come to the park.",
              options: ["paint", "discover", "cook", "affect"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "משפיע על כמה אנשים באים = affect.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את הפועל שפירושו "להשפיע":',
              sentence: "Stress can affect your sleep.",
              correctWordIndex: 2,
            },
            { type: "spell-word", word: "affect", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "discover / found", he: "לגלות / מצא" },
                { en: "results", he: "תוצאה / תוצאות" },
                { en: "researchers", he: "חוקרים" },
                { en: "affect", he: "להשפיע על" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "effective",
              translationHe: "יעיל",
              exampleEn: "The most **effective** method was working in pairs.",
              exampleHe: "השיטה היעילה ביותר הייתה עבודה בזוגות.",
              hookHe:
                "effective = עובד באמת, נותן תוצאה. effective בא מ-effect (השפעה): מה שיש לו השפעה הוא יעיל.",
            },
            {
              type: "mcq",
              prompt: "This medicine really works. It is very ______.",
              options: ["researchers", "discover", "effective", "holiday"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "עובד באמת = effective.",
            },
            {
              type: "mcq",
              prompt: "איזה משפט משתמש ב-effective נכון?",
              options: [
                "A quiet room is an effective way to study.",
                "He effective the window.",
                "The effective were surprising.",
                "An effective walked to school.",
              ],
              correctIndex: 0,
              layout: "rows",
              explanation: 'effective הוא תואר: "an effective way".',
            },
            { type: "spell-word", word: "effective", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "discover / found", he: "לגלות / מצא" },
                { en: "results", he: "תוצאה / תוצאות" },
                { en: "researchers", he: "חוקרים" },
                { en: "affect", he: "להשפיע על" },
                { en: "effective", he: "יעיל" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "A team of researchers studied 500 students for a year. They discovered that noise can affect how well students learn. The results were clear: the most effective solution was a quiet room.",
              questions: [
                {
                  prompt: "What did the researchers discover?",
                  options: [
                    "Quiet rooms are expensive",
                    "Students need more homework",
                    "Noise can affect how well students learn",
                    "Sleep is not important",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What was the most effective solution?",
                  options: [
                    "Longer lessons",
                    "A quiet room",
                    "Fewer teachers",
                    "More homework",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                'The programme was "ineffective".\n\nפרקו את המילה: in- (לא) + effective (יעיל). מה זה אומר?',
              options: ["יעילה מאוד", "לא יעילה", "מסוכנת", "חדשה"],
              correctIndex: 1,
              explanation: "in- = לא. כך מפרקים מילה חדשה.",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt:
                "The scientists were surprised by the ______ of the experiment.",
              options: ["affect", "results", "effective", "researchers"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "תוצאות הניסוי = results.",
            },
            {
              type: "mcq",
              prompt: "______ from the university tested 200 students.",
              options: ["Results", "Effective", "Discovered", "Researchers"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מי שבודק = Researchers.",
            },
            {
              type: "mcq",
              prompt: "A bad night can ______ your mood the next day.",
              options: ["result", "researchers", "effective", "affect"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "משפיע על מצב הרוח = affect.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "יעיל":',
              sentence: "Group work was the most effective method.",
              correctWordIndex: 5,
            },
            {
              type: "mark-all",
              instruction:
                "סמנו את חמש המילים. הצבעים: מי עושה, מה עושים, ומה יוצא.",
              text: "Researchers discovered that noise can affect learning. The results showed that the most effective solution was silence.",
              correctIndices: [],
              categories: [
                { name: "מי", color: "amber", indices: [0] },
                { name: "פעולה", color: "sky", indices: [1, 5] },
                { name: "תוצאה", color: "emerald", indices: [8, 13] },
              ],
              wordBank: [
                "researchers",
                "discovered",
                "affect",
                "results",
                "effective",
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  For ten years, Dr. Sarah Okafor studied volunteering. She found that teenagers who volunteer feel less stressed.\n\nII  According to the study, the most effective programmes bring young people face to face with the people they help. The results also showed that volunteering can affect school grades.\n\nIII  Other researchers discovered the same thing in twelve countries.",
              questions: [
                {
                  prompt: "What did Dr. Okafor find?",
                  options: [
                    "Teenagers who volunteer feel less stressed",
                    "Grades always fall",
                    "Volunteers sleep less",
                    "Programmes are too expensive",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What makes a programme effective?",
                  options: [
                    "Paying volunteers",
                    "Working alone",
                    "Long meetings",
                    "Meeting the people you help",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    "According to paragraph II, what can volunteering affect?",
                  options: [
                    "The weather",
                    "Sports results",
                    "School grades",
                    "Family income",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "writing-task",
              prompt: "כתבו שני משפטים על מחקר, עם שלוש מהמילים מהשיעור.",
              wordBank: [
                "discovered",
                "results",
                "researchers",
                "affect",
                "effective",
              ],
              minSentences: 2,
              minWordsUsed: 3,
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
    required: ["n-5cd02dfa"],
    requiredRounds: 3,
    position: { x: 190, y: 130 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "קראו את הקטע. המילים המודגשות הן מילות תוכן.\n\n{d:ltr}Pollution can **destroy** habitats and **reduce** the number of **species**. Projects that **protect** forests can **increase** the population of endangered animals.\n\nכמה מהן אתם בטוחים במשמעות שלהן, בלי לחשוב? אם פחות מחמש - השיעור הזה בשבילכם.",
        },
        {
          type: "preface",
          text: "חמש מילים על **שינוי וסביבה**: מה עולה, מה יורד, מה מוגן ומה נהרס.\n\nהן חוזרות בכל טקסט על סביבה, בעלי חיים ואקלים, ולכיוון של המילה יש משמעות: עלייה או ירידה. כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "increase",
              translationHe: "לגדול / לעלות",
              exampleEn: "The number of trees will **increase** every year.",
              exampleHe: "מספר העצים יעלה בכל שנה.",
              hookHe:
                "increase = לעלות. אפשר גם כשם עצם: an increase of 60% = עלייה של 60%. כשרואים אותה, תמיד לבדוק: עלייה או ירידה?",
            },
            {
              type: "mcq",
              prompt:
                "The number of visitors will ______ next year: there will be more of them.",
              options: ["paint", "sing", "increase", "cook"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "יהיו יותר = increase.",
            },
            {
              type: "cloze-pick",
              clause: "in the number of birds was 60%.",
              options: ["A sandwich", "A window", "A birthday", "An increase"],
              correctIndices: [3],
              explanation: "עלייה של 60% = An increase.",
            },
            { type: "spell-word", word: "increase", mode: "copy" },
            {
              type: "word-card",
              word: "reduce / decrease",
              translationHe: "להקטין / לרדת",
              exampleEn: "The project could **reduce** carbon in the air.",
              exampleHe: "הפרויקט יכול להפחית פחמן באוויר.",
              hookHe:
                "reduce = להקטין (בכוונה). decrease = לרדת. שתיהן ההפך מ-increase: החץ כלפי מטה.",
            },
            {
              type: "mcq",
              prompt:
                "We turned off the lights to ______ the electricity we use.",
              options: ["paint", "increase", "sing", "reduce"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "להשתמש בפחות = reduce.",
            },
            {
              type: "mark-word",
              prompt: "סמנו את המילה שמראה שהמספר ירד:",
              sentence: "The number of cars decreased by 20%.",
              correctWordIndex: 4,
            },
            { type: "spell-word", word: "reduce", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "increase", he: "לעלות" },
                { en: "reduce / decrease", he: "להקטין / לרדת" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "protect",
              translationHe: "להגן",
              exampleEn: "Rangers **protect** the forest from fire.",
              exampleHe: "שומרי היער מגינים על היער מפני שריפה.",
              hookHe:
                'protect = להגן. נשמע כמו "פרוטקט". protect from = להגן מפני.',
            },
            {
              type: "mcq",
              prompt: "A helmet can ______ your head when you ride a bicycle.",
              options: ["sing", "increase", "cook", "protect"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "קסדה מגינה = protect.",
            },
            {
              type: "cloze-pick",
              clause: "the forests from fire is the rangers job.",
              options: ["Singing", "Painting", "Increasing", "Protecting"],
              correctIndices: [3],
              explanation: "להגן על היער = Protecting.",
            },
            { type: "spell-word", word: "protect", mode: "copy" },
            {
              type: "word-card",
              word: "destroy",
              translationHe: "להרוס",
              exampleEn: "Fire can **destroy** a whole forest in one day.",
              exampleHe: "שריפה יכולה להרוס יער שלם ביום אחד.",
              hookHe:
                "destroy = להרוס. הפוך מ-protect. destroy אומר שאין דרך חזרה.",
            },
            {
              type: "mcq",
              prompt: "The storm ______ many houses. Nothing was left.",
              options: ["destroyed", "increased", "cooked", "protected"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "לא נשאר כלום = destroyed.",
            },
            {
              type: "mcq",
              prompt: "איזה משפט אומר שהיער נשאר בחיים?",
              options: [
                "Pollution can destroy forests.",
                "Rangers protect the forest.",
                "Fire destroyed the forest.",
                "The forest was destroyed by the storm.",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "protect = להגן, והיער נשאר. בשאר המשפטים הוא נהרס.",
            },
            { type: "spell-word", word: "destroy", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "increase", he: "לעלות" },
                { en: "reduce / decrease", he: "להקטין / לרדת" },
                { en: "protect", he: "להגן" },
                { en: "destroy", he: "להרוס" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "species",
              translationHe: "מין (ביולוגי)",
              exampleEn: "Many **species** of birds live in this forest.",
              exampleHe: "הרבה מינים של ציפורים חיים ביער הזה.",
              hookHe:
                "species = מין של חיה או צמח. שימו לב: אותה צורה ביחיד וברבים - one species, two species.",
            },
            {
              type: "mcq",
              prompt:
                "There are more than 10,000 ______ of birds in the world.",
              options: ["increase", "species", "protect", "destroy"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "מינים של ציפורים = species.",
            },
            {
              type: "cloze-pick",
              clause: "of animals disappear when their forests are destroyed.",
              options: [
                "Many species",
                "Many breakfasts",
                "Many windows",
                "Many bicycles",
              ],
              correctIndices: [0],
              explanation: "מינים של חיות = Many species.",
            },
            { type: "spell-word", word: "species", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "increase", he: "לעלות" },
                { en: "reduce / decrease", he: "להקטין / לרדת" },
                { en: "protect", he: "להגן" },
                { en: "destroy", he: "להרוס" },
                { en: "species", he: "מין (ביולוגי)" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Pollution can destroy habitats and reduce the number of species. Projects that protect forests can increase the population of endangered animals.",
              questions: [
                {
                  prompt: "What can pollution do?",
                  options: [
                    "Build new habitats",
                    "Increase the population",
                    "Destroy habitats and reduce the number of species",
                    "Protect forests",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "How can forest projects help endangered animals?",
                  options: [
                    "They destroy habitats",
                    "They stop the rain",
                    "They can increase the population",
                    "They reduce the forest",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                'The text says "endangered animals".\n\nפרקו את המילה: en- (להכניס ל) + danger (סכנה) + -ed. מה זה?',
              options: ["גדולים", "בסכנה", "חדשים", "מוגנים"],
              correctIndex: 1,
              explanation: "en + danger + ed = הוכנסו לסכנה = בסכנת הכחדה.",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt:
                "Cutting down trees can ______ the number of birds in the area.",
              options: ["reduce", "increase", "species", "protect"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "פחות עצים = פחות ציפורים = reduce.",
            },
            {
              type: "mcq",
              prompt:
                "The new park will ______ wild animals from cars and noise.",
              options: ["increase", "protect", "species", "destroy"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "הפארק מגן = protect.",
            },
            {
              type: "mcq",
              prompt: "A rare ______ of frog lives only in this river.",
              options: ["destroy", "species", "increase", "reduce"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "מין של צפרדע = species.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "להרוס":',
              sentence: "Floods can destroy roads and bridges.",
              correctWordIndex: 2,
            },
            {
              type: "mark-all",
              instruction:
                "סרקו את הטקסט וסמנו את חמש המילים. הצבעים: הרס, הגנה, עלייה/ירידה וחיים.",
              text: "Pollution can destroy habitats and reduce the number of species. Projects that protect forests can increase the population.",
              correctIndices: [],
              categories: [
                { name: "הרס", color: "rose", indices: [2] },
                { name: "שינוי בכמות", color: "sky", indices: [5, 15] },
                { name: "חיים", color: "violet", indices: [9] },
                { name: "הגנה", color: "emerald", indices: [12] },
              ],
              wordBank: ["destroy", "reduce", "species", "protect", "increase"],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming and pollution.\n\nII  In 2019, scientists started a project to plant one billion trees in Africa. The project aims to protect forests and increase the number of wild animals.\n\nIII  After two years, the number of species in the area increased by 20%. At the same time, air pollution decreased.",
              questions: [
                {
                  prompt: "What destroys forests every year?",
                  options: [
                    "Fire, farming and pollution",
                    "Only rain",
                    "Tourists",
                    "Old trees",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What does the project aim to do?",
                  options: [
                    "Protect forests and increase the number of animals",
                    "Stop scientists",
                    "Reduce the number of trees",
                    "Destroy farms",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What happened to the number of species?",
                  options: [
                    "It stayed the same",
                    "It increased by 20%",
                    "It disappeared",
                    "It decreased",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "writing-task",
              prompt:
                "כתבו שני משפטים על שינוי סביבתי, עם שלוש מהמילים מהשיעור.",
              wordBank: ["increase", "reduce", "protect", "destroy", "species"],
              minSentences: 2,
              minWordsUsed: 3,
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
    required: ["content-1a"],
    requiredRounds: 3,
    position: { x: 60, y: 220 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "קראו את הקטע. המילים המודגשות הן מילות תוכן.\n\n{d:ltr}Good **education** helps students **develop** new **skills**, **improve** their confidence and **achieve** their goals.\n\nכמה מהן אתם בטוחים במשמעות שלהן, בלי לחשוב? אם פחות מחמש - השיעור הזה בשבילכם.",
        },
        {
          type: "preface",
          text: "חמש מילים על **התפתחות ולמידה**: איך משתפרים, מה מפתחים ומה משיגים.\n\nהן חוזרות בטקסטים על חינוך ומיומנויות, וגם כדאי לכם להשתמש בהן בכתיבה. כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "improve",
              translationHe: "לשפר",
              exampleEn: "Practice can **improve** your English.",
              exampleHe: "אימון יכול לשפר את האנגלית שלך.",
              hookHe: "improve = לשפר משהו שכבר קיים: להפוך אותו לטוב יותר.",
            },
            {
              type: "mcq",
              prompt:
                "If you practise every day, your handwriting will ______.",
              options: ["improve", "sing", "paint", "cook"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "ייטב = improve.",
            },
            {
              type: "cloze-pick",
              clause: "their grades after the program.",
              options: [
                "Students improved",
                "Students painted",
                "Students cooked",
                "Students sang",
              ],
              correctIndices: [0],
              explanation: "שיפרו את הציונים = improved.",
            },
            { type: "preface", text: "" },
            { type: "spell-word", word: "improve", mode: "copy" },
            {
              type: "word-card",
              word: "develop",
              translationHe: "לפתח",
              exampleEn:
                "The programme helps teenagers **develop** new skills.",
              exampleHe: "התוכנית עוזרת לבני נוער לפתח מיומנויות חדשות.",
              hookHe:
                "develop = לפתח: לבנות משהו בהדרגה. improve = לשפר משהו קיים · develop = לבנות או להצמיח משהו.",
            },
            {
              type: "mcq",
              prompt: "The company will ______ a new phone next year.",
              options: ["improve", "sing", "develop", "paint"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "לבנות משהו חדש = develop.",
            },
            {
              type: "mcq",
              prompt: "איזה משפט מתאר שיפור של משהו קיים (improve)?",
              options: [
                "The town will develop a new park.",
                "The company will develop a new app.",
                "Practice can improve my English.",
                "Scientists develop a new medicine.",
              ],
              correctIndex: 2,
              layout: "rows",
              explanation:
                "improve = משהו שכבר יש והופך טוב יותר. בשאר: בונים משהו חדש.",
            },
            { type: "spell-word", word: "develop", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "improve", he: "לשפר" },
                { en: "develop", he: "לפתח" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "achieve",
              translationHe: "להשיג",
              exampleEn: "She worked hard and finally **achieved** her goal.",
              exampleHe: "היא עבדה קשה ובסוף השיגה את המטרה שלה.",
              hookHe: "achieve = להשיג (מטרה, ציון, הצלחה) אחרי מאמץ.",
            },
            {
              type: "mcq",
              prompt:
                "After years of practice, he ______ his dream and became a doctor.",
              options: ["achieved", "developed", "improved", "painted"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "השיג את החלום = achieved.",
            },
            {
              type: "cloze-pick",
              clause: "their goals if they work hard.",
              options: [
                "Students can paint",
                "Students can cook",
                "Students can achieve",
                "Students can sing",
              ],
              correctIndices: [2],
              explanation: "להשיג מטרות = achieve.",
            },
            { type: "spell-word", word: "achieve", mode: "copy" },
            {
              type: "word-card",
              word: "skill(s)",
              translationHe: "מיומנות / מיומנויות",
              exampleEn: "This programme teaches important **skills**.",
              exampleHe: "התוכנית הזאת מלמדת מיומנויות חשובות.",
              hookHe:
                "skill = יכולת שלומדים ומתאמנים בה: לנגן, לכתוב, לעבוד בצוות.",
            },
            {
              type: "mcq",
              prompt:
                "Playing football together teaches teamwork and other ______.",
              options: ["windows", "skills", "holidays", "shoes"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "עבודת צוות ועוד = skills.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "מיומנויות":',
              sentence: "Volunteers learn useful skills at work.",
              correctWordIndex: 3,
            },
            { type: "spell-word", word: "skills", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "improve", he: "לשפר" },
                { en: "develop", he: "לפתח" },
                { en: "achieve", he: "להשיג" },
                { en: "skills", he: "מיומנות / מיומנויות" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "education",
              translationHe: "חינוך",
              exampleEn: "Good **education** opens many doors.",
              exampleHe: "חינוך טוב פותח הרבה דלתות.",
              hookHe:
                "education = חינוך והשכלה: הלימודים והידע שמקבלים. בא מהפועל educate = לחנך.",
            },
            {
              type: "mcq",
              prompt: "Schools and universities are part of the ______ system.",
              options: ["holiday", "education", "kitchen", "bicycle"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "מערכת החינוך = education.",
            },
            {
              type: "cloze-pick",
              clause: "helps students develop important skills.",
              options: [
                "Good window",
                "Good education",
                "Good bicycle",
                "Good breakfast",
              ],
              correctIndices: [1],
              explanation: "Good education - חינוך טוב.",
            },
            { type: "spell-word", word: "education", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "improve", he: "לשפר" },
                { en: "develop", he: "לפתח" },
                { en: "achieve", he: "להשיג" },
                { en: "skills", he: "מיומנות / מיומנויות" },
                { en: "education", he: "חינוך" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Good education helps students develop new skills, improve their confidence and achieve their goals.",
              questions: [
                {
                  prompt: "What does good education help students do?",
                  options: [
                    "Sleep more",
                    "Stop studying",
                    "Develop new skills",
                    "Buy new phones",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What can students achieve?",
                  options: [
                    "A bigger window",
                    "New shoes",
                    "Their goals",
                    "A longer holiday",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                'The text says education comes from the verb "educate".\n\nמה עושה an educator?',
              options: [
                "מחנך ומלמד",
                "לומד בבית ספר",
                "כותב חדשות",
                "מתקן מכוניות",
              ],
              correctIndex: 0,
              explanation: "educate + -or = מי שמחנך. כך מפרקים מילה חדשה.",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt: "Reading every day can ______ your vocabulary.",
              options: ["skills", "improve", "achieve", "education"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "מרחיב ומשפר = improve.",
            },
            {
              type: "mcq",
              prompt: "He practised for years and finally ______ his goal.",
              options: ["developed", "achieved", "skills", "improved"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "השיג את המטרה = achieved.",
            },
            {
              type: "mcq",
              prompt: "Cooking, writing and drawing are all useful ______.",
              options: ["education", "improve", "achieve", "skills"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מיומנויות שימושיות = skills.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "לפתח":',
              sentence: "Schools develop creative thinking in children.",
              correctWordIndex: 1,
            },
            {
              type: "mark-all",
              instruction: "סמנו את חמש המילים. הצבעים: פעולות ושמות עצם.",
              text: "Good education helps students develop important skills, improve their confidence and achieve their goals.",
              correctIndices: [],
              categories: [
                { name: "מה (שם עצם)", color: "amber", indices: [1, 6] },
                { name: "מה עושים (פועל)", color: "sky", indices: [4, 7, 11] },
              ],
              wordBank: [
                "education",
                "develop",
                "skills",
                "improve",
                "achieve",
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Many students think that grades are the only thing that matters at school.\n\nII  However, education is also about learning how to think. A good teacher helps students develop skills such as teamwork and creativity.\n\nIII  A study of 1,000 students found that those who joined after-school clubs improved their grades and achieved more of their goals.",
              questions: [
                {
                  prompt:
                    "According to paragraph II, what does a good teacher help students develop?",
                  options: [
                    "Skills such as teamwork and creativity",
                    "A love of football",
                    "New rules",
                    "Only good grades",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "What did the study find about students in after-school clubs?",
                  options: [
                    "They did not change",
                    "They improved their grades",
                    "They studied less",
                    "They left school",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "What is education also about?",
                  options: [
                    "Learning how to think",
                    "Only grades",
                    "Sports",
                    "Money",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "writing-task",
              prompt: "כתבו שני משפטים על חינוך, עם שלוש מהמילים מהשיעור.",
              wordBank: [
                "improve",
                "develop",
                "achieve",
                "skills",
                "education",
              ],
              minSentences: 2,
              minWordsUsed: 3,
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
    required: ["content-2a"],
    requiredRounds: 3,
    position: { x: 60, y: 310 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "קראו את הקטע. המילים המודגשות הן מילות תוכן.\n\n{d:ltr}Stress can **cause** health problems and **affect** sleep. Exercise programmes **require** only a little time, but they can **benefit** everyone. It is an **opportunity** worth taking.\n\nכמה מהן אתם בטוחים במשמעות שלהן, בלי לחשוב? אם פחות מחמש - השיעור הזה בשבילכם.",
        },
        {
          type: "preface",
          text: "חמש מילים על **סיבה, השפעה וערך**: מה גורם למה, מה נדרש ומה מרוויחים.\n\nהן חוזרות בטקסטים על בריאות, כלכלה וחברה. שימו לב במיוחד לצמד affect / effect: הוא מבלבל הרבה תלמידים, ואנחנו נפרק אותו ביחד.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "cause",
              translationHe: "לגרום / סיבה",
              exampleEn: "Pollution can **cause** serious health problems.",
              exampleHe: "זיהום יכול לגרום לבעיות בריאות חמורות.",
              hookHe:
                "cause = לגרום ל, וגם שם עצם: the cause = הסיבה. החץ: סיבה ← תוצאה.",
            },
            {
              type: "mcq",
              prompt: "Too much sugar can ______ health problems.",
              options: ["cook", "sing", "cause", "paint"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "גורם לבעיות = cause.",
            },
            {
              type: "cloze-pick",
              clause: "of the fire was an old cable.",
              options: [
                "The window",
                "The breakfast",
                "The shoes",
                "The cause",
              ],
              correctIndices: [3],
              explanation: "הסיבה לשריפה = The cause.",
            },
            { type: "spell-word", word: "cause", mode: "copy" },
            {
              type: "word-card",
              word: "affect / effect",
              translationHe: "להשפיע / השפעה",
              exampleEn:
                "Noise can **affect** sleep. The **effect** is serious.",
              exampleHe: "רעש יכול להשפיע על השינה. ההשפעה חמורה.",
              hookHe:
                'affect = פועל, מה עושים: "noise affects sleep". effect = שם עצם, מה יש: "the effect of noise". a = action · e = end result.',
            },
            {
              type: "mcq",
              prompt: "Noise can ______ how well you sleep.",
              options: ["holiday", "effect", "cause", "affect"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "פועל = affect. effect הוא שם עצם.",
            },
            {
              type: "mcq",
              prompt: "Stress has a bad ______ on health.",
              options: ["affect", "cause", "effect", "skill"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "a bad ___ = שם עצם = effect.",
            },
            { type: "spell-word", word: "affect", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "cause", he: "לגרום / סיבה" },
                { en: "affect / effect", he: "להשפיע / השפעה" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "require",
              translationHe: "לדרוש",
              exampleEn: "The programme **requires** two hours a week.",
              exampleHe: "התוכנית דורשת שעתיים בשבוע.",
              hookHe: "require = לדרוש, להצריך: משהו שחייבים כדי שיצליח.",
            },
            {
              type: "mcq",
              prompt: "To join the club, you ______ a parent signature.",
              options: ["cause", "sing", "require", "affect"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "צריכים חתימה = require.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "דורש":',
              sentence: "This job requires good English.",
              correctWordIndex: 2,
            },
            { type: "spell-word", word: "require", mode: "copy" },
            {
              type: "word-card",
              word: "benefit",
              translationHe: "יתרון / להפיק תועלת",
              exampleEn: "One **benefit** of exercise is better sleep.",
              exampleHe: "יתרון אחד של פעילות גופנית הוא שינה טובה יותר.",
              hookHe:
                "benefit = יתרון, הטוב שמקבלים. גם פועל: to benefit = להרוויח מזה.",
            },
            {
              type: "mcq",
              prompt: "One ______ of reading is a bigger vocabulary.",
              options: ["cause", "effect", "benefit", "holiday"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "יתרון = benefit.",
            },
            {
              type: "cloze-pick",
              clause: "from exercise, not just athletes.",
              options: [
                "Everyone can benefit",
                "Everyone can cook",
                "Everyone can paint",
                "Everyone can sing",
              ],
              correctIndices: [0],
              explanation: "להרוויח = benefit.",
            },
            { type: "spell-word", word: "benefit", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "cause", he: "לגרום / סיבה" },
                { en: "affect / effect", he: "להשפיע / השפעה" },
                { en: "require", he: "לדרוש" },
                { en: "benefit", he: "יתרון / להפיק תועלת" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "opportunity",
              translationHe: "הזדמנות",
              exampleEn:
                "This is a great **opportunity** to learn something new.",
              exampleHe: "זאת הזדמנות מצוינת ללמוד משהו חדש.",
              hookHe:
                'opportunity = הזדמנות: רגע שאפשר לנצל. נשמע כמו "אופורטוניטי".',
            },
            {
              type: "mcq",
              prompt: "I was offered a job abroad. It is a great ______.",
              options: ["benefit", "opportunity", "window", "cause"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: 'הצעה לעבוד בחו"ל = הזדמנות.',
            },
            {
              type: "cloze-pick",
              clause: "to travel is a great chance for young people.",
              options: [
                "The breakfast",
                "The kitchen",
                "The bicycle",
                "The opportunity",
              ],
              correctIndices: [3],
              explanation: "ההזדמנות לטייל = The opportunity.",
            },
            { type: "spell-word", word: "opportunity", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "cause", he: "לגרום / סיבה" },
                { en: "affect / effect", he: "להשפיע / השפעה" },
                { en: "require", he: "לדרוש" },
                { en: "benefit", he: "יתרון / להפיק תועלת" },
                { en: "opportunity", he: "הזדמנות" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Stress can cause health problems and affect sleep. Exercise programmes require only a little time, but they can benefit everyone. It is an opportunity worth taking.",
              questions: [
                {
                  prompt: "What can stress cause?",
                  options: [
                    "More time",
                    "Good sleep",
                    "A holiday",
                    "Health problems",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt: "What do exercise programmes require?",
                  options: [
                    "A lot of money",
                    "A big house",
                    "Many teachers",
                    "Only a little time",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "mcq",
              prompt: "איזה משפט נכון?",
              options: [
                "Stress can effect your sleep. The effect is tiredness.",
                "Stress can affect your sleep. The effect is tiredness.",
                "Stress can affect your sleep. The affect is tiredness.",
                "Stress can effect your sleep. The affect is tiredness.",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation:
                "affect = פועל (Stress can affect). effect = שם עצם (The effect is).",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt: "What ______ the fire? Nobody knows.",
              options: ["benefited", "affected", "required", "caused"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מה גרם לשריפה = caused.",
            },
            {
              type: "mcq",
              prompt: "The new law will ______ every driver in the country.",
              options: ["effect", "affect", "opportunity", "benefit"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "פועל: affect.",
            },
            {
              type: "mcq",
              prompt: "Studying abroad is a great ______ to meet new people.",
              options: ["opportunity", "cause", "effect", "require"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "הזדמנות = opportunity.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "יתרון":',
              sentence: "A big benefit of walking is that it is free.",
              correctWordIndex: 2,
            },
            {
              type: "mark-all",
              instruction:
                "סמנו את חמש המילים. הצבעים: סיבה והשפעה, דרישה וערך.",
              text: "Stress can cause health problems and affect sleep. Programmes that require little time can still benefit everyone, and it is a real opportunity.",
              correctIndices: [],
              categories: [
                { name: "סיבה והשפעה", color: "rose", indices: [2, 6] },
                { name: "דרישה", color: "amber", indices: [10] },
                { name: "ערך", color: "emerald", indices: [15, 22] },
              ],
              wordBank: [
                "cause",
                "affect",
                "require",
                "benefit",
                "opportunity",
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  Many people think that exercise takes too much time.\n\nII  However, a recent study found that programmes that require only 20 minutes a day can still benefit everyone. The main effect is better sleep.\n\nIII  Stress, on the other hand, can cause serious health problems and affect how well people learn. Exercise is an opportunity to protect both body and mind.",
              questions: [
                {
                  prompt: "How much time do the programmes require?",
                  options: [
                    "A whole weekend",
                    "One week",
                    "Two hours a day",
                    "Only 20 minutes a day",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt: "What is the main effect of the programmes?",
                  options: [
                    "More homework",
                    "Less sleep",
                    "Better sleep",
                    "Higher prices",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What can stress cause?",
                  options: [
                    "Serious health problems",
                    "Better grades",
                    "New skills",
                    "More free time",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "writing-task",
              prompt: "כתבו שני משפטים על בריאות, עם שלוש מהמילים מהשיעור.",
              wordBank: [
                "cause",
                "affect",
                "require",
                "benefit",
                "opportunity",
              ],
              minSentences: 2,
              minWordsUsed: 3,
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
    required: ["content-1c"],
    requiredRounds: 3,
    position: { x: 190, y: 220 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "בקטע הבא יש חמש מילים חשובות.אם אתם מכירים אותן, יהיה לכם הרבה יותר קל להבין את הרעיון של הקטע.\nקראו:\n*Schools ****encourage**** students to volunteer, which makes them more ****responsible****. ****Society**** benefits too, and studies show that volunteering also ****supports**** better ****health****.*\nעכשיו בדקו את עצמכם:\nהאם אתם יודעים מיד מה פירוש המילים המודגשות?\nלא צריך לתרגם את כל הקטע.המטרה היא לזהות את המילים שמחזיקות את המשמעות שלו.\nאם חלק מהמילים עדיין לא מוכרות לכם — מצוין.בדיוק בשביל זה אנחנו מתרגלים אותן עכשיו.",
        },
        {
          type: "preface",
          text: "חמש מילים על **אחריות וחברה**: מי אחראי, מי מעודד, מי תומך ומי נהנה.\n\nהן חוזרות בטקסטים על התנדבות, בריאות ותמיכה קהילתית, ואפשר להשתמש בהן גם בכתיבה. כל מילה מגיעה עם תרגילים מיד אחריה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "responsible",
              translationHe: "אחראי",
              exampleEn:
                "A **responsible** student does homework without being asked.",
              exampleHe: "תלמיד אחראי עושה שיעורי בית בלי שמבקשים ממנו.",
              hookHe:
                "responsible = אחראי: מי שאפשר לסמוך עליו. גם: responsible for = אחראי על.",
            },
            {
              type: "mcq",
              prompt: "He always keeps his promises. He is very ______.",
              options: ["polite", "responsible", "lazy", "brave"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation:
                "עומד בהבטחות = אחראי. מנומס, עצלן ואמיץ הן תכונות אחרות, ואף אחת מהן לא מתארת מי שאפשר לסמוך עליו.",
            },
            {
              type: "cloze-pick",
              clause: "for cleaning the classroom this week.",
              options: [
                "Dana is proud",
                "Dana is afraid",
                "Dana is responsible",
                "Dana is angry",
              ],
              correctIndices: [2],
              explanation:
                "אחראית על הניקיון = responsible for. proud ו-afraid באות עם of, ו-angry עם at, לא עם for.",
            },
            { type: "spell-word", word: "responsible", mode: "copy" },
            {
              type: "word-card",
              word: "encourage",
              translationHe: "לעודד",
              exampleEn: "Teachers **encourage** students to try again.",
              exampleHe: "מורים מעודדים תלמידים לנסות שוב.",
              hookHe:
                "encourage = לעודד: לתת אומץ ודחיפה. (courage = אומץ: en + courage.)",
            },
            {
              type: "mcq",
              prompt: "A good teacher ______ students who are afraid to speak.",
              options: ["ignores", "punishes", "interrupts", "encourages"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation:
                "מורה טוב שנותן אומץ לתלמיד ששותק = encourages. מי שמתעלם, מעניש או קוטע לא נותן אומץ.",
            },
            {
              type: "cloze-pick",
              clause:
                "students to volunteer, and they praise every student who helps.",
              options: [
                "Schools forbid",
                "Schools encourage",
                "Schools refuse",
                "Schools warn",
              ],
              correctIndices: [1],
              explanation:
                "בתי ספר שמשבחים כל תלמיד שעוזר = מעודדים (encourage). forbid = אוסרים, ולכן לא היו משבחים.",
            },
            { type: "spell-word", word: "encourage", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "responsible", he: "אחראי" },
                { en: "encourage", he: "לעודד" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "support",
              translationHe: "תמיכה / לתמוך",
              exampleEn: "Friends can **support** you in hard times.",
              exampleHe: "חברים יכולים לתמוך בך בזמנים קשים.",
              hookHe:
                "support = לתמוך ותמיכה: לעמוד לצד מישהו, ברגש, בכסף או בעזרה.",
            },
            {
              type: "mcq",
              prompt:
                "Dan lost his job, but his family stood by him with money and love. They ______ him.",
              options: ["blamed", "ignored", "left", "supported"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation:
                "עמדו לצדו עם כסף ואהבה = supported. blamed, ignored ו-left הן ההפך.",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "תמיכה":',
              sentence: "Parents give their children love and support.",
              correctWordIndex: 6,
            },
            { type: "spell-word", word: "support", mode: "copy" },
            {
              type: "word-card",
              word: "society",
              translationHe: "חברה",
              exampleEn: "Volunteering benefits **society** as a whole.",
              exampleHe: "התנדבות מועילה לחברה כולה.",
              hookHe:
                "society = חברה: כל האנשים שחיים יחד, לא בית ספר או קבוצה קטנה.",
            },
            {
              type: "mcq",
              prompt: "Every member of ______ should follow the law.",
              options: ["social", "society", "societies", "socially"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation:
                "אחרי of בא שם עצם ביחיד: society. social הוא תואר, socially תואר פועל, ו-societies הוא רבים.",
            },
            {
              type: "cloze-pick",
              clause:
                "is made of millions of people, and it needs people who are responsible.",
              options: ["A team", "Society", "A family", "A class"],
              correctIndices: [1],
              explanation:
                "מיליוני אנשים = חברה (society). צוות, משפחה וכיתה קטנים מדי.",
            },
            { type: "spell-word", word: "society", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "responsible", he: "אחראי" },
                { en: "encourage", he: "לעודד" },
                { en: "support", he: "תמיכה / לתמוך" },
                { en: "society", he: "חברה" },
              ],
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "word-card",
              word: "health / healthy",
              translationHe: "בריאות / בריא",
              exampleEn: "Regular exercise improves your **health**.",
              exampleHe: "פעילות גופנית סדירה משפרת את הבריאות שלך.",
              hookHe:
                "health = בריאות. healthy = בריא. אותו שורש: health ← healthy.",
            },
            {
              type: "mcq",
              prompt:
                "Fruit and vegetables keep your body strong and free from illness. They are good for your ______.",
              options: ["society", "health", "support", "school"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "גוף חזק ובלי מחלות = בריאות (health).",
            },
            {
              type: "mcq",
              prompt: "Fruit is ______ food.",
              options: ["health", "healthily", "heal", "healthy"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation:
                "לפני food צריך תואר: healthy. health הוא שם עצם, healthily תואר פועל, ו-heal פועל.",
            },
            { type: "spell-word", word: "health", mode: "copy" },
            {
              type: "match-pairs",
              pairs: [
                { en: "responsible", he: "אחראי" },
                { en: "encourage", he: "לעודד" },
                { en: "support", he: "תמיכה / לתמוך" },
                { en: "society", he: "חברה" },
                { en: "health / healthy", he: "בריאות / בריא" },
              ],
            },
            {
              type: "preface",
              text: "זוכרים את הקטע מההתחלה? אותו קטע, ועכשיו אתם מכירים את כל המילים המודגשות.\n\nקראו אותו שוב וענו.",
            },
            {
              type: "passage-mcq",
              text: "Schools encourage students to volunteer, which makes them more responsible. Society benefits too, and studies show that volunteering also supports better health.",
              questions: [
                {
                  prompt: "What do schools encourage students to do?",
                  options: [
                    "Do more homework",
                    "Be more responsible",
                    "Volunteer",
                    "Study alone",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "What else does volunteering support?",
                  options: [
                    "Better grades",
                    "More free time",
                    "Better health",
                    "Smaller classes",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                'The text may say "irresponsible".\n\nפרקו את המילה: ir- (לא) + responsible. מה זה אומר?',
              options: ["לא אחראי", "אחראי מאוד", "אחראי יותר", "לא בריא"],
              correctIndex: 0,
              explanation: "ir- = לא. כך מפרקים מילה חדשה: לא + אחראי.",
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
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב חזרה: אותן מילים, משפטים חדשים." },
            {
              type: "mcq",
              prompt: "A ______ person does not forget to feed the dog.",
              options: ["responsible", "healthy", "famous", "lazy"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation:
                "לא שוכח להאכיל = אחראי. עצלן היה שוכח, ובריא או מפורסם לא קשור לזה.",
            },
            {
              type: "mcq",
              prompt: "Good teachers ______ students to believe in themselves.",
              options: ["encourage", "forbid", "blame", "warn"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation:
                "מורים טובים נותנים אומץ להאמין בעצמך = encourage. forbid, blame ו-warn לא מתאימות למשפט חיובי.",
            },
            {
              type: "mcq",
              prompt:
                "Sleeping well and eating fruit are good for your ______.",
              options: ["health", "society", "support", "school"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "שינה טובה ופירות = טוב לבריאות (health).",
            },
            {
              type: "mark-word",
              prompt: 'סמנו את המילה שפירושה "חברה":',
              sentence: "Every society has rules.",
              correctWordIndex: 1,
            },
            {
              type: "mark-all",
              instruction: "סמנו את חמש המילים. הצבעים: תכונה, פעולה ושם עצם.",
              text: "Volunteering makes students more responsible. Schools encourage it, and society benefits. It also supports better health.",
              correctIndices: [],
              categories: [
                { name: "תכונה", color: "amber", indices: [4] },
                { name: "פעולה", color: "sky", indices: [6, 13] },
                { name: "שם עצם", color: "emerald", indices: [9, 15] },
              ],
              wordBank: [
                "responsible",
                "encourage",
                "society",
                "supports",
                "health",
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סבב ברמת בחינה: טקסט חדש, בלי עזרה." },
            {
              type: "passage-mcq",
              text: "I  In many countries, schools ask students to do volunteer work.\n\nII  Teachers say this encourages students to be more responsible. According to one teacher, students who volunteer support their classmates more.\n\nIII  A study found that volunteering is also good for health, and that society benefits when young people take part.",
              questions: [
                {
                  prompt: "What does volunteer work encourage in students?",
                  options: [
                    "To study less",
                    "To support their classmates",
                    "To join a sports team",
                    "To be more responsible",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    "According to one teacher, who do volunteers support?",
                  options: [
                    "Their classmates",
                    "Their parents",
                    "Nobody",
                    "Strangers only",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What else is volunteering good for?",
                  options: ["Grades", "Friendships", "Sleep", "Health"],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "writing-task",
              prompt:
                "כתבו שני משפטים על אחריות חברתית, עם שלוש מהמילים מהשיעור.",
              wordBank: [
                "responsible",
                "encourage",
                "support",
                "society",
                "health",
              ],
              minSentences: 2,
              minWordsUsed: 3,
            },
          ],
        },
      ],
    },
  },
  {
    id: "vocab-test",
    section: "c-2",
    titleHe: "מבחן סיכום - אוצר מילים",
    titleEn: "Vocabulary Review Test",
    required: ["q-words-2", "nav-words-2", "content-1b", "content-2b"],
    requiredRounds: 5,
    position: { x: 0, y: 430 },
    big: true,
    content: {
      preface: [
        {
          type: "preface",
          text: "מבחן סיכום, בלי לחץ.\n\nחמישה סבבים קצרים, ובכל סבב משפטים חדשים מכל קבוצות המילים, מעורבבים. הסבבים הולכים ונהיים קשים יותר. מילה שחמקה חוזרת בסוף הסבב, וסבב שלא עברתם אפשר לנסות שוב.",
        },
        {
          type: "preface",
          text: "למה זה שער?\n\nכל השיעורים הבאים בנויים על המילים האלה. עדיף לגלות עכשיו שמילה לא נתפסה, ולא באמצע טקסט בבחינה.",
        },
      ],
      rounds: [
        {
          retryMissed: true,
          screens: [
            { type: "preface", text: "סבב 1: חימום. מילים קלות מכל הקבוצות." },
            {
              type: "mcq",
              prompt: "Read paragraph III only. איפה מחפשים?",
              options: ["בכל הטקסט", "בכותרת", "בפסקה III בלבד", "בפסקה I"],
              correctIndex: 2,
              layout: "rows",
              explanation: "paragraph III = רק שם.",
            },
            {
              type: "mcq",
              prompt: '"Give ONE reason." - כמה סיבות כותבים?',
              options: ["שלוש", "שתיים", "אחת", "כמה שאפשר"],
              correctIndex: 2,
              layout: "rows",
              explanation: "ONE = אחת בלבד.",
            },
            {
              type: "mcq",
              prompt: "Prices ______ every year, so we pay more.",
              options: ["reduce", "destroy", "increase", "protect"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "משלמים יותר = increase.",
            },
            {
              type: "mcq",
              prompt: "Cutting down forests harms the ______.",
              options: ["teacher", "holiday", "homework", "environment"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "הסביבה = environment.",
            },
            {
              type: "mcq",
              prompt: "Fifty ______ helped clean the beach for free.",
              options: ["residents", "charities", "environments", "volunteers"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "בחינם = מתנדבים.",
            },
            {
              type: "mcq",
              prompt: "Sunscreen can ______ your skin from the sun.",
              options: ["improve", "increase", "protect", "destroy"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "מגן = protect.",
            },
            {
              type: "mcq",
              prompt: "Doctors say sugar is bad for your ______.",
              options: ["effect", "society", "health", "opportunity"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "בריאות = health.",
            },
            {
              type: "mcq",
              prompt: "A fire can ______ a whole forest.",
              options: ["destroy", "develop", "improve", "protect"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "הורס = destroy.",
            },
            {
              type: "mcq",
              prompt: "Many birds live here. ______, owls and eagles.",
              options: ["As a result", "However", "Although", "For example"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "דוגמאות = For example.",
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "preface",
              text: "סבב 2: מתרחבים. עוד מילים, ועוד הוראות.",
            },
            {
              type: "mcq",
              prompt: '"Circle the correct answer" - מה עושים?',
              options: [
                "כותבים תשובה חדשה",
                "מוחקים אפשרות",
                "מקיפים את כולן",
                "מקיפים אחת מהאפשרויות",
              ],
              correctIndex: 3,
              layout: "rows",
              explanation: "circle = מקיפים אפשרות אחת.",
            },
            {
              type: "mcq",
              prompt: '"Give TWO answers" - איך נראית תשובה נכונה?',
              options: [
                "תשובה אחת",
                "(1) ... (2) ...",
                "שלוש נקודות",
                "משפט אחד ארוך",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "TWO = שתי נקודות נפרדות וממוספרות.",
            },
            {
              type: "mcq",
              prompt: "We can ______ waste if we recycle.",
              options: ["reduce", "increase", "develop", "achieve"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "פחות פסולת = reduce.",
            },
            {
              type: "mcq",
              prompt: "Free ______ is important for every child.",
              options: ["education", "skills", "species", "society"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "חינוך = education.",
            },
            {
              type: "mcq",
              prompt: "A ______ collected money for the hospital.",
              options: ["community", "volunteers", "charity", "residents"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "אוסף כסף כדי לעזור = charity.",
            },
            {
              type: "mcq",
              prompt: "The whole ______ met to talk about the new school.",
              options: ["environment", "community", "volunteers", "charity"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "כל הקהילה = community.",
            },
            {
              type: "mcq",
              prompt: "Scientists found a new ______ of frog.",
              options: ["increase", "education", "skills", "species"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מין = species.",
            },
            {
              type: "mcq",
              prompt: "______ interviewed 400 teachers.",
              options: ["Charities", "Results", "Skills", "Researchers"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מי שמראיין במחקר = Researchers.",
            },
            {
              type: "mcq",
              prompt: "The number of cars fell from 900 to 700. It ______.",
              options: ["increased", "example", "decreased", "discovered"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "ירד = decreased.",
            },
            {
              type: "mcq",
              prompt: "Doctors ______ that the new medicine helps.",
              options: ["ate", "painted", "sang", "found"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "ממצא = found.",
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "preface",
              text: "סבב 3: באמצע הדרך. הברירות מתקרבות זו לזו.",
            },
            {
              type: "mcq",
              prompt:
                '"Explain why the number of birds increased." - מה נותנים?',
              options: [
                "תרגום",
                "רק מספר",
                "סיבה מהטקסט, בניסוח שלי",
                "שתי תשובות",
              ],
              correctIndex: 2,
              layout: "rows",
              explanation: "explain = סיבה בהבנה שלי.",
            },
            {
              type: "cloze-pick",
              clause: "from paragraph II about the river?",
              options: [
                "Where do we sleep",
                "Who do we call",
                "What do we learn",
                "When do we eat",
              ],
              correctIndices: [2],
              explanation: "What do we learn = מה אנחנו לומדים.",
            },
            {
              type: "mcq",
              prompt: "The team trained hard. ______, they lost the game.",
              options: ["As a result", "In addition", "For example", "However"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "ניגוד = However.",
            },
            {
              type: "mcq",
              prompt: "Most ______ of the building are students.",
              options: ["volunteers", "charities", "residents", "communities"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "מי שגר בבניין = residents.",
            },
            {
              type: "mcq",
              prompt: "The ______ of the test will arrive on Monday.",
              options: ["results", "benefits", "skills", "researchers"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "תוצאות המבחן = results.",
            },
            {
              type: "mcq",
              prompt: "Explorers ______ a new island in 1600.",
              options: ["discovered", "required", "achieved", "protected"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "גילו = discovered.",
            },
            {
              type: "mcq",
              prompt: "Daily reading will ______ your English.",
              options: ["reduce", "destroy", "improve", "species"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "משפר = improve.",
            },
            {
              type: "mcq",
              prompt: "The school will ______ a new science programme.",
              options: ["protect", "skills", "improve", "develop"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "לפתח משהו חדש = develop.",
            },
            {
              type: "mcq",
              prompt: "Teamwork and communication are important ______.",
              options: ["education", "results", "species", "skills"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "מיומנויות = skills.",
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "preface",
              text: "סבב 4: מתקשים. משפטים ארוכים יותר ומילים דומות.",
            },
            {
              type: "mcq",
              prompt: "The road was closed ______ there was a flood.",
              options: ["although", "in order to", "because", "however"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "הסיבה לסגירה = because.",
            },
            {
              type: "mcq",
              prompt: "They built a wall ______ protect the town.",
              options: ["in order to", "however", "example", "because"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "מטרה = in order to.",
            },
            {
              type: "mcq",
              prompt: "You can ______ your goals if you work hard.",
              options: ["affect", "destroy", "achieve", "reduce"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "להשיג מטרות = achieve.",
            },
            {
              type: "mcq",
              prompt: "People in a ______ share the same laws.",
              options: ["health", "society", "education", "benefit"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "חברה = society.",
            },
            {
              type: "mcq",
              prompt: "Good coaches ______ players who feel afraid.",
              options: ["affect", "require", "encourage", "cause"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "מעודדים = encourage.",
            },
            {
              type: "mcq",
              prompt: "Neighbours can ______ each other after a storm.",
              options: ["require", "cause", "support", "destroy"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "לתמוך = support.",
            },
            {
              type: "mcq",
              prompt: "What ______ the accident? The police are asking.",
              options: ["encouraged", "required", "caused", "supported"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "מה גרם = caused.",
            },
            {
              type: "mcq",
              prompt: "The captain is ______ for everyone on the ship.",
              options: ["supported", "required", "responsible", "healthy"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "אחראי על = responsible.",
            },
            {
              type: "mcq",
              prompt: "There was a storm. ______, the flight was cancelled.",
              options: ["As a result", "In addition", "However", "For example"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "תוצאה = As a result.",
            },
            {
              type: "mcq",
              prompt: "The app is free. ______, it works offline.",
              options: ["However", "In addition", "As a result", "Although"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "עוד יתרון = In addition.",
            },
          ],
        },
        {
          retryMissed: true,
          screens: [
            {
              type: "preface",
              text: "סבב 5: הסבב האחרון, והקשה ביותר. ובסוף, משפט משלכם.",
            },
            {
              type: "mcq",
              prompt:
                '"According to Dr. Lee, why did the trees die?" - את מי מצטטים?',
              options: ["את הכותב", "אף אחד", "את Dr. Lee", "את כל החוקרים"],
              correctIndex: 2,
              layout: "rows",
              explanation: "according to = רק מה שהדובר אמר.",
            },
            {
              type: "mcq",
              prompt:
                '"Complete the sentence: The river was dirty because…" - מה כותבים?',
              options: [
                "כותבים משפט חדש",
                "ממשיכים ישר: the factory threw waste into it",
                "מתרגמים",
                "מקיפים תשובה",
              ],
              correctIndex: 1,
              layout: "rows",
              explanation: "complete = ממשיכים את המשפט.",
            },
            {
              type: "mcq",
              prompt: "______ it was expensive, many people bought it.",
              options: ["As a result", "Although", "However", "In addition"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "Although פותחת חלק מנוגד בתוך משפט.",
            },
            {
              type: "mcq",
              prompt: "A late night can ______ your grades.",
              options: ["effect", "protect", "reduce", "affect"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "פועל = affect.",
            },
            {
              type: "mcq",
              prompt: "This is the most ______ way to learn words.",
              options: ["effect", "affect", "education", "effective"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "יעיל = effective.",
            },
            {
              type: "mcq",
              prompt: "The medicine had a strong ______ on her.",
              options: ["affect", "cause", "effect", "benefit"],
              correctIndex: 2,
              layout: "honeycomb",
              explanation: "שם עצם = effect.",
            },
            {
              type: "mcq",
              prompt: "This course ______ two hours of study each day.",
              options: ["causes", "supports", "encourages", "requires"],
              correctIndex: 3,
              layout: "honeycomb",
              explanation: "דורש = requires.",
            },
            {
              type: "mcq",
              prompt: "One ______ of the bicycle is that it costs nothing.",
              options: ["society", "benefit", "effect", "opportunity"],
              correctIndex: 1,
              layout: "honeycomb",
              explanation: "יתרון = benefit.",
            },
            {
              type: "mcq",
              prompt: "She got an ______ to study abroad.",
              options: ["opportunity", "effect", "cause", "benefit"],
              correctIndex: 0,
              layout: "honeycomb",
              explanation: "הזדמנות = opportunity.",
            },
            {
              type: "writing-task",
              prompt:
                "כתבו משפט אחד באנגלית שמשתמש בלפחות שתי מילים מהמסלולים שלמדתם.",
              wordBank: [
                "however",
                "as a result",
                "increase",
                "protect",
                "research",
                "skills",
                "society",
                "health",
              ],
              minSentences: 1,
              minWordsUsed: 2,
            },
          ],
        },
      ],
    },
  },
  {
    id: "n-5cd02dfa",
    section: "c-2",
    titleHe: "module c - פתיחה",
    required: [],
    position: { x: 0, y: 20 },
    big: true,
    content: {
      preface: [
        {
          type: "preface",
          text: "שאלה אחת לפני שמתחילים:\n**מה יכול להפיל תשובה נכונה, גם כשכבר הבנתם על מה הטקסט מדבר?**\n\nלפעמים זאת פשוט **מילה אחת שלא הכרתם או כזאת שחשבתם שאתם מבינים.**\n\nב־Module C, אוצר מילים הוא לא תוספת — הוא חלק מהדרך להבין את הטקסט ולמצוא את התשובה.\n\nאז לפני שנלמד שיטות ונפתור תרגילים, נתחיל מהבסיס:\n**לומדים את המילים שצריך להכיר.**\n\nאל תדאגו — לא צריך ללמוד הכול ביום אחד.קצת בכל יום, והמילים מתחילות להישמר בזיכרון שלכם.",
        },
        {
          type: "preface",
          text: "**אבל רגע, למה צריך את זה בכלל? הרי יש מילון בבחינה **\n\n**נכון מאוד אבל יש גם שעון שמתקתק!!!**\n\nהמילון יכול לעזור כשנתקלים במילה אחת שלא מכירים. אבל אם כמעט בכל שורה צריך לעצור ולחפש מילה,** מאבדים זמן** — וגם** את הרצף** של הטקסט.\n\nויש עוד **בעיה**: למילה אחת במילון יכולות להיות כמה **משמעויות**. \nאז מי שכבר מכיר את המילה, אפילו חלקית, יזהה הרבה יותר מהר איזו משמעות מתאימה לטקסט.\nלכן לא צריך ללמוד את כל האנגלית מחדש.\nצריך לבנות **מינימום חכם בזיכרון שלנו**:רשימה קצרה של מילים שחוזרות שוב ושוב ב־Module C, ושכדאי לזהות מיד — בלי לפתוח מילון.\n\n**אז בקיצור: פחות חיפושים. יותר זמן להבין ולענות ולהרוויח נקודות! **",
        },
        {
          type: "preface",
          text: "ב־Module C יש **שלוש קבוצות של מילים** שכדאי להכיר:\n\n**1. מילות תוכן: **מילים שעוזרות להבין על מה הטקסט מדבר ומה המידע החשוב בו.\n\n**2. מילות ניווט: **מילים שעוזרות לעקוב אחרי הכיוון של הטקסט: סיבה, תוצאה, ניגוד, דוגמה, הוספה ועוד.\n\n**3. מילות שאלה: **מילים שחוזרות בהוראות ובשאלות, ואומרות לכם בדיוק מה צריך למצוא ומה צריך לכתוב.\n",
        },
      ],
      rounds: [{ screens: [] }],
    },
  },
];
