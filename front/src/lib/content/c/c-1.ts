// Part A - Reading Skills. One node per programme lesson (lesson00…lesson12).
// Source: docs/module c/insertprogram/lesson##_module_c.docx
import type { LessonNode } from "../types";

export const c1Lessons: LessonNode[] = [
  {
    id: "l00",
    section: "c-1",
    titleHe: "אני מחפש, לא קורא",
    titleEn: "Mindset",
    required: ["vocab-test"],
    position: { x: 0, y: 540 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'הנה סיפור שמתרחש לפחות 3 פעמים בכל מחצית: יש לכם את קבוצת הוואטסאפ לאנגלית שיש בה 500 הודעות לפחות. וכמובן שיש תמיד את החבר ההוא ששואל : "נו, מתי הבחינה? מה החומר?"\n\n במקרה זה, האם אתם גוללים 500 הודעות מההתחלה בכדי למצוא את התשובה ???בטח שלא!\n\nפשוט לוחצים על 🔍 ומחפשים מילה אחת. תוך שנייה - אתם שם ואז אתם מקפיצים לו את התשובה . בכך חסכתם לעצמכם זמן ומאמץ מיותר אפילו בלי לחשוב על זה. \n\n ',
        },
        {
          type: "preface",
          text: "אז חבר׳ה, זה בדיוק מה שעושים במבחן הבגרות באנגלית. בקורס זה נלמד הרגלים חדשים ושיטות יעילות שיעזרו לכם למצוא את התשובות הנכונות ב Module C ולכן אני רוצה שתסתכלו על המבחן בצורה הזאת: \nהטקסט = קבוצת הוואטסאפ.\nהשאלה = החיפוש.\nמילת המפתח = מה שמחפשים ב-🔍",
        },
        {
          type: "preface",
          text: "אבל מסתבר שרוב התלמידים עושים את זה הפוך\n\nמתחילים לקרוא את הטקסט מהמילה הראשונה. מנסים להכניס הכל לראש. בלאקאוט. הפאניקה מתחילה.\nאחרי 30 דקות הם עדיין בפסקה 3 ולכתיבה לא נשאר זמן.\n\nקבוצה שניה  ומקווה שאתם לא חלק מהם, עושה הפוך. לא קוראים את הטקסט בכלל, מתחילים רק בשאלות. חושבים שמה שעובד בפסיכומטרי יעבוד בבגרות.\n\nלֹא לא לֹא! פה בדיוק צריך לעשות לכם סדר שתבינו מה לעשות ואיך לעשות. אבל לאט לאט, בוא נתקדם! ",
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
          text: "בוא נראה איך זה עובד בדוגמא פשוטה.תקראו את המשפט הבא:\n\nElephants are the largest land animals on Earth. They live in Africa and Asia. African elephants are bigger than Asian elephants. \n\nהשאלה:  Where do elephants live?",
        },
        {
          type: "steps",
          steps: [
            'קוראים את השאלה: "Where do elephants live?" - המילה שמחפשים היא live ולא elephant כי הבנו שהפסקה כן מדברת על הפילים.',
            " קוראים פעם אחת בכדי להבין. אחרי זה הולכים לשאלה ולא קוראים שוב מההתחלה - סורקים ומחפשים live בטקסט.",
            'מצאנו: "They live in Africa and Asia".',
            "כותבים: They live in Africa and Asia. - 8 שניות, בלי לקרוא את כל הפסקה.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: "Dogs are one of the most popular pets in the world. They were first tamed from wolves thousands of years ago. Today, there are more than 400 different breeds of dog.",
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
            {
              type: "passage-mcq",
              text: "\nבוא ננסה עוד תרגיל ביחד:\n\nThe Great Wall of China is one of the most famous structures in the world. It was built over many centuries to protect China from its enemies. The wall is about 21,000 kilometers long. Today, millions of tourists visit the wall every year.",
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
                "להבין כל מילה",
                "לתרגם הכל לעברית",
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
              prompt: "תלמידֿֿֿ מנסה לקרוא ולהבין את כל הטקסט. מה יקרה?",
              options: [
                "יענה על כל השאלות נכון",
                "יגמור מהר",
                "סביר להניח שלא יישאר לו זמן לכתיבה",
              ],
              correctIndex: 2,
              explanation:
                "קריאת הכל = בזבוז זמן. הבחינה נמשכת 1:45 - זמן הכתיבה ייגמר.",
            },
            {
              type: "mcq",
              prompt:
                '"אני מחפש בכדי להצליח בבחינה, לא קורא במובן באופן סטטי" - זה המשפט שמסכם את השיעור שלנו .',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: "נכון. זו המנטליות שמשנה את כל הגישה לבחינה.",
            },
          ],
        },
        { screens: [] },
      ],
    },
  },
  {
    id: "l01",
    section: "c-1",
    titleHe: "מפת הדרכים",
    titleEn: "The Road Map",
    required: ["l00"],
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
          text: "\n  אתם לא מתחילים לקרוא בלי כיוון.\n\n  לפני שקוראים מילה אחת - בונים מפה.\n\n  יש לכם את הכותרת: THE RETURN OF THE TREES\n  הטקסט קשור לעצים. זה כבר מידע.\n\n  עכשיו מסתכלים על הפסקאות - רק על המשפט הראשון של כל אחת:\n  פסקה 1: מדענים שותלים מיליארד עצים.\n  פסקה 2: ההשפעה על האקלים.\n  פסקה 3: הביקורת על הפרויקט.\n\n  וזהו. תוך דקה כבר יש לכם מפה בראש.\n  המפה לא מספרת לכם את כל הטקסט.\n  היא רק אומרת לכם על מה הטקסט מדבר ואיפה אתם נמצאים בו.  וזה כבר מספיק כדי לא ללכת לאיבוד.",
        },
        { type: "preface", text: "" },
        {
          type: "preface",
          text: "steps:\n  - קוראים את הכותרת. מה הנושא?\n  - מסתכלים על מספר הפסקאות. כמה יש?\n  - קוראים את המשפט הראשון של כל פסקה בלבד.\n  - כותבים בראש: P1 = ___. P2 = ___. P3 = ___.\n  - עכשיו פותחים שאלה ראשונה - ויודעים ישר לאיזו פסקה ללכת.",
        },
        {
          type: "preface",
          text: "הדבר הכי חשוב: **לא רצים ישר לשאלות.**\nלפני השאלות עושים שני דברים:\n**1. קוראים את הכותרת.**\n**2. קוראים את הפסקה הראשונה.**\nרק אחר כך עוברים לשאלות.\nלמה? כי הכותרת והפסקה הראשונה נותנות לכם את **מפת הדרכים של הטקסט** — על מה הוא מדבר ולאן הוא הולך.\nכשכבר יש לכם כיוון, הרבה יותר קל להבין את השאלות ולמצוא את התשובות.",
        },
        { type: "preface", text: "" },
        {
          type: "preface",
          text: "שלב 2: הפסקה הראשונה\n\nEvery year, forests around the world are destroyed by fire, farming, and pollution.\nHowever, there is good news.\nIn 2019, scientists started a project to plant one billion trees in Africa by 2030.\nThe project has already planted over 200 million trees in 15 countries.עכשיו מפרקים את הפסקה:\n1. מה הבעיה?\nforests → destroyed\nהיערות נהרסים.\nלמה?\nfire / farming / pollution\nלא חייבים לדעת לתרגם כל מילה בצורה מושלמת.\nמספיק להבין: יש בעיה עם היערות.\n2. חפשו מילת שינוי\nHowever\nזו מילה חשובה מאוד.\nHowever = אבל / אולם\nהיא אומרת לנו:\nעד עכשיו דיברו על בעיה — עכשיו כנראה יגיע משהו אחר.\nואכן מיד אחריה:\ngood news\nכלומר: יש בעיה, אבל יש גם פתרון או שינוי חיובי.\n3. מי עושה משהו?\nscientists\nהמדענים.\nמה הם עשו?\nstarted a project\nהתחילו פרויקט.\nמה מטרת הפרויקט?\nplant one billion trees\nלשתול מיליארד עצים.\n4. שימו לב למספרים\nמספרים בטקסט הם כמו שלטים בכביש:\n2019 → מתי הפרויקט התחיל\none billion trees → מה היעד\n2030 → עד מתי\n200 million trees → כמה כבר נשתלו\n15 countries → בכמה מדינות\nלא צריך לזכור את כל המספרים עכשיו.\nצריך רק לזהות שהם כנראה יהיו חשובים בשאלות.\nאז מה מפת הדרכים שלנו?\nבעיה: יערות נהרסים.\n↓\nHowever\n↓\nפתרון: מדענים התחילו פרויקט.\n↓\nמטרה: לשתול מיליארד עצים באפריקה.\nוזה כבר מספיק כדי להבין את הכיוון של הטקסט.זכרו:\nכותרת → פסקה ראשונה → מילות מפתח → שאלות\nלא קוראים כל מילה.\nמחפשים נושא, בעיה, שינוי, פתרון ומספרים חשובים.",
        },
        { type: "steps", steps: [""] },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: "THE CITY GARDEN PROJECT\n\nFive years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city.",
              questions: [
                {
                  prompt: "קראו כותרת + פסקה 1 בלבד. על מה הטקסט?",
                  options: [
                    "על מחקר בבריאות",
                    "על גינות בעיר ועל שינוי סביבתי",
                    "על חינוך בבתי ספר",
                    "על תחבורה ציבורית",
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
              text: "YOUR TURN - 30 שניות. כותרת + פסקה 1. על מה הטקסט?",
            },
            {
              type: "passage-mcq",
              text: "LEARNING TO SWIM AS AN ADULT\n\nLearning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.",
              questions: [
                {
                  prompt: "על מה הטקסט?",
                  options: [
                    "ילדים שלומדים לשחות",
                    "בריכות שחייה בערים גדולות",
                    "מבוגרים שלומדים לשחות",
                    "סקר על ערים גדולות",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "אילו מילים בפסקה נתנו לכם את התשובה?",
                  options: [
                    '"adults" ו-"cannot swim"',
                    '"survey" ו-"cities"',
                    '"experts" ו-"late"',
                    '"many people" ו-"think"',
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"30 שניות. כותרת + פסקה 1. עכשיו יש לי מפה."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: 30 שניות. כותרת + פסקה 1. עכשיו יש לי מפה.",
            },
            {
              type: "mcq",
              prompt: 'קראו את הכותרת: "THE RETURN OF THE TREES". על מה הטקסט?',
              options: [
                "על בניינים בעיר",
                "על עצים שחוזרים ונשתלים",
                "על בעלי חיים בסכנה",
              ],
              correctIndex: 1,
              explanation:
                "כותרת = נושא. THE RETURN OF THE TREES = עצים שחוזרים.",
            },
            {
              type: "mcq",
              prompt: "מה קוראים כדי לבנות את מפת הדרכים?",
              options: [
                "את כל הטקסט",
                "כותרת + כל הפסקאות",
                "כותרת + פסקה 1 בלבד",
              ],
              correctIndex: 2,
              explanation: "כותרת + פסקה 1 = 30 שניות. זה מספיק.",
            },
            {
              type: "mcq",
              prompt: "מפת הדרכים נותנת לכם את כל התשובות לשאלות.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                "שקר. המפה נותנת רק את הנושא הכללי - מספיק כדי לא להיות אבודים.",
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
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.",
              questions: [
                {
                  prompt: "על מה הטקסט?",
                  options: [
                    "על זיהום אוויר בערים",
                    "על פרויקט נטיעת עצים באפריקה",
                    "על כריתת יערות בעולם",
                  ],
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
            {
              type: "mcq",
              prompt: "כדאי לקרוא את פסקה 1 גם אם כבר קראתם את הכותרת.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation:
                "נכון. כותרת = נושא, פסקה 1 = פרטים. ביחד מפה טובה יותר.",
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
              type: "mcq",
              prompt:
                '"LEARNING TO SWIM AS AN ADULT - I Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults cannot swim. II One study found that adults who learned later often became stronger swimmers."\n\nמה נכלל במפת הדרכים?',
              options: [
                "הכותרת + פסקה I בלבד",
                "הכותרת + פסקה II",
                "כל הפסקאות",
                "רק המשפט האחרון",
              ],
              correctIndex: 0,
              explanation:
                "כותרת: LEARNING TO SWIM AS AN ADULT. פסקה I בלבד - שני המשפטים הראשונים.",
            },
            {
              type: "self-check",
              prompt:
                "על סמך הכותרת ופסקה 1 שלמעלה - על מה הטקסט? ענו במשפט אחד.",
              modelAnswer: "הטקסט על מבוגרים שלומדים לשחות.",
            },
            {
              type: "self-check",
              prompt:
                "כמה זמן לוקח לקרוא כותרת + פסקה 1, ולמה זה שווה את הזמן?",
              modelAnswer:
                '30 שניות. אחרי זה יודעים על מה הטקסט ולא נכנסים לשאלות "עיוור".',
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
    position: { x: 100, y: 780 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "\nבשיעור הקודם למדנו:\n**שלב 1: כותרת**\n**שלב 2: פסקה ראשונה**\nלמה?\nכי לפני שאתם הולכים לשאלות, אתם צריכים לדעת: \n**על מה הטקסט מדבר?**\nעצים?\nטכנולוגיה?\nחיות?\nבית ספר?\nבריאות?\nגם אם הבנתם רק חלק — כבר יש לכם כיוון.\n**לא הולכים לשאלות בלי לדעת על מה הטקסט.**",
        },
        {
          type: "preface",
          text: 'מה זה כל כך חשוב?\nכשאתם יודעים את הנושא, אתם הרבה יותר רגועים.\nאתם לא מרגישים שכל הטקסט הוא אוסף של מילים לא מוכרות.\nלמשל:\nאם כבר הבנתם שהטקסט עוסק ב־**trees**,\nואתם רואים:\n**forest / plant / environment**\nגם אם אתם לא מכירים כל מילה — המוח כבר מבין את הכיוון.\n**הכותרת + הפסקה הראשונה = מפת הדרכים שלכם.**\nועכשיו אפשר לעבור לשאלות.\n\n אבל רגע...\nגם כשמגיעים לשאלות, יש טעות שתלמידים עושים כל הזמן:\nהם קוראים שאלה...\nלא ממש מבינים אותה...\nובכל זאת מתחילים לחפש תשובה בטקסט.\nופה מתחילות הרבה מהטעויות.\nלפני שאתם מחפשים תשובה, צריך לבדוק דבר אחד:האם אני באמת מבין את השאלה?\n\n הסיטואציה שכולנו מכירים\nתלמיד קורא שאלה מספר 3 ומרים יד.\nאני שואל:\n**"מה הבעיה?"**\nוהוא אומר:\n**"אני לא מוצא את התשובה."**\nאז אני שואל:\n**"אתה מבין את השאלה?"**\nוהתלמיד אומר:\n**"כן... נראה לי."**\nואז אני אומר:\n**"תסביר לי בעברית מה השאלה רוצה."**\nופתאום...\nהוא לא באמת יודע להסביר.\nופה בדיוק הבעיה.אם אתם לא יודעים להסביר מה השאלה רוצה — עדיין לא מתחילים לענות.\nמסך 5 — שיטת הרמזור\nמהיום, כל שאלה מקבלת צבע:🟢 ירוק\n**אני מבין את השאלה.**\nאני יודע להסביר בעברית מה רוצים ממני.\nאפשר להתקדם ולחפש את התשובה.\n🟡 צהוב\n**אני מבין חלקית.**\nאני מכיר חלק מהמילים, אבל לא בטוח מה בדיוק רוצים ממני.\n**אסור לנחש.**\nקודם מפענחים את השאלה.\n🔴 אדום\n**אני לא מבין את השאלה.**\nאני לא יודע מה רוצים ממני.\nעוצרים.\nלא קוראים את כל הטקסט שוב.\nלא מנחשים.\nקודם מבינים את השאלה.\nמסך 6 — דוגמה: רמזור ירוק\nהשאלה:\n**Why did the scientists start the project?**\nאני בודק:\n**Why** = למה\n**scientists** = מדענים\n**start the project** = התחילו את הפרויקט\nאני יכול להסביר בעברית:\n**למה המדענים התחילו את הפרויקט?**\nמצוין.🟢 ירוק\nעכשיו אפשר לחפש בטקסט את הסיבה.\nמסך 7 — דוגמה: רמזור צהוב\nהשאלה:\n**What has the project achieved so far?**\nאני מבין:\n**project** = פרויקט\nאבל...\nמה זה:\n**achieved**?\nומה זה:\n**so far**?\nאני עדיין לא בטוח מה השאלה רוצה.🟡 צהוב\nלא רצים לטקסט.\nמנסים להבין:\n**so far = עד עכשיו**\n**achieved = השיג / הצליח לעשות**\nאז השאלה בעצם אומרת:\n**מה הפרויקט הצליח לעשות עד עכשיו?**\nעכשיו:🟢 ירוק\nאפשר לחפש תשובה.\nמסך 8 — דוגמה: רמזור אדום\nהשאלה:\n**According to the text, what is one advantage of the project?**\nאם אתם מסתכלים על השאלה ולא יודעים בכלל מה זה:\n**advantage**\nאז כרגע:🔴 אדום\nאל תחפשו תשובה עדיין.\nמפרקים את השאלה:\n**According to the text** = לפי הטקסט\n**one advantage** = יתרון אחד\n**project** = פרויקט\nעכשיו השאלה ברורה:\n**לפי הטקסט, מהו יתרון אחד של הפרויקט?**🟢 ירוק\nעכשיו אפשר לענות.\nמסך 9 — חוק הזהב\nלפני שאתם עונים על כל שאלה, שאלו את עצמכם:"האם אני יכול להסביר בעברית מה השאלה רוצה ממני?"\nאם כן:\n🟢 **GO**\nאם בערך:\n🟡 **STOP AND CHECK**\nאם לא:\n🔴 **STOP**\nאל תחפשו תשובה לשאלה שאתם עדיין לא מבינים.\nמסך 10 — כל השיטה עד עכשיושלב 1\n**Read the title**\nמה הנושא?שלב 2\n**Read the first paragraph**\nמה הכיוון של הטקסט?שלב 3\nעוברים לשאלה.שלב 4\nבודקים את הרמזור:\n🟢 מבין → עונה\n🟡 חצי מבין → מפרק את השאלה\n🔴 לא מבין → עוצר\nורק אחרי שהרמזור ירוק —מחפשים את התשובה בטקסט.\nמסך סיכום\nזכרו:\n**TITLE → FIRST PARAGRAPH → QUESTION → TRAFFIC LIGHT → ANSWER**\nאו בעברית:\n**כותרת → פסקה ראשונה → שאלה → רמזור → תשובה**\nהכלל הכי חשוב:Don\'t answer a question you don\'t understand.\nאל תענו על שאלה שאתם לא באמת מבינים.',
        },
        {
          type: "preface",
          text: 'הסיטואציה שכולנו מכירים\nתלמיד קורא שאלה מספר 3 ומרים יד.\nאני שואל:\n"מה הבעיה?"\nוהוא אומר:\n"אני לא מוצא את התשובה."\nאז אני שואל:\n"אתה מבין את השאלה?"\nוהתלמיד אומר:\n"כן... נראה לי."\nואז אני אומר:\n"תסביר לי בעברית מה השאלה רוצה."\nופתאום...\nהוא לא באמת יודע להסביר.\nופה בדיוק הבעיה.אם אתם לא יודעים להסביר מה השאלה רוצה — עדיין לא מתחילים לענות.',
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
                "🟢 מילון - 30 שניות - ועונים",
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
                '"Why did this occur in 2019?" - המילה occur לא ברורה. צבע ופעולה?',
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
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"לא ירוק - מילון 30 שניות. עדיין לא? M ועוברים."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: לא ירוק - לא עונים.",
            },
            {
              type: "mcq",
              prompt: '"What do we learn from paragraph I?" - מה הצבע שלכם?',
              options: [
                "🔴 אדום - לא מבין",
                "🟡 צהוב - מבין חלקית",
                '🟢 ירוק - "מה לומדים מפסקה 1?"',
              ],
              correctIndex: 2,
              explanation: '🟢 ירוק. "מה לומדים מפסקה 1?" - ברור. עונים.',
            },
            {
              type: "mcq",
              prompt: '"What does visible mean?" - מה הצבע שלכם?',
              options: [
                "🟢 ירוק - ברור",
                "🟡 צהוב - המילה visible לא ברורה ← מילון",
                "ממשיכים בלי לבדוק",
              ],
              correctIndex: 1,
              explanation:
                "visible לא ברור ← מילון, 30 שניות. לא עונים לפני שירוקים.",
            },
            {
              type: "mcq",
              prompt: "צהוב זה בסדר. אפשר לענות.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. צהוב = עדיין לא ברור. רק ירוק = עונים.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 2 🌟\nעכשיו על שאלות אמיתיות.",
            },
            {
              type: "mcq",
              prompt:
                'איזו שאלה היא 🟡 צהוב - כלומר דורשת מילון?\n\n1. "According to Dr. Diallo, why do trees die?"\n2. "What does contribute mean in paragraph II?"\n3. "Give ONE answer from paragraph III."',
              options: ["שאלה 1", "שאלה 2", "שאלה 3", "כל השלוש"],
              correctIndex: 1,
              explanation:
                'according to + why = ירוק. "give ONE answer" = ירוק. מילה לא מוכרת בשאלה = צהוב ← מילון.',
            },
            {
              type: "mcq",
              prompt: "כמה זמן מותר לבזבז על מילה אחת במילון?",
              options: ["כמה שצריך", "30 שניות בלבד", "3 דקות"],
              correctIndex: 1,
              explanation: "מקסימום 30 שניות. לא מצאתם? M קטן ועוברים הלאה.",
            },
            {
              type: "mcq",
              prompt:
                '"give ONE answer" = ירוק - כי אפשר להסביר את השאלה בעברית במשפט אחד.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: 'נכון. "תנו תשובה אחת מהטקסט" - ברור. ירוק.',
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
              type: "mcq",
              prompt:
                'אילו שאלות דורשות מילון?\n\n1. "What do we learn from paragraph I?"\n2. "What does environmentalists mean?"\n3. "According to Dr. Klein, give ONE reason."\n4. "How did the phenomenon affect students?"\n5. "Give TWO answers from paragraph III."',
              options: ["1 ו-3", "2 ו-4", "3 ו-5", "כולן"],
              correctIndex: 1,
              explanation:
                "environmentalists ו-phenomenon אינן ברורות ← מילון. השאר ירוקות.",
            },
            {
              type: "self-check",
              prompt:
                "מלאו את הכלל: רק _______ = עונה. צהוב מרגיש כמו _______ - אבל הוא לא.",
              modelAnswer: "רק ירוק = עונה. צהוב מרגיש כמו ירוק - אבל הוא לא.",
            },
            {
              type: "self-check",
              prompt: 'תלמיד קרא שאלה, "הבין", ענה - וקיבל 0. מה כנראה קרה?',
              modelAnswer:
                "הוא היה בצהוב ולא בירוק. חשב שהבין, אבל לא הבין מה בדיוק השאלה ביקשה.",
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
    position: { x: 10, y: 900 },
    big: false,
    content: {
      preface: [
        {
          type: "summary",
          title: "THE TOOL - P1",
          lines: [
            "1 · קראו את השאלה עד הסוף - לא את הטקסט.",
            "2 · מצאו מילת מפתח - המילה שתחפשו בטקסט.",
            "3 · אתרו אותה בטקסט - כמו חיפוש בוואטסאפ.",
            "4 · קראו רק את המשפט שמכיל אותה.",
            "5 · ענו - מהטקסט בלבד, לא מהראש.",
          ],
        },
        {
          type: "preface",
          text: 'מהי מילת מפתח?\n\nבדרך כלל השם החשוב בשאלה. לא what, how או why - אלה מילות שאלה.\n\n"Why did the scientists start the project?" ← מילת מפתח = scientists / project',
        },
        {
          type: "preface",
          text: "WATCH IT - P1 בפעולה\n\nGREEN AFRICA (פסקה II)\n\n\"The project is led by Dr. Amara Diallo, a scientist from Senegal. 'We do not just plant trees,' says Dr. Diallo. 'We teach local people how to care for them.' According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\"\n\nהשאלה: According to Dr. Diallo, why do most trees die?",
        },
        {
          type: "steps",
          steps: [
            'קוראים את השאלה: "לפי ד״ר דיאלו, למה רוב העצים מתים?"',
            "מילות מפתח: Dr. Diallo + trees die.",
            "מחפשים את Dr. Diallo בטקסט - הוא בפסקה II.",
            'קוראים רק שם: "most trees die because nobody looks after them".',
            "תשובה: Because nobody looks after them.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.\n\nII  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.',
              questions: [
                {
                  prompt:
                    "השאלה: What do we learn from paragraph I about the Green Africa project? - מהי מילת המפתח?",
                  options: [
                    "forests",
                    "Green Africa",
                    "However",
                    "scientists say",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "באיזו פסקה מצאתם אותה?",
                  options: ["פסקה I", "פסקה II", "פסקה III", "לא מופיעה בטקסט"],
                  correctIndex: 0,
                },
                {
                  prompt: "מה התשובה?",
                  options: [
                    "It teaches local people how to care for trees",
                    "It has already planted over 200 million trees in 15 countries",
                    "It made rivers in Kenya flow again",
                    "It reduced carbon by 15%",
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
              text: "YOUR TURN - חמישה שלבים, לבד.\n\nהשאלה: What happened in Ethiopia after trees were planted? (paragraph III)",
            },
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
              lines: ['"הטקסט קשה? לא מבין? - P1 עדיין עובד. מחפש, לא קורא."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: שאלה → מילת מפתח → אתר → קרא → ענה.",
            },
            {
              type: "mcq",
              prompt:
                '"According to Dr. Diallo, why do most trees die?" - מהי מילת המפתח?',
              options: ['"why"', '"Dr. Diallo" / "trees die"', '"According"'],
              correctIndex: 1,
              explanation:
                '"Dr. Diallo" ו-"trees die" הן מה שמחפשים בטקסט. "why" ו-"according" הן מילות שאלה.',
            },
            {
              type: "mcq",
              prompt: "מהו הסדר הנכון של חמשת שלבי P1?",
              options: [
                "קרא השאלה ← מצא מילת מפתח ← אתר בטקסט ← קרא את המשפט ← ענה",
                "קרא את הטקסט ← קרא השאלה ← ענה ← בדוק ← סיים",
                "מצא מילת מפתח ← קרא השאלה ← ענה ← אתר בטקסט ← קרא",
                "קרא השאלה ← ענה ← אתר בטקסט ← קרא את המשפט ← בדוק",
              ],
              correctIndex: 0,
              explanation:
                "1-קרא השאלה · 2-מילת מפתח · 3-אתר בטקסט · 4-קרא את המשפט · 5-ענה.",
            },
            {
              type: "mcq",
              prompt: "בשלב 4 של P1 קוראים את כל הפסקה.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                "שקר. קוראים רק את המשפט שמכיל את מילת המפתח, ואולי את זה שלפניו או אחריו.",
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
              type: "mcq",
              prompt:
                '"What happened to rivers in Kenya? (paragraph III)" - מהי מילת המפתח, ובאיזו פסקה?',
              options: [
                "What - פסקה I",
                "Kenya - פסקה III",
                "rivers - פסקה II",
              ],
              correctIndex: 1,
              explanation:
                '"Kenya" - שם מקום ספציפי. הפסקה כבר מצוינת בשאלה: III.',
            },
            {
              type: "self-check",
              text: 'II  "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein.',
              prompt:
                'מלאו את P1 לשאלה "According to Dr. Klein, how did adults improve?" - מילת מפתח, פסקה, ותשובה.',
              modelAnswer:
                "מילת מפתח: Dr. Klein / improve. פסקה: II. תשובה: By understanding explanations and correcting their mistakes more quickly.",
            },
            {
              type: "mcq",
              prompt: "P1 עובד גם כשהטקסט קשה מאוד ולא מבינים אותו.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation:
                "נכון. P1 הוא חיפוש, לא הבנה - מחפשים מילת מפתח בלי קשר לקושי.",
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
              type: "passage-mcq",
              text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.\n\nII  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
              questions: [
                {
                  prompt:
                    '"When did scientists start the project?" - באיזה שלב של P1 מוצאים את "2019"?',
                  options: [
                    "שלב 1 - קריאת השאלה",
                    "שלב 3 - איתור בטקסט",
                    "שלב 5 - כתיבת התשובה",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them.',
              prompt:
                '"According to Dr. Diallo, why do most trees die? Give ONE answer." - כתבו את חמשת שלבי P1 ואת התשובה.',
              modelAnswer:
                '1-קורא את השאלה. 2-מילת מפתח: Dr. Diallo / trees die. 3-פסקה II. 4-"most trees die because nobody looks after them". 5-תשובה: Because nobody looks after them.',
            },
            {
              type: "self-check",
              prompt: "הסבירו בעברית: למה P1 יעיל דווקא לתלמיד עם אנגלית חלשה?",
              modelAnswer:
                "כי הוא נותן נוסחה קבועה לכל שאלה. לא צריך לחשוב מחדש בכל פעם - רק לבצע חמישה שלבים.",
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
            {
              type: "preface",
              text: "עשרה משפטים בעברית. סמנו כל מספר וכל שם פרטי במשפט.",
            },
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
              text: "ד״ר יונתן כרמי גילה כי 60% מהתלמידים משתמשים בספרייה מדי שבוע.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [5] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "תוך 4 שנים הקימה החברה 25 סניפים חדשים ברחבי הארץ.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "מספרים", color: "sky", indices: [1, 5] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "המורה שרון גל לימדה באותה כיתה במשך 18 שנה.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [1, 2] },
                { name: "מספרים", color: "sky", indices: [7] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "פרופ׳ דוד אשכנזי פרסם 3 מאמרים על הנושא בשנה האחרונה.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [4] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "כ-500 מתנדבים הצטרפו לפרויקט הניקיון בעיר חיפה.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [0] },
                { name: "שמות", color: "amber", indices: [6] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "המהנדסת רינת לוי בנתה גשר שחסך לעיר 12 מיליון שקל.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [1, 2] },
                { name: "מספרים", color: "sky", indices: [7, 8, 9] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "אוניברסיטת תל אביב פתחה תוכנית מחקר בת 6 שנים.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [7] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "ראש העיר משה כהן הכריז כי 2,000 עצים ייטעו עד סוף השנה.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [2, 3] },
                { name: "מספרים", color: "sky", indices: [6] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מספר וכל שם פרטי במשפט.",
              text: "הספרנית מירי אבן ניהלה את הספרייה במשך 30 שנה ברציפות.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [1, 2] },
                { name: "מספרים", color: "sky", indices: [7] },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. עשרה משפטים. סמנו כל מספר וכל שם פרטי.",
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "In 2015, Dr. Susan Park opened a new library in Riverside.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1] },
                { name: "שמות", color: "amber", indices: [2, 3, 4, 10] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Professor Mark Ellis found that 72% of students improved their grades.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [5] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "The company built 40 new schools across the country in just 5 years.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [3, 11, 12] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Engineer Laura Kim designed a bridge that saved the city 3 million dollars.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [10, 11, 12] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Over 800 volunteers joined the clean-up project in Manchester.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1] },
                { name: "שמות", color: "amber", indices: [8] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Dr. Peter Novak has taught at the university for 22 years.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [9, 10] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Greenfield University launched a research programme lasting 8 years.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1] },
                { name: "מספרים", color: "sky", indices: [7, 8] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "The mayor, James Carter, announced that 1,500 trees will be planted this year.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [2, 3] },
                { name: "מספרים", color: "sky", indices: [6, 7] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Nurse Hannah Cole treated more than 9,000 patients during the outbreak.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [6, 7] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "The charity raised 250,000 dollars thanks to Coach Daniel Reyes.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [3, 4] },
                { name: "שמות", color: "amber", indices: [7, 8, 9] },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "שבע פסקאות. סמנו כל מספר וכל שם פרטי בפסקה.",
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "A charity based in Boston has helped local schools for over 12 years. Its founder, Dr. Alice Monroe, says that more than 3,000 children have taken part in its programmes.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [4, 15, 16, 17] },
                { name: "מספרים", color: "sky", indices: [11, 12, 22, 23] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "In 2016, the town of Ashford built a new sports centre. According to Mayor Peter Grant, over 6,500 residents now use it every month.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "מספרים", color: "sky", indices: [1, 17, 18] },
                { name: "שמות", color: "amber", indices: [5, 13, 14, 15] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Professor Elena Vasquez studied sleep patterns among teenagers for 9 years. She found that 45% of them sleep less than 7 hours a night.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                { name: "מספרים", color: "sky", indices: [9, 10, 14, 20, 21] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "The hospital in Clearview treated 14,000 patients last year, a rise of 20% since 2019. Its director, Dr. Omar Rashid, credits the new emergency wing.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [3, 17, 18, 19] },
                { name: "מספרים", color: "sky", indices: [5, 6, 12, 14] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Since 2012, a small NGO called GreenPath has planted over 1 million trees across 30 countries. Its coordinator, Fiona Walsh, says the number keeps growing every year.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [1, 10, 11, 12, 14, 15],
                },
                { name: "שמות", color: "amber", indices: [6, 18, 19] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Coach Michael Yates has led the school's swimming team for 15 years. Under his guidance, the team has won 8 regional championships since 2014.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [0, 1, 2] },
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [10, 11, 19, 20, 21, 23],
                },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "A recent study by Dr. Rebecca Shaw found that only 18% of adults exercise for more than 3 hours a week. She surveyed 5,000 people across 40 cities.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שמות", color: "amber", indices: [4, 5, 6] },
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [10, 17, 18, 23, 24, 26, 27],
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "רמת בחינה. ארבעה טקסטים. סמנו כל מספר וכל שם פרטי.",
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "In 2008, a small group of teachers in the city of Denton started an after-school reading programme. Twenty years later, Dr. Karen Ibrahim reviewed the results: reading scores had risen by 35%, and 12 new branches had opened.\n\nThe programme now costs 600,000 dollars a year to run. According to Professor Liam Foster, more than 4,200 children take part in the programme every month.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [1, 31, 33, 34, 35, 42, 43, 55, 56],
                },
                {
                  name: "שמות",
                  color: "amber",
                  indices: [11, 20, 21, 22, 50, 51, 52],
                },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "A survey from 2017 found that 42% of teenagers wish they had learned to code. Dr. Nadia Petrov, who has taught computer science for 11 years, says most beginners give up within the first 2 months.\n\nHer school changed its approach in 2020. Since then, 75% of students finish the course, and the number of graduates has grown from 60 to 480 a year.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [3, 6, 24, 25, 34, 35, 42, 45, 59, 61],
                },
                { name: "שמות", color: "amber", indices: [15, 16, 17] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "For nearly 30 years, the fishing village of Port Ellen struggled with falling numbers of fish. In 2005, marine biologist Dr. Tomas Alvarez introduced new protection zones along 15 kilometres of coastline.\n\nThe results surprised everyone. By 2022, fish numbers had increased by 90%, and local fisherman Robert Doyle reported catching three times more than before.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [2, 3, 17, 28, 29, 37, 43],
                },
                {
                  name: "שמות",
                  color: "amber",
                  indices: [8, 9, 20, 21, 22, 47, 48],
                },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every number and every proper name.",
              text: "Ten years ago, only 200 families in the region of Kellwood had access to clean drinking water. Engineer Priya Nair led a project to build 18 new wells across the area.\n\nToday, according to local official Grace Whitman, over 14,000 people benefit from the new water system, and the project has expanded to 6 neighbouring villages.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "מספרים",
                  color: "sky",
                  indices: [4, 5, 25, 26, 27, 39, 40, 53, 54, 55],
                },
                { name: "שמות", color: "amber", indices: [10, 18, 19, 36, 37] },
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
    position: { x: -100, y: 1140 },
    big: false,
    content: {
      preface: [],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: 'I  Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city. Today, Greenville looks very different.\n\nII  The person behind this change is Dr. Maria Santos, a professor at Greenville University. "We wanted to show that any city can become greener," she says. According to Dr. Santos, the project cost only 500,000 dollars - much less than similar projects in other cities.\n\nIII  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
              questions: [
                {
                  prompt:
                    "השאלה: How many community gardens were created? - איזה מספר תחפשו בטקסט?",
                  options: ["2,000", "15", "85%", "500,000"],
                  correctIndex: 1,
                },
                {
                  prompt: "באיזו פסקה הוא נמצא, ומה התשובה?",
                  options: [
                    "פסקה I - 15 community gardens",
                    "פסקה II - 15 professors",
                    "פסקה III - 15% of residents",
                    "לא כתוב בטקסט",
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
              text: "YOUR TURN - שתי שאלות. מצאו את המספר, ואז ענו.",
            },
            {
              type: "self-check",
              text: "III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              prompt: "By how much did stress levels fall?",
              modelAnswer: "By 40%.",
            },
            {
              type: "self-check",
              text: "III  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
              prompt: "What percentage of people exercise outdoors now?",
              modelAnswer: "60%. (It increased from 15% to 60%.)",
            },
            {
              type: "mcq",
              prompt: 'למה "60%" לבד היא תשובה מסוכנת בשאלה כזאת?',
              options: [
                "כי צריך לכתוב את המספר במילים",
                "כי בטקסט יש עוד מספרים - 15% ו-85% - וצריך את זה שצמוד ל-exercise outdoors",
                "כי אחוזים אף פעם לא תשובה",
                "כי חייבים לצטט משפט שלם",
              ],
              correctIndex: 1,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"מספר בשאלה = GPS. ישר לשם."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: מספר בשאלה = GPS. ישר לשם.",
            },
            {
              type: "mcq",
              prompt: '"How many trees were planted?" - מה תחפשו בטקסט?',
              options: [
                'את המילה "trees" בלבד',
                "מספר שצמוד ל-trees / planted",
                "את שם הפרויקט",
              ],
              correctIndex: 1,
              explanation:
                "מספר = GPS. סורקים את הטקסט ומחפשים מספר שקשור ל-trees.",
            },
            {
              type: "mcq",
              prompt:
                '"According to the survey, what percentage of adults cannot swim?" - מה ה-Eye Catcher?',
              options: ["survey", "adults", "האחוז - 30%"],
              correctIndex: 2,
              explanation: "אחוז בשאלה = מספר = GPS. מחפשים אותו ישירות בטקסט.",
            },
            {
              type: "mcq",
              prompt: "מספר בשאלה אומר: לקרוא את הטקסט מההתחלה.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. מספר = GPS. סורקים - לא קוראים מההתחלה.",
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
              type: "mcq",
              prompt:
                'באילו שאלות יש Eye Catcher של מספר?\n\n1. "How many countries are in the project?"\n2. "What happened after 2019?"\n3. "Give TWO answers from paragraph III."\n4. "What percentage of students improved?"',
              options: [
                "רק ב-2",
                "ב-1, 2 ו-4",
                "בכולן - 1, 2, 3 ו-4",
                "רק ב-3 ו-4",
              ],
              correctIndex: 2,
              explanation:
                '"How many" · "2019" · "TWO" · "percentage" - כולם מספרים, כולם Eye Catchers.',
            },
            {
              type: "self-check",
              text: "I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030. The project has already planted over 200 million trees in 15 countries.",
              prompt:
                'השלימו מהטקסט: "The project has already planted over _______ trees in _______ countries."',
              modelAnswer: "200 million trees · 15 countries.",
            },
            {
              type: "mcq",
              prompt:
                'השאלה: "By how much did stress levels fall?" הטקסט: "Stress levels fell by 40%." - מה התשובה?',
              options: [
                "They fell significantly",
                "By 40%",
                "Stress fell because of the trees",
              ],
              correctIndex: 1,
              explanation: "By 40% - מספר מדויק מהטקסט. זה כל מה שצריך.",
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
              type: "mcq",
              prompt:
                '"According to Professor James Lee, what percentage of residents are satisfied?" - מה עושים?',
              options: [
                "קוראים את פסקה 1 ומחפשים",
                'מחפשים "James Lee", ובפסקה שלו מחפשים את האחוז',
                "קוראים את כל הטקסט",
              ],
              correctIndex: 1,
              explanation:
                "שם + אחוז = שני Eye Catchers. מוצאים את James Lee, ובפסקה שלו סורקים אחר % ← 85%.",
            },
            {
              type: "self-check",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.",
              prompt:
                '"According to the survey, what percentage of adults cannot swim? Give ONE answer." - כתבו ANSWER:',
              modelAnswer: "ANSWER: Over 30% of adults cannot swim.",
            },
            {
              type: "self-check",
              prompt: 'הסבירו: למה "מספר בשאלה = GPS" עוזר במיוחד לתלמיד חלש?',
              modelAnswer:
                "כי מספרים קל לזהות בסריקה מהירה - העין מוצאת אותם בלי לקרוא, וזה חוסך המון זמן חיפוש.",
            },
          ],
        },
        {
          screens: [
            {
              type: "passage-mcq",
              text: 'I  Five years ago, the streets of Greenville had almost no plants or trees. The air was polluted, and most residents felt that the city was an unpleasant place to live. A local charity decided to change this. They planted over 2,000 trees and created 15 community gardens across the city.\n\nII  The person behind this change is Dr. Maria Santos, a professor at Greenville University. "We wanted to show that any city can become greener," she says. According to Dr. Santos, the project cost only 500,000 dollars - much less than similar projects in other cities.\n\nIII  The results have been remarkable. According to a survey by Professor James Lee, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.',
              questions: [
                {
                  prompt:
                    "השאלה: According to Dr. Maria Santos, what did the project want to show? - באיזו פסקה מופיעה Dr. Santos?",
                  options: ["פסקה I", "פסקה II", "פסקה III", "בכל הפסקאות"],
                  correctIndex: 1,
                },
                {
                  prompt: "קראו רק שם. מה התשובה?",
                  options: [
                    "That the project cost 500,000 dollars",
                    "That 85% of residents are satisfied",
                    "That any city can become greener",
                    "That stress levels fell by 40%",
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
              text: "YOUR TURN - טקסט אחר, אותה שיטה.\n\nהשאלה: According to Dr. Amara Diallo, what do most trees die from?",
            },
            {
              type: "mcq",
              prompt: "באיזו פסקה נמצא Dr. Diallo?",
              options: ["פסקה I", "פסקה II", "פסקה III", "לא מופיע בטקסט"],
              correctIndex: 1,
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt: "כתבו את התשובה במילים של הטקסט.",
              modelAnswer: "Because nobody looks after them.",
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"שם בשאלה = כתובת. הולך לפסקה שלו."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: שם בשאלה = כתובת. הולכים לפסקה שלו.",
            },
            {
              type: "mcq",
              prompt:
                '"According to Dr. Maria Santos, what did the project show?" - לאיזו פסקה הולכים?',
              options: [
                "פסקה I - כי היא הראשונה",
                "פסקה II - כי Dr. Santos נמצאת שם",
                "פסקה III - כי היא האחרונה",
              ],
              correctIndex: 1,
              explanation:
                "Dr. Santos = Eye Catcher = כתובת. הולכים לפסקה שלה.",
            },
            {
              type: "mcq",
              prompt: '"According to Dr. Santos" - צריך לקרוא מה שכולם אמרו.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                'שקר. "According to Dr. Santos" = רק מה ש-Santos אמרה.',
            },
            {
              type: "mcq",
              prompt: "למה שם פרטי בשאלה הוא Eye Catcher?",
              options: [
                "כי שמות מעניינים יותר",
                "כי שם = כתובת לפסקה - הולכים ישר לשם",
                "כי שמות קל לזכור",
              ],
              correctIndex: 1,
              explanation: "שם = כתובת = פסקה. כמו כתובת בית - הולכים ישר.",
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
              type: "mcq",
              prompt: 'בטקסט THE CITY GARDEN PROJECT - מי "גר" בכל פסקה?',
              options: [
                "charity = I · Dr. Santos = II · Professor Lee = III",
                "Dr. Santos = I · charity = II · Professor Lee = III",
                "Professor Lee = I · Dr. Santos = II · charity = III",
                "כולם מופיעים בכל הפסקאות",
              ],
              correctIndex: 0,
              explanation: 'כל שם "גר" בפסקה אחת. זו הכתובת שלו.',
            },
            {
              type: "passage-mcq",
              text: "I  Every year, millions of young people choose to volunteer. A study found that young people who volunteer are 60% more likely to describe themselves as happy.\n\nII  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.\n\nIII  Results from 12 countries show that schools with volunteering programmes found that students became more responsible and more focused in class. Professor David Mills argues that helping others teaches skills that no classroom can replace.",
              questions: [
                {
                  prompt:
                    '"According to Professor David Mills, why is volunteering important?" - באיזו פסקה?',
                  options: ["פסקה I", "פסקה II", "פסקה III"],
                  correctIndex: 2,
                },
              ],
            },
            {
              type: "self-check",
              prompt:
                '"According to Dr. Okafor, what do teenagers who volunteer feel?" - כתבו: השם, הפסקה שלו, ומה היא אמרה.',
              modelAnswer:
                "שם: Dr. Okafor. פסקה: II. מה אמרה: teenagers who volunteer feel less stressed and sleep better.",
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
              type: "mcq",
              prompt:
                'באילו שאלות יש שם כ-Eye Catcher?\n\n1. "What do we learn from paragraph I?"\n2. "According to Dr. Anna Klein, why do adults improve?"\n3. "Give TWO reasons from paragraph II."\n4. "What does Professor David Mills argue about schools?"',
              options: ["1 ו-3", "2 ו-4", "1 ו-4", "כולן"],
              correctIndex: 1,
              explanation:
                '"Dr. Anna Klein" ו-"Professor David Mills" - שמות = כתובות.',
            },
            {
              type: "self-check",
              text: 'II  One study found that adults who learned to swim later in life often became stronger swimmers. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."',
              prompt:
                '"According to Dr. Anna Klein, why do adult swimmers sometimes do better than children?" - כתבו ANSWER:',
              modelAnswer:
                "ANSWER: Because adults understand what the teacher explains and can correct their mistakes more quickly.",
            },
            {
              type: "self-check",
              prompt:
                'הסבירו: מה ההבדל בין "What do we learn from paragraph II?" לבין "According to Dr. Klein in paragraph II?"',
              modelAnswer:
                "הראשונה: כל מה שכתוב בפסקה II. השנייה: רק מה ש-Dr. Klein אמרה - לא מה שאחרים אמרו.",
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
              text: "עשרה משפטים בעברית. סמנו כל מילת שלילה במשפט.",
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "אין שום סיבה להאמין שהתוכנית תיכשל.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0] }],
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
              text: "מעולם לא ראינו תוצאה כזאת בעבר.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 1] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "בלי תמיכה מהעירייה, הפרויקט לא היה קם.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 4] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "אף אחד לא ציפה לתוצאה הזאת.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [0, 1, 2] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "העירייה טענה כי אין תקציב לפרויקט הזה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [3] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "שום תושב לא התלונן על הרעש.",
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
            {
              type: "mark-all",
              instruction: "סמנו כל מילת שלילה במשפט.",
              text: "הכפר נותר בלי חשמל במשך שלושה ימים.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [2] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. עשרה משפטים. סמנו כל מילת שלילה.",
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
              text: "None of the residents noticed any real change.",
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
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "Without clean water, the village could not continue.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 6] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The village never received help from the government.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [2] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The scientists were not surprised by the outcome.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [3] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "No earlier test had ever succeeded like this.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The council never answered the residents' letters.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [2] }],
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
            { type: "preface", text: "שבע פסקאות. סמנו כל מילת שלילה בפסקה." },
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
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The scientists were not surprised. No earlier test had succeeded, and nobody expected this time to be different.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [3, 5, 11] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'Dr. Ellen Ross said the result was not new. "No serious research has ever proved that money makes people happy," she explained.',
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [7, 9] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: "The village had no electricity for years, and it never received help from the government. Nobody in the capital seemed to care.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [3, 9, 15] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'In 2020, a small group decided not to wait any longer. "We could not depend on the city," said one volunteer.',
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [6, 13] }],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: '"Nobody was going to do it for us," she added. No one else seemed willing to try.',
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "שלילה", color: "rose", indices: [0, 10] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "רמת בחינה. ארבעה טקסטים. סמנו כל מילת שלילה.",
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'The report found no evidence that the plan worked. Not one expert supported it, and none of the residents noticed any change.\n\nDr. Ellen Ross said the result was not new. "No serious research has ever proved that money makes people happy," she explained.',
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "שלילה", color: "rose", indices: [3, 9, 15, 29, 31] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'The city promised a new park, but nothing was built for years. There was no budget, no plan, and no one in charge. Residents said the council never answered their letters.\n\nIn 2020, a small group decided not to wait any longer. "We could not depend on the city," said one volunteer. "Nobody was going to do it for us."',
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "שלילה",
                  color: "rose",
                  indices: [7, 14, 16, 19, 27, 37, 44, 52],
                },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'For years, the school had no science lab, and no teacher ever raised the issue. Nobody on the board seemed to notice the problem.\n\nWhen a new principal arrived, she found that none of the equipment worked. "No student had done a real experiment in years," she said. "That is not acceptable."',
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "שלילה",
                  color: "rose",
                  indices: [5, 9, 15, 32, 37, 50],
                },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every negative word.",
              text: 'The factory closed in 2015, and no new jobs came to replace it. Nobody expected the town to recover so quickly.\n\n"We had no money and no outside help," said Mayor Clara Diaz. "But we were not willing to give up, and none of us regret that choice."',
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "שלילה",
                  color: "rose",
                  indices: [6, 13, 23, 26, 36, 42],
                },
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
    position: { x: 0, y: 1140 },
    big: false,
    content: {
      preface: [],
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
          ],
        },
        {
          screens: [
            {
              type: "passage-mcq",
              text: 'I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nII  One study found that adults who learned to swim later in life often became stronger swimmers than those who learned as children. "Adults understand what the teacher explains and can correct their mistakes more quickly," says Dr. Anna Klein. "They are also not afraid to ask questions."\n\nIII  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.',
              questions: [
                {
                  prompt: "Which of the following does Dr. Klein NOT say?",
                  options: [
                    "Adults understand explanations",
                    "Adults correct mistakes faster",
                    "Adults prefer group lessons",
                    "Adults are not afraid to ask questions",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "איך ידעתם שזו התשובה?",
                  options: [
                    "כי היא הכי ארוכה",
                    "כי בדקנו את שלוש האחרות מול פסקה II - הן מופיעות שם, והיא לא",
                    "כי היא נשמעת לא הגיונית",
                    "ניחשנו",
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
              text: "YOUR TURN - שאלת NOT על פסקה III. בדקו כל אפשרות מול הטקסט.",
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
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: ראיתי NOT? אני ציד - מחפש מה לא נכון.",
            },
            {
              type: "mcq",
              prompt: '"Which of the following is NOT true?" - מה מחפשים?',
              options: [
                "מה נכון בטקסט",
                "מה שגוי או לא מוזכר",
                "את האפשרות שנראית הכי טובה",
              ],
              correctIndex: 1,
              explanation: "NOT = ציד. מחפשים מה שגוי - לא מה שנכון.",
            },
            {
              type: "mcq",
              prompt: "שאלת NOT קשה יותר, כי צריך לבדוק כל אפשרות מול הטקסט.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation: "נכון. שלוש מהאפשרויות נכונות בטקסט. רק אחת אינה.",
            },
            {
              type: "mcq",
              prompt:
                '"Which is NOT mentioned?" - שלוש אפשרויות נכונות. מה התשובה?',
              options: [
                "האפשרות שנראית הכי נכונה",
                "האפשרות שלא נמצאת בטקסט כלל",
                "האפשרות הארוכה ביותר",
              ],
              correctIndex: 1,
              explanation: "האפשרות שלא מוזכרת בטקסט היא התשובה. זה הציד.",
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
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
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
          text: "מה קרה?\n\nהמילה MOST ביקשה אחד בלבד - הכי יעיל. הוא כתב שניים, ולכן לא ענה על ה-MOST.\n\nMOST = הכי, אחד. לא שניים.\nONLY = רק אחד. לא שניים.",
        },
        {
          type: "summary",
          title: "THE TOOL - מילות הגבלה",
          lines: [
            'most - "The MOST effective..." ← לא כולן, רק הכי טובה.',
            'only - "The ONLY reason..." ← לא סיבות אחרות, רק אחת.',
            "מצאו בטקסט את הדבר הספציפי הזה. אל תוסיפו פרטים נוספים.",
          ],
        },
        {
          type: "preface",
          text: 'WATCH IT\n\nהשאלה: According to Dr. Okafor, what is the most effective type of volunteering programme?\n\nמחפשים "most effective" בטקסט - לא את כל הסוגים.\nפסקה II: "the most effective programmes bring young people face to face with the people they help."\n\nתשובה: Programmes that bring young people face to face with the people they help.\nולא יותר מזה - רק ה-most effective אחד.',
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "עשרה משפטים בעברית. סמנו כל מילת הגבלה - רק, כל, רוב, מעטים, תמיד.",
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
              text: "כל השאר בוועדה התנגדו להצעה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "רוב התלמידים הצליחו לעבור את המבחן.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "מעטים מהתושבים הגיעו לישיבה החשובה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "תמיד אותם ילדים מתנדבים לפעילות הזאת.",
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
              text: "כל השאר, לדבריו, לא משפיעים כלל.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "רוב התלמידים מרוצים, אך רק מעטים משתתפים בשיעור הבחירה.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [0, 4, 5] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "כל השאר דרשו דיון נוסף בנושא.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו כל מילת הגבלה במשפט.",
              text: "רק מעטים מהתלמידים נבחנו בשיטה החדשה.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0, 1] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "עכשיו באנגלית. עשרה משפטים. סמנו כל מילת הגבלה.",
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Only two members of the committee supported the idea.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
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
              text: "Only a few students join the optional classes.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0, 2] }],
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
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "The researcher stressed that only one factor really matters.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [4] }],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "All the other factors have some effect on results.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0, 5] }],
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
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Every country has some power to act, she says.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0, 3] }],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Only political will is truly required, he argued.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "הגבלה", color: "violet", indices: [0] }],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "שבע פסקאות. סמנו כל מילת הגבלה בפסקה." },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Only two members of the committee supported the idea at first. All the others were against it, and most of them asked for another meeting.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [0, 11, 18] },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "The survey found that most students are satisfied, but only a few join the optional classes. It is always the same children who come.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [4, 9, 11, 18] },
              ],
            },
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
              text: "The article claims that only rich countries can solve the problem. However, most of the progress has come from small nations.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [4, 12] },
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
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "People often say that talent is all that counts in sport. In fact, most top athletes share one habit: they train every single day.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [6, 13, 21] },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Only a few reach the highest level on ability alone. Most people just need practice, not natural talent.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "הגבלה", color: "violet", indices: [0, 2, 10] },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "רמת בחינה. ארבעה טקסטים. סמנו כל מילת הגבלה.",
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "Only two members of the committee supported the idea at first. All the others were against it, and most of them asked for another meeting before deciding.\n\nThe survey found that most students are satisfied with the new schedule, but only a few join the optional classes. It is always the same children who come every week.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "הגבלה",
                  color: "violet",
                  indices: [0, 11, 18, 31, 40, 42, 49, 55],
                },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "The article claims that only rich countries can solve the problem, but most of the progress in recent years has come from small nations. Some of the poorest regions have cut pollution more than any wealthy state.\n\nDr. Mia Cohen argues that money is not everything. Every country has some power to act, she says, and only political will is truly required.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "הגבלה",
                  color: "violet",
                  indices: [4, 12, 24, 46, 49, 56],
                },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "People often say that talent is all that counts in sport. In fact, most top athletes share one habit: they train every single day without fail.\n\nOnly a few reach the highest level on ability alone. All you really need, says coach Ryan Doyle, is a clear plan and some patience.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "הגבלה",
                  color: "violet",
                  indices: [6, 13, 21, 26, 28, 36, 49],
                },
              ],
            },
            {
              type: "mark-all",
              instruction:
                "Mark every limiting word (only, all, most, some, few, every, always).",
              text: "A recent report claims that only large cities can fund good public transport, but some small towns have built excellent networks with only a small budget.\n\nMost people assume every project needs a huge budget, said transport planner Nina Cole. Every town has some way to improve, and only a clear plan is really needed.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                {
                  name: "הגבלה",
                  color: "violet",
                  indices: [5, 14, 22, 26, 29, 40, 43, 48],
                },
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
    position: { x: 100, y: 1140 },
    big: false,
    content: {
      preface: [],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: "III  Adult swimming classes are now available in most cities. Some programs meet only once a week, while others offer three sessions a week. According to instructors, adults who practice regularly usually make good progress in less than two months.",
              questions: [
                {
                  prompt:
                    "According to the text, in most cities, what is available?",
                  options: [
                    "Free swimming pools",
                    "Adult swimming classes",
                    "Private swimming coaches",
                    "Three sessions every day",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "השאלה כללה את המילה most. כמה תשובות מותר לכתוב?",
                  options: [
                    "תשובה אחת בלבד",
                    "שתיים - ליתר ביטחון",
                    "כל מה שמצאתם בפסקה",
                    "תלוי באורך השאלה",
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
              text: "YOUR TURN - שימו לב למילת ההגבלה בשאלה.\n\nהשאלה: According to Dr. Diallo, why do most trees die?",
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt: "כתבו תשובה אחת בלבד, במילים של הטקסט.",
              modelAnswer: "Because nobody looks after them.",
            },
            {
              type: "mcq",
              prompt: "כתבתם שתי תשובות לשאלה עם most. מה יקרה?",
              options: [
                "תקבלו ניקוד על שתיהן",
                "הבודק יבחר את הטובה מביניהן",
                "התשובה תיפסל - נדרשה אחת",
                "לא משנה, העיקר שהתשובה מהטקסט",
              ],
              correctIndex: 2,
            },
            {
              type: "summary",
              title: "ONE SENTENCE",
              lines: ['"most / only = תשובה אחת מסוימת. לא יותר."'],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: most / only = תשובה אחת מסוימת. לא יותר.",
            },
            {
              type: "mcq",
              prompt:
                '"What is the MOST effective method?" - כמה תשובות כותבים?',
              options: [
                "שתיים - כדי לכסות אפשרויות",
                "אחת בלבד - הכי יעילה",
                "שלוש - כדי לא להחמיץ",
              ],
              correctIndex: 1,
              explanation: "MOST = אחת מסוימת. לא כולן - רק הכי יעילה.",
            },
            {
              type: "mcq",
              prompt:
                '"The ONLY reason trees die is…" - יכולות להיות שתי סיבות.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. ONLY = סיבה אחת בלבד. מצאתם שתיים - טעיתם.",
            },
            {
              type: "mcq",
              prompt: "מה משותף ל-most, only ו-main?",
              options: [
                "כולן מילות ניגוד",
                "כולן מילות שלילה",
                "כולן מילות הגבלה - תמיד תשובה אחת ספציפית",
                "כולן מילות סיבה",
              ],
              correctIndex: 2,
              explanation:
                "most = הכי / רוב · only = רק · main = עיקרי. כולן מגבילות לתשובה אחת.",
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
              text: "II  Dr. Sarah Okafor studied volunteering for ten years. She found that teenagers who volunteer feel less stressed. However, not all types of volunteering produce the same results. The most effective programmes bring young people face to face with the people they help.",
              questions: [
                {
                  prompt:
                    '"According to Dr. Okafor, what is the MOST effective type of volunteering?"',
                  options: [
                    "All types of volunteering are effective",
                    "Programmes that bring young people face to face with the people they help",
                    "School programmes and community service",
                  ],
                  correctIndex: 1,
                },
              ],
            },
            {
              type: "self-check",
              text: "III  Adult swimming classes are now available in most cities. According to instructors, adults who practice regularly usually make good progress in less than two months.",
              prompt:
                'השלימו מהטקסט: "In MOST cities, adult swimming classes are _______."',
              modelAnswer: "available - זמינות. (פסקה III)",
            },
            {
              type: "mcq",
              prompt:
                'תלמיד ענה על שאלת "most effective" בשתי תשובות, ושתיהן נכונות לפי הטקסט. הוא יקבל ציון מלא.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                'שקר. "most" = תשובה אחת בלבד. שתי תשובות = 0 נקודות.',
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
              type: "mcq",
              prompt:
                'באילו שאלות יש מילת הגבלה?\n\n1. "What is the only country mentioned?"\n2. "What do we learn from paragraph I?"\n3. "According to the text, most trees die because…"\n4. "Give TWO reasons from paragraph III."',
              options: ["1 ו-3", "2 ו-4", "1 ו-4", "רק ב-3"],
              correctIndex: 0,
              explanation:
                '"only" בשאלה 1 ו-"most" בשאלה 3 - הגבלה = תשובה אחת מסוימת.',
            },
            {
              type: "self-check",
              text: 'II  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.',
              prompt:
                '"According to Dr. Diallo, why do MOST trees die? Give ONE answer." - כתבו ANSWER:',
              modelAnswer: "ANSWER: Because nobody looks after them.",
            },
            {
              type: "self-check",
              prompt:
                'מה ההבדל בין שאלה עם "most" לשאלה בלי "most"? תנו דוגמה.',
              modelAnswer:
                'בלי most: "Why do trees die?" - יכולות להיות כמה סיבות. עם most: "Why do MOST trees die?" - סיבה אחת ספציפית, זו שחלה על רוב המקרים.',
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
    position: { x: 0, y: 1370 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'סיטואציה מהבחינה:\n\n"What does paragraph I say about people who cannot swim?"\n\nהתלמיד קרא: "Many people cannot swim. However, experts say it is never too late."\nהוא כתב: "Many people cannot swim."\nציון: 0 נקודות.',
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
            "שאלה שנוגעת למשפט עם however - התשובה כמעט תמיד מה שאחריו.",
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
              text: "עשרה משפטים בעברית. סמנו את מילת הניגוד במשפט.",
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
              text: "המחקר היה קצר, אולם הממצאים היו משמעותיים.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [3] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "רבים חששו מהפרויקט. עם זאת, התושבים תמכו בו.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [3, 4] },
              ],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "התקציב היה קטן, אבל העבודה נעשתה בזמן.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [3] }],
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
              text: "מזג האוויר היה גרוע, אך האירוע לא בוטל.",
              dir: "rtl",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [4] }],
            },
            {
              type: "mark-all",
              instruction: "סמנו את מילת הניגוד במשפט.",
              text: "הוא ידע שזה יהיה קשה. למרות זאת, הוא התחיל בפרויקט.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [5, 6] },
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
              text: "רוב המומחים התנגדו לרעיון. מצד שני, כמה חוקרים תמכו בו.",
              dir: "rtl",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [4, 5] },
              ],
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
              text: "עכשיו באנגלית. עשרה משפטים. סמנו את מילת הניגוד.",
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "The plan sounded risky, but it worked perfectly.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [4] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "Many experts doubted the project. However, the results proved them wrong.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [5] }],
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
              text: "Despite the criticism, the mayor continued with the plan.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [0] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "The teacher expected the class to fail. However, every student passed.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [7] }],
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
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "Most researchers rejected the theory, while a few scientists still support it.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [5] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the sentence.",
              text: "The results looked promising at first, but they did not last.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [6] }],
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
            { type: "preface", text: "שבע פסקאות. סמנו את מילת הניגוד בפסקה." },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "Learning to swim as an adult is more common than many people think. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [25] }],
            },
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
              instruction: "Mark the contrast word in the paragraph.",
              text: "Volunteers usually work without payment. Despite this, researchers found that they were far happier than average.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [5] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "The city promised a new park, but nothing was built for years. Although residents complained often, the council took no action.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [12] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "Most studies focus on young athletes. However, Dr. Elena Cruz studied older runners instead, and found surprising results.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [6] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "The programme was expensive to start. Nevertheless, the school board approved it because of the long-term benefits.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [6] }],
            },
            {
              type: "mark-all",
              instruction: "Mark the contrast word in the paragraph.",
              text: "Many predicted the store would close within a year. However, it became one of the most popular shops in town.",
              dir: "ltr",
              correctIndices: [],
              categories: [{ name: "ניגוד", color: "emerald", indices: [9] }],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "רמת בחינה. ארבעה טקסטים. סמנו כל מילת ניגוד בטקסט.",
            },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed about this and never try to learn. However, experts say it is never too late.\n\nDr. Amir Cohen, who teaches adult swimming classes, says that although beginners feel nervous at first, most improve within a few weeks.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [39, 57] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "The report warned that costs would rise sharply due to rising fuel prices. Yet the final budget stayed almost the same as planned, thanks to careful management.\n\nMany volunteers worked without any payment at all. Despite this, researchers found that they were far happier than people in paid jobs.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [13, 35] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "The city promised a new park, but nothing was built for years. Although residents complained often, the council took no real action.\n\nIn 2020, a small group decided to act on its own. However, they lacked both money and official permission to begin building.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [12, 33] },
              ],
            },
            {
              type: "mark-all",
              instruction: "Mark every contrast word in the text.",
              text: "Many predicted the small bookshop would close within a year of opening. However, it became one of the most popular shops in town.\n\nThe owner, Grace Bell, had almost no experience running a business. Nevertheless, she built a loyal community of regular customers within months.",
              dir: "ltr",
              correctIndices: [],
              categories: [
                { name: "ניגוד", color: "emerald", indices: [12, 34] },
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
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: קרא 4 → חצה → הוכחה → ענה.",
            },
            {
              type: "mcq",
              prompt: "בשאלת MC - מה עושים לפני שחוזרים לטקסט?",
              options: [
                "מסמנים את האפשרות הראשונה שנראית טוב",
                "קוראים את כל 4 האפשרויות",
                "קוראים שוב את כל הטקסט",
              ],
              correctIndex: 1,
              explanation:
                "צעד 1: קוראים את כל ארבע האפשרויות. אחר כך חוצים, ורק אז מחפשים הוכחה.",
            },
            {
              type: "mcq",
              prompt:
                "אפשרות שנכונה בטקסט, אבל עונה על שאלה אחרת - היא תשובה נכונה.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation:
                "שקר. זה מסיח מסוג ב׳: נכון + לא קשור לשאלה = שגוי. חוצים.",
            },
            {
              type: "mcq",
              prompt: '"What do we learn from paragraph I?" - מאיפה מחפשים?',
              options: ["מכל הטקסט", "רק מפסקה I", "מהפסקה שקשורה לנושא"],
              correctIndex: 1,
              explanation: "כלל זהב: paragraph I = רק פסקה I. לא פסקאות אחרות.",
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
            {
              type: "mcq",
              prompt: "מצאתם הוכחה לשתי אפשרויות. מה עושים?",
              options: [
                "מסמנים את הראשונה שמצאנו",
                "מסמנים את האחרונה שמצאנו",
                "חוזרים לטקסט - ב-MC תמיד תשובה אחת, אז אחת מהן שגויה",
              ],
              correctIndex: 2,
              explanation:
                'ב-MC יש תמיד תשובה אחת. שתי "הוכחות" = אחת מהן לא באמת עונה על השאלה.',
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
              type: "passage-mcq",
              text: 'I  Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, scientists started a project to plant one billion trees in Africa by 2030.\n\nII  The project is led by Dr. Amara Diallo. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.\n\nIII  The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.',
              questions: [
                {
                  prompt:
                    "What do we learn from paragraph II about the project?",
                  options: [
                    "The project teaches people to care for trees",
                    "Dr. Diallo plants the trees personally",
                    "Birds increased by 60% in Ethiopia",
                    "Most trees survive without local help",
                  ],
                  correctIndex: 0,
                },
              ],
            },
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
          text: 'WATCH IT\n\nהשאלה: According to Dr. Okafor, why do teenagers who volunteer feel less stressed?\n\nWhy? ← מחפשים מילת סיבה.\nפסקה II: "teenagers who volunteer feel less stressed and sleep better".\n\nתשובה: Because they feel less stressed and sleep better than those who do not volunteer.',
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "🚦 רמזור: ירוק? רק ירוק = עונים." },
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
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: תשובה אחת. מהטקסט. Why? ← because.",
            },
            {
              type: "mcq",
              prompt: "מה מחפשים בטקסט לכל מילת שאלה?",
              options: [
                "Why? ← because · When? ← שנה · How? ← by · Where? ← שם מקום",
                "Why? ← שם מקום · When? ← because · How? ← שנה · Where? ← by",
                "כל מילות השאלה מחפשות את אותו דבר",
                "Why? ← שנה · When? ← by · How? ← שם מקום · Where? ← because",
              ],
              correctIndex: 0,
              explanation: "כל מילת שאלה שולחת אתכם לסוג מידע אחר בטקסט.",
            },
            {
              type: "mcq",
              prompt:
                '"Give ONE answer" - אפשר לכתוב שתי תשובות אם שתיהן נכונות.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. ONE = אחת בלבד. שתיים = 0 נקודות.",
            },
            {
              type: "mcq",
              prompt: '"Why did people leave Redonda?" - מה מחפשים בטקסט?',
              options: ["שם מקום", "because / since / so", "שנה ותאריך"],
              correctIndex: 1,
              explanation: "Why? ← מחפשים מילת סיבה בטקסט.",
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
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
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
            { type: "preface", text: "🚦 רמזור: ירוק? רק ירוק = עונים." },
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
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: Because ___ = סיבה. In order to ___ = מטרה.",
            },
            {
              type: "mcq",
              prompt: '"People left Redonda because ___" - מה עושים?',
              options: [
                "כותבים YES/NO",
                "מחפשים סיבה בטקסט ומשלימים",
                "כותבים תשובה מהראש",
              ],
              correctIndex: 1,
              explanation:
                "Complete the sentence: מחפשים מילות סיבה בטקסט ← מוצאים ← משלימים.",
            },
            {
              type: "mcq",
              prompt: '"They brought goats in order to ___" - מה מחפשים בטקסט?',
              options: [
                "because / since",
                "to / in order to / so that",
                "and / also",
              ],
              correctIndex: 1,
              explanation:
                '"In order to" = מטרה. מחפשים to / in order to / so that.',
            },
            {
              type: "mcq",
              prompt: '"Because" כבר כתוב בשאלה - לא כותבים אותו שוב בתשובה.',
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
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
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
            { type: "preface", text: "🚦 רמזור: ירוק? רק ירוק = עונים." },
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
            {
              type: "preface",
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: מצאתי אחת? ממשיך. עוצר רק עם שתיים.",
            },
            {
              type: "mcq",
              prompt: '"Give TWO answers" - כמה תשובות כותבים?',
              options: [
                "אחת - אם היא ארוכה ומפורטת",
                "שתיים בדיוק",
                "שלוש - כדי לא להחמיץ",
              ],
              correctIndex: 1,
              explanation:
                "שתיים בדיוק. אחת = חצי ניקוד. שלוש = עלולים לאבד נקודות.",
            },
            {
              type: "mcq",
              prompt: "מצאתם תשובה ראשונה. מה עושים?",
              options: [
                "כותבים אותה ועוברים לשאלה הבאה",
                "ממשיכים לקרוא - מחפשים שנייה",
                "מחפשים שנייה רק אם נשאר זמן",
              ],
              correctIndex: 1,
              explanation: "תמיד ממשיכים. עוצרים רק כשיש שתיים.",
            },
            {
              type: "mcq",
              prompt: '"In addition" בטקסט = סיגנל שתשובה שנייה מגיעה.',
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 0,
              explanation:
                "נכון. In addition / Also / And - אחריהן מגיעה התשובה השנייה.",
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
              type: "mark-all",
              instruction: "סמנו את שתי התשובות ואת מילת החיבור שביניהן",
              text: "The results are already visible. In Ethiopia, the number of birds increased by 60%. In addition, in Kenya, rivers that were dry for 20 years began to flow again.",
              correctIndices: [
                8, 9, 10, 11, 12, 13, 14, 15, 18, 25, 26, 27, 28,
              ],
              wordBank: ["in addition", "also", "and"],
            },
            {
              type: "passage-mcq",
              text: "III  Results from 12 countries show that schools with volunteering programmes found that students became more responsible and more focused in class.",
              questions: [
                {
                  prompt:
                    "Give TWO answers: How do students change? (paragraph III)",
                  options: [
                    "They become more responsible / They become more focused",
                    "They feel less stressed / They sleep better",
                    "They help others / They work in schools",
                  ],
                  correctIndex: 0,
                },
              ],
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
            {
              type: "preface",
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
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
    content: { preface: [], rounds: [{ screens: [] }] },
  },
  {
    id: "n-b46b7e2b",
    section: "c-1",
    titleHe: "however / but - כמו במבחן",
    titleEn: "Contrast Words",
    required: ["l08"],
    position: { x: 0, y: 1500 },
    big: false,
    content: {
      preface: [],
      rounds: [
        {
          screens: [
            {
              type: "preface",
              text: "YOUR TURN - מצאו את however, וקראו מה בא אחריו.\n\nהשאלה: What good news does paragraph I mention?",
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
              text: "PRACTICE · Round 1 🌱\nקל. חזרה על המושגים.\n\n📌 זכור: however / but = פנייה. מה שאחריו = הנקודה.",
            },
            {
              type: "mcq",
              prompt:
                '"Many people cannot swim. However, experts say it is never too late." - מה הנקודה החשובה?',
              options: [
                '"Many people cannot swim"',
                '"it is never too late"',
                "שתיהן חשובות באותה מידה",
              ],
              correctIndex: 1,
              explanation:
                'מה שאחרי however = הנקודה. "it is never too late" הוא הסיפור האמיתי.',
            },
            {
              type: "mcq",
              prompt: "however = פנייה, ומה שלפניו הוא הנקודה החשובה.",
              options: ["✅ נכון", "❌ לא נכון"],
              correctIndex: 1,
              explanation: "שקר. לפני however = רקע. אחרי however = הנקודה.",
            },
            {
              type: "mcq",
              prompt: "השאלה נוגעת למשפט שיש בו however. מה כמעט תמיד התשובה?",
              options: ["מה שלפני however", "מה שאחרי however", "לא משנה"],
              correctIndex: 1,
              explanation: "מה שאחרי however = הנקודה = התשובה. כמעט תמיד.",
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
              text: "PRACTICE · Round 3 💎\nרמת בחינה. ללא עזרה.",
            },
            {
              type: "passage-mcq",
              text: "I  Learning to swim as an adult is more common than many people think. According to a recent survey, over 30% of adults in large cities cannot swim. Many of them feel embarrassed and never try to learn. However, experts say it is never too late.",
              questions: [
                {
                  prompt:
                    "What does paragraph I say about people who cannot swim?",
                  options: [
                    "They feel embarrassed and never try",
                    "It is never too late to learn",
                    "Swimming classes help adults",
                  ],
                  correctIndex: 1,
                },
              ],
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
    content: { preface: [], rounds: [{ screens: [] }] },
  },
  {
    id: "n-221188d1",
    section: "c-1",
    titleHe: "שאלות 1 - סיכום",
    required: ["not-q", "limiters-q", "numbers-names-q"],
    position: { x: 0, y: 1260 },
    big: false,
    content: { preface: [], rounds: [{ screens: [] }] },
  },
];
