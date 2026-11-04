# Graph Report - desc_n_ui  (2026-11-04)

## Corpus Check
- 507 files · ~466,556 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2551 nodes · 4115 edges · 238 communities (162 shown, 76 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 104 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `158e785a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- activeField.svelte.ts
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lib/kanban.ts
- EditModel
- billing.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- waitlist/+server.ts
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- lib/content-edit/MarkdownInput.svelte
- graphify reference: query, path, explain
- wordImage.ts
- lesson-screens/types.ts
- content/index.ts
- ocr/+server.ts
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rubrics/index.ts
- extraction-spec.md
- GraphEditor.svelte
- RulesPanel.svelte
- $lib/components/Button.svelte
- WritingTask.svelte
- data.ts
- gradeExam.ts
- plans.ts
- lib/content-edit/ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- RemindersStore
- ScreenPath
- profile.svelte.ts
- .title
- writingLint.ts
- Handoff: before testers (owner's to-do)
- chat.ts
- editModel.svelte.ts
- Workflow
- access.svelte.ts
- llm.ts
- content-edit/api.ts
- RulesStore
- answers.svelte.ts
- SlideStage.svelte
- EditHistory
- media.ts
- session.ts
- takeHistory.ts
- speech.ts
- progress.ts
- reminders.svelte.ts
- review/+server.ts
- progressMerge.ts
- snippet.md
- saveSynced
- server/grade.ts
- svelte/transition
- hooks.server.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- sentenceCompletion.ts
- create-coupon.mjs
- measure-overflow.mjs
- settings/+page.svelte
- [id]/+server.ts
- ActivityStore
- content
- checkout/+page.ts
- localize.svelte.ts
- Material
- wordsFile.ts
- feedbackEmail.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- TitleEdits
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- cron/reminders/+server.ts
- miniMarkdown.ts
- Speak.svelte
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: legal (privacy, terms, accessibility)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- lessonProgress.svelte.ts
- Recorder
- lib/finance.ts
- AGENTS.md
- Rules
- checkoutBody
- $lib/i18n/index.svelte
- passageMarks.ts
- progressSync.svelte.ts
- api/reminders/+server.ts
- content-i18n.mjs
- Handoff: test findings (from the testing plan runs)
- edit-exam/+page.svelte
- Submit → feedback framework
- fixtures.ts
- server/speaking.ts
- edit/+page.svelte
- checks/index.ts
- screenChecks.ts
- chatSpeaking.ts
- hydratable.md
- scripts
- Handoff: testing plan (automation + human-like runs)
- inspect.md
- vercel.json
- validate.ts
- grade/+server.ts
- registry.ts
- @sveltejs/adapter-auto
- edit-words/+page.svelte
- lessonIcon.ts
- @sveltejs/kit
- goalOptions.ts
- Handoff: exam lock trusts the client's part count
- sectionThemes.ts
- dictionary-en-gb
- support.ts
- render.md
- screenshot.ts
- globals
- Handoff: text as blocks (future plan)
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- theme.svelte.ts
- legacyIds.ts
- rules/+server.ts
- content-edit/+server.ts
- eslint-config-prettier
- typescript
- UX principles
- api.spec.ts
- DebugStore
- @playwright/test
- prettier
- prettier-plugin-tailwindcss
- @sveltejs/adapter-static
- brand.md
- acceptedAnswers.ts
- auth/README.md
- markAllColors.ts
- writingMoves.ts
- @eslint/js
- app/+layout.ts
- svelte
- scan.ts
- github.ts
- server/kanban.ts
- feedback/+server.ts
- progress/+server.ts
- alpha.ts
- phrases.ts
- focusTrap.ts
- markAllTokens.ts
- scrollLock.ts
- UI review
- [quizId]/+page.ts
- [moduleId]/+layout.ts
- (site)/+layout.ts
- dictionary-en
- drizzle-kit
- vite
- eslint
- vite-env.d.ts
- eslint-plugin-svelte
- prettier-plugin-svelte
- svelte-check
- @sveltejs/vite-plugin-svelte
- tailwindcss
- @tailwindcss/typography
- @tailwindcss/vite
- @types/web-push
- words.ar.ts
- primaryAction
- screenContext.svelte.ts
- server/finance.ts

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
- `save()` --calls--> `saveExamChanges()`  [EXTRACTED]
  front/src/lib/content-edit/ExamEditWorkspace.svelte → front/src/lib/content-edit/api.ts
- `save()` --calls--> `saveTitles()`  [EXTRACTED]
  front/src/lib/content-edit/ExamEditWorkspace.svelte → front/src/lib/content-edit/api.ts
- `EditModel` --implements--> `EditModelLike`  [EXTRACTED]
  front/src/lib/content-edit/editModel.svelte.ts → front/src/lib/content-edit/editModelTypes.ts

## Import Cycles
- None detected.

## Communities (238 total, 76 thin omitted)

### Community 0 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

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
Cohesion: 0.09
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "billing.ts"
Cohesion: 0.06
Nodes (48): access, accessEnd(), accessUntil(), billingEnabled, BillingError, checkout(), CheckoutResult, completeOrder() (+40 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "AuthStore"
Cohesion: 0.12
Nodes (3): auth, AuthStore, supabase

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "lib/content-edit/MarkdownInput.svelte"
Cohesion: 0.15
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 20 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): ClozePickScreen, MarkAllCategory, MarkAllScreen, MATCH_PAIRS_MAX_MISTAKES, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen (+20 more)

### Community 21 - "content/index.ts"
Cohesion: 0.09
Nodes (34): UNITS, c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons (+26 more)

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "rubrics/index.ts"
Cohesion: 0.17
Nodes (13): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, validChatTopics(), CobeBand, CobeCriterion, CobeRubric (+5 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.07
Nodes (14): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+6 more)

### Community 34 - "RulesPanel.svelte"
Cohesion: 0.12
Nodes (11): id, inherited, lessonId, lessons, moduleId, MODULES, own, report (+3 more)

### Community 35 - "$lib/components/Button.svelte"
Cohesion: 0.05
Nodes (13): full, ignite, words, lockedUntil, lockedWhen, row, rules, taken (+5 more)

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
Cohesion: 0.07
Nodes (36): APP, build(), charm(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLE_OFF, CYCLES (+28 more)

### Community 40 - "lib/content-edit/ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 41 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 44 - "profile.svelte.ts"
Cohesion: 0.15
Nodes (10): examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions(), load(), NAME_MAX, Profile (+2 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.20
Nodes (9): 2FA on every account, Alpha on production, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers (+1 more)

### Community 49 - "chat.ts"
Cohesion: 0.15
Nodes (13): chatEnds(), ChatLine, ChatMode, ChatSummary, ChatTurnReply, drawTwo(), MAX_TURNS, MIN_TURNS (+5 more)

### Community 50 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (6): LessonBucket, screenList(), Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "access.svelte.ts"
Cohesion: 0.19
Nodes (9): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, ApiError (+1 more)

### Community 53 - "llm.ts"
Cohesion: 0.23
Nodes (11): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 54 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (8): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords()

### Community 57 - "SlideStage.svelte"
Cohesion: 0.09
Nodes (3): i(), TYPE_HE, issuesByNode()

### Community 59 - "media.ts"
Cohesion: 0.40
Nodes (3): focus(), homeMedia, Media

### Community 60 - "session.ts"
Cohesion: 0.07
Nodes (52): listA, listB, listC, listD, w(), wordId(), deckProgress, DeckProgressStore (+44 more)

### Community 61 - "takeHistory.ts"
Cohesion: 0.27
Nodes (8): isRecord(), Entry, openDb(), readStats(), recordTake(), SavedTake, speakingSummary(), TakeStats

### Community 62 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 63 - "progress.ts"
Cohesion: 0.05
Nodes (55): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, allQuizNodes, attemptKey(), clearInProgress(), ExamResult (+47 more)

### Community 64 - "reminders.svelte.ts"
Cohesion: 0.14
Nodes (10): install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, REMINDER_HOURS, reminders, ReminderStatus (+2 more)

### Community 66 - "review/+server.ts"
Cohesion: 0.33
Nodes (3): body, ReviewNote, ReviewNotes

### Community 67 - "progressMerge.ts"
Cohesion: 0.38
Nodes (10): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), mergeItems(), num() (+2 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "saveSynced"
Cohesion: 0.19
Nodes (8): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, onSyncedChange(), saveSynced()

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (18): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ask(), block(), cleanMarks() (+10 more)

### Community 71 - "svelte/transition"
Cohesion: 0.06
Nodes (9): confirming, deleteAccount(), deleting, failed, signOut(), t, i(), reducedMotion (+1 more)

### Community 72 - "hooks.server.ts"
Cohesion: 0.53
Nodes (5): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "sentenceCompletion.ts"
Cohesion: 0.83
Nodes (3): FILLER, isSentenceCompletionMatch(), normalize()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "settings/+page.svelte"
Cohesion: 0.04
Nodes (5): emails, EditStore, showNav, loadQuote(), setCobe()

### Community 78 - "[id]/+server.ts"
Cohesion: 0.60
Nodes (4): DELETE(), PATCH(), patchBody, taskId()

### Community 79 - "ActivityStore"
Cohesion: 0.23
Nodes (5): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL

### Community 82 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (8): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate()

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "wordsFile.ts"
Cohesion: 0.17
Nodes (12): emit(), extractArrayLiteral(), matchingBracketEnd(), parseArrayLiteral(), splitArrayHead(), sq(), patchGlosses(), patchWordList() (+4 more)

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

### Community 92 - "cron/reminders/+server.ts"
Cohesion: 0.53
Nodes (5): authorized(), GET(), israelDay(), israelHour(), MESSAGES

### Community 93 - "miniMarkdown.ts"
Cohesion: 0.06
Nodes (29): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, escapeText(), HEADER_CLASS, isEnglishSentence(), isolateQuotes() (+21 more)

### Community 94 - "Speak.svelte"
Cohesion: 0.07
Nodes (14): row(), groups, phrase(), primaryAction(), reached, record(), seconds, share (+6 more)

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
Cohesion: 0.18
Nodes (8): CurriculumModule, CurriculumSection, modules, textSection, UnitGroup, unitGroups, wordsSection, writingSection

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 103 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 104 - "lib/finance.ts"
Cohesion: 0.33
Nodes (5): Currency, Cycle, cycleLabel, Expense, monthly()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "checkoutBody"
Cohesion: 0.60
Nodes (3): checkoutBody(), POST(), POST()

### Community 109 - "passageMarks.ts"
Cohesion: 0.40
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 110 - "progressSync.svelte.ts"
Cohesion: 0.27
Nodes (8): isSyncedKey(), Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 111 - "api/reminders/+server.ts"
Cohesion: 0.18
Nodes (11): isPushEndpoint(), PUSH_HOSTS, pushEnabled, Subscription, DELETE(), endpoint, key, POST() (+3 more)

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
Nodes (23): Fixtures, GradeBody, Mocks, PIXEL, playThrough(), states, StudentState, test (+15 more)

### Community 117 - "server/speaking.ts"
Cohesion: 0.22
Nodes (9): band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema, body (+1 more)

### Community 119 - "checks/index.ts"
Cohesion: 0.08
Nodes (42): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+34 more)

### Community 120 - "screenChecks.ts"
Cohesion: 0.19
Nodes (15): markAllSegments(), optText(), withFeedback(), oi(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange() (+7 more)

### Community 121 - "chatSpeaking.ts"
Cohesion: 0.24
Nodes (8): PROJECT_POINTS, block(), chatPrompt(), chatTurn(), ChatTurnRequest, replySchema, body, POST

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (40): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+32 more)

### Community 125 - "Handoff: testing plan (automation + human-like runs)"
Cohesion: 0.33
Nodes (5): Building blocks, Handoff: testing plan (automation + human-like runs), Open decisions (owner), Phases (one at a time), Principles

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): headers, installCommand, redirects, $schema

### Community 128 - "validate.ts"
Cohesion: 0.31
Nodes (6): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateSection()

### Community 129 - "grade/+server.ts"
Cohesion: 0.22
Nodes (7): body, count, exam, notes, POST, question, text

### Community 130 - "registry.ts"
Cohesion: 0.06
Nodes (21): active, checked, primaryAction(), announce(), announcement, mistakes, pick(), shuffleNotIdentity() (+13 more)

### Community 132 - "edit-words/+page.svelte"
Cohesion: 0.17
Nodes (5): changed, invalidCount, saving, ssr, ./$types

### Community 133 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 135 - "goalOptions.ts"
Cohesion: 0.40
Nodes (3): sessionKey(), sessionOptions(), UNKNOWN_SESSION

### Community 136 - "Handoff: exam lock trusts the client's part count"
Cohesion: 0.50
Nodes (3): Fix, Handoff: exam lock trusts the client's part count, The gap

### Community 139 - "support.ts"
Cohesion: 0.29
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 144 - "Handoff: text as blocks (future plan)"
Cohesion: 0.40
Nodes (4): Handoff: text as blocks (future plan), Now, Steps, Target

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (36): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, canvasWidth, celebrateIfNewlyDone(), closeNode() (+28 more)

### Community 151 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 152 - "rules/+server.ts"
Cohesion: 0.40
Nodes (4): fileSchema, POST(), rules, serialize()

### Community 153 - "content-edit/+server.ts"
Cohesion: 0.53
Nodes (5): assertValid(), Body, isText(), POST(), sectionFile()

### Community 156 - "UX principles"
Cohesion: 0.17
Nodes (11): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, 8. Accessibility (+3 more)

### Community 165 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 168 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 169 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 174 - "scan.ts"
Cohesion: 0.60
Nodes (3): previewUrl(), scanHandwriting(), toJpeg()

### Community 175 - "github.ts"
Cohesion: 0.80
Nodes (4): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl()

### Community 177 - "server/kanban.ts"
Cohesion: 0.40
Nodes (3): tags, taskColumns, taskFields

### Community 179 - "feedback/+server.ts"
Cohesion: 0.50
Nodes (4): allowed(), body, POST(), sent

### Community 181 - "progress/+server.ts"
Cohesion: 0.70
Nodes (4): GET(), parseItems(), POST(), scope()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **804 isolated node(s):** `svelte`, `lesson`, `UNITS`, `StudentState`, `PIXEL` (+799 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **76 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `item()` connect `$lib/i18n/index.svelte` to `registry.ts`, `progressMerge.ts`, `svelte/transition`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `explanation()` connect `session.ts` to `registry.ts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `at()` connect `plans.ts` to `registry.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `svelte`, `lesson`, `UNITS` to the rest of the system?**
  _804 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08773784355179703 - nodes in this community are weakly interconnected._