# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 480 files · ~492,830 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2348 nodes · 4629 edges · 174 communities (131 shown, 43 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa1f1d9f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- lib/kanban.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AccountSection.svelte
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
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- progress.ts
- WritingTask.svelte
- editModel.svelte.ts
- הפלט
- plans.ts
- deck/index.ts
- motion.ts
- profile.svelte.ts
- LessonScreen
- LessonNode
- index.svelte.ts
- RemindersStore
- writingLint.ts
- llm.ts
- curriculum.ts
- scripts
- mechanics.ts
- apiFetch
- validate.ts
- llmGuard.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- miniMarkdown.ts
- ExamEditWorkspace.svelte
- activity.svelte.ts
- package.json
- server/speaking.ts
- data.ts
- settings/+page.svelte
- gradeExam.ts
- progressMerge.ts
- COBE (oral exam)
- markAllColors.ts
- rubrics/index.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- PassageMark.svelte
- create-coupon.mjs
- measure-overflow.mjs
- AppBar.svelte
- Unit
- RulesStore
- content
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- Module C audit
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- db/schema.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- quizzes.ts
- LessonRunner.svelte
- ExamEditModel
- Handoff: verify Vercel AI Gateway
- .mcp.json
- Speak.svelte
- Platform: web, mobile, accounts
- feedback/types.ts
- Mcq.svelte
- @eslint/js
- AGENTS.md
- Rules
- cobe.test.ts
- stats.ts
- typos.ts
- checks/index.ts
- content/rules.ts
- content-i18n.mjs
- e-1.ts
- registry.ts
- Submit → feedback framework
- Module D
- Handoff: About page, after launch
- writingMoves.ts
- words/+page.svelte
- Module E plan
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- scoring.ts
- vercel.json
- auth.svelte.ts
- progressSync.svelte.ts
- speech.ts
- score.svelte.ts
- saveSynced
- Handoff: `/mcp` endpoint (removed)
- MatchDefinitions.svelte
- ReviewNotesStore
- eslint-plugin-svelte
- הקול והסגנון
- lessonProgress.svelte.ts
- svelte
- support.ts
- api/reminders/+server.ts
- @types/web-push
- service-worker.ts
- lessons/+page.svelte
- @tailwindcss/vite
- lastEngagement.svelte.ts
- @sveltejs/kit
- edit-exam/+page.svelte
- UX principles
- globals
- Module G
- brand.md
- drizzle-kit
- auth/README.md
- prettier
- svelte-check
- @sveltejs/vite-plugin-svelte
- app/+layout.ts
- @types/nspell
- typescript-eslint
- prettier-plugin-tailwindcss
- UI review
- vite
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `LessonNode` - 32 edges
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 27 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `QuizNode` - 17 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts

## Import Cycles
- None detected.

## Communities (174 total, 43 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.13
Nodes (17): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+9 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.14
Nodes (15): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+7 more)

### Community 6 - "Checklist"
Cohesion: 0.10
Nodes (20): Access control and auth (OWASP A01, A07), Checklist, Config and deployment (A02), Grading scale, How to run an audit, Injection and input (A05), Known exploit classes, LLM (+12 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "AccountSection.svelte"
Cohesion: 0.10
Nodes (8): emails, AuthStore, confirming, deleteAccount(), deleting, failed, signOut(), t

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

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.16
Nodes (11): c1Lessons, c2Lessons, c3Lessons, g1Lessons, g2Lessons, all, allLessons, fivePoint (+3 more)

### Community 35 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "editModel.svelte.ts"
Cohesion: 0.21
Nodes (3): EditHistory, LessonBucket, Bucket

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "plans.ts"
Cohesion: 0.05
Nodes (57): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+49 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.05
Nodes (80): buildExam(), clean(), deckSets(), explanationOnly(), Json, keywords(), main(), Paper (+72 more)

### Community 41 - "motion.ts"
Cohesion: 0.12
Nodes (4): focus(), reducedMotion, homeMedia, Media

### Community 42 - "profile.svelte.ts"
Cohesion: 0.07
Nodes (23): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+15 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (7): EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonScreen, IdentifiedScreen

### Community 44 - "LessonNode"
Cohesion: 0.18
Nodes (8): d1Lessons, d2Lessons, d3Lessons, d4Lessons, d5Lessons, LessonNode, lessonScreenSchema, lessons

### Community 45 - "index.svelte.ts"
Cohesion: 0.09
Nodes (12): dayPart, dictionaries, I18n, ar, Dictionary, DictionaryOverride, he, titlesAr (+4 more)

### Community 46 - "RemindersStore"
Cohesion: 0.33
Nodes (4): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "llm.ts"
Cohesion: 0.23
Nodes (11): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+3 more)

### Community 49 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 52 - "apiFetch"
Cohesion: 0.15
Nodes (15): apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, addChat(), chatCount(), ChatTurnError (+7 more)

### Community 53 - "validate.ts"
Cohesion: 0.09
Nodes (27): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+19 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.27
Nodes (10): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Product (+2 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 57 - "miniMarkdown.ts"
Cohesion: 0.11
Nodes (17): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+9 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "activity.svelte.ts"
Cohesion: 0.22
Nodes (6): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, onSyncedChange()

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 62 - "data.ts"
Cohesion: 0.11
Nodes (32): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+24 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.08
Nodes (12): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+4 more)

### Community 64 - "gradeExam.ts"
Cohesion: 0.13
Nodes (33): browserDictionaries(), checkWriting(), writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check() (+25 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 67 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 68 - "rubrics/index.ts"
Cohesion: 0.14
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, writingRubrics (+7 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (44): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+36 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.11
Nodes (30): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, GradeRequest, LessonVerdict, ReadingRequest (+22 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.27
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "PassageMark.svelte"
Cohesion: 0.20
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "AppBar.svelte"
Cohesion: 0.17
Nodes (4): trailing(), sortTasks(), status(), formattedDate

### Community 78 - "Unit"
Cohesion: 0.33
Nodes (6): build(), d(), No em/en dashes in study text., rtl(), split_bi(), Unit

### Community 79 - "RulesStore"
Cohesion: 0.21
Nodes (3): RulesStore, KEY, Rules

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.11
Nodes (20): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+12 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+19 more)

### Community 85 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (34): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+26 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "db/schema.ts"
Cohesion: 0.14
Nodes (18): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, isPushEndpoint() (+10 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.06
Nodes (43): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+35 more)

### Community 94 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 95 - "LessonRunner.svelte"
Cohesion: 0.12
Nodes (6): browserVoice, chatVoice, d(), words, previous, RATE

### Community 98 - "Handoff: verify Vercel AI Gateway"
Cohesion: 0.40
Nodes (4): Before checking, Check (signed in, on the production site; then ask Claude to read the logs), Handoff: verify Vercel AI Gateway, Still open from before

### Community 100 - "Speak.svelte"
Cohesion: 0.12
Nodes (9): KEY, ScreenMode, primaryAction(), record(), stop(), toggle(), KEY, QuizAnswerSlot (+1 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "feedback/types.ts"
Cohesion: 0.23
Nodes (7): pieces, EssayVerdict, Feedback, GateReason, MechanicsCount, ReadingItem, ReadingVerdict

### Community 103 - "Mcq.svelte"
Cohesion: 0.18
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "cobe.test.ts"
Cohesion: 0.27
Nodes (5): cobe1Lessons, cobe2Lessons, cobe3Lessons, CobeRubric, rubric

### Community 108 - "stats.ts"
Cohesion: 0.31
Nodes (7): avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule()

### Community 109 - "typos.ts"
Cohesion: 0.25
Nodes (9): bytes(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers(), sentenceStarts(), typoIssues() (+1 more)

### Community 110 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 111 - "content/rules.ts"
Cohesion: 0.39
Nodes (5): ownerModule(), ruleChain(), sectionMeta, SectionMeta, load()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "e-1.ts"
Cohesion: 0.33
Nodes (5): e1Lessons, LIBRARY, REPAIR, SILBO, SLEEP

### Community 114 - "registry.ts"
Cohesion: 0.14
Nodes (3): screenComponents, KEY, LessonSession

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "Module D"
Cohesion: 0.40
Nodes (4): Mapping (package -> screens), Module D, Open, Sections

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 119 - "words/+page.svelte"
Cohesion: 0.12
Nodes (8): row, rules, taken, tips, ./$types, finish(), next, seen

### Community 121 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams, Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 126 - "scoring.ts"
Cohesion: 0.22
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, scoredAnswers(), submit(), applyGrades() (+5 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "auth.svelte.ts"
Cohesion: 0.06
Nodes (14): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+6 more)

### Community 129 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 130 - "speech.ts"
Cohesion: 0.33
Nodes (6): hush(), RULES, say(), speak(), speechSupported(), speechText()

### Community 131 - "score.svelte.ts"
Cohesion: 0.10
Nodes (14): primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), primaryAction(), KEY, LessonScore (+6 more)

### Community 132 - "saveSynced"
Cohesion: 0.17
Nodes (10): load(), MyPhrases, saveSynced(), Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 134 - "MatchDefinitions.svelte"
Cohesion: 0.15
Nodes (8): active, checked, Option, optText(), withFeedback(), oi(), i(), item()

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 138 - "lessonProgress.svelte.ts"
Cohesion: 0.17
Nodes (12): progressScope(), LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), lessonProgress, LessonProgressStore (+4 more)

### Community 143 - "api/reminders/+server.ts"
Cohesion: 0.17
Nodes (18): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+10 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (48): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+40 more)

### Community 150 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 159 - "Module G"
Cohesion: 0.33
Nodes (5): Authoring rules, Exams, Module G, Open, Sections

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **746 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+741 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `gradeExam.ts`, `progressSync.svelte.ts`, `content-edit/api.ts`, `ReviewNotesStore`, `AccountSection.svelte`, `RemindersStore`, `RulesStore`, `RulesPanel.svelte`, `settings/+page.svelte`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `editModel.svelte.ts`, `LessonScreen`, `LessonNode`, `RulesPanel.svelte`, `ExamEditWorkspace.svelte`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _746 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08405797101449275 - nodes in this community are weakly interconnected._
- **Should `content-edit/api.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1380952380952381 - nodes in this community are weakly interconnected._