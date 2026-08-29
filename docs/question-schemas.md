# Lesson screen / question schemas

Source of truth: [`front/src/lib/lesson-screens/types.ts`](../front/src/lib/lesson-screens/types.ts).
Every lesson part (`front/src/lib/lessonContent.ts`) is just a flat array of these
objects — plug in a new one, no code changes needed. To add a genuinely new
shape: add the type here, write a matching component in
`front/src/lib/lesson-screens/`, register it in `registry.ts`.

Question-bearing types (count toward the score badge and the 80% pass
threshold) are marked **(scored)**.

## preface

Plain message screen, no interaction.

```json
{ "type": "preface", "text": "רוב התלמידים קוראים קודם את הטקסט..." }
```

| field | type   | notes                                                    |
| ----- | ------ | --------------------------------------------------------- |
| text  | string | supports `\n\n` for a paragraph break (rendered as such) |

## steps

Numbered list of instructional lines, one per `<li>`.

```json
{ "type": "steps", "steps": ["צעד 1: ...", "צעד 2: ...", "צעד 3: ..."] }
```

## summary

A titled recap/cheat-sheet card (bulleted lines).

```json
{
	"type": "summary",
	"title": "🗂 כרטיס שיטה 1 — שאלות קודם",
	"lines": ["קרא שאלות ← סמן מילת שאלה ← רק אז קרא את הטקסט", "..."]
}
```

## mcq **(scored, 1 question)**

Single multiple-choice question.

```json
{
	"type": "mcq",
	"prompt": "באיזו שעה דנה קמה?",
	"options": ["בשש", "בשבע", "בשמונה", "בתשע"],
	"correctIndex": 1
}
```

## mark-word **(scored, 1 question)**

Tap the question word inside a sentence. `correctWordIndex` is the index into
`sentence.split(' ')`.

```json
{
	"type": "mark-word",
	"sentence": "Where did she find the keys?",
	"correctWordIndex": 0,
	"dir": "ltr"
}
```

| field            | type              | notes                                             |
| ---------------- | ----------------- | -------------------------------------------------- |
| dir              | `'rtl' \| 'ltr'`  | optional, defaults to `ltr`; use `rtl` for Hebrew |

## timed-reading

A text with a live stopwatch running while it's on screen. Writes the elapsed
ms into the shared lesson session under `timerKey` (continuously, until the
student continues) — pair with a later `time-result` / `time-comparison`
screen that reads the same key back.

```json
{
	"type": "timed-reading",
	"label": "סיבוב 1 · קודם הטקסט",
	"text": "דנה קמה בשבע בבוקר...",
	"timerKey": "roundA"
}
```

## question-preview

A list of question prompts to read _before_ a text (no options yet) — used to
prime "read questions first."

```json
{
	"type": "question-preview",
	"intro": "קראו את השאלות הבאות לפני הטקסט, ושימו לב מה לחפש:",
	"prompts": ["למה יוסי לא בישל?", "כמה זמן יוסי חיכה לשליח?"]
}
```

## timed-passage **(scored, one per item in `questions`)**

Paragraph + its multiple-choice questions on one screen, with a stopwatch
that keeps running (and keeps updating `timerKey` in the session) until the
last question is checked. Questions are presented one at a time inside the
screen (pick → check → next), not all at once.

```json
{
	"type": "timed-passage",
	"label": "קטע 1",
	"timerKey": "step3A",
	"text": "נועה הגיעה לספרייה בשעה ארבע אחר הצהריים...",
	"questions": [
		{
			"prompt": "מתי נועה הגיעה לספרייה?",
			"options": ["בשתיים", "בשלוש", "בארבע", "בחמש"],
			"correctIndex": 2
		}
	]
}
```

## time-result

Reads back the elapsed time recorded under `timerKey` by an earlier
`timed-reading` or `timed-passage` screen and displays it.

```json
{ "type": "time-result", "label": "סיימתם את סיבוב 1!", "timerKey": "roundA" }
```

## time-comparison

Compares two previously-recorded timer values and shows one of two closing
messages depending on which was faster.

```json
{
	"type": "time-comparison",
	"aLabel": "סיבוב 1 · קודם הטקסט",
	"aKey": "roundA",
	"bLabel": "סיבוב 2 · קודם השאלות",
	"bKey": "roundB",
	"fasterMessage": "הרגשתם? כשידעתם מה לחפש, קראתם מהר ובטוח יותר.",
	"tieMessage": "גם אם הפעם הזמן דומה — בטקסט ארוך ואמיתי ההבדל הרבה יותר משמעותי. קודם שאלות, תמיד."
}
```

## passage-quiz **(scored, one per item in `questions`)**

A text and several short-answer (free-text) questions about it — no timer, a
mini test. All questions are shown at once with one shared check. Marked
correct per-question if **every** keyword (case-insensitive, substring match)
appears somewhere in what the student typed — lenient on exact wording.

```json
{
	"type": "passage-quiz",
	"text": "Today is Dan's first day at his new school in Haifa...",
	"questions": [
		{
			"prompt": "Who walks to school with Dan?",
			"keywords": ["omer"],
			"answerHint": "Omer (his new neighbor)",
			"points": 10
		}
	]
}
```

| field      | type     | notes                                                       |
| ---------- | -------- | ------------------------------------------------------------ |
| keywords   | string[] | ALL must be found (case-insensitive) for the answer to count |
| answerHint | string   | shown to the student if their answer was wrong                |
| points     | number?  | optional, shown next to the prompt as flavor text (`(10 נק')`) — not used in scoring math |

## writing-task **(scored, 1 question)**

Open-ended writing exercise. Not graded for real grammar — lightly
auto-checked for: every line filled in, each line starting with a capital
letter and ending in `.`/`!`/`?`, and at least `minWordsUsed` of `wordBank`
actually used somewhere across the lines. Renders one text input per
`minSentences` (not a single textarea).

```json
{
	"type": "writing-task",
	"prompt": "משימת כתיבה: כתוב 3 משפטים על יום הלימודים שלך, עם לפחות 3 מילים מרשימות השיעור.",
	"wordBank": ["first day", "get up", "breakfast", "neighbor", "give", "am", "is", "are"],
	"minSentences": 3,
	"minWordsUsed": 3
}
```

---

## Lesson / part wrapper shapes

For context, screens don't stand alone — they're nested inside a `LessonPart`
inside a `LessonContent` (see `front/src/lib/lessonContent.ts`):

```json
{
	"intro": {
		"greeting": "💬 ברוך הבא לאקדמיית הבלשים...",
		"goal": "🎯 בסוף השיעור תדע: ..."
	},
	"parts": [
		{
			"id": "read-questions-first",
			"titleHe": "קריאת השאלות לפני הטקסט",
			"screens": ["... LessonScreen objects, see above ..."]
		}
	]
}
```

- `intro` is optional — shown as a card above the path, skipped entirely if absent.
- A `LessonPart` with an **empty** `screens` array is skipped from the path
  entirely (not even shown lowlighted) — useful as a placeholder for a
  sub-lesson not written yet.
- Within a non-empty part, an individual screen left with empty content
  (e.g. `text: ""`, or `options: []`) is auto-skipped by the runner too — see
  `isScreenEmpty` in `types.ts`.
