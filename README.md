# Focus Grid / 专注格

A no-framework Schulte Grid attention trainer with countdown levels, guided tutorial mode, language switching, and optional background music. The Chinese product name is 专注格.

## Run

Serve the folder locally:

```bash
python3.11 -m http.server 5173
```

Then open `http://127.0.0.1:5173`.

The app can also be opened from `index.html` directly, but local serving is the recommended way to test browser behavior consistently.

## Defaults

- Grid: `5x5`
- Difficulty: `Medium`
- Countdown: `35s`
- Language: English, switchable from the globe button beside the title
- Theme: follows the system light or dark theme
- Options are saved in cookies.

## Settings

- Grid sizes: `3x3`, `4x4`, `5x5`, `6x6`
- Difficulty levels: `Easy`, `Medium`, `Hard`, `Expert`
- Countdown seconds: custom value from `3` to `300`
- Tutorial: `Skip tutorial next time` can be toggled in settings or after completing the tutorial
- Settings are shown as a side drawer on narrow screens and landscape phone layouts.

## Interaction

- First-time users enter tutorial mode.
- Tutorial mode is not timed. The next number flashes and shows a tap hint.
- Tutorial mistakes are counted in `errors`.
- Tutorial mode can be exited at any time with `Start game`; this starts a normal round for the current session without changing the tutorial preference.
- Completing the tutorial shows a mask. Tapping the mask starts a normal timed game; tapping `Skip tutorial next time` skips the tutorial in future sessions.
- A new normal grid is visible for 3 seconds with a translucent countdown mask.
- After preview, an opaque ready mask hides the numbers.
- Tap the ready mask to start the timed round.
- Click numbers in ascending order as quickly as possible.
- Click outside the grid to pause; tap the pause mask to resume.
- A quick accidental double-click on the last correct number is ignored.
- Finished or timed-out games show a result dialog. Closing it leaves a mask on the grid; tapping the mask starts a new game.
- The music button toggles the CC0 background track. The off state shows a red circle-slash indicator.

## Grid Generation

Each new grid is shuffled with a spacing constraint: consecutive numbers such as `7` and `8` are not placed in adjacent cells, including diagonal adjacency. This keeps the task focused on visual search instead of letting users follow local number clusters. The `3x3` grid is generated as a best-effort layout because a strict no-adjacent sequence is not possible when the center cell touches every other cell.

## Status

The status line is displayed above the grid:

- Left: progress, such as `0/25`
- Center: error count, shown only after the first error
- Right: remaining time

## Training Targets

The countdown presets are:

| Grid | Easy | Medium | Hard | Expert |
| ---- | ---: | -----: | ---: | -----: |
| 3x3  |  17s |    15s |  13s |    11s |
| 4x4  |  35s |    29s |  23s |    19s |
| 5x5  |  45s |    35s |  30s |    25s |
| 6x6  |  80s |    65s |  53s |    41s |

The training line uses the selected countdown as `Challenge`, then derives `Strong` and `Expert` from the grid size. `Hard` and `Expert` use tighter intervals between the three targets so each target step remains achievable.

## Accessibility And Language

- English and Chinese are supported.
- Visible labels, icon button labels, status labels, and grid-cell number labels switch with the selected language.
- Grid size and difficulty controls use radio-group semantics.
- The initial document language is English and updates to `zh-CN` when Chinese is selected.
- Accessibility support focuses on non-game states: Tab reaches visible controls and actionable masks, hidden settings drawers stay out of focus, and masks support Enter and Space.
- The grid cells are optimized for visual search and pointer/touch input; arrow-key navigation is not part of the gameplay.

## Branding

The footer shows `(c) Copyright Mario Studio 2026-2027` with the Mario Studio favicon and a link to the GitHub repository:

<https://github.com/KingMario/focus-grid>

## SEO

The static HTML includes bilingual English and Chinese SEO content for 专注格, Schulte Grid, and 舒尔特方格 search intent:

- Canonical URL: `https://mario.studio/focus-grid/`
- Meta description, Open Graph, and Twitter summary metadata
- Visible English and Chinese about text below the game
- JSON-LD `WebApplication` structured data
- Subsite sitemap: `https://mario.studio/focus-grid/sitemap.xml`

## Healthy Use And Disclaimer

The page includes a bilingual anti-addiction and disclaimer notice:

- Focus Grid / 专注格 is intended for short attention-training sessions.
- Users should avoid long continuous sessions and take regular breaks.
- Users should stop if they feel eye strain, dizziness, headache, anxiety, or other discomfort.
- Users should not use the game while driving, cycling, operating machinery, walking in unsafe environments, or in situations that require continuous attention to their surroundings.
- Continued use means the user has read and accepted the notice and disclaimer.
- Focus Grid / 专注格 is not a medical, diagnostic, or treatment tool.
- Minors should use it with guardian guidance.
- Game results reflect only current gameplay performance, not medical or learning ability assessment.

## License

MIT License. See `LICENSE`.

## Music Credit

Background music: [`Free Run [8 bit(ish)]`](https://opengameart.org/content/free-run-8-bitish) by TAD, released as CC0 on OpenGameArt.
