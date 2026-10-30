# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 465 files · ~443,709 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2246 nodes · 4481 edges · 165 communities (115 shown, 50 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8676cf15`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lesson-screens/types.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- index.svelte.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- data.ts
- score.svelte.ts
- progress.ts
- AppBar.svelte
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
- db/schema.ts
- billing.ts
- plans.ts
- deck/index.ts
- scoring.ts
- profile.svelte.ts
- LessonScreen
- lib/kanban.ts
- gradeExam.ts
- MatchDefinitions.svelte
- writingLint.ts
- curriculum.ts
- SlideStage.svelte
- scripts
- Workflow
- [id]/+server.ts
- localize.svelte.ts
- llmGuard.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- saveSynced
- package.json
- RulesStore
- lessonPath.ts
- apiFetch
- DebugStore
- progressSync.svelte.ts
- mechanics.ts
- AccountSection.svelte
- snippet.md
- content-edit/+server.ts
- feedback/types.ts
- finishNodeAndContinue
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- typos.ts
- create-coupon.mjs
- measure-overflow.mjs
- quizzes.ts
- theme.svelte.ts
- support.ts
- content
- checkout/+page.ts
- PassageBody.svelte
- Material
- registry.ts
- e-1.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- scrollLock.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- lessonIcon.ts
- activeField.svelte.ts
- sectionThemes.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- rubrics/index.ts
- Platform: web, mobile, accounts
- submitToLlm
- edit-exam/+page.svelte
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- Handoff: support email (receive + send as support@engup.co.il)
- edit-words/+page.svelte
- screenTypeNames.ts
- checks/index.ts
- content-i18n.mjs
- EditHistory
- Submit → feedback framework
- fillFromScan
- svelte/transition
- hydratable.md
- dependencies
- inspect.md
- vercel.json
- auth.svelte.ts
- speech.ts
- Mcq.svelte
- Speak.svelte
- eslint-plugin-svelte
- Recorder
- render.md
- svelte
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
- `post()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/access.svelte.ts → front/src/lib/api.ts

## Import Cycles
- None detected.

## Communities (165 total, 50 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+19 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.24
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

### Community 10 - "index.svelte.ts"
Cohesion: 0.08
Nodes (11): pieces, dictionaries, anyFailed, closed, hasSpeaking, headline, level, numbers (+3 more)

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
Cohesion: 0.10
Nodes (25): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+17 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "data.ts"
Cohesion: 0.08
Nodes (23): ContinueItem, EXAM_READY, examAdvice, isWritingLesson(), lessonStats(), lessonSubtitle(), moduleHook, Progress (+15 more)

### Community 20 - "score.svelte.ts"
Cohesion: 0.12
Nodes (10): primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), KEY, LessonScore, recordAnswer() (+2 more)

### Community 21 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 22 - "AppBar.svelte"
Cohesion: 0.12
Nodes (7): trailing(), status(), formattedDate, row, rules, taken, tips

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
Cohesion: 0.10
Nodes (25): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+17 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "db/schema.ts"
Cohesion: 0.12
Nodes (22): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, isPushEndpoint() (+14 more)

### Community 38 - "billing.ts"
Cohesion: 0.14
Nodes (20): Plan, accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+12 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (33): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+25 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (65): listA, listB, listC, listD, w(), wordId(), eGlossAr, SKILLS (+57 more)

### Community 41 - "scoring.ts"
Cohesion: 0.20
Nodes (14): primaryAction(), FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades() (+6 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (9): LessonBucket, screenList(), Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES (+1 more)

### Community 44 - "lib/kanban.ts"
Cohesion: 0.12
Nodes (18): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+10 more)

### Community 45 - "gradeExam.ts"
Cohesion: 0.12
Nodes (34): browserDictionaries(), checkWriting(), applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked (+26 more)

### Community 46 - "MatchDefinitions.svelte"
Cohesion: 0.12
Nodes (7): active, checked, focus(), KEY, QuizAnswerSlot, homeMedia, Media

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 49 - "SlideStage.svelte"
Cohesion: 0.05
Nodes (37): onMove(), onUp(), i(), htmlToMd(), pickIcon(), serialize(), sync(), bucketLabel() (+29 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "[id]/+server.ts"
Cohesion: 0.23
Nodes (14): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+6 more)

### Community 53 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.24
Nodes (12): access, billingEnabled, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+4 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (45): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+37 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (10): addExam(), errorCount, exit(), issues, issuesFor, openExam(), playQuiz, saveMsg (+2 more)

### Community 59 - "saveSynced"
Cohesion: 0.12
Nodes (14): activity, load(), WEEKLY_GOAL, LastEngagementStore, load(), LessonProgressStore, load(), persist() (+6 more)

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 62 - "lessonPath.ts"
Cohesion: 0.20
Nodes (16): getLessonsBySection(), moduleSections(), progressScope(), continueFrom(), latestEngagement(), lessonsInOrder(), moduleRoute(), moduleSections() (+8 more)

### Community 63 - "apiFetch"
Cohesion: 0.05
Nodes (29): AccessStore, apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, ReviewNotesStore, addChat() (+21 more)

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (22): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+14 more)

### Community 66 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 67 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.09
Nodes (42): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), emit(), extractArrayLiteral() (+34 more)

### Community 70 - "feedback/types.ts"
Cohesion: 0.10
Nodes (35): writingRubricId, CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest (+27 more)

### Community 71 - "finishNodeAndContinue"
Cohesion: 0.31
Nodes (10): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+2 more)

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "typos.ts"
Cohesion: 0.25
Nodes (9): bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers(), sentenceStarts(), typoIssues() (+1 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "quizzes.ts"
Cohesion: 0.20
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, QuizBase (+2 more)

### Community 79 - "support.ts"
Cohesion: 0.29
Nodes (3): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTERS_GROUP

### Community 82 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "registry.ts"
Cohesion: 0.11
Nodes (6): stripLineAttrs(), gutter, lines, screenComponents, KEY, LessonSession

### Community 85 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.08
Nodes (43): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+35 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "rubrics/index.ts"
Cohesion: 0.13
Nodes (16): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+8 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 109 - "edit-words/+page.svelte"
Cohesion: 0.33
Nodes (4): changed, invalidCount, saving, ./$types

### Community 111 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 119 - "svelte/transition"
Cohesion: 0.11
Nodes (4): ./$types, next, seen, item()

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "auth.svelte.ts"
Cohesion: 0.07
Nodes (15): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+7 more)

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "Mcq.svelte"
Cohesion: 0.11
Nodes (11): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+3 more)

### Community 132 - "Speak.svelte"
Cohesion: 0.16
Nodes (15): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Entry (+7 more)

### Community 139 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (25): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+17 more)

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 177 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **708 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+703 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **50 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `progressSync.svelte.ts`, `AccountSection.svelte`, `content-edit/api.ts`, `gradeExam.ts`, `RulesPanel.svelte`, `RulesStore`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `content/index.ts`, `LessonScreen`, `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `lessonPath.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `TitleEdits` connect `TitleEdits` to `examEditModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _708 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.09080841638981174 - nodes in this community are weakly interconnected._