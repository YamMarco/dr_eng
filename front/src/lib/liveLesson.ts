// The weekly group Zoom lesson: what /api/lessons answers, and the pure rules the home card
// uses (join window, date label, calendar file). Shared by client and server.

/** One lesson: start (ISO) and length. */
export type LessonSlot = { start: string; minutes: number };

/** The latest lesson's cloud recording (the teacher's Zoom share link). */
export type LessonRecording = { url: string; passcode: string | null; start: string };

export type LessonsInfo =
	| { status: 'locked' }
	| { status: 'needs-name'; next: LessonSlot | null }
	| {
			status: 'ready';
			next: LessonSlot | null;
			/** The student's personal join link. */
			joinUrl: string;
			recording: LessonRecording | null;
	  };

export const NAME_MIN = 2;
export const NAME_MAX = 30;
/** Letters (any script), spaces, apostrophe / geresh, dot and hyphen. */
export const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M} '׳.-]*$/u;

/** The join button opens this long before the start, and stays until this long after the end. */
const EARLY_MS = 10 * 60_000;
const LATE_MS = 30 * 60_000;

const startOf = (slot: LessonSlot) => new Date(slot.start).getTime();
const endOf = (slot: LessonSlot) => startOf(slot) + slot.minutes * 60_000;

/** Joinable now: from 10 minutes before the start until 30 minutes after the end. */
export function joinOpen(slot: LessonSlot, now: number): boolean {
	return now >= startOf(slot) - EARLY_MS && now <= endOf(slot) + LATE_MS;
}

/** The first lesson still ahead or still joinable. */
export function nextSlot(slots: LessonSlot[], now: number): LessonSlot | null {
	return (
		slots
			.filter((slot) => endOf(slot) + LATE_MS >= now)
			.sort((a, b) => startOf(a) - startOf(b))[0] ?? null
	);
}

const ZONE = 'Asia/Jerusalem';
const dayKey = (time: number) => new Date(time).toLocaleDateString('en-CA', { timeZone: ZONE });

/** "היום · 18:00", "מחר · 18:00", else "יום שלישי 12.11 · 18:00" (Israel time). */
export function lessonWhen(
	start: string,
	now: number,
	words: { today: string; tomorrow: string }
): string {
	const date = new Date(start);
	const time = date.toLocaleTimeString('he-IL', {
		timeZone: ZONE,
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h23'
	});
	const day = dayKey(date.getTime());
	if (day === dayKey(now)) return `${words.today} · ${time}`;
	if (day === dayKey(now + 86_400_000)) return `${words.tomorrow} · ${time}`;
	const weekday = date.toLocaleDateString('he-IL', { timeZone: ZONE, weekday: 'long' });
	const [, month, dayOfMonth] = day.split('-').map(Number);
	return `${weekday} ${dayOfMonth}.${month} · ${time}`;
}

/** Israel wall-clock time as iCalendar local time: 20261112T180000. */
function icsLocal(time: number): string {
	const parts = Object.fromEntries(
		new Intl.DateTimeFormat('en-GB', {
			timeZone: ZONE,
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hourCycle: 'h23'
		})
			.formatToParts(new Date(time))
			.map((p) => [p.type, p.value])
	);
	return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}`;
}

/** iCalendar text value: backslash, comma, semicolon and newline escaped. */
const icsText = (value: string) => value.replace(/[\\,;]/g, '\\$&').replace(/\n/g, '\\n');

/** A weekly calendar event from the next lesson, with a 30-minute alert. It links to the app,
 *  never to Zoom: the join link stays in the app. Israel time, so DST doesn't shift it. */
export function lessonCalendar(
	slot: LessonSlot,
	text: { title: string; note: string },
	appUrl: string
): string {
	const utc = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
	return [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//EngUp//Lessons//HE',
		'BEGIN:VEVENT',
		`UID:group-lesson-${startOf(slot)}@engup.co.il`,
		`DTSTAMP:${utc}`,
		`DTSTART;TZID=${ZONE}:${icsLocal(startOf(slot))}`,
		`DTEND;TZID=${ZONE}:${icsLocal(endOf(slot))}`,
		'RRULE:FREQ=WEEKLY',
		`SUMMARY:${icsText(text.title)}`,
		`DESCRIPTION:${icsText(`${text.note} ${appUrl}`)}`,
		`URL:${appUrl}`,
		'BEGIN:VALARM',
		'TRIGGER:-PT30M',
		'ACTION:DISPLAY',
		`DESCRIPTION:${icsText(text.title)}`,
		'END:VALARM',
		'END:VEVENT',
		'END:VCALENDAR',
		''
	].join('\r\n');
}
