# Writing rules archive

Snapshot: 2026-10-10 (branch `writing-loop`). Every deterministic (rule-based, no LLM) check on student-typed text that exists in the codebase, working or not.
Why this file: writing feedback will rely mostly on an LLM from now on. This is the record of what the rules do, so they can be kept as a cheap pre-check, used as LLM prompt material, or removed knowingly. Nothing was removed or switched off when this was written.

Status key: **live** = runs for students today · **partial** = runs but somewhere less than its name suggests · **dead** = exists, nothing calls it.

## Map

| # | Piece | File | Where it runs | Gates a pass? | Status |
|---|---|---|---|---|---|
| 1 | Lesson writing-task gate | `front/src/lib/lesson-screens/WritingTask.svelte` | lessons | yes | live |
| 2 | Content lint (vague / repeat / short / no-detail) | `front/src/lib/lesson-screens/writingLint.ts` | lesson writing-task | yes | live |
| 3 | Word-bank usage | `writingLint.ts` `usesWord` | lesson writing-task | yes | live |
| 4 | Accepted answers (fixed-shape sentences) | `front/src/lib/lesson-screens/acceptedAnswers.ts` | lesson writing-task | yes | live |
| 5 | Length rules (Ministry table, valid-word count) | `front/src/lib/checks/length.ts` | paragraph gate + feedback panel | paragraph mode only | live |
| 6 | Spelling (nspell, en-US + en-GB) | `front/src/lib/checks/typos.ts` | feedback panel | no | live |
| 7 | Mechanics patterns | `front/src/lib/checks/mechanics.ts` | feedback panel | no | live |
| 8 | Language-use patterns | `front/src/lib/checks/language.ts` | feedback panel | no | live |
| 9 | Not-English detector | `front/src/lib/checks/index.ts` | feedback panel | no | live |
| 10 | `worthGrading` (LLM gate) | `checks/index.ts` | nowhere | - | dead |
| 11 | Feedback panel | `front/src/lib/checks/WritingCheck.svelte` | writing-task, self-check, writing-lab prototypes | no | live (never in exams) |
| 12 | Sentence-completion matcher | `front/src/lib/lesson-screens/sentenceCompletion.ts` | lessons + exams | yes | live |
| 13 | passage-quiz keyword matcher | `PassageQuiz.svelte`, `front/src/lib/quiz/scoring.ts` | lessons; exams | yes | partial (exam side not wired) |
| 14 | Exam writing-task scoring | `quiz/scoring.ts` | exams | - | none by design (manual, `auto: false`) |
| 15 | LLM roles `grade-short`, `grade-essay` | `front/src/lib/server/llm.ts` | nowhere (only `ocr` is called) | - | dead |
| 17 | Required moves (snowball) | `front/src/lib/lesson-screens/writingMoves.ts` | lesson writing-task | yes | live (added after the snapshot) |
| 16 | Sentence splitter | `front/src/lib/ocr/scan.ts` `splitSentences` | OCR fill + paragraph mode | indirectly | live |

## 1. Lesson writing-task gate (`WritingTask.svelte`)

One `writing-task` = 1 scored point. A round passes at 80% (runner rule), so one failed writing task can fail the round.

**Line mode** (default: one input per sentence, `minSentences` inputs):
- all inputs filled
- punctuation: each line starts with a capital (if `capitalIsError`, default true) and ends with `. ! ?`; up to `maxTypos` slips forgiven (default 1). Skipped when `autoCheck: false`.
- word bank: at least `minWordsUsed` bank entries used (rule 3)
- content lint: zero issues (rule 2)

**Paragraph mode** (`minWords` set, lessons): one textarea; the text is split into sentences (rule 16) and the same checks run on them, plus:
- at least `minSentences` sentences
- valid words >= `minWords` (rule 5). "The question" for the copy rule = the first `"..."` quoted part of the prompt, so a draft shown in the prompt can be reused.

**Accepted answers** (`acceptedAnswers` set): each line must match one accepted sentence (rule 4); punctuation, word bank and lint are skipped.

**Extras that never gate:** `wordCounter` (live word count, line mode), `timeLimitMinutes` (countdown; running out only shows a note), `modelAnswer` + `checklist` (self-review after the check, unscored).

**Quiz (exam) mode:** one textarea, no checks at all; only `minWords` must be reached to move on; the text goes to the report for manual grading.

## 2. Content lint (`writingLint.ts`, `lintWriting(lines, wordBank, prompt)`)

At most one issue per line, checked in this order:

| Rule | Logic | Message (he.ts `writingTask.lint*`) |
|---|---|---|
| `short` | line has fewer than 4 words | sentence too short |
| `vague` | a word from `good bad nice fun cool great important interesting boring amazing awesome ok okay things stuff`, unless: it is a word-bank word, or the next word is an explainer (`for because since when to if as`), or it sits in a 3-word phrase that also appears in the prompt ("a good idea") | "X" too general |
| `no-detail` | line has `for example / for instance / such as`, and after it there is no digit, no capitalised name, and fewer than 3 content words | example has no detail |
| `repeat` | not a conclusion line (`in conclusion / to sum up / to conclude / in summary`), has 2+ content words, and 60%+ of its content words appeared in one earlier line | repeats sentence N |

Content words = words longer than 2 letters, not in the stop list, not vague, not in the word bank.
Known limits: judges structure, not meaning ("because it rains" passes as specific); `repeat` misses paraphrase; `no-detail` passes any 3 content words.

## 3. Word-bank usage (`usesWord`)

Whole-word / whole-phrase match, case-insensitive. An entry with a translation (`"travel / לטייל"`) counts by its English part only. Count of used entries is compared to `minWordsUsed`.

## 4. Accepted answers (`acceptedAnswers.ts`)

Pattern syntax: `(a|b)` = a or b; groups multiply out; an empty option `( days|)` makes a part optional. Matching ignores case, punctuation and apostrophes (`don't` = `dont`). Used for the yes-no stance sentences and the subject-verb fix-the-sentence tasks. On a miss, the UI shows up to 3 accepted examples.

## 5. Length rules (`checks/length.ts`)

Verified against the Ministry rubric (RubricsCD2020) on 2026-10-10.
- Target 70-90 words (`MIN_WORDS`, `MAX_WORDS`).
- Deductions (points off Content, out of 30): 60-69 → 1, 50-59 → 3, 40-49 → 6, 30-39 → 10, 25-29 → 15; under 25 valid words → the whole task scores 0. Nothing above 90.
- Valid words: every token with a letter or digit, minus (a) a sentence that is the prompt copied whole (6+ words, contained word for word in the prompt), and (b) a sentence sharing a 6-word run with the reading passage (`source`). Using the question inside your own sentence counts. Titles and letter frames are not detected (not removed).
- Report: `valid`, `typed`, `deduction`, `zero`, `status` short / ok / long. The panel says "no deduction above 90, but shorten if you can".

## 6. Spelling (`checks/typos.ts`)

- nspell with en-US + en-GB dictionaries (`static/dict/`, lazy-loaded); a word is fine if either knows it (the Bagrut accepts both spellings).
- Never flagged: words of the prompt, the passage and the word bank; an allow-list (`bagrut ok okay email online internet app website smartphone whatsapp instagram tiktok facebook youtube google covid zoom` + plurals); words shorter than 2 letters; non-Latin words; a capitalised word mid-sentence (treated as a name); ALL-CAPS words.
- Contractions written without an apostrophe (`dont`, `cant`, `im`, `thats`...) → typo with the fixed form (`ill` and `lets` skipped: real words).
- Up to 3 suggestions per word.

## 7. Mechanics (`checks/mechanics.ts`)

| Rule | Logic | Confidence |
|---|---|---|
| `capital-start` | sentence starts with a lowercase letter (sentences split on `. ! ?` and newline) | sure |
| `capital-i` | `i`, `i'm`, `i'll`, `i've`, `i'd` in lowercase | sure |
| `capital-name` | lowercase day / month / language / nationality / place from a fixed list (`may`, `march` excluded) | sure |
| `end-mark` | sentence without `. ! ?` at the end | sure |
| `space-before-mark` | space before `, . ! ? ; :` | sure |
| `space-after-mark` | no space after `, ; :` between letters, or after `. ! ?` before a capitalised word | sure |
| `repeat-word` | the same word twice in a row (`the the`), words over 1 letter | sure |
| `run-on` | `, ` + subject pronoun + word, with 4+ words before the comma, the sentence not opening with a subordinator / connector, and not `I think, ...`-style | maybe |

## 8. Language use (`checks/language.ts`)

Principle in the file: only patterns that are (almost) always wrong; a false flag costs more trust than a missed error.

| Rule | Patterns |
|---|---|
| `double-comparative` | `more better/bigger/easier/harder/faster/cheaper/healthier/happier/worse`, `most best/biggest/easiest/worst` |
| `preposition` | `depend of/from`, `good in/on` + school subject or -ing, `afraid/scared from`, `interested of/on/at/about`, `listen music`, `discuss about`, `explain me`, `arrive to`, `enter to`, `married with` |
| `word-order` | `I very like/love/want/enjoy/hate` |
| `hebrew-ism` | `I have N years`, `make (my) homework`, `do sport(s)`, `say me` |
| `be-agreement` | `he/she/it are`, `they/we/you is/am`, `people/students/teachers/children/parents/friends/teenagers/kids is/was` |
| `agreement` | `he/she/it don't/haven't`; `he/she/it` + base verb from a 35-verb list unless a modal / question word comes before; plural subject + `-s` verb (`they goes`, `students likes`) |
| `verb-form` | modal or `to` + `goes/has/does/makes/takes/gets`; modal + `-ing` (except bring / sing / ring...); modal + `to` + verb |
| `pronoun-repeat` | `students/people/... they/it` + verb (`Students they learn`) |
| `article` | `a` before a vowel sound / `an` before a consonant sound, with exceptions (`a university`, `an hour`) |
| `plural` | uncountable or irregular plurals: `peoples informations advices homeworks furnitures equipments knowledges researches childrens mens womens` |
| `past-tense` (maybe) | a sentence with `yesterday / last week... / N days ago` and a present verb after a pronoun |

Area `vocabulary` exists in `RubricArea` but no rule uses it.

## 9. Not-English detector (`checks/index.ts`)

More than 30% of the letters are Hebrew → `notEnglish: true`, and no other check runs (the panel says so).

## 10. `worthGrading(report)` - dead

`true` unless not-English or under 25 valid words. Written to gate an LLM grading call; nothing calls it.

## 11. Feedback panel (`WritingCheck.svelte`)

Runs rules 5-9 350 ms after typing stops. Shows the length line (paragraph tasks only), then up to 8 issues with suggestions; `maybe` issues are worded as questions; Hebrew rule names from `he.ts` `writingCheck.rule`. Used in lesson writing-task (unless `autoCheck: false`), self-check, and the two writing-lab prototypes (`writing-lab/ClaudeWritingPrototype.svelte`, `GptWritingPrototype.svelte`). Never shown in exams. Never affects a score.

## 12. Sentence-completion matcher (`sentenceCompletion.ts`)

Normalise both sides: lowercase, punctuation to spaces, drop `and or the a an`, collapse spaces. Pass = equal to one model answer. Word order still matters ("signs, books, screens" fails against "books, signs, screens").

## 13. passage-quiz keyword matcher

Pass = every keyword appears as a substring of the lowercased answer. Lessons: live (`PassageQuiz.svelte`). Exams: scoring exists in `quiz/scoring.ts` but the screen doesn't write its answers into the quiz answer slot, so exams shouldn't use passage-quiz (comment in the file). Known weaknesses (QC report v3 bad point 2): a TWO-answer question passes with one answer that contains both keywords; one keyword alone passes; a right answer in other words fails ("bored" vs keyword "sad").

## 14. Exam writing scoring

`writing-task` in an exam: `{ earned: 0, max: points, auto: false }`, listed for manual grading. No rule runs.

## 15. LLM roles - dead for writing

`server/llm.ts` defines `grade-short` (Gemini flash-lite models) and `grade-essay` (Gemini flash models) next to `ocr`, through `LLM_GATEWAY_URL/KEY` or `GEMINI_API_KEY`. Only `routes/api/ocr/+server.ts` calls the LLM. No grading route exists yet.

## 17. Required moves (`writingMoves.ts`)

`requiredMoves` on a lesson writing-task. Each move passes if its marker appears anywhere in the text (case-insensitive):

| Move | Markers |
|---|---|
| stance | I think / I do not think / I don't think / I believe / I agree / I feel / I would like / I'd prefer / I prefer / In my opinion |
| because | because |
| in-addition | In addition / Also / Moreover / Furthermore / Another reason / Secondly / Second, |
| for-example | For example / For instance / such as |
| for-instance | For instance (only) |
| as-a-result | As a result / Therefore / Because of this / This means / That is why / so that |
| in-conclusion | In conclusion / To sum up / To conclude / In summary / All in all |

A missing move fails the task; the results list names it. Set on 28 c-3 tasks (2026-10-10). Checks presence only, not position or quality.

## Notes for the LLM switch

- Keep as cheap pre-checks (no judgement, near-zero false flags): rule 9 (not English), rule 5's valid-word count and zero rule, rule 4 (fixed-shape answers).
- Good LLM prompt material: the length table and "not counted" list (rule 5), the lint's definitions of vague / repeat / no detail (rule 2), and the language-use rule names (rule 8), so LLM feedback uses the same names students saw.
- What the LLM must take over: meaning (is the reason specific, is the second reason new, does the example support the reason), and whether each required move is used well (rule 17 only checks that its marker word is there). Pass `requiredMoves` to the grader prompt.
- Decide per task whether the LLM verdict gates the pass (today rules 1-4 gate it).
