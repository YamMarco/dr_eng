# Graph Report - dr_eng  (2026-09-05)

## Corpus Check
- 139 files · ~86,944 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 904 nodes · 1117 edges · 81 communities (66 shown, 15 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2de8c1f9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- Svelte MCP Server (Project Config)
- Snippet Blocks ({#snippet})
- scripts
- curriculum.ts
- LessonRunner.svelte
- Section 5 · Eye Catchers · מילות שלילה
- What You Must Do When Invoked
- section: eye-catchers-negatives
- compilerOptions
- Bagrut English Prep App (Mission)
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
- score.svelte.ts
- lesson-screens/types.ts
- content/index.ts
- Lesson & content — data model
- ScreenForm.svelte
- index.svelte.ts
- Section 20 · משפטים שעובדים
- LessonEditor.svelte
- registry.ts
- Section 17 · בנק מילים · חברה וקהילה
- Section 21 · מקשרים ומרפאת שגיאות
- WritingTask.svelte
- Section 16 · עמדת הכותב
- Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations
- Section 22 · ניהול זמן
- Section 23 · YES או NO
- Section 24 · סיבה, הסבר, דוגמה
- Section 25 · בנק הדוגמאות ואורך התשובה
- snapshot-content.ts
- eye catchers - names and numbers.spec.bak.md
- c.4.2c
- Section 10 · רב-ברירה ואלימינציה
- Section 11 · השלמת משפט
- חלק ד׳ — סקשנים 10–16: סוגי השאלות
- Section 13 · שאלות התייחסות
- Section 14 · שאלות הסקה
- Section 15 · רעיון מרכזי
- חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה
- Section 26 · סימולציה ותיקון
- api.ts
- 3 · `s3-l2` — מציאה וסימון (c.3.3)
- 1 (vefore c.4.1, after c.3.4)
- debug.svelte.ts
- screenPath.ts
- questions
- content-edit — in-app screen editor
- questions
- questions
- questions
- questions
- questions
- questions
- eye catchers - negative limit contrast.md
- content-edit/+server.ts
- lessons/+page.svelte

## God Nodes (most connected - your core abstractions)
1. `LessonNode` - 27 edges
2. `What You Must Do When Invoked` - 12 edges
3. `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` - 11 edges
4. `compilerOptions` - 11 edges
5. `Section 20 · משפטים שעובדים` - 10 edges
6. `/graphify` - 10 edges
7. `Lesson structure — quick reference` - 9 edges
8. `scripts` - 9 edges
9. `Section 2 · P1 — לא קוראים את הטקסט` - 9 edges
10. `Section 17 · בנק מילים · חברה וקהילה` - 9 edges

## Surprising Connections (you probably didn't know these)
- `RTL Hebrew Document Layout` --semantically_similar_to--> `Bagrut English Prep App (Mission)`  [INFERRED] [semantically similar]
  front/src/app.html → agents.md
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

## Communities (81 total, 15 thin omitted)

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

### Community 4 - "curriculum.ts"
Cohesion: 0.06
Nodes (20): CurriculumModule, CurriculumSection, EXAM_MINUTES, getModule(), getUnitGroup(), modules, textSection, UnitGroup (+12 more)

### Community 5 - "LessonRunner.svelte"
Cohesion: 0.07
Nodes (24): allScreenPaths, allScreens, confirmDiscard(), currentLocation, currentPath, currentScreen, dirty, editSheetOpen (+16 more)

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

### Community 10 - "Bagrut English Prep App (Mission)"
Cohesion: 0.25
Nodes (8): Bagrut English Prep App (Mission), Brief Assistant Persona, Commit After Every Medium+ Change, Separation of Concerns Principle, YAGNI Principle, RTL Hebrew Document Layout, SvelteKit head/body Placeholders, Allow-All Crawl Policy

### Community 11 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 12 - "Lesson structure — quick reference"
Cohesion: 0.20
Nodes (9): Adding a screen type, Authoring a lesson, Conventions, Lesson structure — quick reference, Model, Node / path rules, Runner rules, Screen types (+1 more)

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
Cohesion: 0.04
Nodes (45): 15 ה-Patterns — מקרא מרוכז, 4.c.1.1 · חמש המילים שפותחות כל שאלה, 4.c.1.2 · כל מילה — לאן היא שולחת אותי, 4.c.1.3 · תשובה אחת אינה רשימה, 4.c.1.4 · מה מותר להביא מהראש, 4.c.1.5 · שער סקשן 1, 4.c.2.1 · כמה באמת צריך לקרוא, 4.c.2.2 · מילת המפתח היא הנושא, לא ה-what (+37 more)

### Community 35 - "lesson-screens/types.ts"
Cohesion: 0.11
Nodes (17): MarkAllScreen, MarkWordScreen, McqScreen, PassageMcqScreen, PassageQuizQuestion, PassageQuizScreen, PrefaceScreen, QuestionPreviewScreen (+9 more)

### Community 36 - "content/index.ts"
Cohesion: 0.08
Nodes (32): c10Lessons, c11Lessons, c12Lessons, c13Lessons, c14Lessons, c15Lessons, c16Lessons, c17Lessons (+24 more)

### Community 37 - "Lesson & content — data model"
Cohesion: 0.22
Nodes (8): Entities, Files (`front/src/lib/content/`), Lesson & content — data model, Notes, Rules, Runtime state (separate from content), Screen taxonomy (the `type` discriminator), Serving layer

### Community 38 - "ScreenForm.svelte"
Cohesion: 0.20
Nodes (5): copyText(), SCREEN_TYPE_GROUPS, SCREEN_TYPES, copyLocation(), LessonScreen

### Community 39 - "index.svelte.ts"
Cohesion: 0.13
Nodes (7): dictionaries, I18n, Language, ar, Dictionary, DictionaryOverride, he

### Community 40 - "Section 20 · משפטים שעובדים"
Cohesion: 0.20
Nodes (10): 4.c.20.1 · בלי פועל אין משפט, 4.c.20.2 · מצא את הפועל, 4.c.20.3 · יחיד ורבים, 4.c.20.4 · זמנים — `I was think`, 4.c.20.5 · בלי `the` בהכללה, 4.c.20.6 · `because` דורש פסוקית שלמה, 4.c.20.7 · מילה, צירוף, משפט, 4.c.20.8 · ארבעה משפטים, ארבעה פעלים (+2 more)

### Community 41 - "LessonEditor.svelte"
Cohesion: 0.18
Nodes (12): addScreen(), applyScreen(), banner, buckets, confirmDiscard(), deleteScreen(), dirty, handleClose() (+4 more)

### Community 42 - "registry.ts"
Cohesion: 0.15
Nodes (4): ESCAPE, screenComponents, KEY, LessonSession

### Community 43 - "Section 17 · בנק מילים · חברה וקהילה"
Cohesion: 0.22
Nodes (9): 4.c.17.1 · קהילה והתנדבות — 10 מילים, 4.c.17.2 · חינוך ובריאות — 10 מילים, 4.c.17.3 · Notice — זיהוי בהקשר, 4.c.17.4 · community אינו country, 4.c.17.5 · volunteer — שם עצם וגם פועל, 4.c.17.6 · benefit — שם עצם מול צירוף, 4.c.17.7 · Use — משפט משלי, 4.c.17.8 · שער אוצר מילים 1 (+1 more)

### Community 44 - "Section 21 · מקשרים ומרפאת שגיאות"
Cohesion: 0.22
Nodes (9): 4.c.21.1 · חמשת המקשרים ותפקידם, 4.c.21.2 · `because` לא פותח משפט עצמאי, 4.c.21.3 · לא `however` ולא `but` יחד, 4.c.21.4 · `also` מול `although`, 4.c.21.5 · `for example` בלי `that`, 4.c.21.6 · מרפאת שגיאות — עשרה תיקונים, 4.c.21.7 · פסקה עם כל חמשת המקשרים, 4.c.21.8 · שער סקשן 21 (+1 more)

### Community 45 - "WritingTask.svelte"
Cohesion: 0.20
Nodes (9): recordAnswer(), allFilled, allOk, checked, combinedText, primaryAction(), punctuationOk, wordBankOk (+1 more)

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

### Community 52 - "snapshot-content.ts"
Cohesion: 0.16
Nodes (11): imports, isBigNode(), OUT, sectionFileNames, sectionMeta, spread, TEACHING, keptIndices (+3 more)

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

### Community 61 - "חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה"
Cohesion: 0.25
Nodes (8): 4.c.19.1 · Notice — מה שווה לקחת, 4.c.19.2 · Understand — מה זה אומר כאן, 4.c.19.3 · Adapt — לקחת את המבנה, 4.c.19.4 · העתקה אינה התאמה, 4.c.19.5 · "according to me" אינו קיים, 4.c.19.6 · שער סקשן 19, Section 19 · מקריאה לכתיבה, חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה

### Community 62 - "Section 26 · סימולציה ותיקון"
Cohesion: 0.29
Nodes (7): 4.c.26.1 · חצי בחינה — קריאה, 4.c.26.2 · חצי בחינה — כתיבה, 4.c.26.3 · סימולציה מלאה, 4.c.26.4 · איזה Pattern נכשל, 4.c.26.5 · תיקון ממוקד — דפוס אחד, 4.c.26.6 · ערכת הבחינה האישית, Section 26 · סימולציה ותיקון

### Community 63 - "api.ts"
Cohesion: 0.33
Nodes (4): saveLessonContent(), storedKey(), saveAll(), saveDraft()

### Community 65 - "3 · `s3-l2` — מציאה וסימון (c.3.3)"
Cohesion: 0.10
Nodes (19): 1 · `eye_catch_intro` — למה מספרים ושמות, 2 · `s3-l1` — מילים: מגנטים לעין (c.3.2), 3 · `s3-l2` — מציאה וסימון (c.3.3), 4 · `s3-l3` — שימוש לניווט (c.3.4), Eye catchers — מספרים ושמות (section c.3), Implementation checklist — done (front/src/lib/content/c/c-3.ts), Plan of the section, preface (+11 more)

### Community 66 - "1 (vefore c.4.1, after c.3.4)"
Cohesion: 0.40
Nodes (5): 1 (vefore c.4.1, after c.3.4), examples, message, preface, questions

### Community 67 - "debug.svelte.ts"
Cohesion: 0.12
Nodes (5): DebugStore, lessonProgress, LessonProgressStore, persist(), ProgressMap

### Community 72 - "questions"
Cohesion: 0.33
Nodes (6): 3a, preface, questions, round 1, round 2, round 3

### Community 73 - "content-edit — in-app screen editor"
Cohesion: 0.40
Nodes (4): content-edit — in-app screen editor, Detach, Local dev vs. production, Save model: lesson-wide draft, one big button

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

### Community 82 - "content-edit/+server.ts"
Cohesion: 0.33
Nodes (10): getGithubFile(), ghHeaders(), putGithubFile(), repoUrl(), getLesson(), Body, checkAuth(), POST() (+2 more)

### Community 83 - "lessons/+page.svelte"
Cohesion: 0.15
Nodes (3): EditStore, PALETTE, SectionTheme

## Knowledge Gaps
- **489 isolated node(s):** `structureVersion`, `dirty`, `banner`, `buckets`, `dirty` (+484 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` connect `חלק ה׳ — סקשנים 17–26: אוצר מילים, כתיבה, זמן, סימולציה` to `Section 2 · P1 — לא קוראים את הטקסט`, `Section 20 · משפטים שעובדים`, `Section 17 · בנק מילים · חברה וקהילה`, `Section 21 · מקשרים ומרפאת שגיאות`, `Section 18 · בנק מילים · טכנולוגיה, סביבה ו-collocations`, `Section 22 · ניהול זמן`, `Section 23 · YES או NO`, `Section 24 · סיבה, הסבר, דוגמה`, `Section 25 · בנק הדוגמאות ואורך התשובה`, `Section 26 · סימולציה ותיקון`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `חלק ד׳ — סקשנים 10–16: סוגי השאלות` connect `חלק ד׳ — סקשנים 10–16: סוגי השאלות` to `Section 2 · P1 — לא קוראים את הטקסט`, `Section 16 · עמדת הכותב`, `Section 10 · רב-ברירה ואלימינציה`, `Section 11 · השלמת משפט`, `Section 13 · שאלות התייחסות`, `Section 14 · שאלות הסקה`, `Section 15 · רעיון מרכזי`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `חלק ג׳ — סקשנים 5–9: שלילה, הגבלה, ניגוד, רמזור, שאלות פרט` connect `Section 5 · Eye Catchers · מילות שלילה` to `Section 2 · P1 — לא קוראים את הטקסט`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `structureVersion`, `dirty`, `banner` to the rest of the system?**
  _489 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Svelte MCP Server (Project Config)` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `Snippet Blocks ({#snippet})` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._