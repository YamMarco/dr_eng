# Graph Report - cobe  (2026-10-16)

## Corpus Check
- 333 files · ~631,429 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2009 nodes · 3565 edges · 189 communities (137 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6ecca50e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- mcp.ts
- EditModel
- feedback/types.ts
- LessonRunner.svelte
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- SvelteKit head/body Placeholders
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- Keyed Each Blocks
- prettier.config.js
- app.d.ts
- Favicon (Svelte Logo)
- graphify reference: query, path, explain
- settled() API
- Context API (createContext)
- CSS Custom Properties via style:
- Styling Child Components (:global)
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- .claude/CLAUDE.md
- extraction-spec.md
- progress.ts
- feedback.test.ts
- lesson-screens/types.ts
- WritingTask.svelte
- MarkAll.svelte
- הפלט
- Module C: what's good, what's bad, and what to do
- @lucide/svelte
- QuizRunner.svelte
- goalOptions.ts
- content/index.ts
- Module C audit
- 6. For reference: scores and decisions
- feedback/speaking.ts
- writingMoves.ts
- Module E plan
- registry.ts
- [quizId]/+page.svelte
- curriculum.ts
- GraphEditor.svelte
- SpellWord.svelte
- data.ts
- dictionaries.ts
- MatchDefinitions.svelte
- examEditModel.svelte.ts
- TitleEdits
- answers.svelte.ts
- context.ts
- AccountSection.svelte
- LessonScreen
- server/speaking.ts
- Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)
- scoring.ts
- moduleLocation.svelte.ts
- Open
- content-edit/+server.ts
- server/grade.ts
- מודול C - המודול היחיד עם תוכן
- acceptedAnswers.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)
- Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)
- ExerciseKindBadge.svelte
- SlideStage.svelte
- module-c-report-v3_b3755107.md
- COBE (oral exam)
- svelte/transition
- index.svelte.ts
- auth.svelte.ts
- בקשת מסך - `<שם-המסך>`
- §11. Implementation status
- validate.ts
- §12. GPT post-fix review — now including writing
- lesson-screens/schema.ts
- התחל כאן
- §13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes
- deck/index.ts
- §14. GPT, round 7: response to Claude's post-fix review
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- checks/index.ts
- [moduleId]/+page.svelte
- gradeExam.ts
- ExamEditModel
- RulesPanel.svelte
- §15. Claude, round 7: response to GPT's section 14
- §7. Plan
- Platform: web, mobile, accounts
- 11. Implementation status
- @eslint/js
- §9. Reviewers' views
- agents.md
- Rules
- 12. GPT post-fix review — now including writing
- writingLint.ts
- 13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes
- Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)
- rulesStore.svelte.ts
- content-i18n.mjs
- globals
- finishNodeAndContinue
- Submit → feedback framework
- §4. Teacher's view
- Mcq.svelte
- §6. Node-by-node grades
- QuizReport.svelte
- mode.svelte.ts
- eslint
- book/+page.svelte
- scripts
- 14. GPT, round 7: response to Claude's post-fix review
- platform.ts
- 15. Claude, round 7: response to GPT's section 14
- 7. Plan
- Part 2: History (the past)
- 9. Reviewers' views
- Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)
- ReviewNotesStore
- apiFetch
- 6. Node-by-node grades
- localize.svelte.ts
- LoginScreen.svelte
- reviewNotes.svelte.ts
- prettier
- quizzes.ts
- Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)
- svelte
- lessonIcon.ts
- Module C: what's good, what's bad, and what to do
- sectionThemes.ts
- score.svelte.ts
- nextRoundIndex
- lessons/+page.svelte
- @tailwindcss/typography
- @tailwindcss/vite
- @types/node
- @sveltejs/kit
- @types/nspell
- typescript
- llm-gateway
- typescript-eslint
- UX principles
- db/index.ts
- dictionary-en
- EditWorkspace.svelte
- drizzle-kit
- readRepoFile
- ExamEditWorkspace.svelte
- eslint-config-prettier
- mcp/+server.ts
- Module C: what's good, what's bad, and what to do
- dictionary-en-gb
- app/+layout.ts
- lessonPath.ts
- capacitor.config.ts
- content-edit/api.ts
- EditHistory
- prettier-plugin-svelte
- prettier-plugin-tailwindcss
- UI review
- @sveltejs/adapter-auto
- @sveltejs/adapter-static
- tailwindcss
- @tailwindcss/forms
- vite
- vite-env.d.ts
- @sveltejs/vite-plugin-svelte

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 49 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `Part 2: History (the past)` - 26 edges
6. `6. For reference: scores and decisions` - 24 edges
7. `LessonNode` - 21 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `applyBelow()` --calls--> `ownKeys()`  [EXTRACTED]
  front/src/lib/content-edit/RulesPanel.svelte → front/src/lib/feedback/rules.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (189 total, 52 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): @capacitor/cli, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint-plugin-svelte, svelte-check, svelte-check

### Community 1 - "Svelte MCP Server (Project Config)"
Cohesion: 0.14
Nodes (20): get-documentation Tool, list-sections Tool, playground-link Tool, Project Configuration (TS, npm, prettier, eslint, tailwindcss, ai-tools), svelte-autofixer Tool, Svelte MCP Server (Project Config), get-documentation Tool, list-sections Tool (+12 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "mcp.ts"
Cohesion: 0.48
Nodes (6): screenSchemas, checkScreen(), buildServer(), editingGuide(), linkedPaths(), validationReport()

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (3): clone(), EditModel, LessonNode

### Community 5 - "feedback/types.ts"
Cohesion: 0.11
Nodes (19): postGrade(), Layer1, Layer1Options, pieces, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet (+11 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "SvelteKit head/body Placeholders"
Cohesion: 0.67
Nodes (3): RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.09
Nodes (19): AI editing - rule book for screen editors, Always read, Bottom line, Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model (+11 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "progress.ts"
Cohesion: 0.17
Nodes (23): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+15 more)

### Community 34 - "feedback.test.ts"
Cohesion: 0.43
Nodes (4): FATAL_TAGS, TAG_IDS, TagDef, TAGS

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (24): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+16 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 37 - "MarkAll.svelte"
Cohesion: 0.24
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 41 - "QuizRunner.svelte"
Cohesion: 0.14
Nodes (12): i(), footerLabel, hiddenIndices, partBreaks, passageIndices, QuizAnswerSlot, quizHasPassage, remainingSeconds (+4 more)

### Community 42 - "goalOptions.ts"
Cohesion: 0.15
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 43 - "content/index.ts"
Cohesion: 0.19
Nodes (10): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, all, allLessons, LessonRound (+2 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "6. For reference: scores and decisions"
Cohesion: 0.15
Nodes (13): §10. Change record, §1. Verdict, §2. The real exam, §3. Scorecard by dimension, §5. Student's view, 6. For reference: scores and decisions, §8. Open questions for you, Earlier wording (superseded) (+5 more)

### Community 46 - "feedback/speaking.ts"
Cohesion: 0.18
Nodes (13): toWavBase64(), CobeBand, CobeCriterion, CobeRubric, Rubric, RubricCriterion, CobeLevel, CobePart (+5 more)

### Community 47 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "registry.ts"
Cohesion: 0.15
Nodes (3): screenComponents, KEY, LessonSession

### Community 50 - "[quizId]/+page.svelte"
Cohesion: 0.11
Nodes (9): reducedMotion, row, rules, taken, ./$types, due, known, { reviews, fresh } (+1 more)

### Community 51 - "curriculum.ts"
Cohesion: 0.13
Nodes (14): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+6 more)

### Community 52 - "GraphEditor.svelte"
Cohesion: 0.09
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 53 - "SpellWord.svelte"
Cohesion: 0.27
Nodes (5): RATE, RULES, speak(), speechSupported(), speechText()

### Community 55 - "data.ts"
Cohesion: 0.12
Nodes (27): getLesson(), getLessonsBySection(), moduleSections(), ContinueItem, EXAM_READY, examAdvice, isWritingLesson(), latestEngagement() (+19 more)

### Community 56 - "dictionaries.ts"
Cohesion: 0.50
Nodes (4): browserDictionaries(), bytes(), DictData, DictLoader

### Community 57 - "MatchDefinitions.svelte"
Cohesion: 0.17
Nodes (8): active, checked, primaryAction(), pick(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 58 - "examEditModel.svelte.ts"
Cohesion: 0.35
Nodes (7): cQuizzes, cobeQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 60 - "answers.svelte.ts"
Cohesion: 0.20
Nodes (5): FILLER, isSentenceCompletionMatch(), normalize(), KEY, QuizAnswerSlot

### Community 62 - "AccountSection.svelte"
Cohesion: 0.12
Nodes (8): emails, confirming, deleteAccount(), deleting, failed, t, ThemeMode, ThemeStore

### Community 63 - "LessonScreen"
Cohesion: 0.14
Nodes (5): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen

### Community 64 - "server/speaking.ts"
Cohesion: 0.16
Nodes (18): SpeakingVerdict, rateLimited(), chat(), endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole (+10 more)

### Community 65 - "Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)"
Cohesion: 0.22
Nodes (9): 1. Verdict today, 2. Module C compared with the real exam, 3. What works (keep it), 4. Open issues, most harmful first, 5. Fixed so far, 6. Work order (agreed by both reviewers), 7. Decisions, 8. Where the reviewers stand (+1 more)

### Community 66 - "scoring.ts"
Cohesion: 0.29
Nodes (9): isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize(), Scored, scoreQuiz(), scoreScreen(), IdentifiedScreen (+1 more)

### Community 67 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (10): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, LocationMap, moduleLocation (+2 more)

### Community 68 - "Open"
Cohesion: 0.20
Nodes (9): Critical, Decisions, Deferred to the accessibility pass, Fixed on 2026-10-06 (branch ux-fixes, merged), High, History, Medium, Open (+1 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.10
Nodes (34): APP_ORIGINS, cors(), handle(), checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById() (+26 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.14
Nodes (24): essayRubric, CONTENT_TAGS, SingleRequest, ask(), block(), calls, cleanMarks(), gradeEssay() (+16 more)

### Community 71 - "מודול C - המודול היחיד עם תוכן"
Cohesion: 0.29
Nodes (6): המודולים, חלק א׳ - הבנת הנקרא, חלק ב׳ - אוצר מילים, חלק ג׳ - כתיבה, מה כבר קיים באפליקציה, מודול C - המודול היחיד עם תוכן

### Community 72 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)

### Community 75 - "Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)

### Community 76 - "ExerciseKindBadge.svelte"
Cohesion: 0.19
Nodes (4): stripLineAttrs(), leading(), lines, text()

### Community 77 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (9): LessonBucket, Bucket, onMove(), onUp(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, TYPE_HE, LessonContent (+1 more)

### Community 78 - "module-c-report-v3_b3755107.md"
Cohesion: 0.33
Nodes (5): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 2.3

### Community 79 - "COBE (oral exam)"
Cohesion: 0.20
Nodes (9): COBE (oral exam), Grading a recording, Mock exam (quiz/cobe), Open, Part B - Project (cobe-1), Part C - Clip (cobe-2), Progress and AI feedback, Sources (+1 more)

### Community 80 - "svelte/transition"
Cohesion: 0.13
Nodes (17): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, RecorderState (+9 more)

### Community 81 - "index.svelte.ts"
Cohesion: 0.21
Nodes (6): dictionaries, ar, Dictionary, DictionaryOverride, he, titlesAr

### Community 82 - "auth.svelte.ts"
Cohesion: 0.36
Nodes (3): auth, EditStore, supabase

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "§11. Implementation status"
Cohesion: 0.40
Nodes (5): §11. Implementation status, Known side effects, Owner decisions made during implementation, Plan steps, Resume here (P6 rollout)

### Community 85 - "validate.ts"
Cohesion: 0.11
Nodes (24): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+16 more)

### Community 86 - "§12. GPT post-fix review — now including writing"
Cohesion: 0.40
Nodes (5): §12. GPT post-fix review — now including writing, Current verdict (editorial estimates, not measured outcomes), Findings that keep the grade down (highest priority first), Two voices and the next decision, What genuinely improved

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.07
Nodes (29): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+21 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "§13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes"
Cohesion: 0.40
Nodes (5): 13.1 GPT's section 12 findings, checked against the source, 13.2 Findings GPT missed, 13.3 My grades (editorial, like GPT's; not measured), 13.4 Where I agree and disagree with GPT's next steps, §13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes

### Community 90 - "deck/index.ts"
Cohesion: 0.07
Nodes (44): activity, ActivityStore, dayKey(), WEEKLY_GOAL, eGlossAr, eWords, w(), deckProgress (+36 more)

### Community 91 - "§14. GPT, round 7: response to Claude's post-fix review"
Cohesion: 0.40
Nodes (5): §14. GPT, round 7: response to Claude's post-fix review, Corrections I accept, One correction to Claude's evidence, Shared next step, with the disagreement resolved, Where I remain firm

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "checks/index.ts"
Cohesion: 0.07
Nodes (38): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+30 more)

### Community 95 - "[moduleId]/+page.svelte"
Cohesion: 0.19
Nodes (10): SKILLS, continueFrom(), homeMeters, moduleSkills(), deckStats(), deckToday(), getDeck(), if() (+2 more)

### Community 96 - "gradeExam.ts"
Cohesion: 0.15
Nodes (26): checkWriting(), applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed(), gradeEssay() (+18 more)

### Community 98 - "RulesPanel.svelte"
Cohesion: 0.12
Nodes (18): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+10 more)

### Community 99 - "§15. Claude, round 7: response to GPT's section 14"
Cohesion: 0.40
Nodes (5): §15. Claude, round 7: response to GPT's section 14, Agreed work order (both reviewers), Checks, What I concede, Where we now stand

### Community 100 - "§7. Plan"
Cohesion: 0.40
Nodes (5): §7. Plan, Phase 1: trust fixes (about 1 day), Phase 2: item rigor (about half a day), Phase 3: validity (about 2 days), Phase 4: efficiency and verification

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.25
Nodes (7): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, `/mcp` endpoint (screen editing for outside editors), Platform: web, mobile, accounts, Routes, Turning it on

### Community 102 - "11. Implementation status"
Cohesion: 0.40
Nodes (5): §11. Implementation status, Known side effects, Owner decisions made during implementation, Plan steps, Resume here (P6 rollout)

### Community 104 - "§9. Reviewers' views"
Cohesion: 0.40
Nodes (5): §9. Reviewers' views, Claude, Claude, round 2, GPT, GPT, round 2

### Community 105 - "agents.md"
Cohesion: 0.33
Nodes (5): graphify, mission, persona, skills, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "12. GPT post-fix review — now including writing"
Cohesion: 0.40
Nodes (5): §12. GPT post-fix review — now including writing, Current verdict (editorial estimates, not measured outcomes), Findings that keep the grade down (highest priority first), Two voices and the next decision, What genuinely improved

### Community 108 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 109 - "13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes"
Cohesion: 0.40
Nodes (5): 13.1 GPT's section 12 findings, checked against the source, 13.2 Findings GPT missed, 13.3 My grades (editorial, like GPT's; not measured), 13.4 Where I agree and disagree with GPT's next steps, §13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes

### Community 110 - "Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)

### Community 111 - "rulesStore.svelte.ts"
Cohesion: 0.24
Nodes (4): RulesStore, clearBelow(), ownKeys(), Rules

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "finishNodeAndContinue"
Cohesion: 0.31
Nodes (10): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "§4. Teacher's view"
Cohesion: 0.67
Nodes (3): §4. Teacher's view, Keep, Problems

### Community 117 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 118 - "§6. Node-by-node grades"
Cohesion: 0.67
Nodes (3): §6. Node-by-node grades, Part A: vocabulary, Part B: reading

### Community 119 - "QuizReport.svelte"
Cohesion: 0.25
Nodes (6): anyFailed, hasSpeaking, headline, level, numbers, pending

### Community 120 - "mode.svelte.ts"
Cohesion: 0.20
Nodes (5): mistakes, shuffleNotIdentity(), KEY, ScreenMode, shuffle()

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (37): @capacitor/core, drizzle-orm, dependencies, @capacitor/core, drizzle-orm, @lucide/svelte, @modelcontextprotocol/server, nspell (+29 more)

### Community 124 - "14. GPT, round 7: response to Claude's post-fix review"
Cohesion: 0.40
Nodes (5): §14. GPT, round 7: response to Claude's post-fix review, Corrections I accept, One correction to Claude's evidence, Shared next step, with the disagreement resolved, Where I remain firm

### Community 126 - "15. Claude, round 7: response to GPT's section 14"
Cohesion: 0.40
Nodes (5): §15. Claude, round 7: response to GPT's section 14, Agreed work order (both reviewers), Checks, What I concede, Where we now stand

### Community 127 - "7. Plan"
Cohesion: 0.40
Nodes (5): §7. Plan, Phase 1: trust fixes (about 1 day), Phase 2: item rigor (about half a day), Phase 3: validity (about 2 days), Phase 4: efficiency and verification

### Community 128 - "Part 2: History (the past)"
Cohesion: 0.12
Nodes (16): §10. Change record, §1. Verdict, §2. The real exam, §3. Scorecard by dimension, §4. Teacher's view, §5. Student's view, §8. Open questions for you, Earlier wording (superseded) (+8 more)

### Community 129 - "9. Reviewers' views"
Cohesion: 0.40
Nodes (5): §9. Reviewers' views, Claude, Claude, round 2, GPT, GPT, round 2

### Community 130 - "Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)"
Cohesion: 0.22
Nodes (9): 1. Verdict today, 2. Module C compared with the real exam, 3. What works (keep it), 4. Open issues, most harmful first, 5. Fixed so far, 6. Work order (agreed by both reviewers), 7. Decisions, 8. Where the reviewers stand (+1 more)

### Community 132 - "apiFetch"
Cohesion: 0.36
Nodes (6): apiFetch(), fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 133 - "6. Node-by-node grades"
Cohesion: 0.67
Nodes (3): §6. Node-by-node grades, Part A: vocabulary, Part B: reading

### Community 135 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 136 - "LoginScreen.svelte"
Cohesion: 0.29
Nodes (3): activeIndex, path, submit()

### Community 137 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 139 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 140 - "Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)

### Community 142 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 143 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (8): §16. Version 3, Part 1 as it was (snapshot, replaced on 2026-10-13), 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 2.3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 146 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.11
Nodes (16): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, delayForY(), edgeDelay(), edges (+8 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.13
Nodes (9): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues (+1 more)

### Community 161 - "readRepoFile"
Cohesion: 0.57
Nodes (6): branch(), isReadable(), owner(), READABLE, readRepoFile(), repo()

### Community 163 - "ExamEditWorkspace.svelte"
Cohesion: 0.13
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 165 - "mcp/+server.ts"
Cohesion: 0.33
Nodes (4): mcpHandler, DELETE, GET, POST

### Community 167 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (8): §17. Version 4, Part 1 as it was (snapshot, replaced on 2026-10-13), 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 173 - "lessonPath.ts"
Cohesion: 0.14
Nodes (10): progressScope(), DebugStore, isLessonGold(), roundsCompleted(), lessonProgress, LessonProgressStore, load(), persist() (+2 more)

### Community 177 - "content-edit/api.ts"
Cohesion: 0.21
Nodes (10): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), uploadImage(), save() (+2 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **762 isolated node(s):** `config`, `gitignorePath`, `name`, `private`, `version` (+757 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEditModel` connect `ExamEditModel` to `examEditModel.svelte.ts`, `SlideStage.svelte`, `LessonScreen`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `scoring.ts`, `lesson-screens/types.ts`, `EditModel`, `deck/index.ts`, `content/index.ts`, `SlideStage.svelte`, `registry.ts`, `validate.ts`, `examEditModel.svelte.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `SlideStage.svelte`, `LessonScreen`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `config`, `gitignorePath`, `name` to the rest of the system?**
  _762 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08826945412311266 - nodes in this community are weakly interconnected._