# Graph Report - check_G  (2026-11-13)

## Corpus Check
- 539 files · ~499,518 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2585 nodes · 5173 edges · 208 communities (147 shown, 61 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `13096d86`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- liveLesson.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Mcq.svelte
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
- motion.ts
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
- ScreenPath
- takeHistory.ts
- db/schema.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- llmGuard.ts
- typos.ts
- Workflow
- MatchDefinitions.svelte
- hooks.server.ts
- stats.ts
- rubrics/index.ts
- withCobe
- openerLevels.ts
- editModel.svelte.ts
- quizzes.ts
- deck/index.ts
- test
- speech.ts
- progress.ts
- settings/+page.svelte
- RulesStore
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- rulesStore.svelte.ts
- server/grade.ts
- PassageBody.svelte
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- progressSync.svelte.ts
- create-coupon.mjs
- measure-overflow.mjs
- Speak.svelte
- validate.ts
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
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- accounts.spec.ts
- miniMarkdown.ts
- storedJson.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- api/reminders/+server.ts
- QuizReport.svelte
- saveSynced
- AGENTS.md
- Rules
- screenChecks.ts
- (site)/+page.svelte
- he.ts
- [id]/+server.ts
- feedback/types.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- RemindersStore
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- load.ts
- profile.svelte.ts
- index.svelte.ts
- markAllColors.ts
- hydratable.md
- scripts
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- mechanics.ts
- personas.spec.ts
- gradeExam.ts
- @sveltejs/adapter-auto
- refund.ts
- Md.svelte
- @sveltejs/kit
- Handoff: Zoom group lessons, testing
- Handoff: exam lock trusts the client's part count
- lastEngagement.svelte.ts
- AccountSection.svelte
- ProfileStore
- render.md
- screenshot.ts
- moduleLocation.svelte.ts
- lessonIcon.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- feedback/grade.ts
- checkout
- phraseBank.svelte.ts
- MarkdownInput.svelte
- DeckProgressStore
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- emailTypo.ts
- DebugStore
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- @playwright/test
- auth/README.md
- score.svelte.ts
- total
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- svelte
- access
- smoke.spec.ts
- Module G QA report
- @eslint/js
- payments.ts
- drizzle-kit
- eslint
- eslint-plugin-svelte
- dictionary-en
- svelte-check
- @sveltejs/vite-plugin-svelte
- tailwindcss
- UI review
- @tailwindcss/typography
- @tailwindcss/vite
- @types/web-push
- globals
- $app/paths
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- edit-exam/+page.svelte
- finance/+page.svelte
- dictionary-en-gb
- billing.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonNode` - 36 edges
4. `LessonScreen` - 32 edges
5. `apiFetch()` - 28 edges
6. `ScreenPath` - 28 edges
7. `saveSynced()` - 23 edges
8. `scripts` - 21 edges
9. `EditModelLike` - 20 edges
10. `Rules` - 18 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (208 total, 61 thin omitted)

### Community 0 - "liveLesson.ts"
Cohesion: 0.23
Nodes (14): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+6 more)

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
Cohesion: 0.08
Nodes (7): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection(), LessonScreen

### Community 5 - "Mcq.svelte"
Cohesion: 0.10
Nodes (5): KEY, KEY, ScreenMode, KEY, QuizAnswerSlot

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
Nodes (16): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+8 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "motion.ts"
Cohesion: 0.09
Nodes (6): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP, formattedDate

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (26): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+18 more)

### Community 21 - "content/index.ts"
Cohesion: 0.10
Nodes (32): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+24 more)

### Community 22 - "svelte/transition"
Cohesion: 0.08
Nodes (14): open, words, screenContext, previous, status(), lockedUntil, lockedWhen, row (+6 more)

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
Cohesion: 0.20
Nodes (12): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), fillFromScan() (+4 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.07
Nodes (14): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+6 more)

### Community 34 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 35 - "scoring.ts"
Cohesion: 0.22
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+5 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.15
Nodes (26): loadLesson(), getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY (+18 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (4): i(), TYPE_HE, issuesByNode(), optFeedback()

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (27): APP, charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER (+19 more)

### Community 40 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.15
Nodes (20): LessonRecording, LessonsInfo, LessonSlot, NAME_MAX, NAME_MIN, accessToken(), aliasEmail(), Meeting (+12 more)

### Community 43 - "ScreenPath"
Cohesion: 0.13
Nodes (3): EditModelLike, ScreenPath, LessonContent

### Community 44 - "takeHistory.ts"
Cohesion: 0.21
Nodes (11): delta, firstSeconds, newlyReached, isRecord(), Entry, openDb(), readStats(), recordTake() (+3 more)

### Community 45 - "db/schema.ts"
Cohesion: 0.17
Nodes (18): cronAuthorized(), db, examAttempts, llmUsage, orders, progress, pushSubscriptions, waitlist (+10 more)

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
Nodes (61): cobeVisible(), BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds() (+53 more)

### Community 50 - "typos.ts"
Cohesion: 0.18
Nodes (12): bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, HYPHEN_PREFIXES, loadSpellers(), sentenceStarts() (+4 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "MatchDefinitions.svelte"
Cohesion: 0.11
Nodes (8): active, checked, Option, optText(), withFeedback(), oi(), i(), item()

### Community 53 - "hooks.server.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 54 - "stats.ts"
Cohesion: 0.18
Nodes (10): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT (+2 more)

### Community 55 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (16): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+8 more)

### Community 56 - "withCobe"
Cohesion: 0.50
Nodes (4): planId(), withCobe(), setCobe(), #each()

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.14
Nodes (6): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections()

### Community 59 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (58): listA, listB, listC, listD, w(), eGlossAr, homeMeters, moduleSkills() (+50 more)

### Community 61 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.21
Nodes (20): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+12 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (11): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+3 more)

### Community 65 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 66 - "content-edit/api.ts"
Cohesion: 0.18
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "rulesStore.svelte.ts"
Cohesion: 0.33
Nodes (6): RuleLevel, getLesson(), ownerModule(), ruleChain(), RulesFile, load()

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, MAX_TEXT, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "Speak.svelte"
Cohesion: 0.18
Nodes (11): row(), groups, phrase(), primaryAction(), reached, record(), seconds, share (+3 more)

### Community 78 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 82 - "lib/finance.ts"
Cohesion: 0.17
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

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
Nodes (41): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, markAllCategorySchema, markAllSchema (+33 more)

### Community 89 - "devDependencies"
Cohesion: 0.22
Nodes (9): @axe-core/playwright, devDependencies, @axe-core/playwright, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

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
Cohesion: 0.06
Nodes (52): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+44 more)

### Community 94 - "storedJson.ts"
Cohesion: 0.22
Nodes (3): storeItem(), ThemeMode, ThemeStore

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): clone(), ExamEditModel, blankScreen()

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.11
Nodes (15): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+7 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.13
Nodes (14): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+6 more)

### Community 102 - "api/reminders/+server.ts"
Cohesion: 0.20
Nodes (13): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, POST(), DELETE(), endpoint (+5 more)

### Community 103 - "QuizReport.svelte"
Cohesion: 0.17
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, RecorderState (+1 more)

### Community 104 - "saveSynced"
Cohesion: 0.15
Nodes (14): activity, load(), WEEKLY_GOAL, progressScope(), deckProgress, load(), ProgressMap, LessonProgressStore (+6 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "screenChecks.ts"
Cohesion: 0.31
Nodes (10): markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems(), strings() (+2 more)

### Community 108 - "(site)/+page.svelte"
Cohesion: 0.20
Nodes (3): focus(), homeMedia, Media

### Community 109 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 110 - "[id]/+server.ts"
Cohesion: 0.33
Nodes (9): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+1 more)

### Community 111 - "feedback/types.ts"
Cohesion: 0.16
Nodes (16): EssayVerdict, ExamRef, ReadingItem, ReadingRequest, ReadingVerdict, SingleRequest, keywordMatch(), normalize() (+8 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.13
Nodes (14): Accounts on (`e2e/accounts.spec.ts`, `npm run e2e:accounts`), Break-it round 3: prompt injection on the real LLM, Claude-driven look at the app (phone, new student, screenshots by hand), COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs) (+6 more)

### Community 114 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.20
Nodes (6): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states

### Community 118 - "load.ts"
Cohesion: 0.50
Nodes (3): loaded, Loader, SECTIONS

### Community 119 - "profile.svelte.ts"
Cohesion: 0.13
Nodes (12): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+4 more)

### Community 120 - "index.svelte.ts"
Cohesion: 0.18
Nodes (3): pieces, dictionaries, d

### Community 121 - "markAllColors.ts"
Cohesion: 0.25
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 123 - "scripts"
Cohesion: 0.04
Nodes (44): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+36 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "gradeExam.ts"
Cohesion: 0.19
Nodes (20): writingRubricId, applyLength(), mechanicsCount(), Checked, essayGrade(), essayPart(), failed(), gradeExam() (+12 more)

### Community 132 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 133 - "Md.svelte"
Cohesion: 0.14
Nodes (4): gutter, lines, KEY, LessonSession

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 137 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 138 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (5): deleteAccount(), deleting, failed, signOut(), t

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 143 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (40): markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight (+32 more)

### Community 149 - "feedback/grade.ts"
Cohesion: 0.11
Nodes (25): ApiError, isLimit(), browserDictionaries(), checkWriting(), gradeLesson(), postGrade(), check(), issuesToMarks() (+17 more)

### Community 150 - "checkout"
Cohesion: 0.39
Nodes (5): BillingError, checkout(), checkoutBody(), POST(), POST()

### Community 152 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 168 - "score.svelte.ts"
Cohesion: 0.11
Nodes (14): primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity(), primaryAction(), primaryAction() (+6 more)

### Community 171 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 174 - "access"
Cohesion: 0.67
Nodes (3): access, billingEnabled, GET()

### Community 177 - "Module G QA report"
Cohesion: 0.50
Nodes (3): Findings, Grades, Module G QA report

### Community 181 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 195 - "$app/paths"
Cohesion: 0.08
Nodes (14): emails, access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote (+6 more)

### Community 217 - "billing.ts"
Cohesion: 0.18
Nodes (16): build(), defaultPlan(), planById(), accessEnd(), accessUntil(), CheckoutResult, completeOrder(), Coupon (+8 more)

## Knowledge Gaps
- **826 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+821 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **61 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `liveLesson.ts`, `GraphEditor.svelte`, `content-edit/api.ts`, `$app/paths`, `RulesStore`, `rulesStore.svelte.ts`, `settings/+page.svelte`, `AccountSection.svelte`, `progressSync.svelte.ts`, `RemindersStore`, `feedback/grade.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `EditModel` to `ExamEditModel`, `scoring.ts`, `SlideStage.svelte`, `examEditModel.svelte.ts`, `ScreenPath`, `screenChecks.ts`, `validate.ts`, `lesson-screens/types.ts`, `content/index.ts`, `editModel.svelte.ts`, `deck/index.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditWorkspace.svelte`, `ScreenPath`, `RulesPanel.svelte`, `content/index.ts`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _826 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0815686274509804 - nodes in this community are weakly interconnected._