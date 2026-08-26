# Reference Website Design Specification
### Source: premusion.com (inspected live — DOM, computed CSS, and rendered screenshots at desktop 1280px and mobile 375px)

> This document analyzes the UI/UX of premusion.com purely as a design reference. It does not reproduce proprietary text, branding, logos, or assets — only layout, styling, and interaction patterns for use in an original redesign.

---

## 1. Tech Stack (detected)

| Layer | Finding |
|---|---|
| Framework | **Next.js** (App Router, Turbopack build — chunk filenames like `turbopack-*.js`) |
| Styling | **Tailwind CSS v4**-style utility classes + **shadcn/ui** design-token system (`bg-background`, `text-foreground`, CSS vars `--primary`, `--radius`, etc.) |
| Theme | Hard-coded **dark mode** (`<html class="dark">`) — no light/dark toggle detected |
| Smooth scroll | **Lenis** (`class="lenis lenis-smooth lenis-scrolling"` on `<html>`) |
| Scroll animation | Elements carry inline `transform`/`opacity` styles that update on scroll (40+ nodes) — consistent with **GSAP + ScrollTrigger** (no Framer Motion markers found) driving fade/parallax/pin effects, on top of Lenis for the buttery scroll feel |
| Fonts | **Syne** (display, weight 400–800) for headings, **Inter** (weight 100–900) for body — both self-hosted via `next/font` (variable fonts, no external Google Fonts link tag) |
| Icons | Likely `lucide-react` (thin-line icon style matches arrows/chevrons seen) |
| Marquee | Custom CSS keyframe (`animate-scroll`), duplicated track + `direction-reverse` modifier for alternating strips — not a plugin |

**Recreate with:** Next.js + Tailwind + shadcn token setup, `lenis` npm package for scroll smoothing, `gsap`/`ScrollTrigger` for scroll-linked reveals, `next/font` for Syne + Inter (or original substitute fonts).

---

## 2. Design Tokens (as observed)

### Color system (shadcn-style CSS variables, dark theme active)
```
--background:        #0a0a0a   (near-black, not pure black)
--foreground:         #fafafa
--card / --popover:   #171717
--card-foreground:    #fafafa
--primary:            #e5e5e5  (on dark)
--primary-foreground: #171717
--secondary / --muted / --accent: #262626
--muted-foreground:   #a1a1a1
--border:              rgba(255,255,255,0.10)
--input:                rgba(255,255,255,0.15)
--ring:                #737373
--destructive (dark):  #ff6568
--radius:              0.625rem (10px) — base radius token, scaled up (rounded-xl=14px, rounded-full for pills)
```

### Brand accent (not a token — applied directly per-element)
- **Gradient**: `linear-gradient(to right, orange-400 → orange-500 → red-500)` i.e. `#fb923c → #f97316 → #ef4444`
  - Used on: logo wordmark accent letters, gradient headline text (`bg-clip-text` + `text-transparent`), section eyebrow numbers/labels (solid orange `#f97316`/`#ea580c`), timeline year headings
- **Primary CTA button**: solid `bg-orange-500` (#f97316), `hover:bg-orange-600`, white text, `shadow-lg` with `hover:shadow-orange-500/25` (colored glow on hover)
- **Secondary CTA ("Contact Us" on hero)**: solid white pill button, dark text, high contrast against dark hero

Everything else stays strictly monochrome (near-black background, white/gray text, gray-on-gray borders) — **the orange→red gradient is the only saturated color in the entire UI**, which is what makes it pop.

### Typography scale
| Role | Font | Example size (desktop) | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | Syne | `text-5xl → 3xl:text-[140px]` (fluid, responsive per breakpoint up to 140px) | 900 (black) | `tracking-tighter` (-4.8px at 96px), `leading-[0.85]` |
| Section headings | Syne | ~40–64px | 800–900 | tight tracking, uppercase |
| Nav links / labels / eyebrows | Inter | 12px (`text-xs`) | 500 | `tracking-[0.2em]` uppercase — very wide letter-spacing, small caps-style labels used everywhere (SERVICE, [002], SEND AN EMAIL, etc.) |
| Body copy | Inter | 16px | 400 | normal, `text-muted-foreground` gray |
| Team member names | Inter (lighter, near-serif rendering at large size) | ~28–32px | 400–500 | normal case, not uppercase (contrast vs. the uppercase labels around it) |

**Pattern to copy:** two-font pairing — a heavy geometric/grotesque display face for all headings/CTAs in UPPERCASE, and a neutral workhorse sans for body text and tiny uppercase micro-labels with wide tracking. Nearly all headings and buttons are uppercase; body copy is sentence case.

---

## 3. Layout System

- **Container padding**: generous horizontal gutter, ~48px at desktop (custom utility, likely a `clamp()` scaling down to ~16–24px on mobile)
- **Max width**: content is not clamped to a narrow centered container the way typical marketing sites are — sections run closer to full viewport width with the gutter above, giving an "editorial/agency" feel rather than a boxed 1200px layout
- **Vertical rhythm**: sections are tall (full-viewport-height or greater) with large breathing room; total homepage scroll height ≈ 10,000px for a single long-scroll page
- **Grid**: hero uses an asymmetric 2-column split (text left ~55%, floating image collage right ~45%) rather than a centered single column
- **Section numbering**: every major section is labeled with a bracketed index (`[002]`, `[003]`, `[004]`) plus an eyebrow title — a wayfinding device that reinforces "you're moving through a structured story"

---

## 4. Section-by-Section Breakdown

### Header / Navbar
1. **Contains**: logo wordmark (gradient accent on one letter) + tagline stacked underneath in small tracked caps, and a single hamburger icon (☰) on the right — **no visible inline nav links at any breakpoint**, even desktop.
2. **Layout**: flex row, logo left, hamburger right, fixed/sticky to top.
3. **Styling**: transparent over hero; on scroll, gains a translucent glass background — `backdrop-filter: blur(16px)` + `bg-background/75` + hairline bottom border. Classic frosted-glass sticky header.
4. **Interaction**: clicking hamburger opens a **full-screen dark overlay menu** with large uppercase links (Home / About / Team / Services / Industries / Case Studies / Contact), stacked vertically, generous line spacing, close (✕) icon top-right in the same position the hamburger occupied. Deliberate "boutique agency" nav pattern — a true full-viewport takeover, not a dropdown or slide-in drawer.
5. **Responsive**: identical menu pattern from mobile through desktop — same hamburger + full-screen overlay everywhere, no separate desktop link bar.

### Hero (Section [001])
1. **Contains**: decorative diagonal line-hatch mark (top-left), scattered dot/star particles across the background, small vertical "SCROLL" label with a line (rotated 90°, right edge), two-line headline (brand name in gradient + tagline word in white), one paragraph of body copy, two CTAs (solid white pill + ghost pill with icon), and a right-side floating **collage of 4–6 rounded-corner photo/UI tiles** (staggered vertical offsets, greyscale/duotone treatment, one tile a phone-mockup screenshot).
2. **Layout**: 2-column split; text block vertically centered-left, image collage forms an offset masonry column on the right that bleeds off the top and bottom edges of the viewport.
3. **Styling**: pure black/near-black background; tiles have large rounded corners, sit on translucent dark cards, images desaturated to blend into the dark palette; ambient dot particles add texture without color.
4. **Interactions/animations**: hero elements fade/translate out as the user scrolls (opacity ties to scroll position — visible in mid-scroll screenshot where hero text and photos fade to ~20% opacity before the next section fully takes over — a scroll-scrubbed exit transition, not a hard cut).
5. **Responsive**: mobile stacks the collage above the text as a full-width background band (reduced opacity), then headline/body/CTAs below in a single column; particles and diagonal mark persist.

### About / "We Are [Brand]" (unlabeled, precedes [002])
1. **Contains**: giant uppercase two-line statement in the orange gradient, a card with the mission paragraph, and a three-word tag row separated by slashes.
2. **Layout**: centered single column, generous top/bottom padding, statement text near hero-scale.
3. **Styling**: card has a soft rounded rectangle with a subtle border, floats over the dark background — minimal shadow.
4. **Animation**: heading reveal animates in on scroll entry (opacity/translate-Y).
5. **Responsive**: text scales down but stays centered/stacked at all sizes.

### Marquee Divider (repeated between every major section)
1. **Contains**: an infinite horizontal ticker of uppercase service keywords, separated by bullet dots.
2. **Layout**: full-bleed strip, large outlined/low-opacity type, positioned as a section separator rather than inside a card.
3. **Styling**: text rendered in faint gray (near-invisible against the black bg — intentionally "ghost"/textural, not a primary CTA), letters huge and bold.
4. **Animation**: continuous CSS `translateX` keyframe loop; alternating strips run in reverse direction for a crossing-ticker effect; duplicated track keeps the scroll seamless.
5. **Responsive**: same marquee behavior at all sizes, just clipped by viewport width.

### Team ([002])
1. **Contains**: eyebrow "[002]" + gradient heading; then **nested cards grouped by department**, each listing name (large, normal-case, lighter weight) + role (small uppercase tracked-out label in muted gray) stacked underneath.
2. **Layout**: single outer rounded card containing multiple inner sub-cards/dividers, vertical stack, generous vertical spacing between people.
3. **Styling**: dark card-on-card layering (card slightly lighter than background), thin borders separate groups, numbers ("01", "02", "03") act as section markers within the card.
4. **Animation**: staggered fade/translate-in per group as it scrolls into view.
5. **Responsive**: card stack becomes full-width single column; department groupings preserved.

### Industries We Transform (part of [002]/[003] flow)
1. **Contains**: label + a row/wrap of **pill-shaped tag buttons** (industry names).
2. **Layout**: flex-wrap pill group inside a rounded card, centered or left-aligned.
3. **Styling**: pills use full rounding, dark fill, thin border, uppercase small-caps label — same pill language as nav CTA and footer social buttons (a consistent "pill" component reused everywhere for tags/links).
4. **Interaction**: subtle hover state (border/text brightening) consistent with the rest of the site's transition pattern.
5. **Responsive**: pills wrap naturally to additional rows on narrow viewports.

### Services ([003])
1. **Contains**: eyebrow + one-line description + "scroll to explore" hint, followed by **three large full-bleed image cards**, each labeled top-left "SERVICE", top-right a year, and bottom-left a bold gradient title. One card shows floating glassmorphic icon chips layered over the photo.
2. **Layout**: full-width stacked cards, each near full-viewport height, image fills the card with a dark gradient overlay (bottom-heavy scrim so title text stays legible).
3. **Styling**: rounded-corner image cards, dark-to-transparent overlay gradient, gradient text label matching the brand accent, small glass icon chips with backdrop-blur + border for the "tech" service card.
4. **Animation**: this is the section most likely using scroll-linked **pinning** — cards appear to stack/transition as you scroll (each new service crossfades or slides over the previous), ending with an "END" marker after the third card confirming a scroll-jacked/pinned sequence.
5. **Responsive**: pinning behavior likely disabled on mobile in favor of normal stacked scroll; cards remain full-bleed and stacked vertically.

### Our Journey ([004]) — Timeline
1. **Contains**: eyebrow + description, then a **vertical timeline** across several years, each entry: step number, large accent-colored year heading, one-sentence milestone copy, small pill tags, and a giant faint ghost numeral bleeding in the card background for texture.
2. **Layout**: left vertical line with dot markers at each milestone (connecting rail + node dots), content card to the right of each dot.
3. **Styling**: each entry is its own rounded card with a thin border/divider; dots are filled circles on the rail; year in orange bold display type; ghost numerals in ultra-low-opacity gray at large size for texture.
4. **Animation**: dot/line likely animates its fill progress as you scroll (progress rail paired with scroll-scrub), cards fade/slide in as they enter viewport.
5. **Responsive**: rail collapses to a simpler left-aligned vertical line on mobile; cards remain full-width stacked.

### Contact ([005]) / Footer
1. **Contains**: heading + CTA line; a meta-info list (email, phone, hours with arrow-out icons); a **"Send Us a Message" form card** (name, email, phone, subject dropdown, message textarea, consent checkbox with linked policy text, solid full-width submit button); footer bar below with copyright line and pill-shaped social links.
2. **Layout**: two-zone stack — contact-info list on top (label/value pairs, left-aligned, divided by thin horizontal rules), form card below in its own rounded panel; footer social row is a separate flex row of pill buttons at the very bottom.
3. **Styling**: form inputs use translucent dark backgrounds, hairline borders, rounded corners, accent-colored focus border — glassy dark fields with no default browser chrome. Submit button: solid accent, hover color-shift + accent-colored glow shadow. Info-list labels use the same tiny tracked-out accent caps pattern as section eyebrows.
4. **Interactions**: input focus states swap border color to accent; submit button has hover color-shift + glow; email/phone rows are `mailto:`/`tel:` links; a floating **click-to-chat FAB** (circular, bottom-right) persists across the entire scroll.
5. **Responsive**: two-zone layout stacks to single column at all widths tested; pill social buttons wrap/stay inline depending on width.

---

## 5. Reusable Components (design-system inventory)

| Component | Spec |
|---|---|
| **Pill button (solid)** | Fully rounded, light bg / dark text (hero) or accent bg / white text |
| **Pill button (ghost/outline)** | Transparent bg, thin border, icon + uppercase tracked label |
| **Eyebrow label** | 12px, uppercase, wide tracking, accent or muted-gray, paired with a bracketed index number for section markers |
| **Gradient headline text** | Accent gradient clipped to text — reused for brand name, section titles, service card titles |
| **Glass panel** | Translucent background + backdrop-blur + hairline border — used on sticky header and form inputs |
| **Ghost numeral texture** | Oversized, ultra-low-opacity display numerals used as background texture in timeline cards |
| **Marquee strip** | Infinite CSS-keyframe ticker, alternating direction, used as a rhythmic section divider throughout the page |
| **Floating chat FAB** | Fixed bottom-right circular button, always visible |

Note two distinct corner-radius "flavors": fully-rounded for tags/nav/secondary links, ~14px soft-square for cards/inputs/primary submit button. Don't blend a third radius in.

---

## 6. Motion & Interaction Summary

- **Scroll engine**: Lenis-style inertial/smooth-scroll feel site-wide.
- **Scroll-triggered reveals**: fade + slight translate-Y on section/card entry, staggered for lists (team members, timeline entries).
- **Scroll-scrubbed exit**: hero content opacity is tied directly to scroll offset (not a one-shot reveal — it visibly fades as you scroll past it).
- **Pinned sequence**: Services section shows evidence of pinning/stacking behavior (label + year + "END" marker after the last card).
- **Micro-interactions**: colored transitions on hover/focus state changes (color shift + shadow glow on primary CTA), border-color focus states on inputs.
- **Persistent chrome**: header background moves from transparent → frosted glass as you scroll; chat FAB sits above everything.

---

## 7. Recreation Priorities (for a developer/agent building the redesign)

1. Set up the **token system** first (Tailwind + CSS vars, dark-only palette, single accent gradient reserved exclusively for highlights).
2. Load display + body font pairing, define the uppercase/tracked-out label style as a reusable class.
3. Build the **full-screen hamburger overlay nav** — the single most distinctive structural choice on the site (no persistent desktop nav bar at all).
4. Build the **marquee divider** component early — it's reused constantly as connective tissue between sections.
5. Add smooth scrolling, then layer scroll-linked animation for: hero scrub-fade, staggered card reveals, and the pinned Services sequence.
6. Standardize two corner-radius tokens: full-pill vs. soft-square — don't mix them arbitrarily.
7. Keep the **section-numbering + eyebrow** convention as the wayfinding system tying the one-page scroll narrative together.
