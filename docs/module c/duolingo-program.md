# Module C — תוכנית לימוד מלאה (v3)
מקור: `docs/module c/program/L01–L24` (24 שיעורי מורה). מסמך זה הוא ספֵּק תוכן מלא לאפליקציה: כל node כולל את טקסט ההסבר שמוצג לתלמיד, את רשימת הפריטים עם התשובות, את משוב הטעות, ואת תנאי המעבר. אין כאן ראשי פרקים — יש תוכן מוכן להזנה.

---

# חלק א׳ — עקרונות התוכנית

## למה המבנה הזה
תוכנית המורה בנויה כ-24 שיעורים של 75 דקות. שיעור אחד מכיל בין שלוש לשש מיומנויות נפרדות: אוצר מילים, דפוס חדש (Pattern), תרגול מודרך, תרגול עצמאי, אתגר מתוזמן. תלמיד שמפספס אחת מהן ממשיך הלאה בלי שאף אחד מבחין. הפירוק ל-nodes מפרק כל שיעור למיומנויות אטומיות: node אחד = דבר אחד שאפשר להיכשל בו, ולכן גם דבר אחד שאפשר לתקן.

שלוש החלטות שמנחות את כל המסמך:

**1. כל node מלמד כלל, לא נושא.** "סימון מספרים" הוא נושא. "מספר = ספרה + שם עצם; ספרה לבד היא חסרת ערך כי אי אפשר להתאים אותה לשאלה" הוא כלל. הכלל הוא מה שהתלמיד לוקח לבחינה.

**2. המסיחים נבנים מהטעויות המתועדות.** בכל אחד מ-24 השיעורים יש סעיף "Common mistakes to watch for" — 96 טעויות שהמורה תיעד מהכיתה. אלה אינן הערות שוליים: הן הבסיס לתכנון המסיחים ולניסוח משוב הטעות. תלמיד שבוחר משפט נכון בשאלת NOT צריך לקבל משוב שמסביר בדיוק את זה, ולא "טעות, נסה שוב".

**3. סימון לפני שאלה.** מיומנות ה-Eye Catchers נלמדת בשלב הראשון כמיומנות מוטורית טהורה — לסמן, בלי לענות על כלום. רק אחרי שהסימון אוטומטי מגיעות שאלות. זהו ההבדל המרכזי בין התוכנית הזו לבין שיעור L2 המקורי, שמלמד סימון וניווט באותה שעה וחצי.

## מודל הנתונים לאפליקציה
כל node הוא רשומה עם השדות:

| שדה | תיאור |
|---|---|
| `id` | `4.c.<section>.<lesson>` — יחידה 4 · מודול c · סקשן · צומת |
| `title_he` | כותרת שמוצגת על הצומת במפה |
| `skill` | מה התלמיד יודע לעשות בסוף — ניסוח מדיד |
| `explain_he` | טקסט ההסבר שמוצג לפני התרגול. 40–80 מילים. מנוסח כדיבור ישיר לתלמיד |
| `exercise` | סוג התרגיל מתוך ה-enum |
| `items[]` | הפריטים עצמם: prompt · options/targets · answer · per-option feedback |
| `trap_feedback_he` | הודעת המשוב כשהתלמיד נופל בטעות הצפויה |
| `pass` | תנאי מעבר |
| `source` | שיעור מקור + טקסט מקור |

## enum סוגי תרגיל
| סוג | מה קורה במסך | מודל תשובה |
|---|---|---|
| `VOCAB` | כרטיס: מילה באנגלית → 3–4 אפשרויות בעברית. אחר כך הפוך | מחרוזת |
| `MARK` | טקסט מוצג; התלמיד נוגע במילים כדי לסמן אותן | טווחי תווים + ניקוד שלילי על סימון-יתר |
| `CLASSIFY` | פריטים נגררים לשתי קטגוריות או יותר | מיפוי פריט→קטגוריה |
| `MCQ` | שאלה + 4 אפשרויות | אינדקס + נימוק לכל אפשרות שגויה |
| `GAP` | משפט עם חור; הקלדה או בחירה מבנק מילים | מחרוזת + וריאנטים מקובלים |
| `WRITE` | כתיבה חופשית עם rubric גלוי | קריטריונים לסימון עצמי/עמיתים |
| `TIMED` | שעון גלוי; אין אפשרות לחזור אחורה | כרגיל + מדידת זמן לשאלה |
| `REVIEW` | חזרה מרווחת על nodes ישנים | מעורב |
| `CHECK` | שער סקשן. כישלון מזריק REVIEW ולא חוסם | מעורב · סף 80% |

## כללי מעבר גלובליים
- `VOCAB` / `MCQ` / `CLASSIFY` / `GAP` — 4 מתוך 5 פריטים.
- `MARK` — 90% מהיעדים סומנו **וגם** לא יותר משני סימונים מיותרים. סימון-יתר הוא כישלון: תלמיד שמסמן חצי טקסט לא בנה מיומנות סינון.
- `WRITE` — עומד בכל הקריטריונים של ה-rubric המוצג בצומת.
- `CHECK` — 80%. מתחת לזה: האפליקציה מזריקה REVIEW של ה-nodes שנכשלו לפני שממשיכים הלאה. הסקשן לא נחסם ולא נפתח מחדש מההתחלה.

## מאגר הטקסטים
17 טקסטים מקוריים מתוכנית המורה. כל טקסט משמש 2–3 פעמים לאורך המסלול — בפעם הראשונה לסימון, בפעם השנייה לשאלות, בפעם השלישית בזמן מוגבל. זה חוסך הפקת תוכן ובונה היכרות שמפחיתה עומס קוגניטיבי בתרגול המתקדם.

| טקסט | שיעור | משמש בסקשנים |
|---|---|---|
| LEARNING TO SWIM AS AN ADULT | L1 | 2 |
| LEARNING A LANGUAGE ONLINE | L1 | 2 |
| THE CITY GARDEN PROJECT | L2 | 3 · 4 |
| SPORT FOR ALL | L2 | 3 · 4 |
| GIVING TIME, GAINING HAPPINESS | L3 · L4 · L15 | 5 · 6 · 19 |
| THE SLEEP QUESTION | L3 | 5 · 7 |
| THE BOREDOM STUDY | L4 | 5 · 7 |
| THE SLEEP DEBATE | L5 | 9 |
| THE SCREEN TIME DEBATE | L6 | 10 |
| THE JOB REVOLUTION | L7 · L8 | 11 · 12 |
| THE WATER CRISIS | L7 | 11 |
| THE READING DEBATE | L8 | 12 |
| THE EXERCISE MYTH | L9 · L10 | 13 · 14 |
| THE FOREST EXPERIMENT | L9 | 13 |
| THE MEMORY STUDY | L10 | 13 · 14 |
| THE LAST FORESTS | L11 · L12 | 15 · 16 |
| THE PLASTIC PROBLEM | L11 | 15 |
| THE CLEAN ENERGY TRANSITION | L12 | 16 |
| THE DEEP SEA MYSTERY | L19 | 22 |
| THE KINDNESS EFFECT | L23 | 26 |

## מפת הסקשנים
| # | סקשן | nodes | מקור | מה נפתח בסופו |
|---|---|---|---|---|
| 1 | לפענח את השאלה | 5 | L1 | התלמיד יודע מה נשאל |
| 2 | P1 — לא קוראים הכל | 8 | L1 | תשובה בלי לקרוא את הטקסט |
| 3 | Eye Catchers · מספרים | 7 | L2 | ניווט לפי מספר |
| 4 | Eye Catchers · שמות | 7 | L2 | ניווט לפי שם |
| 5 | Eye Catchers · שלילה | 6 | L3 | שאלות NOT |
| 6 | Eye Catchers · מילות הגבלה | 5 | L3 | צמצום לתשובה אחת |
| 7 | Eye Catchers · ניגוד | 5 | L3 | איתור המידע שאחרי however |
| 8 | הרמזור | 6 | L4 | בדיקה עצמית לפני תשובה |
| 9 | שאלות פרט | 5 | L5 | תשובה מוכחת בלשון הטקסט |
| 10 | רב-ברירה ואלימינציה | 6 | L6 | פסילה שיטתית |
| 11 | השלמת משפט | 6 | L7 | השלמה תקינה דקדוקית |
| 12 | שתי תשובות נכונות | 5 | L8 | פורמט ה-√ |
| 13 | שאלות התייחסות | 6 | L9 | it / they / this |
| 14 | הסקה | 6 | L10 | חיבור שני נתונים |
| 15 | רעיון מרכזי | 6 | L11 | מבחן הכיסוי |
| 16 | עמדת הכותב | 7 | L12 | טון + הוכחה |
| 17 | בנק מילים · חברה | 8 | L13 | 20 מילים בייצור |
| 18 | בנק מילים · טכנולוגיה וסביבה | 7 | L14 | 20 מילים + collocations |
| 19 | מקריאה לכתיבה | 6 | L15 | Notice→Understand→Adapt→Use |
| 20 | משפטים שעובדים | 9 | L16 | משפט תקין בכל פעם |
| 21 | מקשרים ומרפאת שגיאות | 8 | L17 | פסקה מחוברת |
| 22 | ניהול זמן | 7 | L18 · L19 | P15 אוטומטי |
| 23 | YES או NO | 7 | L20 | הכרעה ב-30 שניות |
| 24 | סיבה + הסבר + דוגמה | 7 | L21 | תבנית P14 |
| 25 | בנק דוגמאות ואורך | 7 | L22 | 70–90 מילים בזמן |
| 26 | סימולציה ותיקון | 6 | L23 · L24 | בחינה מלאה |
| R | חזרה מרווחת | 6 | — | נפרס לאורך המסלול |

**סה"כ 174 nodes.**

## 15 ה-Patterns — מקרא מרוכז
התלמיד פוגש אותם בהדרגה; המסמך מפנה אליהם לפי מספר.

| | דפוס | מתי מפעילים |
|---|---|---|
| P1 | Question → Keywords → Locate → Read → Answer | כל שאלה עובדתית |
| P2 | מספר בשאלה → מצא אותו בטקסט → התאם למקור | "how many" |
| P3 | שם בשאלה → לפסקה שלו → קרא רק שם | שם פרטי / מוסד |
| P4 | NOT / NEVER / NO → עצור → חפש את המשפט השקרי | NOT בשאלה |
| P5 | main / most / only → תשובה אחת בלבד | מילת הגבלה |
| P6 | however / but / although → המידע החשוב אחרי | מילת ניגוד |
| P7 | כינוי → משפט אחורה → מצא שם עצם → הצב ובדוק | it / they / this |
| P8 | רמזור: אדום / צהוב / ירוק | לפני כל תשובה |
| P9 | מצא הוכחה לאפשרות שבחרת | שאלת פרט |
| P10 | מצא את המשפט → התאם לחור → בדוק דקדוק | השלמת משפט |
| P11 | מצא אחת → המשך לחפש → ודא הוכחה לשתיים | שתי תשובות |
| P12 | משפט נושא → מכסה את כל הפסקה → לא פרט | רעיון מרכזי |
| P13 | משתמע → חבר שני נתונים → מהטקסט בלבד | הסקה |
| P14 | YES/NO → סיבה → הסבר → דוגמה → 70–90 מילים | כתיבה |
| P15 | סמן שאלה קשה → עבור מיד → חזור בסוף | ניהול זמן |

---

# חלק ב׳ — סקשנים 1–4: לפענח את השאלה, P1, מספרים, שמות

## Section 1 · לפענח את השאלה
**מקור:** L1 · אוצר מילים Circle 1
**יעד הסקשן:** התלמיד קורא שאלה באנגלית ויודע שלושה דברים לפני שנגע בטקסט — מה נשאל, לאיזו פסקה ללכת, ובאיזה אורך לענות.
**למה זה ראשון:** תלמיד שלא מבין את השאלה לא ייעזר בשום אסטרטגיית קריאה. חמש המילים כאן חוזרות כמעט בכל שאלה במודול C.

### 4.c.1.1 · חמש המילים שפותחות כל שאלה
**מיומנות:** תרגום מיידי של חמש מילות השאלה, בלי היסוס.
**מסך ההסבר:**
> בכל שאלה במודול C יחזרו אותן חמש מילים. הן לא קשות — אבל אם אתה עוצר לחשוב עליהן באמצע הבחינה, איבדת שניות שאין לך. המטרה כאן היא לא "להבין" אותן, אלא לדעת אותן בלי לחשוב.

**תרגיל:** VOCAB · 5 מילים · שני סבבים (אנגלית→עברית, ואז עברית→אנגלית)

| מילה | תשובה | מסיחים | הערה |
|---|---|---|---|
| paragraph | פסקה | משפט · עמוד | |
| according to | לפי | למרות · בגלל | המסיח "למרות" נפוץ כי מבלבלים עם although |
| explain / explains | מסביר | מתאר · שואל | |
| give ONE answer | תן תשובה אחת | תן דוגמאות · הסבר | |
| complete the sentence | השלם את המשפט | כתוב משפט חדש | המסיח הזה מכין ל-4.c.11.3 |

**מעבר:** 5/5 בשני הסבבים. פחות מזה — הצומת חוזר למחרת.
**מקור:** L1 · טבלת Circle 1

### 4.c.1.2 · כל מילה — לאן היא שולחת אותי
**מיומנות:** התלמיד ממיר כל מילת שאלה לפעולה, לא לתרגום.
**מסך ההסבר:**
> תרגום לבד לא עוזר בבחינה. `according to Dr. Klein` לא אומר רק "לפי דוקטור קליין" — הוא אומר: **לך לפסקה שבה מופיע השם קליין, וקרא רק אותה**. כל מילת שאלה היא הוראת ניווט. עכשיו נלמד את ההוראה של כל אחת.

**תרגיל:** CLASSIFY · 8 פריטים · גרירה לפעולה הנכונה

| הפריט בשאלה | הפעולה הנכונה | פעולות שגויות שמוצעות |
|---|---|---|
| "According to Dr. Klein..." | ללכת לפסקה של קליין | לחפש מספר · לענות מהידע שלי |
| "Read paragraph II and answer" | ללכת לפסקה II ולא לקרוא את השאר | לקרוא את כל הטקסט |
| "How many trees..." | לחפש מספר שצמוד למילה trees | לחפש כל מספר בטקסט |
| "Give ONE answer" | לכתוב משפט אחד | לכתוב את כל מה שמצאתי |
| "Complete the sentence: They could not..." | למצוא את המשפט בטקסט ולהמשיך אותו | לכתוב משפט חדש משלי |
| "What does Dr. Klein explain?" | למצוא את הציטוט של קליין | לסכם את הפסקה |
| "Which statement is NOT true?" | לחפש את המשפט השקרי | לחפש את המשפט הנכון |
| "What is the main idea?" | לחפש משפט שמכסה את כל הפסקה | לבחור את הפרט המעניין |

**משוב על טעות:** "תרגמת נכון — אבל השאלה היא לא מבחן תרגום. `according to X` הוא כתובת: הפסקה של X. שם תמצא את התשובה."
**מעבר:** 7/8.
**מקור:** L1 · עמודת "In your mind: traffic light check"

### 4.c.1.3 · תשובה אחת אינה רשימה
**מיומנות:** התלמיד מזהה את אורך התשובה הנדרש מתוך ההוראה.
**מסך ההסבר:**
> `Give ONE answer` פירושו משפט אחד. לא שניים, ולא רשימה של שלושה דברים "ליתר ביטחון". תשובה ארוכה לא מזכה בנקודות נוספות — היא רק מגדילה את הסיכוי לשגיאת דקדוק שתוריד לך נקודות. קצר ומדויק מנצח ארוך ומגושם.

**תרגיל:** MCQ · 5 פריטים

פריט לדוגמה — השאלה: *"According to Dr. Anna Klein, why do adults become stronger swimmers than children? Give ONE answer from paragraph II."*
- i) "Because adults understand what the teacher explains and can correct their mistakes more quickly." ✓
- ii) "Because they understand the teacher, because they are not afraid to ask questions, and because they practice more." ✗ — שלוש סיבות כשביקשו אחת; הסיבה השלישית גם לא מופיעה בטקסט
- iii) "Because they are stronger." ✗ — לא מהטקסט
- iv) "Adults are better swimmers." ✗ — לא עונה על "why"

**משוב על טעות (ii):** "כל מה שכתבת נכון — אבל ביקשו תשובה אחת. בבחינה זה לא מוסיף נקודות, וכל משפט נוסף הוא הזדמנות לשגיאה."
**מעבר:** 4/5.
**מקור:** L1 · Q2 + מפתח התשובות

### 4.c.1.4 · מה מותר להביא מהראש
**מיומנות:** התלמיד פוסל תשובה נכונה עובדתית שאינה מופיעה בטקסט.
**מסך ההסבר:**
> זו הטעות שהכי קשה להיפטר ממנה: אתה יודע משהו על הנושא, האפשרות נשמעת נכונה — אז אתה בוחר בה. במודול C, "נכון בחיים" לא שווה כלום. תשובה נכונה היא תשובה שאפשר להצביע על משפט בטקסט שמוכיח אותה. אין משפט — אין תשובה.

**תרגיל:** CLASSIFY · 6 פריטים · שתי קטגוריות: "יש הוכחה בטקסט" / "נכון אבל לא בטקסט"

על בסיס LEARNING TO SWIM AS AN ADULT:
| משפט | קטגוריה |
|---|---|
| "Over 30% of adults in large cities cannot swim." | יש הוכחה |
| "Swimming is good exercise for the heart." | נכון אבל לא בטקסט |
| "Adults are not afraid to ask questions." | יש הוכחה |
| "Children learn languages faster than adults." | נכון אבל לא בטקסט |
| "Adult swimming classes are available in most cities." | יש הוכחה |
| "Swimming lessons are expensive." | נכון אבל לא בטקסט |

**משוב על טעות:** "ייתכן מאוד שזה נכון. אבל הבוחן לא שואל מה אתה יודע — הוא שואל מה כתוב. חפש את המשפט; אם אין, זו לא התשובה."
**מעבר:** 5/6.
**מקור:** L5 · "Only from the text must be a mantra"

### 4.c.1.5 · שער סקשן 1
**תרגיל:** CHECK · 10 פריטים מעורבים מ-1.1–1.4 · ללא טיימר
**מעבר:** 8/10. מתחת לזה — REVIEW של ה-nodes שנכשלו.

---

## Section 2 · P1 — לא קוראים את הטקסט
**מקור:** L1 · טקסטים LEARNING TO SWIM AS AN ADULT · LEARNING A LANGUAGE ONLINE
**יעד הסקשן:** התלמיד עונה על שאלה עובדתית אחרי שקרא בין משפט לשני משפטים בטקסט.
**הדפוס:** `P1 = Question → Keywords → Locate → Read → Answer`
**למה זה קריטי:** תלמיד שקורא את הטקסט מהשורה הראשונה מבזבז 10–15 דקות לפני שהוא נוגע בשאלה הראשונה, ואז אין לו זמן למטלת הכתיבה. זו הסיבה מספר אחת לכישלון במודול C — לא חוסר ידע.

### 4.c.2.1 · כמה באמת צריך לקרוא
**מיומנות:** התלמיד מבין שהטקסט הוא מאגר לחיפוש, לא סיפור לקריאה.
**מסך ההסבר:**
> אתה לא מקבל נקודות על קריאת הטקסט. אתה מקבל נקודות על תשובות. הטקסט הוא מאגר — אתה נכנס אליו, לוקח מה שצריך, ויוצא. בתרגיל הבא נראה לך שאלה אמיתית ואת המשפט היחיד שנדרש כדי לענות עליה.

**תרגיל:** MCQ · 3 פריטים · אחרי כל בחירה נחשף משפט ההוכחה בהדגשה
דוגמה: השאלה *"What do we learn from paragraph I about adults who cannot swim?"* — "כמה משפטים באמת נדרשו?" → **משפט אחד**: *"Many of them feel embarrassed about this and never try to learn."*
**מעבר:** 2/3.
**מקור:** L1 · I DO script

### 4.c.2.2 · מילת המפתח היא הנושא, לא ה-what
**מיומנות:** התלמיד מסמן בשאלה את מילות הנושא ולא את מילת השאלה.
**מסך ההסבר:**
> בכל שאלה יש שתי מילים שחשובות באמת: **איפה** לחפש ו**מה** לחפש. `What`, `How`, `Why` לא עוזרות לך לאתר כלום — הן קיימות בכל שאלה. מה שמאתר הוא הנושא: `adults who cannot swim`, `paragraph I`, `Dr. Klein`.

**תרגיל:** MARK · 6 שאלות · סימון 1–2 מילות מפתח בשאלה עצמה

| השאלה | סימון נכון | סימון שגוי נפוץ |
|---|---|---|
| "What do we learn from paragraph I about adults who cannot swim?" | `paragraph I` · `cannot swim` | `What do we learn` |
| "According to Dr. Anna Klein, why do adults become stronger swimmers?" | `Dr. Anna Klein` · `stronger swimmers` | `why` |
| "According to paragraph III, what do instructors say about adults who practice regularly?" | `paragraph III` · `practice regularly` | `what do instructors say` |
| "How many trees did the charity plant in Greenville?" | `trees` · `charity` | `How many` |
| "What does Dr. Klein explain?" | `Dr. Klein` | `explain` |
| "According to Dr. Tanaka, what cannot apps replace?" | `Dr. Tanaka` · `apps replace` | `what cannot` |

**משוב על טעות:** "`What` נמצא בכל שאלה שנייה בבחינה — הוא לא יעזור לך למצוא כלום בטקסט. סמן את מה שייחודי לשאלה הזו."
**מעבר:** 90% מהיעדים, בלי סימון-יתר.
**מקור:** L1 · טעות מתועדת: "Student picks a keyword from the wrong part of the question"

### 4.c.2.3 · ממילת המפתח לפסקה
**מיומנות:** התלמיד מזהה לאיזו פסקה השאלה שולחת אותו לפני שקרא משהו.
**מסך ההסבר:**
> יש שני סוגי מצביעים. מפורש: השאלה כתובה "paragraph III" — אין מה לחשוב. סמוי: השאלה מזכירה שם או מספר, וזה מוביל לפסקה אחת בלבד. בשני המקרים אתה יודע לאן ללכת עוד לפני שקראת מילה מהטקסט.

**תרגיל:** MCQ · 5 פריטים · על CITY GARDEN ו-SWIM
- "Dr. Klein" → פסקה II (SWIM)
- "paragraph III" → III, מפורש
- "Professor James Wu" → III (CITY GARDEN)
- "Dr. Maria Santos" → II
- "2,000 trees" → I

**מעבר:** 4/5.
**מקור:** L1–L2 · "Names are paragraph pointers"

### 4.c.2.4 · לקרוא סביב, לא את הפסקה
**מיומנות:** התלמיד קורא משפט אחד סביב מילת המפתח ומרחיב רק אם צריך.
**מסך ההסבר:**
> הגעת לפסקה הנכונה — זה חצי מהעבודה, ופה רוב התלמידים מפסידים את החצי השני: הם קוראים את כל הפסקה. אתה לא צריך. סרוק עד שאתה רואה את מילת המפתח, קרא את המשפט שהיא נמצאת בו. אם התשובה לא שם — משפט אחד קדימה או אחורה. זהו.

**תרגיל:** MARK · 5 פריטים · סימון משפט ההוכחה בלבד

| השאלה | משפט ההוכחה |
|---|---|
| "adults who cannot swim" — מה הם עושים? | "Many of them feel embarrassed about this and never try to learn." |
| מה אומרת דוקטור קליין? | "Adults understand what the teacher explains and can correct their mistakes more quickly." |
| מה אומרים המדריכים על מי שמתאמן בקביעות? | "adults who practice regularly usually make good progress in less than two months" |
| כמה אנשים משתמשים באפליקציות שפה? | "more than 500 million people worldwide now use language apps on their phones" |
| מה אפליקציה לא יכולה להחליף? | "No app can replace a real conversation" |

**משוב על סימון-יתר:** "סימנת את כל הפסקה. המטרה של P1 היא לצמצם — משפט אחד שמוכיח את התשובה, לא הכול."
**מעבר:** 90% · מקסימום 2 סימונים מיותרים.
**מקור:** L1 · טעות מתועדת: "finds the right paragraph but reads too much"

### 4.c.2.5 · P1 מקצה לקצה
**מיומנות:** התלמיד מבצע את חמשת השלבים ברצף על שאלה מלאה.
**מסך ההסבר:**
> עכשיו מחברים. חמישה שלבים, תמיד באותו סדר: קרא את השאלה · סמן מילות מפתח · אתר את הפסקה · קרא סביב · ענה. אל תדלג על שלב 2 — הוא זה שחוסך לך את הזמן.

**תרגיל:** רצף מודרך · 4 שלבים על שאלה אחת, ואז שאלה שלמה בלי הכוונה
פריט מלא: *"What do we learn from paragraph I about adults who cannot swim?"*
- i) Why they stopped swimming as children ✗ — לא מוזכר בטקסט כלל
- ii) How experts help them learn ✗ — מומחים מוזכרים, אבל לא איך הם עוזרים
- iii) What they usually do because they feel embarrassed ✓
- iv) Where they can find swimming classes ✗ — נכון, אבל בפסקה III

**מעבר:** תשובה נכונה + סימון נכון של מילות המפתח.
**מקור:** L1 · Q1

### 4.c.2.6 · המסיח מהפסקה הלא נכונה
**מיומנות:** התלמיד פוסל אפשרות שתוכנה מופיע בטקסט אך לא בפסקה שנשאלה.
**מסך ההסבר:**
> זו המלכודת הכי נפוצה במודול C, והיא חוזרת בכל סוגי השאלות: האפשרות אומרת משהו שבאמת כתוב בטקסט — רק לא בפסקה שהשאלה שאלה עליה. כשהשאלה אומרת "paragraph I", כל מה שנמצא בפסקה III הוא תשובה שגויה, גם אם הוא נכון לחלוטין.

**תרגיל:** MCQ · 4 פריטים · לכל אפשרות שגויה התלמיד מסמן את הפסקה שממנה היא הגיעה
דוגמה: בשאלה על פסקה I, האפשרות *"Where they can find swimming classes"* — נכונה, אבל היא בפסקה III.
**משוב על טעות:** "ראית את זה בטקסט וזה הספיק לך. בדוק תמיד באיזו פסקה — השאלה ביקשה פסקה I."
**מעבר:** 3/4.
**מקור:** L1 · "Distractor warning: iv) is mentioned in paragraph III, not I"

### 4.c.2.7 · P1 עם שעון
**מיומנות:** אותה מיומנות תחת לחץ זמן.
**מסך ההסבר:**
> ארבע דקות, שתי שאלות, טקסט שלא ראית. אם אתה תקוע על הראשונה — עבור לשנייה וחזור. הזמן נספר.

**תרגיל:** TIMED · טקסט LEARNING A LANGUAGE ONLINE · 2 שאלות · 4 דקות
- T1: "What do we learn from the text about language apps?" → **ii) How many people worldwide use them** · הוכחה: *"more than 500 million people worldwide now use language apps"*
- T2: "According to Dr. Yuki Tanaka, what cannot apps replace?" → **a real conversation**

**מעבר:** 2/2 בתוך הזמן, או 2/2 בחריגה של עד דקה (מסומן כ"עבר עם חריגת זמן" ומזין את סקשן 22).
**מקור:** L1 · Timed Challenge

### 4.c.2.8 · שער סקשן 2
**תרגיל:** CHECK · 6 פריטים · טקסט חדש
**מעבר:** 80%.

---

## Section 3 · Eye Catchers · מספרים
**מקור:** L2 · טקסטים THE CITY GARDEN PROJECT · SPORT FOR ALL · דפוס P2
**יעד הסקשן:** התלמיד רואה מספר בשאלה ומגיע ישירות למקור הנכון שלו בטקסט — לא לכל מספר אחר.
**עיקרון הבנייה:** ארבעה nodes ראשונים הם סימון בלבד, בלי שאלות. רק אחרי שהסימון אוטומטי מגיע הניווט.

### 4.c.3.1 · ארבע משפחות ה-Eye Catchers
**מיומנות:** התלמיד מסווג מילה למשפחה הנכונה ויודע איזו פעולה כל משפחה מפעילה.
**מסך ההסבר:**
> העין שלך כבר עושה חצי מהעבודה: כשאתה מסתכל על טקסט באנגלית, יש דברים שקופצים לך לעין — מספרים, שמות באות גדולה, מילים כמו "not". במקום להתעלם מזה, נהפוך את זה לשיטה. ארבע משפחות, כל אחת מפעילה פעולה אחרת.

| משפחה | דוגמאות | הפעולה |
|---|---|---|
| מספרים | 30% · five years · 2,000 trees | זהו נתון — לאיזה שם עצם הוא שייך? |
| שמות | Dr. Klein · Greenville · Oslo University | זו כתובת — לאיזו פסקה? |
| שלילה | cannot · never · not all | המשמעות מתהפכת — קרא שוב לאט |
| מילות הגבלה | most · only · main | יש תשובה אחת בלבד |

**תרגיל:** CLASSIFY · 8 פריטים · `85%` · `however` · `Dr. Wu` · `only` · `Greenville` · `cannot` · `three hours` · `the main reason`
**מעבר:** 7/8.
**מקור:** L2 · "Eye Catchers in this text — 4 families"

### 4.c.3.2 · מספר = ספרה + שם עצם
**מיומנות:** התלמיד מסמן מספר יחד עם שם העצם שלו, לא לבד.
**מסך ההסבר:**
> אל תסמן ספרה. `2,000` לבד לא אומר כלום — כשתחזור לחפש, לא תדע אם זה עצים, מתנדבים או דולרים. תמיד סמן את הצירוף: `2,000 trees`, `three hours`, `85% of residents`. זה מה שמאפשר לך להתאים מספר לשאלה תוך שנייה.

**תרגיל:** MARK · 8 משפטים

| המשפט | סימון נכון |
|---|---|
| "They planted over 2,000 trees and created 15 community gardens." | `2,000 trees` · `15 community gardens` |
| "The volunteers spent an average of three hours a week." | `three hours a week` |
| "85% of Greenville residents now say the city is a better place to live." | `85% of residents` |
| "stress levels among residents had fallen by 40%" | `40%` צמוד ל-`stress levels` |
| "over 30% of adults in large cities cannot swim" | `30% of adults` |
| "Her team worked with more than 300 volunteers." | `300 volunteers` |
| "visits from city planners from over 50 countries" | `50 countries` |
| "more than 500 million people worldwide now use language apps" | `500 million people` |

**משוב על סימון ספרה בלבד:** "סימנת את המספר בלי לדעת של מה הוא. בשאלה ישאלו 'כמה עצים' או 'כמה מתנדבים' — בלי שם העצם הסימון לא יעזור לך."
**מעבר:** 90%.
**מקור:** L2 · schema.md של הפרויקט (`# + noun`)

### 4.c.3.3 · גם מילים הן מספרים
**מיומנות:** התלמיד מזהה מספרים שאינם כתובים בספרות.
**מסך ההסבר:**
> `Five years ago` הוא מספר. כך גם `twice a week`, `half of the students`, `ten years`. אם אתה סורק רק ספרות, תפספס בדיוק את המספרים שהבוחן אוהב לשאול עליהם — כי הם פחות בולטים.

**תרגיל:** MARK · פסקה שלמה · 8 יעדים
טקסט: CITY GARDEN פסקה I + II
יעדים: `Five years ago` · `2,000 trees` · `15 community gardens` · `ten years` · `300 volunteers` · `three hours a week` · (בפסקה III) `85%` · `40%` · `50 countries`
**משוב:** "פספסת את `Five years ago` — כי אין שם ספרה. מספר כתוב במילים הוא עדיין מספר."
**מעבר:** 90% · עד 2 סימונים מיותרים.
**מקור:** L2 · ספירת המורה: "How many numbers did you find? → 8"

### 4.c.3.4 · לכל מספר יש בעלים
**מיומנות:** התלמיד מתאים כל מספר בטקסט לשם העצם שלו ולא מבלבל בין שני מספרים באותה פסקה.
**מסך ההסבר:**
> בפסקה אחת יכולים להיות ארבעה מספרים. הבוחן יודע את זה, ולכן הוא בונה מסיחים שמשתמשים במספר האמיתי — רק על הדבר הלא נכון. 85% הם התושבים שאומרים שהעיר טובה יותר. 40% הם ירידת הלחץ. תחליף ביניהם — התשובה שגויה, למרות ששני המספרים אמיתיים.

**תרגיל:** CLASSIFY · 6 זוגות · גרירת מספר לשם העצם שלו (CITY GARDEN פסקה III + II)

| מספר | שייך ל |
|---|---|
| 85% | residents who say the city is a better place to live |
| 40% | the fall in stress levels |
| 300 | volunteers who worked with the team |
| three hours | time each volunteer spent per week |
| 50 | countries whose city planners visit |
| 2,000 | trees planted |

**משוב על טעות:** "החלפת בין שני מספרים אמיתיים. זו בדיוק המלכודת — לכל מספר יש שם עצם צמוד, וזה מה שקובע."
**מעבר:** 5/6.
**מקור:** L2 · טעות מתועדת: "Student confuses two numbers (85% and 40%)"

### 4.c.3.5 · P2 — מספר בשאלה
**מיומנות:** התלמיד סורק מספר שנמצא ליד שם העצם שבשאלה, ולא כל מספר בטקסט.
**מסך ההסבר:**
> `How many trees...` — אתה לא מחפש מספרים. אתה מחפש את המילה `trees`, ואז מסתכל מה צמוד אליה. ככה אתה לא נופל על `15 gardens` או `300 volunteers` שנמצאים באותה פסקה בדיוק.

**תרגיל:** GAP · 4 פריטים
| השאלה | התשובה |
|---|---|
| "How many trees did the charity plant in Greenville?" | *The charity planted* **over 2,000 trees** |
| "How many hours a week did the volunteers spend in the gardens?" | *The volunteers spent an average of* **three hours a week working in the gardens** |
| "How many students did Dr. Fatima Hasan study?" (SLEEP DEBATE) | *She studied* **3,000 high school students** |
| "How many people currently have no access to safe drinking water?" (WATER CRISIS) | *Over* **2 billion people** |

**מעבר:** 3/4 · מקבלים ניסוחים חלופיים סבירים.
**מקור:** L2 · Q1 · L5 T1 · L7 T1

### 4.c.3.6 · מספר אמיתי, הקשר שגוי
**מיומנות:** התלמיד פוסל אפשרות שמצטטת מספר קיים בטקסט אך עונה על שאלה אחרת.
**מסך ההסבר:**
> "המספר מופיע בטקסט" הוא לא נימוק. ברוב שאלות הרב-ברירה, לפחות מסיח אחד בנוי בדיוק ככה: מספר אמיתי, מהפסקה הנכונה — אבל הוא עונה על שאלה שלא נשאלה.

**תרגיל:** MCQ · 4 פריטים · לכל אפשרות שגויה נדרש נימוק
פריט מלא: *"What do we learn from Professor James Wu about the results of the project? (paragraph III)"*
- i) Why he decided to study the Greenville project ✗ — הסיבה שלו לא מוזכרת בכלל
- ii) How stress levels changed among residents ✓ — *"stress levels among residents had fallen by 40%"*
- iii) How many people visited Greenville from other countries ✗ — **50 מדינות הוא נתון אמיתי מפסקה III, אבל הוא על הפרויקט, לא על ממצאיו של Wu**
- iv) Why he disagrees with Dr. Santos's findings ✗ — אין מחלוקת בטקסט

**משוב על טעות (iii):** "המספר אמיתי ומהפסקה הנכונה. אבל השאלה שאלה מה **Wu מצא** — ו-50 המדינות אינן ממצא שלו. שם בשאלה מצמצם את החיפוש לממצא שלו בלבד."
**מעבר:** 3/4.
**מקור:** L2 · "Key teaching point: option iii) uses a real number — classic distractor"

### 4.c.3.7 · שער סקשן 3
**תרגיל:** CHECK · שלב סימון + 3 שאלות · TIMED 8 דקות · טקסט SPORT FOR ALL
יעדי סימון: `4,000 residents` · `two years` · `three times a week` · `12 neighbourhoods` · `60%`
שאלה: "According to Professor Marcus Allen, how did the programme affect participants' health?" → **60% less likely to suffer from stress-related health problems**
**מעבר:** 80%.

---

## Section 4 · Eye Catchers · שמות
**מקור:** L2 · דפוס P3 · טקסטים CITY GARDEN · SPORT FOR ALL
**יעד הסקשן:** שם בשאלה = כתובת פסקה. התלמיד קורא רק את הפסקה של אותו אדם.

### 4.c.4.1 · מה נחשב שם
**מיומנות:** התלמיד מזהה שם פרטי, תואר, מוסד ועיר כמצביעי מיקום.
**מסך ההסבר:**
> "שם" הוא לא רק שם של בן אדם. גם `Greenville`, גם `University of Oslo`, גם `Global Forest Watch` — כולם מתנהגים אותו דבר: הם מופיעים במקום אחד בטקסט, ולכן הם כתובת. הסימן החיצוני הוא אות גדולה באמצע משפט.

**תרגיל:** CLASSIFY · 8 פריטים · "שם" מול "לא שם"
שמות: `Greenville` · `Dr. Maria Santos` · `University of Oslo` · `Professor James Wu`
לא שמות: `residents` · `a local charity` · `volunteers` · `city planners`
**משוב:** "`a local charity` מופיע בטקסט אבל אינו שם — אין לו אות גדולה, והוא יכול לחזור בכל פסקה. שם הוא ייחודי."
**מעבר:** 7/8.
**מקור:** L2 · legend

### 4.c.4.2 · סימון שם במשפט
**מיומנות:** סימון מהיר של שמות בתוך משפט.
**תרגיל:** MARK · 8 משפטים
| המשפט | יעדים |
|---|---|
| "The person behind this change is Dr. Maria Santos, a professor at Greenville University." | `Dr. Maria Santos` · `Greenville University` |
| "Professor James Wu found that stress levels had fallen by 40%." | `Professor James Wu` |
| "says Dr. Anna Klein, a sports psychologist at the University of Oslo" | `Dr. Anna Klein` · `University of Oslo` |
| "According to Dr. Laura Kim, who runs the programme..." | `Dr. Laura Kim` |
| "Professor Marcus Allen of Portland State University found..." | `Professor Marcus Allen` · `Portland State University` |
| "says Dr. Yuki Tanaka, a language researcher at Tokyo University" | `Dr. Yuki Tanaka` · `Tokyo University` |
| "Five years ago, the streets of Greenville had almost no plants." | `Greenville` |
| "A new community sports programme in the city of Portland..." | `Portland` |

**מעבר:** 90%.

### 4.c.4.3 · טבלת שם ← פסקה
**מיומנות:** לפני שעונים על שאלות, התלמיד ממפה כל שם לפסקה שלו.
**מסך ההסבר:**
> עשרים שניות שחוסכות חמש דקות: לפני שאתה קורא את השאלות, עבור על הטקסט וסמן את השמות. עכשיו יש לך מפה. כל שאלה שמזכירה שם — אתה כבר יודע לאן ללכת, בלי לחפש.

**תרגיל:** MARK + CLASSIFY · טקסט CITY GARDEN מלא
| שם | פסקה |
|---|---|
| Greenville | I (וגם השאר — זו העיר של כל הטקסט) |
| Dr. Maria Santos | II |
| Greenville University | II |
| Professor James Wu | III |

**מעבר:** מיפוי מלא ונכון.
**מקור:** L2 · "Which paragraph has Dr. Santos in it? → II"

### 4.c.4.4 · P3 — לקרוא רק אצלו
**מיומנות:** התלמיד קורא את הפסקה של השם שבשאלה בלבד.
**מסך ההסבר:**
> שם בשאלה → הפסקה שלו → תשובה. אל תיגע בפסקאות האחרות. הן קיימות כדי לבלבל אותך: הן מכילות מידע אמיתי שלא רלוונטי לשאלה הזו.

**תרגיל:** GAP · 4 פריטים
| השאלה | התשובה |
|---|---|
| "According to Dr. Maria Santos, what did her team want to show?" | *that any city can become greener in less than ten years* |
| "According to Dr. Anna Klein, why do adults become stronger swimmers?" | *because adults understand what the teacher explains and can correct their mistakes more quickly* (או: *they are not afraid to ask questions*) |
| "According to Professor Yuki Tanaka, what is more important than the number of hours slept?" | *the quality of sleep* |
| "According to Dr. Layla Ahmed, what is the most effective solution?" | *to invest in local water treatment systems rather than relying on international aid* |

**משוב על קריאת פסקאות נוספות (נמדד לפי זמן שהות):** "הגעת לפסקה הנכונה — אבל קראת גם את השאר. זה הזמן שיחסר לך בכתיבה."
**מעבר:** 3/4.
**מקור:** L2 Q2 · L1 Q2 · L5 T2 · L7 T2

### 4.c.4.5 · מי אמר מה
**מיומנות:** התלמיד מייחס ציטוט או ממצא למומחה הנכון כששניים מופיעים באותו טקסט.
**מסך ההסבר:**
> ברוב טקסטי מודול C יש שני מומחים, ולעתים הם חלוקים. זה לא במקרה: המסיח הכי יעיל הוא ממצא אמיתי — של האדם הלא נכון. לפני שאתה עונה, ודא של מי הממצא.

**תרגיל:** MCQ · 5 פריטים
| הציטוט / הממצא | של מי |
|---|---|
| "We bring the sport to the people, not the people to the sport" | Dr. Laura Kim (SPORT FOR ALL) |
| ממצא: משתתפים 60% פחות סובלים מבעיות בריאות | Professor Marcus Allen |
| "We wanted to show that any city can become greener" | Dr. Maria Santos |
| ממצא: רמות הלחץ ירדו ב-40% | Professor James Wu |
| "A teenager who sleeps seven hours without interruption benefits more" | Professor Yuki Tanaka (SLEEP DEBATE) |

**משוב על טעות:** "זה ממצא אמיתי מהטקסט — אבל של החוקר השני. שאלה שמזכירה שם מבקשת רק את מה ש**הוא** אמר או מצא."
**מעבר:** 4/5.
**מקור:** L2 · L5 · שני מומחים בכל טקסט

### 4.c.4.6 · שם ומספר באותה שאלה
**מיומנות:** התלמיד בוחר את המצביע הספציפי יותר.
**מסך ההסבר:**
> כששאלה מכילה גם שם וגם מספר — התחל מהשם. השם מצמצם לפסקה אחת; המספר יכול להופיע בכמה מקומות. אחרי שאתה בפסקה הנכונה, המספר הוא מה שמאתר את המשפט.

**תרגיל:** MCQ · 4 פריטים · "לפי מה מנווטים קודם?"
דוגמה: *"How many hours a week did the volunteers spend in the gardens? (paragraph II)"* → קודם `volunteers` בפסקה II, ואז המספר → **three hours a week**
**מעבר:** 3/4.
**מקור:** L2 · WE DO Q3

### 4.c.4.7 · שער סקשן 4
**תרגיל:** CHECK · TIMED 8 דקות · טקסט SPORT FOR ALL
- T1: "According to Professor Marcus Allen, how did the programme affect participants' health?" → **Participants were 60% less likely to suffer from stress-related health problems**
- T2: "What does Dr. Laura Kim explain about the programme?" → **iii) Why the programme brings sport to different neighbourhoods**
**מעבר:** 80%.

---

# חלק ג׳ — סקשנים 5–9: שלילה, הגבלה, ניגוד, רמזור, שאלות פרט

## Section 5 · Eye Catchers · מילות שלילה
**מקור:** L3 · דפוס P4 · טקסטים GIVING TIME, GAINING HAPPINESS · THE SLEEP QUESTION · THE BOREDOM STUDY
**יעד הסקשן:** התלמיד עוצר אוטומטית כשהוא רואה NOT בשאלה, ומחליף את כיוון החיפוש.
**למה זה הסקשן המסוכן:** לפי תיעוד המורה, זו הטעות הנפוצה ביותר בשלב הזה — התלמיד רואה NOT, מתעלם ממנו, ובוחר משפט **נכון**. הוא מרגיש בטוח בתשובה, ומקבל אפס.

### 4.c.5.1 · מילון השלילה
**מיומנות:** זיהוי שבע מילות השלילה הנפוצות.
**מסך ההסבר:**
> שלילה באנגלית לא תמיד נראית כמו "not". `cannot`, `never`, `without`, `no`, `fail to`, `hardly`, `almost no` — כולן הופכות את משמעות המשפט. מילה אחת כזאת, ומשפט שנראה חיובי אומר בדיוק ההפך.

**תרגיל:** VOCAB · 7 מילים
| מילה | עברית | דוגמה מהטקסטים |
|---|---|---|
| not | לא | "not all types produce the same results" |
| never | אף פעם לא | "never try to learn" |
| cannot | לא יכול | "over 30% of adults cannot swim" |
| no | אין / שום | "no app can replace a real conversation" |
| without | בלי | "to give their time to help others without payment" |
| almost no | כמעט ואין | "the streets of Greenville had almost no plants" |
| fail to | לא מצליח ל | |

**מעבר:** 6/7.

### 4.c.5.2 · סימון שלילה בטקסט
**מיומנות:** סימון כל מילות השלילה בפסקה.
**מסך ההסבר:**
> שלילה היא Eye Catcher כי היא משנה את המשמעות של כל המשפט. סמן אותה תוך כדי קריאה — ואז כשתגיע לשאלה, אתה כבר יודע איפה נמצאים המשפטים ההפוכים.

**תרגיל:** MARK · טקסט GIVING TIME, GAINING HAPPINESS · 8 יעדים
יעדים: `without payment` · `not the main reason` · `not all types` · `not online activities` · `are not limited to` · `no classroom can ever replace` · ועוד
**מעבר:** 90% · עד 2 מיותרים.
**מקור:** L3 · ספירת המורה: "Negative words: without, not, not, However, not all, not, not, no → 8"

### 4.c.5.3 · `not` מול `not all`
**מיומנות:** התלמיד מבחין בין שלילה מוחלטת לשלילה חלקית.
**מסך ההסבר:**
> `not` פירושו אף אחד. `not all` פירושו חלק כן וחלק לא — וזה הפוך לגמרי. כשהטקסט אומר `not all types of volunteering produce the same results`, הוא לא אומר ששום סוג לא עובד. הוא אומר שחלק מהסוגים כן. שאלות שלמות נופלות על ההבדל הזה.

**תרגיל:** CLASSIFY · 6 משפטים · "אף אחד לא" מול "חלק כן, חלק לא"
| המשפט | המשמעות |
|---|---|
| "not all types of volunteering produce the same results" | חלק מהסוגים כן |
| "No app can replace a real conversation." | אף אפליקציה לא |
| "not all experts agree" | חלק מהמומחים מסכימים |
| "Many of them never try to learn." | הם באמת לא מנסים |
| "not all of these improvements were caused by the forest itself" | חלק מהשיפור כן נגרם מהיער |
| "not all the students who handwrote scored higher" | חלק מהם כן קיבלו ציון גבוה יותר |

**משוב על טעות:** "`not all` אינו `not`. הטקסט לא שולל את כל הסוגים — הוא אומר שיש הבדל ביניהם. זו בדיוק ההבחנה שהשאלה בודקת."
**מעבר:** 5/6.
**מקור:** L3 · טעות מתועדת מספר 1

### 4.c.5.4 · P4 — NOT בשאלה = עצור
**מיומנות:** התלמיד מחליף את כיוון החיפוש כשהשאלה מכילה NOT.
**מסך ההסבר:**
> כשאתה רואה NOT בשאלה, עצור ואמור לעצמך במפורש: **אני לא מחפש מה נכון. אני מחפש את המשפט השקרי.** שלוש מהאפשרויות יהיו נכונות לחלוטין — הן לא התשובה. זה מרגיש הפוך, ולכן צריך לומר את זה בקול.

**תרגיל:** MCQ · 4 פריטים
פריט מלא — *"Which statement is NOT true according to paragraph II?"* (GIVING TIME)
- i) Dr. Okafor studied volunteering and mental health for ten years. — נכון, מופיע בטקסט
- ii) All types of volunteering produce the same results. ✓ **התשובה** — הטקסט אומר `not all types produce the same results`
- iii) Teenagers who volunteer feel less stressed than those who do not. — נכון
- iv) Dr. Okafor found that young volunteers sleep better. — נכון

**משוב על טעות:** "בחרת משפט **נכון**. זו בדיוק המלכודת של שאלת NOT: שלוש האפשרויות הנכונות אינן התשובה. חזור וחפש את היחידה שסותרת את הטקסט."
**מעבר:** 3/4.
**מקור:** L3 · Q1 + I DO script

### 4.c.5.5 · לבדוק את כל ארבע האפשרויות
**מיומנות:** בשאלת NOT התלמיד מסמן נכון/שקר לכל אפשרות לפני שבוחר.
**מסך ההסבר:**
> בשאלת NOT אין קיצור דרך. עבור על ארבע האפשרויות, ולכל אחת מצא משפט בטקסט שמאשר או סותר. האפשרות שנשארת בלי אישור — היא התשובה.

**תרגיל:** MCQ + MARK · 3 פריטים · לכל אפשרות: תיוג נכון/שקר + סימון משפט ההוכחה
פריט מלא — THE SLEEP QUESTION · *"Which statement is NOT true according to the text?"*
- i) Sleep quality is more important than sleep quantity — נכון: *"the quality of sleep matters more than the quantity"*
- ii) Six hours of deep sleep is more restful than nine hours of broken sleep — נכון: *"people who sleep for six hours of deep, uninterrupted sleep feel more rested"*
- iii) The number of hours you sleep is the most important factor ✓ **התשובה** — הטקסט אומר *"The most important factor is not the number of hours, but the depth of the sleep"*
- iv) Dr. Webb recommends avoiding screens before bed — נכון: *"She recommends that people avoid screens for at least one hour before going to bed"*

**מעבר:** 3/3 בסימון הנכון/שקר.
**מקור:** L3 · Timed Challenge

### 4.c.5.6 · שער סקשן 5
**תרגיל:** CHECK · 6 פריטים · טקסט THE BOREDOM STUDY
- T2: "Which statement is NOT true according to the text?" → **ii) All types of boredom have the same positive effect** — הטקסט: *"not all types of boredom have the same effect"*
**מעבר:** 80%.

---

## Section 6 · Eye Catchers · מילות הגבלה
**מקור:** L3 · דפוס P5 · טקסט GIVING TIME
**יעד הסקשן:** כשהשאלה או הטקסט מכילים `most`, `only`, `main` — התלמיד מצמצם לתשובה יחידה ופוסל כל אפשרות מכלילה.

### 4.c.6.1 · מילון ההגבלה
**מיומנות:** זיהוי שש מילות ההגבלה.
**מסך ההסבר:**
> `main`, `most`, `only`, `every`, `best`, `the main reason` — כל אחת מהן אומרת: יש כאן דבר אחד, לא כמה. כשמילה כזאת מופיעה בשאלה, התשובה הנכונה מדברת על דבר אחד מוגדר.

**תרגיל:** VOCAB · 6 מילים.
**מעבר:** 5/6.

### 4.c.6.2 · סימון בטקסט
**תרגיל:** MARK · טקסט GIVING TIME · יעדים: `main reason` (פסקה I) · `most effective` (פסקה II) · וב-SLEEP QUESTION: `most people`, `most important factor`
**מעבר:** 90%.
**מקור:** L3 · "Key limiters: main, most → 2"

### 4.c.6.3 · P5 — "most effective" פירושו אחד
**מיומנות:** התלמיד פוסל אפשרות שמכלילה כשהטקסט מגביל.
**מסך ההסבר:**
> הטקסט אומר: `the most effective programmes bring young people face to face with the people they help — not online activities`. שים לב מה נאמר כאן: לא "התנדבות עוזרת", אלא "**סוג אחד** של התנדבות הוא היעיל ביותר". תשובה שמדברת על התנדבות בכלל — שגויה, גם אם היא נכונה עובדתית.

**תרגיל:** MCQ · 4 פריטים
- ✓ "The most effective volunteering brings young people face to face with those they help."
- ✗ "All volunteering produces the same benefits." — סותר את `not all types`
- ✗ "Online volunteering is the most effective." — הפוך מהטקסט
- ✗ "Volunteering makes teenagers happy." — נכון בטקסט, אבל לא עונה על "מה הכי יעיל"

**משוב על טעות:** "בחרת אפשרות כללית. `most effective` בשאלה מחייב תשובה שמצביעה על **סוג אחד** — לא על התופעה כולה."
**מעבר:** 3/4.
**מקור:** L3 · טעות מתועדת: "sees 'most effective' but picks an option about all types"

### 4.c.6.4 · הגבלה בשאלה מול הגבלה בטקסט
**מיומנות:** התלמיד מזהה שהשאלה מבקשת סיבה אחת בלבד.
**מסך ההסבר:**
> `What is the main reason...` פירושו שבטקסט יש סיבה אחת שסומנה כעיקרית. תשובה שמונה שתי סיבות תיפסל — גם אם שתיהן מופיעות בטקסט.

**תרגיל:** MCQ · 4 פריטים · פסילת תשובות שמונות שתי סיבות
**מעבר:** 3/4.

### 4.c.6.5 · שער סקשן 6
**תרגיל:** CHECK · 5 פריטים · סימון + שאלות `most/only`
**מעבר:** 80%.

---

## Section 7 · Eye Catchers · ניגוד
**מקור:** L3 · דפוס P6 · טקסטים SLEEP QUESTION · BOREDOM STUDY · SCREEN TIME
**יעד הסקשן:** אחרי `however` נמצא המידע שהשאלה מחפשת — התלמיד ממשיך לקרוא במקום לעצור.

### 4.c.7.1 · מילון הניגוד
**מיומנות:** זיהוי חמש מילות הניגוד.
**מסך ההסבר:**
> `however`, `but`, `although`, `while`, `despite` — כולן אומרות אותו דבר: מה שאמרתי עד עכשיו, עכשיו אני הופך. ההבדל ביניהן הוא דקדוקי בלבד, ואליו נגיע בסקשן הכתיבה.

**תרגיל:** VOCAB · 5 מילים
| מילה | עברית | דוגמה |
|---|---|---|
| however | אולם / אבל | "However, experts say it is never too late." |
| but | אבל | "not the number of hours, but the depth of the sleep" |
| although | למרות ש | "Although it was free, nobody came." |
| while | בעוד ש | "Some programs meet once a week, while others offer three sessions." |
| despite | למרות | "Despite the problems, he succeeded." |

**מעבר:** 4/5.

### 4.c.7.2 · P6 — המידע החשוב נמצא אחרי
**מיומנות:** התלמיד ממשיך לקרוא אחרי מילת הניגוד במקום לעצור לפניה.
**מסך ההסבר:**
> תלמידים קוראים עד `however`, מוצאים משפט שנשמע כמו תשובה, ועוצרים. זו טעות: מילת הניגוד קיימת בדיוק כדי לבטל את מה שלפניה. המידע החדש — זה שהשאלה מחפשת — תמיד אחריה.

**תרגיל:** MARK · 6 פריטים · סימון החלק שאחרי מילת הניגוד
| המשפט | מה לסמן |
|---|---|
| "Most people know that sleep is important. **However**, a new study shows that the quality of sleep matters more than the quantity." | `the quality of sleep matters more than the quantity` |
| "Many of them feel embarrassed. **However**, experts say it is never too late." | `experts say it is never too late` |
| "Most experts agree that too much screen time can harm children. **However**, a new study suggests that screen time is not always harmful." | `screen time is not always harmful` |
| "The first group exercised 30 minutes. **However**, the second group reported feeling more energetic." | `the second group reported feeling more energetic` |
| "Boredom allows the brain to wander. **However**, she warns that not all types of boredom have the same effect." | `not all types of boredom have the same effect` |
| "Every year the world loses 15 billion trees. **However**, there are reasons to be hopeful." | `there are reasons to be hopeful` |

**משוב על סימון החלק שלפני:** "סימנת את מה שלפני `however` — וזה בדיוק מה שהמשפט בא לבטל. המידע החדש נמצא אחריה."
**מעבר:** 90%.
**מקור:** L3 · טעות מתועדת: "Student ignores 'however' — the important info is AFTER"

### 4.c.7.3 · הניגוד כתשובה חבויה
**מיומנות:** התלמיד מאתר תשובה שנמצאת רק במשפט שאחרי הניגוד.
**מסך ההסבר:**
> יש שאלות שהתשובה עליהן קיימת רק בחלק שאחרי `however`. מי שעוצר לפני, פשוט לא ימצא אותה בשום מקום ויחשוב שהשאלה קשה.

**תרגיל:** GAP · 4 פריטים
| השאלה | התשובה |
|---|---|
| "What does the text say about people who sleep for nine hours?" (SLEEP QUESTION) | *may not feel as rested as those who sleep six hours of uninterrupted sleep* |
| "What did the second group report?" (EXERCISE MYTH) | *feeling more energetic and less stressed* |
| "What type of boredom produced the result?" (BOREDOM STUDY) | *only passive boredom, such as watching a blank screen* |
| "What does Dr. Park's study suggest about screen time?" (SCREEN TIME) | *that screen time is not always harmful* |

**מעבר:** 3/4.

### 4.c.7.4 · ארבע המשפחות בטקסט אחד
**מיומנות:** סריקה אחת שמסמנת את כל ארבע המשפחות, בלי סימון-יתר.
**מסך ההסבר:**
> זה התרגיל שמאחד את כל מה שלמדת בסקשנים 3 עד 7. סריקה אחת, ארבעה סוגי סימון, לפני שקראת שאלה אחת. שים לב: המטרה היא **לצמצם**. אם סימנת חצי טקסט — לא סיננת כלום, וזה בדיוק כמו לא לסמן.

**תרגיל:** MARK · טקסט THE SLEEP QUESTION מלא · ~15 יעדים בארבעה צבעים
- מספרים: `six hours` · `nine hours` · `one hour`
- שמות: `National Sleep Research Centre` · `Dr. Claire Webb`
- שלילה: `not the number of hours`
- הגבלה: `Most people` · `the most important factor`
- ניגוד: `However` · `but`

**ניקוד:** כל יעד שסומן = נקודה. כל סימון מיותר מעבר לשניים = מינוס נקודה.
**מעבר:** 90% מהיעדים · עד 2 מיותרים.

### 4.c.7.5 · שער סקשן 7
**תרגיל:** CHECK · TIMED · סימון טקסט חדש + 3 שאלות שמכסות P4 · P5 · P6
**מעבר:** 80%.

---

## Section 8 · הרמזור — לבדוק לפני שעונים
**מקור:** L4 · דפוס P8 · טקסטים GIVING TIME · BOREDOM STUDY
**יעד הסקשן:** התלמיד יודע להבחין בין "אני יודע" לבין "אני מנחש", ופועל אחרת בכל מקרה.
**למה זה קיים:** בלי בדיקה עצמית, תלמיד לא יודע אילו תשובות שלו מסוכנות. הרמזור הופך תחושה מעורפלת להחלטה: לענות, לבדוק, או לסמן ולעבור.

### 4.c.8.1 · שלושת הצבעים
**מיומנות:** סיווג מצב לצבע.
**מסך ההסבר:**
> לפני כל תשובה, שאל את עצמך שאלה אחת: מה הצבע שלי?
> **אדום** — אני לא מבין את השאלה. **צהוב** — אני מבין את השאלה, אבל אין לי משפט מהטקסט שמוכיח את התשובה. **ירוק** — אני מבין את השאלה ויכול להצביע על המשפט. רק ירוק הוא תשובה סופית.

**תרגיל:** CLASSIFY · 6 מצבים
| המצב | הצבע |
|---|---|
| "יש לי משפט מהטקסט שאומר בדיוק את זה" | ירוק |
| "לא הבנתי מילה מרכזית בשאלה" | אדום |
| "נשמע הכי הגיוני מבין הארבע" | צהוב |
| "אני יודע את זה מהחיים" | צהוב |
| "מצאתי את זה בפסקה III כמו שהשאלה ביקשה" | ירוק |
| "אני לא בטוח מה השאלה מבקשת ממני" | אדום |

**מעבר:** 5/6.

### 4.c.8.2 · אדום — חזרה לשאלה, לא לטקסט
**מיומנות:** כשלא מבינים את השאלה, מפרקים את השאלה ולא מתרגמים את הטקסט.
**מסך ההסבר:**
> אדום פירושו שהבעיה בשאלה, לא בטקסט. אל תתחיל לתרגם פסקאות. חזור לשאלה, מצא את **המילה האחת** שלא הבנת, וטפל רק בה. אם מותר מילון — הוא לשאלה, לא לטקסט.

**תרגיל:** MCQ · 4 תרחישים
- "לא הבנתי מילה אחת בשאלה" → **תרגם את המילה הזו בלבד** (לא: תרגם את כל השאלה)
- "לא הבנתי את כל השאלה" → פרק לפי P1: מה מילות המפתח?
- "הטקסט מלא במילים שאני לא מכיר" → זה לא אדום; אתה לא צריך את רובן
- "אני לא יודע כלום על הנושא" → זה לא אדום; התשובה בטקסט

**משוב:** "תרגמת את כל השאלה כשמילה אחת הייתה חסרה. זה בזבוז זמן שיחסר לך אחר כך."
**מעבר:** 3/4.
**מקור:** L4 · טעויות מתועדות: "uses dictionary for text words" · "translates every word in the question when only ONE keyword was unclear"

### 4.c.8.3 · צהוב — לחפש משפט
**מיומנות:** התלמיד מזהה שתשובה בלי הוכחה היא צהובה, לא ירוקה.
**מסך ההסבר:**
> "נשמע נכון" הוא הצבע הצהוב. זה לא אומר שאתה טועה — זה אומר שעוד לא סיימת. חזור לטקסט וחפש משפט. מצאת — הפכת לירוק. לא מצאת בתוך 30 שניות — סמן ועבור.

**תרגיל:** MCQ · 5 תשובות עם נימוק · סיווג לצבע
**מעבר:** 4/5.

### 4.c.8.4 · ירוק אמיתי — הוכחה ועוד ניסוח
**מיומנות:** התלמיד מאמת ירוק בשתי דרישות: משפט הוכחה + יכולת לנסח את השאלה בעברית.
**מסך ההסבר:**
> ירוק דורש שני דברים, לא אחד: יש לי משפט מהטקסט, **וגם** אני יכול להגיד בעברית מה השאלה מבקשת. אם אתה לא מצליח להגיד את השאלה במילים שלך — אתה צהוב, גם אם מצאת משפט שנראה מתאים.

**תרגיל:** MARK + WRITE · 4 פריטים · סימון משפט + ניסוח השאלה בעברית בשלוש מילים
**משוב:** "סימנת משפט, אבל לא הצלחת לנסח מה נשאל. זה צהוב — ותשובות צהובות הן אלה שנופלות."
**מעבר:** 3/4.
**מקור:** L4 · טעות מתועדת: "marks GREEN but cannot explain the question in Hebrew — this is actually YELLOW"

### 4.c.8.5 · דירוג לפני הגשה
**מיומנות:** התלמיד מצמיד צבע לכל תשובה לפני שמסיים.
**מסך ההסבר:**
> בסוף כל סט שאלות, עבור על התשובות שלך וסמן לכל אחת צבע. הצהובות הן רשימת המשימות שלך אם נשאר זמן. זה גם מה שיגיד לך, אחרי הסימולציה, איפה בדיוק אתה מפסיד נקודות.

**תרגיל:** CLASSIFY · 4 תשובות שהתלמיד עצמו נתן בצומת קודם
**מעבר:** דירוג מלא.

### 4.c.8.6 · שער סקשן 8
**תרגיל:** CHECK · 6 פריטים · שאלות + דירוג צבע לכל אחת
**מעבר:** 80% בתשובות **וגם** התאמה בין הצבע שהתלמיד נתן לבין נכונות התשובה (מדד כיול).

---

## Section 9 · שאלות פרט
**מקור:** L5 · דפוס P9 · טקסטים THE SLEEP DEBATE · GIVING TIME
**יעד הסקשן:** תשובה קצרה, בלשון הטקסט, עם משפט הוכחה מסומן.

### 4.c.9.1 · מילות שאלות פרט
**מיומנות:** זיהוי הפורמט מתוך ניסוח השאלה.
**מסך ההסבר:**
> `mention`, `state`, `describe`, `according to the text` — כל אלה אומרים דבר אחד: התשובה כתובה בטקסט במפורש. אתה לא צריך להסיק, לפרש או לחשוב. אתה צריך למצוא.

**תרגיל:** VOCAB · 5 מילים · כולל `despite`, `improve`, `cause`, `require`, `quality` מ-Circle 2
**מעבר:** 4/5.

### 4.c.9.2 · קודם ההוכחה, אחר כך התשובה
**מיומנות:** התלמיד מסמן את משפט ההוכחה לפני שהוא כותב.
**מסך ההסבר:**
> סדר קבוע: קודם מסמנים את המשפט בטקסט, אחר כך כותבים. הסדר ההפוך — לכתוב מהזיכרון ואז לחפש הצדקה — הוא איך שתלמידים כותבים תשובות שנשמעות טוב ולא מדויקות.

**תרגיל:** MARK → GAP · 4 פריטים · שני שלבים לכל שאלה
| השאלה | משפט ההוכחה | התשובה |
|---|---|---|
| "How many students did Dr. Fatima Hasan study?" | *"examined 3,000 high school students over four years"* | 3,000 high school students |
| "According to Professor Tanaka, what is more important?" | *"the quality of sleep is more important than the quantity"* | the quality of sleep |
| "What did Dr. Okafor find about teenagers who volunteer?" | *"teenagers who volunteer feel less stressed and sleep better"* | they feel less stressed and sleep better |
| "What does Professor Mills argue?" | *"helping others teaches young people skills that no classroom can ever replace"* | that helping others teaches skills no classroom can replace |

**מעבר:** 3/4 · חובה סימון לפני כתיבה.
**מקור:** L5 · "Underline the proof sentence first, then write"

### 4.c.9.3 · במילים של הטקסט
**מיומנות:** התלמיד משתמש בלשון הטקסט ולא בניסוח עצמאי.
**מסך ההסבר:**
> אתה לא נבחן על יצירתיות. ניסוח מחדש מהראש מכניס שגיאות דקדוק ולפעמים משנה את המשמעות. קח את המילים מהטקסט, התאם אותן למשפט שלך, וזהו.

**תרגיל:** WRITE · 4 פריטים · rubric גלוי
rubric: (1) המילים מהטקסט (2) עונה על השאלה שנשאלה (3) משפט אחד
**מעבר:** 3 מתוך 3 קריטריונים בשלושה פריטים מתוך ארבעה.
**מקור:** L5 · טעות מתועדת: "writes their own opinion instead of text words"

### 4.c.9.4 · לספור מילים בתשובה
**מיומנות:** התלמיד מקצר תשובה ארוכה בלי לאבד תוכן.
**מסך ההסבר:**
> תשובה של 25 מילים לשאלה שביקשה תשובה אחת היא סיכון מיותר: כל משפט נוסף הוא הזדמנות לשגיאת דקדוק. תרגל לקצר.

**תרגיל:** WRITE · 3 פריטים · קיצור תשובה נתונה לשמונה מילים
**מעבר:** 2/3.
**מקור:** L5 · "gives a long answer when the question says ONE answer"

### 4.c.9.5 · שער סקשן 9
**תרגיל:** CHECK · TIMED · 4 שאלות פרט · טקסט SLEEP DEBATE
**מעבר:** 80% · לכל תשובה נדרש סימון הוכחה.

---

# חלק ד׳ — סקשנים 10–16: סוגי השאלות

## Section 10 · רב-ברירה ואלימינציה
**מקור:** L6 · טקסט THE SCREEN TIME DEBATE
**יעד הסקשן:** התלמיד פוסל שיטתית לפני שהוא בוחר, ומזהה את ארבעת סוגי המסיחים.

### 4.c.10.1 · ארבעת סוגי המסיחים
**מיומנות:** התלמיד מסווג מסיח לסוג ומסביר למה הוא שגוי.
**מסך ההסבר:**
> מסיחים במודול C אינם אקראיים. יש להם ארבעה סוגים, וברגע שאתה מזהה את הסוג, הפסילה מיידית:
> **1. פסקה שגויה** — נכון, אבל לא במקום שהשאלה ביקשה.
> **2. מידע נכון, שאלה אחרת** — עובדה אמיתית מהטקסט, שלא עונה על מה שנשאל.
> **3. נכון חלקית** — חצי מהמשפט נכון, חצי לא.
> **4. לא מוזכר** — נשמע הגיוני, לא קיים בטקסט.

**תרגיל:** CLASSIFY · 8 מסיחים אמיתיים מהשיעורים
| המסיח | הסוג |
|---|---|
| "Where they can find swimming classes" (בשאלה על פסקה I) | פסקה שגויה |
| "How many people visited Greenville from other countries" (בשאלה על Wu) | מידע נכון, שאלה אחרת |
| "Why he disagrees with Dr. Santos's findings" | לא מוזכר |
| "Why she chose to study children at Stanford" | לא מוזכר |
| "Watching videos for up to two hours" | נכון חלקית — הזמן והפעילות שגויים |
| "Why they are usually slower than children" | סותר את הטקסט |
| "Dr. Amara Diallo works for Global Forest Watch" (בשאלת רעיון מרכזי) | מידע נכון, שאלה אחרת |
| "Reading electronic books for more than one hour" | נכון חלקית |

**מעבר:** 6/8.

### 4.c.10.2 · "לא מוזכר" — הפסילה הזולה
**מיומנות:** התלמיד מוחק תחילה את מה שלא קיים בטקסט.
**מסך ההסבר:**
> תתחיל מהזול: מבין ארבע האפשרויות, בדרך כלל אחת או שתיים פשוט לא קיימות בטקסט. אתה לא צריך להבין אותן — רק לוודא שהמילים שלהן לא מופיעות. שתי פסילות בעשר שניות, ונשארת עם שתיים.

**תרגיל:** MCQ · 5 פריטים · שלב פסילה בלבד, בלי לבחור תשובה
**מעבר:** 4/5.

### 4.c.10.3 · מילה משותפת אינה תשובה
**מיומנות:** התלמיד לא בוחר אפשרות רק משום שהיא חוזרת על מילה מהשאלה.
**מסך ההסבר:**
> הבוחן יודע שהעין שלך מחפשת התאמה. לכן המסיח הכי מפתה הוא זה שמשתמש במילה מהשאלה או מהטקסט. חזרה על מילה אינה ראיה — ראיה היא משפט שעונה על מה שנשאל.

**תרגיל:** MCQ · 5 פריטים · לכל אפשרות: "יש מילה משותפת?" ו"עונה על השאלה?"
**משוב על טעות:** "בחרת את האפשרות שחזרה על מילה מהשאלה. זה פיתיון מכוון — בדוק אם היא באמת עונה."
**מעבר:** 4/5.
**מקור:** L6 · טעות מתועדת: "chooses the first option that mentions a word from the question"

### 4.c.10.4 · חובה לעבור על כל ארבע
**מיומנות:** התלמיד קורא את כל האפשרויות לפני שהוא בוחר.
**מסך ההסבר:**
> גם אם האפשרות הראשונה נראית מושלמת — קרא את ארבע. במודול C נפוץ שהאפשרות הראשונה נכונה **חלקית**, והרביעית נכונה במלואה.

**תרגיל:** MCQ · 4 פריטים · הממשק מחייב תיוג של כל אפשרות (פוסל / שומר) לפני ההגשה
**מעבר:** 3/4.
**מקור:** L6 · "does not check all four options before deciding"

### 4.c.10.5 · הכרעה בין השתיים ששרדו
**מיומנות:** התלמיד מכריע לפי משפט בטקסט, לא לפי תחושה.
**מסך ההסבר:**
> נשארת עם שתיים — זה הרגע הקובע. אל תבחר לפי "מה נשמע יותר טוב". חזור לטקסט וחפש את המילה שמפרידה ביניהן. בדרך כלל ההבדל הוא מילה אחת: מספר, מגבלה, או שם.

**תרגיל:** MCQ + MARK · 4 פריטים
פריט מלא — SCREEN TIME · *"What type of screen activity did Dr. Park find to be beneficial?"*
- i) Watching videos for up to two hours ✗
- ii) Playing online games with friends ✗
- iii) Creative activities like drawing or coding for up to one hour ✓ — *"creative screen activities — such as drawing or coding programmes"* + `up to one hour a day`
- iv) Reading electronic books for more than one hour ✗

**מעבר:** 3/4 · חובה סימון המילה המכריעה.

### 4.c.10.6 · שער סקשן 10
**תרגיל:** CHECK · 6 פריטים · טקסט SCREEN TIME
- T1: "What do we learn about the study led by Dr. Emily Park?" → **ii) How many children she studied and how old they were** (4,500 · גילאי 8–12)
**מעבר:** 80%.

---

## Section 11 · השלמת משפט
**מקור:** L7 · דפוס P10 · טקסטים THE JOB REVOLUTION · THE WATER CRISIS
**יעד הסקשן:** השלמה שמתאימה גם בתוכן וגם בדקדוק לפתיח שניתן.

### 4.c.11.1 · הפתיח מכתיב את ההמשך
**מיומנות:** התלמיד קורא את סוף הפתיח ומזהה איזה סוג מילה חייב לבוא אחריו.
**מסך ההסבר:**
> לפני שאתה מחפש בטקסט, הסתכל על שתיים-שלוש המילים האחרונות של הפתיח. `Adults who practice regularly ___` דורש פועל. `The government gives workers ___` דורש שם עצם. `no app can replace ___` דורש שם עצם. זה מצמצם לך את מה שאתה מחפש עוד לפני שהתחלת.

**תרגיל:** MCQ · 5 פריטים · "מה חייב לבוא אחרי?"
| הפתיח | מה נדרש |
|---|---|
| "Adults who practice regularly ___" | פועל |
| "The government of Singapore gives workers ___" | שם עצם |
| "According to Dr. Tanaka, no app can replace ___" | שם עצם |
| "Participants were ___" | תואר / ביטוי תיאורי |
| "Over ___ currently have no access to safe drinking water." | מספר + שם עצם |

**מעבר:** 4/5.

### 4.c.11.2 · P10 — מצא, התאם, בדוק
**מיומנות:** שלושת השלבים ברצף.
**מסך ההסבר:**
> שלושה שלבים תמיד באותו סדר: **מצא** את המשפט בטקסט · **התאם** רק את החלק שממלא את החור · **בדוק** שהמשפט המלא תקין דקדוקית. אנשים מדלגים על שלב 3, וזה בדיוק מה שעולה להם בנקודות.

**תרגיל:** GAP · 4 פריטים
| הפתיח | התשובה | הטקסט |
|---|---|---|
| "The government of Singapore gives workers ___" | *500 dollars a year to spend on training courses* | JOB REVOLUTION III |
| "Adults who practice regularly ___" | *usually make good progress in less than two months* | SWIM III |
| "Over ___ currently have no access to safe drinking water." | *2 billion people* | WATER CRISIS |
| "The three most important skills are ___" | *critical thinking, digital literacy, and communication* | JOB REVOLUTION II |

**מעבר:** 3/4.
**מקור:** L7 · I DO + WE DO

### 4.c.11.3 · לא להתחיל משפט חדש
**מיומנות:** התלמיד ממשיך את המשפט הקיים ולא כותב משפט עצמאי.
**מסך ההסבר:**
> `Complete the sentence` פירושו שהמשפט כבר התחיל. אתה ממשיך אותו. תלמידים כותבים משפט שלם חדש — והתוצאה היא משפט כפול שאינו תקין: *"Adults who practice regularly. They make good progress."*

**תרגיל:** MCQ · 4 פריטים · שתי השלמות לאותו פתיח, אחת יוצרת משפט תקין
**משוב:** "כתבת משפט חדש. קרא את המשפט המלא בקול — הוא לא מתחבר. ההשלמה צריכה להמשיך את מה שכבר כתוב."
**מעבר:** 3/4.
**מקור:** L7 · טעות מתועדת: "answers with a full new sentence instead of completing the given one"

### 4.c.11.4 · יחיד/רבים וזמן בתוך ההשלמה
**מיומנות:** התלמיד מתאים את הפועל לנושא של הפתיח.
**מסך ההסבר:**
> הפתיח קובע את הנושא. `Adults` הוא רבים — לכן `make` ולא `makes`. אם העתקת מהטקסט משפט שהנושא שלו יחיד, אתה חייב להתאים.

**תרגיל:** GAP · 5 תיקונים
| שגוי | תקין |
|---|---|
| "Adults who practice regularly **makes** good progress." | make |
| "Workers who complete a course **is** less likely to lose their jobs." | are |
| "The government **give** every worker 500 dollars." | gives |
| "Participants **was** 60% less likely to suffer." | were |
| "Teenagers who volunteer **feels** less stressed." | feel |

**מעבר:** 4/5.

### 4.c.11.5 · לקצר בדיוק לחור
**מיומנות:** התלמיד לוקח מהטקסט רק את החלק הנדרש.
**מסך ההסבר:**
> אל תעתיק משפט שלם לתוך החור. הפתיח כבר מכיל חצי מהמידע — אם תעתיק הכול, תקבל כפילות: *"no app can replace no app can replace a real conversation"*.

**תרגיל:** WRITE · 4 פריטים · קיצור העתקה מלאה להשלמה מדויקת
דוגמה: הטקסט *"No app can replace a real conversation"* + הפתיח *"According to Dr. Tanaka, no app can replace ___"* → **a real conversation**
**מעבר:** 3/4.

### 4.c.11.6 · שער סקשן 11
**תרגיל:** CHECK · 5 פריטים · טקסט WATER CRISIS
- T2: "According to Dr. Layla Ahmed, what is the most effective solution?" → *to invest in local water treatment systems rather than relying on international aid*
**מעבר:** 80%.

---

## Section 12 · שתי תשובות נכונות
**מקור:** L8 · דפוס P11 · טקסט THE READING DEBATE
**יעד הסקשן:** בדיוק שתי תשובות, לכל אחת הוכחה נפרדת.

### 4.c.12.1 · לזהות את הפורמט
**מיומנות:** התלמיד מבחין בין הוראת רב-ברירה להוראת שתי תשובות.
**מסך ההסבר:**
> `PUT A √ BY THE TWO CORRECT ANSWERS` הוא פורמט אחר לגמרי מ-`Circle the number of the correct answer`. הוא אף פעם לא אומר "הקף מספר". חצי מהטעויות בפורמט הזה הן פשוט אי-קריאה של ההוראה.

**תרגיל:** CLASSIFY · 6 הוראות אמיתיות · "רב-ברירה" מול "שתי תשובות"
**מעבר:** 5/6.
**מקור:** L8 · "the √ format never has 'circle the number'"

### 4.c.12.2 · P11 — מצאת אחת, המשך לחפש
**מיומנות:** התלמיד ממשיך לבדוק אחרי שמצא תשובה נכונה אחת.
**מסך ההסבר:**
> הטעות כאן היא טעות של הרגל: מצאת תשובה נכונה, המוח אומר "סיימתי". בפורמט הזה תמיד יש שנייה, והיא שווה אותו מספר נקודות.

**תרגיל:** MCQ · 4 פריטים · הממשק חוסם הגשה עם סימון אחד
פריט מלא — READING DEBATE · *"What do we learn about Dr. Yael Cohen's research?"*
- i) She studied teenagers in five different countries ✓ — *"across five countries"*
- ii) She found that reading on screens was less effective ✗ — הטקסט אומר את ההפך: *"reading on a screen was as effective as reading a printed book"*
- iii) She examined 6,000 teenagers in her study ✓ — *"examined reading habits among 6,000 teenagers"*
- iv) She argues that schools should change their reading curriculum ✗ — **זה Professor Lee, לא Dr. Cohen**

**מעבר:** 3/4 עם שתי בחירות נכונות בכל פריט.

### 4.c.12.3 · הוכחה נפרדת לכל אחת
**מיומנות:** התלמיד מסמן שני משפטי הוכחה שונים.
**מסך ההסבר:**
> שתי התשובות צריכות שני משפטים שונים. אם שתיהן נשענות על אותו משפט — כנראה אחת מהן שגויה.

**תרגיל:** MARK · 4 פריטים
**מעבר:** 3/4.
**מקור:** L8 · "finds two but does not check the evidence for both"

### 4.c.12.4 · שלוש היא טעות
**מיומנות:** התלמיד מסמן בדיוק שתיים.
**מסך ההסבר:**
> "יותר סימונים = יותר סיכוי" לא עובד כאן. שלושה סימונים פוסלים את התשובה גם אם שתיים מהן נכונות.

**תרגיל:** MCQ · 3 פריטים · בדיקת ספירה לפני הגשה
**מעבר:** 3/3.

### 4.c.12.5 · שער סקשן 12
**תרגיל:** CHECK · 4 פריטים · טקסט READING DEBATE
- T2: "What does Professor Sam Lee argue about reading in schools?" → *a daily activity in all subjects, not only in language classes*
**מעבר:** 80%.

---

## Section 13 · שאלות התייחסות
**מקור:** L9 · דפוס P7 · טקסטים THE EXERCISE MYTH · THE FOREST EXPERIMENT · THE MEMORY STUDY
**יעד הסקשן:** התלמיד יודע בוודאות למה מתייחס `it / they / this`, ומאמת בהצבה.

### 4.c.13.1 · מילון ההפניה
**מיומנות:** זיהוי הכינויים והבחנה בין `it` ל-`this`.
**מסך ההסבר:**
> `it` מפנה בדרך כלל לדבר. `this` מפנה בדרך כלל לרעיון או לממצא שהוזכר. `they` לרבים. ההבחנה הזו לבדה פותרת חלק מהשאלות עוד לפני החיפוש.

**תרגיל:** VOCAB · 6 מילים · `it` · `they` · `this` · `these` · `them` · `refer to`
**מעבר:** 5/6.

### 4.c.13.2 · P7 — משפט אחד אחורה
**מיומנות:** התלמיד קורא את המשפט שלפני הכינוי ומחפש בו שם עצם.
**מסך ההסבר:**
> אל תסרוק את הפסקה. התשובה כמעט תמיד בשם העצם האחרון של המשפט הקודם. זה כלל מכני — קרא משפט אחד אחורה, קח את שם העצם.

**תרגיל:** MARK · 5 פריטים
| הכינוי | המשפט הקודם | התשובה |
|---|---|---|
| "**They** found that stress levels fell by 35%" | *"Scientists at Uppsala University in Sweden have been studying..."* | the scientists at Uppsala University |
| "**It** requires people to process and rephrase the information" | *"...people remember information better when they write it by hand"* | handwriting |
| "**They** also reported feeling more energetic" | *"The second group did seven minutes of intense exercise three times a day."* | the groups of volunteers / participants |
| "Once **they** are gone, they cannot easily be replaced" | *"...says Dr. Amara Diallo"* על היערות | the forests |
| "**This** finding challenges everything experts have said" | *"short bursts of intense exercise can be just as effective as longer workouts"* | the finding that short exercise is as effective |

**מעבר:** 4/5.
**מקור:** L9 · L10 · I DO scripts

### 4.c.13.3 · לא באותו משפט
**מיומנות:** התלמיד פוסל שם עצם שנמצא באותו משפט עם הכינוי.
**מסך ההסבר:**
> שם עצם שנמצא באותו משפט עם הכינוי הוא בדרך כלל **לא** התשובה — כי אם הוא היה שם, לא היה צורך בכינוי מלכתחילה. העין נמשכת למילה הקרובה; ההיגיון אומר להסתכל אחורה.

**תרגיל:** MCQ · 4 פריטים
**משוב:** "בחרת את המילה הקרובה ביותר לכינוי. בדוק אם היא באותו משפט — אם כן, כמעט תמיד זו לא התשובה."
**מעבר:** 3/4.
**מקור:** L9 · "chooses a noun that is in the same sentence as the pronoun — usually wrong"

### 4.c.13.4 · מבחן ההצבה
**מיומנות:** התלמיד מציב את שם העצם במקום הכינוי ובודק היגיון.
**מסך ההסבר:**
> אחרי שבחרת — הצב. קרא את המשפט כשבמקום הכינוי נמצא שם העצם שבחרת. *"Handwriting requires people to process and rephrase the information."* הגיוני. אם המשפט נשמע מוזר — טעית.

**תרגיל:** MCQ + WRITE · 4 פריטים · כתיבת המשפט המלא אחרי ההצבה
**מעבר:** 3/4.
**מקור:** L9 · טעות מתועדת: "does not do the substitution test — they guess"

### 4.c.13.5 · יחיד/רבים כמסנן מהיר
**מיומנות:** התלמיד פוסל אפשרויות לפי התאמת מספר.
**מסך ההסבר:**
> `They` לא יכול להפנות לשם עצם ביחיד. `It` לא יכול להפנות לרבים. עשר שניות של בדיקה מספרית פוסלות לך שתי אפשרויות בלי לחשוב על התוכן.

**תרגיל:** MCQ · 5 פריטים
**מעבר:** 4/5.

### 4.c.13.6 · שער סקשן 13
**תרגיל:** CHECK · 5 פריטים · טקסט FOREST EXPERIMENT
- T1: *"They found that stress levels fell by an average of 35%"* → **the scientists at Uppsala University**
- T2: "According to Professor Anna Lindgren, what does she plan to do next?" → *repeat the experiment with a group that walks in a city, not a forest*
**מעבר:** 80%.

---

## Section 14 · שאלות הסקה
**מקור:** L10 · דפוס P13 · טקסטים THE EXERCISE MYTH · THE MEMORY STUDY
**יעד הסקשן:** מסקנה שנשענת על שני נתונים מהטקסט — ולא על ידע חיצוני.

### 4.c.14.1 · לזהות שאלת הסקה
**מיומנות:** התלמיד מבחין בין שאלת פרט לשאלת הסקה.
**מסך ההסבר:**
> `infer`, `imply`, `suggest`, `we can understand` — כשאחת מאלה מופיעה, אין בטקסט משפט אחד עם התשובה. אם תחפש אותו, תבזבז זמן ותתייאש. במקום זה — תחפש שני נתונים ותחבר.

**תרגיל:** CLASSIFY · 6 שאלות · "פרט" מול "הסקה"
**מעבר:** 5/6.
**מקור:** L10 · "confuses inference with main idea — inference requires combining"

### 4.c.14.2 · שני נתונים לפני מסקנה
**מיומנות:** התלמיד מסמן שתי פיסות מידע לפני שהוא בוחר.
**מסך ההסבר:**
> הכלל: אין מסקנה לפני שני סימונים. סמן את הנתון הראשון, סמן את השני, ורק אז הסתכל על האפשרויות. תלמיד שניגש לאפשרויות עם נתון אחד — בוחר את מה שנשמע הכי הגיוני, וזה בדיוק המסיח.

**תרגיל:** MARK · 4 פריטים
דוגמה — EXERCISE MYTH: נתון 1 = *"The second group did seven minutes of intense exercise three times a day."* · נתון 2 = *"both groups had similar improvements"*
**מעבר:** 3/4 · חובה שני סימונים.

### 4.c.14.3 · P13 — לחבר ולהסיק
**מיומנות:** התלמיד מנסח מסקנה שנובעת משני הנתונים גם יחד.
**מסך ההסבר:**
> המסקנה חייבת לנבוע משני הנתונים. אם היא נובעת רק מאחד מהם — היא לא מספיקה. אם היא לא נובעת מאף אחד — היא מהראש שלך.

**תרגיל:** MCQ · 4 פריטים
פריט מלא — MEMORY STUDY · *"What can we infer about why handwriting improves memory?"*
- i) The pen is more comfortable than a keyboard ✗ — לא מוזכר
- ii) The brain works harder when processing information by hand ✓ — *"handwriting requires people to process and rephrase the information, rather than simply copying it"*
- iii) Writing is faster than typing ✗ — הטקסט אומר שכתיבה איטית דווקא פוגעת
- iv) Students who handwrite study for longer ✗ — לא מוזכר

**מעבר:** 3/4.

### 4.c.14.4 · "הגיוני" אינו "משתמע"
**מיומנות:** התלמיד פוסל מסקנה סבירה שאין לה בסיס בטקסט.
**מסך ההסבר:**
> ההבדל בין הסקה לניחוש: הסקה יש לה עקבות בטקסט. אתה יכול להצביע על שני משפטים ולהראות איך הם מובילים למסקנה. ניחוש הוא מה שנשמע הכי הגיוני — והוא בדיוק מה שהמסיח בנוי עליו.

**תרגיל:** CLASSIFY · 5 מסקנות · "נובע מהטקסט" מול "מהידע שלי"
**משוב:** "המסקנה שלך סבירה לגמרי — אבל אין לה שני נתונים בטקסט. במודול C זה נחשב תשובה שגויה."
**מעבר:** 4/5.
**מקור:** L10 · "brings in outside knowledge — 'but I know from real life that...'"

### 4.c.14.5 · הסקה מול רעיון מרכזי
**מיומנות:** התלמיד מבחין בין שני סוגי השאלות.
**מסך ההסבר:**
> רעיון מרכזי נמצא במשפט אחד — בדרך כלל הראשון בפסקה. הסקה מחייבת חיבור של שני מקומות. אם אתה מוצא את התשובה במשפט אחד, זו לא הייתה שאלת הסקה.

**תרגיל:** CLASSIFY · 4 פריטים.
**מעבר:** 3/4.

### 4.c.14.6 · שער סקשן 14
**תרגיל:** CHECK · TIMED · 4 פריטים · טקסט MEMORY STUDY + EXERCISE MYTH
**מעבר:** 80%.

---

## Section 15 · רעיון מרכזי
**מקור:** L11 · דפוס P12 · טקסטים THE LAST FORESTS · THE PLASTIC PROBLEM
**יעד הסקשן:** התלמיד בוחר תשובה שמכסה את כל הפסקה — לא פרט ולא הכללה.

### 4.c.15.1 · משפט הנושא
**מיומנות:** התלמיד מזהה את משפט הנושא ובודק אותו מול שאר הפסקה.
**מסך ההסבר:**
> ברוב הפסקאות במודול C, המשפט הראשון הוא הרעיון המרכזי. אבל אל תסתפק בזה — בדוק: האם כל שאר המשפטים בפסקה תומכים בו? אם כן, מצאת.

**תרגיל:** MARK · 5 פסקאות
דוגמה — LAST FORESTS פסקה I: *"Every year, the world loses approximately 15 billion trees."* — כל שאר הפסקה תומך בזה.
**מעבר:** 4/5.

### 4.c.15.2 · מוקדם אינו מרכזי
**מיומנות:** התלמיד פוסל פרט שמופיע בתחילת הפסקה.
**מסך ההסבר:**
> "זה הופיע בשורה הראשונה" אינו נימוק. פרט שמופיע מוקדם הוא עדיין פרט. השאלה היא לא איפה זה נמצא — אלא כמה מהפסקה זה מסביר.

**תרגיל:** CLASSIFY · 6 משפטים · "רעיון מרכזי" מול "פרט"
מ-LAST FORESTS פסקה I:
| המשפט | סיווג |
|---|---|
| "The worldwide loss of trees is a serious and growing problem" | רעיון מרכזי |
| "Dr. Amara Diallo works for Global Forest Watch" | פרט |
| "Forests covered 50% of the earth's surface 100 years ago" | פרט |
| "Trees cannot easily be replaced once destroyed" | פרט |
| "The world loses 15 billion trees every year" | פרט תומך |
| "Scientists are deeply worried" | פרט תומך |

**מעבר:** 5/6.
**מקור:** L11 · טעות מתועדת: "picks a detail mentioned early — 'early' does not mean 'main'"

### 4.c.15.3 · מבחן הכיסוי
**מיומנות:** התלמיד בודק לכל אפשרות כמה מהפסקה היא מסבירה.
**מסך ההסבר:**
> לכל אפשרות שאל: כמה מהפסקה היא מכסה? תשובה שמסבירה משפט אחד — פרט. תשובה שמסבירה את כל המשפטים — רעיון מרכזי. זה מבחן מכני, לא תחושה.

**תרגיל:** MCQ · 4 פריטים
פריט מלא — LAST FORESTS · *"What is the main idea of paragraph I?"*
- i) The worldwide loss of trees is a serious and growing problem ✓ — מכסה את כל הפסקה
- ii) Dr. Amara Diallo works for an organisation called Global Forest Watch ✗ — מכסה משפט אחד
- iii) Forests covered 50% of the earth's surface 100 years ago ✗ — מספר אחד
- iv) Trees cannot easily be replaced once they are destroyed ✗ — תוצאה אחת

**מעבר:** 3/4.

### 4.c.15.4 · רחב מדי נפסל גם הוא
**מיומנות:** התלמיד פוסל אפשרות כללית מדי.
**מסך ההסבר:**
> "הטקסט עוסק בסביבה" אינו רעיון מרכזי — זה נושא. רעיון מרכזי אומר **מה** נטען על הנושא. הבוחן שם תמיד אפשרות רחבה מדי, כי היא מרגישה בטוחה.

**תרגיל:** MCQ · 4 פריטים
דוגמה — PLASTIC PROBLEM: *"Plastic pollution in the oceans is a serious and growing problem that requires urgent action"* ✓ מול *"Plastic is bad for the environment"* ✗ (רחב מדי) ומול *"Microplastics have been found in human blood"* ✗ (פרט).
**מעבר:** 3/4.
**מקור:** L11 · "picks a very general option — too broad to be a main idea"

### 4.c.15.5 · כותרת בארבע מילים
**מיומנות:** התלמיד מנסח בעצמו רעיון מרכזי.
**מסך ההסבר:**
> אם אתה יכול לתת לפסקה כותרת של עד ארבע מילים, הבנת את הרעיון המרכזי שלה. אם הכותרת שלך מתארת רק חצי מהפסקה — לא הבנת.

**תרגיל:** WRITE · 3 פסקאות · כותרת עד 4 מילים
דוגמאות מקובלות ל-LAST FORESTS: פסקה I — *"Global tree loss"* · פסקה II — *"Causes of deforestation"* · פסקה III — *"Reasons for hope"*
**מעבר:** 2/3.

### 4.c.15.6 · שער סקשן 15
**תרגיל:** CHECK · 5 פריטים · טקסט PLASTIC PROBLEM
- T1 → **ii) Plastic pollution in the oceans is a serious and growing problem that requires urgent action**
**מעבר:** 80%.

---

## Section 16 · עמדת הכותב
**מקור:** L12 · טקסטים THE LAST FORESTS · THE CLEAN ENERGY TRANSITION
**יעד הסקשן:** התלמיד מזהה טון ומוכיח אותו במילה מהטקסט.

### 4.c.16.1 · מילות עמדה
**מיומנות:** זיהוי שש מילות העמדה הנפוצות.
**מסך ההסבר:**
> הכותב לא כותב "אני מודאג". הוא כותב `unfortunately`, `deeply worried`, `critical`, `alarming` — ואלה המילים שמסגירות את עמדתו. בשאלת טון, המילים האלה הן ה-Eye Catchers שלך.

**תרגיל:** VOCAB · 6 מילים
| מילה | עברית | מה היא מסגירה |
|---|---|---|
| unfortunately | למרבה הצער | הכותב עצוב או מודאג |
| fortunately | למרבה המזל | הכותב מקווה או מוקל |
| concerned | מודאג | דאגה ממצב רציני |
| cautiously | בזהירות | מקווה אך לא בטוח |
| alarming | מדאיג מאוד | דאגה חריפה |
| surprisingly | באופן מפתיע | הממצא נגד הציפייה |

**מעבר:** 5/6.

### 4.c.16.2 · מילות עמדה הן ה-Eye Catchers כאן
**מיומנות:** בשאלת טון התלמיד סורק תארים ותוארי פועל, לא עובדות.
**מסך ההסבר:**
> בשאלת טון, המספרים והשמות לא יעזרו לך. סרוק את התארים ותוארי הפועל: `deeply worried`, `critical`, `fortunately`, `not fast enough`. שם נמצאת התשובה.

**תרגיל:** MARK · 6 פריטים
| הטקסט | יעדי הסימון |
|---|---|
| LAST FORESTS פסקה I | `deeply worried` · `critical` · `cannot easily be replaced` |
| LAST FORESTS פסקה III | `there are reasons to be hopeful` · `it is possible` · `difficult choices` |
| CLEAN ENERGY | `Fortunately` · `not happening fast enough` · `need to triple` |

**מעבר:** 90%.
**מקור:** L12 · טעות מתועדת: "cannot find attitude words because they are not highlighted"

### 4.c.16.3 · ארבעת הטונים
**מיומנות:** סיווג משפט לאחד מארבעה טונים.
**מסך ההסבר:**
> ארבע אפשרויות בלבד: **מודאג** · **אופטימי** · **ביקורתי** · **ניטרלי**. ביקורתי פירושו שהכותב מאשים או דורש שינוי. ניטרלי פירושו שאין לו עמדה בכלל.

**תרגיל:** CLASSIFY · 8 משפטים
| המשפט | הטון |
|---|---|
| "Unfortunately, the situation is getting worse." | מודאג |
| "Fortunately, some countries are acting." | אופטימי |
| "Scientists are deeply worried." | מודאג |
| "The government has failed to act for a decade." | ביקורתי |
| "The study examined 3,000 students over four years." | ניטרלי |
| "There are reasons to be hopeful." | אופטימי |
| "The only question is whether governments have the political will." | ביקורתי |
| "Forests cover less than 30% of the earth's surface today." | ניטרלי |

**מעבר:** 6/8.

### 4.c.16.4 · ניטרלי אינו מאוזן
**מיומנות:** התלמיד מבחין בין היעדר עמדה לבין הצגת שני צדדים.
**מסך ההסבר:**
> טקסט שמציג שני מומחים חלוקים אינו "ניטרלי" — הוא מציג מחלוקת, ולכותב עדיין יכולה להיות עמדה. ניטרלי פירושו שאין שום מילה שמסגירה רגש: רק עובדות, מספרים ודיווח.

**תרגיל:** MCQ · 4 פריטים
**משוב:** "יש כאן שני צדדים — אבל זה לא הופך את הכותב לניטרלי. חפש מילות רגש: אם יש, יש עמדה."
**מעבר:** 3/4.
**מקור:** L12 · טעות מתועדת: "confuses neutral with balanced"

### 4.c.16.5 · לא לחזק את הטון
**מיומנות:** התלמיד בוחר את עוצמת הטון המדויקת.
**מסך ההסבר:**
> `cautiously optimistic` אינו `optimistic`. `concerned` אינו `angry`. הבוחן שם תמיד אפשרות שהיא הטון הנכון בעוצמה מוגזמת — והיא שגויה.

**תרגיל:** MCQ · 4 פריטים
פריט מלא — CLEAN ENERGY · *"What is the author's attitude in the text?"*
- i) Pessimistic — clean energy will never be affordable ✗ — סותר את *"cost has fallen by more than 80%"*
- ii) Fully optimistic — climate change has been solved ✗ — חזק מדי; הטקסט מזהיר במפורש
- iii) Cautiously hopeful but concerned about the speed of change ✓ — `Fortunately` + `not happening fast enough`
- iv) Neutral — reporting facts without any personal view ✗ — יש `Fortunately` ויש אזהרה

**מעבר:** 3/4.
**מקור:** L12 · טעות מתועדת: "picks optimistic when the text is cautiously hopeful"

### 4.c.16.6 · הכותב, לא אני
**מיומנות:** התלמיד מפריד בין דעתו לבין עמדת הכותב.
**מסך ההסבר:**
> השאלה אינה מה אתה חושב על יערות. השאלה היא מה **הכותב** חושב, ואיזו מילה שלו מוכיחה את זה.

**תרגיל:** MCQ · 4 פריטים · שתי אפשרויות בכל פריט: דעת הקורא מול עמדת הכותב
**מעבר:** 3/4.
**מקור:** L12 · "writes their own opinion about the topic instead of the author's"

### 4.c.16.7 · שער סקשן 16
**תרגיל:** CHECK · 5 פריטים · LAST FORESTS
- Q: "What is the author's attitude in paragraph I towards the loss of forests?" → **iii) Concerned and alarmed** · הוכחה: *"scientists are deeply worried"* + *"the situation is critical"*
**מעבר:** 80% · לכל תשובה נדרשת מילת הוכחה מסומנת.

---

# חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה

## Section 17 · בנק מילים · חברה וקהילה
**מקור:** L13 · Circles 1–3
**יעד הסקשן:** 20 מילים שהתלמיד גם מזהה בקריאה וגם מייצר בכתיבה.
**עיקרון:** לימוד בהקשר, לא ברשימה. כל מילה עוברת ארבעה שלבים — Notice (רואים אותה בטקסט) · Understand (מה היא אומרת כאן) · Adapt (איך אומרים את זה על נושא אחר) · Use (כותבים משפט).

### 4.c.17.1 · קהילה והתנדבות — 10 מילים
**תרגיל:** VOCAB · 10 מילים · שני סבבים

| מילה | עברית | בהקשר |
|---|---|---|
| community | קהילה | "The local community volunteered." |
| volunteer | מתנדב / להתנדב | "She volunteers twice a week." |
| responsible | אחראי | "Students became more responsible." |
| programme | תוכנית | "The training programme lasted two years." |
| opportunity | הזדמנות | "Volunteering is a great opportunity." |
| provide | מספק | "The programme provides free classes." |
| benefit | יתרון / להפיק תועלת | "The benefits go beyond happiness." |
| protect | מגן | "Laws protect the forests." |
| increase | עלה / גדל | "The number of trees increased." |
| resident | תושב | "85% of residents said..." |

**מעבר:** 8/10.

### 4.c.17.2 · חינוך ובריאות — 10 מילים
**תרגיל:** VOCAB · 10 מילים

| מילה | עברית | בהקשר |
|---|---|---|
| improve | לשפר | "Students improved their results." |
| effective | יעיל | "The most effective programmes..." |
| successful | מוצלח | "Students became more successful." |
| focused | ממוקד | "Students became more focused in class." |
| stress | לחץ | "Stress levels fell by 40%." |
| result | תוצאה | "The results showed that..." |
| require | דורש | "The task requires concentration." |
| quality | איכות | "The quality of sleep matters." |
| cause | גורם / סיבה | "Noise causes stress." |
| introduce | הכניס / הציג | "Schools introduced new programmes." |

**מעבר:** 8/10.

### 4.c.17.3 · Notice — זיהוי בהקשר
**מיומנות:** התלמיד מזהה את המילה בתוך טקסט רץ, לא ברשימה.
**מסך ההסבר:**
> מילה שלמדת ברשימה נשכחת. מילה שראית בתוך משפט נשארת. עכשיו תמצא את המילים של היום בתוך טקסט שכבר קראת.

**תרגיל:** GAP · 8 פריטים · השלמה מבנק מילים
| המשפט | המילה |
|---|---|
| "The local ___ volunteered." | community |
| "The programme ___ free fitness classes." | provides |
| "Students became more ___ in class." | focused |
| "The ___ of sleep matters more than the quantity." | quality |
| "Laws ___ the forests." | protect |
| "The most ___ programmes bring people face to face." | effective |
| "___ levels fell by 40%." | Stress |
| "The number of trees ___ by 40%." | increased |

**מעבר:** 6/8.

### 4.c.17.4 · community אינו country
**מיומנות:** התלמיד מבחין בין מילים קרובות בסקאלה.
**מסך ההסבר:**
> `community` היא קבוצת אנשים במקום מקומי — שכונה, בית ספר, עיר קטנה. לא מדינה, לא כיתה. `community centre` = מרכז קהילתי.

**תרגיל:** MCQ · 4 פריטים
**מעבר:** 3/4.
**מקור:** L13 · טעות מתועדת

### 4.c.17.5 · volunteer — שם עצם וגם פועל
**מיומנות:** התלמיד משתמש במילה בשני התפקידים.
**מסך ההסבר:**
> `a volunteer` = אדם. `to volunteer` = הפעולה. שתי הצורות זהות באנגלית, ולכן צריך לשים לב למה שסביבן: `She volunteers twice a week` (פועל) מול `300 volunteers worked there` (שם עצם).

**תרגיל:** GAP · 5 פריטים
| המשפט | הצורה |
|---|---|
| "She ___ twice a week." | volunteers — פועל |
| "More than 300 ___ joined the project." | volunteers — שם עצם |
| "Many teenagers want to ___ in their community." | volunteer — פועל |
| "He is a ___ at the local centre." | volunteer — שם עצם |
| "Students who ___ feel less stressed." | volunteer — פועל |

**מעבר:** 4/5.
**מקור:** L13 · טעות מתועדת

### 4.c.17.6 · benefit — שם עצם מול צירוף
**מיומנות:** התלמיד כותב `benefit from` ולא `benefit of`.
**מסך ההסבר:**
> `a benefit` = יתרון (שם עצם). `to benefit **from**` = להפיק תועלת מ־. הצירוף `benefit of` הוא השגיאה הנפוצה ביותר עם המילה הזו בכתיבה.

**תרגיל:** GAP · 5 פריטים
| המשפט | התשובה |
|---|---|
| "Workers benefit ___ the programme." | from |
| "The ___ of volunteering go beyond happiness." | benefits |
| "I benefit ___ playing sport." | from |
| "One ___ of volunteering is new skills." | benefit |
| "Students ___ from real-life experience." | benefit |

**מעבר:** 4/5.
**מקור:** L13 · L14 · טעות מתועדת פעמיים

### 4.c.17.7 · Use — משפט משלי
**מיומנות:** התלמיד מייצר משפט תקין עם המילה, בנושא שלו.
**מסך ההסבר:**
> זיהוי אינו ייצור. אתה יכול לזהות `opportunity` בטקסט ועדיין לא להצליח לכתוב איתה משפט. עכשיו כותבים.

**תרגיל:** WRITE · 3 משפטים · rubric: (1) המילה בשימוש נכון (2) נושא + פועל (3) לא העתקה מהטקסט
**מעבר:** 3/3 קריטריונים בשני משפטים מתוך שלושה.
**מקור:** L13 · "memorizes translation but cannot use the word in a sentence"

### 4.c.17.8 · שער אוצר מילים 1
**תרגיל:** CHECK · TIMED · 15 מילים · כתיבת העברית מהזיכרון
**מעבר:** 12/15.

---

## Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations
**מקור:** L14 · Circles 2–3
**יעד הסקשן:** 20 מילים + ארבעה צירופים שהופכים כתיבה לטבעית.

### 4.c.18.1 · טכנולוגיה — 10 מילים
**תרגיל:** VOCAB · 10 מילים

| מילה | עברית | הערה |
|---|---|---|
| research | מחקר | בלתי ספיר — אין `a research` |
| technology | טכנולוגיה | בלתי ספיר |
| develop | לפתח | "Companies develop new technologies." |
| replace | להחליף | "No app can replace a real conversation." |
| access | גישה | "access to clean water" |
| device | מכשיר | |
| suggest | מציע / מצביע על | "The study suggests that..." — לא ודאות מלאה |
| produce | מייצר | "Not all types produce the same results." |
| claim | טוען | אמירה שלא בהכרח הוכחה |
| limitation | מגבלה | "The study has serious limitations." |

**מעבר:** 8/10.

### 4.c.18.2 · סביבה — 10 מילים
**תרגיל:** VOCAB · 10 מילים

| מילה | עברית | הערה |
|---|---|---|
| environment | סביבה | `environmental` = תואר |
| prevent | למנוע | "Exercise prevents health problems." |
| destroy / destruction | להרוס / הרס | |
| severe | חמור | "more severe droughts" |
| warn | מזהיר | "Dr. Diallo warns about the forests." |
| individual | יחיד / אישי | "Every individual can make a difference." |
| cause | לגרום / סיבה | פועל וגם שם עצם |
| maintain | לשמור על | "cannot maintain this routine" |
| challenge | אתגר / לאתגר | "This challenges what experts believed." |
| similar | דומה | "The results were similar." |

**מעבר:** 8/10.

### 4.c.18.3 · research הוא בלתי ספיר
**מיומנות:** התלמיד כותב `research shows` ולא `a research`.
**מסך ההסבר:**
> באנגלית אין `a research` ואין `researches`. אומרים `research shows`, `research suggests`, `the research found`. זו שגיאה שקופצת לעין הבוחן מיד.

**תרגיל:** GAP · 5 תיקונים
| שגוי | תקין |
|---|---|
| "She did a research about exercise." | "She did research on exercise." / "Her research examined..." |
| "Many researches show that..." | "Much research shows that..." |
| "A research from Stanford found..." | "Research from Stanford found..." |
| "I read a research yesterday." | "I read a study yesterday." |
| "The researches are clear." | "The research is clear." |

**מעבר:** 4/5.
**מקור:** L14 · טעות מתועדת

### 4.c.18.4 · affect מול effect
**מיומנות:** התלמיד בוחר נכון בין הפועל לשם העצם.
**מסך ההסבר:**
> `affect` הוא פועל: *Noise affects sleep.* `effect` הוא שם עצם: *The effect is serious.* זהו זוג המילים הנפוץ ביותר בשגיאות של מודול C, והוא מופיע גם בקריאה וגם בכתיבה.

**תרגיל:** GAP · 6 פריטים
| המשפט | התשובה |
|---|---|
| "Noise ___ sleep." | affects |
| "The ___ of noise is serious." | effect |
| "Screen time can ___ children's sleep." | affect |
| "Volunteering has a positive ___ on teenagers." | effect |
| "How did the programme ___ participants' health?" | affect |
| "Not all types of boredom have the same ___." | effect |

**מעבר:** 5/6.
**מקור:** L4 · L14 · שתי הופעות

### 4.c.18.5 · ארבעת הצירופים לכתיבה
**מיומנות:** התלמיד משתמש בארבעה צירופים מוכנים.
**מסך ההסבר:**
> ידיעת מילה אינה מספיקה — צריך לדעת עם מה היא הולכת. ארבעה צירופים מוכנים שאפשר להכניס כמעט לכל פסקה: `an effective way to` · `benefit from` · `research shows / suggests` · `have a positive / negative effect on`. שנן אותם כיחידה אחת.

**תרגיל:** VOCAB + GAP · 8 פריטים
| המשפט | ההשלמה |
|---|---|
| "Volunteering is an effective way ___ build skills." | to |
| "Teenagers benefit ___ real-life experience." | from |
| "Research ___ that sleep matters." | shows / suggests |
| "Sport has a positive effect ___ mental health." | on |

**מעבר:** 6/8.

### 4.c.18.6 · effective חייב שם עצם אחריו
**מיומנות:** התלמיד לא כותב `It is effective` בלי המשך.
**מסך ההסבר:**
> `effective` צריך לענות על השאלה "יעיל למה". `It is effective` תלוי באוויר. כתוב `an effective way to improve...`, `an effective solution for...`.

**תרגיל:** WRITE · 4 תיקונים
**מעבר:** 3/4.
**מקור:** L15 · טעות מתועדת

### 4.c.18.7 · שער אוצר מילים 2
**תרגיל:** CHECK · TIMED · 15 פריטים · מילים + צירופים
**מעבר:** 12/15.

---

## Section 19 · מקריאה לכתיבה
**מקור:** L15 · טקסט GIVING TIME, GAINING HAPPINESS
**יעד הסקשן:** התלמיד לוקח מילים מטקסט קריאה ומשתמש בהן בנושא אחר.

### 4.c.19.1 · Notice — מה שווה לקחת
**מיומנות:** התלמיד מזהה צירופים שימושיים לכתיבה, לא מילים נדירות.
**מסך ההסבר:**
> כשאתה קורא טקסט בבחינה, אתה גם אוסף חומר לכתיבה שלך. אבל אל תיקח מילים נדירות — קח צירופים שאפשר להשתמש בהם בכל נושא: `the most effective`, `go beyond`, `according to many experts`, `plays an important role`.

**תרגיל:** MARK · 6 יעדים בטקסט GIVING TIME
יעדים: `the most effective programmes` · `go beyond` · `are not limited to` · `became more responsible` · `no classroom can ever replace` · `face to face`
**מעבר:** 4/6.

### 4.c.19.2 · Understand — מה זה אומר כאן
**תרגיל:** MCQ · 5 פריטים · בחירת המשמעות בהקשר
**מעבר:** 4/5.

### 4.c.19.3 · Adapt — לקחת את המבנה
**מיומנות:** התלמיד ממיר צירוף מהטקסט לנושא אחר.
**מסך ההסבר:**
> אתה לא מעתיק את המשפט — אתה לוקח את **המבנה** ומחליף את התוכן. הטקסט אומר `the most effective programmes bring young people face to face`. אתה כותב: `an effective way to improve my school is to bring students together`. אותו מבנה, נושא אחר.

**תרגיל:** WRITE · 4 המרות
| מהטקסט | המרה לדוגמה |
|---|---|
| "the most effective programmes bring young people face to face" | "an effective way to improve my school is to bring students together" |
| "the benefits go beyond simple happiness" | "the benefits of a part-time job go beyond money" |
| "skills that no classroom can ever replace" | "experience that no textbook can replace" |
| "students became more responsible and more focused" | "teenagers become more responsible when they work" |

**מעבר:** 3/4.

### 4.c.19.4 · העתקה אינה התאמה
**מיומנות:** התלמיד מזהה מתי הוא העתיק ולא התאים.
**מסך ההסבר:**
> משפט שהועתק כלשונו מהטקסט לא נחשב לכתיבה שלך. השינוי חייב להיות אמיתי: נושא אחר, או לפחות שם עצם ופועל שונים.

**תרגיל:** CLASSIFY · 5 משפטים · "הועתק" מול "הותאם"
**מעבר:** 4/5.
**מקור:** L15 · טעות מתועדת

### 4.c.19.5 · "according to me" אינו קיים
**מיומנות:** התלמיד כותב `in my opinion` או `I think`.
**מסך ההסבר:**
> `according to` משמש רק למישהו אחר: `according to Dr. Klein`, `according to the text`. על עצמך כותבים `in my opinion` או `I think that`. `according to me` לא קיים באנגלית.

**תרגיל:** GAP · 4 תיקונים
**מעבר:** 3/4.
**מקור:** L15 · טעות מתועדת

### 4.c.19.6 · שער סקשן 19
**תרגיל:** CHECK · 5 פריטים · Notice → Adapt → Use על טקסט חדש
**מעבר:** 80%.

---

## Section 20 · משפטים שעובדים
**מקור:** L16
**יעד הסקשן:** ארבעה משפטים תקינים על כל נושא, בלי חמש השגיאות היקרות.
**עיקרון:** כל חמש השגיאות בכתיבה נובעות מאותה בעיה — התלמיד לא בדק שיש נושא ופועל. הסקשן הופך את הבדיקה לאוטומטית.

### 4.c.20.1 · בלי פועל אין משפט
**מיומנות:** התלמיד מזהה משפט חסר פועל.
**מסך ההסבר:**
> `Many students jobs after school` נראה כמו משפט. הוא לא — אין בו פועל. זו השגיאה שהכי עולה נקודות בכתיבה, והיא גם הקלה ביותר לתפיסה: אחרי כל משפט שכתבת, שאל "איפה הפועל".

**תרגיל:** CLASSIFY · 8 פריטים · "משפט תקין" מול "חסר פועל"
| הפריט | סיווג |
|---|---|
| "Many students jobs after school." | חסר פועל |
| "Many students have jobs after school." | תקין |
| "Because sport." | חסר פועל ופסוקית |
| "Volunteering teaches responsibility." | תקין |
| "The benefits of volunteering." | חסר פועל |
| "Volunteering has many benefits." | תקין |
| "For example, many schools programmes for teenagers." | חסר פועל |
| "For example, many schools offer programmes for teenagers." | תקין |

**מעבר:** 6/8.

### 4.c.20.2 · מצא את הפועל
**תרגיל:** MARK · 6 משפטים · סימון הפועל
**מעבר:** 5/6.

### 4.c.20.3 · יחיד ורבים
**מיומנות:** התאמת פועל לנושא.
**מסך ההסבר:**
> `Students is` שגוי — רבים דורש `are`. `Working develop` שגוי — `working` הוא יחיד ודורש `develops`. עברו על כל משפט ובדקו: הנושא יחיד או רבים?

**תרגיל:** GAP · 6 תיקונים
| שגוי | תקין |
|---|---|
| "Students is good at sport." | are |
| "Many students has part-time jobs." | have |
| "Working develop important skills." | develops |
| "All student benefit from experience." | All students |
| "The programme provide free classes." | provides |
| "Teenagers who volunteer feels less stressed." | feel |

**מעבר:** 5/6.
**מקור:** L16 · L17 · error clinic

### 4.c.20.4 · זמנים — `I was think`
**מיומנות:** התלמיד לא מערבב זמנים.
**מסך ההסבר:**
> `I was think` אינו קיים. או `I think` (הווה), או `I thought` (עבר), או `I was thinking` (הווה ממושך בעבר). בכתיבת דעה — כמעט תמיד `I think`.

**תרגיל:** GAP · 5 תיקונים · כולל `"I was enjoy volunteering last year"` → **I enjoyed**
**מעבר:** 4/5.
**מקור:** L16 · L17

### 4.c.20.5 · בלי `the` בהכללה
**מיומנות:** התלמיד משמיט `the` במשפטי הכללה.
**מסך ההסבר:**
> כשמדברים על קבוצה בכללותה — בלי `the`. `Teenagers need more opportunities` ולא `The teenagers`. עם `the` המשמעות היא "אותם מתבגרים מסוימים שדיברנו עליהם".

**תרגיל:** GAP · 5 תיקונים
**מעבר:** 4/5.
**מקור:** L16 · טעות מתועדת

### 4.c.20.6 · `because` דורש פסוקית שלמה
**מיומנות:** התלמיד כותב נושא ופועל אחרי because.
**מסך ההסבר:**
> `Because sport` אינו משפט. אחרי `because` חייבים נושא ופועל: `because sport helps people relax`. וגם לפני because צריך משפט ראשי.

**תרגיל:** GAP · 5 תיקונים
**מעבר:** 4/5.

### 4.c.20.7 · מילה, צירוף, משפט
**מיומנות:** בנייה מדורגת במקום כתיבה מהראש.
**מסך ההסבר:**
> אל תנסה לכתוב משפט שלם בבת אחת. קח מילה, הפוך אותה לצירוף, ואז למשפט. `volunteer` → `to volunteer at a local centre` → `Many teenagers volunteer at a local centre after school.`

**תרגיל:** WRITE · 3 בניות מדורגות
**מעבר:** 2/3.

### 4.c.20.8 · ארבעה משפטים, ארבעה פעלים
**מיומנות:** התלמיד כותב ארבעה משפטים ובודק אותם בעצמו.
**תרגיל:** WRITE · פסקה של 4 משפטים + בדיקה עצמית מובנית (סימון הפועל בכל משפט)
**מעבר:** 4 פעלים מסומנים ותקינים.

### 4.c.20.9 · שער סקשן 20
**תרגיל:** CHECK · 8 פריטים · זיהוי ותיקון של חמש השגיאות
**מעבר:** 80%.

---

## Section 21 · מקשרים ומרפאת שגיאות
**מקור:** L17 · CONNECTOR DRILL · error clinic
**יעד הסקשן:** פסקה מחוברת, לא רשימת משפטים.

### 4.c.21.1 · חמשת המקשרים ותפקידם
**מיומנות:** התלמיד יודע מה כל מקשר עושה.
**מסך ההסבר:**
> חמישה מקשרים מספיקים לכל מטלת כתיבה במודול C. לכל אחד תפקיד אחד: `because` נותן סיבה · `however` מנגיד · `also` / `in addition` מוסיפים · `for example` מדגים · `although` מנגיד בתוך משפט אחד.

**תרגיל:** VOCAB · 5 מקשרים + התפקיד שלהם.
**מעבר:** 4/5.

### 4.c.21.2 · `because` לא פותח משפט עצמאי
**מיומנות:** התלמיד לא כותב משפט שמתחיל ב-because ואין בו פסוקית ראשית.
**מסך ההסבר:**
> `Because I like sport.` אינו משפט — זו חצי מחשבה. או `I do sport because I like it`, או `Because I like sport, I train every day`. תמיד שני חלקים.

**תרגיל:** MCQ · 5 פריטים · תקין / לא תקין
**מעבר:** 4/5.
**מקור:** L17 · error clinic פריט 2

### 4.c.21.3 · לא `however` ולא `but` יחד
**מיומנות:** התלמיד לא מכפיל מקשרי ניגוד.
**מסך ההסבר:**
> `However, but I think...` הוא ניגוד כפול. בחר אחד: `However, I think...` או `..., but I think...`.

**תרגיל:** MCQ · 4 פריטים
**מעבר:** 3/4.
**מקור:** L17 · error clinic פריט 3

### 4.c.21.4 · `also` מול `although`
**מיומנות:** התלמיד מבחין בין הוספה לניגוד.
**מסך ההסבר:**
> `also` מוסיף מידע באותו כיוון. `although` מנגיד. הן נשמעות דומה ומבלבלות — אבל הן עושות דברים הפוכים.

**תרגיל:** GAP · 6 פריטים
**מעבר:** 5/6.
**מקור:** L17 · טעות מתועדת

### 4.c.21.5 · `for example` בלי `that`
**מיומנות:** התלמיד כותב `For example, many students...`
**מסך ההסבר:**
> `For example that many students volunteer` שגוי. אחרי `for example` בא פסיק ואז שם עצם או משפט: `For example, many students volunteer.`

**תרגיל:** GAP · 4 תיקונים
**מעבר:** 3/4.
**מקור:** L17 · error clinic פריט 6

### 4.c.21.6 · מרפאת שגיאות — עשרה תיקונים
**מיומנות:** התלמיד מזהה ומתקן את עשר השגיאות הנפוצות.
**תרגיל:** WRITE · 10 תיקונים · מתוך ה-error clinic המקורי

| # | שגוי | תיקון |
|---|---|---|
| 1 | "Many students has part-time jobs." | have |
| 2 | "Because I think volunteering is important." | הוסף פסוקית ראשית או הסר את because |
| 3 | "However, but some students cannot find work." | הסר `but` |
| 4 | "The teenagers need more opportunities." | הסר `The` |
| 5 | "I was enjoy volunteering last year." | I enjoyed |
| 6 | "For example that many schools have programmes." | הסר `that` |
| 7 | "Working develop important skills." | develops |
| 8 | "In addition to I think it is a good idea." | In addition, I think... |
| 9 | "All student benefit from experience." | All students |
| 10 | "I believe volunteering is a good idea although." | "Although it takes time, I believe volunteering is a good idea." |

**מעבר:** 8/10.

### 4.c.21.7 · פסקה עם כל חמשת המקשרים
**מיומנות:** התלמיד כותב 70–90 מילים עם כל המקשרים.
**מסך ההסבר:**
> עכשיו מחברים הכול. פסקה אחת, 70–90 מילים, על "האם למתבגרים כדאי לעבוד בעבודה חלקית". חובה: כל חמשת המקשרים.

**תרגיל:** WRITE · פסקה אחת · rubric: 5 מקשרים · פועל בכל משפט · 70–90 מילים
**מודל לדוגמה (68 מילים — צריך עוד משפט):**
> *"I think that teenagers should have a part-time job because it teaches them important skills. For example, they learn to be responsible and to manage their time. However, some teenagers may find it difficult to balance work and school. Although this is a challenge, I believe the benefits are greater. In addition, having a job gives teenagers financial independence."*

**מעבר:** כל שלושת הקריטריונים.
**מקור:** L17 · YOU DO + מודל התשובה

### 4.c.21.8 · שער סקשן 21
**תרגיל:** CHECK · 6 פריטים · CONNECTOR DRILL המקורי
תשובות: 1. because · 2. However · 3. For example · 4. In addition · 5. Although
**מעבר:** 5/5 בתרגיל המקשרים.

---

## Section 22 · ניהול זמן
**מקור:** L18 · L19 · דפוס P15 · טקסט THE DEEP SEA MYSTERY
**יעד הסקשן:** התלמיד לא מאבד את מטלת הכתיבה בגלל שאלה קשה אחת.
**למה זה הסקשן המעשי ביותר בקורס:** לפי תיעוד המורה, רוב הנכשלים במודול C יודעים את החומר. הם נכשלים כי בזבזו 12 דקות על שאלה אחת ולא הספיקו לכתוב.

### 4.c.22.1 · לוח ה-90 דקות
**מיומנות:** התלמיד יודע את חלוקת הזמן בעל פה.
**מסך ההסבר:**
> 40 דקות קריאה · 20 דקות כתיבה · השאר לבדיקה ולחזרה לשאלות מסומנות. הכתיבה מתחילה בדקה 40 — גם אם לא סיימת את הקריאה. זה לא רעיון, זה כלל.

**תרגיל:** CLASSIFY · 5 פריטים · סידור שלבי הבחינה על ציר זמן
**מעבר:** סידור נכון מלא.

### 4.c.22.2 · P15 — סמן, עבור, חזור
**מיומנות:** התלמיד עוזב שאלה קשה בתוך 90 שניות.
**מסך ההסבר:**
> ההחלטה הזו אינה נתונה למשא ומתן. תקוע 90 שניות — סמן, עבור לשאלה הבאה, חזור בסוף אם יש זמן. "עוד דקה אחת" הוא איך שמאבדים את מטלת הכתיבה.

**תרגיל:** TIMED · 6 שאלות · שתיים מהן קשות במכוון; אחרי 90 שניות הממשק מציג רק את כפתור "סמן ועבור"
**מעבר:** התלמיד לא חרג ביותר משאלה אחת.
**מקור:** L18 · "P15 must be automatic, not negotiated"

### 4.c.22.3 · לתעד את הזמן בסימון
**מיומנות:** התלמיד רושם כמה זמן נשאר כשהוא מסמן שאלה.
**מסך ההסבר:**
> אם סימנת ארבע שאלות ונשארו לך שלוש דקות — אתה לא חוזר לכולן. תעד: לאיזו שאלה יש הכי הרבה סיכוי לתשובה מהירה. אליה תחזור ראשון.

**תרגיל:** MCQ · 4 תרחישים · "לאיזו שאלה לחזור ראשונה"
**מעבר:** 3/4.
**מקור:** L18 · "returns to marked questions but now has no time"

### 4.c.22.4 · רמזור ו-P15 יחד
**מיומנות:** התלמיד מזהה ששאלה אדומה היא מועמדת מיידית לסימון.
**מסך ההסבר:**
> אדום (לא מבין את השאלה) פירושו סמן ועבור — עכשיו. צהוב פירושו נסה 30 שניות למצוא הוכחה, ואז החלט. ירוק פירושו ענה והמשך. הרמזור הוא מה שמפעיל את P15.

**תרגיל:** CLASSIFY · 5 שאלות · צבע + החלטה
**מעבר:** 4/5.

### 4.c.22.5 · סט קריאה מלא בזמן
**תרגיל:** TIMED · טקסט THE DEEP SEA MYSTERY · 4 שאלות · 35 דקות
**מעבר:** סיום בזמן + 75% נכונות.

### 4.c.22.6 · כתיבה בזמן
**תרגיל:** TIMED · 20 דקות · 70–90 מילים
**מעבר:** בתוך הזמן, בטווח המילים.

### 4.c.22.7 · שער סקשן 22
**תרגיל:** CHECK · TIMED · קריאה + כתיבה ברצף · 55 דקות
**מעבר:** 80% + עמידה בחלוקת הזמן.

---

## Section 23 · YES או NO
**מקור:** L20 · דפוס P14 שלב 1
**יעד הסקשן:** עמדה ברורה תוך 30 שניות, בלי "שני הצדדים".

### 4.c.23.1 · מילות דעה
**מיומנות:** התלמיד פותח בניסוח נכון.
**מסך ההסבר:**
> `In my opinion` · `I believe that` · `I think that` — שלושתן תקינות. `According to me` אינו קיים. בחר אחת ותיצמד אליה.

**תרגיל:** VOCAB · 4 פריטים
**מעבר:** 3/4.

### 4.c.23.2 · "שני הצדדים" מוריד נקודות
**מיומנות:** התלמיד מזהה פתיח שפוסל את עצמו.
**מסך ההסבר:**
> `On one hand... on the other hand... so there are many opinions` — זה לא מה שביקשו. הבוחן מבקש **את הדעה שלך**. תשובה שלא מכריעה אינה תשובה שלמה, ומורידה נקודות בקריטריון התוכן.

**תרגיל:** MCQ · 5 פתיחים · "מכריע" מול "מתחמק"
**מעבר:** 4/5.
**מקור:** L20 · טעות מתועדת

### 4.c.23.3 · הכרעה ב-30 שניות
**מיומנות:** התלמיד בוחר צד מהר.
**מסך ההסבר:**
> אין תשובה נכונה. יש צד שקל לך יותר להגן עליו. אל תשאל "מה אני באמת חושב" — שאל "לאיזה צד יש לי שתי סיבות מוכנות". 30 שניות, ומתחילים לכתוב.

**תרגיל:** TIMED · 10 נושאים אמיתיים · כפתור YES/NO · שעון לכל נושא
נושאים: *"Should teenagers have a part-time job?"* · *"Should all students do volunteer work?"* · *"Is there too much emphasis on tests and grades?"* · ועוד 7
**מעבר:** 8 מתוך 10 החלטות בתוך 30 שניות.
**מקור:** L20 · Binary Choice Drill

### 4.c.23.4 · משפט הפתיחה
**מיומנות:** התלמיד כותב עמדה + סיבה במשפט אחד.
**מסך ההסבר:**
> משפט ראשון קבוע: `I think that ___ because ___`. העמדה קודמת לסיבה. תלמיד שמתחיל בסיבה משאיר את הבוחן בלי לדעת מה דעתו.

**תרגיל:** WRITE · 5 משפטי פתיחה
דוגמאות מקובלות:
- *"I think that all students should do volunteer work because it teaches them important life skills."*
- *"I do not think all students should do volunteer work because some students have very little free time."*

**מעבר:** 4/5 · חובה עמדה מפורשת + because.
**מקור:** L20 · WE DO

### 4.c.23.5 · לא לשנות עמדה באמצע
**מיומנות:** התלמיד שומר על אותו צד לאורך הפסקה.
**מסך ההסבר:**
> התחלת ב-YES — כל הפסקה מגנה על YES. משפט אחד שמתחיל "אבל מצד שני" הורס את הקוהרנטיות ומוריד נקודות.

**תרגיל:** CLASSIFY · 4 פסקאות · "עקבית" מול "התהפכה"
**מעבר:** 3/4.
**מקור:** L20 · טעות מתועדת

### 4.c.23.6 · דעה + סיבה + דוגמה
**תרגיל:** WRITE · 50–60 מילים · נושא: *"Is there too much emphasis on tests and grades in our education system?"*
**rubric:** עמדה ברורה · סיבה אחת · דוגמה אחת · 50–60 מילים
**מעבר:** כל הקריטריונים.

### 4.c.23.7 · שער סקשן 23
**תרגיל:** CHECK · WRITE + rubric
**מעבר:** כל הקריטריונים.

---

## Section 24 · סיבה, הסבר, דוגמה
**מקור:** L21 · דפוס P14 שלב 2
**יעד הסקשן:** שתי סיבות מלאות לפי תבנית קבועה.

### 4.c.24.1 · התבנית
**מיומנות:** שינון התבנית בעל פה.
**מסך ההסבר:**
> שלושה משפטים לכל סיבה, תמיד באותו סדר:
> **סיבה** — `because ___`
> **הסבר** — `This means ___`
> **דוגמה** — `For example, ___`
> ברגע שהתבנית אצלך בראש, כתיבה של 70–90 מילים היא עבודה מכנית, לא יצירתית.

**תרגיל:** VOCAB · שינון · השלמת התבנית מהזיכרון
**מעבר:** שחזור מלא.

### 4.c.24.2 · סיבה אינה דוגמה
**מיומנות:** התלמיד מבחין בין השתיים.
**מסך ההסבר:**
> סיבה **מסבירה למה**. דוגמה **מראה מקרה**. "כי זה מלמד אחריות" היא סיבה. "לדוגמה, תלמידים שמתנדבים בבית אבות" היא דוגמה. תלמידים מחליפים ביניהן וכותבים שתי דוגמאות בלי סיבה אחת.

**תרגיל:** CLASSIFY · 6 משפטים · "סיבה" מול "דוגמה"
**מעבר:** 5/6.
**מקור:** L21 · טעות מתועדת

### 4.c.24.3 · "it is good" אינו הסבר
**מיומנות:** התלמיד כותב הסבר שמוסיף מידע.
**מסך ההסבר:**
> `because it is good` לא אומר כלום. ההסבר צריך לענות: למה זה חשוב, מה זה גורם. `because it teaches teenagers responsibility. This means they learn to manage their own time.`

**תרגיל:** MCQ + WRITE · 5 פריטים · שדרוג סיבה חלשה
| חלש | משודרג |
|---|---|
| "because it is good" | "because it teaches teenagers responsibility. This means they learn to manage their own time." |
| "because it is important" | "because it gives students real-life experience. This means they are better prepared for work." |
| "because it helps" | "because it reduces stress. This means students can concentrate better in class." |

**מעבר:** 4/5.
**מקור:** L21 · טעות מתועדת

### 4.c.24.4 · דוגמה לא בגוף ראשון
**מיומנות:** התלמיד כותב דוגמה כללית.
**מסך ההסבר:**
> `For example, I once volunteered...` חלש — הוא לא מוכיח כלום מעבר לך. `For example, many schools in Israel run volunteering programmes` חזק יותר ונשמע אקדמי.

**תרגיל:** WRITE · 4 המרות מגוף ראשון לכללי
**מעבר:** 3/4.
**מקור:** L21 · טעות מתועדת

### 4.c.24.5 · עומק לפני רוחב
**מיומנות:** התלמיד בוחר שתי סיבות מלאות על פני שלוש קטועות.
**מסך ההסבר:**
> שתי סיבות עם הסבר ודוגמה מקבלות ציון גבוה יותר משלוש סיבות בלי הסבר. בבחינה הזו עומק מנצח רוחב, תמיד.

**תרגיל:** CLASSIFY · 4 זוגות פסקאות · "איזו מקבלת ציון גבוה יותר"
**מעבר:** 3/4.
**מקור:** L21 · טעות מתועדת

### 4.c.24.6 · סיבה שנייה, אותה תבנית
**תרגיל:** WRITE · הרחבת פסקה לשתי סיבות מלאות
**מעבר:** שתי סיבות × שלושה חלקים.

### 4.c.24.7 · שער סקשן 24
**תרגיל:** CHECK · WRITE + rubric
**rubric:** עמדה (2) · סיבה 1 מלאה (3) · סיבה 2 מלאה (3) · מקשרים (2) · אורך (5) = 15 נקודות
**מעבר:** 12/15.

---

## Section 25 · בנק הדוגמאות ואורך התשובה
**מקור:** L22 · דפוס P14 שלב 3
**יעד הסקשן:** תשובה שלמה של 70–90 מילים על כל נושא, בזמן.

### 4.c.25.1 · חמש הדוגמאות הכלליות
**מיומנות:** שינון חמישה משפטים שמתאימים לכל נושא.
**מסך ההסבר:**
> "אין לי דוגמה" הוא מה שמשתק תלמידים באמצע הכתיבה. הפתרון: חמישה משפטים כלליים ששיננת מראש, שאפשר להתאים לכל נושא. הם לא חייבים להיות אמיתיים — הם חייבים להיות רלוונטיים ותקינים דקדוקית.

**תרגיל:** VOCAB · שינון 5 משפטים

1. *"Many students find that volunteering / working / learning a language gives them useful experience."*
2. *"For example, a teenager who volunteers / works part-time / studies abroad often becomes more confident."*
3. *"Studies show that students who have real-life experience perform better later in life."*
4. *"In many schools, students are encouraged to volunteer / join work experience programmes."*
5. *"According to many experts, developing skills outside the classroom is extremely valuable."*

**מעבר:** שחזור 4 מתוך 5.

### 4.c.25.2 · התאמת דוגמה לנושא
**תרגיל:** MCQ · 6 פריטים · התאמת משפט מהבנק לנושא נתון
**מעבר:** 5/6.

### 4.c.25.3 · דוגמה אחת לכל סיבה
**מיומנות:** התלמיד לא חוזר על אותה דוגמה.
**מסך ההסבר:**
> אם השתמשת בדוגמה על התנדבות בסיבה הראשונה — הסיבה השנייה צריכה דוגמה אחרת. חזרה על אותה דוגמה מורידה נקודות בקריטריון העושר.

**תרגיל:** CLASSIFY · 4 פסקאות · זיהוי חזרה
**מעבר:** 3/4.
**מקור:** L22 · טעות מתועדת

### 4.c.25.4 · לספור מילים באמת
**מיומנות:** התלמיד מזהה חוסר או עודף ומתקן נכון.
**מסך ההסבר:**
> מתחת ל-70: **הרחב את הסיבה השנייה** — אל תוסיף סיבה שלישית קטועה. מעל 90: **מחק את הסיבה השלישית** — לא את הדוגמאות. הבוחן סופר.

**תרגיל:** WRITE · מונה מילים חי · 4 תיקוני אורך
דוגמה: פסקה של 60 מילים → הרחבת סיבה 2 בהסבר ובדוגמה → 78 מילים.
**מעבר:** שלוש פסקאות בטווח 70–90.
**מקור:** L22 · "writes 55 words — add to reason 2 · writes 105 — cut the third reason"

### 4.c.25.5 · בלי משפטים מעורפלים
**מיומנות:** התלמיד משלים משפטים כלליים.
**מסך ההסבר:**
> `Many people...` בלי המשך ברור הוא משפט מבוזבז. כל משפט צריך לומר משהו ספציפי — אחרת הוא סופר לאורך אבל לא לתוכן.

**תרגיל:** WRITE · 4 השלמות
**מעבר:** 3/4.
**מקור:** L22 · טעות מתועדת

### 4.c.25.6 · תשובה מלאה בזמן
**תרגיל:** TIMED · 15 דקות · פרומפט: *"Should all high school pupils do volunteer work?"*
**מודל 70 מילים:**
> *"I think all pupils should do volunteer work because it teaches them important skills. This means that they develop responsibility and learn to work with others. For example, many students who volunteer become more focused in class. Another reason is that volunteering benefits the whole community. In addition, studies show that teenagers who volunteer feel less stressed. According to many experts, real-life experience is extremely valuable."*

**מעבר:** בזמן · 70–90 מילים · כל חלקי התבנית.
**מקור:** L22 · מודל התשובה

### 4.c.25.7 · שער סקשן 25
**תרגיל:** CHECK · WRITE + rubric מלא של 15 נקודות
**מעבר:** 12/15.

---

## Section 26 · סימולציה ותיקון
**מקור:** L23 · L24 · טקסט THE KINDNESS EFFECT
**יעד הסקשן:** בחינה מלאה בתנאים אמיתיים, ואז תיקון החולשה האחת שהכי עולה נקודות.

### 4.c.26.1 · חצי בחינה — קריאה
**תרגיל:** TIMED · 35 דקות · טקסט KINDNESS EFFECT · כל סוגי השאלות
**מעבר:** סיום בזמן.

### 4.c.26.2 · חצי בחינה — כתיבה
**תרגיל:** TIMED · 20 דקות · 70–90 מילים
**מעבר:** בזמן ובטווח.

### 4.c.26.3 · סימולציה מלאה
**מסך ההסבר:**
> 90 דקות. כל מה שלמדת. אין עזרה, אין חזרות. הדרך היחידה להיכשל בצומת הזה היא לא להשתמש בדפוסים.

**תרגיל:** TIMED · 90 דקות · קריאה 40 + כתיבה 20 + חזרה לסימונים
**מעבר:** השלמה מלאה. הציון אינו חוסם — הוא מזין את 26.4.

### 4.c.26.4 · איזה Pattern נכשל
**מיומנות:** התלמיד מזהה את סוג הטעות שלו, לא את הציון.
**מסך ההסבר:**
> אל תסתכל על הציון. הסתכל על **סוג** הטעות: שאלות NOT? שאלות התייחסות? חריגה בזמן? אורך הכתיבה? זה מה שאפשר לתקן בשעה אחת.

**תרגיל:** דוח אוטומטי · פילוח טעויות לפי P1–P15, לפי סוג שאלה, ולפי זמן לשאלה
**פלט:** דירוג שלוש החולשות הגדולות + הפניה ל-nodes הרלוונטיים
**מקור:** L24 · טעות מתועדת: "focuses on their overall score rather than which pattern failed"

### 4.c.26.5 · תיקון ממוקד — דפוס אחד
**מיומנות:** התלמיד מתקן חולשה אחת לעומק.
**מסך ההסבר:**
> אל תנסה לתקן הכול. בחר את החולשה שהופיעה הכי הרבה פעמים, ותרגל רק אותה. שעה ממוקדת שווה יותר מקריאה חוזרת של כל הקורס.

**תרגיל:** סט דינמי · 6–10 פריטים · האפליקציה מזריקה את ה-nodes החלשים ביותר מ-26.4
**מעבר:** 80% בסט הדינמי.
**מקור:** L24 · "Student wants to fix everything — direct them: ONE pattern first"

### 4.c.26.6 · ערכת הבחינה האישית
**מיומנות:** התלמיד בונה עמוד אחד לעיון ביום הבחינה.
**מסך ההסבר:**
> ביום הבחינה, בלחץ, שוכחים דברים שיודעים. הערכה הזו היא בשביל הרגע הזה — לא בשביל הלמידה.

**תוכן הערכה:**
- P1–P15 בשורה אחת כל אחד
- תבנית P14: YES/NO → because → This means → For example → סיבה שנייה → ספירת מילים
- חמש הדוגמאות מהבנק
- חמשת המקשרים והכלל של כל אחד
- לוח הזמנים: 40 · 20 · בדיקה
- שלוש החולשות האישיות מ-26.4 והתיקון לכל אחת

**תרגיל:** סיכום · עמוד להורדה והדפסה
**מקור:** L24 · Final Exam Toolkit

---

# חלק ו׳ — חזרה מרווחת, מיפוי, והערות מימוש

## nodes החזרה
נפרסים לאורך המסלול, לא בסופו. כל אחד נפתח אחרי הסקשן שצוין ומופיע כצומת רגיל במפה.

| ID | אחרי סקשן | תוכן | תרגיל | מעבר |
|---|---|---|---|---|
| 4.c.R.1 | 4 | Circle 1 + מספרים ושמות | REVIEW · 10 | 8/10 |
| 4.c.R.2 | 8 | P1–P6 + הרמזור | REVIEW · 12 | 9/12 |
| 4.c.R.3 | 12 | כל סוגי השאלות עד כה | REVIEW · 12 · TIMED | 9/12 |
| 4.c.R.4 | 16 | P7 · P12 · P13 + מילות עמדה | REVIEW · 12 | 9/12 |
| 4.c.R.5 | 21 | 40 מילות הבנק + חמשת המקשרים | REVIEW · 20 · TIMED | 16/20 |
| 4.c.R.6 | 25 | תבנית P14 מלאה | REVIEW · WRITE | rubric מלא |

## מיפוי לתוכן הקיים באפליקציה
| קיים ב-`sectionContent.ts` | v3 |
|---|---|
| `4.c.3.2` — מציאה וסימון מספרים ושמות | מתפצל: `4.c.3.2`–`4.c.3.4` (מספרים) + `4.c.4.1`–`4.c.4.3` (שמות) |
| `4.c.3.3` — שימוש במספרים ושמות לניווט | `4.c.3.5`–`4.c.3.6` (P2) + `4.c.4.4`–`4.c.4.6` (P3) |
| `s1-l1`–`s1-l8` — אוצר מילים | נבלע בסקשנים 17–18, עם הוספת collocations ותרגילי ייצור |
| `before-we-start` · `read-questions-first` · `mark-question-words` | סקשנים 1–2 |

## הערות מימוש

**MARK — מודל התשובה.** כל יעד סימון הוא טווח תווים בטקסט, לא מילה בודדת: `2,000 trees` הוא יעד אחד, לא שניים. הניקוד חייב לכלול עונש על סימון-יתר — בלעדיו התלמיד ילמד לסמן הכול, וזה בדיוק ההפך מהמיומנות. הצעה: כל יעד = +1, כל סימון מיותר מעבר לשניים = −1, סף מעבר 90%.

**המלכודת היא תוכן, לא הערה.** שדה `trap_feedback_he` מוצג לתלמיד ברגע הטעות ומנוסח כהסבר, לא כשיפוט: "בחרת משפט נכון — אבל שאלת NOT מבקשת את השקרי" ולא "טעות". 96 המלכודות במסמך מגיעות מתיעוד הכיתה של המורה, ולכן הן מכסות את מה שבאמת קורה ולא את מה שנראה הגיוני.

**CHECK לא חוסם.** כישלון בשער מזריק REVIEW של ה-nodes שנכשלו לפני שממשיכים — לא נועל את הסקשן ולא מאפס אותו. חסימה גורמת לנטישה; הזרקה גורמת לחזרה.

**שימוש חוזר בטקסטים.** 17 טקסטים מכסים 174 nodes. תלמיד שרואה את CITY GARDEN בפעם השנייה כבר מכיר את התוכן, ולכן כל הקשב שלו פנוי למיומנות החדשה. זה מכוון — אל תחליף טקסט רק כדי לגוון.

**דירוג הרמזור כמדד כיול.** בסקשן 8 ואילך, כדאי לשמור לכל תשובה את הצבע שהתלמיד נתן לעצמו מול נכונות התשובה בפועל. פער גדול (הרבה "ירוק" שגוי) הוא אינדיקטור מוקדם לכישלון בסימולציה, והרבה יותר שימושי מציון ממוצע.

**כתיבה — סימון עצמי לפני ציון.** בכל צומת WRITE ה-rubric מוצג **לפני** הכתיבה ולא אחריה. התלמיד מסמן את עצמו מול הקריטריונים לפני שהוא מגיש. זו המיומנות שהוא יצטרך בבחינה, כשאף אחד לא יבדוק אותו.
