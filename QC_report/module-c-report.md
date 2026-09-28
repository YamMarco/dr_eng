# Module C quality report (combined)

Date: 2026-09-28. **Scope: Part A (vocabulary, `c-2`) and Part B (reading, `c-1`).** Part C (writing, `c-3`) is excluded.
Sources: `claude_report.md` and `gpt_report.md` in this folder. Both reports read every screen of the live content, and neither used the other. Where a number or claim comes from only one of them, it is marked **[C]** (Claude) or **[G]** (GPT).

Content under review: 31 nodes (12 vocabulary, 19 reading), 835 screens, about 555 scored questions [G].

## Verdict

| | Teacher | Student |
|---|---|---|
| Part A vocabulary | 6.5 | 6.5 |
| Part B reading | 6.8 | 7.4 |
| **Overall** | **6.7** | **7.0** |

**Combined: 6.8/10.** The Claude report gave 6.5/7 and the GPT report gave 6.8/7.4. The main gap is Part A: GPT gave it 7.4, but it didn't check answer keys and missed about ten broken or ambiguous items. Those items bring Part A down to 6.5 here.

**Value by use** [G]:
- As a bridge for a weak or anxious student: **8.3**
- As revision alongside classroom teaching: **7.3**
- As the only preparation a student uses: **5.8**

**One sentence each:**
- **Teacher:** "A strong remedial course with a real method, let down by broken items, rules taught too absolutely, and final tests much easier than the exam."
- **Student:** "It told me what to do first, but the answers are easy to guess, and the real paper would still surprise me."

## The real exam (for reference)

From the official 2026 summer B paper [G]:
- 1 hour 45 minutes; 70 points for reading, 30 for writing; an approved dictionary is allowed.
- Reading is one text of 337 words in 4 paragraphs, with 9 questions.
- 4 of the 9 questions are multiple choice. The other 5 need a written English answer, including sentence completion.

This settles one claim [C] listed as unchecked: "the exam is 1:45" is correct.

## Where both reports agree

1. **The reading method is the core value.** l00 to l03 (search mindset, title + paragraph I map, traffic light, then keyword to evidence) is the best sequence in the module. l03 is the best single lesson, and q-words-1/2 (instruction words) is high value.
2. **Hebrew scaffolding and short steps work.** A weak student gets momentum instead of failing a long passage straight away.
3. **Part A's distractors are too easy.** Options like holiday / shoes / paint / sing let a student pass without knowing the word. content-2c (and, per [G], content-2b) is the standard to copy.
4. **Two tips are taught as laws.** "After *however* is the answer" and "*most* / *only* = one answer" should be taught as clues to check, not rules.
5. **Advice about extra answers contradicts itself.** l10 and limiters-q say "two answers to ONE = 0", but l12 says one missing answer loses half the points and that the checker reads the first two.
6. **Too much repetition and recognition.** The same few texts and lesson shapes come back again and again, and vocab-test is almost all multiple choice (46 of 48 items [G]).
7. **Section intros undercount.** Part A's intro says four lessons, but the path has 12 nodes.

## Found by only one report

### Claude report: wrong or ambiguous items (all checked against source)

| Node | Item | Problem |
|---|---|---|
| q-words-2 r3 | mark-word "The road was closed because of the storm." | key is index 3 (**closed**); should be 4 (**because**) |
| content-1c r1 | "The storm ___ many houses." | **ruined** is also correct |
| content-1c r3 | "A rare ___ of frog" | **type** is also correct |
| content-1c r4 | 5 MCQs, no explanations | grow/increase, ruin/destroy, guard/protect, types/species: two correct options each |
| content-1c r4 | "What destroys forests every year?" | "Pollution" is partly correct |
| l02 r0 | "What does contribute mean?" | correct option labelled 🟢; should be 🟡 |
| l08 r2 | "...but nothing was built... Although..." | *but* is not scored as a contrast word |
| l10 preface | "why do volunteers feel less stressed?" -> "Because they feel less stressed..." | circular answer |
| l08, n-b46b7e2b r3 | "What does paragraph I say about people who cannot swim?" | "They feel embarrassed and never try" is also correct |
| limiters-q r0 | "in most cities, what is available? -> one answer" | quantifier *most* treated as a limiter |
| numbers-names-q r3 | "Give TWO" counted as a number anchor | TWO is an answer count, not a search target |

**Other Claude-only findings:**
- **The vocab gate is gone.** `l00.required` is `[]` since ce2e759, yet l00's preface says "if you're here, you passed the words", and the audit says to keep the gate.
- **Drill prefaces promise more items than they have.** They say "ten sentences / seven paragraphs / four texts", but those rounds show 2 to 4 items (l04, l06, l07, l08).
- **Typos:** "איך איך", "הטקטסט", "טקטס", "תמי", stray "ֿ" lines, broken bold markers, and the flipped period ".הן".
- **Spelling is copy-only:** 0 of 47 `spell-word` screens use `listen`.
- **Unverified numbers:** "90% of students" (l06), "14 points, 7 per answer" (l12).

### GPT report: assessment validity

- **The capstones are far from the real paper.** They are 139 and 113 words against the exam's 337, and they are all multiple choice, while the exam needs 5 written answers out of 9. The longest passage in the whole module is 165 words.
- **Nothing written is scored in Part B.** Typed answers are `self-check`: the student sees the model answer but is never scored.
- **Reading nodes are under-gated.** Only round 0 is required, so the fresh-text transfer rounds in later rounds can be skipped.
- **"I search, I don't read" is too absolute.** The paper also asks about paragraph meaning and combining information.
- **Route length is not shown.** The student isn't told how long Part A is or how much work lies ahead.

## Disagreements and how they are resolved

| Topic | Claude | GPT | Resolution |
|---|---|---|---|
| Part A teacher grade | 6 | 7.4 | **6.5.** GPT is right that the structure is strong. The broken keys and easy distractors are real and pull it down |
| Biggest problem | item quality (wrong keys, fake distractors) | assessment validity (short, closed finals) | **Both.** Item quality comes first because it's cheap to fix and costs trust now. Validity is the biggest structural gap |
| Student view of Part A | too long and too easy | practical and approachable | **Both hold:** the words are useful, but there are too many screens and too little challenge |
| n-221188d1 | not singled out | 8/8, best synthesis node | Accept GPT's view: use it as the template for the final simulation |

## Action plan (by value per effort)

| # | Fix | Effort | Source |
|---|---|---|---|
| 1 | Fix the 11 wrong or ambiguous items above, and add explanations to content-1c r4 | 1-2 h | C |
| 2 | Rewrite the two heuristics as clues to check ("*however* often signals the writer's point - check what the question asks"; only *the most / the only / the main* limit to one answer). Remove TWO from the number-anchor item | 2 h | both |
| 3 | Use one consistent message about extra and missing answers, checked against official marking guidance. Verify or remove "90%" and "14/7" | 1 h | both |
| 4 | Polish: typos, stray characters, "ten sentences" counts, sectionMeta counts, and show the route length | 1 h | both |
| 5 | Decide the vocab gate (restore `required: ['vocab-test']` or change the l00 preface and the audit) | 10 min | C |
| 6 | Replace easy distractors in content-1a, 1b, 2a, 2b and vocab-test using the content-2c pattern | half a day | both |
| 7 | **Real final simulation:** replace n-7c5330b8 with a 280-350-word, 4-paragraph text, about 9 questions in the exam mix (MCQ, short written answers, completion), timed as one run. Base it on n-221188d1 | 1 day | G |
| 8 | Written answers before model answers in l10, l11, l12 and the simulation: score with `passage-quiz` keywords, then show the model plus a short checklist | half a day | G |
| 9 | Make one fresh-text round required per reading node (`requiredRounds`), with the rest optional | 1-2 h | G |
| 10 | Part A: a quick placement check per node, and switch half of `spell-word` to `listen` | half a day | C |
| 11 | Play-test with 2-3 real students (see `module-c-audit.md` §6c) | 2 h | C |

**Expected result:**
- After 1-6 (about a day): Part A about 7.5, overall about 7.3.
- After 7-9 as well: about 8.3 (GPT's estimate agrees).
- Grades above that need play-testing (#11) to be more than opinion.
