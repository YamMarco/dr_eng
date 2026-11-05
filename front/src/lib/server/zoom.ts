// The teacher's Zoom account, through a Server-to-Server OAuth app (platform.md, "Group
// lessons"). One recurring meeting with registration required and manual approval: we
// register each paying student (approved at once) and hand them their personal join link;
// anyone else who registers waits for an approval that never comes. Off until the env is set.
import { createHash } from 'node:crypto';
import { env } from '$env/dynamic/private';
import type { LessonRecording, LessonSlot } from '$lib/liveLesson';

export const zoomEnabled = Boolean(
	env.ZOOM_ACCOUNT_ID && env.ZOOM_CLIENT_ID && env.ZOOM_CLIENT_SECRET && env.ZOOM_MEETING_ID
);

const API = 'https://api.zoom.us/v2';
const TIMEOUT_MS = 8000;

/** Zoom needs an email per registrant: a stable alias per user, so neither Zoom nor the
 *  teacher sees the student's real address. The domain has no mailbox. */
export function aliasEmail(userId: string): string {
	return `s-${createHash('sha256').update(userId).digest('hex').slice(0, 20)}@lessons.engup.co.il`;
}

export class ZoomError extends Error {
	constructor(readonly status: number) {
		super(`zoom ${status}`);
	}
}

let token: { value: string; expires: number } | null = null;

async function accessToken(): Promise<string> {
	if (token && token.expires > Date.now()) return token.value;
	const basic = Buffer.from(`${env.ZOOM_CLIENT_ID}:${env.ZOOM_CLIENT_SECRET}`).toString('base64');
	const response = await fetch(
		`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(env.ZOOM_ACCOUNT_ID!)}`,
		{
			method: 'POST',
			headers: { Authorization: `Basic ${basic}` },
			signal: AbortSignal.timeout(TIMEOUT_MS)
		}
	);
	if (!response.ok) throw new ZoomError(response.status);
	const body = (await response.json()) as { access_token: string; expires_in: number };
	// A minute's margin before it expires.
	token = { value: body.access_token, expires: Date.now() + (body.expires_in - 60) * 1000 };
	return token.value;
}

async function zoom(path: string, init: RequestInit = {}): Promise<Response> {
	const headers = new Headers(init.headers);
	headers.set('Authorization', `Bearer ${await accessToken()}`);
	if (init.body) headers.set('Content-Type', 'application/json');
	return fetch(API + path, { ...init, headers, signal: AbortSignal.timeout(TIMEOUT_MS) });
}

const meetingPath = () => `/meetings/${encodeURIComponent(env.ZOOM_MEETING_ID!)}`;

/** Registers a student, approved at once. Returns their personal join link. */
export async function register(userId: string, name: string) {
	const response = await zoom(`${meetingPath()}/registrants`, {
		method: 'POST',
		body: JSON.stringify({ email: aliasEmail(userId), first_name: name, auto_approve: true })
	});
	if (!response.ok) throw new ZoomError(response.status);
	const body = (await response.json()) as { registrant_id: string; join_url: string };
	return { registrantId: body.registrant_id, joinUrl: body.join_url };
}

/** Removes a registration: its join link stops working. Already gone counts as done. */
export async function unregister(registrantId: string): Promise<void> {
	const response = await zoom(`${meetingPath()}/registrants/${encodeURIComponent(registrantId)}`, {
		method: 'DELETE'
	});
	if (!response.ok && response.status !== 404) throw new ZoomError(response.status);
}

type Meeting = {
	start_time?: string;
	duration: number;
	occurrences?: { start_time: string; duration?: number; status?: string }[];
};

type Recording = { start_time: string; share_url?: string; password?: string };

/** The schedule and the latest recording change rarely: one Zoom read per instance per 5 min. */
const CACHE_MS = 5 * 60_000;
let cache: { at: number; slots: LessonSlot[]; recording: LessonRecording | null } | null = null;

/** The coming lessons (a cancelled week is deleted in Zoom, so it's simply absent) and the
 *  latest cloud recording, if the teacher shares one. */
export async function schedule(): Promise<{
	slots: LessonSlot[];
	recording: LessonRecording | null;
}> {
	if (cache && Date.now() - cache.at < CACHE_MS) return cache;
	const [meetingResponse, recordingResponse] = await Promise.all([
		zoom(meetingPath()),
		zoom(`${meetingPath()}/recordings`)
	]);
	if (!meetingResponse.ok) throw new ZoomError(meetingResponse.status);
	const meeting = (await meetingResponse.json()) as Meeting;
	const slots = meeting.occurrences
		? meeting.occurrences
				.filter((o) => o.status !== 'deleted')
				.map((o) => ({ start: o.start_time, minutes: o.duration ?? meeting.duration }))
		: meeting.start_time
			? [{ start: meeting.start_time, minutes: meeting.duration }]
			: [];

	// No recording yet answers 404.
	const latest = recordingResponse.ok ? ((await recordingResponse.json()) as Recording) : null;
	const recording = latest?.share_url
		? { url: latest.share_url, passcode: latest.password || null, start: latest.start_time }
		: null;

	cache = { at: Date.now(), slots, recording };
	return cache;
}
