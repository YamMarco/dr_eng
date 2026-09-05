// Server-only: reads/writes one content file through GitHub's Contents API,
// used in production where there's no writable local filesystem (Vercel).
// Local dev keeps writing straight to disk — see +server.ts.
import { env } from '$env/dynamic/private';

const API = 'https://api.github.com';

function ghHeaders() {
	return {
		Authorization: `Bearer ${env.GITHUB_TOKEN}`,
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28'
	};
}

function repoUrl(path: string) {
	return `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}`;
}

/** `path` is repo-root-relative, e.g. "front/src/lib/content/c/c-3.ts". */
export async function getGithubFile(path: string): Promise<{ content: string; sha: string }> {
	const branch = env.GITHUB_BRANCH || 'main';
	const res = await fetch(`${repoUrl(path)}?ref=${branch}`, { headers: ghHeaders() });
	if (!res.ok) throw new Error(`GitHub GET ${path} failed: ${res.status} ${await res.text()}`);
	const data = (await res.json()) as { content: string; sha: string };
	return { content: Buffer.from(data.content, 'base64').toString('utf8'), sha: data.sha };
}

/** Commits `content` as the new version of `path`; throws (with "409" in the
 *  message) if `sha` is stale — the caller decides whether to retry. */
export async function putGithubFile(
	path: string,
	content: string,
	sha: string,
	message: string
): Promise<void> {
	const branch = env.GITHUB_BRANCH || 'main';
	const res = await fetch(repoUrl(path), {
		method: 'PUT',
		headers: { ...ghHeaders(), 'content-type': 'application/json' },
		body: JSON.stringify({
			message,
			content: Buffer.from(content, 'utf8').toString('base64'),
			sha,
			branch
		})
	});
	if (!res.ok) throw new Error(`GitHub PUT ${path} failed (${res.status}): ${await res.text()}`);
}
