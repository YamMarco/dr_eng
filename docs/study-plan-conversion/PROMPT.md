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

## Output

A single markdown blueprint, no code. Structure:

### 1. Placement

- unit + module this belongs to (`4.c`, `5.g`, ...), and why
- new section vs. extension of an existing one
- the section id (`c-<N>`), `titleHe`, `titleEn`, and an `intro` with
  `greeting` (short English hook) + `goal` (one Hebrew sentence, lesson count)

### 2. Lesson list

A table, in path order:

| # | id | code | titleHe | required | teaches | rounds |
| --- | --- | --- | --- | --- | --- | --- |

- `id` - descriptive kebab-case, globally unique in the module (`not-trap`,
  `p14-structure`), never sequential `l0x`
- `code` - `c.<section>.<n>`; practice-only twins get a `Q` suffix (`c.1.5Q`)
- `required` - prerequisite ids; `[]` for the section's root
- one lesson = one skill. If a lesson teaches two things, split it.
- a skill that needs drilling gets a separate practice lesson right after the
  teaching one, rather than a longer single lesson

### 3. Screen breakdown per lesson

For each lesson:

```
### <id> - <titleHe> (<code>)
preface: <screen type> - <one line of what it says>
round 0: <screen type> - <what it asks> (scored: y/n)
         ...
round 1 (optional): ...
```

Rules:
- only use screen types listed in `docs/lesson-structure.md`. If the plan needs
  something none of them cover, flag it under "Gaps" - do not invent a type.
- `preface` = teaching only (`preface`, `steps`, `summary`, `word-card`,
  `question-preview`). It plays once, before round 0.
- round 0 = the practice that unlocks the path. 3-6 screens, at least 2 scored.
- pass is >=80%, so do not mix one hard scored screen with one easy one.
- prefer `passage-mcq` over `timed-passage` unless the plan is explicitly about
  time pressure; use `timed-reading` / `time-result` / `time-comparison` only as
  a set, sharing a `timerKey`.
- `mark-all` for "find all X in the text" plan items; note the categories.

### 4. Draft content

For each screen, the actual text - English teaching passages, prompts, options,
Hebrew explanation lines. Prototype-grade but real: no `TODO`, no lorem, no
placeholder passages. Exam-style English, level-matched to the unit (4 = simpler
lexis, shorter passages; 5 = longer, denser).

### 5. Positions

Suggested `position` per lesson: `y` starts at the section's first free slot and
grows ~120 per node; `x` cycles `[0, 70, 100, 70, 0, -70, -100, -70]`.

### 6. Gaps and questions

- plan items you could not map, and what is missing
- anything that needs a new screen type (describe the shape, do not build it)
- content decisions you guessed at

## Hard constraints

- All UI-facing Hebrew text is Hebrew. Teaching passages stay English.
- No em-dashes anywhere in content text - a single `-` at most.
- Teaching content stays inline in the blueprint, never i18n keys.
- YAGNI: no extra sections, lessons or rounds beyond what the plan asks for.
- Do not write any `.ts` file. This step produces the blueprint only; a second
  pass implements it against `front/src/lib/content/`.
