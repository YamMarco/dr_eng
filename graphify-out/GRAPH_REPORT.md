# Graph Report - dr_eng  (2026-11-25)

## Corpus Check
- 580 files · ~538,459 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2840 nodes · 5567 edges · 211 communities (162 shown, 49 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 115 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `54886252`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- grade/+server.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Recorder
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
- scoring.ts
- lesson-screens/types.ts
- content-nodes.test.ts
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
- validate.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chatSpeaking.ts
- dependencies
- Workflow
- session.ts
- Mcq.svelte
- content/index.ts
- submitToLlm
- saveSynced
- refund.ts
- TitleEdits
- Md.svelte
- deck/index.ts
- QuizReport.svelte
- speech.ts
- [quizId]/+page.svelte
- reminders.svelte.ts
- data.ts
- quizzes.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- schools/+page.svelte
- server/grade.ts
- LessonScreen
- RulesStore
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- DebugStore
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- 5-Point Bagrut Handbook (February 2025)
- content
- checkout/+page.ts
- progressSync.svelte.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- SlideStage.svelte
- SpeakingFeedback.svelte
- accounts.spec.ts
- await-expressions.md
- fixtures.ts
- COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)
- lib/finance.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- content-edit/api.ts
- Platform: web, mobile, accounts
- onSyncedChange
- ExamEditWorkspace.svelte
- lessonProgress.svelte.ts
- AGENTS.md
- Rules
- QuizRunner.svelte
- scheduler.ts
- test
- edit-exam/+page.svelte
- content-i18n.mjs
- Handoff: test findings (open items only)
- getDecks
- Submit → feedback framework
- he.ts
- eslint-config-prettier
- Breakdown of criteria with further caveats and explanations
- goalOptions.ts
- passageMarks.ts
- curriculum.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- AccountSection.svelte
- rulesStore.svelte.ts
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- index.svelte.ts
- personas.spec.ts
- WordImageField.svelte
- Module E QA
- render.md
- cobe.test.ts
- eslint-plugin-svelte
- access.svelte.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- activity.svelte.ts
- package.json
- editModel.svelte.ts
- apiFetch
- content/types.ts
- deckProgress.svelte.ts
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
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- svelte/transition
- llmGuard.ts
- Module G QA report
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- eslint
- storeItem
- content-edit-files.test.ts
- svelte-check
- @sveltejs/vite-plugin-svelte
- Module G - guidelines and table of specifications
- UI review
- schools/+page.ts
- Module C - guidelines and table of specifications
- @types/web-push
- globals
- InstallStore
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
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `buildSession()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts
- `decoys()` --indirect_call--> `w()`  [INFERRED]
  front/src/lib/deck/session.ts → front/src/lib/content/e/word.ts

## Import Cycles
- None detected.

## Communities (211 total, 49 thin omitted)

### Community 0 - "grade/+server.ts"
Cohesion: 0.11
Nodes (23): moduleId, ExamRef, PartVerdict, getQuizNode(), examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt() (+15 more)

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
Nodes (6): clone(), EditModel, swapLevels(), versions(), getLessonsBySection(), LessonNode

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "activeField.svelte.ts"
Cohesion: 0.10
Nodes (34): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+26 more)

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

### Community 19 - "scoring.ts"
Cohesion: 0.14
Nodes (22): labelled(), openAnswers(), ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect() (+14 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (40): ESCAPE, escapeText(), isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs(), Line, markLangRuns() (+32 more)

### Community 21 - "content-nodes.test.ts"
Cohesion: 0.15
Nodes (14): c1Lessons, d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons, f1Lessons, f2Lessons (+6 more)

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
Cohesion: 0.20
Nodes (19): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+11 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "feedback/types.ts"
Cohesion: 0.16
Nodes (14): Layer1, Layer1Options, pieces, RuleSet, ExamPart, ExamRequest, ExamVerdicts, Feedback (+6 more)

### Community 35 - "billing.ts"
Cohesion: 0.12
Nodes (22): COBE_OPEN, cobeVisible(), maxPayments(), accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult (+14 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.18
Nodes (24): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+16 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.22
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (33): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+25 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.12
Nodes (34): isLimit(), browserDictionaries(), bytes(), DictData, readingDeductions(), applyLength(), mechanicsCount(), gradeLesson() (+26 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.06
Nodes (50): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+42 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.10
Nodes (34): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+26 more)

### Community 43 - "quiz/index.ts"
Cohesion: 0.31
Nodes (8): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, QuizKind, QuizNode, QuizOptions, now

### Community 44 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, WritingRubricId (+7 more)

### Community 45 - "validate.ts"
Cohesion: 0.12
Nodes (19): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment (+11 more)

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
Cohesion: 0.07
Nodes (45): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+37 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "session.ts"
Cohesion: 0.25
Nodes (19): blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+11 more)

### Community 53 - "Mcq.svelte"
Cohesion: 0.12
Nodes (8): KEY, #each(), slot(), Option, optText(), withFeedback(), i(), formattedDate

### Community 54 - "content/index.ts"
Cohesion: 0.18
Nodes (10): UNITS, c2Lessons, c3Lessons, e1Lessons, g1Lessons, all, allLessons, progressScope() (+2 more)

### Community 56 - "saveSynced"
Cohesion: 0.21
Nodes (13): primaryAction(), record(), stop(), toggle(), saveSynced(), Entry, openDb(), readStats() (+5 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 59 - "Md.svelte"
Cohesion: 0.04
Nodes (26): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+18 more)

### Community 60 - "deck/index.ts"
Cohesion: 0.18
Nodes (14): listA, listB, listC, listD, w(), eGlossAr, Deck, decks (+6 more)

### Community 61 - "QuizReport.svelte"
Cohesion: 0.15
Nodes (13): isAnswered(), pickCounted(), anyFailed, closed, hasSpeaking, headline, level, numbers (+5 more)

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "[quizId]/+page.svelte"
Cohesion: 0.18
Nodes (6): lockedUntil, lockedWhen, row, rules, taken, tips

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.08
Nodes (11): auth, EditStore, full, ignite, install, InstallPromptEvent, Platform, MOBILE_BUILD (+3 more)

### Community 65 - "data.ts"
Cohesion: 0.13
Nodes (31): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY, examAdvice (+23 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.12
Nodes (13): I18n, allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes (+5 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "schools/+page.svelte"
Cohesion: 0.20
Nodes (3): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP

### Community 70 - "server/grade.ts"
Cohesion: 0.11
Nodes (26): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, ModuleRules, CONTENT_TAGS, FATAL_TAGS, TAG_IDS (+18 more)

### Community 71 - "LessonScreen"
Cohesion: 0.10
Nodes (7): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen, applyGrades(), QuizPart

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

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

### Community 82 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.22
Nodes (18): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+10 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (40): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lineNumbers, markAllCategorySchema, markAllSchema (+32 more)

### Community 88 - "SlideStage.svelte"
Cohesion: 0.08
Nodes (16): i(), htmlToMd(), pickIcon(), serialize(), sync(), TYPE_HE, issuesByNode(), CALLOUT_ICONS (+8 more)

### Community 89 - "SpeakingFeedback.svelte"
Cohesion: 0.20
Nodes (5): row(), groups, phrase(), RecorderState, Take

### Community 90 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

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
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

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

### Community 100 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (16): Accounts (Supabase Auth, email + password), Builds, Environments and release, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts (+8 more)

### Community 102 - "onSyncedChange"
Cohesion: 0.12
Nodes (9): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, load(), ProfileStore (+1 more)

### Community 103 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 104 - "lessonProgress.svelte.ts"
Cohesion: 0.27
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (13): total(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+5 more)

### Community 109 - "scheduler.ts"
Cohesion: 0.24
Nodes (11): deckToday(), dueToday(), localizeDeck(), addDays(), dayKey(), dueWords(), INTERVAL_DAYS, MAX_BOX (+3 more)

### Community 110 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "getDecks"
Cohesion: 0.24
Nodes (9): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, ./$types, load() (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 118 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.18
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (8), General comments, Language use (16), Mechanics (6), Module G (16582) - Writing Rubric, Vocabulary (10)

### Community 119 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 120 - "passageMarks.ts"
Cohesion: 0.17
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

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

### Community 128 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, deleteAccount(), deleting, failed, signOut(), t

### Community 129 - "rulesStore.svelte.ts"
Cohesion: 0.33
Nodes (6): RuleLevel, getLesson(), ownerModule(), ruleChain(), RulesFile, load()

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.15
Nodes (19): cronAuthorized(), db, coupons, examAttempts, israelToday, llmUsage, orders, progress (+11 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "index.svelte.ts"
Cohesion: 0.07
Nodes (11): dayPart, dictionaries, focus(), delta, firstSeconds, newlyReached, Profile, i() (+3 more)

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "cobe.test.ts"
Cohesion: 0.27
Nodes (5): cobe1Lessons, cobe2Lessons, cobe3Lessons, CobeRubric, rubric

### Community 143 - "access.svelte.ts"
Cohesion: 0.25
Nodes (8): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, loadQuote(), submit()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (48): loaded, Loader, loadLesson(), SECTIONS, hashString(), ICONS, lessonIcon(), markRoundCompleted() (+40 more)

### Community 148 - "activity.svelte.ts"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 150 - "editModel.svelte.ts"
Cohesion: 0.13
Nodes (7): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections(), LessonContent

### Community 151 - "apiFetch"
Cohesion: 0.06
Nodes (27): AccessStore, ApiError, apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, ReviewNotesStore (+19 more)

### Community 152 - "content/types.ts"
Cohesion: 0.39
Nodes (6): byId, sectionMeta, LessonRound, SectionMeta, Skill, SKILLS

### Community 153 - "deckProgress.svelte.ts"
Cohesion: 0.26
Nodes (6): deckProgress, DeckProgressStore, load(), persist(), ProgressMap, DeckProgress

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

### Community 168 - "Module C (16382) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module C (16382) - Answer Key, Summer 2026, Moed B, Part I: Written reception - A Challenge for Humanoid Robots, Part I: Written reception - A Challenge for Humanoid Robots, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 169 - "Module E (16471) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module E (16471) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Communicating with Emojis, Part I: Written reception - Communicating with Emojis, Part II: Lexical knowledge (vocabulary), Part II: Lexical knowledge (vocabulary), Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 171 - "Module G (16582) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module G (16582) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 173 - "svelte/transition"
Cohesion: 0.07
Nodes (10): open, words, NAME_MAX, screenContext, previous, supabase, showNav, ./$types (+2 more)

### Community 175 - "llmGuard.ts"
Cohesion: 0.18
Nodes (17): access, billingEnabled, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday() (+9 more)

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 179 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.25
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (10), General comments, Language use (8), Mechanics (4), Module C (016382) - Writing Rubric, Vocabulary (8)

### Community 181 - "Rubric for 4-Point Literature (Module D)"
Cohesion: 0.25
Nodes (7): Content (60 points), Content (60 points), Language, B1 level (40 points), Language, B1 level (40 points), Rubric for 4-Point Literature (Module D), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 182 - "Rubric for 5-Point Literature (Module F)"
Cohesion: 0.25
Nodes (7): Content (50 points), Content (50 points), Language, B2 level (50 points), Language, B2 level (50 points), Rubric for 5-Point Literature (Module F), Spoken production (post-reading), Written production (summative assessment and post-reading)

### Community 185 - "storeItem"
Cohesion: 0.15
Nodes (5): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeMode, ThemeStore

### Community 186 - "content-edit-files.test.ts"
Cohesion: 0.40
Nodes (3): f(), files, lib

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
- **941 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+936 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `EditModel`, `quiz/index.ts`, `validate.ts`, `scoring.ts`, `session.ts`, `lesson-screens/types.ts`, `editModel.svelte.ts`, `SlideStage.svelte`, `content/types.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `editModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `he` connect `test` to `index.svelte.ts`, `personas.spec.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _941 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `grade/+server.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11076923076923077 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07926829268292683 - nodes in this community are weakly interconnected._