# COBE (oral exam)

Present state only. Module id `cobe`, on the unit 4 and unit 5 paths (`curriculum.ts`): one module, so both units show the same lessons and share progress. Lesson ids are `cobe-` prefixed. Content: `front/src/lib/content/cobe/cobe-<N>.ts`; skill row "דיבור" (`skill: 'speaking'`).

## Sources

- **Exam rules (official, overrides everything):** Ministry "Table of Specifications, Rubrics and Guidelines for 4 and 5 Point COBE", updated 15-09-2026 for 2027 (`docs/material/cobe/COBE20232024TableofSpecsANDRubrics.pdf`), stored as data in `front/src/lib/content/rubrics/cobe.json` (`cobeRubric`).
- **Teaching (truest):** the lesson-plan set (`cobe_lesson_plan.pdf`, `COBE Exam Lesson Plan.pdf`, `cobe_student_worksheets.pdf`): the 3-step model, the 3 simulations, the peer-feedback criteria.
- **Older, question bank only:** `COBE_workbook.pdf` (24 Part A topics with vocabulary and questions, 25 project questions); its model answers contain errors.

## The exam

Three parts, a set of two questions each, one recording per set (max 2 files), 30 minutes, no notes. A personal response 25 (choose 1 of 2 topics), B project 25 (1-2 min), C clip 50 (set 1 understanding, set 2 interpretation). Deductions: under 20 s = 0; Part B under a minute loses 20% / 50% of every criterion; answering one question of a set halves Topic Development; Part C needs at least one answer.

**4 vs 5 points** differ only in grading: weights (topic / delivery / vocabulary / language) 60/10/20/10 vs 50/15/20/15, and stricter 5-point descriptors. The lessons and the mock exam are shared; the report grades with the student's level (`profile.units`, undecided = 4).

## Grading a recording

`feedback/speaking.ts` `gradeSpeaking(rubric, {level, part, points, seconds}, {bands, answeredAll})`: each criterion is judged in a band (76-100 / 55-75 / 26-54 / 0-25, counted at its midpoint), weighted by level, then the deductions. Pure; tests in `tests/cobe.test.ts`. Today the judgement comes from the student (self-assessment in the exam report, `quiz/SpeakingReview.svelte`); the voice-LLM grader will supply the same judgement.

## Progress and AI feedback

- **Take history** (`lib/takeHistory.ts`): per question (prompt hash) the FIRST and LATEST take's audio in IndexedDB, and counts (takes, reached the target) in localStorage. Device only. After a lesson take, `TakeCompare` shows the first try next to now (seconds, +/- badge, "reached the target for the first time", the first take to play). The module page's speaking row shows questions practiced and the share of takes that reached the target.
- **AI feedback** (`/api/speak`, role `grade-speaking`, prompt `server/prompts/grade-speaking.md`): the take is converted in the browser to 12 kHz mono WAV (`lib/audioWav.ts`, trimmed to 2 minutes) and sent with the question set and the level. The model returns a transcript, a band per criterion, answeredAll and Hebrew strengths / tips. Lessons: a "משוב AI על ההקלטה" button after each take (`feedback/SpeakingFeedback.svelte`). Exam report: the same button fills the rubric bands (the student can still change them); the score always comes from `gradeSpeaking`.

- **Phrase bank** (`content/cobe/phrases.ts`, `lesson-screens/PhraseBank.svelte`): a "ביטויים" chip on lesson speaking screens (never in exams: no notes) opens spoken chunks by job (open, buy time, rescue, opinion, example, link, project, clip, close), the groups that fit the screen's `part` first, each with listen + star. Starred phrases and phrases quoted in AI tips ("+ לבנק") go to "הביטויים שלי" (`lib/phraseBank.svelte.ts`, localStorage). Targets Vocabulary (chunks and expressions) and Delivery (fewer hesitations).

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

## Mock exam (quiz/cobe)

`cobe-exam-1`: A (two topics, one recording), B (project, 90 s target), C (clip placeholder + two sets), 30 minutes, 4 recordings x 25 points. Each recording is a manual item (`speak` with `part` + `points`); the report holds the result as pending until every recording is judged, then totals and pass / fail.

## Open

- Nothing played by a student yet.
- Part A (personal response) has no lessons.
- Part C clips: none yet (lessons and the mock exam). Add `src` to the `video` screens in `/edit`, then fit the questions to each clip.
- Recordings live in memory: after a reload the report can't play them back (scores stay).
- The "Part C needs at least one answer" rule is not enforced in code.
- Drafts in the self-check screens are not saved, so the simulation cannot show the student's own hook back.
- Arabic content translations (`translations/ar.json`) missing for cobe-1 / cobe-2; titles are in. Report strings (`cobeReview`) are Hebrew only.
- AI feedback is one-shot per take, not yet a back-and-forth voice conversation.
- The AI never sees the Part C clip: it judges whether answers respond to the questions, not their accuracy about the clip.
- Take history is per device and per prompt text: editing a prompt starts a new history.
