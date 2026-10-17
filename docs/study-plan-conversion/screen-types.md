# סוגי המסכים שקיימים באפליקציה

כל שיעור מורכב ממסכים. אלה כל הסוגים הקיימים היום. אם מחובר ה-connector של
האפליקציה (dr-eng), `get_screen_schema` מחזיר את הרשימה העדכנית והוא גובר על הקובץ הזה.

## מסכי הוראה (לא נבדקים, לא נותנים ניקוד)

| סוג | מה זה | מה צריך לכתוב |
| --- | --- | --- |
| `preface` | מסך טקסט. ההסבר של המורה | `text` |
| `steps` | רשימת שלבים | `steps` - שורה לכל שלב, אפשר `ordered` (ממוספר) |
| `summary` | כרטיס סיכום עם כותרת ושורות | `title`, `lines` |
| `word-card` | כרטיס מילה + תרגום, אפשר משפט דוגמה ורמז לזכירה | `word`, `translationHe`, אפשר `exampleEn`, `hookHe`, `definitionEn` |
| `question-preview` | רשימת שאלות לקריאה לפני הטקסט | `intro`, `prompts` |
| `self-check` | התלמיד כותב תשובה חופשית, ואז חושף תשובה לדוגמה. לא נבדק | `prompt`, `modelAnswer`, אפשר `text`, `minWords`, `maxWords` |
| `speak` | (COBE) שאלה בעל פה, הקלטה אחת, ואז תשובה לדוגמה ורשימת בדיקה עצמית | `prompt`, `targetSeconds`, `modelAnswer`, `checklist`, אפשר `tip` |
| `video` | (COBE חלק ג׳) קליפ לצפייה לפני התשובה | `caption`; את הקליפ עצמו מוסיפים באפליקציה |

## מסכי תרגול (נבדקים)

| סוג | מה זה | מה צריך לכתוב |
| --- | --- | --- |
| `mcq` | שאלה אמריקאית אחת | `prompt`, `options`, `correctIndex` (מתחיל מ-0), `explanation` |
| `cloze-pick` | משפט עם חור, בוחרים אריח שמשלים אותו | `clause`, `options`, `correctIndices`, `explanation` |
| `sentence-completion` | משפט עם חור, התלמיד מקליד את ההשלמה | `before`, `after`, `modelAnswers` (ההשלמות המתקבלות) |
| `mark-all` | מסמנים מילים בתוך טקסט | `instruction`, `text`, `correctIndices`, אפשר `categories` (קבוצות בצבעים) ו-`wordBank` |
| `spell-word` | מקלידים מילה, בהעתקה או בהכתבה | `word`, `mode: copy / listen` |
| `match-pairs` | התאמה בין מילה באנגלית לפירוש בעברית | `pairs` |
| `match-definitions` | (מודול E) 6 מילים, 3 הגדרות באנגלית, מתאימים כמו בבחינה | `items`, `definitions` |
| `passage-mcq` | טקסט + שאלות אמריקאיות עליו. אפשר שעון עצר | `text`, `questions`, אפשר `timerKey` + `label` |
| `passage-quiz` | טקסט + שאלות בתשובה קצרה בכתב. נכון אם מילות המפתח מופיעות | `text`, `questions` (כל שאלה: `prompt`, `keywords`, `answerHint`) |
| `writing-task` | מטלת כתיבה. נבדקת אוטומטית (אורך, כתיב, מהלכי פסקה) ואז בבינה מלאכותית | `prompt`, `modelAnswer`, `checklist`; אפשר `wordBank`, `minWords` (פסקה של 70-90), `requiredMoves`, `timeLimitMinutes` |

## מסכי זמן (שלישייה שעובדת ביחד)

| סוג | מה זה |
| --- | --- |
| `timed-reading` | קריאת טקסט בזמן. מודד ושומר תחת `timerKey` |
| `time-result` | מציג כמה זמן לקח |
| `time-comparison` | משווה שני זמנים שנמדדו קודם |

להשתמש בהם רק ביחד, ורק כשהשיעור הוא באמת על ניהול זמן.

## כללי עבודה

- ברירת מחדל לטקסט עם שאלות: `passage-mcq`. `timerKey` רק כשהנושא הוא זמן.
- `mark-all` הוא התשובה לכל "מצא את כל ה..." בחומר. סימון של מילה אחת בלבד: `mark-all` עם תשובה אחת.
- כשהחלק החופשי הוא בעצם בחירה קטנה (מילת קישור, צורת פועל): `cloze-pick` ולא `writing-task`.
- `self-check` לכתיבה שלא רוצים לתת עליה ציון. `writing-task` לכתיבה שכן נספרת.
- ב-`correctIndex` הספירה מתחילה מאפס: התשובה הראשונה היא 0.
- ב-`mark-all` ה-`correctIndices` הם מיקומי המילים בטקסט, גם כן מאפס.
- מילה לא מופיעה כתשובה או כמסיח לפני ה-`word-card` שלה.
