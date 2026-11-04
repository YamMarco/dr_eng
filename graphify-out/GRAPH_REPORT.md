# Graph Report - dr_eng  (2026-11-04)

## Corpus Check
- 508 files · ~473,053 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2425 nodes · 4846 edges · 186 communities (140 shown, 46 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 105 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5dbdc23e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 1. Reading comprehension (grade-reading)
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- llmGuard.ts
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
- scripts
- graphify reference: query, path, explain
- examEditModel.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- typos.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rubrics/index.ts
- extraction-spec.md
- GraphEditor.svelte
- RulesPanel.svelte
- index.svelte.ts
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- RemindersStore
- LessonScreen
- profile.svelte.ts
- AppBar.svelte
- feedback/types.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- editModel.svelte.ts
- Workflow
- apiFetch
- llm.ts
- content-edit/api.ts
- RulesStore
- planById
- SlideStage.svelte
- EditHistory
- (site)/+page.svelte
- deck/index.ts
- takeHistory.ts
- speech.ts
- progress.ts
- settings/+page.svelte
- AccountSection.svelte
- checkAuth
- progressMerge.ts
- snippet.md
- MyPhrases
- server/grade.ts
- motion.ts
- server/supabase.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- ReviewNotesStore
- create-coupon.mjs
- measure-overflow.mjs
- auth.svelte.ts
- [id]/+server.ts
- ActivityStore
- content
- checkout/+page.ts
- [quizId]/+page.svelte
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- language.ts
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
- lessonProgress.svelte.ts
- Recorder
- lib/finance.ts
- AGENTS.md
- Rules
- checkout
- package.json
- PassageText.svelte
- progressSync.svelte.ts
- api/reminders/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- edit-exam/+page.svelte
- Submit → feedback framework
- fixtures.ts
- server/speaking.ts
- rulesStore.svelte.ts
- checks/index.ts
- validate.ts
- reviewNotes.svelte.ts
- hydratable.md
- dependencies
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- examLock.ts
- content-edit-files.test.ts
- Md.svelte
- @sveltejs/adapter-auto
- withCobe
- lessonIcon.ts
- @sveltejs/kit
- payments.ts
- Handoff: exam lock trusts the client's part count
- sectionThemes.ts
- dictionary-en-gb
- support.ts
- render.md
- screenshot.ts
- globals
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- routes/+layout.svelte
- @types/node
- @types/nspell
- typescript-eslint
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- @playwright/test
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- acceptedAnswers.ts
- auth/README.md
- app/+layout.ts
- svelte
- scan.ts
- progress/+server.ts
- UI review
- quizzes.ts
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- MatchPairs.svelte
- billing.ts

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
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (186 total, 46 thin omitted)

### Community 0 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

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
Cohesion: 0.09
Nodes (5): clone(), EditModel, swapLevels(), versions(), LessonNode

### Community 5 - "llmGuard.ts"
Cohesion: 0.24
Nodes (14): cobeVisible(), llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+6 more)

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
Cohesion: 0.27
Nodes (8): db, examAttempts, israelToday, llmUsage, progress, pushSubscriptions, waitlist, body

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+9 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 21 - "content/index.ts"
Cohesion: 0.12
Nodes (25): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+17 more)

### Community 22 - "typos.ts"
Cohesion: 0.22
Nodes (12): browserDictionaries(), bytes(), checkWriting(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers() (+4 more)

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
Cohesion: 0.14
Nodes (16): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+8 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (15): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+7 more)

### Community 35 - "index.svelte.ts"
Cohesion: 0.07
Nodes (10): WEEKLY_GOAL, full, ignite, open, dictionaries, groups, phrase(), words (+2 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.11
Nodes (35): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+27 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.13
Nodes (31): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, essayGrade() (+23 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+14 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 43 - "LessonScreen"
Cohesion: 0.13
Nodes (5): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen

### Community 44 - "profile.svelte.ts"
Cohesion: 0.13
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 45 - "AppBar.svelte"
Cohesion: 0.14
Nodes (4): dayPart, I18n, status(), ./$types

### Community 46 - "feedback/types.ts"
Cohesion: 0.17
Nodes (11): postGrade(), Layer1, Layer1Options, pieces, RuleSet, Feedback, GateReason, GradeRequest (+3 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.15
Nodes (21): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+13 more)

### Community 50 - "editModel.svelte.ts"
Cohesion: 0.18
Nodes (5): LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "apiFetch"
Cohesion: 0.18
Nodes (10): AccessStore, apiFetch(), toWavBase64(), ChatMode, ChatTurnReply, addChat(), chatCount(), ChatTurnError (+2 more)

### Community 53 - "llm.ts"
Cohesion: 0.20
Nodes (11): chat(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS, LlmRole (+3 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.18
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

### Community 55 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 56 - "planById"
Cohesion: 0.22
Nodes (12): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), Pricing (+4 more)

### Community 57 - "SlideStage.svelte"
Cohesion: 0.08
Nodes (17): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, cat(), MARK_ALL_DEFAULT (+9 more)

### Community 59 - "(site)/+page.svelte"
Cohesion: 0.17
Nodes (4): focus(), homeMedia, Media, d

### Community 60 - "deck/index.ts"
Cohesion: 0.06
Nodes (59): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+51 more)

### Community 61 - "takeHistory.ts"
Cohesion: 0.20
Nodes (11): delta, firstSeconds, newlyReached, isRecord(), Entry, openDb(), readStats(), recordTake() (+3 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.07
Nodes (46): activity, ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES (+38 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.11
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "AccountSection.svelte"
Cohesion: 0.18
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 66 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.47
Nodes (9): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), num(), Obj (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.10
Nodes (31): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, MAX_TEXT, ReadingRequest (+23 more)

### Community 71 - "motion.ts"
Cohesion: 0.10
Nodes (5): reducedMotion, formattedDate, ./$types, next, seen

### Community 72 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (14): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+6 more)

### Community 78 - "[id]/+server.ts"
Cohesion: 0.30
Nodes (10): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+2 more)

### Community 79 - "ActivityStore"
Cohesion: 0.29
Nodes (3): ActivityStore, dayKey(), load()

### Community 82 - "[quizId]/+page.svelte"
Cohesion: 0.11
Nodes (15): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+7 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.23
Nodes (17): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+9 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (41): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, markAllCategorySchema, markAllSchema (+33 more)

### Community 88 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): @axe-core/playwright, dictionary-en, drizzle-kit, eslint, @eslint/js, eslint-plugin-svelte, devDependencies, @axe-core/playwright (+17 more)

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
Nodes (51): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+43 more)

### Community 94 - "Speak.svelte"
Cohesion: 0.10
Nodes (12): KEY, ScreenMode, primaryAction(), reached, record(), seconds, share, stop() (+4 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.15
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "lessonProgress.svelte.ts"
Cohesion: 0.13
Nodes (14): UNITS, allLessons, lessonForUnits(), progressScope(), Engagement, lastEngagement, LastEngagementStore, load() (+6 more)

### Community 103 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 104 - "lib/finance.ts"
Cohesion: 0.24
Nodes (7): Currency, Cycle, cycleLabel, Expense, monthly(), expenses, GET()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 108 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 109 - "PassageText.svelte"
Cohesion: 0.17
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.27
Nodes (8): Item, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys(), writeLocal()

### Community 111 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.25
Nodes (7): COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs), Where to continue (next session), Your to-do (owner)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.06
Nodes (21): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+13 more)

### Community 117 - "server/speaking.ts"
Cohesion: 0.22
Nodes (11): SpeakingVerdict, chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest (+3 more)

### Community 118 - "rulesStore.svelte.ts"
Cohesion: 0.36
Nodes (5): RuleLevel, ownerModule(), ruleChain(), RulesFile, load()

### Community 119 - "checks/index.ts"
Cohesion: 0.14
Nodes (23): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+15 more)

### Community 120 - "validate.ts"
Cohesion: 0.12
Nodes (20): onMove(), onUp(), bucketLabel(), Issue, issuesByNode(), screenIssues(), validateExam(), validateSection() (+12 more)

### Community 121 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "examLock.ts"
Cohesion: 0.60
Nodes (4): ExamRef, assertExamOpen(), exempt(), recordExamPart()

### Community 129 - "content-edit-files.test.ts"
Cohesion: 0.40
Nodes (3): f(), files, lib

### Community 130 - "Md.svelte"
Cohesion: 0.07
Nodes (8): active, checked, KEY, LessonScore, KEY, LessonSession, i(), item()

### Community 132 - "withCobe"
Cohesion: 0.50
Nodes (4): planId(), withCobe(), setCobe(), #each()

### Community 133 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 135 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 139 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (36): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+28 more)

### Community 149 - "routes/+layout.svelte"
Cohesion: 0.10
Nodes (3): DebugStore, ThemeMode, ThemeStore

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 174 - "scan.ts"
Cohesion: 0.32
Nodes (6): ApiError, fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 181 - "progress/+server.ts"
Cohesion: 0.46
Nodes (6): isSyncedKey(), mergeItems(), GET(), parseItems(), POST(), scope()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 191 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 210 - "MatchPairs.svelte"
Cohesion: 0.15
Nodes (13): primaryAction(), announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), primaryAction() (+5 more)

### Community 217 - "billing.ts"
Cohesion: 0.15
Nodes (15): Plan, access, accessEnd(), accessUntil(), billingEnabled, CheckoutResult, completeOrder(), Coupon (+7 more)

## Knowledge Gaps
- **777 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+772 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **46 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `AccountSection.svelte`, `ReviewNotesStore`, `RemindersStore`, `auth.svelte.ts`, `feedback/types.ts`, `scan.ts`, `progressSync.svelte.ts`, `RulesStore`, `content-edit/api.ts`, `rulesStore.svelte.ts`, `reviewNotes.svelte.ts`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `data.ts`, `ExamEditWorkspace.svelte`, `LessonScreen`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `editModel.svelte.ts`, `examEditModel.svelte.ts`, `lesson-screens/types.ts`, `content/index.ts`, `validate.ts`, `SlideStage.svelte`, `deck/index.ts`, `progress.ts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _777 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `1. Reading comprehension (grade-reading)` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._