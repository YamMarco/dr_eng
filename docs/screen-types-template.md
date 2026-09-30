# Screen types template (for content authors and their Claude)

Paste this whole file into Claude, then describe the lesson you want.
Claude must answer ONLY with a lesson written in the "Return format" below, using only the screen types listed here. Do not invent screen types or fields.

## Rules

- All text the student sees is **Hebrew**. English appears only where it is the material itself (words, sentences, passages).
- Never use the long dashes `—` or `--` in content. A single `-` at most.
- A lesson = `preface` (teaching screens, shown once) + `rounds` (practice). Round 0 is the main practice; later rounds are optional extra practice.
- Scored screens (mcq, mark-word, cloze-pick, mark-all, match-pairs, spell-word, writing-task, sentence-completion, passage-mcq, passage-quiz) can be mixed freely in any lesson, including vocab lessons.
- Indexes are **0-based** (first item = 0). For `mark-word` and `mark-all`, split the text on spaces and count tokens: `"Answer using paragraph-III only."` -> Answer=0, using=1, paragraph-III=2.
- Wrong options (distractors) must be tempting: same part of speech, fits the blank grammatically, same topic. Exactly one defensible answer. Use `explanation` to say why the others fail. Vary where the correct option sits.
- Do not add pictures (`image`); those are added in the app.

## Text formatting (inside preface text, steps, summary lines, question-preview)

Inline: `**bold**`, `*italic*`, `++underline++`, `~~strike~~`, `{c:red}colored{/c}` (colors: black, white, red, blue, green, orange, purple, gray).
Line start: `## title` (also `#`, `###`), `{a:center}` alignment, `{p:text}` marks an English study sentence (tinted card), `{p:callout}` marks a tip, a line of only `---` is a divider.
Example: `{a:center}## כותרת` and `{p:text}I think students should read more.`

---

## Teaching screens (not scored)

### preface - a paragraph of teaching
```ts
{ type: 'preface', text: 'טקסט ההסבר. **מודגש**.' }
```

### steps - a list of steps (`ordered: true` numbers them)
```ts
{ type: 'steps', ordered: true, steps: ['שלב ראשון', 'שלב שני', 'שלב שלישי'] }
```

### summary - a recap card
```ts
{ type: 'summary', title: 'סיכום', lines: ['נקודה ראשונה', 'נקודה שנייה'] }
```

### word-card - introduces one vocabulary word (put before questions about it)
```ts
{
  type: 'word-card',
  word: 'responsible',
  translationHe: 'אחראי',
  hookHe: 'טיפ זיכרון (אופציונלי)',
  exampleEn: 'Parents are **responsible** for their children.',
  exampleHe: 'הורים אחראים לילדיהם.',
}
```

### question-preview - questions to read before a text
```ts
{ type: 'question-preview', intro: 'לפני הקריאה, שימו לב לשאלות:', prompts: ['What is the main idea?', 'Who wrote the letter?'] }
```

### self-check - student writes, then sees a model answer (not graded)
```ts
{ type: 'self-check', prompt: 'כתבו שני משפטים על...', modelAnswer: 'I think that...', minWords: 20, maxWords: 40 }
// optional: text: 'English passage shown above', placeholder: '...'
```

---

## Scored screens

### mcq - multiple choice (one correct)
```ts
{
  type: 'mcq',
  prompt: 'Fruit keeps your body strong. It is good for your ___',
  options: ['society', 'health', 'support', 'school'],
  correctIndex: 1,
  explanation: 'health = בריאות. האחרות לא מתאימות למשפט.',
  layout: 'honeycomb', // optional. Only when all options are 1-2 words. Omit for normal rows.
}
```

### mark-word - tap one word in a sentence
```ts
{ type: 'mark-word', prompt: 'סמנו את מילת השאלה:', sentence: 'Why do students need sleep?', correctWordIndex: 0 }
// optional: dir: 'ltr' | 'rtl'
```

### cloze-pick - pick a tile to start a sentence (any tile in correctIndices passes)
```ts
{
  type: 'cloze-pick',
  clause: 'schools should be open 5 days instead of six.',
  options: ['In my opinion,', 'Yesterday,', 'However,', 'I believe that'],
  correctIndices: [0, 3],
  explanation: 'שני הפתיחים הראשונים והאחרון מבטאים דעה...', // optional
}
```

### mark-all - tap every target word in a text (passes at 70% found, max 1 stray tap)
```ts
{
  type: 'mark-all',
  instruction: 'סמנו כל מספר וכל שם.',
  text: 'In 2010 Dana opened a shop in Haifa.',
  correctIndices: [1, 2, 6],          // plain targets, 0-based tokens
  // OR colored groups (then correctIndices can be []):
  // categories: [{ name: 'מספרים', color: 'sky', indices: [1] }, { name: 'שמות', color: 'rose', indices: [2, 6] }],
  // colors: amber, sky, rose, violet, emerald, orange
  // optional: dir: 'rtl' for Hebrew text, wordBank: ['hint', 'words']
}
```

### match-pairs - match English words to Hebrew (2+ pairs, ideally 4-6)
```ts
{ type: 'match-pairs', pairs: [{ en: 'benefit', he: 'תועלת' }, { en: 'harm', he: 'נזק' }] }
```

### spell-word - type a word. `copy` = word is shown, `listen` = student hears it
```ts
{ type: 'spell-word', word: 'responsible', mode: 'copy' }
{ type: 'spell-word', word: 'responsible', mode: 'listen', hintHe: 'אחראי' }
// Use copy right after the word-card, listen later in review. Do not dictate homophones (affect/effect).
```

### sentence-completion - type the end of a sentence
```ts
{ type: 'sentence-completion', before: 'I agree because', after: '.', modelAnswers: ['it is healthy', 'it helps students'] }
```

### writing-task - short writing, lightly auto-checked (capital letters, periods, words from the bank)
```ts
{
  type: 'writing-task',
  prompt: 'כתבו {sentences} עם {words} מבנק המילים.', // {sentences} {words} are filled in automatically
  wordBank: ['health', 'exercise', 'society'],
  minSentences: 2,
  minWordsUsed: 2,
}
```

### passage-mcq - a text with multiple-choice questions on one screen
```ts
{
  type: 'passage-mcq',
  text: 'The English text...',
  questions: [
    { prompt: 'What is the main idea?', options: ['A', 'B', 'C', 'D'], correctIndex: 2 },
  ],
  // optional stopwatch: label: 'זמן קריאה', timerKey: 'read1'
}
```

### passage-quiz - a text with typed short answers (correct when ALL keywords appear in the answer)
```ts
{
  type: 'passage-quiz',
  text: 'The English text...',
  questions: [{ prompt: 'Where did Dana open the shop?', keywords: ['haifa'], answerHint: 'In Haifa.' }],
}
// keywords: lowercase content words only, no numbers.
```

---

## Timer screens (only together)

```ts
{ type: 'timed-reading', label: 'קראו את הטקסט', text: '...', timerKey: 'a' }   // shows text + stopwatch
{ type: 'time-result', label: 'הזמן שלכם', timerKey: 'a' }                       // shows the recorded time
{ type: 'time-comparison', aLabel: 'קריאה 1', aKey: 'a', bLabel: 'קריאה 2', bKey: 'b',
  fasterMessage: 'השתפרתם!', tieMessage: 'אותו זמן' }                             // compares two timers
```

---

## Return format

Reply with one TypeScript object, nothing else, in this shape. The developer pastes it into the app.

```ts
{
  id: 'kebab-case-name',        // short, lowercase, unique, e.g. 'health-words-1'
  section: 'c-7',               // the section you were told
  titleHe: 'שם השיעור',
  required: [],                 // leave empty unless told otherwise
  big: false,
  content: {
    preface: [ /* teaching screens */ ],
    rounds: [
      { screens: [ /* round 0: main practice */ ] },
      // optional: { screens: [ /* extra practice */ ] },
    ],
  },
}
```

Do not include `position`; the developer sets it. Before answering, check: every scored screen has a valid `correctIndex`/`correctIndices` (0-based, inside the range), every distractor is tempting, no `—`, all student-facing text is Hebrew.
