# Graph Report - dr_eng  (2026-11-28)

## Corpus Check
- 562 files · ~514,788 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2759 nodes · 5505 edges · 199 communities (148 shown, 51 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a569f6c3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- examLock.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- zoom.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- miniMarkdown.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- activeField.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- hooks.server.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- curriculum.ts
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- deck/index.ts
- billing.ts
- WritingTask.svelte
- progress.ts
- api/reminders/+server.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- LessonScreen
- rubrics/index.ts
- grade/+server.ts
- llm.ts
- writingLint.ts
- progressSync.svelte.ts
- chatSpeaking.ts
- dependencies
- Workflow
- onSyncedChange
- submitToLlm
- server/speaking.ts
- [quizId]/+page.svelte
- takeHistory.ts
- refund.ts
- TitleEdits
- lessonProgress.svelte.ts
- WordImage.svelte
- Policies: legal and billing
- speech.ts
- server/kanban.ts
- reminders.svelte.ts
- data.ts
- quizzes.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- (site)/+page.svelte
- LessonRunner.svelte
- editModel.svelte.ts
- scan.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- textColors.ts
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- 5-Point Bagrut Handbook (February 2025)
- content
- checkout/+page.ts
- apiFetch
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- SlideStage.svelte
- llmGuard.ts
- accounts.spec.ts
- await-expressions.md
- fixtures.ts
- COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)
- lib/finance.ts
- attach.md
- ExamEditModel
- screenshot.ts
- .mcp.json
- content-edit/api.ts
- Platform: web, mobile, accounts
- feedback/types.ts
- eslint-config-prettier
- activity.svelte.ts
- AGENTS.md
- Rules
- QuizRunner.svelte
- ExamEditWorkspace.svelte
- test
- content-i18n.mjs
- Submit → feedback framework
- he.ts
- ReviewNotesStore
- Breakdown of criteria with further caveats and explanations
- hydratable.md
- scripts
- inspect.md
- vercel.json
- scoring.ts
- DebugStore
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- validate.ts
- personas.spec.ts
- getDecks
- render.md
- screenChecks.ts
- svelte/transition
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- routes/+layout.svelte
- package.json
- EditHistory
- load.ts
- RemindersStore
- UX principles
- api.spec.ts
- acceptedAnswers.ts
- @types/nspell
- brand.md
- auth/README.md
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- deckProgress.svelte.ts
- Recorder
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- storeItem
- emailTypo.ts
- svelte-check
- Speak.svelte
- Module G - guidelines and table of specifications
- UI review
- schools/+page.ts
- Module C - guidelines and table of specifications
- @types/web-push
- Opener.svelte
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte
- lessonIcon.ts
- sectionThemes.ts
- index.svelte.ts
- dictionary-en
- svelte
- @sveltejs/kit
- @tailwindcss/forms
- @tailwindcss/typography
- typescript

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
10. `QuizNode` - 19 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/dashboard/+server.ts → front/src/lib/content-edit/auth.ts
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

## Communities (199 total, 51 thin omitted)

### Community 0 - "examLock.ts"
Cohesion: 0.29
Nodes (8): ExamRef, PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt(), openAttempt(), saveAttempt()

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.09
Nodes (20): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+12 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection()

### Community 5 - "zoom.ts"
Cohesion: 0.17
Nodes (16): LessonRecording, LessonSlot, cronAuthorized(), orders, accessToken(), aliasEmail(), Meeting, meetingPath() (+8 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "miniMarkdown.ts"
Cohesion: 0.11
Nodes (24): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+16 more)

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
Cohesion: 0.09
Nodes (23): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+15 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.03
Nodes (54): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+46 more)

### Community 21 - "content/index.ts"
Cohesion: 0.10
Nodes (32): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+24 more)

### Community 22 - "hooks.server.ts"
Cohesion: 0.18
Nodes (14): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, accountsEnabled, adminClient() (+6 more)

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.09
Nodes (19): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+11 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 30 - "curriculum.ts"
Cohesion: 0.05
Nodes (36): getLesson(), cache, ensureLoaded(), loaders, loading, localizeContent(), Table, translate() (+28 more)

### Community 31 - "checkAuth"
Cohesion: 0.22
Nodes (18): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+10 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "deck/index.ts"
Cohesion: 0.09
Nodes (45): listA, listB, listC, listD, w(), eGlossAr, Deck, decks (+37 more)

### Community 35 - "billing.ts"
Cohesion: 0.11
Nodes (26): cobeVisible(), Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, BillingError (+18 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.18
Nodes (24): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+16 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.16
Nodes (16): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay(), israelHour() (+8 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (31): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+23 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.15
Nodes (27): isLimit(), readingDeductions(), applyLength(), mechanicsCount(), gradeLesson(), Checked, essayGrade(), essayPart() (+19 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.07
Nodes (43): bytes(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+35 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.16
Nodes (21): addToCalendar(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonsInfo (+13 more)

### Community 43 - "LessonScreen"
Cohesion: 0.18
Nodes (10): LessonScreen, cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, IdentifiedScreen, QuizKind, QuizOptions (+2 more)

### Community 44 - "rubrics/index.ts"
Cohesion: 0.10
Nodes (22): ApiError, toWavBase64(), PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric (+14 more)

### Community 45 - "grade/+server.ts"
Cohesion: 0.07
Nodes (42): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, moduleId, ModuleRules, CONTENT_TAGS, FATAL_TAGS (+34 more)

### Community 46 - "llm.ts"
Cohesion: 0.22
Nodes (11): chat(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "progressSync.svelte.ts"
Cohesion: 0.20
Nodes (8): MyPhrases, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys(), writeLocal()

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.11
Nodes (26): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+18 more)

### Community 50 - "dependencies"
Cohesion: 0.10
Nodes (21): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+13 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "onSyncedChange"
Cohesion: 0.13
Nodes (8): Engagement, lastEngagement, LastEngagementStore, load(), load(), load(), ProfileStore, onSyncedChange()

### Community 54 - "server/speaking.ts"
Cohesion: 0.24
Nodes (10): chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 55 - "[quizId]/+page.svelte"
Cohesion: 0.18
Nodes (6): lockedUntil, lockedWhen, row, rules, taken, tips

### Community 56 - "takeHistory.ts"
Cohesion: 0.31
Nodes (8): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), takeKey(), TakeStats

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 59 - "lessonProgress.svelte.ts"
Cohesion: 0.26
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 61 - "Policies: legal and billing"
Cohesion: 0.33
Nodes (5): Accessibility, Billing, Facts the texts must match, Open (owner), Policies: legal and billing

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "server/kanban.ts"
Cohesion: 0.30
Nodes (12): kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, jsonBody(), DELETE(), PATCH() (+4 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.12
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "data.ts"
Cohesion: 0.15
Nodes (28): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY (+20 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "(site)/+page.svelte"
Cohesion: 0.13
Nodes (6): COBE_OPEN, focus(), i(), homeMedia, Media, d

### Community 70 - "LessonRunner.svelte"
Cohesion: 0.12
Nodes (3): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP

### Community 71 - "editModel.svelte.ts"
Cohesion: 0.09
Nodes (9): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections() (+1 more)

### Community 72 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (29): @axe-core/playwright, dictionary-en-gb, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, @axe-core/playwright, dictionary-en-gb (+21 more)

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

### Community 82 - "apiFetch"
Cohesion: 0.15
Nodes (10): AccessStore, apiFetch(), uploadImage(), BLANK, ReviewNote, reviewNotes, editFetch(), stored() (+2 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.14
Nodes (24): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+16 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (39): autoCheck, clozePickSchema, dir, index, lineNumbers, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+31 more)

### Community 88 - "SlideStage.svelte"
Cohesion: 0.11
Nodes (12): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, issuesByNode(), cat() (+4 more)

### Community 89 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+8 more)

### Community 90 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.13
Nodes (9): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states, app (+1 more)

### Community 93 - "COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)"
Cohesion: 0.14
Nodes (14): COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points), Dates (Winter - Summer 2027), Deductions (same for 4 and 5 points), Further guidelines, General guidelines, Length of answer - Part B only, Multiple files, Part A - Spoken production: personal response (25 points) (+6 more)

### Community 94 - "lib/finance.ts"
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizNode

### Community 100 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.11
Nodes (17): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+9 more)

### Community 102 - "feedback/types.ts"
Cohesion: 0.16
Nodes (18): browserDictionaries(), checkWriting(), postGrade(), check(), issuesToMarks(), Layer1, Layer1Options, runLayer1() (+10 more)

### Community 104 - "activity.svelte.ts"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 105 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "QuizRunner.svelte"
Cohesion: 0.06
Nodes (20): total(), slot(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, i(), footerLabel (+12 more)

### Community 109 - "ExamEditWorkspace.svelte"
Cohesion: 0.12
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 110 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 118 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.18
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (8), General comments, Language use (16), Mechanics (6), Module G (16582) - Writing Rubric, Vocabulary (10)

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "scoring.ts"
Cohesion: 0.12
Nodes (26): labelled(), openAnswers(), ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect() (+18 more)

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.26
Nodes (9): db, examAttempts, llmUsage, progress, pushSubscriptions, waitlist, zoomRegistrants, GET() (+1 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 138 - "getDecks"
Cohesion: 0.17
Nodes (14): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon(), nextMilestone() (+6 more)

### Community 141 - "screenChecks.ts"
Cohesion: 0.21
Nodes (11): MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+3 more)

### Community 143 - "svelte/transition"
Cohesion: 0.06
Nodes (27): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+19 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (37): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+29 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 154 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 155 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 168 - "Module C (16382) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module C (16382) - Answer Key, Summer 2026, Moed B, Part I: Written reception - A Challenge for Humanoid Robots, Part I: Written reception - A Challenge for Humanoid Robots, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 169 - "Module E (16471) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module E (16471) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Communicating with Emojis, Part I: Written reception - Communicating with Emojis, Part II: Lexical knowledge (vocabulary), Part II: Lexical knowledge (vocabulary), Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 171 - "Module G (16582) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module G (16582) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 173 - "deckProgress.svelte.ts"
Cohesion: 0.27
Nodes (5): deckProgress, DeckProgressStore, load(), persist(), ProgressMap

### Community 179 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.25
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (10), General comments, Language use (8), Mechanics (4), Module C (016382) - Writing Rubric, Vocabulary (8)

### Community 181 - "Rubric for 4-Point Literature (Module D)"
Cohesion: 0.25
Nodes (7): Content (60 points), Content (60 points), Language, B1 level (40 points), Language, B1 level (40 points), Rubric for 4-Point Literature (Module D), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 182 - "Rubric for 5-Point Literature (Module F)"
Cohesion: 0.25
Nodes (7): Content (50 points), Content (50 points), Language, B2 level (50 points), Language, B2 level (50 points), Rubric for 5-Point Literature (Module F), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 185 - "storeItem"
Cohesion: 0.23
Nodes (4): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeStore

### Community 186 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 188 - "Speak.svelte"
Cohesion: 0.13
Nodes (11): primaryAction(), reached, record(), seconds, share, stop(), toggle(), delta (+3 more)

### Community 189 - "Module G - guidelines and table of specifications"
Cohesion: 0.40
Nodes (5): Module G - guidelines and table of specifications, Module G writing rubric, Reading comprehension, The English Academization Program, Writing

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 192 - "Module C - guidelines and table of specifications"
Cohesion: 0.50
Nodes (4): Module C - guidelines and table of specifications, Module C writing rubric, Reading comprehension, Writing

### Community 208 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 211 - "index.svelte.ts"
Cohesion: 0.06
Nodes (19): pieces, open, dictionaries, row(), groups, phrase(), words, anyFailed (+11 more)

## Knowledge Gaps
- **884 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+879 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **51 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `he` connect `test` to `personas.spec.ts`, `index.svelte.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `scoring.ts`, `ExamEditModel`, `deck/index.ts`, `EditModel`, `editModel.svelte.ts`, `validate.ts`, `screenChecks.ts`, `lesson-screens/types.ts`, `content/index.ts`, `SlideStage.svelte`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `reminders.svelte.ts`, `content-edit/api.ts`, `feedback/types.ts`, `scan.ts`, `rubrics/index.ts`, `svelte/transition`, `progressSync.svelte.ts`, `RulesPanel.svelte`, `chatSpeaking.ts`, `RemindersStore`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _884 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08615384615384615 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08081632653061224 - nodes in this community are weakly interconnected._