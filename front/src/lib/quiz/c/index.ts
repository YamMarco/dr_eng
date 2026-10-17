import type { QuizNode } from "../types";

// One array literal of every module C exam, same shape as a lesson section
// file (lib/content/c/c-<N>.ts) - the content-edit save endpoint merges into
// this array by id, the same way it merges lesson nodes into a section.
export const cQuizzes: QuizNode[] = [
  {
    id: "c-exam-2",
    module: "c",
    uuid: "c-t-4815",
    kind: "assorted",
    options: { passThreshold: 0.6, durationMinutes: 90, warnAtMinutes: 10 },
    parts: [
      {
        id: "reading",
        instructionsHe: "קראו את הקטע וענו על השאלות שאחריו.",
        points: 70,
        screens: [
          {
            type: "passage",
            title: "{a:center}**Smart Glasses That Help Blind People See**",
            paragraphs: [
              {
                id: "p1",
                text: "Many people around the world cannot see well or are\nblind. For them, simple tasks like walking to a bus\nstop or reading a menu can be very hard. A new kind\nof smart glasses is now helping these people. The\nglasses talk to the user through a small speaker and\ntell them about the world around them.",
              },
              {
                id: "p2",
                text: "The glasses have a small camera at the front. The\ncamera looks at what is in front of the user, and a\ncomputer program tells them what it sees. For\nexample, it can say \"there is a step in front of\nyou\" or \"the door is on your right.\" The glasses can\nalso read words from books, signs, and screens out\nloud.",
              },
              {
                id: "p3",
                text: "But the glasses are not always perfect. They can\nmake mistakes when it is dark or when things move\nfast. The battery runs out after a few hours, so\nusers need to charge them often. The glasses are\nalso very expensive, and many families cannot afford\nto buy them.",
              },
              {
                id: "p4",
                text: "Many blind people are already using smart glasses\nevery day. Students use them in class to read the\nboard, and workers use them to find their way around\nbuildings. One man said the glasses helped him see\nhis daughter's face for the first time. In the\nfuture, companies hope to make the glasses smaller,\ncheaper, and better so that more people can use\nthem.",
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
            prompt:
              "According to paragraph II, how do the glasses help the user?",
            options: [
              "They take photos and save them.",
              "They tell the user what the camera sees.",
              "They connect the user to a phone.",
              "They help the user walk faster.",
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
    id: "c-exam-3",
    module: "c",
    uuid: "c-t-7192",
    kind: "assorted",
    options: { passThreshold: 0.6, durationMinutes: 90, warnAtMinutes: 10 },
    parts: [
      {
        id: "reading",
        instructionsHe: "קראו את הקטע וענו על השאלות שאחריו.",
        points: 70,
        screens: [
          {
            type: "passage",
            title:
              "{a:center}**Unusual Friendships Between Different Animals**",
            paragraphs: [
              {
                id: "p1",
                text: "Most animals spend their time with others of the\nsame kind. They eat together, play together, and\nprotect each other. But sometimes, two very\ndifferent animals become close friends. These\nunusual friendships surprise people because the\nanimals are so different. Some of the most famous\nexamples are between animals that would normally\nnever be near each other.",
              },
              {
                id: "p2",
                text: "One well-known friendship is between a dog and a\ndeer. The two animals met when they were both very\nyoung. They began to play together every day, and\nsoon they became best friends. They sleep next to\neach other and do not like to be apart. Another\nfamous example is a lion and a goat that lived\ntogether in a zoo. At first, the goat was put in the\nlion's home as food. But the lion did not eat the\ngoat. Instead, the two animals became friends.",
              },
              {
                id: "p3",
                text: "Scientists say these friendships happen for\ndifferent reasons. Sometimes, a young animal loses\nits mother and looks for love from another animal.\nOther times, two animals grow up together and get\nused to each other. Scientists also say that many\nanimals feel lonely, just like people do. When they\nfind a friend, even one that looks very different,\nthey are happy to keep that friendship.",
              },
              {
                id: "p4",
                text: "These unusual friendships teach us something\nimportant. They show us that being friends does not\nmean you have to be the same. Animals can be close\nto others who look different and live in different\nways. Many people who see these friendships say they\nfeel happy and full of hope. Some animal shelters\nnow put different kinds of animals together to help\nlonely animals find a friend.",
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
  {
    id: "c-exam-4",
    module: "c",
    uuid: "c-t-3058",
    kind: "assorted",
    options: { passThreshold: 0.6, durationMinutes: 90, warnAtMinutes: 10 },
    parts: [
      {
        id: "reading",
        instructionsHe: "קראו את הקטע וענו על השאלות שאחריו.",
        points: 70,
        screens: [
          {
            type: "passage",
            title: "{a:center}**How Sitting Too Much Affects Us**",
            paragraphs: [
              {
                id: "p1",
                text: "Most of us spend many hours a day sitting down. We\nsit in many different places, such as in cars and\nbuses, and in front of computers and TV screens.\nSpending most of the day in a chair without moving\nmuch is called a \"sitting lifestyle.\" For many\npeople, sitting feels comfortable and relaxing.\nHowever, according to research, too much sitting can\nbe very bad for us.",
              },
              {
                id: "p2",
                text: "When we sit for many hours, our bodies don't move\nenough. As a result, we burn fewer calories, and we\ncan easily put on weight. Sitting for a long time\ncan also cause pain in our backs and necks, and this\nmakes it difficult to work or study. In addition,\npeople who don't move much often feel tired and\nweak. Doctors now know that people who are not\nactive for many years can develop serious health\nproblems, such as diabetes.",
              },
              {
                id: "p3",
                text: "Sitting too much can also affect the way we feel.\nWhen we sit alone in front of a screen for hours, we\noften become bored or sad. Young people today spend\na lot of their free time playing computer games\ninstead of playing sports outside, and this can make\nthem feel lonely. Some adults also feel this way\nbecause they sit at a desk all day at work. Of\ncourse, people who feel lonely and sad often don't\nwant to meet others. This too can have a negative\neffect on relationships.",
              },
              {
                id: "p4",
                text: "Despite all these problems, most people continue to\nsit for many hours every day. \"That's because most\npeople don't realize how harmful sitting is. But\nthis can change,\" says Dr. Sarah Collins, head of\nthe organization Get Up and Move. \"Just think about\nseat belts. For many years, people didn't wear seat\nbelts in their cars. But when we understood how many\nlives they save, most of us started using them. In\naddition, governments made laws that require\neveryone in a car to wear a seat belt. Today,\nschools and workplaces can also help by giving\npeople short breaks to stand up and walk around. We\nneed people to understand the dangers of sitting too\nmuch. That will make everyone healthier.\"",
              },
            ],
          },
          {
            type: "mcq",
            paragraphRef: "I",
            prompt: 'What do we learn about a "sitting lifestyle" in paragraph I?',
            options: [
              "How to change it.",
              "What it is.",
              "Who is doing research on it.",
              "What serious health problems it causes.",
            ],
            correctIndex: 1,
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "I",
            prompt: "Where do people sit, according to paragraph I?",
            modelAnswer: "In cars and buses, and in front of computers and TV screens.",
            points: 8,
          },
          {
            type: "writing-task",
            paragraphRef: "II",
            prompt:
              "What problems can be caused by sitting for many hours? Give TWO answers from paragraph II. (1)",
            modelAnswer:
              "Any one of: we burn fewer calories / we can easily put on weight; pain in our backs and necks; we feel tired and weak.",
            points: 7,
          },
          {
            type: "writing-task",
            paragraphRef: "II",
            prompt:
              "What problems can be caused by sitting for many hours? Give TWO answers from paragraph II. (2)",
            modelAnswer:
              "A different one of: we burn fewer calories / we can easily put on weight; pain in our backs and necks; we feel tired and weak.",
            points: 7,
          },
          {
            type: "sentence-completion",
            paragraphRef: "II",
            before:
              "What might happen to people who are not active for many years? They might develop",
            after: ".",
            modelAnswers: [
              "serious health problems, such as diabetes",
              "serious health problems such as diabetes",
              "serious health problems like diabetes",
              "serious health problems",
              "health problems such as diabetes",
              "diabetes",
            ],
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "III",
            prompt: "What do we learn from paragraph III?",
            options: [
              "Why most young people play computer games.",
              "Why adults have to sit at a desk at work.",
              "How sitting too much can affect the way we feel.",
              "How to make computer games less boring.",
            ],
            correctIndex: 2,
            points: 8,
          },
          {
            type: "sentence-completion",
            paragraphRef: "III",
            before:
              "Why can feeling lonely and sad have a negative effect on relationships? Because",
            after: ".",
            modelAnswers: [
              "people who feel lonely and sad often don't want to meet others",
              "people who feel lonely and sad don't want to meet others",
              "lonely and sad people often don't want to meet others",
              "they often don't want to meet others",
              "they don't want to meet others",
              "they don't want to meet other people",
            ],
            points: 8,
          },
          {
            type: "mcq",
            paragraphRef: "IV",
            prompt:
              "What does Dr. Sarah Collins explain? Put a √ by the TWO correct answers.",
            options: [
              "How governments make laws.",
              "Why seat belts save lives.",
              "Why most people continue to sit for many hours.",
              "When people learned about the dangers of sitting.",
              "What can help people sit less.",
              "Why people must wear seat belts.",
            ],
            correctIndices: [2, 4],
            points: 16,
          },
        ],
      },
      {
        id: "writing",
        instructionsHe: "כתבו תשובה מלאה לשאלה הבאה.",
        points: 30,
        screens: [
          {
            type: "writing-task",
            prompt:
              "Do you think that all high school pupils should do volunteer work? Give reasons to explain your opinion.",
            minWords: 70,
            maxWords: 90,
            points: 30,
          },
        ],
      },
    ],
  },
];
