# Graph Report - dr_eng  (2026-11-04)

## Corpus Check
- 508 files · ~472,315 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2421 nodes · 4838 edges · 180 communities (132 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 105 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9f9df9b7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- billing.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- db/schema.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- Md.svelte
- graphify reference: query, path, explain
- WordImage.svelte
- lesson-screens/types.ts
- content/index.ts
- llmGuard.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rubrics/index.ts
- extraction-spec.md
- GraphEditor.svelte
- RulesPanel.svelte
- [quizId]/+page.svelte
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- apiFetch
- LessonScreen
- profile.svelte.ts
- 1. Reading comprehension (grade-reading)
- feedback/types.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- planById
- scripts
- Workflow
- auth.svelte.ts
- chatSpeaking.ts
- content-edit/api.ts
- rulesStore.svelte.ts
- mode.svelte.ts
- SlideStage.svelte
- EditHistory
- (site)/+page.svelte
- deck/index.ts
- takeHistory.ts
- speech.ts
- stats.ts
- settings/+page.svelte
- motion.ts
- checkAuth
- MatchDefinitions.svelte
- snippet.md
- saveSynced
- server/grade.ts
- svelte/transition
- server/supabase.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- scoring.ts
- create-coupon.mjs
- measure-overflow.mjs
- $app/paths
- [id]/+server.ts
- lessonProgress.svelte.ts
- content
- checkout/+page.ts
- localize.svelte.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- length.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- cron/reminders/+server.ts
- miniMarkdown.ts
- Speak.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- feedback/rules.ts
- QuizReport.svelte
- lib/finance.ts
- AGENTS.md
- Rules
- quote/+server.ts
- index.svelte.ts
- PassageText.svelte
- progressSync.svelte.ts
- api/reminders/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- edit-exam/+page.svelte
- Submit → feedback framework
- fixtures.ts
- language.ts
- content/rules.ts
- checks/index.ts
- validate.ts
- I18n
- hydratable.md
- dependencies
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- ProfileStore
- EditWorkspace.svelte
- score.svelte.ts
- @sveltejs/adapter-auto
- edit-words/+page.svelte
- lessonIcon.ts
- @sveltejs/kit
- progress.ts
- Handoff: exam lock trusts the client's part count
- sectionThemes.ts
- dictionary-en-gb
- screenshot.ts
- render.md
- eslint-config-prettier
- prettier-plugin-svelte
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- routes/+layout.svelte
- typescript
- UX principles
- api.spec.ts
- package.json
- @playwright/test
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- acceptedAnswers.ts
- auth/README.md
- @types/nspell
- typescript-eslint
- @eslint/js
- app/+layout.ts
- svelte
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
10. `scripts` - 17 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `applyBelow()` --calls--> `ownKeys()`  [EXTRACTED]
  front/src/lib/content-edit/RulesPanel.svelte → front/src/lib/feedback/rules.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte

## Import Cycles
- None detected.

## Communities (180 total, 48 thin omitted)

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
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "billing.ts"
Cohesion: 0.14
Nodes (19): Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, checkout(), CheckoutResult (+11 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "db/schema.ts"
Cohesion: 0.18
Nodes (13): RETAKE_WAIT_MS, db, coupons, examAttempts, llmUsage, orders, progress, pushSubscriptions (+5 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "Md.svelte"
Cohesion: 0.13
Nodes (6): Option, optText(), withFeedback(), KEY, LessonSession, i()

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 21 - "content/index.ts"
Cohesion: 0.08
Nodes (34): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+26 more)

### Community 22 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): cobeVisible(), israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+8 more)

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

### Community 34 - "RulesPanel.svelte"
Cohesion: 0.15
Nodes (12): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+4 more)

### Community 35 - "[quizId]/+page.svelte"
Cohesion: 0.07
Nodes (11): status(), formattedDate, lockedUntil, lockedWhen, row, rules, taken, tips (+3 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.13
Nodes (32): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), SKILLS, continueFrom(), ContinueItem, EXAM_READY (+24 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.12
Nodes (34): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked (+26 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (21): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+13 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.22
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "apiFetch"
Cohesion: 0.07
Nodes (21): AccessStore, ApiError, apiFetch(), toWavBase64(), uploadImage(), BLANK, ReviewNote, reviewNotes (+13 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (9): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+1 more)

### Community 44 - "profile.svelte.ts"
Cohesion: 0.20
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "feedback/types.ts"
Cohesion: 0.16
Nodes (10): pieces, EssayVerdict, ExamRef, Feedback, LessonVerdict, MechanicsCount, ReadingItem, ReadingRequest (+2 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "planById"
Cohesion: 0.17
Nodes (15): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+7 more)

### Community 50 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+9 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "auth.svelte.ts"
Cohesion: 0.11
Nodes (17): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, confirming (+9 more)

### Community 53 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (43): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+35 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.38
Nodes (9): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+1 more)

### Community 55 - "rulesStore.svelte.ts"
Cohesion: 0.24
Nodes (4): RulesStore, clearBelow(), ownKeys(), Rules

### Community 56 - "mode.svelte.ts"
Cohesion: 0.13
Nodes (4): KEY, ScreenMode, KEY, QuizAnswerSlot

### Community 57 - "SlideStage.svelte"
Cohesion: 0.09
Nodes (13): onMove(), onUp(), i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE (+5 more)

### Community 59 - "(site)/+page.svelte"
Cohesion: 0.17
Nodes (4): focus(), homeMedia, Media, d

### Community 60 - "deck/index.ts"
Cohesion: 0.06
Nodes (60): listA, listB, listC, listD, w(), wordId(), eGlossAr, deckProgress (+52 more)

### Community 61 - "takeHistory.ts"
Cohesion: 0.18
Nodes (12): delta, firstSeconds, newlyReached, isRecord(), Entry, openDb(), readStats(), recordTake() (+4 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "stats.ts"
Cohesion: 0.12
Nodes (18): allQuizNodes, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes (+10 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (11): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+3 more)

### Community 66 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 67 - "MatchDefinitions.svelte"
Cohesion: 0.25
Nodes (3): active, checked, item()

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "saveSynced"
Cohesion: 0.15
Nodes (10): ChatTurnReply, addChat(), chatCount(), ChatTurnError, Engagement, lastEngagement, LastEngagementStore, load() (+2 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, GradeRequest, MAX_TEXT, ask(), block() (+19 more)

### Community 71 - "svelte/transition"
Cohesion: 0.10
Nodes (11): emails, i(), open, words, screenContext, previous, SUPPORT_EMAIL, SUPPORT_WHATSAPP (+3 more)

### Community 72 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "scoring.ts"
Cohesion: 0.21
Nodes (14): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, applyGrades() (+6 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "[id]/+server.ts"
Cohesion: 0.30
Nodes (10): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+2 more)

### Community 79 - "lessonProgress.svelte.ts"
Cohesion: 0.12
Nodes (13): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, lessonProgress, LessonProgressStore, load() (+5 more)

### Community 82 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.16
Nodes (22): emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq(), patchGlosses() (+14 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+30 more)

### Community 88 - "length.ts"
Cohesion: 0.30
Nodes (11): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+3 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): @axe-core/playwright, dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, @axe-core/playwright, dictionary-en (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "cron/reminders/+server.ts"
Cohesion: 0.27
Nodes (10): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+2 more)

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.06
Nodes (54): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+46 more)

### Community 94 - "Speak.svelte"
Cohesion: 0.33
Nodes (7): primaryAction(), reached, record(), seconds, share, stop(), toggle()

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.08
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizPart

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "feedback/rules.ts"
Cohesion: 0.20
Nodes (5): KEY, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet

### Community 103 - "QuizReport.svelte"
Cohesion: 0.13
Nodes (10): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, Recorder (+2 more)

### Community 104 - "lib/finance.ts"
Cohesion: 0.24
Nodes (7): Currency, Cycle, cycleLabel, Expense, monthly(), expenses, GET()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 108 - "index.svelte.ts"
Cohesion: 0.11
Nodes (3): dictionaries, groups, phrase()

### Community 109 - "PassageText.svelte"
Cohesion: 0.15
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (22): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+14 more)

### Community 111 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.29
Nodes (6): COBE (parked, not tested), Fixed, Fixed: break-it round, Handoff: test findings (from the testing plan runs), Where to continue (next session), Your to-do (owner)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.06
Nodes (20): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+12 more)

### Community 117 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 118 - "content/rules.ts"
Cohesion: 0.33
Nodes (6): ownerModule(), ruleChain(), RulesFile, sectionMeta, SectionMeta, load()

### Community 119 - "checks/index.ts"
Cohesion: 0.12
Nodes (26): browserDictionaries(), bytes(), checkWriting(), ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans() (+18 more)

### Community 120 - "validate.ts"
Cohesion: 0.17
Nodes (16): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), checkScreen() (+8 more)

### Community 121 - "I18n"
Cohesion: 0.22
Nodes (3): dayPart, I18n, ./$types

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 130 - "score.svelte.ts"
Cohesion: 0.10
Nodes (15): primaryAction(), announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), primaryAction() (+7 more)

### Community 132 - "edit-words/+page.svelte"
Cohesion: 0.40
Nodes (3): changed, invalidCount, saving

### Community 133 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 135 - "progress.ts"
Cohesion: 0.25
Nodes (18): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+10 more)

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (37): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+29 more)

### Community 149 - "routes/+layout.svelte"
Cohesion: 0.12
Nodes (3): DebugStore, ThemeMode, ThemeStore

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
- **775 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+770 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `saveSynced`, `gradeExam.ts`, `progressSync.svelte.ts`, `auth.svelte.ts`, `content-edit/api.ts`, `rulesStore.svelte.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `EditModel`, `data.ts`, `LessonScreen`, `content-edit/api.ts`, `rulesStore.svelte.ts`, `validate.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `he` connect `fixtures.ts` to `index.svelte.ts`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _775 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08233117483811286 - nodes in this community are weakly interconnected._