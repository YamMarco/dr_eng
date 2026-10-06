# MCP handoff - screen editing for outside editors

State as of 2026-10-06, deploy `f24614f`, live at https://dr-eng-five.vercel.app/mcp

## What it is

A read-only MCP endpoint inside the app. Anyone with Claude (or another MCP
client) can connect to it and get the project's rule book, so screens they
create or edit fit the screen schema and the house rules. The endpoint never
writes anything: edited JSON goes back into the app through the editor.

Workflow:
1. In `/edit`, open a screen and press **JSON**; copy it (or start from nothing to create new screens).
2. In Claude, pick the prompt **"יצירה ועריכה של מסכים"** (or just paste the JSON with an instruction).
3. Claude reads the rules, writes the screens, validates them, and returns one JSON block per screen.
4. Paste each block into a screen's JSON panel and press **החל**. Invalid JSON is refused with Hebrew reasons.

## Connecting (once per person)

Claude → Settings → Connectors → Add custom connector → URL
`https://dr-eng-five.vercel.app/mcp`. No login. Needs a paid Claude plan.

## What the endpoint offers

| name | kind | what it does |
| --- | --- | --- |
| `get_editing_guide` | tool | Reads `docs/ai-editing.md` and every file it links, **live from GitHub `main`** |
| `read_repo_file` | tool | Reads one file live; only under `docs/`, `QC_report/`, `front/src/lib/` |
| `get_screen_schema` | tool | Lists the screen types, or one type's JSON Schema (from the deployed code) |
| `validate_screens` | tool | One screen or an array; same checks as the editor (deployed code) |
| `edit_screens` | prompt | "יצירה ועריכה של מסכים": instruction + optional existing JSON |

Server instructions tell the client to read the guide first, validate, and
return one JSON block per screen.

## How the rules stay current

- **Rules (docs and code files):** read from GitHub `main` on every call. Edit
  [ai-editing.md](ai-editing.md) or any file it links and push - the next call
  sees it. No deploy needed. To add or remove a rule source, add or remove a
  link under "Always read" in `ai-editing.md` (relative to that file, inside
  `docs/`, `QC_report/` or `front/src/lib/`).
- **Screen shapes:** defined once in
  [schema.ts](../front/src/lib/lesson-screens/schema.ts) (zod, field docs in
  `.describe()`). The app's TS types (`types.ts`), the editor's checks and the
  endpoint all derive from it. A new screen type goes there first (then the
  steps in [lesson-structure.md](lesson-structure.md) → "Adding a screen type").
- **Validation** runs the deployed code, so it follows the last deploy (Vercel
  redeploys on every push to `main`, ~1-2 min). Each validation reply ends
  with `(validator from deploy <sha>)`.

## Files

| file | role |
| --- | --- |
| `docs/ai-editing.md` | the rule book entry point - owned by people, edit freely |
| `front/src/lib/lesson-screens/schema.ts` | screen shapes + field docs (source of truth) |
| `front/src/lib/lesson-screens/types.ts` | TS types derived from the schema |
| `front/src/lib/lesson-screens/screenChecks.ts` | one validator: schema + index ranges, duplicate options, dash rule (Hebrew messages) |
| `front/src/lib/content-edit/validate.ts` | editor issue list, uses `screenChecks` |
| `front/src/lib/content-edit/SlideStage.svelte` | editor JSON panel; paste is checked by `screenChecks` |
| `front/src/lib/server/mcp.ts` | the MCP server (tools, prompt, instructions) |
| `front/src/lib/server/repoFiles.ts` | live GitHub reader with the path allowlist |
| `front/src/routes/mcp/+server.ts` | the `/mcp` route |

Library: `@modelcontextprotocol/server` v2 (`createMcpHandler`, stateless per
request - fits Vercel serverless). Not `mcp-handler` (that one needs Next.js).

## Testing

- Types: `npm run check` in `front/`.
- Endpoint: connect with `@modelcontextprotocol/client` (`StreamableHTTPClientTransport`
  to `.../mcp`), list tools, call `validate_screens` with a good and a bad
  screen, call `get_editing_guide` and check every linked file came back.
- All 1045 existing lesson and exam screens pass the schema (checked when the
  schema was introduced) - rerun that if the schema changes shape.

## Known issues / next steps

- **`GITHUB_TOKEN` is rejected (401)** - at least the one in `front/.env.local`.
  The endpoint falls back to public raw GitHub files (can lag up to ~5 min).
  If Vercel has the same token, `/edit`'s save-to-GitHub in production is likely
  broken too. Replace the token in `.env.local` and in Vercel.
- **One real content error** the new checks found: an em dash `—` in node
  `c-a45c17de` (`front/src/lib/content/c/c-3.ts`, ~line 1501). One-character fix.
- The editor's JSON panel takes one screen at a time; several screens from
  Claude are pasted one by one (add screens with ＋ first). A "paste several"
  action would be the next step if this gets tedious.
- The conversion kit (`docs/study-plan-conversion/`) still has a hand-written
  `screen-types.md` that has drifted; its prompt now tells Claude to prefer the
  connector's live list.
- No auth on `/mcp` - fine while it is read-only. Add a token check before any
  tool that writes.
