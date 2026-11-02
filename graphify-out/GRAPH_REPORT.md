# Graph Report - dr_eng  (2026-11-02)

## Corpus Check
- 485 files · ~459,910 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2339 nodes · 4651 edges · 173 communities (126 shown, 47 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 113 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6ac6bd29`
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
- llm.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- api/reminders/+server.ts
- graphify reference: query, path, explain
- apiFetch
- MarkdownInput.svelte
- content/index.ts
- billing.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- feedback/types.ts
- extraction-spec.md
- GraphEditor.svelte
- lesson-screens/types.ts
- motion.ts
- WritingTask.svelte
- moduleSkills
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- validate.ts
- LessonScreen
- profile.svelte.ts
- 1. Reading comprehension (grade-reading)
- index.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- registry.ts
- scripts
- Workflow
- Button.svelte
- chatSpeaking.ts
- content-edit/api.ts
- QuizRunner.svelte
- length.ts
- DeckProgressStore
- cobe.test.ts
- data.ts
- deck/index.ts
- takeHistory.ts
- speech.ts
- language.ts
- settings/+page.svelte
- progressSync.svelte.ts
- db/schema.ts
- examEditModel.svelte.ts
- snippet.md
- reviewNotes.svelte.ts
- server/grade.ts
- theme.svelte.ts
- QuizReport.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- scoring.ts
- create-coupon.mjs
- measure-overflow.mjs
- StreakModal.svelte
- mechanics.ts
- scan.ts
- content
- checkout/+page.ts
- planById
- Material
- checkAuth
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- examStats
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
- progress.ts
- @eslint/js
- AGENTS.md
- Rules
- editModel.svelte.ts
- quote/+server.ts
- PassageBody.svelte
- ProgressSync
- ReviewNotesStore
- content-i18n.mjs
- fillFromScan
- edit-exam/+page.svelte
- Submit → feedback framework
- TitleEdits
- MyPhrases
- Recorder
- checks/index.ts
- screenPath.ts
- ActivityStore
- hydratable.md
- dependencies
- llmGuard.ts
- inspect.md
- vercel.json
- RulesStore
- RulesPanel.svelte
- submitToLlm
- @sveltejs/adapter-auto
- e-1.ts
- @sveltejs/kit
- server/speaking.ts
- RemindersStore
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
- package.json
- Opener.svelte
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
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts
- `post()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/access.svelte.ts → front/src/lib/api.ts

## Import Cycles
- None detected.

## Communities (173 total, 47 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (28): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+20 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "SlideStage.svelte"
Cohesion: 0.18
Nodes (5): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "llm.ts"
Cohesion: 0.23
Nodes (11): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "apiFetch"
Cohesion: 0.26
Nodes (8): apiFetch(), toWavBase64(), uploadImage(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback()

### Community 20 - "MarkdownInput.svelte"
Cohesion: 0.14
Nodes (12): i(), htmlToMd(), pickIcon(), serialize(), sync(), issuesByNode(), optFeedback(), Option (+4 more)

### Community 21 - "content/index.ts"
Cohesion: 0.14
Nodes (19): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+11 more)

### Community 22 - "billing.ts"
Cohesion: 0.14
Nodes (19): Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, checkout(), CheckoutResult (+11 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "feedback/types.ts"
Cohesion: 0.12
Nodes (18): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+10 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+19 more)

### Community 35 - "motion.ts"
Cohesion: 0.06
Nodes (10): emails, focus(), reducedMotion, homeMedia, Media, d, SUPPORT_EMAIL, SUPPORT_WHATSAPP (+2 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "moduleSkills"
Cohesion: 0.33
Nodes (6): SKILLS, homeMeters, moduleSkills(), moduleDeckToday(), nextMilestone(), if()

### Community 38 - "gradeExam.ts"
Cohesion: 0.13
Nodes (29): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), Checked, failed() (+21 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (21): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+13 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "validate.ts"
Cohesion: 0.16
Nodes (17): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), checkScreen() (+9 more)

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
Cohesion: 0.06
Nodes (15): trailing(), dictionaries, row(), groups, phrase(), delta, firstSeconds, newlyReached (+7 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "registry.ts"
Cohesion: 0.04
Nodes (25): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+17 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "Button.svelte"
Cohesion: 0.09
Nodes (14): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+6 more)

### Community 53 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (24): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), CobeRubric, chatEnds() (+16 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 55 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (9): scoredAnswers(), submit(), screenContext, lockedUntil, lockedWhen, row, rules, taken (+1 more)

### Community 56 - "length.ts"
Cohesion: 0.30
Nodes (11): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+3 more)

### Community 57 - "DeckProgressStore"
Cohesion: 0.36
Nodes (3): DeckProgressStore, load(), persist()

### Community 58 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 59 - "data.ts"
Cohesion: 0.15
Nodes (25): getLesson(), getLessonsBySection(), moduleSections(), Skill, continueFrom(), ContinueItem, EXAM_READY, isWritingLesson() (+17 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.06
Nodes (70): listA, listB, listC, listD, w(), wordId(), eGlossAr, emit() (+62 more)

### Community 61 - "takeHistory.ts"
Cohesion: 0.22
Nodes (12): primaryAction(), record(), stop(), toggle(), Entry, openDb(), readStats(), recordTake() (+4 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 64 - "settings/+page.svelte"
Cohesion: 0.08
Nodes (17): confirming, deleteAccount(), deleting, failed, signOut(), t, EditStore, install (+9 more)

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.13
Nodes (16): activity, WEEKLY_GOAL, progressScope(), deckProgress, ProgressMap, Engagement, LastEngagementStore, load() (+8 more)

### Community 66 - "db/schema.ts"
Cohesion: 0.14
Nodes (19): db, coupons, israelToday, llmUsage, orders, progress, pushSubscriptions, waitlist (+11 more)

### Community 67 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "reviewNotes.svelte.ts"
Cohesion: 0.25
Nodes (4): AccessStore, BLANK, ReviewNote, reviewNotes

### Community 70 - "server/grade.ts"
Cohesion: 0.10
Nodes (31): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest, ReadingRequest (+23 more)

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

### Community 77 - "StreakModal.svelte"
Cohesion: 0.16
Nodes (5): full, ignite, open, words, previous

### Community 78 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 79 - "scan.ts"
Cohesion: 0.47
Nodes (4): ApiError, previewUrl(), scanHandwriting(), toJpeg()

### Community 82 - "planById"
Cohesion: 0.17
Nodes (15): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+7 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "checkAuth"
Cohesion: 0.09
Nodes (34): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), Currency, Cycle (+26 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, lessonScreenSchema, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+30 more)

### Community 88 - "examStats"
Cohesion: 0.50
Nodes (5): examAdvice, lessonStats(), moduleHook, avg(), examStats

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
Nodes (49): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+41 more)

### Community 94 - "stats.ts"
Cohesion: 0.13
Nodes (16): allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz, assortedQuizzes (+8 more)

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
Cohesion: 0.07
Nodes (25): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+17 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 103 - "progress.ts"
Cohesion: 0.21
Nodes (20): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+12 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "editModel.svelte.ts"
Cohesion: 0.21
Nodes (4): EditHistory, LessonBucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 108 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 109 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 110 - "ProgressSync"
Cohesion: 0.28
Nodes (6): Item, localItem(), ProgressSync, readAt(), syncedKeys(), writeLocal()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 119 - "checks/index.ts"
Cohesion: 0.16
Nodes (20): browserDictionaries(), bytes(), checkWriting(), CheckIssue, CheckOptions, CheckReport, Confidence, RubricArea (+12 more)

### Community 120 - "screenPath.ts"
Cohesion: 0.17
Nodes (4): Bucket, onMove(), onUp(), LessonContent

### Community 121 - "ActivityStore"
Cohesion: 0.29
Nodes (3): ActivityStore, dayKey(), load()

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "llmGuard.ts"
Cohesion: 0.20
Nodes (15): cobeVisible(), llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+7 more)

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 129 - "RulesPanel.svelte"
Cohesion: 0.11
Nodes (22): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+14 more)

### Community 132 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 135 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 137 - "RemindersStore"
Cohesion: 0.39
Nodes (3): currentSubscription(), RemindersStore, worker()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (40): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+32 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **747 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+742 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `RulesPanel.svelte`, `RulesStore`, `progressSync.svelte.ts`, `reviewNotes.svelte.ts`, `gradeExam.ts`, `RemindersStore`, `ProgressSync`, `ReviewNotesStore`, `scan.ts`, `Button.svelte`, `content-edit/api.ts`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `LessonScreen`, `editModel.svelte.ts`, `screenPath.ts`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `RulesStore`, `RulesPanel.svelte`, `e-1.ts`, `EditModel`, `validate.ts`, `editModel.svelte.ts`, `content-edit/api.ts`, `cobe.test.ts`, `data.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _747 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09659090909090909 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08773784355179703 - nodes in this community are weakly interconnected._