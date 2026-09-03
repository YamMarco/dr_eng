# Lesson & content — data model

Scope: Module C's learning path. One-page model for architecture discussion.
Companion: `docs/lesson-structure.md` (how to author it).

## Entities

```
Module ──1:N──> Section ──1:N──> Lesson ──1:N──> Round ──1:N──> Screen ──0:N──> Question
                   │                 │
                   └─0:N─> Track ────┘  (Track = a parallel strand of Lessons)
```

| Entity | Identity | Key fields (authored) | Derived at build |
| --- | --- | --- | --- |
| **Module** | `moduleId` (`"c"`) | — | — |
| **Section** | `id: number` (1..25), map key `c-{id}` | `titleEn`, `titleHe`, `intro?{greeting,goal?}`, `lessons: Lesson[]`, `tracks?: Lesson[][]` | ordering by `id` |
| **Lesson** (= path node) | `id: string`, unique per module, convention `s{section}-l{n}` / `…{a,b,c}` | `titleHe`, `code?` (e.g. `"2a"`), and **either** `screens: Screen[]` **or** `rounds: Screen[][]` | `x`, `y` (canvas px), `prerequisites: string[]`, `big: boolean`, `code` default (= position in section) |
| **Round** | index (0-based) within a Lesson | — (it's just `Screen[]`) | `Round 0` is mandatory-to-progress; `1..n` are optional extra practice |
| **Screen** | index within a Round | discriminated union on `type` (15 variants) | skipped at runtime if "empty" |
| **Question** | index within a Screen | `prompt` + answer spec; shape varies by parent screen type | — |

## Screen taxonomy (the `type` discriminator)

| bucket | types | scored? |
| --- | --- | --- |
| teaching | `preface`, `steps`, `summary`, `word-card`, `question-preview` | no |
| timing/meta | `timed-reading`, `time-result`, `time-comparison` | no |
| exercise (1 pt) | `mcq`, `mark-word`, `mark-all`, `spell-word`, `writing-task` | 1 |
| exercise (n pts) | `timed-passage`, `passage-quiz` | = `questions.length` |

`countQuestions(screen)` gives a Round's fixed score denominator. Pass = ≥80% of a Round's points.

## Relationships & rules

- **Section order** is by `id`. Sections 1/3/4 are hand-authored files; 2 and 5–25 are generated (one vocab-opener Lesson each).
- **`lessons`** within a Section form a linear chain: node *k*'s prerequisite is node *k-1*.
- **`tracks`** are ≥2 parallel strands that begin *after* `lessons`: every strand's first node depends on the last pre-track node; each strand chains internally; the **next Section** depends on **all** strand tails. → the prerequisite graph is a DAG, not a pure list.
- **Unlock**: a Lesson is playable once every id in `prerequisites` has `roundsCompleted ≥ 1`.
- **`code`** is the display string `module.section.lesson` (`c.4.2a`); defaults to 1-based position, set explicitly on track nodes.

## Content sourcing (composition, not new entities)

| source | shape | produces |
| --- | --- | --- |
| `program/texts.ts` | named `string` passages, verbatim, reused across Sections | `text` fields |
| `VocabWord` `{en, he, heWrong[3], cloze, context}` → `vocabRounds(intro, words[])` | — | a 3-Round Lesson: meaning-MCQ / cloze-MCQ / in-context-MCQ |
| phrase list → `markTargets(text, phrases[])` | — | `mark-all.correctIndices` (token positions) |
| `McqItem {prompt, answer, wrong[]}` → `mcqs()` | — | `mcq[]` with the answer slot rotated |

## Runtime state (separate from content)

| store | shape | lifetime |
| --- | --- | --- |
| `lessonProgress` | `Record<moduleId, Record<lessonId, roundsCompleted: number>>` | persisted (localStorage) |
| `LessonScore` | `{ correct: number, total: number }` | per Round (in-memory) |
| `LessonSession` | `Record<timerKey: string, elapsedMs: number>` | per Round (in-memory); written by `timed-*` / `mark-all`, read by `time-result` / `time-comparison` |

## Type sketch

```ts
type SectionContent = { intro?: SectionIntro; lessons: Lesson[] };

type Lesson = {
  id: string;
  titleHe: string;
  code?: string;
  screens?: LessonScreen[];        // single-round shorthand
  rounds?: LessonScreen[][];       // multi-round
  prerequisites?: string[];        // derived
  x?: number; y?: number;          // derived
  big?: boolean;                   // derived (no scored screen)
};

type LessonScreen =               // discriminated union, 15 members, e.g.
  | { type: 'preface'; text: string; dir?: 'rtl' | 'ltr' }
  | { type: 'mcq'; prompt: string; options: string[]; correctIndex: number }
  | { type: 'mark-all'; instruction: string; text: string; correctIndices: number[];
      dir?: 'rtl'|'ltr'; wordBank?: string[]; timerKey?: string }
  | { type: 'timed-passage'; label: string; text: string; timerKey: string;
      questions: { prompt: string; options: string[]; correctIndex: number }[] }
  | { type: 'passage-quiz'; text: string;
      questions: { prompt: string; keywords: string[]; answerHint: string; points?: number }[] }
  | ...;

// Serving layer
getSections(moduleId): Section[]                         // nav metadata
getSectionContent(moduleId, sectionId): SectionContent   // lessons + geometry
```

## Notes for the architect

- Content is **code-as-data** (TS literals), not a DB — no i18n on teaching text; UI chrome only is i18n'd (Hebrew source, Arabic partial-override).
- Geometry and the prerequisite DAG are **fully derived** from declaration order + `tracks`; authors never write coordinates.
- A Lesson with no non-empty screen in any round renders as a permanently-locked node (placeholder).
- `lessonId` is the join key everywhere: prerequisites, progress store, "continue to next lesson".
