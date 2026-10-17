// COBE - Part C, the clip: watch, then two sets of questions (describe,
// interpret). The clips are not ready: `video` screens without `src` hold
// their place. Source: Ministry 4-point handbook, Dec 2024, p. 19.
import type { LessonNode } from "../types";

export const cobe2Lessons: LessonNode[] = [
  {
    id: "cobe-clip-describe",
    section: "cobe-2",
    required: [],
    position: { x: 70, y: 790 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "### החלק של הקליפ\n\nצופים בקליפ קצר: שיחה, ראיון, הרצאה או מצגת. אחריו באים **שני סטים של שאלות**, וכל סט נענה **בהקלטה אחת**. החלק הזה שווה **חצי מהציון**, וכולו לוקח 4-5 דקות.\n\n**סט 1** בודק הבנה בסיסית: מה ראיתם ושמעתם. **סט 2** מבקש פרשנות: למה, מה דעתכם, מה הייתם עושים.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**מי** - מי מופיע בקליפ: *There are two teenagers / a teacher and a student...*",
            "**איפה** - איפה זה קורה: *They are at school / at home / in the street...*",
            "**מה קרה** - לפי הסדר: *First... Then... After that...*",
            "**איך זה נגמר** - *In the end...*",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מספרים לפי הסדר" },
            {
              type: "cloze-pick",
              clause:
                "they start to argue about whose turn it is to use the computer.",
              options: ["Then", "Because", "Although", "For example"],
              correctIndices: [0],
              explanation:
                '"Then" ממשיך את הסיפור לפי הסדר. "Because" ו-"Although" מחברים סיבה או ניגוד, לא את הצעד הבא, ו-"For example" מביא דוגמה.',
            },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Describe what happened in the clip."**\n\nאיזו תשובה עונה על סט 1?',
              options: [
                "I think the clip was very interesting and I liked it.",
                "There are two brothers at home. First, they both want the computer. Then they start to shout. In the end, their mother tells them to share it.",
                "Computers are very important in our lives today.",
                "If I were the mother, I would buy another computer.",
              ],
              correctIndex: 1,
              explanation:
                'רק תשובת האחים אומרת מי, איפה ומה קרה לפי הסדר. "I liked it" היא דעה בלי תיאור, "Computers are important" לא מתארת את הקליפ, ו-"If I were the mother" שייכת לסט 2.',
            },
            {
              type: "video",
              caption: "צפו בקליפ ושימו לב: מי, איפה, מה קרה ואיך זה נגמר.",
            },
            {
              type: "speak",
              part: "C",
              prompt:
                "Describe what happened in the clip. Who was in it, where were they and what did they do?",
              tip: "מי ← איפה ← מה קרה (First, Then, After that) ← איך זה נגמר.",
              targetSeconds: 45,
              checklist: [
                "אמרתי מי מופיע ואיפה זה קורה",
                "סיפרתי לפי הסדר, עם First / Then / In the end",
                "עניתי על כל השאלות בסט",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "cobe-clip-interpret",
    section: "cobe-2",
    required: ["cobe-clip-describe"],
    position: { x: 100, y: 910 },
    big: false,
    content: {
      preface: [
        {
          type: "preface",
          text: "### סט 2: מה אתם חושבים\n\nכאן כבר לא מספיק לתאר. שואלים **למה** מישהו עשה משהו, **מה דעתכם**, או **מה הייתם עושים** במקומו. עונים לעומק, בהקלטה אחת.\n\nאותם מהלכים כמו בכתיבה: עמדה, סיבה, דוגמה מהקליפ.",
        },
        {
          type: "steps",
          ordered: true,
          steps: [
            "**עמדה** - *I think the boy was right / wrong to...*",
            "**סיבה** - *because...*",
            "**דוגמה מהקליפ** - *For example, in the clip he...*",
            "**אתם** - *If I were him, I would...*",
          ],
        },
      ],
      rounds: [
        {
          screens: [
            { type: "preface", text: "סיבוב 1 | מתיאור לפרשנות" },
            {
              type: "mcq",
              prompt:
                '{p:text}**"Why do you think the brothers started to shout?"**\n\nאיזו תשובה עונה על סט 2?',
              options: [
                "There are two brothers at home, and there is one computer.",
                "I think they shouted because they were both tired and wanted the computer at the same time. For example, the older brother said he had homework, but the younger one did not listen.",
                "First they wanted the computer, then they shouted, and in the end their mother came.",
                "Brothers sometimes shout.",
              ],
              correctIndex: 1,
              explanation:
                'רק התשובה עם "I think... because... For example" מפרשת: עמדה, סיבה ודוגמה מהקליפ. "two brothers at home" ו-"First... then..." הם תיאור של סט 1, ו-"Brothers sometimes shout" כללי מדי.',
            },
            {
              type: "cloze-pick",
              clause: "I would offer to use the computer one after the other.",
              options: ["If I were him,", "In the clip,", "First,", "At home,"],
              correctIndices: [0],
              explanation:
                '"If I were him, I would..." אומר מה אתם הייתם עושים - בדיוק מה ששאלת "What would you do?" מבקשת. שאר הפתיחות מתארות את הקליפ.',
            },
            {
              type: "video",
              caption: "צפו שוב בקליפ. הפעם חפשו למה כל אחד התנהג כמו שהתנהג.",
            },
            {
              type: "speak",
              part: "C",
              prompt:
                "Why do you think the people in the clip acted the way they did? What would you do in their place?",
              tip: "עמדה ← because ← דוגמה מהקליפ ← If I were..., I would...",
              targetSeconds: 60,
              checklist: [
                "אמרתי מה אני חושב/ת ולמה",
                "הבאתי דוגמה ממה שראיתי בקליפ",
                "אמרתי מה הייתי עושה במקומם",
                "עניתי על שתי השאלות, בהקלטה אחת",
              ],
            },
          ],
        },
      ],
    },
  },
];
