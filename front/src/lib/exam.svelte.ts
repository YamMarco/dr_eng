import { EXAM_MINUTES } from './curriculum';

export const EXAM_SECONDS = EXAM_MINUTES * 60;

/** Seconds left below which the timer switches to its warning state. */
export const WARNING_SECONDS = 5 * 60;

class ExamSession {
	moduleId = $state<string | null>(null);
	remaining = $state(EXAM_SECONDS);
	running = $state(false);
	finished = $state(false);

	#timer: ReturnType<typeof setInterval> | null = null;
	#endsAt = 0;

	get warning() {
		return this.remaining <= WARNING_SECONDS;
	}

	start(moduleId: string) {
		this.stopTicking();
		this.moduleId = moduleId;
		this.remaining = EXAM_SECONDS;
		this.finished = false;
		this.running = true;
		this.#endsAt = Date.now() + EXAM_SECONDS * 1000;
		this.#timer = setInterval(() => this.#tick(), 250);
	}

	#tick() {
		const left = Math.max(0, Math.round((this.#endsAt - Date.now()) / 1000));
		this.remaining = left;
		if (left === 0) this.finish();
	}

	/** Ends the exam and freezes the timer. */
	finish() {
		this.stopTicking();
		this.running = false;
		this.finished = true;
	}

	reset() {
		this.stopTicking();
		this.moduleId = null;
		this.remaining = EXAM_SECONDS;
		this.running = false;
		this.finished = false;
	}

	stopTicking() {
		if (this.#timer) clearInterval(this.#timer);
		this.#timer = null;
	}
}

export const exam = new ExamSession();

export function formatTime(seconds: number) {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
