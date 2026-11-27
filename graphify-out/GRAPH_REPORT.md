# Graph Report - dr_eng  (2026-11-27)

## Corpus Check
- 571 files · ~524,920 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2841 nodes · 5577 edges · 227 communities (168 shown, 59 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1b3ef76f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- grade/+server.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- zoom.ts
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
- lesson-screens/types.ts
- Opener.svelte
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
- getDecks
- billing.ts
- WritingTask.svelte
- progress.ts
- api/reminders/+server.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- content-nodes.test.ts
- rubrics/index.ts
- miniMarkdown.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- progressSync.svelte.ts
- chatSpeaking.ts
- dependencies
- Workflow
- svelte/easing
- option.ts
- access
- llm.ts
- takeHistory.ts
- refund.ts
- TitleEdits
- submitToLlm
- deck/index.ts
- markAllColors.ts
- speech.ts
- passageMarks.ts
- index.svelte.ts
- data.ts
- quizzes.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- LessonRunner.svelte
- server/speaking.ts
- LessonScreen
- jsonBody
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- DebugStore
- create-coupon.mjs
- measure-overflow.mjs
- moduleLocation.svelte.ts
- devDependencies
- 5-Point Bagrut Handbook (February 2025)
- content
- checkout/+page.ts
- reviewNotes.svelte.ts
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
- modules.ts
- MarkdownInput.svelte
- saveSynced
- AGENTS.md
- Rules
- QuizRunner.svelte
- ExamEditWorkspace.svelte
- test
- edit-exam/+page.svelte
- content-i18n.mjs
- Handoff: test findings (open items only)
- localize.svelte.ts
- Submit → feedback framework
- he.ts
- ReviewNotesStore
- Breakdown of criteria with further caveats and explanations
- goalOptions.ts
- completeRound
- MatchPairs.svelte
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- scoring.ts
- QuizReport.svelte
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- AccountSection.svelte
- personas.spec.ts
- WordImage.svelte
- Module E QA
- render.md
- validate.ts
- language.ts
- lib/api.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- ActivityStore
- package.json
- EditHistory
- apiFetch
- examStats
- nextRoundIndex
- lastEngagement.svelte.ts
- RemindersStore
- UX principles
- api.spec.ts
- acceptedAnswers.ts
- Handoff: recorded voice, what's left
- emailTypo.ts
- @types/nspell
- phraseBank.svelte.ts
- brand.md
- EditWorkspace.svelte
- auth/README.md
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- deckProgress.svelte.ts
- Recorder
- Module G QA report
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- ProfileStore
- storeItem
- textColors.ts
- svelte-check
- edit-words/+page.svelte
- Module G - guidelines and table of specifications
- UI review
- schools/+page.ts
- Module C - guidelines and table of specifications
- @types/web-push
- calloutIcons.ts
- TakeCompare.svelte
- vite
- prettier
- vite-env.d.ts
- Handoff: session timeout (when Supabase is on Pro)
- prettier-plugin-svelte
- QuizAnswerSlot
- payments.ts
- curriculum.ts
- lessonIcon.ts
- sectionThemes.ts
- loadLesson
- dictionary-en
- screenshot.ts
- prettier-plugin-tailwindcss
- svelte
- @sveltejs/kit
- @tailwindcss/forms
- @tailwindcss/typography
- typescript
- fillFromScan

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
- `lengthReport()` --references--> `tables`  [EXTRACTED]
  front/src/lib/checks/length.ts → front/src/lib/content/localize.svelte.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (227 total, 59 thin omitted)

### Community 0 - "grade/+server.ts"
Cohesion: 0.09
Nodes (36): moduleId, CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, MAX_TEXT (+28 more)

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
Cohesion: 0.09
Nodes (5): clone(), EditModel, swapLevels(), versions(), moduleSections()

### Community 5 - "zoom.ts"
Cohesion: 0.26
Nodes (11): LessonRecording, accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register(), schedule() (+3 more)

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
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

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

### Community 19 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (45): KEY, active, checked, primaryAction(), KEY, ScreenMode, primaryAction(), primaryAction() (+37 more)

### Community 21 - "content/index.ts"
Cohesion: 0.07
Nodes (36): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+28 more)

### Community 22 - "hooks.server.ts"
Cohesion: 0.23
Nodes (11): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, accountsEnabled, noSession (+3 more)

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

### Community 31 - "checkAuth"
Cohesion: 0.17
Nodes (22): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+14 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "getDecks"
Cohesion: 0.19
Nodes (12): homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleWon(), nextMilestone(), load() (+4 more)

### Community 35 - "billing.ts"
Cohesion: 0.16
Nodes (19): defaultPlan(), Plan, planById(), accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult (+11 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "progress.ts"
Cohesion: 0.24
Nodes (19): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+11 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.15
Nodes (17): cronAuthorized(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, GET(), israelDay() (+9 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (28): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+20 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.09
Nodes (50): isLimit(), browserDictionaries(), readingDeductions(), applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check() (+42 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.09
Nodes (35): bytes(), checkWriting(), countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords() (+27 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.15
Nodes (23): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+15 more)

### Community 43 - "content-nodes.test.ts"
Cohesion: 0.26
Nodes (10): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+2 more)

### Community 44 - "rubrics/index.ts"
Cohesion: 0.13
Nodes (17): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+9 more)

### Community 45 - "miniMarkdown.ts"
Cohesion: 0.14
Nodes (19): CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs() (+11 more)

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "progressSync.svelte.ts"
Cohesion: 0.30
Nodes (6): localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (21): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+13 more)

### Community 50 - "dependencies"
Cohesion: 0.10
Nodes (21): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+13 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "svelte/easing"
Cohesion: 0.07
Nodes (16): full, ignite, dayPart, I18n, NAME_MAX, Profile, examTier, GREAT_PERCENT (+8 more)

### Community 53 - "option.ts"
Cohesion: 0.22
Nodes (8): i(), issuesByNode(), #each(), optFeedback(), Option, optText(), withFeedback(), i()

### Community 54 - "access"
Cohesion: 0.29
Nodes (8): cobeVisible(), productsOf(), access, billingEnabled, GET(), checkoutBody(), POST(), GET()

### Community 55 - "llm.ts"
Cohesion: 0.22
Nodes (11): chat(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 56 - "takeHistory.ts"
Cohesion: 0.22
Nodes (12): primaryAction(), record(), stop(), toggle(), Entry, openDb(), readStats(), recordTake() (+4 more)

### Community 57 - "refund.ts"
Cohesion: 0.27
Nodes (8): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FULL_DAYS, refundOf(), RefundOrder, pack6

### Community 60 - "deck/index.ts"
Cohesion: 0.09
Nodes (45): listA, listB, listC, listD, w(), eGlossAr, Deck, decks (+37 more)

### Community 61 - "markAllColors.ts"
Cohesion: 0.25
Nodes (5): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 62 - "speech.ts"
Cohesion: 0.12
Nodes (18): browserVoice, chatVoice, hush(), RATE, say(), speak(), speakWord(), speechSupported() (+10 more)

### Community 63 - "passageMarks.ts"
Cohesion: 0.17
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 64 - "index.svelte.ts"
Cohesion: 0.06
Nodes (13): pieces, dictionaries, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders (+5 more)

### Community 65 - "data.ts"
Cohesion: 0.15
Nodes (27): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), progressScope(), continueFrom(), ContinueItem, EXAM_READY (+19 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "LessonRunner.svelte"
Cohesion: 0.06
Nodes (12): open, focus(), groups, reducedMotion, words, previous, i(), homeMedia (+4 more)

### Community 70 - "server/speaking.ts"
Cohesion: 0.24
Nodes (10): chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 71 - "LessonScreen"
Cohesion: 0.10
Nodes (8): screenList(), EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, TYPE_HE, LessonScreen

### Community 72 - "jsonBody"
Cohesion: 0.31
Nodes (11): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+3 more)

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
Nodes (29): @axe-core/playwright, dictionary-en-gb, drizzle-kit, eslint, eslint-config-prettier, eslint-plugin-svelte, devDependencies, @axe-core/playwright (+21 more)

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

### Community 82 - "reviewNotes.svelte.ts"
Cohesion: 0.24
Nodes (6): BLANK, ReviewNote, reviewNotes, editFetch(), stored(), Unlock

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.14
Nodes (25): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+17 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (39): autoCheck, clozePickSchema, dir, index, lineNumbers, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+31 more)

### Community 88 - "SlideStage.svelte"
Cohesion: 0.14
Nodes (4): LessonBucket, onMove(), onUp(), LessonContent

### Community 89 - "llmGuard.ts"
Cohesion: 0.20
Nodes (15): israelToday, llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+7 more)

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
Cohesion: 0.08
Nodes (4): Bucket, clone(), ExamEditModel, applyGrades()

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "content-edit/api.ts"
Cohesion: 0.33
Nodes (10): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+2 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.11
Nodes (17): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+9 more)

### Community 102 - "modules.ts"
Cohesion: 0.33
Nodes (5): Grammar, LENGTH_TABLES, LengthTable, MODULE_RULES, ModuleRules

### Community 103 - "MarkdownInput.svelte"
Cohesion: 0.43
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 104 - "saveSynced"
Cohesion: 0.27
Nodes (7): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope(), saveSynced()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "QuizRunner.svelte"
Cohesion: 0.09
Nodes (15): total(), slot(), i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage (+7 more)

### Community 109 - "ExamEditWorkspace.svelte"
Cohesion: 0.22
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

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

### Community 119 - "goalOptions.ts"
Cohesion: 0.20
Nodes (9): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+1 more)

### Community 120 - "completeRound"
Cohesion: 0.25
Nodes (11): celebrateIfNewlyDone(), closeNode(), closeWritingLab(), completeRound(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+3 more)

### Community 121 - "MatchPairs.svelte"
Cohesion: 0.19
Nodes (10): announce(), announcement, mistakes, pick(), row(), shuffleNotIdentity(), phrase(), fitOrder() (+2 more)

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
Cohesion: 0.12
Nodes (25): labelled(), openAnswers(), FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty() (+17 more)

### Community 129 - "QuizReport.svelte"
Cohesion: 0.14
Nodes (11): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+3 more)

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.16
Nodes (17): PartVerdict, examLocked(), RETAKE_WAIT_MS, StoredAttempt, db, examAttempts, llmUsage, orders (+9 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, deleteAccount(), deleting, failed, signOut(), t

### Community 137 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "validate.ts"
Cohesion: 0.22
Nodes (14): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), markAllSegments(), checkScreen(), duplicates() (+6 more)

### Community 142 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 143 - "lib/api.ts"
Cohesion: 0.09
Nodes (15): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+7 more)

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (18): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+10 more)

### Community 149 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 151 - "apiFetch"
Cohesion: 0.14
Nodes (15): AccessStore, ApiError, apiFetch(), toWavBase64(), ChatMode, ChatTurnReply, addChat(), chatCount() (+7 more)

### Community 152 - "examStats"
Cohesion: 0.33
Nodes (7): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, getQuizzesForModule()

### Community 153 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 154 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 155 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

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

### Community 173 - "deckProgress.svelte.ts"
Cohesion: 0.18
Nodes (9): activity, load(), WEEKLY_GOAL, deckProgress, DeckProgressStore, load(), persist(), ProgressMap (+1 more)

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
Cohesion: 0.13
Nodes (5): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeMode, ThemeStore

### Community 186 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 188 - "edit-words/+page.svelte"
Cohesion: 0.40
Nodes (3): changed, invalidCount, saving

### Community 189 - "Module G - guidelines and table of specifications"
Cohesion: 0.40
Nodes (5): Module G - guidelines and table of specifications, Module G writing rubric, Reading comprehension, The English Academization Program, Writing

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 192 - "Module C - guidelines and table of specifications"
Cohesion: 0.50
Nodes (4): Module C - guidelines and table of specifications, Module C writing rubric, Reading comprehension, Writing

### Community 195 - "TakeCompare.svelte"
Cohesion: 0.50
Nodes (3): delta, firstSeconds, newlyReached

### Community 206 - "payments.ts"
Cohesion: 0.50
Nodes (3): PaymentRequest, PaymentStart, startPayment()

### Community 207 - "curriculum.ts"
Cohesion: 0.13
Nodes (16): getLesson(), CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), literatureModules, modules, textSection (+8 more)

### Community 208 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

## Knowledge Gaps
- **939 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+934 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **59 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `he` connect `test` to `index.svelte.ts`, `personas.spec.ts`, `he.ts`, `accounts.spec.ts`, `fixtures.ts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `scoring.ts`, `ExamEditModel`, `EditModel`, `content-nodes.test.ts`, `validate.ts`, `lesson-screens/types.ts`, `content/index.ts`, `SlideStage.svelte`, `deck/index.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `index.svelte.ts`, `content-edit/api.ts`, `AccountSection.svelte`, `gradeExam.ts`, `api/lessons/+server.ts`, `lib/api.ts`, `progressSync.svelte.ts`, `RulesPanel.svelte`, `reviewNotes.svelte.ts`, `ReviewNotesStore`, `RemindersStore`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _939 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `grade/+server.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09176788124156546 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09259259259259259 - nodes in this community are weakly interconnected._