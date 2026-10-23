# COBE (oral exam)

Present state only. Module id `cobe`, on the unit 4 and unit 5 paths (`curriculum.ts`): one module, so both units show the same lessons and share progress. Lesson ids are `cobe-` prefixed. Content: `front/src/lib/content/cobe/cobe-<N>.ts`; skill row "דיבור" (`skill: 'speaking'`).

## Sources

- **Exam rules (official, overrides everything):** Ministry "Table of Specifications, Rubrics and Guidelines for 4 and 5 Point COBE", updated 15-09-2026 for 2027 (`docs/material/cobe/COBE20232024TableofSpecsANDRubrics.pdf`), stored as data in `front/src/lib/content/rubrics/cobe.json` (`cobeRubric`).
- **Lessons:** the partner course, one per level (`COBE_4_Point_Path_App_Course.docx` / `COBE_5_Point_Path_App_Course.docx`, screens as `cobe_4pt.json` / `cobe_5pt.json`, 60 screens each). Official sample questions are quoted verbatim, never reworded.
- **Teaching background:** the lesson-plan set (`cobe_lesson_plan.pdf`, `COBE Exam Lesson Plan.pdf`, `cobe_student_worksheets.pdf`).
- **Older, question bank only:** `COBE_workbook.pdf` (24 Part A topics with vocabulary and questions, 25 project questions); its model answers contain errors.

## The exam

Three parts, a set of two questions each, one recording per set (max 2 files), 30 minutes, no notes. A personal response 25 (choose 1 of 2 topics), B project 25 (1-2 min), C clip 50 (set 1 understanding, set 2 interpretation). Deductions: under 20 s = 0; Part B under a minute loses 20% / 50% of every criterion; answering one question of a set halves Topic Development; Part C needs at least one answer.

**4 vs 5 points:** the exam is the same; grading differs: weights (topic / delivery / vocabulary / language) 60/10/20/10 vs 50/15/20/15, and stricter 5-point descriptors. The mock exam is shared; the report grades with the student's level (`profile.units`, undecided = 4). The lessons differ by level (below).

## Grading a recording

`feedback/speaking.ts` `gradeSpeaking(rubric, {level, part, points, seconds}, {bands, answeredAll})`: each criterion is judged in a band (76-100 / 55-75 / 26-54 / 0-25, counted at its midpoint), weighted by level, then the deductions. Pure; tests in `tests/cobe.test.ts`. Today the judgement comes from the student (self-assessment in the exam report, `quiz/SpeakingReview.svelte`); the voice-LLM grader will supply the same judgement.

## Progress and AI feedback

- **Take history** (`lib/takeHistory.ts`): per question (prompt hash) the FIRST and LATEST take's audio in IndexedDB, and counts (takes, reached the target) in localStorage. Device only. After a lesson take, `TakeCompare` shows the first try next to now (seconds, +/- badge, "reached the target for the first time", the first take to play). The module page's speaking row shows questions practiced and the share of takes that reached the target.
- **AI feedback** (`/api/speak`, role `grade-speaking`, prompt `server/prompts/grade-speaking.md`): the take is converted in the browser to 12 kHz mono WAV (`lib/audioWav.ts`, trimmed to 2 minutes) and sent with the question set and the level. The model returns a transcript, a band per criterion, answeredAll and Hebrew strengths / tips. Lessons: a "משוב AI על ההקלטה" button after each take (`feedback/SpeakingFeedback.svelte`). Exam report: the same button fills the rubric bands (the student can still change them); the score always comes from `gradeSpeaking`.

- **Phrase bank** (`content/cobe/phrases.ts`, `lesson-screens/PhraseBank.svelte`): a "ביטויים" chip on lesson speaking screens (never in exams: no notes) opens spoken chunks by job (open, buy time, rescue, opinion, example, link, project, clip, close), the groups that fit the screen's `part` first, each with listen + star. Starred phrases and phrases quoted in AI tips ("+ לבנק") go to "הביטויים שלי" (`lib/phraseBank.svelte.ts`, localStorage). Targets Vocabulary (chunks and expressions) and Delivery (fewer hesitations).

## Module page

Hero, exams, then a lessons card (a row per part with progress, the path link) and a speaking card (AI chat; recording practice once there are takes). Parts are named with Hebrew letters in Hebrew text (חלק א׳ / ב׳ / ג׳), "Part A" in English text.

## AI chat (שיחה עם AI)

Short spoken conversations for confidence and fluency, not grading. A row on the COBE module page opens `/app/unit/<u>/module/cobe/chat`.

- **Modes:** banter (10 light topics from the official Part A list + "הפתעה", 4-6 student turns) and mini COBE: Part A (two drawn topics, the student picks one, 2 questions + a follow-up) or Part B (the student names their project, 2 questions + a follow-up), 4 turns. Topics and openers: `content/cobe/chatTopics.ts`; turn limits: `feedback/chat.ts`.
- **A turn:** the AI line is spoken (text hidden - listening first; "תמליל השיחה" shows the chat), the student answers in one take with a ring toward a soft 20 s goal, `/api/chat-speak` (role `chat-speaking`, prompt `server/prompts/chat-speaking.md`) gets the take as WAV plus the chat so far as text and returns what it heard and its next line. The opener needs no call. No hints, no typing.
- **Tone:** warm, praises effort, gentle recasts (the correct form inside the reply, never pointing at the mistake), stays away from personal details and sensitive topics.
- **End:** the last turn carries a summary (2 strengths and a closing line in Hebrew, 1-2 English phrases with "+ לבנק"); no score. Counts as a practice day; `chat-count` syncs. The chat itself is not saved.
- **Voice:** `lib/chatVoice.ts` (browser TTS today); a server voice is another `ChatVoice`.
- Each turn counts toward the daily LLM quota; at the limit the chat says so and ends.

## Lessons

One path, three sections (one per exam part), 5 lessons each, one round each with `retryMissed`, unlocked in a chain A -> B -> C. Each lesson holds the 4-point version in `content` and the 5-point one in `content5`, picked by the path's unit (`lessonForUnits`, lessons page); same ids, same rounds count (test), so progress is shared. Screens shared by both levels (exam rules, official sets) are written into both. Content files are generated plain data; edit them in `/edit`: a "4 יחידות / 5 יחידות" switch picks the version (an edit link from the 5-unit path opens 5). The versions are independent - a screen edited in one never changes the other, so a shared screen is edited twice. Round add / delete / move applies to both.

- **4 points:** answer every question, say why, give an example; survival phrases; simple words; Part B at least a minute (target 75 s).
- **5 points:** depth - reason + explanation, specific evidence, the other side, a takeaway; precise words; Part B about 1:30.

| Section | Lessons (ids `cobe-a-*`, `cobe-b-*`, `cobe-c-*`) |
|---|---|
| `cobe-1` חלק A - עליי | meet-exam (rules true/false, exam screen, warm-up), answer-tools (question words, the Answer Ladder: 4 steps / 5 with the other side), positive-rescue (positive answers, rescue sentences, sentence bank, words), talk-about-me (practice sets, past simple / present perfect), stories (trip / turning point, a person, "If I had", checkpoint) |
| `cobe-2` חלק B - הפרויקט | basics (time zones, Project Card `self-check`, words, question families), topic (official set, model answer, what I learned), sources-team (sources, challenge -> solution, pros / cons, next time), full-minute (stretchers, linking words, key words not a script, rescue template), practice (official set, two practice sets, checkpoint) |
| `cobe-3` חלק C - הקליפ | how-it-works (set 1 vs 2, detective questions, the practice clip), describe (verbs, order, set 1 model), outcome-feelings (outcome / turning point, set 1 take, feelings, feeling + proof), interpret (message, "If I were", learn from it, set 2 bank), practice (set 2 model and take, rescue, checkpoint) |

Practice clips: "The Lost Wallet" (4) and "The New Student" (5); their model answers and questions describe them.

Mapped from the partner's exercise kinds: true/false and sorting -> `mcq`; build a sentence / put in order -> `order`; tap the parts -> `mark-all` with categories; say it / record -> `speak`; Project Card -> `self-check`; "save to My Bank" -> a pointer to the phrase bank. Left out: XP, streaks, leaderboards (ux-principles), timer sliders and meters, hotspots, memory games, listen-only questions, exit tickets.

## Mock exam (quiz/cobe)

`cobe-exam-1`: A (two topics, one recording), B (project, 90 s target), C (clip placeholder + two sets), 30 minutes, 4 recordings x 25 points. Each recording is a manual item (`speak` with `part` + `points`); the report holds the result as pending until every recording is judged, then totals and pass / fail.

## Open

- Nothing played by a student yet.
- Picture pairs (people, places, verbs, feelings for each moment of the clip): to be decided; the lessons use word pairs and text meanwhile.
- Part C clips: none yet (lessons and the mock exam). The two practice clips must be made to match the lessons' model answers; add `src` to the `video` screens in `/edit`.
- Recordings live in memory: after a reload the report can't play them back (scores stay).
- The "Part C needs at least one answer" rule is not enforced in code.
- The Project Card (`self-check`) is not saved, so later Part B screens can't show it back.
- `/edit` checks (issues) cover the version on screen only.
- Arabic content translations (`translations/ar.json`) missing for the lessons; titles are in. Report strings (`cobeReview`) are Hebrew only.
- AI feedback in lessons is one-shot per take; the back-and-forth is the AI chat (turn-based, not live voice).
- The AI never sees the Part C clip: it judges whether answers respond to the questions, not their accuracy about the clip.
- Take history is per device and per prompt text: editing a prompt starts a new history.
