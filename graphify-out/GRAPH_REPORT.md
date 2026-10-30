# Graph Report - ..  (2026-10-30)

## Corpus Check
- 486 files · ~505,281 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2385 nodes · 4766 edges · 180 communities (133 shown, 47 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bd4061ed`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- rubrics/index.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- index.svelte.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- billing.ts
- graphify reference: query, path, explain
- Md.svelte
- motion.ts
- editModel.svelte.ts
- Speak.svelte
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- progress.ts
- WritingTask.svelte
- lib/kanban.ts
- הפלט
- plans.ts
- deck/index.ts
- (site)/+page.svelte
- profile.svelte.ts
- LessonScreen
- option.ts
- miniMarkdown.ts
- RemindersStore
- writingLint.ts
- [id]/+server.ts
- screenChecks.ts
- scripts
- Workflow
- apiFetch
- snapshot-content.ts
- llmGuard.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- @lucide/svelte
- ExamEditWorkspace.svelte
- lessonProgress.svelte.ts
- package.json
- cobe.test.ts
- data.ts
- settings/+page.svelte
- gradeExam.ts
- progressMerge.ts
- COBE (oral exam)
- SlideStage.svelte
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- מודול C
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- QuizRunner.svelte
- create-coupon.mjs
- measure-overflow.mjs
- AccountSection.svelte
- Unit
- feedback/types.ts
- content
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- Module C audit
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- db/schema.ts
- await-expressions.md
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- quizzes.ts
- module-f-import.py
- attach.md
- ExamEditModel
- Handoff: verify Vercel AI Gateway
- .mcp.json
- QuizReport.svelte
- Platform: web, mobile, accounts
- reviewNotes.svelte.ts
- auth.svelte.ts
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- mechanics.ts
- validate.ts
- language.ts
- checks/index.ts
- content-i18n.mjs
- EditHistory
- Mcq.svelte
- Submit → feedback framework
- Module D
- Handoff: About page, after launch
- answers.svelte.ts
- svelte/transition
- MarkdownInput.svelte
- Module E plan
- hydratable.md
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- inspect.md
- vercel.json
- access.svelte.ts
- ProgressSync
- speech.ts
- MatchDefinitions.svelte
- takeHistory.ts
- Handoff: `/mcp` endpoint (removed)
- screenTypeNames.ts
- ReviewNotesStore
- eslint-plugin-svelte
- הקול והסגנון
- progressSync.svelte.ts
- Recorder
- render.md
- svelte
- support.ts
- legacyIds.ts
- @types/web-push
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- scan.ts
- @tailwindcss/vite
- @tailwindcss/forms
- DebugStore
- @sveltejs/kit
- acceptedAnswers.ts
- Module F
- UX principles
- globals
- Module G
- brand.md
- auth/README.md
- prettier
- svelte-check
- @sveltejs/vite-plugin-svelte
- app/+layout.ts
- @types/nspell
- typescript-eslint
- prettier-plugin-tailwindcss
- UI review
- vite
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonNode` - 35 edges
4. `LessonScreen` - 33 edges
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 27 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `QuizNode` - 17 edges

## Surprising Connections (you probably didn't know these)
- `deckSets()` --indirect_call--> `w()`  [INFERRED]
  scripts/module-e-import.ts → src/lib/content/e/word.ts
- `deckSets()` --indirect_call--> `printed()`  [INFERRED]
  scripts/module-e-import.ts → src/lib/deck/session.ts
- `isBigNode()` --calls--> `countQuestions()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `deckSets()` --calls--> `clashes()`  [EXTRACTED]
  scripts/module-e-import.ts → src/lib/deck/session.ts
- `deckSets()` --calls--> `wordClass()`  [EXTRACTED]
  scripts/module-e-import.ts → src/lib/deck/session.ts

## Import Cycles
- None detected.

## Communities (180 total, 47 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "rubrics/index.ts"
Cohesion: 0.10
Nodes (22): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+14 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "index.svelte.ts"
Cohesion: 0.09
Nodes (10): pieces, dictionaries, groups, phrase(), delta, firstSeconds, newlyReached, words (+2 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "billing.ts"
Cohesion: 0.12
Nodes (22): Plan, accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+14 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "Md.svelte"
Cohesion: 0.17
Nodes (3): stripLineAttrs(), gutter, lines

### Community 20 - "motion.ts"
Cohesion: 0.13
Nodes (3): reducedMotion, formattedDate, item()

### Community 21 - "editModel.svelte.ts"
Cohesion: 0.18
Nodes (5): LessonBucket, Bucket, onMove(), onUp(), LessonContent

### Community 22 - "Speak.svelte"
Cohesion: 0.17
Nodes (7): KEY, ScreenMode, primaryAction(), record(), stop(), toggle(), takeKey()

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.09
Nodes (28): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+20 more)

### Community 35 - "progress.ts"
Cohesion: 0.10
Nodes (38): ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, attemptKey() (+30 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.12
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (34): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+26 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.05
Nodes (82): buildExam(), clean(), deckSets(), explanationOnly(), Json, keywords(), main(), Paper (+74 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.13
Nodes (6): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonScreen

### Community 44 - "option.ts"
Cohesion: 0.17
Nodes (8): i(), issuesByNode(), optFeedback(), Option, optText(), withFeedback(), oi(), i()

### Community 45 - "miniMarkdown.ts"
Cohesion: 0.15
Nodes (14): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+6 more)

### Community 46 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "[id]/+server.ts"
Cohesion: 0.31
Nodes (11): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+3 more)

### Community 49 - "screenChecks.ts"
Cohesion: 0.24
Nodes (10): MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+2 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "apiFetch"
Cohesion: 0.32
Nodes (7): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback()

### Community 53 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (41): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+33 more)

### Community 57 - "@lucide/svelte"
Cohesion: 0.13
Nodes (3): trailing(), WORD_IMAGE, status()

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 59 - "lessonProgress.svelte.ts"
Cohesion: 0.27
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 62 - "data.ts"
Cohesion: 0.13
Nodes (31): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+23 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.12
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 64 - "gradeExam.ts"
Cohesion: 0.17
Nodes (23): browserDictionaries(), checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked (+15 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 66 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 67 - "SlideStage.svelte"
Cohesion: 0.18
Nodes (6): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS, OpenerLevel

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (44): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+36 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, SingleRequest, ask(), block() (+19 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "QuizRunner.svelte"
Cohesion: 0.12
Nodes (7): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, scoredAnswers(), submit()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 78 - "Unit"
Cohesion: 0.33
Nodes (6): build(), d(), No em/en dashes in study text., rtl(), split_bi(), Unit

### Community 79 - "feedback/types.ts"
Cohesion: 0.12
Nodes (23): postGrade(), Layer1, Layer1Options, Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal() (+15 more)

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.05
Nodes (36): exit(), applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES (+28 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (30): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+22 more)

### Community 85 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, drizzle-kit, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb (+15 more)

### Community 90 - "db/schema.ts"
Cohesion: 0.12
Nodes (23): db, llmUsage, progress, pushSubscriptions, waitlist, isPushEndpoint(), PUSH_HOSTS, pushEnabled (+15 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

### Community 94 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 95 - "module-f-import.py"
Cohesion: 0.47
Nodes (7): d(), notes(), No em/en dashes in study text., rtl(), screen(), story_nodes(), writing()

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: verify Vercel AI Gateway"
Cohesion: 0.40
Nodes (4): Before checking, Check (signed in, on the production site; then ask Claude to read the logs), Handoff: verify Vercel AI Gateway, Still open from before

### Community 100 - "QuizReport.svelte"
Cohesion: 0.17
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, RecorderState (+1 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 103 - "auth.svelte.ts"
Cohesion: 0.07
Nodes (8): auth, EditStore, full, ignite, supabase, ThemeMode, ThemeStore, showNav

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 109 - "validate.ts"
Cohesion: 0.43
Nodes (6): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 110 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 111 - "checks/index.ts"
Cohesion: 0.12
Nodes (25): bytes(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+17 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "Mcq.svelte"
Cohesion: 0.10
Nodes (13): KEY, mistakes, shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW, order (+5 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "Module D"
Cohesion: 0.40
Nodes (4): Mapping (package -> screens), Module D, Open, Sections

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 119 - "svelte/transition"
Cohesion: 0.09
Nodes (11): dayPart, d(), row, rules, taken, tips, ./$types, next (+3 more)

### Community 120 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 121 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams, Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "access.svelte.ts"
Cohesion: 0.21
Nodes (8): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, submit()

### Community 129 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "MatchDefinitions.svelte"
Cohesion: 0.10
Nodes (12): active, checked, focus(), primaryAction(), pick(), primaryAction(), primaryAction(), KEY (+4 more)

### Community 132 - "takeHistory.ts"
Cohesion: 0.36
Nodes (7): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), TakeStats

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 138 - "progressSync.svelte.ts"
Cohesion: 0.13
Nodes (14): activity, load(), WEEKLY_GOAL, Engagement, lastEngagement, LastEngagementStore, load(), load() (+6 more)

### Community 143 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (48): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+40 more)

### Community 148 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 154 - "Module F"
Cohesion: 0.40
Nodes (4): Mapping, Module F, Open, Sections

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 159 - "Module G"
Cohesion: 0.33
Nodes (5): Authoring rules, Exams, Module G, Open, Sections

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **779 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+774 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `access.svelte.ts`, `ProgressSync`, `content-edit/api.ts`, `reviewNotes.svelte.ts`, `ReviewNotesStore`, `progressSync.svelte.ts`, `AccountSection.svelte`, `RemindersStore`, `feedback/types.ts`, `RulesPanel.svelte`, `scan.ts`, `settings/+page.svelte`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `content/index.ts`, `LessonScreen`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `saveSynced()` connect `progressSync.svelte.ts` to `ProgressSync`, `progress.ts`, `takeHistory.ts`, `deck/index.ts`, `profile.svelte.ts`, `ActivityStore`, `apiFetch`, `moduleLocation.svelte.ts`, `lessonProgress.svelte.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _779 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `rubrics/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10461538461538461 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08233117483811286 - nodes in this community are weakly interconnected._