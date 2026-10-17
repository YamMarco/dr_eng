// Word-card images live in the public `vocab-images` Supabase Storage bucket.
// Content keeps a short path (`/vocab-images/word-ab12.jpg`); this maps it to
// the bucket's public URL. Anything else (a full URL) passes through.
const PREFIX = '/vocab-images/';
const BASE = `${import.meta.env.VITE_SUPABASE_URL ?? ''}/storage/v1/object/public/vocab-images/`;

export function vocabImageUrl(src: string): string {
	return src.startsWith(PREFIX) ? BASE + src.slice(PREFIX.length) : src;
}
