# Prompt - study plan → prototype sections / lessons / screens

Paste everything below, then paste (or point at) the study plan.

---

You are converting a Bagrut English study plan into a prototype blueprint for this app.

## Before you start

1. Read `docs/lesson-structure.md` - screen types, authoring rules, path rules.
2. Read `docs/study-plan-conversion/current-material.md` - what already exists.
3. If the plan overlaps existing material, say so and propose reuse or extension
   instead of a duplicate section.

## Input

A study plan in any shape: a teacher's outline, a syllabus, a chapter list, a
scanned worksheet, a list of exam skills. It may be in Hebrew, English or both.
It will not name screen types - that mapping is your job.

## The two rules that shape everything

**One lesson = one micro skill.** Split every plan item that bundles skills. The
giveaways are "and", "then", commas, and any verb pair. `"mark the relevant info
and answer the questions accordingly"` is two lessons: marking the info, then
answering from what is marked. A lesson the learner could fail for two unrelated
reasons is still two lessons.

**Match the plan's scale.** The split is about clarity, not volume. A three-item
plan becomes roughly three to five lessons, not twenty. Do not pad a small plan
with invented coverage, and do not compress a large one. If splitting a plan
faithfully would more than double its item count, you have split too finely -
merge back the steps that cannot be practised apart.

## Output

A single markdown blueprint, no code. Structure:

### 1. Placement

- unit + module this belongs to (`4.c`, `5.g`, ...), and why
- new section vs. extension of an existing one
- the section id (`c-<N>`), `titleHe`, `titleEn`, and an `intro` with
  `greeting` (short English hook) + `goal` (one Hebrew sentence, lesson count)

### 2. Lesson list

A table, in path order:

| # | id | code | titleHe | required | micro skill | source plan item |
| --- | --- | --- | --- | --- | --- | --- |

- `micro skill` - one verb phrase. If you need "and", split the lesson.
- `source plan item` - which line of the input this came from, so the scale
  check is visible.
- `id` - descriptive kebab-case, globally unique in the module (`not-trap`,
  `p14-structure`), never sequential `l0x`
- `code` - `c.<section>.<n>`; practice-only twins get a `Q` suffix (`c.1.5Q`)
- `required` - prerequisite ids; `[]` for the section's root

### 3. Per lesson - the full spec

For each lesson, in this order:

**Preface - written out in full.** Not a summary, not a description: the actual
teaching screens with their final text, ready to paste. Teaching screen types
only (`preface`, `steps`, `summary`, `word-card`, `question-preview`). It plays
once, before round 0. Hebrew explanation, English examples.

**Question types.** Name the screen types this lesson drills - two per lesson
(for example `mark-word` + `passage-mcq`), so a round mixes recognition with
application. Give at least one fully written example question per type, with
the correct answer marked.

**Rounds.** At least 3 rounds, 4 questions each, difficulty climbing. Round 0 is
the easiest and is the one that unlocks the path; the last round is at real exam
difficulty. Write each round as its screen list with the actual question text.

Worked example of the climb, for "write a 70-90 word text using given words":

```
round 0: one sentence using 1 given word
round 1: one paragraph using 2 given words
round 2: two paragraphs using 3 given words
round 3: the full 70-90 word text, exam conditions
```

The same shape applies to reading: round 0 one short sentence and an obvious
target, the last round a full exam-length passage with distractors.

Constraints:
- pass is >=80% of the scored questions in the round, so keep the 4 questions of
  a round at one difficulty. The climb happens between rounds, not inside one.
- prefer `passage-mcq` over `timed-passage` unless the plan is explicitly about
  time pressure; use `timed-reading` / `time-result` / `time-comparison` only as
  a set, sharing a `timerKey`.
- `mark-all` for "find all X in the text" items; name the categories.

### 4. Positions

Suggested `position` per lesson: `y` starts at the section's first free slot and
grows ~120 per node; `x` cycles `[0, 70, 100, 70, 0, -70, -100, -70]`.

### 5. New screen types

Prefer the existing types - reach for a new one only when no combination of them
can express the exercise the plan asks for. When that happens:

1. list it here in one line - name, why nothing existing fits, which lessons need it
2. write the full spec to `docs/study-plan-conversion/screen-requests/<type>.md`,
   following `screen-requests/TEMPLATE.md`
3. keep the blueprint usable without it: mark the affected screens
   `NEEDS: <type>` and note the fallback you would ship in the meantime

Do not implement the new type. The spec file is the handoff.

### 6. Gaps and questions

- plan items you could not map, and what is missing
- content decisions you guessed at

## Hard constraints

- All UI-facing Hebrew text is Hebrew. Teaching passages stay English.
- No em-dashes anywhere in content text - a single `-` at most.
- Every question, passage and preface line is final text. No `TODO`, no lorem,
  no placeholder passages. Exam-style English, level-matched to the unit (4 =
  simpler lexis, shorter passages; 5 = longer, denser).
- Teaching content stays inline in the blueprint, never i18n keys.
- Do not write any `.ts` file. This step produces the blueprint plus any screen
  request specs; a second pass implements it against `front/src/lib/content/`.
