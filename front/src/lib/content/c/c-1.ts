// Part A - Reading Skills. One node per programme lesson (lesson00…lesson12).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from "../types";

export const c1Lessons: LessonNode[] = [
  {
    id: "l00",
    section: "c-1",
    titleHe: "אני מחפש, לא קורא",
    titleEn: "Mindset",
    required: [],
    position: { x: 0, y: 550 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'אם כבר עברתם על אוצר המילים בחלק א׳ - כל הכבוד, זה לא משהו קטן. ואם עוד לא, אפשר לחזור אליו בכל שלב: המילים שם יעזרו לכם בכל טקסט.\n\nועכשיו במעבר חד, הנה לכם סיפור שמתרחש לפחות שלוש פעמים בכל מחצית:\n\nבקבוצת הוואטסאפ של האנגלית יש כבר מאות הודעות, ואז תמיד מגיע החבר ששואל: **"נו, מתי הבחינה? ומה החומר?"**\nמה אתם עושים? גוללים 500 הודעות מההתחלה?\n\nברור שלא.\n\nלוחצים על 🔍, מחפשים מילה אחת כמו **exam**, **test** או **Module C** - ותוך שנייה מגיעים להודעה הנכונה.\nלא קראתם את כל הקבוצה.\nחיפשתם **מידע מסוים**.\n\n',
        },
        {
          type: "preface",
          text: "אז חבר׳ה, זה בדיוק מה שעושים במבחן הבגרות באנגלית.\nבקורס הזה נלמד **הרגלים חדשים ושיטות יעילות** שיעזרו לכם למצוא את התשובה הנכונה ב־Module C - בלי לבזבז זמן.\n\nאני רוצה שתתחילו להסתכל על המבחן בצורה הזאת:\n\n**הטקסט** = קבוצת הוואטסאפ\n**השאלה** = מה שאנחנו רוצים למצוא\n**מילת המפתח** = מה שאנחנו מקלידים ב־🔍\n\nהמטרה שלנו היא לא לקרוא הכול מההתחלה.\nהמטרה היא לדעת:\n\n**מה לחפש, איפה לחפש, ואיך לזהות שמצאנו את התשובה.**",
        },
        {
          type: "preface",
          text: "אבל בפועל,** הרבה תלמידים** נופלים לאחת משתי טעויות.\n\n**הקבוצה הראשונה** מתחילה לקרוא את הטקסט מהמילה הראשונה ומנסה להבין ולזכור הכול.\n\nמה קורה? עומס. לחץ. בלאקאוט.\n\nאחרי הרבה זמן הם עדיין בתוך הטקסט, והזמן לשאלות ולכתיבה מתחיל להיגמר.\n\n**הקבוצה השנייה** עושה בדיוק ההפך:לא קוראת את הטקסט בכלל ומיד עוברת לשאלות.\n\nאולי זה מזכיר שיטות שעובדות במבחנים אחרים - אבל ב־Module C זה עלול לבלבל אתכם, כי עדיין אין לכם מושג ברור על מה הטקסט מדבר.\n\nאז מה כן עושים?\n\nלא קוראים הכול.\nולא מדלגים ישר לשאלות.\n\n צריך לדעת **מה לקרוא קודם, מה לחפש, ומתי לעבור לשאלות**.\nכי זאת בעצם המטרה של השאלון:\nלא לבדוק אם אתם יודעים לתרגם כל מילה,אלא אם אתם יודעים **לאתר מידע**, להבין **מה חשוב**, ולזהות את **הקשר בין הרעיונות השונים בטקסט**.\nכלומר:\n**למצוא → להבין → לקשר → לענות.**\nוזה בדיוק מה שנלמד עכשיו - שלב אחרי שלב",
        },
        {
          type: "summary",
          title: "  צריך להפנים שני עקרונות  ",
          lines: [
            "1 · הטקסט שם: התשובה כתובה בתוכו. ועל מנת לעשות זאת לא צריך אנגלית מושלמת.",
            "2 · מה זאת אומרת? פשוט מאוד לא צריך לקרוא ולהבין הכל - רק למצוא את מה שהשאלה מבקשת תוך כדי הבנת הרעיון המרכזי של הטקסט.",
          ],
        },
        {
          type: "preface",
          text: "בואו נראה איך זה עובד בדוגמה פשוטה. קראו את הטקסט:\n\nElephants are the largest land animals on Earth. They live in Africa and Asia. African elephants are bigger than Asian elephants.\n\nהשאלה:\n**Where do elephants live?**",
        },
        {
          type: "steps",
          steps: [
            "\nכבר הבנו שהפסקה מדברת על **elephants**, לכן אין צורך לחפש שוב רק את המילה הזאת.\n\nעכשיו מסתכלים על שתי מילים חשובות:\n**where** = איזה מידע צריך למצוא? → **מקום**\n**live** = מה צריך למצוא על הפילים? → **איפה הם חיים**\nכלומר:\n**elephants = על מי מדברים**\n**where = איזה סוג תשובה מחפשים**\n**live = איזה מידע צריך למצוא**\n\nלכן בטקסט נחפש מקום שבו מוסבר **איפה הפילים חיים**.",
            'מצאנו: "They live in Africa and Asia".',
            "כותבים: They live in Africa and Asia. - 8 שניות, בלי לקרוא את כל הפסקה.",
          ],
          ordered: false,
        },
        {
          type: "summary",
          title: "מילת מפתח",
          lines: [
            "המילה מהשאלה שמחפשים בטקסט - כמו המילה שמקלידים ב-🔍.",
            "בדוגמה: live. לא Where - זו רק מילת שאלה.",
            "בשיעור P1 נלמד לבחור אותה בדיוק.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: "\nDogs are one of the most popular pets in the world. They were first tamed from wolves thousands of years ago. Today, there are more than 400 different breeds of dog.",
              questions: [
                {
                  prompt:
                    "השאלה: When were dogs first tamed? - מה המילה שאתם מחפשים בטקסט?",
                  options: ["popular", "tamed / first", "breeds", "world"],
                  correctIndex: 1,
                },
                {
                  prompt:
                    'מצאתם את "first tamed from wolves thousands of years ago". מה התשובה?',
                  options: [
                    "Thousands of years ago",
                    "More than 400",
                    "From dogs",
                    "It is not written in the text",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "בואו ננסה עוד תרגיל ביחד:" },
            {
              type: "passage-mcq",
              text: "The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.",
              questions: [
                {
                  prompt: "Why was the Great Wall of China built?",
                  options: [
                    "Because it is 21,000 km long",
                    "To protect China from its enemies",
                    "For the millions of tourists",
                    "It is not written in the text",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: "The Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.",
              prompt:
                "How long is the Great Wall?\n\n  כתבו את התשובה באנגלית, במילים של הטקסט.",
              modelAnswer: "About 21,000 kilometers long.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"הטקסט שם."', '"אני לא קורא אותו - אני מחפש בו."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים. בלי לחץ.\n\n📌 זכור: אני מחפש, לא קורא.",
            },
            {
              type: "mcq",
              prompt: "בבחינת Module C צריך להבין כל מילה בטקסט כדי לענות.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. מחפשים מילת מפתח בלבד - לא חייבים להבין הכל.",
            },
            {
              type: "mcq",
              prompt: "מה המטרה בקריאת הטקסט?",
              options: [
                "להבין את הרעיון המרכזי וכל מילה בטקסט",
                "אין מטרה מוגדרת",
                "למצוא את המידע שהשאלה מבקשת",
              ],
              correctIndex: 2,
              explanation: "מחפשים - לא קוראים. כמו חיפוש בוואטסאפ.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעם טקסטים אמיתיים. כמו בקורס.",
            },
            {
              type: "mcq",
              prompt: "תלמיד מנסה לקרוא ולהבין את כל הטקסט. מה יקרה?",
              options: [
                "לא יספיק לענות על כל השאלות של הטקסט",
                "יטעה בשאלה אחת",
                "סביר להניח שלא יישאר לו זמן לכתיבה",
              ],
              correctIndex: 2,
              explanation:
                "קריאת הכל = בזבוז זמן. הבחינה נמשכת 1:45 - זמן הכתיבה ייגמר.",
            },
            {
              type: "mcq",
              prompt:
                "**אני לא קורא כדי להבין כל מילה - אני מחפש את המידע שיעזור לי לענות נכון**",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: "נכון. זו המנטליות שמשנה את כל הגישה לבחינה.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l01",
    section: "c-1",
    titleHe: "מפת הדרכים",
    titleEn: "The Road Map",
    required: ["l00"],
    requiredRounds: 3,
    position: { x: 70, y: 660 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'בשיעור הזה נתמקד עוד יותר בשיטת החיפוש ובואו נכיר ביחד את המושג **"מפת הדרכים"**.\n\nהמטרה שלנו היא לא לקרוא סתם.\nהמטרה היא לדעת **איפה אנחנו נמצאים בטקסט, מה חשוב, ואיפה לחפש את התשובה**.',
        },
        {
          type: "preface",
          text: "אתם לא מתחילים לקרוא בלי כיוון.\n\nלפני שקוראים מילה אחת - בונים מפה.\n\nיש לכם את הכותרת:\n**THE RETURN OF THE TREES**\nהטקסט קשור לעצים. זה כבר מידע.\n\nעכשיו קוראים את הפסקה הראשונה - רק אותה. תוך 30 שניות כבר יש לכם מפה בראש.\nהמפה לא מספרת לכם את כל הטקסט. היא רק אומרת על מה הטקסט מדבר ולאן הוא הולך. וזה כבר מספיק כדי לא ללכת לאיבוד.",
        },
        {
          type: "preface",
          text: "הדבר הכי חשוב: **לא רצים ישר לשאלות.**\nלפני השאלות בונים מפה - קוראים את הכותרת ואת הפסקה הראשונה.\nלמה? כי הן נותנות לכם את **מפת הדרכים של הטקסט** - על מה הוא מדבר ולאן הוא הולך.\nכשכבר יש לכם כיוון, הרבה יותר קל להבין את השאלות ולמצוא את התשובות.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "קוראים את הכותרת. מה הנושא?",
            "קוראים את הפסקה הראשונה בלבד.",
            "שואלים: על מה הטקסט? מה הבעיה או הכיוון?",
            "עכשיו פותחים את השאלה הראשונה - ויש לכם כיוון.",
          ],
        },
        {
          type: "preface",
          text: "## דוגמה: מפרקים את הפסקה הראשונה\n\nEvery year, forests around the world are destroyed by fire, farming, and pollution.\nHowever, there is good news.\nIn 2019, scientists started a project to plant one billion trees in Africa by 2030.\nThe project has already planted over 200 million trees in 15 countries.\n\nעכשיו מפרקים אותה בארבע שאלות קצרות.",
        },
        {
          type: "preface",
          text: "### 1. מה הבעיה?\n\nforests → destroyed\nהיערות נהרסים.\n\nולמה?\nfire / farming / pollution\n\nלא חייבים לדעת לתרגם כל מילה בצורה מושלמת.\n**מספיק להבין: יש בעיה עם היערות.**",
        },
        {
          type: "preface",
          text: "### 2. חפשו מילת שינוי\n\n**However**\n**However** = אבל / אולם\n\nזו מילה חשובה מאוד. היא אומרת לנו: עד עכשיו דיברו על בעיה, ועכשיו כנראה יגיע משהו אחר.\n\nואכן, מיד אחריה:\n**good news**\n\nכלומר: יש בעיה, אבל יש גם פתרון או שינוי חיובי.",
        },
        {
          type: "preface",
          text: "### 3. מי עושה משהו?\n\nscientists\nהמדענים.\n\nמה הם עשו?\nstarted a project\nהתחילו פרויקט.\n\nומה מטרת הפרויקט?\nplant one billion trees\nלשתול מיליארד עצים.",
        },
        {
          type: "preface",
          text: "### 4. שימו לב למספרים\n\nמספרים בטקסט הם כמו שלטים בכביש:\n\n**2019** ← מתי הפרויקט התחיל\n**one billion trees** ← מה היעד\n**2030** ← עד מתי\n**200 million trees** ← כמה כבר נשתלו\n**15 countries** ← בכמה מדינות\n\nלא צריך לזכור את כל המספרים עכשיו. צריך רק לזהות שהם כנראה יהיו חשובים בשאלות.",
        },
        {
          type: "preface",
          text: "## אז מה מפת הדרכים שלנו?\n\n{a:center}🌲 **בעיה:** יערות נהרסים\n{a:center}↓\n{a:center}**However**\n{a:center}↓\n{a:center}💡 **פתרון:** מדענים התחילו פרויקט\n{a:center}↓\n{a:center}🎯 **מטרה:** לשתול מיליארד עצים באפריקה\n\nוזה כבר מספיק כדי להבין את הכיוון של הטקסט.",
        },
        {
          type: "summary",
          title: "זכרו",
          lines: [
            "כותרת ← פסקה ראשונה ← מילות מפתח ← שאלות",
            "לא קוראים כל מילה - מחפשים נושא, בעיה, שינוי, פתרון ומספרים חשובים.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "מפת הדרכים = כותרת + פסקה 1. היא אומרת לכם על מה הטקסט ולאן הוא הולך - לפני שנוגעים בשאלות." },
            {
              type: "mcq",
              prompt: "מה קוראים כדי לבנות את מפת הדרכים?",
              options: ["את כל הטקסט", "כותרת + כל הפסקאות", "כותרת + פסקה 1 בלבד"],
              correctIndex: 2,
              explanation: "כותרת + פסקה 1 = 30 שניות. זה מספיק כדי לדעת את הנושא.",
            },
            {
              type: "mcq",
              prompt: "מה מפת הדרכים נותנת לכם?",
              options: ["את כל התשובות לשאלות", "את הנושא והכיוון של הטקסט - כדי לא ללכת לאיבוד", "את התרגום של כל המילים הקשות"],
              correctIndex: 1,
              explanation: "המפה לא עונה על השאלות. היא נותנת נושא וכיוון - ואז יודעים איפה אנחנו.",
            },
            {
              type: "mcq",
              prompt: "קראו את הכותרת: \"THE RETURN OF THE TREES\". על מה הטקסט?",
              options: ["על בניינים בעיר", "על עצים שחוזרים ונשתלים", "על בעלי חיים בסכנה"],
              correctIndex: 1,
              explanation: "כותרת = נושא. THE RETURN OF THE TREES = עצים שחוזרים.",
            },
            { type: "preface", text: "ועכשיו טקסט קצר ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "THE CITY GARDEN PROJECT\n\nFive years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city.",
              questions: [
                {
                  prompt: "קראו כותרת + פסקה 1 בלבד. על מה הטקסט?",
                  options: ["על מחקר בבריאות", "על גינות בעיר ועל שינוי סביבתי", "על חינוך בבתי ספר", "על תחבורה ציבורית"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - 30 שניות. כותרת + פסקה 1. על מה הטקסט?" },
            {
              type: "passage-mcq",
              text: "LEARNING TO SWIM AS AN ADULT\n\nLearning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.",
              questions: [
                {
                  prompt: "על מה הטקסט?",
                  options: ["ילדים שלומדים לשחות", "בריכות שחייה בערים גדולות", "מבוגרים שלומדים לשחות", "סקר על ערים גדולות"],
                  correctIndex: 2,
                },
                {
                  prompt: "אילו מילים בפסקה נתנו לכם את התשובה?",
                  options: ["\"adults\" ו-\"cannot swim\"", "\"survey\" ו-\"cities\"", "\"experts\" ו-\"late\"", "\"many people\" ו-\"think\""],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ["\"30 שניות. כותרת + פסקה 1. עכשיו יש לי מפה.\""],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. קראו כל שאלה עד הסוף." },
            {
              type: "passage-mcq",
              text: "**THE CITY GARDEN PROJECT**\n\nI  Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city. Today, Greenville looks very different.\n\nII  The person behind this change is Dr. Maria Santos, a professor at Greenville University. \"We wanted to show that any city can become greener,\" she says. According to Dr. Santos, the project cost only 500,000 dollars - much less than similar projects in other cities.\n\nIII  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              questions: [
                {
                  prompt: "What do we learn from paragraph I?",
                  options: ["Greenville was always a green city", "Greenville University planted the trees", "A charity made Greenville greener", "The air in Greenville is still polluted"],
                  correctIndex: 2,
                },
                {
                  prompt: "What problem did Greenville have five years ago?",
                  options: ["It had too many tourists", "It had almost no plants or trees, and the air was polluted", "It had no university", "Its gardens were too expensive"],
                  correctIndex: 1,
                },
                {
                  prompt: "Who is the person behind the change?",
                  options: ["Professor James Lee", "A local charity worker", "The mayor of Greenville", "Dr. Maria Santos"],
                  correctIndex: 3,
                },
                {
                  prompt: "What is the text mainly about?",
                  options: ["How a city became greener, and what changed", "Why trees are expensive", "How to build a park", "Stress in big cities"],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**THE COMEBACK OF BOARD GAMES**\n\nI  Twenty years ago, many people thought board games would disappear. Children spent their free time on computers and phones, and toy shops had fewer games on their shelves every year. Today, however, board games are more popular than ever.\n\nII  According to a report from 2023, sales of board games have grown by 25% in five years. Board game cafes, where people pay to play with friends, have opened in many cities. \"People are tired of screens,\" says cafe owner Daniel Ortiz. \"They want to sit around a table and laugh together.\"\n\nIII  Teachers have noticed the change too. Some schools now use board games in maths and language lessons. Research shows that students who play strategy games learn to plan ahead and make better decisions.",
              questions: [
                {
                  prompt: "What do we learn from paragraph I?",
                  options: ["Children prefer computers to board games", "Board games did not disappear - they are popular again", "Toy shops are closing", "Board games were invented twenty years ago"],
                  correctIndex: 1,
                },
                {
                  prompt: "What is the text mainly about?",
                  options: ["Board game cafes in big cities", "Why people are tired of screens", "Board games becoming popular again", "Using games in maths lessons"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to Daniel Ortiz, why do people come to play board games?",
                  options: ["Because games are cheap", "Because schools use them", "Because sales grew by 25%", "Because they are tired of screens"],
                  correctIndex: 3,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nעוד מפה על טקסט מוכר." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.",
              questions: [
                {
                  prompt: "על מה הטקסט?",
                  options: ["על זיהום אוויר בערים", "על פרויקט נטיעת עצים באפריקה", "על כריתת יערות בעולם"],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: "Five years ago, the streets of Greenville had almost no plants or trees. A local charity planted 2,000 trees and 15 gardens.",
              prompt: "השלימו: הטקסט הזה הוא על ___________ ב-___________.",
              modelAnswer: "על נטיעת עצים וגינות (שינוי ירוק) בעיר Greenville.",
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "self-check",
              text: "LEARNING TO SWIM AS AN ADULT\n\nI  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults cannot swim.",
              prompt: "על סמך הכותרת ופסקה I - על מה הטקסט? ענו במשפט אחד.",
              modelAnswer: "הטקסט על מבוגרים שלומדים לשחות.",
            },
            {
              type: "self-check",
              prompt: "כמה זמן לוקח לקרוא כותרת + פסקה 1, ולמה זה שווה את הזמן?",
              modelAnswer: "30 שניות. אחרי זה יודעים על מה הטקסט ולא נכנסים לשאלות \"עיוור\".",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l02",
    section: "c-1",
    titleHe: "שיטת הרמזור",
    titleEn: "Traffic Light",
    required: ["l01"],
    requiredRounds: 3,
    position: { x: 100, y: 780 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "בשיעור הקודם למדנו לבנות מפה:\n\n**שלב 1: כותרת**\n**שלב 2: פסקה ראשונה**\n\nלמה? כי לפני שאתם הולכים לשאלות, אתם צריכים לדעת **על מה הטקסט מדבר**: עצים? טכנולוגיה? חיות? בית ספר? בריאות?\n\nגם אם הבנתם רק חלק - כבר יש לכם כיוון.\n**לא הולכים לשאלות בלי לדעת על מה הטקסט.**",
        },
        {
          type: "preface",
          text: "למה זה כל כך חשוב?\n\nכשאתם יודעים את הנושא, אתם הרבה יותר רגועים. אתם לא מרגישים שכל הטקסט הוא אוסף של מילים לא מוכרות.\nלמשל: אם הבנתם שהטקסט עוסק ב-**trees**, ואתם רואים forest / plant / environment - גם בלי להכיר כל מילה, המוח כבר מבין את הכיוון. יש פה חידוש מסויים או פיתרון לבעיה. \n\n**הכותרת + הפסקה הראשונה = מפת הדרכים שלכם.**\n\nאבל רגע... גם כשמגיעים לשאלות יש טעות שתלמידים עושים כל הזמן: הם קוראים שאלה, **לא ממש מבינים אותה,** ובכל זאת מתחילים לחפש תשובה בטקסט.\nלפני שאתם מחפשים תשובה, בודקים דבר אחד: **האם אני באמת מבין את השאלה?**",
        },
        {
          type: "preface",
          text: 'הסיטואציה הזאת קורית כמעט בכל מבחן:\n\nתלמיד מגיע לשאלה 3 ומרים יד.\nאני, המורה, שואל: **"מה הבעיה?"**\nוהוא אומר: **"אני לא מוצא את התשובה."**\nאני שואל: **"אתה מבין מה השאלה מבקשת?"**\nוהתשובה היא:**"כן... נראה לי."**\nאז אני תמיד עונה:\n**"תסביר לי בעברית מה אתה צריך למצוא."**\nהוא לא יודע להסביר ומתברר שהבעיה היא בכלל לא בטקסט.\nהוא עדיין לא הבין את השאלה.\nלכן הכלל שלנו פשוט:\n**אם אתם לא יודעים להסביר בעברית מה השאלה רוצה - עדיין לא מתחילים לחפש את התשובה.**',
        },
        {
          type: "preface",
          text: "## שיטת הרמזור\nמהיום, לפני שעונים על כל שאלה, בודקים באיזה צבע אנחנו:\n\n🟢 **ירוק - הבנתי את השאלה.**\nאני יכול להסביר בעברית מה רוצים ממני.\n**מתקדמים לטקסט ומחפשים את התשובה.**\n\n🟡 **צהוב - הבנתי כמעט הכול.**\nיש מילה או שתיים שחסרות לי.\n**לא מנחשים.** בודקים במילון מהר, משלימים את המשמעות - ורק אז מתחילים לחפש.\n\n🔴 **אדום - אני לא באמת מבין מה רוצים ממני.**\nעוצרים. לא רצים שוב לטקסט. לא מנחשים.\nקודם מפרקים את השאלה:\n\nעל מי או על מה מדברים? מה מבקשים ממני למצוא? איפה צריך לחפש? כמה תשובות צריך לתת?\n\nרק למה שעדיין לא ברור - משתמשים במילון.\n++הכלל:++ **אם אתם לא בירוק, עדיין לא מתחילים לענות.**",
        },
        {
          type: "preface",
          text: "דוגמה: רמזור ירוק\n\nהשאלה:\n{p:text}**Why did the scientists start the project?**\n**Why** = למה\n**scientists** = מדענים\n**start the project** = התחילו את הפרויקט\n\nאני יכול להסביר בעברית: *למה המדענים התחילו את הפרויקט?*\n\n🟢 ירוק - עכשיו אפשר לחפש בטקסט את הסיבה.",
        },
        {
          type: "preface",
          text: "דוגמה: רמזור צהוב\n\nהשאלה:\n{p:text}**What has the project achieved so far?**\n\nאני מבין: **project** = פרויקט.\nאבל מה זה **achieved**? ומה זה **so far**? אני עדיין לא בטוח מה השאלה רוצה.\n\n🟡 צהוב - לא רצים לטקסט. קודם מפענחים בעזרת המילון:\n\n**so far** = עד עכשיו\n**achieved** = השיג / הצליח לעשות\n\nהשאלה אומרת: *מה הפרויקט הצליח לעשות עד עכשיו?*\n\nעכשיו 🟢 ירוק - אפשר לחפש תשובה.",
        },
        {
          type: "preface",
          text: "### דוגמה: רמזור אדום\n\nהשאלה:\n**According to paragraph IV, what was one reason for the decrease in the number of animals in the area?**\n\nאני קורא את השאלה ולא מצליח להסביר בדיוק מה רוצים ממני.\n\n🔴 **אדום - עדיין לא מחפשים תשובה.**\nמפרקים:\n\n**According to paragraph IV** = לפי פסקה 4\n**one reason** = סיבה אחת\n**the decrease** = הירידה\n**the number of animals** = מספר בעלי החיים\n**in the area** = באזור\n\nעכשיו מחברים הכול:\n\n**לפי פסקה 4, מה הייתה סיבה אחת לירידה במספר בעלי החיים באזור?**\nעכשיו אני כבר יודע:\n**איפה לחפש?** → פסקה 4\n**מה לחפש?** → סיבה\n**למה?** → לירידה במספר בעלי החיים\n**כמה לענות?** → סיבה אחת\n\n🟢 **ירוק - עכשיו אפשר לעבור לטקסט ולחפש את התשובה.**",
        },
        {
          type: "preface",
          text: "חוק הזהב\n\nלפני כל שאלה, שואלים: **\"האם אני יכול להסביר בעברית מה השאלה רוצה ממני?\"**\n\n🟢 כן - GO\n🟡 בערך - STOP AND CHECK\n🔴 לא - STOP\n\n**Don't answer a question you don't understand.**\nאל תחפשו תשובה לשאלה שאתם עדיין לא מבינים.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**Read the title** - מה הנושא?",
            "**Read the first paragraph** - מה הכיוון של הטקסט?",
            "עוברים לשאלה ובודקים רמזור: \n🔴 לא מבין - עוצר ומפרק.\n🟡 מבין חלקית - מפרק את השאלה.\n🟢 מבין - ממשיך.",
            "רק אחרי שהרמזור ירוק - מחפשים את התשובה בטקסט.",
          ],
        },
        {
          type: "summary",
          title: "כל השיטה עד עכשיו",
          lines: ["כותרת ← פסקה ראשונה ← שאלה ← רמזור ← תשובה"],
        },
        {
          type: "summary",
          title: "המילון - מתי ואיך",
          lines: [
            "✓ מילה בשאלה לא ברורה ← מילון.",
            "✗ מילים בטקסט שלא מכירים ← בדרך כלל אפשר להתעלם מהן.",
            "⏱ מקסימום 30 שניות למילה. לא מצאתם? סמנו M ועברו הלאה - חוזרים בסוף.",
            "❌ אל תחפשו: paragraph · according to · give ONE - את אלה לומדים בעל פה.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: '"Give ONE answer from paragraph II." - מה הצבע שלכם?',
              options: [
                "🔴 אדום - לא מבין כלום",
                "🟡 צהוב - מבין חלקית",
                '🟢 ירוק - "תנו תשובה אחת מפסקה 2". ברור.',
                "לא יודע",
              ],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt:
                '"What does contribute mean?" - לא מכירים את המילה. מה עושים?',
              options: [
                "🔴 עוצרים ומוותרים על השאלה",
                "🟡 מילון - 30 שניות - ועונים",
                "עונים בניחוש מהיר",
                "מתרגמים את כל הפסקה",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: "חיפשתם במילון 30 שניות והמילה עדיין לא ברורה. מה עכשיו?",
              options: [
                "ממשיכים לחפש עד שמבינים",
                "מוותרים על השאלה לגמרי",
                "M קטן בשוליים, עוברים הלאה, וחוזרים בסוף",
                "עונים משהו כדי לא להשאיר ריק",
              ],
              correctIndex: 2,
            },
            {
              type: "passage-mcq",
              text: "The project, called Green Africa, has already planted over 200 million trees in 15 countries. Scientists say that if it continues, it could reduce carbon in the atmosphere by 15%.",
              questions: [
                {
                  prompt:
                    'השאלה: "What has the project achieved so far?" - מה הצבע שלכם, לפני שמחפשים בטקסט?',
                  options: [
                    "🟢 ירוק - עונים מיד",
                    "🟡 צהוב - achieved ו-so far לא ברורות, מפענחים קודם",
                    "🔴 אדום - מוותרים על השאלה",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "מפענחים: achieved = השיג, so far = עד עכשיו. מה התשובה?",
                  options: [
                    "It has planted over 200 million trees in 15 countries",
                    "It could reduce carbon by 15%",
                    "It is called Green Africa",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - קבעו צבע ופעולה לכל שאלה." },
            {
              type: "mcq",
              prompt: '"According to whom?" - צבע ופעולה?',
              options: [
                '🟢 עונים - "לפי מי"',
                "🟡 מילון, 30 שניות",
                "🔴 עוצרים",
                "M ועוברים הלאה",
              ],
              correctIndex: 0,
            },
            {
              type: "mcq",
              prompt:
                '"Why did this occur in 2019?" - \n\nהמילה occur לא ברורה. צבע ופעולה?',
              options: [
                "🟢 עונים מיד",
                "🟡 מילון, 30 שניות",
                "🔴 מדלגים על השאלה",
                "עונים לפי המספר 2019 בלבד",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt: '"Give TWO answers from paragraph III." - צבע ופעולה?',
              options: [
                "🟡 מילון",
                "🔴 עוצרים",
                "🟢 עונים - שתי תשובות מפסקה 3",
                "🟢 עונים - תשובה אחת מפסקה 3",
              ],
              correctIndex: 2,
            },
            {
              type: "mcq",
              prompt: "איזה צבע הכי מסוכן?",
              options: [
                "🔴 אדום - כי לא מבינים כלום",
                "🟡 צהוב - כי הוא מרגיש כמו ירוק",
                "🟢 ירוק - כי עונים מהר",
                "כולם מסוכנים באותה מידה",
              ],
              correctIndex: 1,
            },
            {
              type: "mcq",
              prompt:
                '"According to the text, what is one drawback of the reforestation initiative?" - כמעט שום דבר לא ברור. צבע ופעולה?',
              options: [
                "🟢 עונים - זו שאלה על הטקסט",
                "🟡 מילון למילה אחת ועונים",
                "🔴 עוצרים, מפרקים את השאלה לחלקים, ורק אז ממשיכים",
                "M ועוברים הלאה בלי לנסות",
              ],
              correctIndex: 2,
            },
            {
              type: "passage-mcq",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              questions: [
                {
                  prompt: "השאלה: \"According to Dr. Okafor, what is one benefit of volunteering for teenagers?\" - המילה benefit לא מוכרת לכם. מה הצבע?",
                  options: ["🟢 ירוק - עונים מיד", "🟡 צהוב - בודקים benefit במילון, ורק אז מחפשים", "🔴 אדום - מדלגים על השאלה"],
                  correctIndex: 1,
                },
                {
                  prompt: "benefit = יתרון. מה התשובה?",
                  options: ["All types of volunteering produce the same results", "They meet the people they help", "They feel less stressed", "They study for ten years"],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"לא ירוק - מילון 30 שניות. עדיין לא? M ועוברים."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. קראו כל שאלה עד הסוף." },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers than those who learned as children. \"Adults understand what the teacher explains and can correct their mistakes more quickly,\" says Dr. Anna Klein. \"They are also not afraid to ask questions.\"\n\nIII  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.",
              questions: [
                {
                  prompt: "השאלה: \"According to the survey, what proportion of adults in large cities cannot swim?\" - המילה proportion לא ברורה. מה הצבע?",
                  options: ["🟢 ירוק - עונים מיד", "🟡 צהוב - בודקים proportion במילון, ורק אז מחפשים", "🔴 אדום - מדלגים"],
                  correctIndex: 1,
                },
                {
                  prompt: "proportion = חלק / שיעור. מה התשובה?",
                  options: ["Over 30%", "Most of them", "Three sessions a week", "Less than two months"],
                  correctIndex: 0,
                },
                {
                  prompt: "According to Dr. Klein, what are adults not afraid of?",
                  options: ["Deep water", "Making mistakes", "Asking questions", "Swimming with children"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to instructors, how long does it usually take adults who practice regularly to make good progress?",
                  options: ["More than a year", "Less than two months", "One week", "Three sessions"],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**SLEEPING IN SPACE**\n\nI  Astronauts on the International Space Station see the sun rise and set 16 times every day. Because of this, their bodies often lose track of time, and many of them find it hard to fall asleep.\n\nII  To deal with this problem, the station uses special lights. In the evening, the lights become warmer and softer, which helps the astronauts feel tired. According to Dr. Laura Kim, a sleep researcher, astronauts who use the new lights sleep about 40 minutes longer each night.\n\nIII  Sleeping without gravity is also strange. Astronauts sleep in small bags attached to the wall, so they do not float around and hit anything. Many say that after a few weeks, it feels surprisingly comfortable.",
              questions: [
                {
                  prompt: "השאלה: \"What do astronauts do to avoid floating around while they sleep?\" - המילה avoid לא ברורה. מה עושים?",
                  options: ["מנחשים לפי המילה sleep", "avoid = להימנע. בודקים, ורק אז מחפשים", "מוותרים על השאלה"],
                  correctIndex: 1,
                },
                {
                  prompt: "What do astronauts do to avoid floating around while they sleep?",
                  options: ["They take sleeping pills", "They turn off the lights", "They sleep in small bags attached to the wall", "They sleep for 40 minutes"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to Dr. Laura Kim, how much longer do astronauts sleep with the new lights?",
                  options: ["About 16 minutes", "About 40 minutes", "A few weeks", "Twice as long"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nצבע לכל שאלה." },
            {
              type: "mcq",
              prompt: "\"What do we learn from paragraph I?\" - מה הצבע שלכם?",
              options: ["🔴 אדום - לא מבין", "🟡 צהוב - מבין חלקית", "🟢 ירוק - \"מה לומדים מפסקה 1?\""],
              correctIndex: 2,
              explanation: "🟢 ירוק. \"מה לומדים מפסקה 1?\" - ברור. עונים.",
            },
            {
              type: "mcq",
              prompt: "איזו שאלה היא 🟡 צהוב - כלומר דורשת מילון?\n\n1. \"According to Dr. Diallo, why do trees die?\"\n2. \"What does contribute mean in paragraph II?\"\n3. \"Give ONE answer from paragraph III.\"",
              options: ["שאלה 1", "שאלה 2", "שאלה 3", "כל השלוש"],
              correctIndex: 1,
              explanation: "according to + why = ירוק. \"give ONE answer\" = ירוק. מילה לא מוכרת בשאלה = צהוב ← מילון.",
            },
            {
              type: "mcq",
              prompt: "כמה זמן מותר לבזבז על מילה אחת במילון?",
              options: ["כמה שצריך", "30 שניות בלבד", "3 דקות"],
              correctIndex: 1,
              explanation: "מקסימום 30 שניות. לא מצאתם? M קטן ועוברים הלאה.",
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "mcq",
              prompt: "אילו שאלות דורשות מילון?\n\n1. \"What do we learn from paragraph I?\"\n2. \"What does environmentalists mean?\"\n3. \"According to Dr. Klein, give ONE reason.\"\n4. \"How did the phenomenon affect students?\"\n5. \"Give TWO answers from paragraph III.\"",
              options: ["1 ו-3", "2 ו-4", "3 ו-5", "כולן"],
              correctIndex: 1,
              explanation: "environmentalists ו-phenomenon אינן ברורות ← מילון. השאר ירוקות.",
            },
            {
              type: "self-check",
              prompt: "מלאו את הכלל: רק _______ = עונה. צהוב מרגיש כמו _______ - אבל הוא לא.",
              modelAnswer: "רק ירוק = עונה. צהוב מרגיש כמו ירוק - אבל הוא לא.",
            },
            {
              type: "self-check",
              prompt: "תלמיד קרא שאלה, \"הבין\", ענה - וקיבל 0. מה כנראה קרה?",
              modelAnswer: "**הוא היה בצהוב ולא בירוק. חשב שהבין, אבל לא הבין מה בדיוק השאלה ביקשה.**",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l03",
    section: "c-1",
    titleHe: "P1 - ניווט בטקסט",
    titleEn: "P1 Navigation",
    required: ["l02"],
    requiredRounds: 3,
    position: { x: 10, y: 900 },
    big: true,
    content: {
      preface: [
        {
          type: "preface",
          text: "\nעד עכשיו למדנו מה עושים **לפני שמחפשים תשובה**:\n\nקודם מבינים על מה הטקסט מדבר, ואז בודקים שאנחנו מבינים את השאלה.\n\nעכשיו עוברים לשלב הבא: **איך מחפשים את התשובה בפסקאות של הטקסט.**",
        },
        {
          type: "preface",
          text: "**מהי מילת מפתח?**\nמילת מפתח היא מילה שעוזרת לנו לדעת **מה לחפש בטקסט**.\n\nבדרך כלל זו מילה חשובה מתוך השאלה - למשל:\nאדם, מקום, דבר, רעיון או פעולה מרכזית\n\nמילות שאלה כמו **what, why, how, when** לא עוזרות לנו למצוא את המקום בטקסט. הן אומרות לנו **איזה סוג תשובה צריך לתת**, אבל לא איפה לחפש.\n\nלמשל:\n**Why did the scientists start the project?**\n**Why** אומר לנו שאנחנו צריכים למצוא **סיבה**.\n**אבל** המילים שעוזרות לנו למצוא את המקום בטקסט הן:\n**scientists**, **project**\nאלה המילים שנחפש בטקסט, או מילים דומות להן.\n\nהמטרה של מילת המפתח היא פשוטה:\nבמקום לקרוא שוב את כל הטקסט, אנחנו מחפשים את המילה החשובה - וכך מגיעים מהר יותר לאזור שבו נמצאת התשובה.",
        },
        {
          type: "preface",
          text: '### דוגמה: רמזור ירוק\n\n{a:left}**GREEN AFRICA - Paragraph II**\n\n{a:left}The project is led by Dr. Amara Diallo, a scientist from Senegal. ‘We do not just plant trees,’ says Dr. Diallo. ‘We teach local people how to care for them.’ According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nהשאלה:\n**According to Dr. Diallo, why do most trees die?**\nקודם בודקים: האם אני מבין מה רוצים ממני?\n**According to Dr. Diallo** = לפי ד"ר דיאלו\n**why** = למה / מה הסיבה\n**most trees die** = רוב העצים מתים\nעכשיו אני יכול להסביר את השאלה בעברית:\n**לפי ד"ר דיאלו, למה רוב העצים מתים?**\n🟢 **ירוק - השאלה ברורה.**',
        },
        {
          type: "preface",
          text: "עכשיו זה פשוט:\n🔵 **איפה מחפשים?** בפסקה II.\n🟢 **מי מופיע בשאלה?** ד״ר דיאלו.\n🟡 **מה השאלה מבקשת?** סיבה - למה רוב העצים מתים?\n🔴 **עכשיו מחפשים את המשפט המתאים:**\n**“Most trees die because nobody looks after them.”**\n✅ **התשובה:** **Because nobody looks after them.**\n📌 **זכרו:** **מבינים את השאלה → יודעים איפה לחפש → מוצאים את המשפט → עונים.**",
        },
        {
          type: "preface",
          text: "### דוגמה: רמזור צהוב\n**GREEN AFRICA - Paragraph II**\n“The project is led by Dr. Amara Diallo, a scientist from Senegal. ‘We do not just plant trees,’ says Dr. Diallo. ‘We teach local people how to care for them.’ According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.”\nהשאלה:\n**What happens when local people are involved in the project?**\nאני מבין כמעט את כל השאלה, אבל המילה **involved** לא לגמרי ברורה לי.\n🟡 **צהוב - לא מנחשים.**\nמפרקים:\n**What happens** = מה קורה\n**local people** = אנשים מקומיים\n**are involved** = משתתפים / מעורבים\n**in the project** = בפרויקט\nעכשיו השאלה ברורה:\n**מה קורה כאשר האנשים המקומיים משתתפים בפרויקט?**\n",
        },
        {
          type: "preface",
          text: "\n🟢 עכשיו ירוק - אפשר לחפש תשובה.\nאיפה לחפש? → בפסקה II\n\nמה לחפש? → מה קורה כאשר המקומיים מעורבים\nמילת מפתח חשובה → involved\nבטקסט מופיע:\n\n“When local people are involved, 85% of trees survive.”\nלכן התשובה:\n\n85% of the trees survive.\n\nשימו לב: בצהוב לא צריך לפתוח מילון על כל השאלה.\nבודקים רק את המילה שעוצרת אותנו - ואז ממשיכים.",
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "P1 = שאלה ← מילת מפתח ← איתור בטקסט ← קריאת המשפט ← תשובה. לא קוראים את כל הטקסט." },
            {
              type: "mcq",
              prompt: "\"According to Dr. Diallo, why do most trees die?\" - מהי מילת המפתח?",
              options: ["\"why\"", "\"Dr. Diallo\" / \"trees die\"", "\"According\""],
              correctIndex: 1,
              explanation: "\"Dr. Diallo\" ו-\"trees die\" הן מה שמחפשים בטקסט. \"why\" ו-\"according\" הן מילות שאלה.",
            },
            {
              type: "mcq",
              prompt: "מהו הסדר הנכון של חמשת שלבי P1?",
              options: ["קרא השאלה ← מצא מילת מפתח ← אתר בטקסט ← קרא את המשפט ← ענה", "קרא את הטקסט ← קרא השאלה ← ענה ← בדוק ← סיים", "מצא מילת מפתח ← קרא השאלה ← ענה ← אתר בטקסט ← קרא", "קרא השאלה ← ענה ← אתר בטקסט ← קרא את המשפט ← בדוק"],
              correctIndex: 0,
              explanation: "1-קרא השאלה · 2-מילת מפתח · 3-אתר בטקסט · 4-קרא את המשפט · 5-ענה.",
            },
            {
              type: "mcq",
              prompt: "בשלב 4 של P1 - מה קוראים?",
              options: ["את כל הפסקה", "את המשפט עם מילת המפתח, ואולי את זה שלפניו או אחריו", "את כל הטקסט מההתחלה"],
              correctIndex: 1,
              explanation: "קוראים רק את האזור של מילת המפתח. שם נמצאת התשובה.",
            },
            { type: "preface", text: "ועכשיו טקסט ושאלה אמיתית - שלב אחרי שלב." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. \"We do not just plant trees,\" says Dr. Diallo. \"We teach local people how to care for them.\" According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.",
              questions: [
                {
                  prompt: "השאלה: What do we learn from paragraph I about the Green Africa project? - מהי מילת המפתח?",
                  options: ["forests", "Green Africa", "However", "scientists say"],
                  correctIndex: 1,
                },
                {
                  prompt: "באיזו פסקה מצאתם אותה?",
                  options: ["פסקה I", "פסקה II", "פסקה III", "לא מופיעה בטקסט"],
                  correctIndex: 0,
                },
                {
                  prompt: "מה התשובה?",
                  options: ["It teaches local people how to care for trees", "It has already planted over 200 million trees in 15 countries", "It made rivers in Kenya flow again", "It reduced carbon by 15%"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "YOUR TURN - חמישה שלבים, לבד.\n\nהשאלה: What happened in Ethiopia after trees were planted? (paragraph III)" },
            {
              type: "mcq",
              prompt: "שלב 2 - מהי מילת המפתח שתחפשו בטקסט?",
              options: ["trees", "Ethiopia", "planted", "happened"],
              correctIndex: 1,
            },
            {
              type: "self-check",
              text: "III  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.",
              prompt: "שלב 5 - כתבו את התשובה במילים של הטקסט.",
              modelAnswer: "The number of birds increased by 60%.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ["\"הטקסט קשה? לא מבין? - P1 עדיין עובד. מחפש, לא קורא.\""],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. שימו לב: לפעמים בטקסט כתובה מילה אחרת מזו שבשאלה, עם אותה משמעות." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. \"We do not just plant trees,\" says Dr. Diallo. \"We teach local people how to care for them.\" According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.",
              questions: [
                {
                  prompt: "According to Dr. Diallo, why do most trees die?",
                  options: ["Because of fire and farming", "Because nobody looks after them", "Because it does not rain", "Because they are planted too late"],
                  correctIndex: 1,
                },
                {
                  prompt: "What happened to the rivers in Kenya?",
                  options: ["They dried up", "They flooded villages", "They began to flow again", "They became cleaner"],
                  correctIndex: 2,
                },
                {
                  prompt: "How many trees has the project planted so far?",
                  options: ["One billion", "85%", "15", "Over 200 million"],
                  correctIndex: 3,
                },
                {
                  prompt: "What happens when local people are involved?",
                  options: ["85% of trees survive", "The number of birds increases by 60%", "Trees grow faster", "Carbon goes down by 15%"],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**BEES IN THE CITY**\n\nI  Bees are disappearing from many parts of the world. Farmers need them, because bees carry pollen from flower to flower and help fruit and vegetables grow. Without bees, many foods would become rare and expensive.\n\nII  In 2019, the city of Utrecht in the Netherlands found a simple way to help. It turned the roofs of more than 300 bus stops into small gardens full of flowers. \"The bees love them,\" says city gardener Lotte Visser. \"And the plants also keep the bus stops cooler in summer.\"\n\nIII  Other cities have copied the idea. London and Toronto are now testing green roofs on their own bus stops. Scientists believe that cities, with their parks and gardens, could become safe homes for bees in the future.",
              questions: [
                {
                  prompt: "According to Lotte Visser, what else do the plants do?",
                  options: ["They make honey", "They bring tourists", "They keep the bus stops cooler in summer", "They help fruit grow"],
                  correctIndex: 2,
                },
                {
                  prompt: "Why do farmers need bees?",
                  options: ["Because bees make food cheaper", "Because bees help fruit and vegetables grow", "Because bees keep other insects away", "Because bees live on bus stops"],
                  correctIndex: 1,
                },
                {
                  prompt: "Which cities are trying the same idea?",
                  options: ["London and Toronto", "Utrecht and London", "Toronto and Utrecht", "All cities in the Netherlands"],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף ⏱️ (רשות)\nהמרוץ: אותה משימה, שתי דרכים\n\nבשתי המשימות הבאות יש טקסט ושאלה אחת, והשעון רץ. הטקסטים שונים אבל באותו אורך.\n\nהשעון לא משפיע על הציון - הוא רק מראה לכם כמה זמן חוסכת השיטה.",
            },
            {
              type: "preface",
              text: "דרך א׳: קוראים הכל\n\nקראו את כל הטקסט מהמילה הראשונה ועד האחרונה, ורק אחר כך ענו על השאלה.\n\nמוכנים? השעון מתחיל ברגע שהמסך הבא נפתח.",
            },
            {
              type: "passage-mcq",
              label: "דרך א׳ - קריאה מלאה",
              timerKey: "raceRead",
              text: "{a:center}**++THE OLD LIGHTHOUSE++**\n\nThe lighthouse at Cape Marlow was built in 1881 to warn ships about the rocks near the coast. For almost a hundred years, a keeper lived inside it and lit the lamp every evening. In 1974, the lamp became automatic, and the last keeper, Thomas Reed, moved to a nearby village. The building was empty for many years. Then, in 2015, a local group raised 300,000 dollars to repair it. Today, the lighthouse is a small museum, and about 20,000 visitors climb its 120 steps every year.",
              questions: [
                {
                  prompt:
                    "How much money did the local group raise to repair the lighthouse?",
                  options: [
                    "20,000 dollars",
                    "120 dollars",
                    "300,000 dollars",
                    "It is not written in the text",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "preface",
              text: "## **🔍 דרך ב׳: מחפשים חכם**\n\nאל תקראו את כל הטקסט מההתחלה. מתחילים ב־**שאלה**.\nואז עובדים לפי המסלול:\n\n🟦 **מילת מפתח**\n↓\n🟨 **איתור בטקסט**\n↓\n🟩 **קריאת המשפט הרלוונטי**\n↓\n✅ **תשובה**\nהמטרה היא לא לקרוא יותר.\n\nהמטרה היא **למצוא מהר יותר את מה שבאמת צריך**.\n\n⏱️ **מוכנים? **השעון מתחיל ברגע שהמסך הבא נפתח.",
            },
            {
              type: "passage-mcq",
              label: "דרך ב׳ ",
              timerKey: "raceP1",
              text: "{a:center}**THE MOUNTAIN BAKERY**\n\nThe bakery in Alta Valley opened in 1952 and sold only bread at first. For many years, the owner, Maria Costa, baked everything by hand before sunrise. In 1988, her son Luca joined her and added cakes and cookies to the menu. Because the village was small, most customers were neighbours who came every morning. In 2019, a food magazine wrote about the bakery, and tourists began to arrive from other cities. Today, the bakery employs twelve people and sells about 500 loaves every day, but Luca says the recipe for the bread has never changed.",
              questions: [
                {
                  prompt: "According to Luca, what has never changed?",
                  options: [
                    "The recipe for the bread",
                    "The number of workers",
                    "The number of customers",
                    "The opening hours",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title:
                "בשיעור הזה למדנו איך למצוא תשובה בטקסט בצורה מסודרת.\n\nקודם מבינים **מה השאלה מבקשת**.\nאחר כך מסמנים **מילת מפתח** שעוזרת לנו לדעת איפה לחפש.\nמוצאים את המקום המתאים בטקסט, קוראים את המשפטים סביבו ורק אז עונים.\n📌 זכרו:\n**שאלה → מילת מפתח → חיפוש בטקסט → קריאה → תשובה**",
              lines: [],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nP1 על טקסטים מוכרים." },
            {
              type: "mcq",
              prompt: "\"What happened to rivers in Kenya? (paragraph III)\" - מהי מילת המפתח, ובאיזו פסקה?",
              options: ["What - פסקה I", "Kenya - פסקה III", "rivers - פסקה II"],
              correctIndex: 1,
              explanation: "\"Kenya\" - שם מקום ספציפי. הפסקה כבר מצוינת בשאלה: III.",
            },
            {
              type: "self-check",
              text: "II  \"Adults understand what the teacher explains and can correct their mistakes more quickly,\" says Dr. Anna Klein.",
              prompt: "מלאו את P1 לשאלה \"According to Dr. Klein, how did adults improve?\" - מילת מפתח, פסקה, ותשובה.",
              modelAnswer: "מילת מפתח: Dr. Klein / improve. פסקה: II. תשובה: By understanding explanations and correcting their mistakes more quickly.",
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nכל חמשת השלבים, במילים שלכם." },
            {
              type: "self-check",
              text: "II  The project is led by Dr. Amara Diallo. \"We do not just plant trees,\" says Dr. Diallo. \"We teach local people how to care for them.\" According to Dr. Diallo, most trees die because nobody looks after them.",
              prompt: "השאלה: **According to Dr. Diallo, why do most trees die?**\n\nעברו על חמשת השלבים של P1, ואז כתבו את התשובה באנגלית.",
              modelAnswer: "מילת השאלה: why = מחפשים סיבה.\nמילות מפתח: Dr. Diallo, die.\nאיפה: פסקה II.\nהמשפט: \"most trees die because nobody looks after them\".\nתשובה: Because nobody looks after them.",
            },
            {
              type: "self-check",
              prompt: "הסבירו בעברית: למה P1 יעיל דווקא לתלמיד עם אנגלית חלשה?",
              modelAnswer: "כי הוא נותן נוסחה קבועה לכל שאלה. לא צריך לחשוב מחדש בכל פעם - רק לבצע חמישה שלבים.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l04",
    section: "c-1",
    titleHe: "מגנט לעין - מספרים ושמות",
    titleEn: "Eye Catcher: Numbers & Names",
    required: ["l03"],
    requiredRounds: 4,
    position: { x: -100, y: 1020 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'בלי Eye Catcher:\n"השאלה על 2,000. קורא פסקה 1... 2... 3. מוצא אחרי דקה." - 60 שניות.\n\nעם Eye Catcher:\n"רואה 2,000 בשאלה. סורק את הטקסט ומחפש 2,000. מוצא תוך 3 שניות." - 3 שניות.',
        },
        {
          type: "summary",
          title: "THE TOOL - מספר בשאלה",
          lines: [
            "רואים מספר בשאלה ← סורקים את הטקסט ומחפשים אותו. לא קוראים מההתחלה.",
            "שנים: 2019 · 1985   |   אחוזים: 85% · 60%   |   כמויות: 2,000 · 15",
            "מספר בשאלה = GPS. הולכים ישר לשם.",
          ],
        },
        {
          type: "preface",
          text: 'WATCH IT\n\nהשאלה: According to Professor James Lee, what percentage of residents are satisfied?\nמחפשים 85% ← סורקים ← פסקה III: "85% of residents now say they are satisfied."\nתשובה: 85% of residents.\n\nהשאלה: How much did the project cost?\nמחפשים 500,000 dollars ← פסקה II.\nתשובה: Only 500,000 dollars.',
        },
        {
          type: "preface",
          text: "כלל הזהב:\n\nכל שם פרטי בטקסט - Dr. Santos, Prof. Lee - שייך לפסקה מסוימת.\nכשיש שם בשאלה, הולכים ישר לפסקה שלו. לא קוראים את כל הטקסט.",
        },
        {
          type: "summary",
          title: "THE TOOL - שם בשאלה",
          lines: [
            "1 · ראיתם שם בשאלה.",
            "2 · חפשו את השם בטקסט - באיזו פסקה הוא יושב?",
            "3 · קראו רק את מה שאותו אדם אמר.",
            '⚠️ "According to Dr. Santos" ≠ מה שכולם אומרים. רק מה ש-Santos אמרה.',
          ],
        },
        {
          type: "preface",
          text: 'WATCH IT\n\nהשאלה: According to Professor James Lee, what happened to residents?\n\nהשם: Professor James Lee ← זה המגנט.\nהמיקום: פסקה III.\nהמשפט: "85% of residents now say they are satisfied with their city."\n\nתשובה: 85% of residents say they are satisfied.',
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "כמה משפטים בעברית. סמנו כל מספר וכל שם פרטי במשפט." },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "בשנת 2010 פתחה עיריית ירושלים מרכז ספורט חדש לבני נוער.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1] },
                { name: "שמות", color: "amber", indices: [3, 4] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "תוך 4 שנים הקימה החברה 25 סניפים חדשים ברחבי הארץ.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1, 5] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "לפי ד\"ר רונית כהן, 30% מהתלמידים בחיפה ישנים פחות מ-7 שעות.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [4, 9] },
                { name: "שמות", color: "amber", indices: [1, 2, 3, 6] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "עכשיו באנגלית. כמה משפטים. סמנו כל מספר וכל שם פרטי - רק את המספר עצמו, בלי המילה שאחריו." },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Professor Mark Ellis found that 72% of students improved their grades.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [5] },
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Dr. Peter Novak has taught at the university for 22 years.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [9] },
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
              ],
            },
            {
              type: "mcq",
              prompt: "השאלה: \"How many trees were planted?\" - מה מחפשים בטקסט?",
              options: ["את המילה trees בלבד", "מספר שצמוד ל-trees / planted", "את שם הפרויקט"],
              correctIndex: 1,
              explanation: "מספר בשאלה (How many) = GPS. סורקים ומחפשים מספר ליד trees - לא קוראים מההתחלה.",
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Greenfield University launched a research programme lasting 8 years.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [7] },
                { name: "שמות", color: "amber", indices: [0, 1] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "כמה פסקאות. סמנו כל מספר וכל שם פרטי בפסקה." },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "A charity based in Boston has helped local schools for over 12 years. Its founder, Dr. Alice Monroe, says that more than 3,000 children have taken part in its programmes.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [11, 22] },
                { name: "שמות", color: "amber", indices: [4, 15, 16, 17] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "In 2016, the town of Ashford built a new sports centre. According to Mayor Peter Grant, over 6,500 residents now use it every month.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1, 17] },
                { name: "שמות", color: "amber", indices: [5, 13, 14, 15] },
              ],
            },
            {
              type: "mcq",
              prompt: "השאלה: \"According to Dr. Santos, what did the project cost?\" - מה קוראים?",
              options: ["את כל הטקסט, מההתחלה", "רק את מה ש-Dr. Santos אמרה, בפסקה שלה", "את הפסקה האחרונה"],
              correctIndex: 1,
              explanation: "שם בשאלה = כתובת. מוצאים את Dr. Santos, וקוראים רק את מה שהיא אמרה.",
            },
            { type: "preface", text: "זהירות ממילים שנראות כמו שם: מילה עם אות גדולה בתחילת משפט (Last, Today, Most) היא לא שם." },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Last year, a small club in Leeds had only 40 members. Today it has 140, says its manager, Sara Cohen. Most new members heard about it online.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [9, 14] },
                { name: "שמות", color: "amber", indices: [6, 18, 19] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט באורך מבחן. לא מסמנים הכול: כל שאלה אומרת לכם מה לחפש. מוצאים את המילה, קוראים סביבה ועונים.\n{d:rtl}השעון רק מראה כמה זמן לקח - הוא לא משפיע על הציון." },
            {
              type: "passage-mcq",
              label: "רמת בחינה",
              timerKey: "hunt",
              text: "**THE LIBRARY ON WHEELS**\n\nI  In 2018, a teacher named Sofia Marin bought an old bus for 12,000 dollars. She wanted to bring books to small villages in the hills near Granada, where the nearest library was 40 kilometres away. The trip took 3 hours, and only 15 children came.\n\nII  Today, the bus visits 26 villages every month. It carries more than 4,000 books, and about 900 children use it regularly. According to Ms. Marin, the most popular books are comics and stories about animals. \"Children who never held a book now ask me for the next book,\" she says.\n\nIII  The project has also changed the villages. A study by Dr. Pablo Ruiz from the University of Seville found that reading scores in these schools went up by 18% in 2 years. Parents started borrowing books too, and in 2021 the bus added a section for adults.\n\nIV  The bus is not cheap to run. Fuel and repairs cost about 9,000 dollars a year, and most of the money comes from local shops and families. In 2023, the city of Granada gave the project official support: a new bus.\n\nV  Ms. Marin hopes to reach 50 villages by 2027. \"Every village deserves a library,\" she says, \"even if it has wheels.\"",
              questions: [
                {
                  prompt: "How many villages does the bus visit every month?",
                  options: ["50", "15", "26", "900"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to Dr. Pablo Ruiz's study, what happened to reading scores?",
                  options: ["They went up by 18% in 2 years", "They went down by 18%", "They stayed the same", "They went up by 2% in 18 years"],
                  correctIndex: 0,
                },
                {
                  prompt: "What happened in 2023?",
                  options: ["The bus added a section for adults", "The city of Granada gave the project a new bus", "Sofia Marin bought the bus", "Reading scores went up"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף ⏱️ (רשות)\nאתגר: אותו טקסט, ועכשיו מסמנים כל מספר וכל שם פרטי. השעון רץ - נסו לנצח את עצמכם." },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "**THE LIBRARY ON WHEELS**\n\nI  In 2018, a teacher named Sofia Marin bought an old bus for 12,000 dollars. She wanted to bring books to small villages in the hills near Granada, where the nearest library was 40 kilometres away. The trip took 3 hours, and only 15 children came.\n\nII  Today, the bus visits 26 villages every month. It carries more than 4,000 books, and about 900 children use it regularly. According to Ms. Marin, the most popular books are comics and stories about animals. \"Children who never held a book now ask me for the next book,\" she says.\n\nIII  The project has also changed the villages. A study by Dr. Pablo Ruiz from the University of Seville found that reading scores in these schools went up by 18% in 2 years. Parents started borrowing books too, and in 2021 the bus added a section for adults.\n\nIV  The bus is not cheap to run. Fuel and repairs cost about 9,000 dollars a year, and most of the money comes from local shops and families. In 2023, the city of Granada gave the project official support: a new bus.\n\nV  Ms. Marin hopes to reach 50 villages by 2027. \"Every village deserves a library,\" she says, \"even if it has wheels.\"",
              dir: "ltr",
              timerKey: "sweep",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [6, 17, 37, 43, 47, 55, 63, 67, 130, 132, 141, 162, 178, 197, 200] },
                { name: "שמות", color: "amber", indices: [10, 11, 31, 74, 75, 112, 113, 114, 117, 119, 182, 192, 193] },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "numbers-names-q",
    section: "c-1",
    titleHe: "מספרים ושמות - תרגול שאלות",
    titleEn: "Numbers & Names: Practice",
    required: ["l04"],
    requiredRounds: 3,
    position: { x: -100, y: 1140 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עכשיו שהבנו איך למצוא את המילים, נבין איך להשתמש בהן לטובתנו",
        },
        {
          type: "summary",
          title: "THE TOOL - מספר או שם בשאלה",
          lines: [
            "מספר בשאלה = GPS. סורקים את הטקסט ומחפשים אותו - לא קוראים מההתחלה.",
            "שם בשאלה = כתובת. מוצאים את הפסקה שלו, וקוראים רק את מה שהוא אמר.",
            '⚠️ "According to Dr. Santos" ≠ מה שכולם אומרים. רק מה ש-Santos אמרה.',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "מספר או שם בשאלה הם Eye Catchers: הם אומרים לכם לאן ללכת בטקסט." },
            {
              type: "mcq",
              prompt: "\"According to the survey, what percentage of adults cannot swim?\" - מה תחפשו בטקסט?",
              options: ["את המילה survey", "מספר עם % ליד adults / cannot swim", "את הפסקה הראשונה"],
              correctIndex: 1,
              explanation: "percentage = מספר. סורקים ומחפשים % ליד adults - שם התשובה.",
            },
            {
              type: "mcq",
              prompt: "\"According to Dr. Maria Santos, what did the project show?\" - לאיזו פסקה הולכים?",
              options: ["פסקה I - כי היא הראשונה", "הפסקה שבה מופיעה Dr. Santos", "הפסקה האחרונה - שם המסקנה"],
              correctIndex: 1,
              explanation: "Dr. Santos = כתובת. הולכים לפסקה שלה וקוראים רק את מה שהיא אמרה.",
            },
            {
              type: "mcq",
              prompt: "באילו שאלות יש מספר שמחפשים בטקסט?\n\n1. \"How many countries are in the project?\"\n2. \"What happened after 2019?\"\n3. \"Give TWO answers from paragraph III.\"\n4. \"What percentage of students improved?\"",
              options: ["רק ב-2", "ב-1, 2 ו-4", "בכולן", "רק ב-3 ו-4"],
              correctIndex: 1,
              explanation: "\"How many\" · \"2019\" · \"percentage\" = מספרים שמחפשים. \"Give TWO answers\" אומר כמה לכתוב - זה לא מספר שמחפשים בטקסט.",
            },
            { type: "preface", text: "ועכשיו טקסט קצר ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "The city of Lakeport opened a new public pool in 2019. According to manager Helen Park, about 1,200 people swim there every week, and 300 children take lessons in the summer.",
              questions: [
                {
                  prompt: "According to Helen Park, how many people swim in the pool every week?",
                  options: ["300", "About 1,200", "2019", "About 120"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}אתם - שתי שאלות על פסקה: אחת עם מספר ואחת עם שם. מצאו את ה-Eye Catcher, ואז ענו." },
            {
              type: "self-check",
              text: "III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              prompt: "What percentage of people exercise outdoors now?",
              modelAnswer: "60%. (It increased from 15% to 60% - the number next to exercise outdoors, not 85% or 40%.)",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt: "According to Dr. Diallo, what does the project teach local people?",
              modelAnswer: "How to care for the trees.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"מספר בשאלה = GPS. שם בשאלה = כתובת."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. לא כל שאלה היא שאלת מספר או שם: קראו כל שאלה עד הסוף." },
            {
              type: "passage-mcq",
              text: "**THE LIBRARY ON WHEELS**\n\nI  In 2018, a teacher named Sofia Marin bought an old bus for 12,000 dollars. She wanted to bring books to small villages in the hills near Granada, where the nearest library was 40 kilometres away. The trip took 3 hours, and only 15 children came.\n\nII  Today, the bus visits 26 villages every month. It carries more than 4,000 books, and about 900 children use it regularly. According to Ms. Marin, the most popular books are comics and stories about animals. \"Children who never held a book now ask me for the next book,\" she says.\n\nIII  The project has also changed the villages. A study by Dr. Pablo Ruiz from the University of Seville found that reading scores in these schools went up by 18% in 2 years. Parents started borrowing books too, and in 2021 the bus added a section for adults.\n\nIV  The bus is not cheap to run. Fuel and repairs cost about 9,000 dollars a year, and most of the money comes from local shops and families. In 2023, the city of Granada gave the project official support: a new bus.\n\nV  Ms. Marin hopes to reach 50 villages by 2027. \"Every village deserves a library,\" she says, \"even if it has wheels.\"",
              questions: [
                {
                  prompt: "How much did Sofia Marin pay for the bus?",
                  options: ["9,000 dollars", "12,000 dollars", "4,000 dollars", "40 dollars"],
                  correctIndex: 1,
                },
                {
                  prompt: "According to Ms. Marin, what are the most popular books?",
                  options: ["Comics and stories about animals", "Books for adults", "Science books", "Books about Granada"],
                  correctIndex: 0,
                },
                {
                  prompt: "Where does most of the money for fuel and repairs come from?",
                  options: ["The city of Granada", "Local shops and families", "The University of Seville", "The children"],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**SCHOOLS ON THE WATER**\n\nI  In parts of Bangladesh, heavy rain floods many villages for 4 months every year, and children cannot walk to school. In 2002, an architect named Karim Hossain had an idea: if children cannot reach the school, the school can reach the children.\n\nII  He built a school on a boat. Today, 22 boat schools sail along the rivers, and each boat stops at 3 villages a day to collect students. According to Mr. Hossain, more than 2,500 children study on the boats every year.\n\nIII  The boats also have solar panels, so students can use laptops and the internet. Teacher Nadia Akter says the boats changed how parents think. \"Before, many parents kept their daughters at home,\" she explains. \"Now they see that school is safe.\"",
              questions: [
                {
                  prompt: "How many boat schools sail along the rivers today?",
                  options: ["3", "4", "22", "2,500"],
                  correctIndex: 2,
                },
                {
                  prompt: "Why can't children walk to school in some months?",
                  options: ["Because the school is too far away", "Because heavy rain floods their villages", "Because their parents keep them at home", "Because there are no roads"],
                  correctIndex: 1,
                },
                {
                  prompt: "According to Nadia Akter, what has changed?",
                  options: ["Students can use laptops on the boats", "Each boat stops at 3 villages a day", "Parents now see that school is safe", "More than 2,500 children study on the boats"],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nשם בשאלה = כתובת - על טקסט מוכר." },
            {
              type: "passage-mcq",
              text: "I  Every year, millions of young people choose to volunteer. A study found that young people who volunteer are 60% more likely to describe themselves as happy.\n\nII  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.\n\nIII  Results from 12 countries show that schools with volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches skills that no classroom can replace.",
              questions: [
                {
                  prompt: "According to Professor David Mills, what does helping others teach?",
                  options: ["How to feel less stressed", "Skills that no classroom can replace", "How to be happy", "How to work in 12 countries"],
                  correctIndex: 1,
                },
                {
                  prompt: "According to Dr. Okafor, how do teenagers who volunteer feel?",
                  options: ["Less stressed", "60% happier", "More focused in class", "More responsible"],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "mcq",
              prompt: "באילו שאלות יש שם שאומר לאן ללכת?\n\n1. \"What do we learn from paragraph I?\"\n2. \"According to Dr. Anna Klein, why do adults improve?\"\n3. \"Give TWO reasons from paragraph II.\"\n4. \"What does Professor David Mills argue about schools?\"",
              options: ["1 ו-3", "2 ו-4", "1 ו-4", "כולן"],
              correctIndex: 1,
              explanation: "\"Dr. Anna Klein\" ו-\"Professor David Mills\" - שמות = כתובות.",
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nתשובה פתוחה: שם ומספר." },
            {
              type: "self-check",
              text: 'II  One study found that adults who learned to swim later in life often became stronger swimmers. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."',
              prompt: '"According to Dr. Anna Klein, why do adult swimmers sometimes do better than children?" - כתבו ANSWER:',
              modelAnswer: "ANSWER: Because adults understand what the teacher explains and can correct their mistakes more quickly.",
            },
            {
              type: "self-check",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030. The project has already planted over 200 million trees in 15 countries.",
              prompt: 'השלימו מהטקסט: "The project has already planted over _______ trees in _______ countries."',
              modelAnswer: "200 million trees · 15 countries.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l06",
    section: "c-1",
    titleHe: "NOT - המילה הכי מסוכנת",
    titleEn: "Eye Catcher: NOT",
    required: ["l03"],
    requiredRounds: 4,
    position: { x: 0, y: 1020 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "המילה הכי מסוכנת בבחינה:\n\nNOT\n\n90% מהתלמידים שרואים NOT בשאלה עונים על השאלה ההפוכה. הם מחפשים מה נכון - במקום מה לא נכון.\nNOT משנה את כל השאלה.",
        },
        {
          type: "summary",
          title: "THE TOOL - NOT = ציד",
          lines: [
            'שאלה רגילה: "What do we learn?" ← מחפשים מה נכון.',
            'שאלה עם NOT: "Which is NOT true?" ← מחפשים מה לא נכון.',
            "כל שאר האפשרויות נכונות ומופיעות בטקסט. זו שלא - היא התשובה.",
          ],
        },
        {
          type: "preface",
          text: "WATCH IT\n\nהשאלה: Which of the following is NOT mentioned in the text?\n\ni) 30% of adults cannot swim ← מוזכר, פסקה I ✓\nii) Adults become stronger swimmers ← מוזכר, פסקה II ✓\niii) The cost of adult swimming classes ← לא מוזכר בכלל ✗\n\nהתשובה: iii. המחיר לא מוזכר.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "כמה משפטים בעברית. סמנו כל מילת שלילה במשפט.",
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "אף תלמיד לא הגיע לשיעור בזמן.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 2] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "שום מומחה לא תמך בהצעה החדשה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 2] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "המחקר לא מצא שום קשר בין שני הגורמים.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [1, 3] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. כמה משפטים. סמנו כל מילת שלילה.",
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The report found no evidence that the plan worked.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [3] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "Not one expert supported the new proposal.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "Nobody expected the results to be this bad.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0] }],
            },
            {
              type: "mcq",
              prompt:
                'ראיתם בשאלה "Which of the following is NOT true?". מה מחפשים?',
              options: [
                "את המשפט שנכון לפי הטקסט",
                "את המשפט שלא נכון או לא מופיע בטקסט",
                "את המשפט הכי חשוב בטקסט",
              ],
              correctIndex: 1,
              explanation:
                "NOT הופך את השאלה: שלוש אפשרויות נכונות, ומחפשים את היוצאת דופן.",
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "There was no plan and no budget for the project.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [2, 5] }],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "כמה פסקאות. סמנו כל מילת שלילה בפסקה." },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The city promised a new park, but nothing was built for years. There was no budget and no clear plan.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [7, 14, 17] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "Many people believe that money brings happiness, but the study found no clear link. People with high salaries were not happier than others.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [11, 19] }],
            },
            {
              type: "mcq",
              prompt: "קראתם שאלה מהר ולא שמתם לב ל-NOT. מה כנראה תבחרו?",
              options: [
                "את התשובה הנכונה, במקרה",
                "משפט נכון מהטקסט - וזו תשובה שגויה",
                "לא תספיקו לענות",
              ],
              correctIndex: 1,
              explanation:
                "בלי לראות NOT בוחרים משפט שנכון בטקסט, אבל השאלה ביקשה את ההפך. לכן מסמנים NOT לפני שעונים.",
            },
            { type: "preface", text: "זהירות ממילים שנראות כמו שלילה: another, noted, know הן לא שלילה. ושימו לב ל-n't (didn't) - זו כן שלילה." },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The team didn't win, but nobody was upset. Nothing could stop their fans, who never stopped singing. Another game is planned for next month, and the coach noted that the players know what went wrong.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [2, 5, 8, 14] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט באורך מבחן. לא מסמנים הכול: כל שאלה אומרת לכם מה לחפש. מוצאים את המילה, קוראים סביבה ועונים.\n{d:rtl}השעון רק מראה כמה זמן לקח - הוא לא משפיע על הציון." },
            {
              type: "passage-mcq",
              label: "רמת בחינה",
              timerKey: "hunt",
              text: "**THE STREET WITHOUT CARS**\n\nI  When the town of Brookfield closed its main street to cars in 2021, not everyone was happy. Shop owners were worried that no customers would come if they could not park near the shops. For the first few months, nobody was sure the plan would work.\n\nII  The town council did not give up. It built two new car parks outside the centre and added free buses every ten minutes. According to Mayor Tom Hughes, the goal was never to punish drivers. \"We did not want fewer visitors,\" he said. \"We wanted a centre where people could walk in quiet, clean air.\"\n\nIII  A year later, the results were surprising. The number of visitors did not fall. In fact, it rose by 15%. Cafes put tables in the street, and families came at weekends. Air pollution in the centre dropped, and there were no serious accidents on the main street all year. Local newspapers, which had not supported the plan at first, now called it a success.\n\nIV  Still, the change was not perfect for everyone. Some older residents said the buses were not always on time, and a few shops outside the centre lost customers. None of the council members expected these problems at the start. Today, the town is testing a second bus line, and the council says it will never reopen the street to cars. For now, the people of Brookfield do not seem to miss the traffic at all.",
              questions: [
                {
                  prompt: "Which of the following is NOT true about the results after one year?",
                  options: ["The number of visitors rose by 15%", "Air pollution in the centre dropped", "There were many serious accidents", "Cafes put tables in the street"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to Mayor Tom Hughes, what was NOT the goal of the plan?",
                  options: ["To punish drivers", "To make the centre quiet", "To have clean air", "To let people walk"],
                  correctIndex: 0,
                },
                {
                  prompt: "What problem did some older residents have?",
                  options: ["The buses were not always on time", "They could not find the shops", "The street was too noisy", "They had to pay for parking"],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף ⏱️ (רשות)\nאתגר: אותו טקסט, ועכשיו מסמנים כל מילת שלילה. השעון רץ - נסו לנצח את עצמכם." },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "**THE STREET WITHOUT CARS**\n\nI  When the town of Brookfield closed its main street to cars in 2021, not everyone was happy. Shop owners were worried that no customers would come if they could not park near the shops. For the first few months, nobody was sure the plan would work.\n\nII  The town council did not give up. It built two new car parks outside the centre and added free buses every ten minutes. According to Mayor Tom Hughes, the goal was never to punish drivers. \"We did not want fewer visitors,\" he said. \"We wanted a centre where people could walk in quiet, clean air.\"\n\nIII  A year later, the results were surprising. The number of visitors did not fall. In fact, it rose by 15%. Cafes put tables in the street, and families came at weekends. Air pollution in the centre dropped, and there were no serious accidents on the main street all year. Local newspapers, which had not supported the plan at first, now called it a success.\n\nIV  Still, the change was not perfect for everyone. Some older residents said the buses were not always on time, and a few shops outside the centre lost customers. None of the council members expected these problems at the start. Today, the town is testing a second bus line, and the council says it will never reopen the street to cars. For now, the people of Brookfield do not seem to miss the traffic at all.",
              dir: "ltr",
              timerKey: "sweep",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [18, 27, 34, 44, 56, 83, 89, 120, 148, 161, 177, 188, 201, 227, 240] },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "not-q",
    section: "c-1",
    titleHe: "NOT - תרגול שאלות",
    titleEn: "NOT: Practice",
    required: ["l06"],
    requiredRounds: 3,
    position: { x: 0, y: 1140 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עכשיו שהבנו איך למצוא את המילים, נבין איך להשתמש בהן לטובתנו",
        },
        {
          type: "summary",
          title: "THE TOOL - NOT = ציד",
          lines: [
            'שאלה רגילה: "What do we learn?" ← מחפשים מה נכון.',
            'שאלה עם NOT: "Which is NOT true?" ← מחפשים מה לא נכון.',
            "כל שאר האפשרויות נכונות ומופיעות בטקסט. זו שלא - היא התשובה.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "NOT לא מוסיף מידע - הוא הופך את הכיוון.\nרגיל: מצא מה נכון. עם NOT: מצא מה לא נכון.",
            },
            {
              type: "mcq",
              prompt: '"Which of the following is NOT true?" - מה המשימה?',
              options: [
                "למצוא את המשפט הנכון",
                "למצוא את המשפט שלא נכון / לא מופיע בטקסט",
                "למצוא את המשפט הכי חשוב",
              ],
              correctIndex: 1,
              explanation: "NOT הופך את השאלה. מחפשים את היוצאת דופן.",
            },
            {
              type: "mcq",
              prompt:
                'Text: "The park has a lake and a playground. Dogs are not allowed."\n\nWhich IS true about the park?',
              options: [
                "It has a swimming pool",
                "It has a playground",
                "It has a cafe",
                "Dogs are allowed",
              ],
              correctIndex: 1,
              explanation:
                'רק "playground" מגובה בטקסט. השאר לא מופיעים או סותרים אותו.',
            },
            {
              type: "mcq",
              prompt: "אותו טקסט. עכשיו: Which is NOT true about the park?",
              options: [
                "It has a lake",
                "It has a playground",
                "Dogs are welcome",
                "It has a lake and a playground",
              ],
              correctIndex: 2,
              explanation:
                'שלוש נכונות ומופיעות בטקסט. "Dogs are welcome" סותר את "Dogs are not allowed" - זו התשובה.',
            },
            {
              type: "mcq",
              prompt: "בשאלת NOT עם 4 אפשרויות: כמה מהן בדרך כלל נכונות?",
              options: ["אחת", "שתיים", "שלוש", "ארבע"],
              correctIndex: 2,
              explanation: "שלוש מופיעות בטקסט. הרביעית - לא. היא התשובה.",
            },
            {
              type: "mcq",
              prompt: "קראתם מהר ולא שמתם לב ל-NOT. מה תבחרו?",
              options: [
                "את התשובה הנכונה במקרה",
                "משפט נכון מהטקסט - וזו תשובה שגויה",
                "לא תספיקו לענות",
              ],
              correctIndex: 1,
              explanation:
                "בלי לראות NOT בוחרים משפט נכון. אבל NOT ביקש בדיוק ההפך - התשובה נפסלת.",
            },
            { type: "preface", text: "ועכשיו טקסט קצר ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "The new bridge in Oakton opened in May. It was not finished on time, and no cars were allowed on it for the first week. Cyclists, however, could use it from the first day.",
              questions: [
                {
                  prompt:
                    "Which of the following is NOT true about the bridge?",
                  options: [
                    "It opened in May",
                    "It was finished on time",
                    "Cars could not use it in the first week",
                    "Cyclists could use it from the first day",
                  ],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}אתם - שאלת NOT על פיסקה. בהצלחה!",
            },
            {
              type: "passage-mcq",
              text: "III  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.",
              questions: [
                {
                  prompt:
                    "Which is NOT true about adult swimming classes? (paragraph III)",
                  options: [
                    "Classes meet once or three times a week",
                    "Classes are free for adults over 30",
                    "Adults who practice make good progress",
                    "Progress takes less than two months",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "mcq",
              prompt: "פספסתם את המילה NOT בשאלה. מה יקרה?",
              options: [
                "לא יקרה כלום - התשובה זהה",
                "תבחרו משפט נכון, והתשובה תיפסל",
                "תקבלו חצי ניקוד",
                "השאלה תתבטל",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"ראיתי NOT? אני ציד - מחפש מה לא נכון."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט חדש שלא ראיתם. לא כל שאלה היא שאלת NOT: קראו כל שאלה עד הסוף, ובשאלת NOT בדקו כל אפשרות מול הטקסט.",
            },
            {
              type: "passage-mcq",
              text: "**THE STREET WITHOUT CARS**\n\nI  When the town of Brookfield closed its main street to cars in 2021, not everyone was happy. Shop owners were worried that no customers would come if they could not park near the shops. For the first few months, nobody was sure the plan would work.\n\nII  The town council did not give up. It built two new car parks outside the centre and added free buses every ten minutes. According to Mayor Tom Hughes, the goal was never to punish drivers. \"We did not want fewer visitors,\" he said. \"We wanted a centre where people could walk in quiet, clean air.\"\n\nIII  A year later, the results were surprising. The number of visitors did not fall. In fact, it rose by 15%. Cafes put tables in the street, and families came at weekends. Air pollution in the centre dropped, and there were no serious accidents on the main street all year. Local newspapers, which had not supported the plan at first, now called it a success.\n\nIV  Still, the change was not perfect for everyone. Some older residents said the buses were not always on time, and a few shops outside the centre lost customers. None of the council members expected these problems at the start. Today, the town is testing a second bus line, and the council says it will never reopen the street to cars. For now, the people of Brookfield do not seem to miss the traffic at all.",
              questions: [
                {
                  prompt: "Which of the following did the town council NOT do?",
                  options: ["Built two new car parks", "Added free buses", "Reopened the street to cars", "Started testing a second bus line"],
                  correctIndex: 2,
                },
                {
                  prompt: "Which of the following is NOT mentioned as a problem?",
                  options: ["The buses were not always on time", "Some shops outside the centre lost customers", "Parking in the centre became more expensive", "Shop owners were worried at first"],
                  correctIndex: 2,
                },
                {
                  prompt: "By how much did the number of visitors rise?",
                  options: ["5%", "15%", "50%", "It did not rise"],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**PHONES IN THE LOCKER**\n\nI  In 2023, Hillview High School decided to ban mobile phones during the school day. Students had to leave their phones in lockers from 8:00 until 3:00. At first, many parents were worried because they could not call their children.\n\nII  According to the head teacher, Ms. Laura Chen, the results surprised everyone. Students talked to each other more during breaks, and fewer students were late to class. However, Ms. Chen says the ban did not solve every problem: some students still used their phones in the toilets.\n\nIII  A survey at the end of the year found that 70% of students felt calmer without their phones. Not all students agreed, though. Some said they missed listening to music on the bus.\n\nIV  Other schools in the area are now watching Hillview closely. Two of them plan to try a similar ban next year, with one change: students will keep their phones in their bags, switched off. \"We trust our students,\" says one head teacher. \"We just want them to look up from their screens.\" Ms. Chen says she will share her results with any school that asks.",
              questions: [
                {
                  prompt:
                    "Which of the following is NOT true about the phone ban?",
                  options: [
                    "Phones were kept in lockers during the day",
                    "Parents were worried at first",
                    "Students could use their phones during breaks",
                    "Some students still used phones in the toilets",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "According to Ms. Chen, what happened after the ban? (paragraph II)",
                  options: [
                    "Students got higher grades",
                    "Fewer students were late to class",
                    "Parents called the school more often",
                    "All problems were solved",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "Which of the following is NOT mentioned in paragraph III?",
                  options: [
                    "70% of students felt calmer",
                    "Not all students agreed with the ban",
                    "Teachers also felt calmer",
                    "Some students missed music on the bus",
                  ],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 🌟 (רשות)\nעוד שאלת NOT על טקסט מוכר.",
            },
            {
              type: "passage-mcq",
              text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."\n\nIII  Adult swimming classes are now available in most cities. According to instructors, adults who practice regularly usually make good progress in less than two months.',
              questions: [
                {
                  prompt:
                    "Which of the following is NOT true about adult learners?",
                  options: [
                    "Adults feel embarrassed about not swimming",
                    "Adults correct their mistakes quickly",
                    "Adults prefer to learn in private",
                    "Adults are not afraid to ask questions",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                "שאלת NOT עם ארבע אפשרויות. מצאתם הוכחה בטקסט ל-i, ל-ii ול-iv. מה התשובה?",
              options: ["i", "ii", "iii", "iv"],
              correctIndex: 2,
              explanation: "iii - היחידה בלי הוכחה. שלוש האחרות מוזכרות בטקסט.",
            },
            {
              type: "mcq",
              prompt:
                '"Which does NOT appear in paragraph I?" - בודקים רק את פסקה I.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation:
                "נכון. כשמצוינת פסקה - בודקים רק אותה, לא את שאר הטקסט.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 💎 (רשות)\nשאלת NOT על טקסט Green Africa.",
            },
            {
              type: "passage-mcq",
              text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.\n\nII  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
              questions: [
                {
                  prompt:
                    "Which of the following is NOT mentioned in the text?",
                  options: [
                    "Birds returned to areas with trees",
                    "Rivers began to flow again",
                    "The project cost 500 million dollars",
                    "85% of trees survive when local people help",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "self-check",
              prompt: "בשתי מילים: מה עושים כשרואים NOT בשאלה?",
              modelAnswer: "ציד - מחפשים מה שגוי או מה שלא מוזכר.",
            },
            {
              type: "self-check",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              prompt:
                '"Which does Dr. Okafor NOT say about volunteering programmes?" - כתבו את תהליך הבדיקה שלכם בשלושה שלבים.',
              modelAnswer:
                "1-סורק מה בדיוק Dr. Okafor אמרה. 2-בודק כל אפשרות מול הטקסט. 3-האפשרות שאין לה הוכחה = התשובה.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "l07",
    section: "c-1",
    titleHe: "most / only - תשובה אחת",
    titleEn: "Key Limiters",
    required: ["l03"],
    requiredRounds: 4,
    position: { x: 100, y: 1020 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: '"According to Dr. Okafor, what is the MOST effective type of volunteering?"\n\nתלמיד קרא את הטקסט. מצא שני סוגי התנדבות. כתב את שניהם.\nשניהם נכונים. שניהם מהטקסט.\nציון: 0 נקודות.',
        },
        {
          type: "preface",
          text: "מה קרה?\n\nהמילה MOST ביקשה אחד בלבד - הכי יעיל. הוא כתב שניים, ולכן לא ענה על ה-MOST.\n\nTHE MOST = הכי, אחד. לא שניים.\nTHE ONLY = רק אחד. לא שניים.\n\nשימו לב: most בלי the (\"most students\") = רוב. זה לא מגביל לתשובה אחת.",
        },
        {
          type: "summary",
          title: "THE TOOL - מילות הגבלה",
          lines: [
            'the most - "The MOST effective..." ← לא כולן, רק הכי טובה.',
            'the only / the main - "The ONLY reason..." ← סיבה אחת, לא סיבות אחרות.',
            'most בלי the - "most students" ← רוב התלמידים. לא מגביל לתשובה אחת.',
            "מצאו בטקסט את הדבר הספציפי הזה. אל תוסיפו פרטים נוספים.",
          ],
        },
        {
          type: "preface",
          text: "השאלה: **According to Dr. Okafor, what is the most effective type of volunteering programme?**\n\n🟢 קודם מבינים מה מחפשים: **most effective** = הכי יעיל.\nלא צריך לחפש את כל סוגי ההתנדבות. צריך למצוא **רק את הסוג הכי יעיל**.\n\n📍 בפסקה II כתוב:\n**“The most effective programmes bring young people face to face with the people they help.”**\n\n✅ לכן התשובה:\n**Programmes that bring young people face to face with the people they help.**\n\nוזהו. לא מוסיפים עוד סוגים. לא כותבים מידע שלא ביקשו.\n\n⭐ הכלל: **השאלה ביקשה ONE BEST / MOST EFFECTIVE → נותנים תשובה אחת מדויקת.**",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "כמה משפטים בעברית. סמנו כל מילת הגבלה - רק, כל, רוב, מעטים, תמיד.",
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "רק שני חברים בוועדה תמכו בהצעה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "החוקר טען כי רק גורם אחד קובע.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [3] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "כל השאר דרשו דיון נוסף בנושא.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. כמה משפטים. סמנו כל מילת הגבלה.",
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "All the others were against the new proposal.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Most students are satisfied with the new schedule.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "It is always the same children who come.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [2] }],
            },
            {
              type: "mcq",
              prompt: 'ראיתם בשאלה "What is the ONLY reason...?". כמה תשובות כותבים?',
              options: [
                "אחת - הסיבה שהטקסט מציין",
                "שתיים - ליתר ביטחון",
                "כמה שיותר - כל סיבה מהטקסט",
              ],
              correctIndex: 0,
              explanation:
                "the only = רק אחת. סיבה נוספת לא עונה על השאלה, ואם היא שגויה - מאבדים נקודות.",
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Some of the poorest regions cut pollution more than wealthy ones.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "כמה פסקאות. סמנו כל מילת הגבלה בפסקה." },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "The researcher stressed that only one factor really matters: motivation. All the other factors, he said, have some effect on the outcome.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [4, 10, 17] },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Some of the poorest regions have cut pollution more than any wealthy state. Every country has some power to act, she says.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [0, 13, 16] },
              ],
            },
            {
              type: "mcq",
              prompt: '"Most students walk to school." - מה פירוש most כאן?',
              options: [
                "רוב התלמידים",
                "התלמיד הכי טוב",
                "תלמיד אחד בלבד",
                "כל התלמידים",
              ],
              correctIndex: 0,
              explanation:
                'most + שם עצם = רוב. רק "the most" (הכי) מבקש דבר אחד. "all" = כולם, וזה כבר יותר מרוב.',
            },
            { type: "preface", text: "זהירות ממילים שנראות כמו הגבלה: almost ו-everyone הן לא מילות הגבלה מהרשימה." },
            {
              type: "mark-all",
              instruction: "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Almost everyone in the class passed. Only a few students failed, and most of them took the test again. All of them passed the second time, says the teacher, who always gives extra help.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [6, 8, 12, 19, 30] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט באורך מבחן. לא מסמנים הכול: כל שאלה אומרת לכם מה לחפש. מוצאים את המילה, קוראים סביבה ועונים.\n{d:rtl}השעון רק מראה כמה זמן לקח - הוא לא משפיע על הציון." },
            {
              type: "passage-mcq",
              label: "רמת בחינה",
              timerKey: "hunt",
              text: "**BIKES FOR EVERYONE**\n\nI  In 2019, the city of Ravenna started a bike programme. For only one euro a day, people could take a bike from one of 40 stations and leave it at any other station. At first, few people used the bikes, and some residents said the idea would never work.\n\nII  Two years later, the picture is different. Most stations are busy every morning, and the bikes are used about 6,000 times a day. Students are the biggest group of users, but some older people ride them too. According to the city, all the bikes are checked every week, so they are always safe to ride.\n\nIII  The programme has also changed the streets. There are fewer cars in the centre, and the air is cleaner. Shop owners, who were worried at first, now say that most of their customers arrive by bike or on foot.\n\nIV  Not everything is perfect. Some stations are always empty in the evening, because everyone rides into the centre in the morning. City planner Elena Russo says the main problem is moving bikes back to the right stations. \"We have only two trucks for this job,\" she explains. \"We need at least five.\"",
              questions: [
                {
                  prompt: "According to Elena Russo, what is the main problem?",
                  options: ["Moving bikes back to the right stations", "There are too few bikes", "The bikes are not safe", "Students do not use the bikes"],
                  correctIndex: 0,
                },
                {
                  prompt: "Who is the biggest group of users?",
                  options: ["Older people", "Shop owners", "Students", "Tourists"],
                  correctIndex: 2,
                },
                {
                  prompt: "How much does it cost to use a bike?",
                  options: ["Nothing", "Only one euro a day", "Six euros a week", "One euro an hour"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף ⏱️ (רשות)\nאתגר: אותו טקסט, ועכשיו מסמנים כל מילת הגבלה. השעון רץ - נסו לנצח את עצמכם." },
            {
              type: "mark-all",
              instruction: "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "**BIKES FOR EVERYONE**\n\nI  In 2019, the city of Ravenna started a bike programme. For only one euro a day, people could take a bike from one of 40 stations and leave it at any other station. At first, few people used the bikes, and some residents said the idea would never work.\n\nII  Two years later, the picture is different. Most stations are busy every morning, and the bikes are used about 6,000 times a day. Students are the biggest group of users, but some older people ride them too. According to the city, all the bikes are checked every week, so they are always safe to ride.\n\nIII  The programme has also changed the streets. There are fewer cars in the centre, and the air is cleaner. Shop owners, who were worried at first, now say that most of their customers arrive by bike or on foot.\n\nIV  Not everything is perfect. Some stations are always empty in the evening, because everyone rides into the centre in the morning. City planner Elena Russo says the main problem is moving bikes back to the right stations. \"We have only two trucks for this job,\" she explains. \"We need at least five.\"",
              dir: "ltr",
              timerKey: "sweep",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [15, 39, 45, 61, 65, 85, 95, 100, 105, 139, 154, 157, 189] },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "limiters-q",
    section: "c-1",
    titleHe: "most / only - תרגול שאלות",
    titleEn: "Key Limiters: Practice",
    required: ["l07"],
    requiredRounds: 3,
    position: { x: 100, y: 1140 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עכשיו שלמדנו לזהות כמו צלפים את המילים שלנו, נבין איך להשתמש בהן במבחן לטובתנו",
        },
        {
          type: "summary",
          title: "THE TOOL - מילות הגבלה",
          lines: [
            'the most - "The MOST effective..." ← לא כולן, רק הכי טובה.',
            'the only / the main - "The ONLY reason..." ← סיבה אחת, לא סיבות אחרות.',
            'most בלי the - "most students" ← רוב התלמידים. לא מגביל לתשובה אחת.',
            "מצאו בטקסט את הדבר הספציפי הזה. אל תוסיפו פרטים נוספים.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "the most / the only / the main בשאלה = מחפשים דבר אחד מסוים.\nmost לבד = רוב. קוראים את השאלה עד הסוף.",
            },
            {
              type: "mcq",
              prompt: '"What is THE MOST effective method?" - כמה תשובות כותבים?',
              options: [
                "שתיים - כדי לכסות אפשרויות",
                "אחת בלבד - הכי יעילה",
                "שלוש - כדי לא להחמיץ",
              ],
              correctIndex: 1,
              explanation: "the most = אחת מסוימת. לא כולן - רק הכי יעילה.",
            },
            {
              type: "mcq",
              prompt: '"Most students walk to school." - האם most כאן מגביל לתשובה אחת?',
              options: [
                'לא - most + שם עצם = רוב. מגבילות רק the most / the only / the main',
                "כן - כל most בשאלה = תשובה אחת",
                "כן - כי כתוב students ברבים",
                "תלוי באורך המשפט",
              ],
              correctIndex: 0,
              explanation:
                '"most students" = רוב התלמידים. זה מידע על כמות, לא בקשה לתשובה אחת.',
            },
            {
              type: "mcq",
              prompt: "מה משותף ל-the most, ל-the only ול-the main?",
              options: [
                "כולן מילות ניגוד",
                "כולן מילות שלילה",
                "כולן מבקשות דבר אחד מסוים מהטקסט",
                "כולן מילות סיבה",
              ],
              correctIndex: 2,
              explanation:
                "the most = הכי · the only = רק · the main = עיקרי. כולן מבקשות תשובה אחת.",
            },
            { type: "preface", text: "ועכשיו טקסט קצר ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "The school library is open every day from 8:00 to 4:00. Most students use it during lunch, but only the computer room stays open after 4:00.",
              questions: [
                {
                  prompt: "What is the only part of the library that is open after 4:00?",
                  options: [
                    "The whole library",
                    "The reading room",
                    "The computer room",
                    "The lunch room",
                  ],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}אתם - שאלה עם the main על פסקה. שימו לב למילת ההגבלה בשאלה.\n\nהשאלה: According to the survey, what is the main reason teenagers stop reading?",
            },
            {
              type: "self-check",
              text: "II  Many teenagers say they do not have time to read. However, a survey of 2,000 students found that the main reason they stop reading is not time but phones. Most of them spend over three hours a day on social media, and only a few read more than one book a month.",
              prompt: "כתבו תשובה אחת בלבד, במילים של הטקסט.",
              modelAnswer: "Phones. (לא time - הטקסט אומר not time but phones)",
            },
            {
              type: "mcq",
              prompt: "כתבתם שתי סיבות לשאלה עם the main reason. מה עלול לקרות?",
              options: [
                "תקבלו ניקוד על שתיהן",
                "הבודק יבחר את הטובה מביניהן",
                "אם אחת מהן שגויה - תאבדו נקודות. נדרשה סיבה אחת",
                "לא משנה, העיקר שהתשובה מהטקסט",
              ],
              correctIndex: 2,
              explanation:
                "the main = סיבה אחת. כאן time היא בדיוק הסיבה שהטקסט שולל - מי שכותב גם אותה טועה.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"the most / the only / the main = תשובה אחת. most לבד = רוב."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. לא כל שאלה היא שאלת הגבלה: קראו כל שאלה עד הסוף.",
            },
            {
              type: "passage-mcq",
              text: "**BIKES FOR EVERYONE**\n\nI  In 2019, the city of Ravenna started a bike programme. For only one euro a day, people could take a bike from one of 40 stations and leave it at any other station. At first, few people used the bikes, and some residents said the idea would never work.\n\nII  Two years later, the picture is different. Most stations are busy every morning, and the bikes are used about 6,000 times a day. Students are the biggest group of users, but some older people ride them too. According to the city, all the bikes are checked every week, so they are always safe to ride.\n\nIII  The programme has also changed the streets. There are fewer cars in the centre, and the air is cleaner. Shop owners, who were worried at first, now say that most of their customers arrive by bike or on foot.\n\nIV  Not everything is perfect. Some stations are always empty in the evening, because everyone rides into the centre in the morning. City planner Elena Russo says the main problem is moving bikes back to the right stations. \"We have only two trucks for this job,\" she explains. \"We need at least five.\"",
              questions: [
                {
                  prompt: "According to the city, how often are all the bikes checked?",
                  options: ["Every day", "Every week", "Only once a year", "Every morning"],
                  correctIndex: 1,
                },
                {
                  prompt: "What do most shop owners now say?",
                  options: ["All of their customers come by car", "Most of their customers arrive by bike or on foot", "Only a few customers come by bike", "They are still worried"],
                  correctIndex: 1,
                },
                {
                  prompt: "How many trucks does Elena Russo say the city needs?",
                  options: ["Two", "At least five", "Forty", "Six"],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**THE TOOL LIBRARY**\n\nI  In 2020, a small group of neighbours in Lindale opened a library with no books. Instead, it lends tools: drills, ladders, garden tools and even sewing machines. Members pay only ten dollars a year, and they can borrow up to three tools every week.\n\nII  Most members are young families who cannot afford to buy expensive tools. According to the manager, Tom Reyes, the most popular item is the electric drill. \"Some people borrow a drill, use it for ten minutes, and bring it back the same day,\" he says.\n\nIII  The library is run by volunteers, and only two of them are paid. Mr. Reyes says the main problem is space: the library has more tools than shelves. Next year, it plans to move to a bigger building near the train station.\n\nIV  The idea is spreading. Since 2022, three more tool libraries have opened in nearby towns, and all of them use the same rules as Lindale. Mr. Reyes visits each new library to help the volunteers get started. \"Most people only need a ladder twice a year,\" he says. \"Why should every family buy one?\" He hopes that one day every town in the country will have a library like his.",
              questions: [
                {
                  prompt: "According to paragraph II, what is the most popular item in the library?",
                  options: [
                    "Ladders",
                    "Sewing machines",
                    "The electric drill",
                    "Garden tools",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "According to paragraph I, how much does it cost to be a member?",
                  options: [
                    "Ten dollars a week",
                    "Ten dollars a year",
                    "Three dollars a week",
                    "Nothing - it is free",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "According to Mr. Reyes, what is the main problem of the library?",
                  options: [
                    "It does not have enough volunteers",
                    "Members do not bring the tools back",
                    "It does not have enough space for its tools",
                    "It is far from the train station",
                  ],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 🌟 (רשות)\nעוד שאלת the most על טקסט מוכר.",
            },
            {
              type: "passage-mcq",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              questions: [
                {
                  prompt: "According to Dr. Okafor, what is the most effective type of volunteering?",
                  options: [
                    "All types of volunteering are effective",
                    "Programmes that bring young people face to face with the people they help",
                    "Programmes that help teenagers feel less stressed",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                'באילו שאלות יש מילת הגבלה שמבקשת תשובה אחת?\n\n1. "What is the only country mentioned?"\n2. "What do we learn from paragraph I?"\n3. "What is the main reason most trees die?"\n4. "Give TWO reasons from paragraph III."',
              options: ["1 ו-3", "2 ו-4", "1 ו-4", "רק ב-3"],
              correctIndex: 0,
              explanation:
                '"the only" בשאלה 1 ו-"the main" בשאלה 3. שימו לב: "most trees" בשאלה 3 = רוב העצים - זה לא מה שמגביל אותה.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 💎 (רשות)\nשאלה פתוחה על טקסט Green Africa.",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt:
                '"According to Dr. Diallo, why do most trees die?" - כתבו ANSWER:',
              modelAnswer: "ANSWER: Because nobody looks after them.",
            },
            {
              type: "self-check",
              prompt:
                'מה ההבדל בין "the most" לבין "most" בשאלה? תנו דוגמה.',
              modelAnswer:
                '"What is the most common reason?" - the most = סיבה אחת, הכי נפוצה. "Why do most trees die?" - most = רוב העצים; השאלה שואלת מה קורה לרובם.',
            },
          ],
        },
      ],
    },
  },
  {
    id: "l08",
    section: "c-1",
    titleHe: "however / but - סימון בטקסט",
    titleEn: "Contrast Words",
    required: ["n-221188d1"],
    requiredRounds: 4,
    position: { x: 0, y: 1370 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'סיטואציה מהבחינה:\n\n"What do experts say about people who cannot swim?"\n\nהתלמיד קרא: "Many people cannot swim. However, experts say it is never too late."\nהוא כתב: "Many people cannot swim."\nציון: 0 נקודות.',
        },
        {
          type: "preface",
          text: 'מה קרה?\n\nהוא ענה על החצי השגוי של המשפט.\nhowever = פנייה. מה שאחריו הוא הנקודה האמיתית.\n\nהנקודה כאן: "it is never too late" - לא "many people cannot swim".',
        },
        {
          type: "summary",
          title: "THE TOOL - however / but",
          lines: [
            "לפני however: מידע כללי, רקע, בעיה.",
            "אחרי however: הנקודה החשובה. הסיפור האמיתי.",
            "however מסמן את הנקודה של הכותב, אבל עונים על מה שהשאלה שואלת: לפעמים התשובה דווקא לפניו.",
          ],
        },
        {
          type: "steps",
          steps: [
            "WATCH IT - השאלה: What does Dr. Okafor say about different types of volunteering?",
            "מחפשים however בפסקה II.",
            '"However, not all types of volunteering produce the same results."',
            "מה בא אחרי however? זו התשובה: Not all types of volunteering produce the same results.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "כמה משפטים בעברית. סמנו את מילת הניגוד במשפט.",
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "הטקסט טען שהתוכנית תיכשל, אך התוצאות הפתיעו את כולם.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [4] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "המורה ציפתה לכישלון. לעומת זאת, כל התלמידים עברו.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [3, 4] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "התוכנית נשמעה טובה על הנייר, אך בפועל היא נכשלה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [5] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "המנהל ציפה לירידה במספרים. אולם הנתונים הראו עלייה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [4] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. כמה משפטים. סמנו את מילת הניגוד.",
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "The budget was small, yet the team finished on time.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [4] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "Although the weather was bad, the event was not cancelled.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "The company lost money in its first year. Nevertheless, it kept growing.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [8] }],
            },
            {
              type: "mcq",
              prompt:
                '"The test was hard. However, most students passed." - מה הנקודה של הכותב?',
              options: [
                '"The test was hard"',
                '"most students passed"',
                "שתיהן חשובות באותה מידה",
              ],
              correctIndex: 1,
              explanation:
                "however מסמן פנייה: לפניו הרקע (המבחן היה קשה), ואחריו הנקודה של הכותב (רוב התלמידים עברו).",
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "Although the city is small, it has a famous university.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [0] }],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "כמה פסקאות. סמנו את מילת הניגוד בפסקה." },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "The report warned that costs would rise sharply. Yet the final budget stayed almost the same as planned.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [8] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the paragraph.",
              text: "The city promised a new park, but nothing was built for years. Although residents complained often, the council took no action.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [6, 12] },
              ],
            },
            {
              type: "mcq",
              prompt:
                'השאלה: "What did the city promise?"\nהטקסט: "The city promised a new park, but nothing was built for years."\nאיפה התשובה?',
              options: [
                "לפני but - שם כתוב מה העירייה הבטיחה",
                "אחרי but - התשובה תמיד שם",
                "התשובה לא מופיעה בטקסט",
              ],
              correctIndex: 0,
              explanation:
                "but מסמן את הנקודה של הכותב, אבל השאלה שואלת מה הבטיחו - וזה כתוב לפני but. תמיד עונים על מה שהשאלה שואלת.",
            },
            { type: "preface", text: "זהירות ממילים שנראות כמו ניגוד: butter היא לא but, ו-because היא סיבה - לא ניגוד." },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "The cafe sells fresh bread and butter. Although it is small, it is always full. Some customers wait for an hour, yet they never complain. However, the owner will not open a second cafe, because she wants to know every customer by name.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [7, 21, 25] },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט באורך מבחן. לא מסמנים הכול: כל שאלה אומרת לכם מה לחפש. מוצאים את המילה, קוראים סביבה ועונים.\n{d:rtl}השעון רק מראה כמה זמן לקח - הוא לא משפיע על הציון." },
            {
              type: "passage-mcq",
              label: "רמת בחינה",
              timerKey: "hunt",
              text: "**THE FOUR-DAY SCHOOL WEEK**\n\nI  In 2019, a group of schools in the Clearwater district tried something unusual: a four-day school week. Students came to school from Monday to Thursday, but each day was one hour longer. The district hoped to save money on buses and heating. Many parents were worried at first. They thought their children would fall behind. However, the first results were better than expected.\n\nII  According to the district report, attendance rose by 8% in the first year. Teachers also said they had more time to plan their lessons. Although some students found the longer days tiring, most of them said they enjoyed the free Fridays. Some used the extra day for sports or part-time jobs, while others simply rested. Test scores in maths and reading stayed about the same, but teachers noticed that students were more focused on Mondays.\n\nIII  Yet the change was not easy for every family. Parents who worked on Fridays had to find someone to look after younger children. Some families paid for day camps, but others could not afford them. The district tried to help by opening school libraries on Fridays. Nevertheless, only a few students used them.\n\nIV  Today, the Clearwater schools still use the four-day week. Although the district is happy with the results, it plans to review the programme every two years. Experts say the idea could work in other places, but only if schools listen to parents before they make the change.",
              questions: [
                {
                  prompt: "According to paragraph I, what did many parents think at first?",
                  options: ["That the results would be better than expected", "That their children would fall behind", "That the buses would be cheaper", "That teachers would leave"],
                  correctIndex: 1,
                },
                {
                  prompt: "According to paragraph II, how did most students feel about the free Fridays?",
                  options: ["They found them tiring", "They enjoyed them", "They used them for school work", "They wanted to stay in school"],
                  correctIndex: 1,
                },
                {
                  prompt: "What did the district do to help families?",
                  options: ["It paid for day camps", "It opened school libraries on Fridays", "It made the school days shorter", "It gave parents Fridays off"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף ⏱️ (רשות)\nאתגר: אותו טקסט, ועכשיו מסמנים כל מילת ניגוד. השעון רץ - נסו לנצח את עצמכם." },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "**THE FOUR-DAY SCHOOL WEEK**\n\nI  In 2019, a group of schools in the Clearwater district tried something unusual: a four-day school week. Students came to school from Monday to Thursday, but each day was one hour longer. The district hoped to save money on buses and heating. Many parents were worried at first. They thought their children would fall behind. However, the first results were better than expected.\n\nII  According to the district report, attendance rose by 8% in the first year. Teachers also said they had more time to plan their lessons. Although some students found the longer days tiring, most of them said they enjoyed the free Fridays. Some used the extra day for sports or part-time jobs, while others simply rested. Test scores in maths and reading stayed about the same, but teachers noticed that students were more focused on Mondays.\n\nIII  Yet the change was not easy for every family. Parents who worked on Fridays had to find someone to look after younger children. Some families paid for day camps, but others could not afford them. The district tried to help by opening school libraries on Fridays. Nevertheless, only a few students used them.\n\nIV  Today, the Clearwater schools still use the four-day week. Although the district is happy with the results, it plans to review the programme every two years. Experts say the idea could work in other places, but only if schools listen to parents before they make the change.",
              dir: "ltr",
              timerKey: "sweep",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [30, 60, 93, 120, 134, 145, 174, 191, 208, 234] },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "l09",
    section: "c-1",
    titleHe: "שאלות אמריקאיות",
    titleEn: "Multiple Choice",
    required: ["n-b46b7e2b"],
    requiredRounds: 3,
    position: { x: 0, y: 1620 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'הטעות הנפוצה:\n"התלמיד קורא אפשרות i. נשמעת טוב. מסמן. אחרי הבחינה מתברר ש-i הייתה שגויה."\n\nהדרך הנכונה:\n"קוראים את כל 4 האפשרויות. חוצים את השגויות. מוצאים הוכחה בפסקה הנכונה. עונים."',
        },
        {
          type: "summary",
          title: "THE TOOL - ארבעה צעדים",
          lines: [
            "1 · קראו את כל 4 האפשרויות לפני שחוזרים לטקסט.",
            "2 · חצו כל אפשרות שסותרת את הטקסט - או שנכונה אבל לא קשורה לשאלה.",
            "3 · חזרו לטקסט ומצאו הוכחה בפסקה הנכונה.",
            "4 · ענו - תשובה אחת בלבד.",
          ],
        },
        {
          type: "summary",
          title: "שני סוגי מסיחים",
          lines: [
            'סוג א׳ - סותר את הטקסט. הטקסט: "without payment" ← "Volunteers receive payment" ← חצו.',
            "סוג ב׳ - נכון, אבל עונה על שאלה אחרת. השאלה על פסקה I, האפשרות מפסקה III ← חצו.",
            "הכלל: נכון + לא קשור לשאלה = שגוי.",
          ],
        },
        {
          type: "preface",
          text: 'כלל זהב ל-"What do we learn from paragraph X?"\n\nלכו רק לפסקה X. אל תקראו פסקאות אחרות.\nהשאלה מגבילה אתכם לפסקה אחת. כל מידע מפסקה אחרת = שגוי, גם אם הוא נכון בטקסט.\n\n⚠️ אין לכם הוכחה בפסקה הנכונה? אל תענו. חזרו לטקסט.\n🚦 ולפני שעונים - בדקו רמזור. רק ירוק = עונים.',
        },
        {
          type: "preface",
          text: 'WATCH IT\n\nהשאלה: What do we learn from paragraph I about young volunteers?\n\ni) Volunteers receive payment ← סוג א׳: סותר את "without payment".\nii) Young volunteers are happier ← ✓ הוכחה בפסקה I: "60% more likely to be happy".\niii) Researchers expected volunteering to help ← סוג א׳: הטקסט אומר "Researchers were surprised".\niv) Schools that volunteer have better results ← סוג ב׳: נכון, אבל זה מפסקה III.\n\nהתשובה: ii.',
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "ארבעה צעדים: קוראים את כל 4 האפשרויות ← חוצים ← מוצאים הוכחה בפסקה הנכונה ← עונים." },
            {
              type: "mcq",
              prompt: "בשאלה אמריקאית - מה עושים לפני שחוזרים לטקסט?",
              options: ["מסמנים את האפשרות הראשונה שנראית טוב", "קוראים את כל 4 האפשרויות", "קוראים שוב את כל הטקסט"],
              correctIndex: 1,
              explanation: "צעד 1: קוראים את כל ארבע האפשרויות. אחר כך חוצים, ורק אז מחפשים הוכחה.",
            },
            {
              type: "mcq",
              prompt: "אפשרות נכונה לפי הטקסט, אבל מפסקה אחרת מזו שבשאלה. מה עושים איתה?",
              options: ["בוחרים בה - היא נכונה", "חוצים - נכון + לא קשור לשאלה = שגוי (מסיח סוג ב׳)", "משאירים אותה לסוף"],
              correctIndex: 1,
              explanation: "זה מסיח מסוג ב׳: נכון בטקסט, אבל לא עונה על השאלה. חוצים.",
            },
            {
              type: "mcq",
              prompt: "מצאתם הוכחה לשתי אפשרויות. מה עושים?",
              options: ["מסמנים את הראשונה שמצאנו", "מסמנים את האחרונה שמצאנו", "חוזרים לטקסט - יש תשובה אחת, אז אחת מהן לא באמת עונה על השאלה"],
              correctIndex: 2,
              explanation: "בשאלה אמריקאית יש תמיד תשובה אחת. שתי \"הוכחות\" = אחת מהן לא עונה בדיוק על מה ששאלו.",
            },
            { type: "preface", text: "ועכשיו טקסט ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "I  Every year, millions of young people around the world choose to volunteer - to give their time to help others without payment. A study found that young people who volunteer for at least two hours a week are 60% more likely to describe themselves as happy. Researchers were surprised because they expected that money and success would be the main reason for happiness.\n\nII  The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.\n\nIII  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.",
              questions: [
                {
                  prompt:
                    "What do we learn from paragraph III about schools? (לכו רק לפסקה III)",
                  options: [
                    "Schools stopped volunteering programmes",
                    "Students who volunteer become more responsible",
                    "Professor Mills works at a school",
                    "Young volunteers feel less stressed",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    '"Young volunteers feel less stressed" נכון לפי הטקסט. למה בכל זאת חצינו אותו?',
                  options: [
                    "כי הוא סותר את הטקסט",
                    "כי הוא מפסקה II, והשאלה על פסקה III - סוג ב׳",
                    "כי הוא לא מוזכר בטקסט",
                    "כי הוא קצר מדי",
                  ],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - בפורמט בחינה.\n🚦 רמזור לפני שעונים. רק ירוק = עונים.",
            },
            {
              type: "passage-mcq",
              text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
              questions: [
                {
                  prompt:
                    "What do we learn from paragraph II about the project?",
                  options: [
                    "The project teaches people to plant and care for trees",
                    "Dr. Diallo plants the trees personally",
                    "Most trees survive without any help",
                    "In Ethiopia, birds increased by 60%",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "איזו אפשרות היא מסיח מסוג ב׳ - נכונה, אבל מהפסקה הלא נכונה?",
                  options: [
                    '"Dr. Diallo plants the trees personally"',
                    '"Most trees survive without any help"',
                    '"In Ethiopia, birds increased by 60%"',
                    "אין כאן מסיח כזה",
                  ],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"What do we learn from paragraph X? ← לך רק לפסקה X."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. קראו כל שאלה עד הסוף." },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers than those who learned as children. \"Adults understand what the teacher explains and can correct their mistakes more quickly,\" says Dr. Anna Klein. \"They are also not afraid to ask questions.\"\n\nIII  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.",
              questions: [
                {
                  prompt: "What do we learn from paragraph I about adults who cannot swim?",
                  options: ["They are too old to learn", "They became stronger swimmers", "Many feel embarrassed and never try to learn", "Most of them live in small towns"],
                  correctIndex: 2,
                },
                {
                  prompt: "What do we learn from paragraph II?",
                  options: ["Adults who learn later can become stronger swimmers than people who learned as children", "Adults are afraid to ask questions", "Swimming classes are available in most cities", "Children learn to swim faster than adults"],
                  correctIndex: 0,
                },
                {
                  prompt: "According to paragraph III, which is true about adult swimming classes?",
                  options: ["All classes meet every day", "Some meet once a week, and others three times a week", "Over 30% of adults cannot swim", "They are only for beginners"],
                  correctIndex: 1,
                },
                {
                  prompt: "According to Dr. Klein, why do adults learn well?",
                  options: ["They have more free time", "They practice in most cities", "They learned the basics as children", "They understand explanations and correct their mistakes quickly"],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**THE NO-HOMEWORK EXPERIMENT**\n\nI  In 2021, Riverside Middle School in Canada decided to stop giving homework to students in grades 6 to 8. Many parents were against the idea. They were afraid their children would fall behind and spend all evening on their phones.\n\nII  A year later, the results surprised everyone. Test scores did not go down, and in reading they even went up a little. Teachers said students came to class more rested and more ready to learn. Instead of homework, students were asked to read for 20 minutes every evening.\n\nIII  Not everyone is convinced. Some teachers at other schools say homework teaches students to work on their own. Principal Mark Owens says the school will continue the experiment, but it will check the results again every year.",
              questions: [
                {
                  prompt: "What do we learn from paragraph II?",
                  options: ["Many parents were against the idea", "Students did homework for 20 minutes a day", "Test scores did not go down without homework", "Reading scores went down"],
                  correctIndex: 2,
                },
                {
                  prompt: "According to paragraph I, why were parents worried?",
                  options: ["They thought their children would fall behind", "They thought teachers would leave the school", "They wanted more homework", "Test scores went up"],
                  correctIndex: 0,
                },
                {
                  prompt: "According to Mark Owens, what will the school do?",
                  options: ["Bring homework back next year", "Continue the experiment and check the results every year", "Stop the experiment", "Teach students to work on their own"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nעוד שאלת \"What do we learn from paragraph X?\"." },
            {
              type: "passage-mcq",
              text: "I  Every year, millions of young people choose to volunteer. A study found that young people who volunteer for two hours a week are 60% more likely to describe themselves as happy. Researchers were surprised.\n\nII  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed.\n\nIII  Results from 12 countries show that schools with volunteering programmes found that students became more responsible and more focused in class.",
              questions: [
                {
                  prompt:
                    "What do we learn from paragraph I about young volunteers?",
                  options: [
                    "Young volunteers are 60% more likely to be happy",
                    "Researchers expected volunteering to make people happy",
                    "Volunteers work at least 5 hours a week",
                    "Schools introduce volunteering programmes",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    'למה חצינו את "Schools introduce volunteering programmes"?',
                  options: [
                    "כי הוא סותר את הטקסט",
                    "כי הוא נכון - אבל מפסקה III, והשאלה על פסקה I",
                    "כי הוא לא מוזכר בכלל",
                    "כי הוא ארוך מדי",
                  ],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "self-check",
              prompt: "הסבירו: מהם ארבעת הצעדים של MC, ולמה הסדר חשוב?",
              modelAnswer:
                "1-קוראים את כל 4 האפשרויות. 2-חוצים סותרים ואפשרויות מהפסקה הלא נכונה. 3-מחפשים הוכחה בפסקה הנכונה. 4-מקיפים. הסדר חשוב כי לא מסמנים לפני שיש הוכחה.",
            },
            {
              type: "self-check",
              text: "III  Results from 12 countries show that schools with volunteering programmes found that students became more responsible and more focused in class. Professor Mills argues that helping others teaches skills no classroom can replace.",
              prompt:
                '"What do we learn from paragraph III about students who volunteer?" - כתבו את התשובה ואת ההוכחה מהטקסט.',
              modelAnswer:
                'Students become more responsible. הוכחה: "students became more responsible and more focused in class."',
            },
          ],
        },
      ],
    },
  },
  {
    id: "l10",
    section: "c-1",
    titleHe: "תשובה קצרה",
    titleEn: "Short Answer",
    required: ["l09"],
    requiredRounds: 3,
    position: { x: -70, y: 1740 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'טעות נפוצה:\n"Give ONE answer." - התלמיד כותב שלושה משפטים מהדעה שלו.\n← שלוש תשובות, ולא מהטקסט.\n\nנכון:\n"Give ONE answer." - משפט אחד מהטקסט.',
        },
        {
          type: "summary",
          title: "THE TOOL - שלושה כללים",
          lines: [
            "1 · ONE = תשובה אחת בלבד.",
            "2 · מהטקסט - לא מהדעה שלכם.",
            "3 · משפט אחד. לא צריך להסביר.",
          ],
        },
        {
          type: "summary",
          title: "מה מחפשים לפי מילת השאלה",
          lines: [
            'Why? ← because / since / as a result / therefore ← עונים "Because…"',
            "When? ← שנה, תאריך, תקופה (in 2019, ago) ← הזמן מהטקסט",
            'How? ← by / through / using + פעולה ← "By…"',
            "Where? ← שם מקום, in / at / on ← המקום מהטקסט",
            "What? ← המשפט שמתאר את הנושא ← מעתיקים את המשפט",
          ],
        },
        {
          type: "preface",
          text: 'WATCH IT\n\nהשאלה: Why were the researchers surprised?\n\nWhy? ← מחפשים מילת סיבה.\nפסקה I: "Researchers were surprised because they expected that money and success would be the main reason for happiness."\n\nתשובה: Because they expected that money and success would be the main reason for happiness.',
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "תשובה קצרה = תשובה אחת, מהטקסט, במשפט אחד. מילת השאלה אומרת מה לחפש." },
            {
              type: "mcq",
              prompt: "מה מחפשים בטקסט לכל מילת שאלה?",
              options: ["Why? ← because · When? ← שנה · How? ← by · Where? ← שם מקום", "Why? ← שם מקום · When? ← because · How? ← שנה · Where? ← by", "כל מילות השאלה מחפשות את אותו דבר", "Why? ← שנה · When? ← by · How? ← שם מקום · Where? ← because"],
              correctIndex: 0,
              explanation: "כל מילת שאלה שולחת אתכם לסוג מידע אחר בטקסט.",
            },
            {
              type: "mcq",
              prompt: "\"Why did people leave Redonda?\" - מה מחפשים בטקסט?",
              options: ["שם מקום", "because / since / so", "שנה ותאריך"],
              correctIndex: 1,
              explanation: "Why? ← מחפשים מילת סיבה בטקסט.",
            },
            {
              type: "mcq",
              prompt: "השאלה: \"Give ONE answer\". מצאתם בטקסט שתי תשובות נכונות. מה כותבים?",
              options: ["את שתיהן - ליתר ביטחון", "אחת בלבד - זו שהכי ברורה בטקסט", "אף אחת - השאלה לא ברורה"],
              correctIndex: 1,
              explanation: "ONE = אחת. תשובה נוספת לא מוסיפה נקודות, ואם היא שגויה - מאבדים.",
            },
            { type: "preface", text: "ועכשיו טקסט ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              questions: [
                {
                  prompt:
                    "Why do most trees die, according to Dr. Diallo? Give ONE answer. - איזו מילה בטקסט מסגירה את התשובה?",
                  options: ["survive", "because", "local", "when"],
                  correctIndex: 1,
                },
                {
                  prompt: "מה התשובה?",
                  options: [
                    "Rivers became cleaner",
                    "Because scientists did not help",
                    "Because nobody looks after them",
                    "Because only 85% survive",
                  ],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: 'דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳.\n\nמה שחשוב: המידע הנכון מהטקסט. כל עוד התשובה מובנת - מקבלים את הנקודות.\nלמשל "Because the goats ate all plants" מקבל ניקוד מלא, גם בלי "the" לפני plants.',
            },
            {
              type: "preface",
              text: "YOUR TURN - בפורמט בחינה.\n🚦 רמזור: ירוק? רק ירוק = עונים.",
            },
            {
              type: "self-check",
              text: "II  The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.",
              prompt:
                "According to Dr. Okafor, how do volunteers feel compared to non-volunteers? Give ONE answer.",
              modelAnswer: "ANSWER: They feel less stressed and sleep better.",
            },
            {
              type: "mcq",
              prompt: "השאלה מתחילה ב-When? מה מחפשים בטקסט?",
              options: [
                "מילת סיבה - because",
                "שנה, תאריך או תקופה",
                "שם של מקום",
                "שם של אדם",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"תשובה אחת. מהטקסט. Why? ← because. When? ← זמן."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}כתבו תשובות קצרות, באנגלית, מהטקסט. טקסט מוכר, ואחריו טקסט חדש. הבדיקה מחפשת את המילה החשובה בתשובה - לא דקדוק." },
            {
              type: "passage-quiz",
              text: "I  Every year, millions of young people around the world choose to volunteer - to give their time to help others without payment. A study found that young people who volunteer for at least two hours a week are 60% more likely to describe themselves as happy. Researchers were surprised because they expected that money and success would be the main reason for happiness.\n\nII  The benefits of volunteering go beyond simple happiness. Dr. Sarah Okafor studied the effects of volunteering on mental health for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results. According to Dr. Okafor, the most effective programmes bring young people face to face with the people they help.\n\nIII  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.",
              questions: [
                {
                  prompt: "Why were the researchers surprised? Give ONE answer.",
                  keywords: ["money"],
                  answerHint: "Because they expected that money and success would be the main reason for happiness.",
                },
                {
                  prompt: "According to Dr. Okafor, how do teenagers who volunteer feel?",
                  keywords: ["stress"],
                  answerHint: "They feel less stressed.",
                },
                {
                  prompt: "Where do the results about schools come from?",
                  keywords: ["countr"],
                  answerHint: "From 12 countries.",
                },
                {
                  prompt: "According to Professor Mills, what does helping others teach young people?",
                  keywords: ["skill"],
                  answerHint: "Skills that no classroom can ever replace.",
                },
              ],
            },
            {
              type: "passage-quiz",
              text: "**THE TOWN THAT SWITCHED OFF ITS LIGHTS**\n\nI  For years, the small town of Fulda Creek had a problem: its bright street lights hid the stars, and birds flying at night lost their way. In 2018, the town council decided to change all 600 street lights.\n\nII  The new lights point down, not up, and they turn off at midnight when the streets are empty. According to the council, the town now saves about 30,000 dollars a year on electricity.\n\nIII  The change has also brought visitors. Because the night sky is so dark, people come from far away to watch the stars. Local guide Anna Brooks takes small groups to a hill outside the town every weekend.",
              questions: [
                {
                  prompt: "When did the town council decide to change the street lights?",
                  keywords: ["2018"],
                  answerHint: "In 2018.",
                },
                {
                  prompt: "Why do people come from far away to Fulda Creek?",
                  keywords: ["star"],
                  answerHint: "Because the night sky is so dark, they come to watch the stars.",
                },
                {
                  prompt: "Where does Anna Brooks take her groups?",
                  keywords: ["hill"],
                  answerHint: "To a hill outside the town.",
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nתשובה אחת, מהטקסט." },
            {
              type: "self-check",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.",
              prompt:
                '"When did scientists start the project? Give ONE answer." - כתבו ANSWER:',
              modelAnswer: "ANSWER: In 2019.",
            },
            {
              type: "self-check",
              text: 'II  One study found that adults who learned to swim later in life often became stronger swimmers. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein.',
              prompt:
                '"According to Dr. Klein, how do adults improve quickly? Give ONE answer." - כתבו ANSWER:',
              modelAnswer:
                "ANSWER: By understanding what the teacher explains and correcting their mistakes more quickly.",
            },
            {
              type: "mcq",
              prompt:
                '"Why do most trees die?" - הטקסט אומר "because nobody looks after them". מה כותבים?',
              options: [
                "Nobody looks after them",
                "Trees are difficult to grow",
                "Because nobody looks after them.",
              ],
              correctIndex: 2,
              explanation:
                'Why? ← כותבים "Because…" + הסיבה מהטקסט. זה גם משפט שלם.',
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "passage-mcq",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed and sleep better. However, not all types of volunteering produce the same results.",
              questions: [
                {
                  prompt:
                    "According to Dr. Okafor, how do volunteers feel? Give ONE answer.",
                  options: [
                    "Better than non-volunteers",
                    "They feel less stressed and sleep better",
                    "They are happier and more successful",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: "III  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              prompt:
                '"Where did rivers begin to flow again? Give ONE answer." - כתבו ANSWER:',
              modelAnswer: "ANSWER: In Kenya.",
            },
            {
              type: "self-check",
              prompt: 'הסבירו: למה חשוב לכתוב "Because…" כשהשאלה שואלת "Why?"',
              modelAnswer:
                'כי זה מראה שהבנתם שהשאלה ביקשה סיבה, וגם עוזר לדקדוק - "Because + סיבה" הוא משפט שלם.',
            },
          ],
        },
      ],
    },
  },
  {
    id: "l11",
    section: "c-1",
    titleHe: "השלמת משפט",
    titleEn: "Complete the Sentence",
    required: ["l09"],
    requiredRounds: 3,
    position: { x: 70, y: 1740 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'שני פורמטים של Complete the Sentence:\n\nפורמט א׳ - "People left because ___" ← מחפשים because / since.\nפורמט ב׳ - "They brought goats in order to ___" ← מחפשים to / in order to / so that.\n\nההבדל: because = למה זה קרה (סיבה). in order to = מה הם רצו להשיג (מטרה).',
        },
        {
          type: "summary",
          title: "THE TOOL - ארבעה שלבים",
          lines: [
            '1 · קראו את ההתחלה: "Because ___" או "In order to ___"?',
            "2 · חפשו בטקסט את מילות המפתח המתאימות.",
            "3 · מצאו את החלק שמשלים את המשפט.",
            "4 · קראו בראש את המשפט השלם - הוא מסתדר?",
          ],
        },
        {
          type: "summary",
          title: "מילות המפתח",
          lines: [
            'ל-"Because ___": because · since · as a result · therefore · so · due to',
            'ל-"In order to ___": to · in order to · so that · so they could',
            "⚠️ ה-because / in order to כבר כתוב בשאלה - אל תכתבו אותו שוב.",
          ],
        },
        {
          type: "preface",
          text: 'WATCH IT - REDONDA ISLAND\n\n"People first came to Redonda 150 years ago. They brought many goats with them because they wanted meat and milk. The goats ate all the plants. The people could not find enough food, so they left the island. In 2016, environmentalists removed the goats so that the plants could grow back."\n\nBecause ___ ← מחפשים because/so ← "could not find food, so they left"\n← Because they could not find enough food.\n\nIn order to ___ ← מחפשים so that/to ← "removed the goats so that the plants could grow"\n← In order to let the plants grow back.',
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "השלמת משפט: קוראים את ההתחלה. Because ___ = מחפשים סיבה. In order to ___ = מחפשים מטרה." },
            {
              type: "mcq",
              prompt: "\"People left Redonda because ___\" - מה עושים?",
              options: ["כותבים YES/NO", "מחפשים סיבה בטקסט ומשלימים", "כותבים תשובה מהראש"],
              correctIndex: 1,
              explanation: "Complete the sentence: מחפשים מילות סיבה בטקסט ← מוצאים ← משלימים.",
            },
            {
              type: "mcq",
              prompt: "\"They brought goats in order to ___\" - מה מחפשים בטקסט?",
              options: ["because / since", "to / in order to / so that", "and / also"],
              correctIndex: 1,
              explanation: "\"In order to\" = מטרה. מחפשים to / in order to / so that.",
            },
            {
              type: "mcq",
              prompt: "\"They brought goats because ___\" - איזו השלמה נכונה?",
              options: ["because they wanted meat and milk", "they wanted meat and milk", "meat and milk because"],
              correctIndex: 1,
              explanation: "\"because\" כבר כתוב בשאלה. משלימים רק את ההמשך: they wanted meat and milk.",
            },
            { type: "preface", text: "ועכשיו טקסט ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.",
              questions: [
                {
                  prompt:
                    "Why did scientists start the Green Africa project? COMPLETE: Because ___",
                  options: [
                    "Because the birds needed to return",
                    "Because forests around the world are being destroyed",
                    "Because Kenya had dry rivers",
                    "Because local people asked for trees",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: 'המשפט מתחיל ב-"Because". מה אסור לכתוב בתשובה?',
                  options: [
                    "את המילה because עוד פעם",
                    "שם של מקום",
                    "מספרים מהטקסט",
                    "משפט מהפסקה",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט.",
            },
            {
              type: "preface",
              text: "YOUR TURN - בפורמט בחינה. שתי השלמות: אחת של סיבה, אחת של מטרה.\n🚦 רמזור: ירוק? רק ירוק = עונים.",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt:
                "Why do most trees survive in the Green Africa project? COMPLETE: Because ___",
              modelAnswer:
                "Because local people are involved and learn how to care for the trees.",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt:
                "What do scientists do in order to help the trees? COMPLETE: In order to help the trees, they ___",
              modelAnswer:
                "In order to help the trees, they teach local people how to care for them.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"Because ___ = סיבה. In order to ___ = מטרה."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}השלימו את המשפטים באנגלית, מהטקסט. טקסט מוכר, ואחריו טקסט חדש. לא כל השלמה היא סיבה או מטרה - קראו את תחילת המשפט עד הסוף." },
            {
              type: "passage-quiz",
              text: "**REDONDA ISLAND**\n\nI  People first came to Redonda Island 150 years ago. They brought many goats with them because they wanted meat and milk. The goats ate all the plants, and the people could not find enough food, so they left the island.\n\nII  In 2016, environmentalists removed the goats so that the plants could grow back. Only a few years later, grass covered the island again, and birds returned to build their nests.",
              questions: [
                {
                  prompt: "People brought goats to the island because ___",
                  keywords: ["meat"],
                  answerHint: "they wanted meat and milk.",
                },
                {
                  prompt: "The people left the island because ___",
                  keywords: ["food"],
                  answerHint: "they could not find enough food.",
                },
                {
                  prompt: "Environmentalists removed the goats in order to ___",
                  keywords: ["plant"],
                  answerHint: "let the plants grow back.",
                },
                {
                  prompt: "A few years after the goats were removed, birds ___",
                  keywords: ["return"],
                  answerHint: "returned to build their nests.",
                },
              ],
            },
            {
              type: "passage-quiz",
              text: "**A ZOO WITHOUT CAGES**\n\nI  When the city zoo in Valmora opened in 1950, most animals lived in small cages. Visitors complained that the animals looked sad and bored, and fewer people came every year.\n\nII  In 2010, the zoo removed most of its cages in order to give the animals more space. Large open areas with trees, rocks and water were built instead, and the animals can now move freely.\n\nIII  The change worked. The number of visitors doubled in five years, and baby animals were born in the zoo for the first time in decades. Today, schools from all over the country visit Valmora to learn about wildlife.",
              questions: [
                {
                  prompt: "The zoo removed most of its cages in order to ___",
                  keywords: ["space"],
                  answerHint: "give the animals more space.",
                },
                {
                  prompt: "Visitors complained because ___",
                  keywords: ["sad"],
                  answerHint: "the animals looked sad and bored.",
                },
                {
                  prompt: "In five years, the number of visitors ___",
                  keywords: ["double"],
                  answerHint: "doubled.",
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nסיבה או מטרה?" },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.",
              questions: [
                {
                  prompt:
                    "Why do some adults never learn to swim? COMPLETE: Because they ___",
                  options: [
                    "Because they feel embarrassed",
                    "Because they cannot find classes",
                    "Because they are too old",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "self-check",
              text: "In 2016, environmentalists removed the goats so that the plants could grow back.",
              prompt: 'השלימו: "People removed the goats in order to ___"',
              modelAnswer: "In order to let the plants grow back.",
            },
            {
              type: "mcq",
              prompt: 'בדיקה: "Because they embarrassed." - האם המשפט תקין?',
              options: [
                "כן - יש because",
                'לא - חסר פועל: "Because they FEEL embarrassed"',
                "כן - מספיק ברור",
              ],
              correctIndex: 1,
              explanation:
                'כל משפט חייב subject + verb. "Because they feel embarrassed."',
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt:
                '"Why do most trees in the project survive? COMPLETE: Because ___"',
              modelAnswer:
                "Because local people are involved and learn how to care for them.",
            },
            {
              type: "self-check",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.",
              prompt:
                '"What was the aim of the Green Africa project? COMPLETE: In order to ___"',
              modelAnswer:
                "In order to plant one billion trees in Africa by 2030.",
            },
            {
              type: "self-check",
              prompt:
                'הסבירו: מה ההבדל בין "because" לבין "in order to" בהשלמת משפט?',
              modelAnswer:
                'because = סיבה, מה גרם. in order to = מטרה, מה רצו להשיג. "They left because they had no food" מול "They came in order to find food."',
            },
          ],
        },
      ],
    },
  },
  {
    id: "l12",
    section: "c-1",
    titleHe: "שתי תשובות",
    titleEn: "Two Answers",
    required: ["l11"],
    requiredRounds: 3,
    position: { x: 70, y: 1860 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'הטעות הכי יקרה:\n\n"Give TWO answers." - התלמיד מצא אחת ועבר הלאה.\nTWO = שתיים. תמיד.\n\nבבחינה: "How did Redonda change? Give TWO answers from paragraph IV."\n(1) ______  (2) ______  ← 14 נקודות, 7 לכל תשובה.',
        },
        {
          type: "summary",
          title: "THE TOOL - ארבעה שלבים",
          lines: [
            "1 · קראו את הפסקה.",
            "2 · מצאו תשובה ראשונה - סמנו אותה.",
            "3 · אל תעצרו - המשיכו לחפש תשובה שנייה.",
            "4 · רק אחרי שיש שתיים - כותבים (1) ו-(2).",
          ],
        },
        {
          type: "summary",
          title: "הסיגנלים לתשובה השנייה",
          lines: [
            "In addition · Also · And · Furthermore · Moreover",
            "ראיתם אחת מהן? תשובה שנייה מגיעה מיד אחריה.",
            "❌ תשובה אחת = מאבדים 7 נקודות · ❌ שלוש = עלולים לאבד נקודות · ✅ שתיים מהטקסט = 14 נקודות",
          ],
        },
        {
          type: "steps",
          steps: [
            "WATCH IT - How did the area change after trees were planted? Give TWO answers. (paragraph III)",
            'תשובה 1: "the number of birds increased by 60%" - סימנו, וממשיכים.',
            'מחפשים סיגנל: "In addition" ← הנה הוא.',
            'תשובה 2: "in Kenya, rivers that were dry for 20 years began to flow again".',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "Give TWO answers = שתי תשובות, ממוספרות (1) ו-(2). מצאתם אחת? ממשיכים לחפש." },
            {
              type: "mcq",
              prompt: "\"Give TWO answers\" - כמה תשובות כותבים?",
              options: ["אחת - אם היא ארוכה ומפורטת", "שתיים בדיוק", "שלוש - כדי לא להחמיץ"],
              correctIndex: 1,
              explanation: "שתיים בדיוק. אחת = חצי ניקוד. שלוש = עלולים לאבד נקודות.",
            },
            {
              type: "mcq",
              prompt: "מצאתם תשובה ראשונה. מה עושים?",
              options: ["כותבים אותה ועוברים לשאלה הבאה", "ממשיכים לקרוא - מחפשים שנייה", "מחפשים שנייה רק אם נשאר זמן"],
              correctIndex: 1,
              explanation: "תמיד ממשיכים. עוצרים רק כשיש שתיים.",
            },
            {
              type: "mcq",
              prompt: "ראיתם בטקסט \"In addition\" מיד אחרי התשובה הראשונה. מה זה אומר?",
              options: ["שהטקסט עובר לנושא אחר", "שהתשובה השנייה מגיעה עכשיו", "שהתשובה הראשונה הייתה שגויה"],
              correctIndex: 1,
              explanation: "In addition / Also / And = סיגנל שתשובה שנייה מגיעה.",
            },
            { type: "preface", text: "ועכשיו טקסט ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "III  Results from 12 countries show that schools that introduced volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches young people skills that no classroom can ever replace.",
              questions: [
                {
                  prompt:
                    "Give TWO answers: How do volunteer students change? (paragraph III) - איזה זוג נכון?",
                  options: [
                    "More responsible + better grades",
                    "More responsible + more focused in class",
                    "More focused + they stop volunteering",
                    "Better grades + less stressed",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "איזו מילה בפסקה חיברה בין שתי התשובות?",
                  options: ['"however"', '"because"', '"and"', '"argues"'],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט.",
            },
            {
              type: "preface",
              text: "YOUR TURN - בפורמט בחינה. שתי תשובות, ממוספרות.\n🚦 רמזור: ירוק? רק ירוק = עונים.",
            },
            {
              type: "self-check",
              text: "III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              prompt:
                "What changed in Greenville after the project? (paragraph III) Give TWO answers - כתבו (1) ו-(2).",
              modelAnswer:
                "(1) Stress levels fell by 40%.  (2) The number of people who exercise outdoors increased from 15% to 60%.",
            },
            {
              type: "mcq",
              prompt: "כתבתם תשובה אחת בשאלת TWO. כמה נקודות מפסידים?",
              options: [
                "לא מפסידים - מספיק אחת נכונה",
                "חצי מהניקוד - 7 מתוך 14",
                "את כל הניקוד",
                "תלוי באורך התשובה",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"מצאתי AND / IN ADDITION? ← תשובה שנייה מגיעה."'],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "{d:rtl}רמת בחינה 💎\n{d:rtl}כתבו באנגלית, מהטקסט. בשאלת TWO - כתבו (1) ו-(2) באותה תיבה. טקסט מוכר, ואחריו טקסט חדש. לא כל שאלה מבקשת שתי תשובות." },
            {
              type: "passage-quiz",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. \"We do not just plant trees,\" says Dr. Diallo. \"We teach local people how to care for them.\" According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.",
              questions: [
                {
                  prompt: "How did the area change after trees were planted? Give TWO answers. (paragraph III)",
                  keywords: ["bird", "river"],
                  answerHint: "(1) The number of birds increased by 60%. (2) Rivers in Kenya began to flow again.",
                },
                {
                  prompt: "According to Dr. Diallo, what does the project do? Give TWO answers. (paragraph II)",
                  keywords: ["plant", "teach"],
                  answerHint: "(1) It plants trees. (2) It teaches local people how to care for them.",
                },
                {
                  prompt: "According to Dr. Diallo, why do most trees die?",
                  keywords: ["nobody"],
                  answerHint: "Because nobody looks after them.",
                },
                {
                  prompt: "When did the project start?",
                  keywords: ["2019"],
                  answerHint: "In 2019.",
                },
              ],
            },
            {
              type: "passage-quiz",
              text: "**THE SCHOOL THAT GROWS ITS OWN LUNCH**\n\nI  At Hillcrest Primary School, students do not only eat lunch - they grow it. In 2020, the school turned an empty field into a vegetable garden. Every class looks after its own part of the garden.\n\nII  The garden has changed school life in two ways. First, students now eat more vegetables, because they want to taste what they grew. In addition, teachers use the garden in science lessons to teach about plants, soil and weather.\n\nIII  The project also helps families. Every Friday, students take home a box of fresh vegetables, and parents can join a cooking class at the school once a month.",
              questions: [
                {
                  prompt: "How has the garden changed school life? Give TWO answers. (paragraph II)",
                  keywords: ["vegetable", "science"],
                  answerHint: "(1) Students eat more vegetables. (2) Teachers use the garden in science lessons.",
                },
                {
                  prompt: "How does the project help families? Give TWO answers. (paragraph III)",
                  keywords: ["box", "cook"],
                  answerHint: "(1) Students take home a box of fresh vegetables. (2) Parents can join a cooking class.",
                },
                {
                  prompt: "When did the school turn the field into a garden?",
                  keywords: ["2020"],
                  answerHint: "In 2020.",
                },
              ],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 🌟 (רשות)\nמסמנים שתי תשובות." },
            {
              type: "mark-all",
              instruction: "סמנו את שתי התשובות ואת מילת החיבור שביניהן",
              text: "The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              correctIndices: [
                8, 9, 10, 11, 12, 13, 14, 15, 18, 25, 26, 27, 28,
              ],
              wordBank: ["in addition", "also", "and"],
            },
            {
              type: "self-check",
              text: "Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              prompt: "כתבו את שתי התשובות: (1) ו-(2).",
              modelAnswer:
                "(1) Stress levels fell by 40%.  (2) The number of people who exercise outdoors increased from 15% to 60%.",
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "תרגול נוסף 💎 (רשות)\nבמילים שלכם." },
            {
              type: "self-check",
              text: "III  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              prompt:
                '"How did the area change after trees were planted? Give TWO answers from paragraph III." - כתבו (1) ו-(2).',
              modelAnswer:
                "(1) The number of birds increased by 60% in Ethiopia.  (2) Rivers in Kenya that were dry for 20 years began to flow again.",
            },
            {
              type: "self-check",
              prompt: 'תלמיד כתב שלוש תשובות ל-"Give TWO answers". מה הסיכון?',
              modelAnswer:
                "הבודק מתייחס לשתי הראשונות בלבד. אם אחת מהן שגויה - מפסידים נקודות, גם אם התשובה השלישית נכונה.",
            },
            {
              type: "self-check",
              prompt:
                'הסבירו: מה התפקיד של "and / also / in addition" בשאלת TWO answers?',
              modelAnswer:
                "הן הסיגנל בטקסט שתשובה שנייה מגיעה. מוצאים אחת מהן - ממשיכים לקרוא, והתשובה השנייה שם.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "n-649ed18f",
    section: "c-1",
    titleHe: "שאלות - סיכום",
    required: ["l10", "l12"],
    position: { x: 0, y: 1980 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "סיכום שאלות: ארבעה סוגי שאלות בטקסט אחד, והשעון רץ.\n\nלפני כל שאלה: רמזור. אחר כך מילת מפתח ← איתור ← קריאת המשפט ← תשובה.\nהשעון לא משפיע על הציון - הוא מראה לכם כמה מהר אתם עובדים.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              label: "סיכום שאלות",
              timerKey: "qsTime",
              text: "THE LAKESIDE BIKE PROJECT\n\nI  Five years ago, the town of Lakeside had heavy traffic and very few places to park. However, in 2020, the town council started a bike-sharing project in order to reduce the number of cars in the centre. The project began with 50 bikes and three stations.\n\nII  The project was designed by transport engineer Dr. Hannah Weiss. According to Dr. Weiss, people use the bikes for two main reasons: they are cheaper than the bus, and they are faster in the crowded centre. In addition, residents say the bikes make the town feel friendlier.\n\nIII  Not everyone agrees. Councillor Paul Ortiz says that some bikes are left on the pavement, and no clear rules exist for parking them. Nevertheless, the project has grown to 400 bikes, and the number of cars in the centre has fallen by 25%.",
              questions: [
                {
                  prompt: "What do we learn from paragraph II about the bikes?",
                  options: [
                    "Some of them are left on the pavement",
                    "The project began with 50 of them",
                    "They reduced the number of cars by 25%",
                    "They are cheaper than the bus and faster in the centre",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    "According to Dr. Weiss, why do people use the bikes? Give ONE answer.",
                  options: [
                    "Because the town council started the project",
                    "Because they are cheaper than the bus",
                    "Because some bikes are left on the pavement",
                    "Because there are 400 bikes",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "Complete the sentence: The town council started the project in order to ___",
                  options: [
                    "make the town feel friendlier",
                    "save money on buses",
                    "reduce the number of cars in the centre",
                    "build three new stations",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "Give TWO answers: What are the results of the project, according to paragraph III?",
                  options: [
                    "It grew to 400 bikes, and the number of cars fell by 25%",
                    "It began with 50 bikes and three stations",
                    "The bikes are cheaper and faster than the bus",
                    "Some bikes are left on the pavement, and there are no clear rules",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "Which of the following is NOT mentioned in the text?",
                  options: [
                    "Bikes are faster in the crowded centre",
                    "Some bikes are left on the pavement",
                    "The project started in 2020",
                    "The bikes are free for residents",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            { type: "time-result", label: "הזמן שלכם", timerKey: "qsTime" },
            {
              type: "summary",
              title: "ארבעה סוגי שאלות",
              lines: [
                "בחירה מרובה: קוראים את כל 4 האפשרויות, חוצים, מוצאים הוכחה.",
                "תשובה קצרה: תשובה אחת, מהטקסט.",
                "השלמת משפט: ממשיכים את המשפט - because = סיבה, in order to = מטרה.",
                "שתי תשובות: TWO = שתיים, תמיד.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "n-b46b7e2b",
    section: "c-1",
    titleHe: "however / but - כמו במבחן",
    titleEn: "Contrast Words",
    required: ["l08"],
    requiredRounds: 3,
    position: { x: 0, y: 1500 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "אז נלמד איך מפצחים כל שאלה שיש בה But/However",
        },
        {
          type: "summary",
          title: "THE TOOL - however / but",
          lines: [
            "לפני however: מידע כללי, רקע, בעיה.",
            "אחרי however: הנקודה החשובה. הסיפור האמיתי.",
            "however מסמן את הנקודה של הכותב, אבל עונים על מה שהשאלה שואלת: לפעמים התשובה דווקא לפניו.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}however / but מסמנים פנייה בטקסט. בדרך כלל אחריהם מגיעה הנקודה של הכותב - אבל תמיד עונים על מה שהשאלה שואלת.",
            },
            {
              type: "mcq",
              prompt:
                '"Many people cannot swim. However, experts say it is never too late." - מה הנקודה של הכותב?',
              options: [
                '"Many people cannot swim"',
                '"it is never too late"',
                "שתיהן חשובות באותה מידה",
              ],
              correctIndex: 1,
              explanation:
                'however מסמן פנייה: קודם רקע, ואז הנקודה של הכותב - "it is never too late".',
            },
            {
              type: "mcq",
              prompt: "however = פנייה. מה בדרך כלל מגיע אחריו?",
              options: ["הרקע או הבעיה", "הנקודה של הכותב", "דוגמה"],
              correctIndex: 1,
              explanation:
                "לפני however בדרך כלל רקע או בעיה, ואחריו הנקודה של הכותב.",
            },
            {
              type: "mcq",
              prompt:
                'השאלה: "What problem do many adults have?"\nהטקסט: "Many adults cannot swim. However, experts say it is never too late."\nאיפה התשובה?',
              options: [
                "לפני however - שם כתובה הבעיה",
                "אחרי however - התשובה תמיד שם",
                "התשובה לא מופיעה בטקסט",
              ],
              correctIndex: 0,
              explanation:
                "however מסמן את הנקודה של הכותב, אבל השאלה שואלת על הבעיה - והבעיה כתובה לפני however. קודם מבינים מה השאלה שואלת.",
            },
            { type: "preface", text: "ועכשיו טקסט קצר ושאלה אמיתית." },
            {
              type: "passage-mcq",
              text: "The school trip to the museum was cancelled because of the storm. However, the students did not stay at home: their teacher took them to the science centre instead.",
              questions: [
                {
                  prompt: "According to the text, where did the students go?",
                  options: [
                    "They stayed at home",
                    "They went to the museum",
                    "They went to the science centre",
                    "They went to see the storm",
                  ],
                  correctIndex: 2,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}אתם - מצאו את however, וקראו מה בא אחריו.\n\nהשאלה: What good news does paragraph I mention?",
            },
            {
              type: "mcq",
              prompt: "איפה נמצא however בפסקה I?",
              options: [
                'במשפט הראשון, לפני "Every year"',
                "אחרי המשפט על יערות שנהרסים",
                'בסוף הפסקה, אחרי "15 countries"',
                "הוא לא מופיע בפסקה I",
              ],
              correctIndex: 1,
            },
            {
              type: "self-check",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.",
              prompt: "כתבו את החדשות הטובות - מה שבא אחרי however.",
              modelAnswer:
                "There is good news: in 2019 scientists started a project to plant one billion trees in Africa.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"however / but = פנייה. מה שאחריו = הנקודה."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "{d:rtl}רמת בחינה 💎\n{d:rtl}טקסט מוכר, ואחריו טקסט חדש שלא ראיתם. קראו כל שאלה עד הסוף: לא כל תשובה נמצאת אחרי however.",
            },
            {
              type: "passage-mcq",
              text: "**THE FOUR-DAY SCHOOL WEEK**\n\nI  In 2019, a group of schools in the Clearwater district tried something unusual: a four-day school week. Students came to school from Monday to Thursday, but each day was one hour longer. The district hoped to save money on buses and heating. Many parents were worried at first. They thought their children would fall behind. However, the first results were better than expected.\n\nII  According to the district report, attendance rose by 8% in the first year. Teachers also said they had more time to plan their lessons. Although some students found the longer days tiring, most of them said they enjoyed the free Fridays. Some used the extra day for sports or part-time jobs, while others simply rested. Test scores in maths and reading stayed about the same, but teachers noticed that students were more focused on Mondays.\n\nIII  Yet the change was not easy for every family. Parents who worked on Fridays had to find someone to look after younger children. Some families paid for day camps, but others could not afford them. The district tried to help by opening school libraries on Fridays. Nevertheless, only a few students used them.\n\nIV  Today, the Clearwater schools still use the four-day week. Although the district is happy with the results, it plans to review the programme every two years. Experts say the idea could work in other places, but only if schools listen to parents before they make the change.",
              questions: [
                {
                  prompt: "According to paragraph I, what were the first results like?",
                  options: ["Worse than expected", "Better than expected", "The same as before", "Not known yet"],
                  correctIndex: 1,
                },
                {
                  prompt: "Test scores stayed about the same. What did teachers notice?",
                  options: ["Students were more tired", "Test scores went up", "Students were more focused on Mondays", "Attendance fell"],
                  correctIndex: 2,
                },
                {
                  prompt: "How many students used the school libraries on Fridays?",
                  options: ["Most of them", "All of them", "None", "Only a few"],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "passage-mcq",
              text: "**THE NIGHT MARKET**\n\nI  For years, the old bus station in Porto Verde stood empty after 6 p.m. Local shops closed early, and young people had nowhere to go in the evening.\n\nII  In 2022, the city opened a night market in the station. At first, some residents complained about the noise. However, the market soon became the most popular place in town. Today, more than 3,000 people visit it every Friday.\n\nIII  Although the market is a success, not everyone is happy. Some shop owners in the centre say they lose customers to the market, but others say the crowds help their business too.\n\nIV  The city now plans to open the market on Saturdays as well. However, people who live near the station have asked the council to close it at 11 p.m., not midnight. The council has not decided yet. Meanwhile, the market has created more than 80 jobs, most of them for young people from the area. Many of them say that, for the first time, they have a reason to stay in Porto Verde.",
              questions: [
                {
                  prompt:
                    "According to paragraph II, what happened after the first complaints?",
                  options: [
                    "Residents complained about the noise",
                    "The market soon became the most popular place in town",
                    "The station stood empty after 6 p.m.",
                    "Local shops closed early",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "How many people visit the market every Friday?",
                  options: [
                    "More than 300",
                    "More than 3,000",
                    "About 2,022",
                    "Six",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "According to paragraph III, what do the unhappy shop owners in the centre say?",
                  options: [
                    "They lose customers to the market",
                    "The crowds help their business",
                    "The market is too noisy",
                    "The market should close",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 🌟 (רשות)\nסימון ושאלה על however בטקסט מוכר.",
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד ואת מה שבא מיד אחריה",
              text: "Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.",
              correctIndices: [13, 14, 15, 16, 17],
              wordBank: ["however", "but", "although"],
            },
            {
              type: "passage-mcq",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              questions: [
                {
                  prompt:
                    '"What does Dr. Okafor say about different types of volunteering?" - מצאו את however.',
                  options: [
                    "All types are equally effective",
                    "Not all types of volunteering produce the same results",
                    "Only schools benefit from volunteering",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                "השלימו: however / but מסמנים ___________. מה שאחריהם הוא ___________.",
              modelAnswer:
                "פנייה בטקסט. מה שאחריהם הוא הנקודה החשובה - המידע החדש.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף 💎 (רשות)\nכתבו את התשובה בעצמכם.",
            },
            {
              type: "self-check",
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              prompt:
                '"What does paragraph II say after the word However?" - כתבו ANSWER:',
              modelAnswer:
                "ANSWER: Not all types of volunteering produce the same results - the most effective ones bring young people face to face with the people they help.",
            },
            {
              type: "self-check",
              prompt:
                '"The air was polluted, and most residents felt the city was unpleasant. However, a local charity decided to change this." - מה הנקודה החשובה?',
              modelAnswer: "שארגון צדקה מקומי החליט לשנות את המצב בעיר.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "n-7c5330b8",
    section: "c-1",
    titleHe: "חלק 1 - סיכום",
    required: ["n-649ed18f"],
    position: { x: 0, y: 2100 },
    big: true,
    content: {
      preface: [
        {
          type: "preface",
          text: "סיכום חלק 1: מבחן קטן על כל מה שלמדתם. טקסט אחד, שעון רץ.\n\nהשיטה: מפה ← רמזור ← מילת מפתח ← תשובה. ובדרך: מספרים ושמות, NOT, most / only, however / but.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              label: "חלק 1",
              timerKey: "partOneTime",
              text: "THE ELM STREET LIBRARY\n\nI  In 2010, the Elm Street library was almost closed because only 30 people visited it each week. However, a group of parents decided to save it. They asked local businesses for help and collected 12,000 dollars in one summer.\n\nII  The project was led by teacher Sarah Boyd. According to Ms. Boyd, the most important change was a new children's corner, which now attracts more than 200 families every week. Volunteers also organise reading evenings on Fridays.\n\nIII  Not all residents were happy about the change. Mr. Daniel Ross argues that the library is now too noisy. Nevertheless, most visitors say they enjoy the lively atmosphere, and the library now has 1,500 members.",
              questions: [
                {
                  prompt: "What is the main point of paragraph I?",
                  options: [
                    "Only 30 people visited the library each week",
                    "A group of parents decided to save the library",
                    "The library was almost closed",
                    "Local businesses are rich",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "How much money was collected in one summer?",
                  options: [
                    "1,500 dollars",
                    "200 dollars",
                    "12,000 dollars",
                    "30 dollars",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "According to Ms. Boyd, what was the MOST important change?",
                  options: [
                    "A new children's corner",
                    "Reading evenings on Fridays",
                    "Asking local businesses for help",
                    "A quieter atmosphere",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "Which of the following is NOT mentioned in paragraph III?",
                  options: [
                    "Mr. Ross thinks the library is too noisy",
                    "Most visitors enjoy the lively atmosphere",
                    "The library has 1,500 members",
                    "The library will move to a new building",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "time-result",
              label: "הזמן שלכם",
              timerKey: "partOneTime",
            },
            {
              type: "summary",
              title: "סיכום חלק 1: כל השיטה",
              lines: [
                "מפה · כותרת + פסקה ראשונה: על מה הטקסט?",
                "רמזור · מבינים את השאלה? רק ירוק עונה.",
                "P1 · מילת מפתח ← איתור ← קריאת המשפט ← תשובה.",
                "כלים · מספרים ושמות, NOT, most / only, however / but.",
                "בחלק הבא: אותן מילים (because, in addition, for example) - הפעם אתם הכותבים.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "n-221188d1",
    section: "c-1",
    titleHe: "שאלות 1 - סיכום",
    required: ["not-q", "limiters-q", "numbers-names-q"],
    position: { x: 0, y: 1260 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "סיכום - שלושה כלים ביחד: NOT, מילות הגבלה (most / only), מספרים ושמות. בכל משפט ושאלה תזהו איזה כלי צריך.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "שלושה טקסטים. סמנו בכל אחד: מילות שלילה, מילות הגבלה, ומספרים ושמות.",
            },
            {
              type: "mark-all",
              instruction:
                "סמנו: מילות שלילה, מילות הגבלה (only/most), ומספרים ושמות.",
              text: "According to Dr. Elena Cruz, only 20% of the city's rivers are still clean. Most factories were built before 1990, and no new regulations have ever been enforced. Nobody expects this to change soon.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [21, 28] },
                { name: "הגבלה", color: "violet", indices: [5, 14] },
                {
                  name: "מספרים ושמות",
                  color: "emerald",
                  indices: [2, 3, 4, 6, 19],
                },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "סמנו: מילות שלילה, מילות הגבלה (only/most), ומספרים ושמות.",
              text: "A recent report shows that only three hospitals in the region have modern equipment. According to Dr. Marcus Lee, most patients never receive follow-up care, and no clinic has hired additional staff since 2015. Nobody has measured the real cost of this problem.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [21, 26, 34] },
                { name: "הגבלה", color: "violet", indices: [5, 19] },
                {
                  name: "מספרים ושמות",
                  color: "emerald",
                  indices: [6, 16, 17, 18, 33],
                },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "סמנו: מילות שלילה, מילות הגבלה (only/most), ומספרים ושמות.",
              text: "The mayor's office confirmed that only one bridge in Millbrook was rebuilt this year. Engineer Sofia Ramirez said most of the funding, about 4 million dollars, came from private donors, and no government grant was ever approved. Nobody from the city council attended the opening ceremony in March 2023.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [31, 37] },
                { name: "הגבלה", color: "violet", indices: [5, 18] },
                {
                  name: "מספרים ושמות",
                  color: "emerald",
                  indices: [9, 14, 15, 16, 23, 24, 47, 48],
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב חזרה - שלושה כלים ביחד: NOT, מילות הגבלה, מספרים ושמות.",
            },
            {
              type: "mcq",
              prompt: "שאלה עם NOT מבקשת:",
              options: [
                "את מה שנכון",
                "את מה שלא נכון / לא מופיע בטקסט",
                "את המשפט הכי ארוך",
              ],
              correctIndex: 1,
              explanation: "NOT הופך את הכיוון - מחפשים את היוצאת דופן.",
            },
            {
              type: "mcq",
              prompt: "שאלה עם most / only מבקשת:",
              options: [
                "כמה שיותר תשובות",
                "תשובה אחת ספציפית ומדויקת",
                "את כל האפשרויות מהטקסט",
              ],
              correctIndex: 1,
              explanation: "מילת הגבלה = תשובה אחת מסוימת. לא יותר.",
            },
            {
              type: "mcq",
              prompt: "כשיש שם או מספר בשאלה, מה עושים קודם?",
              options: [
                "קוראים את כל הטקסט מההתחלה",
                "מאתרים את השם / המספר בטקסט ועובדים מהמקום שלו",
                "מנחשים לפי היגיון",
              ],
              correctIndex: 1,
              explanation: "שם או מספר = GPS / כתובת. הולכים ישר למקום שלו.",
            },
            {
              type: "mcq",
              prompt: "בשאלת NOT עם 4 אפשרויות, כמה מהן בדרך כלל נכונות?",
              options: ["אחת", "שתיים", "שלוש", "כולן"],
              correctIndex: 2,
              explanation: "שלוש מופיעות בטקסט. הרביעית - זו שלא - היא התשובה.",
            },
            {
              type: "mcq",
              prompt: "'the MAIN reason' ו-'the MOST important factor' הן:",
              options: [
                "מילות ניגוד",
                "מילות הגבלה - תמיד תשובה אחת ספציפית",
                "מילות שלילה",
                "לא קשורות זו לזו",
              ],
              correctIndex: 1,
              explanation: "main / most / only - כולן מגבילות לתשובה אחת בלבד.",
            },
            {
              type: "mcq",
              prompt: "ראיתם תאריך או אחוז בשאלה. מה זה?",
              options: [
                "Eye Catcher - GPS ישר לפסקה עם המספר הזה",
                "פרט לא חשוב שאפשר לדלג עליו",
                "רמז לכך שהשאלה תהיה ארוכה",
              ],
              correctIndex: 0,
              explanation: "מספר = GPS. סורקים את הטקסט ומוצאים אותו ישירות.",
            },
            {
              type: "passage-mcq",
              text: "According to nurse Fiona Grant, only 25% of patients finished the full course of treatment last year. She says most patients stop too early because they feel better after a few days. No patient in the trial received a refund, and nobody was forced to continue.",
              questions: [
                {
                  prompt:
                    "According to Fiona Grant, what percentage of patients finished the full course?",
                  options: ["25%", "75%", "100%", "50%"],
                  correctIndex: 0,
                },
                {
                  prompt: "Which of the following is NOT true about the trial?",
                  options: [
                    "Most patients stop early",
                    "Patients received a refund if they stopped",
                    "No patient received a refund",
                    "Nobody was forced to continue",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "According to the text, why do most patients stop too early?",
                  options: [
                    "Because of the cost",
                    "Because they feel better after a few days",
                    "Because the trial ended",
                    "Because of side effects",
                  ],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · טקסט מלא 🌟\nשאלות מעורבות - NOT, הגבלה, מספרים ושמות.",
            },
            {
              type: "passage-mcq",
              text: 'I  Three years ago, the town of Rivertown started a recycling programme. According to Mayor Diane Cole, only 15% of households recycled regularly before the programme began. Today, more than 70% of households recycle every week.\n\nII  The programme is run by environmental scientist Dr. Tomas Bell. "We did not expect such fast progress," says Dr. Bell. "No other town in the region has reached this level in under three years." According to Dr. Bell, the most important factor was door-to-door collection, introduced in 2021.\n\nIII  Not everyone supports the programme. Some residents complain that the new bins are too small. However, a recent survey found that 90% of residents want the programme to continue, and only 3% want it to stop.',
              questions: [
                {
                  prompt:
                    "Which of the following is NOT true about Rivertown's recycling programme?",
                  options: [
                    "More than 70% of households recycle every week",
                    "Door-to-door collection began in 2021",
                    "All residents are happy with the new bins",
                    "A survey found that 90% of residents want it to continue",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "According to Dr. Bell, what was the MOST important factor in the programme's success?",
                  options: [
                    "Mayor Diane Cole's leadership",
                    "Door-to-door collection",
                    "Smaller bins",
                    "Public surveys",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt:
                    "According to the text, what percentage of households recycled regularly before the programme began?",
                  options: ["15%", "70%", "90%", "3%"],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "In which paragraph does Mayor Diane Cole appear, and what does she say?",
                  options: [
                    "פסקה I - only 15% recycled before the programme",
                    "פסקה II - the most important factor was collection",
                    "פסקה III - most residents want to continue",
                    "היא לא מוזכרת בטקסט",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "According to the text, in which year did door-to-door collection begin?",
                  options: ["2015", "2021", "1990", "2023"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · טקסט מלא 💎\nרמת בחינה. שאלות מעורבות ללא עזרה.",
            },
            {
              type: "passage-mcq",
              text: 'I  Two years ago, Green Valley High School had almost no working computers in its library. According to Principal Laura Kim, only 12 out of 40 computers still worked. Today, the library has 55 new computers and free wifi throughout the building.\n\nII  The renovation was led by IT coordinator Mr. David Osei. "We did not receive government funding," he explains. "No company offered to help at first." According to Mr. Osei, the most useful change was training students as tech helpers, a project that began in September 2022.\n\nIII  Not all teachers were convinced at first. A few worried that students would waste time online. However, a recent survey found that 88% of teachers now say the library is more useful for lessons, and only 2% still have concerns.',
              questions: [
                {
                  prompt:
                    "Which of the following is NOT true about the library renovation?",
                  options: [
                    "The library now has 55 new computers",
                    "The training project began in September 2022",
                    "The government paid for the whole renovation",
                    "88% of teachers say the library is more useful now",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "According to Mr. Osei, what was the MOST useful change?",
                  options: [
                    "New computers",
                    "Free wifi",
                    "Training students as tech helpers",
                    "Government funding",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt:
                    "According to the text, how many computers still worked before the renovation?",
                  options: ["55", "40", "12", "2%"],
                  correctIndex: 2,
                },
                {
                  prompt: "In which paragraph does Principal Laura Kim appear?",
                  options: ["פסקה I", "פסקה II", "פסקה III", "לא מוזכרת"],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "According to the survey, what percentage of teachers still have concerns?",
                  options: ["88%", "2%", "55", "40"],
                  correctIndex: 1,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב מסכם - כל השיטה ביחד\n\nמפה ← רמזור ← כלי ← תשובה.\nבכל שאלה תזהו איזה כלי צריך: שם או מספר שמכוונים אתכם, NOT או most / only שמשנים את התשובה.",
            },
            {
              type: "passage-mcq",
              text: "THE ROOFTOP BEES OF MILLBROOK\n\nI  Ten years ago, bees were disappearing from cities around the world. However, one small town found a simple solution. In 2019, the Millbrook library began keeping beehives on its roof.\n\nII  The project was started by librarian Rachel Stone. According to Ms. Stone, only two people knew how to care for bees at the beginning, but today twenty volunteers help. The hives produce about 300 jars of honey a year, and most of the honey is sold to fund children's books.\n\nIII  Not everyone was happy. According to Councillor David Green, the hives are dangerous, and no one asked the neighbours before they were built. Nevertheless, no visitor has ever been stung, and the library now receives 40% more visitors than before.",
              questions: [
                {
                  prompt: "מפה: קראו רק את הכותרת ופסקה I. על מה הטקסט?",
                  options: [
                    "ספרייה בעיר שמחזיקה כוורות",
                    "בעיית היעלמות הדבורים בעולם",
                    "מכירת דבש לילדים",
                    "ביקורת על מועצת העיר",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    'השאלה: "According to Councillor David Green, what is one drawback of the hives?" - מה הצבע לפני שמחפשים?',
                  options: [
                    "🟢 ירוק - הכל ברור",
                    "🟡 צהוב - המילה drawback לא ברורה",
                    "🔴 אדום - מוותרים",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "מפענחים: מה זה drawback?",
                  options: ["חיסרון", "יתרון", "הצלחה"],
                  correctIndex: 0,
                },
                {
                  prompt: "מה מילת המפתח שמכוונת אתכם, ובאיזו פסקה היא נמצאת?",
                  options: [
                    "David Green - פסקה III",
                    "hives - פסקה I",
                    "Rachel Stone - פסקה II",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "מה התשובה?",
                  options: [
                    "The hives are dangerous",
                    "The library gets more visitors",
                    "Only two people knew how to care for bees",
                    "Honey is sold for children's books",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    'השאלה: "According to Ms. Stone, what happens to MOST of the honey?" - איזה כלי מילת ההגבלה מפעילה?',
                  options: [
                    "כמה תשובות מהטקסט",
                    "תשובה אחת ספציפית",
                    "את כל האפשרויות",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "מה התשובה?",
                  options: [
                    "It is sold to fund children's books",
                    "Twenty volunteers help",
                    "The hives produce 300 jars a year",
                    "Two people care for the bees",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt:
                    "Which of the following is NOT mentioned in paragraph III?",
                  options: [
                    "The hives are dangerous",
                    "No visitor has ever been stung",
                    "The library has more visitors now",
                    "The honey tastes bad",
                  ],
                  correctIndex: 3,
                },
                {
                  prompt:
                    'השאלה: "By how much did the number of visitors increase?" - מה מחפשים בטקסט?',
                  options: [
                    "40% - סורקים את הטקסט, בלי לקרוא מההתחלה",
                    "2019",
                    "300 jars",
                    "twenty",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "מה התשובה?",
                  options: [
                    "By 40%",
                    "By 300 jars",
                    "By twenty people",
                    "By two people",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
