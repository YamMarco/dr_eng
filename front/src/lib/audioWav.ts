// A recorded take (webm / ogg / mp4 from MediaRecorder) -> base64 WAV, the one
// format every listening model accepts. Downmixed to mono and resampled to
// 12 kHz (plenty for speech) so two minutes stay under the upload limit.

const RATE = 12_000;

export async function toWavBase64(blob: Blob, maxSeconds = 120): Promise<string> {
	const ctx = new AudioContext();
	const decoded = await ctx.decodeAudioData(await blob.arrayBuffer()).finally(() => ctx.close());
	const length = Math.ceil(Math.min(decoded.duration, maxSeconds) * RATE);
	const offline = new OfflineAudioContext(1, length, RATE);
	const source = offline.createBufferSource();
	source.buffer = decoded;
	source.connect(offline.destination);
	source.start();
	const pcm = (await offline.startRendering()).getChannelData(0);

	const bytes = new DataView(new ArrayBuffer(44 + pcm.length * 2));
	const text = (at: number, s: string) =>
		[...s].forEach((c, i) => bytes.setUint8(at + i, c.charCodeAt(0)));
	text(0, 'RIFF');
	bytes.setUint32(4, 36 + pcm.length * 2, true);
	text(8, 'WAVE');
	text(12, 'fmt ');
	bytes.setUint32(16, 16, true); // PCM header size
	bytes.setUint16(20, 1, true); // PCM
	bytes.setUint16(22, 1, true); // mono
	bytes.setUint32(24, RATE, true);
	bytes.setUint32(28, RATE * 2, true); // byte rate
	bytes.setUint16(32, 2, true); // block align
	bytes.setUint16(34, 16, true); // bits per sample
	text(36, 'data');
	bytes.setUint32(40, pcm.length * 2, true);
	pcm.forEach((v, i) => bytes.setInt16(44 + i * 2, Math.max(-1, Math.min(1, v)) * 0x7fff, true));

	// btoa takes a binary string; build it in chunks to stay under the argument limit.
	const raw = new Uint8Array(bytes.buffer);
	let binary = '';
	for (let i = 0; i < raw.length; i += 0x8000)
		binary += String.fromCharCode(...raw.subarray(i, i + 0x8000));
	return btoa(binary);
}
