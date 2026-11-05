// "Did you mean ...?" for mistyped email domains: the typos seen in real sign-ups are caught,
// real domains are left alone.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { suggestEmail } from '../src/lib/emailTypo.ts';

test('mistyped common domains get a suggestion, the name part is kept', () => {
	for (const [typed, fixed] of [
		['martina@icloud.con', 'martina@icloud.com'],
		['dana@gamil.com', 'dana@gmail.com'],
		['dana@gmial.com', 'dana@gmail.com'],
		['dana@gnail.com', 'dana@gmail.com'],
		['dana@gmail.co', 'dana@gmail.com'],
		['dana@gmail.cim', 'dana@gmail.com'],
		['dana@hotmal.com', 'dana@hotmail.com'],
		['dana@outlok.com', 'dana@outlook.com'],
		['dana@yaho.com', 'dana@yahoo.com'],
		['dana@walla.co.l', 'dana@walla.co.il'],
		['Dana.Levi+x@GMAIL.CON', 'Dana.Levi+x@gmail.com']
	])
		assert.equal(suggestEmail(typed), fixed, typed);
});

test('real domains, school and custom ones get no hint', () => {
	for (const ok of [
		'dana@gmail.com',
		'dana@GMAIL.COM',
		'dana@walla.co.il',
		'dana@yahoo.co.il',
		'dana@hotmail.co.uk',
		'dana@gmx.com',
		'dana@edu.gov.il',
		'dana@ort.org.il',
		'dana@mail.huji.ac.il',
		'dana@example.com',
		'dana@proton.me'
	])
		assert.equal(suggestEmail(ok), null, ok);
});

test('not shaped like an address: nothing to suggest', () => {
	for (const bad of ['', 'dana', 'dana@', '@gmail.com', 'dana@gmail', 'dana@localhost'])
		assert.equal(suggestEmail(bad), null, bad);
});
