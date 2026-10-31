# Graph Report - dr_eng  (2026-10-31)

## Corpus Check
- 475 files · ~453,466 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2301 nodes · 4569 edges · 180 communities (131 shown, 49 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 115 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `78cc0a7f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lesson-screens/types.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- QuizReport.svelte
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- billing.ts
- apiFetch
- screenChecks.ts
- QuizRunner.svelte
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- svelte/transition
- WritingTask.svelte
- lib/kanban.ts
- rulesStore.svelte.ts
- plans.ts
- deck/index.ts
- lessonProgress.svelte.ts
- profile.svelte.ts
- LessonScreen
- feedback/types.ts
- 1. Reading comprehension (grade-reading)
- gradeExam.ts
- writingLint.ts
- index.svelte.ts
- SlideStage.svelte
- scripts
- Workflow
- Mcq.svelte
- recordAnswer
- access.svelte.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- data.ts
- stats.ts
- settings/+page.svelte
- checks/index.ts
- markAllColors.ts
- scoring.ts
- progressMerge.ts
- ActivityStore
- progress.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- AppBar.svelte
- quiz/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- moduleSkills
- create-coupon.mjs
- measure-overflow.mjs
- language.ts
- server/kanban.ts
- validate.ts
- content
- checkout/+page.ts
- planById
- Material
- speech.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- editModel.svelte.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- db/schema.ts
- activeField.svelte.ts
- DebugStore
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- deckProgress.svelte.ts
- @eslint/js
- AGENTS.md
- Rules
- llmGuard.ts
- server/speaking.ts
- localize.svelte.ts
- cron/reminders/+server.ts
- ReviewNotesStore
- content-i18n.mjs
- EditHistory
- lastEngagement.svelte.ts
- Submit → feedback framework
- RemindersStore
- MatchPairs.svelte
- api/reminders/+server.ts
- I18n
- motion.ts
- Recorder
- hydratable.md
- dependencies
- quote/+server.ts
- inspect.md
- vercel.json
- content/rules.ts
- AccountSection.svelte
- phraseBank.svelte.ts
- @sveltejs/adapter-auto
- saveSynced
- EditWorkspace.svelte
- @sveltejs/kit
- MarkdownInput.svelte
- reviewNotes.svelte.ts
- examStats
- dictionary-en-gb
- withCobe
- render.md
- svelte
- eslint-config-prettier
- prettier-plugin-svelte
- @types/web-push
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- @tailwindcss/vite
- tailwindcss
- context.ts
- e-1.ts
- acceptedAnswers.ts
- @tailwindcss/typography
- typescript
- UX principles
- InstallStore
- package.json
- screenshot.ts
- ThemeStore
- fillFromScan
- brand.md
- auth/README.md
- app/+layout.ts
- UI review
- vite
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonNode` - 35 edges
4. `LessonScreen` - 32 edges
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 27 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `QuizNode` - 17 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (180 total, 49 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (35): KEY, ScreenMode, screenComponents, KEY, LessonScore, KEY, LessonSession, ClozePickScreen (+27 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.18
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "QuizReport.svelte"
Cohesion: 0.22
Nodes (7): anyFailed, closed, hasSpeaking, headline, level, numbers, pending

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (15): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+7 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "billing.ts"
Cohesion: 0.14
Nodes (18): Plan, access, accessEnd(), accessUntil(), billingEnabled, checkout(), CheckoutResult, completeOrder() (+10 more)

### Community 20 - "apiFetch"
Cohesion: 0.24
Nodes (10): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), previewUrl() (+2 more)

### Community 21 - "screenChecks.ts"
Cohesion: 0.18
Nodes (14): MarkAllSegment, markAllSegments(), optText(), withFeedback(), oi(), checkScreen(), duplicates(), outOfRange() (+6 more)

### Community 22 - "QuizRunner.svelte"
Cohesion: 0.11
Nodes (7): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, scoredAnswers(), submit()

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
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.10
Nodes (24): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+16 more)

### Community 35 - "svelte/transition"
Cohesion: 0.09
Nodes (12): emails, i(), screenContext, supabase, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP (+4 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.11
Nodes (16): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+8 more)

### Community 38 - "rulesStore.svelte.ts"
Cohesion: 0.21
Nodes (5): RuleLevel, RulesStore, RulesFile, clearBelow(), Rules

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, Cycle, CYCLE_MONTHS, CYCLES, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE, INSTALLMENTS (+11 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.07
Nodes (53): listA, listB, listC, listD, w(), eGlossAr, activeDecks(), Deck (+45 more)

### Community 41 - "lessonProgress.svelte.ts"
Cohesion: 0.17
Nodes (12): progressScope(), LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), lessonProgress, LessonProgressStore (+4 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (6): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen, QuizPart

### Community 44 - "feedback/types.ts"
Cohesion: 0.11
Nodes (19): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+11 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "gradeExam.ts"
Cohesion: 0.11
Nodes (37): browserDictionaries(), checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check() (+29 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "index.svelte.ts"
Cohesion: 0.09
Nodes (8): dictionaries, delta, firstSeconds, newlyReached, words, RecorderState, Take, previous

### Community 49 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (4): i(), TYPE_HE, issuesByNode(), optFeedback()

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "Mcq.svelte"
Cohesion: 0.13
Nodes (10): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+2 more)

### Community 53 - "recordAnswer"
Cohesion: 0.40
Nodes (6): primaryAction(), pick(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 54 - "access.svelte.ts"
Cohesion: 0.16
Nodes (10): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+2 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.09
Nodes (34): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+26 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 59 - "data.ts"
Cohesion: 0.18
Nodes (21): getLesson(), getLessonsBySection(), moduleSections(), ContinueItem, EXAM_READY, isWritingLesson(), latestEngagement(), lessonsInOrder() (+13 more)

### Community 60 - "stats.ts"
Cohesion: 0.13
Nodes (16): allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz, assortedQuizzes (+8 more)

### Community 61 - "settings/+page.svelte"
Cohesion: 0.06
Nodes (10): full, ignite, install, InstallPromptEvent, Platform, MOBILE_BUILD, reminders, ReminderStatus (+2 more)

### Community 62 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): bytes(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+16 more)

### Community 63 - "markAllColors.ts"
Cohesion: 0.40
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 64 - "scoring.ts"
Cohesion: 0.19
Nodes (15): primaryAction(), FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES (+7 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 67 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.07
Nodes (50): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+42 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.10
Nodes (31): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest, ReadingRequest (+23 more)

### Community 71 - "AppBar.svelte"
Cohesion: 0.10
Nodes (7): trailing(), status(), formattedDate, row, rules, taken, tips

### Community 72 - "quiz/index.ts"
Cohesion: 0.31
Nodes (7): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, QuizKind, QuizNode, QuizOptions

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "moduleSkills"
Cohesion: 0.29
Nodes (7): SKILLS, continueFrom(), homeMeters, moduleSkills(), moduleDeckToday(), nextMilestone(), if()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "language.ts"
Cohesion: 0.17
Nodes (16): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+8 more)

### Community 78 - "server/kanban.ts"
Cohesion: 0.29
Nodes (11): TAGS_MAX, kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, DELETE(), PATCH() (+3 more)

### Community 79 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 82 - "planById"
Cohesion: 0.22
Nodes (12): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), Pricing (+4 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "editModel.svelte.ts"
Cohesion: 0.19
Nodes (5): LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "db/schema.ts"
Cohesion: 0.26
Nodes (8): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, body

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.06
Nodes (48): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+40 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.10
Nodes (3): clone(), ExamEditModel, getQuizNodesByModule()

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 103 - "deckProgress.svelte.ts"
Cohesion: 0.18
Nodes (9): activity, load(), WEEKLY_GOAL, deckProgress, DeckProgressStore, load(), persist(), ProgressMap (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "llmGuard.ts"
Cohesion: 0.27
Nodes (10): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Product (+2 more)

### Community 108 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 109 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 110 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 117 - "MatchPairs.svelte"
Cohesion: 0.22
Nodes (6): mistakes, row(), shuffleNotIdentity(), groups, phrase(), shuffle()

### Community 118 - "api/reminders/+server.ts"
Cohesion: 0.29
Nodes (9): jsonBody(), POST(), DELETE(), endpoint, key, POST(), ready(), subscribeBody (+1 more)

### Community 119 - "I18n"
Cohesion: 0.22
Nodes (3): dayPart, I18n, ./$types

### Community 120 - "motion.ts"
Cohesion: 0.09
Nodes (8): active, checked, d(), focus(), reducedMotion, homeMedia, Media, item()

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "content/rules.ts"
Cohesion: 0.39
Nodes (5): ownerModule(), ruleChain(), sectionMeta, SectionMeta, load()

### Community 129 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 132 - "saveSynced"
Cohesion: 0.21
Nodes (13): primaryAction(), record(), stop(), toggle(), saveSynced(), Entry, openDb(), readStats() (+5 more)

### Community 135 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 136 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 137 - "examStats"
Cohesion: 0.50
Nodes (5): examAdvice, lessonStats(), moduleHook, avg(), examStats

### Community 139 - "withCobe"
Cohesion: 0.40
Nodes (5): planId(), withCobe(), loadQuote(), setCobe(), #each()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (40): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+32 more)

### Community 152 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **733 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+728 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `scoring.ts`, `ExamEditModel`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `deck/index.ts`, `quiz/index.ts`, `validate.ts`, `SlideStage.svelte`, `screenChecks.ts`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `EditModel`, `content-edit/api.ts`, `rulesStore.svelte.ts`, `data.ts`, `validate.ts`, `e-1.ts`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `AccountSection.svelte`, `content-edit/api.ts`, `rulesStore.svelte.ts`, `progressSync.svelte.ts`, `reviewNotes.svelte.ts`, `gradeExam.ts`, `ReviewNotesStore`, `RemindersStore`, `access.svelte.ts`, `settings/+page.svelte`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _733 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.04417670682730924 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08859357696567 - nodes in this community are weakly interconnected._