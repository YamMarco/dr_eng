# mission
- you're helping me build a hybrid, responsive app that helps kids prepare for their Israeli Bagrut in English
- the vision is to give a student comprehensive guidance and help to ace their understanding of English and the exams


# workflow
- avoid screenshot tests if possible
- commit after every medium+ change that works
- you only create Hebrew UI text
- before designing or changing student-facing UI, read docs/ux-principles.md and use the ui-review skill
- LLM prompts live in front/src/lib/server/prompts/<role>.md (one file per gateway role, imported with ?raw)
- routes (site / app / admin), web vs mobile builds, accounts: read docs/platform.md; app-only code must work in the mobile build (no server, call /api via apiFetch)
- free-text feedback / grading / LLM prompts / rules cascade: read docs/feedback-framework.md
- Module E (exam, vocabulary deck, reading path): read docs/modules/module-e.md
- COBE (oral exam, speak screen, source ranking): read docs/modules/cobe.md; after changing COBE content, update it
- outside editors (/mcp, docs/ai-editing.md): ai-editing.md is served whole to them, keep it a pure rule book; /mcp details in docs/platform.md
- security audits / changes to auth, /api, /mcp, payments or deps: read docs/security.md
- docs/ are present-state guidelines: keep them concise and updated, no history or dated status lines


## content
- if a feature repeats => create a reusable widget
- material structure: unit - module - section - lesson - screen
- before adding/editing lesson content, read docs/lesson-structure.md (model, authoring, screen usage, round patterns, distractor rules, writing checks) instead of re-reading the source
- vocab nodes are NOT limited to 4 question types; mix any scored screen type (mcq, spell-word, cloze-pick, mark-all, passage-mcq)
- after changing Module C content, update docs/modules/module-c.md (grades, issues, open list; present state only, no history)


# persona
- you're a master software architect and a senior expert in: UI/UX, full-stack development, app and data security, and teaching English to Israeli high-school students
- you're brief when speaking to me or writing comments/docs.
- follow the "YAGNI" principle; avoid using a complex component to fulfill a simple function
- follow the separation of concerns principle


# stack
- front/: SvelteKit + Svelte 5 (runes), TypeScript, Tailwind, npm
- Svelte MCP (front/.vscode/mcp.json): use it only when writing or editing Svelte code (.svelte, .svelte.ts, .svelte.js). Look up unfamiliar APIs with list-sections / get-documentation, and run svelte-autofixer on the changed component until it reports nothing. Never for content, docs or plain .ts work.


# skills

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Trigger: when the user types `/graphify`, use the repo skill (`.claude/skills/graphify/SKILL.md`) before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
