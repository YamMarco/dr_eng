# Module C roadmap: from 7.5 to 9

Companion to [module-c-audit.md](module-c-audit.md) (per-node grades, "Path to 10"). The audit says what is wrong node by node. This says what to build, in what order, and what "done" means.
Written 2026-09-19 from: the audit, docs/module c/duolingo-program.md (the 26-section plan), docs/lesson-structure.md, imporve.md, and a read of Part B in full plus samples of Parts A and C.

Lens: a student should be able to explain each skill back in their own words (Feynman), meet it in an exam-like setting with no hints, and be timed doing it.

## Where we are

| Area | Audit | This review | Gap in one line |
|---|---|---|---|
| Part A vocab | 6.5 to 8 | strong design, two nodes read in depth | five of the seven content nodes are still template-grade |
| Part B reading | 5.5 to 8.5 | method spine strong | four question types and all time training are missing |
| Part C writing | 6.5 to 8.5 | micro-skill order right | feedback is structural only; thin practice in the connector lessons |
| Exam readiness | not graded | 5.5 | capstones are short quizzes; no mock, no forced mark-and-move |

Overall 7.5. A 9 needs three things the audit's "Path to 10" does not cover: the missing question types, exam-condition training, and explain-back practice. It also needs the audit's own items: distinct content, verified facts, played nodes.

## What "9" means (definition of done)

**Per node**
1. Distinct content: no template placeholders, no repeated cards.
2. At least 2 practice items per concept, in more than one screen type.
3. One transfer item on a text the student has not seen in this lesson.
4. One explain-back item with a rubric (see Patterns), not a model answer shown up front.
5. A later retrieval: the skill returns in a later node or a review node.
6. Facts verified (numbers, penalties, exam structure).
7. Played end to end once by a person.

**Per path**
- Every question type on the real exam has a node: detail, multiple choice, complete the sentence, two answers, reference, inference, main idea, author's attitude.
- At least one unlabeled mixed set and one full timed mock.
- Writing feedback that can tell a specific reason from a vague one.

## Decisions needed before building

| # | Decision | Why it blocks | Suggested default |
|---|---|---|---|
| D1 | Real exam length: l00 says "1:45", the plan says 90 minutes (40 read, 20 write, rest review) | The mock, the time nodes and l00 must agree | Confirm against the teacher's docs, then fix l00 |
| D2 | Does vocab-test gate l00? The audit says yes on purpose, but l00 in c-1.ts currently has `required: []` | Path order decides what a new student meets first | Decide, then make code and audit match |
| D3 | Order of the four missing question types | Sets the content queue | Easy to hard: main idea, reference, inference, attitude. Reorder if past exams show a different frequency |
| D4 | Writing feedback tier (lint, rubric ticks, model-graded) | Sets whether a backend is needed | Lint + rubric ticks first; model-graded only if those prove too weak |
| D5 | Source of new texts | Every phase below needs unseen passages | Use the plan's pool of 20 originals (docs/module c/program/*.docx); each text 2 to 3 times: mark, questions, timed |

## Phases

Ordered so that facts are settled before content is written, tooling exists before it is needed, and content lands on the nodes that are already being touched.

### Phase 0: Truth pass (hours, no design)

Cheap, removes credibility problems, and fixes facts the later phases quote.
- Resolve D1 and correct l00 (and any other "1:45").
- Verify or remove: "90% of students" (l06), word-count penalty scale (word-count), "14 points, 7 each" (l12). Audit already lists the penalties as unverified.
- Doubled "איך איך" opener in numbers-names-q and not-q; the repeated "THE TOOL" card in numbers-names-q.
- l03 title "P1 - ניווט בטקסט": drop the jargon from the student-facing title (imporve.md already asked to remove P pointers).
- sectionMeta intros are stale: Part A says "ארבעה שיעורים" (there are 12 nodes), Part B says "שלושה־עשר" (19 nodes).
- Flipped punctuation on the two intro screens (audit).

### Phase 1: Baseline (play and read, no building)

- Play the two capstones and l03's race; run the audit's fail-on-purpose checklist.
- Read the `~` nodes in full (content-2a, 2b, 1b, 1c, l09 to l12) and re-grade with the audit's four-part 0 to 2.5 rubric. This review already read l09 to l12; fold those in.
- Run 2 to 3 real students on one section (audit 6c). Record hesitations, wrong answers with their reasons, and one off-app transfer question.

Output: an updated audit table. Everything below is prioritised against real observations, not impressions.

### Phase 2: Fix the templates (audit "Path to 10" items 1, 2, 3, 5)

The 6.5s and the 5.5. Combine with explain-back so each node is opened once.
1. numbers-names-q: split into a names set and a numbers set (5 rounds each, different texts); round 0 uses the Santos / Lee trap from the audit.
2. l04 / l06 / l07: three different mini-texts per node with different tasks (mark, flip the question, prove why an option is false), not one drill template.
3. Six content-word nodes: copy the content-1a pattern; recall in context with no Hebrew hint; distractors are word-family look-alikes and singular/plural, not random words.
4. vocab-test: two items per word, one delayed item across groups, and a failed round names the weak group. Settle D2.
5. Bridge lines at the top of every node that revisits a skill (Give TWO, however/but, because, complete the sentence), so it applies rather than re-teaches.
6. l09 to l12: replace the explain-back screens (see Patterns) and remove the skill-naming hints from the exam-level round.
7. l08 and n-b46b7e2b: real framing and a real teaching screen (audit).

### Phase 3: Timer tooling (small, unblocks Phase 4)

One change, per the audit's design: a round-level stopwatch, `LessonRound { screens; timerKey?; limitMs? }`.
- `timerKey` starts on the first screen and stops at the finish; `time-result` and `time-comparison` already read it.
- `limitMs` adds a shrinking bar; at zero, unanswered screens count as wrong and the runner goes to the finish screen.
- Add "mark and move": after 90 seconds on one screen the only offered action is skip-and-flag (this is the plan's section 22.2 behaviour).
No new screen type. If the flag needs a return-to-flagged pass at the end, that is a second, separate step: build only when the first mock proves it is needed (YAGNI).

### Phase 4: Exam layer (highest return on exam outcomes)

Plan sections 22 and 26. Your plan states most failing students know the material and lose to the clock.
1. Time-management nodes: the 40/20 split, mark-and-move at 90 seconds, what to flag first, traffic light drives the flag decision (plan 22.1 to 22.4).
2. Unlabeled mixed set (see Patterns): about 350 words, 6 questions, no skill hints, two hard on purpose, a trap number, an unfamiliar word in a question.
3. Half exams: reading (35 minutes) then writing (20 minutes).
4. Full mock (90 minutes) and a static "where you lost points" screen. Author it per set ("missed Q2 or Q5: revisit not-q and TWO answers"). Do not build per-question logging until there are more than a handful of students (audit's YAGNI).
5. Replace the current capstones' "the clock does not affect the grade" line: the timer now limits.

### Phase 5: The four missing question types (largest content block)

Plan sections 13 to 16, roughly 24 nodes. Ship one section at a time, each with: keyword/tool card, a mark step (find the evidence), an autopsy of wrong options, an unlabeled item at the end, and a bridge to the earlier tools.
- **Main idea (S15):** topic-sentence test; "early is not central". Unlike detail questions, there is no single sentence to find.
- **Reference (S13):** go one sentence back, take the last noun, substitute to check, ignore nouns in the same sentence.
- **Inference (S14):** classify detail vs inference by the question word; mark two data points before reading the options; "logical" is not "implied".
- **Author's attitude (S16):** attitude words act as the eye catchers here, not numbers or names; prove the tone with a word from the text.
Each section ends in a gate. Each adds at least one new text to the pool for the Phase 4 mixed sets.

### Phase 6: Writing depth and feedback

1. Feedback tier 1: lint for vague reason words (good, nice, important), a second reason that repeats the first, the same content word in stance and reason. Deterministic and offline.
2. Feedback tier 2: rubric ticks in `self-check` after a model answer: "I said YES or NO in sentence 1", "my reason is specific", "my example has a detail". Zero cost and it teaches self-editing.
3. Tier 3 (model-graded) only if 1 and 2 fall short, and it needs a backend and privacy review for minors' text.
4. Thicken because / in-addition / for-example / in-conclusion to 2 or more rounds each, with different topics (yes-no round 2 is currently five near-identical prompts).
5. Link reading to writing: one screen per connector lesson on a reading passage, e.g. Greenville: "Do you think the project was worth 500,000 dollars?"
6. Add the plan's error clinic and a sentences-that-work lesson (subject-verb has one lesson and no grammar practice beyond it).
7. Pool of writing topics beyond the four; add "What changes / At what age" style variety.

### Phase 7: Retrieval and spiral

The plan's "R" section (six review nodes spread over the path) and the audit's spiral item.
- After every section gate, a review node built from old items in new wrappers (2 or 3 skills, unlabeled).
- Vocab returns: a word from Part A appears in a Part B question with no hint.
- Reuse l01's map ("say the direction in three words") in later lessons.

### Phase 8: Re-verify

Play the new nodes; run the same 2 or 3 students again on a different section; update the audit grades and the Snapshot line. Only then claim a 9.

## Patterns (reusable, no new screen type unless noted)

**Predict first.** `self-check` with options hidden ("write in your own words what paragraph II says"), then reveal the `mcq`. The gap between the two is the lesson.

**Prove it.** `mark-all` on the paragraph: "tap the words that prove the answer". The student must produce the evidence, not just pick an option.

**Distractor autopsy.** One `mcq` per wrong option: contradicts the text / true but from another paragraph / not mentioned. Turns the two-distractor-types card into a skill.

**Fix the friend.** A student's wrong reasoning, presented; the learner corrects it, then ticks a rubric ("mentioned the proof", "named the paragraph", "did not say 'sounds right'"). Replaces "explain the four steps" recitals. The rubric replaces a shown model answer.

**Which answer earns full marks.** Three student answers to the same prompt; pick the best and say why. For Give TWO: a long one-sentence answer, a numbered pair, three answers.

**Unlabeled set.** A new text, questions labeled only Q1..Q6, no reminder banner, no "go to paragraph II". Skill map lives in the author's notes and drives the "where you lost points" screen.

If the same pattern is needed in four or more nodes, promote it to a reusable widget per project rules; until then build it from existing screens.

## Worked example: l09 today vs after

Same passage and question ("What do we learn from paragraph II about the project?").

Today: preface (story, 4-step tool, two distractor types, golden rule, teacher-annotated example) then round 0: the prompt says "go only to paragraph III", and the second question asks why an option was crossed out (answerable from the summary card). Round 4 is the same 3 short paragraphs and one question, then "explain the four steps" with the model answer shown.

After:
1. Predict (`self-check`, options hidden).
2. Choose (`mcq`, no paragraph hint).
3. Prove (`mark-all`: tap *teach local people how to care for them*).
4. Autopsy (three `mcq`, one per wrong option, classify it).
5. Fix the friend (rubric ticks, no model answer).
6. Transfer: new text, two MC questions, unlabeled.

## Dependencies

```
Phase 0 --> Phase 1 --> Phase 2 --> Phase 5
                 \-> Phase 3 --> Phase 4 --> Phase 8
Phase 2 --> Phase 6 --> Phase 7 --> Phase 8
```
Phase 3 can start in parallel with Phase 2. Phase 4 needs Phase 3 and the D1 answer. Phase 5 shares texts with Phase 4, so plan the text pool (D5) once.

## Effort (relative, not hours)

| Phase | Size | Note |
|---|---|---|
| 0 Truth pass | XS | one sitting |
| 1 Baseline | S | mostly people time |
| 2 Templates | L | about a dozen nodes, editing existing ones |
| 3 Timer | S | one runner change |
| 4 Exam layer | M | about 8 to 10 nodes plus 2 timed sets |
| 5 Missing types | XL | about 24 nodes, each needs a text |
| 6 Writing | M | lint is code; rest is content |
| 7 Retrieval | M | review nodes reuse old items |
| 8 Re-verify | S | people time |

If time is short, do 0, 1, 3, 4 first. Those alone remove the two biggest exam-day risks (time and no simulation) without needing the XL block.

## Risks

- **Memorised passages.** The same Green Africa and Greenville texts recur across most of Part B, so students can answer from memory. The unlabeled sets and the transfer items must use unseen texts, and the pool in D5 is what makes that possible.
- **Facts drift.** Exam length, penalty scale and point splits are quoted in several nodes. Fix once in Phase 0 and add a short "verified facts" list to the audit so later nodes copy from it.
- **Content volume.** Phase 5 is large. Cut a section rather than thin every node.
- **Untested grades.** Until Phase 1 and Phase 8, every grade above is opinion, including this review's.
- **Vocab gating.** If vocab-test stays a gate, a student who fails it never reaches the method. Keep the "names the weak group" behaviour so failure points somewhere.

## Conventions to keep

- Hebrew UI text only; teaching content inline in `c/*.ts`, never i18n.
- Non-linear kebab-case node ids; new nodes from c.2.8 on use `module.random` codes.
- No em-dashes in content: a single "-" at most.
- Content is long-form writing, not terse (imporve.md); share a text across lessons in different shapes, short first and longer later.
- After content changes: `npm run check` in `front/`, then `graphify update .`, then update the audit's Snapshot and grades.
