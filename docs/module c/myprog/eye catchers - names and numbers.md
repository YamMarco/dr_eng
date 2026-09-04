# Eye catchers — מספרים ושמות (section c.3)

Written-out content. Source spec kept in `eye catchers - names and numbers.spec.bak.md`.
Implementation target: `front/src/lib/content/c/c-3.ts` (model: `docs/lesson-structure.md`).

## Plan of the section

| # | id | code | titleHe | notes |
| --- | --- | --- | --- | --- |
| 1 | `eye_catch_intro` | c.3.1 | למה מספרים ושמות | **new** node, inserted after c.2.1 |
| 2 | `s3-l1` | c.3.2 | מילים: מגנטים לעין | existing — preface removed, questions kept |
| 3 | `s3-l2` | c.3.3 | מציאה וסימון | existing — rewritten, 4 rounds |
| 4 | `s3-l3` | c.3.4 | שימוש לניווט | existing — rewritten, 3 rounds |

Renumbering note: codes shift by one, **ids stay** (`c-4.ts` requires `s3-l3` — still the
last node, so no change there). To avoid pushing section 4 down, tighten section 3 spacing
to 90px instead of 120: y = 480 / 570 / 660 / 750; c.4.1 stays at y 840. x = 70 / 100 / 70 / 0.

`required`: `eye_catch_intro` ← `s2-l1`; `s3-l1` ← `eye_catch_intro`; rest unchanged.

## Shared material bank

Reused across the four lessons, growing each time (sentence → paragraph → full text).

- **A · THE CITY GARDEN PROJECT** — 3 paragraphs. Already in `c-3.ts`, keep verbatim.
- **B · SPORT FOR ALL** — 1 paragraph. Already in `c-3.ts`, keep verbatim.
- **HE-1 · מועדון מדע** · `לפני שלוש שנים נפתח בבית הספר מועדון מדע. נרשמו אליו 45 תלמידים, והם נפגשים פעמיים בשבוע.`
- **HE-2 · ד״ר נועה לוי** · `ד״ר נועה לוי מאוניברסיטת חיפה ביקרה בבית הספר, ויחד עם עיריית חיפה פתחה מעבדה חדשה.`
- **HE-3 · גינות קהילתיות** · `בשנת 2019 פתחה עיריית תל אביב 12 גינות קהילתיות. המנהלת, שרה כהן, מספרת שכ-800 מתנדבים עבדו שם שעתיים בשבוע.`
- **HE-4 · ספרייה במודיעין** · `בשנה שעברה נפתחה בעיר מודיעין ספרייה חדשה. הספרנית הראשית, מיכל ברק, מספרת ש-1,200 תלמידים נרשמו אליה בחודש הראשון. הספרייה פתוחה חמישה ימים בשבוע, ומתנדבים מבית הספר התיכון עוזרים בה שלוש שעות בשבוע.`
- **HE-5 · פרה וכבשה** (דוגמה בלבד) · `פרה שוקלת 400 ק״ג, וכבשה שוקלת 60 ק״ג.`

---

# 1 · `eye_catch_intro` — למה מספרים ושמות

`section: 'c-3'` · `code: 'c.3.1'` · `required: ['s2-l1']` · `position: { x: 70, y: 480 }`

## preface

**screen 1 — preface**
> בפרק הקודם ראינו: המודול הזה הוא לא מבחן בקריאה.
> הוא מבחן ביכולת למצוא מידע בטקסט, לשלוף אותו, ולהשתמש בו כדי לענות על שאלה.
>
> אף אחד לא מצפה שתקראו כל מילה. מצפים שתדעו לאן ללכת.

**screen 2 — preface**
> בשאלה עצמה מסתתרים סימני דרך. שני סוגים בולטים לעין ומובילים כמעט תמיד ישר לתשובה:
> מספרים ושמות. אנחנו קוראים להם מגנטים לעין — הם קופצים מהדף עוד לפני שקראנו.

**screen 3 — summary** · title: `שני המגנטים`
- `מספר = המספר + מה שהוא סופר. לדוגמה: 2,000 trees · three hours a week · 40% · five years`
- `שם = אדם, מקום או ארגון, תמיד באות גדולה. לדוגמה: Dr. Maria Santos · Greenville · Greenville University`

**screen 4 — steps** · דוגמה 1 (עברית)
1. `הטקסט: "פרה שוקלת 400 ק״ג, וכבשה שוקלת 60 ק״ג."`
2. `השאלה: "מה שוקל 400 ק״ג?" — במקום לקרוא הכל, מסתכלים על השאלה: יש בה מספר, 400.`
3. `סורקים את הטקסט בעיניים ומחפשים 400. מצאנו.`
4. `בודקים מה צמוד למספר: "פרה שוקלת 400 ק״ג". התשובה: פרה. שתי שניות, בלי לקרוא משפט שלם.`

**screen 5 — steps** · דוגמה 2 (מספר באנגלית)
1. `הטקסט: "They planted over 2,000 trees and created 15 community gardens across the city."`
2. `השאלה: "How many trees did they plant?" — אין מספר בשאלה, אבל יש מילה שנחפש: trees.`
3. `בטקסט שני מספרים: 2,000 ו-15. בודקים מה צמוד לכל אחד: 2,000 trees · 15 community gardens.`
4. `המספר שצמוד ל-trees הוא 2,000. זו התשובה. שימו לב: לא מספיק למצוא מספר — צריך את המספר שצמוד לדבר הנכון.`

**screen 6 — steps** · דוגמה 3 (שם באנגלית)
1. `השאלה: "According to Dr. Maria Santos, what did her team want to show?"`
2. `בשאלה יש שם: Dr. Maria Santos. השם הוא הכתובת שלנו בטקסט.`
3. `סורקים ומחפשים את השם. הוא מופיע רק בפסקה II.`
4. `קוראים רק שם — רק סביב השם. שאר הפסקאות לא מעניינות אותנו עכשיו.`

## round 0 — mcq

1. `בשאלה כתוב: "How many hours a week did the volunteers work?" מה עושים קודם?`
   - `סורקים את הטקסט ומחפשים מספר שצמוד ל-hours` ✓
   - `קוראים את הטקסט מההתחלה עד הסוף`
   - `מתרגמים כל מילה בשאלה`
   - `מנחשים לפי ההיגיון`
2. `בשאלה מופיע השם "Professor James Wu". מה זה אומר לנו?`
   - `שהתשובה נמצאת בפסקה שבה מופיע השם` ✓
   - `שצריך לדעת מי הוא`
   - `שהשאלה קשה במיוחד`
   - `שאין תשובה בטקסט`
3. `"The programme offers free classes three times a week in 12 neighbourhoods." — בכמה שכונות?`
   - `12` ✓ / `three` / `a week` / `לא כתוב`
4. `למה "12" לבד היא לא תשובה טובה?`
   - `כי מספר בלי מה שהוא סופר לא אומר כלום — צריך 12 neighbourhoods` ✓
   - `כי צריך לכתוב במילים`
   - `כי 12 מספר קטן מדי`
   - `כי המספר תמיד שגוי`
5. `מה נחשב "שם" בטקסט באנגלית?`
   - `אדם, מקום או ארגון — באות גדולה באמצע המשפט` ✓
   - `כל מילה ארוכה`
   - `המילה הראשונה בפסקה`
   - `כל מילה במרכאות`

---

# 2 · `s3-l1` — מילים: מגנטים לעין (c.3.2)

**edit:** delete the `preface` array (`preface: []`). The three vocabulary rounds stay
exactly as they are — the "why" now lives in c.3.1, and this node is pure vocabulary.

Also update: `code: 'c.3.2'`, `required: ['eye_catch_intro']`, `position: { x: 100, y: 570 }`.

---

# 3 · `s3-l2` — מציאה וסימון (c.3.3)

`code: 'c.3.3'` · `required: ['s3-l1']` · `position: { x: 70, y: 660 }`

## preface (תזכורת קצרה ל-c.3.1, לא חזרה)

**screen 1 — preface**
> זוכרים: מספרים ושמות הם המגנטים לעין. עכשיו רק מתאמנים לזהות אותם מהר — קודם בעברית, אחר כך באנגלית.
> בלי לענות על שאלות. רק לסמן.

**screen 2 — summary** · title: `מה מסמנים`
- `מספר: המספר + שם העצם שצמוד אליו — 45 תלמידים · 2,000 trees · 85%`
- `שם: אדם, מקום או ארגון — מיכל ברק · Greenville University · Dr. Maria Santos`

## round 0 — עברית, סוג אחד בכל פעם

**screen 1 — mark-all** · `dir: 'rtl'` · instruction: `סמנו את כל המספרים (יחד עם מה שהם סופרים)`
text = HE-1 · `correctIndices: [1, 2, 10, 11, 14, 15]`
→ `שלוש שנים` · `45 תלמידים` · `פעמיים בשבוע`

**screen 2 — mark-all** · `dir: 'rtl'` · instruction: `סמנו את כל השמות — אנשים, מקומות וארגונים`
text = HE-2 · `correctIndices: [0, 1, 2, 3, 4, 10, 11]`
→ `ד״ר נועה לוי` · `מאוניברסיטת חיפה` · `עיריית חיפה`

## round 1 — עברית, שניהם יחד

**screen 1 — preface**
> עכשיו יחד: גם מספרים וגם שמות, באותו טקסט.

**screen 2 — mark-all** · `dir: 'rtl'` · instruction: `סמנו את כל המספרים והשמות`
text = HE-3 · `correctIndices: [0, 1, 3, 4, 5, 6, 7, 10, 11, 13, 14, 17, 18]`
→ `בשנת 2019` · `עיריית תל אביב` · `12 גינות` · `שרה כהן` · `שכ-800 מתנדבים` · `שעתיים בשבוע`

## round 2 — אנגלית, סוג אחד בכל פעם

**screen 1 — preface**
> אותו דבר בדיוק, באנגלית. אל תתרגמו — רק סרקו בעיניים.

**screen 2 — mark-all** · `dir: 'ltr'` · instruction: `פסקה I — סמנו את כל המספרים בלבד`
text = material A, paragraph I · `correctIndices: [0, 1, 40, 41, 44, 45, 46]`
→ `Five years` · `2,000 trees` · `15 community gardens`

**screen 3 — mark-all** · `dir: 'ltr'` · instruction: `פסקה II — סמנו את כל השמות בלבד`
text = material A, paragraph II · `correctIndices: [6, 7, 8, 12, 13]`
→ `Dr. Maria Santos` · `Greenville University`

## round 3 — אנגלית, שניהם יחד

**screen 1 — mark-all** · `dir: 'ltr'` · instruction: `סמנו את כל המספרים והשמות`
text = material B, first two sentences:
`A new community sports programme in the city of Portland has helped over 4,000 residents become more active over the past two years. The programme offers free fitness classes three times a week in 12 different neighbourhoods.`
`correctIndices: [9, 13, 14, 21, 22, 29, 30, 34, 35, 36]`
→ `Portland` · `4,000 residents` · `two years` · `three times` · `12 different neighbourhoods`

**screen 2 — mark-all** · `dir: 'ltr'` · instruction: `פסקה III — סמנו את כל המספרים והשמות`
text = material A, paragraph III · `correctIndices: [8, 10, 22, 23, 25, 26, 27, 37, 62, 63, 69]`
→ `85%` · `Greenville` · `Dr. Santos's` · `Professor James Wu` · `40%` · `50 countries` · `Greenville's`

---

# 4 · `s3-l3` — שימוש לניווט (c.3.4)

`code: 'c.3.4'` · `required: ['s3-l2']` · `position: { x: 0, y: 750 }`

## preface

**screen 1 — preface**
> סימנתם. עכשיו משתמשים.
> מכאן יש טקסט ושאלות, והמטרה היא למצוא פרט אחד קטן בטקסט — מהר, בעזרת המגנט שבשאלה.

**screen 2 — summary** · title: `P2 · מספרים   |   P3 · שמות`
- `P2 — מספר בשאלה: מחפשים אותו בטקסט ← בודקים שהוא צמוד לדבר הנכון ← זו התשובה`
- `P3 — שם בשאלה: הולכים לפסקה של אותו שם ← קוראים רק שם ← לא נוגעים בשאר`

## round 0 — עברית

**screen 1 — preface**
> מתחילים בעברית, כדי שהטכניקה תהיה ברורה לפני שמוסיפים אנגלית.

**screens 2–4 — mcq** על HE-4 (הטקסט מוצג בגוף השאלה הראשונה)

1. `"בשנה שעברה נפתחה בעיר מודיעין ספרייה חדשה. הספרנית הראשית, מיכל ברק, מספרת ש-1,200 תלמידים נרשמו אליה בחודש הראשון. הספרייה פתוחה חמישה ימים בשבוע, ומתנדבים מבית הספר התיכון עוזרים בה שלוש שעות בשבוע." — כמה תלמידים נרשמו בחודש הראשון?`
   - `1,200` ✓ / `חמישה` / `שלוש` / `לא כתוב`
2. `לפי מיכל ברק, מה אנחנו לומדים?`
   - `כמה תלמידים נרשמו לספרייה` ✓ / `כמה ימים הספרייה פתוחה` / `כמה עולה מנוי` / `מי בנה את הספרייה`
3. `כמה שעות בשבוע עוזרים המתנדבים?`
   - `שלוש שעות` ✓ / `חמישה ימים` / `1,200 שעות` / `שעה אחת`

## round 1 — אנגלית

**screen 1 — preface**
> אותה טכניקה, טקסט באנגלית. קראו קודם את השאלה, מצאו את המגנט, ורק אז גשו לטקסט.

**screen 2 — timed-passage** · label: `THE CITY GARDEN PROJECT` · `timerKey: 's3garden'`
text = material A (3 paragraphs). Questions — keep the four already written in `c-3.ts`:
how many trees / what Santos's team wanted to show / how many hours a week / what we learn
from Professor James Wu.

**screen 3 — summary** · title: `מה עשינו כאן`
- `שאלות 1 ו-3: מספר בשאלה ← P2`
- `שאלות 2 ו-4: שם בשאלה ← P3, ישר לפסקה הנכונה`

## round 2 — אנגלית + שעון

**screen 1 — preface**
> עכשיו על הזמן. טקסט קצר, שתי שאלות. אל תקראו הכל — סרקו.

**screen 2 — timed-passage** · label: `SPORT FOR ALL` · `timerKey: 's3sport'`
text = material B. Questions — keep the two already in `c-3.ts` (Professor Marcus Allen /
Dr. Laura Kim).

**screen 3 — time-result** · label: `סיימתם את האתגר!` · `timerKey: 's3sport'`

---

## Implementation checklist — done (front/src/lib/content/c/c-3.ts)

- [x] add `eye_catch_intro` node at the head of `c3Lessons`
- [x] `s3-l1`: `preface: []`, code → `c.3.2`, `required` → `['eye_catch_intro']`
- [x] `s3-l2`: new preface + 4 rounds, code → `c.3.3`
- [x] `s3-l3`: new preface + 3 rounds, code → `c.3.4`
- [x] positions: y 480 / 570 / 660 / 750 (section 4 untouched at 840)
- [x] `mark-all` indices are whitespace-token positions — re-count after any text edit
- [x] `npm run check` in `front/`, then `graphify update .`
