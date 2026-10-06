// Checks for one screen, shared by the /edit workspace (issue list + paste),
// and the /mcp endpoint's validate_screen. Shape comes from schema.ts; these
// add the content rules a schema can't express (index ranges, duplicate
// options, the dash rule). Messages are Hebrew - they're shown in the editor.
import * as z from 'zod';
import { lessonScreenSchema } from './schema';
import { isScreenEmpty, type LessonScreen } from './types';
import { markAllSegments } from './markAllTokens';

export type ScreenProblem = { severity: 'error' | 'warn'; message: string };

const he = z.locales.he().localeError;

function outOfRange(label: string, ids: number[], count: number): ScreenProblem[] {
	const bad = [...new Set(ids.filter((i) => i >= count))];
	return bad.length
		? [
				{
					severity: 'error',
					message: `${label} - אינדקסים מחוץ לטווח (0..${count - 1}): ${bad.join(', ')}`
				}
			]
		: [];
}

function duplicates(label: string, options: string[]): ScreenProblem[] {
	const seen = new Set<string>();
	const dup = options.filter((o) => {
		const k = o.trim().toLowerCase();
		if (seen.has(k)) return true;
		seen.add(k);
		return false;
	});
	return dup.length
		? [{ severity: 'error', message: `${label} - אפשרויות כפולות: ${dup.join(', ')}` }]
		: [];
}

/** Every string inside the screen, with its path, for text-level rules. */
function strings(value: unknown, path: string, out: [string, string][] = []): [string, string][] {
	if (typeof value === 'string') out.push([path, value]);
	else if (Array.isArray(value)) value.forEach((v, i) => strings(v, `${path}[${i}]`, out));
	else if (value && typeof value === 'object')
		for (const [k, v] of Object.entries(value)) strings(v, path ? `${path}.${k}` : k, out);
	return out;
}

/** Content-rule checks on an already well-shaped screen. */
export function screenProblems(screen: LessonScreen): ScreenProblem[] {
	const out: ScreenProblem[] = [];
	if (isScreenEmpty(screen)) out.push({ severity: 'warn', message: 'מסך ריק (ידולג בנגן)' });

	switch (screen.type) {
		case 'mcq':
			out.push(...outOfRange('correctIndex', [screen.correctIndex], screen.options.length));
			out.push(...duplicates('options', screen.options));
			break;
		case 'cloze-pick':
			out.push(...outOfRange('correctIndices', screen.correctIndices, screen.options.length));
			out.push(...duplicates('options', screen.options));
			break;
		case 'passage-mcq':
			screen.questions.forEach((q, i) => {
				out.push(...outOfRange(`questions[${i}].correctIndex`, [q.correctIndex], q.options.length));
				out.push(...duplicates(`questions[${i}].options`, q.options));
			});
			break;
		case 'mark-word':
			out.push(
				...outOfRange(
					'correctWordIndex',
					[screen.correctWordIndex],
					screen.sentence.split(' ').length
				)
			);
			break;
		case 'mark-all': {
			const count = markAllSegments(screen.text).filter((s) => s.token).length;
			const ids = [
				...screen.correctIndices,
				...(screen.categories ?? []).flatMap((c) => c.indices)
			];
			out.push(...outOfRange('mark-all', ids, count));
			break;
		}
	}

	// Dash rule: no long dashes in content. A line that is only `---` is the
	// markdown divider and is fine.
	for (const [path, text] of strings(screen, '')) {
		const lines = text.split('\n').filter((l) => l.trim() !== '---');
		if (lines.some((l) => l.includes('—') || l.includes('--')))
			out.push({
				severity: 'error',
				message: `${path} - מקף ארוך (— או --). מותר מקף רגיל אחד לכל היותר`
			});
		else if (lines.some((l) => l.includes('–')))
			out.push({ severity: 'warn', message: `${path} - מקף בינוני (–). עדיף מקף רגיל (-)` });
	}
	return out;
}

export type ScreenCheck =
	| { ok: true; screen: LessonScreen; problems: ScreenProblem[] }
	| { ok: false; problems: ScreenProblem[] };

/** Parse + validate a screen from raw JSON text or an object. `ok` = no errors (warnings allowed). */
export function checkScreen(input: unknown): ScreenCheck {
	let raw = input;
	if (typeof input === 'string') {
		try {
			raw = JSON.parse(input);
		} catch (e) {
			return {
				ok: false,
				problems: [{ severity: 'error', message: `JSON לא תקין: ${(e as Error).message}` }]
			};
		}
	}
	const parsed = lessonScreenSchema.safeParse(raw, { error: he });
	if (!parsed.success)
		return {
			ok: false,
			problems: parsed.error.issues.map((i) => ({
				severity: 'error',
				message: `${i.path.join('.') || '(מסך)'} - ${i.message}`
			}))
		};
	const problems = screenProblems(parsed.data);
	return problems.some((p) => p.severity === 'error')
		? { ok: false, problems }
		: { ok: true, screen: parsed.data, problems };
}
