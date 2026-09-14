<!-- converted from module_c_dev_spec.docx -->






מסמך זה מגדיר את כל מה שהמתכנת צריך כדי לבנות את האפליקציה. הוא משלים את קבצי השיעורים (lesson00–lesson22) שמגדירים את התוכן והעיצוב.


1. סקירה כללית
מהי האפליקציה?
• קורס הכנה לבגרות אנגלית Module C (016382)
• 23 שיעורים עצמאיים, כל שיעור = 6 מסכים
• כל שיעור ניתן להפעלה עצמאית — אין תלות בסדר (מומלץ לשמור על סדר 00→22)
• קהל יעד: תלמידי 3-4 יחידות בגרות, רמת אנגלית חלשה

קבצי המקור
כל שיעור מסופק כקובץ Word: lesson00_module_c.docx עד lesson22_module_c.docx


2. מבנה השיעור — 6 מסכים
כל שיעור מכיל בדיוק 6 מסכים בסדר קבוע:



3. הגדרת אינטראקציה — כפתורים ותשובות
3.1 כפתורי תשובה (TRY IT / YOUR TURN)
כפתורי התשובה מסומנים בקבצי ה-docx:
• כפתור עם ✅ בתוכן = תשובה נכונה
• כפתור ללא ✅ = תשובה שגויה
• בחלק מהשיעורים יש יותר מכפתור ✅ אחד (שאלות "בחר הכל שנכון")

התנהגות לאחר לחיצה:


3.2 שורות תשובה חופשית (YOUR TURN)
מסכי YOUR TURN בשיעורים מסוימים (L10, L11, L12, L20) כוללים שורות כתיבה חופשית.

אפשרות A — שדה טקסט (מומלץ):
• שדה textarea עם placeholder "כתוב כאן..."
• גובה מינימלי: 80px, מתרחב אוטומטית
• ספירת מילים בזמן אמת (חשוב במיוחד ב-L17–L22)
• אין בדיקה אוטומטית — התלמיד משווה לתשובה המוצגת לאחר מכן

אפשרות B — דילוג (acceptable):
• כפתור "דלג" שמאפשר לעבור בלי לכתוב
• תשובה לדוגמה מוצגת בכל מקרה


3.3 ניווט בין מסכים


4. מודל נתונים — מה שומרים
4.1 התקדמות משתמש

4.2 תשובות (אופציונלי)



5. Design Tokens — צבעים ועיצוב
5.1 צבעים ראשיים

5.2 טיפוגרפיה

5.3 מרווחים ופינות
• Border-radius כרטיסים: 8–12px
• Padding כרטיסים: 16px
• Gap בין אלמנטים: 12px
• Left border accent (כרטיסי כלל): 6px solid


6. רכיבים — Component Library
כל הרכיבים הבאים מופיעים בקבצי השיעורים. זו הגדרתם:

Box (קופסת תוכן)
• רקע צבעוני + גבול שמאלי עבה + padding
• variants: navy / teal / amber / red / green / purple / orange / gray

Button (כפתור תשובה)
• רוחב מלא, גבול עדין, padding 12px
• states: default / correct (#DCFCE7) / wrong (#FEF2F2) / disabled
• transition: 200ms ease-in-out

answerLine (שורת תשובה)
• שתי עמודות: label (30%) + שורת כתיבה (70%)
• border-bottom בלבד, גובה 40px

stepTable (טבלת שלבים)
• עמודה שמאלית: מספר/תווית בצבע, רוחב 120px
• עמודה ימנית: תוכן עם border

vocabTable (טבלת אוצר מילים)
• 3 עמודות: אנגלית (teal) | עברית | דוגמה (italic)
• שורות בצבעים חלופיים (striped)

winHeader (כותרת מסך)
• שתי עמודות: מספר מסך (navy/colored bg) + שם מסך (light bg)
• רוחב מלא, גובה ~36px

twoCol (שני עמודות)
• שתי עמודות שוות עם רווח 16px ביניהן
• כל עמודה: רקע שונה, border

connectorBar (פס מילות חיבור)
• שורה אחת, N תאים שווים עם רקע צבעוני ולבן על text


7. התנהגויות מיוחדות
7.1 Grammar Note (L10, L11, L12 — YOUR TURN)
לפני שאלת YOUR TURN בשיעורים 10-12 מופיעה קופסה ירוקה:
תוכן: "דקדוק בתשובות קריאה: לא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳."
זהו רכיב קבוע — לא ניתן לסגור אותו.

7.2 Traffic Light Reminder (L09–L12 — TRY IT, YOUR TURN)
קופסה ירוקה קבועה עם הטקסט: "🚦 זכור: Traffic Light — ירוק? רק ירוק = עונה."

7.3 Hebrew Preview (L09, L10, L11, L12 — WATCH IT)
לפני הטקסט האנגלי מוצגת קופסה סגולה עם סיכום הטקסט בעברית.

7.4 Word Counter (L17–L22)
במסכי YOUR TURN של שיעורי הכתיבה — ספירת מילים בזמן אמת:
• מציג: "X מילים"
• אדום: < 60 מילים
• צהוב: 60-69 או 91-100 מילים
• ירוק: 70-90 מילים


7.5 Penalty Table (L20 — THE TOOL)
טבלת קנסות רשמית. מוצגת כ-component קבוע, לא אינטראקטיבי.


8. מפת שיעורים — מה יש בכל שיעור
לכל שיעור בקובץ ה-docx המקביל (lesson##_module_c.docx):



9. מסך הבית — Home Screen
אינו מוגדר בשיעורים — המתכנת מגדיר. המלצה:

• רשימת 23 שיעורים בגלילה
• כל שיעור: מספר + שם + Part (A/B/C/D) + סטטוס (טרם התחיל / בתהליך / הושלם ✅)
• לחיצה → נכנס לשיעור (ממסך 1 או ממסך האחרון שעזב)
• Progress bar כללי: X/23 שיעורים הושלמו



10. פלטפורמה ומסגרת טכנית
הגדרה זו אינה מגבילה — המתכנת בוחר. נקודות לשקול:

10.1 אפשרויות מומלצות
• React Native (Expo) — iOS + Android מקוד אחד
• Flutter — iOS + Android מקוד אחד. Native performance.
• React Web (PWA) — ניתן להתקנה כאפליקציה, קל לפיתוח

10.2 RTL (Right-to-Left)

10.3 Offline Support
• כל התוכן מוטמע באפליקציה — אין צורך ב-network
• התקדמות משתמש: AsyncStorage / SQLite / localStorage

10.4 Fonts
• Hebrew: System font (iOS: SF Hebrew, Android: Noto Serif Hebrew)
• English body: Calibri עדיף — אם לא זמין: Open Sans
• Monospace: Courier New (לשורות ANSWER:)


11. שאלות פתוחות — לפגישת Kickoff
החלטות אלה נדרשות לפני תחילת פיתוח:



| מפרט טכני
Module C App — Developer Specification v1.0 |
| --- |
| 💡 קבצי ה-docx הם מפרט חזותי — הם מראים את העיצוב, הטקסט, הצבעים, והמבנה. המתכנת בונה את האפליקציה לפיהם. |
| --- |
| מסך | שם | תפקיד |
| --- | --- | --- |
| 1 | WOW MOMENT | סיפור שמייצר מוטיבציה. קריאה בלבד + כפתור המשך. |
| 2 | THE TOOL | הכלי/שיטה ללמוד. קריאה בלבד + כפתור המשך. |
| 3 | WATCH IT | הדגמה עם טקסט ופתרון מלא. קריאה בלבד + כפתור המשך. |
| 4 | TRY IT | תרגיל עם בחירה מרובה. אינטראקטיבי — לחיצה על כפתור. |
| 5 | YOUR TURN | תרגיל עצמאי. שילוב של בחירה/כתיבה חופשית. |
| 6 | ONE SENTENCE | משפט סיכום + כפתור לשיעור הבא. |
| פעולה | תשובה נכונה | תשובה שגויה |
| --- | --- | --- |
| צבע כפתור | ירוק (#DCFCE7 + #15803D) | אדום (#FEF2F2 + #DC2626) |
| פידבק | מופיע תוך 300ms | מופיע תוך 300ms |
| כפתורים אחרים | מושבתים (disabled, opacity 0.5) | מושבתים |
| ניווט | כפתור "המשך" מופיע אחרי 1.5 שניות | ניתן לנסות שוב — לחיצה נוספת |
| ניסיון חוזר | — | מותר. אין הגבלת ניסיונות. |
| ⚠️ אין ניקוד. אין "מספר שגיאות". המטרה היא למידה — לא מבחן. |
| --- |
| 💡 המלצה: Textarea + "בדוק תשובה" שמציג את התשובה הנכונה ומבקש מהתלמיד להשוות בעצמו. |
| --- |
| פעולה | גסטוב / כפתור | הערות |
| --- | --- | --- |
| קדימה | Swipe שמאל OR כפתור ▶ בתחתית | לאחר פידבק בלבד |
| אחורה | Swipe ימין OR כפתור ◀ | חוזר למסך הקודם |
| תוך השיעור | Dots indicator (●○○○○○) | מציג מיקום מתוך 6 |
| בין שיעורים | מסך 6 → כפתור "לשיעור הבא" | לא אוטומטי |
| חזרה לתפריט | X בפינה שמאל עליונה | מכל מסך |
| UserProgress {
  lesson_id: string,        // "00" עד "22"
  completed: boolean,       // האם עבר את מסך 6
  last_screen: number,      // 1-6, לחזרה למקום
  timestamp: Date,          // מתי הושלם
} |
| --- |
| AnswerRecord {
  lesson_id: string,
  screen_id: number,        // 4 = TRY IT, 5 = YOUR TURN
  question_id: string,
  correct: boolean,
  attempts: number,         // כמה פעמים ניסה
} |
| --- |
| 💡 שמור לפחות את lesson_id + completed + last_screen ב-AsyncStorage / localStorage. שאר הנתונים אופציונליים. |
| --- |
| שם | HEX | שימוש |
| --- | --- | --- |
| Navy (ראשי) | #1E3A5F | כותרות, מסגרות ראשיות, כפתור ניווט |
| Teal (כלי) | #0D7A6E | THE TOOL, מסכי WATCH IT, הדגשות |
| Amber (אזהרה) | #D97706 | WOW MOMENT, warning boxes |
| Red (שגיאה) | #DC2626 | YOUR TURN, כפתורי שגיאה, NOT |
| Green (הצלחה) | #15803D | תשובות נכונות, OK boxes |
| Purple (vocab) | #7C3AED | שיעורי אוצר מילים, TRY IT |
| Orange (eye) | #EA580C | most/only, Eye Catchers |
| Navy Light | #EBF0F8 | רקע כרטיסים כחולים |
| Teal Light | #D1FAF5 | רקע כרטיסים ירוקים |
| Green Light | #DCFCE7 | רקע תשובות נכונות |
| Red Light | #FEF2F2 | רקע תשובות שגויות |
| Gray (ניטרלי) | #F8FAFC | רקע כללי, שורות נייטרלי |
| Border | #CBD5E1 | מסגרות כרטיסים |
| רכיב | גופן | גודל |
| --- | --- | --- |
| גוף טקסט | Calibri / System Sans | 16px (22 DXA) |
| כותרת שיעור | Calibri Bold | 22px+ |
| כפתורים | Calibri | 16px |
| טקסט אנגלי (ציטוט) | Calibri Italic | 16px |
| קוד / ANSWER line | Monospace | 14px |
| ⚠️ זה קריטי ל-L20 שמלמד ספירת מילים. ספירה בזמן אמת היא חלק מהלמידה. |
| --- |
| שיעור | חלק | מסכים מיוחדים |
| --- | --- | --- |
| 00 — מנטליות | Reading | WOW: כפתור אינטראקטיבי. Cover: טבלת 6 מסכים. |
| 01 — מפת הדרכים | Reading | YOUR TURN: 3 כפתורים ללא ✅ בלייבל — פידבק בלבד. |
| 02 — Traffic Light | Reading | TRY IT: 2 שאלות בקופסות נפרדות. |
| 03 — P1 | Reading | WOW: ❌/✅ Side-by-side. YOUR TURN: 3 שורות כתיבה. |
| 04–05 — Eye Catchers | Reading | Standard 6 screens. |
| 06 — NOT | Reading | WOW: "NOT" בגופן ענק (48px). WATCH IT: טבלת 3 שורות. |
| 07–08 — most/however | Reading | Standard. WOW: Side-by-side ❌/✅. |
| 09 — MC | Reading | WATCH IT: טבלת 4 שורות ✅/❌. YOUR TURN: פורמט בחינה. |
| 10–12 — שאלות | Reading | Grammar note + TL reminder בכל TRY IT + YOUR TURN. |
| 13–16 — Vocabulary | Vocab | vocabTable כרכיב מרכזי. L16 YOUR TURN: sentence starters. |
| 17 — Writing intro | Writing | THE TOOL: רוברוקה + נושאי מיקוד. |
| 18 — P14 | Writing | WATCH IT: טבלת annotations צבעוניות (6 שורות). |
| 19 — Grammar | Writing | WOW: רוברוקה + what it means לתלמיד. |
| 20 — 70-90 מילים | Writing | THE TOOL: טבלת קנסות. YOUR TURN: Word counter חובה. |
| 21 — Simulation | Writing | 5 מסכים + Checklist (dark navy) + "מה הלאה". |
| 22 — What changes? | Writing | שאלת בגרות אמיתית. YOUR TURN: Draft table עם 4 שלבים. |
| 💡 אין אפשרות "נעילה" — כל שיעור פתוח תמיד. התקדמות היא ויזואלית בלבד. |
| --- |
| ⚠️ חשוב: הממשק מעורב עברית + אנגלית. טקסט עברי: RTL. טקסט אנגלי: LTR. השתמש ב-writing-mode / direction per text block. |
| --- |
| שאלה | אפשרויות | השפעה |
| --- | --- | --- |
| YOUR TURN חופשי | Textarea vs Skip | UX complexity |
| שמירת נתונים | Local only vs Cloud sync | Backend needed? |
| Analytics | כן / לא | Privacy, complexity |
| פלטפורמה | iOS / Android / Web | Tech stack |
| RTL handling | Per-component vs global | Layout effort |
| Onboarding | מסך פתיחה? Tutorial? | L00 מחליף? |
| הסימולציות (5+) | באותה אפליקציה? | Phase 2? |
| Module C App — Technical Specification v1.0
מסמך זה משלים את קבצי השיעורים lesson00–lesson22_module_c.docx |
| --- |