# Lesson & content — data model

Scope: Module C's learning path. Companion: `docs/lesson-structure.md` (how to author it).

The model is **flat**: one Lesson = one path node = one self-contained object,
and (later) one Supabase row. No Module/Section/Track/Round entities — grouping is
a string, geometry and prerequisites are plain fields on the node.

## Entities

```
LessonNode ──content──> LessonContent ──preface──> LessonScreen[]   (teaching intro, round 0 only)
                                     └─rounds──> LessonRound ──screens──> LessonScreen ──0:N──> Question
LessonNode ──required[]──> LessonNode        (prerequisite DAG, by id)
LessonNode ──section──> SectionMeta          (grouping only: heading + theme color)
```

| Entity | Identity | Fields |
| --- | --- | --- |
| **LessonNode** | `id: string`, globally unique in the module | `section` (`"c-4"`), `titleHe`, `titleEn?`, `code` (`"c.4.2a"`), `required: string[]`, `position: {x,y}`, `big: boolean`, `image?`, `content` |
| **LessonContent** | — | `preface: LessonScreen[]` (teaching intro, played once before round 0), `rounds: LessonRound[]` (length ≥ 1) |
| **LessonRound** | index in `rounds` | `screens: LessonScreen[]` — practice only. Round 0 is mandatory-to-progress; 1..n are optional extra practice, played without the preface |
| **LessonScreen** | index in `screens` | discriminated union on `type` (15 variants) — unchanged, `lib/lesson-screens/types.ts` |
| **SectionMeta** | `id: string` (`"c-1"`..`"c-25"`) | `titleHe`, `titleEn?`, `intro?{greeting,goal?}` |

Everything is authored directly — nothing is derived at build time anymore.

## Files (`front/src/lib/content/`)

| file | role |
| --- | --- |
| `types.ts` | `LessonNode`, `LessonContent`, `LessonRound`, `SectionMeta`; re-exports `LessonScreen` |
| `c/c-1.ts` … `c/c-25.ts` | one `export const c<N>Lessons: LessonNode[]` per section |
| `sectionMeta.ts` | ordered `SectionMeta[]` — canvas heading text + theme-color order |
| `index.ts` | `allLessons` map, `getLesson(id)`, `getLessonsBySection(section)` |
| `schema.sql` | Supabase `lessons` + `lesson_progress` tables (not wired up) |

Origin: generated once by `front/scripts/snapshot-content.ts` from the old
derivation pipeline, then frozen. Edit the `c/*.ts` files directly from here on.

## Rules

- **Section order / theme color** = position in `sectionMeta`. Headings render above
  the first node of each section.
- **Unlock**: a node is playable once every id in `required` has `roundsCompleted ≥ 1`.
  Empty `required` = a root, open from the start.
- **`code`** is the display string `module.section.lesson` shown on the node label.
- **`big`** = node is drawn larger (no scored screen in any round).
- A node whose every round is empty renders permanently locked (placeholder).
- The prerequisite graph is a DAG (parallel strands that converge), not a list —
  it's just whatever the `required` arrays describe.

## Screen taxonomy (the `type` discriminator)

| bucket | types | scored? |
| --- | --- | --- |
| teaching | `preface`, `steps`, `summary`, `word-card`, `question-preview` | no |
| timing/meta | `timed-reading`, `time-result`, `time-comparison` | no |
| exercise (1 pt) | `mcq`, `mark-word`, `mark-all`, `spell-word`, `writing-task` | 1 |
| exercise (n pts) | `timed-passage`, `passage-quiz` | = `questions.length` |

`countQuestions(screen)` gives a round's fixed score denominator. Pass = ≥80% of a
round's points. `isScreenEmpty(screen)` → skipped at runtime.

## Runtime state (separate from content)

| store | shape | lifetime |
| --- | --- | --- |
| `lessonProgress` (`lessonProgress.svelte.ts`) | `Record<moduleId, Record<lessonId, roundsCompleted>>` | localStorage |
| `LessonScore` | `{ correct, total }` | per round (in-memory) |
| `LessonSession` | `Record<timerKey, elapsedMs>` | per round (in-memory); written by `timed-*` / `mark-all`, read by `time-result` / `time-comparison` |

## Serving layer

```ts
import { sectionMeta, getLessonsBySection, getLesson, allLessons } from '$lib/content';
```

The canvas page (`routes/unit/[unitId]/module/[moduleId]/lessons/+page.svelte`)
iterates `sectionMeta` for order/theme/heading, then `getLessonsBySection(id)` for
the nodes; each node carries its own `position`, `required`, `code`, `big`.
The screen list for a round feeds one `LessonRunner`: round 0 =
`[...lesson.content.preface, ...rounds[0].screens]`, round i>0 = `rounds[i].screens`.

## Notes

- Content is **code-as-data** (TS literals). Teaching text is not i18n'd; only UI
  chrome is (Hebrew source, Arabic partial-override).
- `lessonId` is the join key everywhere: `required`, progress store, "continue to
  next lesson".
- Supabase migration = copy each `LessonNode` field into a `lessons` row, `content`
  as JSONB; `required` / `position` as JSONB.
