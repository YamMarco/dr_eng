# Graph Report - dr_eng  (2026-11-28)

## Corpus Check
- 571 files · ~521,109 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2777 nodes · 5570 edges · 207 communities (157 shown, 50 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 120 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f4331af0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [quizId]/+page.svelte
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Mcq.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- LessonRunner.svelte
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- miniMarkdown.ts
- lesson-screens/types.ts
- content/index.ts
- content-nodes.test.ts
- hooks.server.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- checks/index.ts
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- deck/index.ts
- billing.ts
- WritingTask.svelte
- rulesStore.svelte.ts
- db/schema.ts
- plans.ts
- gradeExam.ts
- language.ts
- api/lessons/+server.ts
- progress.ts
- scan.ts
- grade/+server.ts
- QuizRunner.svelte
- writingLint.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- dependencies
- Workflow
- accounts.spec.ts
- goalOptions.ts
- scoring.ts
- test
- takeHistory.ts
- refund.ts
- TitleEdits
- MatchDefinitions.svelte
- scripts
- Policies: legal and billing
- speech.ts
- llmGuard.ts
- reminders.svelte.ts
- data.ts
- stats.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- curriculum.ts
- motion.ts
- LessonScreen
- feedback/types.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- personas.spec.ts
- create-coupon.mjs
- measure-overflow.mjs
- MatchPairs.svelte
- devDependencies
- 5-Point Bagrut Handbook (February 2025)
- content
- checkout/+page.ts
- Md.svelte
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- validate.ts
- llm.ts
- progressSync.svelte.ts
- await-expressions.md
- fixtures.ts
- COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)
- lib/finance.ts
- Speak.svelte
- attach.md
- ExamEditModel
- saveSynced
- .mcp.json
- apiFetch
- Platform: web, mobile, accounts
- passageQuiz.ts
- acceptedAnswers.ts
- chatAi.ts
- AGENTS.md
- Rules
- $app/paths
- ExamEditWorkspace.svelte
- api/reminders/+server.ts
- server/speaking.ts
- content-i18n.mjs
- chat.ts
- getDecks
- Submit → feedback framework
- he.ts
- localize.svelte.ts
- Breakdown of criteria with further caveats and explanations
- server/grade.ts
- passageMarks.ts
- cobe.test.ts
- hydratable.md
- feedback/speaking.ts
- mechanics.ts
- inspect.md
- vercel.json
- activity.svelte.ts
- EditHistory
- renewalEmail.ts
- @sveltejs/adapter-auto
- answers.svelte.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- legacyIds.ts
- ProfileStore
- examStats
- server/supabase.ts
- render.md
- lastEngagement.svelte.ts
- completeRound
- lib/api.ts
- package.json
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- index.svelte.ts
- Handoff: payment provider (not chosen)
- nextRoundIndex
- eslint-config-prettier
- SlideStage.svelte
- UX principles
- api.spec.ts
- dictionary-en
- @types/nspell
- loadLesson
- brand.md
- mode.svelte.ts
- auth/README.md
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- phraseBank.svelte.ts
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- lessonIcon.ts
- sectionThemes.ts
- emailTypo.ts
- svelte-check
- Module G - guidelines and table of specifications
- UI review
- schools/+page.ts
- Module C - guidelines and table of specifications
- @types/web-push
- submitToLlm
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte
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
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `lengthReport()` --references--> `tables`  [EXTRACTED]
  front/src/lib/checks/length.ts → front/src/lib/content/localize.svelte.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (207 total, 50 thin omitted)

### Community 0 - "[quizId]/+page.svelte"
Cohesion: 0.08
Nodes (11): balances, formattedDate, lockedUntil, lockedWhen, row, rules, taken, tips (+3 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.08
Nodes (32): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+24 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (7): clone(), EditModel, screenList(), swapLevels(), versions(), ScreenPath, getLessonsBySection()

### Community 5 - "Mcq.svelte"
Cohesion: 0.15
Nodes (7): KEY, #each(), slot(), Option, optText(), withFeedback(), i()

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "LessonRunner.svelte"
Cohesion: 0.13
Nodes (6): full, ignite, open, groups, words, previous

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
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "miniMarkdown.ts"
Cohesion: 0.06
Nodes (57): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+49 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+19 more)

### Community 21 - "content/index.ts"
Cohesion: 0.08
Nodes (30): UNITS, c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons (+22 more)

### Community 22 - "content-nodes.test.ts"
Cohesion: 0.26
Nodes (10): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+2 more)

### Community 24 - "hooks.server.ts"
Cohesion: 0.07
Nodes (27): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+19 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 30 - "checks/index.ts"
Cohesion: 0.09
Nodes (34): browserDictionaries(), bytes(), checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS (+26 more)

### Community 31 - "checkAuth"
Cohesion: 0.20
Nodes (19): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+11 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "deck/index.ts"
Cohesion: 0.07
Nodes (50): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+42 more)

### Community 35 - "billing.ts"
Cohesion: 0.09
Nodes (37): cobeVisible(), defaultPlan(), Plan, planById(), Product, productsOf(), access, accessEnd() (+29 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "rulesStore.svelte.ts"
Cohesion: 0.19
Nodes (8): RulesStore, getLesson(), ownerModule(), ruleChain(), RulesFile, clearBelow(), Rules, load()

### Community 38 - "db/schema.ts"
Cohesion: 0.20
Nodes (17): cronAuthorized(), db, examAttempts, llmUsage, orders, progress, pushSubscriptions, zoomRegistrants (+9 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (27): APP, cart, charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+19 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.13
Nodes (31): isLimit(), readingDeductions(), applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, essayGrade() (+23 more)

### Community 41 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.11
Nodes (32): addToCalendar(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonRecording (+24 more)

### Community 43 - "progress.ts"
Cohesion: 0.19
Nodes (21): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+13 more)

### Community 44 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 45 - "grade/+server.ts"
Cohesion: 0.11
Nodes (25): moduleId, ExamRef, PartVerdict, ExamPartKind, examParts(), partIdOf(), getQuizNode(), examLocked() (+17 more)

### Community 46 - "QuizRunner.svelte"
Cohesion: 0.13
Nodes (13): total(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+5 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "moduleLocation.svelte.ts"
Cohesion: 0.21
Nodes (7): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), isRecord()

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.20
Nodes (15): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), ChatMode, turnNumber() (+7 more)

### Community 50 - "dependencies"
Cohesion: 0.10
Nodes (21): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+13 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 53 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 54 - "scoring.ts"
Cohesion: 0.07
Nodes (33): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect() (+25 more)

### Community 55 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 56 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 57 - "refund.ts"
Cohesion: 0.24
Nodes (9): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FREE_DAYS, REFUND_FULL_DAYS, refundOf(), RefundOrder (+1 more)

### Community 59 - "MatchDefinitions.svelte"
Cohesion: 0.12
Nodes (8): active, checked, primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer()

### Community 60 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 61 - "Policies: legal and billing"
Cohesion: 0.33
Nodes (5): Accessibility, Billing, Facts the texts must match, Open (owner), Policies: legal and billing

### Community 62 - "speech.ts"
Cohesion: 0.08
Nodes (22): browserVoice, chatVoice, prefaceSeen, PrefaceSeenStore, hush(), RATE, say(), speak() (+14 more)

### Community 63 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+8 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.10
Nodes (9): EditStore, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders, ReminderStatus (+1 more)

### Community 65 - "data.ts"
Cohesion: 0.11
Nodes (31): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY (+23 more)

### Community 66 - "stats.ts"
Cohesion: 0.11
Nodes (17): I18n, allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz (+9 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "curriculum.ts"
Cohesion: 0.14
Nodes (14): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), literatureModules, modules, textSection, UnitGroup (+6 more)

### Community 70 - "motion.ts"
Cohesion: 0.06
Nodes (10): COBE_OPEN, focus(), reducedMotion, i(), homeMedia, Media, d, SUPPORT_EMAIL (+2 more)

### Community 71 - "LessonScreen"
Cohesion: 0.06
Nodes (11): LessonBucket, Bucket, EditModelLike, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, TYPE_HE, moduleSections() (+3 more)

### Community 72 - "feedback/types.ts"
Cohesion: 0.15
Nodes (14): essayRubric, Rubric, RubricCriterion, WritingRubricId, writingRubrics, pieces, ExamPart, ExamRequest (+6 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "MatchPairs.svelte"
Cohesion: 0.23
Nodes (9): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), fitOrder(), optionOrder() (+1 more)

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (29): @axe-core/playwright, dictionary-en-gb, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, @axe-core/playwright, dictionary-en-gb (+21 more)

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

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

### Community 88 - "validate.ts"
Cohesion: 0.15
Nodes (17): bucketLabel(), Issue, issuesByNode(), screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments() (+9 more)

### Community 89 - "llm.ts"
Cohesion: 0.21
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL (+4 more)

### Community 90 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

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
Cohesion: 0.17
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

### Community 95 - "Speak.svelte"
Cohesion: 0.22
Nodes (8): primaryAction(), reached, record(), seconds, share, stop(), toggle(), takeKey()

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "saveSynced"
Cohesion: 0.27
Nodes (7): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope(), saveSynced()

### Community 100 - "apiFetch"
Cohesion: 0.05
Nodes (29): AccessStore, apiFetch(), post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles() (+21 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (16): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+8 more)

### Community 102 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 103 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 104 - "chatAi.ts"
Cohesion: 0.22
Nodes (8): ApiError, toWavBase64(), ChatTurnReply, addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback()

### Community 105 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 109 - "ExamEditWorkspace.svelte"
Cohesion: 0.11
Nodes (13): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+5 more)

### Community 110 - "api/reminders/+server.ts"
Cohesion: 0.22
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

### Community 111 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "chat.ts"
Cohesion: 0.27
Nodes (7): chatEnds(), ChatLine, ChatSummary, drawTwo(), MAX_TURNS, MIN_TURNS, TURN_TARGET_SECONDS

### Community 114 - "getDecks"
Cohesion: 0.24
Nodes (9): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, ./$types, load() (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 117 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 118 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.18
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (8), General comments, Language use (16), Mechanics (6), Module G (16582) - Writing Rubric, Vocabulary (10)

### Community 119 - "server/grade.ts"
Cohesion: 0.11
Nodes (25): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, ModuleRules, CONTENT_TAGS, FATAL_TAGS, TAG_IDS (+17 more)

### Community 120 - "passageMarks.ts"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 121 - "cobe.test.ts"
Cohesion: 0.27
Nodes (5): cobe1Lessons, cobe2Lessons, cobe3Lessons, CobeRubric, rubric

### Community 123 - "feedback/speaking.ts"
Cohesion: 0.21
Nodes (10): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeLevel, CobePart, gradeSpeaking(), half() (+2 more)

### Community 125 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "activity.svelte.ts"
Cohesion: 0.22
Nodes (6): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, onSyncedChange()

### Community 130 - "renewalEmail.ts"
Cohesion: 0.46
Nodes (7): formatPrice(), israelDay(), planName(), Renewal, renewalHtml(), renewalSubject(), GET()

### Community 132 - "answers.svelte.ts"
Cohesion: 0.16
Nodes (6): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, KEY, QuizAnswerSlot

### Community 134 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 138 - "examStats"
Cohesion: 0.50
Nodes (5): examAdvice, lessonStats(), moduleHook, avg(), examStats

### Community 139 - "server/supabase.ts"
Cohesion: 0.38
Nodes (5): accountsEnabled, adminClient(), noSession, SessionUser, POST()

### Community 141 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 142 - "completeRound"
Cohesion: 0.25
Nodes (11): celebrateIfNewlyDone(), closeNode(), closeWritingLab(), completeRound(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+3 more)

### Community 143 - "lib/api.ts"
Cohesion: 0.08
Nodes (21): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+13 more)

### Community 144 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (18): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+10 more)

### Community 148 - "index.svelte.ts"
Cohesion: 0.12
Nodes (6): dayPart, dictionaries, phrase(), NAME_MAX, Profile, ./$types

### Community 149 - "Handoff: payment provider (not chosen)"
Cohesion: 0.40
Nodes (4): Ask lawyer / accountant, Handoff: payment provider (not chosen), Provider must offer, To build with it

### Community 150 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 154 - "SlideStage.svelte"
Cohesion: 0.14
Nodes (6): onMove(), onUp(), i(), OPENER_LEVELS, OpenerLevel, optFeedback()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 165 - "mode.svelte.ts"
Cohesion: 0.19
Nodes (3): Unlock, KEY, ScreenMode

### Community 168 - "Module C (16382) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module C (16382) - Answer Key, Summer 2026, Moed B, Part I: Written reception - A Challenge for Humanoid Robots, Part I: Written reception - A Challenge for Humanoid Robots, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 169 - "Module E (16471) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module E (16471) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Communicating with Emojis, Part I: Written reception - Communicating with Emojis, Part II: Lexical knowledge (vocabulary), Part II: Lexical knowledge (vocabulary), Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 171 - "Module G (16582) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module G (16582) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 179 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.25
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (10), General comments, Language use (8), Mechanics (4), Module C (016382) - Writing Rubric, Vocabulary (8)

### Community 181 - "Rubric for 4-Point Literature (Module D)"
Cohesion: 0.25
Nodes (7): Content (60 points), Content (60 points), Language, B1 level (40 points), Language, B1 level (40 points), Rubric for 4-Point Literature (Module D), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 182 - "Rubric for 5-Point Literature (Module F)"
Cohesion: 0.25
Nodes (7): Content (50 points), Content (50 points), Language, B2 level (50 points), Language, B2 level (50 points), Rubric for 5-Point Literature (Module F), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 183 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 186 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 189 - "Module G - guidelines and table of specifications"
Cohesion: 0.40
Nodes (5): Module G - guidelines and table of specifications, Module G writing rubric, Reading comprehension, The English Academization Program, Writing

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 192 - "Module C - guidelines and table of specifications"
Cohesion: 0.50
Nodes (4): Module C - guidelines and table of specifications, Module C writing rubric, Reading comprehension, Writing

## Knowledge Gaps
- **887 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+882 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **50 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `he` connect `test` to `renewalEmail.ts`, `personas.spec.ts`, `he.ts`, `index.svelte.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `deck/index.ts`, `EditModel`, `lesson-screens/types.ts`, `content/index.ts`, `content-nodes.test.ts`, `scoring.ts`, `validate.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `AuthStore` connect `AuthStore` to `lib/api.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _887 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[quizId]/+page.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.07936507936507936 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07926829268292683 - nodes in this community are weakly interconnected._