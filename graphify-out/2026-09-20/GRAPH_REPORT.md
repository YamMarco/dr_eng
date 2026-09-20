# Graph Report - dr_eng  (2026-09-20)

## Corpus Check
- 227 files · ~229,498 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1201 nodes · 1480 edges · 184 communities (168 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `90e538d9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- lessons/+page.svelte
- score.svelte.ts
- חלק א׳ — עקרונות התוכנית
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
- CLAUDE.md
- .claude/CLAUDE.md
- extraction-spec.md
- Section 2 · P1 — לא קוראים את הטקסט
- EditWorkspace.svelte
- lesson-screens/types.ts
- WritingTask.svelte
- Lesson & content — data model
- הפלט
- index.svelte.ts
- Section 20 · משפטים שעובדים
- EditModel
- Section 17 · בנק מילים · חברה וקהילה
- Section 21 · מקשרים ומרפאת שגיאות
- curriculum.ts
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
- חלק ד׳ — סקשנים 10–16: סוגי השאלות
- Section 13 · שאלות התייחסות
- Section 14 · שאלות הסקה
- Section 15 · רעיון מרכזי
- Section 19 · מקריאה לכתיבה
- חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה
- debug.svelte.ts
- 3 · `s3-l2` — מציאה וסימון (c.3.3)
- 1 (vefore c.4.1, after c.3.4)
- LessonRunner.svelte
- changes
- content-edit/+server.ts
- svelte/transition
- מודול C - המודול היחיד עם תוכן
- questions
- content-edit — the `/edit` authoring workspace
- questions
- questions
- questions
- questions
- questions
- questions
- exam/+page.svelte
- eye catchers - negative limit contrast.md
- lessonProgress.svelte.ts
- בקשת מסך - `<שם-המסך>`
- Module C roadmap: from 7.5 to 9
- editModel.svelte.ts
- registry.ts
- התחל כאן
- moduleLocation.svelte.ts
- content/index.ts
- session.svelte.ts
- סוגי המסכים שקיימים באפליקציה
- הקול והסגנון
- Mcq.svelte
- validate.ts
- activeField.svelte.ts
- ExamSession
- lessonIcon.ts
- ScreenPath
- Section 3 · Eye Catchers · מספרים
- Section 4 · Eye Catchers · שמות
- duolingo-program.md
- Section 1 · לפענח את השאלה
- Section 5 · Eye Catchers · מילות שלילה
- Section 8 · הרמזור — לבדוק לפני שעונים
- Section 6 · Eye Catchers · מילות הגבלה
- Section 7 · Eye Catchers · ניגוד
- Section 9 · שאלות פרט
- MarkAll.svelte
- module-c-audit_23c616f8.md

## God Nodes (most connected - your core abstractions)
1. `EditModel` - 32 edges
2. `LessonNode` - 15 edges
3. `LessonScreen` - 15 edges
4. `What You Must Do When Invoked` - 12 edges
5. `withActive()` - 11 edges
6. `ReviewNotesStore` - 11 edges
7. `compilerOptions` - 11 edges
8. `Lesson structure — quick reference` - 11 edges
9. `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` - 11 edges
10. `Module C roadmap: from 7.5 to 9` - 11 edges

## Surprising Connections (you probably didn't know these)
- `issuesByNode()` --indirect_call--> `i()`  [INFERRED]
  front/src/lib/content-edit/validate.ts → front/src/lib/content-edit/fields/TokenPicker.svelte
- `get-documentation Tool` --semantically_similar_to--> `get-documentation Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `list-sections Tool` --semantically_similar_to--> `list-sections Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `svelte-autofixer Tool` --semantically_similar_to--> `svelte-autofixer Tool`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md
- `Svelte MCP Server (Project Config)` --semantically_similar_to--> `Svelte MCP Server`  [INFERRED] [semantically similar]
  front/AGENTS.md → front/.github/agents/svelte-file-editor.agent.md

## Import Cycles
- None detected.

## Communities (184 total, 16 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.04
Nodes (45): @capacitor/cli, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-svelte, devDependencies, @capacitor/cli, eslint (+37 more)

### Community 1 - "Svelte MCP Server (Project Config)"
Cohesion: 0.14
Nodes (20): get-documentation Tool, list-sections Tool, playground-link Tool, Project Configuration (TS, npm, prettier, eslint, tailwindcss, ai-tools), svelte-autofixer Tool, Svelte MCP Server (Project Config), get-documentation Tool, list-sections Tool (+12 more)

### Community 2 - "Snippet Blocks ({#snippet})"
Cohesion: 0.06
Nodes (36): Attachment Factories Pattern, Attachments ({@attach}), createAttachmentKey API, fromAction API (actions to attachments), Await Expressions, experimental.async Config Option, fork() API (Preloading), <svelte:boundary> pending Snippet (+28 more)

### Community 3 - "scripts"
Cohesion: 0.11
Nodes (18): @capacitor/core, dependencies, @capacitor/core, @lucide/svelte, name, private, scripts, build (+10 more)

### Community 4 - "lessons/+page.svelte"
Cohesion: 0.22
Nodes (3): PALETTE, SectionTheme, ./$types

### Community 5 - "score.svelte.ts"
Cohesion: 0.17
Nodes (3): oi(), KEY, LessonScore

### Community 6 - "חלק א׳ — עקרונות התוכנית"
Cohesion: 0.25
Nodes (8): 15 ה-Patterns — מקרא מרוכז, enum סוגי תרגיל, חלק א׳ — עקרונות התוכנית, כללי מעבר גלובליים, למה המבנה הזה, מאגר הטקסטים, מודל הנתונים לאפליקציה, מפת הסקשנים

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
Cohesion: 0.17
Nodes (11): Adding a screen type, Authoring a lesson, Conventions, Lesson structure — quick reference, Model, Node / path rules, Runner rules, Screen types (+3 more)

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

### Community 30 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): graphify, mission, persona, skills, workflow

### Community 33 - "Section 2 · P1 — לא קוראים את הטקסט"
Cohesion: 0.22
Nodes (9): 4.c.2.1 · כמה באמת צריך לקרוא, 4.c.2.2 · מילת המפתח היא הנושא, לא ה-what, 4.c.2.3 · ממילת המפתח לפסקה, 4.c.2.4 · לקרוא סביב, לא את הפסקה, 4.c.2.5 · P1 מקצה לקצה, 4.c.2.6 · המסיח מהפסקה הלא נכונה, 4.c.2.7 · P1 עם שעון, 4.c.2.8 · שער סקשן 2 (+1 more)

### Community 34 - "EditWorkspace.svelte"
Cohesion: 0.09
Nodes (15): post(), saveLessonContent(), saveSection(), storedKey(), EditStore, errorCount, hint, issues (+7 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.10
Nodes (20): ClozePickScreen, MarkAllCategory, MarkAllScreen, MarkWordScreen, MatchPairsScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion (+12 more)

### Community 36 - "WritingTask.svelte"
Cohesion: 0.18
Nodes (10): recordAnswer(), allFilled, allOk, checked, combinedText, minorIssues, primaryAction(), punctuationOk (+2 more)

### Community 37 - "Lesson & content — data model"
Cohesion: 0.22
Nodes (8): Entities, Files (`front/src/lib/content/`), Lesson & content — data model, Notes, Rules, Runtime state (separate from content), Screen taxonomy (the `type` discriminator), Serving layer

### Community 38 - "הפלט"
Cohesion: 0.17
Nodes (11): 1. איפה זה יושב, 2. טבלת השיעורים, 3. כל שיעור במלואו, 4. סוג מסך חדש, אם נדרש, 5. מה חסר, הפלט, הפרומפט - מעתיקים את כל מה שמתחת לקו ומדביקים בצ׳אט, הקלט (+3 more)

### Community 39 - "index.svelte.ts"
Cohesion: 0.18
Nodes (7): dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he

### Community 40 - "Section 20 · משפטים שעובדים"
Cohesion: 0.20
Nodes (10): 4.c.20.1 · בלי פועל אין משפט, 4.c.20.2 · מצא את הפועל, 4.c.20.3 · יחיד ורבים, 4.c.20.4 · זמנים — `I was think`, 4.c.20.5 · בלי `the` בהכללה, 4.c.20.6 · `because` דורש פסוקית שלמה, 4.c.20.7 · מילה, צירוף, משפט, 4.c.20.8 · ארבעה משפטים, ארבעה פעלים (+2 more)

### Community 43 - "Section 17 · בנק מילים · חברה וקהילה"
Cohesion: 0.22
Nodes (9): 4.c.17.1 · קהילה והתנדבות — 10 מילים, 4.c.17.2 · חינוך ובריאות — 10 מילים, 4.c.17.3 · Notice — זיהוי בהקשר, 4.c.17.4 · community אינו country, 4.c.17.5 · volunteer — שם עצם וגם פועל, 4.c.17.6 · benefit — שם עצם מול צירוף, 4.c.17.7 · Use — משפט משלי, 4.c.17.8 · שער אוצר מילים 1 (+1 more)

### Community 44 - "Section 21 · מקשרים ומרפאת שגיאות"
Cohesion: 0.22
Nodes (9): 4.c.21.1 · חמשת המקשרים ותפקידם, 4.c.21.2 · `because` לא פותח משפט עצמאי, 4.c.21.3 · לא `however` ולא `but` יחד, 4.c.21.4 · `also` מול `although`, 4.c.21.5 · `for example` בלי `that`, 4.c.21.6 · מרפאת שגיאות — עשרה תיקונים, 4.c.21.7 · פסקה עם כל חמשת המקשרים, 4.c.21.8 · שער סקשן 21 (+1 more)

### Community 45 - "curriculum.ts"
Cohesion: 0.15
Nodes (14): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+6 more)

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
Nodes (15): bands, canvasHeight, nodeHitbox(), nodePointerMove(), nodePointerUp(), pick(), selectedId, selectedIsRoot (+7 more)

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

### Community 57 - "חלק ד׳ — סקשנים 10–16: סוגי השאלות"
Cohesion: 0.29
Nodes (7): 4.c.12.1 · לזהות את הפורמט, 4.c.12.2 · P11 — מצאת אחת, המשך לחפש, 4.c.12.3 · הוכחה נפרדת לכל אחת, 4.c.12.4 · שלוש היא טעות, 4.c.12.5 · שער סקשן 12, Section 12 · שתי תשובות נכונות, חלק ד׳ — סקשנים 10–16: סוגי השאלות

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

### Community 63 - "debug.svelte.ts"
Cohesion: 0.14
Nodes (3): DebugStore, ThemeMode, ThemeStore

### Community 65 - "3 · `s3-l2` — מציאה וסימון (c.3.3)"
Cohesion: 0.10
Nodes (19): 1 · `eye_catch_intro` — למה מספרים ושמות, 2 · `s3-l1` — מילים: מגנטים לעין (c.3.2), 3 · `s3-l2` — מציאה וסימון (c.3.3), 4 · `s3-l3` — שימוש לניווט (c.3.4), Eye catchers — מספרים ושמות (section c.3), Implementation checklist — done (front/src/lib/content/c/c-3.ts), Plan of the section, preface (+11 more)

### Community 66 - "1 (vefore c.4.1, after c.3.4)"
Cohesion: 0.40
Nodes (5): 1 (vefore c.4.1, after c.3.4), examples, message, preface, questions

### Community 67 - "LessonRunner.svelte"
Cohesion: 0.07
Nodes (25): baseScreens, canRecapPreface, currentPath, currentScreen, debugOpen, direction, editHref, footerDisabled (+17 more)

### Community 68 - "changes"
Cohesion: 0.29
Nodes (6): changes, l04, l05, l06, notes for later, rules

### Community 69 - "content-edit/+server.ts"
Cohesion: 0.20
Nodes (18): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), getLesson(), checkAuth(), GET(), POST() (+10 more)

### Community 70 - "svelte/transition"
Cohesion: 0.18
Nodes (4): reducedMotion, formattedDate, i(), ./$types

### Community 71 - "מודול C - המודול היחיד עם תוכן"
Cohesion: 0.29
Nodes (6): המודולים, חלק א׳ - הבנת הנקרא, חלק ב׳ - אוצר מילים, חלק ג׳ - כתיבה, מה כבר קיים באפליקציה, מודול C - המודול היחיד עם תוכן

### Community 72 - "questions"
Cohesion: 0.33
Nodes (6): 3a, preface, questions, round 1, round 2, round 3

### Community 73 - "content-edit — the `/edit` authoring workspace"
Cohesion: 0.25
Nodes (7): content-edit — the `/edit` authoring workspace, Detach, Graph — `GraphEditor.svelte`, Layout, Lesson editor — `LessonEditorView.svelte` (PowerPoint-style), Local dev vs. production, Model & save

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

### Community 80 - "exam/+page.svelte"
Cohesion: 0.22
Nodes (5): exam, EXAM_SECONDS, WARNING_SECONDS, ./$types, ./$types

### Community 81 - "eye catchers - negative limit contrast.md"
Cohesion: 0.50
Nodes (3): 2 (c.4.1), implemented, material

### Community 82 - "lessonProgress.svelte.ts"
Cohesion: 0.29
Nodes (4): lessonProgress, LessonProgressStore, persist(), ProgressMap

### Community 83 - "בקשת מסך - `<שם-המסך>`"
Cohesion: 0.20
Nodes (9): בקשת מסך - `<שם-המסך>`, השדות, התנהגות, למה, מה עושים בינתיים, מי צריך את זה, ניקוד, צ׳ק ליסט מימוש (+1 more)

### Community 84 - "Module C roadmap: from 7.5 to 9"
Cohesion: 0.05
Nodes (36): 1. Replace placeholder/template content (biggest lift), 2. Fix gating and order, 3. Spiral, don't repeat, 4. Connect reading and writing, 5. Fix facts, 6. Verify with play, 7. Tooling (last), Fixed on 2026-09-19 (+28 more)

### Community 86 - "editModel.svelte.ts"
Cohesion: 0.16
Nodes (7): clone(), SECTION_IDS, i(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, issuesByNode(), getLessonsBySection()

### Community 87 - "registry.ts"
Cohesion: 0.19
Nodes (6): ESCAPE, HEADER_CLASS, mdBlock(), mdInline(), parseLine(), screenComponents

### Community 88 - "התחל כאן"
Cohesion: 0.40
Nodes (4): איך עובדים עם זה - 3 צעדים, דבר אחד שחשוב לשים לב אליו, התחל כאן, מה יש בתיקייה

### Community 89 - "moduleLocation.svelte.ts"
Cohesion: 0.29
Nodes (4): LocationMap, moduleLocation, ModuleLocationStore, persist()

### Community 90 - "content/index.ts"
Cohesion: 0.16
Nodes (11): c1Lessons, c2Lessons, c3Lessons, TYPE_HE, all, allLessons, sectionMeta, LessonContent (+3 more)

### Community 92 - "סוגי המסכים שקיימים באפליקציה"
Cohesion: 0.33
Nodes (5): כללי עבודה, מסכי הוראה (לא נבדקים, לא נותנים ניקוד), מסכי זמן (שלישייה שעובדת ביחד), מסכי תרגול (נבדקים), סוגי המסכים שקיימים באפליקציה

### Community 93 - "הקול והסגנון"
Cohesion: 0.50
Nodes (3): הכללים שיוצאים מזה, הקול והסגנון, ככה זה נשמע - מתוך השיעור הראשון באפליקציה

### Community 94 - "Mcq.svelte"
Cohesion: 0.33
Nodes (5): containerHeight, hexW, pitch, positions, rows

### Community 95 - "validate.ts"
Cohesion: 0.13
Nodes (17): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, splitContent(), spread, TEACHING (+9 more)

### Community 96 - "activeField.svelte.ts"
Cohesion: 0.15
Nodes (22): ActiveField, ActiveLine, currentBlock(), formatAlign(), formatBold(), formatCode(), formatColor(), formatDirection() (+14 more)

### Community 98 - "lessonIcon.ts"
Cohesion: 0.67
Nodes (3): hashString(), ICONS, lessonIcon()

### Community 99 - "ScreenPath"
Cohesion: 0.36
Nodes (3): screenList(), ScreenPath, blankScreen()

### Community 100 - "Section 3 · Eye Catchers · מספרים"
Cohesion: 0.25
Nodes (8): 4.c.3.1 · ארבע משפחות ה-Eye Catchers, 4.c.3.2 · מספר = ספרה + שם עצם, 4.c.3.3 · גם מילים הן מספרים, 4.c.3.4 · לכל מספר יש בעלים, 4.c.3.5 · P2 — מספר בשאלה, 4.c.3.6 · מספר אמיתי, הקשר שגוי, 4.c.3.7 · שער סקשן 3, Section 3 · Eye Catchers · מספרים

### Community 101 - "Section 4 · Eye Catchers · שמות"
Cohesion: 0.25
Nodes (8): 4.c.4.1 · מה נחשב שם, 4.c.4.2 · סימון שם במשפט, 4.c.4.3 · טבלת שם ← פסקה, 4.c.4.4 · P3 — לקרוא רק אצלו, 4.c.4.5 · מי אמר מה, 4.c.4.6 · שם ומספר באותה שאלה, 4.c.4.7 · שער סקשן 4, Section 4 · Eye Catchers · שמות

### Community 102 - "duolingo-program.md"
Cohesion: 0.29
Nodes (6): Module C — תוכנית לימוד מלאה (v3), nodes החזרה, הערות מימוש, חלק ג׳ — סקשנים 5–9: שלילה, הגבלה, ניגוד, רמזור, שאלות פרט, חלק ו׳ — חזרה מרווחת, מיפוי, והערות מימוש, מיפוי לתוכן הקיים באפליקציה

### Community 103 - "Section 1 · לפענח את השאלה"
Cohesion: 0.29
Nodes (7): 4.c.1.1 · חמש המילים שפותחות כל שאלה, 4.c.1.2 · כל מילה — לאן היא שולחת אותי, 4.c.1.3 · תשובה אחת אינה רשימה, 4.c.1.4 · מה מותר להביא מהראש, 4.c.1.5 · שער סקשן 1, Section 1 · לפענח את השאלה, חלק ב׳ — סקשנים 1–4: לפענח את השאלה, P1, מספרים, שמות

### Community 104 - "Section 5 · Eye Catchers · מילות שלילה"
Cohesion: 0.29
Nodes (7): 4.c.5.1 · מילון השלילה, 4.c.5.2 · סימון שלילה בטקסט, 4.c.5.3 · `not` מול `not all`, 4.c.5.4 · P4 — NOT בשאלה = עצור, 4.c.5.5 · לבדוק את כל ארבע האפשרויות, 4.c.5.6 · שער סקשן 5, Section 5 · Eye Catchers · מילות שלילה

### Community 105 - "Section 8 · הרמזור — לבדוק לפני שעונים"
Cohesion: 0.29
Nodes (7): 4.c.8.1 · שלושת הצבעים, 4.c.8.2 · אדום — חזרה לשאלה, לא לטקסט, 4.c.8.3 · צהוב — לחפש משפט, 4.c.8.4 · ירוק אמיתי — הוכחה ועוד ניסוח, 4.c.8.5 · דירוג לפני הגשה, 4.c.8.6 · שער סקשן 8, Section 8 · הרמזור — לבדוק לפני שעונים

### Community 106 - "Section 6 · Eye Catchers · מילות הגבלה"
Cohesion: 0.33
Nodes (6): 4.c.6.1 · מילון ההגבלה, 4.c.6.2 · סימון בטקסט, 4.c.6.3 · P5 — "most effective" פירושו אחד, 4.c.6.4 · הגבלה בשאלה מול הגבלה בטקסט, 4.c.6.5 · שער סקשן 6, Section 6 · Eye Catchers · מילות הגבלה

### Community 107 - "Section 7 · Eye Catchers · ניגוד"
Cohesion: 0.33
Nodes (6): 4.c.7.1 · מילון הניגוד, 4.c.7.2 · P6 — המידע החשוב נמצא אחרי, 4.c.7.3 · הניגוד כתשובה חבויה, 4.c.7.4 · ארבע המשפחות בטקסט אחד, 4.c.7.5 · שער סקשן 7, Section 7 · Eye Catchers · ניגוד

### Community 108 - "Section 9 · שאלות פרט"
Cohesion: 0.33
Nodes (6): 4.c.9.1 · מילות שאלות פרט, 4.c.9.2 · קודם ההוכחה, אחר כך התשובה, 4.c.9.3 · במילים של הטקסט, 4.c.9.4 · לספור מילים בתשובה, 4.c.9.5 · שער סקשן 9, Section 9 · שאלות פרט

### Community 109 - "MarkAll.svelte"
Cohesion: 0.47
Nodes (4): cat(), MARK_ALL_DEFAULT, MARK_ALL_PALETTE, markAllSwatch

### Community 110 - "module-c-audit_23c616f8.md"
Cohesion: 0.33
Nodes (5): Fixed on 2026-09-19, Part A: vocabulary (c-2), Part B: reading (c-1), Part C: writing (c-3), Still open

## Knowledge Gaps
- **599 isolated node(s):** `gitignorePath`, `name`, `private`, `version`, `type` (+594 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` connect `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` to `duolingo-program.md`, `Section 20 · משפטים שעובדים`, `Section 17 · בנק מילים · חברה וקהילה`, `Section 21 · מקשרים ומרפאת שגיאות`, `Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations`, `Section 22 · ניהול זמן`, `Section 23 · YES או NO`, `Section 24 · סיבה, הסבר, דוגמה`, `Section 25 · בנק הדוגמאות ואורך התשובה`, `Section 19 · מקריאה לכתיבה`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `חלק ד׳ — סקשנים 10–16: סוגי השאלות` connect `חלק ד׳ — סקשנים 10–16: סוגי השאלות` to `duolingo-program.md`, `Section 16 · עמדת הכותב`, `Section 10 · רב-ברירה ואלימינציה`, `Section 11 · השלמת משפט`, `Section 13 · שאלות התייחסות`, `Section 14 · שאלות הסקה`, `Section 15 · רעיון מרכזי`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `חלק ב׳ — סקשנים 1–4: לפענח את השאלה, P1, מספרים, שמות` connect `Section 1 · לפענח את השאלה` to `Section 2 · P1 — לא קוראים את הטקסט`, `Section 3 · Eye Catchers · מספרים`, `Section 4 · Eye Catchers · שמות`, `duolingo-program.md`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `gitignorePath`, `name`, `private` to the rest of the system?**
  _599 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._