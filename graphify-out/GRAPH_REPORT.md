# Graph Report - dr_eng  (2026-11-02)

## Corpus Check
- 489 files · ~461,449 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2345 nodes · 4669 edges · 169 communities (124 shown, 45 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 113 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d63c3b0d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- SlideStage.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- feedback/grade.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- registry.ts
- graphify reference: query, path, explain
- apiFetch
- Mcq.svelte
- content/index.ts
- billing.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rubrics/index.ts
- extraction-spec.md
- GraphEditor.svelte
- lesson-screens/types.ts
- (site)/+page.svelte
- WritingTask.svelte
- progress.ts
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- screenChecks.ts
- LessonScreen
- profile.svelte.ts
- 1. Reading comprehension (grade-reading)
- index.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- score.svelte.ts
- scripts
- Workflow
- auth.svelte.ts
- llmGuard.ts
- content-edit/api.ts
- QuizRunner.svelte
- editModel.svelte.ts
- DeckProgressStore
- MatchDefinitions.svelte
- data.ts
- deck/index.ts
- Speak.svelte
- speech.ts
- feedback/types.ts
- settings/+page.svelte
- deckProgress.svelte.ts
- merge.ts
- examEditModel.svelte.ts
- snippet.md
- lastEngagement.svelte.ts
- server/grade.ts
- NavBar.svelte
- QuizReport.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- scoring.ts
- create-coupon.mjs
- measure-overflow.mjs
- focusTrap.ts
- examStats
- saveSynced
- content
- checkout/+page.ts
- planById
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- writingMoves.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- progressMerge.ts
- activeField.svelte.ts
- stats.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- screenshot.ts
- payments.ts
- @eslint/js
- AGENTS.md
- Rules
- EditHistory
- checkout
- PassageText.svelte
- progressSync.svelte.ts
- content-i18n.mjs
- fillFromScan
- edit-exam/+page.svelte
- Submit → feedback framework
- TitleEdits
- phraseBank.svelte.ts
- Recorder
- checks/index.ts
- validate.ts
- feedback.test.ts
- hydratable.md
- dependencies
- inspect.md
- vercel.json
- RulesStore
- RulesPanel.svelte
- submitToLlm
- @sveltejs/adapter-auto
- @sveltejs/kit
- dictionary-en-gb
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
- DebugStore
- @tailwindcss/typography
- typescript
- UX principles
- AccountSection.svelte
- package.json
- AppBar.svelte
- brand.md
- acceptedAnswers.ts
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
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (169 total, 45 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.05
Nodes (56): ExamRef, PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey (+48 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (10): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS (+2 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "feedback/grade.ts"
Cohesion: 0.17
Nodes (15): isLimit(), browserDictionaries(), bytes(), DictData, gradeLesson(), Layer1, Layer1Options, runLayer1() (+7 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "registry.ts"
Cohesion: 0.16
Nodes (3): screenComponents, KEY, LessonSession

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "apiFetch"
Cohesion: 0.07
Nodes (22): AccessStore, ApiError, apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, ReviewNotesStore (+14 more)

### Community 20 - "Mcq.svelte"
Cohesion: 0.14
Nodes (6): Option, optText(), withFeedback(), oi(), i(), item()

### Community 21 - "content/index.ts"
Cohesion: 0.10
Nodes (27): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+19 more)

### Community 22 - "billing.ts"
Cohesion: 0.15
Nodes (15): Plan, access, accessEnd(), accessUntil(), billingEnabled, CheckoutResult, completeOrder(), Coupon (+7 more)

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
Cohesion: 0.13
Nodes (17): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+9 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+19 more)

### Community 35 - "(site)/+page.svelte"
Cohesion: 0.11
Nodes (5): focus(), reducedMotion, homeMedia, Media, d

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "progress.ts"
Cohesion: 0.29
Nodes (16): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+8 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.26
Nodes (15): writingRubricId, check(), Checked, failed(), gradeEssay(), gradeExam(), gradeReadingGroup(), labelled() (+7 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+14 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "screenChecks.ts"
Cohesion: 0.21
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (6): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonRound, LessonScreen

### Community 44 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "index.svelte.ts"
Cohesion: 0.10
Nodes (6): dayPart, dictionaries, ./$types, ./$types, next, seen

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "score.svelte.ts"
Cohesion: 0.09
Nodes (14): primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity(), primaryAction(), KEY (+6 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "auth.svelte.ts"
Cohesion: 0.09
Nodes (18): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+10 more)

### Community 53 - "llmGuard.ts"
Cohesion: 0.05
Nodes (60): cobeVisible(), BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds() (+52 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 55 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (9): scoredAnswers(), submit(), screenContext, lockedUntil, lockedWhen, row, rules, taken (+1 more)

### Community 56 - "editModel.svelte.ts"
Cohesion: 0.18
Nodes (5): LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 58 - "MatchDefinitions.svelte"
Cohesion: 0.15
Nodes (4): active, checked, KEY, QuizAnswerSlot

### Community 59 - "data.ts"
Cohesion: 0.12
Nodes (31): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), Skill, SKILLS, continueFrom(), ContinueItem (+23 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (54): listA, listB, listC, listD, w(), eGlossAr, activeDecks(), Deck (+46 more)

### Community 61 - "Speak.svelte"
Cohesion: 0.13
Nodes (18): primaryAction(), reached, record(), seconds, share, stop(), toggle(), delta (+10 more)

### Community 62 - "speech.ts"
Cohesion: 0.15
Nodes (12): browserVoice, chatVoice, row(), groups, phrase(), hush(), RATE, RULES (+4 more)

### Community 63 - "feedback/types.ts"
Cohesion: 0.25
Nodes (6): pieces, SpeakingJudgement, EssayVerdict, ReadingItem, ReadingRequest, SingleRequest

### Community 64 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (9): EditStore, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus (+1 more)

### Community 65 - "deckProgress.svelte.ts"
Cohesion: 0.15
Nodes (9): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, deckProgress, load(), ProgressMap (+1 more)

### Community 66 - "merge.ts"
Cohesion: 0.38
Nodes (6): Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal(), LlmMark

### Community 67 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (28): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ReadingVerdict, ask(), block() (+20 more)

### Community 71 - "NavBar.svelte"
Cohesion: 0.09
Nodes (4): full, ignite, ThemeMode, ThemeStore

### Community 72 - "QuizReport.svelte"
Cohesion: 0.22
Nodes (7): anyFailed, closed, hasSpeaking, headline, level, numbers, pending

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "scoring.ts"
Cohesion: 0.22
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+5 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "focusTrap.ts"
Cohesion: 0.24
Nodes (3): open, words, previous

### Community 78 - "examStats"
Cohesion: 0.50
Nodes (5): examAdvice, lessonStats(), moduleHook, avg(), examStats

### Community 79 - "saveSynced"
Cohesion: 0.31
Nodes (6): LessonProgressStore, load(), persist(), ProgressMap, rescope(), saveSynced()

### Community 82 - "planById"
Cohesion: 0.17
Nodes (15): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+7 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.07
Nodes (51): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+43 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (34): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+26 more)

### Community 88 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.05
Nodes (50): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+42 more)

### Community 94 - "stats.ts"
Cohesion: 0.11
Nodes (17): I18n, allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz (+9 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: accessibility gaps (listed on `/accessibility`), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 103 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 109 - "PassageText.svelte"
Cohesion: 0.15
Nodes (8): stripLineAttrs(), leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 118 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 119 - "checks/index.ts"
Cohesion: 0.09
Nodes (39): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+31 more)

### Community 120 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 121 - "feedback.test.ts"
Cohesion: 0.47
Nodes (3): applyLength(), mechanicsCount(), MechanicsCount

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 129 - "RulesPanel.svelte"
Cohesion: 0.11
Nodes (22): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+14 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 157 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 160 - "AppBar.svelte"
Cohesion: 0.13
Nodes (3): trailing(), status(), formattedDate

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **747 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+742 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **45 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `RulesStore`, `RulesPanel.svelte`, `settings/+page.svelte`, `feedback/grade.ts`, `progressSync.svelte.ts`, `auth.svelte.ts`, `content-edit/api.ts`, `AccountSection.svelte`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `LessonScreen`, `editModel.svelte.ts`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `RulesStore`, `RulesPanel.svelte`, `EditModel`, `content-edit/api.ts`, `editModel.svelte.ts`, `data.ts`, `validate.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _747 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05311871227364185 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08585858585858586 - nodes in this community are weakly interconnected._