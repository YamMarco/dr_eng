# Graph Report - testing  (2026-11-05)

## Corpus Check
- 521 files · ~478,955 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2484 nodes · 4972 edges · 198 communities (139 shown, 59 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 107 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d49f4c79`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- svelte/transition
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- miniMarkdown.ts
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
- editModel.svelte.ts
- graphify reference: query, path, explain
- mode.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- Md.svelte
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- apiFetch
- extraction-spec.md
- GraphEditor.svelte
- Speak.svelte
- scoring.ts
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- checkAuth
- [id]/+server.ts
- $app/paths
- LessonScreen
- takeHistory.ts
- db/schema.ts
- lessonProgress.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- llmGuard.ts
- (site)/+page.svelte
- Workflow
- examEditModel.svelte.ts
- hooks.server.ts
- ExamEditWorkspace.svelte
- rubrics/index.ts
- planById
- SlideStage.svelte
- EditHistory
- quizzes.ts
- deck/index.ts
- test
- speech.ts
- progress.ts
- settings/+page.svelte
- ClozePick.svelte
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- MarkdownInput.svelte
- server/grade.ts
- [quizId]/+page.svelte
- checks/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- validate.ts
- create-coupon.mjs
- measure-overflow.mjs
- auth.svelte.ts
- screenChecks.ts
- ActivityStore
- content
- checkout/+page.ts
- lib/finance.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- layer1.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- accounts.spec.ts
- activeField.svelte.ts
- score.svelte.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- QuizReport.svelte
- PassageBody.svelte
- AGENTS.md
- Rules
- storedJson.ts
- LessonRunner.svelte
- he.ts
- api/reminders/+server.ts
- ProgressSync
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- Recorder
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- AccountSection.svelte
- profile.svelte.ts
- index.svelte.ts
- mechanics.ts
- hydratable.md
- scripts
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- EditWorkspace.svelte
- personas.spec.ts
- feedback/types.ts
- @sveltejs/adapter-auto
- refund.ts
- acceptedAnswers.ts
- @sveltejs/kit
- WordImage.svelte
- Handoff: exam lock trusts the client's part count
- FeedbackButton.svelte
- cobe.test.ts
- render.md
- I18n
- moduleLocation.svelte.ts
- ProfileStore
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- checkout
- load.ts
- edit-words/+page.svelte
- edit-exam/+page.svelte
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- @axe-core/playwright
- DebugStore
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- @playwright/test
- auth/README.md
- examLock.ts
- dictionary-en-gb
- playwright.config.ts
- app/+layout.ts
- svelte
- [moduleId]/+layout.ts
- smoke.spec.ts
- @eslint/js
- drizzle-kit
- eslint
- eslint-plugin-svelte
- globals
- svelte-check
- @sveltejs/vite-plugin-svelte
- tailwindcss
- UI review
- @tailwindcss/typography
- @tailwindcss/vite
- @types/web-push
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- billing.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonNode` - 36 edges
4. `LessonScreen` - 32 edges
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 27 edges
7. `saveSynced()` - 23 edges
8. `scripts` - 21 edges
9. `EditModelLike` - 20 edges
10. `Rules` - 18 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (198 total, 59 thin omitted)

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
Nodes (7): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection(), LessonNode

### Community 5 - "miniMarkdown.ts"
Cohesion: 0.18
Nodes (16): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, ESCAPE, escapeText(), isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs() (+8 more)

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

### Community 17 - "editModel.svelte.ts"
Cohesion: 0.09
Nodes (22): LessonBucket, applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES (+14 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "mode.svelte.ts"
Cohesion: 0.15
Nodes (5): stripLineAttrs(), KEY, ScreenMode, gutter, lines

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 21 - "content/index.ts"
Cohesion: 0.11
Nodes (26): UNITS, c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons (+18 more)

### Community 22 - "Md.svelte"
Cohesion: 0.11
Nodes (9): active, checked, Option, optText(), withFeedback(), KEY, LessonSession, i() (+1 more)

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
Cohesion: 0.06
Nodes (32): AccessStore, ApiError, apiFetch(), toWavBase64(), PhraseGroup, phraseGroups, BLANK, ReviewNote (+24 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "Speak.svelte"
Cohesion: 0.33
Nodes (7): primaryAction(), reached, record(), seconds, share, stop(), toggle()

### Community 35 - "scoring.ts"
Cohesion: 0.20
Nodes (15): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect() (+7 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.12
Nodes (33): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY, examAdvice (+25 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.19
Nodes (21): isLimit(), writingRubricId, applyLength(), mechanicsCount(), check(), Checked, essayGrade(), essayPart() (+13 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER, GROUP_ZOOM (+14 more)

### Community 40 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 41 - "[id]/+server.ts"
Cohesion: 0.30
Nodes (10): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+2 more)

### Community 43 - "LessonScreen"
Cohesion: 0.12
Nodes (7): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 44 - "takeHistory.ts"
Cohesion: 0.19
Nodes (11): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+3 more)

### Community 45 - "db/schema.ts"
Cohesion: 0.20
Nodes (13): db, examAttempts, llmUsage, progress, pushSubscriptions, waitlist, sendPush(), authorized() (+5 more)

### Community 46 - "lessonProgress.svelte.ts"
Cohesion: 0.27
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "llmGuard.ts"
Cohesion: 0.06
Nodes (50): cobeVisible(), BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds() (+42 more)

### Community 50 - "(site)/+page.svelte"
Cohesion: 0.17
Nodes (4): focus(), homeMedia, Media, d

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 53 - "hooks.server.ts"
Cohesion: 0.19
Nodes (13): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+5 more)

### Community 54 - "ExamEditWorkspace.svelte"
Cohesion: 0.22
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 55 - "rubrics/index.ts"
Cohesion: 0.13
Nodes (16): CobeBand, CobeRubric, essayRubric, Rubric, RubricCriterion, writingRubrics, SpeakingVerdict, band (+8 more)

### Community 56 - "planById"
Cohesion: 0.17
Nodes (14): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+6 more)

### Community 57 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (11): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS (+3 more)

### Community 59 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (53): listA, listB, listC, listD, w(), eGlossAr, activeDecks(), Deck (+45 more)

### Community 61 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.17
Nodes (24): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+16 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.10
Nodes (9): EditStore, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus (+1 more)

### Community 65 - "ClozePick.svelte"
Cohesion: 0.14
Nodes (3): KEY, KEY, QuizAnswerSlot

### Community 66 - "content-edit/api.ts"
Cohesion: 0.33
Nodes (10): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+2 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "MarkdownInput.svelte"
Cohesion: 0.24
Nodes (7): htmlToMd(), pickIcon(), serialize(), sync(), HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, MAX_TEXT, ask(), block(), cleanMarks() (+18 more)

### Community 71 - "[quizId]/+page.svelte"
Cohesion: 0.09
Nodes (8): status(), ./$types, lockedUntil, lockedWhen, row, rules, taken, tips

### Community 72 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "validate.ts"
Cohesion: 0.18
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection(), LessonContent, countQuestions()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "auth.svelte.ts"
Cohesion: 0.09
Nodes (14): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+6 more)

### Community 78 - "screenChecks.ts"
Cohesion: 0.21
Nodes (11): validateExam(), MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck (+3 more)

### Community 82 - "lib/finance.ts"
Cohesion: 0.17
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

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
Nodes (38): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+30 more)

### Community 88 - "layer1.ts"
Cohesion: 0.14
Nodes (18): browserDictionaries(), bytes(), checkWriting(), ALLOWED, CONTRACTIONS, DictData, DictLoader, HYPHEN_PREFIXES (+10 more)

### Community 89 - "devDependencies"
Cohesion: 0.22
Nodes (9): dictionary-en, devDependencies, dictionary-en, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "accounts.spec.ts"
Cohesion: 0.18
Nodes (6): coupon, noSession, run, studentRoutes, TestUser, users

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.12
Nodes (31): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+23 more)

### Community 94 - "score.svelte.ts"
Cohesion: 0.10
Nodes (15): primaryAction(), announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), primaryAction() (+7 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): Bucket, clone(), ExamEditModel

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.18
Nodes (10): CurriculumModule, CurriculumSection, getUnitGroup(), modules, textSection, UnitGroup, unitGroups, wordsSection (+2 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.10
Nodes (19): activity, load(), WEEKLY_GOAL, deckProgress, DeckProgressStore, load(), persist(), ProgressMap (+11 more)

### Community 103 - "QuizReport.svelte"
Cohesion: 0.22
Nodes (7): anyFailed, closed, hasSpeaking, headline, level, numbers, pending

### Community 104 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "storedJson.ts"
Cohesion: 0.22
Nodes (3): storeItem(), ThemeMode, ThemeStore

### Community 108 - "LessonRunner.svelte"
Cohesion: 0.12
Nodes (4): reducedMotion, ./$types, next, seen

### Community 109 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 110 - "api/reminders/+server.ts"
Cohesion: 0.22
Nodes (12): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key (+4 more)

### Community 111 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.13
Nodes (14): Accounts on (`e2e/accounts.spec.ts`, `npm run e2e:accounts`), Break-it round 3: prompt injection on the real LLM, Claude-driven look at the app (phone, new student, screenshots by hand), COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs) (+6 more)

### Community 114 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.20
Nodes (6): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states

### Community 118 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 119 - "profile.svelte.ts"
Cohesion: 0.22
Nodes (10): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+2 more)

### Community 120 - "index.svelte.ts"
Cohesion: 0.09
Nodes (8): total(), pieces, open, dictionaries, groups, phrase(), words, previous

### Community 121 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 123 - "scripts"
Cohesion: 0.04
Nodes (44): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+36 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "feedback/types.ts"
Cohesion: 0.11
Nodes (26): gradeLesson(), postGrade(), applyFixes(), Corrected, Fix, FIX_TAGS, locateMarks(), mergeMarks() (+18 more)

### Community 132 - "refund.ts"
Cohesion: 0.29
Nodes (7): cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 133 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 138 - "FeedbackButton.svelte"
Cohesion: 0.13
Nodes (7): screenContext, captureScreen(), overlay(), SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 139 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 141 - "I18n"
Cohesion: 0.29
Nodes (3): dayPart, I18n, Profile

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.14
Nodes (12): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+4 more)

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (43): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+35 more)

### Community 150 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 151 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 152 - "edit-words/+page.svelte"
Cohesion: 0.33
Nodes (4): changed, invalidCount, saving, ./$types

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 168 - "examLock.ts"
Cohesion: 0.43
Nodes (5): ExamRef, RETAKE_WAIT_MS, assertExamOpen(), exempt(), recordExamPart()

### Community 174 - "[moduleId]/+layout.ts"
Cohesion: 0.67
Nodes (3): getModule(), load(), ./$types

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 217 - "billing.ts"
Cohesion: 0.12
Nodes (18): Plan, access, accessEnd(), accessUntil(), billingEnabled, CheckoutResult, completeOrder(), Coupon (+10 more)

## Knowledge Gaps
- **795 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+790 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **59 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEditModel` connect `ExamEditModel` to `LessonScreen`, `examEditModel.svelte.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `scoring.ts`, `EditModel`, `validate.ts`, `screenChecks.ts`, `editModel.svelte.ts`, `examEditModel.svelte.ts`, `content/index.ts`, `lesson-screens/types.ts`, `SlideStage.svelte`, `deck/index.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `content-edit/api.ts`, `feedback/types.ts`, `progressSync.svelte.ts`, `auth.svelte.ts`, `ProgressSync`, `editModel.svelte.ts`, `AccountSection.svelte`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _795 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte/transition` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._