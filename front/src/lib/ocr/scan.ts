// Client side of /api/ocr: shrinks the photo (phone cameras shoot 10+ MB;
// handwriting reads fine at ~1600px) and returns the transcribed text.

const MAX_SIDE = 1600;

async function toJpeg(file: File): Promise<Blob> {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
	const canvas = document.createElement('canvas');
	canvas.width = Math.round(bitmap.width * scale);
	canvas.height = Math.round(bitmap.height * scale);
	canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
	bitmap.close();
	return new Promise((resolve, reject) =>
		canvas.toBlob(
			(blob) => (blob ? resolve(blob) : reject(new Error('encode failed'))),
			'image/jpeg',
			0.85
		)
	);
}

export async function scanHandwriting(file: File): Promise<string> {
	const res = await fetch('/api/ocr', {
		method: 'POST',
		headers: { 'Content-Type': 'image/jpeg' },
		body: await toJpeg(file)
	});
	if (!res.ok) throw new Error(`OCR ${res.status}`);
	return ((await res.json()) as { text: string }).text;
}

/** Splits scanned text into sentences, for screens with one input per sentence. */
export function splitSentences(text: string): string[] {
	return text
		.split(/\n+|(?<=[.!?])\s+/)
		.map((s) => s.trim())
		.filter(Boolean);
}
