// Where students reach us (settings > help). Placeholders until the real
// support inbox and WhatsApp Business number exist.
export const SUPPORT_EMAIL = 'support@example.com';
/** International format, digits only (wa.me links). */
export const SUPPORT_WHATSAPP = '972500000000';

export function whatsappHref(text: string): string {
	return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function emailHref(subject: string): string {
	return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
