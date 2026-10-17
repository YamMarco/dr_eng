# Graph Report - dr_eng  (2026-10-17)

## Corpus Check
- 359 files · ~268,842 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1887 nodes · 3433 edges · 156 communities (107 shown, 49 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 80 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ae81109b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- screenChecks.ts
- EditModel
- feedback/types.ts
- scoring.ts
- What You Must Do When Invoked
- auth.svelte.ts
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
- registry.ts
- extraction-spec.md
- progress.ts
- feedback/speaking.ts
- lesson-screens/types.ts
- WritingTask.svelte
- SelfCheck.svelte
- הפלט
- SlideStage.svelte
- index.svelte.ts
- LessonRunner.svelte
- profile.svelte.ts
- content/index.ts
- Module C audit
- curriculum.ts
- server/speaking.ts
- quizzes.ts
- Module E plan
- checkout
- [quizId]/+page.svelte
- phraseBank.svelte.ts
- GraphEditor.svelte
- SpellWord.svelte
- RulesStore
- data.ts
- answers.svelte.ts
- score.svelte.ts
- examEditModel.svelte.ts
- TitleEdits
- MarkAll.svelte
- QuizRunner.svelte
- settings/+page.svelte
- LessonScreen
- EditHistory
- length.ts
- plans.ts
- moduleLocation.svelte.ts
- mechanics.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- acceptedAnswers.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- ActivityStore
- create-coupon.mjs
- measure-overflow.mjs
- validate.ts
- writingMoves.ts
- COBE (oral exam)
- Speak.svelte
- checkout/+page.ts
- access.svelte.ts
- בקשת מסך - `<שם-המסך>`
- DebugStore
- snapshot-content.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- dictionary-en
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- checks/index.ts
- gradeExam.ts
- ExamEditModel
- RulesPanel.svelte
- Platform: web, mobile, accounts
- @eslint/js
- AGENTS.md
- Rules
- writingLint.ts
- content-i18n.mjs
- globals
- Submit → feedback framework
- Mcq.svelte
- mode.svelte.ts
- eslint
- scripts
- platform.ts
- ReviewNotesStore
- apiFetch
- prettier
- svelte
- stats.ts
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
- billing.ts
- EditWorkspace.svelte
- drizzle-kit
- mcp.ts
- ExamEditWorkspace.svelte
- eslint-config-prettier
- mcp/+server.ts
- dictionary-en-gb
- app/+layout.ts
- lessonProgress.svelte.ts
- capacitor.config.ts
- content-edit/api.ts
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
5. `LessonNode` - 21 edges
6. `EditModelLike` - 20 edges
7. `apiFetch()` - 19 edges
8. `Rules` - 18 edges
9. `scripts` - 16 edges
10. `QuizNode` - 15 edges

## Surprising Connections (you probably didn't know these)
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `leading()` --indirect_call--> `text()`  [INFERRED]
  front/src/lib/lesson-screens/PassageMark.svelte → front/src/lib/server/mcp.ts

## Import Cycles
- None detected.

## Communities (156 total, 49 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): @capacitor/cli, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint-plugin-svelte, svelte-check, svelte-check

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "screenChecks.ts"
Cohesion: 0.22
Nodes (11): MarkAllSegment, markAllSegments(), lessonScreenSchema, duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+3 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, screenList(), LessonNode

### Community 5 - "feedback/types.ts"
Cohesion: 0.13
Nodes (24): gradeLesson(), Layer1, Layer1Options, runLayer1(), applyFixes(), Fix, FIX_TAGS, locateMarks() (+16 more)

### Community 6 - "scoring.ts"
Cohesion: 0.36
Nodes (7): isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, submit(), normalize(), Scored, scoreQuiz(), scoreScreen()

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "auth.svelte.ts"
Cohesion: 0.08
Nodes (9): auth, AuthStore, confirming, deleteAccount(), deleting, failed, t, EditStore (+1 more)

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
Nodes (20): AI editing - rule book for screen editors, Always read, Bottom line, Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model (+12 more)

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

### Community 31 - "registry.ts"
Cohesion: 0.12
Nodes (4): oi(), screenComponents, KEY, LessonSession

### Community 33 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 34 - "feedback/speaking.ts"
Cohesion: 0.11
Nodes (20): toWavBase64(), PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric (+12 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (24): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+16 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 37 - "SelfCheck.svelte"
Cohesion: 0.24
Nodes (5): stripLineAttrs(), leading(), gutter, lines, text()

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (5): onMove(), onUp(), TYPE_HE, LessonContent, WORD_IMAGE

### Community 40 - "index.svelte.ts"
Cohesion: 0.09
Nodes (9): pieces, dictionaries, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe (+1 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 43 - "content/index.ts"
Cohesion: 0.17
Nodes (12): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, all, allLessons, moduleSections() (+4 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "curriculum.ts"
Cohesion: 0.14
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 46 - "server/speaking.ts"
Cohesion: 0.18
Nodes (16): chat(), endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, band, block() (+8 more)

### Community 47 - "quizzes.ts"
Cohesion: 0.20
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+2 more)

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "checkout"
Cohesion: 0.21
Nodes (10): BillingError, checkout(), normalizeCode(), quote, PaymentRequest, PaymentStart, startPayment(), checkoutBody() (+2 more)

### Community 50 - "[quizId]/+page.svelte"
Cohesion: 0.11
Nodes (6): reducedMotion, formattedDate, row, rules, taken, tips

### Community 52 - "GraphEditor.svelte"
Cohesion: 0.08
Nodes (16): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+8 more)

### Community 53 - "SpellWord.svelte"
Cohesion: 0.18
Nodes (5): RATE, RULES, speak(), speechSupported(), speechText()

### Community 54 - "RulesStore"
Cohesion: 0.23
Nodes (3): RulesStore, KEY, Rules

### Community 55 - "data.ts"
Cohesion: 0.11
Nodes (31): getLesson(), getLessonsBySection(), progressScope(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+23 more)

### Community 56 - "answers.svelte.ts"
Cohesion: 0.20
Nodes (5): FILLER, isSentenceCompletionMatch(), normalize(), KEY, QuizAnswerSlot

### Community 57 - "score.svelte.ts"
Cohesion: 0.12
Nodes (9): active, checked, primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer(), primaryAction() (+1 more)

### Community 58 - "examEditModel.svelte.ts"
Cohesion: 0.24
Nodes (8): cQuizzes, cobeQuizzes, getQuizNodesByModule(), IdentifiedScreen, QuizKind, QuizNode, QuizOptions, QuizPart

### Community 60 - "MarkAll.svelte"
Cohesion: 0.38
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 61 - "QuizRunner.svelte"
Cohesion: 0.14
Nodes (8): slot(), i(), anyFailed, hasSpeaking, headline, level, numbers, pending

### Community 62 - "settings/+page.svelte"
Cohesion: 0.12
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, ThemeMode, ThemeStore

### Community 63 - "LessonScreen"
Cohesion: 0.11
Nodes (8): LessonBucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonScreen, applyGrades()

### Community 65 - "length.ts"
Cohesion: 0.32
Nodes (11): countValidWords(), DEDUCTIONS, isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+3 more)

### Community 66 - "plans.ts"
Cohesion: 0.25
Nodes (6): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, resolve()

### Community 67 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (10): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, LocationMap, moduleLocation (+2 more)

### Community 68 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.10
Nodes (36): app(), APP_ORIGINS, cors(), handle, handleError, checkAuth(), emit(), extractArrayLiteral() (+28 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (28): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest, ReadingVerdict (+20 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "validate.ts"
Cohesion: 0.38
Nodes (5): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 78 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 79 - "COBE (oral exam)"
Cohesion: 0.20
Nodes (9): COBE (oral exam), Grading a recording, Mock exam (quiz/cobe), Open, Part B - Project (cobe-1), Part C - Clip (cobe-2), Progress and AI feedback, Sources (+1 more)

### Community 80 - "Speak.svelte"
Cohesion: 0.10
Nodes (18): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Recorder (+10 more)

### Community 82 - "access.svelte.ts"
Cohesion: 0.13
Nodes (11): emails, access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote (+3 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 85 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.07
Nodes (29): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+21 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.07
Nodes (47): eGlossAr, eWords, w(), deckProgress, DeckProgressStore, persist(), ProgressMap, decks (+39 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "checks/index.ts"
Cohesion: 0.14
Nodes (21): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+13 more)

### Community 96 - "gradeExam.ts"
Cohesion: 0.15
Nodes (22): browserDictionaries(), bytes(), DictData, applyLength(), mechanicsCount(), postGrade(), check(), Checked (+14 more)

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): Bucket, clone(), ExamEditModel

### Community 98 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.18
Nodes (10): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), `/mcp` endpoint (screen editing for outside editors), Plans, checkout, access, Platform: web, mobile, accounts, Routes (+2 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 120 - "mode.svelte.ts"
Cohesion: 0.18
Nodes (6): mistakes, pick(), shuffleNotIdentity(), KEY, ScreenMode, shuffle()

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (39): @capacitor/core, drizzle-orm, dependencies, @capacitor/core, drizzle-orm, @lucide/svelte, @modelcontextprotocol/server, nspell (+31 more)

### Community 125 - "platform.ts"
Cohesion: 0.16
Nodes (5): handleError, full, ignite, MOBILE_BUILD, prerender

### Community 132 - "apiFetch"
Cohesion: 0.27
Nodes (7): apiFetch(), uploadImage(), fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 145 - "stats.ts"
Cohesion: 0.27
Nodes (8): moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (47): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+39 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.15
Nodes (19): accessUntil(), addMonths(), billingEnabled, CheckoutResult, completeOrder(), Coupon, CouponProblem, Db (+11 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.17
Nodes (8): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues

### Community 161 - "mcp.ts"
Cohesion: 0.31
Nodes (12): screenSchemas, checkScreen(), buildServer(), editingGuide(), linkedPaths(), validationReport(), branch(), isReadable() (+4 more)

### Community 163 - "ExamEditWorkspace.svelte"
Cohesion: 0.16
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 165 - "mcp/+server.ts"
Cohesion: 0.33
Nodes (4): mcpHandler, DELETE, GET, POST

### Community 173 - "lessonProgress.svelte.ts"
Cohesion: 0.21
Nodes (8): activity, WEEKLY_GOAL, lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 177 - "content-edit/api.ts"
Cohesion: 0.50
Nodes (7): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), save()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **626 isolated node(s):** `mission`, `content`, `persona`, `stack`, `graphify` (+621 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `screenChecks.ts`, `EditModel`, `deck/index.ts`, `lesson-screens/types.ts`, `SlideStage.svelte`, `scoring.ts`, `content/index.ts`, `validate.ts`, `snapshot-content.ts`, `examEditModel.svelte.ts`, `registry.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditModel`, `RulesPanel.svelte`, `LessonScreen`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `EditModelLike` connect `LessonScreen` to `ExamEditModel`, `examEditModel.svelte.ts`, `EditModel`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `mission`, `content`, `persona` to the rest of the system?**
  _626 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08140610545790934 - nodes in this community are weakly interconnected._
- **Should `feedback/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12903225806451613 - nodes in this community are weakly interconnected._