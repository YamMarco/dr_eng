# Graph Report - dr_eng  (2026-11-04)

## Corpus Check
- 508 files · ~472,056 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2420 nodes · 4842 edges · 184 communities (133 shown, 51 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ceeae23a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- billing.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- db/schema.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- feedback/rules.ts
- graphify reference: query, path, explain
- llm.ts
- lesson-screens/types.ts
- content/index.ts
- checkAuth
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- feedback/speaking.ts
- extraction-spec.md
- GraphEditor.svelte
- server/supabase.ts
- svelte/transition
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- chatAi.ts
- LessonScreen
- profile.svelte.ts
- 1. Reading comprehension (grade-reading)
- feedback/types.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- Speak.svelte
- scripts
- Workflow
- lib/api.ts
- chatSpeaking.ts
- apiFetch
- stats.ts
- llmGuard.ts
- SlideStage.svelte
- editModel.svelte.ts
- (site)/+page.svelte
- deck/index.ts
- takeHistory.ts
- speech.ts
- quizzes.ts
- reminders.svelte.ts
- ActivityStore
- length.ts
- examEditModel.svelte.ts
- snippet.md
- lastEngagement.svelte.ts
- server/grade.ts
- routes/+layout.svelte
- validate.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- scoring.ts
- create-coupon.mjs
- measure-overflow.mjs
- app/+layout.svelte
- localize.svelte.ts
- lessonProgress.svelte.ts
- content
- checkout/+page.ts
- lib/finance.ts
- Material
- content-edit/+server.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- server/speaking.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- progressMerge.ts
- miniMarkdown.ts
- completeRound
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- RulesPanel.svelte
- Platform: web, mobile, accounts
- mechanics.ts
- Recorder
- @eslint/js
- AGENTS.md
- Rules
- EditHistory
- I18n
- .name
- progressSync.svelte.ts
- api/reminders/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- edit-exam/+page.svelte
- Submit → feedback framework
- fixtures.ts
- language.ts
- nextRoundIndex
- checks/index.ts
- screenChecks.ts
- MyPhrases
- hydratable.md
- dependencies
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- chatTopics.ts
- MarkdownInput.svelte
- submitToLlm
- @sveltejs/adapter-auto
- legacyIds.ts
- @sveltejs/kit
- progress.ts
- Handoff: exam lock trusts the client's part count
- lessonIcon.ts
- dictionary-en-gb
- scan.ts
- render.md
- svelte
- eslint-config-prettier
- prettier-plugin-svelte
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- DebugStore
- markAllColors.ts
- sectionThemes.ts
- index.svelte.ts
- QuizAnswerSlot
- screenshot.ts
- typescript
- UX principles
- api.spec.ts
- package.json
- @playwright/test
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- acceptedAnswers.ts
- auth/README.md
- @types/nspell
- typescript-eslint
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
10. `scripts` - 17 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts

## Import Cycles
- None detected.

## Communities (184 total, 51 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (28): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+20 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "billing.ts"
Cohesion: 0.12
Nodes (24): Plan, access, accessEnd(), accessUntil(), billingEnabled, BillingError, checkout(), CheckoutResult (+16 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "db/schema.ts"
Cohesion: 0.15
Nodes (18): db, coupons, examAttempts, israelToday, llmUsage, progress, pushSubscriptions, waitlist (+10 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "feedback/rules.ts"
Cohesion: 0.19
Nodes (11): Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal(), clearBelow(), DEFAULT_RULES, resolveRules() (+3 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "llm.ts"
Cohesion: 0.20
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+4 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.04
Nodes (48): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+40 more)

### Community 21 - "content/index.ts"
Cohesion: 0.13
Nodes (25): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+17 more)

### Community 22 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "feedback/speaking.ts"
Cohesion: 0.27
Nodes (8): PhraseGroup, phraseGroups, CobeRubric, CobePart, gradeSpeaking(), half(), lengthPercentOff(), SpeakingJudgement

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 35 - "svelte/transition"
Cohesion: 0.09
Nodes (6): COBE_OPEN, supabase, formattedDate, ./$types, next, seen

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.14
Nodes (29): getLesson(), getLessonsBySection(), moduleSections(), Skill, SKILLS, continueFrom(), ContinueItem, EXAM_READY (+21 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.17
Nodes (24): isLimit(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, essayGrade() (+16 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (38): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+30 more)

### Community 40 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 42 - "chatAi.ts"
Cohesion: 0.24
Nodes (8): toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), CobeLevel, requestSpeakingFeedback(), SpeakingVerdict

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (7): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonRound, LessonScreen, IdentifiedScreen

### Community 44 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "feedback/types.ts"
Cohesion: 0.12
Nodes (16): CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics, postGrade(), pieces (+8 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "Speak.svelte"
Cohesion: 0.11
Nodes (11): row(), groups, phrase(), reached, seconds, share, delta, firstSeconds (+3 more)

### Community 50 - "scripts"
Cohesion: 0.12
Nodes (17): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+9 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "lib/api.ts"
Cohesion: 0.11
Nodes (16): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+8 more)

### Community 53 - "chatSpeaking.ts"
Cohesion: 0.19
Nodes (16): PROJECT_POINTS, chatEnds(), ChatLine, ChatMode, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS (+8 more)

### Community 54 - "apiFetch"
Cohesion: 0.06
Nodes (26): AccessStore, apiFetch(), post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles() (+18 more)

### Community 55 - "stats.ts"
Cohesion: 0.20
Nodes (13): examAdvice, lessonStats(), moduleHook, getInProgress(), scorePercent(), avg(), examRow, examRows() (+5 more)

### Community 56 - "llmGuard.ts"
Cohesion: 0.19
Nodes (16): cobeVisible(), llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+8 more)

### Community 57 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (4): i(), TYPE_HE, issuesByNode(), optFeedback()

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.16
Nodes (5): LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 59 - "(site)/+page.svelte"
Cohesion: 0.13
Nodes (5): focus(), reducedMotion, homeMedia, Media, d

### Community 60 - "deck/index.ts"
Cohesion: 0.06
Nodes (58): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+50 more)

### Community 61 - "takeHistory.ts"
Cohesion: 0.20
Nodes (13): primaryAction(), record(), stop(), toggle(), isRecord(), Entry, openDb(), readStats() (+5 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.08
Nodes (11): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+3 more)

### Community 66 - "length.ts"
Cohesion: 0.30
Nodes (11): countValidWords(), isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+3 more)

### Community 67 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 70 - "server/grade.ts"
Cohesion: 0.11
Nodes (29): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, MAX_TEXT, ReadingVerdict, SingleRequest (+21 more)

### Community 72 - "validate.ts"
Cohesion: 0.26
Nodes (8): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "scoring.ts"
Cohesion: 0.13
Nodes (19): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, anyFailed, closed (+11 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "app/+layout.svelte"
Cohesion: 0.10
Nodes (10): i(), open, words, screenContext, previous, SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE (+2 more)

### Community 78 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 79 - "lessonProgress.svelte.ts"
Cohesion: 0.18
Nodes (11): activity, load(), WEEKLY_GOAL, progressScope(), lessonProgress, LessonProgressStore, load(), persist() (+3 more)

### Community 82 - "lib/finance.ts"
Cohesion: 0.24
Nodes (7): Currency, Cycle, cycleLabel, Expense, monthly(), expenses, GET()

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.15
Nodes (23): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+15 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+30 more)

### Community 88 - "server/speaking.ts"
Cohesion: 0.24
Nodes (9): band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema, body (+1 more)

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): @axe-core/playwright, dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, @axe-core/playwright, dictionary-en (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.05
Nodes (55): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+47 more)

### Community 94 - "completeRound"
Cohesion: 0.24
Nodes (12): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), completeRound(), exitRunner(), finishNode(), finishNodeAndContinue() (+4 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "RulesPanel.svelte"
Cohesion: 0.06
Nodes (35): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+27 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "I18n"
Cohesion: 0.22
Nodes (3): dayPart, I18n, ./$types

### Community 109 - ".name"
Cohesion: 0.17
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.29
Nodes (7): localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys(), writeLocal()

### Community 111 - "api/reminders/+server.ts"
Cohesion: 0.22
Nodes (12): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key (+4 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.29
Nodes (6): COBE (parked, not tested), Fixed, Fixed: break-it round, Handoff: test findings (from the testing plan runs), Where to continue (next session), Your to-do (owner)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.06
Nodes (20): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+12 more)

### Community 117 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 118 - "nextRoundIndex"
Cohesion: 0.25
Nodes (8): enterRunner(), isUnlocked(), jumpToAnchor(), nextRoundIndex(), openNode(), remember(), roundsCompleted(), totalRounds()

### Community 119 - "checks/index.ts"
Cohesion: 0.14
Nodes (21): browserDictionaries(), bytes(), checkWriting(), CheckIssue, CheckOptions, CheckReport, Confidence, RubricArea (+13 more)

### Community 120 - "screenChecks.ts"
Cohesion: 0.15
Nodes (16): MarkAllSegment, markAllSegments(), optText(), withFeedback(), oi(), lessonScreenSchema, checkScreen(), duplicates() (+8 more)

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "chatTopics.ts"
Cohesion: 0.53
Nodes (5): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics()

### Community 129 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 132 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 135 - "progress.ts"
Cohesion: 0.22
Nodes (17): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getLastAttempt(), getResults(), hasStorage(), progressKey() (+9 more)

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 137 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 139 - "scan.ts"
Cohesion: 0.32
Nodes (6): ApiError, fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (17): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, delayForY(), edgeDelay() (+9 more)

### Community 150 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 152 - "index.svelte.ts"
Cohesion: 0.08
Nodes (9): dictionaries, status(), lockedUntil, lockedWhen, row, rules, taken, tips (+1 more)

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **775 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+770 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **51 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `reminders.svelte.ts`, `RulesPanel.svelte`, `chatAi.ts`, `scan.ts`, `feedback/types.ts`, `progressSync.svelte.ts`, `lib/api.ts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditWorkspace.svelte`, `editModel.svelte.ts`, `LessonScreen`, `RulesPanel.svelte`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `he` connect `fixtures.ts` to `index.svelte.ts`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _775 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09659090909090909 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08484848484848485 - nodes in this community are weakly interconnected._