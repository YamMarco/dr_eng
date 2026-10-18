// Turns a photo of a student's English (handwritten or printed) into text, so they can
// write on paper (as in the Bagrut) and still get the app's checks. The
// client posts a downscaled JPEG as the raw body; the `ocr` gateway role
// (a vision model) transcribes it. It must copy, never fix: correcting the
// student's spelling here would hide exactly the mistakes we grade.
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { chatJson } from '$lib/server/llm';
import { llmRoute } from '$lib/server/llmRoute';
import SYSTEM from '$lib/server/prompts/ocr.md?raw';

const MAX_BYTES = 4 * 1024 * 1024;

export const POST = llmRoute('OCR failed', async ({ request }) => {
	if (request.headers.get('content-type') !== 'image/jpeg') throw error(415, 'expected image/jpeg');
	const bytes = Buffer.from(await request.arrayBuffer());
	if (bytes.length === 0 || bytes.length > MAX_BYTES) throw error(413, 'image is empty or too big');

	const { text } = await chatJson(
		{
			role: 'ocr',
			system: SYSTEM,
			user: 'Transcribe this page.',
			image: `data:image/jpeg;base64,${bytes.toString('base64')}`,
			maxTokens: 2000
		},
		z.object({ text: z.string() })
	);
	return { text: text.trim() };
});
