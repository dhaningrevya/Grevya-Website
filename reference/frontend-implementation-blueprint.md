# Frontend Implementation Blueprint
### Derived from the premusion-design-spec.md UX/UI audit — for building an original site with equivalent quality

> Goal: reproduce the visual quality, layout language, interaction patterns, and UX principles of the reference in an **original** website. This is not a copy of the reference's source code — it's a design system and build plan informed by it.

---

## 1. Design Tokens

### 1.1 Color Tokens

```
/* Base surface scale — neutral, near-black (not pure #000) */
--color-bg:              #0a0a0a
--color-bg-elevated:     #131313   /* cards */
--color-bg-elevated-2:   #1a1a1a   /* nested cards / inputs */
--color-border:          rgba(255,255,255,0.10)
--color-border-strong:   rgba(255,255,255,0.18)

/* Text */
--color-text-primary:    #fafafa
--color-text-secondary:  #a1a1a1   /* muted-foreground */
--color-text-tertiary:   #6b6b6b   /* ghost numerals, faint marquee */

/* Brand accent — reserved, used sparingly */
--color-accent-start:    #fb923c   /* orange-400 */
--color-accent-mid:      #f97316   /* orange-500 */
--color-accent-end:      #ef4444   /* red-500 */
--gradient-accent:       linear-gradient(90deg, var(--color-accent-start), var(--color-accent-mid), var(--color-accent-end));
--color-accent-solid:    #f97316   /* buttons */
--color-accent-solid-hover: #ea580c

/* Feedback */
--color-danger:          #ff6568
--color-focus-ring:      var(--color-accent-mid)
```

**Rule to enforce:** accent color touches ≤10% of any given viewport. Everything else is grayscale. This is what makes the accent read as premium rather than garish.

### 1.2 Typography Tokens

```
--font-display: "Display Sans", ...system fallback   /* heavy geometric grotesque, own choice */
--font-body:    "Body Sans", ...system fallback       /* neutral workhorse sans */

--fs-hero:       clamp(2.75rem, 4vw + 1rem, 8.75rem)   /* fluid, ~44px → 140px */
--fs-h2:         clamp(2rem, 2.5vw + 1rem, 4rem)
--fs-h3:         clamp(1.5rem, 1.5vw + 1rem, 2.25rem)
--fs-body-lg:    1.125rem
--fs-body:       1rem
--fs-label:      0.75rem   /* eyebrow / uppercase micro-labels */

--fw-heading:    800–900
--fw-name:       400–500   /* team names — intentionally lighter than labels around them */
--fw-body:       400
--fw-label:      500

--lh-hero:       0.85
--lh-heading:    0.95
--lh-body:       1.5

--ls-hero:       -0.03em   /* tight */
--ls-label:      0.2em     /* wide, uppercase micro-labels */
```

### 1.3 Spacing Scale (4px base)

```
--space-1: 4px    --space-6: 24px    --space-11: 64px
--space-2: 8px    --space-7: 32px    --space-12: 80px
--space-3: 12px   --space-8: 40px    --space-13: 96px
--space-4: 16px   --space-9: 48px    --space-14: 128px
--space-5: 20px   --space-10: 56px   --space-15: 160px

--container-gutter: clamp(16px, 4vw, 48px)   /* horizontal page padding */
--section-gap-y: clamp(80px, 12vw, 160px)     /* vertical space between major sections */
```

### 1.4 Radii

```
--radius-sm:   8px    /* small chips */
--radius-md:   14px   /* cards, inputs, primary buttons */
--radius-lg:   24px   /* hero image tiles, large media cards */
--radius-full: 9999px /* pills: nav CTA, tags, social links */
```
Two-flavor rule: **pills** (`radius-full`) for tags/nav/secondary actions, **soft-square** (`radius-md`) for cards/inputs/primary CTA. Don't blend a third radius in.

### 1.5 Shadows

```
--shadow-card:      0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3);
--shadow-cta:        0 8px 24px rgba(0,0,0,0.35);
--shadow-cta-hover:  0 8px 24px rgba(249,115,22,0.25);   /* accent-colored glow, hover only */
--shadow-none:       none;   /* default state for most flat elements */
```
Shadows are used sparingly — rely mostly on **subtle borders + background-layer contrast**, not drop shadows, for depth. Reserve shadow-cta-hover for the primary submit button only.

### 1.6 Breakpoints

```
--bp-xs: 0px       /* mobile portrait */
--bp-sm: 640px     /* mobile landscape */
--bp-md: 768px     /* tablet */
--bp-lg: 1024px    /* small desktop */
--bp-xl: 1280px    /* desktop */
--bp-2xl: 1536px   /* large desktop */
--bp-3xl: 1920px   /* hero type scale caps out here */
```

---

## 2. Component Architecture

```
src/
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx              (logo + hamburger trigger, scroll-aware glass bg)
│  │  ├─ FullscreenNav.tsx       (overlay menu, portal-rendered)
│  │  ├─ Footer.tsx               (copyright + social pills)
│  │  └─ ChatFab.tsx              (fixed floating action button)
│  ├─ primitives/                 (dumb, reusable, no section knowledge)
│  │  ├─ Button.tsx               (variants: solid-light, solid-accent, ghost-pill)
│  │  ├─ Pill.tsx                 (tag/badge chip)
│  │  ├─ Eyebrow.tsx              (index number + label pairing)
│  │  ├─ GradientText.tsx         (accent gradient clip-text wrapper)
│  │  ├─ GhostNumeral.tsx         (oversized low-opacity background digit)
│  │  ├─ Card.tsx                 (base surface: bg-elevated + border + radius-md)
│  │  ├─ Input.tsx / Textarea.tsx / Select.tsx / Checkbox.tsx
│  │  └─ ArrowIcon.tsx            (out-link arrow used on contact rows/social pills)
│  ├─ motion/
│  │  ├─ Marquee.tsx              (infinite ticker, direction prop)
│  │  ├─ RevealOnScroll.tsx       (fade+translate wrapper, IntersectionObserver or GSAP)
│  │  ├─ ScrollProgressRail.tsx   (timeline vertical line + animated fill)
│  │  └─ SmoothScrollProvider.tsx (Lenis init + context)
│  └─ sections/
│     ├─ Hero.tsx
│     ├─ AboutStatement.tsx
│     ├─ TeamSection.tsx
│     ├─ IndustriesSection.tsx
│     ├─ ServicesSection.tsx
│     ├─ JourneyTimeline.tsx
│     └─ ContactSection.tsx
├─ lib/
│  ├─ animations.ts               (GSAP timeline factories, shared easing curves)
│  └─ constants.ts                (nav links, service data, timeline data as typed content)
└─ app/page.tsx                   (composes sections in order, wraps in SmoothScrollProvider)
```

**Principles:**
- `primitives/` know nothing about content — they're the design system.
- `sections/` own layout + content, compose primitives + motion wrappers.
- Content (team members, services, timeline entries, industries) lives in typed data arrays in `lib/constants.ts`, not hardcoded JSX — makes the whole page CMS-swappable later.
- One `Marquee` component reused as the divider between every section, parameterized by `words[]` and `direction`.

---

## 3. Page / Section Hierarchy

```
<html class="dark">
  <SmoothScrollProvider>
    <Header />                      – fixed, z-top
    <FullscreenNav />                – portal, hidden by default
    <ChatFab />                      – fixed, z-top

    <main>
      [Hero]                        – §001 (unlabeled, establishes brand)
      <Marquee />
      [AboutStatement]              – "who we are" mission block
      [TeamSection]                 – §002, includes Industries sub-block
      <Marquee reverse />
      [ServicesSection]             – §003, pinned card sequence
      <Marquee />
      [JourneyTimeline]             – §004
      <Marquee reverse />
      [ContactSection]              – §005, includes footer bar
    </main>
  </SmoothScrollProvider>
</html>
```

Numbering convention: keep the `[00X]` + eyebrow label on every major content section (skip it on Hero/About which serve as cold-open). This numbering is the site's primary wayfinding device on a single long-scroll page — treat it as a component (`<Eyebrow index="002" label="Team Members" />`), not inline text.

---

## 4. Component-by-Component Specifications

### 4.1 Header
- **Structure:** logo mark (left) + hamburger icon button (right), single row, `height: 80–96px`.
- **State A (top of page):** `background: transparent`, no border.
- **State B (scrolled > ~40px):** `background: var(--color-bg)/75%`, `backdrop-filter: blur(16px)`, `border-bottom: 1px solid var(--color-border)`. Transition over 200–300ms.
- **Z-index:** above all section content, below the fullscreen nav overlay.
- **A11y:** hamburger is a real `<button>` with `aria-expanded` + `aria-controls` pointing at the nav overlay id.

### 4.2 FullscreenNav (overlay menu)
- **Trigger:** hamburger click → overlay mounts/animates in (opacity + slight scale or slide, 250–400ms ease-out).
- **Layout:** full-viewport fixed panel, `background: var(--color-bg)` near-opaque, logo repeated top-left, close (✕) icon replaces hamburger top-right in the same coordinates (no layout jump).
- **Nav list:** vertical stack, large uppercase display-font links, generous `line-height`/`gap` (~64–80px per row on desktop), each link has a hover state (color shift, or an underline/slide-in accent) and staggers in on open (each item delayed ~40ms after the previous).
- **Close behavior:** click outside link area, ✕ button, `Escape` key, and clicking a link all close it (and the last one also navigates/scrolls).
- **Scroll lock:** `body` scroll locked while open.
- **Consistency:** same component/behavior at every breakpoint — do not swap in a different mobile drawer pattern.

### 4.3 Hero
- **Structure:** two-column grid (`~55/45`) at `lg+`; single column stack on `<lg`.
  - Left: decorative diagonal hatch mark (small, top-left, purely graphic), scattered particle dots (absolute-positioned, low-opacity, deterministic seed), two-line headline (line 1 plain, line 2 gradient — or vice versa, pick one consistent rule), one paragraph body copy (`max-width: ~42ch`), CTA row (solid pill + ghost pill).
  - Right: staggered collage of 4–6 media tiles (`radius-lg`), duotone/desaturated treatment, vertical offsets creating a masonry rhythm, bleeding past the viewport top/bottom edge.
  - Small rotated "SCROLL" label + vertical line, right edge, desktop only.
- **CTA row:** primary = solid light pill button with trailing arrow icon; secondary = ghost/text button with leading icon, no border or a very faint one.
- **Behavior:** as user scrolls past hero, headline/body/collage opacity scrubs down toward 0 (tie to scroll progress 0–1 over roughly the first viewport height), not a hard cutoff.

### 4.4 Marquee Divider
- **Structure:** single row, full-bleed width, list of uppercase keyword strings separated by a bullet dot, duplicated track laid end-to-end for seamless looping.
- **Style:** large display font, low-opacity gray (`color: var(--color-text-tertiary)`, ~30–40% opacity) — intentionally recedes, texture not CTA.
- **Animation:** CSS `@keyframes` `translateX(0) → translateX(-50%)`, `linear`, duration scaled to content length (~30–40s), `animation-direction: reverse` on alternating instances. Pause on hover optional (nice touch, not required).
- **A11y:** `aria-hidden="true"` — decorative only, don't let screen readers read it twice.

### 4.5 AboutStatement
- **Structure:** centered column, giant two-line statement (gradient), a card containing 2–3 sentence mission copy, a three-word tag row separated by `/`.
- **Card:** `Card` primitive — `bg-elevated`, `border`, `radius-md`, generous internal padding (`space-9`+).
- **Reveal:** fade + translateY(24px→0) on scroll-into-view, single trigger (not scrubbed).

### 4.6 TeamSection
- **Structure:** outer `Card` containing N sub-groups; each sub-group = numbered eyebrow (`01`, `02`…) + department label + list of `{name, role}` rows.
- **Row styling:** name in display/body font at ~28–32px normal weight, role directly beneath in `--fs-label` uppercase tracked gray.
- **Grouping divider:** thin horizontal rule or spacing gap between departments, no separate card-in-card border (avoid over-nesting shadows/borders).
- **Reveal:** stagger children (each row +60–80ms) as the section enters viewport.

### 4.7 IndustriesSection (sub-block, can live inside or after Team)
- **Structure:** label + flex-wrap row of `Pill` components.
- **Pill spec:** `radius-full`, `padding: 10px 20px`, `border: 1px solid var(--color-border)`, `background: var(--color-bg-elevated)`, uppercase `--fs-label`, hover → `border-color: var(--color-border-strong)` + subtle background lighten, 150ms transition.

### 4.8 ServicesSection
- **Structure:** eyebrow + intro copy + "scroll to explore" hint, then 3 full-bleed media cards.
- **Card spec:** `radius-lg`, `min-height: 90vh` (desktop) / `60vh` (mobile), background image `object-fit: cover`, bottom-anchored dark gradient scrim (`linear-gradient(to top, rgba(0,0,0,.85), transparent 50%)`), top-left "SERVICE" label, top-right year/index, bottom-left gradient title text.
- **Optional decoration:** floating glass icon chips (`backdrop-filter: blur`, `border`, `radius-sm`) scattered over one card for the "tech/digital" service — small square badges with a single icon each.
- **Pinning behavior (desktop only):** as the section scrolls, pin the section container and crossfade/slide between the 3 cards driven by scroll progress; release pin and resume normal scroll after card 3, followed by an "END" marker. **On mobile, disable pinning** — render as normal stacked full-bleed cards with standard scroll-reveal.

### 4.9 JourneyTimeline
- **Structure:** eyebrow + intro, then a vertical rail (line + dot markers) with N milestone cards to its right (desktop) / below (mobile).
- **Rail:** absolute-positioned vertical line inside a relatively-positioned wrapper; each milestone has a `dot` aligned to its card's vertical center. Rail fill (color from top to current scroll position) can be a `scaleY` on an overlay line driven by scroll progress — nice-to-have polish, not required for v1.
- **Card:** step number, large accent-colored year, one-sentence copy, small `Pill` tags, and a `GhostNumeral` (oversized, ~10–15% opacity, positioned absolute behind the text) for texture.
- **Reveal:** each entry fades/slides in independently as its dot enters the viewport center.

### 4.10 ContactSection + Footer
- **Structure:** two-zone — info list (email/phone/hours as label+value rows with an outbound arrow icon) above a `Send Us a Message` form card; footer bar below with copyright + social pills.
- **Form fields:** `Input`/`Select`/`Textarea` primitives share: `background: var(--color-bg-elevated)/50%`, `border: 1px solid var(--color-border)/50%`, `radius-md`, `padding: 14px 16px`, placeholder in `--color-text-secondary`/50%, `focus: border-color var(--color-accent-mid)` + optional focus ring glow.
- **Consent checkbox:** custom-styled square checkbox + inline text with two inline links (Privacy Policy / Terms) in accent color.
- **Submit button:** full-width, `height: 56px`, `radius-md`, `background: var(--color-accent-solid)`, `hover: background var(--color-accent-solid-hover)` + `shadow-cta-hover`, disabled state at 70% opacity + `cursor: not-allowed`.
- **Footer social row:** `Pill` variant with icon + label + outbound arrow, `radius-full`.

### 4.11 ChatFab
- Fixed `bottom: 24px; right: 24px`, circular, brand-colored, `z-index` above everything except modal overlays, subtle scale-up on hover, optional gentle pulse/breathe animation on idle (don't overdo it — one subtle loop, not a bounce).

---

## 5. Animation & Interaction Specifications

| Interaction | Trigger | Effect | Duration/Easing |
|---|---|---|---|
| Header glass-in | scroll > 40px | bg opacity + blur + border fade in | 250ms ease-out |
| Fullscreen nav open | hamburger click | overlay fade+scale in, links stagger in | 350ms ease-out, 40ms stagger |
| Hero content exit | scroll 0→100vh | opacity 1→0, translateY 0→-40px (scrubbed to scroll, not time-based) | linear scrub |
| Section heading reveal | element enters viewport (~20% visible) | opacity 0→1, translateY 24px→0 | 600ms ease-out, one-shot |
| List/card stagger | parent enters viewport | children reveal in sequence | 500ms ease-out, 60–80ms stagger |
| Marquee | always running | translateX loop | 30–40s linear, infinite |
| Services pin sequence | scroll through section (desktop) | pin container, crossfade/slide cards by scroll progress | scrubbed to scroll |
| Timeline rail fill | scroll through section | line scaleY or stroke-dashoffset progresses | scrubbed to scroll |
| Button hover (solid) | pointer hover | bg color shift + shadow glow | 200–300ms ease |
| Button hover (ghost/pill) | pointer hover | border/text color brighten | 150ms ease |
| Input focus | focus | border color → accent, optional glow ring | 150ms ease |
| Smooth scroll | all scroll input | inertial easing applied globally | ~1.2s duration, custom easing curve |

**Global rules:**
- Respect `prefers-reduced-motion`: disable scroll smoothing, marquee auto-play (or drastically slow it), scroll-scrub effects, and pin sequences — fall back to instant/CSS-only fades.
- Keep all scroll-triggered reveals **one-shot** (don't re-animate every time an element re-enters view) except the marquee and hero scrub, which are continuous/scroll-tied by design.
- Use a single shared easing token (e.g. `cubic-bezier(0.4, 0, 0.2, 1)`) across all hover/focus transitions for consistency.

---

## 6. Responsive Behavior Specifications

| Breakpoint | Header/Nav | Hero | Services | Timeline | Marquee |
|---|---|---|---|---|---|
| `<640px` | Hamburger + fullscreen overlay (unchanged) | Single column: image collage becomes a reduced-opacity full-width band above text; CTAs stack full-width | No pinning — cards stack normally, `min-height: 60vh` | Rail collapses to simple left-aligned line; cards full-width | Same, font-size scales down |
| `640–1024px` | Same nav pattern | Collage shrinks, may move above or beside text depending on available width | No pinning still (safer below 1024px) | Same as mobile, slightly more padding | Same |
| `≥1024px` | Same nav pattern | Full two-column split as designed | Pinning/scrub sequence enabled | Full two-column rail + card layout | Same |
| `≥1536px` | — | Hero type scale approaches max | Cards cap max-height so images don't distort | — | — |

**General responsive rules:**
- Container gutter uses `clamp()` so there's no jarring breakpoint jump in side padding.
- Disable expensive scroll-scrub/pin effects below `1024px` — use simple one-shot fades instead, both for performance (mobile GPUs) and because pinning on short mobile viewports feels janky.
- Touch targets (pills, nav links, form controls) must be ≥44px tall on touch devices regardless of the desktop's visual size.
- Test the fullscreen nav overlay specifically on short mobile viewports (e.g., landscape phone) — ensure the link list scrolls internally rather than overflowing off-screen.

---

## 7. Asset Requirements

| Asset | Spec | Notes |
|---|---|---|
| Logo (wordmark) | SVG, single accent letter as a separate `<tspan>`/`<path>` for gradient application | Should work standalone at 24px height (favicon-adjacent use) |
| Favicon / app icons | 32×32, 180×180 (apple-touch), 512×512 (PWA) | Derive from logo mark |
| Hero collage images | 4–6 images, portrait/landscape mix, min 1200px longest edge, desaturated/duotone pre-processed or via CSS `filter: grayscale(1) contrast(1.1)` | Own photography/stock — do not reuse source site's imagery |
| Service card images | 3 images, min 1920×1080, will be under a dark scrim so avoid overly bright/busy source images | |
| Team headshots (optional) | if adding photos later: square, consistent lighting/treatment | Reference site uses text-only team list — safe to start without photos |
| Icons | line-icon set (24px grid), consistent stroke width (~1.5–2px) — arrows, chevrons, social glyphs, service-category icons | Any open-source line-icon library (own selection, not copied) |
| Fonts | 1 heavy display family (variable, weights 700–900) + 1 neutral body family (variable, weights 400–600) | Self-host via `next/font` or `@font-face` with `font-display: swap` |
| Decorative particles | generate programmatically (absolute-positioned dots via JS/CSS, seeded random) rather than a static image | Keeps it crisp at all resolutions |
| Social icons | official brand SVG marks, used per each platform's brand guidelines | |

---

## 8. Recommended Implementation Order

1. **Foundation:** design tokens (colors, type, spacing, radii) as CSS variables + Tailwind config; global dark theme; font loading.
2. **Primitives:** `Button`, `Pill`, `Card`, `Eyebrow`, `GradientText`, form controls — build and visually verify each in isolation (Storybook or a scratch page) before touching layout.
3. **Layout shell:** `Header` (static state only), `Footer`, page container/grid system, `container-gutter` spacing.
4. **Static section layout (no motion):** build every section's HTML/CSS structure and responsive behavior with zero animation — get the layout language (hero split, card stacking, timeline rail, form) correct and responsive first.
5. **Content data layer:** wire real (placeholder) copy/images into `lib/constants.ts` and confirm sections render correctly with realistic content lengths (long names, long copy — stress-test the layout).
6. **Fullscreen nav overlay:** build interaction (open/close, focus trap, scroll lock) — this is complex enough to deserve its own pass.
7. **Smooth scroll:** integrate global scroll smoothing, verify it doesn't break native anchor links, forms, or accessibility.
8. **Scroll-triggered reveals:** add one-shot fade/stagger reveals to sections using an IntersectionObserver-based wrapper (simplest, most portable) — ship this before reaching for heavier scrub effects.
9. **Marquee component:** build and drop into all divider slots.
10. **Advanced scroll-scrub effects:** hero fade-out, Services pin/crossfade sequence, timeline rail fill — these are the highest-risk/highest-payoff items, do them last once everything else is stable, and gate them behind `prefers-reduced-motion` + viewport-width checks.
11. **Polish pass:** hover/focus states, button glow, transitions, favicon/meta, chat FAB.
12. **Performance + a11y audit:** Lighthouse, keyboard-nav through fullscreen menu and form, `prefers-reduced-motion` fallback verification, image optimization (`next/image`, responsive `sizes`).

---

## 9. Visual QA Checklist (implementation vs. reference)

**Color & Type**
- [ ] Background reads as near-black (`#0a0a0a`), not pure `#000`
- [ ] Accent gradient appears in ≤10% of any single viewport — never used as a full-section background
- [ ] Exactly two font families in use (display for headings/CTAs, body for text/labels)
- [ ] All headings/nav/buttons are uppercase; body copy is sentence case (no mixed casing rules)
- [ ] Micro-labels use wide letter-spacing (`~0.2em`) and small size (~12px) consistently everywhere they appear (eyebrows, form labels, contact labels)

**Layout**
- [ ] Hero is an asymmetric split, not a centered single column, at desktop widths
- [ ] Side gutter feels generous (~48px desktop) and scales down smoothly on mobile — no abrupt jump
- [ ] Every major section has a consistent `[00X] + eyebrow` marker, sequential and unbroken
- [ ] Vertical spacing between sections feels intentional/large, not cramped (compare against `--section-gap-y`)

**Components**
- [ ] Two distinct radius flavors present and applied consistently (full-pill vs. 14px-soft-square) — no third radius sneaking in
- [ ] Pills (tags, nav CTA, social links) share identical padding/border/hover treatment across all sections
- [ ] Form inputs match spec: translucent bg, hairline border, accent focus border, no native browser chrome visible
- [ ] Primary CTA shows the accent hover glow; secondary/ghost buttons do not

**Navigation**
- [ ] Hamburger → fullscreen overlay pattern is identical at every breakpoint (no alternate mobile drawer)
- [ ] Header transitions from transparent to frosted-glass smoothly on scroll, reverses cleanly on scroll-up
- [ ] Nav overlay traps focus, closes on Escape/backdrop/link-click, locks body scroll while open

**Motion**
- [ ] Marquee loops seamlessly (no visible jump/reset), alternating direction between adjacent strips
- [ ] Hero content visibly fades/moves as you scroll past it (scrubbed, not a hard cut)
- [ ] Section reveals fire once per element, not repeatedly on every scroll direction change
- [ ] Services section shows a distinct pinned/sequential feel on desktop; degrades to plain stacked scroll on mobile
- [ ] All transitions use a consistent easing curve; nothing feels linear/robotic on hover states
- [ ] `prefers-reduced-motion: reduce` disables smoothing, scrub effects, and marquee autoplay (or slows drastically)

**Responsive**
- [ ] No horizontal scrollbar at any breakpoint
- [ ] Touch targets ≥44px on mobile for all pills/buttons/links
- [ ] Hero collage/image handling looks intentional on mobile (not just a cropped desktop layout)
- [ ] Timeline rail and Services cards both have sensible, tested mobile fallbacks (not just "same as desktop but squished")

**Performance/Accessibility**
- [ ] Lighthouse performance ≥90 on the built page with real images
- [ ] Marquee text has `aria-hidden="true"`; decorative particles are non-interactive/`aria-hidden`
- [ ] Full keyboard navigation works: Tab through header → nav overlay → sections → form, no traps except the intentional nav-overlay focus trap
- [ ] Color contrast of body text and labels against `--color-bg` passes WCAG AA (verify muted-gray label color specifically, it's the riskiest one)
