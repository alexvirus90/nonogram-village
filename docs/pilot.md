# Nonogram Village — Pilot (MVP)

## Goal (2–3 weeks)
Build **one pilot game** around a polished nonogram core loop + a very light “village” meta layer.

Primary unknowns we want to validate:
- Tutorial funnel + early difficulty curve
- Puzzle completion rate / time-to-solve
- Whether **Village-lite** improves motivation/retention (D1/D3 as a direction)

## MVP scope (IN)
### Nonogram core
- Load levels from content pack (data-driven)
- Grid interaction: **Fill / X**, tap + drag
- Row/column highlight (soft)
- Undo (minimum viable), optional redo
- Autosave puzzle progress + restore on app relaunch
- Win detection + result screen

### Progression
- Level select (linear progression + locked/unlocked)
- “Continue” to last unfinished puzzle

### Village-lite (strictly limited)
- 1 screen (“Home / Village”)
- Currency reward per completed level
- **Exactly 3 upgrades** that change simple visual state

### Onboarding
- 3–5 coachmarks on first 1–2 levels
- Skip option

### Analytics (minimum events)
- level_start / level_complete / level_quit
- tutorial_step
- hint_used (if hints are shipped)
- village_upgrade

## Non‑MVP (OUT)
- Accounts / cloud save / online
- UGC editor
- Daily events / seasons / leaderboards
- Complex economy, decorations, free placement
- Full monetization pipeline + A/B tests (can be next phase)

## Key product decisions
- Error mode: **Soft errors** (highlight + optional haptic), no “strict blocking” in MVP.
- Max puzzle size in MVP: start with **10×10**, add limited **15×15** late in the pack.

---

## Backlog (priorities)
### P0
1. Define core rules: error mode, win condition, hint policy (ship vs stub)
2. Level format + storage + validator
3. Puzzle grid rendering + input (Fill/X + drag)
4. Autosave/restore puzzle state
5. Level select screen + locking/unlocking
6. Rewards/currency for completion
7. Village screen + 3 upgrades (purchase + visuals)
8. Tutorial coachmarks (first levels)
9. Analytics events (minimum set)
10. Balance first 10 levels (internal playtest)

### P1
11. Simple Hint (1 type) + telemetry
12. Better UX polish (bigger tap targets, haptics toggle)
13. Result screen (time/errors/hints + Next)
14. Light animation for “image reveal” + village upgrade
15. Minimal “portfolio readiness”: app_config + data-driven content

### P2
16. Daily puzzles / streak
17. Chapters / themed packs
18. Monetization (rewarded hints, IAP packs, no-ads)
19. Localizations, accessibility pass
20. Cloud save

---

## UX/UI pack (MVP)
### Screens
- Splash/Loading
- Home (Village)
- Level Select
- Puzzle
- Pause (modal)
- Win/Result
- Settings

### Core components
- Grid: thick separators every 5, active row/col overlay
- Toolbar: Fill/X toggle, Undo, Hint (optional), Pause
- Errors: soft highlight + snackbar/toast
- Result: stars + reward + Next

### Visual tokens (light theme, MVP)
- BG: #F7F8FA, Surface: #FFFFFF
- Text primary: #1B1F24, secondary: #5B6570
- Border: #D9DEE5
- Primary: #3B82F6 (soft: #DBEAFE)
- Success: #22C55E, Warning: #F59E0B, Error: #EF4444

---

## Risks & mitigations
- Scope creep in village → **hard limit: 3 upgrades**
- Content quality → difficulty guidelines + golden path (first 10 levels) + fast playtest loop
- Nonogram UX “death by details” → fewer features, more polish (input, highlight, undo, save)
- Missing analytics → define events early, verify in debug logs
- Portfolio abstractions too early → only config + data-driven content, no heavy framework
