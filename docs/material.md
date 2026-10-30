# Material

Present state of what's in the app, per module, down to the lesson. Content lives in `front/src/lib/content/<module>/` (lessons), `front/src/lib/quiz/<module>/` (exams) and `front/src/lib/content/e/list-*.ts` (word decks). Titles: `lib/i18n/locales/titles.he.ts`. Screens = all screens in a lesson (preface + rounds). Nothing has been played through by a student yet.

Unit paths (`lib/curriculum.ts`): **4 points** = C, D, E, COBE. **5 points** = E, F, G, COBE.

## Module C (4 points)

Order: intro, then Part A vocabulary next to Part B reading, then Part C writing. Exams: `c-exam-2` Smart Glasses, `c-exam-3` Unusual Friendships, `c-exam-4` Sitting Too Much.

**c-2 Part A - Vocabulary.** Exam instruction words, then content words: 2 words a round (card, meaning, sentence, spelling), match-pairs, then a review round.

| Lesson | Title | Screens |
|---|---|---|
| c-5cd02dfa | פתיחה - Module C | 10 |
| c-q-words-1 | מילות שאלה: איפה ומה | 43 |
| c-q-words-2 | מילות שאלה: איך עונים | 41 |
| c-nav-words-1 | מילות ניווט: ניגוד וסיבה | 37 |
| c-nav-words-2 | מילות ניווט: דוגמאות וממצאים | 33 |
| c-content-1a/1b/1c | מילות תוכן: אנשים וקהילה / מחקר וממצאים / שינוי וסביבה | 43-48 |
| c-content-2a/2b/2c | מילות תוכן: התפתחות ולמידה / השפעה וערך / אחריות חברתית | 44 |
| c-vocab-test | מבחן סיכום - אוצר מילים | 65 |

**c-1 Part B - Reading.** Scanning method (traffic light, magnets), trap words, then the question types.

| Lesson | Title | Screens |
|---|---|---|
| c-l00 | אני מחפש, לא קורא | 26 |
| c-l01 | מפת הדרכים | 30 |
| c-l02 | שיטת הרמזור | 39 |
| c-l03 | P1 - ניווט בטקסט | 41 |
| c-l04 / c-numbers-names-q | מגנט לעין - מספרים ושמות / תרגול | 25 / 23 |
| c-l06 / c-not-q | NOT / תרגול | 23 / 26 |
| c-l07 / c-limiters-q | most / only / תרגול | 26 / 23 |
| c-l08 / c-b46b7e2b | however / but / כמו במבחן | 25 / 25 |
| c-l09 | שאלות אמריקאיות | 23 |
| c-l10 | תשובה קצרה | 27 |
| c-l11 | השלמת משפט | 32 |
| c-l12 | שתי תשובות | 26 |
| c-7c5330b8, c-649ed18f, c-221188d1 | timed recaps: חלק 1 / שאלות / שאלות 1 | 8 / 7 / 19 |

**c-3 Part C - Writing.** Opinion paragraph (70-90 words) built a piece at a time, then 4 topics.

| Lesson | Title | Screens |
|---|---|---|
| c-a45c17de | כתיבה - הקדמה | 1 |
| c-yes-no | YES or NO - לומר עמדה | 19 |
| c-because | because - לחבר לסיבה | 15 |
| c-in-addition | In addition - סיבה שנייה | 13 |
| c-for-example | For example - לפרט | 19 |
| c-in-conclusion | In conclusion - לסגור | 15 |
| c-subject-verb | Subject + Verb - משפט שלם | 16 |
| c-word-count | 70-90 מילים - לספור | 14 |
| c-topic-volunteer / vacation / school / cellphone | 4 full topics | 13-19 |

## Module D (4 points, literature)

5 works side by side, one section each, so a student opens the one their class studies: **d-1** The Road Not Taken, **d-2** Count That Day Lost, **d-3** Introduction to Poetry, **d-4** Thank You, Ma'am (story), **d-5** As I Grew Older. No exams.

Each work is the same 8-lesson chain (`d-<work>-<step>`):

| Step | Title | Screens |
|---|---|---|
| before | לפני הקריאה (10 words + match) | 21 |
| read | מבינים את השיר / הסיפור | 12-16 |
| meaning | הדובר / הדמויות והמשמעות | 15-16 |
| think | חושבים על השיר / הסיפור | 16 |
| answer | עונים כמו מקצוענים (ANSWER, PROVE, EXPLAIN) | 11 |
| challenge | אתגר ספרות | 7 |
| mastery | בדיקת שליטה | 9 |
| samples | שאלות ותשובות לדוגמה | 9 |

Open: Introduction to Poetry is licensed, so its poem screens show a summary until the 16 lines are typed in via /edit.

## Module E (4 and 5 points)

**Word decks** (Part II of the exam): the 4 Ministry lists, spaced repetition (Leitner boxes 1-5). `e-a` list 1 (205 words), `e-b` list 2 (214), `e-c` list 3 (218), `e-d` list 4 (219).

**e-1 Part I - Reading.** Topic-not-detail questions and completing answers.

| Lesson | Title | Screens |
|---|---|---|
| e-bridge | הבחינה והשיטה | 13 |
| e-method | השיטה בקצרה (side node) | 11 |
| e-topic / e-topic-q | על מה הפסקה? / שאלות נושא | 19 / 9 |
| e-complete | משלימים את התשובה | 13 |
| e-glossary-time | Glossary וניהול זמן | 10 |
| e-final | תרגול מסכם בזמן | 4 |

Exams: `e-exam-1` Can AI Make Students Smarter?, `e-exam-2` Gen Z Old Trends, `e-exam-3` TikTok Learning, `e-exam-4` Video Games.

## Module F (5 points, literature)

Two stories side by side, then a comparison. Story texts are not in the app (copyright): students read them in class. No exams.

Each story is a 7-lesson chain: **f-1** A Summer's Reading (`f-summer-*`), **f-2** Mr. Know-All (`f-know-all-*`).

| Step | Title | Screens |
|---|---|---|
| words | מילים לסיפור (12 words) | 15 |
| understand-1 / understand-2 | מבינים את הסיפור (1) / (2) | 12 / 12 |
| think | חושבים על הסיפור | 8 |
| answer | עונים כמו מקצוענים | 6 |
| mastery | משימת שליטה (80-100 words) | 2 |
| review | חזרה ותשובות לדוגמה | 14 |

**f-3:** `f-compare` משווים בין שני הסיפורים (3 screens), after both mastery lessons.

## Module G (5 points)

**g-1 Part A - Reading** (18 lessons, a chain, 2 rounds each: method, then exam level): g-reading-intro, g-scan, g-traffic-light, g-numbers, g-names, g-question-words, g-mc-eliminate, g-two-correct, g-difference, g-complete-answer, g-by-to, g-by-ing, g-open-answer, g-paraphrase, g-two-opinions, g-line-refs, g-time, g-final (5-15 screens each).

**g-2 Part B - Writing** (4-paragraph opinion essay, 120-140 words):

| Lesson | Title | Screens |
|---|---|---|
| g-w-essay-map | מפת 4 הפסקאות | 10 |
| g-w-present-perfect | Present Perfect | 6 |
| g-w-conditional | משפט תנאי | 5 |
| g-w-inversion | היפוך: Not only / Only by | 7 |
| g-w-templates | תבניות לפי סוג שאלה | 8 |
| g-w-ai-essay | חיבור מלא: AI בבית הספר (40 min) | 7 |

Exams (article + 9 questions + essay, 1:45): `g-exam-1` Missing Out, `g-exam-2` Phone Listening, `g-exam-3` Teenagers Can't Wake Up, `g-exam-4` The Call Nobody Answers, `g-exam-5` Friends You've Never Met.

## COBE (4 and 5 points, oral)

One module on both paths. Lessons have a 5-point version (`content5`). Grading follows the official 2027 rubric (`lib/content/rubrics/cobe.json`). Also: AI chat practice (`/chat`) and a phrase bank on speaking screens.

| Lesson | Title | Screens (4 / 5 pt) |
|---|---|---|
| **cobe-1 Part A - About me** | | |
| cobe-a-meet-exam | מכירים את הבחינה | 19 / 20 |
| cobe-a-answer-tools | הכלים שלי לתשובה | 17 |
| cobe-a-positive-rescue | כוח חיובי ועזרה ראשונה | 27 / 23 |
| cobe-a-talk-about-me | מדברים על עצמי | 14 / 11 |
| cobe-a-stories | סיפורים, אנשים וחלומות | 11 |
| **cobe-2 Part B - Project** | | |
| cobe-b-basics | היסודות של הפרויקט שלי | 17 / 16 |
| cobe-b-topic | הנושא ומה גיליתי | 12 |
| cobe-b-sources-team | מקורות, אתגרים ועבודת צוות | 15 |
| cobe-b-full-minute | מדברים דקה שלמה, לעומק | 15 / 16 |
| cobe-b-practice | תרגול פרויקט | 7 |
| **cobe-3 Part C - Clip** | | |
| cobe-c-how-it-works | איך עובד חלק ג׳ | 13 |
| cobe-c-describe | מתארים מה קרה | 12 |
| cobe-c-outcome-feelings | תוצאה ורגשות | 12 / 13 |
| cobe-c-interpret | מה אתם חושבים: פרשנות | 14 |
| cobe-c-practice | סט 2: תרגול ועזרה ראשונה | 14 |

Exam: `cobe-exam-1` COBE Practice Test 1 (3 parts).
