# Nonogram Village

Cross‑platform (iOS + Android) nonogram / picross puzzle game.

## MVP (first beta)
- Nonogram solver (square + rectangular grids)
- Max size: **25** on each side
- Catalog with basic filters (size, style tags)
- Content pipeline: images → puzzles → in‑app catalog

## Repo structure (initial)
- `content/`
  - `images/` — source images (provided by owner)
  - `puzzles/` — generated puzzle JSON files
  - `manifest.json` — index of available puzzles (generated)
- `tools/` — scripts for generating puzzles and maintaining content
- `app/` — Flutter app (to be bootstrapped)

## Content pipeline (planned)
1) Put simple flat images into `content/images/`
2) Run generator in `tools/` to produce:
   - puzzle grids (0/1 or palette ids)
   - metadata (width/height, tags)
   - `content/manifest.json`
3) Flutter app loads `manifest.json` + puzzle assets.

## Notes
- “Village/meta progression” is **out of MVP**. First beta ships the core puzzle experience.

