# Graph Report - module_e_progress  (2026-10-18)

## Corpus Check
- 369 files · ~285,696 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1961 nodes · 3686 edges · 162 communities (110 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 75 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5674619f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- lastEngagement.svelte.ts
- EditModel
- [quizId]/+page.svelte
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
- index.svelte.ts
- extraction-spec.md
- content/index.ts
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
- streak/+page.svelte
- feedback/grade.ts
- writingLint.ts
- Module E plan
- curriculum.ts
- Mcq.svelte
- stats.ts
- GraphEditor.svelte
- progress.ts
- markAllColors.ts
- data.ts
- @capacitor/cli
- MatchDefinitions.svelte
- quiz/index.ts
- snapshot-content.ts
- QuizReport.svelte
- debug.svelte.ts
- ScreenPath
- editModel.svelte.ts
- progressSync.svelte.ts
- ActivityStore
- acceptedAnswers.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- DebugStore
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- feedback.test.ts
- create-coupon.mjs
- measure-overflow.mjs
- getDecks
- Recorder
- COBE (oral exam)
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
- Speak.svelte
- saveSynced
- ExamEditModel
- RulesStore
- Platform: web, mobile, accounts
- support.ts
- @eslint/js
- moduleLocation.svelte.ts
- AGENTS.md
- Rules
- takeHistory.ts
- feedback/types.ts
- SlideStage.svelte
- content-i18n.mjs
- globals
- localize.svelte.ts
- Submit → feedback framework
- writingMoves.ts
- PassageBody.svelte
- LessonScreen
- eslint
- scripts
- platform.ts
- legacyIds.ts
- SpellWord.svelte
- Handoff: `/mcp` endpoint (removed)
- הקול והסגנון
- prettier
- mode.svelte.ts
- svelte
- lessonIcon.ts
- sectionThemes.ts
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
- LessonRunner.svelte
- EditWorkspace.svelte
- ExamEditWorkspace.svelte
- eslint-config-prettier
- dictionary-en-gb
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
5. `apiFetch()` - 22 edges
6. `LessonNode` - 21 edges
7. `saveSynced()` - 21 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte
- `stop()` --calls--> `takeKey()`  [EXTRACTED]
  front/src/lib/lesson-screens/Speak.svelte → front/src/lib/takeHistory.ts

## Import Cycles
- None detected.

## Communities (162 total, 52 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): drizzle-kit, eslint-plugin-svelte, devDependencies, drizzle-kit, eslint-plugin-svelte, svelte-check, svelte-check

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (3): clone(), EditModel, screenList()

### Community 5 - "[quizId]/+page.svelte"
Cohesion: 0.08
Nodes (11): trailing(), slot(), reducedMotion, formattedDate, row, rules, taken, tips (+3 more)

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

### Community 31 - "index.svelte.ts"
Cohesion: 0.12
Nodes (3): dictionaries, groups, phrase()

### Community 33 - "content/index.ts"
Cohesion: 0.15
Nodes (13): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, all, allLessons, moduleSections() (+5 more)

### Community 34 - "feedback/speaking.ts"
Cohesion: 0.13
Nodes (17): toWavBase64(), PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric (+9 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (24): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+16 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 37 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

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
Cohesion: 0.09
Nodes (17): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+9 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.15
Nodes (12): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+4 more)

### Community 43 - "gradeExam.ts"
Cohesion: 0.30
Nodes (13): check(), Checked, failed(), gradeEssay(), gradeExam(), gradeReadingGroup(), labelled(), maxOf() (+5 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 46 - "feedback/grade.ts"
Cohesion: 0.14
Nodes (20): browserDictionaries(), bytes(), DictData, gradeLesson(), Layer1, Layer1Options, runLayer1(), applyFixes() (+12 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "curriculum.ts"
Cohesion: 0.13
Nodes (15): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+7 more)

### Community 50 - "Mcq.svelte"
Cohesion: 0.08
Nodes (20): primaryAction(), mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+12 more)

### Community 51 - "stats.ts"
Cohesion: 0.23
Nodes (10): examAdvice, lessonStats(), moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT (+2 more)

### Community 52 - "GraphEditor.svelte"
Cohesion: 0.05
Nodes (27): AccessStore, apiFetch(), deleteAccount(), uploadImage(), bands, canvasHeight, nodeHitbox(), nodePointerMove() (+19 more)

### Community 53 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 54 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 55 - "data.ts"
Cohesion: 0.18
Nodes (22): getLesson(), getLessonsBySection(), progressScope(), continueFrom(), ContinueItem, EXAM_READY, isWritingLesson(), latestEngagement() (+14 more)

### Community 57 - "MatchDefinitions.svelte"
Cohesion: 0.22
Nodes (3): active, checked, item()

### Community 58 - "quiz/index.ts"
Cohesion: 0.13
Nodes (17): cQuizzes, cobeQuizzes, allQuizNodes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, allQuizzes (+9 more)

### Community 59 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 61 - "QuizReport.svelte"
Cohesion: 0.25
Nodes (6): anyFailed, hasSpeaking, headline, level, numbers, pending

### Community 64 - "editModel.svelte.ts"
Cohesion: 0.16
Nodes (6): EditHistory, LessonBucket, Bucket, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 68 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.10
Nodes (35): app(), APP_ORIGINS, cors(), handle, handleError, checkAuth(), emit(), extractArrayLiteral() (+27 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (27): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, GradeRequest, LessonVerdict, ReadingRequest, SingleRequest, ask() (+19 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "feedback.test.ts"
Cohesion: 0.31
Nodes (5): applyLength(), mechanicsCount(), TagDef, TAGS, MechanicsCount

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "getDecks"
Cohesion: 0.23
Nodes (11): SKILLS, homeMeters, moduleSkills(), activeDecks(), deckStats(), getDecks(), moduleDeckStats(), moduleDeckToday() (+3 more)

### Community 78 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 79 - "COBE (oral exam)"
Cohesion: 0.20
Nodes (9): COBE (oral exam), Grading a recording, Mock exam (quiz/cobe), Open, Part B - Project (cobe-1, map chapter "Part 1"), Part C - Clip (cobe-2, map chapter "Part 2"), Progress and AI feedback, Sources (+1 more)

### Community 82 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "registry.ts"
Cohesion: 0.11
Nodes (6): stripLineAttrs(), gutter, lines, screenComponents, KEY, LessonSession

### Community 85 - "screenChecks.ts"
Cohesion: 0.19
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (30): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+22 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.07
Nodes (48): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+40 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "checks/index.ts"
Cohesion: 0.09
Nodes (39): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+31 more)

### Community 95 - "Speak.svelte"
Cohesion: 0.21
Nodes (6): primaryAction(), record(), stop(), toggle(), KEY, QuizAnswerSlot

### Community 96 - "saveSynced"
Cohesion: 0.14
Nodes (13): activity, load(), WEEKLY_GOAL, lessonProgress, LessonProgressStore, load(), persist(), ProgressMap (+5 more)

### Community 98 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.18
Nodes (10): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+2 more)

### Community 104 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "takeHistory.ts"
Cohesion: 0.19
Nodes (11): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+3 more)

### Community 109 - "feedback/types.ts"
Cohesion: 0.29
Nodes (5): pieces, EssayVerdict, Feedback, ReadingItem, ReadingVerdict

### Community 111 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (3): TYPE_HE, row(), oi()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 119 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 120 - "LessonScreen"
Cohesion: 0.16
Nodes (12): LessonContent, isMarkAllPass(), LessonScreen, MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize(), Scored, scoreQuiz() (+4 more)

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (37): @capacitor/core, drizzle-orm, dependencies, @capacitor/core, drizzle-orm, @lucide/svelte, nspell, postgres (+29 more)

### Community 125 - "platform.ts"
Cohesion: 0.31
Nodes (3): handleError, MOBILE_BUILD, prerender

### Community 128 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 130 - "SpellWord.svelte"
Cohesion: 0.14
Nodes (6): WORD_IMAGE, RATE, RULES, speak(), speechSupported(), speechText()

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 139 - "mode.svelte.ts"
Cohesion: 0.24
Nodes (5): KEY, ScreenMode, FILLER, isSentenceCompletionMatch(), normalize()

### Community 142 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.09
Nodes (34): markRoundCompleted(), activeNode, activeRoundIndex, anchorRow, canvasCenter, canvasHeight, celebrateIfNewlyDone(), closeNode() (+26 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.05
Nodes (54): SpeakingVerdict, DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, accessUntil(), addMonths() (+46 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.14
Nodes (9): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues (+1 more)

### Community 163 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 177 - "content-edit/api.ts"
Cohesion: 0.50
Nodes (7): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), save()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **647 isolated node(s):** `config`, `gitignorePath`, `name`, `private`, `version` (+642 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `editModel.svelte.ts`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `quiz/index.ts`, `validate.ts`, `SlideStage.svelte`, `registry.ts`, `screenChecks.ts`, `deck/index.ts`, `snapshot-content.ts`, `ScreenPath`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `EditModelLike` connect `ScreenPath` to `editModel.svelte.ts`, `ExamEditModel`, `EditModel`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `editModel.svelte.ts`, `content/index.ts`, `RulesPanel.svelte`, `ScreenPath`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `config`, `gitignorePath`, `name` to the rest of the system?**
  _647 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0821256038647343 - nodes in this community are weakly interconnected._
- **Should `[quizId]/+page.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.08253968253968254 - nodes in this community are weakly interconnected._