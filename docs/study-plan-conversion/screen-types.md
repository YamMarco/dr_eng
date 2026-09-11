# סוגי המסכים שקיימים באפליקציה

כל שיעור מורכב ממסכים. אלה כל הסוגים הקיימים היום. אין אחרים.

## מסכי הוראה (לא נבדקים, לא נותנים ניקוד)

| סוג | מה זה | מה צריך לכתוב |
| --- | --- | --- |
| `preface` | מסך טקסט. ההסבר של המורה | `text` |
| `steps` | רשימת שלבים ממוספרת | `steps` - שורה לכל שלב |
| `summary` | כרטיס סיכום עם כותרת ושורות | `title`, `lines` |
| `word-card` | כרטיס מילה בודדת + תרגום | `word`, `translationHe` |
| `question-preview` | רשימת שאלות לקריאה לפני הטקסט | `intro`, `prompts` |
| `self-check` | התלמיד כותב תשובה חופשית, ואז חושף תשובה לדוגמה. לא נבדק | `prompt`, `modelAnswer`, אפשר גם `text`, `minWords`, `maxWords` |

## מסכי תרגול (נבדקים)

| סוג | מה זה | מה צריך לכתוב |
| --- | --- | --- |
| `mcq` | שאלה אמריקאית אחת | `prompt`, `options`, `correctIndex` (מתחיל מ-0), `explanation` |
| `mark-word` | לוחצים על המילה הנכונה בתוך משפט | `sentence`, `correctWordIndex` |
| `mark-all` | מסמנים את כל המילים מסוג מסוים בתוך פסקה | `instruction`, `text`, `correctIndices`, אפשר `categories` (קבוצות בצבעים) ו-`wordBank` |
| `spell-word` | מקלידים מילה, בהעתקה או בהכתבה | `word`, `mode: copy / listen` |
| `writing-task` | מטלת כתיבה עם בנק מילים. נבדק אוטומטית: מספר משפטים וכמה מילים מהבנק שולבו | `prompt`, `wordBank`, `minSentences`, `minWordsUsed` |
| `passage-mcq` | טקסט + שאלות אמריקאיות עליו, בלי שעון | `text`, `questions` |
| `passage-quiz` | טקסט + שאלות בתשובה קצרה בכתב. נכון אם מילות המפתח מופיעות | `text`, `questions` (כל שאלה: `prompt`, `keywords`, `answerHint`) |
| `timed-passage` | כמו `passage-mcq` אבל עם סטופר שרץ | `label`, `text`, `timerKey`, `questions` |

## מסכי זמן (שלישייה שעובדת ביחד)

| סוג | מה זה |
| --- | --- |
| `timed-reading` | קריאת טקסט בזמן. מודד ושומר תחת `timerKey` |
| `time-result` | מציג כמה זמן לקח |
| `time-comparison` | משווה שני זמנים שנמדדו קודם |

להשתמש בהם רק ביחד, ורק כשהשיעור הוא באמת על ניהול זמן.

## כללי עבודה

- ברירת מחדל לטקסט עם שאלות: `passage-mcq`. `timed-passage` רק כשהנושא הוא זמן.
- `mark-all` הוא התשובה לכל "מצא את כל ה..." בחומר.
- `self-check` לכתיבה שלא רוצים לתת עליה ציון. `writing-task` לכתיבה שכן נספרת.
- ב-`correctIndex` הספירה מתחילה מאפס: התשובה הראשונה היא 0.
- ב-`mark-all` ה-`correctIndices` הם מיקומי המילים בטקסט, גם כן מאפס.
