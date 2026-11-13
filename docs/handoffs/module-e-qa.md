# Module E QA

Content audit of Module E (5-point level; 4 points has its own Module E content), graded as a student trying to learn and as a teacher checking the material. Scope: Part I lessons `content/e/e-1.ts`, exams `quiz/e/index.ts`, word decks `content/e/list-a..d.ts`. Update this file whenever a Module E item is fixed or found.

## Official spec (Ministry 5-point handbook, Module E 16471)

- 75 minutes, no dictionary. Glossary for words outside the bands.
- Reading 70%: 1 text, up to 400 words, **8-10 questions**. Task types: multiple choice, open-ended, sentence completion, **true/false with justification**, **graphic organizers (tables, timelines)**. Text types: article, informative text (ad, advice column, brochure, newsletter), interview, letter, report, review, personal account.
- Grammar errors: 1-2 points off on 5-7 point questions, 2-3 on 8-10 point questions. **Spelling: no deduction.**
- Vocabulary 30%: 5 questions × 6 points (2 per answer), Band I, II, III (Core 1) lists; fill-ins, multiple choice, matching.

Source: [5pointsbooklet2025.pdf](https://meyda.education.gov.il/files/pop/0files/english/Chativa-Elyona/Bagrut/updates/5pointsbooklet2025.pdf), pages 4-7.

### Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025)

Every paper has the same frame:
- One article, I-V, with line numbers in the margin. Glossary of about 4-8 underlined words, translated into 6 languages (Hebrew, Arabic, Spanish, Russian, French, Amharic).
- **Exactly 9 questions, all compulsory, 7 or 8 points each (total 70).** No "answer X of Y", no "choose TWO", no true/false, no tables.
- **4 multiple choice, one answer out of i-iv.** Q1 is always one of them ("What are we told in paragraph I?" / "What do we learn from paragraph I about storms?" / "What is presented in paragraph I?"). The other three mix:
  - topic questions ("What are we told in paragraph III about daydreaming?")
  - inference ("What can we understand about the residents...?")
  - reference ("In line 24, the writer refers to 'the same goal.' What is that goal?")
  - common ground ("What do the benefits described in paragraph III have in common?")
- **5 open:** COMPLETE THE SENTENCE / COMPLETE THE ANSWER (Because..., In order to..., The same as...) / ANSWER. Often "Give ONE answer / example" (several are correct) and "Base your answer on lines 14–16".
- Vocabulary: 5 sets, 6 items, 3 definitions, 2 points per match (the app's format is right).

Downloaded from `meyda.education.gov.il/sheeloney_bagrut/<year>/<month>/HEB/16471.pdf`.

## Grades (10 = best)

| Part | Student | Teacher |
|---|---|---|
| Part I reading lessons | 7 | 6.5 |
| Practice exams | 6.5 | 5.5 |
| Word decks | 8.5 | 8.5 |
| **Module E overall** | **7** | |

The biggest open items are the format mismatch between the lessons and the exams, the missing question types, and keyword-only grading of typed answers.

## Part I - reading lessons

Chain: e-bridge (exam facts) → e-method (method + Library exam-level text) → e-topic → e-topic-q → e-complete → e-glossary-time → e-final.

Strengths: e-topic's "name the paragraph in 3-4 words, then choose" method and its 3 traps (true detail, another paragraph's topic, wrong question word); e-complete's By + ing / to + base verb summary.

- [ ] **App exams ≠ real format.** The lessons' 9 questions (4 MCQs + 5 open) match the real papers. The app exams don't: they have 7 questions, "choose TWO" (14 points) and "Give TWO answers" (16 points). Their e-exam-3 Q1 marks a detail as correct, which clashes with e-topic. Fix the exams, not the lessons.
- [ ] **Real question kinds never taught:** line references ("Base your answer on lines 14–16", "In line 24, the writer refers to..."), "Give ONE answer" (several are correct, pick one), inference MCQs ("What can we understand about..."), "What do we learn about X from paragraph Y", "What do ... have in common?". The real papers have no true/false or tables, so those wait.
- [ ] **The lessons say "4 topic questions";** the real 4 MCQs are 1-2 topic questions plus inference / reference / about-X questions. Update the e-bridge summary.
- [ ] **Typed answers are graded by keyword only:** "By joined a tour" passes, so the By + ing form is never checked. Wrong keys: Repair Café Q1 needs "free" (rejects "By organising a Repair Café"); Q2 accepts only "waste" (rejects "to teach people to fix things"). The fix exists (Module G uses it): `"e-1": { "llmGrade": true }` in `content/rules.json` sends them to the LLM reading grader against each question's `answerHint`; keywords stay as the fallback and take `a|b` alternatives.
- [x] Right answer no longer always first: lesson passage-mcq and cloze-pick shuffle their options (shared with mcq).
- [x] Grading facts taught in e-complete: grammar costs 1-3 points, spelling costs nothing (a summary screen + a "By joinning" question). The final-check line in e-glossary-time names the verb forms.
- [x] Weak lesson distractors replaced with tempting ones: "libraries" (appears all over the text, so it's a poor keyword), "For a few weeks", "Helen spent a whole summer building the shelves" (a detail that sounds big), "היא לא מופיעה בכתבה בכלל".
- [x] Typos: "ברך כלל", "במקומו**y**:", the bold run-on in the first screen, "תזכורת:  על פסקה קצרה".
- [x] First screen within the phone limit (about 200 characters).
- [x] Paragraph markers `**II**` / `**V **` → `II  ` (side marker).
- [x] Method before exam level: e-method now follows e-bridge on the main path and holds the Library exam-level round.
- [x] Library article no longer read in full a third time: e-glossary-time uses a new text ("The Fridge on the Corner", new glossary, 3 of 4 questions need a glossary word).
- [x] e-topic-q round 1 no longer gives away the paragraph V answer.

## Practice exams (e-exam-1..4)

Strengths: readable texts; feedback on every option with a quote from the text.

- [ ] **Off-spec format:** 7 questions with 14- and 16-point "TWO" items. Real papers: 9 questions of 7-8 points, 4 MCQs with one answer, all compulsory (the runner's "answer N of these" parts aren't needed here).
- [ ] No line numbers in the passage, so line-reference questions can't be asked.
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
