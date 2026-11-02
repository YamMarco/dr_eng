# Graph Report - dr_eng  (2026-11-02)

## Corpus Check
- 485 files · ~459,718 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2335 nodes · 4646 edges · 178 communities (126 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 113 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1d76412a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- feedback/types.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- server/speaking.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- api/reminders/+server.ts
- graphify reference: query, path, explain
- RulesPanel.svelte
- SlideStage.svelte
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
- NavBar.svelte
- (site)/+page.svelte
- WritingTask.svelte
- deck/index.ts
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- screenChecks.ts
- LessonScreen
- goalOptions.ts
- 1. Reading comprehension (grade-reading)
- index.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- lesson-screens/types.ts
- scripts
- Workflow
- lib/api.ts
- apiFetch
- content-edit/api.ts
- QuizRunner.svelte
- localize.svelte.ts
- option.ts
- cobe.test.ts
- data.ts
- feedback.test.ts
- takeHistory.ts
- speech.ts
- I18n
- reminders.svelte.ts
- lessonProgress.svelte.ts
- db/schema.ts
- examEditModel.svelte.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- editModel.svelte.ts
- profile.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- WordImage.svelte
- create-coupon.mjs
- measure-overflow.mjs
- svelte/transition
- lessonIcon.ts
- sectionThemes.ts
- content
- checkout/+page.ts
- planById
- Material
- legacyIds.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- chatSpeaking.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- progressSync.svelte.ts
- activeField.svelte.ts
- quizzes.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- fillFromScan
- progress.ts
- @eslint/js
- AGENTS.md
- Rules
- EditHistory
- checkout
- language.ts
- validate.ts
- [quizId]/+page.svelte
- content-i18n.mjs
- edit-exam/+page.svelte
- Submit → feedback framework
- TitleEdits
- saveSynced
- Recorder
- checks/index.ts
- mechanics.ts
- ActivityStore
- hydratable.md
- dependencies
- llmGuard.ts
- inspect.md
- vercel.json
- MarkdownInput.svelte
- RulesStore
- recordAnswer
- @sveltejs/adapter-auto
- e-1.ts
- EditWorkspace.svelte
- @sveltejs/kit
- DebugStore
- screenshot.ts
- QuizAnswerSlot
- dictionary-en-gb
- writingMoves.ts
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
- edit-words/+page.svelte
- [moduleId]/+layout.ts
- payments.ts
- @tailwindcss/typography
- typescript
- UX principles
- InstallStore
- package.json
- ThemeStore
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

## Communities (178 total, 52 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (27): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+19 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "feedback/types.ts"
Cohesion: 0.13
Nodes (20): postGrade(), Layer1, Layer1Options, Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal() (+12 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "server/speaking.ts"
Cohesion: 0.11
Nodes (22): CobeRubric, SpeakingVerdict, chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL (+14 more)

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
Cohesion: 0.29
Nodes (9): jsonBody(), POST(), DELETE(), endpoint, key, POST(), ready(), subscribeBody (+1 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "RulesPanel.svelte"
Cohesion: 0.10
Nodes (24): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+16 more)

### Community 20 - "SlideStage.svelte"
Cohesion: 0.15
Nodes (5): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 21 - "content/index.ts"
Cohesion: 0.13
Nodes (21): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+13 more)

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
Cohesion: 0.15
Nodes (14): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+6 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 35 - "(site)/+page.svelte"
Cohesion: 0.18
Nodes (4): focus(), homeMedia, Media, d

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "deck/index.ts"
Cohesion: 0.06
Nodes (63): activity, listA, listB, listC, listD, w(), wordId(), eGlossAr (+55 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.17
Nodes (22): isLimit(), browserDictionaries(), bytes(), DictData, writingRubricId, gradeLesson(), check(), Checked (+14 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+14 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.22
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 42 - "screenChecks.ts"
Cohesion: 0.21
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (6): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen, IdentifiedScreen

### Community 44 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "index.svelte.ts"
Cohesion: 0.07
Nodes (8): WEEKLY_GOAL, trailing(), full, ignite, pieces, dictionaries, status(), formattedDate

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (45): active, checked, announcement, mistakes, shuffleNotIdentity(), KEY, ScreenMode, screenComponents (+37 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "lib/api.ts"
Cohesion: 0.12
Nodes (14): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+6 more)

### Community 53 - "apiFetch"
Cohesion: 0.07
Nodes (23): AccessStore, ApiError, apiFetch(), toWavBase64(), deleteAccount(), signOut(), BLANK, ReviewNote (+15 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.33
Nodes (10): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+2 more)

### Community 55 - "QuizRunner.svelte"
Cohesion: 0.09
Nodes (8): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, scoredAnswers(), submit(), screenContext

### Community 56 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 57 - "option.ts"
Cohesion: 0.22
Nodes (8): i(), issuesByNode(), optFeedback(), Option, optText(), withFeedback(), oi(), i()

### Community 58 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 59 - "data.ts"
Cohesion: 0.12
Nodes (32): getLessonsBySection(), moduleSections(), progressScope(), Skill, SKILLS, continueFrom(), ContinueItem, EXAM_READY (+24 more)

### Community 60 - "feedback.test.ts"
Cohesion: 0.27
Nodes (7): applyLength(), mechanicsCount(), FATAL_TAGS, TAG_IDS, TagDef, TAGS, MechanicsCount

### Community 61 - "takeHistory.ts"
Cohesion: 0.15
Nodes (15): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Entry (+7 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "I18n"
Cohesion: 0.22
Nodes (3): dayPart, I18n, ./$types

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.16
Nodes (7): install, InstallPromptEvent, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 66 - "db/schema.ts"
Cohesion: 0.15
Nodes (17): db, israelToday, llmUsage, progress, pushSubscriptions, waitlist, isPushEndpoint(), PUSH_HOSTS (+9 more)

### Community 67 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.07
Nodes (50): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), emit(), extractArrayLiteral() (+42 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.15
Nodes (22): CONTENT_TAGS, ask(), block(), cleanMarks(), ESSAY_PROMPTS, gradeEssay(), gradeLesson(), gradeReading() (+14 more)

### Community 71 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (7): LessonBucket, Bucket, onMove(), onUp(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 72 - "profile.svelte.ts"
Cohesion: 0.12
Nodes (11): NAME_MAX, Profile, anyFailed, closed, hasSpeaking, headline, level, numbers (+3 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "svelte/transition"
Cohesion: 0.07
Nodes (17): emails, COBE_OPEN, confirming, deleting, failed, t, i(), reducedMotion (+9 more)

### Community 78 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 82 - "planById"
Cohesion: 0.17
Nodes (15): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+7 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (34): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+26 more)

### Community 88 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (22): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+14 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.06
Nodes (50): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+42 more)

### Community 94 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

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
Cohesion: 0.20
Nodes (10): CurriculumModule, CurriculumSection, getUnitGroup(), modules, textSection, UnitGroup, unitGroups, wordsSection (+2 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 103 - "progress.ts"
Cohesion: 0.11
Nodes (35): ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, attemptKey() (+27 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 109 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 110 - "validate.ts"
Cohesion: 0.43
Nodes (6): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 111 - "[quizId]/+page.svelte"
Cohesion: 0.12
Nodes (7): open, words, previous, row, rules, taken, tips

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 117 - "saveSynced"
Cohesion: 0.12
Nodes (11): load(), Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, load() (+3 more)

### Community 119 - "checks/index.ts"
Cohesion: 0.14
Nodes (24): checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+16 more)

### Community 120 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "llmGuard.ts"
Cohesion: 0.20
Nodes (15): cobeVisible(), llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+7 more)

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 130 - "recordAnswer"
Cohesion: 0.29
Nodes (8): primaryAction(), announce(), pick(), primaryAction(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 132 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 139 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (35): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+27 more)

### Community 151 - "edit-words/+page.svelte"
Cohesion: 0.40
Nodes (3): changed, invalidCount, saving

### Community 152 - "[moduleId]/+layout.ts"
Cohesion: 0.67
Nodes (3): getModule(), load(), ./$types

### Community 153 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

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
- **744 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+739 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `reminders.svelte.ts`, `RulesStore`, `feedback/types.ts`, `RulesPanel.svelte`, `lib/api.ts`, `content-edit/api.ts`, `progressSync.svelte.ts`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `EditWorkspace.svelte`, `editModel.svelte.ts`, `LessonScreen`, `RulesPanel.svelte`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `RulesStore`, `e-1.ts`, `EditModel`, `editModel.svelte.ts`, `validate.ts`, `RulesPanel.svelte`, `content-edit/api.ts`, `cobe.test.ts`, `data.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _744 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09879032258064516 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08585858585858586 - nodes in this community are weakly interconnected._