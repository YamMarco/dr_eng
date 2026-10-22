// COBE - the project questions. The 3-step model (Personal Hook, Honest Pivot,
// "So What?") and the three simulations.
// Source: docs/material/cobe (COBE lesson plan, slides, worksheets).
import type { LessonNode } from "../types";

export const cobe1Lessons: LessonNode[] = [
  {
    id: "cobe-mindset",
    section: "cobe-1",
    required: [],
    position: { x: 0, y: 130 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: '{a:center}## "What if I forget everything during the COBE?"\n\n{d:rtl}זו השאלה שרצה לכולם בראש כשמדברים על ה-COBE.\n\n{p:callout}{i:check}{d:rtl}**החדשות הטובות:** ה-COBE הוא לא מבחן בזיכרון - הוא מבחן בביטחון עצמי.\n{p:callout}{i:check}{d:rtl} האנגלית שלכם כבר שם. כאן לומדים איך לשלוף אותה, גם אם שכחתם את התשובות המדויקות. ',
        },
        {
          type: "preface",
          text: "{d:rtl}### איך נראות שאלות הפרויקט?\n\n{d:rtl}המבחן מתבצע מול מחשב. מופיע סט שאלות על הפרויקט שלכם, ועונים על כולו **בהקלטה אחת** של **דקה עד שתיים**.\n\n{d:rtl}מי שיקשיב להקלטה לא מחפש טקסט ששיננתם. הוא רוצה לשמוע תשובה **טבעית, כנה ובטוחה**.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**Step 1: The Personal Hook** - הזיכרון הרגשי: למה בחרתי בנושא ומה הפתיע אותי במהלך המחקר.",
            "**Step 2: The Honest Pivot** - משפט החילוץ כששוכחים פרט מדויק או נתון סטטיסטי.",
            '**Step 3: The "So What?" Factor** - למה הפרויקט חשוב ואיך הוא מתחבר לחיים האמיתיים היום.',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "{d:rtl}סיבוב 1 | אז מה זה בתכלס COBE?" },
            {
              type: "mcq",
              prompt: "מה ה-COBE בודק באמת בשאלות הפרויקט?",
              options: [
                "כמה נתונים ומספרים מהפרויקט זכרתם בעל פה",
                "שאתם מדברים באנגלית בביטחון ובטבעיות על מה שלמדתם",
                "שאתם קוראים בקול טקסט מוכן בלי אף טעות",
                "כמה מקורות הופיעו ברשימה של הפרויקט",
              ],
              correctIndex: 1,
              explanation:
                "זה מבחן בביטחון, לא בזיכרון. מספרים ומקורות הם פרטים. מה שנשמע בהקלטה זה איך אתם מדברים על מה שלמדתם.",
            },
            {
              type: "mcq",
              prompt: "באמצע ההקלטה שכחתם את המספר המדויק מהפרויקט. מה עושים?",
              options: [
                "שותקים עד שנזכרים",
                "אומרים בכנות שלא זוכרים את המספר, וממשיכים לעיקר",
                "ממציאים מספר כדי שלא יהיה שקט",
                "עוברים לעברית עד שנזכרים",
              ],
              correctIndex: 1,
              explanation:
                'זה Step 2: The Honest Pivot. שקט ארוך נשמע כמו "אני לא יודע", ומספר מומצא הוא פשוט טעות. משפט חילוץ מחזיר אתכם למה שאתם כן יודעים.',
            },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Why does this topic even matter to teenagers today?"**\n\nאיזה שלב עונה על השאלה הזאת?',
              options: [
                "Step 1: The Personal Hook",
                "Step 2: The Honest Pivot",
                'Step 3: The "So What?" Factor',
              ],
              correctIndex: 2,
              explanation:
                'השאלה שואלת למה הנושא חשוב היום - זה ה-"So What?". ה-Hook עונה על "למה בחרת", וה-Pivot נכנס כששוכחים פרט.',
            },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Tell me about your project in under a minute."**\n\nבמה כדאי לפתוח?',
              options: [
                "Step 1: The Personal Hook",
                "Step 2: The Honest Pivot",
                'Step 3: The "So What?" Factor',
              ],
              correctIndex: 0,
              explanation:
                'פותחים ברגע האישי שגרם לכם לבחור בנושא. ה-"So What?" מגיע בסוף, וה-Pivot רק אם נתקעים.',
            },
            {
              type: "mcq",
              prompt: "כמה זמן מדברים על סט השאלות של הפרויקט?",
              options: [
                "כ-10 שניות, תשובה קצרה",
                "דקה עד שתיים, בהקלטה אחת",
                "חמש דקות, עם הפסקות באמצע",
                "כמה שרוצים, אין הגבלה",
              ],
              correctIndex: 1,
              explanation:
                "דקה עד שתיים, בהקלטה אחת רציפה. לכן מתאמנים לדבר ברצף, ולא לעצור כששוכחים משהו.",
            },
            {
              type: "summary",
              title: "לוקחים איתכם",
              lines: [
                "{p:ul}{d:rtl}ה-COBE בודק ביטחון, לא זיכרון.",
                "{p:ul}{d:rtl}הקלטה אחת של דקה עד שתיים, בלי לשנן טקסט.",
                "{p:ul}{d:rtl}Hook ← Pivot (רק אם נתקעים) ← So What.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "cobe-hook",
    section: "cobe-1",
    required: ["cobe-mindset"],
    position: { x: 70, y: 250 },
    big: false,
    requiredRounds: 2,
    content: {
      preface: [
        {
          type: "preface",
          text: "{a:center}### Step 1: The Personal Hook\n\n{d:rtl}השאלה הראשונה כמעט תמיד היא על הנושא ולמה בחרתם בו.\n\n{d:rtl}תשובה חלשה מתחילה ב-*The topic of my project is...* ונגמרת שם. תשובה חזקה מתחילה ב**זיכרון אישי**: רגע, אדם או שאלה שגרמו לכם לבחור בנושא.\n\n{p:text}**My grandmother came to Israel from Ethiopia when she was twelve. When I heard her story, I wanted to know more. That's why my project is about immigration to Israel.**\n\n{d:rtl}זה נשמע אמיתי, כי זה אמיתי. ואת מה שקרה לכם אי אפשר לשכוח מול המחשב.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**הרגע** - מה קרה, מי, איפה: *When I was..., I saw / heard / read...*",
            "**השאלה** - מה רציתם לגלות: *I wanted to find out...*",
            "**הנושא** - *That's why my project is about...*",
            "**ההפתעה** - *What surprised me most was...*",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים פתיחה חזקה" },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Why did you choose this topic for your project?"**\n\nאיזו תשובה פותחת ב-Personal Hook?',
              options: [
                "I chose this topic because it is interesting.",
                "My teacher gave us a list, and I chose this topic.",
                "Last summer my little brother got sick from the heat. I wanted to understand why heat waves are so dangerous, so I chose climate change.",
                "The topic of my project is climate change. Climate change is a big problem in the world.",
              ],
              correctIndex: 2,
              explanation:
                'רק התשובה על האח הקטן מתחילה ברגע אמיתי ומובילה ממנו לשאלה ולנושא. "it is interesting" לא אומר כלום אישי, "my teacher gave us a list" אומר שלא באמת בחרתם, ו-"a big problem in the world" זו עובדה כללית שכל אחד יכול להגיד.',
            },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Tell me about your project in under a minute."**\n\nאיזו פתיחה עושה Hook?',
              options: [
                "My project is about dogs. Dogs are animals, and there are many kinds of dogs.",
                "When we adopted our dog Luna from a shelter, she was afraid of everyone. I wanted to understand why, so my project is about how shelter dogs learn to trust people.",
                "I did my project about dogs because we had to choose a topic.",
                "Dogs are the most popular pets in Israel, and they need food, water and exercise.",
              ],
              correctIndex: 1,
              explanation:
                'Luna היא רגע אישי, ממנו יוצאת שאלה ("why") ואז הנושא. "the most popular pets in Israel" נשמע מרשים, אבל זו עובדה בלי שום דבר שלכם. "we had to choose" ו-"many kinds of dogs" לא מסבירים כלום.',
            },
            {
              type: "cloze-pick",
              clause:
                "I wanted to find out why so many teenagers sleep so little.",
              options: [
                "When I was in tenth grade, I could not fall asleep before 2 a.m., so",
                "Sleep is an important topic for everyone, so",
                "Scientists have written many articles about sleep, so",
                "The topic of my project is sleep, so",
              ],
              correctIndices: [0],
              explanation:
                'רק "When I was in tenth grade..." הוא רגע שקרה לכם. שאר הפתיחות נכונות דקדוקית, אבל כל תלמיד בארץ יכול להגיד אותן.',
            },
            {
              type: "mcq",
              prompt: "איזה משפט מוסיף את **ההפתעה**?",
              options: [
                "What surprised me most was that teenagers need more sleep than adults, not less.",
                "My project has three parts and a reflection.",
                "I worked on the project for about a month.",
                "Sleep is when you close your eyes at night.",
              ],
              correctIndex: 0,
              explanation:
                '"What surprised me most was..." מראה שלמדתם משהו חדש. מבנה הפרויקט וכמה זמן עבדתם הם פרטים יבשים, ו-"close your eyes" לא אומר שום דבר שלמדתם.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 2 | ה-Hook שלכם\n\nעכשיו על **הפרויקט שלכם**. כתבו 3-4 משפטים לפי הנוסחה: הרגע ← השאלה ← הנושא ← ההפתעה.\n\nאין פה ציון. זו הטיוטה שתגידו בקול בסימולציה.",
            },
            {
              type: "self-check",
              prompt:
                "{p:text}**Why did you choose this topic for your project?**\n\nפתחו ברגע אישי, ואחריו השאלה, הנושא וההפתעה.",
              modelAnswer:
                "When I was in tenth grade, I could not fall asleep before 2 a.m., and I was always tired in class. I wanted to find out why so many teenagers sleep so little, so my project is about sleep. What surprised me most was that teenagers need more sleep than adults, not less.",
              minWords: 30,
              maxWords: 70,
            },
          ],
        },
      ],
    },
  },
  {
    id: "cobe-pivot",
    section: "cobe-1",
    required: ["cobe-hook"],
    position: { x: 100, y: 370 },
    big: false,
    requiredRounds: 2,
    content: {
      preface: [
        {
          type: "preface",
          text: '{a:center}### Step 2: The Honest Pivot\n\n{d:rtl}נשאלתם שאלה ספציפית ושכחתם את המספר או המקור?\n{d:rtl} **אל תשתתקו!**\n\n{d:rtl}שקט ארוך בהקלטה נשמע כמו "אני לא יודע". משפט חילוץ נשמע כמו מישהו שמבין את הנושא - כי אתם באמת מבינים.\n\n{p:text}**To be completely honest, I don\'t recall the exact number, but the main point was...**\n\n{d:rtl}משתמשים בו כדי להפגין בגרות, כנות ושטף, בלי להילחץ.',
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**מודים** - *To be completely honest, I don't recall the exact number / details*",
            "**מסובבים** - *but*",
            "**חוזרים לעיקר** - *the main point was... / what I learned was... / what surprised me most was...*",
          ],
        },
        {
          type: "preface",
          text: "שני משפטי חילוץ לשנן:\n\n{p:text}To be completely honest, I don't recall the exact details, but the main point was...\n\n{p:text}I don't remember the exact statistic, but what surprised me most was...",
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | בונים את משפט החילוץ" },
            {
              type: "cloze-pick",
              clause:
                "I don't recall the exact number, but the main point was that most plastic in the sea comes from land.",
              options: [
                "To be completely honest,",
                "Never mind,",
                "Sorry, next question,",
                "It doesn't matter,",
              ],
              correctIndices: [0],
              explanation:
                '"To be completely honest" מודה בכנות ונשמע בוגר. "Never mind", "It doesn\'t matter" ו-"next question" נשמעים כמו בריחה מהשאלה.',
            },
            {
              type: "cloze-pick",
              clause:
                "what I learned was that bees are disappearing all over the world.",
              options: [
                "I don't remember the exact statistic, but",
                "I remember the exact statistic, but",
                "I don't remember the exact statistic, so",
                "I don't remember the exact statistic, and",
              ],
              correctIndices: [0],
              explanation:
                '"but" הוא הסיבוב: לא זוכר את המספר, **אבל** הנה העיקר. "so" ו-"and" לא מסובבים, ו-"I remember" הופך את המשפט לסתירה.',
            },
            {
              type: "mcq",
              prompt:
                '{p:text}**"What were the exact statistics or sources you used in section 2?"**\n\nשכחתם. איזו תשובה הכי טובה?',
              options: [
                "Um... I don't know. Sorry.",
                "To be completely honest, I don't recall the exact numbers, but what I learned was that teenagers who sleep less than seven hours find it harder to focus in class.",
                "I used many statistics and sources. They were very good statistics.",
                "About 87.3 percent.",
              ],
              correctIndex: 1,
              explanation:
                'רק התשובה עם "To be completely honest... but what I learned was" מודה וחוזרת לעיקר. "I don\'t know. Sorry" עוצר את ההקלטה, "very good statistics" לא אומר כלום, ו-87.3 הוא מספר מומצא - אף פעם לא ממציאים.',
            },
            {
              type: "sentence-completion",
              before: "To be completely honest, I don't recall the exact",
              after: ", but the main point was that...",
              modelAnswers: [
                "number",
                "numbers",
                "details",
                "detail",
                "statistic",
                "statistics",
                "name",
                "date",
              ],
            },
            {
              type: "mcq",
              prompt: "מה חייב לבוא אחרי משפט החילוץ?",
              options: [
                "עוד התנצלות, כדי שיבינו שאתם מצטערים",
                "משהו שאתם כן יודעים: העיקר, מה למדתם או מה הפתיע אתכם",
                "כמה שניות של שקט כדי להירגע",
                "השאלה הבאה בסט",
              ],
              correctIndex: 1,
              explanation:
                "החילוץ עובד רק אם אחרי ה-but בא תוכן אמיתי מהפרויקט. התנצלות נוספת או שקט מחזירים אתכם לנקודת ההתחלה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}סיבוב 2 | החילוץ שלכם\n\n{d:rtl}בחרו נתון או מקור **מהפרויקט שלכם** שקשה לזכור. עכשיו כתבו מה תגידו אם תשכחו אותו.",
            },
            {
              type: "self-check",
              prompt:
                "{p:text}**What were the exact statistics or sources you used in section 2?**\n\nפתחו במשפט חילוץ, ואחרי ה-but כתבו את העיקר: מה למדתם מהמקור הזה.",
              modelAnswer:
                "To be completely honest, I don't recall the exact number, but what I learned was that most plastic in the sea comes from land, not from ships. That surprised me, because I always thought ships were the problem.",
              minWords: 20,
              maxWords: 60,
            },
          ],
        },
      ],
    },
  },
  {
    id: "cobe-so-what",
    section: "cobe-1",
    required: ["cobe-pivot"],
    position: { x: 70, y: 490 },
    big: false,
    requiredRounds: 2,
    content: {
      preface: [
        {
          type: "preface",
          text: '{a:center}### Step 3: The "So What?" Factor\n\n{p:text}**Why does this topic even matter to teenagers today?**\n\n{d:rtl}המשימה: לחבר את הפרויקט למציאות היומיומית, לחיים בישראל או לעתיד. להראות שהנושא הוא לא רק תיאורטי, אלא בעל משמעות אנושית וחברתית.',
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**אני** - איך זה נוגע לי ולחברים שלי: *For teenagers like me...*",
            "**כאן** - איך זה נראה בישראל: *In Israel...*",
            "**מחר** - מה זה ישנה בעתיד: *In the future...*",
          ],
        },
        {
          type: "preface",
          text: "פותחים ב-*This topic matters because...*, ומספיק חיבור אחד או שניים שאתם באמת מאמינים בהם.",
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים חיבור לחיים" },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Why does this topic even matter to teenagers today?"**\n\nהפרויקט על שינה. איזו תשובה עונה על ה-"So What?"',
              options: [
                "It matters because sleep is important.",
                "It matters because teenagers like me go to bed late because of our phones, and then we can't focus in class. If we understand sleep, we can do better at school.",
                "My project has a lot of information about sleep.",
                "Scientists study sleep in special laboratories.",
              ],
              correctIndex: 1,
              explanation:
                '"teenagers like me... can\'t focus in class" מחבר את הנושא לחיים שלכם עכשיו. "sleep is important" נכון אבל ריק, "a lot of information" מדבר על הפרויקט ולא על החשיבות, והמעבדות לא קשורות לבני נוער.',
            },
            {
              type: "mark-all",
              instruction:
                "סמנו את 3 המילים שמחברות את התשובה: לי, לישראל ולעתיד.",
              text: "Teenagers like me use phones until midnight. In Israel, almost every student has a smartphone. In the future, sleep problems may hurt our health.",
              correctIndices: [],
              categories: [
                { name: "אני", color: "sky", indices: [2] },
                { name: "כאן", color: "amber", indices: [8] },
                { name: "מחר", color: "violet", indices: [17] },
              ],
            },
            {
              type: "cloze-pick",
              clause:
                "teenagers can learn to protect themselves on the internet.",
              options: [
                "This topic matters because",
                "My teacher told us that",
                "Some websites say that",
                "I read in an article that",
              ],
              correctIndices: [0],
              explanation:
                '"This topic matters because" עונה על "למה זה חשוב". שאר הפתיחות רק מוסרות מידע ממקור אחר, בלי לומר למה הוא חשוב.',
            },
            {
              type: "mcq",
              prompt: "הפרויקט על מים. איזה חיבור הכי חזק?",
              options: [
                "Water is very important for the whole world.",
                "Water is made of hydrogen and oxygen.",
                "In Israel we have had years of drought, and my family now saves water at home. Young people will decide how we use water in the future.",
                "I liked doing the project about water.",
              ],
              correctIndex: 2,
              explanation:
                'התשובה על הבצורת מחברת את שלושת הכיוונים: כאן (Israel), אני (my family) ומחר (in the future). "important for the whole world" כללי מדי, הנוסחה הכימית היא עובדה בלי משמעות, ו-"I liked" לא אומר למה זה חשוב.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: 'סיבוב 2 | ה-"So What?" שלכם\n\nכתבו 2-3 משפטים על **הפרויקט שלכם**. חברו אותו לפחות לאחד: אני, כאן, מחר.',
            },
            {
              type: "self-check",
              prompt:
                "{p:text}**Why does this topic even matter to teenagers today?**\n\nפתחו ב-This topic matters because.",
              modelAnswer:
                "This topic matters because teenagers like me go to bed late because of our phones, and then we can't focus in class. In Israel, almost every student has a smartphone, so this is everyone's problem. If we understand sleep, we can do better at school and feel better.",
              minWords: 25,
              maxWords: 70,
            },
          ],
        },
      ],
    },
  },
  {
    id: "cobe-simulation",
    section: "cobe-1",
    required: ["cobe-so-what"],
    position: { x: 0, y: 610 },
    big: true,
    requiredRounds: 2,
    content: {
      preface: [
        {
          type: "preface",
          text: "### סימולציה: שאלה, הקלטה, האזנה\n\nבמבחן אין מולכם מראיין, יש מחשב. כאן מתאמנים בדיוק על זה: מופיעה שאלה, עונים **בהקלטה אחת בלי עצירות**, ושומעים את עצמכם.\n\nההקלטה נשארת רק במכשיר שלכם. אחרי כל הקלטה מסמנים בדיקה עצמית לפי שלושת הקריטריונים של המשוב.\n\n{p:callout}{i:fire}הלב דופק לפני ההקלטה? זה הגוף מתכונן לעבודה. הלחץ הזה עוזר לכם לדבר בחדות - תנו לו לעבוד בשבילכם.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "speak",
              part: "B",
              prompt: "Tell me about your project in under a minute.",
              tip: "**Simulation 1: The Elevator Pitch**\n\nהציגו את הנושא רק דרך ה-Personal Hook. דגש על תשוקה ואנרגיה, בלי להיכנס לפרטים יבשים.",
              targetSeconds: 45,
              modelAnswer:
                "When I was in tenth grade, I could not fall asleep before 2 a.m., and I was always tired in class. I wanted to find out why so many teenagers sleep so little, so my project is about sleep. What surprised me most was that teenagers need more sleep than adults, not less.",
              checklist: [
                "פתחתי ברגע אישי, לא ב-The topic of my project is",
                "אמרתי מה רציתי לגלות ומה הפתיע אותי",
                "דיברתי בקול ברור ובאנרגיה, בלי לקרוא מדף",
              ],
            },
            {
              type: "speak",
              part: "B",
              prompt:
                "What were the exact statistics or sources you used in section 2?",
              tip: "**Simulation 2: The Honest Pivot**\n\nשאלת מכשול. גם אם אתם זוכרים, התאמנו: פתחו במשפט החילוץ וחזרו לעיקר.\n\n{p:text}To be completely honest, I don't recall the exact number/details, but what I learned was...",
              targetSeconds: 30,
              modelAnswer:
                "To be completely honest, I don't recall the exact number, but what I learned was that teenagers who sleep less than seven hours find it harder to focus in class. I found this in a few articles about teenagers and sleep.",
              checklist: [
                "השתמשתי במשפט החילוץ ולא שתקתי",
                "אחרי ה-but אמרתי משהו אמיתי מהפרויקט",
                "לא המצאתי מספר",
              ],
            },
            {
              type: "speak",
              part: "B",
              prompt: "Why does this topic even matter to teenagers today?",
              tip: '**Simulation 3: The "So What?" Challenge**\n\nחברו את הפרויקט למציאות היומיומית, לחיים בישראל או לעתיד.',
              targetSeconds: 45,
              modelAnswer:
                "This topic matters because teenagers like me go to bed late because of our phones, and then we can't focus in class. In Israel, almost every student has a smartphone, so this is everyone's problem. If we understand sleep, we can do better at school and feel better.",
              checklist: [
                "פתחתי ב-This topic matters because",
                "חיברתי את הנושא לפחות לאחד: אני, כאן, מחר",
                "דיברתי ברצף עד היעד",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 2 | כמו במבחן\n\nבמבחן שאלות הפרויקט מגיעות **כסט**, ועונים על כולן **בהקלטה אחת** של דקה עד שתיים. עכשיו מחברים את שלושת השלבים לתשובה אחת.",
            },
            {
              type: "speak",
              part: "B",
              prompt:
                "Tell me about your project. Why did you choose this topic? What did you learn? Why does it matter today?",
              tip: "Hook ← מה למדתם (ואם שכחתם פרט: Honest Pivot) ← So What. ענו על **כל** השאלות בסט.",
              targetSeconds: 60,
              modelAnswer:
                "When I was in tenth grade, I could not fall asleep before 2 a.m., and I was always tired in class. I wanted to find out why so many teenagers sleep so little, so my project is about sleep. To be completely honest, I don't recall the exact numbers, but what I learned was that teenagers need more sleep than adults, not less, and that phones keep us awake. This topic matters because almost every student in Israel has a smartphone. If we understand sleep, we can do better at school and feel better.",
              checklist: [
                "**Energy & Voice** - דיברתי ברור, בביטחון ובאנרגיה, בלי לקרוא",
                "**Rescue Phrases** - כשנתקעתי, השתמשתי ב-Honest Pivot ולא שתקתי",
                '**The "So What?" Factor** - חיברתי את הנושא לחיים האמיתיים היום',
                "עניתי על כל השאלות בסט, בהקלטה אחת",
              ],
            },
            {
              type: "summary",
              title: "המסר לקחת הביתה",
              lines: [
                "התשובות הטובות ביותר ב-COBE הן לא אלו ששיננתם בעל פה.",
                "אלא אלו שנשמעות טבעיות, כנות ומלאות ביטחון.",
                "מי שמקשיב רוצה לשמוע את הדעה שלכם. תאמינו במה שיש לכם לומר - ותעבירו את זה בענק!",
              ],
            },
          ],
        },
      ],
    },
  },
];
