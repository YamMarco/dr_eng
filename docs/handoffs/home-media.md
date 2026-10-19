# Handoff: home page, on the PC

## 1. Run the waitlist migration (first)

`drizzle/0004_waitlist.sql` (the `waitlist` table) isn't applied yet: cloud sessions have no database credentials. Until it runs, the home page waitlist answers "הרשימה עוד לא פתוחה" (503).

1. `front/.env.local` needs `DATABASE_MIGRATE_URL` = Supabase's **session** pooler (port 5432, Connect > Session pooler).
2. `cd front && npm run db:migrate`
3. Check in Supabase's table editor: `waitlist` exists with RLS on; join from the home page and see the row.

To let cloud sessions run migrations, add `DATABASE_MIGRATE_URL` as a secret in the cloud environment's settings.

## 2. Real photos and videos

The page (`front/src/routes/(site)/+page.svelte`) has 6 media slots. Each shows gradient art until it gets a file. Cloud sessions couldn't reach stock sites (network policy), so do this on a machine with open internet, or allow `images.unsplash.com`, `images.pexels.com`, `videos.pexels.com` in the environment's network settings first.

### Slots

Paths go in `front/src/lib/site/media.ts` (`{ image?, video? }`); files in `front/static/home/`. Alt text is in `he.ts` `site.home.heroAlt` / `site.home.moments[].alt`: update it to match the picture.

| Slot | Shape | Subject |
|---|---|---|
| `hero` | ~4:5 portrait, sits behind the phone mock (desktop ~500x560, phone full width) | A teen girl or boy, warm, natural light, looking at a phone. Subject off-center so the phone doesn't cover the face |
| `break` | 2:3 portrait card (288x416) | Teens on a school break, outdoors, laughing |
| `bus` | 2:3 | A teen with earbuds on a bus or train, phone in hand |
| `evening` | 2:3 | A teen writing at a laptop/desk in the evening, lamp light |
| `exam` | 2:3 | A focused teen at a desk, papers, clock or timer |
| `oral` | 2:3 | A teen speaking into a phone (recording) |

Text sits on top of the moment cards (title at the top, chip at the bottom; a dark gradient is already applied at the bottom): pick shots with calm areas at the top and bottom.

### Style (Revolut-like)

- Real people, candid, not posed stock smiles. Israeli / Mediterranean-looking teens where possible, mixed genders.
- Warm, bright, consistent color grade across all 6. Avoid visible brand logos and English signs that clash.
- Videos: 1-2 of the moments (e.g. `bus`, `oral`), 4-8 s seamless-ish loop, no audio.

### Sources

Free licenses only (Unsplash, Pexels, Mixkit for video); they cover this use. Note the photographer and source URL as a comment next to each entry in `media.ts`.

### Processing

- Images: WebP, quality ~75. Hero 1000px wide, cards 600x900. Target under 150 KB each.
- Videos: MP4 H.264, 720px tall, no audio track, under 1.5 MB, plus a WebP poster (first frame) set as `image`.
- `ffmpeg -i in.mp4 -an -vf "scale=-2:720" -c:v libx264 -crf 28 -preset slow -movflags +faststart out.mp4`
- `cwebp -q 75 -resize 600 900 in.jpg -o out.webp` (crop to 2:3 first).

### Checks

- CSP allows `self` for `img-src` and `media-src`, so local files need no config change. Don't hotlink from the stock CDNs.
- Look at 390px and 1280px, both themes; the hero chips must not cover the face. Reduced motion: videos still play muted (decorative), fine.
- `npm run check`, `npm run build`, commit.
