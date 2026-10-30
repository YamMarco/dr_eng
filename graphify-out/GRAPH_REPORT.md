# Graph Report - dr_eng  (2026-10-30)

## Corpus Check
- 455 files · ~371,915 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2254 nodes · 4354 edges · 170 communities (122 shown, 48 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 113 edges (avg confidence: 0.73)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5fcb1dc`
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
- scripts
- auth.svelte.ts
- WritingTask.svelte
- EditHistory
- הפלט
- feedback/speaking.ts
- content/index.ts
- (site)/+page.svelte
- profile.svelte.ts
- LessonScreen
- registry.ts
- AccountSection.svelte
- gradeExam.ts
- writingLint.ts
- SlideStage.svelte
- RulesPanel.svelte
- miniMarkdown.ts
- scoring.ts
- apiFetch
- screenChecks.ts
- examEditModel.svelte.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- PassageBody.svelte
- ExamEditWorkspace.svelte
- plans.ts
- curriculum.ts
- progress.ts
- data.ts
- settings/+page.svelte
- index.svelte.ts
- progressMerge.ts
- stats.ts
- drizzle-kit
- feedback.test.ts
- content-edit/+server.ts
- feedback/types.ts
- מודול C
- EditableScreen.svelte
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- globals
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- lessonProgress.svelte.ts
- validate.ts
- content
- checkout/+page.ts
- COBE (oral exam)
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- Module C audit
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- support.ts
- NavBar.svelte
- RulesStore
- ExamEditModel
- Handoff: verify Vercel AI Gateway
- .mcp.json
- answers.svelte.ts
- Platform: web, mobile, accounts
- QuizReport.svelte
- prettier
- localize.svelte.ts
- AGENTS.md
- Rules
- snapshot-content.ts
- svelte-check
- package.json
- motion.ts
- @sveltejs/vite-plugin-svelte
- content-i18n.mjs
- @types/nspell
- Mcq.svelte
- Submit → feedback framework
- rulesStore.svelte.ts
- Handoff: About page, after launch
- typescript-eslint
- progressSync.svelte.ts
- fillFromScan
- Module E plan
- svelte/transition
- dependencies
- Handoff: support email (receive + send as support@engup.co.il)
- @eslint/js
- vercel.json
- MarkdownInput.svelte
- speech.ts
- score.svelte.ts
- context.ts
- Handoff: `/mcp` endpoint (removed)
- eslint-plugin-svelte
- הקול והסגנון
- AppBar.svelte
- ProgressSync
- svelte
- @types/web-push
- service-worker.ts
- takeHistory.ts
- lessons/+page.svelte
- WordImageField.svelte
- @tailwindcss/vite
- activity.svelte.ts
- checks/index.ts
- @sveltejs/kit
- acceptedAnswers.ts
- UX principles
- legacyIds.ts
- Module G
- Speak.svelte
- submitToLlm
- auth/README.md
- brand.md
- app/+layout.ts
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
10. `scripts` - 15 edges

## Surprising Connections (you probably didn't know these)
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte

## Import Cycles
- None detected.

## Communities (170 total, 48 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "lib/kanban.ts"
Cohesion: 0.05
Nodes (55): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+47 more)

### Community 4 - "EditModel"
Cohesion: 0.09
Nodes (5): clone(), EditModel, swapLevels(), versions(), LessonNode

### Community 5 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (13): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+5 more)

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

### Community 34 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 35 - "auth.svelte.ts"
Cohesion: 0.11
Nodes (13): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+5 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "feedback/speaking.ts"
Cohesion: 0.15
Nodes (14): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+6 more)

### Community 40 - "content/index.ts"
Cohesion: 0.10
Nodes (20): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, LIBRARY (+12 more)

### Community 41 - "(site)/+page.svelte"
Cohesion: 0.10
Nodes (6): d(), focus(), slot(), homeMedia, Media, formattedDate

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.10
Nodes (10): LessonBucket, screenList(), Bucket, EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES (+2 more)

### Community 44 - "registry.ts"
Cohesion: 0.13
Nodes (6): stripLineAttrs(), gutter, lines, screenComponents, KEY, LessonSession

### Community 45 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 46 - "gradeExam.ts"
Cohesion: 0.13
Nodes (31): browserDictionaries(), checkWriting(), gradeLesson(), postGrade(), check(), Checked, failed(), gradeEssay() (+23 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "SlideStage.svelte"
Cohesion: 0.15
Nodes (7): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, OPENER_LEVELS, OpenerLevel

### Community 49 - "RulesPanel.svelte"
Cohesion: 0.12
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 50 - "miniMarkdown.ts"
Cohesion: 0.13
Nodes (14): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+6 more)

### Community 51 - "scoring.ts"
Cohesion: 0.18
Nodes (16): ExamGrade, FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, QuizAttempt (+8 more)

### Community 52 - "apiFetch"
Cohesion: 0.08
Nodes (20): apiFetch(), toWavBase64(), BLANK, ReviewNote, reviewNotes, ReviewNotesStore, addChat(), chatCount() (+12 more)

### Community 53 - "screenChecks.ts"
Cohesion: 0.19
Nodes (12): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+4 more)

### Community 54 - "examEditModel.svelte.ts"
Cohesion: 0.35
Nodes (7): cQuizzes, cobeQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.06
Nodes (54): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+46 more)

### Community 57 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 59 - "plans.ts"
Cohesion: 0.05
Nodes (57): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+49 more)

### Community 60 - "curriculum.ts"
Cohesion: 0.17
Nodes (12): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+4 more)

### Community 61 - "progress.ts"
Cohesion: 0.31
Nodes (15): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+7 more)

### Community 62 - "data.ts"
Cohesion: 0.10
Nodes (33): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+25 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.10
Nodes (11): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+3 more)

### Community 64 - "index.svelte.ts"
Cohesion: 0.08
Nodes (5): trailing(), dayPart, dictionaries, I18n, words

### Community 65 - "progressMerge.ts"
Cohesion: 0.24
Nodes (16): byKey(), field(), isObj(), isSyncedKey(), Item, larger(), laterReview(), mergeFor() (+8 more)

### Community 66 - "stats.ts"
Cohesion: 0.13
Nodes (17): allQuizNodes, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes (+9 more)

### Community 68 - "feedback.test.ts"
Cohesion: 0.23
Nodes (9): applyLength(), mechanicsCount(), FATAL_TAGS, TAG_IDS, TagDef, TAGS, MechanicsCount, cleanMarks() (+1 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (44): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, wordId(), checkAuth(), emit() (+36 more)

### Community 70 - "feedback/types.ts"
Cohesion: 0.12
Nodes (27): CONTENT_TAGS, EssayVerdict, GradeRequest, LessonVerdict, LlmMark, ReadingItem, ReadingRequest, ReadingVerdict (+19 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "EditableScreen.svelte"
Cohesion: 0.21
Nodes (7): i(), #each(), optFeedback(), Option, optText(), withFeedback(), oi()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 78 - "lessonProgress.svelte.ts"
Cohesion: 0.27
Nodes (7): activity, progressScope(), LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 79 - "validate.ts"
Cohesion: 0.24
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 82 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

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

### Community 90 - "deck/index.ts"
Cohesion: 0.06
Nodes (57): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+49 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

### Community 96 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 98 - "Handoff: verify Vercel AI Gateway"
Cohesion: 0.40
Nodes (4): Before checking, Check (signed in, on the production site; then ask Claude to read the logs), Handoff: verify Vercel AI Gateway, Still open from before

### Community 100 - "answers.svelte.ts"
Cohesion: 0.14
Nodes (5): active, checked, KEY, QuizAnswerSlot, item()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes, Turning it on (+3 more)

### Community 102 - "QuizReport.svelte"
Cohesion: 0.17
Nodes (7): pieces, anyFailed, hasSpeaking, headline, level, numbers, pending

### Community 104 - "localize.svelte.ts"
Cohesion: 0.24
Nodes (9): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 109 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "Mcq.svelte"
Cohesion: 0.15
Nodes (9): i(), cols, containerHeight, containerWidth, hexW, order, pitch, positions (+1 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "rulesStore.svelte.ts"
Cohesion: 0.43
Nodes (4): ownerModule(), ruleChain(), RulesFile, load()

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 119 - "progressSync.svelte.ts"
Cohesion: 0.16
Nodes (10): Engagement, lastEngagement, LastEngagementStore, load(), load(), MyPhrases, readAt(), reloaders (+2 more)

### Community 121 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 122 - "svelte/transition"
Cohesion: 0.16
Nodes (3): groups, phrase(), previous

### Community 123 - "dependencies"
Cohesion: 0.12
Nodes (17): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+9 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 129 - "MarkdownInput.svelte"
Cohesion: 0.43
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "score.svelte.ts"
Cohesion: 0.11
Nodes (11): primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), shuffled, primaryAction(), KEY (+3 more)

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 138 - "AppBar.svelte"
Cohesion: 0.15
Nodes (6): row, rules, taken, tips, next, seen

### Community 139 - "ProgressSync"
Cohesion: 0.40
Nodes (3): localItem(), ProgressSync, syncedKeys()

### Community 146 - "takeHistory.ts"
Cohesion: 0.21
Nodes (10): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+2 more)

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (38): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+30 more)

### Community 150 - "activity.svelte.ts"
Cohesion: 0.24
Nodes (5): ActivityStore, dayKey(), load(), WEEKLY_GOAL, onSyncedChange()

### Community 151 - "checks/index.ts"
Cohesion: 0.08
Nodes (40): bytes(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+32 more)

### Community 155 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 158 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 159 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 160 - "Speak.svelte"
Cohesion: 0.19
Nodes (7): KEY, ScreenMode, primaryAction(), record(), stop(), toggle(), takeKey()

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **727 isolated node(s):** `Model`, `Authoring a lesson`, `Adding a screen type`, `Text formatting syntax`, `Runner rules` (+722 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `RulesStore`, `auth.svelte.ts`, `content-edit/api.ts`, `ProgressSync`, `AccountSection.svelte`, `gradeExam.ts`, `rulesStore.svelte.ts`, `progressSync.svelte.ts`, `settings/+page.svelte`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `EditModel`, `content/index.ts`, `snapshot-content.ts`, `registry.ts`, `validate.ts`, `SlideStage.svelte`, `scoring.ts`, `lesson-screens/types.ts`, `screenChecks.ts`, `examEditModel.svelte.ts`, `deck/index.ts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `RulesPanel.svelte`, `ExamEditWorkspace.svelte`, `LessonScreen`, `data.ts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `Model`, `Authoring a lesson`, `Adding a screen type` to the rest of the system?**
  _727 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `lib/kanban.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05341614906832298 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08985507246376812 - nodes in this community are weakly interconnected._