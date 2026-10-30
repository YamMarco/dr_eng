# Handoff: `/mcp` endpoint (removed)

A read-only MCP server that let outside editors (Claude on the web, added as a custom connector) write lesson-screen JSON that follows the schema and house rules, then paste it into `/edit` → a screen's **JSON** panel → **החל**. Removed to cut scope (it was also an unauthenticated public endpoint).

## Restore

Last commit that had it: `cc417c7`.

```sh
git checkout cc417c7 -- front/src/lib/server/mcp.ts front/src/lib/server/repoFiles.ts front/src/routes/mcp/+server.ts docs/ai-editing.md
cd front && npm i @modelcontextprotocol/server
```

Then add back the `/mcp` notes to `docs/platform.md` (routes table + a section), `docs/security.md` (exploit class, checklist item, entry points) and the `AGENTS.md` workflow line.

## How it worked

- `server/mcp.ts`: `createMcpHandler` from `@modelcontextprotocol/server` v2, stateless per request. `routes/mcp/+server.ts` passes GET/POST/DELETE to it.
- Tools: `get_editing_guide` (`docs/ai-editing.md` plus every file it links), `read_repo_file` (only under `docs/`, `QC_report/`, `front/src/lib/`), `get_screen_schema` (`z.toJSONSchema` of `screenSchemas`), `validate_screens` (`checkScreen`). Prompt: `edit_screens`.
- Rules came live from GitHub `main` (`server/repoFiles.ts`: the API with `GITHUB_TOKEN`, else raw.githubusercontent, up to ~5 min stale), so editing the docs changed the rules without a deploy. Validation ran the deployed code.
- `docs/ai-editing.md` was the rule book, served whole: keep it free of dev notes.

## Before reviving

- Add auth (a per-editor token, or OAuth 2.1 + PKCE), a body size limit and a rate limit. It had none.
- Check new CVEs for `@modelcontextprotocol/*`.
