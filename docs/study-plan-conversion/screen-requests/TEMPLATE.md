# Screen request - `<type-name>`

Copy this file to `<type-name>.md` and fill it in. One file per requested screen
type. This is a spec for a human or a later implementation pass - do not write
the component yourself.

## Why

What the study plan asks for, and why no existing type in
`docs/lesson-structure.md` covers it. Name the closest existing type and what it
is missing.

## Who needs it

Lessons and rounds that use it, by lesson id.

## Fallback shipped meanwhile

Which existing type the blueprint uses instead, and what is lost.

## Shape

```ts
{
  type: '<type-name>';
  // every field, with a comment on what it holds
}
```

## Behaviour

- what the learner sees
- what the learner does
- what advances the screen

## Scoring

- how many questions it counts for in `countQuestions()`
- what counts as correct; how lenient
- what `isScreenEmpty()` should return false on

## Implementation checklist

Per `docs/lesson-structure.md` "Adding a screen type":

1. shape in `lesson-screens/types.ts` → `LessonScreen` union → `isScreenEmpty()`
   + `countQuestions()` cases
2. component in `lesson-screens/<Name>.svelte`: props
   `{ screen, onAdvance, disabled = $bindable(), label = $bindable() }`, plus
   `export function primaryAction()`
3. register in `lesson-screens/registry.ts`
4. badge string in `i18n/locales/he.ts` under `exerciseKind` - give the Hebrew text here
