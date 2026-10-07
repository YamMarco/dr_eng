# Graph Report - dr_eng  (2026-10-07)

## Corpus Check
- 226 files · ~522,319 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1694 nodes · 2437 edges · 160 communities (118 shown, 42 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `43b92e8d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- EditModel
- api.ts
- Section 5 · Eye Catchers · מילות שלילה
- What You Must Do When Invoked
- section: eye-catchers-negatives
- compilerOptions
- SvelteKit head/body Placeholders
- graphify reference: extra exports and benchmark
- Lesson structure — quick reference
- eslint.config.js
- Keyed Each Blocks
- prettier.config.js
- app.d.ts
- Favicon (Svelte Logo)
- graphify reference: query, path, explain
- settled() API
- Context API (createContext)
- CSS Custom Properties via style:
- Styling Child Components (:global)
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- .claude/CLAUDE.md
- extraction-spec.md
- Section 2 · P1 — לא קוראים את הטקסט
- validate.ts
- lesson-screens/types.ts
- WritingTask.svelte
- Lesson & content — data model
- הפלט
- Module C: what's good, what's bad, and what to do
- Section 20 · משפטים שעובדים
- content/index.ts
- examEditModel.svelte.ts
- Section 17 · בנק מילים · חברה וקהילה
- Section 21 · מקשרים ומרפאת שגיאות
- registry.ts
- Section 16 · עמדת הכותב
- Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations
- Section 22 · ניהול זמן
- Section 23 · YES או NO
- Section 24 · סיבה, הסבר, דוגמה
- Section 25 · בנק הדוגמאות ואורך התשובה
- GraphEditor.svelte
- eye catchers - names and numbers.spec.bak.md
- c.4.2c
- Section 10 · רב-ברירה ואלימינציה
- Section 11 · השלמת משפט
- Section 12 · שתי תשובות נכונות
- Section 13 · שאלות התייחסות
- Section 14 · שאלות הסקה
- Section 15 · רעיון מרכזי
- Section 19 · מקריאה לכתיבה
- חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה
- score.svelte.ts
- 3 · `s3-l2` — מציאה וסימון (c.3.3)
- 1 (vefore c.4.1, after c.3.4)
- LessonRunner.svelte
- Open
- content-edit/+server.ts
- snapshot-content.ts
- מודול C - המודול היחיד עם תוכן
- questions
- content-edit — the `/edit` and `/edit-exam` authoring workspaces
- questions
- questions
- questions
- questions
- questions
- questions
- ScreenPath
- eye catchers - negative limit contrast.md
- SpellWord.svelte
- בקשת מסך - `<שם-המסך>`
- Module C audit
- Module C quality and value report
- lesson-screens/schema.ts
- התחל כאן
- lessons/+page.svelte
- debug.svelte.ts
- mcp.ts
- סוגי המסכים שקיימים באפליקציה
- mcp/+server.ts
- checks/index.ts
- curriculum.ts
- SlideStage.svelte
- ExamEditModel
- screenChecks.ts
- MatchPairs.svelte
- quizzes.ts
- progress.ts
- 11. Implementation status
- חלק א׳ — עקרונות התוכנית
- agents.md
- AppBar.svelte
- 12. GPT post-fix review — now including writing
- חלק ד׳ — סקשנים 10–16: סוגי השאלות
- 13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes
- Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)
- lessonProgress.svelte.ts
- LessonScreen
- miniMarkdown.ts
- Button.svelte
- index.svelte.ts
- settings/+page.svelte
- scoring.ts
- dictionary-en-gb
- drizzle-kit
- eslint
- eslint-config-prettier
- llm.ts
- 14. GPT, round 7: response to Claude's post-fix review
- Module C review: teacher and student
- 15. Claude, round 7: response to GPT's section 14
- 7. Plan
- Part 2: History (the past)
- 9. Reviewers' views
- Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)
- @eslint/js
- 4. Teacher's view
- 6. Node-by-node grades
- eslint-plugin-svelte
- analysis.ts
- globals
- writingLint.ts
- prettier
- prettier-plugin-svelte
- Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)
- prettier-plugin-tailwindcss
- svelte
- svelte-check
- @sveltejs/adapter-auto
- @sveltejs/kit
- tailwindcss
- @tailwindcss/forms
- @tailwindcss/typography
- @tailwindcss/vite
- @types/node
- @types/nspell
- typescript
- QuizRunner.svelte
- llm-gateway
- typescript-eslint
- vite
- db/index.ts

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 39 edges
2. `LessonScreen` - 32 edges
3. `ExamEditModel` - 31 edges
4. `ScreenPath` - 28 edges
5. `Part 2: History (the past)` - 24 edges
6. `EditModelLike` - 20 edges
7. `LessonNode` - 15 edges
8. `Lesson structure — quick reference` - 13 edges
9. `scripts` - 13 edges
10. `QuizNode` - 13 edges

## Surprising Connections (you probably didn't know these)
- `leading()` --indirect_call--> `text()`  [INFERRED]
  front/src/lib/lesson-screens/PassageMark.svelte → front/src/lib/server/mcp.ts
- `addCategory()` --calls--> `prompt`  [INFERRED]
  front/src/lib/content-edit/SlideStage.svelte → front/src/lib/lesson-screens/WritingTask.svelte
- `IdentifiedScreen` --references--> `LessonScreen`  [EXTRACTED]
  front/src/lib/quiz/screenIds.ts → front/src/lib/lesson-screens/types.ts
- `validateExam()` --calls--> `screenProblems()`  [EXTRACTED]
  front/src/lib/content-edit/validate.ts → front/src/lib/lesson-screens/screenChecks.ts
- `markPending()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/SlideStage.svelte → front/src/lib/content-edit/fields/TokenPicker.svelte

## Import Cycles
- None detected.

## Communities (160 total, 42 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.29
Nodes (7): @capacitor/cli, dictionary-en, devDependencies, @capacitor/cli, dictionary-en, @sveltejs/vite-plugin-svelte, @sveltejs/vite-plugin-svelte

### Community 1 - "Svelte MCP Server (Project Config)"
Cohesion: 0.14
Nodes (20): get-documentation Tool, list-sections Tool, playground-link Tool, Project Configuration (TS, npm, prettier, eslint, tailwindcss, ai-tools), svelte-autofixer Tool, Svelte MCP Server (Project Config), get-documentation Tool, list-sections Tool (+12 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "scripts"
Cohesion: 0.06
Nodes (32): @capacitor/core, drizzle-orm, dependencies, @capacitor/core, drizzle-orm, @lucide/svelte, @modelcontextprotocol/server, nspell (+24 more)

### Community 5 - "api.ts"
Cohesion: 0.05
Nodes (28): post(), saveExamChanges(), saveLessonContent(), saveSection(), storedKey(), uploadImage(), EditStore, errorCount (+20 more)

### Community 6 - "Section 5 · Eye Catchers · מילות שלילה"
Cohesion: 0.06
Nodes (33): 4.c.5.1 · מילון השלילה, 4.c.5.2 · סימון שלילה בטקסט, 4.c.5.3 · `not` מול `not all`, 4.c.5.4 · P4 — NOT בשאלה = עצור, 4.c.5.5 · לבדוק את כל ארבע האפשרויות, 4.c.5.6 · שער סקשן 5, 4.c.6.1 · מילון ההגבלה, 4.c.6.2 · סימון בטקסט (+25 more)

### Community 7 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 8 - "section: eye-catchers-negatives"
Cohesion: 0.10
Nodes (19): c.4.2a, c.4.2b, c.4.2c, c.4.3a, c.4.3b, can be used as questions or preface, materail that can be used as questions or preface lesson, material (+11 more)

### Community 9 - "compilerOptions"
Cohesion: 0.14
Nodes (13): compilerOptions, allowJs, checkJs, esModuleInterop, forceConsistentCasingInFileNames, moduleResolution, resolveJsonModule, rewriteRelativeImportExtensions (+5 more)

### Community 10 - "SvelteKit head/body Placeholders"
Cohesion: 0.67
Nodes (3): RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure — quick reference"
Cohesion: 0.07
Nodes (27): AI editing - rule book for screen editors, Always read, Bottom line, Adding a screen type, Authoring a lesson, Conventions, Lesson structure — quick reference, Model (+19 more)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 25 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 26 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 27 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "Section 2 · P1 — לא קוראים את הטקסט"
Cohesion: 0.06
Nodes (32): 4.c.1.1 · חמש המילים שפותחות כל שאלה, 4.c.1.2 · כל מילה — לאן היא שולחת אותי, 4.c.1.3 · תשובה אחת אינה רשימה, 4.c.1.4 · מה מותר להביא מהראש, 4.c.1.5 · שער סקשן 1, 4.c.2.1 · כמה באמת צריך לקרוא, 4.c.2.2 · מילת המפתח היא הנושא, לא ה-what, 4.c.2.3 · ממילת המפתח לפסקה (+24 more)

### Community 34 - "validate.ts"
Cohesion: 0.23
Nodes (9): onMove(), onUp(), bucketLabel(), Issue, screenIssues(), validateExam(), validateSection(), advance() (+1 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.09
Nodes (22): ClozePickScreen, MarkAllCategory, MarkAllScreen, MarkWordScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+14 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.12
Nodes (14): allFilled, allOk, capitalIsError, checked, combinedText, contentOk, essayOk, essayText (+6 more)

### Community 37 - "Lesson & content — data model"
Cohesion: 0.22
Nodes (8): Entities, Files (`front/src/lib/content/`), Lesson & content — data model, Notes, Rules, Runtime state (separate from content), Screen taxonomy (the `type` discriminator), Serving layer

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "Module C: what's good, what's bad, and what to do"
Cohesion: 0.25
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Fixed since version 2.3, 6. For reference: scores and decisions, Module C: what's good, what's bad, and what to do

### Community 40 - "Section 20 · משפטים שעובדים"
Cohesion: 0.20
Nodes (10): 4.c.20.1 · בלי פועל אין משפט, 4.c.20.2 · מצא את הפועל, 4.c.20.3 · יחיד ורבים, 4.c.20.4 · זמנים — `I was think`, 4.c.20.5 · בלי `the` בהכללה, 4.c.20.6 · `because` דורש פסוקית שלמה, 4.c.20.7 · מילה, צירוף, משפט, 4.c.20.8 · ארבעה משפטים, ארבעה פעלים (+2 more)

### Community 41 - "content/index.ts"
Cohesion: 0.13
Nodes (13): c1Lessons, c2Lessons, c3Lessons, LessonBucket, SECTION_IDS, Bucket, all, allLessons (+5 more)

### Community 42 - "examEditModel.svelte.ts"
Cohesion: 0.40
Nodes (6): cQuizzes, getQuizNodesByModule(), QuizKind, QuizNode, QuizOptions, QuizPart

### Community 43 - "Section 17 · בנק מילים · חברה וקהילה"
Cohesion: 0.22
Nodes (9): 4.c.17.1 · קהילה והתנדבות — 10 מילים, 4.c.17.2 · חינוך ובריאות — 10 מילים, 4.c.17.3 · Notice — זיהוי בהקשר, 4.c.17.4 · community אינו country, 4.c.17.5 · volunteer — שם עצם וגם פועל, 4.c.17.6 · benefit — שם עצם מול צירוף, 4.c.17.7 · Use — משפט משלי, 4.c.17.8 · שער אוצר מילים 1 (+1 more)

### Community 44 - "Section 21 · מקשרים ומרפאת שגיאות"
Cohesion: 0.22
Nodes (9): 4.c.21.1 · חמשת המקשרים ותפקידם, 4.c.21.2 · `because` לא פותח משפט עצמאי, 4.c.21.3 · לא `however` ולא `but` יחד, 4.c.21.4 · `also` מול `although`, 4.c.21.5 · `for example` בלי `that`, 4.c.21.6 · מרפאת שגיאות — עשרה תיקונים, 4.c.21.7 · פסקה עם כל חמשת המקשרים, 4.c.21.8 · שער סקשן 21 (+1 more)

### Community 45 - "registry.ts"
Cohesion: 0.11
Nodes (5): leading(), lines, screenComponents, KEY, LessonSession

### Community 46 - "Section 16 · עמדת הכותב"
Cohesion: 0.25
Nodes (8): 4.c.16.1 · מילות עמדה, 4.c.16.2 · מילות עמדה הן ה-Eye Catchers כאן, 4.c.16.3 · ארבעת הטונים, 4.c.16.4 · ניטרלי אינו מאוזן, 4.c.16.5 · לא לחזק את הטון, 4.c.16.6 · הכותב, לא אני, 4.c.16.7 · שער סקשן 16, Section 16 · עמדת הכותב

### Community 47 - "Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations"
Cohesion: 0.25
Nodes (8): 4.c.18.1 · טכנולוגיה — 10 מילים, 4.c.18.2 · סביבה — 10 מילים, 4.c.18.3 · research הוא בלתי ספיר, 4.c.18.4 · affect מול effect, 4.c.18.5 · ארבעת הצירופים לכתיבה, 4.c.18.6 · effective חייב שם עצם אחריו, 4.c.18.7 · שער אוצר מילים 2, Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations

### Community 48 - "Section 22 · ניהול זמן"
Cohesion: 0.25
Nodes (8): 4.c.22.1 · לוח ה-90 דקות, 4.c.22.2 · P15 — סמן, עבור, חזור, 4.c.22.3 · לתעד את הזמן בסימון, 4.c.22.4 · רמזור ו-P15 יחד, 4.c.22.5 · סט קריאה מלא בזמן, 4.c.22.6 · כתיבה בזמן, 4.c.22.7 · שער סקשן 22, Section 22 · ניהול זמן

### Community 49 - "Section 23 · YES או NO"
Cohesion: 0.25
Nodes (8): 4.c.23.1 · מילות דעה, 4.c.23.2 · "שני הצדדים" מוריד נקודות, 4.c.23.3 · הכרעה ב-30 שניות, 4.c.23.4 · משפט הפתיחה, 4.c.23.5 · לא לשנות עמדה באמצע, 4.c.23.6 · דעה + סיבה + דוגמה, 4.c.23.7 · שער סקשן 23, Section 23 · YES או NO

### Community 50 - "Section 24 · סיבה, הסבר, דוגמה"
Cohesion: 0.25
Nodes (8): 4.c.24.1 · התבנית, 4.c.24.2 · סיבה אינה דוגמה, 4.c.24.3 · "it is good" אינו הסבר, 4.c.24.4 · דוגמה לא בגוף ראשון, 4.c.24.5 · עומק לפני רוחב, 4.c.24.6 · סיבה שנייה, אותה תבנית, 4.c.24.7 · שער סקשן 24, Section 24 · סיבה, הסבר, דוגמה

### Community 51 - "Section 25 · בנק הדוגמאות ואורך התשובה"
Cohesion: 0.25
Nodes (8): 4.c.25.1 · חמש הדוגמאות הכלליות, 4.c.25.2 · התאמת דוגמה לנושא, 4.c.25.3 · דוגמה אחת לכל סיבה, 4.c.25.4 · לספור מילים באמת, 4.c.25.5 · בלי משפטים מעורפלים, 4.c.25.6 · תשובה מלאה בזמן, 4.c.25.7 · שער סקשן 25, Section 25 · בנק הדוגמאות ואורך התשובה

### Community 52 - "GraphEditor.svelte"
Cohesion: 0.07
Nodes (18): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), rename(), selectedId (+10 more)

### Community 53 - "eye catchers - names and numbers.spec.bak.md"
Cohesion: 0.10
Nodes (20): 1 (will go after c.2.1 and before c.3.1), 2 (edit c.3.1), 3 (edit c.3.2), 4 (edit c.3.3), lessons material, preface, preface, preface (+12 more)

### Community 54 - "c.4.2c"
Cohesion: 0.33
Nodes (5): c.4.2c, material, message/ point of it, questions:, section 5: traffic light - Verify Before You Answer

### Community 55 - "Section 10 · רב-ברירה ואלימינציה"
Cohesion: 0.29
Nodes (7): 4.c.10.1 · ארבעת סוגי המסיחים, 4.c.10.2 · "לא מוזכר" — הפסילה הזולה, 4.c.10.3 · מילה משותפת אינה תשובה, 4.c.10.4 · חובה לעבור על כל ארבע, 4.c.10.5 · הכרעה בין השתיים ששרדו, 4.c.10.6 · שער סקשן 10, Section 10 · רב-ברירה ואלימינציה

### Community 56 - "Section 11 · השלמת משפט"
Cohesion: 0.29
Nodes (7): 4.c.11.1 · הפתיח מכתיב את ההמשך, 4.c.11.2 · P10 — מצא, התאם, בדוק, 4.c.11.3 · לא להתחיל משפט חדש, 4.c.11.4 · יחיד/רבים וזמן בתוך ההשלמה, 4.c.11.5 · לקצר בדיוק לחור, 4.c.11.6 · שער סקשן 11, Section 11 · השלמת משפט

### Community 57 - "Section 12 · שתי תשובות נכונות"
Cohesion: 0.33
Nodes (6): 4.c.12.1 · לזהות את הפורמט, 4.c.12.2 · P11 — מצאת אחת, המשך לחפש, 4.c.12.3 · הוכחה נפרדת לכל אחת, 4.c.12.4 · שלוש היא טעות, 4.c.12.5 · שער סקשן 12, Section 12 · שתי תשובות נכונות

### Community 58 - "Section 13 · שאלות התייחסות"
Cohesion: 0.29
Nodes (7): 4.c.13.1 · מילון ההפניה, 4.c.13.2 · P7 — משפט אחד אחורה, 4.c.13.3 · לא באותו משפט, 4.c.13.4 · מבחן ההצבה, 4.c.13.5 · יחיד/רבים כמסנן מהיר, 4.c.13.6 · שער סקשן 13, Section 13 · שאלות התייחסות

### Community 59 - "Section 14 · שאלות הסקה"
Cohesion: 0.29
Nodes (7): 4.c.14.1 · לזהות שאלת הסקה, 4.c.14.2 · שני נתונים לפני מסקנה, 4.c.14.3 · P13 — לחבר ולהסיק, 4.c.14.4 · "הגיוני" אינו "משתמע", 4.c.14.5 · הסקה מול רעיון מרכזי, 4.c.14.6 · שער סקשן 14, Section 14 · שאלות הסקה

### Community 60 - "Section 15 · רעיון מרכזי"
Cohesion: 0.29
Nodes (7): 4.c.15.1 · משפט הנושא, 4.c.15.2 · מוקדם אינו מרכזי, 4.c.15.3 · מבחן הכיסוי, 4.c.15.4 · רחב מדי נפסל גם הוא, 4.c.15.5 · כותרת בארבע מילים, 4.c.15.6 · שער סקשן 15, Section 15 · רעיון מרכזי

### Community 61 - "Section 19 · מקריאה לכתיבה"
Cohesion: 0.29
Nodes (7): 4.c.19.1 · Notice — מה שווה לקחת, 4.c.19.2 · Understand — מה זה אומר כאן, 4.c.19.3 · Adapt — לקחת את המבנה, 4.c.19.4 · העתקה אינה התאמה, 4.c.19.5 · "according to me" אינו קיים, 4.c.19.6 · שער סקשן 19, Section 19 · מקריאה לכתיבה

### Community 62 - "חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה"
Cohesion: 0.25
Nodes (8): 4.c.26.1 · חצי בחינה — קריאה, 4.c.26.2 · חצי בחינה — כתיבה, 4.c.26.3 · סימולציה מלאה, 4.c.26.4 · איזה Pattern נכשל, 4.c.26.5 · תיקון ממוקד — דפוס אחד, 4.c.26.6 · ערכת הבחינה האישית, Section 26 · סימולציה ותיקון, חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה

### Community 63 - "score.svelte.ts"
Cohesion: 0.10
Nodes (6): KEY, ScreenMode, KEY, LessonScore, KEY, QuizAnswerSlot

### Community 65 - "3 · `s3-l2` — מציאה וסימון (c.3.3)"
Cohesion: 0.10
Nodes (19): 1 · `eye_catch_intro` — למה מספרים ושמות, 2 · `s3-l1` — מילים: מגנטים לעין (c.3.2), 3 · `s3-l2` — מציאה וסימון (c.3.3), 4 · `s3-l3` — שימוש לניווט (c.3.4), Eye catchers — מספרים ושמות (section c.3), Implementation checklist — done (front/src/lib/content/c/c-3.ts), Plan of the section, preface (+11 more)

### Community 66 - "1 (vefore c.4.1, after c.3.4)"
Cohesion: 0.40
Nodes (5): 1 (vefore c.4.1, after c.3.4), examples, message, preface, questions

### Community 67 - "LessonRunner.svelte"
Cohesion: 0.06
Nodes (30): allScreenPaths, allScreens, baseScreens, canRecapPreface, completesNode, currentPath, currentScreen, debugOpen (+22 more)

### Community 68 - "Open"
Cohesion: 0.20
Nodes (9): Critical, Decisions, Deferred to the accessibility pass, Fixed on 2026-10-06 (branch ux-fixes, merged), High, History, Medium, Open (+1 more)

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.19
Nodes (20): checkAuth(), emit(), extractArrayLiteral(), matchingBracketEnd(), mergeById(), parseArrayLiteral(), splitArrayHead(), sq() (+12 more)

### Community 70 - "snapshot-content.ts"
Cohesion: 0.22
Nodes (9): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+1 more)

### Community 71 - "מודול C - המודול היחיד עם תוכן"
Cohesion: 0.29
Nodes (6): המודולים, חלק א׳ - הבנת הנקרא, חלק ב׳ - אוצר מילים, חלק ג׳ - כתיבה, מה כבר קיים באפליקציה, מודול C - המודול היחיד עם תוכן

### Community 72 - "questions"
Cohesion: 0.33
Nodes (6): 3a, preface, questions, round 1, round 2, round 3

### Community 73 - "content-edit — the `/edit` and `/edit-exam` authoring workspaces"
Cohesion: 0.22
Nodes (8): content-edit — the `/edit` and `/edit-exam` authoring workspaces, Detach, Exam editor — `ExamEditWorkspace.svelte` / `ExamEditorView.svelte`, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

### Community 74 - "questions"
Cohesion: 0.33
Nodes (6): 3b, preface, questions, round 1, round 2, round 3

### Community 75 - "questions"
Cohesion: 0.33
Nodes (6): 3c, preface, questions, round 1, round 2, round 3

### Community 76 - "questions"
Cohesion: 0.33
Nodes (6): 4a (require 3a), preface, questions, round 1, round 2, round 3

### Community 77 - "questions"
Cohesion: 0.33
Nodes (6): 4b (require 3b), preface, questions, round 1, round 2, round 3

### Community 78 - "questions"
Cohesion: 0.33
Nodes (6): 4c (require 3c), preface, questions, round 1, round 2, round 3

### Community 79 - "questions"
Cohesion: 0.33
Nodes (6): 5 (require 4c,a,b), preface, questions, round 1, round 2, round 3

### Community 81 - "eye catchers - negative limit contrast.md"
Cohesion: 0.50
Nodes (3): 2 (c.4.1), implemented, material

### Community 82 - "SpellWord.svelte"
Cohesion: 0.33
Nodes (5): RATE, RULES, speak(), speechSupported(), speechText()

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "Module C audit"
Cohesion: 0.05
Nodes (40): 1. Replace placeholder/template content (biggest lift), 2. Fix gating and order, 3. Spiral, don't repeat, 4. Connect reading and writing, 5. Fix facts, 6. Verify with play, 7. Tooling (last), Fixed on 2026-09-19 (+32 more)

### Community 86 - "Module C quality and value report"
Cohesion: 0.09
Nodes (21): 1. Replace the final reading summary with a real simulation, 2. Require production before showing model answers, 3. Make transfer rounds mandatory in the reading path, 4. Rewrite weak distractors, 5. Reframe shortcuts as hypotheses, 6. Fix expectation and scoring messages, Bottom line, Highest-value improvements (+13 more)

### Community 87 - "lesson-screens/schema.ts"
Cohesion: 0.07
Nodes (26): clozePickSchema, dir, index, markAllCategorySchema, markAllSchema, markWordSchema, matchPairsSchema, mcqSchema (+18 more)

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "lessons/+page.svelte"
Cohesion: 0.06
Nodes (37): hashString(), ICONS, lessonIcon(), Entry, LocationMap, moduleLocation, ModuleLocationStore, persist() (+29 more)

### Community 90 - "debug.svelte.ts"
Cohesion: 0.18
Nodes (3): auth, AuthStore, DebugStore

### Community 91 - "mcp.ts"
Cohesion: 0.28
Nodes (13): applyRaw(), screenSchemas, checkScreen(), buildServer(), editingGuide(), linkedPaths(), validationReport(), branch() (+5 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "mcp/+server.ts"
Cohesion: 0.33
Nodes (4): mcpHandler, DELETE, GET, POST

### Community 94 - "checks/index.ts"
Cohesion: 0.08
Nodes (41): browserDictionaries(), bytes(), checkWriting(), base(), issue(), languageIssues(), MODALS, PAST (+33 more)

### Community 95 - "curriculum.ts"
Cohesion: 0.16
Nodes (12): CurriculumModule, CurriculumSection, getModule(), getUnitGroup(), modules, textSection, UnitGroup, unitGroups (+4 more)

### Community 96 - "SlideStage.svelte"
Cohesion: 0.06
Nodes (49): ActiveField, ActiveLine, applyBlockKind(), BLOCK_KIND_CLASS, BlockKind, currentBlock(), formatAlign(), formatBold() (+41 more)

### Community 98 - "screenChecks.ts"
Cohesion: 0.24
Nodes (9): MarkAllSegment, markAllSegments(), lessonScreenSchema, duplicates(), outOfRange(), ScreenCheck, ScreenProblem, screenProblems() (+1 more)

### Community 99 - "MatchPairs.svelte"
Cohesion: 0.25
Nodes (4): mistakes, pick(), recordAnswer(), primaryAction()

### Community 100 - "quizzes.ts"
Cohesion: 0.18
Nodes (10): allQuizNodes, allQuizzes, AssortedQuiz, assortedQuizzes, getQuiz(), MinistryQuiz, ministryQuizzes, Quiz (+2 more)

### Community 101 - "progress.ts"
Cohesion: 0.30
Nodes (13): attemptKey(), clearInProgress(), getInProgress(), getLastAttempt(), hasStorage(), progressKey(), QuizAttempt, QuizInProgress (+5 more)

### Community 102 - "11. Implementation status"
Cohesion: 0.40
Nodes (5): §11. Implementation status, Known side effects, Owner decisions made during implementation, Plan steps, Resume here (P6 rollout)

### Community 103 - "חלק א׳ — עקרונות התוכנית"
Cohesion: 0.25
Nodes (8): 15 ה-Patterns — מקרא מרוכז, enum סוגי תרגיל, חלק א׳ — עקרונות התוכנית, כללי מעבר גלובליים, למה המבנה הזה, מאגר הטקסטים, מודל הנתונים לאפליקציה, מפת הסקשנים

### Community 105 - "agents.md"
Cohesion: 0.33
Nodes (5): graphify, mission, persona, skills, workflow

### Community 106 - "AppBar.svelte"
Cohesion: 0.13
Nodes (5): reducedMotion, PALETTE, SectionTheme, formattedDate, i()

### Community 107 - "12. GPT post-fix review — now including writing"
Cohesion: 0.40
Nodes (5): §12. GPT post-fix review — now including writing, Current verdict (editorial estimates, not measured outcomes), Findings that keep the grade down (highest priority first), Two voices and the next decision, What genuinely improved

### Community 108 - "חלק ד׳ — סקשנים 10–16: סוגי השאלות"
Cohesion: 0.29
Nodes (6): Module C — תוכנית לימוד מלאה (v3), nodes החזרה, הערות מימוש, חלק ד׳ — סקשנים 10–16: סוגי השאלות, חלק ו׳ — חזרה מרווחת, מיפוי, והערות מימוש, מיפוי לתוכן הקיים באפליקציה

### Community 109 - "13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes"
Cohesion: 0.40
Nodes (5): 13.1 GPT's section 12 findings, checked against the source, 13.2 Findings GPT missed, 13.3 My grades (editorial, like GPT's; not measured), 13.4 Where I agree and disagree with GPT's next steps, §13. Claude post-fix review, round 6: Parts A, B, C and the exam quizzes

### Community 110 - "Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.3 (replaced on 2026-10-03)

### Community 111 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (4): lessonProgress, LessonProgressStore, persist(), ProgressMap

### Community 113 - "LessonScreen"
Cohesion: 0.26
Nodes (6): screenList(), blankScreen(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, LessonRound, LessonScreen

### Community 114 - "miniMarkdown.ts"
Cohesion: 0.15
Nodes (15): CALLOUT_ICONS, DEFAULT_CALLOUT_ICON, CALLOUT_BLOCK_CLASS, ESCAPE, HEADER_CLASS, isolateQuotes(), isolateSentences(), mdBlock() (+7 more)

### Community 116 - "index.svelte.ts"
Cohesion: 0.20
Nodes (7): dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he

### Community 118 - "scoring.ts"
Cohesion: 0.20
Nodes (11): FILLER, isSentenceCompletionMatch(), normalize(), isMarkAllPass(), MATCH_PAIRS_MAX_MISTAKES, normalize(), Scored, scoreQuiz() (+3 more)

### Community 123 - "llm.ts"
Cohesion: 0.50
Nodes (4): chat(), llmConfigured(), LlmResult, LlmRole

### Community 124 - "14. GPT, round 7: response to Claude's post-fix review"
Cohesion: 0.40
Nodes (5): §14. GPT, round 7: response to Claude's post-fix review, Corrections I accept, One correction to Claude's evidence, Shared next step, with the disagreement resolved, Where I remain firm

### Community 125 - "Module C review: teacher and student"
Cohesion: 0.13
Nodes (14): Bottom line, Change since the audit (2026-09-19), Module C review: teacher and student, Student's grades, Teacher's grades, Top fixes, by value per effort, Voice 1: the English teacher, Voice 2: the student (+6 more)

### Community 126 - "15. Claude, round 7: response to GPT's section 14"
Cohesion: 0.40
Nodes (5): §15. Claude, round 7: response to GPT's section 14, Agreed work order (both reviewers), Checks, What I concede, Where we now stand

### Community 127 - "7. Plan"
Cohesion: 0.40
Nodes (5): §7. Plan, Phase 1: trust fixes (about 1 day), Phase 2: item rigor (about half a day), Phase 3: validity (about 2 days), Phase 4: efficiency and verification

### Community 128 - "Part 2: History (the past)"
Cohesion: 0.15
Nodes (13): §10. Change record, §1. Verdict, §2. The real exam, §3. Scorecard by dimension, §5. Student's view, §8. Open questions for you, Earlier wording (superseded), Original opening (2026-09-28 to 2026-09-29) (+5 more)

### Community 129 - "9. Reviewers' views"
Cohesion: 0.40
Nodes (5): §9. Reviewers' views, Claude, Claude, round 2, GPT, GPT, round 2

### Community 130 - "Snapshot: Part 1 as it was in version 2.1 (replaced on 2026-09-30)"
Cohesion: 0.22
Nodes (9): 1. Verdict today, 2. Module C compared with the real exam, 3. What works (keep it), 4. Open issues, most harmful first, 5. Fixed so far, 6. Work order (agreed by both reviewers), 7. Decisions, 8. Where the reviewers stand (+1 more)

### Community 132 - "4. Teacher's view"
Cohesion: 0.67
Nodes (3): §4. Teacher's view, Keep, Problems

### Community 133 - "6. Node-by-node grades"
Cohesion: 0.67
Nodes (3): §6. Node-by-node grades, Part A: vocabulary, Part B: reading

### Community 135 - "analysis.ts"
Cohesion: 0.29
Nodes (9): analyzeWriting(), CONNECTORS, occurrences(), RubricResult, sentences(), TOPIC_WORDS, VAGUE_WORDS, words() (+1 more)

### Community 137 - "writingLint.ts"
Cohesion: 0.36
Nodes (9): contentWords(), EXPLAINERS, LintIssue, lintWriting(), STOP, usesWord(), VAGUE, words() (+1 more)

### Community 140 - "Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)"
Cohesion: 0.29
Nodes (7): 1. In short, 2. What's good, 3. What's bad (most serious first), 4. The plan, in order, 5. Already fixed, 6. For reference: scores and decisions, Snapshot: Part 1 as it was in version 2.2 (replaced on 2026-09-30)

### Community 153 - "QuizRunner.svelte"
Cohesion: 0.12
Nodes (11): i(), advance(), footerLabel, partBreaks, passageIndices, QuizAnswerSlot, remainingSeconds, showTimer (+3 more)

### Community 154 - "llm-gateway"
Cohesion: 0.40
Nodes (4): Deploy, llm-gateway, Rules, Run locally

## Knowledge Gaps
- **835 isolated node(s):** `Model`, `Where things live (`front/src/`)`, `Authoring a lesson`, `Screen types`, `Text formatting syntax` (+830 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **42 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `LessonScreen` connect `LessonScreen` to `SlideStage.svelte`, `ExamEditModel`, `validate.ts`, `screenChecks.ts`, `lesson-screens/types.ts`, `snapshot-content.ts`, `content/index.ts`, `examEditModel.svelte.ts`, `registry.ts`, `ScreenPath`, `scoring.ts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `ScreenPath` connect `ScreenPath` to `ExamEditModel`, `validate.ts`, `EditModel`, `content/index.ts`, `examEditModel.svelte.ts`, `LessonScreen`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `text()` connect `Button.svelte` to `SlideStage.svelte`, `mcp.ts`, `registry.ts`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `Model`, `Where things live (`front/src/`)`, `Authoring a lesson` to the rest of the system?**
  _835 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._