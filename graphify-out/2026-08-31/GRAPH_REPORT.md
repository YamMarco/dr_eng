# Graph Report - dr_eng  (2026-08-31)

## Corpus Check
- 91 files · ~40,116 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 422 nodes · 518 edges · 37 communities (23 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `067d1629`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- curriculum.ts
- lessonProgress.svelte.ts
- $effect Rune
- What You Must Do When Invoked
- sectionContent.ts
- compilerOptions
- Bagrut English Prep App (Mission)
- graphify reference: extra exports and benchmark
- schema.md
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
- book/+page.svelte
- types.ts
- index.svelte.ts
- ExamSession

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
10. `LessonProgressStore` - 5 edges

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

## Communities (37 total, 14 thin omitted)

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
Nodes (18): @capacitor/core, dependencies, @capacitor/core, @lucide/svelte, name, private, scripts, build (+10 more)

### Community 4 - "curriculum.ts"
Cohesion: 0.11
Nodes (16): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+8 more)

### Community 5 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (4): lessonProgress, LessonProgressStore, persist(), ProgressMap

### Community 6 - "$effect Rune"
Cohesion: 0.12
Nodes (17): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Function Bindings (bind:property={get, set}), $inspect Rune, $inspect.trace Rune, $inspect(...).with Method (+9 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "sectionContent.ts"
Cohesion: 0.08
Nodes (25): LessonScreen, McqScreen, archivedEyeCatchersSection, archivedMockSection2, archivedMockSection3, contentBySection, Lesson, SectionContent (+17 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "Bagrut English Prep App (Mission)"
Cohesion: 0.25
Nodes (8): Bagrut English Prep App (Mission), Brief Assistant Persona, Commit After Every Medium+ Change, Separation of Concerns Principle, YAGNI Principle, RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "schema.md"
Cohesion: 0.25
Nodes (7): guide, lesson 1, lesson 1, lesson 1, section 2, section 3, section 4

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

### Community 33 - "book/+page.svelte"
Cohesion: 0.15
Nodes (3): canGoPrev, canSubmit, formattedDate

### Community 34 - "types.ts"
Cohesion: 0.05
Nodes (29): screenComponents, KEY, LessonScore, recordAnswer(), KEY, LessonSession, MarkAllScreen, MarkWordScreen (+21 more)

### Community 35 - "index.svelte.ts"
Cohesion: 0.08
Nodes (10): DebugStore, dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he (+2 more)

## Knowledge Gaps
- **192 isolated node(s):** `SectionIntro`, `archivedEyeCatchersSection`, `archivedMockSection2`, `archivedMockSection3`, `vocabFoundationSection` (+187 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `ExamSession` connect `ExamSession` to `curriculum.ts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `SectionIntro`, `archivedEyeCatchersSection`, `archivedMockSection2` to the rest of the system?**
  _192 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._