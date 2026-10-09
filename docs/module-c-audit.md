# Module C audit

Living doc: update the snapshot, grades and lists whenever Module C content changes.
Snapshot: 2026-10-09. Chain order: n-5cd02dfa (intro) -> Part A vocabulary (c-2) -> Part B reading (c-1) -> Part C writing (c-3).

Grades are 1-10 per node. `~` = judged from structure and a skim of sibling lessons in the same template, not a full read of the exercises, so the grade is less certain. n-649ed18f and n-7c5330b8 were filled on 2026-09-19 and have not been played yet.

**Overall: about 7.5/10** (Part A 7, Part B 7.5, Part C 8).

## Part A: vocabulary (c-2)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| n-5cd02dfa (intro) | Doesn't know why words matter or where answers sit | Notice that answers sit next to anchor words | 7 | "80 words" claim (about 47 cards); flipped punctuation on 2 screens |
| q-words-1 | Lost points from misreading an instruction (wrong paragraph, ONE vs TWO) | Decode instruction phrases into "where to look" and "how many" | 8 | "Give TWO" returns in l12 |
| q-words-2 | Rewriting instead of completing; misreading circle / explain | Decode task verbs and the connectors because / in order to | 7 | Overlaps l11 |
| nav-words-1 | Missing the text's turns and direction | Recognize contrast, addition and result signals | 7 | however returns in l08 |
| nav-words-2 | Not telling an example from a finding or a direction | Read example, finding and increase/decrease signals | 7 | Same template |
| content-1a | Unknown topic words cause panic and skipped context | Recall people/community words in context | 8 (prototype, unplayed) | Preface prototype (2 screens: real passage + self-check of the 5 words, then a short node-specific plan; the same passage returns in round 3). The shared dictionary-vs-clock / minimum screen lives once in the section intro n-5cd02dfa, so the 7 vocab nodes don't repeat it. Reworked 2026-09-19 into 5 rounds (rounds 1-3 required via `requiredRounds: 3`, about 2-3 min each: 2 + 2 + 1 words, each with card, question, sentence pick, spell; round 4-5 optional: use in sentences, exam-level passage + writing), with hooks, match-pairs and retry of misses. Play it, then copy the pattern to the other five |
| content-2a ~ | Same | Recall growth/learning words | 6.5 | Template |
| content-2b ~ | Same | Recall impact/value words | 6.5 | Template |
| content-1c ~ | Same | Recall change/environment words | 6.5 | Template |
| content-2c | Same | Recall responsibility/society/health words | 6.5 | Round 2 has 0 scored questions |
| content-1b ~ | Same | Recall research/findings words | 6.5 | Requires content-2c, numbering out of order |
| vocab-test | No check that the words stuck | Retrieve words across all three groups | 6.5 | One question per concept; gates l00 |

**2026-09-19 rework (all Part A nodes, unplayed):** every vocab node now follows the content-1a pattern.
- **Preface:** a real passage or question block with the node's words in bold plus a self-check, then a short node-specific plan. The shared "dictionary vs clock / the minimum" screen lives once in the intro n-5cd02dfa, which was rewritten (no exercises, encouraging rhetorical questions, "about 50 words" instead of the wrong "80").
- **Rounds:** words are taught 2 at a time (card with example and memory hook, meaning question, sentence step, copy-spelling), then match-pairs of everything seen. The last required round adds the tool summary, the opening passage again, and a word-decoding question. `requiredRounds` = number of teaching rounds (2 or 3); then a review round and an exam-level round (both optional).
- **Rule:** a word is never an answer or a decoy before its card.
- **vocab-test:** five short rounds (9-10 items each, plus one written sentence at the end), every round mixes question, navigation and content words and gets harder round by round (clear distractors, then close ones, then confusable pairs like affect/effect), one fresh in-context item per word, missed items replayed; all five required. Rounds no longer map to a word group, so a failed round cannot name its group.
- **Still open:** the coverage audit (are these words really the minimum Module C needs?), playing every node, and timing the rounds. ~~The vocab gate stays: vocab-test gates l00 on purpose.~~ *(2026-09-28: gate removed, see "Section 1 purpose".)*

Original note: the six content-word lessons are not prerequisites for the reading method, yet they gate it through vocab-test (kept on purpose, see "Section 1 purpose").

## Part B: reading (c-1)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| l00 | Reading everything (or nothing) and running out of time | Search with the question's keyword instead of reading | 8 | None big |
| l01 | Reading blind and getting lost | Build a map from title + paragraph 1 (topic, problem, direction) | 8 | Rebuilt 2026-10-03 to the question pattern (3 required rounds, new text THE COMEBACK OF BOARD GAMES). Never reused after l03. Unplayed |
| l02 | Answering a question you don't understand | Rate the question (traffic light); decode an unknown word in 30 seconds | 8 | Rebuilt 2026-10-03 to the question pattern (3 required rounds, new text SLEEPING IN SPACE). Earlier: colour-guess MCQs had the paraphrase inside the correct option; 3 replaced with `self-check`. Unplayed |
| l03 | No fixed way to find an answer | P1: question -> keyword -> locate -> read that sentence -> answer | 8.5 | Rebuilt 2026-10-03 to the question pattern (3 required rounds, new text BEES IN THE CITY with one paraphrased keyword); the race is the first optional round. Unplayed |
| l04 | Slow search on number/name questions | Use numbers and names as anchors to jump to a paragraph | 7 | Rebuilt 2026-10-03 to the marking pattern (5 required rounds, rules MCQs, 209-word long text); numbers marked as the number token only, everywhere. Unplayed |
| numbers-names-q | Applying anchors in real questions | Pick the number/name keyword, find the paragraph, answer | 7.5 | Rebuilt 2026-10-03: 10 rounds -> 5 (3 required), new text SCHOOLS ON THE WATER, no true/false rounds. Unplayed |
| l06 | Answering the opposite on NOT questions | Spot negation words and flip the task | 6.5 | Same drill template |
| not-q | Applying the flip in real questions | Eliminate the 3 true options to find the 1 false | 6.5 | Typo; repeated card |
| l07 | Listing many answers when THE MOST / THE ONLY wants one | Spot limiter words and give one specific answer | 7 | Rebuilt 2026-10-03 to the marking pattern (5 required rounds, rules MCQs, 222-word long text). Unplayed |
| limiters-q | Applying limiters in real questions | Choose the single best-fit answer; tell the most (one) from most (majority) | 7.5 | Rebuilt 2026-10-03 to the question pattern (3 required rounds, new text THE TOOL LIBRARY, no true/false rounds). Unplayed |
| n-221188d1 | Not knowing which tool a question needs | Pick the tool, then chain the full method | 8 | however/but missing from it |
| l08 | Answering the wrong half of a "however" sentence | Mark contrast words; the point comes after them | 6.5 | After the summary, no framing |
| n-b46b7e2b | Applying contrast in exam questions | Read what follows however/but as the answer | 6 | One-line teaching screen |
| l09 | Picking a plausible but wrong option | Multiple choice: read all 4, cross out, find proof in the right paragraph | 8 | Rebuilt 2026-10-03 to the question pattern (3 required rounds, every exam question has type A/B distractors, new text THE NO-HOMEWORK EXPERIMENT). Unplayed |
| l10 | Writing three opinions instead of one text answer | One answer from the text; question word -> signal (why -> because) | 8 | Rebuilt 2026-10-03 to the question pattern (3 required rounds); exam round is typed short answers (`passage-quiz`, keyword-checked) on the volunteering text + new text THE TOWN THAT SWITCHED OFF ITS LIGHTS. Unplayed |
| l11 | Rewriting, or completing with the wrong kind of answer | Continue the sentence; because = reason, in order to = purpose | 7.5 | Rebuilt 2026-10-03 to the question pattern (3 required rounds); exam round is typed completions (`passage-quiz`) on REDONDA ISLAND + new text A ZOO WITHOUT CAGES. Overlaps q-words-2. Unplayed |
| l12 | Losing half the points with one answer | Find two answers using addition signals and number them | 8 | Rebuilt 2026-10-03 to the question pattern (3 required rounds); exam round is typed answers where a TWO question needs both answers, on Green Africa + new text THE SCHOOL THAT GROWS ITS OWN LUNCH. Overlaps q-words-1. Unplayed |
| n-649ed18f | Switching question types under time pressure | Apply the four formats quickly | 7.5 | New, unplayed |
| n-7c5330b8 | Not combining everything | Run the full method against a clock | 7.5 | New, unplayed |

## Part C: writing (c-3)

| Node | Solves | Micro-skill | Grade | Main issue |
|---|---|---|---|---|
| yes-no | Describing instead of answering | Write a stance sentence ("I think / I do not think") | 8 | None big |
| because | Vague reasons | Connect the stance to a concrete reason with because | 7.5 | Thin practice; no link to reading |
| in-addition | Repeating the same reason | Add a second, different reason | 7.5 | Thin practice |
| for-example | Claims with no detail | Add a specific example | 7.5 | Thin practice |
| in-conclusion | No ending, or new ideas in it | Close with one sentence restating the stance | 7.5 | Thin practice |
| subject-verb | Language Use points lost to fragments | Check every sentence for subject + verb | 7.5 | None big |
| word-count | Penalties for too short or too long | Count and adjust to 70-90 words | 6.5 | Penalty numbers unverified |
| topic-volunteer | Not answering the question type | Build a full paragraph for a "Do you think" question | 8.5 | None big |
| topic-vacation | Listing options instead of choosing | Choose one and defend it ("What do you think") | 8 | One task per round |
| topic-school | Describing problems instead of proposing | Make a specific proposal with a reason ("What changes") | 8 | One task per round |
| topic-cellphone | "It depends" answers | Pick one specific age and justify it ("At what age") | 8 | One task per round |

## Fixed on 2026-10-09 (one marking screen)

- **mark-word merged into mark-all:** the two types did the same job with different looks (mark-word showed big word chips, mark-all shows flowing text). All 27 mark-word screens (21 in c-2, 6 in c-3) are now `mark-all` with one target in `correctIndices` and no `categories`, so no legend chips. The `mark-word` type, component, editor picker and scorer case are gone. A mark-all with exactly one target is strict (no stray tap); with more targets the old rule stays (70% found, at most 1 stray tap). The badge now reads "תרגיל: סימון בטקסט" instead of the eye-magnets wording.
- **yes-no round 3:** the 5 writing tasks say "only YES or NO, no reason" but their word banks offered because / in addition / for example / in conclusion. Removed those; added "should not" for NO answers. Checked every other c-3 writing task: the rest ask for the connectors they list.
- **yes-no round 3 accepted answers:** the 5 writing tasks now carry `acceptedAnswers` (opener x should / should not x fixed subject, 21 sentences each) and are checked against them instead of word bank + lint. Bank of task 1 was missing "I do not think".
- **Editor settings (SlideStage):** the writing-task settings were spread over four places and a sticky block covered the rest when scrolling. Now plain stacked `SettingsGroup`s: pass conditions (lesson) or word range (exam), word bank, accepted answers, general.

## Fixed on 2026-10-08 (flow arrows)

- **Inverted arrows:** browsers never mirror `→` / `←`, so 57 of 176 arrows pointed backwards (checked by rendering every line through `mdBlock` / `mdInline` in headless Chrome). Rule: `←` in a line that renders RTL (first or last letter Hebrew), `→` in an English line or between two English words. Fixed in l00, l02, l03, l06, l07, l10, l11, nav-words-1, nav-words-2, content-1b, content-2c, yes-no, topic-vacation, topic-cellphone.
- **l10 question-word MCQ:** options rewritten in English (`Why? → because · When? → a year ...`) so each pair reads left to right; the summary line now says it in Hebrew without arrows.
- **nav-words-1:** the 3 navigation-word lines ran together on one line; now one line each.
- **content-1b:** the 5 word -> meaning lines mixed LTR and RTL; now all RTL.

## Fixed on 2026-10-06 (UX audit, branch ux-fixes)

- **n-5cd02dfa (intro) title:** "module c - פתיחה" -> "פתיחה - Module C".
- **n-5cd02dfa (intro) text:** missing space in "מההתחלה. מתקדמים"; "לבחינ" -> "לבחינה".

## Fixed on 2026-10-06 (RTL/LTR + text formatting audit)

- **Direction:** `textDir` (miniMarkdown.ts): a line / sentence / quote is RTL when its first or last letter is Hebrew, or it is mostly Hebrew (about 150 lines such as "however = פנייה..." or "השאלה: What do we learn...?" rendered the wrong way). MCQ options, explanations (mcq, cloze-pick) and self-check model answers use it too.
- **Missing passage titles:** 13 full-size texts (100+ words) had no title: swim (LEARNING TO SWIM AS AN ADULT), forests (THE GREEN AFRICA PROJECT), volunteers (WHY YOUNG PEOPLE VOLUNTEER), n-221188d1 (RECYCLING IN RIVERTOWN, A LIBRARY BACK TO LIFE). Shorter untitled texts are excerpts and stay untitled.
- **Paragraph markers:** `**I**` / `**II**` in c-2 (q-words-2, nav-words-2, content-1b, 1c, 2b) rendered as literal bold text instead of the gutter marker; now `I  `.
- **Missing instruction:** 6 c-3 `mark-word` screens had their instruction on a separate preface page; moved into `prompt`.

## Fixed on 2026-10-03 (QC report 2.3, bad points 2, 6, 7)

- **Progressive overload (marking lessons l04, l06, l07, l08):** 4 required rounds instead of 5. Old rounds 3 and 4 were the same difficulty and round 4 was wrongly called exam level; now round 3 = paragraphs + look-alikes, round 4 = the only exam-level round (exam-size text, hunt by question, stopwatch), round 5 = optional timed full sweep. Each -q lesson's exam round reuses its marking lesson's long text. l07's long text is new (BIKES FOR EVERYONE) because THE FOUR-DAY WEEK duplicated l08's topic. Middle-section new texts extended to ~175-205 words.
- **Question mistakes (2):** n-b46b7e2b round 3 now asks about the *unhappy* shop owners; practice exam 1 Q2 no longer gives away Q3; sentence completion ignores punctuation and and/or/the/a (shared `isSentenceCompletionMatch`), so "books, signs, screens" passes; yes-no mark-word says "opinion", not "agreement"; in-addition round 1 Q2 rewritten so only "In addition" fits.
- **Run-together writing lines (6):** yes-no, topic-vacation and topic-cellphone openings split into lines; em-dashes removed there; in-addition "סיבה 1 / סיבה 2" split.
- **Reading rollout (7), answer-type lessons l09-l12:** question pattern; exam rounds of l10-l12 are typed answers (`passage-quiz`, keyword-checked), which also starts on bad point 8 (written answers never checked). Point 7 is done: every reading lesson now follows the round pattern.
- **Reading rollout (7), method lessons l01-l03:** question pattern, true/false rounds removed; l03's bold `**I **` markers fixed, and run-together preface lines fixed in l02 and l03.
- **Reading rollout (7), pair 2 of 5 - numbers/names:** l04 and numbers-names-q follow the reading round pattern.
- **Dropped: QC 2.3 point 9 (vocab skip check).** Vocabulary is optional - students can go straight to reading - so a skip check adds nothing.
- **Reading rollout (7), pair 1 of 5 - most/only:** l07 and limiters-q follow the reading round pattern. The rule now separates "the most / the only / the main" (one answer) from "most + noun" (majority), which also closes bad point 3 for limiters-q.

## Fixed on 2026-09-28

The 11 wrong or ambiguous items from `QC_report/module-c-report.md` P1:
- **q-words-2:** mark-word key is now `because`.
- **content-1c:** the storm, frog and forests items, and the 5 closing MCQs, each have one defensible answer. The closing MCQs now have explanations.
- **l02:** the dictionary option is labelled 🟡.
- **l08:** *but* is now scored as a contrast word. The preface question asks what experts say.
- **l10:** WATCH IT uses a non-circular "why" example.
- **n-b46b7e2b:** swim item asks what experts say.
- **limiters-q:** the second question teaches that quantifier *most* does not limit the answer.
- **numbers-names-q:** "Give TWO" is no longer keyed as a number anchor.

P6 prototype on the NOT pair (same day, to review before rolling out):
- **not-q:** deleted the 🌱 true/false round. Added a required exam-level round on a new text ("PHONES IN THE LOCKER"): two NOT questions and one normal question, so students don't flip by reflex. `requiredRounds: 4` means teach, worked example, your turn, then the new text. The old 🌟/💎 rounds stay as optional extra practice.
- ~~**l06:** the English marking round ends with one real NOT question on a fresh text (a bridge). `requiredRounds: 2`.~~ Superseded after owner review, below.

Owner review of the prototype (same day):
- **Rule:** rounds are optional only after the round with exam-level questions. Everything up to and including that round is required.
- **l06 stays about marking.**
  - Two rules questions from not-q (NOT reverses the question; missing NOT = choosing a true sentence) are now mixed into its English rounds.
  - Its exam-level round (the last one) ends with a 240-word text, about 3/4 of exam length, for marking NOT words.
  - `requiredRounds: 4`, all rounds.
- **not-q:**
  - The bridge text and its NOT question moved here, to the end of round 1.
  - Round 2 (swim passage) got 2 more NOT questions at the same level.
  - Still `requiredRounds: 4`.

P6 rollout, pair 1: l08 + n-b46b7e2b (however / but), same day. Follows the reading round pattern in lesson-structure.md.
- **l08:**
  - A rules question mixed into round 2 (the writer's point).
  - A rules question in round 3 where the answer comes *before* but.
  - A new round 5 with a 238-word marking text (four-day school week, 10 contrast words).
  - `requiredRounds: 5`.
- **n-b46b7e2b:**
  - Round 1: rules questions, then a short new text (a museum trip) with one question.
  - Round 2: your turn (Green Africa).
  - Round 3: exam level.
    - The familiar swim passage with 4 questions, one answered before however.
    - A new text, THE NIGHT MARKET, with 3 questions: one after however, one number question, one answered before *but*.
  - Rounds 4-5 optional. The 🌱 round is deleted. `requiredRounds: 3`.
- **P2 fixed for however:** the rule line in both summaries now reads "however marks the writer's point, but answer what the question asks: sometimes the answer comes before it".

P8 and P9, same day:
- **P8, vocab gate:** reading stays open (no gate). l00's opening now says "if you already did the vocabulary, well done; if not, come back to it any time".
- **P9, typos and characters:** fixed איך איך, הטקטסט / טקטס and תמי. Removed stray ֿ characters and repaired broken bold markers.
- **P9, run-together lines:** restored the line breaks the editor had removed in l02 (traffic light), l03 (keyword and "now it's simple" screens) and the l07 opening. Also the q-words-1 opening, where "Give ONE answer" now sits on question 2, as intended.
- **P9, broken l03 exercise:** the round 5 self-check asked about Dr. Klein on a Dr. Diallo paragraph, showed the answer in the prompt, and had the model answer "1". It's rewritten.
- **P9, counts:** drill intros no longer promise "ten sentences / seven paragraphs / four texts". Section intros now give the real lesson counts (Part A: 10 lessons and a test; Part B: 18 lessons and a test).
- **P9, dashes:** em-dashes replaced with "-" throughout c-1, c-2 and sectionMeta.

P5, spelling from memory (same day):
- **New screens:** 48 listen-mode `spell-word` screens (spelling by ear). Every vocab node's review round gets one per single word. vocab-test gets 2 per round, 10 in total, and because vocab-test is required, every student does them.
- **Copy mode:** the screens right after each card are unchanged.
- **Hebrew hint:** listen now has an optional `hintHe` (the word's meaning, shown under the play buttons).
- **Fallback and auto-play:** where the browser can't speak, the screen falls back to copy mode. The word plays once when the screen opens.
- **affect is left out of dictation:** it sounds the same as effect.

P3, easy distractors (same day):
- **Nodes changed:** about 35 items in nav-words-2, content-1a, 1b, 1c, 2a, 2b and vocab-test. There are no more holiday / bicycle / window / shoes / paint / sing / cook / ate options.
- **New distractors:** word forms (improve / improvement, result / results, cause / causes), same-node words that were already carded, and opposites.
- **Explanations:** every changed item now says why each wrong option fails.
- **Other fixes made while there:** a helmet item where *cover* also fit, a reduce item where *turn off* also fit, and passage questions in content-2a and q-words-2 that had joke options.

## Fixed on 2026-09-19

- n-649ed18f and n-7c5330b8 were empty placeholders that kept Part C locked; both now have timed content.
- The speed claim was never tested; l03 now has a timed race (read everything vs. P1).
- No capstone; the two nodes above are now timed capstones, and n-221188d1 has a full-method round.

## Still open

- Rework the opener of not-q (typo, repeated card).
- Bridge line at the top of lessons that revisit earlier material (Give TWO, however/but, because).
- Link reading and writing: one screen in each Part C connector lesson.
- l08: open with "question-side tools" vs. "text-side signals"; give n-b46b7e2b a real teaching screen.
- Writing feedback is structural only (sentence count, capitalization, word bank); it cannot judge quality.
- A single stopwatch across mixed formats (typed answers) needs a runner-level timer.
- Read the `~` nodes in full and firm up their grades.

## Path to 10

A 10 = every node has distinct content (no template placeholders), at least 2 practice items per concept, its claims verified, a later retrieval, and has been played end to end. Ordered by points gained per effort. Vocab nodes are not limited to 4 question types: use any scored screen type that fits (see "Vocab question types" below).

### 1. Replace placeholder/template content (biggest lift)

The 6.5s are almost all templates: the six content-word lessons, l04/l06/l07 drills, vocab-test. Each needs its own texts, distractors and wording. Start with numbers-names-q (5.5), the lowest node.

**Example A: content-1a (people & community).** What is there now: 5 words, each drilled as an `mcq` whose prompt already contains the Hebrew answer ("The ______ is under threat. - סביבה"), so the student matches a translation instead of recalling the word from context. Practice round 1 repeats the same 5 words in the same format. The preface opens with the panic word "environmentalists", but the lesson never teaches it (only "environment" is a card), so the hook is not paid off.

What a 10 looks like, using different screens for different skills:

| Step | Screen | Example |
|---|---|---|
| See | `word-card` x5 | as now, plus a note on **environmentalist**: "environment + -ist = a person who cares about it" |
| Recall in context, no Hebrew hint | `mcq` honeycomb | "Young ______ give their time to help others." volunteers / residents / charities / communities |
| Hear and spell | `spell-word` (listen) | plays "volunteer", student types it |
| Closed choice inside a sentence | `cloze-pick` | "A local ___ raised money for the school": charity / community |
| Find it in text | `mark-all` (one target) | "Which word means תושבים?" in "Most residents said the change was remarkable." |
| Colour-coded scan | `mark-all` with `categories` | people words in one colour, place/idea words in another |
| Exam-like use | `passage-mcq` | 3 sentences, question "Who said the change was remarkable?" -> residents |

Distractors should be real exam traps, not random words: word-family look-alikes (volunteer / voluntary), singular vs plural (community / communities), and a word from the same group that fits grammatically but not in meaning.

**Example B: numbers-names-q.** There is a mismatch: the preface teaches **names** ("THE TOOL - שם בשאלה"), but round 0 and most of round 1 practise **numbers** (gardens, stress, trees). Also a typo ("איך איך") and a repeated card. Fix: round 0 = 2 name questions on the Greenville text with a built-in trap, since both "Dr. Santos" and "Professor Lee" appear:
- "According to Dr. Santos, how much did the project cost?" -> 500,000 dollars (distractor: 85%, which is Professor Lee's survey)
- "According to Professor Lee's survey, how many residents are satisfied?" -> 85% (distractor: 500,000)

Then split the current 10 rounds into two 5-round sets (names first, numbers after), each set with a different text.

**Example C: l06 / not-q (negation).** Now: the same drill template as l04, and not-q has a repeated card and a typo. Instead give 3 different mini-texts, each with a different negation type: "never" (Students never...), "not only ... but also", "no longer / without". The task changes per text: text 1, mark the negation; text 2, flip the question ("Which is NOT true?") and cross out the 3 true options; text 3, write which sentence proves the false option is false.

**Example D: vocab-test.** Now: one question per concept, and it gates l00. Better: 2 items per word (recognition Hebrew -> English, then in-context `cloze-pick`), about 20 items across the three groups, with a delayed item (a word from content-1a asked again in the context of content-2c). Below 80% the test names the weak group ("חזרו על: מחקר וממצאים") instead of only failing.

### 2. Fix gating and order

Content-word lessons don't teach the reading method but gate it via vocab-test. Either unlock l00 without them (vocab as a parallel track) or make vocab-test check only what l00-l03 need. Renumber content-1b / content-2c (content-1b requires content-2c today).

### 3. Spiral, don't repeat

Give the repeats (Give TWO, however/but, because) a bridge line, and make them apply the earlier skill instead of re-teaching it. Example at the top of l12: "ב-q-words-1 למדת ש-TWO אומר שתי תשובות. עכשיו נמצא אותן בטקסט." Reuse the l01 map (topic / problem / direction) in later lessons: "before answering, say the direction of the text in three words."

### 4. Connect reading and writing

One screen per Part C connector lesson that reuses a reading passage. Example in `because`: show the Greenville text, then the prompt "Do you think the project was worth 500,000 dollars? Start with *I think*, then use *because* and a fact from paragraph III (85% satisfied, stress down 40%)." Then thicken because / in-addition / for-example / in-conclusion to 2+ rounds each.

### 5. Fix facts

"80 words" (about 47 cards), word-count penalty numbers, flipped punctuation, typos. Cheap check: search all content files for repeated words ("איך איך"), duplicated prompt strings across nodes, and numbers quoted in teaching text.

### 6. Verify with play

Without this, 8+ grades stay opinion. Three layers, cheapest first.

**a) Play the two new capstones (n-649ed18f, n-7c5330b8) yourself.** Checklist:
- The stopwatch starts on the first screen and stops on the last, not on a mid-round retry.
- The time-comparison in l03 shows a sensible message when both times are equal (`tieMessage`), and never claims "P1 is faster" when the data says otherwise.
- 80% pass: with 5 scored questions, 4 correct passes and 3 does not; the retry must not carry the old timer.
- Typed answers in `passage-quiz`: does "2,000" vs "2000" break the keyword match? Avoid numbers in keywords (see lesson-structure.md).
- Try to fail on purpose (leave every answer blank, tap only extra words in `mark-all`) and confirm the feedback makes sense.

**b) Read the `~` nodes in full (l09-l12, content-2a/2b/1c/1b) and re-grade with a fixed rubric.** Score each node 0-2.5 on four things, so grades stop being impressions:
- *Distinct*: are the prompts, texts and distractors unique to this node? (a repeated card or template = 0)
- *Depth*: 2+ practice items per concept, in more than one screen type?
- *Accurate*: no typos, numbers match the text, every mcq has a single defensible answer and an explanation?
- *Transfer*: does one screen apply the skill to a fresh text or a real exam-style question?

Example: l09 (multiple choice) - distinct 2.5, depth 2, accurate 1.5 (one option is arguably also correct), transfer 2 = 8. Write the four sub-scores in the Main issue column when re-grading.

**c) Run 2-3 real students (one weak, one average, one strong), 20-30 minutes each, one section at a time.** Sit beside them, do not help, and write down:
- Where they hesitate more than about 10 seconds, and where they stop reading the instructions.
- Every wrong answer and *why* they say they chose it (that is where distractor problems show up).
- One transfer question at the end, off the app: "Here is a new question with a number in it - what do you do first?"

Turning observations into changes:

| Observation | Likely cause | Action |
|---|---|---|
| 3 of 3 pick "residents" for "volunteers" | Distractor too close, or Hebrew hint ambiguous | Remove the hint, or replace the distractor |
| All get every item right in 2 seconds | Item tests recognition only | Move to a context or spelling item |
| A student skips the preface | Preface too long or too abstract | Split into two screens; open with a mistake that costs points |
| Student passes the lesson but fails the transfer question | Practice never left the lesson's own text | Add a fresh-text question to round 0 |

Rule of thumb: an item everyone misses is broken or unteachable; an item everyone gets in 2 seconds is too easy; a node where a strong student stops is boring, not hard.

The app stores only rounds done (`lessonProgress`), not per-question results. For 2-3 students, observation is enough. Add per-question logging only if this grows past a handful of students (YAGNI).

### 7. Tooling (last)

**a) Runner-level timer for mixed-format capstones.** Today a stopwatch is per screen (`timerKey` exists on `passage-mcq` and `mark-all` only), so a capstone that mixes `mcq`, typed `passage-quiz`, `cloze-pick` and `mark-all` can't be timed as one race. Design, kept small:

```ts
// types.ts
interface LessonRound { screens: LessonScreen[]; timerKey?: string; limitMs?: number }
```

- If `timerKey` is set, LessonRunner starts the clock when the first screen shows and stops it at finish; `time-result` and `time-comparison` already read from the same per-round bag.
- If `limitMs` is also set, show a shrinking bar; when it hits 0, unanswered screens count as wrong and the runner goes to the finish screen. Without it, it's a pure stopwatch, as in the l03 race.
- No new screen type needed. Only worth building because n-649ed18f and n-7c5330b8 need timing across formats.

**b) Writing feedback that can judge quality.** Today it only checks structure (sentence count, capitalisation, word bank), so this passes: *"I think yes because it is good. In addition it is good. For example it is good. In conclusion it is good."* Ladder from cheap to expensive; stop when the feedback is good enough:
1. **Lint rules, no AI.** Flag vague words (good, nice, fun, bad) in the reason sentence: "הסיבה כללית - מה בדיוק טוב?". Flag the same content word in stance and reason, and a second reason that repeats the first reason's words. Deterministic, offline, free.
2. **Self-check with model answer + rubric ticks.** The `self-check` type exists: student writes, sees a model answer, ticks 3-4 criteria ("יש דוגמה ספציפית", "הסיבה שונה מהראשונה"). Zero cost, teaches self-editing.
3. **Model-graded feedback (Claude API).** Only if 1-2 fail. Needs a backend (no key in the client), costs per submission, adds latency, and needs privacy care for minors' text. Constrain the output to the same 3-4 rubric criteria, not a free-form grade.

Recommendation: do 1 and 2 first; they cover most of the gap at a fraction of the cost.

### Vocab question types

Vocab nodes (Part A) are not limited to 4 question types. They currently lean on `mcq` + `self-check`; use `spell-word`, `cloze-pick`, `mark-all` (with categories), `passage-mcq` and `word-card` wherever they fit, as in Example A above. See docs/lesson-structure.md for what each type scores.

### Section 1 purpose

Part A gives the minimum vocabulary needed to solve Module C; without it students are close to doomed. There is a dictionary in the exam, but the clock runs, so the words must be known. Every vocab preface should say this truthfully (no invented time numbers until measured), and the word list should be checked against the real module texts (coverage audit) so "minimum" is true. ~~That is also why vocab-test gates l00: keep the gate, and make the test check the words that matter.~~ *(Changed 2026-09-28: the gate was removed. Vocabulary runs in parallel with reading. l00 is open from the start and its opening no longer assumes Part A was done. The vocab section stays recommended, and its value is unchanged. Restore with `required: ['vocab-test']` on l00 if the gate is wanted again.)*
