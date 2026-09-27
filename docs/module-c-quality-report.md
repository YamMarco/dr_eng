# Module C quality and value report

**Audit date:** 2026-09-27  
**Scope:** Part A (`c-2`, vocabulary) and Part B (`c-1`, reading). Part C (`c-3`, writing) is excluded.  
**Independence:** This report was produced from the live lesson files and the current official exam. `docs/module-c-review.md` was not used.

## Verdict

> **English teacher:** “This is a strong remedial skills course with unusually clear scaffolding. It is not yet a complete Bagrut-preparation product, because the final assessment is much easier and less productive than the real exam.”

**Teacher grade: 6.8/10**

> **High-school student:** “The course makes the exam language less scary and gives me simple things to do. But after finishing it, the real paper would still surprise me with its length and the number of answers I must write myself.”

**Student grade: 7.4/10**

**Combined grade: 7.1/10**

The module has high value as a bridge for a weak or anxious student (**8.3/10**), good value as revision beside classroom teaching (**7.3/10**), and only moderate value as a student’s only preparation resource (**5.8/10**).

## What was reviewed

- 31 live lesson nodes: 12 vocabulary nodes and 19 reading nodes.
- 835 screens, including approximately 555 scored questions.
- All lesson titles, prerequisites, required rounds, explanations, passages, distractors, self-checks, summaries, and final tests in `front/src/lib/content/c/c-1.ts` and `c-2.ts`.
- The official Ministry of Education [2026 Module C exam, summer B](https://meyda.education.gov.il/sheeloney_bagrut/2026/8/HEB/16382.pdf).
- The learner progression and assessment rules in `docs/lesson-structure.md` and the lesson runner.

The official 2026 paper gives 70 points for reading and 30 for writing, lasts 1 hour 45 minutes, and allows an approved dictionary. Its reading section is one 337-word, four-paragraph text followed by nine questions. Four questions are multiple choice; five require the student to produce an English answer, including sentence completion. Only the reading portion is used in this report.

## Scorecard

| Dimension | Teacher | Student | Judgment |
| --- | ---: | ---: | --- |
| Clarity and accessibility | 8.5 | 8.8 | Excellent Hebrew scaffolding and small, understandable steps |
| Teaching design | 8.0 | 8.1 | Strong modeling, guided practice, repetition, and immediate feedback |
| Vocabulary value | 7.6 | 7.8 | Useful 47-word core with varied retrieval, but weak distractors lower rigor |
| Reading-strategy value | 7.2 | 8.0 | Memorable tools; some rules are oversimplified into exam “tricks” |
| Practice depth | 7.3 | 7.0 | Large quantity, but much of it is recognition rather than production |
| Authentic exam alignment | 5.6 | 6.2 | Texts and capstones are substantially shorter and more closed than the exam |
| Assessment validity | 5.5 | 6.3 | Completion can look like mastery; the finals do not test open-answer ability |
| Motivation and confidence | 7.7 | 8.4 | Friendly and achievable, especially for a student who feels lost |

## Voice 1: the English teacher

### What the module does well

**It teaches procedures, not vague advice.** “Read carefully” is replaced with observable actions: identify the paragraph, find the named person or number, notice `NOT`, decide whether the question asks for one or two answers, and locate evidence. The best sequence is `l00`–`l03`: search mindset, map, traffic-light comprehension check, then keyword-to-evidence navigation.

**It is designed for the student who normally gives up.** Hebrew explanations reduce cognitive load while the English target remains visible. The course repeatedly shows what common exam instructions mean. That is valuable remediation, not cosmetic translation.

**The vocabulary path has real retrieval depth.** Each core word is normally introduced on a card, recognized in an MCQ, used in context, spelled, matched, and later revisited. Required rounds prevent a student from clicking through only the introduction. `affect/effect`, `increase/decrease`, `because/in order to`, and common instruction phrases have direct exam value.

**Feedback is often specific.** Many questions explain the reason for the answer, and later vocabulary distractors such as `health/healthy` and `affect/effect` test form as well as meaning. The five-round vocabulary test provides broad cumulative retrieval.

**The content builds confidence before complexity.** For a 3-point student, early success matters. The lessons make the paper feel learnable and give the student a repeatable routine.

### What lowers the teacher grade

**1. The final assessments do not represent the real reading task.**

The real 2026 reading text is 337 words. The course’s longest passage is 165 words; its two final capstones are 139 and 113 words. More importantly, the official paper requires five written answers out of nine, while both final capstones use only `passage-mcq`. A student can pass by recognizing an answer without proving that he can formulate it in English.

This is the biggest quality problem. The module teaches open-answer formats in `l10`–`l12`, but the final assessment does not measure them.

**2. Strategy sometimes becomes an unsafe shortcut.**

“I search, I do not read” is a helpful correction for a student who translates every word, but it is too absolute as a final reading philosophy. The official paper also asks for paragraph meaning, precise reference, and information integration. Likewise, “the answer is almost always after `however`” and “`most` / `only` always means one answer” are memorable, but context still controls the answer. These should be taught as clues to test, not rules that replace comprehension.

**3. Recognition dominates production.**

The vocabulary test contains 46 MCQs, one cloze, and one writing task. The reading finals contain no typed answer. `self-check` screens expose model answers, but they do not validate whether the student independently produced a complete, grammatical response. This inflates apparent mastery.

**4. Distractor quality is inconsistent.**

The strongest items use close alternatives (`health/healthy`, `affect/effect`, word forms). Many others use obviously unrelated words such as “holiday,” “shoes,” “kitchen,” “paint,” or “sing.” A student can answer without knowing the target word. That produces activity and a high score, but weak evidence of learning.

**5. Reading mastery is under-gated.**

Most reading nodes contain four to ten rounds, but only the first round is required. Later rounds often contain the fresh-text transfer practice that would show durable learning. A student can advance after the most scaffolded exposure and skip the evidence that the skill transfers.

**6. Some messages are internally inconsistent or too categorical.**

The module alternates between “a second answer when ONE is requested means zero” and more nuanced partial-credit messages elsewhere. `l12` says one of two answers loses half the points, while other screens use absolute failure language. Exam-scoring advice should be verified and expressed consistently.

**7. The curriculum has breadth but not enough authentic synthesis.**

The module separately trains names, numbers, negation, limiters, contrast, MCQ, short answer, completion, and two answers. The summary node `n-221188d1` combines several tools well. Yet the last two tests are short, closed, and forgiving. There is no full-length reading simulation with the same mixture, density, response modes, and pressure as the official paper.

## Voice 2: the high-school student

### What feels valuable

**“I know what the question wants.”** The strongest benefit is reducing confusion around phrases such as `according to`, `give ONE`, `give TWO`, `complete the sentence`, and paragraph references.

**“I have a first move.”** Names and numbers become visual anchors; `NOT` becomes a warning; `because` means reason; `in order to` means purpose. That is much better than staring at a full page with no plan.

**“The English does not crush me.”** Hebrew guidance, short screens, repetition, and visible success make the course approachable. A weak student can build momentum instead of failing a long passage immediately.

**“The vocabulary is practical.”** Most words recur in school, environment, community, research, and health texts. Spelling, matching, cloze, and passage use are more useful than memorizing a Hebrew-English list.

### What would frustrate or mislead me

**“Some questions are too easy to game.”** If the choices are `researchers / holidays / results / shoes`, I do not need to know the word well. The app tells me I succeeded, but the exam will not give me comic distractors.

**“There is a lot of repetition.”** The repetition helps memory, but the reading path repeatedly uses the same small set of topics and lesson shapes. Ten rounds for names and numbers can feel longer than the skill deserves, while harder open answers receive less authentic practice.

**“I can move on too early.”** Since only the first round is required in most reading lessons, I can unlock the next node before doing the harder practice. A teenager preparing under time pressure is likely to do exactly that.

**“The final test gives false confidence.”** A 113- or 139-word passage with only buttons does not feel like the real 337-word paper where I must write five answers. I may finish the module feeling ready and then freeze when there is no option to tap.

**“The route is larger than the introduction suggests.”** The vocabulary section’s intro describes four lessons, but the live path contains ten instructional nodes plus an intro and a five-round test. Better time expectations would make the course feel more honest and manageable.

## Node-by-node audit

Grades below reflect current learning value, not code quality.

### Part A - Vocabulary (`c-2`)

| Node | Teacher | Student | Short judgment |
| --- | ---: | ---: | --- |
| `n-5cd02dfa` | 6.5 | 7.0 | Encouraging orientation, but it does not set a realistic route length |
| `q-words-1` | 8.0 | 8.2 | High-value exam instructions with varied retrieval |
| `q-words-2` | 7.8 | 8.0 | Strong distinction between completion, explanation, reason, and purpose |
| `nav-words-1` | 7.5 | 7.7 | Useful connectors; “after however” rule needs more nuance |
| `nav-words-2` | 7.5 | 7.6 | Clear increase/decrease/find/example signals |
| `content-1a` | 7.4 | 7.8 | Good context and transfer; several easy distractors |
| `content-1b` | 6.8 | 7.2 | Useful words, but many distractors are implausible |
| `content-1c` | 7.1 | 7.4 | Strong oppositions; uneven option quality |
| `content-2a` | 7.0 | 7.4 | Relevant words and clear form contrasts; still easy to game |
| `content-2b` | 7.8 | 7.8 | `affect/effect` is a particularly valuable distinction |
| `content-2c` | 8.0 | 8.0 | Best distractors and strongest contextual precision in the content group |
| `vocab-test` | 6.5 | 6.7 | Broad coverage, but 46 of 48 scored items are recognition MCQs |

**Part A grade: teacher 7.4, student 7.6.**

### Part B - Reading (`c-1`)

| Node | Teacher | Student | Short judgment |
| --- | ---: | ---: | --- |
| `l00` | 7.5 | 8.5 | Excellent confidence reset; slogan is too absolute |
| `l01` | 8.0 | 8.2 | Useful 30-second map and topic orientation |
| `l02` | 8.0 | 8.0 | Strong self-monitoring and dictionary discipline |
| `l03` | 8.5 | 8.3 | Best reading lesson: question → keyword → location → evidence |
| `l04` | 6.5 | 7.0 | Clear visual skill, but mostly marking drills |
| `numbers-names-q` | 7.0 | 6.7 | Good transfer volume; ten rounds risk fatigue |
| `l06` | 6.5 | 7.0 | Memorable warning, narrow drill |
| `not-q` | 7.6 | 7.4 | Solid checking routine and real-text application |
| `l07` | 6.0 | 6.8 | Helpful idea presented too categorically |
| `limiters-q` | 6.7 | 7.0 | Adds application but preserves the oversimplification |
| `n-221188d1` | 8.0 | 8.0 | Strong mixed-tool recap and one of the best synthesis nodes |
| `l08` | 6.5 | 7.0 | Useful signal recognition, but “answer after however” is not a law |
| `n-b46b7e2b` | 7.1 | 7.4 | Better exam context, still heavily guided |
| `l09` | 7.6 | 7.6 | Good treatment of plausible-but-irrelevant options |
| `l10` | 6.6 | 6.9 | Important format, insufficient independent answer production |
| `l11` | 7.1 | 7.1 | Good reason/purpose and grammar check |
| `l12` | 6.7 | 7.0 | Important skill; scoring advice and answer production need tightening |
| `n-649ed18f` | 5.6 | 6.5 | Short all-MCQ recap, not a valid final test of the taught formats |
| `n-7c5330b8` | 5.0 | 6.2 | Called a full summary but far shorter and more closed than the exam |

**Part B grade: teacher 6.5, student 7.3.**

## Highest-value improvements

### 1. Replace the final reading summary with a real simulation

Create one 280–350 word, four-paragraph article/report with approximately nine questions and the same response mix as a current paper: multiple choice, short written answers, and sentence completion. Time it as a whole. This single change would most improve both validity and student readiness.

### 2. Require production before showing model answers

In `l10`, `l11`, `l12`, and the final simulation, require students to type the answer first. Then show a model and a small deterministic checklist: answered the exact question, used evidence, complete sentence where needed, no repeated stem word. The final score should not be based only on recognizing an option.

### 3. Make transfer rounds mandatory in the reading path

Require at least one fresh-text round, not only the first guided round, before unlocking the next node. Keep extra repetition optional. This would make progression mean “can apply,” not merely “has seen.”

### 4. Rewrite weak distractors

Replace unrelated options with same-topic, same-part-of-speech alternatives or word-form traps. The best existing items in `content-2c` and `content-2b` should be the standard for all vocabulary nodes.

### 5. Reframe shortcuts as hypotheses

Use language such as “`however` often signals the writer’s new main point—check what the question asks” and “a limiter narrows the answer—prove the exact scope from the text.” Preserve the memorable cue without teaching a rule that can fail.

### 6. Fix expectation and scoring messages

State the real number of nodes and approximate workload in the section introduction. Audit all claims about partial credit, `ONE`, and `TWO` against official marking guidance, then use one consistent formulation.

## Bottom line

Module C is already better than a worksheet collection. It has a coherent teaching voice, good remediation, meaningful vocabulary retrieval, and several memorable strategies. Its strongest value is turning an anxious, weak reader into a student who knows where to begin.

Its present ceiling is assessment authenticity. The module teaches many skills but verifies them with shorter texts, generous options, and too little independent English production. Fixing the final simulation, transfer gating, and distractors would plausibly move the teacher grade from **6.8** to roughly **8.3** without rebuilding the curriculum.
