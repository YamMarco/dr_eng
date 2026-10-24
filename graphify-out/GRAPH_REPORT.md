# Graph Report - dev_kanban  (2026-10-24)

## Corpus Check
- 439 files · ~378,167 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2209 nodes · 4254 edges · 174 communities (126 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 103 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53244757`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- server/kanban.ts
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
- Button.svelte
- WritingTask.svelte
- editModel.svelte.ts
- הפלט
- length.ts
- RemindersStore
- (site)/+page.svelte
- profile.svelte.ts
- LessonScreen
- Module C audit
- AppBar.svelte
- gradeExam.ts
- writingLint.ts
- Module E plan
- curriculum.ts
- scripts
- scoring.ts
- ReviewNotesStore
- screenChecks.ts
- db/schema.ts
- api/reminders/+server.ts
- chatSpeaking.ts
- feedback/types.ts
- ExamEditWorkspace.svelte
- QuizReport.svelte
- package.json
- progress.ts
- data.ts
- settings/+page.svelte
- Speak.svelte
- progressSync.svelte.ts
- quizzes.ts
- SlideStage.svelte
- feedback/speaking.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- PassageBody.svelte
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- saveSynced
- COBE (oral exam)
- content
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- WordImageField.svelte
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- llm.ts
- debug.svelte.ts
- 2. Real photos and videos
- ExamEditModel
- Handoff (urgent): AI grading has no real backend
- .mcp.json
- answers.svelte.ts
- Platform: web, mobile, accounts
- feedback/rules.ts
- validate.ts
- @eslint/js
- AGENTS.md
- Rules
- snapshot-content.ts
- @sveltejs/adapter-auto
- checks/index.ts
- server/speaking.ts
- content-i18n.mjs
- registry.ts
- Submit → feedback framework
- moduleLocation.svelte.ts
- Handoff: About page, after launch
- apiFetch
- mechanics.ts
- acceptedAnswers.ts
- Module G
- index.svelte.ts
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- eslint-config-prettier
- vercel.json
- dictionary-en-gb
- llmGuard.ts
- speech.ts
- Mcq.svelte
- cron/reminders/+server.ts
- Handoff: `/mcp` endpoint (removed)
- language.ts
- eslint-plugin-svelte
- הקול והסגנון
- ActivityStore
- DebugStore
- scrollLock.ts
- svelte
- support.ts
- StatusChips.svelte
- @types/web-push
- service-worker.ts
- legacyIds.ts
- lessons/+page.svelte
- @tailwindcss/typography
- @tailwindcss/vite
- reviewNotes.svelte.ts
- markAllColors.ts
- MyPhrases
- writingMoves.ts
- llm-gateway
- sentenceCompletion.ts
- UX principles
- billing.ts
- scan.ts
- typescript
- app/+layout.ts
- prettier-plugin-tailwindcss
- UI review
- tailwindcss
- @tailwindcss/forms
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
10. `scripts` - 15 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `runLayer1()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/layer1.ts → front/src/lib/checks/dictionaries.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts

## Import Cycles
- None detected.

## Communities (174 total, 48 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "server/kanban.ts"
Cohesion: 0.13
Nodes (23): PEOPLE, Person, personLabel, Priority, priorityLabel, Status, STATUSES, statusLabel (+15 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (5): clone(), EditModel, swapLevels(), versions(), LessonNode

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
Cohesion: 0.12
Nodes (16): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, g1Lessons (+8 more)

### Community 35 - "Button.svelte"
Cohesion: 0.09
Nodes (12): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+4 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "editModel.svelte.ts"
Cohesion: 0.16
Nodes (5): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "length.ts"
Cohesion: 0.32
Nodes (11): countValidWords(), DEDUCTIONS, isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+3 more)

### Community 40 - "RemindersStore"
Cohesion: 0.40
Nodes (3): currentSubscription(), RemindersStore, worker()

### Community 41 - "(site)/+page.svelte"
Cohesion: 0.11
Nodes (6): d(), slot(), reducedMotion, homeMedia, Media, chip()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.12
Nodes (14): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+6 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (6): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonContent, LessonScreen

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "AppBar.svelte"
Cohesion: 0.15
Nodes (6): trailing(), status(), row, rules, taken, tips

### Community 46 - "gradeExam.ts"
Cohesion: 0.14
Nodes (28): applyLength(), mechanicsCount(), gradeLesson(), postGrade(), check(), Checked, failed(), gradeEssay() (+20 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "curriculum.ts"
Cohesion: 0.11
Nodes (15): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+7 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "scoring.ts"
Cohesion: 0.27
Nodes (10): isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize(), Scored, scoreQuiz(), scoreScreen() (+2 more)

### Community 53 - "screenChecks.ts"
Cohesion: 0.19
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 54 - "db/schema.ts"
Cohesion: 0.33
Nodes (6): db, llmUsage, progress, pushSubscriptions, waitlist, body

### Community 55 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.14
Nodes (23): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+15 more)

### Community 57 - "feedback/types.ts"
Cohesion: 0.21
Nodes (8): pieces, EssayVerdict, Feedback, LessonVerdict, ReadingItem, ReadingRequest, ReadingVerdict, SingleRequest

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.11
Nodes (13): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+5 more)

### Community 59 - "QuizReport.svelte"
Cohesion: 0.12
Nodes (10): groups, phrase(), anyFailed, hasSpeaking, headline, level, numbers, pending (+2 more)

### Community 60 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 61 - "progress.ts"
Cohesion: 0.17
Nodes (23): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+15 more)

### Community 62 - "data.ts"
Cohesion: 0.12
Nodes (34): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+26 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.08
Nodes (16): handleError, confirming, deleteAccount(), deleting, failed, signOut(), t, EditStore (+8 more)

### Community 64 - "Speak.svelte"
Cohesion: 0.16
Nodes (15): primaryAction(), record(), stop(), toggle(), delta, firstSeconds, newlyReached, Entry (+7 more)

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.14
Nodes (22): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+14 more)

### Community 66 - "quizzes.ts"
Cohesion: 0.18
Nodes (11): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+3 more)

### Community 68 - "feedback/speaking.ts"
Cohesion: 0.16
Nodes (14): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+6 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (45): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, wordId(), checkAuth() (+37 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.14
Nodes (25): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, GradeRequest, ask(), block(), cleanMarks() (+17 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.35
Nodes (7): cQuizzes, cobeQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "saveSynced"
Cohesion: 0.14
Nodes (15): activity, load(), WEEKLY_GOAL, progressScope(), Engagement, lastEngagement, LastEngagementStore, load() (+7 more)

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (25): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OrderScreen, PassageMcqScreen (+17 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (31): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+23 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, devDependencies, dictionary-en, drizzle-kit, eslint, globals (+17 more)

### Community 90 - "deck/index.ts"
Cohesion: 0.06
Nodes (58): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+50 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 94 - "llm.ts"
Cohesion: 0.24
Nodes (9): chat(), ChatOptions, endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, llmRoute() (+1 more)

### Community 96 - "2. Real photos and videos"
Cohesion: 0.22
Nodes (8): 1. Run the waitlist migration (first), 2. Real photos and videos, Checks, Handoff: home page, on the PC, Processing, Slots, Sources, Style (Revolut-like)

### Community 98 - "Handoff (urgent): AI grading has no real backend"
Cohesion: 0.29
Nodes (6): Do today (no code), Handoff (urgent): AI grading has no real backend, Not recommended now, Then: replace LiteLLM with Vercel AI Gateway (recommended), Where it stands, Why it's urgent

### Community 100 - "answers.svelte.ts"
Cohesion: 0.13
Nodes (5): active, checked, KEY, QuizAnswerSlot, item()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Error reporting (Sentry), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "feedback/rules.ts"
Cohesion: 0.13
Nodes (8): RulesStore, KEY, clearBelow(), DEFAULT_RULES, resolveRules(), RULE_KEYS, Rules, row()

### Community 103 - "validate.ts"
Cohesion: 0.24
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 109 - "checks/index.ts"
Cohesion: 0.13
Nodes (21): browserDictionaries(), bytes(), checkWriting(), CheckIssue, CheckOptions, CheckReport, Confidence, RubricArea (+13 more)

### Community 110 - "server/speaking.ts"
Cohesion: 0.24
Nodes (10): chatJson(), band, block(), gradeSpeakingAudio(), MAX_AUDIO_CHARS, speakingPrompt(), SpeakingRequest, verdictSchema (+2 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "registry.ts"
Cohesion: 0.11
Nodes (7): stripLineAttrs(), oi(), gutter, lines, screenComponents, KEY, LessonSession

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "apiFetch"
Cohesion: 0.18
Nodes (10): AccessStore, apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), CobeLevel (+2 more)

### Community 119 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 120 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 121 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 122 - "index.svelte.ts"
Cohesion: 0.09
Nodes (5): dictionaries, formattedDate, ./$types, next, seen

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+11 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 127 - "vercel.json"
Cohesion: 0.40
Nodes (4): crons, headers, installCommand, $schema

### Community 129 - "llmGuard.ts"
Cohesion: 0.33
Nodes (8): accessUntil(), billingEnabled, burstLimited(), calls, countAllToday(), countToday(), guardLlm(), GET()

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "Mcq.svelte"
Cohesion: 0.06
Nodes (23): primaryAction(), mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW (+15 more)

### Community 132 - "cron/reminders/+server.ts"
Cohesion: 0.29
Nodes (9): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+1 more)

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 134 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 146 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (48): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+40 more)

### Community 150 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 151 - "markAllColors.ts"
Cohesion: 0.50
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 153 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 155 - "sentenceCompletion.ts"
Cohesion: 0.83
Nodes (3): FILLER, isSentenceCompletionMatch(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.10
Nodes (26): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, addMonths(), BillingError, checkout() (+18 more)

### Community 159 - "scan.ts"
Cohesion: 0.47
Nodes (5): fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **710 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+705 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `content/index.ts`, `SlideStage.svelte`, `EditModel`, `editModel.svelte.ts`, `validate.ts`, `examEditModel.svelte.ts`, `snapshot-content.ts`, `registry.ts`, `scoring.ts`, `lesson-screens/types.ts`, `screenChecks.ts`, `deck/index.ts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `LessonScreen`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `scan.ts`, `progressSync.svelte.ts`, `Button.svelte`, `content-edit/api.ts`, `feedback/rules.ts`, `RemindersStore`, `gradeExam.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `reviewNotes.svelte.ts`, `settings/+page.svelte`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _710 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `server/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08888888888888889 - nodes in this community are weakly interconnected._