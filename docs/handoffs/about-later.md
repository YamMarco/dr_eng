# Handoff: About page, after launch

Pulled from `/about` while the site only serves the waitlist and tester codes. The teacher
asked for no photo and no personal details for now. Restore when that changes.

## Teacher card

Sat between the intro and the first section: a `figure` card (`rounded-[2rem] bg-surface
ring-1 ring-line/70`), avatar circle (no photo, `GraduationCap` icon), name + role, the
credentials as a check list. The motto moved to the page's end; it can return to the card.

```ts
teacher: {
	name: 'ד״ר אמיל הלון',
	role: 'מוביל את צוות המורים שכתב את התכנים',
	credentials: [
		'דוקטור לספרות אנגלית',
		'מרצה בהשכלה הגבוהה ומכשיר מורים לאנגלית',
		'מכין לבגרות, לפסיכומטרי וללימודים אקדמיים'
	]
}
```

Meta description with the name:
`EngUp נבנתה בהובלת ד״ר אמיל הלון, מתוך 20 שנות הכנה לבגרות באנגלית: ...`

Before restoring: confirm the spelling "הלון" and that "צוות מורים" is accurate.

## Feedback link

Under the last section ("ממשיכים ללמוד ולהשתפר"): a `Mail` icon link to
`emailHref('משוב על EngUp')` (`$lib/support`), text `ספרו לנו מה עובד ומה פחות`. Needs the
real `SUPPORT_EMAIL` first (still `support@example.com`).

## Plans link

A muted `למסלולים` link under the closing join buttons. The nav still links `/plans`.
