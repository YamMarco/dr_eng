# Graph Report - dr_eng  (2026-08-27)

## Corpus Check
<<<<<<< Updated upstream
- 76 files · ~26,095 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 335 nodes · 375 edges · 34 communities (20 shown, 14 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cc715b89`
=======
- 62 files · ~22,894 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 302 nodes · 323 edges · 33 communities (19 shown, 14 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `89648101`
>>>>>>> Stashed changes
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- index.svelte.ts
- curriculum.ts
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
- types.ts

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

## Hyperedges (group relationships)
- **Svelte AI-Tools Toolchain (svelte-code-writer, svelte-core-bestpractices, svelte-file-editor)** — front_github_skills_svelte_code_writer_skill_svelte_code_writer, front_github_skills_svelte_core_bestpractices_skill_svelte_core_bestpractices, front_github_agents_svelte_file_editor_agent_svelte_file_editor, front_readme_project_setup [EXTRACTED 1.00]
- **Svelte 5 Runes & Reactivity Best Practices Guidance** — front_github_skills_svelte_core_bestpractices_skill_svelte_core_bestpractices, front_github_skills_svelte_core_bestpractices_references_attach_attachments, front_github_skills_svelte_core_bestpractices_references_bind_function_bindings, front_github_skills_svelte_core_bestpractices_references_each_keyed_each_blocks, front_github_skills_svelte_core_bestpractices_references_hydratable_hydratable, front_github_skills_svelte_core_bestpractices_references_inspect_inspect, front_github_skills_svelte_core_bestpractices_references_render_render_tag, front_github_skills_svelte_core_bestpractices_references_snippet_snippets, front_github_skills_svelte_core_bestpractices_references_svelte_reactivity_createsubscriber [INFERRED 0.85]
- **Svelte MCP Tool Trio (list-sections, get-documentation, svelte-autofixer)** — front_github_agents_svelte_file_editor_agent_list_sections, front_github_agents_svelte_file_editor_agent_get_documentation, front_github_agents_svelte_file_editor_agent_svelte_autofixer, front_agents_list_sections, front_agents_get_documentation, front_agents_svelte_autofixer, front_github_skills_svelte_code_writer_skill_list_sections, front_github_skills_svelte_code_writer_skill_get_documentation, front_github_skills_svelte_code_writer_skill_svelte_autofixer [INFERRED 0.85]

## Communities (34 total, 14 thin omitted)

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
<<<<<<< Updated upstream
Cohesion: 0.12
Nodes (7): dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he

### Community 5 - "curriculum.ts"
Cohesion: 0.10
Nodes (17): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+9 more)
=======
Cohesion: 0.07
Nodes (13): EXAM_MINUTES, exam, EXAM_SECONDS, WARNING_SECONDS, dictionaries, I18n, Language, ar (+5 more)

### Community 5 - "curriculum.ts"
Cohesion: 0.13
Nodes (14): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+6 more)
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
Cohesion: 0.33
Nodes (5): graphify, mission, persona, skills, workflow

### Community 33 - "types.ts"
Cohesion: 0.07
Nodes (20): screenComponents, KEY, LessonSession, LessonScreen, MarkWordScreen, McqScreen, PrefaceScreen, QuestionPreviewScreen (+12 more)

## Knowledge Gaps
- **161 isolated node(s):** `mission`, `workflow`, `persona`, `graphify`, `Language` (+156 more)
=======
Cohesion: 0.40
Nodes (4): graphify, mission, persona, skills

## Knowledge Gaps
- **143 isolated node(s):** `mission`, `persona`, `graphify`, `Language`, `dictionaries` (+138 more)
>>>>>>> Stashed changes
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
<<<<<<< Updated upstream
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `ExamSession` connect `ExamSession` to `curriculum.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `mission`, `workflow`, `persona` to the rest of the system?**
  _161 weakly-connected nodes found - possible documentation gaps or missing edges._
=======
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `ExamSession` connect `ExamSession` to `index.svelte.ts`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `mission`, `persona`, `graphify` to the rest of the system?**
  _143 weakly-connected nodes found - possible documentation gaps or missing edges._
>>>>>>> Stashed changes
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._