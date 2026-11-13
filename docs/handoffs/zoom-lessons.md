# Handoff: Zoom group lessons, testing

Design and setup: `docs/platform.md`, "Group lessons (Zoom)". This is the test state and what is left.

## State

- Code is on `main` and deployed; `zoom_registrants` exists in Supabase ("english"); the four `ZOOM_*` env vars are set in Vercel (Production) and redeployed.
- Test host: a **free (Basic) Zoom account** (`us04web.zoom.us`), recurring weekly meeting "my test meeting", Fridays 14:00 Israel, 7 occurrences. Server-to-Server OAuth app active.
- Works, checked against Zoom's API directly: token, scopes, meeting read (occurrences), recordings answer 404 until one exists (handled).
- Home card loads and asks for a name (`GET /api/lessons` is fine).

## The issue

Submitting the name fails with "ההרשמה לא הצליחה" (`POST /api/lessons` answers 502). Cause: **Zoom allows registrants only on paid accounts.** The register call returns HTTP 400, `"Only available for paid users"`. Nothing is wrong in our code or the app's scopes.

A free account also caps a meeting at 40 minutes (the schedule shows `duration: 40`) and, as far as we know, has no cloud recording. Not checked yet.

## Next

1. **Upgrade the host to Zoom Pro** (a month on the owner's account, or a trial). The teacher needs a paid plan for production anyway.
2. In the meeting's options turn on **Registration**: register once, attend any; approval manual; registration emails off. Check the waiting room, passcode, no join before host, host-only screen share, chat off, auto-recording off.
3. Retry the name form on `/app` (admin account). No redeploy needed. Expect: the next lesson, "ליומן", and the join button from 10 minutes before the start.
4. Run the rest of the checks below.
5. If paid Zoom is not an option: drop registration for one fixed link with a passcode and a waiting room (the teacher admits by name). That loses personal links, removal when access ends, and the one-link-per-person guard.

## Checks

| # | Do | Expect |
|---|---|---|
| 1 | Admin on `/app`, enter a name | Card shows the next lesson; Zoom lists one approved registrant named so, with an `@lessons.engup.co.il` alias email |
| 2 | Start the meeting in Zoom; click join | Zoom opens in a new tab; the student waits in the waiting room under the typed name |
| 3 | "ליומן" | `.ics` in Israel time; links to `/app`, never to Zoom |
| 4 | Open the same join link on a second device | Zoom's behavior (believed: one person per personal link); note what happens |
| 5 | Register through the public meeting link with a made-up name | Stays pending; never reaches the waiting room |
| 6 | Second account, no lessons plan | No card; a link to `/plans` |
| 7 | Same account with a test order (below) | Name form, then the same as 1-2 |
| 8 | Expire the order, then call the cleanup (below) | `{"removed":1}`; the registrant is gone from Zoom; the old link stops working; the admin registrant stays (no orders) |
| 9 | Record to the cloud, end the meeting, wait for processing, reload (cache up to 5 min) | Card shows the recording with its passcode |
| 10 | Edit the next occurrence's time; delete one occurrence | Card follows within 5 min; the deleted week is skipped |

Test order (Supabase SQL editor, the user id from Authentication > Users):

```sql
insert into orders (user_id, plan_id, price, total, status, access_until)
values ('USER_UUID', 'group-month', 0, 0, 'free', now() + interval '7 days');
-- expire it:
update orders set access_until = now() - interval '1 minute' where user_id = 'USER_UUID';
```

Cleanup run: `curl -H "Authorization: Bearer $CRON_SECRET" https://www.engup.co.il/api/cron/lessons`.

## Names

Any letters (Hebrew, English, Arabic, others), spaces, `'`, `׳`, `.`, `-`; 2 to 30 characters; a first name alone passes. The hint only suggests first name plus the first letter of the surname.

## Before production

- The test Client Secret was pasted into a chat: **regenerate it** in the Zoom Marketplace app and update `ZOOM_CLIENT_SECRET` in Vercel.
- Remove the unused scopes from the app (`meeting:delete:meeting:*`, `webinar:*`, the `:master` variants). Keep `meeting:read:meeting:admin`, `meeting:write:registrant:admin`, `meeting:delete:registrant:admin`, `cloud_recording:read:list_recording_files:admin`.
- Move to the teacher's own Zoom account: new meeting and app, new env values, redeploy. He owns the schedule in Zoom.
- Delete the test orders, users and registrants.
- One meeting id only; several groups would need a change (`platform.md`).
- Unexplained: one 404 seen in the browser console on `/app` during the first test. Find the URL in the Network tab.
