// Reads repo files live from GitHub (the branch tip, not this deployment), so
// the /mcp endpoint always serves the latest docs and code. With GITHUB_TOKEN
// set it uses the API (fresh, 5000 req/h); without it, raw.githubusercontent
// (the repo is public; that CDN may lag up to ~5 minutes).
import { env } from '$env/dynamic/private';

/** Only these repo paths can be read - docs and the content/screen code, never config. */
const READABLE = ['docs/', 'QC_report/', 'front/src/lib/'];

const owner = () => env.GITHUB_OWNER || 'YamMarco';
const repo = () => env.GITHUB_REPO || 'dr_eng';
const branch = () => env.GITHUB_BRANCH || 'main';

export function isReadable(path: string): boolean {
	return !path.includes('..') && READABLE.some((prefix) => path.startsWith(prefix));
}

/** `path` is repo-root-relative, e.g. "docs/lesson-structure.md". */
export async function readRepoFile(path: string): Promise<string> {
	if (!isReadable(path)) throw new Error(`Not readable: ${path} (allowed: ${READABLE.join(', ')})`);
	if (env.GITHUB_TOKEN) {
		const api = await fetch(
			`https://api.github.com/repos/${owner()}/${repo()}/contents/${encodeURI(path)}?ref=${branch()}`,
			{
				headers: {
					Authorization: `Bearer ${env.GITHUB_TOKEN}`,
					Accept: 'application/vnd.github.raw+json',
					'X-GitHub-Api-Version': '2022-11-28'
				}
			}
		);
		if (api.ok) return api.text();
		if (api.status === 404) throw new Error(`Not found on ${branch()}: ${path}`);
		// A rejected/limited token shouldn't block the rules - fall back to the public raw file.
	}
	const raw = await fetch(
		`https://raw.githubusercontent.com/${owner()}/${repo()}/${branch()}/${encodeURI(path)}`
	);
	if (!raw.ok) throw new Error(`Could not read ${path} from GitHub (${raw.status})`);
	return raw.text();
}
