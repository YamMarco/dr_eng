// The /mcp endpoint: lets an AI (e.g. Claude on the web, added as a custom
// connector) edit lesson-screen JSON by the project's own rules.
// - Rules are read LIVE from GitHub main on every call: docs/ai-editing.md and
//   every file it links. Edit those files to change what the AI follows.
// - Validation runs this deployment's code (schema.ts + screenChecks.ts), so it
//   is as fresh as the last deploy (Vercel redeploys on every push to main).
// Read-only: nothing here writes anywhere.
import { createMcpHandler, McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';
import { env } from '$env/dynamic/private';
import { screenSchemas } from '$lib/lesson-screens/schema';
import { checkScreen } from '$lib/lesson-screens/screenChecks';
import { isReadable, readRepoFile } from './repoFiles';

const ENTRY = 'docs/ai-editing.md';

const INSTRUCTIONS = `This server holds the editing rules for the dr-eng app (Hebrew-speaking students preparing for the English Bagrut).
When asked to edit or create a lesson screen (JSON):
1. Call get_editing_guide first - it returns the current rules and the screen schema, live from the repo.
2. Apply the user's instruction to the screen, following those rules.
3. Call validate_screen on your result and fix every error until it passes.
4. Reply with the final screen as one \`\`\`json block, plus one short Hebrew line saying what changed.`;

const text = (t: string) => ({ content: [{ type: 'text' as const, text: t }] });

/** Every repo-path link in a markdown file (`[label](path)`), readable ones only. */
function linkedPaths(markdown: string): string[] {
	const paths = [...markdown.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
	return [...new Set(paths.filter(isReadable))];
}

async function editingGuide(): Promise<string> {
	const entry = await readRepoFile(ENTRY);
	const files = await Promise.all(
		linkedPaths(entry).map(async (path) => {
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

function buildServer(): McpServer {
	const server = new McpServer(
		{ name: 'dr-eng-content', version: '1.0.0' },
		{ instructions: INSTRUCTIONS }
	);
	const readOnly = { readOnlyHint: true, openWorldHint: false };

	server.registerTool(
		'get_editing_guide',
		{
			title: 'Get the editing rules',
			description: `Returns the current editing rules: ${ENTRY} and every file it links (screen schema, writing rules, voice guide...), read live from the repo. Call this before editing any screen.`,
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
		'validate_screen',
		{
			title: 'Validate a screen',
			description:
				'Checks one lesson screen (JSON text) exactly like the app editor does: schema (fields/types), index ranges, duplicate options, the dash rule. Returns ok or the list of problems (Hebrew). Run before returning any screen.',
			inputSchema: z.object({ screen_json: z.string().describe('The screen as JSON text') }),
			annotations: readOnly
		},
		async ({ screen_json }) => {
			const result = checkScreen(screen_json);
			const deploy = env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'local';
			const lines = result.problems.map((p) => `- [${p.severity}] ${p.message}`);
			return text(
				[
					result.ok ? 'OK - valid, the editor will accept it.' : 'INVALID - fix these errors:',
					...lines,
					`(validator from deploy ${deploy})`
				].join('\n')
			);
		}
	);

	server.registerPrompt(
		'edit_screen',
		{
			title: 'ערוך מסך',
			description: 'Edit one lesson screen by the project rules',
			argsSchema: z.object({
				instruction: z.string().describe('What to change (Hebrew or English)'),
				screen_json: z.string().describe('The screen JSON copied from the editor')
			})
		},
		async ({ instruction, screen_json }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `${INSTRUCTIONS}\n\nInstruction: ${instruction}\n\nScreen:\n\`\`\`json\n${screen_json}\n\`\`\``
					}
				}
			]
		})
	);

	return server;
}

export const mcpHandler = createMcpHandler(buildServer);
