# Handoff: exam lock trusts the client's part count

## The gap

An exam is marked done (24h retake lock) once all its grading requests came back graded.
Each `/api/grade` exam request sends `exam: { quizId, attempt, parts }`, and
`recordExamPart` (`front/src/lib/server/examLock.ts`) marks the exam done when the stored
count reaches `parts`. The server takes `parts` from the client.

A modified client can send a higher `parts` (up to `MAX_EXAM_PARTS`, 8) so the exam never
counts as done: no lock, unlimited regrading. Exam grading has no daily cap (`DAILY_CAPS` in
`server/llmLimits.ts`), so only `GLOBAL_DAILY_CAP` (600/day, all users) stops it.

## Fix

Count the parts on the server from the exam content, keyed by `quizId`: one per reading part
that has a writing-task, plus one for the essay (a writing-task with `minWords`). It mirrors
`openAnswers` / grouping in `front/src/lib/feedback/gradeExam.ts`. Then drop `parts` from the
request, or reject a request whose `parts` doesn't match.

Catches:
- Answers that score 0 by rule (empty, not English, essay too short) are never sent, so a
  server count must allow for parts that never arrive.
- Any "all parts" rule can be dodged by never sending one part: the student gets the other
  grades and starts a new attempt. A server count alone doesn't close that.
- What does close it: the lock also starts a grace time (e.g. 1h) after the attempt's first
  graded part, even if not every part came back. A real failure still gets an hour to retry.

Also unknown `quizId`: reject (400) instead of trusting the client.
