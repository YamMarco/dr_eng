// The /mcp endpoint: a live rule book for third-party editors (e.g. Claude on
// the web, added as a custom connector) creating or editing lesson-screen JSON
// without breaking the screen schema.
// - Rules are read LIVE from GitHub main on every call: docs/ai-editing.md and
//   every file it links. Edit those files to change what editors follow.
// - Validation runs this deployment's code (schema.ts + screenChecks.ts), so it
//   is as fresh as the last deploy (Vercel redeploys on every push to main).
// Read-only: nothing here writes anywhere.
import { posix } from 'node:path';
import { createMcpHandler, McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';
import { env } from '$env/dynamic/private';
import { screenSchemas } from '$lib/lesson-screens/schema';
import { checkScreen } from '$lib/lesson-screens/screenChecks';
import { isReadable, readRepoFile } from './repoFiles';

const ENTRY = 'docs/ai-editing.md';
const FENCE = '```';

const INSTRUCTIONS = `This server is the rule book for the dr-eng app (Hebrew-speaking students preparing for the English Bagrut).
When asked to create or edit lesson screens (JSON) - one or several:
1. Call get_editing_guide first - it returns the current rules and the screen schema, live from the repo.
2. Write or change the screens following those rules.
3. Call validate_screens on your result and fix every error until it passes.
4. Reply with each final screen as its own ${FENCE}json block (one screen object each, ready to paste into the editor's JSON panel), plus one short Hebrew line per screen saying what it is or what changed.`;

const text = (t: string) => ({ content: [{ type: 'text' as const, text: t }] });

/** Every file link in a markdown file (`[label](path)`), resolved relative to
 *  that file (as VS Code and GitHub do) to a repo-root path; readable ones only. */
function linkedPaths(markdown: string, from: string): string[] {
	const paths = [...markdown.matchAll(/\]\(([^)\s#]+)(?:#[^)]*)?\)/g)]
		.map((m) => m[1])
		.filter((link) => !/^[a-z]+:/i.test(link))
		.map((link) => posix.normalize(posix.join(posix.dirname(from), link)));
	return [...new Set(paths.filter(isReadable))];
}

async function editingGuide(): Promise<string> {
	const entry = await readRepoFile(ENTRY);
	const files = await Promise.all(
		linkedPaths(entry, ENTRY).map(async (path) => {
			try {
				return `=== ${path} ===\n${await readRepoFile(path)}`;
			} catch (e) {
				return `=== ${path} ===\n(could not read: ${(e as Error).message})`;
			}
		})
	);
	return [
		`Editing guide - read live from GitHub at ${new Date().toISOString()}.`,
		`=== ${ENTRY} ===\n${entry}`,
		...files
	].join('\n\n');
}

function validationReport(json: string): string {
	let parsed: unknown;
	try {
		parsed = JSON.parse(json);
	} catch (e) {
		return `INVALID - not valid JSON: ${(e as Error).message}`;
	}
	const screens = Array.isArray(parsed) ? parsed : [parsed];
	const results = screens.map((screen) => checkScreen(screen));
	const report = results.map((r, i) => {
		const of = screens.length > 1 ? ` of ${screens.length}` : '';
		const head = `Screen ${i + 1}${of}: ${r.ok ? 'OK' : 'INVALID'}`;
		return [head, ...r.problems.map((p) => `  - [${p.severity}] ${p.message}`)].join('\n');
	});
	const deploy = env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'local';
	return [
		results.every((r) => r.ok) ? 'ALL OK - the editor will accept these.' : 'Fix the errors below:',
		...report,
		`(validator from deploy ${deploy})`
	].join('\n');
}

function buildServer(): McpServer {
	const server = new McpServer(
		{ name: 'dr-eng-content', version: '1.1.0' },
		{ instructions: INSTRUCTIONS }
	);
	const readOnly = { readOnlyHint: true, openWorldHint: false };

	server.registerTool(
		'get_editing_guide',
		{
			title: 'Get the rule book',
			description: `Returns the current rules for creating and editing screens: ${ENTRY} and every file it links (screen schema, writing rules, voice guide...), read live from the repo. Call this before writing any screen.`,
			annotations: readOnly
		},
		async () => text(await editingGuide())
	);

	server.registerTool(
		'read_repo_file',
		{
			title: 'Read a repo file',
			description:
				'Reads one file live from the repo, e.g. a doc linked in the guide or an existing lesson for examples (front/src/lib/content/c/c-2.ts). Paths are repo-root-relative, under docs/, QC_report/ or front/src/lib/.',
			inputSchema: z.object({ path: z.string().describe('e.g. "docs/lesson-structure.md"') }),
			annotations: readOnly
		},
		async ({ path }) => {
			try {
				return text(await readRepoFile(path));
			} catch (e) {
				return { ...text((e as Error).message), isError: true };
			}
		}
	);

	server.registerTool(
		'get_screen_schema',
		{
			title: 'Get a screen type schema',
			description:
				"Without `type`: lists every screen type this deployment knows, with a one-line description. With `type`: that type's JSON Schema (fields, which are required, field docs).",
			inputSchema: z.object({ type: z.string().optional().describe('e.g. "mcq"') }),
			annotations: readOnly
		},
		async ({ type }) => {
			if (!type)
				return text(
					Object.entries(screenSchemas)
						.map(([name, schema]) => `- ${name}: ${schema.description ?? ''}`)
						.join('\n')
				);
			const schema = screenSchemas[type as keyof typeof screenSchemas];
			if (!schema)
				return {
					...text(`Unknown screen type "${type}". Known: ${Object.keys(screenSchemas).join(', ')}`),
					isError: true
				};
			return text(JSON.stringify(z.toJSONSchema(schema), null, 2));
		}
	);

	server.registerTool(
		'validate_screens',
		{
			title: 'Validate screens',
			description:
				'Checks lesson screens exactly like the app editor does: schema (types, fields), index ranges, duplicate options, the dash rule. Pass one screen object or an array of screens, as JSON text. Returns OK or the problems (Hebrew) per screen. Run before handing over any screen.',
			inputSchema: z.object({
				json: z.string().describe('One screen object, or an array of screen objects, as JSON text')
			}),
			annotations: readOnly
		},
		async ({ json }) => text(validationReport(json))
	);

	server.registerPrompt(
		'edit_screens',
		{
			title: 'יצירה ועריכה של מסכים',
			description: 'Create or edit lesson screens by the project rules',
			argsSchema: z.object({
				instruction: z.string().describe('What to create or change (Hebrew or English)'),
				screens_json: z
					.string()
					.optional()
					.describe('Existing screen JSON copied from the editor (one or several), if editing')
			})
		},
		async ({ instruction, screens_json }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: [
							INSTRUCTIONS,
							`Instruction: ${instruction}`,
							screens_json ? `Screens:\n${FENCE}json\n${screens_json}\n${FENCE}` : ''
						]
							.filter(Boolean)
							.join('\n\n')
					}
				}
			]
		})
	);

	return server;
}

export const mcpHandler = createMcpHandler(buildServer);
