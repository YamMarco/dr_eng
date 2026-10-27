# Handoff: round openers

Round-start `preface` cards graded for conversion to `opener` (rules in `docs/lesson-structure.md`, opener bullet). 8+ are converted, plus rows 1-6, 11-13 (done), 7 (kept as preface) and the empty c-l10 preface (deleted); these are the rest, plus level calls worth a second look. Each c-1 row has a twin in e-1 (`c-` → `e-`, same round). "Where" = lesson id + round (1-based).

## 1. Not converted (grade under 8)

Code = the card's `text` (every one is `{ type: 'preface', text }`).

| # | Grade | Where | Doubt | If converted | Code (`text`) |
|---|---|---|---|---|---|
| 8 | 6 | c-l00 r2 | **At all?** A bridge line in a guided round; title would be invented. | `סיבוב 2`, level 1, title "עוד תרגיל ביחד" | `"בואו ננסה עוד תרגיל ביחד:"` |
| 9 | 6 | c-l04, c-l06, c-l07, c-l08 r1-r3 (12 cards) | **At all?** The subtitle repeats the mark-all's own `instruction`; titles would be new. Level clear: = round. | `סיבוב N`, level N, title "משפטים בעברית" / "משפטים באנגלית" / "פסקאות", subtitle = the line (or none if the mark-all already says it) | e.g. `"כמה משפטים בעברית. סמנו כל מילת שלילה במשפט."`, `"עכשיו באנגלית. כמה משפטים. סמנו כל מילת שלילה."`, `"כמה פסקאות. סמנו כל מילת שלילה בפסקה."` (same three per lesson, its own target words) |
| 10 | 6 | c-221188d1 r1 | Same as 9. | `סיבוב 1`, level 1, title "שלושה טקסטים", subtitle the line | `"שלושה טקסטים. סמנו בכל אחד: מילות שלילה, מילות הגבלה, ומספרים ושמות."` |
| 14 | 5 | c-in-conclusion r3 | **At all?** Teaches the skeleton (`{p:text}`). Split is clearly right; level clear (3, like the other writing rounds). | Add `סיבוב 3`, level 3, "כותבים את כל השלד"; keep a preface with the skeleton | `"סיבוב 3 \| כותבים את כל השלד\n\nעכשיו מחברים את כל מה שלמדתם, בפעם הראשונה:\n\n{p:text}I think... because...\n{p:text}For example,...\n{p:text}In addition,...\n{p:text}In conclusion,...\n\nזה השלד של כל חיבור בבגרות. בשיעורי הנושא נרחיב אותו ל-70-90 מילים."` |
| 15 | 4 | r1 of c-l01, c-l03, c-numbers-names-q, c-not-q, c-limiters-q, c-l09, c-l11, c-l12, c-b46b7e2b | **At all?** Rule recaps; converting loses them. Adding an opener = one more screen in round 1. Level clear (1). | Add only: `סיבוב 1`, level 1, the lesson's skill as title | see below |
| 16 | 3 | c-l10, c-l11, c-l12 r2 | No: grammar tip (teaches). An added opener would be level 2. | — | see below |
| 18 | — | c-l02 (2 cards), c-l11 (1) | Empty prefaces mid-round, not at round start (runner skips them). Delete? | — | `""` |
| 17 | 3 | g-traffic-light r1, g-w-essay-map r1, r1 of 13 COBE lessons (both levels) | No: `###` teaching cards. COBE: no level scheme, badge only. | — | in the content files |

Row 15 code:
- c-l01: `"מפת הדרכים = כותרת + פסקה 1. היא אומרת לכם על מה הטקסט ולאן הוא הולך - לפני שנוגעים בשאלות."`
- c-l03: `"P1 = שאלה ← מילת מפתח ← איתור בטקסט ← קריאת המשפט ← תשובה. לא קוראים את כל הטקסט."`
- c-numbers-names-q: `"{d:rtl}מספר או שם בשאלה הם** Eye Catchers**: הם אומרים לכם לאן ללכת בטקסט."`
- c-not-q: `"NOT לא מוסיף מידע - הוא הופך את הכיוון.\nרגיל: מצא מה נכון. עם NOT: מצא מה לא נכון."`
- c-limiters-q: `"the most / the only / the main בשאלה = מחפשים דבר אחד מסוים.\nmost לבד = רוב. קוראים את השאלה עד הסוף."`
- c-l09: `"ארבעה צעדים: קוראים את כל 4 האפשרויות ← חוצים ← מוצאים הוכחה בפסקה הנכונה ← עונים."`
- c-l11: `"השלמת משפט: קוראים את ההתחלה. Because ___ = מחפשים סיבה. In order to ___ = מחפשים מטרה."`
- c-l12: `"Give TWO answers = שתי תשובות, ממוספרות (1) ו-(2). מצאתם אחת? ממשיכים לחפש."`
- c-b46b7e2b: `"{d:rtl}however / but מסמנים** פנייה** בטקסט. בדרך כלל אחריהם מגיעה הנקודה של הכותב - אבל לזכור שתמיד עונים על מה שהשאלה שואלת."`

Row 16 code:
- c-l10: `"{d:rtl}דקדוק בתשובות קריאה:\n{d:rtl}\n{d:rtl}**לא מורידים** נקודות על שגיאות דקדוק קלות בחלק א׳.\n\n{d:rtl}מה שחשוב: המידע הנכון מהטקסט. כל עוד התשובה מובנת - מקבלים את הנקודות.\n{d:rtl}למשל \"Because the goats ate all plants\" מקבל ניקוד מלא, גם בלי \"the\" לפני plants."`
- c-l11: `"{d:rtl}דקדוק בתשובות קריאה:\n{d:rtl}\n{d:rtl}**לא מורידים **נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט."`
- c-l12: `"דקדוק בתשובות קריאה:\nלא מורידים נקודות על שגיאות דקדוק קלות בחלק א׳. מה שחשוב הוא המידע הנכון מהטקסט."`

## 2. Converted, level worth a second look

| Where | Now | Doubt | Alternative |
|---|---|---|---|
| c-in-addition r4, c-for-example r4 | 💎 4 (writing level = round) | 💎 reads as "exam level"; the round is one more rep | 3 🔥 |
| c-topic-volunteer r5, c-topic-vacation r5 ("תנאי בחינה") | 🏆 5 (by round) | reading uses 💎 4 for exam conditions | 4 💎 (then r4 also 💎, or drop r4 to 3) |
| c-yes-no r3, c-in-conclusion r4, c-topic-school r4, c-topic-cellphone r4, c-221188d1 r5, g-final r3 (optional, no emoji in the source) | no level (flag) | the other optional rounds have a level | 🌟 2 for reviews, 💎 4 for exam-condition ones |
| c-l00 r3, r4 | kicker "תרגול 1" / "תרגול 2" | kept the source's numbering, not the real round (3 / 4) | `סיבוב 3` / `סיבוב 4` |

Any change: new opener strings need an `ar.json` entry (`node front/scripts/content-i18n.mjs`).
