# Graph Report - dr_eng  (2026-11-24)

## Corpus Check
- 561 files · ~521,622 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2695 nodes · 5395 edges · 213 communities (156 shown, 57 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `74764fc9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- content-nodes.test.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- scoring.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- feedback.test.ts
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
- accounts.spec.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- miniMarkdown.ts
- extraction-spec.md
- GraphEditor.svelte
- api/reminders/+server.ts
- billing.ts
- WritingTask.svelte
- progress.ts
- SlideStage.svelte
- plans.ts
- gradeExam.ts
- checks/index.ts
- liveLesson.ts
- LessonScreen
- rubrics/index.ts
- test
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- dependencies
- Workflow
- checkAuth
- hooks.server.ts
- llmGuard.ts
- lib/finance.ts
- takeHistory.ts
- refund.ts
- TitleEdits
- llm.ts
- deck/index.ts
- server/speaking.ts
- speech.ts
- he.ts
- settings/+page.svelte
- data.ts
- session.ts
- progressMerge.ts
- snippet.md
- motion.ts
- grade/+server.ts
- validate.ts
- theme.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- storeItem
- create-coupon.mjs
- measure-overflow.mjs
- MarkdownInput.svelte
- devDependencies
- passageMarks.ts
- content
- checkout/+page.ts
- personas.spec.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- editModel.svelte.ts
- RemindersStore
- ReviewNotesStore
- await-expressions.md
- fixtures.ts
- activeField.svelte.ts
- api/lessons/+server.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- deckProgress.svelte.ts
- Platform: web, mobile, accounts
- Speak.svelte
- ExamEditWorkspace.svelte
- option.ts
- AGENTS.md
- Rules
- WordImage.svelte
- submitToLlm
- progressSync.svelte.ts
- reviewNotes.svelte.ts
- content-i18n.mjs
- Handoff: test findings (open items only)
- screenshot.ts
- Submit → feedback framework
- localize.svelte.ts
- eslint-config-prettier
- getDecks
- goalOptions.ts
- content-edit/api.ts
- curriculum.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- QuizAnswerSlot
- screenChecks.ts
- feedback/types.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- completeRound
- Handoff: Zoom group lessons, testing
- quizzes.ts
- rulesStore.svelte.ts
- index.svelte.ts
- Module E QA
- render.md
- svelte/transition
- moduleLocation.svelte.ts
- checkout
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- lib/api.ts
- package.json
- QuizReport.svelte
- apiFetch
- RulesStore
- saveSynced
- @types/node
- I18n
- UX principles
- api.spec.ts
- emailTypo.ts
- Handoff: recorded voice, what's left
- examLock.ts
- @types/nspell
- typescript-eslint
- brand.md
- @playwright/test
- auth/README.md
- Recorder
- ProfileStore
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- plans.test.ts
- sectionThemes.ts
- lessonIcon.ts
- Module G QA report
- chatTopics.ts
- chatAi.ts
- phraseBank.svelte.ts
- eslint
- eslint-plugin-svelte
- nextRoundIndex
- svelte-check
- @sveltejs/vite-plugin-svelte
- load.ts
- UI review
- schools/+page.ts
- Opener.svelte
- @types/web-push
- globals
- textColors.ts
- vite
- prettier
- vite-env.d.ts
- smoke.spec.ts
- prettier-plugin-svelte
- context.ts
- calloutIcons.ts
- access
- payments.ts
- .refresh
- cron/reminders/+server.ts

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
- `buildSession()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts

## Import Cycles
- None detected.

## Communities (213 total, 57 thin omitted)

### Community 0 - "content-nodes.test.ts"
Cohesion: 0.21
Nodes (13): cQuizzes, cobeQuizzes, eQuizzes, ExamPartKind, examParts(), partIdOf(), gQuizzes, getQuizNodesByModule() (+5 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.09
Nodes (21): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+13 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (7): clone(), EditModel, screenList(), swapLevels(), versions(), ScreenPath, getLessonsBySection()

### Community 5 - "scoring.ts"
Cohesion: 0.15
Nodes (20): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, isAnswered() (+12 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "feedback.test.ts"
Cohesion: 0.21
Nodes (10): Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal(), FATAL_TAGS, TAG_IDS, TagDef (+2 more)

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
Cohesion: 0.14
Nodes (15): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+7 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "QuizRunner.svelte"
Cohesion: 0.08
Nodes (19): total(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+11 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (48): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+40 more)

### Community 21 - "content/index.ts"
Cohesion: 0.08
Nodes (32): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+24 more)

### Community 22 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

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

### Community 31 - "miniMarkdown.ts"
Cohesion: 0.14
Nodes (19): CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs() (+11 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "api/reminders/+server.ts"
Cohesion: 0.17
Nodes (18): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+10 more)

### Community 35 - "billing.ts"
Cohesion: 0.18
Nodes (16): defaultPlan(), Plan, planById(), accessEnd(), accessUntil(), CheckoutResult, completeOrder(), Coupon (+8 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.15
Nodes (27): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+19 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.18
Nodes (5): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (22): APP, build(), charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER (+14 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.22
Nodes (18): writingRubricId, applyLength(), mechanicsCount(), Checked, essayGrade(), essayPart(), failed(), gradeExam() (+10 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.07
Nodes (43): bytes(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+35 more)

### Community 42 - "liveLesson.ts"
Cohesion: 0.19
Nodes (16): addToCalendar(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonsInfo (+8 more)

### Community 43 - "LessonScreen"
Cohesion: 0.09
Nodes (6): EditModelLike, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 44 - "rubrics/index.ts"
Cohesion: 0.16
Nodes (14): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+6 more)

### Community 45 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

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
Cohesion: 0.20
Nodes (14): PROJECT_POINTS, chatEnds(), ChatLine, ChatSummary, drawTwo(), MAX_TURNS, MIN_TURNS, TURN_TARGET_SECONDS (+6 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 53 - "hooks.server.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.17
Nodes (17): israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+9 more)

### Community 55 - "lib/finance.ts"
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

### Community 56 - "takeHistory.ts"
Cohesion: 0.22
Nodes (12): primaryAction(), record(), stop(), toggle(), Entry, openDb(), readStats(), recordTake() (+4 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 59 - "llm.ts"
Cohesion: 0.22
Nodes (11): chat(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.12
Nodes (27): listA, listB, listC, listD, w(), eGlossAr, deckProgress, Deck (+19 more)

### Community 61 - "server/speaking.ts"
Cohesion: 0.24
Nodes (10): chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 64 - "settings/+page.svelte"
Cohesion: 0.08
Nodes (16): deleteAccount(), deleting, failed, signOut(), t, EditStore, full, ignite (+8 more)

### Community 65 - "data.ts"
Cohesion: 0.12
Nodes (27): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY, examAdvice (+19 more)

### Community 66 - "session.ts"
Cohesion: 0.25
Nodes (19): blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+11 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "motion.ts"
Cohesion: 0.06
Nodes (10): COBE_OPEN, focus(), reducedMotion, i(), homeMedia, Media, d, SUPPORT_EMAIL (+2 more)

### Community 70 - "grade/+server.ts"
Cohesion: 0.10
Nodes (32): CONTENT_TAGS, GradeRequest, LessonVerdict, MAX_TEXT, SingleRequest, getQuizNode(), ask(), block() (+24 more)

### Community 71 - "validate.ts"
Cohesion: 0.16
Nodes (9): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), LessonContent (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "storeItem"
Cohesion: 0.21
Nodes (4): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "MarkdownInput.svelte"
Cohesion: 0.29
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/playwright, dictionary-en, dictionary-en-gb, drizzle-kit, devDependencies, @axe-core/playwright, dictionary-en, dictionary-en-gb (+19 more)

### Community 79 - "passageMarks.ts"
Cohesion: 0.17
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 82 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.17
Nodes (21): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+13 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (42): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, lineNumbers, markAllCategorySchema (+34 more)

### Community 88 - "editModel.svelte.ts"
Cohesion: 0.19
Nodes (4): EditHistory, LessonBucket, Bucket, moduleSections()

### Community 89 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.18
Nodes (7): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "api/lessons/+server.ts"
Cohesion: 0.19
Nodes (16): LessonRecording, LessonSlot, accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register() (+8 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "deckProgress.svelte.ts"
Cohesion: 0.14
Nodes (10): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, DeckProgressStore, load(), persist() (+2 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (15): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+7 more)

### Community 102 - "Speak.svelte"
Cohesion: 0.12
Nodes (11): row(), groups, phrase(), reached, seconds, share, delta, firstSeconds (+3 more)

### Community 103 - "ExamEditWorkspace.svelte"
Cohesion: 0.12
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 104 - "option.ts"
Cohesion: 0.20
Nodes (9): i(), issuesByNode(), #each(), slot(), optFeedback(), Option, optText(), withFeedback() (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 111 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 118 - "getDecks"
Cohesion: 0.17
Nodes (14): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon(), nextMilestone() (+6 more)

### Community 119 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 120 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 121 - "curriculum.ts"
Cohesion: 0.18
Nodes (10): CurriculumModule, CurriculumSection, getUnitGroup(), modules, textSection, UnitGroup, unitGroups, wordsSection (+2 more)

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 129 - "screenChecks.ts"
Cohesion: 0.24
Nodes (10): MarkAllSegment, markAllSegments(), checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+2 more)

### Community 130 - "feedback/types.ts"
Cohesion: 0.15
Nodes (16): EssayVerdict, ExamPart, ExamRequest, ExamVerdicts, Feedback, MechanicsCount, ReadingItem, ReadingRequest (+8 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.20
Nodes (14): db, examAttempts, llmUsage, orders, progress, pushSubscriptions, waitlist, zoomRegistrants (+6 more)

### Community 134 - "completeRound"
Cohesion: 0.22
Nodes (13): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), completeRound(), exitRunner(), finishNode(), finishNodeAndContinue() (+5 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 137 - "rulesStore.svelte.ts"
Cohesion: 0.26
Nodes (7): RuleLevel, getLesson(), ownerModule(), ruleChain(), RulesFile, load(), ./$types

### Community 138 - "index.svelte.ts"
Cohesion: 0.08
Nodes (6): pieces, open, dictionaries, words, ./$types, item()

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "svelte/transition"
Cohesion: 0.06
Nodes (19): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+11 more)

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 143 - "checkout"
Cohesion: 0.33
Nodes (7): cobeVisible(), productsOf(), BillingError, checkout(), checkoutBody(), POST(), POST()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (18): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+10 more)

### Community 148 - "lib/api.ts"
Cohesion: 0.17
Nodes (16): ApiError, isLimit(), browserDictionaries(), checkWriting(), gradeLesson(), postGrade(), check(), issuesToMarks() (+8 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 150 - "QuizReport.svelte"
Cohesion: 0.18
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+1 more)

### Community 151 - "apiFetch"
Cohesion: 0.27
Nodes (8): apiFetch(), uploadImage(), register(), fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 152 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 153 - "saveSynced"
Cohesion: 0.15
Nodes (12): progressScope(), Engagement, lastEngagement, LastEngagementStore, load(), lessonProgress, LessonProgressStore, load() (+4 more)

### Community 155 - "I18n"
Cohesion: 0.22
Nodes (5): getModule(), I18n, ./$types, load(), ./$types

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 159 - "Handoff: recorded voice, what's left"
Cohesion: 0.40
Nodes (4): Can't be pre-recorded (stay on the browser voice), Handoff: recorded voice, what's left, How to extend, Left to record

### Community 160 - "examLock.ts"
Cohesion: 0.29
Nodes (8): ExamRef, PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt(), openAttempt(), saveAttempt()

### Community 171 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 173 - "plans.test.ts"
Cohesion: 0.25
Nodes (7): COBE_ADDON, maxPayments(), planId(), Pricing, withCobe(), setCobe(), #each()

### Community 175 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 179 - "chatTopics.ts"
Cohesion: 0.43
Nodes (5): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics()

### Community 181 - "chatAi.ts"
Cohesion: 0.20
Nodes (10): toWavBase64(), ChatMode, ChatTurnReply, addChat(), chatCount(), ChatTurnError, sendChatTurn(), CobeLevel (+2 more)

### Community 186 - "nextRoundIndex"
Cohesion: 0.29
Nodes (7): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), roundsCompleted(), totalRounds()

### Community 189 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 195 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 203 - "access"
Cohesion: 0.67
Nodes (3): access, billingEnabled, GET()

### Community 204 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 206 - "cron/reminders/+server.ts"
Cohesion: 0.26
Nodes (10): cronAuthorized(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay() (+2 more)

## Knowledge Gaps
- **865 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+860 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **57 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `rulesStore.svelte.ts`, `.refresh`, `svelte/transition`, `reviewNotes.svelte.ts`, `progressSync.svelte.ts`, `lib/api.ts`, `chatAi.ts`, `content-edit/api.ts`, `RemindersStore`, `ReviewNotesStore`, `RulesStore`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `Recorder` connect `Recorder` to `Speak.svelte`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `he` connect `test` to `index.svelte.ts`, `personas.spec.ts`, `accounts.spec.ts`, `fixtures.ts`, `he.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _865 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09259259259259259 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08235294117647059 - nodes in this community are weakly interconnected._