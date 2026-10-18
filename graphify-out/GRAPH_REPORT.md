# Graph Report - dr_eng  (2026-10-18)

## Corpus Check
- 382 files · ~291,840 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2000 nodes · 3762 edges · 173 communities (116 shown, 57 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 83 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `acd2c4cc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- chatSpeaking.ts
- EditModel
- motion.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- SvelteKit head/body Placeholders
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- Keyed Each Blocks
- prettier.config.js
- app.d.ts
- Favicon (Svelte Logo)
- graphify reference: query, path, explain
- settled() API
- Context API (createContext)
- CSS Custom Properties via style:
- Styling Child Components (:global)
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- speech.ts
- extraction-spec.md
- GraphEditor.svelte
- feedback/speaking.ts
- lesson-screens/types.ts
- WritingTask.svelte
- RulesPanel.svelte
- הפלט
- validate.ts
- TitleEdits
- auth.svelte.ts
- profile.svelte.ts
- gradeExam.ts
- Module C audit
- server/speaking.ts
- feedback/types.ts
- writingLint.ts
- Module E plan
- curriculum.ts
- Mcq.svelte
- QuizReport.svelte
- apiFetch
- llmGuard.ts
- LessonScreen
- content/index.ts
- finishNodeAndContinue
- MatchDefinitions.svelte
- progress.ts
- snapshot-content.ts
- typos.ts
- feedback.test.ts
- data.ts
- ChatSummary.svelte
- EditHistory
- progressSync.svelte.ts
- Recorder
- onSyncedChange
- acceptedAnswers.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- MyPhrases
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- examEditModel.svelte.ts
- create-coupon.mjs
- measure-overflow.mjs
- QuizAnswerSlot
- ReviewNotesStore
- COBE (oral exam)
- drizzle-kit
- checkout/+page.ts
- progressMerge.ts
- בקשת מסך - `<שם-המסך>`
- registry.ts
- screenChecks.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- dictionary-en
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- checks/index.ts
- mechanics.ts
- lessonProgress.svelte.ts
- ExamEditModel
- RulesStore
- .mcp.json
- reviewNotes.svelte.ts
- Platform: web, mobile, accounts
- debug.svelte.ts
- @eslint/js
- moduleLocation.svelte.ts
- AGENTS.md
- Rules
- saveSynced
- eslint
- plans.ts
- progress/+server.ts
- lastEngagement.svelte.ts
- content-i18n.mjs
- globals
- ProfileStore
- Submit → feedback framework
- support.ts
- access.svelte.ts
- theme.svelte.ts
- SlideStage.svelte
- writingMoves.ts
- WordImageField.svelte
- TakeCompare.svelte
- scripts
- platform.ts
- legacyIds.ts
- lessonIcon.ts
- dictionary-en-gb
- fillFromScan
- sectionThemes.ts
- submitToLlm
- Handoff: `/mcp` endpoint (removed)
- הקול והסגנון
- prettier
- svelte
- lessons/+page.svelte
- @tailwindcss/typography
- @tailwindcss/vite
- @types/node
- @sveltejs/kit
- @types/nspell
- typescript
- llm-gateway
- typescript-eslint
- UX principles
- billing.ts
- index.svelte.ts
- EditWorkspace.svelte
- ExamEditWorkspace.svelte
- eslint-config-prettier
- app/+layout.ts
- capacitor.config.ts
- content-edit/api.ts
- prettier-plugin-svelte
- prettier-plugin-tailwindcss
- UI review
- @sveltejs/adapter-auto
- @sveltejs/adapter-static
- tailwindcss
- @tailwindcss/forms
- vite
- vite-env.d.ts
- @sveltejs/vite-plugin-svelte

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 49 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `apiFetch()` - 24 edges
6. `saveSynced()` - 23 edges
7. `LessonNode` - 21 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `if()` --calls--> `moduleDeckToday()`  [EXTRACTED]
  front/src/routes/app/unit/[unitId]/module/[moduleId]/+page.svelte → front/src/lib/deck/index.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts

## Import Cycles
- None detected.

## Communities (173 total, 57 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): @capacitor/cli, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint-plugin-svelte, svelte-check, svelte-check

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "chatSpeaking.ts"
Cohesion: 0.15
Nodes (22): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+14 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (3): clone(), EditModel, screenList()

### Community 5 - "motion.ts"
Cohesion: 0.12
Nodes (9): confirming, deleteAccount(), deleting, failed, t, slot(), reducedMotion, formattedDate (+1 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "SvelteKit head/body Placeholders"
Cohesion: 0.67
Nodes (3): RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 31 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 34 - "feedback/speaking.ts"
Cohesion: 0.15
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (28): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen (+20 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 37 - "RulesPanel.svelte"
Cohesion: 0.11
Nodes (22): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+14 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "validate.ts"
Cohesion: 0.24
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 40 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 41 - "auth.svelte.ts"
Cohesion: 0.16
Nodes (3): emails, supabase, showNav

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (12): sessionKey(), sessionOptions(), UNKNOWN_SESSION, full, ignite, examDate(), ExamSeason, ExamSession (+4 more)

### Community 43 - "gradeExam.ts"
Cohesion: 0.16
Nodes (25): browserDictionaries(), checkWriting(), gradeLesson(), check(), Checked, failed(), gradeEssay(), gradeExam() (+17 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "server/speaking.ts"
Cohesion: 0.17
Nodes (18): chat(), endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, guardLlm(), band (+10 more)

### Community 46 - "feedback/types.ts"
Cohesion: 0.16
Nodes (13): postGrade(), Layer1, Layer1Options, pieces, EssayVerdict, Feedback, GateReason, GradeRequest (+5 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "curriculum.ts"
Cohesion: 0.08
Nodes (22): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+14 more)

### Community 50 - "Mcq.svelte"
Cohesion: 0.08
Nodes (18): primaryAction(), mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+10 more)

### Community 51 - "QuizReport.svelte"
Cohesion: 0.18
Nodes (8): anyFailed, hasSpeaking, headline, level, numbers, pending, RecorderState, Take

### Community 52 - "apiFetch"
Cohesion: 0.22
Nodes (11): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), SpeakingVerdict (+3 more)

### Community 53 - "llmGuard.ts"
Cohesion: 0.33
Nodes (6): db, llmUsage, progress, burstLimited(), calls, countToday()

### Community 54 - "LessonScreen"
Cohesion: 0.11
Nodes (9): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen, IdentifiedScreen (+1 more)

### Community 55 - "content/index.ts"
Cohesion: 0.13
Nodes (14): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, LessonBucket, all, allLessons (+6 more)

### Community 56 - "finishNodeAndContinue"
Cohesion: 0.31
Nodes (10): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+2 more)

### Community 57 - "MatchDefinitions.svelte"
Cohesion: 0.22
Nodes (3): active, checked, item()

### Community 58 - "progress.ts"
Cohesion: 0.07
Nodes (47): ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), allQuizNodes (+39 more)

### Community 59 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 60 - "typos.ts"
Cohesion: 0.25
Nodes (9): bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers(), sentenceStarts(), typoIssues() (+1 more)

### Community 61 - "feedback.test.ts"
Cohesion: 0.27
Nodes (7): applyLength(), mechanicsCount(), FATAL_TAGS, TAG_IDS, TagDef, TAGS, MechanicsCount

### Community 62 - "data.ts"
Cohesion: 0.12
Nodes (32): getLessonsBySection(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson() (+24 more)

### Community 63 - "ChatSummary.svelte"
Cohesion: 0.24
Nodes (3): row(), groups, phrase()

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 67 - "onSyncedChange"
Cohesion: 0.22
Nodes (6): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, onSyncedChange()

### Community 68 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.10
Nodes (36): app(), APP_ORIGINS, cors(), handle, handleError, checkAuth(), emit(), extractArrayLiteral() (+28 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (22): CONTENT_TAGS, ReadingRequest, ask(), block(), cleanMarks(), gradeEssay(), gradeLesson(), gradeReading() (+14 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "examEditModel.svelte.ts"
Cohesion: 0.24
Nodes (7): Bucket, cQuizzes, cobeQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Mock exam (quiz/cobe), Open, Part B - Project (cobe-1, map chapter "Part 1"), Part C - Clip (cobe-2, map chapter "Part 2"), Progress and AI feedback (+2 more)

### Community 82 - "progressMerge.ts"
Cohesion: 0.47
Nodes (9): byKey(), field(), isObj(), larger(), laterReview(), mergeFor(), num(), Obj (+1 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "registry.ts"
Cohesion: 0.09
Nodes (8): KEY, ScreenMode, gutter, lines, screenComponents, KEY, LessonSession, KEY

### Community 85 - "screenChecks.ts"
Cohesion: 0.22
Nodes (11): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (30): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+22 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.07
Nodes (50): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+42 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (48): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+40 more)

### Community 94 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 95 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 96 - "lessonProgress.svelte.ts"
Cohesion: 0.27
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 98 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 100 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.18
Nodes (10): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+2 more)

### Community 102 - "debug.svelte.ts"
Cohesion: 0.17
Nodes (3): auth, EditStore, DebugStore

### Community 104 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "saveSynced"
Cohesion: 0.21
Nodes (13): primaryAction(), record(), stop(), toggle(), saveSynced(), Entry, openDb(), readStats() (+5 more)

### Community 109 - "plans.ts"
Cohesion: 0.29
Nodes (5): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS

### Community 110 - "progress/+server.ts"
Cohesion: 0.46
Nodes (6): isSyncedKey(), mergeItems(), GET(), parseItems(), POST(), scope()

### Community 111 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "access.svelte.ts"
Cohesion: 0.20
Nodes (9): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, loadQuote() (+1 more)

### Community 119 - "SlideStage.svelte"
Cohesion: 0.14
Nodes (6): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, oi()

### Community 120 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 122 - "TakeCompare.svelte"
Cohesion: 0.50
Nodes (3): delta, firstSeconds, newlyReached

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (37): @capacitor/core, drizzle-orm, dependencies, @capacitor/core, drizzle-orm, @lucide/svelte, nspell, postgres (+29 more)

### Community 125 - "platform.ts"
Cohesion: 0.31
Nodes (3): handleError, MOBILE_BUILD, prerender

### Community 126 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 127 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.10
Nodes (23): activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, delayForY(), edgeDelay(), edges (+15 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.12
Nodes (24): accessUntil(), addMonths(), billingEnabled, BillingError, checkout(), CheckoutResult, completeOrder(), Coupon (+16 more)

### Community 158 - "index.svelte.ts"
Cohesion: 0.07
Nodes (11): trailing(), dictionaries, words, previous, row, rules, taken, tips (+3 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.15
Nodes (8): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues

### Community 163 - "ExamEditWorkspace.svelte"
Cohesion: 0.18
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 177 - "content-edit/api.ts"
Cohesion: 0.42
Nodes (8): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), uploadImage(), save()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **655 isolated node(s):** `svelte`, `config`, `gitignorePath`, `name`, `private` (+650 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **57 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `lesson-screens/types.ts`, `EditModel`, `progress.ts`, `validate.ts`, `examEditModel.svelte.ts`, `registry.ts`, `content/index.ts`, `screenChecks.ts`, `SlideStage.svelte`, `deck/index.ts`, `snapshot-content.ts`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `examEditModel.svelte.ts`, `RulesPanel.svelte`, `LessonScreen`, `content/index.ts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `progressSync.svelte.ts`, `RulesStore`, `reviewNotes.svelte.ts`, `motion.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `feedback/types.ts`, `content-edit/api.ts`, `access.svelte.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `config`, `gitignorePath` to the rest of the system?**
  _655 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0782608695652174 - nodes in this community are weakly interconnected._
- **Should `motion.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._