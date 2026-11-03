// Every call to our own server goes through here. On the web it's same-origin
// (''); the mobile bundle has no server, so it calls the web deployment
// (VITE_API_BASE, set in .env.mobile). The session rides along as a bearer
// token - one mechanism for both, no cookies across origins.
import { auth } from './auth.svelte';

const API_BASE: string = import.meta.env.VITE_API_BASE ?? '';

export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
	const headers = new Headers(init.headers);
	if (auth.accessToken) headers.set('Authorization', `Bearer ${auth.accessToken}`);
	return fetch(API_BASE + path, { ...init, headers });
}

/** A failed call to our server, with its HTTP status. */
export class ApiError extends Error {
	constructor(readonly status: number) {
		super(`api ${status}`);
	}
}

/** The call hit a usage cap (429), e.g. today's AI quota for that activity. */
export const isLimit = (e: unknown) => e instanceof ApiError && e.status === 429;
