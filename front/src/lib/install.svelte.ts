// "Install on your phone": the site as a home-screen app (static/manifest.webmanifest).
// Chrome and Edge fire `beforeinstallprompt` once, early: it's kept here so the install
// screen can offer a one-tap install. Safari has no prompt: the screen shows the steps.
import { MOBILE_BUILD } from './platform';

export type Platform = 'ios' | 'android' | 'desktop';

interface InstallPromptEvent extends Event {
	prompt(): Promise<void>;
	userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const browser = typeof window !== 'undefined';

function detectPlatform(): Platform {
	if (!browser) return 'desktop';
	const ua = navigator.userAgent;
	// iPadOS reports itself as a Mac with touch.
	if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1))
		return 'ios';
	return /Android/.test(ua) ? 'android' : 'desktop';
}

function standalone(): boolean {
	if (!browser) return false;
	return (
		matchMedia('(display-mode: standalone)').matches ||
		(navigator as Navigator & { standalone?: boolean }).standalone === true
	);
}

class InstallStore {
	readonly platform = detectPlatform();
	/** Opened inside a social app's browser (a link from Instagram, TikTok...): no install, no push. */
	readonly inApp =
		browser && /Instagram|FBAN|FBAV|TikTok|musical_ly|Snapchat/.test(navigator.userAgent);
	/** Running as the installed app (or just installed from this tab). */
	installed = $state(standalone());
	/** The browser handed us its install dialog. */
	canPrompt = $state(false);
	#event: InstallPromptEvent | null = null;

	constructor() {
		if (!browser || MOBILE_BUILD) return;
		addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			this.#event = e as InstallPromptEvent;
			this.canPrompt = true;
		});
		addEventListener('appinstalled', () => {
			this.installed = true;
			this.canPrompt = false;
		});
	}

	async prompt(): Promise<void> {
		if (!this.#event) return;
		await this.#event.prompt();
		const { outcome } = await this.#event.userChoice;
		this.#event = null;
		this.canPrompt = false;
		if (outcome === 'accepted') this.installed = true;
	}
}

export const install = new InstallStore();
