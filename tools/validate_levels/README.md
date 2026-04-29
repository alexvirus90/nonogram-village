# validate_levels

Simple offline validator for nonogram content.

## Usage
From repo root:

```bash
node tools/validate_levels/validate_levels.js content/levels
```

Validates:
- JSON parse
- required fields
- width/height match solution rows
- solution chars are only `0` or `1`
- unique ids across all files

(Clue generation/check can be added next.)
