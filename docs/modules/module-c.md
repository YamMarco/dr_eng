# Module C audit

Living doc, present state only. Update grades, issues and the "Open" list whenever Module C content changes. Lesson ids are `c-` prefixed (`c-l06`, `c-q-words-1`, `c-exam-4`); below the prefix is dropped.

Chain: intro `5cd02dfa` -> Part A vocabulary (c-2) -> Part B reading (c-1) -> Part C writing (c-3). Vocabulary runs in parallel with reading: `l00` is open from the start (restore the gate with `required: ['vocab-test']`).

Grades are 1-10 per node and are opinion until played. `~` = judged from structure and sibling lessons, not a full read. **Nothing here has been played by a student yet** except where noted. Overall about 7.6 (Part A 7, Part B 7.5, Part C 8.5).

## Definition of a 10

Every node has: distinct content (no template placeholders, no repeated cards); 2+ practice items per concept in more than one screen type; one transfer item on an unseen text; a later retrieval; verified facts (numbers, penalties, exam structure); one play-through by a person.

## Part A: vocabulary (c-2)

Pattern (from content-1a): preface with a real passage and a self-check, then rounds of 2 words (card with example and hook, meaning question, sentence step, copy-spelling), match-pairs, then a review round (incl. listen-mode spelling) and an optional exam-level round. `requiredRounds` = teaching rounds (2 or 3). A word is never an answer or decoy before its card. The shared "dictionary vs clock / the minimum" screen lives once in the intro.

| Node | Micro-skill | Grade | Main issue |
|---|---|---|---|
| 5cd02dfa (intro) | Notice that answers sit next to anchor words | 7 | Flipped punctuation on 2 screens |
| q-words-1 | Decode instruction phrases (where to look, how many) | 8 | "Give TWO" returns in l12 |
| q-words-2 | Decode task verbs, because / in order to | 7 | Overlaps l11 |
| nav-words-1 | Contrast, addition, result signals | 7 | however returns in l08 |
| nav-words-2 | Example, finding, increase/decrease signals | 7 | Same template |
| content-1a | People/community words | 8 | Prototype pattern, unplayed |
| content-2a ~, 2b ~, 1c ~, 1b ~ | Growth, impact, change, research words | 6.5 | Template; 1b requires 2c (numbering out of order) |
| content-2c | Responsibility/society/health words | 6.5 | Round 2 has 0 scored questions |
| vocab-test | Retrieve words across all groups | 6.5 | 5 required rounds of rising difficulty, one fresh item per word; a failed round cannot name its weak group |

## Part B: reading (c-1)

Rounds follow the reading round pattern in `lesson-structure.md`. Rounds are optional only after the first exam-level round.

| Node | Micro-skill | Grade | Main issue |
|---|---|---|---|
| l00 | Search with the question's keyword | 8 | "1:45" exam length unconfirmed (plan says 90 min) |
| l01 | Map from title + paragraph 1 | 8 | Never reused after l03 |
| l02 | Traffic light; decode an unknown word | 8 | |
| l03 | P1: question -> keyword -> locate -> answer | 8.5 | Title "P1 - ..." is jargon |
| l04 | Numbers and names as anchors | 7 | |
| numbers-names-q | Pick the anchor, find the paragraph | 7.5 | |
| l06 | Spot negation, flip the task | 6.5 | Drill template |
| not-q | Eliminate 3 true options to find the false one | 6.5 | Typo, repeated card |
| l07 | Limiter words (THE MOST / ONLY) | 7 | |
| limiters-q | Single best-fit answer; most (one) vs most (majority) | 7.5 | |
| 221188d1 | Pick the tool, chain the full method | 8 | however/but missing; `requiredRounds: 4` |
| l08 | Mark contrast words; the point comes after | 6.5 | No framing after the summary |
| b46b7e2b | Apply contrast in exam questions | 6 | One-line teaching screen |
| l09 | Multiple choice: read all 4, cross out, prove | 8 | |
| l10 | One text answer; question word -> signal (typed, keyword-checked) | 8 | |
| l11 | Complete the sentence; because = reason, in order to = purpose | 7.5 | Overlaps q-words-2 |
| l12 | Two answers via addition signals | 8 | Overlaps q-words-1 |
| 649ed18f | Four question formats quickly (2 rounds, exam round on THE WALKING BUS) | 7.5 | Unplayed |
| 7c5330b8 | Full method vs a clock (2 rounds, exam round on THE QUIET HOUR, 250 words) | 7.5 | Exam text is under the handbook's 300 words |

## Part C: writing (c-3)

Every round is required. Micro-skill rounds are a snowball (each repeats the earlier moves and adds one), 3 reps each on MIKUD topics. Writing tasks use paragraph mode (one box, counter, official length line) with `modelAnswer` + `checklist` self-review. Topic lessons fade supports (template + bank -> connectors -> nothing) and end with an unseen MIKUD topic and a 20-minute countdown. Facts verified against the 3-point handbook (Feb 2025), RubricsCD2020 and MIKUD 2026 (see memory: bagrut-module-c-rubric).

| Node | Micro-skill | Grade |
|---|---|---|
| yes-no | Stance sentence ("I think / I do not think"); checked against `acceptedAnswers` | 8 |
| because | Concrete reason, upgrade the weak sentence | 8.5 |
| in-addition | A second, different reason | 8.5 |
| for-example | Specific example, reading-to-writing (Greenville) | 8.5 |
| in-conclusion | Restate the stance; full 4-sentence skeleton | 8.5 |
| subject-verb | Subject + verb in every sentence | 8.5 |
| word-count | Penalty table, 70-90 words, no penalty above 90 | 8.5 |
| topic-volunteer / vacation / school / cellphone | Full paragraph for "Do you think" / "What do you think" / "What changes" / "At what age" | 8.5 |

## Open

**Fix**
- Resolve exam length ("1:45" in l00 vs 90 min plan) and fix l00 to match.
- Verify or remove quoted facts: "90% of students" (l06), "14 points, 7 each" (l12).
- Rework the opener of not-q (typo, repeated card); l03 jargon title; drop "P" pointers from student-facing text.
- Bridge line at the top of nodes that revisit a skill (Give TWO, however/but, because): apply the earlier skill, do not re-teach it. Reuse the l01 map in later lessons.
- l08: open with "question-side tools" vs "text-side signals"; give b46b7e2b a real teaching screen.
- Link reading to writing in because / in-addition / in-conclusion (for-example already does it).
- Typed answers in the summary rounds are keyword-checked, not judged.
- Read the `~` nodes in full and re-grade.

**Templates (biggest lift).** The 6.5s are template content: content-1b/1c/2a/2b/2c, l06, not-q, vocab-test. Each needs its own texts, distractors and wording, using any scored screen type (see below). Distractors are real exam traps: word-family look-alikes (volunteer / voluntary), singular vs plural, same-group words that fit grammatically but not in meaning. Vocab-test target: 2 items per word (recognition, then in-context), a delayed item across groups, and below 80% it names the weak group. Vocabulary coverage audit: are these words really the minimum Module C needs?

**Missing for exam readiness**
- Question types with no node: main idea, reference, inference, author's attitude (about 24 nodes, XL). Order easy to hard: main idea, reference, inference, attitude; each with a keyword card, a mark step, an autopsy of wrong options, an unlabeled item, a bridge to earlier tools.
- Exam layer: time-management nodes (40/20 split, mark-and-move after 90 s), an unlabeled mixed set (about 350 words, 6 questions, no skill hints), half exams, a full 90-minute mock, a static "where you lost points" screen authored per set. Capstones' "the clock does not affect the grade" line goes once the timer limits.
- Retrieval: after each section gate, a review node built from old items in new wrappers; a Part A word appears in a Part B question with no hint.
- Runner-level timer for mixed-format rounds (see Tooling).
- Writing: an error-clinic / sentences-that-work lesson; more topic variety.
- Memorised passages: the same Green Africa / Greenville texts recur across Part B. Unlabeled sets and transfer items must use unseen texts; plan one text pool.

## Reusable patterns (no new screen type)

- **Predict first:** `self-check` with options hidden, then reveal the `mcq`.
- **Prove it:** `mark-all` "tap the words that prove the answer".
- **Distractor autopsy:** one `mcq` per wrong option (contradicts / true but other paragraph / not mentioned).
- **Fix the friend:** a student's wrong reasoning to correct, then a rubric tick list (not a shown model answer).
- **Which answer earns full marks:** three student answers, pick the best and say why.
- **Unlabeled set:** a new text, questions labeled only Q1..Qn, no hints. Promote a pattern to a widget only if four or more nodes need it.

## Tooling

**Runner-level timer.** Today a stopwatch is per screen (`timerKey` on `passage-mcq` and `mark-all` only), so a capstone mixing `mcq`, typed `passage-quiz`, `cloze-pick` and `mark-all` cannot be one race. Design: `LessonRound { screens; timerKey?; limitMs? }`. With `timerKey`, LessonRunner starts the clock at the first screen and stops it at finish (`time-result` and `time-comparison` already read the per-round bag). With `limitMs`, a shrinking bar; at 0 unanswered screens count wrong and the runner goes to finish. A "flag and return" pass only if the first mock proves it is needed.

**Writing feedback.** Tier 1 (lint: vague words, repeats, empty examples) and tier 2 (model answer + rubric ticks) are in. Tier 3 (model-graded) only if students show these fall short; see `feedback-framework.md`.

## Verifying with play

1. **Capstones** (649ed18f, 7c5330b8, l03 race): stopwatch starts on the first screen and stops on the last, not on a retry; time-comparison tie message; 80% pass (4 of 5 passes, 3 does not) and the retry does not carry the old timer; `passage-quiz` keywords avoid numbers ("2,000" vs "2000"); try to fail on purpose (blank answers, extra taps in `mark-all`).
2. **Re-grade the `~` nodes** 0-2.5 on four things: distinct, depth, accurate, transfer. Write the sub-scores in Main issue.
3. **2-3 real students** (weak, average, strong), 20-30 minutes, one section, no help. Note hesitations over about 10 s, every wrong answer and why, and one off-app transfer question. An item everyone misses is broken; one everyone gets in 2 s is too easy; a node where a strong student stops is boring. Only rounds done are stored (`lessonProgress`), so observation is enough; no per-question logging until it grows past a handful of students.

## Standing rules

- Vocab nodes are not limited to 4 question types: use `spell-word`, `cloze-pick`, `mark-all` (with categories), `passage-mcq`, `word-card` wherever they fit (see `lesson-structure.md`).
- Flow arrows: browsers never mirror `→` / `←`. Use `←` in a line that renders RTL (first or last letter Hebrew), `→` in an English line.
- Paragraph markers in texts are `I  ` (not `**I**`). Full-size texts (100+ words) have a title; shorter excerpts stay untitled.
- Sentence-completion matching ignores punctuation and and/or/the/a (`isSentenceCompletionMatch`).
- A mark-all with exactly one target is strict (no stray tap); with more targets 70% found and at most 1 stray tap.
- Part A purpose: the minimum vocabulary needed to solve Module C. There is a dictionary in the exam but the clock runs. Prefaces say this truthfully, with no invented time numbers until measured.
- After content changes: `npm run check` in `front/`, `graphify update .`, then update this file.
