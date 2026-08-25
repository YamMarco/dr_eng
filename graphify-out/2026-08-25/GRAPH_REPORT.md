# Graph Report - dr_eng  (2026-08-25)

## Corpus Check
- Corpus is ~11,942 words - fits in a single context window. You may not need a graph.

## Summary
- 241 nodes · 258 edges · 27 communities (17 shown, 10 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.9)
- Token cost: 0 input · 129,179 output

## Community Hubs (Navigation)
- Frontend Tooling & Linting
- Svelte MCP Toolchain
- Svelte Async & Snippets
- Package Manifest & Scripts
- Exam Timer & Session
- Curriculum Data Model
- Svelte Runes & Attachments
- Word Bank Exercise
- Section/Module Route Pages
- TypeScript Config
- Project Mission & Principles
- Exam Session Class Methods
- ESLint Config
- Keyed Each Blocks Guidance
- Prettier Config
- App Type Declarations
- Favicon / Svelte Logo
- Settled API
- Context API
- CSS Custom Properties Styling
- Global Child Styling

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 11 edges
2. `scripts` - 9 edges
3. `Snippet Blocks ({#snippet})` - 8 edges
4. `ExamSession` - 7 edges
5. `$effect Rune` - 6 edges
6. `Svelte MCP Server (Project Config)` - 6 edges
7. `Bagrut English Prep App (Mission)` - 5 edges
8. `Svelte MCP Server` - 5 edges
9. `Attachments ({@attach})` - 5 edges
10. `@sveltejs/mcp CLI` - 4 edges

## Surprising Connections (you probably didn't know these)
- `RTL Hebrew Document Layout` --semantically_similar_to--> `Bagrut English Prep App (Mission)`  [INFERRED] [semantically similar]
  front/src/app.html → agents.md
- `Svelte MCP Server (Project Config)` --semantically_similar_to--> `Svelte MCP Server`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `list-sections Tool` --semantically_similar_to--> `list-sections Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `list-sections Tool` --semantically_similar_to--> `list-sections Command`  [INFERRED] [semantically similar]
  front/.github/agents/svelte-file-editor.agent.md → front/.github/skills/svelte-code-writer/SKILL.md
- `get-documentation Tool` --semantically_similar_to--> `get-documentation Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Svelte 5 Runes & Reactivity Best Practices Guidance** — front_github_skills_svelte_core_bestpractices_skill_svelte_core_bestpractices, front_github_skills_svelte_core_bestpractices_references_attach_attachments, front_github_skills_svelte_core_bestpractices_references_bind_function_bindings, front_github_skills_svelte_core_bestpractices_references_each_keyed_each_blocks, front_github_skills_svelte_core_bestpractices_references_hydratable_hydratable, front_github_skills_svelte_core_bestpractices_references_inspect_inspect, front_github_skills_svelte_core_bestpractices_references_render_render_tag, front_github_skills_svelte_core_bestpractices_references_snippet_snippets, front_github_skills_svelte_core_bestpractices_references_svelte_reactivity_createsubscriber [INFERRED 0.85]
- **Svelte AI-Tools Toolchain (svelte-code-writer, svelte-core-bestpractices, svelte-file-editor)** — front_github_skills_svelte_code_writer_skill_svelte_code_writer, front_github_skills_svelte_core_bestpractices_skill_svelte_core_bestpractices, front_github_agents_svelte_file_editor_agent_svelte_file_editor, front_readme_project_setup [EXTRACTED 1.00]
- **Svelte MCP Tool Trio (list-sections, get-documentation, svelte-autofixer)** — front_github_agents_svelte_file_editor_agent_list_sections, front_github_agents_svelte_file_editor_agent_get_documentation, front_github_agents_svelte_file_editor_agent_svelte_autofixer, front_agents_list_sections, front_agents_get_documentation, front_agents_svelte_autofixer, front_github_skills_svelte_code_writer_skill_list_sections, front_github_skills_svelte_code_writer_skill_get_documentation, front_github_skills_svelte_code_writer_skill_svelte_autofixer [INFERRED 0.85]

## Communities (27 total, 10 thin omitted)

### Community 0 - "Frontend Tooling & Linting"
Cohesion: 0.04
Nodes (45): @capacitor/cli, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint (+37 more)

### Community 1 - "Svelte MCP Toolchain"
Cohesion: 0.14
Nodes (20): get-documentation Tool, list-sections Tool, playground-link Tool, Project Configuration (TS, npm, prettier, eslint, tailwindcss, ai-tools), svelte-autofixer Tool, Svelte MCP Server (Project Config), get-documentation Tool, list-sections Tool (+12 more)

### Community 2 - "Svelte Async & Snippets"
Cohesion: 0.11
Nodes (19): Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet, CSP nonce/hash Support, devalue Serialization Library, hydratable API, SvelteKit Remote Functions (+11 more)

### Community 3 - "Package Manifest & Scripts"
Cohesion: 0.11
Nodes (18): @capacitor/core, dependencies, @capacitor/core, lucide, name, private, scripts, build (+10 more)

### Community 4 - "Exam Timer & Session"
Cohesion: 0.13
Nodes (7): EXAM_MINUTES, exam, EXAM_SECONDS, WARNING_SECONDS, ./$types, ./$types, ./$types

### Community 5 - "Curriculum Data Model"
Cohesion: 0.14
Nodes (14): CurriculumModule, CurriculumSection, getModule(), getSection(), getUnitGroup(), modules, partLexical, partProduction (+6 more)

### Community 6 - "Svelte Runes & Attachments"
Cohesion: 0.12
Nodes (17): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Function Bindings (bind:property={get, set}), $inspect Rune, $inspect.trace Rune, $inspect(...).with Method (+9 more)

### Community 7 - "Word Bank Exercise"
Cohesion: 0.16
Nodes (6): correctCount, getWordSet(), WordBankSentence, WordBankSet, wordSets, load()

### Community 8 - "Section/Module Route Pages"
Cohesion: 0.14
Nodes (5): ./$types, ./$types, ./$types, ./$types, ./$types

### Community 9 - "TypeScript Config"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "Project Mission & Principles"
Cohesion: 0.25
Nodes (8): Bagrut English Prep App (Mission), Brief Assistant Persona, Commit After Every Medium+ Change, Separation of Concerns Principle, YAGNI Principle, RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

## Knowledge Gaps
- **96 isolated node(s):** `gitignorePath`, `name`, `private`, `version`, `type` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Frontend Tooling & Linting` to `Package Manifest & Scripts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **What connects `gitignorePath`, `name`, `private` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Frontend Tooling & Linting` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Toolchain` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Svelte Async & Snippets` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Package Manifest & Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Exam Timer & Session` be split into smaller, more focused modules?**
  _Cohesion score 0.1286549707602339 - nodes in this community are weakly interconnected._