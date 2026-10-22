# Graph Report - dr_eng  (2026-10-22)

## Corpus Check
- 412 files · ~318,255 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2111 nodes · 4018 edges · 171 communities (119 shown, 52 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 97 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0b3540fc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- chatSpeaking.ts
- EditModel
- index.svelte.ts
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
- content/index.ts
- access.svelte.ts
- WritingTask.svelte
- RulesPanel.svelte
- הפלט
- I18n
- feedback/speaking.ts
- profile.svelte.ts
- goalOptions.ts
- feedback.test.ts
- Module C audit
- lessonProgress.svelte.ts
- score.svelte.ts
- writingLint.ts
- Module E plan
- ExamEditWorkspace.svelte
- scoring.ts
- miniMarkdown.ts
- apiFetch
- validate.ts
- LessonScreen
- Recorder
- debug.svelte.ts
- curriculum.ts
- feedback/types.ts
- snapshot-content.ts
- layer1.ts
- progress.ts
- data.ts
- TitleEdits
- editModel.svelte.ts
- progressSync.svelte.ts
- QuizReport.svelte
- ActivityStore
- acceptedAnswers.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- lastEngagement.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- feedback/rules.ts
- create-coupon.mjs
- measure-overflow.mjs
- rulesStore.svelte.ts
- ReviewNotesStore
- COBE (oral exam)
- drizzle-kit
- checkout/+page.ts
- gradeExam.ts
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- screenChecks.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- dictionary-en
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- RulesStore
- NavBar.svelte
- 2. Real photos and videos
- ExamEditModel
- checks/index.ts
- .mcp.json
- support.ts
- Platform: web, mobile, accounts
- svelte/transition
- @eslint/js
- moduleLocation.svelte.ts
- AGENTS.md
- Rules
- Speak.svelte
- eslint
- fillFromScan
- PassageText.svelte
- Mcq.svelte
- content-i18n.mjs
- globals
- MarkdownInput.svelte
- Submit → feedback framework
- Handoff: About page, after launch
- content-edit/api.ts
- SlideStage.svelte
- DebugStore
- Module G
- textColors.ts
- scripts
- writingMoves.ts
- vercel.json
- dictionary-en-gb
- quiz/index.ts
- recordAnswer
- Handoff: `/mcp` endpoint (removed)
- reviewNotes.svelte.ts
- הקול והסגנון
- prettier
- WordImageField.svelte
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
- EditWorkspace.svelte
- eslint-config-prettier
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
1. `EditModel` - 49 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `apiFetch()` - 24 edges
6. `LessonNode` - 23 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `Rules` - 18 edges
10. `scripts` - 16 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `check()` --indirect_call--> `browserDictionaries()`  [INFERRED]
  front/src/lib/feedback/gradeExam.ts → front/src/lib/checks/dictionaries.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/content/types.ts → front/src/lib/lesson-screens/types.ts
- `pick()` --calls--> `recordAnswer()`  [EXTRACTED]
  front/src/lib/lesson-screens/MatchPairs.svelte → front/src/lib/lesson-screens/score.svelte.ts

## Import Cycles
- None detected.

## Communities (171 total, 52 thin omitted)

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
Nodes (44): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+36 more)

### Community 5 - "index.svelte.ts"
Cohesion: 0.10
Nodes (3): dictionaries, words, previous

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

### Community 34 - "content/index.ts"
Cohesion: 0.15
Nodes (14): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, g1Lessons, g2Lessons, all (+6 more)

### Community 35 - "access.svelte.ts"
Cohesion: 0.14
Nodes (11): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+3 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (37): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+29 more)

### Community 37 - "RulesPanel.svelte"
Cohesion: 0.15
Nodes (13): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+5 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "I18n"
Cohesion: 0.22
Nodes (5): getModule(), I18n, ./$types, load(), ./$types

### Community 40 - "feedback/speaking.ts"
Cohesion: 0.15
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 41 - "profile.svelte.ts"
Cohesion: 0.12
Nodes (6): dayPart, reducedMotion, NAME_MAX, Profile, homeMedia, Media

### Community 42 - "goalOptions.ts"
Cohesion: 0.13
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 43 - "feedback.test.ts"
Cohesion: 0.19
Nodes (13): gradeLesson(), applyFixes(), Corrected, Fix, FIX_TAGS, locateMarks(), mergeMarks(), toOriginal() (+5 more)

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "lessonProgress.svelte.ts"
Cohesion: 0.18
Nodes (11): activity, load(), WEEKLY_GOAL, progressScope(), lessonProgress, LessonProgressStore, load(), persist() (+3 more)

### Community 46 - "score.svelte.ts"
Cohesion: 0.07
Nodes (12): active, checked, mistakes, pick(), shuffleNotIdentity(), KEY, ScreenMode, KEY (+4 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`, about 6-8 nodes), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+3 more)

### Community 50 - "scoring.ts"
Cohesion: 0.21
Nodes (14): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect(), applyGrades() (+6 more)

### Community 51 - "miniMarkdown.ts"
Cohesion: 0.18
Nodes (14): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+6 more)

### Community 52 - "apiFetch"
Cohesion: 0.22
Nodes (11): apiFetch(), toWavBase64(), deleteAccount(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback() (+3 more)

### Community 53 - "validate.ts"
Cohesion: 0.38
Nodes (5): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 54 - "LessonScreen"
Cohesion: 0.14
Nodes (5): screenList(), EditModelLike, ScreenPath, blankScreen(), LessonScreen

### Community 55 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 57 - "curriculum.ts"
Cohesion: 0.20
Nodes (10): CurriculumModule, CurriculumSection, getUnitGroup(), modules, textSection, UnitGroup, unitGroups, wordsSection (+2 more)

### Community 58 - "feedback/types.ts"
Cohesion: 0.17
Nodes (11): postGrade(), pieces, EssayVerdict, Feedback, GradeRequest, LessonVerdict, MechanicsCount, ReadingItem (+3 more)

### Community 59 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 60 - "layer1.ts"
Cohesion: 0.24
Nodes (8): browserDictionaries(), bytes(), DictData, Layer1, Layer1Options, runLayer1(), GateReason, Mark

### Community 61 - "progress.ts"
Cohesion: 0.16
Nodes (25): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+17 more)

### Community 62 - "data.ts"
Cohesion: 0.13
Nodes (31): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+23 more)

### Community 63 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 64 - "editModel.svelte.ts"
Cohesion: 0.15
Nodes (6): EditHistory, LessonBucket, Bucket, SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonContent

### Community 65 - "progressSync.svelte.ts"
Cohesion: 0.09
Nodes (32): load(), MyPhrases, byKey(), field(), isObj(), isSyncedKey(), Item, larger() (+24 more)

### Community 66 - "QuizReport.svelte"
Cohesion: 0.25
Nodes (6): anyFailed, hasSpeaking, headline, level, numbers, pending

### Community 68 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (45): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, wordId(), checkAuth() (+37 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.16
Nodes (21): CONTENT_TAGS, ask(), block(), cleanMarks(), gradeEssay(), gradeLesson(), gradeReading(), KINDS (+13 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "feedback/rules.ts"
Cohesion: 0.18
Nodes (6): KEY, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet, row()

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "rulesStore.svelte.ts"
Cohesion: 0.31
Nodes (5): ownerModule(), ruleChain(), RulesFile, load(), ./$types

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Mock exam (quiz/cobe), Open, Part B - Project (cobe-1, path section "חלק א׳"), Part C - Clip (cobe-2, path section "חלק ב׳"), Progress and AI feedback (+2 more)

### Community 82 - "gradeExam.ts"
Cohesion: 0.25
Nodes (15): applyLength(), mechanicsCount(), check(), Checked, failed(), gradeEssay(), gradeExam(), gradeReadingGroup() (+7 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (27): screenComponents, KEY, LessonSession, ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen (+19 more)

### Community 85 - "screenChecks.ts"
Cohesion: 0.23
Nodes (10): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+2 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (30): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+22 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 90 - "deck/index.ts"
Cohesion: 0.06
Nodes (59): listA, listB, listC, listD, w(), eGlossAr, deckProgress, DeckProgressStore (+51 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 95 - "NavBar.svelte"
Cohesion: 0.10
Nodes (5): handleError, full, ignite, MOBILE_BUILD, prerender

### Community 96 - "2. Real photos and videos"
Cohesion: 0.22
Nodes (8): 1. Run the waitlist migration (first), 2. Real photos and videos, Checks, Handoff: home page, on the PC, Processing, Slots, Sources, Style (Revolut-like)

### Community 97 - "ExamEditModel"
Cohesion: 0.08
Nodes (4): clone(), ExamEditModel, getQuizNodesByModule(), QuizPart

### Community 98 - "checks/index.ts"
Cohesion: 0.09
Nodes (39): checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+31 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.17
Nodes (11): Accounts (Supabase Auth, email + password), Builds, Capacitor, on the day, Error reporting (Sentry), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+3 more)

### Community 102 - "svelte/transition"
Cohesion: 0.08
Nodes (15): emails, confirming, deleting, failed, t, trailing(), supabase, showNav (+7 more)

### Community 104 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (11): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, load(), LocationMap (+3 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "Speak.svelte"
Cohesion: 0.13
Nodes (11): groups, phrase(), primaryAction(), record(), stop(), toggle(), delta, firstSeconds (+3 more)

### Community 110 - "PassageText.svelte"
Cohesion: 0.13
Nodes (9): d(), stripLineAttrs(), leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter (+1 more)

### Community 111 - "Mcq.svelte"
Cohesion: 0.10
Nodes (13): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+5 more)

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "content-edit/api.ts"
Cohesion: 0.20
Nodes (14): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+6 more)

### Community 119 - "SlideStage.svelte"
Cohesion: 0.12
Nodes (8): onMove(), onUp(), TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, oi()

### Community 121 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 122 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (39): @capacitor/core, drizzle-orm, @fontsource-variable/heebo, dependencies, @capacitor/core, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte (+31 more)

### Community 125 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 130 - "quiz/index.ts"
Cohesion: 0.14
Nodes (16): cQuizzes, cobeQuizzes, allQuizNodes, QuizKind, QuizNode, QuizOptions, allQuizzes, AssortedQuiz (+8 more)

### Community 131 - "recordAnswer"
Cohesion: 0.50
Nodes (5): primaryAction(), primaryAction(), recordAnswer(), primaryAction(), submitToLlm()

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 136 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (48): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+40 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.07
Nodes (39): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, accessUntil(), addMonths(), billingEnabled (+31 more)

### Community 159 - "EditWorkspace.svelte"
Cohesion: 0.17
Nodes (8): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **686 isolated node(s):** `svelte`, `config`, `gitignorePath`, `name`, `private` (+681 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EditModel` connect `EditModel` to `editModel.svelte.ts`, `content/index.ts`, `RulesPanel.svelte`, `LessonScreen`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `editModel.svelte.ts`, `ExamEditModel`, `content/index.ts`, `quiz/index.ts`, `EditModel`, `scoring.ts`, `lesson-screens/types.ts`, `validate.ts`, `screenChecks.ts`, `SlideStage.svelte`, `deck/index.ts`, `snapshot-content.ts`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `progressSync.svelte.ts`, `access.svelte.ts`, `reviewNotes.svelte.ts`, `rulesStore.svelte.ts`, `ReviewNotesStore`, `content-edit/api.ts`, `feedback/types.ts`, `RulesStore`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `svelte`, `config`, `gitignorePath` to the rest of the system?**
  _686 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `chatSpeaking.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07207792207792207 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.09041835357624832 - nodes in this community are weakly interconnected._