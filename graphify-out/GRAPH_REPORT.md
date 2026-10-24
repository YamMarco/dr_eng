# Graph Report - dr_eng  (2026-10-24)

## Corpus Check
- 429 files · ~375,659 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2157 nodes · 4069 edges · 181 communities (128 shown, 53 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 99 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `72d24925`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- Svelte MCP Server
- Snippet Blocks ({#snippet})
- progressSync.svelte.ts
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
- auth.svelte.ts
- WritingTask.svelte
- EditHistory
- הפלט
- checks/index.ts
- RemindersStore
- Button.svelte
- profile.svelte.ts
- LessonScreen
- Module C audit
- AppBar.svelte
- gradeExam.ts
- writingLint.ts
- Module E plan
- llm.ts
- miniMarkdown.ts
- scoring.ts
- ReviewNotesStore
- screenChecks.ts
- db/schema.ts
- api/reminders/+server.ts
- chatSpeaking.ts
- AccountSection.svelte
- ExamEditWorkspace.svelte
- moduleLocation.svelte.ts
- length.ts
- progress.ts
- data.ts
- settings/+page.svelte
- Speak.svelte
- progressMerge.ts
- stats.ts
- SlideStage.svelte
- feedback/speaking.ts
- content-edit/+server.ts
- server/grade.ts
- מודול C
- examEditModel.svelte.ts
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- QuizRunner.svelte
- create-coupon.mjs
- measure-overflow.mjs
- Recorder
- lessonPath.ts
- COBE (oral exam)
- drizzle-kit
- checkout/+page.ts
- RulesPanel.svelte
- בקשת מסך - `<שם-המסך>`
- lesson-screens/types.ts
- MarkdownInput.svelte
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- התחל כאן
- devDependencies
- deck/index.ts
- svelte-core-bestpractices Skill
- סוגי המסכים שקיימים באפליקציה
- activeField.svelte.ts
- deckProgress.svelte.ts
- NavBar.svelte
- 2. Real photos and videos
- ExamEditModel
- Handoff (urgent): AI grading has no real backend
- .mcp.json
- MatchDefinitions.svelte
- Platform: web, mobile, accounts
- RulesStore
- validate.ts
- cron/reminders/+server.ts
- AGENTS.md
- Rules
- snapshot-content.ts
- eslint
- feedback/types.ts
- Mcq.svelte
- checkout
- content-i18n.mjs
- globals
- registry.ts
- Submit → feedback framework
- saveSynced
- Handoff: About page, after launch
- apiFetch
- mechanics.ts
- acceptedAnswers.ts
- Module G
- phraseBank.svelte.ts
- scripts
- Handoff: support email (receive + send as support@engup.co.il)
- eslint-config-prettier
- vercel.json
- dictionary-en-gb
- llmGuard.ts
- speech.ts
- score.svelte.ts
- getDecks
- Handoff: `/mcp` endpoint (removed)
- ActivityStore
- eslint-plugin-svelte
- הקול והסגנון
- prettier
- debug.svelte.ts
- index.svelte.ts
- svelte
- support.ts
- svelte-check
- @types/web-push
- service-worker.ts
- lastEngagement.svelte.ts
- lessons/+page.svelte
- @tailwindcss/typography
- @tailwindcss/vite
- editModel.svelte.ts
- @sveltejs/kit
- legacyIds.ts
- writingMoves.ts
- llm-gateway
- typescript-eslint
- UX principles
- billing.ts
- InstallStore
- fillFromScan
- @types/nspell
- typescript
- app/+layout.ts
- prettier-plugin-svelte
- prettier-plugin-tailwindcss
- UI review
- @sveltejs/adapter-static
- tailwindcss
- @tailwindcss/forms
- vite
- vite-env.d.ts
- @sveltejs/vite-plugin-svelte

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
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `syncedKeys()` --indirect_call--> `isSyncedKey()`  [INFERRED]
  front/src/lib/progressSync.svelte.ts → front/src/lib/progressMerge.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `if()` --calls--> `moduleDeckToday()`  [EXTRACTED]
  front/src/routes/app/unit/[unitId]/module/[moduleId]/+page.svelte → front/src/lib/deck/index.ts
- `get-documentation Tool` --semantically_similar_to--> `get-documentation Command`  [INFERRED] [semantically similar]
  front/.github/agents/svelte-file-editor.agent.md → front/.github/skills/svelte-code-writer/SKILL.md

## Import Cycles
- None detected.

## Communities (181 total, 53 thin omitted)

### Community 1 - "Svelte MCP Server"
Cohesion: 0.24
Nodes (11): get-documentation Tool, list-sections Tool, svelte-autofixer Tool, svelte-code-writer Skill (Fallback Reference), svelte-file-editor Agent, Svelte MCP Server, get-documentation Command, list-sections Command (+3 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, swapLevels(), versions()

### Community 5 - "content-edit/api.ts"
Cohesion: 0.22
Nodes (12): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), saveWordGlossesAr(), saveWords() (+4 more)

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
Cohesion: 0.14
Nodes (17): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, e1Lessons, g1Lessons (+9 more)

### Community 35 - "auth.svelte.ts"
Cohesion: 0.13
Nodes (12): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+4 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "checks/index.ts"
Cohesion: 0.12
Nodes (24): bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES (+16 more)

### Community 40 - "RemindersStore"
Cohesion: 0.40
Nodes (3): currentSubscription(), RemindersStore, worker()

### Community 41 - "Button.svelte"
Cohesion: 0.10
Nodes (5): reducedMotion, homeMedia, Media, chip(), formattedDate

### Community 42 - "profile.svelte.ts"
Cohesion: 0.06
Nodes (29): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+21 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (8): screenList(), EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 44 - "Module C audit"
Cohesion: 0.18
Nodes (10): Definition of a 10, Module C audit, Open, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Reusable patterns (no new screen type), Standing rules (+2 more)

### Community 45 - "AppBar.svelte"
Cohesion: 0.11
Nodes (6): trailing(), row, rules, taken, tips, if()

### Community 46 - "gradeExam.ts"
Cohesion: 0.15
Nodes (26): browserDictionaries(), applyLength(), mechanicsCount(), gradeLesson(), check(), Checked, failed(), gradeEssay() (+18 more)

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Module E plan"
Cohesion: 0.22
Nodes (8): Code prep still open, Mock exams (section `e-exam`), Module E plan, Open decisions, Reading path (section `e-1`), Shape, The exam, Vocabulary deck (section `words`)

### Community 49 - "llm.ts"
Cohesion: 0.24
Nodes (9): chat(), ChatOptions, endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, llmRoute() (+1 more)

### Community 50 - "miniMarkdown.ts"
Cohesion: 0.13
Nodes (17): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+9 more)

### Community 51 - "scoring.ts"
Cohesion: 0.11
Nodes (19): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), MATCH_PAIRS_MAX_MISTAKES, anyFailed, hasSpeaking (+11 more)

### Community 53 - "screenChecks.ts"
Cohesion: 0.22
Nodes (11): MarkAllSegment, markAllSegments(), lessonScreenSchema, checkScreen(), duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 54 - "db/schema.ts"
Cohesion: 0.33
Nodes (6): db, llmUsage, progress, pushSubscriptions, waitlist, body

### Community 55 - "api/reminders/+server.ts"
Cohesion: 0.33
Nodes (8): jsonBody(), DELETE(), endpoint, key, POST(), ready(), subscribeBody, unsubscribeBody

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.08
Nodes (38): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), CobeRubric, chatEnds() (+30 more)

### Community 57 - "AccountSection.svelte"
Cohesion: 0.22
Nodes (7): emails, confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (11): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+3 more)

### Community 59 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 60 - "length.ts"
Cohesion: 0.36
Nodes (10): countValidWords(), DEDUCTIONS, isCopiedWhole(), lengthReport(), MAX_WORDS, MIN_WORDS, normWords(), sentencesOf() (+2 more)

### Community 61 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 62 - "data.ts"
Cohesion: 0.15
Nodes (20): SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice, homeMeters, isWritingLesson(), latestEngagement() (+12 more)

### Community 63 - "settings/+page.svelte"
Cohesion: 0.12
Nodes (9): handleError, EditStore, install, InstallPromptEvent, Platform, MOBILE_BUILD, reminders, ReminderStatus (+1 more)

### Community 64 - "Speak.svelte"
Cohesion: 0.11
Nodes (9): KEY, ScreenMode, primaryAction(), record(), stop(), toggle(), KEY, QuizAnswerSlot (+1 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 66 - "stats.ts"
Cohesion: 0.13
Nodes (15): allQuizNodes, examRows(), examTier, GREAT_PERCENT, PASS_PERCENT, allQuizzes, AssortedQuiz, assortedQuizzes (+7 more)

### Community 67 - "SlideStage.svelte"
Cohesion: 0.18
Nodes (5): TYPE_HE, cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 68 - "feedback/speaking.ts"
Cohesion: 0.17
Nodes (13): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, essayRubric, Rubric, RubricCriterion, CobeLevel (+5 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.08
Nodes (45): app(), APP_ORIGINS, cors(), handle, handleError, PUBLIC_APIS, wordId(), checkAuth() (+37 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.11
Nodes (29): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, ReadingRequest, ReadingVerdict (+21 more)

### Community 71 - "מודול C"
Cohesion: 0.22
Nodes (8): COBE, המודולים, חלק א׳ - אוצר מילים (12 שיעורים), חלק ב׳ - הבנת הנקרא (19 שיעורים), חלק ג׳ - כתיבה (12 שיעורים), מבחני תרגול, מה כבר קיים באפליקציה, מודול C

### Community 72 - "examEditModel.svelte.ts"
Cohesion: 0.16
Nodes (8): Bucket, LessonContent, cQuizzes, cobeQuizzes, getQuizNodesByModule(), QuizKind, QuizOptions, QuizPart

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "QuizRunner.svelte"
Cohesion: 0.18
Nodes (4): Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 78 - "lessonPath.ts"
Cohesion: 0.19
Nodes (15): getLesson(), progressScope(), moduleRoute(), todayLesson(), hasContent(), isLessonDone(), isLessonGold(), isLessonUnlocked() (+7 more)

### Community 79 - "COBE (oral exam)"
Cohesion: 0.18
Nodes (10): AI chat (שיחה עם AI), COBE (oral exam), Grading a recording, Lessons, Mock exam (quiz/cobe), Module page, Open, Progress and AI feedback (+2 more)

### Community 82 - "RulesPanel.svelte"
Cohesion: 0.12
Nodes (20): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+12 more)

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "lesson-screens/types.ts"
Cohesion: 0.06
Nodes (25): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OrderScreen, PassageMcqScreen (+17 more)

### Community 85 - "MarkdownInput.svelte"
Cohesion: 0.17
Nodes (6): htmlToMd(), pickIcon(), serialize(), sync(), oi(), WORD_IMAGE

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.06
Nodes (31): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+23 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "devDependencies"
Cohesion: 0.29
Nodes (7): dictionary-en, @eslint/js, devDependencies, dictionary-en, @eslint/js, @sveltejs/adapter-auto, @sveltejs/adapter-auto

### Community 90 - "deck/index.ts"
Cohesion: 0.08
Nodes (47): listA, listB, listC, listD, w(), eGlossAr, Deck, decks (+39 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.13
Nodes (29): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+21 more)

### Community 94 - "deckProgress.svelte.ts"
Cohesion: 0.18
Nodes (9): activity, load(), WEEKLY_GOAL, deckProgress, DeckProgressStore, load(), persist(), ProgressMap (+1 more)

### Community 96 - "2. Real photos and videos"
Cohesion: 0.22
Nodes (8): 1. Run the waitlist migration (first), 2. Real photos and videos, Checks, Handoff: home page, on the PC, Processing, Slots, Sources, Style (Revolut-like)

### Community 97 - "ExamEditModel"
Cohesion: 0.11
Nodes (3): clone(), ExamEditModel, QuizNode

### Community 98 - "Handoff (urgent): AI grading has no real backend"
Cohesion: 0.29
Nodes (6): Do today (no code), Handoff (urgent): AI grading has no real backend, Not recommended now, Then: replace LiteLLM with Vercel AI Gateway (recommended), Where it stands, Why it's urgent

### Community 100 - "MatchDefinitions.svelte"
Cohesion: 0.14
Nodes (5): active, checked, d(), slot(), leading()

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Error reporting (Sentry), Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 102 - "RulesStore"
Cohesion: 0.19
Nodes (4): RulesStore, KEY, clearBelow(), Rules

### Community 103 - "validate.ts"
Cohesion: 0.24
Nodes (7): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection()

### Community 104 - "cron/reminders/+server.ts"
Cohesion: 0.29
Nodes (9): isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET(), israelDay() (+1 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): content, graphify, mission, persona, skills, stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "snapshot-content.ts"
Cohesion: 0.21
Nodes (10): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+2 more)

### Community 109 - "feedback/types.ts"
Cohesion: 0.18
Nodes (12): postGrade(), Layer1, Layer1Options, pieces, RuleSet, Feedback, GateReason, GradeRequest (+4 more)

### Community 110 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 111 - "checkout"
Cohesion: 0.33
Nodes (7): BillingError, checkout(), normalizeCode(), quote, checkoutBody(), POST(), POST()

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 114 - "registry.ts"
Cohesion: 0.13
Nodes (3): screenComponents, KEY, LessonSession

### Community 115 - "Submit → feedback framework"
Cohesion: 0.20
Nodes (9): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tuning prompts in Gemini's web UI (AI Studio) (+1 more)

### Community 116 - "saveSynced"
Cohesion: 0.21
Nodes (11): delta, firstSeconds, newlyReached, saveSynced(), Entry, openDb(), readStats(), recordTake() (+3 more)

### Community 117 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 118 - "apiFetch"
Cohesion: 0.18
Nodes (11): apiFetch(), toWavBase64(), uploadImage(), BLANK, ReviewNote, reviewNotes, sendChatTurn(), requestSpeakingFeedback() (+3 more)

### Community 119 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 120 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 121 - "Module G"
Cohesion: 0.40
Nodes (4): Authoring rules, Module G, Open, Sections

### Community 123 - "scripts"
Cohesion: 0.05
Nodes (38): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, nspell, postgres (+30 more)

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

### Community 131 - "score.svelte.ts"
Cohesion: 0.11
Nodes (12): primaryAction(), mistakes, pick(), shuffleNotIdentity(), primaryAction(), primaryAction(), KEY, LessonScore (+4 more)

### Community 132 - "getDecks"
Cohesion: 0.31
Nodes (7): activeDecks(), deckStats(), getDecks(), moduleWon(), load(), ssr, load()

### Community 133 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 137 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 140 - "index.svelte.ts"
Cohesion: 0.11
Nodes (7): dictionaries, row(), groups, phrase(), words, previous, item()

### Community 146 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (47): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+39 more)

### Community 150 - "editModel.svelte.ts"
Cohesion: 0.40
Nodes (5): LessonBucket, getLessonsBySection(), moduleSections(), lessonsInOrder(), moduleSections()

### Community 152 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 153 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 157 - "billing.ts"
Cohesion: 0.11
Nodes (19): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, addMonths(), CheckoutResult, completeOrder() (+11 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **702 isolated node(s):** `Routes`, `Builds`, `Turning it on`, `Plans, checkout, access`, `Waitlist` (+697 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `apiFetch()` connect `apiFetch` to `auth.svelte.ts`, `progressSync.svelte.ts`, `content-edit/api.ts`, `RulesStore`, `RemindersStore`, `feedback/types.ts`, `RulesPanel.svelte`, `ReviewNotesStore`, `chatSpeaking.ts`, `AccountSection.svelte`, `settings/+page.svelte`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `ExamEditModel`, `content/index.ts`, `SlideStage.svelte`, `EditModel`, `validate.ts`, `examEditModel.svelte.ts`, `snapshot-content.ts`, `registry.ts`, `scoring.ts`, `lesson-screens/types.ts`, `screenChecks.ts`, `editModel.svelte.ts`, `deck/index.ts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `QuizNode` connect `ExamEditModel` to `content-edit/api.ts`, `validate.ts`, `examEditModel.svelte.ts`, `gradeExam.ts`, `scoring.ts`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `Routes`, `Builds`, `Turning it on` to the rest of the system?**
  _702 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.08140610545790934 - nodes in this community are weakly interconnected._
- **Should `Checklist` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._