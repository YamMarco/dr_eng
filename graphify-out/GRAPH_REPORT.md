# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 464 files · ~394,353 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2300 nodes · 4504 edges · 176 communities (129 shown, 47 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 114 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9f96a9f1`
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
- TitleEdits
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- session.ts
- WritingTask.svelte
- EditHistory
- הפלט
- plans.ts
- module-e-import.ts
- (site)/+page.svelte
- profile.svelte.ts
- LessonScreen
- deck/index.ts
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
- ExerciseKindBadge.svelte
- ExamEditWorkspace.svelte
- ActivityStore
- package.json
- server/speaking.ts
- data.ts
- settings/+page.svelte
- gradeExam.ts
- progressMerge.ts
- COBE (oral exam)
- SlideStage.svelte
- feedback/types.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- quiz/index.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- PassageBody.svelte
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- mode.svelte.ts
- deck/types.ts
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
- legacyIds.ts
- svelte/transition
- WordImageField.svelte
- ExamEditModel
- Handoff: verify Vercel AI Gateway
- .mcp.json
- MatchDefinitions.svelte
- Platform: web, mobile, accounts
- scan.ts
- fillFromScan
- @eslint/js
- AGENTS.md
- Rules
- submitToLlm
- layer1.ts
- checks/index.ts
- content-i18n.mjs
- registry.ts
- Submit → feedback framework
- NavBar.svelte
- Handoff: About page, after launch
- deckProgress.svelte.ts
- QuizRunner.svelte
- acceptedAnswers.ts
- Module E plan
- scrollLock.ts
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- scoring.ts
- vercel.json
- auth.svelte.ts
- ProgressSync
- speech.ts
- Mcq.svelte
- Speak.svelte
- Handoff: `/mcp` endpoint (removed)
- option.ts
- ReviewNotesStore
- eslint-plugin-svelte
- הקול והסגנון
- lessonProgress.svelte.ts
- words/+page.svelte
- feedback.test.ts
- svelte
- motion.ts
- jsonBody
- @types/web-push
- service-worker.ts
- lessons/+page.svelte
- @tailwindcss/vite
- progressSync.svelte.ts
- reviewNotes.svelte.ts
- @sveltejs/kit
- AccountSection.svelte
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
4. `ScreenPath` - 28 edges
5. `apiFetch()` - 27 edges
6. `LessonNode` - 26 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `QuizNode` - 17 edges

## Surprising Connections (you probably didn't know these)
- `deckSets()` --indirect_call--> `printed()`  [INFERRED]
  front/scripts/module-e-import.ts → front/src/lib/deck/session.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `LessonScreen` --references--> `IdentifiedScreen`  [EXTRACTED]
  front/src/lib/lesson-screens/types.ts → front/src/lib/quiz/screenIds.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (176 total, 47 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.11
Nodes (19): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+11 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.18
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

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

### Community 31 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.10
Nodes (21): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, LIBRARY (+13 more)

### Community 35 - "session.ts"
Cohesion: 0.20
Nodes (22): dueWords(), blankedExample(), buildSession(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+14 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "plans.ts"
Cohesion: 0.05
Nodes (57): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+49 more)

### Community 40 - "module-e-import.ts"
Cohesion: 0.17
Nodes (25): buildExam(), clean(), deckSets(), explanationOnly(), Json, keywords(), main(), Paper (+17 more)

### Community 41 - "(site)/+page.svelte"
Cohesion: 0.11
Nodes (6): d(), focus(), slot(), homeMedia, Media, formattedDate

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (9): LessonBucket, Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent (+1 more)

### Community 44 - "deck/index.ts"
Cohesion: 0.21
Nodes (12): eGlossAr, activeDecks(), Deck, decks, deckStats(), dueToday(), getDecks(), glosses (+4 more)

### Community 45 - "index.svelte.ts"
Cohesion: 0.10
Nodes (4): trailing(), dayPart, dictionaries, I18n

### Community 46 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "llm.ts"
Cohesion: 0.20
Nodes (12): chat(), chatJson(), ChatOptions, keys(), LlmResult, GATEWAY_URL, GEMINI_URL, LLM_MODELS (+4 more)

### Community 49 - "curriculum.ts"
Cohesion: 0.17
Nodes (12): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+4 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 52 - "apiFetch"
Cohesion: 0.28
Nodes (8): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), CobeLevel, requestSpeakingFeedback()

### Community 53 - "validate.ts"
Cohesion: 0.10
Nodes (25): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+17 more)

### Community 54 - "llmGuard.ts"
Cohesion: 0.33
Nodes (9): llmConfigured(), burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm(), Product (+1 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 57 - "ExerciseKindBadge.svelte"
Cohesion: 0.21
Nodes (3): stripLineAttrs(), gutter, lines

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "server/speaking.ts"
Cohesion: 0.23
Nodes (10): SpeakingVerdict, band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 62 - "data.ts"
Cohesion: 0.05
Nodes (67): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+59 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.10
Nodes (10): full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD, reminders (+2 more)

### Community 64 - "gradeExam.ts"
Cohesion: 0.13
Nodes (28): writingRubricId, applyLength(), mechanicsCount(), gradeLesson(), postGrade(), Checked, failed(), gradeEssay() (+20 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 66 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 67 - "SlideStage.svelte"
Cohesion: 0.09
Nodes (11): onMove(), onUp(), i(), TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch (+3 more)

### Community 68 - "feedback/types.ts"
Cohesion: 0.09
Nodes (24): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+16 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (43): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+35 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (22): GradeRequest, ask(), block(), cleanMarks(), ESSAY_PROMPTS, gradeEssay(), gradeLesson(), gradeReading() (+14 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "quiz/index.ts"
Cohesion: 0.16
Nodes (9): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, getQuizNodesByModule(), IdentifiedScreen, QuizKind, QuizOptions (+1 more)

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "PassageBody.svelte"
Cohesion: 0.20
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 78 - "mode.svelte.ts"
Cohesion: 0.18
Nodes (3): KEY, ScreenMode, at()

### Community 79 - "deck/types.ts"
Cohesion: 0.27
Nodes (6): listA, listB, listD, w(), DeckWord, WordPos

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.08
Nodes (26): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+18 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (26): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+18 more)

### Community 85 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (36): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+28 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.09
Nodes (23): dictionary-en, dictionary-en-gb, eslint, eslint-config-prettier, devDependencies, dictionary-en, dictionary-en-gb, eslint (+15 more)

### Community 90 - "db/schema.ts"
Cohesion: 0.11
Nodes (25): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, isPushEndpoint() (+17 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 95 - "svelte/transition"
Cohesion: 0.13
Nodes (4): emails, groups, phrase(), showNav

### Community 97 - "ExamEditModel"
Cohesion: 0.11
Nodes (3): clone(), ExamEditModel, QuizNode

### Community 98 - "Handoff: verify Vercel AI Gateway"
Cohesion: 0.40
Nodes (4): Before checking, Check (signed in, on the production site; then ask Claude to read the logs), Handoff: verify Vercel AI Gateway, Still open from before

### Community 100 - "MatchDefinitions.svelte"
Cohesion: 0.17
Nodes (5): active, checked, i(), KEY, QuizAnswerSlot

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "scan.ts"
Cohesion: 0.83
Nodes (3): previewUrl(), scanHandwriting(), toJpeg()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 109 - "layer1.ts"
Cohesion: 0.20
Nodes (15): browserDictionaries(), bytes(), checkWriting(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers() (+7 more)

### Community 110 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "registry.ts"
Cohesion: 0.15
Nodes (3): screenComponents, KEY, LessonSession

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "deckProgress.svelte.ts"
Cohesion: 0.17
Nodes (11): deckProgress, DeckProgressStore, load(), persist(), ProgressMap, addDays(), dayKey(), INTERVAL_DAYS (+3 more)

### Community 119 - "QuizRunner.svelte"
Cohesion: 0.08
Nodes (15): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+7 more)

### Community 120 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

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
Cohesion: 0.13
Nodes (20): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), anyFailed (+12 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 128 - "auth.svelte.ts"
Cohesion: 0.11
Nodes (12): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+4 more)

### Community 129 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "Mcq.svelte"
Cohesion: 0.08
Nodes (19): primaryAction(), mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+11 more)

### Community 132 - "Speak.svelte"
Cohesion: 0.16
Nodes (15): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Entry (+7 more)

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 134 - "option.ts"
Cohesion: 0.24
Nodes (6): #each(), Option, optText(), withFeedback(), oi(), i()

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 138 - "lessonProgress.svelte.ts"
Cohesion: 0.17
Nodes (11): activity, load(), WEEKLY_GOAL, progressScope(), lessonProgress, LessonProgressStore, load(), persist() (+3 more)

### Community 139 - "words/+page.svelte"
Cohesion: 0.25
Nodes (6): deckToday(), localizeDeck(), finish(), next, seen, start()

### Community 140 - "feedback.test.ts"
Cohesion: 0.36
Nodes (5): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS

### Community 142 - "motion.ts"
Cohesion: 0.14
Nodes (4): reducedMotion, SUPPORT_EMAIL, SUPPORT_WHATSAPP, item()

### Community 143 - "jsonBody"
Cohesion: 0.31
Nodes (11): kanbanTasks, kanbanDb(), taskColumns, taskFields, jsonBody(), DELETE(), PATCH(), patchBody (+3 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (38): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+30 more)

### Community 150 - "progressSync.svelte.ts"
Cohesion: 0.16
Nodes (10): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, readAt(), reloaders (+2 more)

### Community 151 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 154 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

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
- **736 isolated node(s):** `Rules (Layer 1 settings)`, `Gates (no API call, outright wrong)`, `One attempt`, `Layer 2`, `Exams` (+731 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `gradeExam.ts`, `ProgressSync`, `content-edit/api.ts`, `scan.ts`, `ReviewNotesStore`, `RemindersStore`, `RulesPanel.svelte`, `progressSync.svelte.ts`, `reviewNotes.svelte.ts`, `AccountSection.svelte`, `settings/+page.svelte`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `content/index.ts`, `SlideStage.svelte`, `session.ts`, `EditModel`, `quiz/index.ts`, `registry.ts`, `lesson-screens/types.ts`, `validate.ts`, `scoring.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `checkAuth()` connect `content-edit/+server.ts` to `lib/kanban.ts`, `jsonBody`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `Rules (Layer 1 settings)`, `Gates (no API call, outright wrong)`, `One attempt` to the rest of the system?**
  _736 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11231884057971014 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08163265306122448 - nodes in this community are weakly interconnected._