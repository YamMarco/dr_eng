# Module C review: teacher and student

Snapshot: 2026-09-27 (commit 3fe642f). **Scope: Part A (vocabulary, c-2) and Part B (reading, c-1).** Part C (writing, c-3) is left out for now.
All content in `front/src/lib/content/c/c-1.ts` and `c-2.ts` was read screen by screen from a text dump. Nothing was played in a browser. The findings are about content, and the source was checked for every bug listed below.
Companion: `docs/module-c-audit.md` gives per-node grades. This doc gives a verdict from two readers.

| Part | Nodes | Rounds | Screens | Main screen types |
|---|---|---|---|---|
| A vocabulary (c-2) | 12 | 54 | 431 | mcq 148, word-card 47, spell-word 47 (all `copy`), match-pairs 28, cloze-pick 23, passage-mcq 20 |
| B reading (c-1) | 19 | 88 | 404 | preface 135, mcq 87, mark-all 53, self-check 47, passage-mcq 37 |

## Bottom line

| | Teacher | Student |
|---|---|---|
| Part A vocabulary | 6 | 6 |
| Part B reading | 7 | 7.5 |
| **A + B overall** | **6.5** | **7** |

**Combined: 6.5/10.** The reading method is good and fits the exam: map, traffic light, P1 keyword search, anchors, question formats. What pulls the grade down is quality control, not the design: close to 20 wrong or ambiguous items, easy distractors across most of Part A, and a few heuristics taught more broadly than the exam supports. The audit's 7-7.5 for these parts was too generous, mainly for Part A.

---

## Voice 1: the English teacher

*Reviewer: a high-school English teacher who has prepared 4-point classes for Module C for years.*

### What I would keep

- **The reading method is the real asset.** l00 to l03 build a chain I'd teach myself: title + paragraph I as a map, "can I explain the question in Hebrew?" before searching, then keyword, locate, read that sentence, answer. The WhatsApp-search hook in l00 lands, and the l03 race makes the speed claim concrete instead of just asserting it.
- **Question-instruction words are taught in their own right** (q-words-1/2). Losing points on "Give TWO", "According to" and "Complete the sentence" is the most common loss I see, and most prep books skip it.
- **Distractor types are named** in l09: "contradicts the text" and "true, but answers a different question". That second type is the best single thing in Part B.
- **Word-part decoding** (environment+ist, in+effective, en+danger+ed, ir+responsible) teaches a strategy, not just a word.
- **content-2c is the model for Part A:** word-family distractors (social / society / societies / socially), collocation traps (proud of / afraid of vs. responsible for), and explanations that say why the other options fail. Every vocab node should look like this.

### What I would not put in front of a class

**1. Wrong or ambiguous items.** Every item below has more than one defensible answer or a wrong key:

| Node | Item | Problem |
|---|---|---|
| q-words-2 r3 | mark-word "The road was closed because of the storm." | `correctWordIndex: 3` = **closed**. The target is **because** (index 4) |
| content-1c r1 | "The storm ___ many houses. Nothing was left." | **ruined** is also correct |
| content-1c r3 | "A rare ___ of frog" | **type** is also correct |
| content-1c r4 (5 MCQs, no explanations) | increase/**grow**, destroy/**ruin**, protect/**guard**, species/**types** | each has two correct options |
| content-1c r4 | "What destroys forests every year?" | "Pollution" is a partial correct answer next to the key |
| l02 r0 | "What does contribute mean?" | the right option is labelled 🟢, but the lesson's own rule makes this the 🟡 case |
| l08 r2 | "...but nothing was built... Although..." | only *Although* is scored; **but** is also a contrast word, in a lesson called "however / but" |
| l10 preface (WATCH IT) | "why do teenagers who volunteer feel less stressed?" -> "Because they feel less stressed and sleep better" | circular answer: it repeats the question |

**2. Heuristics taught as laws.**
- **"After however is the answer."** In l08 and n-b46b7e2b r3, the question "What does paragraph I say about people who cannot swim?" is keyed to "It is never too late". But "They feel embarrassed and never try" answers that exact question from paragraph I. Students will carry "always take what follows however" into questions where it's wrong. Teach it as "the writer's point usually follows however", and write questions where the text after *however* really is the answer to what was asked.
- **"most" = one answer.** l07 / limiters-q mix up the superlative (*the MOST effective*) with the quantifier (*most trees*, *in most cities*). "According to the text, in most cities, what is available? -> one answer only" and "why do MOST trees die = one specific reason" teach a false rule. Only *the most / the only / the main* limit the answer to one.
- **"Give TWO" counts as a number anchor** (numbers-names-q r3 key: "all four"). TWO is an answer-count instruction, not a number to search for in the text.

**3. Exam facts nobody has checked.** These are stated as facts to students: "90% of students answer the opposite on NOT" (l06), "the exam is 1:45" (l00), "14 points, 7 per answer" (l12), and "two answers to ONE = 0 points" (l10, limiters-q). That last one contradicts l12's self-check, which says the checker reads the first two answers. Check each one against the current Ministry rubric, or soften the wording ("you can lose points").

**4. Easy distractors in Part A.** About 49 lines of the dump use holiday / bicycle / window / sandwich / paint / sing / cook as options. `lesson-structure.md` itself bans these (rule 1). Examples: "Scientists ___ that the drug helps :: sang / ate / painted / **found**" (nav-words-2, and again in vocab-test). A student who doesn't know *found* still scores 100%, so these items measure nothing. content-1a, 1b, 2a and 2b and vocab-test need the content-2c treatment.

**5. vocab-test doesn't test much.** It's 48 single-sentence MCQs with no passage, no spelling and no word-family or affect/effect-style traps until round 5. Several items have options that are the wrong part of speech ("will ___ your English :: reduce / destroy / improve / *species*"). The final writing bank includes *research*, which was never taught (the card was *researchers*).

**6. Too little variety in Part B practice.** The same four texts (Green Africa, adult swimming, Greenville, volunteering) come back in about 15 nodes. By l09 students know the answers from memory, so the last practice rounds test memory, not transfer. Many "PRACTICE Round 1" rounds are three true/false items about the method itself ("P1 works even when the text is hard: true/false"). The l04 / l06 / l07 / l08 drills only mark words and never ask a question, so the skill only reaches real questions in the paired *-q* node. Typed answers are all `self-check` (47): none is scored.

**7. Polish.** "איך איך" (numbers-names-q, not-q), "הטקטסט" x2 and "טקטס" (l00, l03), "אני תמי עונה" (l02), stray "ֿ" lines (q-words-1, l02), broken bold markers ("** ****"), and the flipped period ".הן" (q-words-1). Drill prefaces promise "עשרה משפטים / שבע פסקאות / ארבעה טקסטים", but those rounds have 2-4 items (l04, l06, l07, l08). The section intros in `sectionMeta.ts` also undercount: Part A says "four lessons" (it has 12 nodes) and Part B says "thirteen" (it has 19).

### Teacher's grades

- **Part A: 6.** The structure is strong: card, recall, spelling, match, passage, then a return to the opening passage. But half the items test nothing because the distractors are silly, content-1c has five broken keys, and spelling is copy-only (0 of 47 use `listen`).
- **Part B: 7.** The method is 8-9 on its own. It loses points for the misapplied rules (however, most), the recycled texts and the unscored typed answers.

---

## Voice 2: the student

*Reviewer: Noa (a composite persona), 11th grade, 4-point track. Reads English slowly, gets anxious about the exam, has about 3 weeks and her phone.*

### What worked for me

- **"I search, I don't read" changed how I look at the exam.** The WhatsApp example is exactly how I'd find a message. I tried the lighthouse/bakery race in l03 and felt faster the second time, even though it's a different text.
- **The traffic light is something I'll actually use.** Now I stop and ask "can I say this in Hebrew?", and I finally get why I kept answering questions I hadn't understood.
- **The instruction words saved me real points.** I didn't know "Circle the correct answer" means don't write your own answer, or that TWO means (1) and (2).
- **Word cards with a hook** ("community sounds like common") stick. Going back to the paragraph from the start and understanding it now felt good, like I'd actually learned something.
- It's in Hebrew, it talks to me like a person ("חבר׳ה"), and each round is short enough for the bus.

### What annoyed me or lost me

- **Part A is long.** 431 screens before I even get to reading. Each word goes card, question, cloze, copy-spell, then match-pairs of everything again. Copying a word I can see on the screen doesn't feel like learning.
- **Some answers are obvious.** When the choices are "sang / ate / painted / found", I just click the one that isn't silly. It feels like the app thinks I'm stupid, and then vocab-test is the same.
- **Some "wrong" answers were right.** In the storm question I picked *ruined* and got it wrong, and *grow* instead of *increase* too. That makes me stop trusting the app, and then I second-guess everything.
- **I've seen the Green Africa text ten times.** By the end I answer from memory, not with the method, so I can't tell if I've improved.
- **Filler rounds.** "True or false: P1 works on hard texts." I just press the answer the lesson told me.
- **When I type an answer, the app just shows me its answer.** I have to decide myself whether mine counts.
- **The app says "ten sentences" and shows two.** Small, but it feels unfinished.
- **The numbers scare me more than they help.** "90% of students get this wrong", "you get 0". I don't know if they're true.

### Would I use it?

Yes, for Part B. It's the first time someone gave me steps for the reading part. I'd rush Part A and wish I could skip words I already know, like a quick pre-test that unlocks the lessons.

### Student's grades

- **Part A: 6.** Useful words, too slow and too easy.
- **Part B: 7.5.** Actually changed how I take the test.

---

## Where they agree and where they don't

- **Both agree** that Part B's method is the core value and should be protected, and that Part A's easy distractors and wrong keys hurt trust and learning.
- **The student wants a faster Part A. The teacher wants a harder one.** The answer to both is a placement pre-test per word group plus fewer, harder items, rather than more items.
- **The student doesn't notice the misapplied however/most rules. The teacher sees them as the most dangerous problem**, because they fail silently on exam day.

## Change since the audit (2026-09-19)

- **The vocab gate is gone.** `l00.required` is `[]` since ce2e759 ("content-edit: section c-1"), so reading is open from the start. The audit says to keep the gate on purpose, and l00's preface still says "if you're here, you passed the words". Choose one: restore `required: ['vocab-test']`, or change the preface and the audit.
- The Part A rework (hooks, return-to-passage, `retryMissed`, exam-level round) is in all 7 content-word nodes. The newest additions (content-1c r4, 5 MCQs) come with no explanations and include most of the wrong keys.

## Top fixes, by value per effort

1. **Fix the wrong keys** in the table above. This is about an hour of work and it's what costs the most trust.
2. **Replace the easy distractors** in content-1a, 1b, 2a, 2b and vocab-test using the content-2c pattern: word family, collocation, a same-node word that fits grammatically. Add explanations where they're missing (content-1c r4).
3. **Fix the two heuristics:** "however" (rewrite the paragraph-I swim question) and "most" (teach *the most / the only / the main* vs. quantifier *most*). Remove TWO from the number-anchor item.
4. **Check or soften every exam number** (90%, 1:45, 14/7 points, "two answers = 0"), and make l10 and l12 agree on extra answers.
5. **Swap in a fresh text for the last round** of l09-l12 and the capstones, so students practice transfer instead of recall.
6. **Add a placement check to Part A:** a 5-item quick test per node that marks rounds done when passed. Switch half the `spell-word` screens to `listen`.
7. **Polish pass:** typos, stray characters, the "ten sentences" counts, and the sectionMeta lesson counts.
8. **Decide the vocab gate** (see above) and update the audit.
9. **Play-test with 2-3 real students**, as `module-c-audit.md` §6c describes. Until then, grades above 7 are opinion.

With 1-4 and 7 done (roughly a day), A + B grade about 7.5 from both voices. With 5-6 as well, 8.5.
