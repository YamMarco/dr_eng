// The weekly group Zoom lesson: join window, next lesson, date label, calendar file, name rule.
// Run: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	joinOpen,
	lessonCalendar,
	lessonWhen,
	nextSlot,
	NAME_PATTERN
} from '../src/lib/liveLesson.ts';

// Thursday 12.11.2026, 18:00 Israel time (UTC+2 in November).
const slot = { start: '2026-11-12T16:00:00Z', minutes: 60 };
const at = (iso: string) => new Date(iso).getTime();
const words = { today: 'היום', tomorrow: 'מחר' };

test('join opens 10 minutes before and closes 30 minutes after the end', () => {
	assert.equal(joinOpen(slot, at('2026-11-12T15:49:00Z')), false);
	assert.equal(joinOpen(slot, at('2026-11-12T15:50:00Z')), true);
	assert.equal(joinOpen(slot, at('2026-11-12T17:30:00Z')), true);
	assert.equal(joinOpen(slot, at('2026-11-12T17:31:00Z')), false);
});

test('next lesson: the earliest one still ahead or still joinable', () => {
	const later = { start: '2026-11-19T16:00:00Z', minutes: 60 };
	assert.equal(nextSlot([later, slot], at('2026-11-10T10:00:00Z')), slot);
	assert.equal(nextSlot([later, slot], at('2026-11-12T17:20:00Z')), slot);
	assert.equal(nextSlot([later, slot], at('2026-11-12T18:00:00Z')), later);
	assert.equal(nextSlot([slot], at('2026-11-13T00:00:00Z')), null);
});

test('date label in Israel time: today, tomorrow, else weekday and date', () => {
	assert.equal(lessonWhen(slot.start, at('2026-11-12T08:00:00Z'), words), 'היום · 18:00');
	assert.equal(lessonWhen(slot.start, at('2026-11-11T08:00:00Z'), words), 'מחר · 18:00');
	assert.equal(
		lessonWhen(slot.start, at('2026-11-09T08:00:00Z'), words),
		'יום חמישי 12.11 · 18:00'
	);
	// 23:30 UTC on the 11th is already the 12th in Israel.
	assert.equal(lessonWhen(slot.start, at('2026-11-11T23:30:00Z'), words), 'היום · 18:00');
});

test('calendar: weekly, Israel wall-clock time, links to the app, text escaped', () => {
	const ics = lessonCalendar(slot, { title: 'שיעור, קבוצתי', note: 'נכנסים:' }, 'https://x.co/app');
	assert.match(ics, /DTSTART;TZID=Asia\/Jerusalem:20261112T180000\r\n/);
	assert.match(ics, /DTEND;TZID=Asia\/Jerusalem:20261112T190000\r\n/);
	assert.match(ics, /RRULE:FREQ=WEEKLY\r\n/);
	assert.match(ics, /SUMMARY:שיעור\\, קבוצתי\r\n/);
	assert.match(ics, /URL:https:\/\/x\.co\/app\r\n/);
	assert.doesNotMatch(ics, /zoom/i);
});

test('lesson name: letters in any script, no symbols or links', () => {
	for (const ok of ['דנה כ.', 'Noa B', "ג'ורג'", 'אבו-סאלח', 'ליאור ש׳'])
		assert.ok(NAME_PATTERN.test(ok), ok);
	for (const bad of [' דנה', '.דנה', 'a@b.com', 'http://x', 'דנה 2', '<b>'])
		assert.ok(!NAME_PATTERN.test(bad), bad);
});
