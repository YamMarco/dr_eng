// Every call to our own server goes through here. On the web it's same-origin
// (''); the mobile bundle has no server, so it calls the web deployment
// (VITE_API_BASE, set in .env.mobile).
const API_BASE: string = import.meta.env.VITE_API_BASE ?? '';

export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
	return fetch(API_BASE + path, init);
}
