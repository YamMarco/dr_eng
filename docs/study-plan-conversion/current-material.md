# Current material - unit → module

Snapshot of what the app covers today. Update when a module gains or loses
content. Source: `front/src/lib/curriculum.ts`, `front/src/lib/content/`.

Material code reads `unit.module.section.lesson` - `4.c.1.2` = unit 4, module c,
section 1, lesson 2.

## Units and their modules

| unit | module | tabs | content |
| --- | --- | --- | --- |
| 4 | **C** | טקסט, חיבור | built - 3 sections, 23 lessons |
| 4 | **E** | טקסט, מילים | empty |
| 4 | **COBE** | - | empty, no sections defined |
| 5 | **E** | טקסט, מילים | empty |
| 5 | **G** | טקסט, חיבור | empty |
| 5 | **COBE** | - | empty, no sections defined |

Module E appears in both unit groups; module C is unit 4 only, G is unit 5 only.

## Module C - the only module with content

Three sections, one per Part of the Module C programme.

| section | titleHe | titleEn | lessons | file |
| --- | --- | --- | --- | --- |
| `c-1` | חלק א׳ - הבנת הנקרא | Part A - Reading Skills | 13 | `content/c/c-1.ts` |
| `c-2` | חלק ב׳ - אוצר מילים | Part B - Vocabulary | 4 | `content/c/c-2.ts` |
| `c-3` | חלק ג׳ - כתיבה | Part C - Writing | 6 | `content/c/c-3.ts` |

### c-1 - reading skills (`c.1.1` … `c.1.12`)

Strategy first, then trap words, then question formats. Three of the trap-word
lessons have a paired practice-only lesson (`Q` suffix).

`אני מחפש, לא קורא` · `מפת הדרכים` · `שיטת הרמזור` · `P1 - ניווט בטקסט` ·
`מגנט לעין - מספרים ושמות` (+ `c.1.5Q` practice) · `NOT - המילה הכי מסוכנת`
(+ `c.1.6Q`) · `most / only - תשובה אחת` (+ `c.1.7Q`) · `however / but - הפנייה` ·
`שאלות אמריקאיות` · `תשובה קצרה` · `השלמת משפט` · `שתי תשובות`

### c-2 - vocabulary (`c.2.1` … `c.2.4`)

The words that recur on every exam.

`מילות שאלה` · `מילות ניווט` · `מילות תוכן א׳` · `מילות תוכן ב׳`

### c-3 - writing (`c.3.1` … `c.3.6`)

Builds the 70-90 word task end to end.

`מה רוצים ממני?` · `P14 - נוסחת הכתיבה` · `דקדוק בסיסי` · `70-90 מילים` ·
`בחינה שלמה - ניהול זמן` · `What changes? - שאלת בגרות`

## Open ground

Everything outside module C. A study plan for module E, G or COBE lands on an
empty module: it defines section 1 onward from scratch, and `curriculum.ts`
needs its section tabs filled in for COBE.
