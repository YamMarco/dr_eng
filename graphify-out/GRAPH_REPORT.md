# Graph Report - dr_eng  (2026-11-04)

## Corpus Check
- 510 files · ~474,216 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2435 nodes · 4861 edges · 186 communities (139 shown, 47 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 104 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0fdc34c3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 1. Reading comprehension (grade-reading)
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- llmGuard.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- db/schema.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- examEditModel.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- screenChecks.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rubrics/index.ts
- extraction-spec.md
- GraphEditor.svelte
- feedback/rules.ts
- svelte/transition
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- feedback.test.ts
- ReviewNotesStore
- saveSynced
- LessonScreen
- profile.svelte.ts
- index.svelte.ts
- feedback/types.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- validate.ts
- Workflow
- apiFetch
- scripts
- ExamEditWorkspace.svelte
- mechanics.ts
- planById
- SlideStage.svelte
- EditHistory
- llm.ts
- deck/index.ts
- (site)/+page.svelte
- speech.ts
- progress.ts
- settings/+page.svelte
- cron/reminders/+server.ts
- checkAuth
- progressMerge.ts
- snippet.md
- onSyncedChange
- server/grade.ts
- motion.ts
- server/supabase.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- [quizId]/+page.svelte
- create-coupon.mjs
- measure-overflow.mjs
- auth.svelte.ts
- server/kanban.ts
- ActivityStore
- content
- checkout/+page.ts
- localize.svelte.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- server/speaking.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- MarkAll.svelte
- miniMarkdown.ts
- Md.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- lessonPath.ts
- Recorder
- lib/finance.ts
- AGENTS.md
- Rules
- checkout
- Speak.svelte
- PassageText.svelte
- progressSync.svelte.ts
- api/reminders/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- content-edit/api.ts
- Submit → feedback framework
- fixtures.ts
- WordImage.svelte
- ProfileStore
- checks/index.ts
- scoring.ts
- moduleLocation.svelte.ts
- hydratable.md
- dependencies
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- writingMoves.ts
- package.json
- RemindersStore
- @sveltejs/adapter-auto
- refund.ts
- DebugStore
- @sveltejs/kit
- lessonIcon.ts
- Handoff: exam lock trusts the client's part count
- dictionary-en-gb
- sectionThemes.ts
- QuizAnswerSlot
- render.md
- app/+layout.svelte
- legacyIds.ts
- @types/node
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- $app/paths
- @types/nspell
- typescript-eslint
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- @playwright/test
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- acceptedAnswers.ts
- auth/README.md
- app/+layout.ts
- svelte
- scan.ts
- @eslint/js
- UI review
- stats.ts
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- MatchPairs.svelte
- billing.ts

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
10. `scripts` - 17 edges

## Surprising Connections (you probably didn't know these)
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (186 total, 47 thin omitted)

### Community 0 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.11
Nodes (16): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+8 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "llmGuard.ts"
Cohesion: 0.24
Nodes (14): cobeVisible(), llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+6 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "db/schema.ts"
Cohesion: 0.22
Nodes (10): db, coupons, examAttempts, israelToday, llmUsage, orders, progress, pushSubscriptions (+2 more)

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
Cohesion: 0.15
Nodes (16): id, inherited, lessonId, lessons, moduleId, MODULES, own, report (+8 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (30): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+22 more)

### Community 21 - "content/index.ts"
Cohesion: 0.12
Nodes (27): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+19 more)

### Community 22 - "screenChecks.ts"
Cohesion: 0.17
Nodes (14): markAllSegments(), Option, optText(), withFeedback(), oi(), checkScreen(), duplicates(), outOfRange() (+6 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "feedback/rules.ts"
Cohesion: 0.12
Nodes (11): applyBelow(), RuleLevel, RulesStore, RulesFile, KEY, clearBelow(), DEFAULT_RULES, ownKeys() (+3 more)

### Community 35 - "svelte/transition"
Cohesion: 0.10
Nodes (9): open, groups, phrase(), words, screenContext, previous, ./$types, next (+1 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.11
Nodes (30): getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters (+22 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.19
Nodes (21): isLimit(), writingRubricId, applyLength(), mechanicsCount(), check(), Checked, essayGrade(), essayPart() (+13 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+14 more)

### Community 40 - "feedback.test.ts"
Cohesion: 0.18
Nodes (14): gradeLesson(), applyFixes(), Corrected, Fix, FIX_TAGS, locateMarks(), mergeMarks(), toOriginal() (+6 more)

### Community 41 - "ReviewNotesStore"
Cohesion: 0.25
Nodes (4): BLANK, ReviewNote, reviewNotes, ReviewNotesStore

### Community 42 - "saveSynced"
Cohesion: 0.21
Nodes (11): delta, firstSeconds, newlyReached, saveSynced(), Entry, openDb(), readStats(), recordTake() (+3 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (9): LessonBucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent, LessonScreen (+1 more)

### Community 44 - "profile.svelte.ts"
Cohesion: 0.18
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 45 - "index.svelte.ts"
Cohesion: 0.08
Nodes (3): pieces, dictionaries, status()

### Community 46 - "feedback/types.ts"
Cohesion: 0.13
Nodes (18): ApiError, browserDictionaries(), bytes(), postGrade(), Layer1, Layer1Options, runLayer1(), RuleSet (+10 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 50 - "validate.ts"
Cohesion: 0.23
Nodes (9): onMove(), onUp(), bucketLabel(), Issue, issuesByNode(), screenIssues(), validateExam(), validateSection() (+1 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "apiFetch"
Cohesion: 0.18
Nodes (10): AccessStore, apiFetch(), toWavBase64(), uploadImage(), addChat(), chatCount(), ChatTurnError, sendChatTurn() (+2 more)

### Community 53 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+9 more)

### Community 54 - "ExamEditWorkspace.svelte"
Cohesion: 0.11
Nodes (13): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+5 more)

### Community 55 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 56 - "planById"
Cohesion: 0.17
Nodes (14): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+6 more)

### Community 57 - "SlideStage.svelte"
Cohesion: 0.12
Nodes (9): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, OPENER_LEVELS, OpenerLevel (+1 more)

### Community 59 - "llm.ts"
Cohesion: 0.20
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+4 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.06
Nodes (59): activity, listA, listB, listC, listD, w(), eGlossAr, deckProgress (+51 more)

### Community 61 - "(site)/+page.svelte"
Cohesion: 0.17
Nodes (4): focus(), homeMedia, Media, d

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.21
Nodes (20): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+12 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.12
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 66 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "onSyncedChange"
Cohesion: 0.18
Nodes (6): load(), LastEngagementStore, load(), load(), MyPhrases, onSyncedChange()

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, ExamRef, MAX_TEXT, assertExamOpen(), exempt(), recordExamPart(), ask(), block() (+19 more)

### Community 72 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "[quizId]/+page.svelte"
Cohesion: 0.18
Nodes (6): lockedUntil, lockedWhen, row, rules, taken, tips

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "auth.svelte.ts"
Cohesion: 0.08
Nodes (19): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN (+11 more)

### Community 78 - "server/kanban.ts"
Cohesion: 0.27
Nodes (13): TITLE_MAX, kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, jsonBody(), DELETE() (+5 more)

### Community 82 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.17
Nodes (21): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+13 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, markAllCategorySchema, markAllSchema (+30 more)

### Community 88 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): @axe-core/playwright, dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, @axe-core/playwright, dictionary-en (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "MarkAll.svelte"
Cohesion: 0.27
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.07
Nodes (50): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+42 more)

### Community 94 - "Md.svelte"
Cohesion: 0.09
Nodes (7): active, checked, KEY, ScreenMode, KEY, LessonScore, KEY

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): Bucket, clone(), ExamEditModel

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.09
Nodes (16): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+8 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "lessonPath.ts"
Cohesion: 0.24
Nodes (9): progressScope(), isLessonGold(), roundsCompleted(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap (+1 more)

### Community 103 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 104 - "lib/finance.ts"
Cohesion: 0.24
Nodes (7): Currency, Cycle, cycleLabel, Expense, monthly(), expenses, GET()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 108 - "Speak.svelte"
Cohesion: 0.23
Nodes (9): primaryAction(), reached, record(), seconds, share, stop(), toggle(), takeKey() (+1 more)

### Community 109 - "PassageText.svelte"
Cohesion: 0.15
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 111 - "api/reminders/+server.ts"
Cohesion: 0.32
Nodes (7): DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.25
Nodes (7): COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs), Where to continue (next session), Your to-do (owner)

### Community 114 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.06
Nodes (21): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+13 more)

### Community 119 - "checks/index.ts"
Cohesion: 0.10
Nodes (33): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+25 more)

### Community 120 - "scoring.ts"
Cohesion: 0.12
Nodes (20): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, anyFailed (+12 more)

### Community 121 - "moduleLocation.svelte.ts"
Cohesion: 0.21
Nodes (7): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), isRecord()

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 129 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 130 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 132 - "refund.ts"
Cohesion: 0.29
Nodes (7): cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 135 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 141 - "app/+layout.svelte"
Cohesion: 0.14
Nodes (8): i(), captureScreen(), overlay(), SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP, showNav

### Community 142 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (36): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+28 more)

### Community 149 - "$app/paths"
Cohesion: 0.07
Nodes (6): WEEKLY_GOAL, EditStore, full, ignite, ThemeMode, ThemeStore

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 174 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 191 - "stats.ts"
Cohesion: 0.11
Nodes (19): moduleHook, allQuizNodes, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT (+11 more)

### Community 210 - "MatchPairs.svelte"
Cohesion: 0.15
Nodes (13): primaryAction(), announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), primaryAction() (+5 more)

### Community 217 - "billing.ts"
Cohesion: 0.14
Nodes (16): Plan, access, accessEnd(), accessUntil(), billingEnabled, CheckoutResult, completeOrder(), Coupon (+8 more)

## Knowledge Gaps
- **781 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+776 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `feedback/rules.ts`, `RemindersStore`, `ReviewNotesStore`, `auth.svelte.ts`, `feedback/types.ts`, `scan.ts`, `progressSync.svelte.ts`, `content-edit/api.ts`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `checkAuth()` connect `checkAuth` to `server/supabase.ts`, `content-edit/+server.ts`, `lib/finance.ts`, `server/kanban.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditModel`, `data.ts`, `LessonScreen`, `RulesPanel.svelte`, `content/index.ts`, `ExamEditWorkspace.svelte`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _781 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `1. Reading comprehension (grade-reading)` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._