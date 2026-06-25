# Handoff: Kids Kreations — Homepage Hero Redesign

## Overview
This package contains the redesigned **homepage hero section** for Kids Kreations, a premium B2B babywear manufacturer (OEM for brands and retailers — not direct-to-consumer). The redesign replaces an amateurish "three babies on a rug" cut-out with a sophisticated **editorial image grid** that signals quality manufacturing and craftsmanship, while keeping the existing warm taupe/cream palette, serif headings, and minimal layout.

The **left column was intentionally left unchanged** (headline, subhead, checklist, CTAs). All redesign work is in the **right-side visual**.

## About the Design Files
The files in this bundle are **design references created in HTML/CSS** — a prototype showing the intended look and behavior. They are **not** meant to be copied into production as-is. Your task is to **recreate this hero in the Kids Kreations app's existing environment** (React/Vue/Svelte/etc.), using its established component patterns, styling approach (CSS modules, Tailwind, styled-components, whatever is in use), and asset pipeline. If the app has no established framework yet, choose the most appropriate one and implement there.

Treat the HTML/CSS as the **source of truth for visual values** (exact colors, spacing, typography, layout), not for code structure.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and layout are all specified below to exact values. Recreate the UI pixel-perfectly using the codebase's existing libraries and patterns. Map the design tokens below onto the app's existing token system where one exists (don't introduce a parallel set of hard-coded values if the app already has a theme).

---

## The Screen: Homepage Hero

### Layout
- The hero is a **two-column layout** inside a top-aligned page with a full-width nav bar.
- Reference canvas: **1280px wide**. Hero content area is inset **56px** left/right; nav and grid share this horizontal rhythm.
- **Top nav** (height 92px): brand lockup on the left, nav links on the right, 1px hairline bottom border.
- **Two-column grid** below the nav:
  - `grid-template-columns: 540px 1fr` with **56px gap**, vertically centered (`align-items: center`).
  - **Left column** = content card (headline, checklist, CTAs).
  - **Right column** = the new editorial image grid (this is the redesigned part).
- This is a desktop layout. For responsive behavior, see **Interactions & Behavior** below.

### Component: Top Nav
- **Brand lockup** (left): a 50×50px monogram tile + wordmark.
  - Monogram: 4px radius, gradient background `linear-gradient(150deg, #B5A276, #9A865C)`, inset 1px white border ring, contains italic "KK" in the display serif (Cormorant Garamond), 22px, color `#FBF7EC`.
  - Wordmark: "Kids Kreations", Spectral serif, 500 weight, 28px, color `#463F33`, 16px gap from monogram.
- **Nav links** (right, `margin-left: auto`): Home · About · Services · Lookbook · Products · Contact.
  - Mulish sans, 17px, color `#574E3F`, **40px gap** between items.
  - Active link ("Home"): color `#463F33` with a 1.5px gold underline (`#A89468`) offset 2px below text.

### Component: Left Content Card (UNCHANGED — keep as-is in current app)
Documented for completeness; do not alter content or behavior, just ensure styling matches.
- Card: `linear-gradient(180deg, #FCFAF5, #F8F5EE)` background, 1px border `rgba(70,63,51,0.08)`, **22px radius**, padding `52px 54px 56px`, soft shadow `0 24px 50px -34px rgba(70,55,35,0.28)`.
- **Eyebrow**: "TRUSTED BY **GLOBAL BRANDS**", 14px, weight 700, letter-spacing 3px, uppercase, color `#A8A091`; the bold part `#8C8475` with a 1.5px gold underline (`#C7B891`).
- **Headline**: "Your Partner in Premium Babywear Manufacturing", Spectral serif, weight 600, **56px**, line-height 1.04, letter-spacing -0.5px, color `#463F33`, `text-wrap: balance`.
- **Subhead**: "Large-scale OEM manufacturing for brands and retailers.", 21px, color `#8C8475`, line-height 1.4.
- **Checklist** (`<ul>`, flex column, 17px gap): three items, each a 26px sage circle (`background #E5EADD`) with a 14px checkmark (stroke `#5E7A4C`), then 18px text in `#574E3F`:
  1. Certified organic & sustainable production
  2. In-house design, development & sampling
  3. Seamless global logistics and compliance
- **Lede**: "Chosen by international partners across Europe, the UK, the US, and Asia. Built for quality. Engineered for scale.", 18px, line-height 1.55, color `#8C8475`, max-width 430px.
- **CTAs** (flex row, 16px gap):
  - Primary "Explore Products →": `linear-gradient(180deg, #6B5F4F, #564C3E)`, text `#F6F1E6`, 12px radius, padding `16px 26px`, 16.5px/600, shadow `0 10px 22px -12px rgba(70,55,35,0.6)`.
  - Ghost "Schedule a Meeting": transparent, 1px border `rgba(70,63,51,0.14)`, text `#574E3F`, same radius/padding/size.

### Component: Right-Side Editorial Image Grid (THE REDESIGN)
This is the new visual. A **three-tile editorial grid** of close-up manufacturing/material photography with monospace captions.

- **Grid container** (`.dirA`): `display: grid; grid-template-columns: 1.18fr 1fr; grid-template-rows: 1fr 1fr; gap: 16px;` Height ≈ 560px (let it size with the column in your app; keep the proportions).
- **Tile 1 (large, left)**: spans both rows (`grid-row: 1 / span 2`). The hero garment shot — folded organic-cotton babywear flat-lay (the cream ribbed henley with wooden buttons).
- **Tile 2 (top-right)**: fabric weave macro — interlock knit close-up.
- **Tile 3 (bottom-right)**: seam detail macro — flatlock stitching.
- **Tile styling** (`.a-tile`): `border-radius: 6px; overflow: hidden;` 1px border `rgba(120,100,70,0.16)`, shadow `0 18px 40px -30px rgba(70,55,35,0.45)`. Image fills the tile (`object-fit: cover`).
- **Captions** — monospace (IBM Plex Mono), **10.5px**, letter-spacing 0.6px, uppercase, color `#6E5F45`, `pointer-events: none`. Each sits over the image behind a soft cream scrim so it stays legible:
  - **Top caption** (`.a-cap`): label left + index number right (number in gold `#A89468`). Scrim: `linear-gradient(180deg, rgba(251,249,243,0.92) 0%, rgba(251,249,243,0) 100%)`, padding `13px 14px`.
  - **Bottom caption** (`.a-foot`, large tile only): scrim from bottom, padding `26px 14px 13px`.
  - Exact caption text:
    - Tile 1 top: `ORGANIC COTTON · FOLDED` / `01` — bottom: `STUDIO FLAT-LAY`
    - Tile 2 top: `INTERLOCK WEAVE · 180GSM` / `02`
    - Tile 3 top: `FLATLOCK SEAM DETAIL` / `03`

> **Note on the image-slot mechanism:** the prototype uses a custom `<image-slot>` web component (drag-and-drop placeholder, persists to localStorage) purely so the client could trial photos in-browser. **Do not port `image-slot.js` to production.** In the real app these are just three `<img>` tags (or `background-image`) with `object-fit: cover`. The final approved photos are shown in `reference-with-images.png` — export those three images from the client's asset library at 2× and wire them in directly.

---

## Interactions & Behavior
- **Nav links**: standard navigation; active route gets the gold underline treatment.
- **CTA buttons**: primary triggers Explore Products route/scroll; ghost opens the Schedule-a-Meeting flow (whatever the current app uses). The prototype has a `transform .15s ease` transition hook — add a subtle hover (e.g. `translateY(-1px)` and/or slight shadow lift) consistent with the app's button conventions.
- **Image tiles**: static (no hover/lightbox required). Optional, if it fits the app's vocabulary: a very subtle `scale(1.02)` image zoom on hover. Not required.
- **Responsive behavior** (the prototype is fixed-width desktop; you must define breakpoints):
  - **≥1024px**: two columns as specified (540px content + fluid image grid).
  - **768–1024px**: allow the content column to flex narrower; keep the 3-tile grid but reduce gap to ~12px.
  - **<768px (mobile)**: stack — content card on top, image grid below at full width. Consider collapsing the image grid to the large tile only, or a 1-wide / 2-wide arrangement, to avoid cramped macros. Nav collapses to the app's existing mobile menu pattern.

## State Management
- Largely static / presentational. No client state beyond:
  - Active nav route (from the router).
  - Mobile nav open/closed (use the app's existing pattern).
- No data fetching required for the hero. Image sources can be static imports/CDN assets.

---

## Design Tokens
Map these onto the app's existing theme where possible.

### Colors
| Token | Hex | Use |
|---|---|---|
| cream | `#F4F1E9` | page background |
| cream-2 | `#ECE7DB` | deeper cream |
| cream-3 | `#E3DCCC` | — |
| card | `#FBF9F3` | content card / caption scrim base |
| ink | `#463F33` | headlines, primary text |
| ink-soft | `#574E3F` | secondary text |
| muted | `#8C8475` | body / supporting text |
| muted-2 | `#A8A091` | eyebrow, faint text |
| gold | `#A89468` | accent: active underline, index numbers |
| gold-line | `#C7B891` | thin accent underline |
| btn / btn-2 | `#6B5F4F` / `#564C3E` | primary button gradient |
| sage | `#7E9A6B` | — |
| sage-bg | `#E5EADD` | checklist circle background |
| check stroke | `#5E7A4C` | checkmark |
| caption text | `#6E5F45` | monospace tile captions |
| line | `rgba(70,63,51,0.14)` | borders |
| line-soft | `rgba(70,63,51,0.08)` | hairline borders |

### Typography
| Role | Family | Notes |
|---|---|---|
| Headings / wordmark | **Spectral** (serif) | weights 400–700 |
| Display (monogram, accent italics) | **Cormorant Garamond** italic | weight 600 |
| Body / UI | **Mulish** (sans) | weights 400–700 |
| Captions / labels | **IBM Plex Mono** | weights 400–500 |

Google Fonts import used in the prototype:
`https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700&family=Cormorant+Garamond:ital,wght@1,600&family=Mulish:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap`

Key sizes: headline 56px/1.04/-0.5px · subhead 21px · checklist & lede 18px · nav 17px · buttons 16.5px · eyebrow 14px · captions 10.5px.

### Spacing / Radius / Shadow
- Horizontal page inset: **56px**. Column gap: **56px**. Image grid gap: **16px**.
- Radii: content card **22px**, buttons **12px**, image tiles **6px**, monogram **4px**.
- Shadows: card `0 24px 50px -34px rgba(70,55,35,0.28)` · tiles `0 18px 40px -30px rgba(70,55,35,0.45)` · primary button `0 10px 22px -12px rgba(70,55,35,0.6)`.
- Page background carries a faint radial warm glow `radial-gradient(120% 90% at 88% 30%, #FAF7F0 0%, #F4F1E9 55%)` and a barely-there vertical paper grain (optional).

## Assets
- **Three hero photographs** (client-supplied, already approved): a folded organic-cotton garment flat-lay, an interlock-weave fabric macro, and a flatlock-seam macro. See `reference-with-images.png` for the exact approved shots and crops. Export from the client's asset library at 2× and serve via the app's image pipeline. All three share a warm cream/taupe tonal cast — preserve that color grade if any optimization/compression is applied.
- **Fonts**: Spectral, Cormorant Garamond, Mulish, IBM Plex Mono (all Google Fonts / open source).
- No icon library required — the only icon is the inline SVG checkmark (documented above).

## Files in this bundle
- `Kids Kreations Hero.html` — the standalone hero prototype (Direction A, final). Open in a browser to see structure and behavior.
- `styles.css` — all styles. The relevant sections: `:root` tokens, `.hero`, `.nav`, `.hero-grid`, `.lcard`, and **`DIRECTION A — Atelier editorial grid`** (`.dirA`, `.a-tile`, `.a-cap`, `.a-foot`). (The file also contains unused Direction B/C styles from earlier exploration — ignore those.)
- `image-slot.js` — the prototype-only drag-drop placeholder component. **Reference only; do not ship.** Replace with plain `<img>` tags.
- `reference-with-images.png` — screenshot of the final hero with the approved photography in place. This is your visual target.
