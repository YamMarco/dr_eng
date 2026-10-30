# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 469 files · ~445,209 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2264 nodes · 4512 edges · 174 communities (126 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aceb8659`
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
- progress.ts
- server/supabase.ts
- validate.ts
- index.svelte.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- settings/+page.svelte
- WritingTask.svelte
- lib/kanban.ts
- rubrics/index.ts
- plans.ts
- deck/index.ts
- lessonProgress.svelte.ts
- profile.svelte.ts
- LessonScreen
- cron/reminders/+server.ts
- gradeExam.ts
- answers.svelte.ts
- writingLint.ts
- svelte/transition
- SlideStage.svelte
- scripts
- Workflow
- Md.svelte
- Mcq.svelte
- (site)/+page.svelte
- progressSync.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- data.ts
- curriculum.ts
- MatchDefinitions.svelte
- feedback/types.ts
- apiFetch
- auth.svelte.ts
- progressMerge.ts
- db/schema.ts
- billing.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- [id]/+server.ts
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- mode.svelte.ts
- create-coupon.mjs
- measure-overflow.mjs
- SelfCheck.svelte
- stats.ts
- LessonNode
- content
- checkout/+page.ts
- DebugStore
- Material
- planById
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- words/+page.svelte
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- Speak.svelte
- activeField.svelte.ts
- theme.svelte.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- markAllColors.ts
- Platform: web, mobile, accounts
- ProgressSync
- RulesStore
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- Handoff: support email (receive + send as support@engup.co.il)
- llmGuard.ts
- scoring.ts
- PassageBody.svelte
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
- feedback/rules.ts
- inspect.md
- vercel.json
- motion.ts
- edit-exam/+page.svelte
- speech.ts
- @sveltejs/adapter-auto
- takeHistory.ts
- quote/+server.ts
- @sveltejs/kit
- lastEngagement.svelte.ts
- book/+page.svelte
- access
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
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (174 total, 48 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): EditModel, screenList(), swapLevels(), versions()

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
Cohesion: 0.17
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, RecorderState (+1 more)

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
Nodes (18): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+10 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "progress.ts"
Cohesion: 0.26
Nodes (17): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+9 more)

### Community 20 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 21 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 22 - "index.svelte.ts"
Cohesion: 0.07
Nodes (7): dayPart, dictionaries, words, scoredAnswers(), submit(), screenContext, item()

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
Nodes (24): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+16 more)

### Community 35 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (10): full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders (+2 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.12
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 38 - "rubrics/index.ts"
Cohesion: 0.11
Nodes (20): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+12 more)

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, Cycle, CYCLE_MONTHS, CYCLES, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE, INSTALLMENTS (+11 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (58): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+50 more)

### Community 41 - "lessonProgress.svelte.ts"
Cohesion: 0.24
Nodes (8): activity, progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (10): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+2 more)

### Community 44 - "cron/reminders/+server.ts"
Cohesion: 0.24
Nodes (11): progress, isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET() (+3 more)

### Community 45 - "gradeExam.ts"
Cohesion: 0.14
Nodes (26): browserDictionaries(), bytes(), DictData, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked (+18 more)

### Community 46 - "answers.svelte.ts"
Cohesion: 0.20
Nodes (5): FILLER, isSentenceCompletionMatch(), normalize(), KEY, QuizAnswerSlot

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "svelte/transition"
Cohesion: 0.14
Nodes (5): emails, WEEKLY_GOAL, previous, loadQuote(), setCobe()

### Community 49 - "SlideStage.svelte"
Cohesion: 0.09
Nodes (15): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, issuesByNode(), OPENER_LEVELS (+7 more)

### Community 50 - "scripts"
Cohesion: 0.10
Nodes (19): name, private, scripts, build, build:mobile, check, check:watch, db:generate (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 53 - "Mcq.svelte"
Cohesion: 0.18
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 54 - "(site)/+page.svelte"
Cohesion: 0.16
Nodes (4): d(), focus(), homeMedia, Media

### Community 55 - "progressSync.svelte.ts"
Cohesion: 0.13
Nodes (13): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), load(), MyPhrases (+5 more)

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (45): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+37 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "data.ts"
Cohesion: 0.14
Nodes (28): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, homeMeters (+20 more)

### Community 60 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 61 - "MatchDefinitions.svelte"
Cohesion: 0.13
Nodes (9): active, checked, primaryAction(), pick(), primaryAction(), primaryAction(), KEY, LessonScore (+1 more)

### Community 62 - "feedback/types.ts"
Cohesion: 0.16
Nodes (13): postGrade(), Layer1, Layer1Options, pieces, EssayVerdict, Feedback, GateReason, GradeRequest (+5 more)

### Community 63 - "apiFetch"
Cohesion: 0.08
Nodes (21): AccessStore, apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, ReviewNotesStore, addChat() (+13 more)

### Community 64 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (13): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+5 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 66 - "db/schema.ts"
Cohesion: 0.19
Nodes (11): db, pushSubscriptions, waitlist, DELETE(), endpoint, key, POST(), ready() (+3 more)

### Community 67 - "billing.ts"
Cohesion: 0.15
Nodes (17): Plan, accessEnd(), accessUntil(), checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+9 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.12
Nodes (32): wordId(), checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead() (+24 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.14
Nodes (24): CONTENT_TAGS, ReadingRequest, SingleRequest, ask(), block(), cleanMarks(), ESSAY_PROMPTS, gradeEssay() (+16 more)

### Community 71 - "[id]/+server.ts"
Cohesion: 0.31
Nodes (11): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+3 more)

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "mode.svelte.ts"
Cohesion: 0.15
Nodes (6): mistakes, shuffleNotIdentity(), KEY, ScreenMode, shuffle(), at()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "SelfCheck.svelte"
Cohesion: 0.25
Nodes (3): stripLineAttrs(), gutter, lines

### Community 78 - "stats.ts"
Cohesion: 0.23
Nodes (10): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT (+2 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "planById"
Cohesion: 0.19
Nodes (14): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+6 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "words/+page.svelte"
Cohesion: 0.09
Nodes (10): trailing(), status(), ./$types, row, rules, taken, tips, ./$types (+2 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "Speak.svelte"
Cohesion: 0.31
Nodes (5): primaryAction(), record(), stop(), toggle(), takeKey()

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.08
Nodes (43): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+35 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 103 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "ActivityStore"
Cohesion: 0.29
Nodes (3): ActivityStore, dayKey(), load()

### Community 108 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.50
Nodes (3): After it works, Handoff: support email (receive + send as support@engup.co.il), Send as support@ (Gmail "Send mail as")

### Community 109 - "llmGuard.ts"
Cohesion: 0.29
Nodes (10): llmUsage, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+2 more)

### Community 110 - "scoring.ts"
Cohesion: 0.12
Nodes (22): labelled(), openAnswers(), MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck (+14 more)

### Community 111 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "feedback.test.ts"
Cohesion: 0.43
Nodes (4): FATAL_TAGS, TAG_IDS, TagDef, TAGS

### Community 117 - "quizzes.ts"
Cohesion: 0.14
Nodes (12): I18n, allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes (+4 more)

### Community 119 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 120 - "checks/index.ts"
Cohesion: 0.09
Nodes (39): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+31 more)

### Community 121 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "feedback/rules.ts"
Cohesion: 0.20
Nodes (5): KEY, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "motion.ts"
Cohesion: 0.14
Nodes (4): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTERS_GROUP

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 132 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 133 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 135 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 137 - "access"
Cohesion: 0.67
Nodes (3): access, billingEnabled, GET()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 151 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **713 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+708 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `settings/+page.svelte`, `content-edit/api.ts`, `ProgressSync`, `RulesStore`, `RulesPanel.svelte`, `progressSync.svelte.ts`, `AccountSection.svelte`, `feedback/types.ts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `examEditModel.svelte.ts`, `deck/index.ts`, `scoring.ts`, `SlideStage.svelte`, `validate.ts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `LessonScreen`, `LessonNode`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _713 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06349206349206349 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08974358974358974 - nodes in this community are weakly interconnected._