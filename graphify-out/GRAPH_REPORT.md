# Graph Report - dr_eng  (2026-11-28)

## Corpus Check
- 572 files · ~526,365 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2838 nodes · 5458 edges · 213 communities (160 shown, 53 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ef67d3e4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- grade/+server.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- api/lessons/+server.ts
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
- lesson-screens/types.ts
- Mcq.svelte
- content/index.ts
- hooks.server.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- curriculum.ts
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- deck/index.ts
- billing.ts
- WritingTask.svelte
- progress.ts
- api/reminders/+server.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- liveLesson.ts
- content-nodes.test.ts
- feedback/types.ts
- examLock.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- progressSync.svelte.ts
- chatSpeaking.ts
- dependencies
- Workflow
- profile.svelte.ts
- MatchPairs.svelte
- MatchDefinitions.svelte
- body.ts
- saveSynced
- refund.ts
- TitleEdits
- submitToLlm
- session.ts
- feedback.test.ts
- speech.ts
- [id]/+server.ts
- platform.ts
- data.ts
- quizzes.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- (site)/+page.svelte
- settings/+page.svelte
- LessonScreen
- Handoff: billing policy (decided, not built)
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- plans.test.ts
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- 5-Point Bagrut Handbook (February 2025)
- content
- checkout/+page.ts
- apiFetch
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- SlideStage.svelte
- llmGuard.ts
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
- typos.ts
- planById
- deckProgress.svelte.ts
- AGENTS.md
- Rules
- QuizRunner.svelte
- ExamEditWorkspace.svelte
- test
- content-i18n.mjs
- Handoff: test findings (open items only)
- localize.svelte.ts
- Submit → feedback framework
- he.ts
- ReviewNotesStore
- Breakdown of criteria with further caveats and explanations
- LLM provider switch: off Google
- completeRound
- RulesStore
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- scoring.ts
- routes/+layout.svelte
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- fillFromScan
- personas.spec.ts
- getDecks
- Module E QA
- render.md
- validate.ts
- passageMarks.ts
- lib/api.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- package.json
- EditHistory
- QuizReport.svelte
- lastEngagement.svelte.ts
- nextRoundIndex
- loadLesson
- reminders.svelte.ts
- UX principles
- api.spec.ts
- acceptedAnswers.ts
- Handoff: recorded voice, what's left
- @types/nspell
- phraseBank.svelte.ts
- brand.md
- auth/README.md
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- DeckProgressStore
- Recorder
- Module G QA report
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- LoginScreen.svelte
- svelte-check
- Module G - guidelines and table of specifications
- UI review
- schools/+page.ts
- Module C - guidelines and table of specifications
- @types/web-push
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte
- lessonIcon.ts
- sectionThemes.ts
- index.svelte.ts
- dictionary-en
- screenshot.ts
- prettier-plugin-tailwindcss
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
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 28 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 22 edges
9. `scripts` - 21 edges
10. `QuizNode` - 19 edges

## Surprising Connections (you probably didn't know these)
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `submit()` --calls--> `scoreQuiz()`  [EXTRACTED]
  front/src/lib/quiz/QuizRunner.svelte → front/src/lib/quiz/scoring.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (213 total, 53 thin omitted)

### Community 0 - "grade/+server.ts"
Cohesion: 0.09
Nodes (37): moduleId, CONTENT_TAGS, EssayVerdict, LessonVerdict, MAX_TEXT, ReadingVerdict, SingleRequest, ExamPartKind (+29 more)

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
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection()

### Community 5 - "api/lessons/+server.ts"
Cohesion: 0.18
Nodes (17): LessonRecording, LessonSlot, accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register() (+9 more)

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

### Community 10 - "miniMarkdown.ts"
Cohesion: 0.05
Nodes (54): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+46 more)

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

### Community 19 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (36): KEY, ScreenMode, screenComponents, KEY, LessonSession, reached, seconds, share (+28 more)

### Community 20 - "Mcq.svelte"
Cohesion: 0.09
Nodes (8): KEY, #each(), optFeedback(), Option, optText(), withFeedback(), i(), item()

### Community 21 - "content/index.ts"
Cohesion: 0.08
Nodes (34): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+26 more)

### Community 22 - "hooks.server.ts"
Cohesion: 0.18
Nodes (14): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, accountsEnabled, adminClient() (+6 more)

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.09
Nodes (19): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+11 more)

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
Cohesion: 0.11
Nodes (16): getLesson(), CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), literatureModules, modules, textSection (+8 more)

### Community 31 - "checkAuth"
Cohesion: 0.22
Nodes (18): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+10 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "deck/index.ts"
Cohesion: 0.13
Nodes (20): listA, listB, listC, listD, w(), eGlossAr, Deck, decks (+12 more)

### Community 35 - "billing.ts"
Cohesion: 0.15
Nodes (17): Plan, access, accessEnd(), accessUntil(), billingEnabled, checkout(), CheckoutResult, completeOrder() (+9 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.16
Nodes (26): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+18 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.14
Nodes (20): cronAuthorized(), pushSubscriptions, jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription (+12 more)

### Community 39 - "plans.ts"
Cohesion: 0.09
Nodes (19): APP, charm(), Cycle, CYCLE_MONTHS, CYCLE_OFF, FEATURED_OFFER, GROUP_ZOOM, GUARANTEE (+11 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.12
Nodes (36): isLimit(), checkWriting(), gradeLesson(), postGrade(), check(), Checked, essayGrade(), essayPart() (+28 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.11
Nodes (30): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+22 more)

### Community 42 - "liveLesson.ts"
Cohesion: 0.19
Nodes (16): addToCalendar(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonsInfo (+8 more)

### Community 43 - "content-nodes.test.ts"
Cohesion: 0.26
Nodes (10): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+2 more)

### Community 44 - "feedback/types.ts"
Cohesion: 0.08
Nodes (28): ApiError, PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric (+20 more)

### Community 45 - "examLock.ts"
Cohesion: 0.29
Nodes (8): ExamRef, PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, exempt(), openAttempt(), saveAttempt()

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "progressSync.svelte.ts"
Cohesion: 0.17
Nodes (9): prefaceSeen, PrefaceSeenStore, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal() (+1 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.06
Nodes (49): toWavBase64(), BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds() (+41 more)

### Community 50 - "dependencies"
Cohesion: 0.10
Nodes (21): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+13 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (12): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+4 more)

### Community 53 - "MatchPairs.svelte"
Cohesion: 0.21
Nodes (10): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), phrase(), fitOrder() (+2 more)

### Community 54 - "MatchDefinitions.svelte"
Cohesion: 0.12
Nodes (9): total(), active, checked, primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore (+1 more)

### Community 55 - "body.ts"
Cohesion: 0.29
Nodes (8): cobeVisible(), productsOf(), BillingError, normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 56 - "saveSynced"
Cohesion: 0.10
Nodes (19): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, load() (+11 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 60 - "session.ts"
Cohesion: 0.17
Nodes (25): addDays(), dueWords(), review(), blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts (+17 more)

### Community 61 - "feedback.test.ts"
Cohesion: 0.17
Nodes (12): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, ModuleRules, readingDeductions(), applyLength(), mechanicsCount() (+4 more)

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "[id]/+server.ts"
Cohesion: 0.30
Nodes (10): kanbanTasks, kanbanDb(), taskColumns, taskFields, DELETE(), PATCH(), patchBody, taskId() (+2 more)

### Community 64 - "platform.ts"
Cohesion: 0.14
Nodes (6): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, prerender

### Community 65 - "data.ts"
Cohesion: 0.10
Nodes (34): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY (+26 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.20
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+2 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "(site)/+page.svelte"
Cohesion: 0.15
Nodes (5): focus(), i(), homeMedia, Media, d

### Community 71 - "LessonScreen"
Cohesion: 0.11
Nodes (7): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 72 - "Handoff: billing policy (decided, not built)"
Cohesion: 0.25
Nodes (7): Auto-renewal, Copy and code to change when building, Handoff: billing policy (decided, not built), Open: ask the lawyer / accountant, Payment provider requirements (still to choose), Refunds, Seller and prices

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "plans.test.ts"
Cohesion: 0.25
Nodes (7): COBE_ADDON, maxPayments(), planId(), Pricing, withCobe(), setCobe(), #each()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 78 - "devDependencies"
Cohesion: 0.07
Nodes (29): @axe-core/playwright, dictionary-en-gb, drizzle-kit, eslint, eslint-config-prettier, eslint-plugin-svelte, devDependencies, @axe-core/playwright (+21 more)

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

### Community 82 - "apiFetch"
Cohesion: 0.14
Nodes (12): apiFetch(), uploadImage(), BLANK, ReviewNote, reviewNotes, editFetch(), stored(), Unlock (+4 more)

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

### Community 88 - "SlideStage.svelte"
Cohesion: 0.06
Nodes (19): LessonBucket, Bucket, onMove(), onUp(), i(), htmlToMd(), pickIcon(), serialize() (+11 more)

### Community 89 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+8 more)

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

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.11
Nodes (17): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+9 more)

### Community 102 - "typos.ts"
Cohesion: 0.18
Nodes (13): browserDictionaries(), bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, HYPHEN_PREFIXES, loadSpellers() (+5 more)

### Community 103 - "planById"
Cohesion: 0.40
Nodes (6): build(), CYCLES, defaultPlan(), parse(), planById(), resolve()

### Community 104 - "deckProgress.svelte.ts"
Cohesion: 0.11
Nodes (14): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, deckProgress, load(), ProgressMap (+6 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (14): slot(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds (+6 more)

### Community 109 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 110 - "test"
Cohesion: 0.22
Nodes (6): test, Essay, corrupt, pages, takenAt(), he

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "he.ts"
Cohesion: 0.25
Nodes (6): ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 118 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.18
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (8), General comments, Language use (16), Mechanics (6), Module G (16582) - Writing Rubric, Vocabulary (10)

### Community 119 - "LLM provider switch: off Google"
Cohesion: 0.20
Nodes (9): Cost (estimate), LLM provider switch: off Google, Minors policy, Next steps, Options per job, Recommendation, Sources, The three jobs (+1 more)

### Community 120 - "completeRound"
Cohesion: 0.25
Nodes (11): celebrateIfNewlyDone(), closeNode(), closeWritingLab(), completeRound(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+3 more)

### Community 121 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 123 - "scripts"
Cohesion: 0.10
Nodes (21): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+13 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "scoring.ts"
Cohesion: 0.15
Nodes (20): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, isAnswered() (+12 more)

### Community 130 - "passageQuiz.ts"
Cohesion: 0.39
Nodes (7): keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen, screen

### Community 132 - "db/schema.ts"
Cohesion: 0.22
Nodes (11): db, coupons, examAttempts, llmUsage, orders, progress, waitlist, zoomRegistrants (+3 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 138 - "getDecks"
Cohesion: 0.31
Nodes (7): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, load()

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "validate.ts"
Cohesion: 0.16
Nodes (16): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), checkScreen() (+8 more)

### Community 142 - "passageMarks.ts"
Cohesion: 0.25
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 143 - "lib/api.ts"
Cohesion: 0.11
Nodes (14): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+6 more)

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (17): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+9 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 151 - "QuizReport.svelte"
Cohesion: 0.13
Nodes (11): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+3 more)

### Community 152 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 153 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 155 - "reminders.svelte.ts"
Cohesion: 0.25
Nodes (7): currentSubscription(), REMINDER_HOURS, reminders, RemindersStore, ReminderStatus, storedHour(), worker()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 159 - "Handoff: recorded voice, what's left"
Cohesion: 0.40
Nodes (4): Can't be pre-recorded (stay on the browser voice), Handoff: recorded voice, what's left, How to extend, Left to record

### Community 168 - "Module C (16382) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module C (16382) - Answer Key, Summer 2026, Moed B, Part I: Written reception - A Challenge for Humanoid Robots, Part I: Written reception - A Challenge for Humanoid Robots, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 169 - "Module E (16471) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module E (16471) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Communicating with Emojis, Part I: Written reception - Communicating with Emojis, Part II: Lexical knowledge (vocabulary), Part II: Lexical knowledge (vocabulary), Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

### Community 171 - "Module G (16582) - Answer Key, Summer 2026, Moed B"
Cohesion: 0.22
Nodes (8): Module G (16582) - Answer Key, Summer 2026, Moed B, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part I: Written reception - Reverse Mentoring: Who Is Teaching Whom?, Part II: Written production, Part II: Written production, Version A, Version B, דגשים בנוגע לפרסום הצעה לפתרון בחינת הבגרות באנגלית

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

### Community 185 - "LoginScreen.svelte"
Cohesion: 0.16
Nodes (5): COMMON, distance(), suggestEmail(), ThemeMode, ThemeStore

### Community 189 - "Module G - guidelines and table of specifications"
Cohesion: 0.40
Nodes (5): Module G - guidelines and table of specifications, Module G writing rubric, Reading comprehension, The English Academization Program, Writing

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 192 - "Module C - guidelines and table of specifications"
Cohesion: 0.50
Nodes (4): Module C - guidelines and table of specifications, Module C writing rubric, Reading comprehension, Writing

### Community 208 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 211 - "index.svelte.ts"
Cohesion: 0.06
Nodes (18): full, ignite, pieces, open, dictionaries, groups, reducedMotion, words (+10 more)

## Knowledge Gaps
- **953 isolated node(s):** `mission`, `workflow`, `persona`, `stack`, `read on demand (plain paths, don't preload)` (+948 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `he` connect `test` to `personas.spec.ts`, `index.svelte.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `scoring.ts`, `EditModel`, `content-nodes.test.ts`, `validate.ts`, `lesson-screens/types.ts`, `content/index.ts`, `SlideStage.svelte`, `session.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `content-edit/api.ts`, `EditModel`, `validate.ts`, `RulesPanel.svelte`, `SlideStage.svelte`, `RulesStore`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `mission`, `workflow`, `persona` to the rest of the system?**
  _953 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `grade/+server.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0858974358974359 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09259259259259259 - nodes in this community are weakly interconnected._