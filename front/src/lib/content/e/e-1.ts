// Module E - reading (Part I). The C method on an exam-length article, plus the
// two E question types: "What are we told in paragraph X?" (topics) and
// completions (By... / Because they want to... / They must...).
import type { LessonNode } from "../types";

// Exam-shaped articles: title, 5 paragraphs (I-V), underlined glossary words.
const LIBRARY_I =
  "I  Every Tuesday morning, an old yellow bus stops in the main square of Kerrow, a small village in the hills of northern Wales. The bus does not take anyone anywhere. Inside, instead of seats, there are shelves with more than 3,000 books. For the 400 people who live in Kerrow, it is the only library they have.";
const LIBRARY_II =
  "II  The bus belongs to Helen Morgan, a former primary school teacher. In 2017, the local council closed eleven village libraries to save money. \"I was angry,\" Helen says. \"Children in villages were losing something that children in cities took for granted.\" She sold her car, used her ++savings++ to buy the bus from a school, and spent a whole summer building the shelves herself.";
const LIBRARY_III =
  "III  At first, Helen was not sure anyone would come. On the first day, only six people climbed on board. However, word spread quickly. Today the bus visits nine villages a week and lends about 500 books. Helen does not charge anything. Readers can keep a book for as long as they need it, and nobody pays a ++fine++ for a late return.";
const LIBRARY_IV =
  "IV  The bus has become more than a place to borrow books. Older residents who live alone come for the conversation as much as for the novels. Teenagers use the free internet connection to do their homework. Once a month, a nurse joins Helen to check the ++blood pressure++ of elderly visitors. \"People tell me it is the only day of the week they speak to anyone,\" Helen explains.";
const LIBRARY_V =
  "V  Running the bus is not easy. Fuel and repairs cost about 6,000 pounds a year, which Helen pays for with donations and a small ++grant++. Last winter the engine broke down twice, and she had to cancel visits for three weeks. Even so, she has no plans to stop. Two other villages have asked her to add them to the route, and a former student of hers has offered to drive a second bus.";
const LIBRARY_GLOSSARY =
  "**Glossary**\nsavings - חסכונות / مدّخرات\nfine - קנס / غرامة\nblood pressure - לחץ דם / ضغط الدم\ngrant - מענק / منحة";
const LIBRARY = [
  "{a:center}**THE LIBRARY ON WHEELS**",
  LIBRARY_I,
  LIBRARY_II,
  LIBRARY_III,
  LIBRARY_IV,
  LIBRARY_V,
  LIBRARY_GLOSSARY,
].join("\n\n");

const CORAL_I =
  "I  Coral reefs cover less than one percent of the ocean floor, but a quarter of all sea creatures depend on them for food and shelter. Since the 1950s, rising sea temperatures, pollution and overfishing have destroyed about half of the world's reefs. When the water becomes too warm, the coral turns white and, if the heat continues, it dies.";
const CORAL_II =
  "II  On the island of Mauritius, a group of local divers decided not to wait for governments to act. They collect small pieces of healthy coral that have broken off naturally and tie them to underwater frames made of metal. There the pieces grow for about a year, like plants in a garden, before the divers move them to damaged parts of the reef.";
const CORAL_III =
  "III  The divers prefer coral that has survived hot summers. \"If a piece stayed alive while the coral around it died, it is probably stronger,\" explains team leader Ravi Doorgakant. By planting only these tough pieces, the team hopes to build reefs that can survive the higher temperatures of the future.";
const CORAL_IV =
  "IV  The work has brought unexpected visitors. Tourists now pay to join the divers for a day and help clean the frames. Their money pays for most of the project's equipment. Some local fishermen, who once saw the divers as a threat to their business, now work for the project as boat drivers.";
const CORAL_V =
  "V  Scientists are careful not to promise too much. A garden of this kind can cover only a few hundred square metres, while some reefs are hundreds of kilometres long. \"Planting coral is like treating a patient,\" says marine biologist Dr. Lina Farouk. \"It helps, but if we do not cool the oceans, the illness will come back.\"";

const SLEEP = [
  "{a:center}**WHY TEENAGERS CAN'T GET UP**",
  "I  Parents often think their teenage children are simply lazy when they stay in bed until noon at weekends. Scientists disagree. During the teenage years, the body starts producing melatonin, the hormone that makes us sleepy, about two hours later in the evening than it does in children or adults. As a result, most teenagers are not able to fall asleep before eleven o'clock at night.",
  "II  The problem is that school does not change its clock. A student who falls asleep at eleven and has to get up at half past six sleeps for about seven and a half hours, while experts say teenagers need between eight and ten. Over a school week, the missing hours add up. Tired students find it harder to concentrate, remember less of what they learn and are more likely to feel ++anxious++.",
  "III  Some schools have decided to test a simple idea. In 2016, schools in Seattle in the United States moved the start of the school day from 7:50 to 8:45. Researchers who followed the students found that they slept, on average, 34 minutes longer each night. Their grades went up by 4.5 percent, and fewer students arrived late or missed school.",
  "IV  Not everyone welcomed the change. Some parents complained that a later start made it difficult to get to work on time. Bus companies had to change their ++timetables++, and sports teams had less daylight for training after school. In a few ++districts++, schools went back to the old times after only one year.",
  "V  Sleep experts say students can also help themselves. They suggest putting phones away an hour before bed, because the blue light from screens ++delays++ sleep even more. Getting up at the same time every day, even at weekends, also helps. \"You cannot fight biology,\" says sleep researcher Dr. Mia Halvorsen, \"but you can stop making it worse.\"",
  "**Glossary**\nanxious - חרד, מודאג / قَلِق\ntimetables - לוחות זמנים / جداول مواعيد\ndistricts - מחוזות / مناطق\ndelays - מעכב / يؤخّر",
].join("\n\n");

const REPAIR = [
  "{a:center}**THE REPAIR CAFÉ**",
  "I  In 2009, Martine Postma, a journalist from Amsterdam, was shocked by how many things people threw away just because a small part was broken. She decided to organise a meeting where volunteers would fix them for free. She called it a Repair Café. Today there are Repair Cafés in towns and cities all over the world.",
  "II  The idea is simple. Once a month, people bring broken lamps, toasters, bicycles and clothes to a local hall. Volunteer repairers, many of them retired engineers and ++tailors++, work on the items while the owners watch and drink coffee. The service is free, but visitors are asked to leave a small donation.",
  "III  The organisers say the main goal is not to save money. They want to reduce waste, because every repaired object is one less object in a ++rubbish dump++. They also want to teach people that broken does not mean useless. Visitors are encouraged to help with the repair, so that next time they can fix the problem themselves.",
  "IV  Repair Cafés face one growing problem: many modern products are designed so that they cannot be opened. Some companies ++glue++ their phones and laptops shut or refuse to sell ++spare parts++. Volunteers must often give up on new items, even though fixing them would be easy. For this reason, several countries are now discussing \"right to repair\" laws, which would force companies to make products that can be fixed.",
  "**Glossary**\ntailors - חייטים / خيّاطون\nrubbish dump - מזבלה / مكبّ نفايات\nglue - מדביקים / يُلصقون\nspare parts - חלקי חילוף / قطع غيار",
].join("\n\n");

const SILBO = [
  "{a:center}**THE LANGUAGE THAT IS WHISTLED**",
  "I  On La Gomera, one of the Canary Islands off the coast of Africa, the hills are so ++steep++ and the valleys so deep that walking to the next village can take hours. For centuries, ++shepherds++ and farmers solved this problem with a language that is not spoken but whistled. It is called Silbo Gomero, and a good whistler can be heard several kilometres away.",
  "II  Silbo is not a code with a few signals. It is a way of whistling Spanish. Whistlers put a finger in their mouth and change the ++pitch++ of the sound to copy the vowels and consonants of spoken words. Because of this, almost anything that can be said in Spanish can also be whistled, from \"Come home for dinner\" to news about a wedding.",
  "III  In the middle of the twentieth century, the language almost disappeared. Roads and telephones reached the villages, and young people moved to the cities to find work. Whistling began to seem old-fashioned, something only grandparents did. By the 1980s, only a small number of ++elderly++ whistlers were left.",
  "IV  The islanders decided to fight back. In 1999, the local government made Silbo a required subject in all of the island's primary schools, and today every child on La Gomera learns to whistle. Ten years later, UNESCO added Silbo to its list of the world's cultural treasures. Tourists now visit restaurants where waiters whistle to each other across the room.",
  "V  Scientists have also become interested. Studies of whistlers show that the brain treats Silbo as a real language, not as music. Whistled forms of language are known in dozens of communities around the world, but most of them are in danger. \"When a whistled language dies,\" says linguist Dr. Pablo Reyes, \"we lose a window into how the human brain deals with language.\"",
  "**Glossary**\nsteep - תלול / شديد الانحدار\nshepherds - רועי צאן / رُعاة\npitch - גובה הצליל / طبقة الصوت\nelderly - קשישים / مُسنّون",
].join("\n\n");

export const e1Lessons: LessonNode[] = [
  {
    id: "e-bridge",
    section: "e-1",
    titleEn: "The Exam and the Method",
    required: [],
    requiredRounds: 3,
    position: { x: 0, y: 550 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "ברוכים הבאים לחלק הקריאה של **Module E**.\n\nאם עשיתם את Module C, השיטה כבר אצלכם: **מילת מפתח ← איתור ← קוראים את המשפט**. כאן היא עובדת בדיוק אותו דבר.\n\nאבל הבחינה עצמה שונה. בואו נכיר אותה.",
        },
        {
          type: "summary",
          title: "הבחינה: 75 דקות, בלי מילון",
          lines: [
            "📖 חלק I - קריאה (70 נק׳): כתבה אחת, כ-400 מילים, 5 פסקאות (I-V), 9 שאלות",
            "🔤 חלק II - אוצר מילים (30 נק׳): 5 סטים, בכל סט מתאימים 3 הגדרות באנגלית ל-3 מתוך 6 מילים",
            "📌 מתחת לכתבה: Glossary - 3-4 מילים קשות עם תרגום",
          ],
        },
        {
          type: "summary",
          title: "9 השאלות",
          lines: [
            "4 שאלות אמריקאיות: **What are we told in paragraph X?** התשובות הן נושאים, לא פרטים. זה חדש, ויש לו שיעור משלו.",
            "5 שאלות פתוחות: ממשיכים תשובה שכבר התחילה (By... / Because they want to... / They must...), או כותבים ANSWER קצר.",
          ],
        },
        {
          type: "preface",
          text: "בשיעור הזה בודקים שהשיטה עובדת גם על כתבה באורך בחינה.\n\nלא עשיתם את Module C? יש שיעור צד קצר, **השיטה בקצרה**, שמלמד אותה מהר.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "כמה זמן נמשכת בחינת Module E?",
              options: ["75 דקות", "שעה ו-45 דקות", "90 דקות"],
              correctIndex: 0,
              explanation:
                "75 דקות לשני החלקים יחד: קריאה ואוצר מילים. שעה ו-45 זו הבחינה של Module C.",
            },
            {
              type: "mcq",
              prompt: "מותר להשתמש במילון בבחינה?",
              options: [
                "לא. יש רק Glossary קטן מתחת לכתבה",
                "כן, מילון דו-לשוני",
                "כן, אבל רק בחלק אוצר המילים",
              ],
              correctIndex: 0,
              explanation:
                "אין מילון. 3-4 מילים קשות מתורגמות ב-Glossary, ואת השאר צריך לדעת או לעקוף.",
            },
            {
              type: "mcq",
              prompt: "כמה נקודות שווה חלק אוצר המילים?",
              options: ["30 - כמעט שליש מהציון", "10 - חלק קטן", "70 - רוב הציון"],
              correctIndex: 0,
              explanation:
                "30 נקודות על מילים מרשימה סגורה. 70 הן של הקריאה. לכן למילים יש בקורס חפיסה משלהן.",
            },
            {
              type: "mcq",
              prompt:
                "{d:rtl}בשאלה What are we told in paragraph III? האפשרויות הן:",
              options: [
                "נושאים - על מה הפסקה מדברת",
                "מספרים ושמות מהפסקה",
                "ציטוטים מדויקים מהטקסט",
              ],
              correctIndex: 0,
              explanation:
                "האפשרויות מתארות נושא (How he..., Why they...), לא עובדה אחת. נלמד את זה בשיעור הבא.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תזכורת לשיטה, על פסקה קצרה. מוצאים את מילת המפתח, ואז קוראים רק את המשפט שלה.",
            },
            {
              type: "passage-mcq",
              text: "II  Every summer, the beaches of southern Spain fill with tourists, and lifeguards cannot watch everyone. For this reason, some beaches now use drones to help. When a swimmer is in trouble, a drone flies over the water in less than a minute and drops a life jacket. A lifeguard on a boat then arrives and brings the swimmer back to the beach.",
              questions: [
                {
                  prompt:
                    "How does a drone help a swimmer in trouble? - מה מילת המפתח לחיפוש?",
                  options: ["in trouble", "summer", "tourists", "beach"],
                  correctIndex: 0,
                },
                {
                  prompt: "מצאתם את המשפט עם in trouble. מה התשובה?",
                  options: [
                    "It drops a life jacket",
                    "It brings the swimmer back to the beach",
                    "It watches all the tourists",
                    "It calls a lifeguard on the beach",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "Why do some beaches use drones?",
                  options: [
                    "Because lifeguards cannot watch everyone",
                    "Because drones are faster than boats",
                    "Because tourists asked for them",
                    "Because the water is dangerous in summer",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 3",
              level: 4,
              title: "רמת בחינה",
              subtitle:
                "כתבה מלאה, באורך בחינה, ו-3 שאלות. חפשו לפי השאלה, לא לפי הסדר.\nמילה עם קו תחתון? התרגום שלה מתחת לכתבה.",
            },
            {
              type: "passage-mcq",
              text: LIBRARY,
              label: "THE LIBRARY ON WHEELS",
              timerKey: "e-bridge-library",
              questions: [
                {
                  prompt: "Why did Helen start the library bus?",
                  options: [
                    "Because the council closed the village libraries",
                    "Because she wanted to sell her car",
                    "Because children in cities had no books",
                    "Because a school gave her an old bus",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "How many villages does the bus visit today?",
                  options: ["Nine", "Six", "Eleven", "Two"],
                  correctIndex: 0,
                },
                {
                  prompt: "What happened last winter?",
                  options: [
                    "The engine broke down and visits were cancelled",
                    "Two villages joined the route",
                    "A former student started driving a second bus",
                    "Helen paid 6,000 pounds for a new engine",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title: "במשפט אחד",
              lines: [
                "הכתבה ארוכה יותר, השיטה אותה שיטה: מילת מפתח ← המשפט ← תשובה.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-method",
    section: "e-1",
    titleEn: "The Method in Short",
    required: ["e-bridge"],
    requiredRounds: 2,
    position: { x: -110, y: 660 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "השיעור הזה למי שלא עשה את Module C, או רוצה רענון.\n\n4 צעדים, ואחריהם תרגול.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "קוראים את **השאלה** לפני הטקסט.",
            "מילת השאלה אומרת **מה מחפשים**: Why ← סיבה (because) · How ← דרך (by) · When ← זמן · Where ← מקום.",
            "בוחרים **מילת מפתח**: מילת תוכן מהשאלה, לא Why או What. סורקים את הטקסט עד שמוצאים אותה.",
            "קוראים את **המשפט הזה** ואת זה שאחריו, ועונים מהם.",
          ],
        },
        {
          type: "preface",
          text: "דוגמה:\n{p:text}**Where did Helen buy the bus?**\n\nWhere ← מחפשים מקום. מילת המפתח: **buy**.\n{p:text}...used her savings to buy the bus from a school...\n\nהתשובה: **From a school.**",
        },
        {
          type: "preface",
          text: "{p:callout}{i:warn}לפעמים הטקסט משתמש במילה אחרת עם אותה משמעות: בשאלה **old people**, בטקסט **elderly**. מחפשים את הרעיון, לא רק את האותיות.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt:
                "{p:text}When did the council close the libraries?\n\nמה מילת המפתח?",
              options: ["close", "When", "did", "the"],
              correctIndex: 0,
              explanation:
                "When ו-did הן מילות שאלה ודקדוק. close היא הפעולה שמחפשים בטקסט.",
            },
            {
              type: "mcq",
              prompt:
                "{p:text}How do the divers grow new coral?\n\nמה מחפשים בטקסט?",
              options: [
                "דרך - מה הם עושים (by...)",
                "סיבה (because)",
                "שנה או תאריך",
                "שם של מקום",
              ],
              correctIndex: 0,
              explanation: "How ← מחפשים את הדרך, את הפעולה. סיבה עונה על Why.",
            },
            {
              type: "mcq",
              prompt:
                "{p:text}Why do old people come to the bus?\n\nבטקסט כתוב: Older **residents** who live alone come for the conversation.\nזה המקום הנכון?",
              options: [
                "כן - residents הם אנשים שגרים במקום. אותו רעיון, מילה אחרת",
                "לא - המילים old people לא מופיעות",
                "לא - צריך למצוא את המילה why בטקסט",
              ],
              correctIndex: 0,
              explanation:
                "הטקסט כמעט אף פעם לא חוזר על מילות השאלה. מחפשים את הרעיון, וכאן הוא נמצא.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תורכם: שאלה, מילת מפתח, המשפט, תשובה.",
            },
            {
              type: "passage-mcq",
              text: CORAL_II,
              questions: [
                {
                  prompt: "What do the divers tie the coral to?",
                  options: [
                    "To underwater metal frames",
                    "To healthy coral",
                    "To damaged parts of the reef",
                    "To plants in a garden",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "How long do the pieces grow on the frames?",
                  options: [
                    "About a year",
                    "Until the summer",
                    "Until the government acts",
                    "For thirty years",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "self-check",
              text: CORAL_II,
              prompt:
                "Where do the divers move the coral after a year?\n\nכתבו את התשובה באנגלית, מהטקסט.",
              modelAnswer: "To damaged parts of the reef.",
            },
            {
              type: "summary",
              title: "במשפט אחד",
              lines: ["שאלה ← מילת מפתח ← המשפט ← תשובה. לא קוראים הכול."],
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-topic",
    section: "e-1",
    titleEn: "What Are We Told in Paragraph X?",
    required: ["e-bridge"],
    requiredRounds: 3,
    position: { x: 70, y: 680 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "בבחינה יש 4 שאלות כאלה:\n{p:text}**What are we told in paragraph III?**\n{p:text}**What do we learn in paragraph II?**\n\nכאן מילת מפתח לא תעזור: המילים של כמה אפשרויות מופיעות באותה פסקה.",
        },
        {
          type: "preface",
          text: "האפשרויות הן **נושאים**, לא עובדות:\n{p:text}How Helen got her bus\n{p:text}Why the libraries closed\n\n**נושא** = על מה **כל** הפסקה מדברת.\n**פרט** = עובדה אחת מתוכה (She sold her car).",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "קוראים את **כל** הפסקה. היא קצרה, כ-70 מילים. כאן כן קוראים!",
            "נותנים לה שם ב-3-4 מילים: **מי? איך? למה? מה קרה?**",
            "מחפשים את האפשרות שאומרת את אותו דבר.",
            "בודקים: כל משפט בפסקה מתאים לנושא הזה? אם כן - מצאתם.",
          ],
        },
        {
          type: "summary",
          title: "3 מלכודות",
          lines: [
            "1 · **פרט נכון** מהפסקה - משפט אחד ממנה, לא הנושא",
            "2 · **נושא של פסקה אחרת** - נכון לכתבה, לא לפסקה ששאלו עליה",
            "3 · **מילת שאלה לא נכונה** - הפסקה מסבירה **איך**, והאפשרות אומרת **למה**",
          ],
        },
        {
          type: "preface",
          text: "דוגמה: פסקה II בכתבה על הספרייה.\nהלן כועסת כי ספריות הכפרים נסגרו, מוכרת את המכונית, קונה אוטובוס ובונה בו מדפים.\n\nשם ב-3-4 מילים: **איך הלן התחילה את הספרייה**.",
        },
        {
          type: "summary",
          title: "What are we told in paragraph II?",
          lines: [
            "{d:ltr}✅ How Helen started her library bus",
            "{d:ltr}❌ That Helen sold her car → פרט נכון, לא הנושא",
            "{d:ltr}❌ How Helen pays for fuel → הנושא של פסקה V",
            "{d:ltr}❌ Why city children read more → לא כתוב בכלל",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt: "איזו מהאפשרויות היא **נושא** ולא פרט?",
              options: [
                "How Helen started her library bus",
                "Helen sold her car",
                "The bus is yellow",
                "There are 3,000 books on the bus",
              ],
              correctIndex: 0,
              explanation:
                "שלוש האחרות הן עובדות בודדות, וכולן נכנסות מתחת ל-How Helen started her library bus.",
            },
            {
              type: "mcq",
              prompt: "{d:rtl}בשאלת What are we told in paragraph X - מה עושים קודם?",
              options: [
                "קוראים את כל הפסקה ונותנים לה שם קצר",
                "מחפשים בפסקה מילה מכל אפשרות",
                "בוחרים את האפשרות שהמילים שלה מופיעות בפסקה",
              ],
              correctIndex: 0,
              explanation:
                "גם המלכודות בנויות ממילים שמופיעות בפסקה, אז חיפוש מילים לא מבדיל ביניהן. השם שנתתם לפסקה כן.",
            },
            {
              type: "passage-mcq",
              text: CORAL_I,
              questions: [
                {
                  prompt: "What are we told in paragraph I?",
                  options: [
                    "Why coral reefs are important and in danger",
                    "That coral turns white in warm water",
                    "How divers grow new coral",
                    "How many fish live near Mauritius",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תורכם. קודם שם לפסקה, ורק אז האפשרויות.",
            },
            {
              type: "passage-mcq",
              text: CORAL_II,
              questions: [
                {
                  prompt: "What do we learn in paragraph II?",
                  options: [
                    "How the divers grow new coral",
                    "That the frames are made of metal",
                    "Why the reefs are dying",
                    "Which coral survives hot summers",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                "{d:rtl}בשאלה הקודמת, האפשרות That the frames are made of metal - למה היא מלכודת?",
              options: [
                "היא נכונה, אבל היא פרט אחד ולא הנושא",
                "היא לא כתובה בפסקה",
                "היא הנושא של פסקה אחרת",
              ],
              correctIndex: 0,
              explanation:
                "הפסקה באמת אומרת metal frames, אבל זה משפט אחד. הנושא הוא איך הצוללנים מגדלים אלמוגים.",
            },
            {
              type: "passage-mcq",
              text: LIBRARY_III,
              questions: [
                {
                  prompt: "What are we told in paragraph III?",
                  options: [
                    "How the library grew after a slow start",
                    "That nobody pays a fine",
                    "Who visits the bus and why",
                    "Why Helen was angry",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 3",
              level: 4,
              title: "רמת בחינה",
              subtitle:
                "שלוש פסקאות מהכתבה על האלמוגים. לכל אחת: שם ב-3-4 מילים, ורק אז האפשרויות.",
            },
            {
              type: "passage-mcq",
              text: [
                "{a:center}**GARDENERS UNDER THE SEA**",
                CORAL_III,
                CORAL_IV,
                CORAL_V,
              ].join("\n\n"),
              label: "GARDENERS UNDER THE SEA",
              timerKey: "e-topic-coral",
              questions: [
                {
                  prompt: "What are we told in paragraph III?",
                  options: [
                    "Which coral the divers choose and why",
                    "Who the team leader is",
                    "How tourists help the project",
                    "Why coral turns white in hot water",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph IV?",
                  options: [
                    "Who else has become part of the project",
                    "That tourists clean the frames",
                    "How the coral is moved to the reef",
                    "Why fishermen are against the divers",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What are we told in paragraph V?",
                  options: [
                    "What planting coral cannot do",
                    "What Dr. Farouk's job is",
                    "Which coral survives hot summers",
                    "How long the world's reefs are",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "summary",
              title: "במשפט אחד",
              lines: [
                "קוראים את כל הפסקה, נותנים לה שם, ורק אז בוחרים. פרט נכון הוא עדיין לא הנושא.",
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 4 (רשות)",
              level: 2,
              title: "תרגול נוסף",
              subtitle: "הפעם בלי אפשרויות: אתם נותנים את השם.",
            },
            {
              type: "self-check",
              text: CORAL_IV,
              prompt: "תנו לפסקה שם ב-3-4 מילים, באנגלית.",
              modelAnswer: "New people in the project (tourists and fishermen).",
            },
            {
              type: "self-check",
              text: LIBRARY_IV,
              prompt: "תנו לפסקה שם ב-3-4 מילים, באנגלית.",
              modelAnswer: "What else the bus offers.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-topic-q",
    section: "e-1",
    titleEn: "Topic Questions: Exam Level",
    required: ["e-topic"],
    requiredRounds: 2,
    position: { x: 100, y: 800 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "עכשיו כמו בבחינה: כתבה שלמה, 5 פסקאות, ושאלות נושא.\n\nלא קוראים את כל הכתבה ברצף. לכל שאלה: הולכים לפסקה שלה, קוראים אותה, נותנים שם, בוחרים.",
        },
        {
          type: "summary",
          title: "לפני שבוחרים",
          lines: [
            "1 · השם שלי מתאים ל**כל** הפסקה?",
            "2 · זה לא רק משפט אחד ממנה?",
            "3 · זה לא הנושא של פסקה אחרת?",
            "4 · מילת השאלה (How / Why / What) נכונה?",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "passage-mcq",
              text: "IV  Not everyone welcomed the change. Some parents complained that a later start made it difficult to get to work on time. Bus companies had to change their timetables, and sports teams had less daylight for training after school. In a few districts, schools went back to the old times after only one year.",
              questions: [
                {
                  prompt: "What are we told in paragraph IV?",
                  options: [
                    "Problems that the later start caused",
                    "That bus companies changed their timetables",
                    "The benefits of more sleep",
                    "Why sports are important for students",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "mcq",
              prompt:
                "{d:rtl}בשאלה הקודמת, The benefits of more sleep - למה היא לא נכונה?",
              options: [
                "פסקה IV מדברת על בעיות, לא על יתרונות",
                "היא פרט נכון מפסקה IV",
                "היא נכונה ומתאימה לכל הפסקה",
              ],
              correctIndex: 0,
              explanation:
                "המשפט הראשון אומר הכול: Not everyone welcomed the change. אחריו באות בעיות. יתרונות הם נושא של פסקה אחרת.",
            },
            {
              type: "mcq",
              prompt:
                "{d:rtl}פסקה נותנת עצות: put phones away, get up at the same time. איזו אפשרות מתארת אותה?\n{p:text}What are we told in paragraph V?",
              options: [
                "What students can do to sleep better",
                "Why phones are bad for students",
                "Why students sleep badly at weekends",
              ],
              correctIndex: 0,
              explanation:
                "הפסקה אומרת **מה** לעשות. Why phones are bad הוא פרט (blue light), ו-weekends מופיע רק בתוך עצה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 2",
              level: 4,
              title: "רמת בחינה",
              subtitle:
                "כתבה חדשה ו-4 שאלות נושא. השעון רץ, אבל קודם שם לפסקה ורק אז האפשרויות.",
            },
            {
              type: "passage-mcq",
              text: SLEEP,
              label: "WHY TEENAGERS CAN'T GET UP",
              timerKey: "e-topic-q-sleep",
              questions: [
                {
                  prompt: "What are we told in paragraph I?",
                  options: [
                    "Why teenagers fall asleep late",
                    "What melatonin is",
                    "How much sleep teenagers need",
                    "Why parents think teenagers are lazy",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph II?",
                  options: [
                    "How early school hours affect students",
                    "When a typical student gets up",
                    "How students can sleep better",
                    "Why schools start early",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What are we told in paragraph III?",
                  options: [
                    "The results of a later school start",
                    "When Seattle schools start today",
                    "Why some parents were against the change",
                    "How researchers measure sleep",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph V?",
                  options: [
                    "What students can do to help themselves",
                    "That screens give off blue light",
                    "Why teenagers' bodies are different",
                    "Who Dr. Mia Halvorsen is",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 3 (רשות)",
              level: 2,
              title: "תרגול נוסף",
              subtitle: "הכתבה על הספרייה, הפעם כולה.",
            },
            {
              type: "passage-mcq",
              text: LIBRARY,
              questions: [
                {
                  prompt: "What are we told in paragraph I?",
                  options: [
                    "What the library on wheels is",
                    "That the bus stops every Tuesday",
                    "Why Helen bought a bus",
                    "How many books the bus lends a week",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph IV?",
                  options: [
                    "What else the bus offers its visitors",
                    "That a nurse comes once a month",
                    "How Helen built the shelves",
                    "Why older people live alone",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What are we told in paragraph V?",
                  options: [
                    "The problems Helen faces and her plans",
                    "That the engine broke down twice",
                    "How many books the bus lends",
                    "Why the council closed the libraries",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-complete",
    section: "e-1",
    titleEn: "Complete the Answer",
    required: ["e-topic-q"],
    requiredRounds: 3,
    position: { x: 70, y: 920 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "5 מתוך 9 השאלות פתוחות. ברובן השאלון כבר כתב את **תחילת התשובה**, ואתם ממשיכים:\n{p:text}COMPLETE THE ANSWER: By ...\n{p:text}COMPLETE THE ANSWER: Because they want to ...\n{p:text}COMPLETE THE SENTENCE: They must ...\n\nבשאלה אחת אין התחלה: **ANSWER: ...**",
        },
        {
          type: "summary",
          title: "מה בא אחרי ההתחלה",
          lines: [
            "אחרי **By** ← פועל + ing: By **selling** her car",
            "אחרי **to** ← פועל בסיס: want to **help**",
            "אחרי **must / can / should** ← פועל בסיס: must **pay**",
            "אחרי **ANSWER** ← משפט קצר מהטקסט",
          ],
        },
        {
          type: "preface",
          text: "{p:callout}{i:warn}ההתחלה + ההמשך שלכם = **משפט אחד**. קראו אותם יחד. לא כותבים שוב את ההתחלה, ולא פותחים משפט חדש (They...).",
        },
        {
          type: "preface",
          text: "דוגמה מהכתבה על הספרייה:\n{p:text}How did Helen pay for the bus? COMPLETE THE ANSWER: By ...\n\nבטקסט: She **sold** her car, **used** her savings.\nאחרי By הפועל מקבל ing:\n{p:text}By **selling her car and using her savings**.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt:
                "{p:text}How do the divers grow new coral?\nCOMPLETE THE ANSWER: By ...\n\nאיזה המשך נכון?",
              options: [
                "tying pieces of coral to metal frames",
                "tie pieces of coral to metal frames",
                "they tie pieces of coral to frames",
                "tied pieces of coral to metal frames",
              ],
              correctIndex: 0,
              explanation:
                "אחרי By בא פועל + ing: tying. tie ו-tied לא מתאימים, ו-they פותח משפט חדש.",
            },
            {
              type: "mcq",
              prompt:
                "{p:text}Why do tourists join the divers?\nCOMPLETE THE ANSWER: Because they want to ...\n\nאיזה המשך נכון?",
              options: [
                "help clean the frames",
                "helping clean the frames",
                "they help clean the frames",
                "helped clean the frames",
              ],
              correctIndex: 0,
              explanation: "אחרי want to בא פועל בסיס: help. בלי ing ובלי עבר.",
            },
            {
              type: "mcq",
              prompt:
                "{p:text}What can readers do with a book?\nCOMPLETE THE SENTENCE: Readers can ...\n\nאיזה המשך נכון?",
              options: [
                "keep it for as long as they need it",
                "keeping it for as long as they need it",
                "to keep it for as long as they need it",
                "they keep it for a long time",
              ],
              correctIndex: 0,
              explanation:
                "אחרי can בא פועל בסיס: keep. לא keeping, ולא to keep.",
            },
            {
              type: "mcq",
              prompt:
                "{p:text}How did Helen pay for the bus?\nCOMPLETE THE ANSWER: By ...\n\nתלמיד כתב: **By sold her car.** מה הבעיה?",
              options: [
                "אחרי By בא פועל + ing: By selling her car",
                "התשובה לא כתובה בטקסט",
                "צריך להתחיל משפט חדש: She sold her car",
              ],
              correctIndex: 0,
              explanation:
                "המידע נכון, אבל הוא לא ממשיך את By. מעבירים את הפועל מהטקסט לצורה שמתאימה להתחלה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "preface",
              text: "תורכם לכתוב. רק את ההמשך, באנגלית, מהטקסט.",
            },
            {
              type: "passage-quiz",
              text: "I  Several hotels in London have started keeping bees on their roofs. Guests can join the beekeeper on a tour, and the hotel kitchens use the honey in breakfasts and desserts. The hotels say they want to help bees, whose numbers have fallen because farmers use chemicals and cities have fewer flowers.",
              questions: [
                {
                  prompt:
                    "How can guests learn about the bees? COMPLETE THE ANSWER: By ...",
                  keywords: ["tour"],
                  answerHint: "By joining the beekeeper on a tour.",
                },
                {
                  prompt:
                    "Why do the hotels keep bees? COMPLETE THE ANSWER: Because they want to ...",
                  keywords: ["help"],
                  answerHint: "Because they want to help bees.",
                },
                {
                  prompt: "Why have the numbers of bees fallen? ANSWER: ...",
                  keywords: ["chemical"],
                  answerHint:
                    "Because farmers use chemicals and cities have fewer flowers.",
                },
              ],
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 3",
              level: 4,
              title: "רמת בחינה",
              subtitle:
                "5 שאלות פתוחות, כמו בבחינה. כתבו רק את ההמשך, וקראו אותו יחד עם ההתחלה.",
            },
            {
              type: "passage-quiz",
              text: REPAIR,
              questions: [
                {
                  prompt:
                    "How did Martine Postma try to solve the problem? COMPLETE THE ANSWER: By ...",
                  keywords: ["free"],
                  answerHint:
                    "By organising a meeting where volunteers fix things for free.",
                },
                {
                  prompt:
                    "Why do the organisers run Repair Cafés? COMPLETE THE ANSWER: Because they want to ...",
                  keywords: ["waste"],
                  answerHint: "Because they want to reduce waste.",
                },
                {
                  prompt:
                    "The service is free. COMPLETE THE SENTENCE: Visitors are asked to ...",
                  keywords: ["donation"],
                  answerHint: "Visitors are asked to leave a small donation.",
                },
                {
                  prompt:
                    "What happens with many new items? COMPLETE THE SENTENCE: Volunteers must often ...",
                  keywords: ["give up"],
                  answerHint: "Volunteers must often give up on them.",
                },
                {
                  prompt:
                    "What would \"right to repair\" laws force companies to do? ANSWER: ...",
                  keywords: ["fix"],
                  answerHint: "Make products that can be fixed.",
                },
              ],
            },
            {
              type: "summary",
              title: "במשפט אחד",
              lines: [
                "By ← ing · to / must / can ← פועל בסיס. ההתחלה וההמשך = משפט אחד.",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-glossary-time",
    section: "e-1",
    titleEn: "Glossary and Time",
    required: ["e-complete"],
    requiredRounds: 2,
    position: { x: 0, y: 1040 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "בבחינה אין מילון. במקומו יש **Glossary**: 3-4 מילים קשות שמסומנות בקו תחתון בכתבה, והתרגום שלהן מופיע מתחתיה.\n{p:text}She used her ++savings++ to buy the bus.\n{p:text}savings - חסכונות",
        },
        {
          type: "preface",
          text: "פגשתם מילה עם קו תחתון? מציצים למטה וממשיכים. לא מנחשים ולא נתקעים.\n\nמילה קשה **בלי** קו? שואלים: אני צריך אותה כדי לענות? לא - מדלגים. כן - מנסים להבין מהמשפט שסביבה.",
        },
        {
          type: "summary",
          title: "75 דקות - איך מחלקים",
          lines: [
            "📖 קריאה ו-9 שאלות - כ-50 דק׳ (כ-5 דק׳ לשאלה)",
            "🔤 אוצר מילים, 5 סטים - כ-15 דק׳",
            "✅ בדיקה - כ-10 דק׳: אין שאלה ריקה, וכל המשך מתאים להתחלה שלו",
          ],
        },
        {
          type: "preface",
          text: "{p:callout}{i:warn}שאלה תוקעת אתכם יותר מ-5 דקות? מסמנים, עוברים הלאה וחוזרים בסוף. 30 הנקודות של אוצר המילים לא יחכו.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "mcq",
              prompt:
                "{d:rtl}בכתבה כתוב: Helen pays with donations and a small ++grant++. מה עושים?",
              options: [
                "מסתכלים ב-Glossary מתחת לכתבה וממשיכים",
                "עוצרים ומנסים לנחש מה זה grant",
                "מדלגים על כל המשפט",
              ],
              correctIndex: 0,
              explanation:
                "קו תחתון = המילה מתורגמת למטה. זה לוקח שנייה, וחוסך ניחוש.",
            },
            {
              type: "mcq",
              prompt: "מילה קשה בלי קו תחתון, והיא לא קשורה לשאלה. מה עושים?",
              options: [
                "מדלגים עליה",
                "מחפשים אותה ב-Glossary",
                "עוצרים עד שמבינים אותה",
              ],
              correctIndex: 0,
              explanation:
                "ב-Glossary יש רק את המילים עם הקו. מילה שלא צריך כדי לענות - לא שווה את הזמן.",
            },
            {
              type: "mcq",
              prompt: "עברו 50 דקות ונשארה שאלת קריאה אחת. מה עושים?",
              options: [
                "עוברים לאוצר המילים וחוזרים אליה בסוף",
                "מסיימים אותה, גם אם זה ייקח 15 דקות",
                "משאירים אותה ריקה ולא חוזרים",
              ],
              correctIndex: 0,
              explanation:
                "אוצר המילים שווה 30 נקודות. שאלת קריאה אחת שווה 7-8.",
            },
            {
              type: "mcq",
              prompt: "כמה זמן כדאי לתת לכל שאלת קריאה, בערך?",
              options: ["5 דקות", "15 דקות", "דקה אחת"],
              correctIndex: 0,
              explanation: "9 שאלות ב-50 דקות: כ-5 דקות לשאלה.",
            },
          ],
        },
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 2",
              level: 4,
              title: "רמת בחינה",
              subtitle:
                "כתבה מוכרת עם Glossary, 4 שאלות, השעון רץ. מילה עם קו תחתון? התרגום שלה למטה.",
            },
            {
              type: "passage-mcq",
              text: LIBRARY,
              label: "THE LIBRARY ON WHEELS",
              timerKey: "e-glossary-library",
              questions: [
                {
                  prompt: "What did Helen use to buy the bus?",
                  options: [
                    "Her savings",
                    "A grant from the council",
                    "Donations from readers",
                    "Money from the school",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What happens if a reader returns a book late?",
                  options: [
                    "Nothing - nobody pays a fine",
                    "The reader pays a small fine",
                    "The reader cannot borrow again",
                    "Helen keeps the next book",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What does the nurse do once a month?",
                  options: [
                    "Checks the blood pressure of elderly visitors",
                    "Drives the bus to the villages",
                    "Talks to people who live alone",
                    "Helps teenagers with their homework",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "How does Helen pay for fuel and repairs?",
                  options: [
                    "With donations and a small grant",
                    "With money from selling books",
                    "With fines from late readers",
                    "With help from a former student",
                  ],
                  correctIndex: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "e-final",
    section: "e-1",
    titleEn: "Final Practice",
    required: ["e-glossary-time"],
    requiredRounds: 1,
    position: { x: 0, y: 1160 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "התרגול המסכם: כתבה אחת ו-9 שאלות, בדיוק כמו חלק I בבחינה.\n\nתכננו כ-50 דקות, ואל תיתקעו על שאלה אחת. השתמשו בכל מה שלמדנו: שם לכל פסקה, מילת מפתח, המשך שמתאים להתחלה, ו-Glossary.",
        },
      ],
      rounds: [
        {
          screens: [
            {
              type: "opener",
              kicker: "סיבוב 1",
              level: 5,
              badge: "⏱️",
              title: "תרגול מסכם בזמן",
              subtitle:
                "4 שאלות אמריקאיות ואחריהן 5 שאלות פתוחות, על אותה כתבה.",
            },
            {
              type: "passage-mcq",
              text: SILBO,
              label: "THE LANGUAGE THAT IS WHISTLED",
              timerKey: "e-final-silbo",
              questions: [
                {
                  prompt: "What are we told in paragraph I?",
                  options: [
                    "Why the people of La Gomera started whistling",
                    "How far a whistle can be heard",
                    "How Silbo copies spoken words",
                    "Why young people left the island",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph II?",
                  options: [
                    "How Silbo works",
                    "That whistlers use a finger",
                    "Who learns Silbo today",
                    "Why Silbo almost disappeared",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What are we told in paragraph III?",
                  options: [
                    "Why Silbo almost disappeared",
                    "That young people moved to the cities",
                    "How the islanders saved Silbo",
                    "How the brain understands Silbo",
                  ],
                  correctIndex: 0,
                },
                {
                  prompt: "What do we learn in paragraph V?",
                  options: [
                    "Why scientists are interested in whistled languages",
                    "How many communities whistle",
                    "How Silbo joined UNESCO's list",
                    "How whistlers change the pitch",
                  ],
                  correctIndex: 0,
                },
              ],
            },
            {
              type: "passage-quiz",
              text: SILBO,
              questions: [
                {
                  prompt:
                    "How do whistlers copy spoken words? COMPLETE THE ANSWER: By ...",
                  keywords: ["pitch"],
                  answerHint: "By changing the pitch of the sound.",
                },
                {
                  prompt:
                    "Why did young people move to the cities? COMPLETE THE ANSWER: Because they wanted to ...",
                  keywords: ["work"],
                  answerHint: "Because they wanted to find work.",
                },
                {
                  prompt:
                    "Silbo is a required subject. COMPLETE THE SENTENCE: Every child on La Gomera must ...",
                  keywords: ["learn"],
                  answerHint: "Every child on La Gomera must learn to whistle (learn Silbo).",
                },
                {
                  prompt:
                    "Why do tourists visit restaurants on La Gomera? COMPLETE THE ANSWER: Because they want to ...",
                  keywords: ["whistl"],
                  answerHint: "Because they want to hear the waiters whistle to each other.",
                },
                {
                  prompt:
                    "According to Dr. Reyes, what do we lose when a whistled language dies? ANSWER: ...",
                  keywords: ["brain"],
                  answerHint:
                    "A window into how the human brain deals with language.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
