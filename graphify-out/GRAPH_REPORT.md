# Graph Report - things  (2026-11-14)

## Corpus Check
- 552 files · ~511,065 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2826 nodes · 4551 edges · 263 communities (190 shown, 73 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 114 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `375b8b8b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Speak.svelte
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- QuizReport.svelte
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- localize.svelte.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- RulesPanel.svelte
- graphify reference: query, path, explain
- lib/quiz/QuizRunner.svelte
- lesson-screens/types.ts
- content/index.ts
- motion.ts
- lesson-meta.mjs
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- .title
- extraction-spec.md
- GraphEditor.svelte
- lib/content-edit/ExamEditWorkspace.svelte
- scoring.ts
- WritingTask.svelte
- data.ts
- SlideStage.svelte
- plans.ts
- review/+server.ts
- checks/index.ts
- liveLesson.ts
- ScreenPath
- quiz/index.ts
- cron/reminders/+server.ts
- 1. Reading comprehension (grade-reading)
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chat.ts
- words/+page.svelte
- Workflow
- saveSynced
- hooks.server.ts
- $app/paths
- feedback/types.ts
- miniMarkdown.ts
- focus
- editModel.svelte.ts
- quizzes.ts
- session.ts
- test
- speech.ts
- progress.ts
- reminders.svelte.ts
- edit-words/+page.svelte
- progressMerge.ts
- snippet.md
- PassageText.svelte
- server/grade.ts
- takeHistory.ts
- $lib/components/Md.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- [quizId]/+page.svelte
- create-coupon.mjs
- measure-overflow.mjs
- access.svelte.ts
- devDependencies
- rubrics/index.ts
- content
- checkout/+page.ts
- server/finance.ts
- Material
- content-edit/api.ts
- feedbackEmail.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- Recorder
- eslint-config-prettier
- Handoff: About page, after launch
- await-expressions.md
- accounts.spec.ts
- activeField.svelte.ts
- RulesStore
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- api/reminders/+server.ts
- llm.ts
- progressSync.svelte.ts
- AGENTS.md
- Rules
- screenChecks.ts
- svelte/transition
- index.svelte.ts
- storeItem
- passageQuiz.ts
- content-i18n.mjs
- Handoff: test findings (open items only)
- ActivityStore
- Submit → feedback framework
- fixtures.ts
- TitleEdits
- feedback.test.ts
- profile.svelte.ts
- settings/+page.svelte
- wordImage.ts
- hydratable.md
- scripts
- Handoff: testing plan (open items only)
- inspect.md
- vercel.json
- $lib/i18n/index.svelte
- personas.spec.ts
- gradeExam.ts
- @sveltejs/adapter-auto
- zoom.ts
- lib/content-edit/MarkdownInput.svelte
- Handoff: Zoom group lessons, testing
- MatchPairs.svelte
- server/speaking.ts
- support.ts
- Module E QA
- render.md
- lib/components/AccountSection.svelte
- moduleLocation.svelte.ts
- lessonIcon.ts
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- chatSpeaking.ts
- feedback/grade.ts
- answers.svelte.ts
- screenshot.ts
- merge.ts
- PhraseBank.svelte
- book/+page.svelte
- UX principles
- api.spec.ts
- emailTypo.ts
- svelte/easing
- prettier
- real-ai.spec.ts
- goalOptions.ts
- brand.md
- @playwright/test
- auth/README.md
- lib/lesson-screens/MatchDefinitions.svelte
- legacyIds.ts
- playwright.config.ts
- acceptedAnswers.ts
- app/+layout.ts
- MarkAll.svelte
- choice.ts
- Module G QA report
- @eslint/js
- checkoutBody
- rules/+server.ts
- eslint
- eslint-plugin-svelte
- content-edit/+server.ts
- svelte-check
- @sveltejs/vite-plugin-svelte
- api/lessons/+server.ts
- UI review
- edit/+page.svelte
- edit-exam/+page.svelte
- @types/web-push
- globals
- github.ts
- vite
- vite-env.d.ts
- prettier-plugin-svelte
- server/kanban.ts
- grade/+server.ts
- feedback/+server.ts
- [id]/+server.ts
- progress/+server.ts
- smoke.spec.ts
- sentenceCompletion.ts
- sectionThemes.ts
- alpha.ts
- phrases.ts
- focusTrap.ts
- I18n
- scrollLock.ts
- billing.ts
- waitlist/+server.ts
- (site)/+layout.ts
- dictionary-en
- dictionary-en-gb
- drizzle-kit
- prettier-plugin-tailwindcss
- svelte
- @sveltejs/adapter-static
- @sveltejs/kit
- tailwindcss
- @tailwindcss/forms
- @tailwindcss/typography
- @tailwindcss/vite
- typescript
- words.ar.ts
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
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `submit()` --calls--> `scoreQuiz()`  [EXTRACTED]
  front/src/lib/quiz/QuizRunner.svelte → front/src/lib/quiz/scoring.ts
- `takenAt()` --calls--> `test`  [EXTRACTED]
  front/e2e/robustness.spec.ts → front/e2e/fixtures.ts

## Import Cycles
- None detected.

## Communities (263 total, 73 thin omitted)

### Community 0 - "Speak.svelte"
Cohesion: 0.12
Nodes (9): KEY, ScreenMode, primaryAction(), reached, record(), seconds, share, stop() (+1 more)

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

### Community 5 - "QuizReport.svelte"
Cohesion: 0.10
Nodes (9): anyFailed, closed, hasSpeaking, headline, level, numbers, pending, uncounted (+1 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "AuthStore"
Cohesion: 0.08
Nodes (9): AuthStore, Currency, Cycle, cycleLabel, Expense, LedgerEntry, monthly(), Partner (+1 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (8): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate()

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

### Community 19 - "lib/quiz/QuizRunner.svelte"
Cohesion: 0.09
Nodes (12): i(), footerLabel, hiddenIndices, partBreaks, QuizAnswerSlot, quizHasPassage, remainingSeconds, showTimer (+4 more)

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.05
Nodes (30): OPENER_LEVELS, OpenerLevel, screenComponents, ClozePickScreen, MarkAllCategory, MarkAllScreen, MATCH_PAIRS_MAX_MISTAKES, MatchDefinitionsScreen (+22 more)

### Community 21 - "content/index.ts"
Cohesion: 0.07
Nodes (41): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+33 more)

### Community 22 - "motion.ts"
Cohesion: 0.13
Nodes (3): reducedMotion, ./$types, ./$types

### Community 24 - "lesson-meta.mjs"
Cohesion: 0.26
Nodes (7): buildLessonMeta(), out, renderLessonMeta(), root, SECTION_FILES, writeLessonMeta(), lessonMeta()

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.07
Nodes (14): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+6 more)

### Community 34 - "lib/content-edit/ExamEditWorkspace.svelte"
Cohesion: 0.10
Nodes (17): onMove(), onUp(), addExam(), errorCount, exit(), issues, issuesFor, onKey() (+9 more)

### Community 35 - "scoring.ts"
Cohesion: 0.23
Nodes (13): LessonScreen, ExamPartKind, examParts(), partIdOf(), applyGrades(), countedIds(), isScored(), normalize() (+5 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.04
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "data.ts"
Cohesion: 0.12
Nodes (25): SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson(), latestEngagement() (+17 more)

### Community 38 - "SlideStage.svelte"
Cohesion: 0.12
Nodes (3): i(), TYPE_HE, issuesByNode()

### Community 39 - "plans.ts"
Cohesion: 0.06
Nodes (39): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+31 more)

### Community 40 - "review/+server.ts"
Cohesion: 0.33
Nodes (3): body, ReviewNote, ReviewNotes

### Community 41 - "checks/index.ts"
Cohesion: 0.07
Nodes (45): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+37 more)

### Community 42 - "liveLesson.ts"
Cohesion: 0.17
Nodes (18): register(), dayKey(), endOf(), icsLocal(), icsText(), joinOpen(), lessonCalendar(), LessonRecording (+10 more)

### Community 43 - "ScreenPath"
Cohesion: 0.11
Nodes (4): screenList(), EditModelLike, ScreenPath, blankScreen()

### Community 44 - "quiz/index.ts"
Cohesion: 0.19
Nodes (12): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, examLocked(), RETAKE_WAIT_MS, StoredAttempt, QuizKind (+4 more)

### Community 45 - "cron/reminders/+server.ts"
Cohesion: 0.60
Nodes (4): GET(), israelDay(), israelHour(), MESSAGES

### Community 46 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.38
Nodes (8): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chat.ts"
Cohesion: 0.15
Nodes (13): chatEnds(), ChatLine, ChatMode, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS, MIN_TURNS (+5 more)

### Community 50 - "words/+page.svelte"
Cohesion: 0.12
Nodes (3): next, seen, ./$types

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "saveSynced"
Cohesion: 0.12
Nodes (14): Engagement, lastEngagement, LastEngagementStore, load(), lessonProgress, LessonProgressStore, load(), persist() (+6 more)

### Community 53 - "hooks.server.ts"
Cohesion: 0.53
Nodes (5): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS

### Community 54 - "$app/paths"
Cohesion: 0.08
Nodes (3): showNav, loadQuote(), setCobe()

### Community 55 - "feedback/types.ts"
Cohesion: 0.12
Nodes (18): pieces, CobeLevel, CobePart, gradeSpeaking(), half(), lengthPercentOff(), SpeakingJudgement, EssayVerdict (+10 more)

### Community 56 - "miniMarkdown.ts"
Cohesion: 0.09
Nodes (24): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+16 more)

### Community 57 - "focus"
Cohesion: 0.25
Nodes (4): focus(), i(), homeMedia, Media

### Community 58 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (5): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 59 - "quizzes.ts"
Cohesion: 0.18
Nodes (8): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, MinistryQuiz, ministryQuizzes, Quiz, QuizBase

### Community 60 - "session.ts"
Cohesion: 0.07
Nodes (52): listA, listB, listC, listD, w(), wordId(), deckProgress, DeckProgressStore (+44 more)

### Community 61 - "test"
Cohesion: 0.29
Nodes (5): test, corrupt, pages, takenAt(), he

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.17
Nodes (24): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+16 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.12
Nodes (12): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, currentSubscription(), REMINDER_HOURS, reminders (+4 more)

### Community 66 - "edit-words/+page.svelte"
Cohesion: 0.17
Nodes (5): changed, invalidCount, saving, ssr, ./$types

### Community 67 - "progressMerge.ts"
Cohesion: 0.38
Nodes (10): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), mergeItems(), num() (+2 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "PassageText.svelte"
Cohesion: 0.15
Nodes (7): stripLineAttrs(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (18): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ask(), block(), cleanMarks() (+10 more)

### Community 71 - "takeHistory.ts"
Cohesion: 0.31
Nodes (7): Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), TakeStats

### Community 72 - "$lib/components/Md.svelte"
Cohesion: 0.09
Nodes (7): #each(), Option, optText(), withFeedback(), KEY, LessonSession, item()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "[quizId]/+page.svelte"
Cohesion: 0.12
Nodes (7): lockedUntil, lockedWhen, row, rules, taken, tips, ./$types

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "access.svelte.ts"
Cohesion: 0.11
Nodes (11): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, ApiError (+3 more)

### Community 78 - "devDependencies"
Cohesion: 0.22
Nodes (9): @axe-core/playwright, devDependencies, @axe-core/playwright, @types/node, @types/nspell, typescript-eslint, @types/node, @types/nspell (+1 more)

### Community 79 - "rubrics/index.ts"
Cohesion: 0.17
Nodes (13): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics(), CobeBand, CobeCriterion, CobeRubric (+5 more)

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "content-edit/api.ts"
Cohesion: 0.10
Nodes (20): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+12 more)

### Community 85 - "feedbackEmail.ts"
Cohesion: 0.47
Nodes (4): escape(), feedbackHtml(), FeedbackReport, row()

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (42): autoCheck, clozePickSchema, dir, index, lessonContentSchema, lessonNodeSchema, lineNumbers, markAllCategorySchema (+34 more)

### Community 88 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "accounts.spec.ts"
Cohesion: 0.16
Nodes (10): auth(), coupon, makeUser(), noSession, onSettings(), run, signedIn(), studentRoutes (+2 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

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
Cohesion: 0.13
Nodes (14): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Group lessons (Zoom), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync (+6 more)

### Community 102 - "api/reminders/+server.ts"
Cohesion: 0.18
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

### Community 103 - "llm.ts"
Cohesion: 0.21
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LLM_ENABLED, LlmResult, GATEWAY_URL, GEMINI_URL (+4 more)

### Community 104 - "progressSync.svelte.ts"
Cohesion: 0.26
Nodes (9): apiFetch(), isSyncedKey(), Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys() (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "screenChecks.ts"
Cohesion: 0.21
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 109 - "index.svelte.ts"
Cohesion: 0.19
Nodes (8): dictionaries, Language, ar, Dictionary, DictionaryOverride, LegalDoc, titlesAr, titlesHe

### Community 110 - "storeItem"
Cohesion: 0.19
Nodes (5): prefaceSeen, PrefaceSeenStore, storeItem(), ThemeMode, ThemeStore

### Community 111 - "passageQuiz.ts"
Cohesion: 0.39
Nodes (7): keywordMatch(), normalize(), QuizResult, quizResults(), readingRequest(), PassageQuizScreen, screen

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "Handoff: test findings (open items only)"
Cohesion: 0.40
Nodes (4): COBE (parked, not tested), Handoff: test findings (open items only), Open findings, Owner

### Community 114 - "ActivityStore"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "fixtures.ts"
Cohesion: 0.18
Nodes (7): Fixtures, GradeBody, Mocks, PartBody, PIXEL, playThrough(), states

### Community 118 - "feedback.test.ts"
Cohesion: 0.19
Nodes (6): KEY, clearBelow(), DEFAULT_RULES, resolveRules(), RULE_KEYS, Rules

### Community 119 - "profile.svelte.ts"
Cohesion: 0.13
Nodes (12): examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions(), dayPart, load(), NAME_MAX (+4 more)

### Community 123 - "scripts"
Cohesion: 0.04
Nodes (44): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+36 more)

### Community 125 - "Handoff: testing plan (open items only)"
Cohesion: 0.50
Nodes (3): Handoff: testing plan (open items only), Open decisions (owner), Still to do

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "$lib/i18n/index.svelte"
Cohesion: 0.07
Nodes (5): delta, firstSeconds, newlyReached, d, ./$types

### Community 129 - "personas.spec.ts"
Cohesion: 0.22
Nodes (4): StudentState, HOSTILE, SEED, STEPS

### Community 130 - "gradeExam.ts"
Cohesion: 0.20
Nodes (19): applyLength(), mechanicsCount(), Checked, essayGrade(), essayPart(), failed(), gradeExam(), labelled() (+11 more)

### Community 132 - "zoom.ts"
Cohesion: 0.26
Nodes (11): accessToken(), aliasEmail(), Meeting, meetingPath(), Recording, register(), schedule(), unregister() (+3 more)

### Community 133 - "lib/content-edit/MarkdownInput.svelte"
Cohesion: 0.36
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 135 - "Handoff: Zoom group lessons, testing"
Cohesion: 0.25
Nodes (7): Before production, Checks, Handoff: Zoom group lessons, testing, Names, Next, State, The issue

### Community 136 - "MatchPairs.svelte"
Cohesion: 0.25
Nodes (8): announce(), announcement, mistakes, pick(), shuffleNotIdentity(), fitOrder(), optionOrder(), shuffle()

### Community 137 - "server/speaking.ts"
Cohesion: 0.22
Nodes (9): band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema, body (+1 more)

### Community 138 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 139 - "Module E QA"
Cohesion: 0.25
Nodes (7): Grades (10 = best), Module E QA, Official spec (Ministry 5-point handbook, Module E 16471), Part I - reading lessons, Practice exams (e-exam-1..4), Real papers (16471: winter 2024, winter 2025, summer 2025, and two more from 2023-2025), Word decks (lists 1-4)

### Community 141 - "lib/components/AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, deleteAccount(), deleting, failed, signOut(), t

### Community 142 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 143 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (37): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+29 more)

### Community 148 - "chatSpeaking.ts"
Cohesion: 0.24
Nodes (8): PROJECT_POINTS, block(), chatPrompt(), chatTurn(), ChatTurnRequest, replySchema, body, POST

### Community 149 - "feedback/grade.ts"
Cohesion: 0.17
Nodes (15): gradeLesson(), postGrade(), check(), issuesToMarks(), Layer1, Layer1Options, runLayer1(), applyFixes() (+7 more)

### Community 153 - "merge.ts"
Cohesion: 0.32
Nodes (7): Corrected, Fix, FIX_TAGS, locateMarks(), mergeMarks(), toOriginal(), LlmMark

### Community 154 - "PhraseBank.svelte"
Cohesion: 0.29
Nodes (3): row(), groups, phrase()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 158 - "emailTypo.ts"
Cohesion: 0.70
Nodes (3): COMMON, distance(), suggestEmail()

### Community 159 - "svelte/easing"
Cohesion: 0.12
Nodes (6): full, ignite, previewUrl(), scanHandwriting(), toJpeg(), words

### Community 163 - "goalOptions.ts"
Cohesion: 0.40
Nodes (3): sessionKey(), sessionOptions(), UNKNOWN_SESSION

### Community 168 - "lib/lesson-screens/MatchDefinitions.svelte"
Cohesion: 0.12
Nodes (11): active, checked, primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer() (+3 more)

### Community 169 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 171 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 173 - "MarkAll.svelte"
Cohesion: 0.47
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 175 - "choice.ts"
Cohesion: 0.60
Nodes (4): isAnswered(), pickCounted(), counted(), ids

### Community 177 - "Module G QA report"
Cohesion: 0.08
Nodes (23): 10. Templates lesson incomplete - ⬜, 11. Model essays break the taught map - ✅, 12. Wrong quote in exam 3 - ✅, 13. Answer-position pattern - ✅, 14. Weak grading notes - ✅, 15. Word-bank entries with punctuation never counted - ✅, 16. Arabic missing for new text - ⬜, 1. Options never shuffle - ✅ (+15 more)

### Community 181 - "checkoutBody"
Cohesion: 0.60
Nodes (3): checkoutBody(), POST(), POST()

### Community 182 - "rules/+server.ts"
Cohesion: 0.40
Nodes (4): fileSchema, POST(), rules, serialize()

### Community 186 - "content-edit/+server.ts"
Cohesion: 0.53
Nodes (5): assertValid(), Body, isText(), POST(), sectionFile()

### Community 189 - "api/lessons/+server.ts"
Cohesion: 0.60
Nodes (5): entitled(), GET(), info(), nameBody, POST()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

### Community 195 - "github.ts"
Cohesion: 0.80
Nodes (4): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl()

### Community 201 - "server/kanban.ts"
Cohesion: 0.40
Nodes (3): tags, taskColumns, taskFields

### Community 202 - "grade/+server.ts"
Cohesion: 0.14
Nodes (10): body, count, essay, ExamBody, notes, partId, POST, question (+2 more)

### Community 203 - "feedback/+server.ts"
Cohesion: 0.50
Nodes (4): allowed(), body, POST(), sent

### Community 204 - "[id]/+server.ts"
Cohesion: 0.60
Nodes (4): DELETE(), PATCH(), patchBody, taskId()

### Community 205 - "progress/+server.ts"
Cohesion: 0.70
Nodes (4): GET(), parseItems(), POST(), scope()

### Community 207 - "sentenceCompletion.ts"
Cohesion: 0.83
Nodes (3): FILLER, isSentenceCompletionMatch(), normalize()

### Community 217 - "billing.ts"
Cohesion: 0.05
Nodes (49): access, accessEnd(), accessUntil(), billingEnabled, BillingError, checkout(), CheckoutResult, completeOrder() (+41 more)

## Knowledge Gaps
- **910 isolated node(s):** `svelte`, `run`, `noSession`, `TestUser`, `users` (+905 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **73 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `explanation()` connect `session.ts` to `Speak.svelte`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `item()` connect `$lib/components/Md.svelte` to `$lib/i18n/index.svelte`, `progressMerge.ts`, `lib/lesson-screens/MatchDefinitions.svelte`, `.title`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `AuthStore` connect `AuthStore` to `access.svelte.ts`, `lib/components/AccountSection.svelte`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `svelte`, `run`, `noSession` to the rest of the system?**
  _910 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Speak.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.12169312169312169 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._