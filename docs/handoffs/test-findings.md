# Handoff: test findings (from the testing plan runs)

Found by `front/e2e` (Playwright) and persona runs. Fix, then tick.

## Phase 2: smoke

Axe's color-contrast rule is off: the brand teal stays as is (owner's call). Listed below are only the unreadable cases.


- [ ] **Dark theme: module hero "continue" button unreadable.** `bg-white text-brand-dark` = light teal on white, 1.7:1 (`/app/unit/*/module/*`).
- [ ] **Home page: highlighted `<mark>` in the demo** (`m-anchor`): 1.2:1 in the dark theme.
- [ ] **Home page: horizontal card scroller not keyboard reachable** (`ul.scrollbar-none`, axe scrollable-region-focusable).
