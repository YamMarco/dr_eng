# UX principles

The product decisions every student-facing screen follows. Authoritative over generic
guidelines (see `.claude/skills/ui-review`). Each rule is either **[decided]** (agreed with
the product owner) or **[evidence]** (backed by the research in the last section).

## 1. Who and what for

- Israeli high-school students preparing for the English Bagrut, 4 or 5 units. The goal is
  to be their main study source, not a supplement. **[decided]**
- What the student should feel: *I know where I stand, I know what to do next, and I can see
  myself getting better.* Calm control, not hype. **[decided]**
- Teenagers: never childish, never condescending. **[decided]**

## 2. Tone

- A calm, warm coach - with real fun on top, not instead. **[decided]**
- Wholesome doesn't mean soft. The app trains students to **handle pressure**, in the UI and
  in the content: real exam conditions, framed as training, never avoided. **[decided]**
- Pressure framing: stress is presented as the body getting ready, which helps performance -
  not as something to calm down or ignore. **[evidence: stress reappraisal]**
- Celebrate real progress; never shame, never add fake urgency. **[decided]**
- Address the student in plural (`לכם`, `סיימתם`, `מתחילים`). **[decided]**

## 3. The core loop

learn (lesson) -> practice (words) -> **prove (exam)** -> see where you stand -> work on what's weak.

- **Exams are first-class**: always visible (the best score sits on every module tile) and
  always one tap away, in real conditions (timer, grade, no feedback until submit).
  **[decided]**
- **But they're only *suggested* when the student is ready:** an exam left open, or at least
  75% of the module's lessons done (`EXAM_READY` in `dashboard/data.ts`). A student far
  from finishing the lessons is never pushed to an exam; the opening exam is an optional
  row, not a recommendation. **[decided]**
- Retrieval and spacing beat rereading: prefer a question over another reading screen;
  return to material in spaced intervals. **[evidence: Dunlosky]**
- Every screen has **one obvious next step**, and no screen is a dead end - finishing
  something always offers what comes next. **[decided]**

## 4. Devices

- Both desktop and mobile, by design. **[decided]**
- **Writing** (essays, long answers) is steered to the desktop. **Short tasks** (words,
  reading questions, reviews) fit the phone. A phone user who reaches a writing step gets
  the note plus a phone-sized alternative, never a block. **[decided]**

## 5. Motivation and gamification

- **Feedback that informs beats rewards that pay.** Points or rewards for simply doing a task
  undermine intrinsic motivation; feedback about competence doesn't. **[evidence: SDT]**
- **No XP.** Without social comparison (ruled out) it's a meaningless number. **[decided +
  evidence: badges/points show little learning effect]**
- **No leaderboards or comparison** between students - it feeds anxiety. **[decided]**
- **Progression is the lever:** levels, mastery (gold lessons), visible paths. **[evidence:
  the learning gain in gamified courses came from levels]**
- **Consistency:** a weekly goal (4 of 7 days, Sunday to Saturday), not a fragile daily
  streak. Shown on home; rewards and badges for it are planned.
- **Badges:** a few, for meaningful milestones - first full timed exam, a section mastered,
  finishing an exam without leaving early, coming back after a break. *(planned)*

## 6. Monetization

- Freemium: free tier has ads, premium removes them. **[decided]**
- Ads only at natural breaks (end of a lesson), **never** inside a lesson or exam. **[decided]**
- **Progress is saved before any ad.** An ad never holds progress hostage. **[decided]**
- Formats: an interstitial at a break (skippable, not after every lesson), and opt-in
  rewarded ads (e.g. unlock a full explanation). Under-18 audience: non-personalized ads. *(planned)*

## 7. Home

- **One screen on a phone, no scrolling.** **[decided]**
- **The two things that matter, exams and lesson progress, each have one job per place**
  (phone space is tight, nothing is shown twice): **[decided]**
  - *Tile* = status only: lessons done (`5/43` + bar) and best exam score, both always.
  - *Continue bar* = the resume action.
  - *Panel* = only what the bar doesn't already offer (an action the bar links to is left out).
- **Each Bagrut module is an exam:** modules sit side by side as tiles. **[decided]**
- **Continue bar** above the tiles: one tap back into the latest thing done in any module
  (an exam left mid-way, words still due, else that module's lesson). Hidden for a new
  student. **[decided]**
- Tapping a tile opens its panel below (one at a time). The panel has at most **one big
  card**: the exam when it's advised (see section 3), otherwise the module's lesson;
  everything else is a row. **[decided]**
- Ads, when they come: bottom of home only.

## Evidence

| Finding | Source | Strength |
|---|---|---|
| Practice testing and distributed practice are the two highest-utility study techniques; rereading and highlighting are low. | Dunlosky et al. (2013), *Psychological Science in the Public Interest* 14(1) | Strong: large review, many contexts |
| Task-contingent rewards undermine intrinsic motivation (d ≈ -0.28 to -0.40); informational positive feedback doesn't. | Deci, Koestner & Ryan (1999), *Psychological Bulletin*, 128 experiments | Strong |
| Gamification has a small-to-medium effect on learning (g ≈ 0.46). | Huang et al. (2020) meta-analysis, 30 studies | Moderate |
| In gamified programming courses, the gain (d ≈ 0.4) came mainly from levels; badges, points, avatars and leaderboards showed no significant effect. | Multi-level meta-analysis, ISCTE repository (hdl.handle.net/10071/29213) | Moderate, one domain |
| Framing stress as helpful before an exam lowered anxiety and raised scores. | Jamieson et al., University of Rochester (2021-2022) | Promising: small samples |
