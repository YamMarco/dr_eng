// Where students reach us (settings > help).
export const SUPPORT_EMAIL = 'support@engup.co.il';
/** International format, digits only (wa.me links). Null hides the WhatsApp row. */
export const SUPPORT_WHATSAPP: string | null = null;

/** The testers' closed WhatsApp group invite. Shown to signed-in users only; null hides the row. */
export const TESTERS_GROUP: string | null = 'https://chat.whatsapp.com/BbUvYbdvqlf9wb7AeboGBJ';

/** Tester phase: the app greets each tester once with what to expect (TesterWelcome). */
export const TESTER_PHASE = true;

export function whatsappHref(text: string): string {
	return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function emailHref(subject: string): string {
	return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
