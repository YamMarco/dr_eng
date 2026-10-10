<!-- converted from writing-audit.docx -->

# Writing audit (Part C, c-3)
Living doc: top = what's still open, bottom = history (fixed items, decisions, the original audit).
Snapshot: 2026-10-10, branch writing-loop. Every item of the 2026-10-07 audit is done (see History). Content was checked against the official sources below. Nothing has been played by a student yet.
Companion: docs/module-c-audit.md (per-node grades), QC_report/module-c-report.md (whole-module report).
Difficulty: S = under an hour, M = half a day, L = more than a day.
## Official facts (verified 2026-10-10)
Sources: 3-point Bagrut handbook (Feb 2025), Module C writing rubric RubricsCD2020.pdf, MIKUD 2026 (portal_talmidim/mikud/2026/english.pdf).
- Task: 1 composition, 70-90 words, 30% of the exam. MIKUD 2026: opinion only (stories and informal letters are excluded), on one of 19 listed topics.
- Rubric (30 points): Content & Organization 10 (10/7/3/0), Vocabulary 8 (8/5/2/0), Language Use 8 (8/5/2/0), Mechanics 4 (4/2/1/0).
- Length deductions (under only): 60-69 = -1, 50-59 = -3, 40-49 = -6, 30-39 = -10, 25-29 = -15, under 25 = 0 for the whole task. No deduction above 90. These match front/src/lib/checks/length.ts.
- Not counted: the instruction sentence copied word for word, a title, a letter frame, and substantial parts copied from the reading passage. Using the question inside your own sentence does count.
- Other deductions: repeated whole ideas -1 to -3 (Content); repeated words such as *very* or slang, up to -3 (Vocabulary); list form or an irrelevant "Hi, my name is..." opener, -1 to -2 (organization). No penalty for not using paragraphs. Off topic or incomprehensible = 0.
- Exam: 1 hour 30 minutes; reading text up to 300 words, 8-10 questions.
## Verdict
The order of the moves was always right. The dose and the bridge are fixed now: writing is required, each connector gets 3 reps, every task repeats the earlier moves, the student writes the 4-sentence skeleton before the first topic lesson, and topic lessons move from skeleton to a 70-90 word paragraph box to an unseen exam topic with no word bank. After each task the student compares their text with a model answer and ticks a checklist built from the rubric. The weak point is what was always the weak point: no student has played it.
## Open
### High
#1 Not played by a student - all of c-3 - people time
- Impact: every grade is a judgement from reading the material.
- Fix: 2-3 students (weak, average, strong), 20-30 minutes each, starting at yes-no. Watch for: time per micro-skill node (rounds are sized for about 5 minutes; check that against real students), whether the checklist gets ticked honestly, and whether the paragraph box's length line confuses anyone.
#2 The module report's exam facts disagree with the handbook - QC_report/module-c-report.md bad point 8, roadmap D1 - S
- Impact: the report says the Bagrut text is about 340 words and the exam lasts 1 hour 45 minutes, and plans to lengthen the practice exams to that. For the 3-point Module C the handbook says up to 300 words and 1 hour 30 minutes, so the practice exams' 90 minutes are already right.
- Fix: correct bad point 8 and plan step 8 before anyone lengthens the exams. (Not changed here: outside Part C.)
### Medium
#4 Organization deductions are not taught - topic lessons - S
- Impact: the rubric takes 1-2 points for list form and for an irrelevant "Hi, my name is... I am 17" opener. Students write these.
- Fix: one MCQ in topic-volunteer round 1 ("which opening costs points?").
#5 Reading-to-writing only in for-example - because, in-addition, in-conclusion - S
- Fix: one screen each that reuses a Part B passage, like the Greenville task in for-example.
#8 For instance / As a result are used but never taught - for-example, word-count - S
- Impact: the 6-sentence frame (word-count, topic lessons) asks for "For instance" and "As a result". A weak student meets both for the first time inside a template and either copies them blindly or freezes.
- Fix: in for-example, one preface line + one fill-in: "For instance = another For example (use it for the second reason, so you don't repeat For example). As a result = what happens because of this." Example item: *Teenagers who work learn the value of money. ___, they stop asking their parents for money for small things.* (As a result / For instance / In addition).
#9 word-count teaches the rules but never counting - word-count - S
- Impact: the student learns that 55 words = -3 but never counts a real text, so in the exam they don't know whether they are at 62 or 78.
- Fix: one MCQ with a short paragraph: "How many words? 58 / 68 / 78", then "This text has 62 words. Which sentence would you add?" (a For instance detail vs. "It is very very important." vs. copying the question).
#10 Fragments are only caught in subject-verb - lint, all writing tasks - S
- Impact: "Because it helps people." (no main clause) appears from the because lesson onward; the automatic check doesn't flag it, so the habit forms before subject-verb.
- Fix: the lint flags a sentence that starts with "Because" and has no comma-separated main clause, or has no verb from a short list (is / are / was / have / can / should / any word ending in -s / -ed). Message: "משפט N: Because לבד הוא חצי משפט. חברו אותו למשפט הקודם: I think X because..."
#11 Self-review depends on honesty - checklist after every writing task - S
- Impact: a weak student ticks every box. The checklist teaches only if the student can see a gap.
- Fix: "fix the friend" in each topic lesson's round 1: a student paragraph with one planted fault (vague reason, a repeated second reason, an example with no detail, a new idea in the conclusion). MCQ "What is the one problem?" then, optionally, rewrite that sentence. Example: *I think every pupil must go on the school trip because it is fun. For example, we see nature. In addition, the trip is enjoyable. In conclusion, trips are good.* -> the second reason repeats the first (fun = enjoyable).
### Low
#6 Six of the 19 MIKUD question shapes have no lesson - What do you prefer / Do you agree / Which... - M
- Impact: they appear in micro-skill drills and topic exam rounds, but no topic lesson teaches their opening line.
- Fix: only if students stumble on the opening line. The stance-plus-reasons frame is the same.
#7 subject-verb free task is "any topic" - subject-verb optional round - S
- Fix: give it a MIKUD topic like the other tasks.
## Ideas for later (TBD, owner's notes)
A. Submit, then fix together - don't rewrite (owner, 2026-10-10)
- Today a failed writing task means replaying the round and writing everything again. Instead: after the check, the student keeps their text and fixes only the flagged sentences in place (e.g. sentence 2 is vague: edit just that line), then checks again. The second check is what counts.
- Why: revising is the real exam skill, and it removes the main burn-out risk (a 15-minute paragraph failing on one lint flag).
- Open questions: does a revised pass count as fully correct? How many revisions? Do the model answer and checklist show before or after the revision?
B. Planning step before the paragraph (owner, 2026-10-10)
- One unscored screen before each 70-90 paragraph: write the stance + reason 1 + reason 2 as keywords (Hebrew allowed), 1 minute. Then write.
- Why: weak students start writing without a second reason and stall in the middle. In the exam, 1-2 minutes of planning saves time.
- Build: a self-check with three short boxes, or a writing-task in line mode with autoCheck: false.
C. Vocabulary and Language Use (16 of 30 points)
- Today only the vague-word lint and subject-verb cover them. Proposed, cheapest first:
1. Upgrade words (Vocabulary, 8 points): the rubric rewards correct chunks and collocations and deducts up to 3 for repeating words like *very*. Drill: replace the weak word: *good -> useful / healthy / helpful*, *very important -> essential*, *do a mistake -> make a mistake*. MCQ + one rewrite per item. Reuse Part A words (responsibility, community, experience) so vocabulary from Part A shows up in writing.
2. Collocation pairs the exam loves: make a decision, spend time, take part in, have fun, pay attention. match-pairs + cloze-pick.
3. Error clinic (Language Use, 8 points; roadmap 6.6): the top Israeli-student errors, each as find-the-error + fix: *people is* -> *people are*; *more better* -> *better*; *I am agree* -> *I agree*; *he go* -> *he goes*; *in the next year* -> *next year*; *a informations* -> *information*. The checks/language.ts rules already detect some of these, so the drill and the automatic feedback would use the same names.
4. Lint additions: flag *very* used more than twice, and the slang the rubric names (*gonna, wanna, u, 4U, BTW*).
- Where: one node "words that score" after in-conclusion, and one "error clinic" node after subject-verb, each 3 rounds of about 5 minutes, with the last round optional.
## Suggested order
- #2 (S, protects the exams from a wrong fix)
- #1 play-test, then regrade
- #8, #9, #10, #11 (all S)
- C.1 + C.3 (two new nodes)
- A and B after the play-test shows where students stall
- #4, #5, #7
## History
### Fixed on 2026-10-10 (branch writing-loop)
All 10 items of the original audit, plus related QC report and roadmap items. One commit per point:

Every model answer passes the app's own checks (lint, word bank, sentence count, length).
### Decisions
- 2026-10-10: writing is required (owner). This answers the module report's open question on plan step 6.
- Penalty numbers are kept and now cited: they match the official rubric.
### Original audit (snapshot 2026-10-07)
Source: a read-through of all 12 c-3 nodes in front/src/lib/content/c/c-3.ts, as a private tutor / Bagrut English teacher / micro-skill coach. Questions asked: is the overload progressive enough, and do students get enough reps to absorb each move?
### Verdict
The order of skills is right (stance -> because -> In addition -> For example -> In conclusion -> subject+verb -> 70-90 -> four question types). The dose is not. Students mostly recognize good writing; they rarely produce it, so the moves won't become automatic. There is also a cliff between the micro-skills (at most 2 sentences) and the first topic lesson (70-90 words in round 1).
### Critical
#1 Students can skip almost all writing - because, in-addition, for-example, in-conclusion, subject-verb, word-count - S
- Impact: a student can unlock all of Part C without writing a single sentence until topic-volunteer.
- Evidence: no c-3 node sets requiredRounds, so it defaults to 1 (lessonProgress.svelte.ts isCompleted). In these six nodes round 1 is MCQ / mark-word only; the writing task sits in round 2, which is optional.
- Fix: requiredRounds: 2 on these nodes (or move the writing task into round 1).
#2 The dose is inverted - micro-skill nodes - M
- Impact: the moves that decide the Content grade get one rep each, so they don't become automatic.

- Fix: 3-5 writing reps on because / in-addition / for-example, each on a different prompt; yes-no can drop to 2-3.
#3 No snowball, then a cliff - micro-skills -> topic-volunteer - M
- Impact: each connector is practiced alone (in-conclusion asks for one closing sentence with no paragraph before it). Then topic-volunteer round 1 asks for 70-90 words (minSentences: 4). The "put the pieces together" step is missing.
- Fix: each node's writing task repeats every earlier move and adds one:
- yes-no: stance
- because: stance + because
- in-addition: + In addition
- for-example: + For example
- in-conclusion: the full skeleton, about 5 sentences
- Result: students have written the skeleton about 4 times before the first topic lesson.
### High
#4 The 70-90 word math is never taught - word-count, topic templates - M
- Impact: the given template (I think...because / In addition / In conclusion) comes to about 45-55 words. Students hit the length penalty without knowing why.
- Evidence: topic-volunteer round 1 template has 3 lines; word-count only says "add For example" or "drop a sentence".
- Fix: teach the sum directly: each reason gets one explanation or example sentence -> about 6 sentences x 13 words = about 80 words. Use the same 6-line template in every topic lesson (today it changes between rounds: round 1 has no For example, round 2 does).
#5 word-count has no real writing - word-count - M
- Impact: the lesson about length never has the student write anything in the app. It's 3 MCQs plus a self-check that says "write 5 sentences" somewhere else.
- Evidence: round 2 is a self-check. The penalty table (60-69 = -1, 50-59 = -3, 40-49 = -6) is still flagged as unverified in docs/module-c-audit.md, and nothing covers going over 90 words.
- Fix: verify the penalties against the Ministry rubric; add a writing-task that gives a 55-word draft to extend, and one that gives a 100-word draft to cut.
#6 MCQ answers are mostly option 2 - all c-3 MCQs - S
- Impact: students learn "pick B" instead of the skill.
- Evidence: correctIndex across c-3: 1 x 0, 21 x 1, 8 x 2, 1 x 3 (68% option 2). Mcq.svelte doesn't shuffle.
- Fix: shuffle options at render time (one place, every module benefits), or vary correctIndex by hand.
#7 Recognition items are too easy - mostly yes-no, in-conclusion, topic round 1 - M
- Impact: most wrong options are obviously wrong (no "I think" at all, or a question as a conclusion), so a correct answer proves little.
- Fix: make wrong options close to the right one: vague vs. specific reason, the same idea reworded vs. a new idea, an example that doesn't support the reason. because and in-addition round 1 already do this; make it the norm.
### Medium
#8 Missing exercise types - all micro-skills - M
All can be built with existing screen types:
- Upgrade the weak sentence: "because it is good" -> rewrite with a specific reason (writing-task + model answer). This is the core skill and has no drill.
- Mixed connector cloze: a full paragraph with 4 gaps (because / In addition / For example / In conclusion), placed in several nodes as spaced review (cloze-pick).
- Put sentences in order to build a paragraph.
- Find the error in a student paragraph: fragment, repeated reason, no stance, too short (mark-word / mark-all).
- subject-verb: drill fixing broken sentences, not only picking the correct one.
#9 "Exam conditions" rounds aren't exam conditions - topic-volunteer, topic-school (round 3) - S
- Impact: round 3 reuses the round 1-2 prompt and still shows the word bank, so it measures recall of a draft, not transfer.
- Fix: in round 3, use a new unseen prompt of the same question type, with no word bank and a visible timer. (topic-vacation and topic-cellphone already switch the choice; they still keep the word bank.)
#10 No self-review after writing - every writing-task - S-M
- Impact: automatic checks only judge structure (sentence count, word bank, mechanics, length), so "because it is good" passes. Students never compare their text with a good one.
- Fix: after each writing task, show a model answer + a 5-item checklist (stance? specific reason? a different 2nd reason? example? 70-90?) that the student ticks.
### Suggested order (2026-10-07)
- #1 requiredRounds (S, biggest impact)
- #3 + #2 snowball and extra reps
- #6 shuffle in Mcq.svelte
- #8 upgrade-the-sentence + connector cloze
- #4 + #5 rebuild word-count around the sentence math
- #9, #10, #7
| Item | What changed | Commit |
| --- | --- | --- |
| #1 writing can be skipped | every round of every c-3 node is required (requiredRounds) | 21c40aa |
| QC v3 bad 6 | word-bank entries "travel / לטייל" count when the English word is used | 7b3962c |
| #6 answers mostly option 2 | mcq options shuffle on every mount in lessons (exams keep their order); explanations quote options instead of "option 2" | 1f1a744 |
| QC v3 bad 7 | paragraph mode: a lesson writing-task with minWords is one box with a word counter and the official length line; the 8 topic paragraph tasks use it | ed50e28 |
| (found while building) | word count dropped any stance sentence that reused the question; now only a question copied whole is dropped (rubric comment 4) | 02d1e72 |
| #10 no self-review | modelAnswer + checklist on writing tasks, shown after the check (SelfReview), editable in the editor | e99d82d |
| (found while building) | lint flagged "a good idea" / "most important time" when they came from the question | e41ac0b |
| #2 + #3 dose and snowball | because / in-addition / for-example: 3 reps each on MIKUD topics, each repeating the earlier moves; in-conclusion writes the full 4-sentence skeleton twice; yes-no 5 reps down to 3 | 5056b45 |
| #8 missing exercise types | upgrade the weak sentence (because, for-example), find the error (because, subject-verb), connector cloze (in-conclusion, subject-verb), sentence order (in-conclusion), fix 3 broken sentences (subject-verb) | 802fd11 |
| #4 + #5 word math, word-count | verified penalty table; no penalty above 90 (the old "95 words" item taught the opposite); what is not counted; 6 sentences × 13 words ≈ 80; extend a 49-word draft in a paragraph box; one 6-sentence frame in every topic lesson; topic round 1 = the 4-sentence skeleton, not 70-90 | 107691a |
| #9 exam rounds weren't exam conditions | topic round 3 = an unseen MIKUD topic of the same type, no word bank, 70-90 words | c85d9e1 |
| #7 easy distractors | 11 MCQs in yes-no, in-conclusion and topic round 1; each wrong option fails on one point | 6d18cb7 |
| roadmap 6.5 | reading-to-writing in for-example: Greenville facts as the example, in your own words | 0dd264a |
| #3 no timer on writing | timeLimitMinutes countdown (exam timer pill) on topic exam rounds, 20 min; never fails the task | 0c7c1ab |
| round size | rounds of about 5 minutes for a weak student, optional practice rounds at the end, supports fade across the topic lessons | 9ae27cf |
| node | difficulty | writing reps |
| --- | --- | --- |
| yes-no (stance) | easiest | 5 |
| because (specific reason) | hard | 1 |
| in-addition (a different reason) | hard | 1 |
| for-example (specific detail) | hardest | 1 |
| in-conclusion | easy | 1, with nothing to close |