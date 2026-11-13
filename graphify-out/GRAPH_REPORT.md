# Graph Report - dr_eng  (2026-11-13)

## Corpus Check
- 542 files · ~499,689 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2628 nodes · 5247 edges · 202 communities (150 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `186efa0a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- quizzes.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Speak.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- llmGuard.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- stats.ts
- graphify reference: query, path, explain
- index.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- passageQuiz.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- apiFetch
- extraction-spec.md
- GraphEditor.svelte
- validate.ts
- scoring.ts
- WritingTask.svelte
- data.ts
- SlideStage.svelte
- plans.ts
- checkAuth
- checks/index.ts
- api/lessons/+server.ts
- LessonScreen
- dependencies
- db/schema.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- miniMarkdown.ts
- Workflow
- meta.ts
- hooks.server.ts
- getDecks
- rubrics/index.ts
- load.ts
- zoom.ts
- editModel.svelte.ts
- examEditModel.svelte.ts
- deck/index.ts
- test
- speech.ts
- AccountSection.svelte
- $app/paths
- planById
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- ReviewNotesStore
- server/grade.ts
- PassageBody.svelte
- progressSync.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- MarkdownInput.svelte
- create-coupon.mjs
- measure-overflow.mjs
- language.ts
- mechanics.ts
- ActivityStore
- content
- checkout/+page.ts
- lib/finance.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- MatchDefinitions.svelte
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- accounts.spec.ts
- activeField.svelte.ts
- phraseBank.svelte.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- RulesPanel.svelte
- Platform: web, mobile, accounts
- scan.ts
- DeckProgressStore
- saveSynced
- AGENTS.md
- Rules
- Md.svelte
- api/reminders/+server.ts
- he.ts
- takeHistory.ts
- DebugStore
- content-i18n.mjs
- Handoff: test findings (open items only)
- RemindersStore
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- ProfileStore
- svelte/easing
- QuizRunner.svelte
- (site)/+page.svelte
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- svelte/transition
- personas.spec.ts
- gradeExam.ts
- @sveltejs/adapter-auto
- refund.ts
- Mcq.svelte
- MatchPairs.svelte
- Handoff: Zoom group lessons, testing
- Handoff: exam lock trusts the client's part count
- package.json
- motion.ts
- Module E QA
- render.md
- eslint-config-prettier
- moduleLocation.svelte.ts
- examLock.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- writingMoves.ts
- layer1.ts
- quote/+server.ts
- ExamEditWorkspace.svelte
- WordImage.svelte
- content-edit-files.test.ts
- TakeCompare.svelte
- lessonIcon.ts
- UX principles
- api.spec.ts
- emailTypo.ts
- sectionThemes.ts
- prettier
- @types/node
- textColors.ts
- brand.md
- @playwright/test
- auth/README.md
- score.svelte.ts
- @types/nspell
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- typescript-eslint
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
- auth.svelte.ts
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- reviewNotes.svelte.ts
- progress.ts
- .refresh
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
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (202 total, 52 thin omitted)

### Community 0 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

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
Cohesion: 0.08
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection()

### Community 5 - "Speak.svelte"
Cohesion: 0.10
Nodes (12): KEY, ScreenMode, primaryAction(), reached, record(), seconds, share, stop() (+4 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): cobeVisible(), israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+8 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "stats.ts"
Cohesion: 0.11
Nodes (13): avg(), examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule(), lockedUntil, lockedWhen (+5 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "index.svelte.ts"
Cohesion: 0.09
Nodes (5): pieces, dictionaries, I18n, status(), ./$types

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+19 more)

### Community 21 - "content/index.ts"
Cohesion: 0.12
Nodes (27): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+19 more)

### Community 22 - "passageQuiz.ts"
Cohesion: 0.39
Nodes (7): keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen, screen

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
Cohesion: 0.26
Nodes (8): apiFetch(), toWavBase64(), uploadImage(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "validate.ts"
Cohesion: 0.11
Nodes (11): Bucket, onMove(), onUp(), exit(), bucketLabel(), Issue, screenIssues(), validateExam() (+3 more)

### Community 35 - "scoring.ts"
Cohesion: 0.05
Nodes (43): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+35 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (39): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+31 more)

### Community 37 - "data.ts"
Cohesion: 0.11
Nodes (29): getLessonMetaBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters (+21 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.11
Nodes (10): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS (+2 more)

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE (+11 more)

### Community 40 - "checkAuth"
Cohesion: 0.23
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.12
Nodes (26): checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+18 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.15
Nodes (22): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+14 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (7): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 44 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 45 - "db/schema.ts"
Cohesion: 0.26
Nodes (8): db, examAttempts, llmUsage, progress, pushSubscriptions, waitlist, zoomRegistrants, body

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (46): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), CobeRubric, chatEnds() (+38 more)

### Community 50 - "miniMarkdown.ts"
Cohesion: 0.17
Nodes (19): CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs() (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "meta.ts"
Cohesion: 0.23
Nodes (14): byId, getLessonMeta(), LessonMeta, progressScope(), sectionMeta, Skill, moduleRoute(), hasContent() (+6 more)

### Community 53 - "hooks.server.ts"
Cohesion: 0.20
Nodes (13): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+5 more)

### Community 54 - "getDecks"
Cohesion: 0.24
Nodes (9): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, ./$types, load() (+1 more)

### Community 55 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+7 more)

### Community 56 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 57 - "zoom.ts"
Cohesion: 0.17
Nodes (16): LessonRecording, LessonSlot, cronAuthorized(), orders, accessToken(), aliasEmail(), Meeting, meetingPath() (+8 more)

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.23
Nodes (3): EditHistory, LessonBucket, moduleSections()

### Community 59 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (55): listA, listB, listC, listD, w(), eGlossAr, cache, ensureLoaded() (+47 more)

### Community 61 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, deleteAccount(), deleting, failed, signOut(), t

### Community 64 - "$app/paths"
Cohesion: 0.10
Nodes (10): full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders (+2 more)

### Community 65 - "planById"
Cohesion: 0.22
Nodes (10): build(), COBE_ADDON, defaultPlan(), maxPayments(), planById(), planId(), Pricing, withCobe() (+2 more)

### Community 66 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, MAX_TEXT, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 72 - "progressSync.svelte.ts"
Cohesion: 0.17
Nodes (10): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal(), storeItem() (+2 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "MarkdownInput.svelte"
Cohesion: 0.27
Nodes (6): htmlToMd(), pickIcon(), serialize(), sync(), CALLOUT_ICONS, DEFAULT_CALLOUT_ICON

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 78 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 82 - "lib/finance.ts"
Cohesion: 0.17
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.18
Nodes (21): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+13 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (35): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+27 more)

### Community 88 - "MatchDefinitions.svelte"
Cohesion: 0.25
Nodes (3): active, checked, item()

### Community 89 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/playwright, dictionary-en, dictionary-en-gb, drizzle-kit, devDependencies, @axe-core/playwright, dictionary-en, dictionary-en-gb (+19 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "RulesPanel.svelte"
Cohesion: 0.06
Nodes (38): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+30 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.13
Nodes (14): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+6 more)

### Community 102 - "scan.ts"
Cohesion: 0.47
Nodes (4): ApiError, previewUrl(), scanHandwriting(), toJpeg()

### Community 104 - "saveSynced"
Cohesion: 0.13
Nodes (14): activity, load(), WEEKLY_GOAL, load(), ProgressMap, LastEngagementStore, load(), LessonProgressStore (+6 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "api/reminders/+server.ts"
Cohesion: 0.16
Nodes (17): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay() (+9 more)

### Community 109 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 110 - "takeHistory.ts"
Cohesion: 0.36
Nodes (7): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), TakeStats

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.20
Nodes (6): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states

### Community 119 - "svelte/easing"
Cohesion: 0.11
Nodes (12): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+4 more)

### Community 120 - "QuizRunner.svelte"
Cohesion: 0.13
Nodes (13): total(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+5 more)

### Community 121 - "(site)/+page.svelte"
Cohesion: 0.17
Nodes (4): focus(), homeMedia, Media, d

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "svelte/transition"
Cohesion: 0.11
Nodes (7): open, groups, phrase(), words, previous, next, seen

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "gradeExam.ts"
Cohesion: 0.10
Nodes (41): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked (+33 more)

### Community 132 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 133 - "Mcq.svelte"
Cohesion: 0.15
Nodes (7): KEY, #each(), slot(), Option, optText(), withFeedback(), i()

### Community 134 - "MatchPairs.svelte"
Cohesion: 0.23
Nodes (9): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), fitOrder(), optionOrder() (+1 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 137 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 138 - "motion.ts"
Cohesion: 0.09
Nodes (6): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP, formattedDate

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.16
Nodes (10): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+2 more)

### Community 143 - "examLock.ts"
Cohesion: 0.60
Nodes (4): ExamRef, assertExamOpen(), exempt(), recordExamPart()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (37): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+29 more)

### Community 148 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 149 - "layer1.ts"
Cohesion: 0.23
Nodes (10): browserDictionaries(), bytes(), DictData, DictLoader, issuesToMarks(), Layer1, Layer1Options, runLayer1() (+2 more)

### Community 150 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 151 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 153 - "content-edit-files.test.ts"
Cohesion: 0.40
Nodes (3): f(), files, lib

### Community 154 - "TakeCompare.svelte"
Cohesion: 0.50
Nodes (3): delta, firstSeconds, newlyReached

### Community 155 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 163 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 168 - "score.svelte.ts"
Cohesion: 0.11
Nodes (11): primaryAction(), stripLineAttrs(), primaryAction(), primaryAction(), gutter, lines, KEY, LessonScore (+3 more)

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

### Community 195 - "auth.svelte.ts"
Cohesion: 0.06
Nodes (19): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+11 more)

### Community 201 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 202 - "progress.ts"
Cohesion: 0.21
Nodes (19): attemptKey(), clearInProgress(), ExamResult, getLastAttempt(), getResults(), hasStorage(), progressKey(), QuizAttempt (+11 more)

### Community 217 - "billing.ts"
Cohesion: 0.16
Nodes (16): Plan, accessEnd(), accessUntil(), checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+8 more)

## Knowledge Gaps
- **846 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+841 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `saveSynced()` connect `saveSynced` to `DeckProgressStore`, `progressSync.svelte.ts`, `progress.ts`, `moduleLocation.svelte.ts`, `ActivityStore`, `takeHistory.ts`, `ProfileStore`, `svelte/easing`, `phraseBank.svelte.ts`, `apiFetch`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `$app/paths`, `content-edit/api.ts`, `auth.svelte.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `gradeExam.ts`, `scan.ts`, `progressSync.svelte.ts`, `reviewNotes.svelte.ts`, `api/lessons/+server.ts`, `.refresh`, `RemindersStore`, `AccountSection.svelte`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `editModel.svelte.ts`, `LessonScreen`, `validate.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _846 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09659090909090909 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0783673469387755 - nodes in this community are weakly interconnected._