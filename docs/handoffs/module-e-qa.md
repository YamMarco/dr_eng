# Module E QA

Content audit of Module E (5-point level; 4 points has its own Module E content), graded as a student trying to learn and as a teacher checking the material. Scope: Part I lessons `content/e/e-1.ts`, exams `quiz/e/index.ts`, word decks `content/e/list-a..d.ts`. Update this file whenever a Module E item is fixed or found.

## Official spec (Ministry 5-point handbook, Module E 16471)

- 75 minutes, no dictionary. Glossary for words outside the bands.
- Reading 70%: 1 text, up to 400 words, **8-10 questions**. Task types: multiple choice, open-ended, sentence completion, **true/false with justification**, **graphic organizers (tables, timelines)**. Text types: article, informative text (ad, advice column, brochure, newsletter), interview, letter, report, review, personal account.
- Grammar errors: 1-2 points off on 5-7 point questions, 2-3 on 8-10 point questions. **Spelling: no deduction.**
- Vocabulary 30%: 5 questions × 6 points (2 per answer), Band I, II, III (Core 1) lists; fill-ins, multiple choice, matching.

Source: [5pointsbooklet2025.pdf](https://meyda.education.gov.il/files/pop/0files/english/Chativa-Elyona/Bagrut/updates/5pointsbooklet2025.pdf), pages 4-7.

## Grades (10 = best)

| Part | Student | Teacher |
|---|---|---|
| Part I reading lessons | 6.5 | 6 |
| Practice exams | 6.5 | 5.5 |
| Word decks | 8.5 | 8.5 |
| **Module E overall** | **6.5** | |

The biggest open items are the always-first answer, the format mismatch between the lessons and the exams, and the missing question types.

## Part I - reading lessons

Chain: e-bridge (exam facts) → e-method (method + Library exam-level text) → e-topic → e-topic-q → e-complete → e-glossary-time → e-final.

Strengths: e-topic's "name the paragraph in 3-4 words, then choose" method and its 3 traps (true detail, another paragraph's topic, wrong question word); e-complete's By + ing / to + base verb summary.

- [ ] **Every passage-mcq answer is option 0.** `PassageMcq.svelte` doesn't shuffle, so the right answer is always first (all but the new glossary text). Planned: shuffle in lessons.
- [ ] **Taught format ≠ exam format.** Lessons teach 9 questions (4 topic MCQs + 5 completions); the app exams have 7 (with "choose TWO" and "Give TWO answers"). Lessons say a true detail is a trap, but e-exam-3 Q1 marks a detail ("Which school subject Daniel was reviewing") as correct.
- [ ] **Question types never taught:** true/false with justification, tables / timelines, "choose TWO", "Give TWO answers", non-article texts (interview, letter, review, ad).
- [ ] **Typed answers are graded by keyword only** (`PassageQuiz.svelte`): "By joined a tour" passes, so the By + ing form is never checked. Wrong keys: Repair Café Q1 needs "free" (rejects "By organising a Repair Café"); Q2 accepts only "waste" (rejects "to teach people to fix things").
- [ ] **Grading facts not taught:** grammar costs 1-3 points per question, spelling costs nothing.
- [ ] Weak lesson distractors: "the" (e-method), "For thirty years", "The bus is yellow".
- [x] Typos: "ברך כלל", "במקומו**y**:", the bold run-on in the first screen, "תזכורת:  על פסקה קצרה".
- [x] First screen within the phone limit (about 200 characters).
- [x] Paragraph markers `**II**` / `**V **` → `II  ` (side marker).
- [x] Method before exam level: e-method now follows e-bridge on the main path and holds the Library exam-level round.
- [x] Library article no longer read in full a third time: e-glossary-time uses a new text ("The Fridge on the Corner", new glossary, 3 of 4 questions need a glossary word).
- [x] e-topic-q round 1 no longer gives away the paragraph V answer.

## Practice exams (e-exam-1..4)

Strengths: readable texts; feedback on every option with a quote from the text.

- [ ] **Off-spec format:** 7 questions (spec 8-10), with 14- and 16-point items.
- [ ] All four texts are the same genre (5-paragraph teens-and-tech argument). The sleep topic in e-topic-q repeats g-exam-3 (melatonin).
- [ ] Gloss slips: "to run out of" → "שנגמר ל-", "exactly" → "בדיוק!", "behind" → "מפגר"; "an instruction" is defined with the uncountable meaning ("teaching").
- [x] e-exam-1 vocabulary: all 30 items are now deck words (18 were outside the Ministry lists).
- [x] Silly distractors rewritten (Q1 in all four exams, plus the other weak MCQs): each wrong option is now a real detail from another paragraph, an absolute/near-miss, or a plausible topic the text doesn't cover.
- [x] Wrong evidence fixed: e-exam-1 Q1 (the teachers' question) and e-exam-4 Q1 (the teamwork sentence).
- [x] e-exam-2 Q1 awkward option reworded ("How one teenager chose an old-fashioned object.").

## Word decks (lists 1-4)

205 / 214 / 218 / 219 words, spaced repetition, Hebrew first, a bolded example for every word. Every exam vocabulary item is in a deck. A sample review of a third of the words found about 2.5% with problems:

- [ ] "be out of" → "שנגמר ל-" (not a verb form).
- [ ] "go ahead": the definition is a verb, the Hebrew is an interjection ("קדימה, בבקשה").
- [ ] Unnatural examples: "show around the visitors", "take out my mom", "The money will transfer", "will be expecting her first baby in May" (should be "is expecting").
- [ ] US and UK spelling mixed in one sentence ("offense" with "licence").
- [ ] 38 definitions give the word away in matching ("painful = causing pain", "forgetful = often forgetting things").
- [ ] Vocabulary practice is matching and fill-the-blank only; the spec also uses multiple choice.
