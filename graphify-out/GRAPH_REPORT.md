# Graph Report - dr_eng  (2026-11-25)

## Corpus Check
- 563 files · ~522,240 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2680 nodes · 5260 edges · 194 communities (147 shown, 47 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b91a87a7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- feedback/types.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- scoring.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- activeField.svelte.ts
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
- hooks.server.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- api/reminders/+server.ts
- billing.ts
- WritingTask.svelte
- progress.ts
- ReviewNotesStore
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- content-nodes.test.ts
- rubrics/index.ts
- Mcq.svelte
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- dependencies
- Workflow
- getDecks
- llm.ts
- llmGuard.ts
- MatchDefinitions.svelte
- takeHistory.ts
- refund.ts
- TitleEdits
- server/speaking.ts
- deck/index.ts
- EditHistory
- speech.ts
- QuizReport.svelte
- reminders.svelte.ts
- data.ts
- quizzes.ts
- typos.ts
- snippet.md
- Button.svelte
- grade/+server.ts
- LessonScreen
- RulesStore
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- debug.svelte.ts
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- MatchPairs.svelte
- content
- checkout/+page.ts
- examLock.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- SlideStage.svelte
- storeItem
- accounts.spec.ts
- await-expressions.md
- fixtures.ts
- miniMarkdown.ts
- lib/finance.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- (site)/+page.svelte
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- ExamEditWorkspace.svelte
- Speak.svelte
- AGENTS.md
- Rules
- index.svelte.ts
- language.ts
- test
- content-i18n.mjs
- Handoff: test findings (open items only)
- meta.ts
- Submit → feedback framework
- he.ts
- eslint-config-prettier
- localize.svelte.ts
- profile.svelte.ts
- content-edit/api.ts
- curriculum.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- lessonProgress.svelte.ts
- rulesStore.svelte.ts
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- ProgressSync
- personas.spec.ts
- RemindersStore
- Module E QA
- render.md
- lib/api.ts
- eslint-plugin-svelte
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- WordImageField.svelte
- package.json
- activity.svelte.ts
- apiFetch
- chatTopics.ts
- ProfileStore
- @types/node
- sectionThemes.ts
- UX principles
- api.spec.ts
- acceptedAnswers.ts
- Handoff: recorded voice, what's left
- LoginScreen.svelte
- @types/nspell
- typescript-eslint
- brand.md
- @playwright/test
- auth/README.md
- Recorder
- lessonIcon.ts
- playwright.config.ts
- app/+layout.ts
- auth.svelte.ts
- Module G QA report
- eslint
- svelte-check
- @sveltejs/vite-plugin-svelte
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
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 28 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 22 edges
9. `scripts` - 21 edges
10. `QuizNode` - 19 edges

## Surprising Connections (you probably didn't know these)
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/dashboard/+server.ts → front/src/lib/content-edit/auth.ts

## Import Cycles
- None detected.

## Communities (194 total, 47 thin omitted)

### Community 0 - "feedback/types.ts"
Cohesion: 0.15
Nodes (22): isLimit(), gradeLesson(), issuesToMarks(), Layer1, Layer1Options, runLayer1(), applyFixes(), Corrected (+14 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.09
Nodes (29): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+21 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), moduleSections()

### Community 5 - "scoring.ts"
Cohesion: 0.08
Nodes (34): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment, markAllSegments(), checkScreen(), duplicates() (+26 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "AuthStore"
Cohesion: 0.09
Nodes (7): emails, AuthStore, deleteAccount(), deleting, failed, signOut(), t

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

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
Cohesion: 0.09
Nodes (17): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, i(), footerLabel, hiddenIndices, partBreaks (+9 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (29): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+21 more)

### Community 21 - "content/index.ts"
Cohesion: 0.09
Nodes (29): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+21 more)

### Community 22 - "hooks.server.ts"
Cohesion: 0.19
Nodes (13): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+5 more)

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
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "api/reminders/+server.ts"
Cohesion: 0.20
Nodes (13): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, POST(), DELETE(), endpoint (+5 more)

### Community 35 - "billing.ts"
Cohesion: 0.11
Nodes (26): cobeVisible(), Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, BillingError (+18 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.15
Nodes (27): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+19 more)

### Community 38 - "ReviewNotesStore"
Cohesion: 0.25
Nodes (4): BLANK, ReviewNote, reviewNotes, ReviewNotesStore

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (31): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+23 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.16
Nodes (23): writingRubricId, applyLength(), mechanicsCount(), postGrade(), check(), Checked, essayGrade(), essayPart() (+15 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.14
Nodes (23): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+15 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.10
Nodes (35): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+27 more)

### Community 43 - "content-nodes.test.ts"
Cohesion: 0.23
Nodes (11): cQuizzes, cobeQuizzes, eQuizzes, ExamPartKind, examParts(), partIdOf(), gQuizzes, QuizKind (+3 more)

### Community 44 - "rubrics/index.ts"
Cohesion: 0.15
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 45 - "Mcq.svelte"
Cohesion: 0.12
Nodes (7): KEY, #each(), slot(), Option, optText(), withFeedback(), i()

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
Cohesion: 0.17
Nodes (17): PROJECT_POINTS, chatEnds(), ChatLine, ChatSummary, drawTwo(), MAX_TURNS, MIN_TURNS, TURN_TARGET_SECONDS (+9 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "getDecks"
Cohesion: 0.31
Nodes (7): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, load()

### Community 53 - "llm.ts"
Cohesion: 0.18
Nodes (12): chat(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+4 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.26
Nodes (13): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Activity (+5 more)

### Community 55 - "MatchDefinitions.svelte"
Cohesion: 0.14
Nodes (9): active, checked, primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer(), primaryAction() (+1 more)

### Community 56 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 59 - "server/speaking.ts"
Cohesion: 0.25
Nodes (9): band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema, body (+1 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (52): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+44 more)

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "QuizReport.svelte"
Cohesion: 0.12
Nodes (13): row(), phrase(), anyFailed, closed, hasSpeaking, headline, level, numbers (+5 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.10
Nodes (10): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, REMINDER_HOURS, reminders, ReminderStatus (+2 more)

### Community 65 - "data.ts"
Cohesion: 0.13
Nodes (27): getLessonMetaBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters (+19 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.20
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+2 more)

### Community 67 - "typos.ts"
Cohesion: 0.17
Nodes (14): browserDictionaries(), bytes(), checkWriting(), ALLOWED, CONTRACTIONS, DictData, DictLoader, HYPHEN_PREFIXES (+6 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "Button.svelte"
Cohesion: 0.11
Nodes (4): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, formattedDate

### Community 70 - "grade/+server.ts"
Cohesion: 0.09
Nodes (35): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, MAX_TEXT, SingleRequest (+27 more)

### Community 71 - "LessonScreen"
Cohesion: 0.10
Nodes (10): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+2 more)

### Community 72 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

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
Cohesion: 0.25
Nodes (8): announce(), announcement, mistakes, pick(), shuffleNotIdentity(), fitOrder(), optionOrder(), shuffle()

### Community 82 - "examLock.ts"
Cohesion: 0.29
Nodes (8): ExamRef, PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt(), openAttempt(), saveAttempt()

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

### Community 88 - "SlideStage.svelte"
Cohesion: 0.08
Nodes (18): onMove(), onUp(), i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE (+10 more)

### Community 89 - "storeItem"
Cohesion: 0.15
Nodes (5): I18n, prefaceSeen, PrefaceSeenStore, storeItem(), ThemeStore

### Community 90 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.13
Nodes (9): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states, app (+1 more)

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.09
Nodes (24): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+16 more)

### Community 94 - "lib/finance.ts"
Cohesion: 0.17
Nodes (11): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+3 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): clone(), ExamEditModel, getQuizNodesByModule()

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "(site)/+page.svelte"
Cohesion: 0.16
Nodes (5): focus(), i(), homeMedia, Media, d

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (15): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+7 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.17
Nodes (11): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, onSyncedChange(), readAt() (+3 more)

### Community 103 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 104 - "Speak.svelte"
Cohesion: 0.09
Nodes (13): KEY, ScreenMode, primaryAction(), primaryAction(), reached, record(), seconds, share (+5 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "index.svelte.ts"
Cohesion: 0.08
Nodes (8): total(), pieces, open, dictionaries, groups, words, previous, item()

### Community 109 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 110 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "meta.ts"
Cohesion: 0.18
Nodes (15): loaded, Loader, loadLesson(), SECTIONS, byId, getLessonMeta(), LessonMeta, progressScope() (+7 more)

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
Cohesion: 0.11
Nodes (14): sessionKey(), sessionOptions(), UNKNOWN_SESSION, full, ignite, examDate(), ExamSeason, ExamSession (+6 more)

### Community 120 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 121 - "curriculum.ts"
Cohesion: 0.16
Nodes (12): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+4 more)

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

### Community 129 - "rulesStore.svelte.ts"
Cohesion: 0.33
Nodes (6): RuleLevel, getLesson(), ownerModule(), ruleChain(), RulesFile, load()

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.16
Nodes (18): cronAuthorized(), db, examAttempts, israelToday, llmUsage, orders, progress, pushSubscriptions (+10 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 138 - "RemindersStore"
Cohesion: 0.39
Nodes (3): currentSubscription(), RemindersStore, worker()

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "lib/api.ts"
Cohesion: 0.12
Nodes (8): balances, status(), lockedUntil, lockedWhen, row, rules, taken, tips

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.08
Nodes (36): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+28 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 150 - "activity.svelte.ts"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 151 - "apiFetch"
Cohesion: 0.13
Nodes (17): ApiError, apiFetch(), toWavBase64(), ChatMode, ChatTurnReply, addChat(), chatCount(), ChatTurnError (+9 more)

### Community 152 - "chatTopics.ts"
Cohesion: 0.43
Nodes (5): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 159 - "Handoff: recorded voice, what's left"
Cohesion: 0.40
Nodes (4): Can't be pre-recorded (stay on the browser voice), Handoff: recorded voice, what's left, How to extend, Left to record

### Community 160 - "LoginScreen.svelte"
Cohesion: 0.31
Nodes (3): COMMON, distance(), suggestEmail()

### Community 169 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 173 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (17): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+9 more)

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **866 isolated node(s):** `LegalDoc`, `Layer1`, `Fix`, `ReadingItem`, `ActiveField` (+861 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `feedback/types.ts`, `rulesStore.svelte.ts`, `reminders.svelte.ts`, `ReviewNotesStore`, `progressSync.svelte.ts`, `AuthStore`, `RulesStore`, `api/lessons/+server.ts`, `gradeExam.ts`, `ProgressSync`, `auth.svelte.ts`, `lib/api.ts`, `RemindersStore`, `content-edit/api.ts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `he` connect `test` to `personas.spec.ts`, `index.svelte.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `content/index.ts`, `LessonScreen`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `LegalDoc`, `Layer1`, `Fix` to the rest of the system?**
  _866 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08739495798319327 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0783673469387755 - nodes in this community are weakly interconnected._