# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 465 files · ~443,597 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2245 nodes · 4481 edges · 167 communities (115 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4609030e`
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
- QuizReport.svelte
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- progress.ts
- miniMarkdown.ts
- stats.ts
- index.svelte.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- settings/+page.svelte
- WritingTask.svelte
- lib/kanban.ts
- rubrics/index.ts
- plans.ts
- deck/index.ts
- lessonProgress.svelte.ts
- profile.svelte.ts
- LessonScreen
- motion.ts
- gradeExam.ts
- scoring.ts
- writingLint.ts
- curriculum.ts
- SlideStage.svelte
- scripts
- Workflow
- registry.ts
- Mcq.svelte
- (site)/+page.svelte
- moduleLocation.svelte.ts
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- lastEngagement.svelte.ts
- package.json
- RulesStore
- data.ts
- apiFetch
- auth.svelte.ts
- progressMerge.ts
- mechanics.ts
- access.svelte.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- ReviewNotesStore
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- PassageBody.svelte
- create-coupon.mjs
- measure-overflow.mjs
- language.ts
- words/+page.svelte
- support.ts
- content
- checkout/+page.ts
- DebugStore
- Material
- RemindersStore
- e-1.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- AccountSection.svelte
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- answers.svelte.ts
- activeField.svelte.ts
- EditWorkspace.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- cobe.test.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- legacyIds.ts
- @eslint/js
- AGENTS.md
- Rules
- ActivityStore
- Handoff: support email (receive + send as support@engup.co.il)
- submitToLlm
- LessonNode
- feedback/types.ts
- content-i18n.mjs
- EditHistory
- Submit → feedback framework
- validate.ts
- Opener.svelte
- fillFromScan
- MyPhrases
- checks/index.ts
- hydratable.md
- dependencies
- inspect.md
- vercel.json
- svelte/transition
- speech.ts
- MatchDefinitions.svelte
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
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (167 total, 52 thin omitted)

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

### Community 10 - "QuizReport.svelte"
Cohesion: 0.12
Nodes (11): groups, phrase(), anyFailed, closed, hasSpeaking, headline, level, numbers (+3 more)

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
Cohesion: 0.12
Nodes (19): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+11 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "progress.ts"
Cohesion: 0.26
Nodes (17): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+9 more)

### Community 20 - "miniMarkdown.ts"
Cohesion: 0.14
Nodes (12): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, ESCAPE, isolateQuotes(), isolateSentences(), mdBlock(), mdInline(), parseLine() (+4 more)

### Community 21 - "stats.ts"
Cohesion: 0.11
Nodes (21): examAdvice, lessonStats(), moduleHook, allQuizNodes, avg(), examRows(), examStats, examTier (+13 more)

### Community 22 - "index.svelte.ts"
Cohesion: 0.08
Nodes (7): dayPart, dictionaries, words, scoredAnswers(), submit(), previous, ./$types

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

### Community 35 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (11): EditStore, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, REMINDER_HOURS, reminders (+3 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.05
Nodes (55): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+47 more)

### Community 38 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+7 more)

### Community 39 - "plans.ts"
Cohesion: 0.05
Nodes (57): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+49 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (62): listA, listB, listC, listD, w(), wordId(), eGlossAr, deckProgress (+54 more)

### Community 41 - "lessonProgress.svelte.ts"
Cohesion: 0.26
Nodes (7): activity, lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.08
Nodes (19): load(), WEEKLY_GOAL, sessionKey(), sessionOptions(), UNKNOWN_SESSION, full, ignite, examDate() (+11 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (11): LessonBucket, screenList(), Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES (+3 more)

### Community 44 - "motion.ts"
Cohesion: 0.13
Nodes (3): reducedMotion, formattedDate, item()

### Community 45 - "gradeExam.ts"
Cohesion: 0.18
Nodes (22): browserDictionaries(), checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked (+14 more)

### Community 46 - "scoring.ts"
Cohesion: 0.21
Nodes (14): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect() (+6 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "curriculum.ts"
Cohesion: 0.13
Nodes (15): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+7 more)

### Community 49 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (13): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, optFeedback() (+5 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "registry.ts"
Cohesion: 0.15
Nodes (3): screenComponents, KEY, LessonSession

### Community 53 - "Mcq.svelte"
Cohesion: 0.11
Nodes (10): KEY, cols, containerHeight, containerWidth, hexW, order, pitch, positions (+2 more)

### Community 54 - "(site)/+page.svelte"
Cohesion: 0.16
Nodes (4): d(), focus(), homeMedia, Media

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.06
Nodes (55): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), CobeRubric, chatEnds() (+47 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.15
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 59 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 62 - "data.ts"
Cohesion: 0.14
Nodes (27): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), SKILLS, continueFrom(), ContinueItem, EXAM_READY (+19 more)

### Community 63 - "apiFetch"
Cohesion: 0.17
Nodes (13): apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, addChat(), chatCount(), ChatTurnError (+5 more)

### Community 64 - "auth.svelte.ts"
Cohesion: 0.08
Nodes (5): auth, supabase, ThemeMode, ThemeStore, showNav

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 67 - "access.svelte.ts"
Cohesion: 0.21
Nodes (8): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, submit()

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (43): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, checkAuth(), emit(), extractArrayLiteral() (+35 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, ask(), block() (+19 more)

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 78 - "words/+page.svelte"
Cohesion: 0.13
Nodes (8): trailing(), row, rules, taken, tips, ./$types, next, seen

### Community 79 - "support.ts"
Cohesion: 0.29
Nodes (3): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTERS_GROUP

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "RemindersStore"
Cohesion: 0.39
Nodes (3): currentSubscription(), RemindersStore, worker()

### Community 85 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.09
Nodes (38): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+30 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.27
Nodes (8): Item, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys(), writeLocal()

### Community 103 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.50
Nodes (3): After it works, Handoff: support email (receive + send as support@engup.co.il), Send as support@ (Gmail "Send mail as")

### Community 111 - "feedback/types.ts"
Cohesion: 0.10
Nodes (25): postGrade(), Layer1, Layer1Options, pieces, Corrected, Fix, FIX_TAGS, locateMarks() (+17 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "validate.ts"
Cohesion: 0.14
Nodes (17): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment (+9 more)

### Community 120 - "checks/index.ts"
Cohesion: 0.12
Nodes (25): bytes(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+17 more)

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "svelte/transition"
Cohesion: 0.15
Nodes (3): emails, loadQuote(), setCobe()

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "MatchDefinitions.svelte"
Cohesion: 0.08
Nodes (14): active, checked, primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), KEY (+6 more)

### Community 132 - "Speak.svelte"
Cohesion: 0.14
Nodes (15): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Entry (+7 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **707 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+702 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `access.svelte.ts`, `settings/+page.svelte`, `content-edit/api.ts`, `progressSync.svelte.ts`, `ReviewNotesStore`, `feedback/types.ts`, `RulesPanel.svelte`, `RemindersStore`, `AccountSection.svelte`, `RulesStore`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `LessonScreen`, `LessonNode`, `RulesPanel.svelte`, `EditWorkspace.svelte`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `TitleEdits` connect `TitleEdits` to `examEditModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _707 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.09230769230769231 - nodes in this community are weakly interconnected._