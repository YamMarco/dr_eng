# Graph Report - dr_eng  (2026-08-28)

## Corpus Check
- 84 files · ~28,976 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 384 nodes · 449 edges · 38 communities (23 shown, 15 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a669ce53`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- index.svelte.ts
- [lessonId]/+page.svelte
- $effect Rune
- What You Must Do When Invoked
- lessons.ts
- compilerOptions
- Bagrut English Prep App (Mission)
- graphify reference: extra exports and benchmark
- ExamSession
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
- CLAUDE.md
- .claude/CLAUDE.md
- extraction-spec.md
- registry.ts
- score.svelte.ts
- types.ts
- LessonRunner.svelte
- lessonContent.ts

## God Nodes (most connected - your core abstractions)
1. `What You Must Do When Invoked` - 12 edges
2. `compilerOptions` - 11 edges
3. `/graphify` - 10 edges
4. `scripts` - 9 edges
5. `graphify reference: extra exports and benchmark` - 8 edges
6. `Snippet Blocks ({#snippet})` - 8 edges
7. `ExamSession` - 7 edges
8. `Svelte MCP Server (Project Config)` - 6 edges
9. `$effect Rune` - 6 edges
10. `graphify reference: query, path, explain` - 5 edges

## Surprising Connections (you probably didn't know these)
- `RTL Hebrew Document Layout` --semantically_similar_to--> `Bagrut English Prep App (Mission)`  [INFERRED] [semantically similar]
  front/src/app.html → agents.md
- `get-documentation Tool` --semantically_similar_to--> `get-documentation Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `list-sections Tool` --semantically_similar_to--> `list-sections Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `svelte-autofixer Tool` --semantically_similar_to--> `svelte-autofixer Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `Svelte MCP Server (Project Config)` --semantically_similar_to--> `Svelte MCP Server`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md

## Import Cycles
- None detected.

## Communities (38 total, 15 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.04
Nodes (45): @capacitor/cli, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint (+37 more)

### Community 1 - "Svelte MCP Server (Project Config)"
Cohesion: 0.14
Nodes (20): get-documentation Tool, list-sections Tool, playground-link Tool, Project Configuration (TS, npm, prettier, eslint, tailwindcss, ai-tools), svelte-autofixer Tool, Svelte MCP Server (Project Config), get-documentation Tool, list-sections Tool (+12 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.11
Nodes (19): Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet, CSP nonce/hash Support, devalue Serialization Library, hydratable API, SvelteKit Remote Functions (+11 more)

### Community 3 - "scripts"
Cohesion: 0.11
Nodes (18): @capacitor/core, dependencies, @capacitor/core, lucide, name, private, scripts, build (+10 more)

### Community 4 - "index.svelte.ts"
Cohesion: 0.07
Nodes (23): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+15 more)

### Community 5 - "[lessonId]/+page.svelte"
Cohesion: 0.08
Nodes (9): DebugStore, lessonProgress, LessonProgressStore, persist(), ProgressMap, activePart, hasNextPart, lessonKey (+1 more)

### Community 6 - "$effect Rune"
Cohesion: 0.12
Nodes (17): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Function Bindings (bind:property={get, set}), $inspect Rune, $inspect.trace Rune, $inspect(...).with Method (+9 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "lessons.ts"
Cohesion: 0.31
Nodes (6): getLesson(), getLessons(), Lesson, lessonsByModule, moduleCLessons, load()

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "Bagrut English Prep App (Mission)"
Cohesion: 0.25
Nodes (8): Bagrut English Prep App (Mission), Brief Assistant Persona, Commit After Every Medium+ Change, Separation of Concerns Principle, YAGNI Principle, RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

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

### Community 30 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): graphify, mission, persona, skills, workflow

### Community 33 - "registry.ts"
Cohesion: 0.16
Nodes (3): screenComponents, KEY, LessonSession

### Community 35 - "types.ts"
Cohesion: 0.14
Nodes (12): MarkWordScreen, McqScreen, PassageQuizQuestion, PassageQuizScreen, PrefaceScreen, QuestionPreviewScreen, StepsScreen, SummaryScreen (+4 more)

### Community 36 - "LessonRunner.svelte"
Cohesion: 0.17
Nodes (9): currentScreen, footerDisabled, footerLabel, isLastScreen, justFinished, passed, primaryLabel, ScreenComponent (+1 more)

### Community 37 - "lessonContent.ts"
Cohesion: 0.25
Nodes (6): LessonScreen, contentByLesson, LessonContent, LessonIntro, LessonPart, moduleCLesson1

## Knowledge Gaps
- **180 isolated node(s):** `mission`, `workflow`, `persona`, `graphify`, `screenIndex` (+175 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `ExamSession` connect `ExamSession` to `index.svelte.ts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `mission`, `workflow`, `persona` to the rest of the system?**
  _180 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._