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
    position: { x: 60, y: 2310 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "חבר׳ה, מה הטעות הכי נפוצה בכתיבה?\n\nלא כתיב.לא דקדוק. **אלא לא לענות על השאלה.**\n\nאם השאלה מבקשת מכם להביע דעה, אתם חייבים קודם להגיד בצורה ברורה:\n\n**YES — אני בעד.**או **NO — אני נגד.**\n\nתלמיד שכותב:\n**“Volunteering is good”**\n\n++עדיין לא באמת הביע דעה.++ הוא רק תיאר את הנושא.\nהמעריך בבחינת הבגרות רוצה לקרוא: \n\n**מה אתם חושבים?**\n\n**למה אתם חושבים כך?**\n",
        },
        {
          type: "preface",
          text: "זה המשפט הכי חשוב בתחילת הפסקה:\n\n✅ **I think teenagers should volunteer.**\nהמשפט **קצר**, **ברור**, והעמדה שלכם מובנת מיד.\nועכשיו טיפ חשוב מאוד:\n\n**במשימת דעה, אל תבזבזו זמן על:**\n**“רגע... אני בעד או נגד?”**\n\nאם אין לכם סיבה טובה לבחור אחרת — לכו על **דעה חיובית**.\nלמה?\n\nכי בדרך כלל הרבה יותר קל לחשוב על סיבות חיוביות:\n**It helps...****It improves.**..**..****It teaches...**\nלדוגמה:\n**I think teenagers should volunteer.**\nוזהו.\nבחרתם עמדה. ממשיכים.\n\n",
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
                '### \n### בואו נעבו על עוד דוגמה:\n\n### 🟢 שלב 1 — מבינים את השאלה\n**Do you think teenagers should have part-time jobs?**\nלא מספיק להבין רק:\n**teenagers** = בני נוער**jobs** = עבודות\nצריך להבין גם:\n**part-time jobs** = עבודות במשרה חלקית\nכלומר, השאלה היא:\n**האם לדעתכם בני נוער צריכים לעבוד במשרה חלקית?**\n### 🟡 שלב 2 — לא מסתבכים\nאל תבזבזו זמן על:\n**"אני בעד או נגד?"**\nאם אין לכם סיבה מיוחדת לבחור אחרת — לכו על **YES**.\n### 🟢 שלב 3 — כותבים פתיח ברור\n✅ **I think teenagers should have part-time jobs.**\nקצר. ברור. נכון.\n### ⭐ הכלל שלנו\n**מבינים את כל השאלה → בוחרים YES → כותבים פתיח → ממשיכים.**',
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
            { type: "preface", text: "לחצו על המילה שמבטאת הסכמה." },
            {
              type: "mark-word",
              sentence:
                "I think all students should do volunteer work in their community.",
              correctWordIndex: 1,
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
            { type: "preface", text: "לחצו על המילה שהופכת את המשפט ל-NO." },
            {
              type: "mark-word",
              sentence:
                "I do not think homework should be given every weekend.",
              correctWordIndex: 2,
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
                "because",
                "in addition",
                "for example",
                "in conclusion",
                "should",
                "schools",
                "students",
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
                "because",
                "in addition",
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
                "because",
                "in addition",
                "for example",
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
                "because",
                "in addition",
                "for example",
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
                "because",
                "in addition",
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
    position: { x: 100, y: 2410 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'יש לכם עמדה. מצוין.\n\nאבל המורה רוצה גם לדעת למה.\n\nהמילה שמחברת את הדעה לסיבה היא: because.\n\n"I think students should volunteer because it teaches responsibility."\n\nעמדה + because + סיבה = משפט שמרוויח נקודות.',
        },
        {
          type: "preface",
          text: 'הסיבה צריכה לענות על שאלה אחת: למה?\n\n❌ I think students should volunteer because volunteering is good.\nלמה זה לא עובד? כי "good" לא מסביר כלום.\n\n✅ I think students should volunteer because they learn to care about others.\nזו סיבה אמיתית.',
        },
        {
          type: "summary",
          title: "נוסחת because",
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
            { type: "preface", text: "לחצו על המילה שמחברת את הדעה לסיבה." },
            {
              type: "mark-word",
              sentence:
                "I think children should get a phone at age 13 because they start travelling to school alone.",
              correctWordIndex: 10,
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
          text: 'יש לכם סיבה אחת. טוב.\n\nאבל אחת לא תמיד מספיקה.\n\nהמורה רוצה לראות שיש לכם יותר מטיעון אחד.\nבשביל זה יש: In addition.\n\n"In addition, volunteering looks good on a resume."\n\nשימו לב - זו סיבה שנייה. שונה מהראשונה.\nלא אותה מחשבה עם מילים אחרות.',
        },
        {
          type: "preface",
          text: "❌ **I think students should volunteer because it teaches responsibility.**\n**In addition, it teaches them to be responsible.**\nזה נשמע כמו שתי סיבות — אבל בעצם זו **אותה סיבה פעמיים**.\n**responsibility** ו־**be responsible** אומרים כאן כמעט אותו דבר. המעריך מחפש **רעיון נוסף**, לא את אותו רעיון במילים אחרות.\n✅ **I think students should volunteer because it teaches responsibility.**\n**In addition, it gives them experience that can help them find jobs later.**\nעכשיו יש לנו שתי סיבות שונות:\n**סיבה 1:** אחריות**סיבה 2:** ניסיון לעתיד\nהכלל:\n**שתי סיבות = שני רעיונות שונים.**\nלא חוזרים על אותה סיבה במילים אחרות.",
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
                '"I think the school day should start later because students need sleep. _______ studies show that tired students cannot focus."',
              options: [
                "Because",
                "In conclusion",
                "In addition",
                "For example",
              ],
              correctIndex: 2,
              explanation:
                '"In addition" = סיבה שנייה. "For example" מגיע כשמוסיפים פרט לסיבה קיימת, לא סיבה חדשה.',
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
          text: 'יש לכם עמדה. יש לכם שתי סיבות. מצוין.\n\nאבל סיבה בלי פרט - נשמעת ריקה.\n\n"Volunteering teaches skills." - בסדר.\n"For example, students learn to work in a team and communicate with adults." - הרבה יותר טוב.\n\nFor example = הוכחה שאתם יודעים על מה אתם מדברים.',
        },
        {
          type: "preface",
          text: 'For example מגיע ישר אחרי הסיבה.\n\n"I think students should volunteer because they develop important skills.\nFor example, they learn to communicate with adults and solve real problems."\n\nלא חייבים להשתמש בו פעמיים. פעם אחת ב-70-90 מילים - מספיק.\nזה כבר מעלה את ציון ה-Vocabulary וה-Content.',
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
            { type: "preface", text: "לחצו על המילה שמסמנת שמגיע פרט ספציפי." },
            {
              type: "mark-word",
              sentence:
                "Traveling teaches you new things. For example, you discover different food and music.",
              correctWordIndex: 5,
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
          text: 'הפסקה צריכה סיום.\n\nלא תשובה חדשה. לא סיבה חדשה.\nפשוט משפט אחד שאומר: הנה מה שחשבתי לאורך כל הפסקה.\n\n"In conclusion, I believe that volunteering should be part of every student\'s life."\n\nקצר. ברור. סוגר.',
        },
        {
          type: "preface",
          text: "❌ In conclusion, volunteering is good and teaches skills and also helps society and is important for the future.\n\nמשפט אחד ארוך עם הכל שוב - לא זה.\n\n✅ In conclusion, I believe that volunteering makes teenagers better people and better citizens.\n\nמשפט אחד. רעיון אחד. נשמע כמו סיום.",
        },
        {
          type: "summary",
          title: "In conclusion - הנוסחה",
          lines: [
            '"In conclusion, I believe / I think that..."',
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
            { type: "preface", text: "לחצו על המילה שפותחת את משפט הסיום." },
            {
              type: "mark-word",
              sentence:
                "In conclusion, I think that age 13 is the right age for a first cellphone.",
              correctWordIndex: 0,
            },
          ],
        },
        {
          screens: [
            {
              type: "writing-task",
              prompt:
                "בחרו נושא אחד: volunteer / vacation / school / cellphone.\n\n✏️ In conclusion, I believe / I think that...\n\nמשפט אחד. לא יותר.",
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
          text: 'בגרות C = 8 נקודות על Language Use.\n\nהכלל הבסיסי שמגן על הנקודות האלה:\nכל משפט חייב subject + verb.\n\nSubject = מי עושה את הפעולה.\nVerb = מה הם עושים.\n\n"Students learn." - subject: students. verb: learn. ✅\n"Students responsible." - subject: students. verb: אין. ❌',
        },
        {
          type: "preface",
          text: '❌ Volunteering very important for teenagers.\nחסר: is. → "Volunteering is very important for teenagers." ✅\n\n❌ Students they learn new things.\nעודף: they. → "Students learn new things." ✅\n\n❌ Because schools need change.\nזה לא משפט - זה רק חלק ממשפט.\n→ "I think this because schools need to change." ✅',
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
            { type: "preface", text: "לחצו על ה-verb - מה הסטודנטים עושים?" },
            {
              type: "mark-word",
              sentence:
                "Students learn important skills when they volunteer in their community.",
              correctWordIndex: 1,
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
          text: "70-90 מילים. לא 69. לא 91.\n\nלמה זה חשוב?\n\nכי המורה מוריד נקודות אם הפסקה קצרה מדי.\nו-10 הנקודות החשובות ביותר - תוכן - הן הראשונות שנפגעות.\n\n60-69 מילים = מינוס 1.\n50-59 מילים = מינוס 3.\n40-49 מילים = מינוס 6.\n\nשווה לספור.",
        },
        {
          type: "preface",
          text: 'איך סופרים מהר?\n\na / the / and / I / is - כולן מילים.\nכל מילה = 1. גם מילות קישור.\n\n"I think (1) students (2) should (3) volunteer (4) because (5) it (6) teaches (7) responsibility (8)."\n\nזה 8 מילים.\n\nכתבתם פחות מ-70? הוסיפו For example עם פרט.\nכתבתם יותר מ-90? הורידו משפט שלם - לא מילה אחת.',
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
              prompt: "תלמיד כתב 65 מילים. מה הכי חכם לעשות?",
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
              prompt: "תלמיד כתב 95 מילים. מה הכי חכם לעשות?",
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
            {
              type: "mcq",
              prompt: "מה ההפסד בציון על 55 מילים?",
              options: [
                "מינוס 1 נקודה",
                "מינוס 3 נקודות",
                "מינוס 6 נקודות",
                "אפס על כל המטלה",
              ],
              correctIndex: 1,
              explanation:
                "50-59 מילים = מינוס 3 נקודות מהתוכן. זה יקר. שווה את 3 הדקות של ספירה.",
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
          text: 'חבר׳ה, שאלה שמתחילה ב-"Do you think" היא הכי נפוצה בבגרות.\n\nהיא מבקשת ממכם שני דברים בלבד:\n1. להגיד YES או NO\n2. להסביר למה\n\nזהו. לא סיפור חיים. לא הסבר על העולם.\nYES/NO + סיבות.',
        },
        {
          type: "preface",
          text: 'הנוסחה שעובדת תמיד:\n\n"I think... because..."\n"In addition,..."\n"In conclusion, I believe..."\n\nשלושה משפטי פתיחה. שלושה.\nומעבר לזה? מה שבא לכם.',
        },
        {
          type: "preface",
          text: "טעות שתלמידים עושים: מתחילים לכתוב בלי להגיד YES או NO.\n\n❌ Volunteer work is very important in the world today.\n✅ I think all students should do volunteer work because it teaches responsibility.\n\nהבדל של 3 נקודות בתוכן. פשוט להימנע ממנה.",
        },
        {
          type: "summary",
          title: "YES/NO Question - המבנה",
          lines: [
            '"I think / I do not think... because..."',
            '"In addition,..."',
            '"In conclusion, I believe..."',
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
          text: 'שאלה שמתחילה ב-"What do you think" - קצת שונה.\n\nהיא לא מבקשת YES או NO.\nהיא מבקשת: בחרו משהו ספציפי, ואמרו למה.\n\n"In my opinion, the best way is X because..."\nX = הבחירה שלכם. חד משמעית. לא "יש הרבה אפשרויות".',
        },
        {
          type: "preface",
          text: "הטעות הנפוצה ביותר בסוג הזה:\n\n❌ There are many ways to spend a vacation. Some people travel. Others rest.\n\nזה לא בחירה. זה תיאור של העולם.\n\n✅ In my opinion, the best way to spend a vacation is to travel because you discover new cultures.\n\nהבדל קטן בפתיחה, הבדל גדול בציון.",
        },
        {
          type: "summary",
          title: "What do you think? - המבנה",
          lines: [
            '"In my opinion, the best... is X because..."',
            '"In addition,..."',
            '"In conclusion, I believe..."',
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
          text: 'יש סוג שלישי של שאלה - "In your opinion, what changes / what should...?"\n\nזו לא שאלת YES/NO.\nזו לא שאלת העדפה.\n\nהיא מבקשת: תציעו משהו ספציפי ותסבירו למה זה יעזור.',
        },
        {
          type: "preface",
          text: '❌ Schools have many problems. Students are tired. Teachers are stressed.\n\nזה תיאור הבעיה. לא הצעה.\n\n✅ I think schools should have shorter lessons because students cannot focus for more than 45 minutes.\n\nראיתם את ההבדל? "should have" = הצעה. "because" = ההסבר.',
        },
        {
          type: "summary",
          title: "What changes? - המבנה",
          lines: [
            '"I think schools should... because..."',
            '"In addition, schools could... This would help because..."',
            '"In conclusion, I believe these changes would..."',
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
          text: "יש שאלות שמבקשות מכם לבחור **מספר, גיל או כמות אחת**.למשל:**At what age...?**= **באיזה גיל?**🟢 במקרה כזה בוחרים **גיל אחד ברור**.לא כותבים:❌ **It depends.**❌ **Some say 10, others say 15.**בוחרים תשובה אחת:✅ **I think teenagers should start working at the age of 16.**ואז מסבירים **למה** בחרתם דווקא בגיל הזה.⭐ הכלל:**מבקשים מספר אחד → נותנים מספר אחד → ואז מסבירים.**",
        },
        {
          type: "preface",
          text: 'שימו לב למשהו:\n\nהשאלה לא שואלת "Do you think children SHOULD have phones?"\nהיא מניחה שזה יקרה - ושואלת רק מתי.\n\nאל תתחילו עם: "I think phones are dangerous for children."\nהתחילו עם: "I think children should get their own phone at age 13 because..."',
        },
        {
          type: "summary",
          title: "At what age? - המבנה",
          lines: [
            '"I think children should... at age X because..."',
            '"In addition,..."',
            '"In conclusion, I believe that age X is right because..."',
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
                "I think children should receive their first cellphone at age 13 because they are mature enough to use it responsibly.",
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
    position: { x: 10, y: 2220 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: 'ועכשיו עוברים לחלק שהרבה תלמידים קצת נלחצים ממנו:\n**הכתיבה.**\n\nאבל לפני שמתחילים, חשוב לדעת דבר אחד:\nלא צריך לכתוב אנגלית "מושלמת".\n\nצריך לדעת **לבנות תשובה נכונה, ברורה ומסודרת**.\nבחלק הזה נלמד את זה שלב אחרי שלב:\n\nאיך מתחילים, איך בונים משפטים, איך מחברים בין רעיונות, ואיך בודקים שלא שכחנו משהו חשוב.\n\n**המטרה שלנו: להפוך את הכתיבה ממשהו מלחיץ — למשהו שיש לו שיטה. אז בואו נתחיל! **',
        },
      ],
      rounds: [{ screens: [] }],
    },
  },
];
