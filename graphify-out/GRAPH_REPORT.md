# Graph Report - dr_eng  (2026-10-14)

## Corpus Check
- 313 files · ~594,095 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1819 nodes · 3145 edges · 169 communities (115 shown, 54 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16fe8aa9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- mcp.ts
- EditModel
- feedback/grade.ts
- index.svelte.ts
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
- feedback/rules.ts
- lesson-screens/types.ts
- WritingTask.svelte
- SlideStage.svelte
- הפלט
- Module C: what's good, what's bad, and what to do
- registry.ts
- QuizRunner.svelte
- goalOptions.ts
- content/index.ts
- Module C audit
- scoring.ts
- mcp/+server.ts
- writingMoves.ts
- Module E plan
- RulesStore
- motion.ts
- data.ts
- GraphEditor.svelte
- SpellWord.svelte
- fillFromScan
- AccountSection.svelte
- MatchDefinitions.svelte
- examEditModel.svelte.ts
- TitleEdits
- score.svelte.ts
- localize.svelte.ts
- mode.svelte.ts
- LessonScreen
- llm.ts
- ActivityStore
- validate.ts
- MarkAll.svelte
- Open
- content-edit/+server.ts
- server/grade.ts
- מודול C - המודול היחיד עם תוכן
- acceptedAnswers.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- ProfileStore
- curriculum.ts
- auth.svelte.ts
- בקשת מסך - `<שם-המסך>`
- screenChecks.ts
- lesson-screens/schema.ts
- התחל כאן
- deck/index.ts
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- checks/index.ts
- streak/+page.svelte
- gradeExam.ts
- ExamEditModel
- RulesPanel.svelte
- Platform: web, mobile, accounts
- 11. Implementation status
- @eslint/js
- he.ts
- agents.md
- Rules
- 12. GPT post-fix review — now including writing
- writingLint.ts
- 13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes
- Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)
- snapshot-content.ts
- content-i18n.mjs
- globals
- Submit → feedback framework
- Mcq.svelte
- moduleLocation.svelte.ts
- eslint
- feedback/types.ts
- scripts
- 14. GPT, round 7: response to Claude's post-fix review
- 15. Claude, round 7: response to GPT's section 14
- 7. Plan
- Part 2: History (the past)
- 9. Reviewers' views
- Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)
- ReviewNotesStore
- apiFetch
- 6. Node-by-node grades
- platform.ts
- prettier
- stats.ts
- Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)
- svelte
- lessonProgress.svelte.ts
- Module C: what's good, what's bad, and what to do
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
- ExamEditWorkspace.svelte
- eslint-config-prettier
- Module C: what's good, what's bad, and what to do
- dictionary-en-gb
- [quizId]/+page.svelte
- app/+layout.ts
- DebugStore
- capacitor.config.ts
- content-edit/api.ts
- EditHistory
- answers.svelte.ts
- prettier-plugin-svelte
- prettier-plugin-tailwindcss
- UI review
- @sveltejs/adapter-auto
- @sveltejs/adapter-static
- tailwindcss
- @tailwindcss/forms
- debug.svelte.ts
- vite
- vite-env.d.ts
- SelfCheck.svelte
- @sveltejs/vite-plugin-svelte

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 48 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `Part 2: History (the past)` - 26 edges
6. `EditModelLike` - 20 edges
7. `Rules` - 18 edges
8. `scripts` - 16 edges
9. `LessonNode` - 15 edges
10. `apiFetch()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `leading()` --indirect_call--> `text()`  [INFERRED]
  front/src/lib/lesson-screens/PassageMark.svelte → front/src/lib/server/mcp.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `get-documentation Tool` --semantically_similar_to--> `get-documentation Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `list-sections Tool` --semantically_similar_to--> `list-sections Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md

## Import Cycles
- None detected.

## Communities (169 total, 54 thin omitted)

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
Cohesion: 0.31
Nodes (12): screenSchemas, checkScreen(), buildServer(), editingGuide(), linkedPaths(), validationReport(), branch(), isReadable() (+4 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), SECTION_IDS, LessonNode

### Community 5 - "feedback/grade.ts"
Cohesion: 0.21
Nodes (11): browserDictionaries(), bytes(), postGrade(), Layer1, Layer1Options, runLayer1(), RuleSet, Feedback (+3 more)

### Community 6 - "index.svelte.ts"
Cohesion: 0.15
Nodes (3): dictionaries, words, previous

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
Cohesion: 0.26
Nodes (17): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+9 more)

### Community 34 - "feedback/rules.ts"
Cohesion: 0.18
Nodes (13): gradeLesson(), applyFixes(), Corrected, Fix, locateMarks(), mergeMarks(), toOriginal(), clearBelow() (+5 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (22): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+14 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 37 - "SlideStage.svelte"
Cohesion: 0.11
Nodes (7): LessonBucket, Bucket, onMove(), onUp(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, TYPE_HE

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 40 - "registry.ts"
Cohesion: 0.15
Nodes (4): oi(), screenComponents, KEY, LessonSession

### Community 41 - "QuizRunner.svelte"
Cohesion: 0.14
Nodes (12): i(), footerLabel, hiddenIndices, partBreaks, passageIndices, QuizAnswerSlot, quizHasPassage, remainingSeconds (+4 more)

### Community 42 - "goalOptions.ts"
Cohesion: 0.18
Nodes (10): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+2 more)

### Community 43 - "content/index.ts"
Cohesion: 0.27
Nodes (6): c1Lessons, c2Lessons, c3Lessons, all, allLessons, moduleSections()

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "scoring.ts"
Cohesion: 0.18
Nodes (12): isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, anyFailed, headline, numbers, submit(), applyGrades(), normalize() (+4 more)

### Community 46 - "mcp/+server.ts"
Cohesion: 0.33
Nodes (4): mcpHandler, DELETE, GET, POST

### Community 47 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 50 - "motion.ts"
Cohesion: 0.17
Nodes (3): slot(), reducedMotion, formattedDate

### Community 51 - "data.ts"
Cohesion: 0.13
Nodes (28): getLesson(), getLessonsBySection(), continueFrom(), ContinueItem, EXAM_READY, examAdvice, isWritingLesson(), latestEngagement() (+20 more)

### Community 52 - "GraphEditor.svelte"
Cohesion: 0.09
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 53 - "SpellWord.svelte"
Cohesion: 0.16
Nodes (6): WORD_IMAGE, RATE, RULES, speak(), speechSupported(), speechText()

### Community 56 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, confirming, deleteAccount(), deleting, failed, t

### Community 57 - "MatchDefinitions.svelte"
Cohesion: 0.17
Nodes (8): active, checked, primaryAction(), pick(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 58 - "examEditModel.svelte.ts"
Cohesion: 0.40
Nodes (6): cQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 61 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 62 - "mode.svelte.ts"
Cohesion: 0.24
Nodes (5): KEY, ScreenMode, FILLER, isSentenceCompletionMatch(), normalize()

### Community 63 - "LessonScreen"
Cohesion: 0.11
Nodes (9): EditModelLike, ScreenPath, blankScreen(), LessonContent, LessonRound, Skill, SKILLS, LessonScreen (+1 more)

### Community 64 - "llm.ts"
Cohesion: 0.36
Nodes (7): chat(), endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, POST()

### Community 66 - "validate.ts"
Cohesion: 0.43
Nodes (5): bucketLabel(), Issue, screenIssues(), validateSection(), countQuestions()

### Community 67 - "MarkAll.svelte"
Cohesion: 0.38
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 68 - "Open"
Cohesion: 0.20
Nodes (9): Critical, Decisions, Deferred to the accessibility pass, Fixed on 2026-10-06 (branch ux-fixes, merged), High, History, Medium, Open (+1 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.11
Nodes (33): APP_ORIGINS, cors(), handle(), checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById() (+25 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (28): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ReadingRequest, ask(), block() (+20 more)

### Community 71 - "מודול C - המודול היחיד עם תוכן"
Cohesion: 0.29
Nodes (6): המודולים, חלק א׳ - הבנת הנקרא, חלק ב׳ - אוצר מילים, חלק ג׳ - כתיבה, מה כבר קיים באפליקציה, מודול C - המודול היחיד עם תוכן

### Community 72 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 80 - "curriculum.ts"
Cohesion: 0.10
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 82 - "auth.svelte.ts"
Cohesion: 0.23
Nodes (5): auth, activeIndex, path, EditStore, supabase

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 85 - "screenChecks.ts"
Cohesion: 0.19
Nodes (11): validateExam(), MarkAllSegment, markAllSegments(), lessonScreenSchema, duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.07
Nodes (27): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+19 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.07
Nodes (51): eGlossAr, eWords, w(), homeMeters, moduleSkills(), deckProgress, DeckProgressStore, persist() (+43 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "checks/index.ts"
Cohesion: 0.08
Nodes (39): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+31 more)

### Community 96 - "gradeExam.ts"
Cohesion: 0.24
Nodes (16): checkWriting(), applyLength(), mechanicsCount(), check(), Checked, failed(), gradeEssay(), gradeExam() (+8 more)

### Community 98 - "RulesPanel.svelte"
Cohesion: 0.10
Nodes (21): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+13 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.25
Nodes (7): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, `/mcp` endpoint (screen editing for outside editors), Platform: web, mobile, accounts, Routes, Turning it on

### Community 102 - "11. Implementation status"
Cohesion: 0.40
Nodes (5): §11. Implementation status, Known side effects, Owner decisions made during implementation, Plan steps, Resume here (P6 rollout)

### Community 104 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

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
Cohesion: 0.31
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 109 - "13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes"
Cohesion: 0.40
Nodes (5): 13.1 GPT's section 12 findings, checked against the source, 13.2 Findings GPT missed, 13.3 My grades (editorial, like GPT's; not measured), 13.4 Where I agree and disagree with GPT's next steps, §13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes

### Community 110 - "Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)

### Community 111 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 119 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (10): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, LocationMap, moduleLocation (+2 more)

### Community 122 - "feedback/types.ts"
Cohesion: 0.17
Nodes (10): essayRubric, Rubric, RubricCriterion, pieces, EssayVerdict, ExamGrade, MechanicsCount, ReadingItem (+2 more)

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
Cohesion: 0.24
Nodes (7): apiFetch(), BLANK, ReviewNote, reviewNotes, previewUrl(), scanHandwriting(), toJpeg()

### Community 133 - "6. Node-by-node grades"
Cohesion: 0.67
Nodes (3): §6. Node-by-node grades, Part A: vocabulary, Part B: reading

### Community 139 - "stats.ts"
Cohesion: 0.13
Nodes (16): allQuizNodes, avg(), examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz (+8 more)

### Community 140 - "Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)

### Community 142 - "lessonProgress.svelte.ts"
Cohesion: 0.20
Nodes (9): activity, WEEKLY_GOAL, progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap (+1 more)

### Community 143 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (8): §16. Version 3, Part 1 as it was (snapshot, replaced on 2026-10-13), 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 2.3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (38): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+30 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.17
Nodes (8): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues

### Community 163 - "ExamEditWorkspace.svelte"
Cohesion: 0.16
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 167 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (8): §17. Version 4, Part 1 as it was (snapshot, replaced on 2026-10-13), 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 171 - "[quizId]/+page.svelte"
Cohesion: 0.22
Nodes (3): row, rules, taken

### Community 177 - "content-edit/api.ts"
Cohesion: 0.36
Nodes (9): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), uploadImage(), save() (+1 more)

### Community 186 - "answers.svelte.ts"
Cohesion: 0.17
Nodes (5): mistakes, shuffleNotIdentity(), shuffle(), KEY, QuizAnswerSlot

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 200 - "SelfCheck.svelte"
Cohesion: 0.28
Nodes (4): stripLineAttrs(), leading(), lines, text()

## Knowledge Gaps
- **672 isolated node(s):** `Rules (Layer 1 settings)`, `Gates (no API call, outright wrong)`, `One attempt`, `Layer 2`, `Exams` (+667 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `validate.ts`, `lesson-screens/types.ts`, `EditModel`, `SlideStage.svelte`, `deck/index.ts`, `registry.ts`, `scoring.ts`, `snapshot-content.ts`, `screenChecks.ts`, `examEditModel.svelte.ts`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `SlideStage.svelte`, `LessonScreen`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `ExamEditModel` connect `ExamEditModel` to `examEditModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `Rules (Layer 1 settings)`, `Gates (no API call, outright wrong)`, `One attempt` to the rest of the system?**
  _672 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0797872340425532 - nodes in this community are weakly interconnected._