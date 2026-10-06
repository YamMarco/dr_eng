// MCP endpoint for AI content editing - see $lib/server/mcp.ts.
import { mcpHandler } from '$lib/server/mcp';
import type { RequestHandler } from './$types';

const handle: RequestHandler = ({ request }) => mcpHandler.fetch(request);

export const GET = handle;
export const POST = handle;
export const DELETE = handle;
