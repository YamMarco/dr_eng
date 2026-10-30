// A choice option: plain text, or [text, feedback] when picking it should
// show its own message. Existing content stays plain strings.
export type Option = string | [string, string];

export const optText = (o: Option): string => (typeof o === 'string' ? o : o[0]);
export const optFeedback = (o: Option): string => (typeof o === 'string' ? '' : o[1]);

export function withText(o: Option, text: string): Option {
	return typeof o === 'string' || !o[1].trim() ? text : [text, o[1]];
}

/** Blank feedback collapses back to a plain string, so the JSON stays clean. */
export function withFeedback(o: Option, feedback: string): Option {
	return feedback.trim() ? [optText(o), feedback] : optText(o);
}
