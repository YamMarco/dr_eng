// Dev server for the worktree with its own dep cache (node_modules is a junction
// to the main checkout, so the default node_modules/.vite would be shared).
import { createServer } from 'vite';
const server = await createServer({
	root: process.cwd(),
	cacheDir: process.env.VITE_CACHE,
	server: { port: 5198, strictPort: true }
});
await server.listen();
server.printUrls();
