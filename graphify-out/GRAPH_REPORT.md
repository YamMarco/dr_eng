# Graph Report - dr_eng  (2026-10-31)

## Corpus Check
- 478 files · ~456,707 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2351 nodes · 4616 edges · 176 communities (130 shown, 46 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 115 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14f28b76`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @types/node
- CLI tools
- svelte-core-bestpractices/SKILL.md
- lesson-screens/types.ts
- EditModel
- content-edit/api.ts
- Checklist
- What You Must Do When Invoked
- AuthStore
- compilerOptions
- apiFetch
- graphify reference: extra exports and benchmark
- Lesson structure
- eslint.config.js
- each.md
- prettier.config.js
- app.d.ts
- MatchDefinitions.svelte
- graphify reference: query, path, explain
- RulesPanel.svelte
- SlideStage.svelte
- markAllColors.ts
- QuizRunner.svelte
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- index.svelte.ts
- extraction-spec.md
- GraphEditor.svelte
- content/index.ts
- Md.svelte
- WritingTask.svelte
- db/schema.ts
- Mcq.svelte
- plans.ts
- deck/index.ts
- lessonProgress.svelte.ts
- profile.svelte.ts
- LessonScreen
- progress.ts
- 1. Reading comprehension (grade-reading)
- Recorder
- writingLint.ts
- Handoff: before testers (owner's to-do)
- rubrics/index.ts
- scripts
- Workflow
- score.svelte.ts
- מדיניות פרטיות
- billing.ts
- moduleLocation.svelte.ts
- chatSpeaking.ts
- תנאי שימוש
- ExamEditWorkspace.svelte
- data.ts
- feedback/types.ts
- settings/+page.svelte
- checks/index.ts
- lib/kanban.ts
- validate.ts
- progressMerge.ts
- ActivityStore
- quiz/index.ts
- snippet.md
- content-edit/+server.ts
- server/grade.ts
- progressSync.svelte.ts
- TitleEdits
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- layer1.ts
- create-coupon.mjs
- measure-overflow.mjs
- scoring.ts
- takeHistory.ts
- gradeExam.ts
- content
- checkout/+page.ts
- motion.ts
- Material
- speech.ts
- feedback/+server.ts
- upload-vocab-images.mjs
- lesson-screens/schema.ts
- editModel.svelte.ts
- devDependencies
- Handoff: About page, after launch
- await-expressions.md
- server/supabase.ts
- activeField.svelte.ts
- activity.svelte.ts
- Handoff: `/mcp` endpoint (removed)
- attach.md
- ExamEditModel
- Handoff: policies (privacy, terms, consent)
- .mcp.json
- curriculum.ts
- Platform: web, mobile, accounts
- ReviewNotesStore
- api/reminders/+server.ts
- @eslint/js
- AGENTS.md
- Rules
- acceptedAnswers.ts
- llmGuard.ts
- svelte/transition
- edit-exam/+page.svelte
- feedback/rules.ts
- content-i18n.mjs
- mechanics.ts
- RulesStore
- Submit → feedback framework
- stats.ts
- support.ts
- Speak.svelte
- lastEngagement.svelte.ts
- (site)/+page.svelte
- AccountSection.svelte
- hydratable.md
- dependencies
- miniMarkdown.ts
- inspect.md
- vercel.json
- WordImageField.svelte
- MarkdownInput.svelte
- @sveltejs/adapter-auto
- RemindersStore
- reviewNotes.svelte.ts
- @sveltejs/kit
- legacyIds.ts
- textColors.ts
- openerLevels.ts
- dictionary-en-gb
- MyPhrases
- render.md
- svelte
- eslint-config-prettier
- prettier-plugin-svelte
- @types/web-push
- service-worker.ts
- svelte-reactivity.md
- lessons/+page.svelte
- @tailwindcss/forms
- @tailwindcss/vite
- tailwindcss
- screenshot.ts
- submitToLlm
- @tailwindcss/typography
- typescript
- UX principles
- package.json
- auth.svelte.ts
- $app/paths
- brand.md
- auth/README.md
- app/+layout.ts
- UI review
- vite
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 52 edges
2. `ExamEditModel` - 40 edges
3. `LessonNode` - 35 edges
4. `LessonScreen` - 32 edges
5. `ScreenPath` - 28 edges
6. `apiFetch()` - 27 edges
7. `saveSynced()` - 23 edges
8. `EditModelLike` - 20 edges
9. `תנאי שימוש` - 19 edges
10. `Rules` - 18 edges

## Surprising Connections (you probably didn't know these)
- `uploadImage()` --calls--> `apiFetch()`  [EXTRACTED]
  front/src/lib/content-edit/api.ts → front/src/lib/api.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/OptionFeedbackList.svelte
- `phrase()` --calls--> `row()`  [INFERRED]
  front/src/lib/lesson-screens/PhraseBank.svelte → front/src/lib/lesson-screens/MatchPairs.svelte
- `stop()` --calls--> `takeKey()`  [EXTRACTED]
  front/src/lib/lesson-screens/Speak.svelte → front/src/lib/takeHistory.ts
- `screenProblems()` --indirect_call--> `optText()`  [INFERRED]
  front/src/lib/lesson-screens/screenChecks.ts → front/src/lib/lesson-screens/option.ts

## Import Cycles
- None detected.

## Communities (176 total, 46 thin omitted)

### Community 1 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 2 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 3 - "lesson-screens/types.ts"
Cohesion: 0.07
Nodes (27): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, OpenerScreen, OrderScreen (+19 more)

### Community 4 - "EditModel"
Cohesion: 0.08
Nodes (4): clone(), EditModel, swapLevels(), versions()

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

### Community 10 - "apiFetch"
Cohesion: 0.18
Nodes (13): apiFetch(), toWavBase64(), addChat(), chatCount(), ChatTurnError, sendChatTurn(), requestSpeakingFeedback(), fillFromScan() (+5 more)

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure"
Cohesion: 0.13
Nodes (14): Adding a screen type, Authoring a lesson, Conventions, Lesson structure, Model, Reading round pattern (Part B), Runner rules, Screen length on a phone (+6 more)

### Community 16 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 17 - "MatchDefinitions.svelte"
Cohesion: 0.11
Nodes (6): active, checked, KEY, ScreenMode, KEY, QuizAnswerSlot

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "RulesPanel.svelte"
Cohesion: 0.13
Nodes (19): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+11 more)

### Community 20 - "SlideStage.svelte"
Cohesion: 0.16
Nodes (4): i(), TYPE_HE, issuesByNode(), optFeedback()

### Community 21 - "markAllColors.ts"
Cohesion: 0.40
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 22 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (10): stripLineAttrs(), leading(), Highlight, MarkColor, PASSAGE_MARKS, PassageMarksStore, gutter, lines (+2 more)

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
Nodes (8): trailing(), dayPart, dictionaries, I18n, status(), formattedDate, ./$types, item()

### Community 33 - "GraphEditor.svelte"
Cohesion: 0.10
Nodes (10): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+2 more)

### Community 34 - "content/index.ts"
Cohesion: 0.10
Nodes (27): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, cobe3Lessons, d1Lessons, d2Lessons (+19 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (38): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+30 more)

### Community 37 - "db/schema.ts"
Cohesion: 0.26
Nodes (8): db, coupons, llmUsage, orders, progress, pushSubscriptions, waitlist, body

### Community 38 - "Mcq.svelte"
Cohesion: 0.11
Nodes (14): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+6 more)

### Community 39 - "plans.ts"
Cohesion: 0.07
Nodes (35): APP, build(), COBE_ADDON, Cycle, CYCLE_MONTHS, CYCLES, defaultPlan(), FEATURED_OFFER (+27 more)

### Community 40 - "deck/index.ts"
Cohesion: 0.06
Nodes (61): listA, listB, listC, listD, w(), wordId(), eGlossAr, deckProgress (+53 more)

### Community 41 - "lessonProgress.svelte.ts"
Cohesion: 0.24
Nodes (8): activity, progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 42 - "profile.svelte.ts"
Cohesion: 0.14
Nodes (13): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+5 more)

### Community 43 - "LessonScreen"
Cohesion: 0.11
Nodes (7): screenList(), EditModelLike, ScreenPath, LessonContent, LessonRound, LessonScreen, QuizPart

### Community 44 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 45 - "1. Reading comprehension (grade-reading)"
Cohesion: 0.08
Nodes (24): 1. Reading comprehension (grade-reading), 2. Essay (grade-essay), 3. Speaking recording (grade-speaking), 4. Speaking chat (chat-speaking), 5. Short lesson answers (grade-short), Error tags (also used by essay and short answers), How it works, How it works (+16 more)

### Community 46 - "Recorder"
Cohesion: 0.27
Nodes (3): Recorder, RecorderState, Take

### Community 47 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 48 - "Handoff: before testers (owner's to-do)"
Cohesion: 0.22
Nodes (8): 2FA on every account, GitHub token, Google AI Studio (Gemini fallback key's project), Handoff: before testers (owner's to-do), Privacy and terms, Supabase dashboard, Testers, Vercel

### Community 49 - "rubrics/index.ts"
Cohesion: 0.15
Nodes (15): PhraseGroup, phraseGroups, CobeBand, CobeCriterion, CobeRubric, essayRubric, Rubric, RubricCriterion (+7 more)

### Community 50 - "scripts"
Cohesion: 0.13
Nodes (15): scripts, build, build:mobile, check, check:watch, db:generate, db:migrate, db:push (+7 more)

### Community 51 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 52 - "score.svelte.ts"
Cohesion: 0.11
Nodes (12): primaryAction(), mistakes, pick(), row(), shuffleNotIdentity(), primaryAction(), primaryAction(), KEY (+4 more)

### Community 53 - "מדיניות פרטיות"
Cohesion: 0.10
Nodes (20): 10. מיילים, 11. אבטחה, 12. אחסון בדפדפן, 13. בודקים ותכונות בניסיון, 14. שיעורים ב-Zoom, 15. שינויים במדיניות, 16. יצירת קשר, 1. מי אנחנו (+12 more)

### Community 54 - "billing.ts"
Cohesion: 0.15
Nodes (19): accessEnd(), accessUntil(), BillingError, checkout(), CheckoutResult, completeOrder(), Coupon, CouponProblem (+11 more)

### Community 55 - "moduleLocation.svelte.ts"
Cohesion: 0.22
Nodes (6): Entry, load(), LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 56 - "chatSpeaking.ts"
Cohesion: 0.06
Nodes (48): BANTER_TOPICS, BanterTopic, chatOpener(), PART_A_TOPICS, PROJECT_POINTS, validChatTopics(), chatEnds(), ChatLine (+40 more)

### Community 57 - "תנאי שימוש"
Cohesion: 0.10
Nodes (19): 10. בודקים ותכונות בניסיון, 11. זמינות השירות, 12. אחריות, 13. הפסקת שימוש, 14. שינויים בתנאים, 15. דין ושיפוט, 16. נגישות, 17. יצירת קשר (+11 more)

### Community 58 - "ExamEditWorkspace.svelte"
Cohesion: 0.14
Nodes (12): addExam(), errorCount, exit(), issues, issuesFor, onKey(), openExam(), playQuiz (+4 more)

### Community 59 - "data.ts"
Cohesion: 0.11
Nodes (30): getLesson(), getLessonsBySection(), moduleSections(), Skill, SKILLS, continueFrom(), ContinueItem, EXAM_READY (+22 more)

### Community 60 - "feedback/types.ts"
Cohesion: 0.15
Nodes (17): gradeLesson(), postGrade(), Layer1Options, pieces, applyFixes(), Corrected, Fix, FIX_TAGS (+9 more)

### Community 61 - "settings/+page.svelte"
Cohesion: 0.10
Nodes (11): EditStore, full, ignite, install, InstallPromptEvent, InstallStore, Platform, MOBILE_BUILD (+3 more)

### Community 62 - "checks/index.ts"
Cohesion: 0.13
Nodes (24): base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD, UNCOUNTABLE (+16 more)

### Community 63 - "lib/kanban.ts"
Cohesion: 0.10
Nodes (27): PEOPLE, Person, personLabel, Priority, priorityLabel, Sort, SortKey, SORTS (+19 more)

### Community 64 - "validate.ts"
Cohesion: 0.16
Nodes (16): bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), MarkAllSegment, markAllSegments(), lessonScreenSchema (+8 more)

### Community 65 - "progressMerge.ts"
Cohesion: 0.25
Nodes (15): byKey(), field(), isObj(), isSyncedKey(), larger(), laterReview(), mergeFor(), mergeItems() (+7 more)

### Community 67 - "quiz/index.ts"
Cohesion: 0.13
Nodes (18): cQuizzes, cobeQuizzes, eQuizzes, gQuizzes, allQuizNodes, QuizKind, QuizNode, QuizOptions (+10 more)

### Community 68 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.09
Nodes (37): checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+29 more)

### Community 70 - "server/grade.ts"
Cohesion: 0.10
Nodes (31): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, TAGS, EssayVerdict, GradeRequest, ReadingRequest (+23 more)

### Community 71 - "progressSync.svelte.ts"
Cohesion: 0.28
Nodes (7): Item, localItem(), ProgressSync, readAt(), reloaders, syncedKeys(), writeLocal()

### Community 72 - "TitleEdits"
Cohesion: 0.11
Nodes (8): TitleEdits, ar, Dictionary, DictionaryOverride, he, LegalDoc, titlesAr, titlesHe

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "layer1.ts"
Cohesion: 0.18
Nodes (16): browserDictionaries(), bytes(), checkWriting(), ALLOWED, CONTRACTIONS, DictData, DictLoader, loadSpellers() (+8 more)

### Community 75 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

### Community 77 - "scoring.ts"
Cohesion: 0.10
Nodes (22): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), isOrderCorrect(), isScreenEmpty(), MATCH_PAIRS_MAX_MISTAKES, mcqCorrect() (+14 more)

### Community 78 - "takeHistory.ts"
Cohesion: 0.19
Nodes (11): delta, firstSeconds, newlyReached, Entry, openDb(), readStats(), recordTake(), SavedTake (+3 more)

### Community 79 - "gradeExam.ts"
Cohesion: 0.26
Nodes (14): writingRubricId, applyLength(), mechanicsCount(), Checked, failed(), gradeEssay(), gradeExam(), gradeReadingGroup() (+6 more)

### Community 82 - "motion.ts"
Cohesion: 0.09
Nodes (8): reducedMotion, row, rules, taken, tips, ./$types, next, seen

### Community 83 - "Material"
Cohesion: 0.25
Nodes (7): COBE (4 and 5 points, oral), Material, Module C (4 points), Module D (4 points, literature), Module E (4 and 5 points), Module F (5 points, literature), Module G (5 points)

### Community 84 - "speech.ts"
Cohesion: 0.24
Nodes (9): browserVoice, chatVoice, hush(), RATE, RULES, say(), speak(), speechSupported() (+1 more)

### Community 85 - "feedback/+server.ts"
Cohesion: 0.31
Nodes (9): escape(), feedbackHtml(), FeedbackReport, feedbackSubject(), row(), allowed(), body, POST() (+1 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.05
Nodes (37): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+29 more)

### Community 88 - "editModel.svelte.ts"
Cohesion: 0.13
Nodes (8): EditHistory, LessonBucket, Bucket, onMove(), onUp(), blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES

### Community 89 - "devDependencies"
Cohesion: 0.08
Nodes (25): dictionary-en, drizzle-kit, eslint, eslint-plugin-svelte, devDependencies, dictionary-en, drizzle-kit, eslint (+17 more)

### Community 90 - "Handoff: About page, after launch"
Cohesion: 0.40
Nodes (4): Feedback link, Handoff: About page, after launch, Plans link, Teacher card

### Community 91 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 92 - "server/supabase.ts"
Cohesion: 0.21
Nodes (12): app(), APP_ORIGINS, cors(), handle, PUBLIC_APIS, accountsEnabled, adminClient(), noSession (+4 more)

### Community 93 - "activeField.svelte.ts"
Cohesion: 0.16
Nodes (26): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+18 more)

### Community 94 - "activity.svelte.ts"
Cohesion: 0.18
Nodes (6): load(), WEEKLY_GOAL, groups, phrase(), load(), onSyncedChange()

### Community 95 - "Handoff: `/mcp` endpoint (removed)"
Cohesion: 0.40
Nodes (4): Before reviving, Handoff: `/mcp` endpoint (removed), How it worked, Restore

### Community 96 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 97 - "ExamEditModel"
Cohesion: 0.09
Nodes (3): clone(), ExamEditModel, getQuizNodesByModule()

### Community 98 - "Handoff: policies (privacy, terms, consent)"
Cohesion: 0.40
Nodes (4): Documents to write, Facts the texts must match, Handoff: policies (privacy, terms, consent), Where it goes in the app

### Community 100 - "curriculum.ts"
Cohesion: 0.16
Nodes (13): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+5 more)

### Community 101 - "Platform: web, mobile, accounts"
Cohesion: 0.15
Nodes (12): Accounts (Supabase Auth, email + password), Builds, Feedback reports, Install and daily reminder (web), Plans, checkout, access, Platform: web, mobile, accounts, Progress sync, Routes (+4 more)

### Community 103 - "api/reminders/+server.ts"
Cohesion: 0.15
Nodes (19): jsonBody(), isPushEndpoint(), PUSH_HOSTS, pushEnabled, sendPush(), Subscription, authorized(), GET() (+11 more)

### Community 105 - "AGENTS.md"
Cohesion: 0.29
Nodes (6): content, mission, persona, read on demand (plain paths, don't preload), stack, workflow

### Community 106 - "Rules"
Cohesion: 0.10
Nodes (19): Accessibility, Animation, Anti-patterns (flag these), Content & Copy, Content Handling, Dark Mode & Theming, Focus States, Forms (+11 more)

### Community 107 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 108 - "llmGuard.ts"
Cohesion: 0.31
Nodes (9): access, billingEnabled, burstLimited(), calls, cobeThisMonth(), countAllToday(), countToday(), guardLlm() (+1 more)

### Community 109 - "svelte/transition"
Cohesion: 0.14
Nodes (3): emails, words, previous

### Community 111 - "feedback/rules.ts"
Cohesion: 0.20
Nodes (5): KEY, DEFAULT_RULES, resolveRules(), RULE_KEYS, RuleSet

### Community 112 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 113 - "mechanics.ts"
Cohesion: 0.46
Nodes (7): ALWAYS_CAPITAL, CONNECTORS, issue(), mechanicsIssues(), sentenceSpans(), SUBJECTS, SUBORDINATORS

### Community 114 - "RulesStore"
Cohesion: 0.29
Nodes (3): RulesStore, clearBelow(), Rules

### Community 115 - "Submit → feedback framework"
Cohesion: 0.18
Nodes (10): Exams, Gates (no API call, outright wrong), Layer 2, Next, One attempt, Rules (Layer 1 settings), Submit → feedback framework, Tries (choice screens) (+2 more)

### Community 116 - "stats.ts"
Cohesion: 0.27
Nodes (8): moduleHook, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT, getQuizzesForModule()

### Community 117 - "support.ts"
Cohesion: 0.25
Nodes (4): SUPPORT_EMAIL, SUPPORT_WHATSAPP, TESTER_PHASE, TESTERS_GROUP

### Community 118 - "Speak.svelte"
Cohesion: 0.43
Nodes (4): primaryAction(), record(), stop(), toggle()

### Community 119 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (4): Engagement, lastEngagement, LastEngagementStore, load()

### Community 120 - "(site)/+page.svelte"
Cohesion: 0.15
Nodes (4): d(), focus(), homeMedia, Media

### Community 121 - "AccountSection.svelte"
Cohesion: 0.33
Nodes (6): confirming, deleteAccount(), deleting, failed, signOut(), t

### Community 123 - "dependencies"
Cohesion: 0.11
Nodes (19): drizzle-orm, @fontsource-variable/heebo, dependencies, drizzle-orm, @fontsource-variable/heebo, @lucide/svelte, modern-screenshot, nspell (+11 more)

### Community 125 - "miniMarkdown.ts"
Cohesion: 0.12
Nodes (15): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+7 more)

### Community 127 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, installCommand, $schema

### Community 129 - "MarkdownInput.svelte"
Cohesion: 0.53
Nodes (4): htmlToMd(), pickIcon(), serialize(), sync()

### Community 132 - "RemindersStore"
Cohesion: 0.29
Nodes (5): currentSubscription(), REMINDER_HOURS, RemindersStore, storedHour(), worker()

### Community 133 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 135 - "legacyIds.ts"
Cohesion: 0.47
Nodes (5): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson()

### Community 136 - "textColors.ts"
Cohesion: 0.40
Nodes (3): HEX_TO_NAME, TEXT_COLOR_PALETTE, TextColorName

### Community 147 - "lessons/+page.svelte"
Cohesion: 0.05
Nodes (49): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+41 more)

### Community 156 - "UX principles"
Cohesion: 0.18
Nodes (10): 1. Who and what for, 2. Tone, 3. The core loop, 4. Devices, 5. Motivation and gamification, 6. Monetization, 7. Home and the module page, Evidence (+2 more)

### Community 158 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 159 - "auth.svelte.ts"
Cohesion: 0.09
Nodes (14): access, AccessStore, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+6 more)

### Community 190 - "UI review"
Cohesion: 0.40
Nodes (4): Motion and feedback are required, not polish, Overrides to the guidelines (this project), Procedure, UI review

## Knowledge Gaps
- **776 isolated node(s):** `svelte`, `gitignorePath`, `name`, `private`, `version` (+771 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **46 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `validate.ts`, `ExamEditModel`, `content/index.ts`, `lesson-screens/types.ts`, `EditModel`, `quiz/index.ts`, `deck/index.ts`, `scoring.ts`, `SlideStage.svelte`, `editModel.svelte.ts`, `miniMarkdown.ts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `LessonNode` connect `content/index.ts` to `validate.ts`, `EditModel`, `content-edit/api.ts`, `RulesStore`, `RulesPanel.svelte`, `editModel.svelte.ts`, `data.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `apiFetch()` connect `apiFetch` to `RemindersStore`, `content-edit/api.ts`, `ReviewNotesStore`, `reviewNotes.svelte.ts`, `progressSync.svelte.ts`, `RulesStore`, `RulesPanel.svelte`, `AccountSection.svelte`, `feedback/types.ts`, `settings/+page.svelte`, `auth.svelte.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `svelte`, `gitignorePath`, `name` to the rest of the system?**
  _776 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `lesson-screens/types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `EditModel` be split into smaller, more focused modules?**
  _Cohesion score 0.0797872340425532 - nodes in this community are weakly interconnected._