# Module C audit

Living doc: update the snapshot, grades and lists whenever Module C content changes.
Snapshot: 2026-09-19. Chain order: n-5cd02dfa (intro) -> Part A vocabulary (c-2) -> Part B reading (c-1) -> Part C writing (c-3).

Grades are 1-10 per node. `~` = judged from structure and a skim of sibling lessons in the same template, not a full read of the exercises, so the grade is less certain. n-649ed18f and n-7c5330b8 were filled on 2026-09-19 and have not been played yet.

**Overall: about 7.5/10** (Part A 7, Part B 7.5, Part C 8).

## Part A: vocabulary (c-2)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| n-5cd02dfa (intro) | Doesn't know why words matter or where answers sit | Notice that answers sit next to anchor words | 7 | "80 words" claim (about 47 cards); flipped punctuation on 2 screens |
| q-words-1 | Lost points from misreading an instruction (wrong paragraph, ONE vs TWO) | Decode instruction phrases into "where to look" and "how many" | 8 | "Give TWO" returns in l12 |
| q-words-2 | Rewriting instead of completing; misreading circle / explain | Decode task verbs and the connectors because / in order to | 7 | Overlaps l11 |
| nav-words-1 | Missing the text's turns and direction | Recognize contrast, addition and result signals | 7 | however returns in l08 |
| nav-words-2 | Not telling an example from a finding or a direction | Read example, finding and increase/decrease signals | 7 | Same template |
| content-1a | Unknown topic words cause panic and skipped context | Recall people/community words in context | 8 (prototype, unplayed) | Preface prototype (2 screens: real passage + self-check of the 5 words, then a short node-specific plan; the same passage returns in round 3). The shared dictionary-vs-clock / minimum screen lives once in the section intro n-5cd02dfa, so the 7 vocab nodes don't repeat it. Reworked 2026-09-19 into 5 rounds (rounds 1-3 required via `requiredRounds: 3`, about 2-3 min each: 2 + 2 + 1 words, each with card, question, sentence pick, spell; round 4-5 optional: use in sentences, exam-level passage + writing), with hooks, match-pairs and retry of misses. Play it, then copy the pattern to the other five |
| content-2a ~ | Same | Recall growth/learning words | 6.5 | Template |
| content-2b ~ | Same | Recall impact/value words | 6.5 | Template |
| content-1c ~ | Same | Recall change/environment words | 6.5 | Template |
| content-2c | Same | Recall responsibility/society/health words | 6.5 | Round 2 has 0 scored questions |
| content-1b ~ | Same | Recall research/findings words | 6.5 | Requires content-2c, numbering out of order |
| vocab-test | No check that the words stuck | Retrieve words across all three groups | 6.5 | One question per concept; gates l00 |

**2026-09-19 rework (all Part A nodes, unplayed):** every vocab node now follows the content-1a pattern.
- **Preface:** a real passage or question block with the node's words in bold plus a self-check, then a short node-specific plan. The shared "dictionary vs clock / the minimum" screen lives once in the intro n-5cd02dfa, which was rewritten (no exercises, encouraging rhetorical questions, "about 50 words" instead of the wrong "80").
- **Rounds:** words are taught 2 at a time (card with example and memory hook, meaning question, sentence step, copy-spelling), then match-pairs of everything seen. The last required round adds the tool summary, the opening passage again, and a word-decoding question. `requiredRounds` = number of teaching rounds (2 or 3); then a review round and an exam-level round (both optional).
- **Rule:** a word is never an answer or a decoy before its card.
- **vocab-test:** five short rounds (9-10 items each, plus one written sentence at the end), every round mixes question, navigation and content words and gets harder round by round (clear distractors, then close ones, then confusable pairs like affect/effect), one fresh in-context item per word, missed items replayed; all five required. Rounds no longer map to a word group, so a failed round cannot name its group.
- **Still open:** the coverage audit (are these words really the minimum Module C needs?), playing every node, and timing the rounds. The vocab gate stays: vocab-test gates l00 on purpose.

Original note: the six content-word lessons are not prerequisites for the reading method, yet they gate it through vocab-test (kept on purpose, see "Section 1 purpose").

## Part B: reading (c-1)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| l00 | Reading everything (or nothing) and running out of time | Search with the question's keyword instead of reading | 8 | None big |
| l01 | Reading blind and getting lost | Build a map from title + paragraph 1 (topic, problem, direction) | 8 | Never reused after l03 |
| l02 | Answering a question you don't understand | Rate the question (traffic light); decode an unknown word in 30 seconds | 7.5 | Mostly isolated questions |
| l03 | No fixed way to find an answer | P1: question -> keyword -> locate -> read that sentence -> answer | 8.5 | None big |
| l04 | Slow search on number/name questions | Use numbers and names as anchors to jump to a paragraph | 6.5 | Hebrew-first mark drill |
| numbers-names-q | Applying anchors in real questions | Pick the number/name keyword, find the paragraph, answer | 5.5 | 10 rounds; typo; repeated card |
| l06 | Answering the opposite on NOT questions | Spot negation words and flip the task | 6.5 | Same drill template |
| not-q | Applying the flip in real questions | Eliminate the 3 true options to find the 1 false | 6.5 | Typo; repeated card |
| l07 | Listing many answers when MOST / ONLY wants one | Spot limiter words and give one specific answer | 6.5 | Same drill template |
| limiters-q | Applying limiters in real questions | Choose the single best-fit answer | 6.5 | Repeated opener |
| n-221188d1 | Not knowing which tool a question needs | Pick the tool, then chain the full method | 8 | however/but missing from it |
| l08 | Answering the wrong half of a "however" sentence | Mark contrast words; the point comes after them | 6.5 | After the summary, no framing |
| n-b46b7e2b | Applying contrast in exam questions | Read what follows however/but as the answer | 6 | One-line teaching screen |
| l09 ~ | Picking a plausible but wrong option | Multiple choice: read all 4, cross out, find proof in the right paragraph | 7.5 | None big |
| l10 ~ | Writing three opinions instead of one text answer | One answer from the text; question word -> signal (why -> because) | 7.5 | None big |
| l11 ~ | Rewriting, or completing with the wrong kind of answer | Continue the sentence; because = reason, in order to = purpose | 7 | Overlaps q-words-2 |
| l12 ~ | Losing half the points with one answer | Find two answers using addition signals and number them | 7.5 | Overlaps q-words-1 |
| n-649ed18f | Switching question types under time pressure | Apply the four formats quickly | 7.5 | New, unplayed |
| n-7c5330b8 | Not combining everything | Run the full method against a clock | 7.5 | New, unplayed |

## Part C: writing (c-3)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| yes-no | Describing instead of answering | Write a stance sentence ("I think / I do not think") | 8 | None big |
| because | Vague reasons | Connect the stance to a concrete reason with because | 7.5 | Thin practice; no link to reading |
| in-addition | Repeating the same reason | Add a second, different reason | 7.5 | Thin practice |
| for-example | Claims with no detail | Add a specific example | 7.5 | Thin practice |
| in-conclusion | No ending, or new ideas in it | Close with one sentence restating the stance | 7.5 | Thin practice |
| subject-verb | Language Use points lost to fragments | Check every sentence for subject + verb | 7.5 | None big |
| word-count | Penalties for too short or too long | Count and adjust to 70-90 words | 6.5 | Penalty numbers unverified |
| topic-volunteer | Not answering the question type | Build a full paragraph for a "Do you think" question | 8.5 | None big |
| topic-vacation | Listing options instead of choosing | Choose one and defend it ("What do you think") | 8 | One task per round |
| topic-school | Describing problems instead of proposing | Make a specific proposal with a reason ("What changes") | 8 | One task per round |
| topic-cellphone | "It depends" answers | Pick one specific age and justify it ("At what age") | 8 | One task per round |

## Fixed on 2026-09-19

- n-649ed18f and n-7c5330b8 were empty placeholders that kept Part C locked; both now have timed content.
- The speed claim was never tested; l03 now has a timed race (read everything vs. P1).
- No capstone; the two nodes above are now timed capstones, and n-221188d1 has a full-method round.

## Still open

- Rework the openers of numbers-names-q, not-q, limiters-q (typo, repeated card) and shorten numbers-names-q (10 rounds = two 5-round sets).
- Bridge line at the top of lessons that revisit earlier material (Give TWO, however/but, because).
- Link reading and writing: one screen in each Part C connector lesson.
- l08: open with "question-side tools" vs. "text-side signals"; give n-b46b7e2b a real teaching screen.
- Writing feedback is structural only (sentence count, capitalization, word bank); it cannot judge quality.
- A single stopwatch across mixed formats (typed answers) needs a runner-level timer.
- Read the `~` nodes in full and firm up their grades.

## Path to 10

A 10 = every node has distinct content (no template placeholders), at least 2 practice items per concept, its claims verified, a later retrieval, and has been played end to end. Ordered by points gained per effort. Vocab nodes are not limited to 4 question types: use any scored screen type that fits (see "Vocab question types" below).

### 1. Replace placeholder/template content (biggest lift)

The 6.5s are almost all templates: the six content-word lessons, l04/l06/l07 drills, vocab-test. Each needs its own texts, distractors and wording. Start with numbers-names-q (5.5), the lowest node.

**Example A: content-1a (people & community).** What is there now: 5 words, each drilled as an `mcq` whose prompt already contains the Hebrew answer ("The ______ is under threat. - סביבה"), so the student matches a translation instead of recalling the word from context. Practice round 1 repeats the same 5 words in the same format. The preface opens with the panic word "environmentalists", but the lesson never teaches it (only "environment" is a card), so the hook is not paid off.

What a 10 looks like, using different screens for different skills:

| Step | Screen | Example |
|---|---|---|
| See | `word-card` x5 | as now, plus a note on **environmentalist**: "environment + -ist = a person who cares about it" |
| Recall in context, no Hebrew hint | `mcq` honeycomb | "Young ______ give their time to help others." volunteers / residents / charities / communities |
| Hear and spell | `spell-word` (listen) | plays "volunteer", student types it |
| Closed choice inside a sentence | `cloze-pick` | "A local ___ raised money for the school": charity / community |
| Find it in text | `mark-word` | "Which word means תושבים?" in "Most residents said the change was remarkable." |
| Colour-coded scan | `mark-all` with `categories` | people words in one colour, place/idea words in another |
| Exam-like use | `passage-mcq` | 3 sentences, question "Who said the change was remarkable?" -> residents |

Distractors should be real exam traps, not random words: word-family look-alikes (volunteer / voluntary), singular vs plural (community / communities), and a word from the same group that fits grammatically but not in meaning.

**Example B: numbers-names-q.** There is a mismatch: the preface teaches **names** ("THE TOOL - שם בשאלה"), but round 0 and most of round 1 practise **numbers** (gardens, stress, trees). Also a typo ("איך איך") and a repeated card. Fix: round 0 = 2 name questions on the Greenville text with a built-in trap, since both "Dr. Santos" and "Professor Lee" appear:
- "According to Dr. Santos, how much did the project cost?" -> 500,000 dollars (distractor: 85%, which is Professor Lee's survey)
- "According to Professor Lee's survey, how many residents are satisfied?" -> 85% (distractor: 500,000)

Then split the current 10 rounds into two 5-round sets (names first, numbers after), each set with a different text.

**Example C: l06 / not-q (negation).** Now: the same drill template as l04, and not-q has a repeated card and a typo. Instead give 3 different mini-texts, each with a different negation type: "never" (Students never...), "not only ... but also", "no longer / without". The task changes per text: text 1, mark the negation; text 2, flip the question ("Which is NOT true?") and cross out the 3 true options; text 3, write which sentence proves the false option is false.

**Example D: vocab-test.** Now: one question per concept, and it gates l00. Better: 2 items per word (recognition Hebrew -> English, then in-context `cloze-pick`), about 20 items across the three groups, with a delayed item (a word from content-1a asked again in the context of content-2c). Below 80% the test names the weak group ("חזרו על: מחקר וממצאים") instead of only failing.

### 2. Fix gating and order

Content-word lessons don't teach the reading method but gate it via vocab-test. Either unlock l00 without them (vocab as a parallel track) or make vocab-test check only what l00-l03 need. Renumber content-1b / content-2c (content-1b requires content-2c today).

### 3. Spiral, don't repeat

Give the repeats (Give TWO, however/but, because) a bridge line, and make them apply the earlier skill instead of re-teaching it. Example at the top of l12: "ב-q-words-1 למדת ש-TWO אומר שתי תשובות. עכשיו נמצא אותן בטקסט." Reuse the l01 map (topic / problem / direction) in later lessons: "before answering, say the direction of the text in three words."

### 4. Connect reading and writing

One screen per Part C connector lesson that reuses a reading passage. Example in `because`: show the Greenville text, then the prompt "Do you think the project was worth 500,000 dollars? Start with *I think*, then use *because* and a fact from paragraph III (85% satisfied, stress down 40%)." Then thicken because / in-addition / for-example / in-conclusion to 2+ rounds each.

### 5. Fix facts

"80 words" (about 47 cards), word-count penalty numbers, flipped punctuation, typos. Cheap check: search all content files for repeated words ("איך איך"), duplicated prompt strings across nodes, and numbers quoted in teaching text.

### 6. Verify with play

Without this, 8+ grades stay opinion. Three layers, cheapest first.

**a) Play the two new capstones (n-649ed18f, n-7c5330b8) yourself.** Checklist:
- The stopwatch starts on the first screen and stops on the last, not on a mid-round retry.
- The time-comparison in l03 shows a sensible message when both times are equal (`tieMessage`), and never claims "P1 is faster" when the data says otherwise.
- 80% pass: with 5 scored questions, 4 correct passes and 3 does not; the retry must not carry the old timer.
- Typed answers in `passage-quiz`: does "2,000" vs "2000" break the keyword match? Avoid numbers in keywords (see lesson-structure.md).
- Try to fail on purpose (leave every answer blank, tap only extra words in `mark-all`) and confirm the feedback makes sense.

**b) Read the `~` nodes in full (l09-l12, content-2a/2b/1c/1b) and re-grade with a fixed rubric.** Score each node 0-2.5 on four things, so grades stop being impressions:
- *Distinct*: are the prompts, texts and distractors unique to this node? (a repeated card or template = 0)
- *Depth*: 2+ practice items per concept, in more than one screen type?
- *Accurate*: no typos, numbers match the text, every mcq has a single defensible answer and an explanation?
- *Transfer*: does one screen apply the skill to a fresh text or a real exam-style question?

Example: l09 (multiple choice) - distinct 2.5, depth 2, accurate 1.5 (one option is arguably also correct), transfer 2 = 8. Write the four sub-scores in the Main issue column when re-grading.

**c) Run 2-3 real students (one weak, one average, one strong), 20-30 minutes each, one section at a time.** Sit beside them, do not help, and write down:
- Where they hesitate more than about 10 seconds, and where they stop reading the instructions.
- Every wrong answer and *why* they say they chose it (that is where distractor problems show up).
- One transfer question at the end, off the app: "Here is a new question with a number in it - what do you do first?"

Turning observations into changes:

| Observation | Likely cause | Action |
|---|---|---|
| 3 of 3 pick "residents" for "volunteers" | Distractor too close, or Hebrew hint ambiguous | Remove the hint, or replace the distractor |
| All get every item right in 2 seconds | Item tests recognition only | Move to a context or spelling item |
| A student skips the preface | Preface too long or too abstract | Split into two screens; open with a mistake that costs points |
| Student passes the lesson but fails the transfer question | Practice never left the lesson's own text | Add a fresh-text question to round 0 |

Rule of thumb: an item everyone misses is broken or unteachable; an item everyone gets in 2 seconds is too easy; a node where a strong student stops is boring, not hard.

The app stores only rounds done (`lessonProgress`), not per-question results. For 2-3 students, observation is enough. Add per-question logging only if this grows past a handful of students (YAGNI).

### 7. Tooling (last)

**a) Runner-level timer for mixed-format capstones.** Today a stopwatch is per screen (`timerKey` exists on `passage-mcq` and `mark-all` only), so a capstone that mixes `mcq`, typed `passage-quiz`, `cloze-pick` and `mark-all` can't be timed as one race. Design, kept small:

```ts
// types.ts
interface LessonRound { screens: LessonScreen[]; timerKey?: string; limitMs?: number }
```

- If `timerKey` is set, LessonRunner starts the clock when the first screen shows and stops it at finish; `time-result` and `time-comparison` already read from the same per-round bag.
- If `limitMs` is also set, show a shrinking bar; when it hits 0, unanswered screens count as wrong and the runner goes to the finish screen. Without it, it's a pure stopwatch, as in the l03 race.
- No new screen type needed. Only worth building because n-649ed18f and n-7c5330b8 need timing across formats.

**b) Writing feedback that can judge quality.** Today it only checks structure (sentence count, capitalisation, word bank), so this passes: *"I think yes because it is good. In addition it is good. For example it is good. In conclusion it is good."* Ladder from cheap to expensive; stop when the feedback is good enough:
1. **Lint rules, no AI.** Flag vague words (good, nice, fun, bad) in the reason sentence: "הסיבה כללית - מה בדיוק טוב?". Flag the same content word in stance and reason, and a second reason that repeats the first reason's words. Deterministic, offline, free.
2. **Self-check with model answer + rubric ticks.** The `self-check` type exists: student writes, sees a model answer, ticks 3-4 criteria ("יש דוגמה ספציפית", "הסיבה שונה מהראשונה"). Zero cost, teaches self-editing.
3. **Model-graded feedback (Claude API).** Only if 1-2 fail. Needs a backend (no key in the client), costs per submission, adds latency, and needs privacy care for minors' text. Constrain the output to the same 3-4 rubric criteria, not a free-form grade.

Recommendation: do 1 and 2 first; they cover most of the gap at a fraction of the cost.

### Vocab question types

Vocab nodes (Part A) are not limited to 4 question types. They currently lean on `mcq` + `self-check`; use `spell-word`, `cloze-pick`, `mark-word`, `mark-all` (with categories), `passage-mcq` and `word-card` wherever they fit, as in Example A above. See docs/lesson-structure.md for what each type scores.

### Section 1 purpose

Part A gives the minimum vocabulary needed to solve Module C; without it students are close to doomed. There is a dictionary in the exam, but the clock runs, so the words must be known. Every vocab preface should say this truthfully (no invented time numbers until measured), and the word list should be checked against the real module texts (coverage audit) so "minimum" is true. That is also why vocab-test gates l00: keep the gate, and make the test check the words that matter.
