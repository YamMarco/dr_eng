# Graph Report - front  (2026-09-06)

## Corpus Check
- 112 files · ~62,791 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 518 nodes · 772 edges · 32 communities (28 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `73b3ecd8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- svelte-core-bestpractices/SKILL.md
- exam.svelte.ts
- LessonRunner.svelte
- GraphEditor.svelte
- api.ts
- EditModel
- lesson-screens/types.ts
- scripts
- curriculum.ts
- ScreenForm.svelte
- index.svelte.ts
- compilerOptions
- book/+page.svelte
- Workflow
- validate.ts
- snippet.md
- content-edit/+server.ts
- AppBar.svelte
- ExamSession
- Available Svelte MCP Tools:
- CLI tools
- sv
- content-edit — the `/edit` authoring workspace
- eslint.config.js
- prettier.config.js
- app.d.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 25 edges
2. `LessonNode` - 14 edges
3. `LessonScreen` - 13 edges
4. `compilerOptions` - 11 edges
5. `scripts` - 9 edges
6. `ScreenPath` - 8 edges
7. `ExamSession` - 7 edges
8. `POST()` - 7 edges
9. `clone()` - 6 edges
10. `screenList()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `isBigNode()` --calls--> `countQuestions()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `isBigNode()` --calls--> `isScreenEmpty()`  [EXTRACTED]
  scripts/snapshot-content.ts → src/lib/lesson-screens/types.ts
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  src/lib/content-edit/validate.ts → src/lib/content-edit/OutlineTree.svelte
- `LessonRound` --references--> `LessonScreen`  [EXTRACTED]
  src/lib/content/types.ts → src/lib/lesson-screens/types.ts
- `POST()` --calls--> `getGithubFile()`  [EXTRACTED]
  src/routes/api/content-edit/+server.ts → src/lib/content-edit/github.ts

## Import Cycles
- None detected.

## Communities (32 total, 4 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.04
Nodes (45): @capacitor/cli, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-svelte, globals, devDependencies, @capacitor/cli (+37 more)

### Community 1 - "svelte-core-bestpractices/SKILL.md"
Cohesion: 0.04
Nodes (36): Attachment factories, Conditional attachments, Controlling when attachments re-run, Converting actions to attachments, Creating attachments programmatically, Inline attachments, Passing attachments to components, Breaking changes (+28 more)

### Community 2 - "exam.svelte.ts"
Cohesion: 0.16
Nodes (6): EXAM_MINUTES, exam, EXAM_SECONDS, WARNING_SECONDS, ./$types, ./$types

### Community 3 - "LessonRunner.svelte"
Cohesion: 0.05
Nodes (23): DebugStore, currentPath, currentScreen, editHref, footerDisabled, footerLabel, isLastScreen, justFinished (+15 more)

### Community 4 - "GraphEditor.svelte"
Cohesion: 0.13
Nodes (6): canvasHeight, nodePointerMove(), nodePointerUp(), pick(), selectedId, wrapPointerMove()

### Community 5 - "api.ts"
Cohesion: 0.15
Nodes (6): post(), saveLessonContent(), saveSection(), storedKey(), EditStore, ./$types

### Community 6 - "EditModel"
Cohesion: 0.08
Nodes (19): c1Lessons, c2Lessons, c3Lessons, clone(), EditModel, screenList(), ScreenPath, blankScreen() (+11 more)

### Community 7 - "lesson-screens/types.ts"
Cohesion: 0.05
Nodes (34): ESCAPE, screenComponents, KEY, LessonScore, recordAnswer(), KEY, LessonSession, MarkAllCategory (+26 more)

### Community 8 - "scripts"
Cohesion: 0.11
Nodes (18): @capacitor/core, @lucide/svelte, dependencies, @capacitor/core, @lucide/svelte, name, private, scripts (+10 more)

### Community 9 - "curriculum.ts"
Cohesion: 0.16
Nodes (11): CurriculumModule, CurriculumSection, getUnitGroup(), modules, textSection, UnitGroup, unitGroups, wordsSection (+3 more)

### Community 10 - "ScreenForm.svelte"
Cohesion: 0.17
Nodes (5): i(), cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

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

### Community 15 - "validate.ts"
Cohesion: 0.13
Nodes (18): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+10 more)

### Community 16 - "snippet.md"
Cohesion: 0.18
Nodes (10): Explicit props, Exporting snippets, Implicit `children` snippet, Implicit props, Optional snippet props, Passing snippets to components, Programmatic snippets, Snippet scope (+2 more)

### Community 17 - "content-edit/+server.ts"
Cohesion: 0.32
Nodes (11): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), getLesson(), Body, checkAuth(), emit() (+3 more)

### Community 18 - "AppBar.svelte"
Cohesion: 0.29
Nodes (3): getModule(), load(), ./$types

### Community 21 - "Available Svelte MCP Tools:"
Cohesion: 0.29
Nodes (6): 1. list-sections, 2. get-documentation, 3. svelte-autofixer, 4. playground-link, Available Svelte MCP Tools:, Project Configuration

### Community 22 - "CLI tools"
Cohesion: 0.33
Nodes (5): CLI tools, Get documentation, List documentation sections, Svelte autofixer, Workflow

### Community 23 - "sv"
Cohesion: 0.40
Nodes (4): Building, Creating a project, Developing, sv

### Community 24 - "content-edit — the `/edit` authoring workspace"
Cohesion: 0.33
Nodes (5): content-edit — the `/edit` authoring workspace, Detach, Layout, Local dev vs. production, Model & save

## Knowledge Gaps
- **203 isolated node(s):** `gitignorePath`, `name`, `private`, `version`, `type` (+198 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `EditModel` to `lesson-screens/types.ts`, `validate.ts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `ExamSession` connect `ExamSession` to `exam.svelte.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `gitignorePath`, `name`, `private` to the rest of the system?**
  _203 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `svelte-core-bestpractices/SKILL.md` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `LessonRunner.svelte` be split into smaller, more focused modules?**
  _Cohesion score 0.04964539007092199 - nodes in this community are weakly interconnected._