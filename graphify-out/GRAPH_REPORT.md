# Graph Report - dr_eng  (2026-11-21)

## Corpus Check
- 562 files · ~522,716 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2696 nodes · 5405 edges · 202 communities (153 shown, 49 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4da935d4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- LessonScreen
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- scoring.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- $app/paths
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
- miniMarkdown.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- planById
- extraction-spec.md
- GraphEditor.svelte
- ExamEditWorkspace.svelte
- billing.ts
- WritingTask.svelte
- progress.ts
- SlideStage.svelte
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- ScreenPath
- rubrics/index.ts
- llmGuard.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- dependencies
- Workflow
- checkAuth
- hooks.server.ts
- index.svelte.ts
- lib/finance.ts
- progressSync.svelte.ts
- refund.ts
- editModel.svelte.ts
- quizzes.ts
- deck/index.ts
- test
- speech.ts
- takeHistory.ts
- settings/+page.svelte
- data.ts
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- (site)/+page.svelte
- grade/+server.ts
- deckProgress.svelte.ts
- QuizReport.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- getDecks
- create-coupon.mjs
- measure-overflow.mjs
- DebugStore
- devDependencies
- examLock.ts
- content
- checkout/+page.ts
- llm.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- Recorder
- eslint-config-prettier
- curriculum.ts
- await-expressions.md
- accounts.spec.ts
- activeField.svelte.ts
- stats.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- lessonProgress.svelte.ts
- Platform: web, mobile, accounts
- server/kanban.ts
- server/speaking.ts
- PassageMcq.svelte
- AGENTS.md
- Rules
- MarkdownInput.svelte
- he.ts
- storeItem
- passageQuiz.ts
- content-i18n.mjs
- Handoff: test findings (open items only)
- ReviewNotesStore
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- language.ts
- profile.svelte.ts
- passageMarks.ts
- mechanics.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- Speak.svelte
- personas.spec.ts
- feedback/types.ts
- @sveltejs/adapter-auto
- zoom.ts
- @eslint/js
- RemindersStore
- Handoff: Zoom group lessons, testing
- lessonPath.ts
- focusTrap.ts
- motion.ts
- Module E QA
- render.md
- svelte/transition
- moduleLocation.svelte.ts
- WordImage.svelte
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- access.svelte.ts
- package.json
- Md.svelte
- lastEngagement.svelte.ts
- MatchDefinitions.svelte
- load.ts
- @types/node
- book/+page.svelte
- UX principles
- api.spec.ts
- emailTypo.ts
- Handoff: recorded voice, what's left
- prettier
- @types/nspell
- typescript-eslint
- brand.md
- @playwright/test
- auth/README.md
- MatchPairs.svelte
- smoke.spec.ts
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- TakeCompare.svelte
- access
- lessonIcon.ts
- Module G QA report
- .refresh
- quote/+server.ts
- apiFetch
- eslint
- eslint-plugin-svelte
- screenshot.ts
- svelte-check
- @sveltejs/vite-plugin-svelte
- UI review
- @types/web-push
- globals
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- api/reminders/+server.ts
- db/schema.ts

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
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (202 total, 49 thin omitted)

### Community 0 - "LessonScreen"
Cohesion: 0.15
Nodes (15): LessonScreen, cQuizzes, cobeQuizzes, eQuizzes, ExamPartKind, examParts(), partIdOf(), gQuizzes (+7 more)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.09
Nodes (19): ARCHIVE_DAYS, PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey (+11 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection()

### Community 5 - "scoring.ts"
Cohesion: 0.08
Nodes (37): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment (+29 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "$app/paths"
Cohesion: 0.09
Nodes (4): COBE_OPEN, full, ignite, ThemeMode

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
Cohesion: 0.11
Nodes (18): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+10 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "QuizRunner.svelte"
Cohesion: 0.08
Nodes (19): total(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+11 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (29): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+21 more)

### Community 21 - "content/index.ts"
Cohesion: 0.10
Nodes (32): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+24 more)

### Community 22 - "miniMarkdown.ts"
Cohesion: 0.13
Nodes (21): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+13 more)

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

### Community 31 - "planById"
Cohesion: 0.29
Nodes (8): build(), defaultPlan(), planById(), planId(), withCobe(), resolve(), setCobe(), #each()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "ExamEditWorkspace.svelte"
Cohesion: 0.11
Nodes (13): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+5 more)

### Community 35 - "billing.ts"
Cohesion: 0.16
Nodes (16): Plan, accessEnd(), accessUntil(), checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+8 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (39): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+31 more)

### Community 37 - "progress.ts"
Cohesion: 0.23
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getLastAttempt(), getResults(), hasStorage(), progressKey() (+10 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.10
Nodes (10): i(), TYPE_HE, issuesByNode(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS (+2 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (25): APP, charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES, FEATURED_OFFER (+17 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.13
Nodes (30): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, essayGrade() (+22 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.10
Nodes (31): browserDictionaries(), bytes(), checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS (+23 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.15
Nodes (22): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+14 more)

### Community 44 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (16): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+8 more)

### Community 45 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): cobeVisible(), israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+8 more)

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "checkAuth"
Cohesion: 0.22
Nodes (16): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+8 more)

### Community 53 - "hooks.server.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 54 - "index.svelte.ts"
Cohesion: 0.09
Nodes (3): dictionaries, ./$types, item()

### Community 55 - "lib/finance.ts"
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

### Community 56 - "progressSync.svelte.ts"
Cohesion: 0.18
Nodes (9): load(), MyPhrases, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys() (+1 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.12
Nodes (7): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections(), LessonContent

### Community 59 - "quizzes.ts"
Cohesion: 0.15
Nodes (11): I18n, allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes (+3 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.07
Nodes (55): listA, listB, listC, listD, w(), eGlossAr, cache, ensureLoaded() (+47 more)

### Community 61 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "takeHistory.ts"
Cohesion: 0.31
Nodes (8): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), takeKey(), TakeStats

### Community 64 - "settings/+page.svelte"
Cohesion: 0.09
Nodes (13): deleteAccount(), deleting, failed, signOut(), t, install, InstallPromptEvent, InstallStore (+5 more)

### Community 65 - "data.ts"
Cohesion: 0.18
Nodes (16): getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY, isWritingLesson(), latestEngagement() (+8 more)

### Community 66 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "(site)/+page.svelte"
Cohesion: 0.15
Nodes (5): focus(), i(), homeMedia, Media, d

### Community 70 - "grade/+server.ts"
Cohesion: 0.10
Nodes (33): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, MAX_TEXT, SingleRequest (+25 more)

### Community 71 - "deckProgress.svelte.ts"
Cohesion: 0.13
Nodes (10): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, DeckProgressStore, load(), persist() (+2 more)

### Community 72 - "QuizReport.svelte"
Cohesion: 0.12
Nodes (12): pieces, anyFailed, closed, hasSpeaking, headline, level, numbers, pending (+4 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "getDecks"
Cohesion: 0.17
Nodes (14): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckToday(), moduleWon(), nextMilestone() (+6 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/playwright, dictionary-en, dictionary-en-gb, drizzle-kit, devDependencies, @axe-core/playwright, dictionary-en, dictionary-en-gb (+19 more)

### Community 79 - "examLock.ts"
Cohesion: 0.33
Nodes (7): PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt(), openAttempt(), saveAttempt()

### Community 82 - "llm.ts"
Cohesion: 0.21
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL (+4 more)

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

### Community 90 - "curriculum.ts"
Cohesion: 0.14
Nodes (15): getLesson(), CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+7 more)

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "stats.ts"
Cohesion: 0.20
Nodes (12): examAdvice, lessonStats(), moduleHook, getInProgress(), avg(), examRows(), examStats, examTier (+4 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.08
Nodes (5): clone(), ExamEditModel, blankScreen(), getQuizNodesByModule(), QuizKind

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (15): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+7 more)

### Community 102 - "server/kanban.ts"
Cohesion: 0.30
Nodes (12): kanbanTasks, kanbanDb(), tags, taskColumns, taskFields, jsonBody(), DELETE(), PATCH() (+4 more)

### Community 103 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 104 - "PassageMcq.svelte"
Cohesion: 0.20
Nodes (3): stripLineAttrs(), gutter, lines

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "MarkdownInput.svelte"
Cohesion: 0.24
Nodes (7): htmlToMd(), pickIcon(), serialize(), sync(), HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 109 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 110 - "storeItem"
Cohesion: 0.23
Nodes (4): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeStore

### Community 111 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.18
Nodes (7): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states

### Community 118 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 119 - "profile.svelte.ts"
Cohesion: 0.11
Nodes (15): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+7 more)

### Community 120 - "passageMarks.ts"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 121 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "Speak.svelte"
Cohesion: 0.10
Nodes (12): KEY, ScreenMode, primaryAction(), primaryAction(), reached, record(), seconds, share (+4 more)

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "feedback/types.ts"
Cohesion: 0.13
Nodes (19): postGrade(), Layer1, Layer1Options, clearBelow(), DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet (+11 more)

### Community 132 - "zoom.ts"
Cohesion: 0.19
Nodes (14): LessonRecording, LessonSlot, accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register() (+6 more)

### Community 134 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "lessonPath.ts"
Cohesion: 0.40
Nodes (9): getLessonMeta(), progressScope(), moduleRoute(), hasContent(), isLessonDone(), isLessonGold(), isLessonUnlocked(), markRoundCompleted() (+1 more)

### Community 137 - "focusTrap.ts"
Cohesion: 0.24
Nodes (3): open, words, previous

### Community 138 - "motion.ts"
Cohesion: 0.13
Nodes (5): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "svelte/transition"
Cohesion: 0.11
Nodes (10): emails, i(), groups, phrase(), screenContext, supabase, showNav, ./$types (+2 more)

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (39): PALETTE, SectionTheme, activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth (+31 more)

### Community 148 - "access.svelte.ts"
Cohesion: 0.14
Nodes (10): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+2 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 150 - "Md.svelte"
Cohesion: 0.14
Nodes (7): KEY, #each(), slot(), Option, optText(), withFeedback(), i()

### Community 151 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 152 - "MatchDefinitions.svelte"
Cohesion: 0.13
Nodes (9): active, checked, primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer(), primaryAction() (+1 more)

### Community 153 - "load.ts"
Cohesion: 0.33
Nodes (5): loaded, Loader, loadLesson(), SECTIONS, toggleLabel()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 159 - "Handoff: recorded voice, what's left"
Cohesion: 0.40
Nodes (4): Can't be pre-recorded (stay on the browser voice), Handoff: recorded voice, what's left, How to extend, Left to record

### Community 168 - "MatchPairs.svelte"
Cohesion: 0.23
Nodes (9): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), fitOrder(), optionOrder() (+1 more)

### Community 171 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 173 - "TakeCompare.svelte"
Cohesion: 0.50
Nodes (3): delta, firstSeconds, newlyReached

### Community 174 - "access"
Cohesion: 0.67
Nodes (3): access, billingEnabled, GET()

### Community 175 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 181 - "quote/+server.ts"
Cohesion: 0.39
Nodes (5): BillingError, quote, checkoutBody(), POST(), POST()

### Community 182 - "apiFetch"
Cohesion: 0.13
Nodes (15): ApiError, apiFetch(), toWavBase64(), uploadImage(), BLANK, ReviewNote, reviewNotes, addChat() (+7 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 206 - "api/reminders/+server.ts"
Cohesion: 0.15
Nodes (17): cronAuthorized(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay() (+9 more)

### Community 219 - "db/schema.ts"
Cohesion: 0.25
Nodes (10): db, examAttempts, llmUsage, orders, progress, pushSubscriptions, waitlist, zoomRegistrants (+2 more)

## Knowledge Gaps
- **865 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+860 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `settings/+page.svelte`, `content-edit/api.ts`, `feedback/types.ts`, `RemindersStore`, `api/lessons/+server.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `.refresh`, `access.svelte.ts`, `progressSync.svelte.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `he` connect `test` to `personas.spec.ts`, `he.ts`, `fixtures.ts`, `index.svelte.ts`, `accounts.spec.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `content-edit/api.ts`, `EditModel`, `scoring.ts`, `RulesPanel.svelte`, `load.ts`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _865 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `LessonScreen` be split into smaller, more focused modules?**
  _Cohesion score 0.1477832512315271 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._