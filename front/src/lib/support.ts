// Where students reach us (settings > help).
export const SUPPORT_EMAIL = 'support@engup.co.il';
/** International format, digits only (wa.me links). Null hides the WhatsApp row. */
export const SUPPORT_WHATSAPP: string | null = null;

export function whatsappHref(text: string): string {
	return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function emailHref(subject: string): string {
	return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
