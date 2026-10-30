# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 460 files · ~442,329 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2224 nodes · 4460 edges · 169 communities (115 shown, 54 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e87e0da5`
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
- svelte/transition
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- stats.ts
- QuizAnswerSlot
- progress.ts
- miniMarkdown.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- (site)/+page.svelte
- WritingTask.svelte
- lib/kanban.ts
- billing.ts
- plans.ts
- deck/index.ts
- scoring.ts
- goalOptions.ts
- LessonScreen
- SlideStage.svelte
- gradeExam.ts
- RemindersStore
- writingLint.ts
- server/kanban.ts
- validate.ts
- scripts
- Workflow
- apiFetch
- index.svelte.ts
- llmGuard.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- lessonProgress.svelte.ts
- package.json
- length.ts
- data.ts
- settings/+page.svelte
- motion.ts
- progressMerge.ts
- mechanics.ts
- Opener.svelte
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- db/schema.ts
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- QuizRunner.svelte
- create-coupon.mjs
- measure-overflow.mjs
- DebugStore
- LessonNode
- textColors.ts
- content
- checkout/+page.ts
- feedback/types.ts
- Material
- lesson-screens/types.ts
- e-1.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- moduleSkills
- devDependencies
- cron/reminders/+server.ts
- await-expressions.md
- examStats
- activeField.svelte.ts
- llm.ts
- ProfileStore
- attach.md
- ExamEditModel
- InstallStore
- .mcp.json
- QuizReport.svelte
- Platform: web, mobile, accounts
- server/speaking.ts
- ThemeStore
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- editModel.svelte.ts
- MyPhrases
- checks/index.ts
- content-i18n.mjs
- EditHistory
- Submit → feedback framework
- fillFromScan
- MarkdownInput.svelte
- hydratable.md
- dependencies
- inspect.md
- vercel.json
- access.svelte.ts
- speech.ts
- recordAnswer
- saveSynced
- ReviewNotesStore
- eslint-plugin-svelte
- progressSync.svelte.ts
- Recorder
- render.md
- svelte
- support.ts
- @types/web-push
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/vite
- drizzle-kit
- @sveltejs/kit
- acceptedAnswers.ts
- UX principles
- globals
- cobe.test.ts
- I18n
- brand.md
- auth/README.md
- prettier
- svelte-check
- @sveltejs/vite-plugin-svelte
- app/+layout.ts
- @types/nspell
- typescript-eslint
- legacyIds.ts
- prettier-plugin-tailwindcss
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
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts

## Import Cycles
- None detected.

## Communities (169 total, 54 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "rubrics/index.ts"
Cohesion: 0.18
Nodes (11): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+3 more)

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

### Community 10 - "svelte/transition"
Cohesion: 0.08
Nodes (10): emails, WEEKLY_GOAL, trailing(), NAME_MAX, Profile, supabase, showNav, ./$types (+2 more)

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
Cohesion: 0.05
Nodes (37): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+29 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "stats.ts"
Cohesion: 0.15
Nodes (13): allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz, assortedQuizzes (+5 more)

### Community 21 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 22 - "miniMarkdown.ts"
Cohesion: 0.14
Nodes (15): CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock(), mdInline(), OL_BLOCK_CLASS (+7 more)

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

### Community 35 - "(site)/+page.svelte"
Cohesion: 0.16
Nodes (4): d(), focus(), homeMedia, Media

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 38 - "billing.ts"
Cohesion: 0.12
Nodes (22): Plan, accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+14 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (34): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+26 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (58): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+50 more)

### Community 41 - "scoring.ts"
Cohesion: 0.16
Nodes (18): primaryAction(), FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES (+10 more)

### Community 42 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 43 - "LessonScreen"
Cohesion: 0.13
Nodes (6): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonScreen

### Community 44 - "SlideStage.svelte"
Cohesion: 0.12
Nodes (8): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, optFeedback()

### Community 45 - "gradeExam.ts"
Cohesion: 0.14
Nodes (28): browserDictionaries(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed() (+20 more)

### Community 46 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "server/kanban.ts"
Cohesion: 0.30
Nodes (12): kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, jsonBody(), DELETE(), PATCH() (+4 more)

### Community 49 - "validate.ts"
Cohesion: 0.14
Nodes (19): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), optText() (+11 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "apiFetch"
Cohesion: 0.16
Nodes (14): apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, addChat(), chatCount(), ChatTurnError (+6 more)

### Community 53 - "index.svelte.ts"
Cohesion: 0.12
Nodes (4): pieces, dictionaries, words, previous

### Community 54 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.12
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "lessonProgress.svelte.ts"
Cohesion: 0.15
Nodes (11): activity, load(), LastEngagementStore, load(), lessonProgress, LessonProgressStore, load(), persist() (+3 more)

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "length.ts"
Cohesion: 0.35
Nodes (10): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+2 more)

### Community 62 - "data.ts"
Cohesion: 0.14
Nodes (25): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY, isWritingLesson() (+17 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.06
Nodes (18): auth, confirming, deleteAccount(), deleting, failed, signOut(), t, EditStore (+10 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (44): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+36 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ReadingRequest, ask(), block() (+19 more)

### Community 71 - "db/schema.ts"
Cohesion: 0.18
Nodes (13): db, llmUsage, progress, pushSubscriptions, waitlist, DELETE(), endpoint, key (+5 more)

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "QuizRunner.svelte"
Cohesion: 0.09
Nodes (9): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, row, rules, taken (+1 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 79 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 82 - "feedback/types.ts"
Cohesion: 0.15
Nodes (16): Layer1, Layer1Options, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet, EssayVerdict, Feedback (+8 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.03
Nodes (50): active, checked, mistakes, shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+42 more)

### Community 85 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "moduleSkills"
Cohesion: 0.33
Nodes (6): SKILLS, homeMeters, moduleSkills(), moduleDeckToday(), nextMilestone(), if()

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "examStats"
Cohesion: 0.50
Nodes (5): examAdvice, lessonStats(), moduleHook, avg(), examStats

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "llm.ts"
Cohesion: 0.17
Nodes (15): chat(), chatJson(), ChatOptions, keys(), llmConfigured(), LlmResult, Product, GATEWAY_URL (+7 more)

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 100 - "QuizReport.svelte"
Cohesion: 0.11
Nodes (12): row(), groups, phrase(), anyFailed, closed, hasSpeaking, headline, level (+4 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "server/speaking.ts"
Cohesion: 0.21
Nodes (11): CobeRubric, SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest (+3 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 109 - "editModel.svelte.ts"
Cohesion: 0.18
Nodes (5): LessonBucket, Bucket, onMove(), onUp(), LessonContent

### Community 111 - "checks/index.ts"
Cohesion: 0.12
Nodes (24): bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES (+16 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 120 - "MarkdownInput.svelte"
Cohesion: 0.27
Nodes (6): htmlToMd(), pickIcon(), serialize(), sync(), CALLOUT_ICONS, DEFAULT_CALLOUT_ICON

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "access.svelte.ts"
Cohesion: 0.18
Nodes (10): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, loadQuote() (+2 more)

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "recordAnswer"
Cohesion: 0.40
Nodes (6): primaryAction(), pick(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 132 - "saveSynced"
Cohesion: 0.15
Nodes (16): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, saveSynced() (+8 more)

### Community 138 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 160 - "cobe.test.ts"
Cohesion: 0.23
Nodes (7): cobe1Lessons, cobe2Lessons, cobe3Lessons, gradeSpeaking(), half(), lengthPercentOff(), rubric

### Community 163 - "I18n"
Cohesion: 0.17
Nodes (6): dayPart, I18n, getQuiz(), ./$types, load(), ./$types

### Community 177 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **695 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+690 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `access.svelte.ts`, `content-edit/api.ts`, `ReviewNotesStore`, `progressSync.svelte.ts`, `RemindersStore`, `RulesPanel.svelte`, `feedback/types.ts`, `settings/+page.svelte`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `content/index.ts`, `EditModel`, `examEditModel.svelte.ts`, `deck/index.ts`, `scoring.ts`, `SlideStage.svelte`, `editModel.svelte.ts`, `validate.ts`, `lesson-screens/types.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `LessonScreen`, `editModel.svelte.ts`, `LessonNode`, `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `data.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _695 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.09024390243902439 - nodes in this community are weakly interconnected._
- **Should `Checklist` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._