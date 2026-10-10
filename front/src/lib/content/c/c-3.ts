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
    requiredRounds: 2,
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
                "I think part-time jobs are an interesting topic for teenagers.",
                "I think teenagers should have part-time jobs.",
                "Some teenagers should have part-time jobs and some should not.",
                "Teenagers with part-time jobs learn a lot about money.",
              ],
              correctIndex: 1,
              explanation:
                'רק "I think teenagers should have part-time jobs." אומר YES ברור. "an interesting topic" מתחיל ב-I think אבל לא אומר בעד או נגד. "some should and some should not" לא מכריע. "learn about money" זו סיבה - בלי עמדה לפניה.',
            },
            {
              type: "mcq",
              prompt:
                '"Do you think schools should start later?" - מה נכתב כשחושבים NO?',
              options: [
                "I think schools should start later.",
                "I do not think schools should start later.",
                "I do not know if schools should start later.",
                "I think starting later is not so bad.",
              ],
              correctIndex: 1,
              explanation:
                '"I do not think... should" = NO ברור. "I think schools should start later" זה YES. "I do not know" ו-"not so bad" לא מכריעים. YES ו-NO מקבלים אותו ציון - חשוב רק שזה ברור.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שמבטאת דעה.",
              text: "I think all students should do volunteer work in their community.",
              correctIndices: [1],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 2 | כותבים עמדה - משפט אחד לכל שאלה",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think schools should be open 5 days each week instead of 6 days?"\n\nרק YES או NO. לא למה. לא דוגמה. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "schools",
                "days",
                "week",
              ],
              acceptedAnswers: [
                "(I think|I believe|I think that|I believe that|In my opinion,) schools should be open 5 days (each|a|every) week instead of 6( days|).",
                "(I think|I believe|I think that|I believe that|In my opinion,) schools (should not|shouldn't) be open 5 days (each|a|every) week instead of 6( days|).",
                "(I do not think|I don't think|I do not believe|I don't believe|I do not think that|I do not believe that) schools should be open 5 days (each|a|every) week instead of 6( days|).",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think it is a good idea for teenagers to have a job after school hours?"\n\nרק YES או NO. משפט אחד.\nטיפ: אפשר לכתוב "I think teenagers should have a job after school hours."',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "teenagers",
                "job",
                "after school",
              ],
              acceptedAnswers: [
                "(I think|I believe|I think that|I believe that|In my opinion,) teenagers should have a job after school( hours|).",
                "(I think|I believe|I think that|I believe that|In my opinion,) teenagers (should not|shouldn't) have a job after school( hours|).",
                "(I do not think|I don't think|I do not believe|I don't believe|I do not think that|I do not believe that) teenagers should have a job after school( hours|).",
                "(I think|I believe|I think that|I believe that|In my opinion,) it is a good idea for teenagers to have a job after school( hours|).",
                "(I think|I believe|I think that|I believe that|In my opinion,) it is not a good idea for teenagers to have a job after school( hours|).",
                "(I do not think|I don't think|I do not believe|I don't believe|I do not think that|I do not believe that) it is a good idea for teenagers to have a job after school( hours|).",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think there should be more school trips?"\n\nרק YES או NO. משפט אחד.\nהשתמשו ב-"I think" או "I do not think".',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "there",
                "school trips",
              ],
              acceptedAnswers: [
                "(I think|I believe|I think that|I believe that|In my opinion,) there should be more school trips.",
                "(I think|I believe|I think that|I believe that|In my opinion,) there (should not|shouldn't) be more school trips.",
                "(I do not think|I don't think|I do not believe|I don't believe|I do not think that|I do not believe that) there should be more school trips.",
              ],
              minSentences: 1,
              minWordsUsed: 1,
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף (רשות) | עוד זיהוי של עמדה\n\nהבנתם? אפשר להמשיך. עוד לא בטוחים מה ההבדל בין עמדה לתיאור? הסיבוב הזה בשבילכם.",
            },
            {
              type: "mcq",
              prompt:
                '"Do you think students should wear school uniforms?" - איזה פתיח מבטא עמדה ברורה?',
              options: [
                "I think about school uniforms every morning.",
                "I think students should wear school uniforms.",
                "Uniforms are good for some students but not for others.",
                "I think school uniforms are a common idea.",
              ],
              correctIndex: 1,
              explanation:
                '"I think about uniforms" ו-"I think uniforms are a common idea" מתחילים ב-I think, אבל לא עונים על should. עמדה = I think + should / should not.',
            },
            {
              type: "mcq",
              prompt:
                '"Do you think homework should be given every weekend?" - מה נכתב כשחושבים NO?',
              options: [
                "I think homework should be given every weekend.",
                "I do not think homework should be given every weekend.",
                "I do not think about homework on weekends.",
                "Homework on weekends is not so popular.",
              ],
              correctIndex: 1,
              explanation:
                '"I do not think about homework" נשמע כמו NO, אבל הוא מספר מה אתם עושים בסופ"ש - לא עונה על השאלה. הראשון הוא YES.',
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שהופכת את המשפט ל-NO.",
              text: "I do not think homework should be given every weekend.",
              correctIndices: [2],
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
    requiredRounds: 3,
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
              text: "I think children should get a phone at age 13 because they start travelling to school alone.",
              correctIndices: [10],
            },
            {
              type: "mark-all",
              instruction: "לחצו על המילה שהופכת את הסיבה לריקה.",
              text: "I think teenagers should have a job because it is good.",
              correctIndices: [10],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | מתקנים סיבה חלשה, ואז כותבים" },
            {
              type: "writing-task",
              prompt:
                'משדרגים משפט חלש:\n\n{p:text}❌ I think students should study English because it is important.\n\n"important" לא מסביר כלום. כתבו את המשפט מחדש עם סיבה ספציפית: מה אנגלית נותנת? איפה משתמשים בה?',
              wordBank: [
                "I think",
                "because",
                "should",
                "English",
                "internet / אינטרנט",
                "travel / לטייל",
                "job / עבודה",
              ],
              minSentences: 1,
              minWordsUsed: 2,
              modelAnswer:
                "I think students should study English because they need it to understand most of the internet.",
              checklist: [
                "המשפט עדיין פותח ב-I think",
                "אין important / good / nice אחרי because",
                'הסיבה עונה על "למה?" - אפשר לדמיין אותה',
              ],
              requiredMoves: ["stance", "because"],
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think it is important to study English?"\n\n✏️ I think / I do not think... because...\n\nהסיבה עונה על: מה אנגלית נותנת לכם? איפה צריך אותה?',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "communicate / לתקשר",
                "internet / אינטרנט",
                "travel / לטייל",
                "job / עבודה",
                "university / אוניברסיטה",
              ],
              minSentences: 1,
              minWordsUsed: 2,
              modelAnswer:
                "I think it is important to study English because most websites and online courses are in English.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                'אם שואלים "למה?" על הסיבה - היא עונה. אם לא, היא כללית מדי',
              ],
              requiredMoves: ["stance", "because"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | עוד שתי שאלות מהבגרות - עמדה + because",
            },
            {
              type: "writing-task",
              prompt:
                '"Most schools require pupils to go on a yearly school trip. Do you think every pupil must participate?"\n\n✏️ I think / I do not think every pupil must... because...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "participate / להשתתף",
                "class / כיתה",
                "together / ביחד",
                "nature / טבע",
                "friends / חברים",
              ],
              minSentences: 1,
              minWordsUsed: 2,
              modelAnswer:
                "I think every pupil must participate in the yearly school trip because it brings the whole class together outside the classroom.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                'אם שואלים "למה?" על הסיבה - היא עונה. אם לא, היא כללית מדי',
              ],
              requiredMoves: ["stance", "because"],
            },
            {
              type: "writing-task",
              prompt:
                '"The government wants to raise the age for a driver\'s license to 19. Do you think this is a good idea?"\n\n✏️ I think / I do not think... because...\n\nאפשר גם NO. YES ו-NO מקבלים אותו ציון.',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "driver's license / רישיון נהיגה",
                "accidents / תאונות",
                "mature / בוגר",
                "responsible / אחראי",
                "work / עבודה",
              ],
              minSentences: 1,
              minWordsUsed: 2,
              modelAnswer:
                "I do not think this is a good idea because many 17-year-olds need a car to get to work.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                'אם שואלים "למה?" על הסיבה - היא עונה. אם לא, היא כללית מדי',
              ],
              requiredMoves: ["stance", "because"],
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
    requiredRounds: 4,
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
                'רק "connects students to their community" מביא רעיון חדש. שאר האפשרויות חוזרות על "responsibility".',
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
              type: "preface",
              text: "סיבוב 2 | כותבים: עמדה + because + In addition",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think schools should be open 5 days each week instead of 6 days?"\n\n✏️ I think... because...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "in addition",
                "weekend / סוף שבוע",
                "rest / מנוחה",
                "family / משפחה",
                "hobbies / תחביבים",
                "tired / עייף",
              ],
              minSentences: 2,
              minWordsUsed: 3,
              modelAnswer:
                "I think schools should be open 5 days instead of 6 because students need a full weekend to rest. In addition, families could spend more time together on Fridays.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
              ],
              requiredMoves: ["stance", "because", "in-addition"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | עוד אחת - נושא אחר, אותו מבנה",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think there should be more school trips?"\n\n✏️ I think / I do not think... because...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "in addition",
                "remember / לזכור",
                "experience / חוויה",
                "nature / טבע",
                "friends / חברים",
                "learn / ללמוד",
              ],
              minSentences: 2,
              minWordsUsed: 3,
              modelAnswer:
                "I think there should be more school trips because students remember what they see better than what they read. In addition, trips give quiet students a chance to make new friends.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
              ],
              requiredMoves: ["stance", "because", "in-addition"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 4 | עוד אחת - והפעם שימו לב שהסיבה השנייה באמת חדשה",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think it is a good idea for teenagers to have a job after school hours?"\n\n✏️ I think / I do not think... because...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "in addition",
                "money / כסף",
                "responsibility / אחריות",
                "customers / לקוחות",
                "skills / מיומנויות",
                "experience / ניסיון",
              ],
              minSentences: 2,
              minWordsUsed: 3,
              modelAnswer:
                "I think teenagers should have a job after school hours because they learn the value of money. In addition, a job teaches them how to talk politely to customers and adults.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
              ],
              requiredMoves: ["stance", "because", "in-addition"],
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
    requiredRounds: 5,
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
          type: "preface",
          text: "{d:rtl}**עוד שני מחברים שתצטרכו בחיבור המלא:**\n\n{p:text}**For instance** = בדיוק כמו For example.\n{d:rtl}משתמשים בו בדוגמה לסיבה השנייה, כדי לא לכתוב For example פעמיים.\n\n{p:text}**As a result** = כתוצאה מזה - מה קורה בגלל מה שאמרתם.\n{p:text}Students sleep more. **As a result**, they focus better in class.",
        },
        {
          type: "summary",
          title: "For example - המיקום",
          lines: [
            '"סיבה. For example, [פרט ספציפי]."',
            "For example תמיד אחרי הסיבה שהוא מסביר",
            "לא בתחילת הפסקה - לא בסיום",
            "פרט טוב = ספציפי, לא כללי",
            "For instance = עוד For example (לסיבה השנייה). As a result = מה יוצא מזה",
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
              text: "Traveling teaches you new things. For example, you discover different food and music.",
              correctIndices: [5],
            },
            {
              type: "mcq",
              prompt:
                "{p:text}Teenagers who work learn the value of money. ___, they stop asking their parents for money for small things.\n\nמה נכנס ברווח?",
              options: [
                "As a result",
                "For instance",
                "In addition",
                "Because",
              ],
              correctIndex: 0,
              explanation:
                'המשפט השני הוא מה שקורה בגלל הראשון = As a result. For instance מתאים כשהמשפט השני הוא דוגמה ("For instance, a boy who works in a shop..."). In addition פותח סיבה חדשה. Because לא פותח משפט עצמאי.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 2 | משדרגים דוגמה, ולוקחים דוגמה מהטקסט",
            },
            {
              type: "mcq",
              prompt:
                'בחיבור כבר כתבתם "For example" אחרי הסיבה הראשונה. עכשיו באה דוגמה לסיבה השנייה. איך הכי טוב לפתוח אותה?',
              options: [
                "For instance,",
                "For example,",
                "As a result,",
                "In conclusion,",
              ],
              correctIndex: 0,
              explanation:
                "For instance = For example במילים אחרות. For example פעם שנייה לא שגוי, אבל חזרה על אותן מילים שוב ושוב מורידה באוצר מילים. As a result = תוצאה, לא דוגמה. In conclusion רק בסוף.",
            },
            {
              type: "writing-task",
              prompt:
                "משדרגים דוגמה חלשה:\n\n{p:text}I think students should volunteer because they learn new skills.\n{p:text}❌ For example, it is a good experience.\n\nכתבו רק את משפט ה-For example מחדש, עם פרט אמיתי: איפה? מה בדיוק הם עושים? מה לומדים?",
              wordBank: [
                "for example",
                "hospital / בית חולים",
                "food bank / בנק מזון",
                "team / צוות",
                "children / ילדים",
              ],
              minSentences: 1,
              minWordsUsed: 1,
              modelAnswer:
                "For example, students who help at a food bank learn to organize boxes and work as a team.",
              checklist: [
                "המשפט מתחיל ב-For example",
                "יש מקום או מקרה אמיתי (בית חולים, בנק מזון, גן ילדים...)",
                'הדוגמה מוכיחה את הסיבה - "new skills"',
              ],
              requiredMoves: ["for-example"],
            },
            {
              type: "mcq",
              prompt:
                "מקריאה לכתיבה: הטקסט שקראתם בחלק ב׳ הוא מקור מצוין לדוגמאות.\n\n{p:text}THE CITY GARDEN PROJECT\n{p:text}Five years ago, the streets of Greenville had almost no plants or trees. A local charity planted over 2,000 trees and created 15 community gardens. According to a survey, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.\n\nאיזה משפט For example משתמש בטקסט הכי נכון?",
              options: [
                "For example, in Greenville, the number of people who exercise outdoors went up from 15% to 60%.",
                "For example, stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.",
                "For example, Greenville became a much better place.",
                "For example, in Greenville, everyone started to exercise every day.",
              ],
              correctIndex: 0,
              explanation:
                'עובדה מהטקסט, במילים שלכם. משפט שהועתק מהטקסט מילה במילה לא נספר בבחינה. "a much better place" כללי מדי. "everyone... every day" לא כתוב בטקסט.',
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | כותבים: עמדה + because + For example + In addition",
            },
            {
              type: "writing-task",
              prompt:
                '"Many pupils prefer studying at home to studying at school. What do you prefer?"\n\n✏️ I prefer studying at... because...\n✏️ For example,...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "for example",
                "in addition",
                "prefer / מעדיף",
                "teacher / מורה",
                "quiet / שקט",
                "focus / להתרכז",
                "friends / חברים",
              ],
              minSentences: 3,
              minWordsUsed: 3,
              modelAnswer:
                "I prefer studying at school because I can ask the teacher when I do not understand. For example, in math class I can ask about a hard question and get an answer right away. In addition, at school I study with my friends, so I do not feel alone.",
              checklist: [
                "משפט 1 בוחר: I prefer studying at school / at home",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "For example נותן פרט אמיתי: מקום, מספר, שם או מקרה",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 4 | עוד אחת - הפעם על אדם אחד ספציפי",
            },
            {
              type: "writing-task",
              prompt:
                '"Which famous person would you like to give a talk at your school?"\n\n✏️ I would like... to give a talk at my school because...\n✏️ For example,...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "for example",
                "in addition",
                "famous / מפורסם",
                "inspire / לתת השראה",
                "dream / חלום",
                "success / הצלחה",
                "experience / ניסיון",
              ],
              minSentences: 3,
              minWordsUsed: 3,
              modelAnswer:
                "I would like Gal Gadot to give a talk at my school because she worked very hard to reach her dream. For example, she served in the army before she became a famous actress. In addition, she could teach us how to believe in ourselves.",
              checklist: [
                "משפט 1 נותן שם של אדם אחד",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "For example נותן פרט אמיתי: מקום, מספר, שם או מקרה",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 5 | מקריאה לכתיבה - דוגמה מהטקסט, במילים שלכם",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think every city should have a project like the City Garden Project?"\n\n{p:text}THE CITY GARDEN PROJECT\n{p:text}Five years ago, the streets of Greenville had almost no plants or trees. A local charity planted over 2,000 trees and created 15 community gardens. According to a survey, 85% of residents now say they are satisfied with their city. Stress levels fell by 40%, and the number of people who exercise outdoors increased from 15% to 60%.\n\n✏️ I think... because...\n✏️ For example, [עובדה מהטקסט, במילים שלכם],...\n✏️ In addition,...',
              wordBank: [
                "I think",
                "I do not think",
                "should",
                "because",
                "for example",
                "in addition",
                "trees / עצים",
                "gardens / גינות",
                "residents / תושבים",
                "stress / לחץ",
                "healthy / בריא",
              ],
              minSentences: 3,
              minWordsUsed: 3,
              modelAnswer:
                "I think every city should have a project like the City Garden Project because green streets make people calmer. For example, in Greenville, stress went down by 40% after the charity planted the trees. In addition, gardens bring neighbors together and give children a safe place to play.",
              checklist: [
                "משפט 1 פותח בעמדה: I think / I do not think",
                "ה-For example משתמש בעובדה מהטקסט (מספר!), במילים שלכם",
                "לא העתקתי משפט שלם מהטקסט",
                "In addition מביא סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
              ],
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
    requiredRounds: 3,
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
                "In conclusion, volunteering also helps to protect the environment.",
                "In conclusion, volunteering is important.",
              ],
              correctIndex: 1,
              explanation:
                'משפט אחד שחוזר על העמדה וסוגר. "protect the environment" זה רעיון חדש - אסור בסיום. "volunteering is important" כללי מדי. המשפט הארוך מחזיר את כל מה שנאמר.',
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
              text: "In conclusion, I think that age 13 is the right age for a first cellphone.",
              correctIndices: [0],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | כל המחברים בפסקה אחת" },
            {
              type: "passage-mcq",
              text: "I think every pupil should learn to swim (1) ___ it can save lives. (2) ___, a child who falls into a pool knows how to reach the edge. (3) ___, swimming keeps the body strong and healthy. (4) ___, I believe swimming lessons should be part of every school.",
              questions: [
                {
                  prompt: "השלימו את המחברים - מה נכנס ברווח (1)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "מה נכנס ברווח (2)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "מה נכנס ברווח (3)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "מה נכנס ברווח (4)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 3,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                "באיזה סדר המשפטים יוצרים חיבור נכון?\n\n{p:text}A. In addition, a dog makes you go outside every day.\n{p:text}B. I think every family should have a dog because it teaches children responsibility.\n{p:text}C. In conclusion, I believe a dog makes the whole family more active.\n{p:text}D. For example, a child who feeds the dog every morning learns to keep a routine.",
              options: [
                "B - D - A - C",
                "B - A - D - C",
                "D - B - A - C",
                "B - D - C - A",
              ],
              correctIndex: 0,
              explanation:
                "עמדה + because (B), הדוגמה לסיבה הזו (D), סיבה שנייה (A), סיום (C). For example בא מיד אחרי הסיבה שהוא מוכיח, ו-In conclusion תמיד אחרון.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | כותבים את כל השלד\n\nעכשיו מחברים את כל מה שלמדתם, בפעם הראשונה:\n\n{p:text}I think... because...\n{p:text}For example,...\n{p:text}In addition,...\n{p:text}In conclusion,...\n\nזה השלד של כל חיבור בבגרות. בשיעורי הנושא נרחיב אותו ל-70-90 מילים.",
            },
            {
              type: "writing-task",
              prompt:
                '"Some people think the school day should begin later in the morning. What do you think?"\n\n✏️ I think... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "for example",
                "in addition",
                "in conclusion",
                "sleep / שינה",
                "tired / עייף",
                "focus / להתרכז",
                "traffic / תנועה",
                "morning / בוקר",
              ],
              minSentences: 4,
              minWordsUsed: 4,
              modelAnswer:
                "I think the school day should begin later in the morning because teenagers need more sleep. For example, many students go to bed after midnight and fall asleep in the first lesson. In addition, there is less traffic on the roads after eight o'clock. In conclusion, I believe a later start would help students learn better.",
              checklist: [
                "משפט 1 פותח בעמדה ברורה: I think / I do not think",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "For example נותן פרט אמיתי: מקום, מספר, שם או מקרה",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף (רשות) | עוד שלד אחד\n\nכתבתם שלד שלם? מצוין, אפשר להמשיך. רוצים עוד חזרה לפני שיעורי הנושא - הנה עוד אחד.",
            },
            {
              type: "writing-task",
              prompt:
                '"Some people say that childhood is the most important time of a person\'s life. Do you agree?"\n\n✏️ I agree / I do not agree... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
              wordBank: [
                "I think",
                "I do not think",
                "in my opinion",
                "should",
                "should not",
                "because",
                "for example",
                "in addition",
                "in conclusion",
                "agree / מסכים",
                "childhood / ילדות",
                "memories / זיכרונות",
                "learn / ללמוד",
                "shape / לעצב",
              ],
              minSentences: 4,
              minWordsUsed: 4,
              modelAnswer:
                "I agree that childhood is the most important time of a person's life because this is when we learn the basics. For example, children learn to speak, read and make friends before the age of ten. In addition, happy memories from childhood give us strength later in life. In conclusion, I believe childhood shapes the adult we become.",
              checklist: [
                "משפט 1 עונה: I agree / I do not agree",
                "יש because, ואחריו סיבה ספציפית - לא good / nice / important",
                "For example נותן פרט אמיתי: מקום, מספר, שם או מקרה",
                "In addition מביא סיבה שנייה, שונה מהראשונה",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
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
    requiredRounds: 3,
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
                '"Students (subject) learn (verb) responsibility" = משפט שלם. ב-"Volunteering very important" חסר "is". "Because it helps..." הוא רק חלק ממשפט. ב-"Students they" יש שני subjects במקום אחד.',
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
              text: "Students learn important skills when they volunteer in their community.",
              correctIndices: [1],
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | מוצאים ומתקנים משפטים שבורים" },
            {
              type: "mark-all",
              instruction: "מצאו את הטעות: לחצו על המילה המיותרת.",
              text: "Students they learn new skills when they volunteer.",
              correctIndices: [1],
            },
            {
              type: "writing-task",
              prompt:
                "תקנו את המשפט השבור וכתבו אותו מחדש:\n\n{p:text}❌ Volunteering very important for teenagers.\n\nרמז: חסר verb. מה חסר בין Volunteering ל-very?",
              acceptedAnswers: [
                "Volunteering is very important for teenagers.",
              ],
              minSentences: 1,
            },
            {
              type: "writing-task",
              prompt:
                "תקנו את המשפט השבור וכתבו אותו מחדש:\n\n{p:text}❌ Students they learn new skills at work.\n\nרמז: יש שני subjects. מחקו אחד.",
              acceptedAnswers: [
                "Students learn new skills at work.",
                "They learn new skills at work.",
              ],
              minSentences: 1,
            },
            {
              type: "writing-task",
              prompt:
                "תקנו את המשפט השבור וכתבו אותו מחדש:\n\n{p:text}❌ My brother work in a shop after school.\n\nרמז: he / my brother = verb עם s.",
              acceptedAnswers: [
                "My brother works in a shop after school.",
                "My brother (worked|is working) in a shop after school.",
              ],
              minSentences: 1,
            },
            {
              type: "passage-mcq",
              text: "I think teenagers should have a job after school (1) ___ they learn the value of money. (2) ___, a boy who works in a shop sees how long it takes to earn 100 shekels. (3) ___, a job teaches them to be on time. (4) ___, I believe a part-time job helps teenagers grow up.",
              questions: [
                {
                  prompt: "חזרה על המחברים - מה נכנס ברווח (1)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "מה נכנס ברווח (2)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 1,
                },
                {
                  prompt: "מה נכנס ברווח (3)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 2,
                },
                {
                  prompt: "מה נכנס ברווח (4)?",
                  options: [
                    "because",
                    "For example",
                    "In addition",
                    "In conclusion",
                  ],
                  correctIndex: 3,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: 'סיבוב 3 | השלד, והפעם בודקים subject + verb בכל משפט\n\nכותבים את 4 המשפטים של השלד, כמו בשיעור In conclusion. לפני שלוחצים "בדיקה" - עוברים משפט-משפט: מי עושה? מה עושים?',
            },
            {
              type: "writing-task",
              prompt:
                '"Today there are cameras in most public places. What do you think about this? Give reasons to explain your opinion."\n\n✏️ I think... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...\n\nבכל משפט: subject + verb. ו-Because לא פותח משפט לבד.',
              wordBank: [
                "I think",
                "I do not think",
                "because",
                "for example",
                "in addition",
                "in conclusion",
                "cameras / מצלמות",
                "safe / בטוח",
                "police / משטרה",
                "privacy / פרטיות",
                "criminals / פושעים",
              ],
              minSentences: 4,
              minWordsUsed: 4,
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
              modelAnswer:
                "I think cameras in public places are useful because they help the police catch criminals. For example, a camera at a bus station can show who stole a bag. In addition, people feel safer when they walk home at night. In conclusion, I believe cameras make our cities safer.",
              checklist: [
                "בכל אחד מ-4 המשפטים יש subject (מי?) ו-verb (מה עושים?)",
                "אין משפט שמתחיל ב-Because ונגמר בלי חלק ראשון",
                "יש עמדה, because, For example, In addition ו-In conclusion",
                "הסיבה השנייה שונה מהראשונה",
              ],
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
    requiredRounds: 2,
    content: {
      preface: [
        {
          type: "preface",
          text: "{d:rtl}כמה מילים צריך לכתוב? **70-90 מילים.**\n\n{d:rtl}ומה קורה אם כותבים פחות? זו הטבלה הרשמית של משרד החינוך - יורדות נקודות מתוך 30:\n\n{p:text}60-69 words → -1\n{p:text}50-59 words → -3\n{p:text}40-49 words → -6\n{p:text}30-39 words → -10\n{p:text}25-29 words → -15\n{p:text}under 25 words → 0 for the whole task\n\n{p:callout}{d:rtl}ויותר מ-90? **בטבלה אין הורדה על אורך.** אבל כל משפט מיותר = עוד הזדמנות לטעות בדקדוק ובכתיב. כשסיימתם את השלד - עוצרים.",
        },
        {
          type: "preface",
          text: "{d:rtl}**מה לא נספר?**\n\n{d:rtl}❌ השאלה, אם העתקתם אותה מילה במילה\n{d:rtl}❌ כותרת\n\n{d:rtl}אבל להשתמש במילים של השאלה בתוך משפט שלכם - זה בסדר ונספר:\n{p:text}✅ I think all high school pupils should do volunteer work because...",
        },
        {
          type: "preface",
          text: "{d:rtl}**החשבון שמביא אתכם ל-80:**\n\n{d:rtl}משפט רגיל בחיבור = בערך 13 מילים.\n{d:rtl}**6 משפטים × 13 = בערך 80 מילים.**\n\n{d:rtl}ואיך מגיעים ל-6 משפטים? **כל סיבה מקבלת משפט פרט:**\n\n{p:text}1. I think... because [reason 1].\n{p:text}2. For example, [detail for reason 1].\n{p:text}3. In addition, [reason 2].\n{p:text}4. For instance, [detail for reason 2].\n{p:text}5. As a result, [what happens because of this].\n{p:text}6. In conclusion, I believe...\n\n{p:callout}{d:rtl}זה השלד של כל שיעורי הנושא מעכשיו. כתבתם פחות מ-70? כנראה לאחת הסיבות חסר משפט פרט.",
        },
        {
          type: "summary",
          title: "70-90 - החשבון",
          lines: [
            "6 משפטים × 13 מילים ≈ 80",
            "כל סיבה + משפט פרט (For example / For instance)",
            "פחות מ-70: מורידים נקודות לפי הטבלה. מתחת ל-25: אפס על כל המטלה",
            "יותר מ-90: אין הורדה, אבל עוצרים - יותר משפטים, יותר טעויות",
            "שאלה שהועתקה מילה במילה לא נספרת",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | החשבון והכללים" },
            {
              type: "mcq",
              prompt:
                "{d:rtl}תלמיד כתב **55 מילים**. כמה נקודות יורדות לו בבחינה?",
              options: ["1", "3", "6", "אפס על כל המטלה"],
              correctIndex: 1,
              explanation:
                "50-59 מילים = מינוס 3. מתחת ל-25 מילים - אפס על הכול. 60-69 = מינוס 1.",
            },
            {
              type: "mcq",
              prompt: "{d:rtl}תלמיד כתב **65 מילים**. מה הכי חכם לעשות?",
              options: [
                "להוסיף משפט For instance עם פרט לסיבה השנייה",
                "להעתיק את השאלה בתחילת החיבור כדי להוסיף מילים",
                'להוסיף "very" ו-"really" לפני כל שם תואר',
                "להגיש - זה רק מינוס נקודה אחת",
              ],
              correctIndex: 0,
              explanation:
                "משפט פרט מוסיף בערך 13 מילים וגם מחזק את התוכן. שאלה מועתקת לא נספרת בכלל, ו-very / really שוב ושוב עלולים להוריד עד 3 נקודות באוצר מילים.",
            },
            {
              type: "mcq",
              prompt: "{d:rtl}תלמיד כתב **95 מילים** והחיבור מסודר. מה עושים?",
              options: [
                "משאירים - אין הורדה על יותר מ-90. מנצלים את הזמן לבדוק טעויות",
                "מוחקים מילה אחת מכל משפט",
                "מוחקים את משפט ה-In conclusion",
                "כותבים הכול מחדש עד 90 בדיוק",
              ],
              correctIndex: 0,
              explanation:
                "בטבלה הרשמית יש הורדה רק על קצר מדי. מחיקת מילים שוברת משפטים, ובלי In conclusion החיבור פחות מסודר.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 2 | החשבון בפועל: מ-49 מילים ל-75",
            },
            {
              type: "mcq",
              prompt: "כמה משפטים של בערך 13 מילים מביאים אתכם לבערך 80 מילים?",
              options: ["3", "4", "6", "10"],
              correctIndex: 2,
              explanation:
                "6 × 13 = 78. לכן השלד שלנו הוא 6 משפטים: כל סיבה מקבלת משפט פרט.",
            },
            {
              type: "mcq",
              prompt: "מה מהבאים **לא** נספר בספירת המילים בבחינה?",
              options: [
                "השאלה, כשהעתקתם אותה מילה במילה",
                "המילים a / the / and",
                "In conclusion",
                'משפט שמשתמש במילים של השאלה: "I think all pupils should..."',
              ],
              correctIndex: 0,
              explanation:
                "כל מילה נספרת, גם a ו-the. רק שאלה שהועתקה כמו שהיא (וכותרת) לא נספרות. להשתמש במילים של השאלה בתוך משפט שלכם - נספר.",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think it is important to study English? Give reasons to explain your opinion."\n\nתלמיד כתב את הטיוטה הזו - 49 מילים (בבחינה: מינוס 6):\n\n{p:text}I think it is important to study English because most of the information on the internet is in English. In addition, English helps people find better jobs in Israel and abroad. As a result, they can earn more money. In conclusion, I believe every student should take English seriously.\n\nכתבו רק את 2 המשפטים החסרים:\n✏️ For example,... (פרט לסיבה הראשונה - האינטרנט)\n✏️ For instance,... (פרט לסיבה השנייה - עבודה)\n\nכל משפט בערך 13 מילים: 49 + 26 = 75. בטווח.',
              wordBank: [
                "for example",
                "for instance",
                "YouTube",
                "video / סרטון",
                "company / חברה",
                "meetings / פגישות",
              ],
              minSentences: 2,
              minWordsUsed: 2,
              modelAnswer:
                "For example, many video lessons for math and science on YouTube are only in English.\nFor instance, high-tech companies hold meetings in English every day.",
              checklist: [
                "משפט 1 מתחיל ב-For example ומוכיח את הסיבה הראשונה",
                "משפט 2 מתחיל ב-For instance ומוכיח את הסיבה השנייה",
                "כל משפט בערך 10-15 מילים, עם פרט אמיתי",
              ],
              requiredMoves: ["for-example", "for-instance"],
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
    requiredRounds: 5,
    content: {
      preface: [
        {
          type: "preface",
          text: '{d:rtl}חבר׳ה, שאלה שמתחילה ב-**"Do you think"** היא הכי נפוצה בבגרות.\n\n{d:rtl}היא מבקשת ממכם שני דברים בלבד:\n{d:rtl}1. להגיד YES או NO\n{d:rtl}2. להסביר למה\n\n{d:rtl}זהו. לא סיפור חיים. לא הסבר על העולם.\n{d:rtl}YES/NO + סיבות.',
        },
        {
          type: "preface",
          text: "{d:rtl}הנוסחה שעובדת תמיד - השלד מהשיעורים הקודמים, ועוד משפט פרט לכל סיבה:\n\n{p:text}1. I think... because [reason 1].\n{p:text}2. For example, [detail].\n{p:text}3. In addition, [reason 2].\n{p:text}4. For instance, [detail].\n{p:text}5. As a result, [what happens].\n{p:text}6. In conclusion, I believe...\n\n{d:rtl}6 משפטים × בערך 13 מילים = בערך 80. בדיוק בטווח.",
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
            "שלד של 6 משפטים: because / For example / In addition / For instance / As a result / In conclusion = בערך 80 מילים",
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
                "Volunteer work teaches students many useful things.",
                "I think all students should / should not do volunteer work.",
                "I think volunteer work is a very interesting topic.",
                "In my opinion, many students like to volunteer.",
              ],
              correctIndex: 1,
              explanation:
                'שני משפטים פותחים ב-I think / In my opinion, אבל רק אחד עונה על should. "interesting topic" ו-"many students like" הם דעה על משהו אחר. בלי עמדה על השאלה - התוכן לא שלם.',
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
                '"I think... because it teaches them to care about others" - דעה ברורה + סיבה מיד. זה מה שהמורה רוצה לראות בשורה הראשונה.',
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
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | השלד: 4 משפטים" },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school pupils should do volunteer work? Give reasons to explain your opinion."\n\nשלב 1 - השלד: 4 משפטים, כמו בשיעור In conclusion. עוד לא 70-90.\n✏️ I think / I do not think... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
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
              minWordsUsed: 3,
              modelAnswer:
                "I think all high school students should do volunteer work because it teaches them responsibility. For example, a student who helps in an old people's home every week must come on time. In addition, volunteering gives teenagers real work experience for the future. In conclusion, I believe volunteering prepares students for life.",
              checklist: [
                "משפט 1 עונה ישירות: I think / I do not think",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | שני המשפטים שחסרים לשלד\n\nהשלד שלכם (4 משפטים) הוא בערך 50 מילים. כדי להגיע ל-70-90 חסרים שני משפטים - ורק אותם כותבים עכשיו.",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school pupils should do volunteer work? Give reasons to explain your opinion."\n\nחזרו לשלד שכתבתם בסיבוב הקודם. אחרי הסיבה השנייה (In addition) הוסיפו:\n✏️ For instance,... (פרט שמוכיח את הסיבה השנייה)\n✏️ As a result,... (מה יוצא מזה)\n\nלדוגמה, אחרי:\n{p:text}In addition, volunteering gives teenagers real work experience for the future.',
              wordBank: [
                "for instance",
                "as a result",
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
              minSentences: 2,
              minWordsUsed: 2,
              modelAnswer:
                "For instance, they learn to work in a team and talk to adults.\nAs a result, it is easier for them to find a job later.",
              checklist: [
                "משפט 1 מתחיל ב-For instance ונותן פרט אמיתי לסיבה השנייה",
                "משפט 2 מתחיל ב-As a result ואומר מה יוצא מזה",
                "שני המשפטים על אותה סיבה - לא סיבה שלישית חדשה",
              ],
              requiredMoves: ["for-instance", "as-a-result"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 4 | חיבור מלא, 70-90 מילים\n\nשלד מלא על המסך + בנק מילים.",
            },
            {
              type: "writing-task",
              prompt:
                '"Do you think all high school pupils should do volunteer work? Give reasons to explain your opinion."\n\nשלב 2 - חיבור מלא, 70-90 מילים. אותו שלד, ועוד משפט פרט לכל סיבה:\n✏️ 1. I think / I do not think... because [סיבה 1].\n✏️ 2. For example, [פרט לסיבה 1].\n✏️ 3. In addition, [סיבה 2].\n✏️ 4. For instance, [פרט לסיבה 2].\n✏️ 5. As a result, [מה יוצא מזה].\n✏️ 6. In conclusion, I believe...\n\n6 משפטים × בערך 13 מילים = בערך 80 מילים.\n\nיש לכם כבר את כל 6 המשפטים: 4 מהשלד ו-2 מהסיבוב הקודם. עכשיו מחברים אותם לחיבור אחד.',
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
              minWords: 70,
              maxWords: 90,
              minWordsUsed: 5,
              modelAnswer:
                "I think all high school students should do volunteer work because it teaches them responsibility. For example, a student who helps in an old people's home every week must come on time and keep promises. In addition, volunteering gives teenagers real work experience. For instance, they learn to work in a team and talk to adults. As a result, it is easier for them to find a job later. In conclusion, I believe volunteering prepares students for life.",
              checklist: [
                "משפט 1 עונה ישירות: I think / I do not think",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "גם לסיבה השנייה יש פרט (For instance)",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, ולא העתקתי את השאלה עצמה",
              ],
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 5 | תנאי בחינה - שאלה חדשה\n\nשאלה מרשימת הנושאים הרשמית של הבגרות, שעוד לא כתבתם עליה חיבור. אותו סוג שאלה (Do you think), אותו שלד של 6 משפטים.\n\nבלי בנק מילים. שעון של 20 דקות רץ למעלה, כמו בבחינה.",
            },
            {
              type: "writing-task",
              prompt:
                '"In your opinion, is there too much emphasis on tests and grades in our education system? Give reasons to explain your opinion."\n\n(emphasis = דגש)\n\nתנאי בחינה: 70-90 מילים, בלי בנק מילים, 20 דקות על השעון.\n\nהפעם הראשונה בלי בנק מילים, אז השלד עוד כאן:\nbecause / For example / In addition / For instance / As a result / In conclusion',
              wordBank: [],
              minSentences: 5,
              minWordsUsed: 0,
              minWords: 70,
              maxWords: 90,
              modelAnswer:
                "I think there is too much emphasis on tests and grades in our education system because students learn for the exam and forget everything a week later. For example, I studied forty dates for a history test, and today I remember only two. In addition, tests make many students feel stressed. For instance, some of my friends cannot sleep the night before a big exam. As a result, they do worse than they really can. In conclusion, I believe schools should use more projects and fewer tests.",
              checklist: [
                "משפט 1 עונה YES או NO: I think there is / I do not think there is...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, בלי בנק מילים, ולא העתקתי את השאלה",
              ],
              timeLimitMinutes: 20,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
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
    requiredRounds: 5,
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
            "שלד של 6 משפטים: because / For example / In addition / For instance / As a result / In conclusion = בערך 80 מילים",
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
                "שתי אפשרויות שאתם אוהבים, עם סיבה לכל אחת",
                "הבחירה שלכם + סיבה אחת",
                "הבחירה שלכם בלבד - את הסיבה שומרים לסוף",
                "הסבר למה חופשה חשובה לכולם",
              ],
              correctIndex: 1,
              explanation:
                'What do you think is the best...? = דבר אחד. שתי אפשרויות = לא בחרתם. סיבה בסוף = הבודק מחכה לה. חשיבות החופשה לא עונה על "הדרך הכי טובה".',
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
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | השלד: 4 משפטים" },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation? Give reasons to explain your opinion."\n\nשלב 1 - השלד: 4 משפטים, כמו בשיעור In conclusion. עוד לא 70-90.\n✏️ In my opinion, the best way to spend a vacation is... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
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
              minSentences: 4,
              minWordsUsed: 3,
              modelAnswer:
                "In my opinion, the best way to spend a vacation is to travel abroad because you discover new cultures. For example, in Italy you can taste real pizza and see how people live. In addition, a trip with friends or family creates memories that last for years. In conclusion, I believe traveling is the most meaningful way to spend a vacation.",
              checklist: [
                "משפט 1 בוחר דבר אחד: the best way is...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | שני המשפטים שחסרים לשלד\n\nהשלד שלכם (4 משפטים) הוא בערך 50 מילים. כדי להגיע ל-70-90 חסרים שני משפטים - ורק אותם כותבים עכשיו.",
            },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation? Give reasons to explain your opinion."\n\nחזרו לשלד שכתבתם בסיבוב הקודם. אחרי הסיבה השנייה (In addition) הוסיפו:\n✏️ For instance,... (פרט שמוכיח את הסיבה השנייה)\n✏️ As a result,... (מה יוצא מזה)\n\nלדוגמה, אחרי:\n{p:text}In addition, a trip with friends or family creates memories that last for years.',
              wordBank: [
                "for instance",
                "as a result",
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
              minSentences: 2,
              minWordsUsed: 2,
              modelAnswer:
                "For instance, my family still laughs about the day we got lost in Rome.\nAs a result, travel brings people closer.",
              checklist: [
                "משפט 1 מתחיל ב-For instance ונותן פרט אמיתי לסיבה השנייה",
                "משפט 2 מתחיל ב-As a result ואומר מה יוצא מזה",
                "שני המשפטים על אותה סיבה - לא סיבה שלישית חדשה",
              ],
              requiredMoves: ["for-instance", "as-a-result"],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 4 | חיבור מלא, 70-90 מילים\n\nהפעם רק רשימת המחברים, בלי תבנית שורה-שורה.",
            },
            {
              type: "writing-task",
              prompt:
                '"What do you think is the best way to spend a vacation? Give reasons to explain your opinion."\n\nחיבור מלא, 70-90 מילים. אותו שלד של 6 משפטים - הפעם בלי תבנית על המסך, רק המחברים:\nbecause / For example / In addition / For instance / As a result / In conclusion\n\nיש לכם כבר את כל 6 המשפטים: 4 מהשלד ו-2 מהסיבוב הקודם. עכשיו מחברים אותם לחיבור אחד.',
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
              minWords: 70,
              maxWords: 90,
              minWordsUsed: 5,
              modelAnswer:
                "In my opinion, the best way to spend a vacation is to travel abroad because you discover new cultures. For example, in Italy you can taste real pizza and see how people live. In addition, a trip creates memories that last for years. For instance, my family still laughs about the day we got lost in Rome. As a result, travel brings people closer. In conclusion, I believe traveling is the best way to spend a vacation.",
              checklist: [
                "משפט 1 בוחר דבר אחד: the best way is...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "גם לסיבה השנייה יש פרט (For instance)",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, ולא העתקתי את השאלה עצמה",
              ],
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 5 | תנאי בחינה - שאלה חדשה\n\nשאלה מרשימת הנושאים הרשמית של הבגרות, שעוד לא כתבתם עליה חיבור. אותו סוג שאלה (What do you think / Which), אותו שלד של 6 משפטים.\n\nבלי בנק מילים. שעון של 20 דקות רץ למעלה, כמו בבחינה.",
            },
            {
              type: "writing-task",
              prompt:
                '"Many people in Israel study English. In addition to English, which language would you like to know? Give reasons to explain your opinion."\n\nתנאי בחינה: 70-90 מילים, בלי בנק מילים, 20 דקות על השעון.',
              wordBank: [],
              minSentences: 5,
              minWordsUsed: 0,
              minWords: 70,
              maxWords: 90,
              modelAnswer:
                "I would like to know Spanish because more than 400 million people speak it as their first language. For example, I could talk with people in Mexico, Spain and most of South America. In addition, Spanish is quite easy for Hebrew speakers to pronounce. For instance, the letters are read the way they are written. As a result, I could learn it fast. In conclusion, I believe Spanish is the most useful language for me to learn.",
              checklist: [
                "משפט 1 בוחר שפה אחת: I would like to know...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, בלי בנק מילים, ולא העתקתי את השאלה",
              ],
              timeLimitMinutes: 20,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
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
    requiredRounds: 3,
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
            "שלד של 6 משפטים: because / For example / In addition / For instance / As a result / In conclusion = בערך 80 מילים",
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
                "הצעה = משפט שמתחיל ב-I think. תיאור = משפט בלי I think",
                "הצעה = משפט עם because. תיאור = משפט בלי because",
                "הצעה = משפט עם מספר. תיאור = משפט בלי מספר",
              ],
              correctIndex: 0,
              explanation:
                '"I think schools are noisy" מתחיל ב-I think - ועדיין תיאור. "Students are tired because lessons are long" יש because - ועדיין תיאור. מה שהופך משפט להצעה: should / could + מה לעשות.',
            },
            {
              type: "mcq",
              prompt: "איזו מהן הצעה ספציפית שראויה לציון תוכן מלא?",
              options: [
                "Schools should be better and more interesting for students.",
                "Schools should have a 20-minute break after every two lessons because students lose focus without rest.",
                "Schools should have more breaks.",
                "Students are tired because the lessons are too long.",
              ],
              correctIndex: 1,
              explanation:
                '"better and more interesting" כללי מדי. "more breaks" הצעה - אבל בלי פרט ובלי סיבה. "Students are tired" זו הבעיה, לא ההצעה. רק אחת: should + פרט + because.',
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | השלד: 4 משפטים" },
            {
              type: "writing-task",
              prompt:
                '"In your opinion, what changes can be made to your school so that it can become a better place to learn? Give reasons to explain your opinion."\n\nשלב 1 - השלד: 4 משפטים, כמו בשיעור In conclusion. עוד לא 70-90.\n✏️ I think schools should... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
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
              minSentences: 4,
              minWordsUsed: 3,
              modelAnswer:
                "I think schools should have a 20-minute break after every two lessons because students cannot focus for a long time without rest. For example, after a short walk outside, it is easier to understand a hard math lesson. In addition, schools could let students choose one subject they love because students learn better when they are interested. In conclusion, I believe these changes would make students happier and more successful.",
              checklist: [
                "משפט 1 מציע שינוי ספציפי: schools should...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | חיבור מלא, 70-90 מילים\n\nהפעם בלי תבנית ובלי בנק מילים - כמו בבחינה.",
            },
            {
              type: "writing-task",
              prompt:
                '"In your opinion, what changes can be made to your school so that it can become a better place to learn? Give reasons to explain your opinion."\n\nחיבור מלא, 70-90 מילים, כמו בבחינה: בלי תבנית ובלי בנק מילים. (עוד בלי שעון.)',
              wordBank: [],
              minSentences: 5,
              minWords: 70,
              maxWords: 90,
              minWordsUsed: 0,
              modelAnswer:
                "I think schools should have a 20-minute break after every two lessons because students cannot focus for a long time without rest. For example, after a short walk outside, it is easier to understand a hard math lesson. In addition, schools could let students choose one subject they love. For instance, a student who loves art could take an extra art class. As a result, students would come to school with more motivation. In conclusion, I believe these changes would make school a better place to learn.",
              checklist: [
                "משפט 1 מציע שינוי ספציפי: schools should...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "גם לסיבה השנייה יש פרט (For instance)",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, ולא העתקתי את השאלה עצמה",
              ],
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף (רשות) | תנאי בחינה עם שעון - שאלה חדשה\n\nכתבתם חיבור מלא בלי עזרה? אתם במקום טוב. רוצים עוד חזרה בתנאי בחינה, עם שעון - הנה שאלה חדשה מהרשימה הרשמית.",
            },
            {
              type: "writing-task",
              prompt:
                '"In your opinion, what should schools do to prevent cheating on tests? Give reasons to explain your opinion."\n\n(prevent = למנוע, cheating = העתקה)\n\nתנאי בחינה: 70-90 מילים, בלי בנק מילים, 20 דקות על השעון.',
              wordBank: [],
              minSentences: 5,
              minWordsUsed: 0,
              minWords: 70,
              maxWords: 90,
              modelAnswer:
                "I think schools should prevent cheating by putting phones in a box at the door during tests because most cheating today happens on phones. For example, students can photograph the answers and send them in a class WhatsApp group. In addition, teachers could give different versions of the same test. For instance, students who sit next to each other would get the questions in a different order. As a result, copying would not help. In conclusion, I believe these two simple changes would stop most cheating.",
              checklist: [
                "משפט 1 מציע צעד ספציפי: schools should...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, בלי בנק מילים, ולא העתקתי את השאלה",
              ],
              timeLimitMinutes: 20,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
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
    requiredRounds: 3,
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
            "שלד של 6 משפטים: because / For example / In addition / For instance / As a result / In conclusion = בערך 80 מילים",
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
                "טווח גילים: between 10 and 14",
                "גיל ספציפי + because",
                '"It depends on the child"',
                "דעה על טלפונים: phones are dangerous for children",
              ],
              correctIndex: 1,
              explanation:
                'At what age? = מספר אחד. טווח ו-"It depends" לא בוחרים. דעה על טלפונים לא עונה על "באיזה גיל".',
            },
            {
              type: "mcq",
              prompt:
                'איזה פתיח עונה ישירות על "At what age should children have phones?"',
              options: [
                "I think phones are dangerous for young children.",
                "I think children should get their first phone at age 13 because they are old enough to use it.",
                "I think children should get their first phone between age 10 and 14.",
                "In conclusion, 13 is the right age for a cellphone.",
              ],
              correctIndex: 1,
              explanation:
                'גיל אחד (13) + because. "dangerous" לא נותן גיל. "between 10 and 14" לא בוחר. In conclusion בא בסוף, לא בפתיחה.',
            },
          ],
        },
        {
          screens: [
            { type: "preface", text: "סיבוב 2 | השלד: 4 משפטים" },
            {
              type: "writing-task",
              prompt:
                '"At what age should children be allowed to have their own cellphone? Give reasons to explain your opinion."\n\nשלב 1 - השלד: 4 משפטים, כמו בשיעור In conclusion. עוד לא 70-90.\n✏️ I think children should get their own phone at age... because...\n✏️ For example,...\n✏️ In addition,...\n✏️ In conclusion, I believe...',
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
              minSentences: 4,
              minWordsUsed: 3,
              modelAnswer:
                "I think children should get their own phone at age 13 because they start going to places alone at this age. For example, many children take a bus to school and their parents need to contact them. In addition, at 13 they are mature enough to understand the dangers of social media. In conclusion, I believe that 13 is the right age for a first phone.",
              checklist: [
                "משפט 1 נותן גיל אחד: at age...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
              ],
              wordCounter: true,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "סיבוב 3 | חיבור מלא, 70-90 מילים\n\nהפעם בלי תבנית ובלי בנק מילים - כמו בבחינה.",
            },
            {
              type: "writing-task",
              prompt:
                '"At what age should children be allowed to have their own cellphone? Give reasons to explain your opinion."\n\nחיבור מלא, 70-90 מילים, כמו בבחינה: בלי תבנית ובלי בנק מילים. (עוד בלי שעון.)',
              wordBank: [],
              minSentences: 5,
              minWords: 70,
              maxWords: 90,
              minWordsUsed: 0,
              modelAnswer:
                "I think children should get their own phone at age 13 because they start going to places alone at this age. For example, many children take a bus to school, and their parents need to contact them. In addition, at 13 children are mature enough to understand the dangers of social media. For instance, they know not to send photos to strangers. As a result, parents can trust them with a phone. In conclusion, I believe that 13 is the right age for a first phone.",
              checklist: [
                "משפט 1 נותן גיל אחד: at age...",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "גם לסיבה השנייה יש פרט (For instance)",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, ולא העתקתי את השאלה עצמה",
              ],
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תרגול נוסף (רשות) | תנאי בחינה עם שעון - שאלה חדשה\n\nכתבתם חיבור מלא בלי עזרה? אתם במקום טוב. רוצים עוד חזרה בתנאי בחינה, עם שעון - הנה שאלה חדשה מהרשימה הרשמית.",
            },
            {
              type: "writing-task",
              prompt:
                "\"The government wants to raise the age for a driver's license to 19. Do you think this is a good idea? Give reasons to explain your opinion.\"\n\n(driver's license = רישיון נהיגה)\n\nכמו בשאלת הגיל: תגידו YES או NO, ותנו את הגיל שאתם חושבים שנכון.\n\nתנאי בחינה: 70-90 מילים, בלי בנק מילים, 20 דקות על השעון.",
              wordBank: [],
              minSentences: 5,
              minWordsUsed: 0,
              minWords: 70,
              maxWords: 90,
              modelAnswer:
                "I do not think raising the age for a driver's license to 19 is a good idea because many teenagers need a car at 17. For example, my cousin drives to his job at a factory every morning at six o'clock. In addition, young drivers learn best while their parents are still next to them. For instance, at 17 most teenagers still live at home and can practice with their parents. As a result, they become safer drivers. In conclusion, I believe 17 is the right age.",
              checklist: [
                "משפט 1: YES או NO, וגיל אחד ברור",
                "הסיבה אחרי because ספציפית - לא good / nice / important",
                "יש For example עם פרט אמיתי: מקום, מספר או מקרה",
                "In addition מביא רעיון חדש, לא את אותה סיבה במילים אחרות",
                "In conclusion חוזר על העמדה, בלי סיבה חדשה",
                "70-90 מילים, בלי בנק מילים, ולא העתקתי את השאלה",
              ],
              timeLimitMinutes: 20,
              requiredMoves: [
                "stance",
                "because",
                "for-example",
                "in-addition",
                "in-conclusion",
              ],
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
