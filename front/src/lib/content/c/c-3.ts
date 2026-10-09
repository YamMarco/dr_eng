// Part C - Writing. Micro-skills (yes-no…word-count) + topic lessons (topic-*).
// Source: writing_map_c3.docx, writing_course_c3_7to17.docx
import type { LessonNode } from "../types";

export const c3Lessons: LessonNode[] = [
  {
    id: "yes-no",
    section: "c-3",
    titleHe: "YES or NO - לומר עמדה",
    titleEn: "YES or NO",
    required: ["c-a45c17de"],
    position: { x: 60, y: 2320 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}חבר׳ה, מה הטעות הכי נפוצה בכתיבה?\n\n{d:rtl}לא כתיב. לא דקדוק. **אלא לא לענות על השאלה.**\n\n{d:rtl}אם השאלה מבקשת מכם להביע דעה, אתם חייבים קודם להגיד בצורה ברורה:\n\n{d:rtl}**YES - אני בעד.**\n{d:rtl}או\n{d:rtl}**NO - אני נגד.**\n\n{d:rtl}תלמיד שכותב:\n{p:text}**Volunteering is good**\n\n{d:rtl}++עדיין לא באמת הביע דעה.++ הוא רק תיאר את הנושא.\n{d:rtl}המעריך בבחינת הבגרות רוצה לקרוא: \n\n{d:rtl}**מה אתם חושבים?**\n\n{d:rtl}**למה אתם חושבים כך?**\n",
        },
        {
          type: "preface",
          text: "{d:rtl}זה המשפט הכי חשוב בתחילת הפסקה:\n\n{p:text}**I think teenagers should volunteer.**\n{d:rtl}המשפט **קצר**, **ברור**, והעמדה שלכם מובנת מיד.\n\n{d:rtl}ועכשיו טיפ חשוב מאוד:\n\n{d:rtl}**במשימת דעה, אל תבזבזו זמן על:**\n{d:rtl}**“רגע... אני בעד או נגד?”**\n\n{d:rtl}אם אין לכם סיבה טובה לבחור אחרת - לכו על **דעה חיובית**.\n{d:rtl}למה?\n\n{d:rtl}כי בדרך כלל הרבה יותר קל לחשוב על סיבות חיוביות:\n{p:text}**It helps...**\n{p:text}**It improves...**\n{p:text}**It teaches...**\n{d:rtl}לדוגמה:\n{p:text}**I think teenagers should volunteer.**\n{d:rtl}וזהו.\n{d:rtl}בחרתם עמדה. ממשיכים.\n\n",
        },
        {
          type: "preface",
          text: "ושוב- קחו מאיתנו את הטיפ המאוד חשוב: \n\nהמטרה בבחינה היא לא לנחש איזו דעה המעריך רוצה לשמוע.\n\n**המטרה היא להביע את הדעה שלכם בצורה ברורה ולתת לה סיבות טובות.**\n\nאז לאלה שמסתבכים ומבזבזים זמן יקר בכי לבחור עמדה: \n\n🟢 אין באמת סיבה מיוחדת להתנגד? בחרו YES והתקדמו.\nאל תבזבזו שתי דקות לפחות על החלטה שאפשר לקבל בעשר שניות.\n\n",
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים עמדה ברורה" },
            {
              type: "mcq",
              prompt:
                '### \n{d:rtl}### בואו נעבור על עוד דוגמה:\n\n{d:rtl}### 🟢 שלב 1 - מבינים את השאלה\n{p:text}**Do you think teenagers should have part-time jobs?**\n{d:rtl}לא מספיק להבין רק:\n{d:rtl}**teenagers** = בני נוער\n{d:rtl}**jobs** = עבודות\n{d:rtl}צריך להבין גם:\n{d:rtl}**part-time jobs** = עבודות במשרה חלקית\n{d:rtl}כלומר, השאלה היא:\n{d:rtl}**האם לדעתכם בני נוער צריכים לעבוד במשרה חלקית?**\n{d:rtl}### 🟡 שלב 2 - לא מסתבכים\n{d:rtl}אל תבזבזו זמן על:\n{d:rtl}**"אני בעד או נגד?"**\n{d:rtl}אם אין לכם סיבה מיוחדת לבחור אחרת - לכו על **YES**.\n{d:rtl}### 🟢 שלב 3 - כותבים פתיח ברור\n{p:text}✅ **I think teenagers should have part-time jobs.**\n{d:rtl}קצר. ברור. נכון.\n{d:rtl}### ⭐ הכלל שלנו\n{d:rtl}**מבינים את כל השאלה ← בוחרים YES ← כותבים פתיח ← ממשיכים.**',
              options: [
                "Part-time jobs can be good or bad depending on the teenager.",
                "I think teenagers should have part-time jobs.",
                "Many teenagers in Israel have jobs after school.",
                "Part-time jobs are a common thing in many countries.",
              ],
              correctIndex: 1,
              explanation:
                "רק אפשרות 2 אומרת YES ברורות. שאר האפשרויות מתארות, לא מחליטות.",
            },
            {
              type: "mcq",
              prompt:
                '"Do you think schools should start later?" - מה נכתב כשחושבים NO?',
              options: [
                "School hours have advantages and disadvantages.",
                "I do not think schools should start later.",
                "Some students prefer to start early.",
                "Starting school later is an interesting idea.",
              ],
              correctIndex: 1,
              explanation:
                '"I do not think" = NO ברור. YES ו-NO שניהם מקבלים אותו ציון - חשוב רק שזה ברור.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שמבטאת דעה.",
              text:
                "I think all students should do volunteer work in their community.",
              correctIndices: [1],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | עוד תרגול בזיהוי עמדה ברורה" },
            {
              type: "mcq",
              prompt:
                '"Do you think students should wear school uniforms?" - איזה פתיח מבטא עמדה ברורה?',
              options: [
                "School uniforms are common in many countries.",
                "I think students should wear school uniforms.",
                "Uniforms can be comfortable or uncomfortable depending on the fabric.",
                "Some schools already require uniforms.",
              ],
              correctIndex: 1,
              explanation:
                "רק אפשרות 2 פותחת ב-'I think' - זו עמדה ברורה. שאר האפשרויות מתארות עובדות או תלויות בגורם חיצוני.",
            },
            {
              type: "mcq",
              prompt:
                '"Do you think homework should be given every weekend?" - מה נכתב כשחושבים NO?',
              options: [
                "Homework has both advantages and disadvantages.",
                "I do not think homework should be given every weekend.",
                "Some teachers give homework on weekends.",
                "Giving homework every weekend is a common policy.",
              ],
              correctIndex: 1,
              explanation:
                '"I do not think" = NO ברור. שאר האפשרויות מתארות או נמנעות מהכרעה.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שהופכת את המשפט ל-NO.",
              text:
                "I do not think homework should be given every weekend.",
              correctIndices: [2],
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                '"Do you think schools should be open 5 days instead of 6?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "should",
                "schools",
                "students",
                "should not",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think teenagers should have part-time jobs?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "teenagers",
                "part-time",
                "jobs",
                "should",
                "students",
                "should not",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think students should wear school uniforms?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "students",
                "uniforms",
                "school",
                "should",
                "should not",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think homework should be given every weekend?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "homework",
                "weekend",
                "students",
                "should",
                "should not",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think schools should start later in the morning?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "schools",
                "start",
                "later",
                "morning",
                "should",
                "should not",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
          ],
        },
      ],
    },
  },
  {
    id: "because",
    section: "c-3",
    titleHe: "because - לחבר לסיבה",
    titleEn: "because",
    required: ["yes-no"],
    position: { x: 100, y: 2420 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}יש לכם עמדה. מצוין.\n\n{d:rtl}אבל המורה רוצה גם לדעת למה.\n\n{d:rtl}המילה שמחברת את הדעה לסיבה היא: because.\n{p:text}I think students should volunteer because it teaches responsibility.\n\n{d:rtl}עמדה + because + סיבה = משפט שמרוויח נקודות.",
        },
        {
          type: "preface",
          text: '{d:rtl}הסיבה צריכה לענות על שאלה אחת: למה?\n{p:text}❌ I think students should volunteer because volunteering is good.\n{d:rtl}\n{d:rtl}למה זה לא עובד? כי "good" לא מסביר כלום.\n{p:text}✅ I think students should volunteer because they learn to care about others.\n{d:rtl}\n{d:rtl}זו סיבה אמיתית.',
        },
        {
          type: "summary",
          title: "{d:rtl}נוסחת *Because*",
          lines: [
            '"I think [עמדה] because [סיבה ספציפית]."',
            "הסיבה עונה על: למה זה נכון? מה קורה בגלל זה?",
            'לא: "because it is good / important / nice"',
            'כן: "because students learn... / it helps... / it gives..."',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים סיבה חזקה" },
            {
              type: "mcq",
              prompt: "איזו סיבה אחרי because היא הכי חזקה?",
              options: [
                '"I think students should volunteer because it is a nice thing to do."',
                '"I think students should volunteer because they develop skills they cannot learn in a classroom."',
                '"I think students should volunteer because volunteering is important."',
                '"I think students should volunteer because many students volunteer."',
              ],
              correctIndex: 1,
              explanation:
                '"develop skills they cannot learn in a classroom" = ספציפי. מסביר בדיוק מה קורה ולמה זה שווה.',
            },
            {
              type: "mcq",
              prompt:
                '"I think the school day should start later _______ teenagers need more sleep." - מה חסר?',
              options: ["also", "because", "in addition", "in conclusion"],
              correctIndex: 1,
              explanation:
                "because = המילה שמחברת עמדה לסיבה. תמיד מגיעה ישר אחרי הדעה.",
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שמחברת את הדעה לסיבה.",
              text:
                "I think children should get a phone at age 13 because they start travelling to school alone.",
              correctIndices: [10],
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                '"Do you think all students should do volunteer work?"\n\nנסו לסיים את המשפט הזה:\n"I think students should / should not volunteer because..."\n\nהסיבה צריכה לענות: מה הם לומדים? מה זה נותן להם?',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "volunteer / להתנדב",
                "responsibility / אחריות",
                "community / קהילה",
                "skills / מיומנויות",
                "experience / ניסיון",
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
    id: "in-addition",
    section: "c-3",
    titleHe: "In addition - סיבה שנייה",
    titleEn: "In addition",
    required: ["because"],
    position: { x: 100, y: 2510 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}יש לכם סיבה אחת בכדי להסביר את הדעה שלכם או את הרעיון המרכזי שבחרתם.\n\n{d:rtl}אבל סיבה אחת לא תמיד מספיקה.\n\n{d:rtl}המורה רוצה לראות שיש לכם יותר מטיעון אחד.\n{d:rtl}בשביל זה יש: In addition.\n\n{p:text}In addition, volunteering looks good on a resume.\n\n{d:rtl}שימו לב - זו סיבה שנייה. שונה מהראשונה.\n{d:rtl}לא אותה מחשבה עם מילים אחרות.",
        },
        {
          type: "preface",
          text: "{p:text}❌ I think students should volunteer because it teaches responsibility. **++In addition, it teaches them to be responsible.++**\n{d:rtl}זה נשמע כמו שתי סיבות - אבל בעצם זו **אותה סיבה פעמיים**.\n{d:rtl}**responsibility** ו־**be responsible** אומרים כאן כמעט אותו דבר. המעריך מחפש **רעיון נוסף**, לא את אותו רעיון במילים אחרות.\n{p:text}✅ I think students should volunteer because it teaches responsibility. **++In addition, it gives them experience that can help them find jobs later.++**\n{d:rtl}עכשיו יש לנו שתי סיבות שונות:\n{d:rtl}**סיבה 1:** אחריות\n{d:rtl}**סיבה 2:** ניסיון לעתיד\n{d:rtl}הכלל:\n{d:rtl}**שתי סיבות = שני רעיונות שונים.**\n{d:rtl}לא חוזרים על אותה סיבה במילים אחרות.",
        },
        {
          type: "summary",
          title: "In addition - איך משתמשים",
          lines: [
            "תמיד בתחילת משפט חדש",
            '"In addition, [משפט שלם]."',
            "הסיבה חייבת להיות שונה מהראשונה",
            'אפשר גם: "Also," - אבל "In addition" נשמע יותר מקצועי',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים סיבה שנייה אמיתית" },
            {
              type: "mcq",
              prompt:
                'איזו סיבה שנייה שונה מ-"volunteering teaches responsibility"?',
              options: [
                "In addition, volunteering teaches students to be more responsible.",
                "In addition, volunteering is a good way to learn responsibility.",
                "In addition, volunteering connects students to their community and helps them understand real problems.",
                "In addition, responsibility is an important value in volunteering.",
              ],
              correctIndex: 2,
              explanation:
                'רק אפשרות 3 מביאה רעיון חדש. שאר האפשרויות חוזרות על "responsibility".',
            },
            {
              type: "mcq",
              prompt:
                '"I think the school day should start later because students need more sleep. _______ there is less traffic on the roads later in the morning."',
              options: [
                "Because",
                "In conclusion",
                "In addition",
                "For example",
              ],
              correctIndex: 2,
              explanation:
                'פחות פקקים זה רעיון חדש, לא קשור לשינה - לכן "In addition" (סיבה שנייה). "For example" מגיע כשמוסיפים פרט לסיבה קיימת, לא סיבה חדשה.',
            },
            {
              type: "mcq",
              prompt:
                "תלמיד כתב שתי סיבות שנראות שונות אבל הן בעצם אותו רעיון. המורה:",
              options: [
                "נותן ציון מלא - יש שני משפטים",
                "מוריד נקודות - חזרה על אותו רעיון",
                "נותן ציון מלא - In addition נכתב נכון",
                "לא שם לב לזה",
              ],
              correctIndex: 1,
              explanation:
                "הרובריקה אומרת במפורש: מורידים נקודות כשרעיונות שלמים חוזרים על עצמם.",
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                '"Do you think all students should volunteer?"\n\n✏️ I think students should / should not volunteer because...\n✏️ In addition,...\n\nחשוב: הסיבה השנייה חייבת להיות שונה מהראשונה.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "volunteer / להתנדב",
                "responsibility / אחריות",
                "community / קהילה",
                "skills / מיומנויות",
                "experience / ניסיון",
                "develop / לפתח",
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
    id: "for-example",
    section: "c-3",
    titleHe: "For example - לפרט",
    titleEn: "For example",
    required: ["in-addition"],
    position: { x: 70, y: 2600 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: '{d:rtl}יש לכם עמדה. יש לכם שתי סיבות. מצוין.\n\n{d:rtl}אבל סיבה בלי פרט - נשמעת ריקה.\n\n{p:ul}{d:ltr}**"Volunteering teaches skills."** - בסדר.\n{p:ul}{d:ltr}**"For example, students learn to work in a team and ****communicate with adults." **-  הרבה יותר טוב\n\n{p:callout}{d:rtl}**For example** = הוכחה שאתם יודעים על מה אתם מדברים.',
        },
        {
          type: "preface",
          text: '{d:rtl}For example מגיע ישר אחרי הסיבה.\n\n{p:text}"I think students should volunteer because they develop important skills.\n{p:text}For example, they learn to communicate with adults and solve real problems."\n\n{d:rtl}לא חייבים להשתמש בו פעמיים. פעם אחת ב-70-90 מילים - מספיק.\n{d:rtl}זה כבר מעלה את ציון ה-Vocabulary וה-Content.',
        },
        {
          type: "summary",
          title: "For example - המיקום",
          lines: [
            '"סיבה. For example, [פרט ספציפי]."',
            "For example תמיד אחרי הסיבה שהוא מסביר",
            "לא בתחילת הפסקה - לא בסיום",
            "פרט טוב = ספציפי, לא כללי",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים For example נכון" },
            {
              type: "mcq",
              prompt: 'היכן "For example" ממוקם בצורה הנכונה?',
              options: [
                "For example, volunteering is good. I think students should volunteer because it teaches skills.",
                "I think students should volunteer because it teaches skills. For example, they learn teamwork and communication.",
                "I think students should volunteer. In conclusion, for example, it teaches skills.",
                "For example, in addition, students learn responsibility through volunteering.",
              ],
              correctIndex: 1,
              explanation:
                "For example מגיע ישר אחרי הסיבה שהוא מסביר. לא בפתיחה, לא בסיכום.",
            },
            {
              type: "mcq",
              prompt: "איזו דוגמה היא הכי ספציפית וחזקה?",
              options: [
                '"For example, it is a good experience."',
                '"For example, volunteering is helpful in many ways."',
                '"For example, students who help in hospitals learn how to stay calm under pressure."',
                '"For example, many students volunteer."',
              ],
              correctIndex: 2,
              explanation:
                '"students who help in hospitals learn to stay calm under pressure" = מקום + מה לומדים שם. זה פרט אמיתי.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שמסמנת שמגיע פרט ספציפי.",
              text:
                "Traveling teaches you new things. For example, you discover different food and music.",
              correctIndices: [5],
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation?"\n\n✏️ I think [עמדה] because [סיבה].\n✏️ For example, [פרט ספציפי].\n\nהדוגמה צריכה להיות ספציפית - מה בדיוק קורה? איפה? למי?',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "travel / לטייל",
                "culture / תרבות",
                "explore / לחקור",
                "memories / זיכרונות",
                "relax / להירגע",
                "discover / לגלות",
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
    id: "in-conclusion",
    section: "c-3",
    titleHe: "In conclusion - לסגור",
    titleEn: "In conclusion",
    required: ["for-example"],
    position: { x: 0, y: 2720 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}החיבור שלנו צריכה סיום.\n\n{d:rtl}לא תשובה חדשה. לא סיבה חדשה.\n{d:rtl}פשוט משפט אחד שאומר: הנה מה שחשבתי לאורך כל החיבור.\n\n{p:text}In conclusion, I believe that volunteering should be part of every student's life.\n\n{d:rtl}קצר. ברור. סוגר.",
        },
        {
          type: "preface",
          text: "{p:text}❌ In conclusion, volunteering is good and teaches skills and also helps society and is important for the future.\n\n{d:rtl}משפט אחד ארוך עם הכל  הוא פחות מתאים בשלב זה.\n\n{p:text}✅ In conclusion, I believe that volunteering makes teenagers better people and better citizens.\n\n{d:rtl}המשפט הזה לעומת זאת כולל רעיון אחד וזה באמת נשמע כמו סיום.",
        },
        {
          type: "summary",
          title: "In conclusion - הנוסחה",
          lines: [
            '{p:text}"In conclusion, I believe / I think that..."',
            "משפט אחד בלבד",
            "לא מידע חדש - רק סיכום של מה שנאמר",
            "תמיד בסוף - לא באמצע",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים סיום טוב" },
            {
              type: "mcq",
              prompt: "איזה משפט סיום הוא הכי טוב?",
              options: [
                "In conclusion, volunteering is good because it teaches skills and also because it helps the community and in addition it is meaningful.",
                "In conclusion, I believe that volunteering is one of the most valuable experiences a teenager can have.",
                "In conclusion, for example, students who volunteer are happier.",
                "In conclusion, do you think students should volunteer?",
              ],
              correctIndex: 1,
              explanation:
                "משפט אחד, רעיון אחד, סוגר בצורה נקייה. אפשרות 1 ארוכה ומחזירה כל מה שנאמר.",
            },
            {
              type: "mcq",
              prompt:
                '"_______, I believe that starting school later would help students learn better." - מה חסר?',
              options: [
                "For example",
                "Because",
                "In addition",
                "In conclusion",
              ],
              correctIndex: 3,
              explanation:
                '"In conclusion" פותח את משפט הסיום. הוא תמיד מגיע אחרון.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שפותחת את משפט הסיום.",
              text:
                "In conclusion, I think that age 13 is the right age for a first cellphone.",
              correctIndices: [0],
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                "{d:rtl}בחרו נושא אחד:\n{d:rtl} volunteer / vacation / school / cellphone.\n\n✏️ In conclusion, I believe / I think that...\n\n{d:rtl}משפט אחד. לא יותר.",
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "important / חשוב",
                "valuable / בעל ערך",
                "essential / הכרחי",
                "every student / כל תלמיד",
                "teenagers / בני נוער",
                "experience / חוויה",
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
    id: "subject-verb",
    section: "c-3",
    titleHe: "Subject + Verb - משפט שלם",
    titleEn: "Subject + Verb",
    required: ["in-conclusion"],
    position: { x: -70, y: 2840 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'בגרות C = 8 נקודות על Language Use.\n\nהכלל הבסיסי שמגן על הנקודות האלה:\nכל משפט חייב subject + verb.\n\nSubject = מי עושה את הפעולה.\nVerb = מה הם עושים.\n\n{p:text}"Students learn." - subject: students. verb: learn. ✅\n"Students responsible." - subject: students. verb: אין. ❌',
        },
        {
          type: "preface",
          text: '{p:text}❌ Volunteering very important for teenagers.\nחסר: is. → "Volunteering is very important for teenagers." ✅\n\n{p:text}❌ Students they learn new things.\nעודף: they. → "Students learn new things." ✅\n\n{p:text}❌ Because schools need change.\nזה לא משפט - זה רק חלק ממשפט.\n{p:text}→ "I think this because schools need to change." ✅',
        },
        {
          type: "summary",
          title: "בדיקת משפט",
          lines: [
            "שאלו: מי עושה? (subject)",
            "שאלו: מה הם עושים? (verb)",
            "חסר אחד מהם? המשפט שבור.",
            '"is / are / has / have / learn / think" - כולם verbs',
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים משפט שלם ונכון" },
            {
              type: "mcq",
              prompt: "איזה משפט שלם ונכון?",
              options: [
                "Volunteering very important for students.",
                "Because it helps the community.",
                "Students learn responsibility when they volunteer.",
                "Students they develop new skills.",
              ],
              correctIndex: 2,
              explanation:
                '"Students (subject) learn (verb) responsibility" = משפט שלם. אפשרות 1 חסרה "is". אפשרות 2 היא רק חלק ממשפט. אפשרות 4 יש שניים במקום subject אחד.',
            },
            {
              type: "mcq",
              prompt:
                'מה חסר במשפט? "Traveling good for your mind and your health."',
              options: [
                "subject",
                'verb - חסר "is"',
                "object",
                "כלום - המשפט נכון",
              ],
              correctIndex: 1,
              explanation:
                '"Traveling is good..." - חסר is. כל משפט עם תיאור (adjective) צריך את הפועל to be: is / are / was.',
            },
            {
              type: "mcq",
              prompt: "איזה מהמשפטים האלה שבור?",
              options: [
                "Students develop important skills when they volunteer.",
                "Volunteering is a valuable experience for teenagers.",
                "Because many students in Israel participate in community service.",
                "In addition, schools can encourage students to help others.",
              ],
              correctIndex: 2,
              explanation:
                'Because לא יכול להתחיל משפט עצמאי - הוא מחבר שני חלקים. "Because many students..." = רק חלק ממשפט.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על ה-verb - מה הסטודנטים עושים?",
              text:
                "Students learn important skills when they volunteer in their community.",
              correctIndices: [1],
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                "כתבו 3 משפטים על נושא שתבחרו.\n\nלפני שלחצו שלח - בדקו כל משפט:\n✅ יש subject?\n✅ יש verb?\n\n3 משפטים. כל אחד שלם.",
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "students / תלמידים",
                "teenagers / בני נוער",
                "learn / לומדים",
                "develop / מפתחים",
                "is / הוא-היא",
                "are / הם",
                "can / יכולים",
                "help / עוזרים",
              ],
              minSentences: 3,
              minWordsUsed: 3,
            },
          ],
        },
      ],
    },
  },
  {
    id: "word-count",
    section: "c-3",
    titleHe: "70-90 מילים - לספור",
    titleEn: "70-90 Words",
    required: ["subject-verb"],
    position: { x: -100, y: 2960 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}כמה מילים צריך לכתוב?**70–90 מילים.**לא 69. לא 91.למה זה חשוב?כי כשכותבים פחות מ־70 מילים, מתחילים לאבד נקודות  💡 **הכלל שלנו:**אל תכוונו ל־70 בדיוק. עדיף לכתוב בערך **75–85 מילים**, כדי להיות בטוחים שאתם בתוך הטווח.",
        },
        {
          type: "preface",
          text: "{d:rtl}איך סופרים מהר?\n\n{d:rtl}a / the / and / I / is - כולן מילים.\n{d:rtl}\n\n{p:text}I think *(1)* students *(2)* should *(3)* volunteer *(4)* because *(5)* it* (6)* teaches *(7) *responsibility *(8)*.\n{d:rtl}אלו כבר **8 מילים**.\n\n{p:callout}{d:rtl}כתבתם פחות מ-70? הוסיפו For example עם פרט.\n{p:callout}{d:rtl}כתבתם יותר מ-90? הורידו משפט שלם - לא מילה אחת.",
        },
        {
          type: "summary",
          title: "ספירה מהירה",
          lines: [
            "כל מילה = 1, גם a, the, and",
            'פחות מ-70? הוסיפו "For example,..." עם פרט',
            "יותר מ-90? הורידו משפט שלם",
            "ספרו תמיד לפני שמגישים",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | ספירה ותיקון" },
            {
              type: "mcq",
              prompt: "{d:rtl}תלמיד כתב **65 מילים**. מה הכי חכם לעשות?",
              options: [
                "להגיש - קרוב מספיק",
                'להוסיף "For example,..." עם פרט ספציפי',
                "למחוק משפט ולכתוב מחדש",
                'להוסיף "very" ו-"really" לפני כל שם תואר',
              ],
              correctIndex: 1,
              explanation:
                '"For example,..." עם פרט קצר מוסיף בקלות 5-8 מילים. זו הדרך הנקייה ביותר להגיע ל-70.',
            },
            {
              type: "mcq",
              prompt: "{d:rtl}תלמיד כתב **95 מילים**. מה הכי חכם לעשות?",
              options: [
                "להגיש - 90 זה רק המלצה",
                "למחוק מילה אחת מכל משפט",
                "לזהות את המשפט הכי פחות חשוב ולהוריד אותו כולו",
                "לקצר כל מילה לראשי תיבות",
              ],
              correctIndex: 2,
              explanation:
                "להוריד משפט שלם = הורדת 8-12 מילים בבת אחת. לקצר מילים בודדות לוקח זמן ועלול לשבור משפטים.",
            },
          ],
        },
        {
          screens: [
            {
              type: "self-check",
              prompt:
                "כתבו 5 משפטים על כל נושא שתרצו.\nאחר כך ספרו את המילים וכתבו את המספר.\n70-90? ✅ פחות? כתבו מה תוסיפו. יותר? כתבו מה תורידו.",
              modelAnswer:
                '70-90 - מצוין, אפשר להגיש.\nפחות מ-70 - הוסיפו: "For example, [פרט ספציפי אחד]."\nיותר מ-90 - הורידו משפט אחד שלם.',
            },
          ],
        },
      ],
    },
  },
  {
    id: "topic-volunteer",
    section: "c-3",
    titleHe: "Do you think? - התנדבות",
    titleEn: "Do you think? - Volunteer Work",
    required: ["word-count"],
    position: { x: -70, y: 3080 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: '{d:rtl}חבר׳ה, שאלה שמתחילה ב-**"Do you think"** היא הכי נפוצה בבגרות.\n\n{d:rtl}היא מבקשת ממכם שני דברים בלבד:\n{d:rtl}1. להגיד YES או NO\n{d:rtl}2. להסביר למה\n\n{d:rtl}זהו. לא סיפור חיים. לא הסבר על העולם.\n{d:rtl}YES/NO + סיבות.',
        },
        {
          type: "preface",
          text: '{d:rtl}הנוסחה שעובדת תמיד:\n\n{p:text}"I think... because..."\n{p:text}"In addition,..."\n{p:text}"In conclusion, I believe..."\n\n{d:rtl}שלושה משפטי פתיחה. שלושה.\n{d:rtl}ומעבר לזה? מה שבא לכם.',
        },
        {
          type: "preface",
          text: "{d:rtl}טעות שתלמידים עושים: מתחילים לכתוב בלי להגיד YES או NO.\n\n{p:text}❌ Volunteer work is very important in the world today.\n{p:text}✅ I think all students should do volunteer work because it teaches responsibility.\n\n{d:rtl}הבדל של **++3 נקודות++** בתוכן. פשוט להימנע ממנה.",
        },
        {
          type: "summary",
          title: "YES/NO Question - המבנה",
          lines: [
            '{p:text}"I think / I do not think... because..."',
            '{p:text}"In addition,..."',
            '{p:text}"In conclusion, I believe..."',
            "70-90 מילים. לא פחות, לא יותר.",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | להבין מה מבקשים" },
            {
              type: "mcq",
              prompt:
                '"Do you think all high school students should do volunteer work?" - מה חייב להיות במשפט הראשון?',
              options: [
                "Volunteer work is an important part of modern society.",
                "I think all students should / should not do volunteer work.",
                "Many students around the world volunteer every year.",
                "In conclusion, volunteering is a valuable experience.",
              ],
              correctIndex: 1,
              explanation:
                'תמיד מתחילים עם "I think... YES" או "I do not think... NO". בלי הדעה שלכם - אין תוכן, ותוכן שווה 10 נקודות.',
            },
            {
              type: "mcq",
              prompt: "איזו מילה מחברת בין הדעה לסיבה?",
              options: ["also", "because", "in conclusion", "however"],
              correctIndex: 1,
              explanation:
                '"because" = הסיבה שלכם. "I think X because Y." זה הבסיס של כל פסקת דעה.',
            },
            {
              type: "mcq",
              prompt:
                "תלמיד כתב 85 מילים מושלמות על נושא שונה מהשאלה. מה קורה?",
              options: [
                "מקבל ציון מלא - האנגלית מצוינת",
                "מאבד רק כמה נקודות",
                "מקבל 0 על כל המטלה",
                "מאבד רק נקודות על תוכן",
              ],
              correctIndex: 2,
              explanation:
                "off topic = 0 על כל המטלה. לפני הכל - ודאו שאתם עונים על השאלה שנשאלה.",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school students should do volunteer work? Give reasons."\nWrite 70-90 words. Use at least 4 words from the word bank.\n\n✏️ I think... because...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "volunteer / להתנדב",
                "responsibility / אחריות",
                "community / קהילה",
                "skills / מיומנויות",
                "experience / ניסיון",
                "develop / לפתח",
                "society / חברה",
                "benefit / יתרון",
                "meaningful / משמעותי",
                "opportunity / הזדמנות",
              ],
              minSentences: 4,
              minWordsUsed: 4,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | בניית פסקה מלאה" },
            {
              type: "mcq",
              prompt: "איזה פתיח מבטא עמדה ברורה עם סיבה?",
              options: [
                "Volunteering is when people help others without getting paid.",
                "I think all students should volunteer because it teaches them to care about others.",
                "There are many types of volunteer work in Israel and around the world.",
                "In conclusion, volunteer work is good for teenagers.",
              ],
              correctIndex: 1,
              explanation:
                "אפשרות 2 - דעה ברורה + סיבה מיד. זה מה שהמורה רוצה לראות בשורה הראשונה.",
            },
            {
              type: "mcq",
              prompt: "איזה משפט מוסיף סיבה שנייה בצורה הכי נכונה?",
              options: [
                "Because volunteering is important.",
                "I think volunteering is good.",
                "In addition, volunteering helps students develop useful skills for the future.",
                "In conclusion, I believe volunteering is valuable.",
              ],
              correctIndex: 2,
              explanation:
                '"In addition" פותח סיבה שנייה. שימו לב - לא "also because". פשוט "In addition, [משפט שלם]."',
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school students should do volunteer work?"\nכתבו פסקה מלאה - 70-90 מילים. לפחות 5 מילים מהבנק.\n\n✏️ משפט 1 - I think... YES או NO... because...\n✏️ משפט 2-3 - הסבר ודוגמה. אפשר לכתוב "For example,..."\n✏️ משפט 4 - In addition,...\n✏️ משפט 5 - In conclusion, I believe...',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "volunteer / להתנדב",
                "responsibility / אחריות",
                "community / קהילה",
                "skills / מיומנויות",
                "experience / ניסיון",
                "develop / לפתח",
                "society / חברה",
                "benefit / יתרון",
                "meaningful / משמעותי",
                "opportunity / הזדמנות",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 3 | תנאי בחינה אמיתיים" },
            {
              type: "mcq",
              prompt:
                'Read this answer. What is missing?\n"Volunteer work is very good. It helps people. Many students volunteer. It is important for society."',
              options: [
                "הסיום חסר",
                'אין דעה ברורה (YES/NO) ואין סיבה ספציפית עם "because"',
                "האנגלית לא נכונה",
                "יש יותר מדי מילים",
              ],
              correctIndex: 1,
              explanation:
                'אין "I think" ואין "because". כל המשפטים הם הצהרות כלליות. זו לא תשובה לשאלה.',
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school students should do volunteer work?\nGive reasons to explain your opinion."\n\nזה תנאי בחינה אמיתיים. 70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "volunteer / להתנדב",
                "responsibility / אחריות",
                "community / קהילה",
                "skills / מיומנויות",
                "experience / ניסיון",
                "develop / לפתח",
                "society / חברה",
                "benefit / יתרון",
                "meaningful / משמעותי",
                "opportunity / הזדמנות",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
      ],
    },
  },
  {
    id: "topic-vacation",
    section: "c-3",
    titleHe: "What do you think? - חופשה",
    titleEn: "What do you think? - Vacation",
    required: ["topic-volunteer"],
    position: { x: 0, y: 3200 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}🟦 שאלה שמתחילה ב־**What do you think...?** היא שאלה קצת שונה.\n\n{d:rtl}היא לא שואלת: **YES או NO?**\n{d:rtl}היא שואלת: **מה לדעתכם האפשרות הטובה ביותר?**\n\n{d:rtl}כלומר, צריך לעשות שני דברים:\n{d:rtl}🟢 **1. לבחור דבר אחד ברור**\n{d:rtl}🟢 **2. להסביר למה בחרתם בו**\n\n{d:rtl}למשל:\n{p:text}**What do you think is the best way to help teenagers study better?**\n\n{d:rtl}אל תכתבו:\n{p:text}❌ **There are many ways to help teenagers study.**\n{d:rtl}זה לא נותן תשובה ברורה.\n\n{d:rtl}במקום זה:\n{p:text}✅ **In my opinion, the best way is to give students more practice because it helps them understand the material better.**\n\n{d:rtl}שימו לב:\n{d:rtl}**the best way is...** = הבחירה שלי\n{d:rtl}**because...** = הסיבה שלי\n\n{p:callout}{d:rtl}**What do you think...? ← בוחרים תשובה אחת ברורה ← ואז מסבירים למה.**",
        },
        {
          type: "preface",
          text: "{d:rtl}הטעות הנפוצה ביותר בסוג הזה:\n\n{p:text}❌ There are many ways to spend a vacation. Some people travel. Others rest.\n\n{d:rtl}זה לא בחירה. זה תיאור של העולם.\n\n{p:text}{d:ltr}✅ In my opinion, the best way to spend a vacation is to travel because you discover new cultures.\n\n{d:rtl}הבדל קטן בפתיחה, הבדל גדול בציון.",
        },
        {
          type: "summary",
          title: "What do you think? - המבנה",
          lines: [
            '{p:text}"In my opinion, the best... is X because..."',
            '{p:text}"In addition,..."',
            '{p:text}"In conclusion, I believe..."',
            "הבחירה צריכה להיות ברורה מהמשפט הראשון",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | להבין מה מבקשים" },
            {
              type: "mcq",
              prompt:
                '"What do you think is the best way to spend a vacation?" - מה חייב להיות במשפט הראשון?',
              options: [
                "תיאור של כל האפשרויות שקיימות",
                "הבחירה שלכם + סיבה אחת",
                "משפט סיכום",
                "שאלה חוזרת",
              ],
              correctIndex: 1,
              explanation:
                '"What do you think?" = בחרו ספציפית. "In my opinion, the best way is traveling because..." - בחירה + because = פתיח מנצח.',
            },
            {
              type: "mcq",
              prompt:
                "תלמיד כותב על שתי אפשרויות שווה בשווה ולא בוחר. הציון לתוכן יהיה:",
              options: [
                "מלא - הוא כיסה הרבה נושאים",
                "חלקי - המטלה לא הושלמה, אין דעה ברורה",
                "0 - off topic",
                "מלא - אין חובה לבחור",
              ],
              correctIndex: 1,
              explanation:
                '"What do you think?" מבקש את הדעה שלכם. לדון בשני צדדים בלי לבחור = partially on topic = ציון חלקי.',
            },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation?"\n\nכתבו 3 משפטים בלבד:\n✏️ In my opinion, the best way is... because...\n✏️ In addition,...\n✏️ In conclusion, I believe...\n\nבחרו בחירה אחת ברורה. לא "it depends". לפחות 3 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "travel / לטייל",
                "culture / תרבות",
                "explore / לחקור",
                "memories / זיכרונות",
                "relax / להירגע",
                "discover / לגלות",
                "adventure / הרפתקה",
                "unforgettable / בלתי נשכח",
                "rest / מנוחה",
                "experience / חוויה",
              ],
              minSentences: 3,
              minWordsUsed: 3,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | הרחבה לפסקה שלמה" },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation?"\n\nלקחו את 3 המשפטים מסיבוב 1 ועכשיו מרחיבים:\n✏️ אחרי כל סיבה - הוסיפו "For example,..." עם פרט קטן\n✏️ שמרו על אותה בחירה שבחרתם\n\n70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "travel / לטייל",
                "culture / תרבות",
                "explore / לחקור",
                "memories / זיכרונות",
                "relax / להירגע",
                "discover / לגלות",
                "adventure / הרפתקה",
                "unforgettable / בלתי נשכח",
                "rest / מנוחה",
                "experience / חוויה",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 3 | בחירה שונה - תנאי בחינה" },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation?"\n\nהפעם - בחרו בחירה שונה לגמרי מסיבוב 2.\nלדוגמה: לנוח בבית, להתנדב, ללמוד משהו חדש, לבקר משפחה.\n\n70-90 מילים. אותו מבנה. לפחות 5 מילים מהבנק.\nטיפ: אם הבחירה שונה - גם הסיבות צריכות להיות שונות.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "travel / לטייל",
                "culture / תרבות",
                "explore / לחקור",
                "memories / זיכרונות",
                "relax / להירגע",
                "discover / לגלות",
                "adventure / הרפתקה",
                "unforgettable / בלתי נשכח",
                "rest / מנוחה",
                "experience / חוויה",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
      ],
    },
  },
  {
    id: "topic-school",
    section: "c-3",
    titleHe: "What changes? - בית ספר",
    titleEn: "What changes? - School",
    required: ["topic-vacation"],
    position: { x: 70, y: 3320 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: '{d:rtl}יש סוג שלישי של שאלה - "In your opinion, what changes / what should...?"\n\n{d:rtl}זו לא שאלת YES/NO.\n{d:rtl}זו לא שאלת העדפה.\n\n{d:rtl}היא מבקשת: תציעו **משהו ספציפי **ותסבירו למה זה יעזור.',
        },
        {
          type: "preface",
          text: '{p:text}❌ Schools have many problems. Students are tired. Teachers are stressed.\n\n{d:rtl}זה תיאור הבעיה. לא הצעה.\n\n{p:text}✅ I think schools should have shorter lessons because students cannot focus for more than 45 minutes.\n\n{p:callout}{d:rtl}ראיתם את ההבדל? **"should have"** = הצעה. **"because"** = ההסבר.',
        },
        {
          type: "summary",
          title: "What changes? - המבנה",
          lines: [
            '{p:text}"I think schools should... because..."',
            '{p:text}"In addition, schools could... This would help because..."',
            '{p:text}"In conclusion, I believe these changes would..."',
            "שתי הצעות ספציפיות = ציון תוכן מלא",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מזהים הצעה ספציפית" },
            {
              type: "mcq",
              prompt: "מה מבדיל הצעה טובה מתיאור בעיה?",
              options: [
                'הצעה = "should / could + פעולה ספציפית". תיאור = "is / are + מצב קיים"',
                "הצעה חייבת להיות ארוכה יותר",
                "אין הבדל, שתיהם מקבלים ציון מלא",
                "תיאור עדיף כי הוא מסביר את הרקע",
              ],
              correctIndex: 0,
              explanation:
                '"Schools are noisy" = תיאור. "Schools should have quiet zones" = הצעה. המילים should / could הן הסימן.',
            },
            {
              type: "mcq",
              prompt: "איזו מהן הצעה ספציפית שראויה לציון תוכן מלא?",
              options: [
                "Schools should be better and more interesting for students.",
                "Schools should have a 20-minute break after every two lessons because students lose focus without rest.",
                "There are many problems in schools today that need to be solved.",
                "In conclusion, schools need to change.",
              ],
              correctIndex: 1,
              explanation:
                '"a 20-minute break after every two lessons because..." = ספציפי + סיבה. "better and more interesting" = כללי מדי.',
            },
            {
              type: "writing-task",
              prompt:
                '"What changes can be made to your school?"\n\nרק שתי הצעות - לא פסקה מלאה:\n✏️ I think schools should... because...\n✏️ In addition, schools could... This would help because...\n\nספציפיות. לא "be better" - אלא מה בדיוק לשנות. לפחות 3 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "improve / לשפר",
                "focus / להתרכז",
                "creative / יצירתי",
                "environment / סביבה",
                "comfortable / נוח",
                "effective / יעיל",
                "project / פרויקט",
                "break / הפסקה",
                "technology / טכנולוגיה",
                "encourage / לעודד",
              ],
              minSentences: 2,
              minWordsUsed: 3,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | עוטפים ב-70-90 מילים" },
            {
              type: "writing-task",
              prompt:
                '"What changes can be made to your school to make it a better place to learn?"\n\nלקחו את שתי ההצעות מסיבוב 1 ועכשיו עוטפים:\n✏️ בהתחלה - משפט פתיחה שמציג את הרעיון הכללי\n✏️ בסוף - "In conclusion, I believe these changes would..."\n\n70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "improve / לשפר",
                "focus / להתרכז",
                "creative / יצירתי",
                "environment / סביבה",
                "comfortable / נוח",
                "effective / יעיל",
                "project / פרויקט",
                "break / הפסקה",
                "technology / טכנולוגיה",
                "encourage / לעודד",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 3 | תנאי בחינה אמיתיים" },
            {
              type: "writing-task",
              prompt:
                '"In your opinion, what changes can be made to your school\nso that it can become a better place to learn?\nGive reasons to explain your opinion."\n\nשתי הצעות ספציפיות. כל אחת עם because.\n70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "improve / לשפר",
                "focus / להתרכז",
                "creative / יצירתי",
                "environment / סביבה",
                "comfortable / נוח",
                "effective / יעיל",
                "project / פרויקט",
                "break / הפסקה",
                "technology / טכנולוגיה",
                "encourage / לעודד",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
      ],
    },
  },
  {
    id: "topic-cellphone",
    section: "c-3",
    titleHe: "At what age? - פלאפונים",
    titleEn: "At what age? - Cellphones",
    required: ["topic-school"],
    position: { x: 100, y: 3440 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}יש שאלות שמבקשות מכם לבחור **מספר, גיל או כמות אחת**.\n\n{d:rtl}למשל:\n{p:text}{d:ltr}**At what age...?** = **באיזה גיל?**\n\n{d:rtl}🟢 במקרה כזה בוחרים **גיל אחד ברור**.\n\n{d:rtl}לא כותבים:\n{p:text}❌ **It depends.**\n{p:text}❌ **Some say 10, others say 15.**\n\n{d:rtl}בוחרים תשובה אחת:\n{p:text}✅ **I think teenagers should start working at the age of 16.**\n{d:rtl}ואז מסבירים **למה** בחרתם דווקא בגיל הזה.\n{d:rtl}\n{p:callout}{d:rtl}**מבקשים מספר אחד ← נותנים מספר אחד ← ואז מסבירים.**",
        },
        {
          type: "preface",
          text: "{d:rtl}שימו לב: השאלה **לא** שואלת:\n{p:text}❌ **Do you think children should have phones?**\n{d:rtl}היא כבר מניחה שלילדים יהיה טלפון.\n\n{d:rtl}היא שואלת רק:\n{p:text}{d:rtl}🟢 **מתי? באיזה גיל?**\n\n{d:rtl}לכן אל תתחילו לכתוב:\n{p:text}❌ **I think phones are dangerous for children.**\n{d:rtl}זה לא עונה על השאלה.\n\n{d:rtl}במקום זה:\n{p:text}✅ **I think children should get their own phone at age 13 because...**\n\n{p:callout}{d:rtl}**השאלה שואלת מתי? ← עונים בגיל. **לא משנים את השאלה לנושא אחר.",
        },
        {
          type: "summary",
          title: "At what age? - המבנה",
          lines: [
            '{p:text}"I think children should... at age X because..."',
            '{p:text}"In addition,..."',
            '{p:text}"In conclusion, I believe that age X is right because..."',
            "הגיל צריך להופיע במשפט הראשון",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | גיל ספציפי במשפט הראשון" },
            {
              type: "mcq",
              prompt:
                '"At what age should children be allowed to have their own cellphones?" - מה חייב להיות במשפט הראשון?',
              options: [
                "תיאור של הבעיות עם סלולריים",
                "גיל ספציפי + because",
                '"It depends on the child"',
                "הצגת שני הצדדים",
              ],
              correctIndex: 1,
              explanation:
                '"At what age?" = תנו מספר. "I think children should get a phone at age 12 because..." - גיל + סיבה = פתיח מנצח.',
            },
            {
              type: "mcq",
              prompt:
                'איזה פתיח עונה ישירות על "At what age should children have phones?"',
              options: [
                "Cellphones are very popular among young people today.",
                "I think children should get their first phone at age 13 because they are old enough to use it.",
                "There are advantages and disadvantages to children having phones.",
                "In conclusion, 13 is the right age for a cellphone.",
              ],
              correctIndex: 1,
              explanation:
                "גיל ספציפי (13) + because + סיבה. ישיר, ברור, עונה על השאלה.",
            },
            {
              type: "writing-task",
              prompt:
                '"At what age should children be allowed to have their own cellphones?"\n\nכתבו 3 משפטים בלבד:\n✏️ I think children should get a phone at age... because...\n✏️ In addition,...\n✏️ In conclusion, I believe that age... is right because...\n\nחשוב: הגיל צריך להופיע כבר במשפט הראשון. לפחות 3 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "responsible / אחראי",
                "mature / בוגר",
                "safe / בטוח",
                "social media / רשתות חברתיות",
                "screen time / זמן מסך",
                "communicate / לתקשר",
                "independent / עצמאי",
                "dangerous / מסוכן",
                "privacy / פרטיות",
                "contact / ליצור קשר",
              ],
              minSentences: 3,
              minWordsUsed: 3,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | מרחיבים ל-70-90 מילים" },
            {
              type: "writing-task",
              prompt:
                '"At what age should children be allowed to have their own cellphones?"\n\nמרחיבים לפסקה מלאה:\n✏️ הסבירו למה דווקא הגיל הזה - מה קורה בגיל הזה שלא קורה לפניו?\n✏️ הוסיפו "For example,..." עם פרט ספציפי\n\n70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "responsible / אחראי",
                "mature / בוגר",
                "safe / בטוח",
                "social media / רשתות חברתיות",
                "screen time / זמן מסך",
                "communicate / לתקשר",
                "independent / עצמאי",
                "dangerous / מסוכן",
                "privacy / פרטיות",
                "contact / ליצור קשר",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 3 | גיל שונה - תנאי בחינה" },
            {
              type: "writing-task",
              prompt:
                '"At what age should children be allowed to have their own cellphones?"\n\nהפעם - בחרו גיל שונה מסיבוב 2 ובנו טיעון חדש לגמרי.\n\nאם בחרתם גיל גבוה יותר - הסבירו מה הסכנות בגיל מוקדם.\nאם בחרתם גיל נמוך יותר - הסבירו למה הילד כבר מוכן.\n\n70-90 מילים. לפחות 5 מילים מהבנק.',
              wordBank: [
                "I think",
                "I believe",
                "in my opinion",
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "responsible / אחראי",
                "mature / בוגר",
                "safe / בטוח",
                "social media / רשתות חברתיות",
                "screen time / זמן מסך",
                "communicate / לתקשר",
                "independent / עצמאי",
                "dangerous / מסוכן",
                "privacy / פרטיות",
                "contact / ליצור קשר",
              ],
              minSentences: 5,
              minWordsUsed: 5,
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-a45c17de",
    section: "c-3",
    titleHe: "כתיבה - הקדמה",
    required: ["n-7c5330b8"],
    position: { x: 0, y: 2230 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'ועכשיו עוברים לחלק שהרבה תלמידים קצת נלחצים ממנו:\n**הכתיבה.**\n\nאבל לפני שמתחילים, חשוב לדעת דבר אחד:\nלא צריך לכתוב אנגלית "מושלמת".\n\nצריך לדעת **לבנות תשובה נכונה, ברורה ומסודרת**.\nבחלק הזה נלמד את זה שלב אחרי שלב:\n\nאיך מתחילים, איך בונים משפטים, איך מחברים בין רעיונות, ואיך בודקים שלא שכחנו משהו חשוב.\n\n**המטרה שלנו: להפוך את הכתיבה ממשהו מלחיץ - למשהו שיש לו שיטה. אז בואו נתחיל! **',
        },
      ],
      rounds: [{ screens: [] }],
    },
  },
];
