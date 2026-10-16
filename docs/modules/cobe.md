# COBE (oral exam)

Present state only. Module id `cobe`, on the unit 4 and unit 5 paths (`curriculum.ts`): one module, so both units show the same lessons and share progress (the 4- and 5-point COBE have the same three parts). Lesson ids are `cobe-` prefixed. Content: `front/src/lib/content/cobe/cobe-<N>.ts`; skill row "דיבור" (`skill: 'speaking'`).

## Sources

- **Truth source:** `docs/material/cobe/` lesson-plan set (`cobe_lesson_plan.pdf`, `COBE Exam Lesson Plan.pdf`, `cobe_student_worksheets.pdf`): the 3-step model, the 3 simulations, the peer-feedback criteria.
- **Exam structure:** Ministry 4-point handbook, Dec 2024, pp. 15-19 (`ministry-4points-booklet-2025.pdf`). Computerized; every answer is ONE recording. Part A personal response (25 pts, choose 1 of 2 topics, a set of questions, 2-3 min); Part B project (25 pts, a set of questions, 1-2 min speaking); Part C audio-visual prompt (50 pts, 2 sets: understanding, interpretation, 4-5 min).
- **Older, question bank only:** `COBE_workbook.pdf` (24 Part A topics with vocabulary and questions, 25 project questions). Its model answers contain errors; its exam rules are outdated. Never quote rules from it (20-second minimum, pause penalties, criteria weights, no notes, headphones).

## Part B - Project (cobe-1)

The 3-step model: **Personal Hook** (why I chose the topic) -> **Honest Pivot** (rescue phrase when a fact is forgotten) -> **"So What?"** (why it matters today). Steps 1-3 lessons: recognise (mcq, cloze-pick, mark-all, sentence-completion), then a `self-check` where the student drafts their own project answer. The simulation records each step, then the whole set in one take.

| Node | Micro-skill | requiredRounds |
|---|---|---|
| mindset | Confidence, not memory; exam shape; the 3 steps | 1 |
| hook | Open with a personal moment -> question -> topic -> surprise | 2 |
| pivot | "To be completely honest, I don't recall..., but..." then the main point | 2 |
| so-what | Connect to me / Israel / the future | 2 |
| simulation | Elevator Pitch 45 s, Honest Pivot 30 s, So What 45 s; then the full set 60 s | 2 |

Self-check criteria (from the peer sheet): Energy & Voice (replaces eye contact: the exam is on a computer), Rescue Phrases, the "So What?" factor.

## Part C - Clip (cobe-2)

Each lesson: recognise (cloze-pick, mcq), a `video` screen, then a `speak` answer to the set.

| Node | Micro-skill | Clip |
|---|---|---|
| clip-describe | Set 1: who, where, what happened in order, how it ended | placeholder |
| clip-interpret | Set 2: stance, because, example from the clip, "If I were..., I would..." | placeholder |

The `speak` prompts are generic ("the people in the clip"); rewrite them once each lesson has its clip.

## Open

- Nothing played by a student yet.
- Part A (personal response) has no nodes.
- Part C clips: none yet. Add `src` to the two `video` screens (`/edit` -> the screen -> clip link), then fit the questions to each clip.
- Drafts in the self-check screens are not saved, so the simulation cannot show the student's own hook back.
- Arabic content translations (`translations/ar.json`) missing for cobe-1; titles are in.
- Model-graded speaking (speech-to-text + feedback) not built; see `feedback-framework.md` if added.
