# Writing audit (Part C, c-3)

Living doc: top = what's still open, bottom = history (fixed items, decisions).
Snapshot: 2026-10-07. Source: a read-through of all 12 c-3 nodes in `front/src/lib/content/c/c-3.ts`, as a private tutor / Bagrut English teacher / micro-skill coach. Questions asked: is the overload progressive enough, and do students get enough reps to absorb each move?
Companion: `docs/module-c-audit.md` (per-node grades), `QC_report/module-c-report.md` (whole-module report).

Difficulty: S = under an hour, M = half a day, L = more than a day.

## Verdict

The order of skills is right (stance -> because -> In addition -> For example -> In conclusion -> subject+verb -> 70-90 -> four question types). The dose is not. Students mostly recognize good writing; they rarely produce it, so the moves won't become automatic. There is also a cliff between the micro-skills (at most 2 sentences) and the first topic lesson (70-90 words in round 1).

## Open

### Critical

**#1 Students can skip almost all writing** - because, in-addition, for-example, in-conclusion, subject-verb, word-count - S
- Impact: a student can unlock all of Part C without writing a single sentence until `topic-volunteer`.
- Evidence: no c-3 node sets `requiredRounds`, so it defaults to 1 (`lessonProgress.svelte.ts` `isCompleted`). In these six nodes round 1 is MCQ / mark-word only; the writing task sits in round 2, which is optional.
- Fix: `requiredRounds: 2` on these nodes (or move the writing task into round 1).

**#2 The dose is inverted** - micro-skill nodes - M
- Impact: the moves that decide the Content grade get one rep each, so they don't become automatic.

| node | difficulty | writing reps |
|---|---|---|
| yes-no (stance) | easiest | 5 |
| because (specific reason) | hard | 1 |
| in-addition (a different reason) | hard | 1 |
| for-example (specific detail) | hardest | 1 |
| in-conclusion | easy | 1, with nothing to close |

- Fix: 3-5 writing reps on because / in-addition / for-example, each on a different prompt; yes-no can drop to 2-3.

**#3 No snowball, then a cliff** - micro-skills -> topic-volunteer - M
- Impact: each connector is practiced alone (`in-conclusion` asks for one closing sentence with no paragraph before it). Then `topic-volunteer` round 1 asks for 70-90 words (`minSentences: 4`). The "put the pieces together" step is missing.
- Fix: each node's writing task repeats every earlier move and adds one:
  - yes-no: stance
  - because: stance + because
  - in-addition: + In addition
  - for-example: + For example
  - in-conclusion: the full skeleton, about 5 sentences
- Result: students have written the skeleton about 4 times before the first topic lesson.

### High

**#4 The 70-90 word math is never taught** - word-count, topic templates - M
- Impact: the given template (I think...because / In addition / In conclusion) comes to about 45-55 words. Students hit the length penalty without knowing why.
- Evidence: `topic-volunteer` round 1 template has 3 lines; `word-count` only says "add For example" or "drop a sentence".
- Fix: teach the sum directly: each reason gets one explanation or example sentence -> about 6 sentences x 13 words = about 80 words. Use the same 6-line template in every topic lesson (today it changes between rounds: round 1 has no For example, round 2 does).

**#5 word-count has no real writing** - word-count - M
- Impact: the lesson about length never has the student write anything in the app. It's 3 MCQs plus a self-check that says "write 5 sentences" somewhere else.
- Evidence: round 2 is a `self-check`. The penalty table (60-69 = -1, 50-59 = -3, 40-49 = -6) is still flagged as unverified in `docs/module-c-audit.md`, and nothing covers going over 90 words.
- Fix: verify the penalties against the Ministry rubric; add a `writing-task` that gives a 55-word draft to extend, and one that gives a 100-word draft to cut.

**#6 MCQ answers are mostly option 2** - all c-3 MCQs - S
- Impact: students learn "pick B" instead of the skill.
- Evidence: `correctIndex` across c-3: 1 x 0, 21 x 1, 8 x 2, 1 x 3 (68% option 2). `Mcq.svelte` doesn't shuffle.
- Fix: shuffle options at render time (one place, every module benefits), or vary `correctIndex` by hand.

**#7 Recognition items are too easy** - mostly yes-no, in-conclusion, topic round 1 - M
- Impact: most wrong options are obviously wrong (no "I think" at all, or a question as a conclusion), so a correct answer proves little.
- Fix: make wrong options close to the right one: vague vs. specific reason, the same idea reworded vs. a new idea, an example that doesn't support the reason. `because` and `in-addition` round 1 already do this; make it the norm.

### Medium

**#8 Missing exercise types** - all micro-skills - M
All can be built with existing screen types:
- **Upgrade the weak sentence:** "because it is good" -> rewrite with a specific reason (`writing-task` + model answer). This is the core skill and has no drill.
- **Mixed connector cloze:** a full paragraph with 4 gaps (because / In addition / For example / In conclusion), placed in several nodes as spaced review (`cloze-pick`).
- **Put sentences in order** to build a paragraph.
- **Find the error** in a student paragraph: fragment, repeated reason, no stance, too short (`mark-word` / `mark-all`).
- **subject-verb:** drill fixing broken sentences, not only picking the correct one.

**#9 "Exam conditions" rounds aren't exam conditions** - topic-volunteer, topic-school (round 3) - S
- Impact: round 3 reuses the round 1-2 prompt and still shows the word bank, so it measures recall of a draft, not transfer.
- Fix: in round 3, use a new unseen prompt of the same question type, with no word bank and a visible timer. (topic-vacation and topic-cellphone already switch the choice; they still keep the word bank.)

**#10 No self-review after writing** - every writing-task - S-M
- Impact: automatic checks only judge structure (sentence count, word bank, mechanics, length), so "because it is good" passes. Students never compare their text with a good one.
- Fix: after each writing task, show a model answer + a 5-item checklist (stance? specific reason? a different 2nd reason? example? 70-90?) that the student ticks.

## Suggested order

1. #1 `requiredRounds` (S, biggest impact)
2. #3 + #2 snowball and extra reps
3. #6 shuffle in `Mcq.svelte`
4. #8 upgrade-the-sentence + connector cloze
5. #4 + #5 rebuild word-count around the sentence math
6. #9, #10, #7

## History

(none yet)
