# Graph Report - check_e  (2026-11-14)

## Corpus Check
- 543 files · ~506,341 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2643 nodes · 5261 edges · 196 communities (143 shown, 53 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e3b02856`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Speak.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- localize.svelte.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- QuizRunner.svelte
- lesson-screens/types.ts
- content/index.ts
- svelte/transition
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- apiFetch
- extraction-spec.md
- GraphEditor.svelte
- ExamEditWorkspace.svelte
- scoring.ts
- WritingTask.svelte
- data.ts
- SlideStage.svelte
- plans.ts
- checkAuth
- checks/index.ts
- api/lessons/+server.ts
- editModel.svelte.ts
- content-nodes.test.ts
- db/schema.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- llmGuard.ts
- getDecks
- Workflow
- lessonProgress.svelte.ts
- hooks.server.ts
- activity.svelte.ts
- rubrics/index.ts
- planById
- zoom.ts
- EditHistory
- quizzes.ts
- deck/index.ts
- test
- speech.ts
- progress.ts
- reminders.svelte.ts
- validate.ts
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- stats.ts
- server/grade.ts
- cron/reminders/+server.ts
- EditWorkspace.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- layer1.ts
- create-coupon.mjs
- measure-overflow.mjs
- DebugStore
- devDependencies
- ActivityStore
- content
- checkout/+page.ts
- lib/finance.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- Recorder
- eslint-config-prettier
- Handoff: About page, after launch
- await-expressions.md
- accounts.spec.ts
- miniMarkdown.ts
- RulesStore
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- api/reminders/+server.ts
- ProgressSync
- progressSync.svelte.ts
- AGENTS.md
- Rules
- screenChecks.ts
- language.ts
- he.ts
- theme.svelte.ts
- passageQuiz.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- mechanics.ts
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- markAllColors.ts
- profile.svelte.ts
- index.svelte.ts
- WordImage.svelte
- hydratable.md
- scripts
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- [quizId]/+page.svelte
- personas.spec.ts
- gradeExam.ts
- @sveltejs/adapter-auto
- refund.ts
- MarkdownInput.svelte
- legacyIds.ts
- Handoff: Zoom group lessons, testing
- Handoff: exam lock trusts the client's part count
- package.json
- support.ts
- Module E QA
- render.md
- openerLevels.ts
- takeHistory.ts
- lessonIcon.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- feedback/types.ts
- quote/+server.ts
- screenshot.ts
- @types/node
- @types/nspell
- typescript-eslint
- UX principles
- api.spec.ts
- emailTypo.ts
- fillFromScan
- prettier
- brand.md
- @playwright/test
- auth/README.md
- recordAnswer
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- access
- smoke.spec.ts
- Reading lessons
- @eslint/js
- eslint
- eslint-plugin-svelte
- svelte-check
- @sveltejs/vite-plugin-svelte
- UI review
- @types/web-push
- globals
- lib/api.ts
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- examLock.ts
- sectionThemes.ts
- billing.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 42 edges
3. `LessonNode` - 36 edges
4. `LessonScreen` - 32 edges
5. `apiFetch()` - 28 edges
6. `ScreenPath` - 28 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 22 edges
9. `scripts` - 21 edges
10. `Rules` - 18 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (196 total, 53 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.12
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 4 - "EditModel"
Cohesion: 0.07
Nodes (10): clone(), EditModel, screenList(), swapLevels(), versions(), blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES (+2 more)

### Community 5 - "Speak.svelte"
Cohesion: 0.11
Nodes (16): row(), groups, phrase(), primaryAction(), reached, record(), seconds, share (+8 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

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
Cohesion: 0.13
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "QuizRunner.svelte"
Cohesion: 0.07
Nodes (16): total(), slot(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage (+8 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.03
Nodes (52): active, checked, announce(), announcement, mistakes, pick(), shuffleNotIdentity(), #each() (+44 more)

### Community 21 - "content/index.ts"
Cohesion: 0.08
Nodes (35): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+27 more)

### Community 22 - "svelte/transition"
Cohesion: 0.09
Nodes (7): emails, COBE_OPEN, supabase, showNav, ./$types, next, seen

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.26
Nodes (7): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), lessonMeta()

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "apiFetch"
Cohesion: 0.06
Nodes (26): AccessStore, ApiError, apiFetch(), toWavBase64(), uploadImage(), BLANK, ReviewNote, reviewNotes (+18 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 35 - "scoring.ts"
Cohesion: 0.09
Nodes (29): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, isAnswered() (+21 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.14
Nodes (27): loadLesson(), getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem (+19 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (4): i(), TYPE_HE, issuesByNode(), optFeedback()

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (20): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE (+12 more)

### Community 40 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.12
Nodes (27): checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+19 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.15
Nodes (23): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+15 more)

### Community 43 - "editModel.svelte.ts"
Cohesion: 0.09
Nodes (6): LessonBucket, Bucket, EditModelLike, ScreenPath, moduleSections(), LessonContent

### Community 44 - "content-nodes.test.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 45 - "db/schema.ts"
Cohesion: 0.16
Nodes (15): cronAuthorized(), db, coupons, examAttempts, israelToday, llmUsage, orders, progress (+7 more)

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "llmGuard.ts"
Cohesion: 0.05
Nodes (58): cobeVisible(), BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds() (+50 more)

### Community 50 - "getDecks"
Cohesion: 0.17
Nodes (14): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon(), nextMilestone() (+6 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "lessonProgress.svelte.ts"
Cohesion: 0.26
Nodes (7): activity, lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 53 - "hooks.server.ts"
Cohesion: 0.22
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 54 - "activity.svelte.ts"
Cohesion: 0.10
Nodes (4): WEEKLY_GOAL, EditStore, full, ignite

### Community 55 - "rubrics/index.ts"
Cohesion: 0.15
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 56 - "planById"
Cohesion: 0.22
Nodes (10): build(), COBE_ADDON, defaultPlan(), maxPayments(), planById(), planId(), Pricing, withCobe() (+2 more)

### Community 57 - "zoom.ts"
Cohesion: 0.26
Nodes (11): LessonSlot, accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register(), schedule() (+3 more)

### Community 59 - "quizzes.ts"
Cohesion: 0.14
Nodes (12): I18n, allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes (+4 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (50): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+42 more)

### Community 61 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.24
Nodes (19): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+11 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.12
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "validate.ts"
Cohesion: 0.29
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection(), countQuestions()

### Community 66 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "stats.ts"
Cohesion: 0.23
Nodes (10): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT (+2 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, MAX_TEXT, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "cron/reminders/+server.ts"
Cohesion: 0.29
Nodes (9): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay(), israelHour() (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "layer1.ts"
Cohesion: 0.29
Nodes (8): browserDictionaries(), bytes(), DictData, issuesToMarks(), Layer1, Layer1Options, runLayer1(), GateReason

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/playwright, dictionary-en, dictionary-en-gb, drizzle-kit, devDependencies, @axe-core/playwright, dictionary-en, dictionary-en-gb (+19 more)

### Community 82 - "lib/finance.ts"
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

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
Nodes (42): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, lineNumbers, markAllCategorySchema (+34 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.05
Nodes (57): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+49 more)

### Community 94 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.14
Nodes (15): getLesson(), CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+7 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.13
Nodes (14): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+6 more)

### Community 102 - "api/reminders/+server.ts"
Cohesion: 0.17
Nodes (18): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+10 more)

### Community 103 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 104 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (13): load(), Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, onSyncedChange() (+5 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "screenChecks.ts"
Cohesion: 0.22
Nodes (11): validateExam(), MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 108 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 109 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 111 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.13
Nodes (14): Accounts on (`e2e/accounts.spec.ts`, `npm run e2e:accounts`), Break-it round 3: prompt injection on the real LLM, Claude-driven look at the app (phone, new student, screenshots by hand), COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs) (+6 more)

### Community 114 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.20
Nodes (6): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states

### Community 118 - "markAllColors.ts"
Cohesion: 0.40
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 119 - "profile.svelte.ts"
Cohesion: 0.11
Nodes (14): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+6 more)

### Community 120 - "index.svelte.ts"
Cohesion: 0.07
Nodes (9): pieces, dictionaries, focus(), reducedMotion, homeMedia, Media, d, status() (+1 more)

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "[quizId]/+page.svelte"
Cohesion: 0.10
Nodes (9): open, words, previous, lockedUntil, lockedWhen, row, rules, taken (+1 more)

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "gradeExam.ts"
Cohesion: 0.17
Nodes (22): writingRubricId, applyLength(), mechanicsCount(), check(), Checked, essayGrade(), essayPart(), failed() (+14 more)

### Community 132 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 133 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 134 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 137 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 138 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 142 - "takeHistory.ts"
Cohesion: 0.14
Nodes (14): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), isRecord(), Entry (+6 more)

### Community 143 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (37): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+29 more)

### Community 149 - "feedback/types.ts"
Cohesion: 0.12
Nodes (20): isLimit(), KEY, gradeLesson(), applyFixes(), Corrected, Fix, FIX_TAGS, locateMarks() (+12 more)

### Community 150 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 168 - "recordAnswer"
Cohesion: 0.50
Nodes (5): primaryAction(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 171 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 174 - "access"
Cohesion: 0.33
Nodes (6): CYCLES, parse(), productsOf(), access, billingEnabled, GET()

### Community 177 - "Reading lessons"
Cohesion: 0.09
Nodes (22): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ⬜, 13. Answer-position pattern - ⬜, 14. Weak grading notes - ⬜, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+14 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 195 - "lib/api.ts"
Cohesion: 0.12
Nodes (15): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, deleteAccount() (+7 more)

### Community 202 - "examLock.ts"
Cohesion: 0.43
Nodes (5): ExamRef, RETAKE_WAIT_MS, assertExamOpen(), exempt(), recordExamPart()

### Community 217 - "billing.ts"
Cohesion: 0.17
Nodes (15): Plan, accessEnd(), accessUntil(), checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+7 more)

## Knowledge Gaps
- **860 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+855 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `saveSynced()` connect `progressSync.svelte.ts` to `ProgressSync`, `takeHistory.ts`, `ActivityStore`, `lessonProgress.svelte.ts`, `activity.svelte.ts`, `profile.svelte.ts`, `deck/index.ts`, `progress.ts`, `apiFetch`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `reminders.svelte.ts`, `content-edit/api.ts`, `lib/api.ts`, `ProgressSync`, `progressSync.svelte.ts`, `api/lessons/+server.ts`, `RulesPanel.svelte`, `feedback/types.ts`, `RulesStore`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `EditWorkspace.svelte`, `RulesPanel.svelte`, `editModel.svelte.ts`, `content/index.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _860 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._