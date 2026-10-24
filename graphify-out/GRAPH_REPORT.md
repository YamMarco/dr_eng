# Graph Report - dr_eng  (2026-10-23)

## Corpus Check
- 418 files · ~369,622 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2106 nodes · 3946 edges · 173 communities (119 shown, 54 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 98 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `27d96ccc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- chatSpeaking.ts
- EditModel
- RulesPanel.svelte
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
- AppBar.svelte
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- llmGuard.ts
- WritingTask.svelte
- editModel.svelte.ts
- הפלט
- registry.ts
- apiFetch
- motion.ts
- profile.svelte.ts
- session.ts
- Module C audit
- saveSynced
- gradeExam.ts
- writingLint.ts
- Module E plan
- checkAuth
- curriculum.ts
- feedback/types.ts
- PassageBody.svelte
- validate.ts
- LessonScreen
- scoring.ts
- TitleEdits
- NavBar.svelte
- ExamEditWorkspace.svelte
- miniMarkdown.ts
- checks/index.ts
- progress.ts
- data.ts
- index.svelte.ts
- ExerciseKindBadge.svelte
- progressMerge.ts
- ReviewNotesStore
- RulesStore
- [quizId]/+page.svelte
- content-edit/+server.ts
- server/grade.ts
- מודול C
- progressSync.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- QuizReport.svelte
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- content-edit/api.ts
- COBE (oral exam)
- drizzle-kit
- checkout/+page.ts
- feedback/grade.ts
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- phraseBank.svelte.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- dictionary-en
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- platform.ts
- auth.svelte.ts
- 2. Real photos and videos
- ExamEditModel
- ActivityStore
- .mcp.json
- score.svelte.ts
- Platform: web, mobile, accounts
- DebugStore
- @eslint/js
- moduleLocation.svelte.ts
- AGENTS.md
- Rules
- takeHistory.ts
- eslint
- Button.svelte
- SlideStage.svelte
- DeckProgressStore
- content-i18n.mjs
- globals
- Speak.svelte
- Submit → feedback framework
- AccountSection.svelte
- Handoff: About page, after launch
- legacyIds.ts
- lastEngagement.svelte.ts
- WordImageField.svelte
- Module G
- acceptedAnswers.ts
- scripts
- Handoff: support email (receive + send as support@engup.co.il)
- eslint-config-prettier
- vercel.json
- dictionary-en-gb
- server/supabase.ts
- speech.ts
- Mcq.svelte
- MatchDefinitions.svelte
- Handoff: `/mcp` endpoint (removed)
- mode.svelte.ts
- MarkdownInput.svelte
- הקול והסגנון
- prettier
- textColors.ts
- svelte
- AccessStore
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
- `stop()` --calls--> `takeKey()`  [EXTRACTED]
  front/src/lib/lesson-screens/Speak.svelte → front/src/lib/takeHistory.ts
- `deleteAccount()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/components/AccountSection.svelte → front/src/lib/api.ts
- `pick()` --calls--> `recordAnswer()`  [EXTRACTED]
  front/src/lib/lesson-screens/MatchPairs.svelte → front/src/lib/lesson-screens/score.svelte.ts
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts

## Import Cycles
- None detected.

## Communities (173 total, 54 thin omitted)

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
Cohesion: 0.07
Nodes (43): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+35 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (5): clone(), EditModel, screenList(), swapLevels(), versions()

### Community 5 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (17): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+9 more)

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

### Community 31 - "AppBar.svelte"
Cohesion: 0.12
Nodes (4): trailing(), full, ignite, i()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.09
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 34 - "content/index.ts"
Cohesion: 0.14
Nodes (17): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, g1Lessons (+9 more)

### Community 35 - "llmGuard.ts"
Cohesion: 0.16
Nodes (15): db, coupons, llmUsage, orders, progress, waitlist, burstLimited(), calls (+7 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "editModel.svelte.ts"
Cohesion: 0.12
Nodes (8): EditHistory, LessonBucket, Bucket, onMove(), onUp(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "registry.ts"
Cohesion: 0.16
Nodes (3): screenComponents, KEY, LessonSession

### Community 40 - "apiFetch"
Cohesion: 0.12
Nodes (17): apiFetch(), toWavBase64(), uploadImage(), BLANK, ReviewNote, reviewNotes, addChat(), chatCount() (+9 more)

### Community 41 - "motion.ts"
Cohesion: 0.07
Nodes (9): d(), slot(), reducedMotion, homeMedia, Media, SUPPORT_EMAIL, SUPPORT_WHATSAPP, chip() (+1 more)

### Community 42 - "profile.svelte.ts"
Cohesion: 0.10
Nodes (14): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+6 more)

### Community 43 - "session.ts"
Cohesion: 0.25
Nodes (19): blankedExample(), buildSession(), clashes(), contextMcq(), DeckPrompts, DeckSession, decoys(), definitionMcq() (+11 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "saveSynced"
Cohesion: 0.14
Nodes (14): activity, load(), WEEKLY_GOAL, deckProgress, load(), ProgressMap, lessonProgress, LessonProgressStore (+6 more)

### Community 46 - "gradeExam.ts"
Cohesion: 0.24
Nodes (16): checkWriting(), applyLength(), mechanicsCount(), check(), Checked, failed(), gradeEssay(), gradeExam() (+8 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "checkAuth"
Cohesion: 0.24
Nodes (15): checkAuth(), getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), body, GET(), POST() (+7 more)

### Community 50 - "curriculum.ts"
Cohesion: 0.13
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 51 - "feedback/types.ts"
Cohesion: 0.11
Nodes (19): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, Rubric, RubricCriterion, pieces (+11 more)

### Community 52 - "PassageBody.svelte"
Cohesion: 0.22
Nodes (5): leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 53 - "validate.ts"
Cohesion: 0.10
Nodes (25): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+17 more)

### Community 54 - "LessonScreen"
Cohesion: 0.13
Nodes (6): EditModelLike, ScreenPath, blankScreen(), LessonRound, LessonScreen, IdentifiedScreen

### Community 55 - "scoring.ts"
Cohesion: 0.23
Nodes (13): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), applyGrades() (+5 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 59 - "miniMarkdown.ts"
Cohesion: 0.18
Nodes (14): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+6 more)

### Community 60 - "checks/index.ts"
Cohesion: 0.08
Nodes (39): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+31 more)

### Community 61 - "progress.ts"
Cohesion: 0.10
Nodes (33): attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage(), progressKey() (+25 more)

### Community 62 - "data.ts"
Cohesion: 0.13
Nodes (32): getLesson(), getLessonsBySection(), moduleSections(), progressScope(), SKILLS, continueFrom(), ContinueItem, EXAM_READY (+24 more)

### Community 63 - "index.svelte.ts"
Cohesion: 0.10
Nodes (10): dictionaries, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe, groups (+2 more)

### Community 64 - "ExerciseKindBadge.svelte"
Cohesion: 0.18
Nodes (5): stripLineAttrs(), oi(), i(), gutter, lines

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 67 - "RulesStore"
Cohesion: 0.21
Nodes (3): RulesStore, KEY, Rules

### Community 68 - "[quizId]/+page.svelte"
Cohesion: 0.14
Nodes (13): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+5 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.23
Nodes (17): wordId(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+9 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.11
Nodes (30): essayRubric, CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest (+22 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "QuizReport.svelte"
Cohesion: 0.11
Nodes (12): cQuizzes, cobeQuizzes, allQuizNodes, anyFailed, hasSpeaking, headline, level, numbers (+4 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 78 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 82 - "feedback/grade.ts"
Cohesion: 0.12
Nodes (23): browserDictionaries(), bytes(), gradeLesson(), postGrade(), Layer1, Layer1Options, runLayer1(), applyFixes() (+15 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (25): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OrderScreen, PassageMcqScreen (+17 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (34): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+26 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.09
Nodes (33): listA, listB, listC, listD, w(), eGlossAr, activeDecks(), Deck (+25 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "platform.ts"
Cohesion: 0.31
Nodes (3): handleError, MOBILE_BUILD, prerender

### Community 95 - "auth.svelte.ts"
Cohesion: 0.12
Nodes (12): access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth, EditStore (+4 more)

### Community 96 - "2. Real photos and videos"
Cohesion: 0.22
Nodes (8): 1. Run the waitlist migration (first), 2. Real photos and videos, Checks, Handoff: home page, on the PC, Processing, Slots, Sources, Style (Revolut-like)

### Community 97 - "ExamEditModel"
Cohesion: 0.11
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizNode

### Community 100 - "score.svelte.ts"
Cohesion: 0.15
Nodes (8): primaryAction(), primaryAction(), primaryAction(), KEY, LessonScore, recordAnswer(), primaryAction(), submitToLlm()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+3 more)

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

### Community 109 - "Button.svelte"
Cohesion: 0.18
Nodes (3): phrase(), next, seen

### Community 110 - "SlideStage.svelte"
Cohesion: 0.13
Nodes (6): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, row()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "Speak.svelte"
Cohesion: 0.17
Nodes (6): primaryAction(), record(), stop(), toggle(), KEY, QuizAnswerSlot

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (6): emails, confirming, deleteAccount(), deleting, failed, t

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 119 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 121 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 122 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (39): @capacitor/core, drizzle-orm, @fontsource-variable/heebo, dependencies, @capacitor/core, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte (+31 more)

### Community 125 - "Handoff: support email (receive + send as support@engup.co.il)"
Cohesion: 0.40
Nodes (4): After it works, Handoff: support email (receive + send as support@engup.co.il), Receive: ImprovMX (free forwarding), Send as support@ (Gmail "Send mail as")

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 129 - "server/supabase.ts"
Cohesion: 0.23
Nodes (10): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, accountsEnabled, noSession (+2 more)

### Community 130 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 131 - "Mcq.svelte"
Cohesion: 0.12
Nodes (13): mistakes, pick(), shuffleNotIdentity(), cols, containerHeight, containerWidth, hexW, order (+5 more)

### Community 132 - "MatchDefinitions.svelte"
Cohesion: 0.25
Nodes (3): active, checked, item()

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 136 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 139 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (38): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+30 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.10
Nodes (27): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, accessUntil(), addMonths(), billingEnabled (+19 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **683 isolated node(s):** `Model`, `Authoring a lesson`, `Adding a screen type`, `Text formatting syntax`, `Runner rules` (+678 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `ReviewNotesStore`, `RulesStore`, `RulesPanel.svelte`, `progressSync.svelte.ts`, `content-edit/api.ts`, `AccessStore`, `feedback/grade.ts`, `AccountSection.svelte`, `auth.svelte.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `EditModel` connect `EditModel` to `ExamEditWorkspace.svelte`, `RulesPanel.svelte`, `editModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `ExamEditModel` connect `ExamEditModel` to `QuizReport.svelte`, `editModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `Model`, `Authoring a lesson`, `Adding a screen type` to the rest of the system?**
  _683 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `chatSpeaking.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.07616892911010557 - nodes in this community are weakly interconnected._