# Graph Report - finish  (2026-11-28)

## Corpus Check
- 571 files · ~520,535 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2829 nodes · 4605 edges · 292 communities (205 shown, 87 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 118 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f4331af0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- $lib/components/Button.svelte
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- option.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- $lib/i18n/index.svelte
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- activeField.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- quiz/index.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- curriculum.ts
- github.ts
- extraction-spec.md
- GraphEditor.svelte
- scheduler.ts
- billing.ts
- WritingTask.svelte
- session.ts
- db/schema.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- liveLesson.ts
- progress.ts
- scan.ts
- feedback.test.ts
- lib/quiz/QuizRunner.svelte
- writingLint.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- scripts
- Workflow
- accounts.spec.ts
- profile.svelte.ts
- Recorder
- test
- takeHistory.ts
- [quizId]/+page.svelte
- TitleEdits
- lessonProgress.svelte.ts
- lib/content-edit/MarkdownInput.svelte
- Policies: legal and billing
- speech.ts
- llmGuard.ts
- reminders.svelte.ts
- data.ts
- quizzes.ts
- validate.ts
- snippet.md
- motion.ts
- ScreenPath
- passageMarks.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- personas.spec.ts
- create-coupon.mjs
- measure-overflow.mjs
- editModel.svelte.ts
- devDependencies
- storeItem
- content
- checkout/+page.ts
- RulesStore
- Material
- wordsFile.ts
- feedbackEmail.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- screenChecks.ts
- llm.ts
- deck.test.ts
- await-expressions.md
- fixtures.ts
- miniMarkdown.ts
- lib/finance.ts
- attach.md
- ExamEditModel
- answers.svelte.ts
- .mcp.json
- content-edit/api.ts
- Platform: web, mobile, accounts
- feedback/types.ts
- acceptedAnswers.ts
- lib/api.ts
- AGENTS.md
- Rules
- svelte/transition
- lib/content-edit/ExamEditWorkspace.svelte
- api/reminders/+server.ts
- server/speaking.ts
- content-i18n.mjs
- server/grade.ts
- deck/index.ts
- Submit → feedback framework
- index.svelte.ts
- chat.ts
- scoring.ts
- renewalEmail.ts
- zoom.ts
- progressSync.svelte.ts
- hydratable.md
- feedback/speaking.ts
- cobe.test.ts
- inspect.md
- vercel.json
- ActivityStore
- feedback/rules.ts
- passageQuiz.ts
- @sveltejs/adapter-auto
- grade/+server.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- edit-words/+page.svelte
- prettier-plugin-tailwindcss
- saveSynced
- server/supabase.ts
- render.md
- legacyIds.ts
- access.svelte.ts
- svelte/easing
- ReviewNotesStore
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- $app/paths
- Handoff: payment provider (not chosen)
- EditHistory
- stats.ts
- QuizReport.svelte
- sectionThemes.ts
- SlideStage.svelte
- merge.ts
- UX principles
- api.spec.ts
- dictionary-en
- lessonIcon.ts
- mdInline
- meta.ts
- submitToLlm
- brand.md
- rubrics/index.ts
- auth/README.md
- examLock.ts
- playwright.config.ts
- focus
- app/+layout.ts
- RemindersStore
- content.spec.ts
- hooks.server.ts
- chatTopics.ts
- goalOptions.ts
- choice.ts
- emailTypo.ts
- svelte-check
- checkoutBody
- review/+server.ts
- UI review
- schools/+page.ts
- rules/+server.ts
- @types/web-push
- content-edit/+server.ts
- api/lessons/+server.ts
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte
- edit/+page.svelte
- edit-exam/+page.svelte
- reviewNotes.svelte.ts
- DebugStore
- markAllColors.ts
- Opener.svelte
- textColors.ts
- writingMoves.ts
- server/kanban.ts
- support.ts
- cron/reminders/+server.ts
- svelte
- @sveltejs/kit
- @tailwindcss/forms
- @tailwindcss/typography
- typescript
- feedback/+server.ts
- [id]/+server.ts
- progress/+server.ts
- subscription/+server.ts
- finance/+page.svelte
- smoke.spec.ts
- auth.ts
- calloutIcons.ts
- PassageText.svelte
- sentenceCompletion.ts
- phrases.ts
- flags.ts
- focusTrap.ts
- I18n
- screenshot.ts
- scrollLock.ts
- server/finance.ts
- [moduleId]/+layout.ts
- words/+page.ts
- (site)/+layout.ts
- dictionary-en-gb
- drizzle-kit
- eslint
- eslint-config-prettier
- eslint-plugin-svelte
- globals
- @playwright/test
- @sveltejs/adapter-static
- @sveltejs/vite-plugin-svelte
- tailwindcss
- @tailwindcss/vite
- hooks.client.ts
- words.ar.ts
- wordImage.ts
- screenContext.svelte.ts
- ocr/+server.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 42 edges
3. `ScreenPath` - 28 edges
4. `LessonNode` - 23 edges
5. `EditModelLike` - 22 edges
6. `scripts` - 21 edges
7. `Rules` - 18 edges
8. `saveSynced()` - 15 edges
9. `AuthStore` - 14 edges
10. `Checklist` - 14 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `buildSession()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts
- `decoys()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (292 total, 87 thin omitted)

### Community 0 - "$lib/components/Button.svelte"
Cohesion: 0.08
Nodes (5): full, ignite, slot(), words, formattedDate

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.09
Nodes (18): ARCHIVE_DAYS, PEOPLE, Person, personLabel, PRIORITIES, Priority, priorityLabel, Sort (+10 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "option.ts"
Cohesion: 0.33
Nodes (4): #each(), Option, optText(), withFeedback()

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "$lib/i18n/index.svelte"
Cohesion: 0.08
Nodes (4): d, genders, words, item()

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
Nodes (11): id, inherited, lessonId, lessons, moduleId, MODULES, own, report (+3 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (50): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), row() (+42 more)

### Community 21 - "content/index.ts"
Cohesion: 0.15
Nodes (19): c1Lessons, c2Lessons, c3Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons (+11 more)

### Community 22 - "quiz/index.ts"
Cohesion: 0.16
Nodes (15): cQuizzes, cobeQuizzes, eQuizzes, ExamPartKind, examParts(), partIdOf(), gQuizzes, examLocked() (+7 more)

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.10
Nodes (17): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+9 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 30 - "curriculum.ts"
Cohesion: 0.15
Nodes (9): CurriculumModule, CurriculumSection, literatureModules, modules, textSection, UnitGroup, unitGroups, wordsSection (+1 more)

### Community 31 - "github.ts"
Cohesion: 0.73
Nodes (5): getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "scheduler.ts"
Cohesion: 0.16
Nodes (13): deckProgress, DeckProgressStore, load(), persist(), ProgressMap, addDays(), INTERVAL_DAYS, MAX_BOX (+5 more)

### Community 35 - "billing.ts"
Cohesion: 0.13
Nodes (19): accessEnd(), billingEnabled, BillingError, checkout(), CheckoutResult, completeCheckout(), Coupon, CouponProblem (+11 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "session.ts"
Cohesion: 0.29
Nodes (17): blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+9 more)

### Community 38 - "db/schema.ts"
Cohesion: 0.22
Nodes (8): coupons, israelToday, kanbanTasks, llmUsage, orders, progress, pushSubscriptions, zoomRegistrants

### Community 39 - "plans.ts"
Cohesion: 0.06
Nodes (40): APP, cart, charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+32 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.19
Nodes (21): applyLength(), mechanicsCount(), check(), Checked, essayGrade(), essayPart(), failed(), gradeExam() (+13 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.06
Nodes (52): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+44 more)

### Community 42 - "liveLesson.ts"
Cohesion: 0.17
Nodes (18): register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonRecording (+10 more)

### Community 43 - "progress.ts"
Cohesion: 0.25
Nodes (18): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+10 more)

### Community 44 - "scan.ts"
Cohesion: 0.60
Nodes (3): previewUrl(), scanHandwriting(), toJpeg()

### Community 45 - "feedback.test.ts"
Cohesion: 0.17
Nodes (12): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, moduleId, ModuleRules, readingDeductions(), CONTENT_TAGS (+4 more)

### Community 46 - "lib/quiz/QuizRunner.svelte"
Cohesion: 0.09
Nodes (11): i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds, showTimer (+3 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "moduleLocation.svelte.ts"
Cohesion: 0.21
Nodes (7): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), isRecord()

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.24
Nodes (8): PROJECT_POINTS, block(), chatPrompt(), chatTurn(), ChatTurnRequest, replySchema, body, POST

### Community 50 - "scripts"
Cohesion: 0.04
Nodes (46): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+38 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 53 - "profile.svelte.ts"
Cohesion: 0.13
Nodes (11): examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions(), dayPart, load(), NAME_MAX (+3 more)

### Community 54 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 55 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 56 - "takeHistory.ts"
Cohesion: 0.31
Nodes (7): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), TakeStats

### Community 57 - "[quizId]/+page.svelte"
Cohesion: 0.12
Nodes (7): lockedUntil, lockedWhen, row, rules, taken, tips, ./$types

### Community 59 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 60 - "lib/content-edit/MarkdownInput.svelte"
Cohesion: 0.17
Nodes (6): i(), htmlToMd(), pickIcon(), serialize(), sync(), issuesByNode()

### Community 61 - "Policies: legal and billing"
Cohesion: 0.33
Nodes (5): Accessibility, Billing, Facts the texts must match, Open (owner), Policies: legal and billing

### Community 62 - "speech.ts"
Cohesion: 0.15
Nodes (15): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+7 more)

### Community 63 - "llmGuard.ts"
Cohesion: 0.21
Nodes (15): access, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+7 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.14
Nodes (10): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, REMINDER_HOURS, reminders, ReminderStatus (+2 more)

### Community 65 - "data.ts"
Cohesion: 0.12
Nodes (25): SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson(), latestEngagement() (+17 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (8): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, MinistryQuiz, ministryQuizzes, Quiz, QuizBase

### Community 67 - "validate.ts"
Cohesion: 0.19
Nodes (6): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection()

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 72 - "passageMarks.ts"
Cohesion: 0.25
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "editModel.svelte.ts"
Cohesion: 0.19
Nodes (5): LessonBucket, Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 78 - "devDependencies"
Cohesion: 0.22
Nodes (9): @axe-core/playwright, devDependencies, @axe-core/playwright, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

### Community 79 - "storeItem"
Cohesion: 0.19
Nodes (5): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeMode, ThemeStore

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "wordsFile.ts"
Cohesion: 0.16
Nodes (14): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), parseArrayLiteral(), splitArrayHead(), sq(), patchGlosses() (+6 more)

### Community 85 - "feedbackEmail.ts"
Cohesion: 0.38
Nodes (5): subscriptions(), escape(), feedbackHtml(), FeedbackReport, row()

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (39): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, lineNumbers, markAllCategorySchema (+31 more)

### Community 88 - "screenChecks.ts"
Cohesion: 0.21
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 89 - "llm.ts"
Cohesion: 0.22
Nodes (11): chat(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 90 - "deck.test.ts"
Cohesion: 0.26
Nodes (7): listA, listB, listC, listD, w(), EXAM_BOX, wordResults()

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.18
Nodes (7): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.15
Nodes (10): CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, Line, markLangRuns(), OL_BLOCK_CLASS, TEXT_BLOCK_CLASS (+2 more)

### Community 94 - "lib/finance.ts"
Cohesion: 0.20
Nodes (8): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 100 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (11): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+3 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (16): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+8 more)

### Community 102 - "feedback/types.ts"
Cohesion: 0.11
Nodes (21): postGrade(), issuesToMarks(), Layer1, Layer1Options, runLayer1(), pieces, EssayVerdict, ExamPart (+13 more)

### Community 103 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 104 - "lib/api.ts"
Cohesion: 0.27
Nodes (3): ApiError, auth, supabase

### Community 105 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "svelte/transition"
Cohesion: 0.08
Nodes (13): groups, phrase(), primaryAction(), reached, record(), seconds, share, stop() (+5 more)

### Community 109 - "lib/content-edit/ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 110 - "api/reminders/+server.ts"
Cohesion: 0.18
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

### Community 111 - "server/speaking.ts"
Cohesion: 0.21
Nodes (10): chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "server/grade.ts"
Cohesion: 0.24
Nodes (13): ask(), block(), cleanMarks(), gradeEssay(), gradeLesson(), gradeReading(), KINDS, markSchema (+5 more)

### Community 114 - "deck/index.ts"
Cohesion: 0.20
Nodes (14): activeDecks(), Deck, decks, deckStats(), deckToday(), dueToday(), getDecks(), glosses (+6 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "index.svelte.ts"
Cohesion: 0.19
Nodes (8): dictionaries, Language, ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 117 - "chat.ts"
Cohesion: 0.15
Nodes (13): chatEnds(), ChatLine, ChatMode, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS, MIN_TURNS (+5 more)

### Community 118 - "scoring.ts"
Cohesion: 0.28
Nodes (11): LessonScreen, submit(), applyGrades(), countedIds(), isScored(), normalize(), Scored, scoreQuiz() (+3 more)

### Community 119 - "renewalEmail.ts"
Cohesion: 0.60
Nodes (5): israelDay(), planName(), Renewal, renewalHtml(), renewalSubject()

### Community 120 - "zoom.ts"
Cohesion: 0.26
Nodes (11): accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register(), schedule(), unregister() (+3 more)

### Community 121 - "progressSync.svelte.ts"
Cohesion: 0.27
Nodes (8): isSyncedKey(), Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 123 - "feedback/speaking.ts"
Cohesion: 0.25
Nodes (8): CobeLevel, CobePart, gradeSpeaking(), half(), lengthPercentOff(), SpeakingJudgement, ExamGrade, SpeakingVerdict

### Community 125 - "cobe.test.ts"
Cohesion: 0.31
Nodes (4): cobe1Lessons, cobe2Lessons, cobe3Lessons, rubric

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "ActivityStore"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 129 - "feedback/rules.ts"
Cohesion: 0.18
Nodes (7): KEY, clearBelow(), DEFAULT_RULES, resolveRules(), RULE_KEYS, Rules, RuleSet

### Community 130 - "passageQuiz.ts"
Cohesion: 0.39
Nodes (7): keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen, screen

### Community 132 - "grade/+server.ts"
Cohesion: 0.14
Nodes (10): body, count, essay, ExamBody, notes, partId, POST, question (+2 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.38
Nodes (10): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), mergeItems(), num() (+2 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "edit-words/+page.svelte"
Cohesion: 0.17
Nodes (5): changed, invalidCount, saving, ssr, ./$types

### Community 138 - "saveSynced"
Cohesion: 0.19
Nodes (8): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, onSyncedChange(), saveSynced()

### Community 139 - "server/supabase.ts"
Cohesion: 0.33
Nodes (3): accountsEnabled, noSession, SessionUser

### Community 141 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 142 - "access.svelte.ts"
Cohesion: 0.27
Nodes (8): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, apiFetch()

### Community 143 - "svelte/easing"
Cohesion: 0.05
Nodes (13): total(), emails, deleteAccount(), deleting, failed, signOut(), t, showNav (+5 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (37): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+29 more)

### Community 149 - "Handoff: payment provider (not chosen)"
Cohesion: 0.40
Nodes (4): Ask lawyer / accountant, Handoff: payment provider (not chosen), Provider must offer, To build with it

### Community 151 - "stats.ts"
Cohesion: 0.32
Nodes (6): avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT

### Community 152 - "QuizReport.svelte"
Cohesion: 0.18
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+1 more)

### Community 155 - "merge.ts"
Cohesion: 0.29
Nodes (9): gradeLesson(), applyFixes(), Corrected, Fix, FIX_TAGS, locateMarks(), mergeMarks(), toOriginal() (+1 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 159 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 160 - "mdInline"
Cohesion: 0.29
Nodes (9): isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs(), mdBlock(), mdInline(), parseLine(), textDir() (+1 more)

### Community 161 - "meta.ts"
Cohesion: 0.13
Nodes (13): loaded, Loader, loadLesson(), SECTIONS, byId, getLessonMeta(), LessonMeta, ownerModule() (+5 more)

### Community 165 - "rubrics/index.ts"
Cohesion: 0.22
Nodes (8): CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion, WritingRubricId, writingRubrics

### Community 168 - "examLock.ts"
Cohesion: 0.33
Nodes (5): db, examAttempts, exempt(), openAttempt(), saveAttempt()

### Community 171 - "focus"
Cohesion: 0.25
Nodes (4): focus(), i(), homeMedia, Media

### Community 179 - "content.spec.ts"
Cohesion: 0.29
Nodes (5): UNITS, allLessons, progressScope(), fivePoint, lessonForUnits()

### Community 181 - "hooks.server.ts"
Cohesion: 0.43
Nodes (6): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS

### Community 182 - "chatTopics.ts"
Cohesion: 0.43
Nodes (5): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics()

### Community 183 - "goalOptions.ts"
Cohesion: 0.40
Nodes (3): sessionKey(), sessionOptions(), UNKNOWN_SESSION

### Community 185 - "choice.ts"
Cohesion: 0.60
Nodes (4): isAnswered(), pickCounted(), counted(), ids

### Community 186 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 188 - "checkoutBody"
Cohesion: 0.60
Nodes (3): checkoutBody(), POST(), POST()

### Community 189 - "review/+server.ts"
Cohesion: 0.33
Nodes (3): body, ReviewNote, ReviewNotes

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 192 - "rules/+server.ts"
Cohesion: 0.40
Nodes (4): fileSchema, POST(), rules, serialize()

### Community 194 - "content-edit/+server.ts"
Cohesion: 0.53
Nodes (5): assertValid(), Body, isText(), POST(), sectionFile()

### Community 195 - "api/lessons/+server.ts"
Cohesion: 0.60
Nodes (5): entitled(), GET(), info(), nameBody, POST()

### Community 207 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 209 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 211 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 214 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 215 - "server/kanban.ts"
Cohesion: 0.40
Nodes (3): tags, taskColumns, taskFields

### Community 218 - "cron/reminders/+server.ts"
Cohesion: 0.60
Nodes (4): GET(), israelDay(), israelHour(), MESSAGES

### Community 224 - "feedback/+server.ts"
Cohesion: 0.50
Nodes (4): allowed(), body, POST(), sent

### Community 225 - "[id]/+server.ts"
Cohesion: 0.60
Nodes (4): DELETE(), PATCH(), patchBody, taskId()

### Community 226 - "progress/+server.ts"
Cohesion: 0.70
Nodes (4): GET(), parseItems(), POST(), scope()

### Community 227 - "subscription/+server.ts"
Cohesion: 0.70
Nodes (4): DELETE(), GET(), TARGETS, view()

### Community 233 - "PassageText.svelte"
Cohesion: 0.50
Nodes (3): stripLineAttrs(), gutter, lines

### Community 234 - "sentenceCompletion.ts"
Cohesion: 0.83
Nodes (3): FILLER, isSentenceCompletionMatch(), normalize()

## Knowledge Gaps
- **872 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+867 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **87 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `item()` connect `$lib/i18n/index.svelte` to `progressMerge.ts`, `lesson-screens/types.ts`, `motion.ts`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `explanation()` connect `session.ts` to `lesson-screens/types.ts`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `ExamEditModel` connect `ExamEditModel` to `editModel.svelte.ts`, `ScreenPath`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _872 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `$lib/components/Button.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.07957957957957958 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._