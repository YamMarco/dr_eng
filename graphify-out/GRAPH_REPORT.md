# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 468 files · ~445,094 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2260 nodes · 4509 edges · 174 communities (128 shown, 46 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bfba736d`
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
- ReviewNotesStore
- validate.ts
- PassageText.svelte
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
- feedback/rules.ts
- plans.ts
- deck/index.ts
- saveSynced
- profile.svelte.ts
- LessonScreen
- llm.ts
- feedback/types.ts
- Md.svelte
- writingLint.ts
- svelte/transition
- SlideStage.svelte
- scripts
- Workflow
- registry.ts
- score.svelte.ts
- MatchDefinitions.svelte
- onSyncedChange
- chatSpeaking.ts
- WordImageField.svelte
- ExamEditWorkspace.svelte
- data.ts
- scoring.ts
- RemindersStore
- checks/index.ts
- apiFetch
- auth.svelte.ts
- progressMerge.ts
- [quizId]/+page.svelte
- billing.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- motion.ts
- quiz/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- planById
- create-coupon.mjs
- measure-overflow.mjs
- miniMarkdown.ts
- stats.ts
- markAllColors.ts
- content
- checkout/+page.ts
- lessonPath.ts
- Material
- speech.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- index.svelte.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- server/speaking.ts
- activeField.svelte.ts
- NavBar.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- deckProgress.svelte.ts
- @eslint/js
- AGENTS.md
- Rules
- activity.svelte.ts
- answers.svelte.ts
- llmGuard.ts
- screenChecks.ts
- screenshot.ts
- content-i18n.mjs
- EditHistory
- Submit → feedback framework
- gradeExam.ts
- quizzes.ts
- Mcq.svelte
- MarkdownInput.svelte
- typos.ts
- quote/+server.ts
- hydratable.md
- dependencies
- option.ts
- inspect.md
- vercel.json
- legacyIds.ts
- edit-exam/+page.svelte
- scan.ts
- @sveltejs/adapter-auto
- takeHistory.ts
- mechanics.ts
- @sveltejs/kit
- reviewNotes.svelte.ts
- lessonIcon.ts
- sectionThemes.ts
- dictionary-en-gb
- Recorder
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
- submitToLlm
- acceptedAnswers.ts
- @tailwindcss/typography
- typescript
- UX principles
- package.json
- brand.md
- auth/README.md
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
9. `Rules` - 18 edges
10. `QuizNode` - 17 edges

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

## Communities (174 total, 46 thin omitted)

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
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

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
Cohesion: 0.13
Nodes (19): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+11 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 21 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 22 - "PassageText.svelte"
Cohesion: 0.15
Nodes (8): stripLineAttrs(), leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

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
Cohesion: 0.06
Nodes (40): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, PhraseGroup, phraseGroups (+32 more)

### Community 35 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (9): EditStore, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus (+1 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "lib/kanban.ts"
Cohesion: 0.06
Nodes (54): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+46 more)

### Community 38 - "feedback/rules.ts"
Cohesion: 0.14
Nodes (7): RulesStore, KEY, clearBelow(), DEFAULT_RULES, RULE_KEYS, Rules, RuleSet

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, Cycle, CYCLE_MONTHS, CYCLES, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE, INSTALLMENTS (+11 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.07
Nodes (53): listA, listB, listC, listD, w(), eGlossAr, activeDecks(), Deck (+45 more)

### Community 41 - "saveSynced"
Cohesion: 0.26
Nodes (8): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope(), saveSynced()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.10
Nodes (15): sessionKey(), sessionOptions(), UNKNOWN_SESSION, full, ignite, examDate(), ExamSeason, ExamSession (+7 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (9): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+1 more)

### Community 44 - "llm.ts"
Cohesion: 0.17
Nodes (15): chat(), chatJson(), ChatOptions, keys(), llmConfigured(), LlmResult, Product, GATEWAY_URL (+7 more)

### Community 45 - "feedback/types.ts"
Cohesion: 0.11
Nodes (19): CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics, postGrade(), Layer1, Layer1Options (+11 more)

### Community 46 - "Md.svelte"
Cohesion: 0.13
Nodes (7): KEY, LessonSession, primaryAction(), record(), stop(), toggle(), takeKey()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "svelte/transition"
Cohesion: 0.09
Nodes (10): emails, words, screenContext, previous, showNav, ./$types, next, seen (+2 more)

### Community 49 - "SlideStage.svelte"
Cohesion: 0.18
Nodes (3): TYPE_HE, OPENER_LEVELS, OpenerLevel

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "registry.ts"
Cohesion: 0.19
Nodes (3): KEY, ScreenMode, screenComponents

### Community 53 - "score.svelte.ts"
Cohesion: 0.11
Nodes (11): primaryAction(), mistakes, pick(), row(), shuffleNotIdentity(), primaryAction(), primaryAction(), KEY (+3 more)

### Community 54 - "MatchDefinitions.svelte"
Cohesion: 0.20
Nodes (5): active, checked, focus(), homeMedia, Media

### Community 55 - "onSyncedChange"
Cohesion: 0.11
Nodes (11): LastEngagementStore, load(), Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist() (+3 more)

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.15
Nodes (21): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+13 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "data.ts"
Cohesion: 0.14
Nodes (20): SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson(), latestEngagement() (+12 more)

### Community 60 - "scoring.ts"
Cohesion: 0.25
Nodes (12): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+4 more)

### Community 61 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 62 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 63 - "apiFetch"
Cohesion: 0.18
Nodes (10): AccessStore, apiFetch(), toWavBase64(), ChatMode, ChatTurnReply, addChat(), chatCount(), ChatTurnError (+2 more)

### Community 64 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (15): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, confirming (+7 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "[quizId]/+page.svelte"
Cohesion: 0.13
Nodes (13): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+5 more)

### Community 67 - "billing.ts"
Cohesion: 0.16
Nodes (15): Plan, accessEnd(), accessUntil(), checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+7 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.09
Nodes (43): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+35 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (25): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, ask(), block(), cleanMarks(), ESSAY_PROMPTS (+17 more)

### Community 71 - "motion.ts"
Cohesion: 0.11
Nodes (5): d(), reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTERS_GROUP

### Community 72 - "quiz/index.ts"
Cohesion: 0.22
Nodes (8): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, IdentifiedScreen, QuizKind, QuizNode, QuizOptions

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "planById"
Cohesion: 0.17
Nodes (15): build(), COBE_ADDON, defaultPlan(), israelDate(), passEnd(), passMonths(), planById(), planId() (+7 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "miniMarkdown.ts"
Cohesion: 0.11
Nodes (14): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+6 more)

### Community 78 - "stats.ts"
Cohesion: 0.27
Nodes (8): moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule()

### Community 79 - "markAllColors.ts"
Cohesion: 0.25
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 82 - "lessonPath.ts"
Cohesion: 0.19
Nodes (13): getLesson(), getLessonsBySection(), moduleSections(), lessonsInOrder(), moduleRoute(), moduleSections(), todayLesson(), DebugStore (+5 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "index.svelte.ts"
Cohesion: 0.06
Nodes (10): trailing(), dayPart, dictionaries, I18n, scoredAnswers(), submit(), status(), formattedDate (+2 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizPart

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 103 - "deckProgress.svelte.ts"
Cohesion: 0.27
Nodes (5): deckProgress, DeckProgressStore, load(), persist(), ProgressMap

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "activity.svelte.ts"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 109 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 110 - "screenChecks.ts"
Cohesion: 0.26
Nodes (12): markAllSegments(), optText(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+4 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "gradeExam.ts"
Cohesion: 0.12
Nodes (31): checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed() (+23 more)

### Community 117 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 118 - "Mcq.svelte"
Cohesion: 0.18
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 119 - "MarkdownInput.svelte"
Cohesion: 0.29
Nodes (5): htmlToMd(), pickIcon(), serialize(), sync(), oi()

### Community 120 - "typos.ts"
Cohesion: 0.24
Nodes (10): browserDictionaries(), bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers(), sentenceStarts() (+2 more)

### Community 121 - "quote/+server.ts"
Cohesion: 0.33
Nodes (6): BillingError, normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "option.ts"
Cohesion: 0.29
Nodes (5): i(), issuesByNode(), optFeedback(), Option, withFeedback()

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 130 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 132 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 133 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 135 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 136 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (35): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+27 more)

### Community 153 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **711 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+706 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **46 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `scan.ts`, `settings/+page.svelte`, `content-edit/api.ts`, `feedback/rules.ts`, `reviewNotes.svelte.ts`, `progressSync.svelte.ts`, `feedback/types.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `RemindersStore`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `deck/index.ts`, `quiz/index.ts`, `screenChecks.ts`, `SlideStage.svelte`, `registry.ts`, `validate.ts`, `scoring.ts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `content/index.ts`, `LessonScreen`, `ExamEditWorkspace.svelte`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _711 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08405797101449275 - nodes in this community are weakly interconnected._