# Handoff: round openers

Round-start `preface` cards still open for conversion to `opener` (rules in `docs/lesson-structure.md`, opener bullet). Everything else is converted or decided. Each c-1 row has a twin in e-1 (`c-` → `e-`, same round). "Where" = lesson id + round (1-based).

Code = the card's `text` (every one is `{ type: 'preface', text }`).

| # | Grade | Where | Doubt | If converted | Code (`text`) |
|---|---|---|---|---|---|
| 15 | 4 | r1 of c-l01, c-l03, c-numbers-names-q, c-not-q, c-limiters-q, c-l09, c-l11, c-l12, c-b46b7e2b | **At all?** Rule recaps; converting loses them. Adding an opener = one more screen in round 1. Level clear (1). | Add only: `סיבוב 1`, level 1, the lesson's skill as title | see below |
| 16 | 3 | c-l10, c-l11, c-l12 r2 | No: grammar tip (teaches). An added opener would be level 2. | — | see below |
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

Any change: new opener strings need an `ar.json` entry (`node front/scripts/content-i18n.mjs`).
