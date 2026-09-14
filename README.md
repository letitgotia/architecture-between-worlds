# Architecture Between Worlds

**A comparative visual essay on how political conditions shape architectural exchange — from Silk Road translation and pilgrimage to Cold War monumentality and diplomacy.**

Two buildings, twelve centuries apart, ask the same question: when a form crosses a border, whose interests travel with it, and what does the built result record about the encounter?

- **Giant Wild Goose Pagoda, Xi'an, 652 CE** — built by the monk Xuanzang to house sutras carried back from India on a seventeen-year pilgrimage. An Indian stupa's solid mass translated into Chinese timber-frame logic and realised in masonry, produced through pilgrimage, monastic networks, Tang patronage, and local craft.
- **Palace of Culture and Science, Warsaw, 1955** — an official Soviet "gift" to Poland, designed by Lev Rudnev, combining Stalinist high-rise massing with Polish historicist references. Architecture as an expression of asymmetric power, still contested seventy years later.

The comparison works through three lenses — **agency**, **form**, and **legibility over time** — and lands on a finding rather than a verdict: architecture records the conditions of encounter, but those records stay open to reinterpretation. A closing section extends the argument to contemporary cross-border building (Belt and Road, embassies, Gulf-backed urban projects) and to SDG 10, 16 and 17.

## Viewing it

Open `index.html` in any browser, or serve the folder with GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root). Everything is self-contained: no build step, no network calls, no external image hosting.

## Interactive elements

| Feature | What it does |
|---------|--------------|
| Period tabs | Switch between Period III (Silk Road) and Period VI (Cold War) |
| Timeline | Thirteen entries from Zhang Qian's 2nd-century BCE missions to Bucharest's Palace of Parliament (1984-1997); clicking a card updates the detail panel |
| Lens switcher | Re-reads the same two buildings through agency, form, and memory |
| Annotated pins | Hover notes on the comparison images |

## Page structure

| Section | Anchor |
|---------|--------|
| When empires touch stone | `#intro` |
| Two eras, one question | `#timeline` |
| The Silk Road: architecture through exchange | `#silk-road` |
| The Cold War: architecture through state policy | `#cold-war` |
| Reading the difference | `#comparison` |
| What the stones remember | `#conclusion` |

## Files

| File | Purpose |
|------|---------|
| `index.html` | The complete standalone page |
| `architecture-svgs.js` | Custom SVG illustrations used throughout |
| `image-slot.js` | Helper for image and SVG slots |

## Build notes

- All illustrations are custom SVG, inline in `index.html` or generated from `architecture-svgs.js`.
- Comparison and timeline imagery is embedded as inline data URIs, so nothing depends on external hosting.
- Google Fonts links were removed so the page renders offline; the CSS falls back to local system fonts.
- Built with an AI-assisted development workflow (Claude, Codex).

## Author

Letitia Yile Zhang. Course project, 2026. Text and illustrations by the author — please ask before reusing.
