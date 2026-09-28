# Module C: quality report and plan

Date: 2026-09-28. **Scope: Part A (vocabulary, `c-2`) and Part B (reading, `c-1`).** Part C (writing, `c-3`) is excluded for now.

This is the single working document for Module C quality. It combines two independent audits of the live content:
- `claude_report.md`: screen-by-screen read, with every broken item checked against the source.
- `gpt_report.md`: screen-by-screen read, compared against the official 2026 exam paper.

Neither audit used the other. A claim that comes from only one of them is tagged **[C]** (Claude) or **[G]** (GPT); untagged claims come from both. Section 9 is where each reviewer gives its own view.

Content under review: 31 nodes (12 vocabulary, 19 reading), 142 rounds, 835 screens, about 555 scored questions.

---

## 1. Verdict

| | Teacher | Student |
|---|---|---|
| Part A vocabulary | 6.5 | 6.5 |
| Part B reading | 6.8 | 7.4 |
| **Overall** | **6.7** | **7.0** |

**Combined: 6.8/10.** The two audits came in at 6.5/7 (Claude) and 6.8/7.4 (GPT). The main gap was Part A: GPT gave it 7.4 but did not check answer keys. The broken items Claude found bring it down to 6.5.

**Value by use** [G] (estimates, not measured):
- As a bridge for a weak or anxious student: **8.3**
- As revision alongside classroom teaching: **7.3**
- As the only preparation a student uses: **5.8**

**Summary.** The reading method is good and fits the exam. The module is held back by three things:
1. **Item quality:** wrong keys, fake distractors, and tips taught as laws.
2. **Assessment validity:** the final tests are short and all multiple choice, and no written answer in Part B is ever scored.
3. **Progression:** a student can skip the transfer rounds, and the same texts come back so often that later rounds test memory.

## 2. The real exam

From the official 2026 summer B paper [G]:
- 1 hour 45 minutes. Reading is worth 70 points and writing 30. An approved dictionary is allowed.
- Reading is one text of 337 words in 4 paragraphs, with 9 questions.
- 4 of the 9 questions are multiple choice. The other 5 need a written English answer, including sentence completion.

How the module compares:

| | Real exam | Module C now |
|---|---|---|
| Passage length | 337 words | longest 165; capstones 139 and 113 [G] |
| Questions per text | 9 | 1-5 |
| Written answers | 5 of 9 | 0 scored (all `self-check`) |
| Timing | whole paper | per capstone screen only |

## 3. Scorecard by dimension

GPT's dimensions [G], with the teacher score adjusted where Claude's item check applies.

| Dimension | Teacher | Student | Judgment |
|---|---:|---:|---|
| Clarity and accessibility | 8.5 | 8.8 | Excellent Hebrew scaffolding and small steps |
| Teaching design | 8.0 | 8.1 | Modeling, guided practice, return to the opening passage |
| Vocabulary value | 6.8 | 7.5 | Useful 47-word core; broken keys and fake distractors lower rigor |
| Reading-strategy value | 7.2 | 8.0 | Memorable tools; two are taught as laws |
| Item accuracy | 5.5 | 5.5 | About 11 wrong or ambiguous items; this is what costs the most trust [C] |
| Practice depth | 7.0 | 7.0 | Lots of practice, but mostly recognition on recycled texts |
| Authentic exam alignment | 5.6 | 6.2 | Texts and capstones much shorter and more closed than the paper |
| Assessment validity | 5.5 | 6.3 | Finishing the module can look like mastery when it isn't |
| Motivation and confidence | 7.7 | 8.4 | Friendly and achievable |

## 4. Teacher's view

### Keep

- **The reading chain l00 to l03:** search mindset, title + paragraph I as a map, traffic light ("can I explain the question in Hebrew?"), then keyword to evidence. l03 is the best lesson in the module, and its timed race makes the speed claim concrete.
- **Instruction words taught in their own right** (q-words-1/2): according to, give ONE/TWO, complete, circle, because vs. in order to.
- **Named distractor types in l09:** "contradicts the text" and "true, but answers a different question".
- **Word-part decoding:** environment+ist, in+effective, en+danger+ed, ir+responsible.
- **content-2c** (and content-2b's affect/effect [G]) as the model for vocabulary items. Its wrong options are word forms and collocations, and its explanations say why each one fails.
- **n-221188d1** as the best synthesis node [G]. It is the natural base for a full simulation.

### Problems

**P1. Wrong or ambiguous items** [C]. All of these were checked against the source.

| Node | Item | Problem |
|---|---|---|
| q-words-2 r3 | mark-word "The road was closed because of the storm." | key is index 3 (**closed**); should be 4 (**because**) |
| content-1c r1 | "The storm ___ many houses." | **ruined** is also correct |
| content-1c r3 | "A rare ___ of frog" | **type** is also correct |
| content-1c r4 | 5 MCQs, no explanations | grow/increase, ruin/destroy, guard/protect, types/species: two correct options each |
| content-1c r4 | "What destroys forests every year?" | "Pollution" is partly correct |
| l02 r0 | "What does contribute mean?" | correct option labelled 🟢; the lesson's own rule makes it 🟡 |
| l08 r2 | "...but nothing was built... Although..." | *but* is not scored as a contrast word |
| l10 preface | "why do volunteers feel less stressed?" -> "Because they feel less stressed..." | circular answer |
| l08 preface, n-b46b7e2b r3 | "What does paragraph I say about people who cannot swim?" | "They feel embarrassed and never try" is also correct |
| limiters-q r0 | "in most cities, what is available? -> one answer" | the quantifier *most* is treated as a limiter |
| numbers-names-q r3 | "Give TWO" counted as a number anchor | TWO is an answer count, not a search target |

**P2. Tips taught as laws.**
- "After *however* is the answer."
- "*most* / *only* = one answer." This mixes up *the most effective* (one answer) with *most trees* (a quantifier).
- "I search, I don't read" is too absolute as a final philosophy [G]. The paper also asks about paragraph meaning and combining information.

**P3. Easy distractors in Part A.** About 49 lines use options like holiday / shoes / paint / sing ("Scientists ___ that... :: sang / ate / painted / found"). `lesson-structure.md` rule 1 bans these. The worst nodes are content-1a, 1b, 2a, 2b and vocab-test.

**P4. The final tests don't match the exam** [G]. n-649ed18f and n-7c5330b8 are short and all multiple choice. l10 to l12 teach written answers, but no final test measures them.

**P5. Recognition dominates production.** vocab-test is 46 MCQs, one cloze and one writing task. All 47 `spell-word` screens are `copy` mode [C]. Typed reading answers are all `self-check` (the model answer is shown, nothing is scored).

**P6. Progression and variety.**
- Only round 0 is required in reading nodes, so the fresh-text rounds can be skipped [G].
- Four texts (Green Africa, adult swimming, Greenville, volunteering) recur in about 15 nodes, so late rounds test memory [C].
- numbers-names-q has 10 rounds. The l04/l06/l07/l08 drills only mark words and never ask a question.
- Many "PRACTICE Round 1" rounds are true/false items about the method itself.

**P7. Inconsistent or unverified claims.**
- l10 and limiters-q say "two answers to ONE = 0". l12 says one missing answer loses half the points and that the checker reads the first two answers.
- "90% of students" (l06) and "14 points, 7 per answer" (l12) are unverified.
- "1:45" is correct [G].

**P8. The vocab gate is gone and the text wasn't updated** [C]. `l00.required` is `[]` since ce2e759, but l00 says "if you're here, you passed the words". The audit says to keep the gate.

**P9. Polish.**
- Typos: "איך איך", "הטקטסט", "טקטס", "תמי".
- Stray "ֿ" lines, broken bold markers, and the flipped period ".הן".
- Drill prefaces promise "ten sentences / seven paragraphs / four texts" but show 2 to 4 items [C].
- Part A's intro says "four lessons" (there are 12 nodes); Part B's says "thirteen" (there are 19).
- Nothing tells the student how long the route is [G].

## 5. Student's view

*A composite 11th-grade student on the 3-4 point track: reads slowly, is anxious about the exam, has about 3 weeks and a phone.*

**What helps**
- "I know what the question wants": according to, give ONE/TWO, complete, circle.
- "I have a first move": names and numbers as anchors, NOT as a warning, the traffic light.
- The WhatsApp-search hook and the l03 race changed how I approach the text.
- Hebrew guidance and short screens. Word cards with a memory hook. Going back to the opening passage and understanding it now.

**What hurts**
- **Too easy to guess:** "sang / ate / painted / found". The app says I succeeded, but the exam won't have joke options.
- **"Wrong" answers that were right** (ruined, grow, type). After that I stop trusting the app.
- **Part A is long:** 431 screens. Copying a word that's on the screen doesn't feel like learning, and I can't skip words I already know.
- **The same texts again and again.** By the end I answer from memory.
- **I can move on too early,** and I will when I'm short on time.
- **The final test gives false confidence.** A 113-word text with buttons isn't a 337-word paper where I must write five answers.
- **Scary numbers I can't check** ("90%", "you get 0"), and screens that say "ten sentences" and show two.

## 6. Node-by-node grades

These start from GPT's grades [G]. Nodes marked * were lowered for items Claude found broken [C].

### Part A: vocabulary

| Node | Teacher | Student | Note |
|---|---:|---:|---|
| n-5cd02dfa | 6.5 | 7.0 | Good motivation; doesn't show route length |
| q-words-1 | 8.0 | 8.2 | High-value instruction words |
| q-words-2 * | 7.3 | 7.8 | Strong reason/purpose split; mark-word key wrong |
| nav-words-1 | 7.5 | 7.7 | Useful connectors; *however* rule needs nuance |
| nav-words-2 | 7.2 | 7.4 | Clear signals; "sang/ate/painted" distractors |
| content-1a | 7.0 | 7.5 | Good hook and passage; bicycle/holiday distractors |
| content-1b | 6.3 | 7.0 | Useful words; mostly fake distractors |
| content-1c * | 5.5 | 6.0 | Five items with two correct answers; round 4 has no explanations |
| content-2a | 6.5 | 7.2 | Relevant words; sing/paint/cook distractors |
| content-2b | 7.5 | 7.7 | affect/effect is a valuable distinction |
| content-2c | 8.0 | 8.0 | The model node |
| vocab-test | 6.0 | 6.5 | Broad but recognition-only; wrong part-of-speech options |

### Part B: reading

| Node | Teacher | Student | Note |
|---|---:|---:|---|
| l00 | 7.5 | 8.5 | Excellent reset; slogan too absolute; preface assumes the vocab gate |
| l01 | 8.0 | 8.2 | 30-second map |
| l02 * | 7.8 | 8.0 | Strong self-monitoring; one colour label wrong |
| l03 | 8.5 | 8.3 | Best lesson |
| l04 | 6.5 | 7.0 | Marking drills only; count promises wrong |
| numbers-names-q * | 6.5 | 6.5 | Good transfer; 10 rounds; "TWO" as anchor; typo |
| l06 | 6.5 | 7.0 | Narrow drill; unverified "90%" |
| not-q | 7.6 | 7.4 | Solid checking routine |
| l07 * | 5.5 | 6.5 | Mixes up quantifier and superlative *most* |
| limiters-q * | 6.0 | 6.8 | Keeps the wrong rule |
| n-221188d1 | 8.0 | 8.0 | Best synthesis node |
| l08 * | 6.0 | 7.0 | *but* not scored; "however" treated as law |
| n-b46b7e2b * | 6.5 | 7.2 | Ambiguous swim item |
| l09 | 7.6 | 7.6 | Good distractor types |
| l10 * | 6.3 | 6.9 | Circular model answer; no scored written answer |
| l11 | 7.1 | 7.1 | Good reason/purpose and grammar check |
| l12 | 6.7 | 7.0 | Scoring advice needs checking |
| n-649ed18f | 5.6 | 6.5 | Short, all-MCQ recap |
| n-7c5330b8 | 5.0 | 6.2 | Called a full summary; far from the exam |

## 7. Plan

Ordered by value per effort. Each step says when it counts as done. After any content change, update `docs/module-c-audit.md` and this file's grades.

### Phase 1: trust fixes (about 1 day)

| # | Fix | Done when |
|---|---|---|
| 1 | Fix the 11 items in P1. Add explanations to content-1c r4 | Every MCQ has exactly one defensible answer; the q-words-2 key is `because` |
| 2 | Rewrite the tips as clues to check: "*however* often signals the writer's point, so check what the question asks"; only *the most / the only / the main* limit to one answer. Remove TWO from the anchor item | No screen states either tip as always true; limiters-q r0 and the swim item are rewritten |
| 3 | Use one consistent message about extra and missing answers, checked against official marking guidance. Verify or remove "90%" and "14/7" | l10, l12 and limiters-q agree; every number is either sourced or removed |
| 4 | Polish pass (P9), including a route-length line in each section intro | Searching for the typos returns nothing; the counts match the rounds |
| 5 | Decide the vocab gate: restore `required: ['vocab-test']` on l00, or reword l00's preface and the audit | l00's code and text agree |

### Phase 2: item rigor (about half a day)

| # | Fix | Done when |
|---|---|---|
| 6 | Replace fake distractors in content-1a, 1b, 2a, 2b, nav-words-2 and vocab-test using the content-2c pattern (word form, collocation, a same-node word that fits grammatically) | None of holiday / bicycle / window / sandwich / kitchen / shoes / paint / sing / cook / ate appear as options |

### Phase 3: validity (about 2 days)

| # | Fix | Done when |
|---|---|---|
| 7 | **Real final simulation.** Replace n-7c5330b8 with a 280-350-word, 4-paragraph text and about 9 questions in the exam mix (4 MCQ, short written answers, completion), timed as one run. Build it from n-221188d1's mix | Its length and question mix match section 2 |
| 8 | **Scored written answers** in l10, l11, l12 and the simulation: a `passage-quiz` with keyword scoring (no numbers in keywords), then the model answer and a 3-point checklist (answers the exact question, uses evidence, doesn't repeat the stem word) | At least one scored typed answer per node |
| 9 | **Require a fresh-text round** in each reading node with `requiredRounds`; keep extra repetition optional. Swap the recycled texts in the last rounds of l09 to l12 for new ones | Unlocking the next node means the student applied the skill to an unseen text |
| 10 | The simulation needs a whole-run timer. Build the runner-level `timerKey` on `LessonRound` (design in `module-c-audit.md` §7a) | One stopwatch across mixed screen types |

### Phase 4: efficiency and verification

| # | Fix | Done when |
|---|---|---|
| 11 | Part A placement: a 5-item quick check per content node that marks the teaching rounds done when passed. Switch half of `spell-word` to `listen` | A strong student can clear a node in under 2 minutes |
| 12 | Split numbers-names-q into names and numbers (5 rounds each, different texts). Give the l04/l06/l07/l08 drills one real question each | No reading node has more than 6 rounds |
| 13 | Play-test with 2-3 real students (`module-c-audit.md` §6c) | Notes captured, and grades re-set from what was observed |

**Expected grades:**
- After Phase 1-2: about **7.3**.
- After Phase 3: about **8.3** (both audits agree).
- Above that needs Phase 4's play-test to be more than opinion.

## 8. Open questions for you

1. **The vocab gate:** keep reading locked until vocab-test is done, or leave vocabulary as a parallel track?
2. **The simulation:** replace n-7c5330b8, or add a new node after it?
3. **Scoring advice:** do you have the official marking guidance for extra and missing answers? Step 3 depends on it.

## 9. Reviewers' views

### Claude

**What I care about most**
1. **Correctness before anything else.** A wrong key does more damage than a missing feature. The student stops trusting the feedback, and then even correct feedback stops teaching. That's why broken items are step 1 and why I graded Part A lower than GPT did.
2. **Transfer over recall.** A skill counts when it works on a text the student hasn't seen. Recycled texts and skippable fresh-text rounds both undermine this.
3. **Honest claims.** Numbers told to anxious teenagers ("90%", "you get 0") must be true or removed. Motivation built on invented stakes turns against the app.
4. **Keeping it small.** Every fix above uses existing screen types and one small runner change. Model-graded writing or a new question engine isn't needed yet.

**Where I agree with GPT**
- **The final tests are the biggest structural gap.** GPT was right, and I underweighted it. My report noted "self-check only" but didn't compare anything to the real paper. The 337-word, 5-written-answer comparison is the most important fact in this document.
- **Transfer rounds should be required.** I saw the recycling. GPT found the gating cause.
- **The tips need to be worded as clues to check.** We reached this independently.
- **content-2c is the standard, and n-221188d1 is the best synthesis node.**

**Where I disagree with GPT**
- **Part A at 7.4 is too high.** It rewards structure that's there on paper while about a quarter of the items can be guessed or are keyed wrong. The structure is good; the items aren't there yet.
- **"I search, I don't read" is not the problem GPT says it is.** For the target student (weak and translating every word), it is the right correction. I'd keep the slogan and add one line in l01 ("then read the paragraph that holds the answer") rather than soften it.
- **The value-by-use numbers (8.3 / 7.3 / 5.8) are guesses.** I kept them as useful framing but marked them as estimates. Nothing measured them.
- **Order of work.** GPT puts the simulation first. I'd fix items first: it's a day of work, it stops harm now, and a new simulation built alongside broken items would inherit the same problems.
- **Typed answers need care.** `passage-quiz` keyword matching is brittle (numbers, word forms). I'd use short keyword sets and keep the model-answer checklist, rather than scoring free text strictly.

**What I missed that GPT caught:** comparison with the official paper, the capstone lengths, and the `requiredRounds` gating on reading nodes.

**What GPT missed that I caught:** the 11 broken or ambiguous items, the removed vocab gate, the preface count mismatches, and copy-only spelling.

### GPT

*To be written by GPT.*
