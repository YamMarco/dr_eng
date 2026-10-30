# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 469 files · ~445,209 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2244 nodes · 4387 edges · 176 communities (128 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `31c616dd`
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
- Speak.svelte
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- progress.ts
- ReviewNotesStore
- validate.ts
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
- install.svelte.ts
- WritingTask.svelte
- lib/kanban.ts
- rubrics/index.ts
- plans.ts
- deck/index.ts
- saveSynced
- profile.svelte.ts
- LessonScreen
- db/schema.ts
- gradeExam.ts
- mode.svelte.ts
- writingLint.ts
- Button.svelte
- SlideStage.svelte
- scripts
- Workflow
- Md.svelte
- Mcq.svelte
- MatchDefinitions.svelte
- moduleLocation.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- data.ts
- scoring.ts
- reminders.svelte.ts
- llm.ts
- apiFetch
- access.svelte.ts
- progressMerge.ts
- api/reminders/+server.ts
- billing.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- FeedbackButton.svelte
- quiz/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- server/speaking.ts
- create-coupon.mjs
- measure-overflow.mjs
- miniMarkdown.ts
- stats.ts
- LessonNode
- content
- checkout/+page.ts
- debug.svelte.ts
- Material
- length.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- index.svelte.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- chatTopics.ts
- activeField.svelte.ts
- LoginScreen.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- localize.svelte.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- finishNodeAndContinue
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- Handoff: support email (receive + send as support@engup.co.il)
- llmGuard.ts
- screenChecks.ts
- cobe.test.ts
- content-i18n.mjs
- EditHistory
- Submit → feedback framework
- feedback.test.ts
- quizzes.ts
- fillFromScan
- e-1.ts
- checks/index.ts
- AccountSection.svelte
- hydratable.md
- dependencies
- llmRoute.ts
- inspect.md
- vercel.json
- motion.ts
- speech.ts
- @sveltejs/adapter-auto
- takeHistory.ts
- mechanics.ts
- @sveltejs/kit
- nextRoundIndex
- auth.svelte.ts
- dictionary-en-gb
- Recorder
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
- legacyIds.ts
- submitToLlm
- acceptedAnswers.ts
- @tailwindcss/typography
- typescript
- UX principles
- phraseBank.svelte.ts
- package.json
- lessonIcon.ts
- sectionThemes.ts
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
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `if()` --calls--> `moduleDeckToday()`  [EXTRACTED]
  front/src/routes/app/unit/[unitId]/module/[moduleId]/+page.svelte → front/src/lib/deck/index.ts

## Import Cycles
- None detected.

## Communities (176 total, 48 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.05
Nodes (30): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+22 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "Speak.svelte"
Cohesion: 0.10
Nodes (17): row(), groups, phrase(), primaryAction(), record(), stop(), toggle(), anyFailed (+9 more)

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
Cohesion: 0.06
Nodes (38): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+30 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 20 - "ReviewNotesStore"
Cohesion: 0.25
Nodes (4): BLANK, ReviewNote, reviewNotes, ReviewNotesStore

### Community 21 - "validate.ts"
Cohesion: 0.29
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection(), countQuestions()

### Community 22 - "QuizRunner.svelte"
Cohesion: 0.12
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
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.12
Nodes (20): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+12 more)

### Community 35 - "install.svelte.ts"
Cohesion: 0.14
Nodes (6): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, prerender

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (27): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+19 more)

### Community 38 - "rubrics/index.ts"
Cohesion: 0.15
Nodes (14): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+6 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (34): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+26 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (61): listA, listB, listC, listD, w(), wordId(), eGlossAr, deckProgress (+53 more)

### Community 41 - "saveSynced"
Cohesion: 0.14
Nodes (14): activity, load(), WEEKLY_GOAL, progressScope(), LastEngagementStore, load(), lessonProgress, LessonProgressStore (+6 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (10): LessonBucket, screenList(), Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES (+2 more)

### Community 44 - "db/schema.ts"
Cohesion: 0.18
Nodes (14): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, sendPush() (+6 more)

### Community 45 - "gradeExam.ts"
Cohesion: 0.11
Nodes (37): writingRubricId, gradeLesson(), postGrade(), check(), Checked, failed(), gradeEssay(), gradeExam() (+29 more)

### Community 46 - "mode.svelte.ts"
Cohesion: 0.13
Nodes (4): KEY, ScreenMode, KEY, QuizAnswerSlot

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Button.svelte"
Cohesion: 0.16
Nodes (5): emails, words, previous, loadQuote(), setCobe()

### Community 49 - "SlideStage.svelte"
Cohesion: 0.09
Nodes (14): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, issuesByNode(), cat() (+6 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 53 - "Mcq.svelte"
Cohesion: 0.08
Nodes (19): primaryAction(), mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+11 more)

### Community 54 - "MatchDefinitions.svelte"
Cohesion: 0.13
Nodes (6): active, checked, d(), focus(), homeMedia, Media

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.19
Nodes (15): PROJECT_POINTS, chatEnds(), ChatLine, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS, MIN_TURNS (+7 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 59 - "data.ts"
Cohesion: 0.13
Nodes (30): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+22 more)

### Community 60 - "scoring.ts"
Cohesion: 0.24
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), applyGrades() (+5 more)

### Community 61 - "reminders.svelte.ts"
Cohesion: 0.25
Nodes (7): currentSubscription(), REMINDER_HOURS, reminders, RemindersStore, ReminderStatus, storedHour(), worker()

### Community 62 - "llm.ts"
Cohesion: 0.23
Nodes (11): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 63 - "apiFetch"
Cohesion: 0.20
Nodes (11): apiFetch(), toWavBase64(), uploadImage(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback() (+3 more)

### Community 64 - "access.svelte.ts"
Cohesion: 0.16
Nodes (9): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, showNav (+1 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "api/reminders/+server.ts"
Cohesion: 0.22
Nodes (12): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key (+4 more)

### Community 67 - "billing.ts"
Cohesion: 0.14
Nodes (20): Plan, accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+12 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (43): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), emit(), extractArrayLiteral() (+35 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.15
Nodes (23): CONTENT_TAGS, GradeRequest, ask(), block(), cleanMarks(), ESSAY_PROMPTS, gradeEssay(), gradeLesson() (+15 more)

### Community 71 - "FeedbackButton.svelte"
Cohesion: 0.17
Nodes (6): screenContext, captureScreen(), overlay(), SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTERS_GROUP

### Community 72 - "quiz/index.ts"
Cohesion: 0.18
Nodes (8): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, IdentifiedScreen, QuizKind, QuizOptions, QuizPart

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "server/speaking.ts"
Cohesion: 0.21
Nodes (11): CobeRubric, SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest (+3 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "miniMarkdown.ts"
Cohesion: 0.13
Nodes (17): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+9 more)

### Community 78 - "stats.ts"
Cohesion: 0.19
Nodes (9): moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule() (+1 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "length.ts"
Cohesion: 0.30
Nodes (11): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+3 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "index.svelte.ts"
Cohesion: 0.07
Nodes (11): trailing(), pieces, dayPart, dictionaries, sortTasks(), status(), row, rules (+3 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "chatTopics.ts"
Cohesion: 0.25
Nodes (6): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics(), ChatMode

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.10
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizNode

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 103 - "finishNodeAndContinue"
Cohesion: 0.31
Nodes (10): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+2 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.50
Nodes (3): After it works, Handoff: support email (receive + send as support@engup.co.il), Send as support@ (Gmail "Send mail as")

### Community 109 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 110 - "screenChecks.ts"
Cohesion: 0.16
Nodes (15): validateExam(), MarkAllSegment, markAllSegments(), optText(), withFeedback(), oi(), checkScreen(), duplicates() (+7 more)

### Community 111 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "feedback.test.ts"
Cohesion: 0.27
Nodes (7): applyLength(), mechanicsCount(), FATAL_TAGS, TAG_IDS, TagDef, TAGS, MechanicsCount

### Community 117 - "quizzes.ts"
Cohesion: 0.13
Nodes (11): I18n, allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes (+3 more)

### Community 119 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 120 - "checks/index.ts"
Cohesion: 0.12
Nodes (24): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+16 more)

### Community 121 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "llmRoute.ts"
Cohesion: 0.31
Nodes (6): llmConfigured(), Product, llmRoute(), body, POST, POST

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "motion.ts"
Cohesion: 0.11
Nodes (4): full, ignite, reducedMotion, formattedDate

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 132 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 133 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 135 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 136 - "auth.svelte.ts"
Cohesion: 0.38
Nodes (3): auth, EditStore, supabase

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.09
Nodes (16): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+8 more)

### Community 151 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 159 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **713 isolated node(s):** `Facts the texts must match`, `Documents to write`, `Where it goes in the app`, `Routes`, `Builds` (+708 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `access.svelte.ts`, `content-edit/api.ts`, `progressSync.svelte.ts`, `gradeExam.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `AccountSection.svelte`, `reminders.svelte.ts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `EditHistory` connect `EditHistory` to `LessonScreen`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `ReviewNotesStore` connect `ReviewNotesStore` to `apiFetch`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `Facts the texts must match`, `Documents to write`, `Where it goes in the app` to the rest of the system?**
  _713 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05357142857142857 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08902439024390243 - nodes in this community are weakly interconnected._