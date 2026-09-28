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
