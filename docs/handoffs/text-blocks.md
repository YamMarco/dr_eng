# Handoff: text as blocks (future plan)

Not started. Model: **direction belongs to blocks, styles are spans.**

## Now

- Each line of a text field is a block (`mdBlock`, `miniMarkdown.ts`). Line tokens: `{d:..}`, `{a:..}`, `{p:text|callout|ul|ol}`, `#` headers.
- Direction is guessed per line (`textDir`), then again **per sentence** (`isolateSentences`) and per quote (`isolateQuotes`). An English sentence inside a Hebrew line gets its own direction, so its punctuation jumps to the wrong side (`?When were dogs first tamed`).
- English and Hebrew runs carry their own `lang` (screen readers).
- Teaching text: an English-only sentence line is a reading card automatically; adjacent cards / same-icon callouts merge into one box.
- Editor (`MarkdownInput` + `activeField` + the `SlideStage` toolbar): WYSIWYG on the slide, one shared toolbar (spans: bold, italic, underline, strike, code, link, color; lines: header, align, direction, reading card, tip, divider, lists). While typing, the browser guesses each line's direction (`unicode-bidi: plaintext`), unlike the student renderer.

## Target

- **Block** (one line): type, direction, alignment. Direction set once, explicitly (never `dir="auto"`: it ignores isolated children): `{d:..}` if given, else RTL when the line starts or ends in Hebrew or is mostly Hebrew, otherwise LTR.
- **Spans:** author styling only.
- **Language islands:** each English run (with its own end punctuation) inside a Hebrew block is an LTR isolate with `lang="en"`, and the reverse in an English block. Automatic, never authored.

## Steps

1. **Renderer:** drop `isolateSentences` / `isolateQuotes`; explicit block direction + language islands, everywhere `mdBlock` / `mdInline` render (cards stay teaching text only).
2. **Freeze mixed lines:** a one-time script writes each mixed Hebrew-English line's current direction as `{d:rtl|ltr}` (about 194 lines with full sentences in both languages), so the new rule never flips them. Their look only changes where punctuation was misplaced.
3. **Tests on real lines:** punctuation stays with its run; numbered lines, `→`, numbers, quotes. Then a before/after check on the lessons with the most mixed lines; fix stragglers with `{d:..}`, not new rules.
4. **Editor parity:** render blocks in the editor with the student rule (no browser guessing), so what the author types is what students see.
5. **Block handle:** a chip at the start of the caret's line: type + direction (`א⇐` / `⇒A`), dim when automatic, solid when set; click for type / direction / align. Auto reading cards marked "auto", one click to make plain.
6. **Faster editing:** `/` on an empty line opens the block menu; `- `, `1. `, `# ` shortcuts; a bubble toolbar on text selection (bold, italic, underline, color, link) plus Ctrl+B/I/U. The top toolbar stays.

1-4 fix what students see; 5-6 are authoring comfort.
