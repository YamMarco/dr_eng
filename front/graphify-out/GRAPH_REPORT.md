# Graph Report - front  (2026-09-06)

## Corpus Check
- 104 files · ~58,126 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 482 nodes · 664 edges · 33 communities (27 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.62)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2288dd1d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- svelte-core-bestpractices/SKILL.md
- curriculum.ts
- lessons/+page.svelte
- LessonRunner.svelte
- LessonEditor.svelte
- content/index.ts
- lesson-screens/types.ts
- scripts
- score.svelte.ts
- ScreenForm.svelte
- index.svelte.ts
- compilerOptions
- book/+page.svelte
- Workflow
- snapshot-content.ts
- snippet.md
- content-edit/+server.ts
- MarkAll.svelte
- WritingTask.svelte
- registry.ts
- Available Svelte MCP Tools:
- CLI tools
- sv
- content-edit — in-app screen editor
- eslint.config.js
- prettier.config.js
- app.d.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 11 edges
2. `scripts` - 9 edges
3. `LessonScreen` - 8 edges
4. `ExamSession` - 7 edges
5. `Workflow` - 6 edges
6. `getGithubFile()` - 5 edges
7. `putGithubFile()` - 5 edges
8. `LessonNode` - 5 edges
9. `LessonProgressStore` - 5 edges
10. `POST()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `isBigNode()` --calls--> `countQuestions()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `isBigNode()` --calls--> `isScreenEmpty()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  src/lib/content/types.ts → src/lib/lesson-screens/types.ts
- `addScreen()` --calls--> `blankScreen()`  [EXTRACTED]
  src/lib/content-edit/LessonEditor.svelte → src/lib/content-edit/screenSkeletons.ts
- `saveAll()` --calls--> `saveLessonContent()`  [EXTRACTED]
  src/lib/content-edit/LessonEditor.svelte → src/lib/content-edit/api.ts

## Import Cycles
- None detected.

## Communities (33 total, 6 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.04
Nodes (45): @capacitor/cli, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-svelte, globals, devDependencies, @capacitor/cli (+37 more)

### Community 1 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.04
Nodes (36): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components, Breaking changes (+28 more)

### Community 2 - "curriculum.ts"
Cohesion: 0.07
Nodes (21): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+13 more)

### Community 3 - "lessons/+page.svelte"
Cohesion: 0.07
Nodes (9): EditStore, DebugStore, lessonProgress, LessonProgressStore, persist(), ProgressMap, PALETTE, SectionTheme (+1 more)

### Community 4 - "LessonRunner.svelte"
Cohesion: 0.06
Nodes (28): copyText(), allScreenPaths, allScreens, confirmDiscard(), copyLocation(), currentLocation, currentPath, currentScreen (+20 more)

### Community 5 - "LessonEditor.svelte"
Cohesion: 0.11
Nodes (18): saveLessonContent(), storedKey(), addScreen(), applyScreen(), banner, buckets, confirmDiscard(), deleteScreen() (+10 more)

### Community 6 - "content/index.ts"
Cohesion: 0.15
Nodes (12): c1Lessons, c2Lessons, c3Lessons, ScreenPath, all, allLessons, sectionMeta, LessonContent (+4 more)

### Community 7 - "lesson-screens/types.ts"
Cohesion: 0.10
Nodes (19): MarkAllCategory, MarkAllScreen, MarkWordScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion, PassageQuizScreen, PrefaceScreen (+11 more)

### Community 8 - "scripts"
Cohesion: 0.11
Nodes (18): @capacitor/core, @lucide/svelte, dependencies, @capacitor/core, @lucide/svelte, name, private, scripts (+10 more)

### Community 10 - "ScreenForm.svelte"
Cohesion: 0.16
Nodes (6): i(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch, MarkAllSegment

### Community 11 - "index.svelte.ts"
Cohesion: 0.18
Nodes (7): dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he

### Community 12 - "compilerOptions"
Cohesion: 0.14
Nodes (13): ./.svelte-kit/tsconfig.json, compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule (+5 more)

### Community 13 - "book/+page.svelte"
Cohesion: 0.15
Nodes (3): canGoPrev, canSubmit, formattedDate

### Community 14 - "Workflow"
Cohesion: 0.17
Nodes (11): 1. Gather context (if needed), 1. list-sections, 2. get-documentation, 2. Read the target file, 3. Make changes, 3. svelte-autofixer, 4. Validate changes, 5. Fix any issues (+3 more)

### Community 15 - "snapshot-content.ts"
Cohesion: 0.21
Nodes (10): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+2 more)

### Community 16 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 17 - "content-edit/+server.ts"
Cohesion: 0.36
Nodes (8): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), getLesson(), Body, checkAuth(), POST()

### Community 19 - "WritingTask.svelte"
Cohesion: 0.20
Nodes (9): recordAnswer(), allFilled, allOk, checked, combinedText, primaryAction(), punctuationOk, wordBankOk (+1 more)

### Community 21 - "Available Svelte MCP Tools:"
Cohesion: 0.29
Nodes (6): 1. list-sections, 2. get-documentation, 3. svelte-autofixer, 4. playground-link, Available Svelte MCP Tools:, Project Configuration

### Community 22 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 23 - "sv"
Cohesion: 0.40
Nodes (4): Building, Creating a project, Developing, sv

### Community 24 - "content-edit — in-app screen editor"
Cohesion: 0.40
Nodes (4): content-edit — in-app screen editor, Detach, Local dev vs. production, Save model: lesson-wide draft, one big button

## Knowledge Gaps
- **211 isolated node(s):** `gitignorePath`, `name`, `private`, `version`, `type` (+206 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `gitignorePath`, `name`, `private` to the rest of the system?**
  _211 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `curriculum.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06765327695560254 - nodes in this community are weakly interconnected._
- **Should `lessons/+page.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.06606606606606606 - nodes in this community are weakly interconnected._
- **Should `LessonRunner.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.06386554621848739 - nodes in this community are weakly interconnected._