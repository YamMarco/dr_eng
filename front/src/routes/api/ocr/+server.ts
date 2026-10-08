// Turns a photo of a student's handwritten English into text, so they can
// write on paper (as in the Bagrut) and still get the app's checks. The
// client posts a downscaled JPEG as the raw body; the `ocr` gateway role
// (a vision model) transcribes it. It must copy, never fix: correcting the
// student's spelling here would hide exactly the mistakes we grade.
import { error, json } from '@sveltejs/kit';
import { chat, llmConfigured } from '$lib/server/llm';
import type { RequestHandler } from './$types';

const MAX_BYTES = 4 * 1024 * 1024;

const SYSTEM = `You transcribe photos of handwritten English written by Israeli high-school students.
Rules:
- Copy the text exactly as written: keep every spelling, grammar and punctuation mistake. Never correct anything.
- Keep the student's line and paragraph breaks.
- Skip crossed-out words, page decorations and any non-English text.
- If a word is unreadable, write [?] in its place.
- If there is no English handwriting in the image, return an empty string.
Reply with a JSON object: {"text": "<the transcription>"}`;

export const POST: RequestHandler = async ({ request }) => {
	if (!llmConfigured()) throw error(503, 'OCR is not configured');
	if (request.headers.get('content-type') !== 'image/jpeg') throw error(415, 'expected image/jpeg');

	const bytes = Buffer.from(await request.arrayBuffer());
	if (bytes.length === 0 || bytes.length > MAX_BYTES) throw error(413, 'image is empty or too big');

	let text: unknown;
	try {
		const result = await chat({
			role: 'ocr',
			system: SYSTEM,
			user: 'Transcribe this page.',
			image: `data:image/jpeg;base64,${bytes.toString('base64')}`,
			json: true,
			maxTokens: 2000
		});
		text = JSON.parse(result.text).text;
	} catch {
		throw error(502, 'OCR failed');
	}
	if (typeof text !== 'string') throw error(502, 'OCR returned no text');
	return json({ text: text.trim() });
};
