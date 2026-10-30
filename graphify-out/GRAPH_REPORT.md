# Graph Report - module  (2026-10-30)

## Corpus Check
- 455 files · ~407,937 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2264 nodes · 4387 edges · 192 communities (138 shown, 54 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5092f19`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- lib/kanban.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- SvelteKit head/body Placeholders
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- Keyed Each Blocks
- prettier.config.js
- app.d.ts
- Favicon (Svelte Logo)
- graphify reference: query, path, explain
- settled() API
- Context API (createContext)
- CSS Custom Properties via style:
- Styling Child Components (:global)
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- deck.test.ts
- WritingTask.svelte
- EditHistory
- הפלט
- plans.ts
- deck/index.ts
- (site)/+page.svelte
- profile.svelte.ts
- LessonScreen
- Module C audit
- svelte/transition
- gradeExam.ts
- writingLint.ts
- Module E plan
- curriculum.ts
- scripts
- scoring.ts
- apiFetch
- validate.ts
- db/schema.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- miniMarkdown.ts
- ExamEditWorkspace.svelte
- activity.svelte.ts
- package.json
- progress.ts
- data.ts
- reminders.svelte.ts
- feedback/grade.ts
- progressMerge.ts
- quizzes.ts
- SlideStage.svelte
- feedback/types.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- PassageBody.svelte
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- Speak.svelte
- COBE (oral exam)
- content
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- WordImageField.svelte
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- session.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- llmGuard.ts
- Button.svelte
- api/reminders/+server.ts
- ExamEditModel
- Handoff: verify Vercel AI Gateway
- .mcp.json
- answers.svelte.ts
- Platform: web, mobile, accounts
- RulesStore
- .refresh
- @eslint/js
- AGENTS.md
- Rules
- snapshot-content.ts
- planById
- checks/index.ts
- length.ts
- content-i18n.mjs
- registry.ts
- Submit → feedback framework
- [id]/+server.ts
- Handoff: About page, after launch
- deckProgress.svelte.ts
- QuizReport.svelte
- acceptedAnswers.ts
- Module G
- index.svelte.ts
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- cron/reminders/+server.ts
- vercel.json
- feedback/speaking.ts
- progressSync.svelte.ts
- speech.ts
- score.svelte.ts
- takeHistory.ts
- Handoff: `/mcp` endpoint (removed)
- Mcq.svelte
- ReviewNotesStore
- eslint-plugin-svelte
- הקול והסגנון
- lessonProgress.svelte.ts
- DebugStore
- checkout
- svelte
- support.ts
- language.ts
- @types/web-push
- service-worker.ts
- server/supabase.ts
- lessons/+page.svelte
- MarkdownInput.svelte
- @tailwindcss/vite
- ActivityStore
- debug.svelte.ts
- @sveltejs/kit
- book/+page.svelte
- AccountSection.svelte
- progress/+server.ts
- UX principles
- billing.ts
- textColors.ts
- withCobe
- [quizId]/+page.svelte
- Bucket
- lastEngagement.svelte.ts
- brand.md
- drizzle-kit
- auth/README.md
- globals
- prettier
- svelte-check
- @sveltejs/vite-plugin-svelte
- app/+layout.ts
- @types/nspell
- typescript-eslint
- scan.ts
- LessonEditorView.svelte
- reviewNotes.svelte.ts
- payments.ts
- edit-exam/+page.svelte
- screenTypeNames.ts
- prettier-plugin-tailwindcss
- UI review
- vite
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `apiFetch()` - 27 edges
6. `LessonNode` - 26 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `QuizNode` - 16 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `buildSession()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts
- `decoys()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts

## Import Cycles
- None detected.

## Communities (192 total, 54 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.11
Nodes (19): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+11 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (5): clone(), EditModel, swapLevels(), versions(), LessonNode

### Community 5 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "SvelteKit head/body Placeholders"
Cohesion: 0.67
Nodes (3): RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

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
Cohesion: 0.15
Nodes (12): c1Lessons, c2Lessons, c3Lessons, e1Lessons, g1Lessons, g2Lessons, all, allLessons (+4 more)

### Community 35 - "deck.test.ts"
Cohesion: 0.19
Nodes (11): listA, listB, listC, listD, w(), wordId(), EXAM_BOX, MAX_REVIEWS (+3 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, Cycle, CYCLE_MONTHS, CYCLES, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE, INSTALLMENTS (+11 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.14
Nodes (21): eGlossAr, activeDecks(), Deck, decks, deckStats(), deckToday(), dueToday(), getDecks() (+13 more)

### Community 41 - "(site)/+page.svelte"
Cohesion: 0.14
Nodes (4): focus(), reducedMotion, homeMedia, Media

### Community 42 - "profile.svelte.ts"
Cohesion: 0.11
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (9): LessonBucket, screenList(), EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+1 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "svelte/transition"
Cohesion: 0.11
Nodes (4): trailing(), ./$types, next, seen

### Community 46 - "gradeExam.ts"
Cohesion: 0.24
Nodes (16): writingRubricId, applyLength(), mechanicsCount(), check(), Checked, failed(), gradeEssay(), gradeExam() (+8 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "curriculum.ts"
Cohesion: 0.10
Nodes (16): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+8 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "scoring.ts"
Cohesion: 0.22
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+5 more)

### Community 52 - "apiFetch"
Cohesion: 0.32
Nodes (7): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback()

### Community 53 - "validate.ts"
Cohesion: 0.16
Nodes (16): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), checkScreen() (+8 more)

### Community 54 - "db/schema.ts"
Cohesion: 0.22
Nodes (10): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, adminClient() (+2 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (44): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+36 more)

### Community 57 - "miniMarkdown.ts"
Cohesion: 0.12
Nodes (17): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+9 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "activity.svelte.ts"
Cohesion: 0.12
Nodes (8): load(), WEEKLY_GOAL, full, ignite, groups, phrase(), load(), onSyncedChange()

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "progress.ts"
Cohesion: 0.16
Nodes (25): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+17 more)

### Community 62 - "data.ts"
Cohesion: 0.14
Nodes (28): getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters (+20 more)

### Community 63 - "reminders.svelte.ts"
Cohesion: 0.09
Nodes (13): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, currentSubscription(), REMINDER_HOURS, reminders (+5 more)

### Community 64 - "feedback/grade.ts"
Cohesion: 0.13
Nodes (22): gradeLesson(), postGrade(), Layer1, Layer1Options, runLayer1(), applyFixes(), Corrected, Fix (+14 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.47
Nodes (9): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), num(), Obj (+1 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 67 - "SlideStage.svelte"
Cohesion: 0.14
Nodes (7): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS, OpenerLevel, oi()

### Community 68 - "feedback/types.ts"
Cohesion: 0.13
Nodes (14): CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics, pieces, EssayVerdict (+6 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.12
Nodes (32): checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+24 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, GradeRequest, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.30
Nodes (8): cQuizzes, cobeQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "Speak.svelte"
Cohesion: 0.19
Nodes (7): KEY, ScreenMode, primaryAction(), record(), stop(), toggle(), takeKey()

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.12
Nodes (20): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+12 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (26): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+18 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (36): autoCheck, clozePickSchema, dir, index, lessonScreenSchema, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+28 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "session.ts"
Cohesion: 0.29
Nodes (17): blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+9 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "llmGuard.ts"
Cohesion: 0.27
Nodes (10): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Product (+2 more)

### Community 95 - "Button.svelte"
Cohesion: 0.09
Nodes (13): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+5 more)

### Community 96 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 98 - "Handoff: verify Vercel AI Gateway"
Cohesion: 0.40
Nodes (4): Before checking, Check (signed in, on the production site; then ask Claude to read the logs), Handoff: verify Vercel AI Gateway, Still open from before

### Community 100 - "answers.svelte.ts"
Cohesion: 0.14
Nodes (5): active, checked, KEY, QuizAnswerSlot, item()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "RulesStore"
Cohesion: 0.21
Nodes (3): RulesStore, KEY, Rules

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 108 - "planById"
Cohesion: 0.22
Nodes (12): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), Pricing (+4 more)

### Community 109 - "checks/index.ts"
Cohesion: 0.13
Nodes (23): browserDictionaries(), bytes(), checkWriting(), ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans() (+15 more)

### Community 110 - "length.ts"
Cohesion: 0.30
Nodes (11): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+3 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "registry.ts"
Cohesion: 0.15
Nodes (3): screenComponents, KEY, LessonSession

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "[id]/+server.ts"
Cohesion: 0.30
Nodes (10): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+2 more)

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "deckProgress.svelte.ts"
Cohesion: 0.15
Nodes (14): activity, deckProgress, DeckProgressStore, load(), persist(), ProgressMap, addDays(), INTERVAL_DAYS (+6 more)

### Community 119 - "QuizReport.svelte"
Cohesion: 0.18
Nodes (8): anyFailed, hasSpeaking, headline, level, numbers, pending, RecorderState, Take

### Community 120 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 121 - "Module G"
Cohesion: 0.33
Nodes (5): Authoring rules, Exams, Module G, Open, Sections

### Community 122 - "index.svelte.ts"
Cohesion: 0.10
Nodes (8): dictionaries, ar, Dictionary, DictionaryOverride, he, titlesAr, words, previous

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 126 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "feedback/speaking.ts"
Cohesion: 0.15
Nodes (13): cobe1Lessons, cobe2Lessons, cobe3Lessons, PhraseGroup, phraseGroups, CobeRubric, CobeLevel, CobePart (+5 more)

### Community 129 - "progressSync.svelte.ts"
Cohesion: 0.21
Nodes (9): MyPhrases, Item, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys() (+1 more)

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "score.svelte.ts"
Cohesion: 0.11
Nodes (12): primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), primaryAction(), KEY, LessonScore (+4 more)

### Community 132 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 134 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 138 - "lessonProgress.svelte.ts"
Cohesion: 0.17
Nodes (12): progressScope(), LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), lessonProgress, LessonProgressStore (+4 more)

### Community 140 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 143 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 146 - "server/supabase.ts"
Cohesion: 0.29
Nodes (9): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, noSession, SessionUser (+1 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (48): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+40 more)

### Community 148 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 153 - "book/+page.svelte"
Cohesion: 0.22
Nodes (3): d(), slot(), formattedDate

### Community 154 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 155 - "progress/+server.ts"
Cohesion: 0.46
Nodes (6): isSyncedKey(), mergeItems(), GET(), parseItems(), POST(), scope()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.18
Nodes (13): Plan, access, accessEnd(), accessUntil(), billingEnabled, CheckoutResult, completeOrder(), Coupon (+5 more)

### Community 158 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 159 - "withCobe"
Cohesion: 0.50
Nodes (4): planId(), withCobe(), setCobe(), #each()

### Community 160 - "[quizId]/+page.svelte"
Cohesion: 0.25
Nodes (4): row, rules, taken, tips

### Community 163 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 175 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 179 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 181 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **726 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+721 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `feedback/grade.ts`, `progressSync.svelte.ts`, `content-edit/api.ts`, `RulesStore`, `.refresh`, `ReviewNotesStore`, `scan.ts`, `RulesPanel.svelte`, `reviewNotes.svelte.ts`, `AccountSection.svelte`, `reminders.svelte.ts`, `Button.svelte`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `Bucket`, `LessonScreen`, `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `data.ts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `content/index.ts`, `EditModel`, `examEditModel.svelte.ts`, `snapshot-content.ts`, `registry.ts`, `scoring.ts`, `lesson-screens/types.ts`, `validate.ts`, `screenTypeNames.ts`, `session.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _726 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11231884057971014 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.09191919191919191 - nodes in this community are weakly interconnected._