# Graph Report - dr_eng  (2026-11-25)

## Corpus Check
- 565 files · ~523,069 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2711 nodes · 5428 edges · 197 communities (148 shown, 49 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 115 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `20f7d7c5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- scoring.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Recorder
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
- QuizRunner.svelte
- lesson-screens/types.ts
- content/index.ts
- auth.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- feedback/types.ts
- billing.ts
- WritingTask.svelte
- progress.ts
- api/reminders/+server.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- quiz/index.ts
- rubrics/index.ts
- screenChecks.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- dependencies
- Workflow
- getDecks
- Md.svelte
- llmGuard.ts
- MatchDefinitions.svelte
- takeHistory.ts
- refund.ts
- TitleEdits
- Speak.svelte
- deck/index.ts
- validate.ts
- speech.ts
- [quizId]/+page.svelte
- settings/+page.svelte
- data.ts
- quizzes.ts
- layer1.ts
- snippet.md
- Button.svelte
- grade/+server.ts
- LessonScreen
- rulesStore.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- DebugStore
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- MatchPairs.svelte
- content
- checkout/+page.ts
- QuizReport.svelte
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- SlideStage.svelte
- option.ts
- accounts.spec.ts
- await-expressions.md
- fixtures.ts
- Mcq.svelte
- lib/finance.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- AccountSection.svelte
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- ExamEditWorkspace.svelte
- markAllColors.ts
- AGENTS.md
- Rules
- StreakModal.svelte
- lastEngagement.svelte.ts
- test
- edit-exam/+page.svelte
- content-i18n.mjs
- Handoff: test findings (open items only)
- load.ts
- Submit → feedback framework
- he.ts
- eslint-config-prettier
- localize.svelte.ts
- profile.svelte.ts
- answers.svelte.ts
- curriculum.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- lessonProgress.svelte.ts
- content/rules.ts
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- (site)/+page.svelte
- personas.spec.ts
- MarkdownInput.svelte
- Module E QA
- render.md
- index.svelte.ts
- eslint-plugin-svelte
- screensWithIds
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- choice.ts
- package.json
- sectionThemes.ts
- apiFetch
- gradeSpeaking
- openerLevels.ts
- @types/node
- screenshot.ts
- UX principles
- api.spec.ts
- acceptedAnswers.ts
- Handoff: recorded voice, what's left
- emailTypo.ts
- @types/nspell
- typescript-eslint
- brand.md
- @playwright/test
- auth/README.md
- lessonIcon.ts
- playwright.config.ts
- app/+layout.ts
- lib/api.ts
- Module G QA report
- eslint
- storeItem
- svelte-check
- @sveltejs/vite-plugin-svelte
- stats.ts
- UI review
- schools/+page.ts
- @types/web-push
- globals
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte

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
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte
- `stop()` --calls--> `takeKey()`  [EXTRACTED]
  front/src/lib/lesson-screens/Speak.svelte → front/src/lib/takeHistory.ts

## Import Cycles
- None detected.

## Communities (197 total, 49 thin omitted)

### Community 0 - "scoring.ts"
Cohesion: 0.23
Nodes (12): ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, QuizAttempt, isScored() (+4 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.08
Nodes (31): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+23 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (7): clone(), EditModel, screenList(), swapLevels(), versions(), ScreenPath, getLessonsBySection()

### Community 5 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

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
Cohesion: 0.06
Nodes (51): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+43 more)

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

### Community 19 - "QuizRunner.svelte"
Cohesion: 0.09
Nodes (16): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, i(), footerLabel, hiddenIndices, partBreaks (+8 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+19 more)

### Community 21 - "content/index.ts"
Cohesion: 0.10
Nodes (32): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+24 more)

### Community 22 - "auth.ts"
Cohesion: 0.18
Nodes (14): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, digest(), accountsEnabled, adminClient() (+6 more)

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.12
Nodes (15): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+7 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "checkAuth"
Cohesion: 0.20
Nodes (19): assertWriteUnlocked(), checkAuth(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl(), body (+11 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "feedback/types.ts"
Cohesion: 0.26
Nodes (6): pieces, ExamRequest, Feedback, GradeRequest, LessonVerdict, ReadingItem

### Community 35 - "billing.ts"
Cohesion: 0.12
Nodes (25): cobeVisible(), Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, BillingError (+17 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.29
Nodes (17): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+9 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.20
Nodes (13): pushSubscriptions, jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint (+5 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (32): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+24 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.12
Nodes (31): isLimit(), applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked, essayGrade() (+23 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.08
Nodes (42): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+34 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.10
Nodes (34): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+26 more)

### Community 43 - "quiz/index.ts"
Cohesion: 0.14
Nodes (13): cQuizzes, cobeQuizzes, eQuizzes, ExamPartKind, examParts(), partIdOf(), gQuizzes, IdentifiedScreen (+5 more)

### Community 44 - "rubrics/index.ts"
Cohesion: 0.18
Nodes (11): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+3 more)

### Community 45 - "screenChecks.ts"
Cohesion: 0.23
Nodes (11): MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+3 more)

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, COBE flag, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.06
Nodes (46): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), CobeRubric, chatEnds() (+38 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "getDecks"
Cohesion: 0.18
Nodes (13): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon(), nextMilestone() (+5 more)

### Community 53 - "Md.svelte"
Cohesion: 0.10
Nodes (6): stripLineAttrs(), gutter, lines, KEY, LessonSession, i()

### Community 54 - "llmGuard.ts"
Cohesion: 0.22
Nodes (14): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Activity (+6 more)

### Community 55 - "MatchDefinitions.svelte"
Cohesion: 0.10
Nodes (11): active, checked, primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer() (+3 more)

### Community 56 - "takeHistory.ts"
Cohesion: 0.19
Nodes (11): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+3 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 59 - "Speak.svelte"
Cohesion: 0.16
Nodes (9): KEY, ScreenMode, primaryAction(), reached, record(), seconds, share, stop() (+1 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (51): activity, listA, listB, listC, listD, w(), eGlossAr, deckProgress (+43 more)

### Community 61 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "[quizId]/+page.svelte"
Cohesion: 0.22
Nodes (6): lockedUntil, lockedWhen, row, rules, taken, tips

### Community 64 - "settings/+page.svelte"
Cohesion: 0.11
Nodes (10): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, REMINDER_HOURS, reminders, ReminderStatus (+2 more)

### Community 65 - "data.ts"
Cohesion: 0.16
Nodes (26): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY (+18 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 67 - "layer1.ts"
Cohesion: 0.25
Nodes (9): browserDictionaries(), bytes(), DictData, issuesToMarks(), Layer1, Layer1Options, runLayer1(), GateReason (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "Button.svelte"
Cohesion: 0.10
Nodes (5): groups, phrase(), reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP

### Community 70 - "grade/+server.ts"
Cohesion: 0.09
Nodes (35): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, MAX_TEXT, SingleRequest (+27 more)

### Community 71 - "LessonScreen"
Cohesion: 0.07
Nodes (10): EditHistory, LessonBucket, Bucket, EditModelLike, SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections(), LessonContent (+2 more)

### Community 72 - "rulesStore.svelte.ts"
Cohesion: 0.21
Nodes (5): RuleLevel, RulesStore, RulesFile, clearBelow(), Rules

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/playwright, dictionary-en, dictionary-en-gb, drizzle-kit, devDependencies, @axe-core/playwright, dictionary-en, dictionary-en-gb (+19 more)

### Community 79 - "MatchPairs.svelte"
Cohesion: 0.23
Nodes (9): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), fitOrder(), optionOrder() (+1 more)

### Community 82 - "QuizReport.svelte"
Cohesion: 0.18
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+1 more)

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

### Community 89 - "option.ts"
Cohesion: 0.29
Nodes (5): i(), issuesByNode(), optFeedback(), Option, withFeedback()

### Community 90 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.13
Nodes (9): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states, app (+1 more)

### Community 93 - "Mcq.svelte"
Cohesion: 0.25
Nodes (4): KEY, #each(), slot(), optText()

### Community 94 - "lib/finance.ts"
Cohesion: 0.15
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.08
Nodes (5): clone(), ExamEditModel, blankScreen(), getQuizNodesByModule(), applyGrades()

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (5): deleteAccount(), deleting, failed, signOut(), t

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (16): Accounts (Supabase Auth, email + password), Builds, Environments and release, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts (+8 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (11): ActivityStore, dayKey(), load(), WEEKLY_GOAL, load(), MyPhrases, onSyncedChange(), readAt() (+3 more)

### Community 103 - "ExamEditWorkspace.svelte"
Cohesion: 0.16
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 104 - "markAllColors.ts"
Cohesion: 0.40
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "StreakModal.svelte"
Cohesion: 0.18
Nodes (5): full, ignite, open, words, previous

### Community 109 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 110 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 118 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 119 - "profile.svelte.ts"
Cohesion: 0.08
Nodes (16): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+8 more)

### Community 121 - "curriculum.ts"
Cohesion: 0.15
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 129 - "content/rules.ts"
Cohesion: 0.39
Nodes (5): getLesson(), ownerModule(), ruleChain(), load(), ./$types

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.11
Nodes (25): PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, cronAuthorized(), db, coupons, examAttempts (+17 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.16
Nodes (19): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+11 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "(site)/+page.svelte"
Cohesion: 0.13
Nodes (6): COBE_OPEN, focus(), i(), homeMedia, Media, d

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 138 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "index.svelte.ts"
Cohesion: 0.08
Nodes (7): total(), dictionaries, formattedDate, ./$types, next, seen, item()

### Community 143 - "screensWithIds"
Cohesion: 0.47
Nodes (6): writingRubricId, labelled(), openAnswers(), countedIds(), scoreQuiz(), screensWithIds()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (38): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone() (+30 more)

### Community 148 - "choice.ts"
Cohesion: 0.60
Nodes (4): isAnswered(), pickCounted(), counted(), ids

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 151 - "apiFetch"
Cohesion: 0.05
Nodes (38): AccessStore, ApiError, apiFetch(), toWavBase64(), post(), saveExamChanges(), saveLessonContent(), saveRules() (+30 more)

### Community 152 - "gradeSpeaking"
Cohesion: 0.67
Nodes (3): gradeSpeaking(), half(), lengthPercentOff()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 159 - "Handoff: recorded voice, what's left"
Cohesion: 0.40
Nodes (4): Can't be pre-recorded (stay on the browser voice), Handoff: recorded voice, what's left, How to extend, Left to record

### Community 160 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 169 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 173 - "lib/api.ts"
Cohesion: 0.07
Nodes (14): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+6 more)

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 185 - "storeItem"
Cohesion: 0.15
Nodes (5): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeMode, ThemeStore

### Community 189 - "stats.ts"
Cohesion: 0.27
Nodes (8): moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **867 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+862 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `feedback/types.ts`, `AccountSection.svelte`, `progressSync.svelte.ts`, `progressMerge.ts`, `rulesStore.svelte.ts`, `gradeExam.ts`, `api/lessons/+server.ts`, `lib/api.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `he` connect `test` to `personas.spec.ts`, `index.svelte.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `EditModel`, `LessonScreen`, `rulesStore.svelte.ts`, `load.ts`, `apiFetch`, `validate.ts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _867 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0782051282051282 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08489795918367347 - nodes in this community are weakly interconnected._