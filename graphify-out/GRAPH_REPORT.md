# Graph Report - misc_biz  (2026-11-05)

## Corpus Check
- 509 files · ~469,163 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2573 nodes · 4149 edges · 245 communities (173 shown, 72 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 102 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d3d55903`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- .title
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- alpha.ts
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
- content/index.ts
- option.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- scan.ts
- extraction-spec.md
- GraphEditor.svelte
- svelte/transition
- scoring.ts
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- review/+server.ts
- api/reminders/+server.ts
- answers.svelte.ts
- ScreenPath
- lessonProgress.svelte.ts
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chat.ts
- media.ts
- Workflow
- quiz/index.ts
- hooks.server.ts
- lib/content-edit/ExamEditWorkspace.svelte
- llm.ts
- TitleEdits
- SlideStage.svelte
- editModel.svelte.ts
- quizzes.ts
- session.ts
- RulesStore
- speech.ts
- progress.ts
- reminders.svelte.ts
- edit-words/+page.svelte
- content-edit/api.ts
- progressMerge.ts
- snippet.md
- server/speaking.ts
- server/grade.ts
- $lib/i18n/index.svelte
- checks/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- validate.ts
- create-coupon.mjs
- measure-overflow.mjs
- lib/components/AccountSection.svelte
- screenChecks.ts
- ActivityStore
- content
- checkout/+page.ts
- lib/finance.ts
- Material
- wordsFile.ts
- feedbackEmail.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- access.svelte.ts
- activeField.svelte.ts
- registry.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- progressSync.svelte.ts
- QuizReport.svelte
- passageMarks.ts
- AGENTS.md
- Rules
- localize.svelte.ts
- svelte/easing
- chatSpeaking.ts
- apiFetch
- grade/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- Recorder
- Submit → feedback framework
- fixtures.ts
- markAllColors.ts
- profile.svelte.ts
- lib/content-edit/MarkdownInput.svelte
- hydratable.md
- scripts
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- settings/+page.svelte
- stats.ts
- rubrics/index.ts
- @sveltejs/adapter-auto
- goalOptions.ts
- acceptedAnswers.ts
- @sveltejs/kit
- wordImage.ts
- Handoff: exam lock trusts the client's part count
- support.ts
- legacyIds.ts
- render.md
- theme.svelte.ts
- moduleLocation.svelte.ts
- rules/+server.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- checkoutBody
- content-edit/+server.ts
- cron/reminders/+server.ts
- edit/+page.svelte
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- edit-exam/+page.svelte
- writingMoves.ts
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- @playwright/test
- auth/README.md
- github.ts
- dictionary-en-gb
- server/kanban.ts
- app/+layout.ts
- svelte
- lessonIcon.ts
- sectionThemes.ts
- feedback/+server.ts
- @eslint/js
- [id]/+server.ts
- progress/+server.ts
- finance/+page.svelte
- sentenceCompletion.ts
- phrases.ts
- screenTypeNames.ts
- focusTrap.ts
- UI review
- screenshot.ts
- scrollLock.ts
- server/finance.ts
- waitlist/+server.ts
- vite
- [quizId]/+page.ts
- vite-env.d.ts
- [moduleId]/+layout.ts
- prettier-plugin-svelte
- (site)/+layout.ts
- dictionary-en
- drizzle-kit
- eslint
- eslint-plugin-svelte
- globals
- svelte-check
- @sveltejs/vite-plugin-svelte
- tailwindcss
- @tailwindcss/typography
- @tailwindcss/vite
- @types/web-push
- words.ar.ts
- billing.ts
- primaryAction
- screenContext.svelte.ts
- ocr/+server.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `ScreenPath` - 28 edges
4. `EditModelLike` - 20 edges
5. `LessonNode` - 20 edges
6. `Rules` - 18 edges
7. `scripts` - 17 edges
8. `saveSynced()` - 15 edges
9. `AuthStore` - 14 edges
10. `Checklist` - 14 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `takenAt()` --calls--> `test`  [EXTRACTED]
  front/e2e/robustness.spec.ts → front/e2e/fixtures.ts
- `post()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/access.svelte.ts → front/src/lib/api.ts

## Import Cycles
- None detected.

## Communities (245 total, 72 thin omitted)

### Community 0 - ".title"
Cohesion: 0.10
Nodes (3): status(), f(), item()

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.11
Nodes (16): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+8 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "AuthStore"
Cohesion: 0.08
Nodes (5): ApiError, auth, AuthStore, DebugStore, supabase

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "miniMarkdown.ts"
Cohesion: 0.06
Nodes (29): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+21 more)

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

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): ClozePickScreen, MarkAllCategory, MarkAllScreen, MATCH_PAIRS_MAX_MISTAKES, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 21 - "content/index.ts"
Cohesion: 0.09
Nodes (34): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+26 more)

### Community 22 - "option.ts"
Cohesion: 0.33
Nodes (4): Option, optText(), withFeedback(), oi()

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "scan.ts"
Cohesion: 0.60
Nodes (3): previewUrl(), scanHandwriting(), toJpeg()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.07
Nodes (14): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+6 more)

### Community 34 - "svelte/transition"
Cohesion: 0.07
Nodes (14): row(), groups, phrase(), primaryAction(), reached, record(), seconds, share (+6 more)

### Community 35 - "scoring.ts"
Cohesion: 0.36
Nodes (7): applyGrades(), normalize(), Scored, scoreQuiz(), scoreScreen(), IdentifiedScreen, screensWithIds()

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.12
Nodes (25): SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson(), latestEngagement() (+17 more)

### Community 38 - "gradeExam.ts"
Cohesion: 0.05
Nodes (61): KEY, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked, essayGrade() (+53 more)

### Community 39 - "plans.ts"
Cohesion: 0.06
Nodes (43): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+35 more)

### Community 40 - "review/+server.ts"
Cohesion: 0.33
Nodes (3): body, ReviewNote, ReviewNotes

### Community 41 - "api/reminders/+server.ts"
Cohesion: 0.18
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

### Community 43 - "ScreenPath"
Cohesion: 0.12
Nodes (4): screenList(), EditModelLike, ScreenPath, blankScreen()

### Community 46 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chat.ts"
Cohesion: 0.15
Nodes (13): chatEnds(), ChatLine, ChatMode, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS, MIN_TURNS (+5 more)

### Community 50 - "media.ts"
Cohesion: 0.40
Nodes (3): focus(), homeMedia, Media

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "quiz/index.ts"
Cohesion: 0.26
Nodes (8): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, QuizKind, QuizNode, QuizOptions, QuizPart

### Community 53 - "hooks.server.ts"
Cohesion: 0.53
Nodes (5): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS

### Community 54 - "lib/content-edit/ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 55 - "llm.ts"
Cohesion: 0.23
Nodes (11): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (5): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 59 - "quizzes.ts"
Cohesion: 0.18
Nodes (8): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, MinistryQuiz, ministryQuizzes, Quiz, QuizBase

### Community 60 - "session.ts"
Cohesion: 0.07
Nodes (52): listA, listB, listC, listD, w(), wordId(), deckProgress, DeckProgressStore (+44 more)

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.22
Nodes (19): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+11 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.12
Nodes (12): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, currentSubscription(), REMINDER_HOURS, reminders (+4 more)

### Community 65 - "edit-words/+page.svelte"
Cohesion: 0.17
Nodes (5): changed, invalidCount, saving, ssr, ./$types

### Community 66 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (9): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+1 more)

### Community 67 - "progressMerge.ts"
Cohesion: 0.33
Nodes (11): byKey(), field(), isObj(), Item, larger(), laterReview(), mergeFor(), mergeItems() (+3 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "server/speaking.ts"
Cohesion: 0.22
Nodes (9): band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema, body (+1 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (18): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ask(), block(), cleanMarks() (+10 more)

### Community 71 - "$lib/i18n/index.svelte"
Cohesion: 0.09
Nodes (5): full, ignite, words, d, formattedDate

### Community 72 - "checks/index.ts"
Cohesion: 0.08
Nodes (42): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+34 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "validate.ts"
Cohesion: 0.27
Nodes (6): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "lib/components/AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 78 - "screenChecks.ts"
Cohesion: 0.19
Nodes (13): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+5 more)

### Community 79 - "ActivityStore"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 82 - "lib/finance.ts"
Cohesion: 0.20
Nodes (8): Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner, partnerName

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "wordsFile.ts"
Cohesion: 0.19
Nodes (11): emit(), extractArrayLiteral(), matchingBracketEnd(), parseArrayLiteral(), splitArrayHead(), sq(), patchGlosses(), patchWordList() (+3 more)

### Community 85 - "feedbackEmail.ts"
Cohesion: 0.47
Nodes (4): escape(), feedbackHtml(), FeedbackReport, row()

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (38): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, markAllCategorySchema, markAllSchema (+30 more)

### Community 89 - "devDependencies"
Cohesion: 0.22
Nodes (9): @axe-core/playwright, devDependencies, @axe-core/playwright, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "access.svelte.ts"
Cohesion: 0.27
Nodes (7): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "registry.ts"
Cohesion: 0.06
Nodes (20): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+12 more)

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 98 - "Handoff: legal (privacy, terms, accessibility)"
Cohesion: 0.29
Nodes (6): Accessibility (`/accessibility`), Facts the texts must match, Handoff: legal (privacy, terms, accessibility), Owner decisions (accepted, no lawyer review), Unfinished: owner, Unfinished: update the pages before opening each service

### Community 100 - "curriculum.ts"
Cohesion: 0.17
Nodes (8): CurriculumModule, CurriculumSection, modules, textSection, UnitGroup, unitGroups, wordsSection, writingSection

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "progressSync.svelte.ts"
Cohesion: 0.17
Nodes (11): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, onSyncedChange(), readAt() (+3 more)

### Community 103 - "QuizReport.svelte"
Cohesion: 0.22
Nodes (7): anyFailed, closed, hasSpeaking, headline, level, numbers, pending

### Community 104 - "passageMarks.ts"
Cohesion: 0.40
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (8): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate()

### Community 108 - "svelte/easing"
Cohesion: 0.05
Nodes (11): reducedMotion, lockedUntil, lockedWhen, row, rules, taken, tips, ./$types (+3 more)

### Community 109 - "chatSpeaking.ts"
Cohesion: 0.24
Nodes (8): PROJECT_POINTS, block(), chatPrompt(), chatTurn(), ChatTurnRequest, replySchema, body, POST

### Community 110 - "apiFetch"
Cohesion: 0.33
Nodes (5): apiFetch(), isSyncedKey(), localItem(), ProgressSync, syncedKeys()

### Community 111 - "grade/+server.ts"
Cohesion: 0.22
Nodes (7): body, count, exam, notes, POST, question, text

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (from the testing plan runs)"
Cohesion: 0.25
Nodes (7): COBE (parked, not tested), Fixed, Fixed: break-it round, Fixed: break-it round 2 (clock and date), Handoff: test findings (from the testing plan runs), Where to continue (next session), Your to-do (owner)

### Community 114 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.07
Nodes (23): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+15 more)

### Community 118 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 119 - "profile.svelte.ts"
Cohesion: 0.13
Nodes (11): examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions(), dayPart, load(), NAME_MAX (+3 more)

### Community 121 - "lib/content-edit/MarkdownInput.svelte"
Cohesion: 0.36
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (40): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+32 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "settings/+page.svelte"
Cohesion: 0.05
Nodes (4): EditStore, showNav, loadQuote(), setCobe()

### Community 129 - "stats.ts"
Cohesion: 0.32
Nodes (6): avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT

### Community 130 - "rubrics/index.ts"
Cohesion: 0.17
Nodes (13): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics(), CobeBand, CobeCriterion, CobeRubric (+5 more)

### Community 132 - "goalOptions.ts"
Cohesion: 0.40
Nodes (3): sessionKey(), sessionOptions(), UNKNOWN_SESSION

### Community 133 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 138 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 139 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.13
Nodes (14): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist(), isRecord(), Entry (+6 more)

### Community 143 - "rules/+server.ts"
Cohesion: 0.40
Nodes (4): fileSchema, POST(), rules, serialize()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (36): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+28 more)

### Community 150 - "checkoutBody"
Cohesion: 0.60
Nodes (3): checkoutBody(), POST(), POST()

### Community 151 - "content-edit/+server.ts"
Cohesion: 0.53
Nodes (5): assertValid(), Body, isText(), POST(), sectionFile()

### Community 152 - "cron/reminders/+server.ts"
Cohesion: 0.53
Nodes (5): authorized(), GET(), israelDay(), israelHour(), MESSAGES

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 159 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 168 - "github.ts"
Cohesion: 0.80
Nodes (4): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl()

### Community 171 - "server/kanban.ts"
Cohesion: 0.40
Nodes (3): tags, taskColumns, taskFields

### Community 174 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 177 - "feedback/+server.ts"
Cohesion: 0.50
Nodes (4): allowed(), body, POST(), sent

### Community 181 - "[id]/+server.ts"
Cohesion: 0.60
Nodes (4): DELETE(), PATCH(), patchBody, taskId()

### Community 182 - "progress/+server.ts"
Cohesion: 0.70
Nodes (4): GET(), parseItems(), POST(), scope()

### Community 185 - "sentenceCompletion.ts"
Cohesion: 0.83
Nodes (3): FILLER, isSentenceCompletionMatch(), normalize()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 217 - "billing.ts"
Cohesion: 0.06
Nodes (48): access, accessEnd(), accessUntil(), billingEnabled, BillingError, checkout(), CheckoutResult, completeOrder() (+40 more)

## Knowledge Gaps
- **814 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+809 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **72 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `item()` connect `.title` to `progressMerge.ts`, `svelte/easing`, `registry.ts`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `explanation()` connect `session.ts` to `registry.ts`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `I18n` connect `fixtures.ts` to `.title`, `profile.svelte.ts`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _814 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `.title` be split into smaller, more focused modules?**
  _Cohesion score 0.09666666666666666 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._