# Graph Report - front  (2026-10-16)

## Corpus Check
- 305 files · ~527,646 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1620 nodes · 3159 edges · 133 communities (85 shown, 48 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8fc25833`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- svelte-core-bestpractices/SKILL.md
- svelte/transition
- deck/index.ts
- GraphEditor.svelte
- EditWorkspace.svelte
- EditModel
- lesson-screens/types.ts
- scripts
- snapshot-content.ts
- activeField.svelte.ts
- curriculum.ts
- compilerOptions
- checks/index.ts
- Workflow
- content/index.ts
- snippet.md
- content-edit/+server.ts
- TitleEdits
- lessonProgress.svelte.ts
- [quizId]/+page.svelte
- Available Svelte MCP Tools:
- CLI tools
- sv
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- eslint.config.js
- prettier.config.js
- app.d.ts
- billing.ts
- lessons/+page.svelte
- index.svelte.ts
- settings/+page.svelte
- WritingTask.svelte
- ExamEditModel
- LessonScreen
- data.ts
- lesson-screens/schema.ts
- server/grade.ts
- svelte/easing
- SlideStage.svelte
- stats.ts
- goalOptions.ts
- registry.ts
- mcp.ts
- QuizRunner.svelte
- progress.ts
- content-i18n.mjs
- feedback/types.ts
- score.svelte.ts
- feedback/grade.ts
- gradeExam.ts
- feedback/rules.ts
- moduleLocation.svelte.ts
- RulesPanel.svelte
- screenChecks.ts
- mode.svelte.ts
- apiFetch
- ExamEditWorkspace.svelte
- answers.svelte.ts
- scoring.ts
- AuthStore
- RulesStore
- Mcq.svelte
- examEditModel.svelte.ts
- ReviewNotesStore
- await-expressions.md
- WordImageField.svelte
- rulesStore.svelte.ts
- writingLint.ts
- Recorder
- llm.ts
- attach.md
- content-edit/api.ts
- EditHistory
- SpellWord.svelte
- validate.ts
- MarkAll.svelte
- book/+page.svelte
- platform.ts
- lastEngagement.svelte.ts
- reviewNotes.svelte.ts
- DebugStore
- acceptedAnswers.ts
- PassageMark.svelte
- writingMoves.ts
- create-coupon.mjs
- edit-exam/+page.svelte
- hydratable.md
- inspect.md
- Bucket
- app/+layout.ts
- checkout/+page.ts
- @capacitor/cli
- capacitor.config.ts
- dictionary-en
- drizzle-kit
- eslint
- eslint-config-prettier
- eslint-plugin-svelte
- each.md
- render.md
- svelte-reactivity.md
- globals
- prettier
- prettier-plugin-svelte
- prettier-plugin-tailwindcss
- svelte
- svelte-check
- @sveltejs/adapter-auto
- @sveltejs/adapter-static
- @sveltejs/vite-plugin-svelte
- tailwindcss
- @tailwindcss/forms
- @tailwindcss/typography
- @tailwindcss/vite
- @types/node
- @types/nspell
- typescript
- typescript-eslint
- vite
- submitToLlm
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 49 edges
2. `ExamEditModel` - 40 edges
3. `LessonScreen` - 33 edges
4. `ScreenPath` - 28 edges
5. `LessonNode` - 21 edges
6. `EditModelLike` - 20 edges
7. `apiFetch()` - 17 edges
8. `scripts` - 16 edges
9. `QuizNode` - 14 edges
10. `AuthStore` - 13 edges

## Surprising Connections (you probably didn't know these)
- `isBigNode()` --calls--> `countQuestions()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `leading()` --indirect_call--> `text()`  [INFERRED]
  src/lib/lesson-screens/PassageMark.svelte → src/lib/server/mcp.ts
- `isBigNode()` --calls--> `isScreenEmpty()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  src/lib/content/types.ts → src/lib/lesson-screens/types.ts
- `post()` --calls--> `apiFetch()`  [EXTRACTED]
  src/lib/access.svelte.ts → src/lib/api.ts

## Import Cycles
- None detected.

## Communities (133 total, 48 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): dictionary-en-gb, @eslint/js, devDependencies, dictionary-en-gb, @eslint/js, @sveltejs/kit, @sveltejs/kit

### Community 1 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.12
Nodes (14): Function bindings, Async Svelte, Avoid legacy features, Context, `$derived`, Each blocks, `$effect`, Events (+6 more)

### Community 2 - "svelte/transition"
Cohesion: 0.11
Nodes (17): emails, access, CheckoutError, fetchQuote(), placeOrder(), post(), Quote, auth (+9 more)

### Community 3 - "deck/index.ts"
Cohesion: 0.06
Nodes (51): activity, ActivityStore, dayKey(), WEEKLY_GOAL, eGlossAr, eWords, w(), homeMeters (+43 more)

### Community 4 - "GraphEditor.svelte"
Cohesion: 0.09
Nodes (13): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+5 more)

### Community 5 - "EditWorkspace.svelte"
Cohesion: 0.15
Nodes (9): errorCount, hint, issues, issuesFor, onKey(), playNode, saveMsg, showIssues (+1 more)

### Community 6 - "EditModel"
Cohesion: 0.09
Nodes (3): clone(), EditModel, LessonNode

### Community 7 - "lesson-screens/types.ts"
Cohesion: 0.08
Nodes (24): ClozePickScreen, MarkAllCategory, MarkAllScreen, MatchDefinitionsScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+16 more)

### Community 8 - "scripts"
Cohesion: 0.05
Nodes (37): @capacitor/core, drizzle-orm, @lucide/svelte, @modelcontextprotocol/server, nspell, dependencies, @capacitor/core, drizzle-orm (+29 more)

### Community 9 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 10 - "activeField.svelte.ts"
Cohesion: 0.07
Nodes (47): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+39 more)

### Community 11 - "curriculum.ts"
Cohesion: 0.09
Nodes (23): cache, ensureLoaded(), loaders, loading, localizeContent(), Table, tables, translate() (+15 more)

### Community 12 - "compilerOptions"
Cohesion: 0.14
Nodes (13): ./.svelte-kit/tsconfig.json, compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule (+5 more)

### Community 13 - "checks/index.ts"
Cohesion: 0.08
Nodes (40): bytes(), base(), issue(), languageIssues(), MODALS, PAST, PHRASES, THIRD (+32 more)

### Community 14 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 15 - "content/index.ts"
Cohesion: 0.18
Nodes (11): c1Lessons, c2Lessons, c3Lessons, cobe1Lessons, cobe2Lessons, all, allLessons, sectionMeta (+3 more)

### Community 16 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 17 - "content-edit/+server.ts"
Cohesion: 0.10
Nodes (34): APP_ORIGINS, cors(), handle(), checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById() (+26 more)

### Community 18 - "TitleEdits"
Cohesion: 0.11
Nodes (7): TitleEdits, ar, Dictionary, DictionaryOverride, he, titlesAr, titlesHe

### Community 19 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (7): progressScope(), lessonProgress, LessonProgressStore, load(), persist(), ProgressMap, rescope()

### Community 20 - "[quizId]/+page.svelte"
Cohesion: 0.16
Nodes (7): row, rules, taken, ./$types, due, known, { reviews, fresh }

### Community 21 - "Available Svelte MCP Tools:"
Cohesion: 0.29
Nodes (6): 1. list-sections, 2. get-documentation, 3. svelte-autofixer, 4. playground-link, Available Svelte MCP Tools:, Project Configuration

### Community 22 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 23 - "sv"
Cohesion: 0.40
Nodes (4): Building, Creating a project, Developing, sv

### Community 24 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 27 - "app.d.ts"
Cohesion: 0.50
Nodes (3): App, Locals, PageState

### Community 28 - "billing.ts"
Cohesion: 0.09
Nodes (30): DEFAULT_PLAN, Plan, planById(), PlanId, PLANS, accessUntil(), addMonths(), billingEnabled (+22 more)

### Community 33 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (39): hashString(), ICONS, lessonIcon(), markRoundCompleted(), PALETTE, SectionTheme, activeNode, activeRoundIndex (+31 more)

### Community 34 - "index.svelte.ts"
Cohesion: 0.10
Nodes (5): activeIndex, path, dictionaries, words, previous

### Community 36 - "WritingTask.svelte"
Cohesion: 0.05
Nodes (36): accepted, acceptedOk, allFilled, allOk, autoCheck, capitalIsError, checked, combinedText (+28 more)

### Community 38 - "LessonScreen"
Cohesion: 0.11
Nodes (9): LessonBucket, screenList(), EditModelLike, ScreenPath, blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonScreen (+1 more)

### Community 39 - "data.ts"
Cohesion: 0.15
Nodes (27): getLesson(), getLessonsBySection(), moduleSections(), SKILLS, continueFrom(), ContinueItem, EXAM_READY, examAdvice (+19 more)

### Community 40 - "lesson-screens/schema.ts"
Cohesion: 0.07
Nodes (29): autoCheck, clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, matchDefinitionsSchema, matchPairsSchema (+21 more)

### Community 41 - "server/grade.ts"
Cohesion: 0.14
Nodes (26): CONTENT_TAGS, FATAL_TAGS, TAG_IDS, TagDef, ask(), block(), calls, cleanMarks() (+18 more)

### Community 42 - "svelte/easing"
Cohesion: 0.12
Nodes (3): full, ignite, reducedMotion

### Community 43 - "SlideStage.svelte"
Cohesion: 0.12
Nodes (5): onMove(), onUp(), TYPE_HE, LessonContent, oi()

### Community 44 - "stats.ts"
Cohesion: 0.11
Nodes (19): moduleHook, allQuizNodes, avg(), examRows(), examStats, examTier, GREAT_PERCENT, PASS_PERCENT (+11 more)

### Community 45 - "goalOptions.ts"
Cohesion: 0.14
Nodes (11): sessionKey(), sessionOptions(), UNKNOWN_SESSION, examDate(), ExamSeason, ExamSession, SEASON_DATE, upcomingSessions() (+3 more)

### Community 46 - "registry.ts"
Cohesion: 0.14
Nodes (3): screenComponents, KEY, LessonSession

### Community 47 - "mcp.ts"
Cohesion: 0.18
Nodes (17): screenSchemas, checkScreen(), buildServer(), editingGuide(), linkedPaths(), mcpHandler, text(), validationReport() (+9 more)

### Community 48 - "QuizRunner.svelte"
Cohesion: 0.10
Nodes (16): i(), anyFailed, headline, numbers, footerLabel, hiddenIndices, partBreaks, passageIndices (+8 more)

### Community 49 - "progress.ts"
Cohesion: 0.25
Nodes (18): ExamGrade, attemptKey(), clearInProgress(), ExamResult, getInProgress(), getLastAttempt(), getResults(), hasStorage() (+10 more)

### Community 50 - "content-i18n.mjs"
Cohesion: 0.14
Nodes (10): file, missing, stale, strings, table, collect(), hebrewContentStrings(), hebrewMarkAllTexts() (+2 more)

### Community 51 - "feedback/types.ts"
Cohesion: 0.15
Nodes (11): essayRubric, Rubric, RubricCriterion, pieces, EssayVerdict, GateReason, MechanicsCount, ReadingItem (+3 more)

### Community 52 - "score.svelte.ts"
Cohesion: 0.12
Nodes (8): active, checked, primaryAction(), pick(), primaryAction(), KEY, LessonScore, recordAnswer()

### Community 53 - "feedback/grade.ts"
Cohesion: 0.22
Nodes (14): browserDictionaries(), checkWriting(), gradeLesson(), postGrade(), check(), issuesToMarks(), Layer1, Layer1Options (+6 more)

### Community 54 - "gradeExam.ts"
Cohesion: 0.26
Nodes (14): applyLength(), mechanicsCount(), Checked, failed(), gradeEssay(), gradeExam(), gradeReadingGroup(), labelled() (+6 more)

### Community 55 - "feedback/rules.ts"
Cohesion: 0.17
Nodes (12): Corrected, Fix, FIX_TAGS, locateMarks(), toOriginal(), clearBelow(), DEFAULT_RULES, resolveRules() (+4 more)

### Community 56 - "moduleLocation.svelte.ts"
Cohesion: 0.15
Nodes (10): LEGACY_IDS, migrate(), PREFIXED, renamed(), rewriteJson(), Entry, LocationMap, moduleLocation (+2 more)

### Community 57 - "RulesPanel.svelte"
Cohesion: 0.14
Nodes (13): applyBelow(), id, inherited, lessonId, lessons, moduleId, MODULES, own (+5 more)

### Community 58 - "screenChecks.ts"
Cohesion: 0.19
Nodes (11): validateExam(), MarkAllSegment, markAllSegments(), lessonScreenSchema, duplicates(), outOfRange(), ScreenCheck, ScreenProblem (+3 more)

### Community 59 - "mode.svelte.ts"
Cohesion: 0.16
Nodes (4): stripLineAttrs(), KEY, ScreenMode, lines

### Community 60 - "apiFetch"
Cohesion: 0.21
Nodes (8): AccessStore, apiFetch(), deleteAccount(), fillFromScan(), previewUrl(), scanHandwriting(), splitSentences(), toJpeg()

### Community 61 - "ExamEditWorkspace.svelte"
Cohesion: 0.18
Nodes (10): addExam(), errorCount, issues, issuesFor, onKey(), openExam(), playQuiz, save() (+2 more)

### Community 62 - "answers.svelte.ts"
Cohesion: 0.17
Nodes (5): mistakes, shuffleNotIdentity(), shuffle(), KEY, QuizAnswerSlot

### Community 63 - "scoring.ts"
Cohesion: 0.27
Nodes (11): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, applyGrades(), normalize(), Scored (+3 more)

### Community 65 - "RulesStore"
Cohesion: 0.23
Nodes (3): RulesStore, KEY, Rules

### Community 66 - "Mcq.svelte"
Cohesion: 0.17
Nodes (9): cols, containerHeight, containerWidth, hexW, order, pitch, positions, rows (+1 more)

### Community 67 - "examEditModel.svelte.ts"
Cohesion: 0.40
Nodes (6): cQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 69 - "await-expressions.md"
Cohesion: 0.22
Nodes (8): Breaking changes, Caveats, Concurrency, Error handling, Forking, Indicating loading states, Server-side rendering, Synchronized updates

### Community 70 - "WordImageField.svelte"
Cohesion: 0.22
Nodes (3): uploadImage(), accept(), WORD_IMAGE

### Community 71 - "rulesStore.svelte.ts"
Cohesion: 0.36
Nodes (5): RuleLevel, ownerModule(), ruleChain(), RulesFile, load()

### Community 72 - "writingLint.ts"
Cohesion: 0.42
Nodes (7): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, VAGUE, words()

### Community 74 - "llm.ts"
Cohesion: 0.36
Nodes (7): chat(), endpoint(), GEMINI_MODELS, llmConfigured(), LlmResult, LlmRole, POST()

### Community 75 - "attach.md"
Cohesion: 0.25
Nodes (7): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components

### Community 76 - "content-edit/api.ts"
Cohesion: 0.50
Nodes (7): post(), saveExamChanges(), saveLessonContent(), saveRules(), saveSection(), saveTitles(), save()

### Community 78 - "SpellWord.svelte"
Cohesion: 0.36
Nodes (5): RATE, RULES, speak(), speechSupported(), speechText()

### Community 79 - "validate.ts"
Cohesion: 0.43
Nodes (5): bucketLabel(), Issue, screenIssues(), validateSection(), countQuestions()

### Community 80 - "MarkAll.svelte"
Cohesion: 0.38
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 83 - "lastEngagement.svelte.ts"
Cohesion: 0.33
Nodes (3): Engagement, lastEngagement, LastEngagementStore

### Community 84 - "reviewNotes.svelte.ts"
Cohesion: 0.40
Nodes (3): BLANK, ReviewNote, reviewNotes

### Community 86 - "acceptedAnswers.ts"
Cohesion: 0.70
Nodes (4): expandAccepted(), expandPattern(), matchesAccepted(), normalize()

### Community 88 - "writingMoves.ts"
Cohesion: 0.40
Nodes (3): MARKERS, MOVE_IDS, MoveId

### Community 89 - "create-coupon.mjs"
Cohesion: 0.50
Nodes (3): code, sql, { values, positionals }

## Knowledge Gaps
- **484 isolated node(s):** `config`, `gitignorePath`, `name`, `private`, `version` (+479 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEditModel` connect `ExamEditModel` to `examEditModel.svelte.ts`, `Bucket`, `LessonScreen`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `LessonScreen` connect `LessonScreen` to `examEditModel.svelte.ts`, `deck/index.ts`, `ExamEditModel`, `EditModel`, `lesson-screens/types.ts`, `snapshot-content.ts`, `SlideStage.svelte`, `registry.ts`, `validate.ts`, `content/index.ts`, `screenChecks.ts`, `scoring.ts`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `EditModelLike` connect `LessonScreen` to `examEditModel.svelte.ts`, `ExamEditModel`, `EditModel`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `config`, `gitignorePath`, `name` to the rest of the system?**
  _484 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `svelte/transition` be split into smaller, more focused modules?**
  _Cohesion score 0.10685483870967742 - nodes in this community are weakly interconnected._
- **Should `deck/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05627545353572751 - nodes in this community are weakly interconnected._