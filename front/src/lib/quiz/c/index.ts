import type { QuizNode } from "../types";

// One array literal of every module C exam, same shape as a lesson section
// file (lib/content/c/c-<N>.ts) - the content-edit save endpoint merges into
// this array by id, the same way it merges lesson nodes into a section.
export const cQuizzes: QuizNode[] = [
  {
    id: "module-c-exam-2",
    module: "c",
    uuid: "c-t-4815",
    kind: "assorted",
    titleHe: "משקפיים חכמות שעוזרות לעיוורים לראות",
    descriptionHe: "מבחן תרגול מלא בסגנון בגרות - קריאה וכתיבה.",
    options: { passThreshold: 0.6, durationMinutes: 90, warnAtMinutes: 10 },
    parts: [
      {
        id: "reading",
        titleHe: "קריאה",
        instructionsHe: "קראו את הקטע וענו על השאלות שאחריו.",
        points: 70,
        screens: [
          {
            type: "passage",
            title: "{a:center}**Smart Glasses That Help Blind People See**",
            paragraphs: [
              {
                id: "p1",
                text: "**I **Many people around the world cannot see well or are blind. For them, simple tasks like walking to a bus stop or reading a menu can be very hard. A new kind of smart glasses is now helping these people. The glasses talk to the user through a small speaker and tell them about the world around them.",
              },
              {
                id: "p2",
                text: '**II** The glasses have a small camera at the front. The camera looks at what is in front of the user, and a computer program tells them what it sees. For example, it can say "there is a step in front of you" or "the door is on your right." The glasses can also read words from books, signs, and screens out loud.',
              },
              {
                id: "p3",
                text: "**III **But the glasses are not always perfect. They can make mistakes when it is dark or when things move fast. The battery runs out after a few hours, so users need to charge them often. The glasses are also very expensive, and many families cannot afford to buy them.",
              },
              {
                id: "p4",
                text: "**IV** Many blind people are already using smart glasses every day. Students use them in class to read the board, and workers use them to find their way around buildings. One man said the glasses helped him see his daughter's face for the first time. In the future, companies hope to make the glasses smaller, cheaper, and better so that more people can use them.",
              },
            ],
          },
          {
            type: "mcq",
            paragraphRef: "I",
            prompt: "What do we learn from paragraph I?",
            options: [
              "Why blind people find it hard to use technology.",
              "How smart glasses are helping blind people.",
              "Why so many people in the world cannot see well.",
              "How glasses are made for blind people.",
            ],
            correctIndex: 1,
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "II",
            prompt: "According to paragraph II, what else can the glasses do?",
            options: [
              "They can take photos and save them.",
              "They can read words from books and signs out loud.",
              "They can connect to a phone.",
              "They can help the user walk faster.",
            ],
            correctIndex: 1,
            points: 8,
          },
          {
            type: "sentence-completion",
            paragraphRef: "II",
            before: "The glasses can also read words from",
            after: "out loud.",
            modelAnswers: ["books, signs, and screens"],
            points: 7,
          },
          {
            type: "writing-task",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, why can the glasses make mistakes? Give one reason.",
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, what problem do users have with the battery?",
            options: [
              "The battery is too big and heavy.",
              "The battery runs out after a few hours.",
              "The battery is very expensive to change.",
              "The battery only works indoors.",
            ],
            correctIndex: 1,
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, why can many families not buy the smart glasses?",
            points: 7,
          },
          {
            type: "writing-task",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, how do smart glasses help students in class?",
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, how did the glasses help one man?",
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, what do companies hope to do in the future?",
            options: [
              "Make the glasses free for everyone.",
              "Make the glasses only for students.",
              "Make the glasses smaller, cheaper, and better.",
              "Make glasses that can drive cars.",
            ],
            correctIndex: 2,
            points: 8,
          },
        ],
      },
      {
        id: "writing",
        titleHe: "כתיבה",
        instructionsHe: "כתבו תשובה מלאה לשאלה הבאה.",
        points: 30,
        screens: [
          {
            type: "writing-task",
            prompt:
              "Which famous person would you like to give a talk at your school? Give reasons to explain your choice.",
            minWords: 70,
            maxWords: 90,
            points: 30,
          },
        ],
      },
    ],
  },
  {
    id: "module-c-exam-3",
    module: "c",
    uuid: "c-t-7192",
    kind: "assorted",
    titleHe: "ידידות יוצאות דופן בין בעלי חיים",
    descriptionHe: "מבחן תרגול מלא בסגנון בגרות - קריאה וכתיבה.",
    options: { passThreshold: 0.6, durationMinutes: 90, warnAtMinutes: 10 },
    parts: [
      {
        id: "reading",
        titleHe: "קריאה",
        instructionsHe: "קראו את הקטע וענו על השאלות שאחריו.",
        points: 70,
        screens: [
          {
            type: "passage",
            title: "Unusual Friendships Between Different Animals",
            paragraphs: [
              {
                id: "p1",
                text: "Most animals spend their time with others of the same kind. They eat together, play together, and protect each other. But sometimes, two very different animals become close friends. These unusual friendships surprise people because the animals are so different. Some of the most famous examples are between animals that would normally never be near each other.",
              },
              {
                id: "p2",
                text: "One well-known friendship is between a dog and a deer. The two animals met when they were both very young. They began to play together every day, and soon they became best friends. They sleep next to each other and do not like to be apart. Another famous example is a lion and a goat that lived together in a zoo. At first, the goat was put in the lion's home as food. But the lion did not eat the goat. Instead, the two animals became friends.",
              },
              {
                id: "p3",
                text: "Scientists say these friendships happen for different reasons. Sometimes, a young animal loses its mother and looks for love from another animal. Other times, two animals grow up together and get used to each other. Scientists also say that many animals feel lonely, just like people do. When they find a friend, even one that looks very different, they are happy to keep that friendship.",
              },
              {
                id: "p4",
                text: "These unusual friendships teach us something important. They show us that being friends does not mean you have to be the same. Animals can be close to others who look different and live in different ways. Many people who see these friendships say they feel happy and full of hope. Some animal shelters now put different kinds of animals together to help lonely animals find a friend.",
              },
            ],
          },
          {
            type: "mcq",
            paragraphRef: "I",
            prompt: "What do we learn from paragraph I?",
            options: [
              "Why most animals like to be with other animals.",
              "How some very different animals can become friends.",
              "Why people are surprised by most animals.",
              "How animals protect each other from danger.",
            ],
            correctIndex: 1,
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "II",
            prompt:
              "According to paragraph II, what happened between the lion and the goat?",
            options: [
              "The lion and the goat fought with each other.",
              "The goat helped the lion find food in the zoo.",
              "Instead of eating the goat, the lion became its friend.",
              "The lion and the goat both left the zoo together.",
            ],
            correctIndex: 2,
            points: 8,
          },
          {
            type: "sentence-completion",
            paragraphRef: "II",
            before:
              "The dog and the deer began to play together every day, and soon they",
            after: ".",
            modelAnswers: ["became best friends"],
            points: 7,
          },
          {
            type: "writing-task",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, why do some young animals look for friendship from another animal? Give one reason.",
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, what do scientists say about animals that feel lonely?",
            options: [
              "They stop eating and become sick.",
              "They try to go back to their families.",
              "They are happy to keep a friendship when they find one.",
              "They become dangerous to other animals.",
            ],
            correctIndex: 2,
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "III",
            prompt:
              "According to paragraph III, how do some animals become friends when they grow up together?",
            points: 7,
          },
          {
            type: "writing-task",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, what do these unusual friendships show us?",
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, what do some animal shelters do to help lonely animals?",
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "IV",
            prompt:
              "According to paragraph IV, how do people feel when they see these unusual friendships?",
            options: [
              "Sad and worried about the animals.",
              "Surprised and scared.",
              "Happy and full of hope.",
              "Angry that the animals are so different.",
            ],
            correctIndex: 2,
            points: 8,
          },
        ],
      },
      {
        id: "writing",
        titleHe: "כתיבה",
        instructionsHe: "כתבו תשובה מלאה לשאלה הבאה.",
        points: 30,
        screens: [
          {
            type: "writing-task",
            prompt:
              "Today there are cameras in most public places. What do you think about this? Give reasons to explain your opinion.",
            minWords: 70,
            maxWords: 90,
            points: 30,
          },
        ],
      },
    ],
  },
];
