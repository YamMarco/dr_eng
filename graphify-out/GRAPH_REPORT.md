# Graph Report - dr_eng  (2026-11-28)

## Corpus Check
- 569 files · ~518,339 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2756 nodes · 5419 edges · 201 communities (145 shown, 56 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d329e76f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- miniMarkdown.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- Md.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- Button.svelte
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
- deck/index.ts
- hooks.server.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- stats.ts
- checkAuth
- extraction-spec.md
- GraphEditor.svelte
- deck.test.ts
- billing.ts
- WritingTask.svelte
- MatchDefinitions.svelte
- api/reminders/+server.ts
- plans.ts
- gradeExam.ts
- checks/index.ts
- api/lessons/+server.ts
- session.ts
- apiFetch
- grade/+server.ts
- QuizRunner.svelte
- writingLint.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- scripts
- Workflow
- profile.svelte.ts
- scoring.ts
- rubrics/index.ts
- takeHistory.ts
- refund.ts
- TitleEdits
- lessonProgress.svelte.ts
- .title
- Policies: legal and billing
- progress.ts
- llmGuard.ts
- settings/+page.svelte
- data.ts
- quizzes.ts
- 4-Point Bagrut Handbook (February 2025)
- snippet.md
- QuizReport.svelte
- motion.ts
- LessonScreen
- Speak.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- deckProgress.svelte.ts
- create-coupon.mjs
- measure-overflow.mjs
- MatchPairs.svelte
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
- validate.ts
- PassageQuiz.svelte
- mechanics.ts
- await-expressions.md
- fixtures.ts
- COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)
- lib/finance.ts
- AccountSection.svelte
- attach.md
- ExamEditModel
- MarkAll.svelte
- .mcp.json
- content-edit/api.ts
- Platform: web, mobile, accounts
- feedback/types.ts
- acceptedAnswers.ts
- ActivityStore
- AGENTS.md
- Rules
- content-edit-files.test.ts
- ExamEditWorkspace.svelte
- WordImageField.svelte
- @axe-core/playwright
- content-i18n.mjs
- localize.svelte.ts
- dictionary-en-gb
- Submit → feedback framework
- index.svelte.ts
- ReviewNotesStore
- Breakdown of criteria with further caveats and explanations
- renewals/+server.ts
- drizzle-kit
- progressSync.svelte.ts
- hydratable.md
- feedback/speaking.ts
- eslint
- inspect.md
- vercel.json
- eslint-plugin-svelte
- globals
- passageQuiz.ts
- @sveltejs/adapter-auto
- db/schema.ts
- @eslint/js
- progressMerge.ts
- Handoff: Zoom group lessons, testing
- @playwright/test
- prettier-plugin-tailwindcss
- MarkdownInput.svelte
- (site)/+page.svelte
- render.md
- @sveltejs/adapter-static
- @sveltejs/vite-plugin-svelte
- auth.svelte.ts
- tailwindcss
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- debug.svelte.ts
- Handoff: payment provider (not chosen)
- editModel.svelte.ts
- @tailwindcss/vite
- edit-words/+page.svelte
- SlideStage.svelte
- UX principles
- api.spec.ts
- textColors.ts
- brand.md
- mode.svelte.ts
- auth/README.md
- Module C (16382) - Answer Key, Summer 2026, Moed B
- Module E (16471) - Answer Key, Summer 2026, Moed B
- playwright.config.ts
- Module G (16582) - Answer Key, Summer 2026, Moed B
- app/+layout.ts
- eslint-config-prettier
- Breakdown of criteria with further caveats and explanations
- Rubric for 4-Point Literature (Module D)
- Rubric for 5-Point Literature (Module F)
- emailTypo.ts
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
- svelte
- @sveltejs/kit
- @tailwindcss/forms
- @tailwindcss/typography
- typescript

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 42 edges
3. `LessonNode` - 36 edges
4. `LessonScreen` - 30 edges
5. `apiFetch()` - 28 edges
6. `ScreenPath` - 28 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 22 edges
9. `scripts` - 21 edges
10. `QuizNode` - 19 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `lengthReport()` --references--> `tables`  [EXTRACTED]
  front/src/lib/checks/length.ts → front/src/lib/content/localize.svelte.ts
- `GET()` --calls--> `checkAuth()`  [EXTRACTED]
  front/src/routes/api/finance/+server.ts → front/src/lib/content-edit/auth.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte

## Import Cycles
- None detected.

## Communities (201 total, 56 thin omitted)

### Community 0 - "miniMarkdown.ts"
Cohesion: 0.17
Nodes (19): CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes(), isolateSentences(), langAttrs() (+11 more)

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
Nodes (6): clone(), EditModel, screenList(), swapLevels(), versions(), getLessonsBySection()

### Community 5 - "Md.svelte"
Cohesion: 0.15
Nodes (5): #each(), Option, optText(), withFeedback(), i()

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "Button.svelte"
Cohesion: 0.07
Nodes (14): open, slot(), words, previous, formattedDate, lockedUntil, lockedWhen, row (+6 more)

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
Cohesion: 0.09
Nodes (26): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+18 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (29): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+21 more)

### Community 21 - "content/index.ts"
Cohesion: 0.06
Nodes (48): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+40 more)

### Community 22 - "deck/index.ts"
Cohesion: 0.14
Nodes (21): eGlossAr, homeMeters, moduleSkills(), activeDecks(), Deck, decks, deckStats(), deckToday() (+13 more)

### Community 24 - "hooks.server.ts"
Cohesion: 0.07
Nodes (28): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), appKeys, front (+20 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 30 - "stats.ts"
Cohesion: 0.09
Nodes (17): CurriculumModule, CurriculumSection, getUnitGroup(), literatureModules, modules, textSection, UnitGroup, unitGroups (+9 more)

### Community 31 - "checkAuth"
Cohesion: 0.20
Nodes (19): assertWriteUnlocked(), checkAuth(), digest(), getGithubFile(), ghHeaders(), githubBranch(), putGithubFile(), repoUrl() (+11 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "deck.test.ts"
Cohesion: 0.14
Nodes (17): listA, listB, listC, listD, addDays(), dueWords(), INTERVAL_DAYS, MAX_BOX (+9 more)

### Community 35 - "billing.ts"
Cohesion: 0.11
Nodes (26): cobeVisible(), Plan, productsOf(), access, accessEnd(), accessUntil(), billingEnabled, BillingError (+18 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (39): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+31 more)

### Community 37 - "MatchDefinitions.svelte"
Cohesion: 0.12
Nodes (10): active, checked, primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer() (+2 more)

### Community 38 - "api/reminders/+server.ts"
Cohesion: 0.15
Nodes (19): progress, pushSubscriptions, jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription (+11 more)

### Community 39 - "plans.ts"
Cohesion: 0.08
Nodes (32): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+24 more)

### Community 40 - "gradeExam.ts"
Cohesion: 0.18
Nodes (22): browserDictionaries(), bytes(), DictData, readingDeductions(), mechanicsCount(), check(), Checked, essayGrade() (+14 more)

### Community 41 - "checks/index.ts"
Cohesion: 0.09
Nodes (34): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+26 more)

### Community 42 - "api/lessons/+server.ts"
Cohesion: 0.14
Nodes (24): addToCalendar(), register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar() (+16 more)

### Community 43 - "session.ts"
Cohesion: 0.27
Nodes (18): w(), blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys() (+10 more)

### Community 44 - "apiFetch"
Cohesion: 0.16
Nodes (12): ApiError, apiFetch(), toWavBase64(), ChatTurnReply, addChat(), chatCount(), ChatTurnError, sendChatTurn() (+4 more)

### Community 45 - "grade/+server.ts"
Cohesion: 0.10
Nodes (34): moduleId, CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, GradeRequest, MAX_TEXT, getQuizNode() (+26 more)

### Community 46 - "QuizRunner.svelte"
Cohesion: 0.08
Nodes (17): total(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, i(), footerLabel, hiddenIndices (+9 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 49 - "chatSpeaking.ts"
Cohesion: 0.07
Nodes (44): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+36 more)

### Community 50 - "scripts"
Cohesion: 0.04
Nodes (46): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+38 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 53 - "profile.svelte.ts"
Cohesion: 0.10
Nodes (14): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+6 more)

### Community 54 - "scoring.ts"
Cohesion: 0.17
Nodes (19): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), isAnswered() (+11 more)

### Community 55 - "rubrics/index.ts"
Cohesion: 0.17
Nodes (10): essayRubric, Rubric, RubricCriterion, WritingRubricId, writingRubrics, Grammar, LENGTH_TABLES, LengthTable (+2 more)

### Community 56 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 57 - "refund.ts"
Cohesion: 0.24
Nodes (9): israelDate(), cancelFee(), monthsLeft(), Refund, REFUND_FREE_DAYS, REFUND_FULL_DAYS, refundOf(), RefundOrder (+1 more)

### Community 59 - "lessonProgress.svelte.ts"
Cohesion: 0.12
Nodes (16): activity, load(), WEEKLY_GOAL, progressScope(), Engagement, lastEngagement, LastEngagementStore, load() (+8 more)

### Community 61 - "Policies: legal and billing"
Cohesion: 0.33
Nodes (5): Accessibility, Billing, Facts the texts must match, Open (owner), Policies: legal and billing

### Community 62 - "progress.ts"
Cohesion: 0.05
Nodes (43): browserVoice, chatVoice, ExamGrade, prefaceSeen, PrefaceSeenStore, attemptKey(), clearInProgress(), ExamResult (+35 more)

### Community 63 - "llmGuard.ts"
Cohesion: 0.21
Nodes (15): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), reportCapOnce() (+7 more)

### Community 64 - "settings/+page.svelte"
Cohesion: 0.07
Nodes (16): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+8 more)

### Community 65 - "data.ts"
Cohesion: 0.14
Nodes (29): getLessonMeta(), getLessonMetaBySection(), LessonMeta, moduleSections(), continueFrom(), ContinueItem, EXAM_READY, examAdvice (+21 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.20
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+2 more)

### Community 67 - "4-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 4-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 4-point Bagrut, Glossary, High school English studies planner, Introduction, Module D - literature program, guidelines and table of specifications (+8 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "QuizReport.svelte"
Cohesion: 0.11
Nodes (12): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+4 more)

### Community 70 - "motion.ts"
Cohesion: 0.15
Nodes (3): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP

### Community 71 - "LessonScreen"
Cohesion: 0.12
Nodes (5): EditModelLike, ScreenPath, LessonScreen, IdentifiedScreen, QuizPart

### Community 72 - "Speak.svelte"
Cohesion: 0.15
Nodes (8): primaryAction(), reached, record(), seconds, share, stop(), toggle(), takeKey()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "deckProgress.svelte.ts"
Cohesion: 0.27
Nodes (5): deckProgress, DeckProgressStore, load(), persist(), ProgressMap

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "MatchPairs.svelte"
Cohesion: 0.25
Nodes (8): announce(), announcement, mistakes, pick(), shuffleNotIdentity(), fitOrder(), optionOrder(), shuffle()

### Community 78 - "devDependencies"
Cohesion: 0.22
Nodes (9): dictionary-en, devDependencies, dictionary-en, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

### Community 79 - "5-Point Bagrut Handbook (February 2025)"
Cohesion: 0.12
Nodes (16): 5-Point Bagrut Handbook (February 2025), Calculation of the school grade - annual grade (ציון בית ספרי), COBE - guidelines and table of specifications, Components and structure of the 5-point Bagrut, Glossary, High school English studies planner, Introduction, Module E - guidelines and table of specifications (+8 more)

### Community 82 - "reviewNotes.svelte.ts"
Cohesion: 0.24
Nodes (5): BLANK, ReviewNote, reviewNotes, editFetch(), stored()

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/+server.ts"
Cohesion: 0.17
Nodes (22): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+14 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (39): autoCheck, clozePickSchema, dir, index, lineNumbers, markAllCategorySchema, markAllSchema, matchDefinitionsSchema (+31 more)

### Community 88 - "validate.ts"
Cohesion: 0.13
Nodes (18): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment (+10 more)

### Community 89 - "PassageQuiz.svelte"
Cohesion: 0.18
Nodes (4): KEY, stripLineAttrs(), gutter, lines

### Community 90 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "fixtures.ts"
Cohesion: 0.06
Nodes (29): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+21 more)

### Community 93 - "COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points)"
Cohesion: 0.14
Nodes (14): COBE - Table of Specifications, Rubrics and Guidelines (4 and 5 points), Dates (Winter - Summer 2027), Deductions (same for 4 and 5 points), Further guidelines, General guidelines, Length of answer - Part B only, Multiple files, Part A - Spoken production: personal response (25 points) (+6 more)

### Community 94 - "lib/finance.ts"
Cohesion: 0.14
Nodes (12): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName (+4 more)

### Community 95 - "AccountSection.svelte"
Cohesion: 0.40
Nodes (5): deleteAccount(), deleting, failed, signOut(), t

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): clone(), ExamEditModel, getQuizNodesByModule()

### Community 98 - "MarkAll.svelte"
Cohesion: 0.47
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 100 - "content-edit/api.ts"
Cohesion: 0.33
Nodes (10): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+2 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.12
Nodes (16): Accounts (Supabase Auth, email + password), Builds, Environments and release, Error monitoring (Sentry), Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access (+8 more)

### Community 102 - "feedback/types.ts"
Cohesion: 0.10
Nodes (29): isLimit(), applyLength(), gradeLesson(), postGrade(), issuesToMarks(), Layer1, Layer1Options, runLayer1() (+21 more)

### Community 103 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 105 - "AGENTS.md"
Cohesion: 0.33
Nodes (5): mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 108 - "content-edit-files.test.ts"
Cohesion: 0.40
Nodes (3): f(), files, lib

### Community 109 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "localize.svelte.ts"
Cohesion: 0.22
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "index.svelte.ts"
Cohesion: 0.18
Nodes (7): pieces, dictionaries, ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr

### Community 118 - "Breakdown of criteria with further caveats and explanations"
Cohesion: 0.18
Nodes (7): Breakdown of criteria with further caveats and explanations, Content and organization (8), General comments, Language use (16), Mechanics (6), Module G (16582) - Writing Rubric, Vocabulary (10)

### Community 119 - "renewals/+server.ts"
Cohesion: 0.15
Nodes (18): formatPrice(), cancelRenewal(), subscription, cronAuthorized(), orders, israelDay(), planName(), Renewal (+10 more)

### Community 121 - "progressSync.svelte.ts"
Cohesion: 0.18
Nodes (9): load(), MyPhrases, localItem(), ProgressSync, readAt(), reloaders, saveSynced(), syncedKeys() (+1 more)

### Community 123 - "feedback/speaking.ts"
Cohesion: 0.16
Nodes (13): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeLevel, CobePart, gradeSpeaking(), half() (+5 more)

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 130 - "passageQuiz.ts"
Cohesion: 0.29
Nodes (9): ReadingRequest, ReadingVerdict, keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen (+1 more)

### Community 132 - "db/schema.ts"
Cohesion: 0.12
Nodes (24): ExamRef, PartVerdict, examLocked(), db, examAttempts, israelToday, llmUsage, zoomRegistrants (+16 more)

### Community 134 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 138 - "MarkdownInput.svelte"
Cohesion: 0.27
Nodes (6): htmlToMd(), pickIcon(), serialize(), sync(), CALLOUT_ICONS, DEFAULT_CALLOUT_ICON

### Community 139 - "(site)/+page.svelte"
Cohesion: 0.13
Nodes (6): COBE_OPEN, focus(), i(), homeMedia, Media, d

### Community 143 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (17): emails, access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote (+9 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (43): loadLesson(), hashString(), ICONS, lessonIcon(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+35 more)

### Community 149 - "Handoff: payment provider (not chosen)"
Cohesion: 0.40
Nodes (4): Ask lawyer / accountant, Handoff: payment provider (not chosen), Provider must offer, To build with it

### Community 150 - "editModel.svelte.ts"
Cohesion: 0.12
Nodes (9): EditHistory, LessonBucket, Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, moduleSections(), LessonContent (+1 more)

### Community 152 - "edit-words/+page.svelte"
Cohesion: 0.40
Nodes (3): changed, invalidCount, saving

### Community 154 - "SlideStage.svelte"
Cohesion: 0.13
Nodes (6): i(), TYPE_HE, issuesByNode(), OPENER_LEVELS, OpenerLevel, optFeedback()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 165 - "mode.svelte.ts"
Cohesion: 0.12
Nodes (5): Unlock, KEY, ScreenMode, KEY, QuizAnswerSlot

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
- **890 isolated node(s):** `Brand`, `Rules (Layer 1 settings)`, `Tries (choice screens)`, `Gates (no API call, outright wrong)`, `One attempt` (+885 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **56 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEditModel` connect `ExamEditModel` to `editModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `he` connect `fixtures.ts` to `index.svelte.ts`, `renewals/+server.ts`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `EditModel`, `session.ts`, `lesson-screens/types.ts`, `content/index.ts`, `editModel.svelte.ts`, `scoring.ts`, `validate.ts`, `SlideStage.svelte`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `Brand`, `Rules (Layer 1 settings)`, `Tries (choice screens)` to the rest of the system?**
  _890 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0782051282051282 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08078231292517007 - nodes in this community are weakly interconnected._