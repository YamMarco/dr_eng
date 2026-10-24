# Graph Report - dr_eng  (2026-10-24)

## Corpus Check
- 418 files · ~369,657 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2109 nodes · 3957 edges · 169 communities (115 shown, 54 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 99 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `388f15a7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- chatSpeaking.ts
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
- index.svelte.ts
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- feedback/types.ts
- WritingTask.svelte
- EditHistory
- הפלט
- SlideStage.svelte
- apiFetch
- (site)/+page.svelte
- profile.svelte.ts
- validate.ts
- Module C audit
- access.svelte.ts
- gradeExam.ts
- writingLint.ts
- Module E plan
- stats.ts
- curriculum.ts
- length.ts
- ReviewNotesStore
- screenChecks.ts
- MatchDefinitions.svelte
- scoring.ts
- TitleEdits
- motion.ts
- ExamEditWorkspace.svelte
- finishNodeAndContinue
- checks/index.ts
- progress.ts
- data.ts
- platform.ts
- language.ts
- progressSync.svelte.ts
- QuizReport.svelte
- RulesStore
- snapshot-content.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- getDecks
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- mechanics.ts
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- lessonProgress.svelte.ts
- COBE (oral exam)
- drizzle-kit
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- WordImageField.svelte
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- dictionary-en
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- editModel.svelte.ts
- auth.svelte.ts
- 2. Real photos and videos
- ExamEditModel
- content/rules.ts
- .mcp.json
- recordAnswer
- Platform: web, mobile, accounts
- debug.svelte.ts
- @eslint/js
- support.ts
- AGENTS.md
- Rules
- theme.svelte.ts
- eslint
- EditWorkspace.svelte
- writingMoves.ts
- content-i18n.mjs
- globals
- registry.ts
- Submit → feedback framework
- fillFromScan
- Handoff: About page, after launch
- reviewNotes.svelte.ts
- lastEngagement.svelte.ts
- acceptedAnswers.ts
- Module G
- lessonIcon.ts
- scripts
- Handoff: support email (receive + send as support@engup.co.il)
- eslint-config-prettier
- vercel.json
- dictionary-en-gb
- sectionThemes.ts
- speech.ts
- Mcq.svelte
- QuizAnswerSlot
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
- app/+layout.ts
- capacitor.config.ts
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
1. `EditModel` - 51 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 27 edges
4. `apiFetch()` - 24 edges
5. `saveSynced()` - 23 edges
6. `ScreenPath` - 21 edges
7. `EditModelLike` - 19 edges
8. `Rules` - 18 edges
9. `LessonNode` - 17 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `primaryAction()` --calls--> `recordAnswer()`  [EXTRACTED]
  front/src/lib/lesson-screens/MatchDefinitions.svelte → front/src/lib/lesson-screens/score.svelte.ts
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `if()` --calls--> `moduleDeckToday()`  [EXTRACTED]
  front/src/routes/app/unit/[unitId]/module/[moduleId]/+page.svelte → front/src/lib/deck/index.ts

## Import Cycles
- None detected.

## Communities (169 total, 54 thin omitted)

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
Cohesion: 0.05
Nodes (59): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), PhraseGroup, phraseGroups (+51 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

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

### Community 31 - "index.svelte.ts"
Cohesion: 0.07
Nodes (9): trailing(), dictionaries, words, previous, row, rules, taken, tips (+1 more)

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 34 - "content/index.ts"
Cohesion: 0.15
Nodes (15): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, g1Lessons (+7 more)

### Community 35 - "feedback/types.ts"
Cohesion: 0.15
Nodes (14): postGrade(), Layer1, Layer1Options, pieces, RuleSet, EssayVerdict, Feedback, GateReason (+6 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "SlideStage.svelte"
Cohesion: 0.14
Nodes (6): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, oi()

### Community 40 - "apiFetch"
Cohesion: 0.24
Nodes (10): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), previewUrl() (+2 more)

### Community 41 - "(site)/+page.svelte"
Cohesion: 0.12
Nodes (7): d(), slot(), homeMedia, Media, chip(), formattedDate, i()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.09
Nodes (17): sessionKey(), sessionOptions(), UNKNOWN_SESSION, full, ignite, examDate(), ExamSeason, ExamSession (+9 more)

### Community 43 - "validate.ts"
Cohesion: 0.36
Nodes (6): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), countQuestions()

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "access.svelte.ts"
Cohesion: 0.20
Nodes (9): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, loadQuote() (+1 more)

### Community 46 - "gradeExam.ts"
Cohesion: 0.14
Nodes (27): checkWriting(), applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed(), gradeEssay() (+19 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "stats.ts"
Cohesion: 0.12
Nodes (18): moduleHook, allQuizNodes, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT (+10 more)

### Community 50 - "curriculum.ts"
Cohesion: 0.08
Nodes (22): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+14 more)

### Community 51 - "length.ts"
Cohesion: 0.36
Nodes (10): countValidWords(), DEDUCTIONS, isCopiedWhole(), lengthReport(), MIN_WORDS, normWords(), sentencesOf(), sharesRun() (+2 more)

### Community 53 - "screenChecks.ts"
Cohesion: 0.22
Nodes (11): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 54 - "MatchDefinitions.svelte"
Cohesion: 0.20
Nodes (4): active, checked, primaryAction(), item()

### Community 55 - "scoring.ts"
Cohesion: 0.24
Nodes (12): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize() (+4 more)

### Community 56 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 57 - "motion.ts"
Cohesion: 0.16
Nodes (6): confirming, deleteAccount(), deleting, failed, t, reducedMotion

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.20
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 59 - "finishNodeAndContinue"
Cohesion: 0.31
Nodes (10): markRoundCompleted(), celebrateIfNewlyDone(), closeNode(), closeWritingLab(), exitRunner(), finishNode(), finishNodeAndContinue(), isDone() (+2 more)

### Community 60 - "checks/index.ts"
Cohesion: 0.16
Nodes (16): browserDictionaries(), bytes(), MAX_WORDS, CheckIssue, CheckOptions, CheckReport, Confidence, RubricArea (+8 more)

### Community 61 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 62 - "data.ts"
Cohesion: 0.13
Nodes (31): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), Skill, SKILLS, continueFrom(), ContinueItem (+23 more)

### Community 63 - "platform.ts"
Cohesion: 0.31
Nodes (3): handleError, MOBILE_BUILD, prerender

### Community 64 - "language.ts"
Cohesion: 0.31
Nodes (8): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.05
Nodes (51): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), primaryAction(), record(), stop() (+43 more)

### Community 66 - "QuizReport.svelte"
Cohesion: 0.12
Nodes (11): row(), groups, phrase(), anyFailed, hasSpeaking, headline, level, numbers (+3 more)

### Community 67 - "RulesStore"
Cohesion: 0.21
Nodes (3): RulesStore, KEY, Rules

### Community 68 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.12
Nodes (33): wordId(), checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead() (+25 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.13
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, ReadingRequest, ask(), block() (+18 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "getDecks"
Cohesion: 0.31
Nodes (7): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, load()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 78 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (6): lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.13
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (25): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OrderScreen, PassageMcqScreen (+17 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (31): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+23 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.05
Nodes (58): activity, ActivityStore, dayKey(), load(), WEEKLY_GOAL, listA, listB, listC (+50 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (48): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+40 more)

### Community 94 - "editModel.svelte.ts"
Cohesion: 0.18
Nodes (5): LessonBucket, Bucket, onMove(), onUp(), LessonContent

### Community 95 - "auth.svelte.ts"
Cohesion: 0.10
Nodes (3): emails, supabase, showNav

### Community 96 - "2. Real photos and videos"
Cohesion: 0.22
Nodes (8): 1. Run the waitlist migration (first), 2. Real photos and videos, Checks, Handoff: home page, on the PC, Processing, Slots, Sources, Style (Revolut-like)

### Community 97 - "ExamEditModel"
Cohesion: 0.06
Nodes (17): EditModelLike, clone(), ExamEditModel, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound (+9 more)

### Community 98 - "content/rules.ts"
Cohesion: 0.53
Nodes (4): ownerModule(), ruleChain(), RulesFile, load()

### Community 100 - "recordAnswer"
Cohesion: 0.40
Nodes (6): pick(), primaryAction(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+3 more)

### Community 102 - "debug.svelte.ts"
Cohesion: 0.17
Nodes (3): auth, EditStore, DebugStore

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 110 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "registry.ts"
Cohesion: 0.06
Nodes (15): KEY, ScreenMode, Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, i(), gutter (+7 more)

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 119 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 120 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 121 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 122 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (39): @capacitor/core, drizzle-orm, @fontsource-variable/heebo, dependencies, @capacitor/core, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte (+31 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "Mcq.svelte"
Cohesion: 0.12
Nodes (12): mistakes, shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW, order, pitch (+4 more)

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
Cohesion: 0.06
Nodes (51): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, DEFAULT_PLAN, Plan (+43 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **683 isolated node(s):** `Entry`, `SavedTake`, `TakeStats`, `MoveId`, `ScreenMode` (+678 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `progressSync.svelte.ts`, `RulesStore`, `feedback/types.ts`, `content-edit/api.ts`, `access.svelte.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `reviewNotes.svelte.ts`, `motion.ts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditModel`, `RulesPanel.svelte`, `EditWorkspace.svelte`, `editModel.svelte.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `Entry`, `SavedTake`, `TakeStats` to the rest of the system?**
  _683 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `chatSpeaking.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05052631578947368 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.07616892911010557 - nodes in this community are weakly interconnected._
- **Should `Checklist` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._