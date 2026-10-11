// Client side of /api/ocr: shrinks the photo (phone cameras shoot 10+ MB;
// handwriting reads fine at ~1600px) and returns the transcribed text.

const MAX_SIDE = 1600;

async function toJpeg(file: File, rotation: number): Promise<Blob> {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
	const w = Math.round(bitmap.width * scale);
	const h = Math.round(bitmap.height * scale);
	const sideways = rotation % 180 !== 0;
	const canvas = document.createElement('canvas');
	canvas.width = sideways ? h : w;
	canvas.height = sideways ? w : h;
	const ctx = canvas.getContext('2d')!;
	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate((rotation * Math.PI) / 180);
	ctx.drawImage(bitmap, -w / 2, -h / 2, w, h);
	bitmap.close();
	return new Promise((resolve, reject) =>
		canvas.toBlob(
			(blob) => (blob ? resolve(blob) : reject(new Error('encode failed'))),
			'image/jpeg',
			0.85
		)
	);
}

/** Object URL of the photo as OCR will see it (rotated, downscaled). Caller revokes it. */
export async function previewUrl(file: File, rotation: number): Promise<string> {
	return URL.createObjectURL(await toJpeg(file, rotation));
}

/** `rotation` (0/90/180/270, clockwise) is the student's fix for a sideways photo. */
export async function scanHandwriting(file: File, rotation = 0): Promise<string> {
	const res = await fetch('/api/ocr', {
		method: 'POST',
		headers: { 'Content-Type': 'image/jpeg' },
		body: await toJpeg(file, rotation)
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
