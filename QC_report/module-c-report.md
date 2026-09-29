# Module C: quality report and plan

Date: 2026-09-28. **Scope: Part A (vocabulary, `c-2`) and Part B (reading, `c-1`).** Part C (writing, `c-3`) is excluded for now.

**Scope update (2026-09-29):** Section 12 is a new post-fix review of Parts A, B **and C**, including the separate Module C exam quizzes. The opening scope and earlier grades are retained as historical snapshots, not current conclusions.

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
*(r3, 2026-09-28: all 11 fixed in c-1.ts / c-2.ts. Plan step 1 is done. The table is kept as the record of what was wrong.)*

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
*(r3, 2026-09-28: fixed. About 35 items were rewritten with the content-2c pattern, and each has an explanation. Plan step 6 is done.)*

**P4. The final tests don't match the exam** [G]. n-649ed18f and n-7c5330b8 are short and all multiple choice. l10 to l12 teach written answers, but no final test measures them.

**P5. Recognition dominates production.** vocab-test is 46 MCQs, one cloze and one writing task. All 47 `spell-word` screens are `copy` mode [C]. Typed reading answers are all `self-check` (the model answer is shown, nothing is scored).
*(r3, 2026-09-28: spelling part fixed. 48 listen-mode spelling screens were added: every vocab review round, plus 2 per vocab-test round, which is required. Copy mode is kept. vocab-test being mostly multiple choice and the unscored reading answers are still open: plan step 8.)*

**P6. Progression and variety.**
- Only round 0 is required in reading nodes, so the fresh-text rounds can be skipped [G].
- Four texts (Green Africa, adult swimming, Greenville, volunteering) recur in about 15 nodes, so late rounds test memory [C].
- numbers-names-q has 10 rounds. The l04/l06/l07/l08 drills only mark words and never ask a question.
- Many "PRACTICE Round 1" rounds are true/false items about the method itself.
*(r4, 2026-09-28: prototyped on l06 + not-q only, for owner review. Roll out to the other reading nodes if approved. Claude's advice, in order: cut the 🌱 filler rounds and require a fresh-text exam round; write about 6 new texts on new topics; split numbers-names-q; end each marking drill with one real question.)*
*(r5, 2026-09-28, owner review of the prototype:*
*- **Rounds:** optional rounds come only after the exam-level round.*
*- **Drills stay about marking:** l06 now mixes in not-q's rules questions and ends with a 240-word marking text.*
*- **Questions live in the -q node:** the short-text question moved to not-q, and not-q round 2 got 2 more NOT questions.*
*The earlier advice to "end each marking drill with one real question" is replaced by these rules.)*

**P7. Inconsistent or unverified claims.**
- l10 and limiters-q say "two answers to ONE = 0". l12 says one missing answer loses half the points and that the checker reads the first two answers.
- "90% of students" (l06) and "14 points, 7 per answer" (l12) are unverified.
- "1:45" is correct [G].
*(r4, 2026-09-28, owner ruling: not an issue. These claims come from a real English teacher who wrote the content, so they count as sourced. Plan step 3 is closed without changes. The two reviewers' "unverified" label is kept above as the record.)*

**P8. The vocab gate is gone and the text wasn't updated** [C]. `l00.required` is `[]` since ce2e759, but l00 says "if you're here, you passed the words". The audit says to keep the gate.
*(r4, 2026-09-28: fixed as a parallel track, as both reviewers recommended. l00 stays open, its opening text is rewritten, and the audit's stated intent is updated. Plan step 5 and section 8 question 1 are done.)*

**P9. Polish.**
- Typos: "איך איך", "הטקטסט", "טקטס", "תמי".
- Stray "ֿ" lines, broken bold markers, and the flipped period ".הן".
- Drill prefaces promise "ten sentences / seven paragraphs / four texts" but show 2 to 4 items [C].
- Part A's intro says "four lessons" (there are 12 nodes); Part B's says "thirteen" (there are 19).
- Nothing tells the student how long the route is [G].
*(r4, 2026-09-28: fixed. Typos, stray characters and broken bold are gone. Line breaks the editor had lost are restored in l02, l03, l07 and q-words-1. Drill counts are honest, and section intros give real lesson counts. Em-dashes are replaced. Also found and fixed: the l03 round 5 self-check asked about Dr. Klein on a Dr. Diallo text, with the answer in the prompt. Plan step 4 is done.)*

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

Rule for this document: never overwrite silently. When a step, grade or position changes, mark it *(rN)* with the round it changed in, and record the old wording in section 10.

Steps 2, 3, 5 and 7 changed in round 2 *(r2)*.

*(r5: progress per step, and where to resume, are in section 11.)*

### Phase 1: trust fixes (about 1 day)

| # | Fix | Done when |
|---|---|---|
| 1 | Fix the 11 items in P1. Add explanations to content-1c r4 | Every MCQ has exactly one defensible answer; the q-words-2 key is `because` |
| 2 | Rewrite the tips as clues to check: "*however* often signals the writer's point, so check what the question asks"; only *the most / the only / the main* limit to one answer. Remove TWO from the anchor item. Change l00's round 1 summary line "אני לא קורא אותו - אני מחפש בו" so it carries the boundary l00's third preface already states (search first, then read that sentence) | No screen states a tip as always true; limiters-q r0, the swim item and the l00 summary line are rewritten |
| 3 | Remove every exact penalty ("= 0", "7 of 14") and teach the safe behaviour instead ("follow ONE/TWO exactly; extra or missing answers can cost points"). Remove "90%". Bring numbers back only with an official source | l10, l12 and limiters-q say the same thing, and no penalty number appears without a source |
| 4 | Polish pass (P9), including a route-length line in each section intro | Searching for the typos returns nothing; the counts match the rounds |
| 5 | Vocab gate: both reviewers recommend leaving reading open and rewriting l00's first preface ("אם אתם פה אז עברתם"). This reverses the intent written in `module-c-audit.md` ("Section 1 purpose"), so it needs your sign-off (section 8) | l00's code, its text and the audit agree |

### Phase 2: item rigor (about half a day)

| # | Fix | Done when |
|---|---|---|
| 6 | Replace fake distractors in content-1a, 1b, 2a, 2b, nav-words-2 and vocab-test using the content-2c pattern (word form, collocation, a same-node word that fits grammatically) | None of holiday / bicycle / window / sandwich / kitchen / shoes / paint / sing / cook / ate appear as options |

### Phase 3: validity (about 2 days)

| # | Fix | Done when |
|---|---|---|
| 7 | **Real final simulation.** Replace n-7c5330b8 with a 280-350-word, 4-paragraph text and about 9 questions in the exam mix (4 MCQ, short written answers, completion), timed as one run. Build it from n-221188d1's mix. Keep the id `n-7c5330b8` so existing edges still work, and change the Part C intro (`c-a45c17de`, which requires it today) to require `n-649ed18f` instead, so writing doesn't sit behind a 9-question timed test | Its length and question mix match section 2; Part C unlocks without it |
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

*(r2: turned from a question list into a decision table. The original questions are in section 10.)*

| # | Question | Reviewers' position | Needs you? |
|---|---|---|---|
| 1 | Vocab gate: lock reading behind vocab-test, or run vocabulary as a parallel track? | Both: parallel track, fix l00's text, add placement later | **Yes.** It reverses the audit's stated intent. The last change (ce2e759) already removed the gate, so confirm that was on purpose |
| 2 | Simulation: replace n-7c5330b8 or add a node after it? | Both: replace, keep n-649ed18f as the rehearsal. Claude adds: re-point Part C's prerequisite | No, unless you object |
| 3 | Scoring advice for extra and missing answers | Both: remove exact penalties until there's an official source | Only if you have the marking guidance |

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
- **Part A at 7.4 is too high.** It rewards structure that's there on paper while about a quarter of the items can be guessed or are keyed wrong. *[Corrected in round 2: about 1 in 6, not a quarter.]* The structure is good; the items aren't there yet.
- **"I search, I don't read" is not the problem GPT says it is.** For the target student (weak and translating every word), it is the right correction. I'd keep the slogan and add one line in l01 ("then read the paragraph that holds the answer") rather than soften it.
- **The value-by-use numbers (8.3 / 7.3 / 5.8) are guesses.** I kept them as useful framing but marked them as estimates. Nothing measured them.
- **Order of work.** GPT puts the simulation first. I'd fix items first: it's a day of work, it stops harm now, and a new simulation built alongside broken items would inherit the same problems.
- **Typed answers need care.** `passage-quiz` keyword matching is brittle (numbers, word forms). I'd use short keyword sets and keep the model-answer checklist, rather than scoring free text strictly.

**What I missed that GPT caught:** comparison with the official paper, the capstone lengths, and the `requiredRounds` gating on reading nodes.

**What GPT missed that I caught:** the 11 broken or ambiguous items, the removed vocab gate, the preface count mismatches, and copy-only spelling.

### GPT

**What I care about most**

1. **The claimed outcome must be measured.** If the product says a student is ready for Module C, the final check must require the same core performance as Module C: sustain attention across a full-length text, switch between question types, retrieve evidence, and produce English answers without options. Activity volume is not the same as readiness.
2. **Student confidence must be earned, not manufactured.** The module's supportive voice is a major asset, but easy distractors, wrong keys and an easy final can turn confidence into false confidence. Honest difficulty is kinder than a high score that collapses on exam day.
3. **Keep the accessibility while raising validity.** I do not want this turned into a conventional prep book. The Hebrew scaffolding, short screens, memory hooks and explicit routines are exactly why it can reach a weak or anxious student. The goal is to make the evidence of learning stronger, not make the teaching colder or more complicated.
4. **Prioritize transfer.** A student has learned a strategy only when it works on an unseen text. Repeated passages can build fluency early, but late practice and final assessment must be fresh.

**Where I agree with Claude**

- **The combined 6.8 grade is fairer than my original 7.1.** My structural audit saw the strong lesson architecture but did not inspect every key closely enough. The wrong and ambiguous items, copy-only spelling and fake distractors justify lowering Part A from my original 7.4 teacher grade to 6.5.
- **Trust fixes come first.** I originally ranked the authentic simulation as the first improvement because it is the largest structural gap. After Claude's source-level item check, I agree that Phase 1 must fix wrong keys and unsafe rules before new assessment content is built. A polished simulation should not sit on top of unreliable teaching items.
- **The reading chain is the product's core value.** l00-l03 should be protected. The traffic light and P1 routine are memorable, actionable and appropriately designed for the target student.
- **content-2c is the quality bar for vocabulary.** Its word-form and collocation distractors test knowledge rather than elimination skill.
- **Typed answers need constrained, transparent scoring.** Keyword scoring is useful only with short, carefully tested keyword sets. It should be paired with the model-answer checklist and should not pretend to judge full language quality.
- **The estimates are not evidence.** My 8.3 / 7.3 / 5.8 value-by-use scores are useful hypotheses, not measured outcomes. They should be replaced after student observation.

**Where I disagree with Claude or add a qualification**

- **Keep the slogan, but qualify it immediately.** Claude would keep “I search, I don't read” and add the correction in l01. I would keep it as the hook but add its boundary in l00 itself: “I search first; when I find the location, I read that sentence and its context for evidence.” A weak student may remember the slogan and skip the later qualification.
- **The simulation is the next non-negotiable step after trust fixes.** Claude's original priority list places fresh texts before a full authentic final. Fresh texts help instruction, but without a real final we still cannot tell whether the whole sequence works. Phase 3 should stay intact and should not be traded for more small practice additions.
- **Do not restore a hard vocabulary gate.** My recommendation is to keep reading available in parallel and rewrite l00's stale preface. Requiring the five-round vocab test before the strongest reading lessons creates a large dropout point and blocks a student who already knows much of the vocabulary. A placement check plus a recommended path is a better gate than forced completion.
- **Replace, rather than append after, n-7c5330b8.** The path is already long. Turn the node called “Part 1 summary” into the authentic final simulation and keep n-649ed18f as its shorter rehearsal. Adding another node would preserve an assessment that currently overstates readiness.
- **Do not state exact marking penalties without a primary source.** Until official marking guidance is available, teach the safest behavior (“follow ONE/TWO exactly; extra or missing answers can cost points”) without promising a specific zero or seven-point loss.

**My answers to the three open questions**

1. **Vocab gate:** leave reading open; correct l00's text; later add a placement check and a recommended vocabulary route.
2. **Simulation:** replace n-7c5330b8 with the full simulation; keep n-649ed18f as the guided rehearsal.
3. **Scoring advice:** remove exact penalties now. Reintroduce numbers only when they are tied to current official marking guidance.

**Final position**

The joint plan has the right order: restore trust, raise item rigor, validate the claimed outcome, then optimize speed and personalization. I would not add more vocabulary or more micro-lessons before those four phases are complete. The module already has enough content; what it needs now is fewer invalid successes and one convincing proof that learning transfers to the real task.

### Claude, round 2

**Where GPT changed my mind**
- **No exact penalties.** GPT's wording ("follow ONE/TWO exactly; extra or missing answers can cost points") is better than my "verify or remove". It's safe whatever the official answer turns out to be. Step 3 now uses it.
- **Replace n-7c5330b8, don't add a node after it.** Agreed. Adding a node would leave a test that overstates readiness in the path.
- **The vocab gate.** I had left this open. On the merits I agree with GPT: vocab-test requires every Part A node, so a hard gate puts about 430 screens in front of the best lessons in the module. My own student voice complained about exactly that. The reason it stays with you is that it reverses what `module-c-audit.md` says on purpose, not because either of us is unsure.

**Where I hold my position**
- **The slogan is already qualified in l00.** GPT asks for the boundary to go into l00 itself. It's already there. The third preface says "לא קוראים הכול. ולא מדלגים ישר לשאלות... צריך לדעת מה לקרוא קודם", and the step list ends with "read that sentence". The only unqualified line is the round 1 summary: "אני לא קורא אותו - אני מחפש בו". So the fix is one line, not a new screen. It's now part of step 2. We agree on the goal; the disagreement was about where the problem is, and the source settles it.
- **I never proposed trading the simulation away.** GPT reads my original list as putting fresh texts ahead of the simulation. My original list had no simulation at all (I missed the gap, and I said so). Now that it's in the plan, I agree it's non-negotiable after Phase 1-2.

**Where GPT's plan is inconsistent**
- **The simulation would become a hard gate.** GPT argues against the vocab gate because a long required block causes dropout. But `c-a45c17de` (the Part C intro) requires `n-7c5330b8`. Turn that node into a 9-question timed simulation and writing is locked behind the hardest test in the module: the same dropout risk, in a worse place. Step 7 now re-points Part C to `n-649ed18f`.

**Correcting myself**
- **"About a quarter" was wrong.** In round 1 I wrote that about a quarter of Part A's items can be guessed or are keyed wrong. The numbers I have: about 49 dump lines with joke options and 11 broken items, against roughly 300 scored Part A items. That's about 1 in 6, and the 49 is a line count, not an exact item count. The direction holds (Part A's 7.4 was too high); the figure didn't. My round 1 text is left as written, with a correction note.

**Still open between us:** nothing of substance. The decision left is yours: question 1 in section 8.

### GPT, round 2

**What Claude settled correctly**

- **The l00 source settles the slogan dispute.** I accept the correction. The lesson already teaches local reading after search; the problem is the one unqualified round-summary line, not the whole lesson or a missing concept. Step 2 is now appropriately narrow.
- **The simulation dependency was a real omission in my proposal.** Replacing `n-7c5330b8` without checking its downstream edge would have made the hardest reading assessment a hard gate for Part C. Claude was right to trace the dependency and add the re-pointing work to step 7.
- **The corrected Part A estimate is more defensible.** “About 1 in 6” is still only an approximation because the numerator mixes line counts and item counts. It supports the priority decision, but it should not be repeated as a measured defect rate. The item list itself is the evidence.
- **Claude did not propose trading away the simulation.** I accept that correction. The difference was that my first audit identified the missing authentic final and Claude's did not; the joint plan now treats it as non-negotiable after the trust and item-rigor work.

**One implementation caveat**

Re-pointing Part C to `n-649ed18f` is the right immediate choice: writing should not be blocked by passing the hardest reading test. But the authentic simulation must not become an invisible optional branch. It should remain the clearly labelled **Part B readiness check**, and the product should distinguish these two ideas:

- “You may continue to Part C” — unlocked after the shorter rehearsal.
- “You have demonstrated Part B readiness” — earned only by completing the authentic simulation.

The current path may not have a separate section-completion badge or attempt-based gate. Do not add a new progression system during Phase 3 just for this. First ship the simulation, keep it prominent, and observe whether students attempt it. If they routinely skip it, add the smallest possible readiness marker later. This is a measurement concern, not a reason to restore the Part C hard gate.

**Round 2 conclusion**

There is no remaining disagreement about the repair plan. My recommendation on the only owner decision remains: keep vocabulary and reading parallel, fix l00's stale “you passed the words” text, and update `module-c-audit.md` so the documented intent matches the product. Record that decision before Phase 1 implementation begins.

## 10. Change record

| Date | Reviewer | Change |
|---|---|---|
| 2026-09-28 | Claude | Created the combined report, reconciled both audits, added the joint grades, source-checked issue list and phased plan |
| 2026-09-28 | GPT | Reviewed the combined report and both independent reports; accepted the lower Part A grade; added priorities, agreements, disagreements, decisions on the three open questions, and this change record |
| 2026-09-28 | Claude | Round 2: accepted GPT's penalty wording and the replace-don't-append decision; showed from source that l00 already qualifies the slogan (fix narrowed to one summary line); flagged that the simulation would gate Part C and re-pointed it to n-649ed18f; corrected my own "a quarter" figure to about 1 in 6; turned section 8 into a decision table. Earlier wording below |
| 2026-09-28 | GPT | Round 2: accepted Claude's source and estimate corrections and the Part C dependency fix; clarified that the simulation should remain the visible Part B readiness check without becoming a hard gate for Part C; reaffirmed the parallel vocabulary/reading recommendation |
| 2026-09-28 | Claude | Round 3 (implementation): fixed all 11 P1 items in the content (plan step 1). Grades not changed yet: re-grade after Phase 1 is complete |
| 2026-09-28 | Claude | Round 3 (implementation): replaced the easy distractors in Part A (P3, plan step 6), about 35 items, each with an explanation |
| 2026-09-28 | Claude | Round 3 (implementation): P5 spelling. Added 48 listen-mode spelling screens with a Hebrew hint (a new optional `hintHe` field). Listen falls back to copy mode without browser speech. Copy mode is kept. Covers the spelling half of plan step 11 |
| 2026-09-28 | Claude | Round 4 (implementation): owner ruled P7 not an issue (teacher-sourced claims, step 3 closed). P8 fixed as a parallel track (step 5). P9 polish (step 4), plus the broken l03 self-check. Also scored *but* in l08's exam round (a second copy of a P1 bug) |
| 2026-09-28 | Claude | Round 4: P6 prototype on l06 + not-q (filler round cut, required fresh-text exam round, real NOT question at the end of the l06 drill) |
| 2026-09-28 | Claude | Round 5: P6 pattern fixed after owner review (not-q requiredRounds 3; the l06 long text in its own last round) and written into lesson-structure.md. Rollout pair 1: l08 + n-b46b7e2b. Also fixes P2 for however (the rule is now a clue, with questions answered before however/but) |
| 2026-09-28 | Claude | Added section 11 (implementation status): step-by-step progress with commits, the owner decisions made during implementation, where to resume, and known side effects |
| 2026-09-29 | GPT | Added section 12: independent post-fix re-grade of vocabulary, reading and writing; identified one new ambiguous reading key and two writing/quiz assessment gaps; corrected the record about the two existing timed exam quizzes. Preserved all prior grades, decisions and implementation history. |
| 2026-09-29 | Claude | Round 6: added section 13, a post-fix review of Parts A, B, C and the exam quizzes. Checked each GPT section 12 finding against the source: 7 confirmed, 2 partly right, 2 wrong. Added 8 findings GPT missed. Conceded two of my own errors (the Night Market key, and "P2 fixed for however") with correction notes in place. Grades and next-step order are in section 13. No content or code changed. |
| 2026-09-29 | GPT | Round 7: checked Claude's section 13 against the runner and current content; accepted the round-pass and empty-screen corrections, the newly found quiz/writing issues, and corrected the vocab-test item count. Clarified the disagreement about self-check versus grading and kept exact-penalty sourcing as an epistemic note, not an implementation override. Added section 14; no lesson or app code changed. |
| 2026-09-29 | Claude | Round 7: checked GPT's section 14 claims. The vocab-test count was my error (the real count is 58 scored screens, not GPT's 57); the saved pass result and the yes-no formatting are confirmed. Conceded "most of the value" as unevidenced. Revised my Part A grade to 7.5 / 7.6, with correction notes at the original lines in section 13. Added section 15: no disagreements remain, an agreed 8-item work order, and a recommendation to stop review rounds and implement. No code changed. |

### Earlier wording (superseded)

**Round 1, plan step 2, fix:**
> Rewrite the tips as clues to check: "*however* often signals the writer's point, so check what the question asks"; only *the most / the only / the main* limit to one answer. Remove TWO from the anchor item.

**Round 1, plan step 2, done when:**
> No screen states either tip as always true; limiters-q r0 and the swim item are rewritten.

**Round 2 change:** added the l00 round 1 summary line to the fix.

---

**Round 1, plan step 3, fix:**
> Use one consistent message about extra and missing answers, checked against official marking guidance. Verify or remove "90%" and "14/7".

**Round 1, plan step 3, done when:**
> l10, l12 and limiters-q agree; every number is either sourced or removed.

**Round 2 change:** adopted GPT's position to remove exact penalties and teach the safe behaviour.

---

**Round 1, plan step 5, fix:**
> Decide the vocab gate: restore `required: ['vocab-test']` on l00, or reword l00's preface and the audit.

**Round 1, plan step 5, done when:**
> l00's code and text agree.

**Round 2 change:** both reviewers now recommend leaving reading open; your sign-off is needed.

---

**Round 1, plan step 7, fix (ending):**
> ...timed as one run. Build it from n-221188d1's mix.

**Round 1, plan step 7, done when:**
> Its length and question mix match section 2.

**Round 2 change:** keep the id, and re-point `c-a45c17de` to `n-649ed18f`.

---

**Round 1, section 8 (original questions):**
1. **The vocab gate:** keep reading locked until vocab-test is done, or leave vocabulary as a parallel track?
2. **The simulation:** replace n-7c5330b8, or add a new node after it?
3. **Scoring advice:** do you have the official marking guidance for extra and missing answers? Step 3 depends on it.

**Round 2 change:** turned into a decision table with each reviewer's position.

## 11. Implementation status

Snapshot: 2026-09-28, commit 585865e. Scope: Parts A and B. Every content change is also logged in `docs/module-c-audit.md`.
**Grades in sections 1, 3 and 6 are still the pre-fix audit grades.** Re-grade after Phase 1-2 are closed and the changed lessons have been played.

### Plan steps

| Step | Issue | Status | Commits |
|---|---|---|---|
| 1 | P1 wrong / ambiguous items | **Done.** All 11 fixed. Found while mapping screens: a second unscored *but* in l08's exam round (fixed), and the l03 round 5 self-check about Dr. Klein on a Dr. Diallo text (rewritten) | b0974fe, cc5f92d, 4127989 |
| 2 | P2 tips taught as laws | **Partly done.** *however / but* fixed in l08 + n-b46b7e2b. *most / only* is still open and gets fixed with pair 2. The "I search, I don't read" summary line in l00 is still open. *(r6 correction: "fixed" overclaimed. n-b46b7e2b round 2 still ends with the absolute summary "however / but = פנייה. מה שאחריו = הנקודה", and I kept that round verbatim without re-reading it. GPT caught this. See section 13.)* | 585865e |
| 3 | P7 exact penalty numbers | **Closed, no change.** Owner ruling: the claims come from a real English teacher | - |
| 4 | P9 polish | **Done:** typos, stray characters, lost line breaks, broken bold, honest drill and section counts, em-dashes | 4127989 |
| 5 | P8 vocab gate | **Done:** parallel track. l00's text and the audit's stated intent are updated | 4127989 |
| 6 | P3 easy distractors (Part A) | **Done:** about 35 items rewritten, each with an explanation | 48fabb0 |
| 7 | Real final simulation | Not started | - |
| 8 | Scored written answers | Not started. Spelling from memory (the spelling half of P5) is done, see step 11 | - |
| 9 | Required fresh-text rounds (P6) | **In progress.** The pattern is agreed and written in `docs/lesson-structure.md` ("Reading round pattern"). Done: l06 + not-q (reference implementation) and l08 + n-b46b7e2b | 12587ad, 99303c2, e2cad79, 585865e |
| 10 | Runner-level timer | Not started. Needed by step 7 | - |
| 11 | Part A placement + listen spelling | **Half done:** 48 listen-mode spelling screens with a Hebrew hint, and a fallback to copy mode. Placement check not started | 7d98015 |
| 12 | Split numbers-names-q; drills | Replaced by the P6 pattern. numbers-names-q is handled in P6 pair 3 | - |
| 13 | Play-test with students | Not started | - |

### Owner decisions made during implementation

- **Rounds:** everything up to and including the exam-level round is required. Later rounds are optional and labelled "תרגול נוסף (רשות)".
- **Marking lessons (drills) stay about marking.** They get 2 rules questions from the paired question lesson, and the ~240-word marking text is their own last round.
- **Question lessons:**
  - Round 1: rules questions plus a short text with one question.
  - Round 2: your turn.
  - Round 3: exam level, a familiar passage (about 4 questions) plus a new text (3 questions).
  - The owner merged the worked-example round into the exam round.
- **Spelling:** copy mode stays for weak students, and listen mode is added later in each lesson.
- **Vocabulary:** runs in parallel with reading, with no gate.

### Resume here (P6 rollout)

1. **Pair 2: l07 + limiters-q.** Apply the pattern and fix P2's *most*: *the most / the only / the main* limit to one answer, but *most* + noun means a majority. Write a new ~240-word marking text and a new exam text.
2. **Pair 3: l04 + numbers-names-q.** Keep it one lesson:
   - Round 1: rules for numbers and names, plus a short text.
   - Round 2: your turn with numbers.
   - Round 3: your turn with names.
   - Round 4: exam level (mixed questions plus a new text).
   - Optional rounds after that. Delete both 🌱 rounds.
3. **Single lessons l01-l03, l09-l12:** delete the 🌱 rounds, make sure the exam round has a new text, and set `requiredRounds` to the exam round. For l00, delete only the filler, and fix its "I search, I don't read" summary line (step 2).
4. **Then Phase 3:** the final simulation (step 7, needs step 10) and scored written answers (step 8). They can reuse the new texts written during P6.

New texts written so far (each used in only one lesson):
- PHONES IN THE LOCKER (not-q)
- Oakton bridge (not-q)
- Brookfield car-free street (l06, marking)
- Clearwater four-day week (l08, marking)
- museum trip (n-b46b7e2b)
- THE NIGHT MARKET (n-b46b7e2b)

### Known side effects

- **Relocked lessons:** students partway through a changed lesson may find the next lesson locked again, because more rounds are now required.
- **Nothing played yet:** the changed screens pass the type check, and the marking positions are verified by script, but none have been played on a device. Locations are in the chat log and `docs/module-c-audit.md`.

## 12. GPT post-fix review — now including writing

Snapshot: 2026-09-29, HEAD `6b0857d`. I read the current `c-1.ts`, `c-2.ts`, `c-3.ts`, the writing and quiz scoring components, and the two Module C exam quizzes; `npm run check` passes with no errors or warnings. This is a **source/content audit, not a learner study or a device play-test**. Grades here supersede my earlier grades for current-state discussion; sections 1, 3 and 6 remain the pre-fix record. Section 3(c) of the earlier audit remains out of scope.

### Current verdict (editorial estimates, not measured outcomes)

| Area | English teacher | Bagrut student | Why |
|---|---:|---:|---|
| Part A — vocabulary | **7.6/10** | **7.7/10** | The bad keys and many giveaway distractors are repaired; word-form contrasts and listen-to-spell add real retrieval. Still no placement check, and some answer modes remain easier than recall. |
| Part B — reading | **6.9/10** | **7.4/10** | The two rebuilt lesson pairs now require fresh-text rounds; the Hebrew method is clear. Most nodes still use the old progression, one new item is ambiguous, and written-answer practice in lessons remains unscored. |
| Part C — writing | **5.8/10** | **6.6/10** | Useful prompt decoding and sentence frames, with four topic families and actual writing fields. The checker rewards surface form rather than a relevant 70–90-word answer, and the reported quiz pass excludes writing. |
| **Whole module** | **6.7/10** | **7.2/10** | Strong guided *practice*; not yet a trustworthy declaration of independent exam readiness. |

**Combined judgment: about 7.0/10.** These are holistic grades, not a mathematical average of differently weighted tracks. The student score is higher because the small steps reduce fear; a teacher must weigh false-positive readiness more heavily. I would recommend the module **alongside** classwork now, but not as the only preparation or as a reliable pass/fail predictor.

### What genuinely improved

- **Vocabulary:** the 11 previously listed wrong/ambiguous items have been corrected, about 35 distractors were strengthened with explanations, and 48 listen-mode spelling screens now ask for recall instead of only copying. The speech fallback to copy mode is sensible for unsupported devices. The parallel vocabulary/reading path and clearer `l00` opening remove an unnecessary gate.
- **Reading:** `l06` + `not-q` and `l08` + `n-b46b7e2b` now require the new exam-level round, rather than letting a student unlock the next node after a single introductory round. The `however` lesson now includes better before/after checks, and the proofreading repairs matter. This is material progress, not merely cosmetic.
- **Writing:** the sequence teaches stance, reason, addition, example, conclusion, sentence completeness and word count before topic practice. Its four prompts ask for different kinds of answer (opinion, preference, school change, age). The volunteer task closely matches an [official 2023 Module C paper](https://meyda.education.gov.il/sheeloney_bagrut/pitronot_bagrut/2023/6/016382-54-HEB-1200-1330.pdf), which specifies a 70–90-word, 30-point written response. Short first attempts with a word bank are a useful confidence scaffold.

### Findings that keep the grade down (highest priority first)

1. **New ambiguous reading key in a required round.** In `n-b46b7e2b`, THE NIGHT MARKET paragraph III says *some* central shop owners lose customers **but others** say the crowds help their business. The question asks what “some shop owners in the centre” say; both “They lose customers to the market” (keyed) and “The crowds help their business” describe some of those owners. The new P6 exam round can therefore penalize a defensible answer. Change the stem to “What do the shop owners who are unhappy say?” or distinguish the two groups in the options. Source: `front/src/lib/content/c/c-1.ts`, around lines 3889–3917.
2. **Writing completion is not evidence of writing quality.** All `c-3` topic tasks say “70–90 words,” but their lesson-mode screens provide no `minWords`/`maxWords`. `WritingTask.svelte` checks nonempty input lines, capital letters/end punctuation (with one allowed issue), and whether bank strings occur *anywhere* in the response. It does not count words in lesson mode, check prompt relevance, grammar, reasons, examples or actual sentence boundaries. A short off-topic response can be marked correct; even a response marked wrong can advance on the next click. Several micro-skill nodes (`yes-no`, `because`, `word-count`, etc.) unlock after round 1, before their optional writing round. In particular, the required `word-count` round asks three recognition MCQs, not the student to count a draft. Sources: `front/src/lib/content/c/c-3.ts`, `front/src/lib/lesson-screens/WritingTask.svelte`, `front/src/lib/lessonProgress.svelte.ts`.
3. **The two existing timed exam quizzes must be credited—but their pass badge is misleading.** `module-c-exam-2` and `module-c-exam-3` each contain one four-paragraph reading passage, nine questions, a 30-point essay prompt, and a 90-minute timer. This corrects the impression in sections 1–2/11 that Module C has *only* the 113-word MCQ lesson capstone or no written exam practice. However, each quiz auto-scores only four MCQs and one exact-match sentence completion (**39 of 100 points**). Four reading answers and the essay (**61 points**) are manual-review items with no grader. `scoreQuiz` computes `passed` from the 39 auto points alone; thus 24/39 auto points can show “passed” even if the student earns nothing on the 61 ungraded points. The report also displays writing as `0/30` while labeling those items manual-review. This is a validity and trust issue, not merely a missing feature. Sources: `front/src/lib/quiz/c/index.ts`, `front/src/lib/quiz/scoring.ts`, `front/src/lib/quiz/QuizReport.svelte`.
4. **P2 is still inconsistent, including the supposedly repaired pair.** `limiters-q` still says “main / most / only” all demand one answer even though *most trees* means a majority; the same node earlier teaches the distinction correctly. `n-b46b7e2b` retains the absolute summary “however / but = turn; what follows = the point,” after `l08` teaches a more conditional clue. The `l00` slogan summary remains too categorical. A student can leave with the shortcut the repair was meant to remove. Source: `c-1.ts`, especially lines 3827 and 4208.
5. **The writing track is overly formulaic and has unfinished presentation.** A fixed “I think… because… / In addition… / In conclusion…” frame helps a beginner, but four topic lessons largely recycle it; the later “exam conditions” rounds still show a word bank and phrase requirements. Students need at least one unseen prompt with no bank and feedback on the *idea*, not just connectors. `topic-vacation` and `topic-cellphone` have prefaces whose lines have been concatenated, and `topic-vacation` contains a blank preface screen. The word bank also stores entries such as `volunteer / להתנדב` as one string, while the checker uses substring matching; using *volunteer* alone will not count that entry. Sources: `c-3.ts`, around lines 1029–1081 and 1340–1393, and `WritingTask.svelte` line 65.
6. **Exam fidelity remains incomplete.** The lesson capstone `n-7c5330b8` is still 113 words and MCQ-only, and Part C still depends on it. The two quiz passages improve the picture but are shorter than the 337-word 2026 paper documented in section 2, use a 90-minute rather than 105-minute timer, and the free responses are not graded. The four rebuilt reading nodes are only the first P6 rollout. I would not call the module “fixed” until the remaining nodes and a real answer-review path exist.

I retain my earlier concern about exact penalty/score claims (including Part C's `60–69 = −1`, `50–59 = −3`, `40–49 = −6`, and “missing stance = 3 points”). The owner says the claims come from a real English teacher; that is a reason to keep them provisionally, **not evidence that they match the current official rubric**. I am not asking to silently remove teacher-authored advice. Label its authority internally and verify before presenting exact deductions as exam fact. The 70–90-word task length itself is supported by the official paper linked above.

### Two voices and the next decision

**English teacher:** “I would happily assign the vocabulary fixes and the new reading rounds for guided practice. I would stop at the new Night Market ambiguity and the quiz pass badge: both can teach a student the wrong lesson about what they know. For writing, I need to see the pupil produce a relevant paragraph of the requested length and get human or rubric-based feedback before I call them ready.”

**Bagrut student:** “The Hebrew explanations and sentence starters make starting much less scary. I can see why I got vocabulary choices wrong, and listening then spelling feels more real. But if the app says my paragraph is fine after I type a few short lines—or says I passed a full test when most points were not checked—I might walk into the Bagrut overconfident.”

**Where I agree with Claude:** the original content defects and easy distractors were real; the P6 required-fresh-text pattern is the right direction; keeping vocabulary parallel to reading is sensible; `n-7c5330b8` still needs replacement as a *lesson* capstone. **Where I differ or add a correction:** the existing quiz subsystem means Module C already offers two timed mixed-format exams, so “no exam writing practice” is too broad. The serious problem is the gap between *collecting* written responses and *judging* them. I also do not accept “P2 fixed for however” without qualification while the new question node retains an absolute summary, or “all new P6 items sound” given the Night Market key.

**Recommended order for the next round:** (1) fix the Night Market ambiguity and the contradictory shortcut summaries; (2) change quiz reporting so ungraded work never produces an unqualified pass/fail or `0/30` writing score; (3) give writing lessons a real word counter and a transparent “mechanics only / needs review” status, then add one required unscaffolded 70–90-word response with rubric or teacher review; (4) finish P6 across the remaining reading nodes and strengthen the lesson capstone; (5) play-test the changed path with students and check devices, accessibility and timing. I have **not** changed lesson content or scoring code in this review.

## 13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes

Snapshot: 2026-09-29, same source as section 12. This is a source audit. I read `c-1.ts`, `c-2.ts`, `c-3.ts`, `WritingTask.svelte`, `quiz/scoring.ts`, `quiz/QuizReport.svelte`, `quiz/c/index.ts`, `PassageBody.svelte` and `LessonRunner.svelte`. Nothing has been played on a device. Sections 1, 3, 6 and 12 are left as written.

### 13.1 GPT's section 12 findings, checked against the source

| # | GPT's claim | Verdict | Evidence |
|---|---|---|---|
| 1 | THE NIGHT MARKET q3 has two defensible answers | **Confirmed. My item, my miss.** The stem "what do *some* shop owners say" matches both *some* and *others*, since both are some of the shop owners | `n-b46b7e2b` round 3 |
| 2a | The lesson writing checker has no word count, no relevance check, and matches the bank by substring | **Confirmed**, and worse than stated (see 13.2 #4) | `WritingTask.svelte` lines 35-68 |
| 2b | "A response marked wrong can advance on the next click" | **Partly right, misleading.** Every screen type advances after feedback; that's the runner's design. The control is the round's 80% pass mark. In the topic lessons, a failed writing task fails round 1 (3 of 4 or 2 of 3 scored). The real gap is the next row | `LessonRunner`, `lesson-structure.md` "Runner rules" |
| 2c | Micro-skill writing rounds are optional; word-count's required round is 3 MCQs | **Confirmed.** No `c-3` node sets `requiredRounds`, so only round 1 counts. yes-no, because, in-addition, for-example, in-conclusion and subject-verb unlock without any writing | `c-3.ts` |
| 3 | The quizzes auto-score 39 of 100 points; "passed" uses only those; writing shows `0/30` | **Confirmed**, with one more instance (13.2 #1) | `scoring.ts` lines 148-151, `QuizReport.svelte` line 65 |
| 4a | n-b46b7e2b still states the absolute *however* rule | **Confirmed. My overclaim.** I rebuilt rounds 1 and 3 and kept round 2 verbatim, including its summary "מה שאחריו = הנקודה". Correction note added in section 11 | `c-1.ts` line 3827 |
| 4b | limiters-q still says main / most / only all mean one answer | **True, but not new.** Section 11 already lists *most / only* as open, fixed with pair 2. Line 4208 is in n-221188d1, the synthesis lesson, which is also pair-2 scope | `c-1.ts` lines 2377, 2418, 4208 |
| 5a | topic-vacation and topic-cellphone prefaces have lines run together | **Confirmed.** Same editor bug I fixed in Part B (P9), but Part C was out of scope then | `c-3.ts` line 1032 and the topic-cellphone preface |
| 5b | topic-vacation "contains a blank preface screen" | **Wrong as a student issue.** The runner drops empty screens (`isScreenEmpty`, `LessonRunner` line 79), so no student ever sees it. It's editor clutter only | `c-3.ts` line 1067 |
| 6 | Capstone still 113 words and MCQ-only; quizzes use 90 minutes, not 105 | **Confirmed.** This is plan step 7, not started | `quiz/c/index.ts` |
| - | Re-raising the exact penalty numbers after the owner closed P7 | **I don't reopen this.** The owner ruled; an internal note about sources is harmless. But it shouldn't sit among the findings that lower the grade, and I won't act on it | Section 11, step 3 |

Where GPT corrected the record fairly: **my two audits covered lessons only, not the quiz subsystem.** Section 2's "0 scored written answers" is true for lessons, but Module C also has two full timed exams with a 30-point essay (`module-c-exam-2`, `module-c-exam-3`). I missed them.

### 13.2 Findings GPT missed

1. **The reading part of the quiz report is misleading too, not just writing.** `byPart` adds the ungraded questions to the part's max, so reading shows for example "32/70". 31 of those 70 points were never graded, but a student reads it as 46%. Same bug as the writing "0/30", in the part that matters more.
2. **exam-2 gives an answer away.** Question 2 (MCQ), correct option: "They can read words from books and signs out loud". Question 3, the sentence completion: "The glasses can also read words from ___ out loud". Answering question 2 hands over question 3.
3. **Sentence completion rejects correct answers.** It needs an exact match after punctuation is stripped. The model answer "books, signs, and screens" becomes "books signs and screens", so "books, signs, screens" or "signs, books and screens" are marked wrong. That's a false negative on a 7-point item, the one written answer the quiz does score.
4. **In lesson writing, the word bank only counts connectors.** Content words are stored with their Hebrew gloss ("travel / לטייל") and matched as one substring, so they can never match. In topic-vacation round 1, 10 of 18 bank entries can never count. "Use 3 words from the bank" is satisfied by "In my opinion... because... In addition..." alone. The checker rewards the frame and ignores the vocabulary it asks for.
5. **Lesson writing never practises a paragraph.** The lesson UI gives one single-line input per sentence (`minSentences` boxes), and shows no word count. A student asked for "70-90 words" can't see how many words they have. The same component already has a paragraph box with a live word counter in quiz mode (lines 74-76, 131-136), so this is a reuse, not a new feature.
6. **Part C never shows a complete model answer.** No lesson shows a full 70-90-word paragraph to imitate or compare against. The topic lessons give frames and fragments only.
7. **yes-no:** "לחצו על המילה שמבטאת הסכמה" (tap the word that expresses agreement) is keyed to *think*. *think* marks opinion, not agreement: the lesson's own NO sentence also uses it. It should say "opinion".
8. **in-addition, the "school start later" MCQ:** "studies show that tired students cannot focus" supports the *same* sleep reason. It's evidence, not a second reason, so "In addition" as the only key is arguable. I flagged this in round 1 (`claude_report.md`), but Part C was out of scope; it's still unfixed.

### 13.3 My grades (editorial, like GPT's; not measured)

| Area | Teacher | Student | vs GPT | Why |
|---|---:|---:|---|---|
| Part A: vocabulary | 7.3 | 7.6 | -0.3 / -0.1 | The fixes are real, but vocab-test is still 46 of 48 recognition MCQs, there's no placement check, and nothing has been played. *(r7 correction: "46 of 48" was a stale round-1 count. vocab-test has 58 scored screens: 46 MCQ, 10 listen-spelling, 1 cloze, 1 writing task. Revised grade 7.5 / 7.6, see section 15.)* |
| Part B: reading | 6.9 | 7.3 | = / -0.1 | Agree. 2 of 4 pairs rebuilt, and I introduced one ambiguous key |
| Part C: writing lessons | 5.5 | 6.5 | -0.3 / -0.1 | Below GPT: no model paragraph anywhere, the checker ignores content words (13.2 #4), and there's no paragraph box or counter (13.2 #5) |
| Exam quizzes: content | 7.5 | 7.5 | not graded by GPT | Exam-shaped: 4 paragraphs, 9 questions in the paper's mix, a 30-point essay. Held back by 13.2 #2 and #3 |
| Exam quizzes: reporting | 3.0 | 3.0 | not graded by GPT | Tells a student "passed" on 39% of the points, and shows "0/30" and "32/70" for ungraded work |
| **Whole module** | **6.6** | **7.1** | -0.1 / -0.1 | **Combined about 6.9.** We effectively agree with GPT's 7.0 |

### 13.4 Where I agree and disagree with GPT's next steps

**I agree:** fix the Night Market item and the contradictory summaries; make quiz reporting honest; give writing a word counter plus one unscaffolded 70-90-word response; finish P6; play-test.

**My order is different:**
1. **Quiz report honesty first** (small code change, highest harm). No unqualified pass/fail while ungraded points exist. Show "auto-graded X/39 · 61 points need review" per part. Also fix the completion scoring: several accepted model answers, or match key words instead of exact text. A student told "passed" is the most misleading thing in the module right now.
2. **My two content errors** (about 10 minutes): the Night Market stem ("What do the shop owners who are **unhappy** say?") and the n-b46b7e2b round 2 summary line. Also exam-2's giveaway (rephrase question 2's options so they don't quote the completion), yes-no's "הסכמה", and the Part C preface line breaks.
3. **Writing, smallest honest version:**
   - Match only the English part of bank entries (before " / ").
   - In lessons, reuse the quiz paragraph box and word counter whenever the prompt asks for 70-90 words.
   - Add one model paragraph plus a `self-check` rubric (3-4 ticks: stance, two different reasons, an example, 70-90 words) to each topic lesson.
4. **Finish P6 pairs 2-3** (closes P2's *most*).
5. **Part C required rounds.** Under the owner's rule (required up to the exam-level round), each topic lesson's round 3 ("exam conditions") and each micro-skill's writing round would become required. That changes the path, so it needs owner sign-off.
6. **Play-test.**

**I disagree with "rubric or teacher review."** The app has no teacher channel, and building one is a new product surface (accounts, a review queue, notifications). Step 3's model paragraph plus self-check rubric covers most of the value now at almost no cost. *(r7: "most of the value" was an assertion, not evidence. GPT is right. Restated in section 15 as a hypothesis for the play-test.)* That was already rung 2 of the writing-feedback ladder in `module-c-audit.md` §7b, which both of us accepted. A teacher channel should wait for evidence that self-check isn't enough.

**GPT's catches I should have made:** the quiz subsystem (outside both my audits), and my own "fixed" claim on a lesson where I'd kept an unrevised round.

**What GPT missed:** the reading-part score bug, the answer given away in exam-2, completion false negatives, bank entries that can never count, the missing paragraph box, no model answer, and two Part C item errors.

## 14. GPT, round 7: response to Claude's post-fix review

Snapshot: 2026-09-29, after Claude's section 13, with no Module C code change since sections 12–13. I checked the disputed claims in `LessonRunner.svelte`, `c-2.ts`, `c-3.ts`, `quiz/c/index.ts`, `quiz/scoring.ts`, and `QuizReport.svelte`. This remains a source review, not a play-test.

### Corrections I accept

- **My line about advancing after a wrong writing response lacked the round-level context.** `WritingTask` does advance after feedback, but `LessonRunner` requires 80% to pass a round. In topic round 1, missing the writing point means 3/4 or 2/3, so the student must retry before unlocking the next node. That is a real safeguard. It does **not** solve the false-positive case: irrelevant or 20-word text can satisfy the superficial checker and count as a correct writing point. The six micro-skill writing rounds are still optional after recognition-only round 1.
- **The blank `topic-vacation` preface is editor clutter, not a blank student screen.** `LessonRunner` filters it through `isScreenEmpty`. I retract its inclusion as a student-facing defect; the concatenated prefaces are student-facing defects.
- **Claude's new quiz findings are valid and important.** The reading part can show an apparent low score such as `32/70` while 31 reading points were never graded; the same report can show `0/30` for an ungraded essay. Exam 2's MCQ gives away the next completion. Exact-string matching can reject semantically correct completions worth seven points. The quiz pass result is also saved with the attempt, so it is not merely a transient label. These strengthen, rather than displace, my concern about false readiness.
- **The writing-bank and Part C item issues hold up.** Bilingual entries are compared as one literal string, so normal English use of a content word does not count; the student is nudged toward stock connectors. The `yes-no` *think* item asks for a word expressing “agreement,” although *think* expresses opinion. In `in-addition`, “studies show that tired students cannot focus” is evidence for the same sleep/focus reason, not an unambiguous second reason. No full 70–90-word model paragraph appears in the lessons. Claude was right to bring these into the current scope.

### One correction to Claude's evidence

Claude's Part A rationale says `vocab-test` is “46 of 48 recognition MCQs.” In the current `vocab-test` node I count **46 MCQs, 10 listen-mode spelling screens and one cloze-pick: 57 scored screens**, all in its five required rounds. MCQs still dominate (**46/57**), but the new recall screens are material and should not disappear from the denominator. The absence of a placement check and device test remains real. I therefore keep my Part A grade at **7.6 teacher / 7.7 student** rather than lowering it on the 46/48 claim. This is a count correction, not a claim that the test now proves vocabulary mastery.

### Where I remain firm

**A self-check rubric is a good first repair, but it cannot by itself become a scored essay or justify a pass badge.** My phrase “rubric or teacher review” proposed alternatives for useful feedback, not a demand to build teacher accounts, queues or notifications. Claude is right that a teacher channel is out of scope now. A short model with an annotated, student-facing checklist is the YAGNI version; it should clearly say “self-checked / not graded,” and the quiz report must not treat it as 30 earned or lost points. Weak writers may not reliably detect off-topic ideas or grammar in their own work, so whether self-check is *enough* is an empirical question for play-testing. Do not promise it covers “most of the value” without that evidence.

**The owner's P7 ruling controls the implementation queue, not the truth status of a numerical scoring claim.** I am not reopening or changing teacher-authored advice. I still would not present exact deductions as *official current marking rules* until they are tied to the applicable rubric. This note has no prerequisite effect on the urgent quiz/report and item fixes.

**Part C presentation needs a wider pass than the two topic prefaces.** The `yes-no` preface also contains run-together text and broken markdown (`לא כתיב.לא דקדוק`, `It helps...****It improves`, `++עדיין...++`). Fixing only `topic-vacation` and `topic-cellphone` would leave visibly rough teaching content at the start of writing. This is lower priority than score honesty and ambiguous keys, but it belongs in the Part C polish sweep.

### Shared next step, with the disagreement resolved

I accept Claude's order of **quiz report honesty first**, then the Night Market key, *however* summary, quiz giveaway/completion scoring and Part C item defects. A minimal writing upgrade should show a word counter, match the English portion of bank entries, add one or more contrasting full model answers with a checklist, and require an unscaffolded 70–90-word attempt before claiming writing readiness. The model/checklist can support learning; it must be visibly **ungraded** until a defensible review method exists. Changing `requiredRounds` for all Part C nodes alters progression, so retain Claude's request for owner sign-off before that rollout. No implementation is made by this review.

My whole-module grade remains **about 7.0/10**: Claude and I are within 0.1 despite different emphasis. I lower my confidence in *writing-readiness claims*, not in the value of the guided teaching itself. The decisive next evidence is a play-test of actual student responses and the revised quiz result screen.

## 15. Claude, round 7: response to GPT's section 14

Snapshot: 2026-09-29, after GPT's section 14. No code or content has changed since section 12. I checked GPT's three new factual claims in the source.

### Checks

| GPT's claim | Verdict | Evidence |
|---|---|---|
| vocab-test is 46 MCQ + 10 listen + 1 cloze = 57 scored screens | **Right about my error, one off in its own count.** It's 58: there's also 1 writing task in round 5. My "46 of 48" was a stale round-1 number, taken before the listen screens existed | Script count over the live `c-2.ts`, `requiredRounds: 5` |
| The quiz pass result is saved with the attempt, not just shown once | **Confirmed.** `saveAttempt` stores the whole `QuizScore`, including `passed`, in localStorage. One addition: the exam page shows the saved attempt as a bare "X/39", with no hint that 61 points were never graded. The fix belongs in the same step as the report | `quiz/progress.ts`, `exam/[quizId]/+page.svelte` lines 47-48 |
| The yes-no preface has run-together text and broken markdown too | **Confirmed.** "לא כתיב.לא דקדוק", "It helps...****It improves.**..**..****It". The Part C polish has to cover every `c-3` node, not just the two topic prefaces | `c-3.ts` lines 18, 22 |

### What I concede

- **The vocab-test count.** The 10 listen screens are real recall in a required test, and I'd dropped them from the count. **Revised Part A grade: 7.5 teacher / 7.6 student** (was 7.3). I stop short of GPT's 7.6: MCQs are still 46 of 58, and the placement check and play-test are still missing.
- **"Most of the value."** I had no evidence for that. Restated as a hypothesis: *a model paragraph plus a self-check rubric is enough feedback for the target student*. The play-test should check it, by comparing a few students' self-ticked rubrics with a teacher's reading of the same paragraphs.
- **Self-check must be labelled ungraded.** Agreed. A `self-check` already scores 0/0 in lessons and counts as manual in quizzes. What's missing is visible wording ("self-checked, not graded") and keeping it out of any pass verdict.

### Where we now stand

GPT's clarifications remove the remaining disagreements:
- **"Rubric or teacher review"** meant alternatives, not a teacher channel. Agreed.
- **P7** is an internal note on sources with no effect on the work queue. Agreed; I have nothing to add.
- **Grades:** whole module 6.9-7.0 from both of us. Vocabulary 7.5-7.6, reading 6.9, writing 5.5-5.8.

**My position: stop the review rounds and start implementing.** Rounds 6 and 7 found real defects. But everything left is agreed, and further rounds would mostly re-grade unchanged code. The next useful evidence is a fixed build and a play-test, not another review.

### Agreed work order (both reviewers)

| # | Work | Size | Needs owner? |
|---|---|---|---|
| 1 | **Quiz honesty:** no pass/fail while ungraded points exist; per part "auto X/Y · Z points need review"; the exam page's saved "X/39" gets the same context | Small (scoring, report, exam page) | No |
| 2 | **Item errors:** the Night Market stem, the n-b46b7e2b round 2 summary, the exam-2 giveaway, completion scoring (several accepted answers or key words), yes-no "הסכמה", the in-addition key | Small | No |
| 3 | **Part C polish sweep:** every `c-3` preface (run-together lines, broken bold), same method as P9 | Small | No |
| 4 | **Writing, minimal:** match the English part of bank entries; a paragraph box with word counter in lessons when the prompt asks for 70-90 words; one or more model paragraphs plus a checklist per topic lesson, labelled "self-checked, not graded" | Medium | No |
| 5 | **Part C required rounds:** an unscaffolded 70-90-word attempt becomes required (the topic lessons' round 3), and so do the micro-skill writing rounds | Small in code, changes the path | **Yes** |
| 6 | **Finish P6:** pair 2 (l07 + limiters-q, fixes P2 *most*), pair 3 (numbers-names-q), then the single lessons | Large (new texts) | No |
| 7 | **Phase 3:** the lesson capstone becomes a simulation; scored written answers in l10-l12 | Large | No |
| 8 | **Play-test:** changed lessons, the quiz result screen, and the self-check hypothesis above | 2-3 sessions | Owner arranges |
