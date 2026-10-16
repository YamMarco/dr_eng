// One spoken take through the browser's MediaRecorder. The audio stays in
// memory as a blob URL and is never uploaded. Without a microphone (no API,
// permission denied) the same start / stop runs as a plain stopwatch.

export type RecorderState = 'idle' | 'starting' | 'recording' | 'done';

/** A finished take, as an exam keeps it between screens. */
export type Take = { seconds: number; audioUrl?: string };

export class Recorder {
	state = $state<RecorderState>('idle');
	elapsedMs = $state(0);
	/** The last take, playable in an <audio>. Undefined when timed only. */
	audioUrl = $state<string | undefined>();
	/** Turns false once the microphone proves unavailable; takes are then timed only. */
	micAvailable = $state(true);

	#media?: MediaRecorder;
	#stream?: MediaStream;
	#chunks: Blob[] = [];
	#startedAt = 0;
	#tick?: ReturnType<typeof setInterval>;
	#onStopped?: () => void;
	/** Exams keep the audio after the screen unmounts (it's played back in the report). */
	#keepAudio: boolean;

	constructor({ keepAudio = false, take }: { keepAudio?: boolean; take?: Take } = {}) {
		this.#keepAudio = keepAudio;
		if (take) {
			this.state = 'done';
			this.elapsedMs = take.seconds * 1000;
			this.audioUrl = take.audioUrl;
		}
	}

	get take(): Take {
		return { seconds: this.elapsedMs / 1000, audioUrl: this.audioUrl };
	}

	/** Starts a new take; a previous one is discarded (the exam keeps only the last). */
	async start() {
		if (this.state === 'starting' || this.state === 'recording') return;
		this.#clearTake();
		this.state = 'starting';
		if (this.micAvailable) await this.#openMic();
		// Destroyed while the permission prompt was open.
		if (this.state !== 'starting') return this.#releaseMic();
		this.#media?.start();
		this.#startedAt = performance.now();
		this.elapsedMs = 0;
		this.#tick = setInterval(() => (this.elapsedMs = performance.now() - this.#startedAt), 100);
		this.state = 'recording';
	}

	/** Resolves once the take's audio is ready. */
	async stop() {
		if (this.state !== 'recording') return;
		clearInterval(this.#tick);
		this.elapsedMs = performance.now() - this.#startedAt;
		this.state = 'done';
		const media = this.#media;
		if (media?.state === 'recording')
			await new Promise<void>((resolve) => {
				this.#onStopped = resolve;
				media.stop();
			});
	}

	/** Call on unmount: stops the microphone and frees the audio. */
	destroy() {
		clearInterval(this.#tick);
		if (this.#media) this.#media.onstop = null;
		if (this.#media?.state === 'recording') this.#media.stop();
		this.#releaseMic();
		if (!this.#keepAudio) this.#clearTake();
		this.state = 'idle';
	}

	async #openMic() {
		if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
			this.micAvailable = false;
			return;
		}
		try {
			this.#stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const media = new MediaRecorder(this.#stream);
			this.#chunks = [];
			media.ondataavailable = (e) => {
				if (e.data.size) this.#chunks.push(e.data);
			};
			media.onstop = () => {
				this.audioUrl = URL.createObjectURL(new Blob(this.#chunks, { type: media.mimeType }));
				this.#releaseMic();
				this.#onStopped?.();
			};
			this.#media = media;
		} catch {
			this.micAvailable = false;
			this.#releaseMic();
		}
	}

	#releaseMic() {
		this.#stream?.getTracks().forEach((track) => track.stop());
		this.#stream = undefined;
	}

	#clearTake() {
		if (this.audioUrl) URL.revokeObjectURL(this.audioUrl);
		this.audioUrl = undefined;
		this.#media = undefined;
		this.elapsedMs = 0;
	}
}
