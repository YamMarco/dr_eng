# Graph Report - dr_eng  (2026-11-01)

## Corpus Check
- 480 files · ~457,175 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2321 nodes · 4617 edges · 167 communities (123 shown, 44 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2b54f5de`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- getDecks
- EditModel
- feedback/types.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- progressSync.svelte.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- language.ts
- graphify reference: query, path, explain
- RulesPanel.svelte
- SlideStage.svelte
- content/index.ts
- billing.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- stats.ts
- extraction-spec.md
- GraphEditor.svelte
- NavBar.svelte
- (site)/+page.svelte
- WritingTask.svelte
- deck/index.ts
- gradeExam.ts
- plans.ts
- checkout
- moduleLocation.svelte.ts
- AccountSection.svelte
- LessonScreen
- profile.svelte.ts
- 1. Reading comprehension (grade-reading)
- index.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- lesson-screens/types.ts
- scripts
- Workflow
- miniMarkdown.ts
- apiFetch
- content-edit/api.ts
- PassageBody.svelte
- localize.svelte.ts
- Md.svelte
- cobe.test.ts
- data.ts
- RulesStore
- withCobe
- speech.ts
- I18n
- reminders.svelte.ts
- payments.ts
- lib/kanban.ts
- quiz/index.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- DeckProgressStore
- progress.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- textColors.ts
- create-coupon.mjs
- measure-overflow.mjs
- auth.svelte.ts
- lessonIcon.ts
- sectionThemes.ts
- content
- checkout/+page.ts
- Material
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- chatSpeaking.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- progressMerge.ts
- activeField.svelte.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- Speak.svelte
- scoring.ts
- @eslint/js
- AGENTS.md
- Rules
- editModel.svelte.ts
- AppBar.svelte
- feedback/grade.ts
- validate.ts
- motion.ts
- content-i18n.mjs
- Submit → feedback framework
- TitleEdits
- saveSynced
- lastEngagement.svelte.ts
- checks/index.ts
- ActivityStore
- hydratable.md
- dependencies
- llmGuard.ts
- inspect.md
- vercel.json
- MarkdownInput.svelte
- Mcq.svelte
- MatchDefinitions.svelte
- @sveltejs/adapter-auto
- e-1.ts
- @sveltejs/kit
- DebugStore
- screenshot.ts
- markAllColors.ts
- dictionary-en-gb
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
- @tailwindcss/typography
- typescript
- UX principles
- takeHistory.ts
- package.json
- QuizRunner.svelte
- brand.md
- acceptedAnswers.ts
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
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (167 total, 44 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "getDecks"
Cohesion: 0.17
Nodes (14): SKILLS, homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon() (+6 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "feedback/types.ts"
Cohesion: 0.13
Nodes (14): essayRubric, Rubric, RubricCriterion, writingRubrics, pieces, EssayVerdict, Feedback, GateReason (+6 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "language.ts"
Cohesion: 0.17
Nodes (16): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+8 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "RulesPanel.svelte"
Cohesion: 0.11
Nodes (22): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+14 more)

### Community 20 - "SlideStage.svelte"
Cohesion: 0.13
Nodes (6): i(), TYPE_HE, issuesByNode(), OPENER_LEVELS, OpenerLevel, optFeedback()

### Community 21 - "content/index.ts"
Cohesion: 0.11
Nodes (21): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+13 more)

### Community 22 - "billing.ts"
Cohesion: 0.19
Nodes (14): build(), defaultPlan(), Plan, planById(), accessEnd(), accessUntil(), CheckoutResult, completeOrder() (+6 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "stats.ts"
Cohesion: 0.12
Nodes (18): examAdvice, lessonStats(), moduleHook, allQuizNodes, avg(), examRows(), examStats, examTier (+10 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 35 - "(site)/+page.svelte"
Cohesion: 0.15
Nodes (4): d(), focus(), homeMedia, Media

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "deck/index.ts"
Cohesion: 0.09
Nodes (46): listA, listB, listC, listD, w(), eGlossAr, deckProgress, Deck (+38 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.24
Nodes (15): writingRubricId, applyLength(), mechanicsCount(), postGrade(), Checked, failed(), gradeEssay(), gradeExam() (+7 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (27): APP, COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE (+19 more)

### Community 40 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 42 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 43 - "LessonScreen"
Cohesion: 0.14
Nodes (4): EditModelLike, ScreenPath, LessonScreen, QuizPart

### Community 44 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "index.svelte.ts"
Cohesion: 0.08
Nodes (12): full, ignite, open, dayPart, dictionaries, groups, phrase(), words (+4 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "miniMarkdown.ts"
Cohesion: 0.12
Nodes (19): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), langAttrs() (+11 more)

### Community 53 - "apiFetch"
Cohesion: 0.06
Nodes (32): AccessStore, apiFetch(), toWavBase64(), PhraseGroup, phraseGroups, BLANK, ReviewNote, reviewNotes (+24 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.06
Nodes (27): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+19 more)

### Community 55 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 56 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 57 - "Md.svelte"
Cohesion: 0.12
Nodes (8): Option, optText(), withFeedback(), oi(), KEY, LessonSession, i(), item()

### Community 58 - "cobe.test.ts"
Cohesion: 0.27
Nodes (5): cobe1Lessons, cobe2Lessons, cobe3Lessons, CobeRubric, rubric

### Community 59 - "data.ts"
Cohesion: 0.16
Nodes (24): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY, isWritingLesson() (+16 more)

### Community 61 - "withCobe"
Cohesion: 0.50
Nodes (4): planId(), withCobe(), setCobe(), #each()

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "I18n"
Cohesion: 0.33
Nodes (4): I18n, getQuiz(), load(), ./$types

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.11
Nodes (8): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus, prerender

### Community 65 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 66 - "lib/kanban.ts"
Cohesion: 0.06
Nodes (54): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+46 more)

### Community 67 - "quiz/index.ts"
Cohesion: 0.31
Nodes (7): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, QuizKind, QuizNode, QuizOptions

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.07
Nodes (49): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+41 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, GradeRequest, ask(), block(), cleanMarks() (+18 more)

### Community 72 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "auth.svelte.ts"
Cohesion: 0.07
Nodes (18): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, COBE_OPEN, auth (+10 more)

### Community 78 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (47): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+39 more)

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
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.10
Nodes (3): clone(), ExamEditModel, getQuizNodesByModule()

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: accessibility gaps (listed on `/accessibility`), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.13
Nodes (15): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+7 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "Speak.svelte"
Cohesion: 0.24
Nodes (8): primaryAction(), reached, record(), seconds, share, stop(), toggle(), takeKey()

### Community 103 - "scoring.ts"
Cohesion: 0.07
Nodes (33): markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems(), strings() (+25 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (7): EditHistory, LessonBucket, Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 108 - "AppBar.svelte"
Cohesion: 0.11
Nodes (7): trailing(), status(), ./$types, row, rules, taken, tips

### Community 109 - "feedback/grade.ts"
Cohesion: 0.17
Nodes (19): browserDictionaries(), checkWriting(), gradeLesson(), check(), issuesToMarks(), Layer1, Layer1Options, runLayer1() (+11 more)

### Community 110 - "validate.ts"
Cohesion: 0.18
Nodes (9): onMove(), onUp(), exit(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection() (+1 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 117 - "saveSynced"
Cohesion: 0.12
Nodes (14): activity, load(), WEEKLY_GOAL, load(), ProgressMap, LessonProgressStore, load(), persist() (+6 more)

### Community 118 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 119 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): bytes(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+16 more)

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "llmGuard.ts"
Cohesion: 0.26
Nodes (11): cobeVisible(), access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+3 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 129 - "Mcq.svelte"
Cohesion: 0.11
Nodes (13): KEY, primaryAction(), announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity() (+5 more)

### Community 130 - "MatchDefinitions.svelte"
Cohesion: 0.08
Nodes (9): active, checked, KEY, ScreenMode, primaryAction(), KEY, LessonScore, KEY (+1 more)

### Community 132 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 137 - "markAllColors.ts"
Cohesion: 0.25
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (35): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+27 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 157 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 161 - "QuizRunner.svelte"
Cohesion: 0.20
Nodes (3): scoredAnswers(), submit(), screenContext

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **741 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+736 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **44 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EditModel` connect `EditModel` to `editModel.svelte.ts`, `LessonScreen`, `validate.ts`, `RulesPanel.svelte`, `content/index.ts`, `data.ts`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `reminders.svelte.ts`, `gradeExam.ts`, `AccountSection.svelte`, `progressSync.svelte.ts`, `auth.svelte.ts`, `feedback/grade.ts`, `RulesPanel.svelte`, `content-edit/api.ts`, `RulesStore`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `quiz/index.ts`, `EditModel`, `deck/index.ts`, `scoring.ts`, `editModel.svelte.ts`, `validate.ts`, `lesson-screens/types.ts`, `SlideStage.svelte`, `content/index.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _741 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08792270531400966 - nodes in this community are weakly interconnected._
- **Should `feedback/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._