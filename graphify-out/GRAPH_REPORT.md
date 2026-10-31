# Graph Report - dr_eng  (2026-10-31)

## Corpus Check
- 481 files · ~458,275 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2361 nodes · 4643 edges · 180 communities (132 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6e74676b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lesson-screens/types.ts
- EditModel
- (site)/+page.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- feedback/rules.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- mechanics.ts
- graphify reference: query, path, explain
- RulesPanel.svelte
- markAllColors.ts
- billing.ts
- lib/kanban.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- Opener.svelte
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- llm.ts
- WritingTask.svelte
- deck/index.ts
- gradeExam.ts
- plans.ts
- progressSync.svelte.ts
- moduleLocation.svelte.ts
- profile.svelte.ts
- LessonScreen
- server/kanban.ts
- 1. Reading comprehension (grade-reading)
- QuizRunner.svelte
- writingLint.ts
- Handoff: before testers (owner's to-do)
- progress.ts
- scripts
- Workflow
- MatchPairs.svelte
- מדיניות פרטיות
- content-edit/api.ts
- editModel.svelte.ts
- validate.ts
- תנאי שימוש
- ExamEditWorkspace.svelte
- data.ts
- reminders.svelte.ts
- install.svelte.ts
- speech.ts
- quizzes.ts
- screenChecks.ts
- apiFetch
- saveSynced
- quiz/index.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- registry.ts
- QuizReport.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- feedback/types.ts
- create-coupon.mjs
- measure-overflow.mjs
- access.svelte.ts
- takeHistory.ts
- db/schema.ts
- content
- checkout/+page.ts
- stats.ts
- Material
- Recorder
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- server/speaking.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- progressMerge.ts
- activeField.svelte.ts
- ReviewNotesStore
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- EditHistory
- scoring.ts
- @eslint/js
- AGENTS.md
- Rules
- acceptedAnswers.ts
- LessonRunner.svelte
- length.ts
- edit-exam/+page.svelte
- svelte/transition
- content-i18n.mjs
- chatSpeaking.ts
- I18n
- Submit → feedback framework
- TitleEdits
- lessonProgress.svelte.ts
- RulesStore
- checks/index.ts
- [quizId]/+page.svelte
- ActivityStore
- hydratable.md
- dependencies
- llmGuard.ts
- inspect.md
- vercel.json
- SlideStage.svelte
- lastEngagement.svelte.ts
- index.svelte.ts
- @sveltejs/adapter-auto
- support.ts
- cron/reminders/+server.ts
- @sveltejs/kit
- moduleSkills
- recordAnswer
- MOBILE_BUILD
- dictionary-en-gb
- reviewNotes.svelte.ts
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
- screenTypeNames.ts
- screenshot.ts
- @tailwindcss/typography
- typescript
- UX principles
- הצהרת נגישות
- package.json
- fillFromScan
- brand.md
- MarkdownInput.svelte
- auth/README.md
- NavBar.svelte
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
9. `תנאי שימוש` - 19 edges
10. `Rules` - 18 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts

## Import Cycles
- None detected.

## Communities (180 total, 48 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (26): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+18 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "(site)/+page.svelte"
Cohesion: 0.12
Nodes (5): d(), focus(), reducedMotion, homeMedia, Media

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "feedback/rules.ts"
Cohesion: 0.20
Nodes (5): KEY, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "RulesPanel.svelte"
Cohesion: 0.13
Nodes (19): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+11 more)

### Community 20 - "markAllColors.ts"
Cohesion: 0.40
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 21 - "billing.ts"
Cohesion: 0.12
Nodes (22): Plan, accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+14 more)

### Community 22 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.06
Nodes (43): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, PhraseGroup, phraseGroups (+35 more)

### Community 35 - "llm.ts"
Cohesion: 0.18
Nodes (14): chat(), chatJson(), ChatOptions, keys(), llmConfigured(), LlmResult, GATEWAY_URL, GEMINI_URL (+6 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "deck/index.ts"
Cohesion: 0.07
Nodes (55): listA, listB, listC, listD, w(), wordId(), eGlossAr, deckProgress (+47 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.14
Nodes (28): checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed() (+20 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (36): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+28 more)

### Community 40 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (5): screenList(), EditModelLike, ScreenPath, LessonContent, LessonScreen

### Community 44 - "server/kanban.ts"
Cohesion: 0.26
Nodes (13): kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, Product, jsonBody(), DELETE() (+5 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (8): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, scoredAnswers(), submit(), screenContext

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.22
Nodes (8): 2FA on every account, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers, Vercel

### Community 49 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "MatchPairs.svelte"
Cohesion: 0.22
Nodes (8): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), phrase(), shuffle()

### Community 53 - "מדיניות פרטיות"
Cohesion: 0.10
Nodes (20): 10. מיילים, 11. אבטחה, 12. אחסון בדפדפן, 13. בודקים ותכונות בניסיון, 14. שיעורים ב-Zoom, 15. שינויים במדיניות, 16. יצירת קשר, 1. מי אנחנו (+12 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.18
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

### Community 55 - "editModel.svelte.ts"
Cohesion: 0.23
Nodes (5): LessonBucket, Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 56 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 57 - "תנאי שימוש"
Cohesion: 0.10
Nodes (19): 10. בודקים ותכונות בניסיון, 11. זמינות השירות, 12. אחריות, 13. הפסקת שימוש, 14. שינויים בתנאים, 15. דין ושיפוט, 16. נגישות, 17. יצירת קשר (+11 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "data.ts"
Cohesion: 0.17
Nodes (23): getLesson(), getLessonsBySection(), moduleSections(), Skill, continueFrom(), ContinueItem, EXAM_READY, isWritingLesson() (+15 more)

### Community 60 - "reminders.svelte.ts"
Cohesion: 0.25
Nodes (7): currentSubscription(), REMINDER_HOURS, reminders, RemindersStore, ReminderStatus, storedHour(), worker()

### Community 61 - "install.svelte.ts"
Cohesion: 0.20
Nodes (4): install, InstallPromptEvent, InstallStore, Platform

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 64 - "screenChecks.ts"
Cohesion: 0.23
Nodes (11): MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+3 more)

### Community 65 - "apiFetch"
Cohesion: 0.24
Nodes (10): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), previewUrl() (+2 more)

### Community 66 - "saveSynced"
Cohesion: 0.14
Nodes (11): activity, load(), WEEKLY_GOAL, DeckProgressStore, load(), persist(), ProgressMap, load() (+3 more)

### Community 67 - "quiz/index.ts"
Cohesion: 0.20
Nodes (10): clone(), cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode (+2 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.07
Nodes (49): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), emit(), extractArrayLiteral() (+41 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "registry.ts"
Cohesion: 0.06
Nodes (15): active, checked, KEY, ScreenMode, screenComponents, KEY, LessonScore, KEY (+7 more)

### Community 72 - "QuizReport.svelte"
Cohesion: 0.15
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, RecorderState (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "feedback/types.ts"
Cohesion: 0.17
Nodes (14): postGrade(), Layer1, Layer1Options, EssayVerdict, Feedback, GateReason, GradeRequest, LessonVerdict (+6 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "access.svelte.ts"
Cohesion: 0.21
Nodes (8): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, submit()

### Community 78 - "takeHistory.ts"
Cohesion: 0.22
Nodes (12): primaryAction(), record(), stop(), toggle(), Entry, openDb(), readStats(), recordTake() (+4 more)

### Community 79 - "db/schema.ts"
Cohesion: 0.18
Nodes (13): db, llmUsage, progress, pushSubscriptions, waitlist, DELETE(), endpoint, key (+5 more)

### Community 82 - "stats.ts"
Cohesion: 0.23
Nodes (10): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT (+2 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, lessonScreenSchema, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+30 more)

### Community 88 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

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

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 103 - "scoring.ts"
Cohesion: 0.22
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+5 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 108 - "LessonRunner.svelte"
Cohesion: 0.15
Nodes (4): open, groups, words, previous

### Community 109 - "length.ts"
Cohesion: 0.47
Nodes (8): countValidWords(), isCopiedWhole(), lengthReport(), normWords(), sentencesOf(), sharesRun(), TABLES, tokens()

### Community 111 - "svelte/transition"
Cohesion: 0.08
Nodes (13): emails, confirming, deleteAccount(), deleting, failed, signOut(), t, i() (+5 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 114 - "I18n"
Cohesion: 0.22
Nodes (3): dayPart, I18n, ./$types

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 117 - "lessonProgress.svelte.ts"
Cohesion: 0.24
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 118 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 119 - "checks/index.ts"
Cohesion: 0.10
Nodes (26): browserDictionaries(), bytes(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES (+18 more)

### Community 120 - "[quizId]/+page.svelte"
Cohesion: 0.25
Nodes (4): row, rules, taken, tips

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "SlideStage.svelte"
Cohesion: 0.15
Nodes (8): i(), issuesByNode(), optFeedback(), Option, optText(), withFeedback(), oi(), i()

### Community 129 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 130 - "index.svelte.ts"
Cohesion: 0.09
Nodes (7): trailing(), pieces, dictionaries, delta, firstSeconds, newlyReached, formattedDate

### Community 132 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 133 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 135 - "moduleSkills"
Cohesion: 0.33
Nodes (6): SKILLS, homeMeters, moduleSkills(), moduleDeckToday(), nextMilestone(), if()

### Community 136 - "recordAnswer"
Cohesion: 0.40
Nodes (6): primaryAction(), primaryAction(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 139 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 157 - "הצהרת נגישות"
Cohesion: 0.29
Nodes (6): אחראי הנגישות, איך נבדקה הנגישות, המחויבות שלנו, הצהרת נגישות, מה כבר נגיש, מה עוד לא נגיש

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 165 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 168 - "NavBar.svelte"
Cohesion: 0.07
Nodes (6): auth, EditStore, full, ignite, ThemeMode, ThemeStore

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **778 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+773 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `screenChecks.ts`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `deck/index.ts`, `quiz/index.ts`, `registry.ts`, `scoring.ts`, `editModel.svelte.ts`, `screenTypeNames.ts`, `validate.ts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `EditModel`, `RulesPanel.svelte`, `editModel.svelte.ts`, `RulesStore`, `content-edit/api.ts`, `validate.ts`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `progressSync.svelte.ts`, `feedback/types.ts`, `reviewNotes.svelte.ts`, `access.svelte.ts`, `svelte/transition`, `RulesPanel.svelte`, `content-edit/api.ts`, `RulesStore`, `reminders.svelte.ts`, `ReviewNotesStore`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _778 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08309178743961353 - nodes in this community are weakly interconnected._