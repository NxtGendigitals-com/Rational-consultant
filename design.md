# Rational Consultants — Design Specification

Current design system for the Rational Consultants website. Use this as the reference when building new components or modifying existing ones.

## Brand

- **Company:** Rational Consultants
- **Location:** Bhopal, Madhya Pradesh
- **Business:** Property documentation, building permissions, NOC applications, authority liaison
- **Tone:** Professional, trustworthy, structured — not flashy or luxury

## Color System

All tokens are defined in `src/styles/colors.css`.

| Role | Value | Where |
|---|---|---|
| Primary | `#123f72` | Buttons, icons, eyebrows, active states |
| Primary dark | `#0f3460` | Hover on primary buttons |
| Primary light bg | `#eef4fb` | Icon container fills, chip/badge backgrounds |
| Page surface | `#f7f8fc` | Body background |
| Soft surface | `#f8fbfd` | Alternate section backgrounds (e.g. `AboutPageFeatureSection`) |
| Heading text | `#172033` | All `<h1>`–`<h4>` elements |
| Body text | `#667085` | Paragraphs, descriptions |
| Muted text | `#80899a` | Secondary labels inside cards |
| Border | `#e2e8f0` | Card borders, section dividers |
| Star / amber | `#f59e0b` | Review star ratings |
| White | `#ffffff` | Card surfaces, overlays |

### Service Accent Colors (modal theming)

Each service in `Services.jsx` has a unique accent color applied to its modal gradient, icons, step numbers, and CTA:

| Service | Accent |
|---|---|
| Building Permissions | `#123f72` |
| NOC Services | `#cb3c34` |
| Property Documentation | `#c28a17` |
| Liaison Services | `#1e6f6a` |
| Legal Consultation | `#5a3fa4` |
| TNCP Approvals | `#ad4c19` |
| Namantaran Services | `#214d78` |
| Land Diversion | `#2d6b4a` |
| Municipal Clearances | `#3b5ba5` |

## Typography

Custom scale defined in `src/styles/textSizes.css` using `@theme`. Always use `text-size-*` — do not mix with Tailwind's default `text-sm` / `text-xl` etc.

### Scale Reference

| Class | Approx size |
|---|---|
| `text-size-11` | 11px |
| `text-size-12` | 12px |
| `text-size-13` | 13px |
| `text-size-14` | 14px |
| `text-size-15` | 15px |
| `text-size-16` | 16px |
| `text-size-17` | 17px |
| `text-size-18` | 18px |
| `text-size-20` | 20px |
| `text-size-22` | 22px |
| `text-size-24` | 24px |
| `text-size-28` | 28px |
| `text-size-30` | 30px |
| `text-size-34` | 34px |
| `text-size-36` | 36px |
| `text-size-40` | 40px |
| `text-size-44` | 44px |
| `text-size-46` | 46px |
| `text-size-52` | 52px |
| `text-size-56` | 56px |

### Typography Roles

| Role | Classes |
|---|---|
| Page hero heading | `text-size-34 sm:text-size-40 md:text-size-44 lg:text-size-56` |
| Section heading | `text-size-36 sm:text-size-40 lg:text-size-46` — `font-semibold tracking-[-0.04em] text-[#172033]` |
| Section eyebrow | `text-size-12 font-semibold uppercase tracking-[0.24em] text-[#123f72]` |
| Body / description | `text-size-16 leading-6 sm:text-size-17 text-[#667085]` |
| Card heading | `text-size-18 font-semibold tracking-[-0.03em] text-[#172033]` |
| Card body | `text-size-15 leading-7 text-[#667085]` |
| Stat number | `text-size-42 font-semibold leading-none tracking-[-0.05em]` |
| Stat label | `text-size-12 font-semibold uppercase tracking-[0.18em]` |

## Spacing

### Section Padding

- Standard: `py-20 sm:py-24`
- Sections with tight bottom (before another section): `sm:pt-24 sm:pb-8`
- Inner pages hero area: `pt-20 sm:pt-22 lg:pt-24`

### Container

All sections use: `mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8`

### Grid Gaps

- Two-column sections: `gap-10 lg:gap-14`
- Card grids: `gap-4` or `gap-5`

## Border Radius

| Component | Class |
|---|---|
| Feature/stat cards | `rounded-[20px]` |
| Image containers | `rounded-[24px]` or `rounded-[28px]` |
| Icon containers | `rounded-[14px]` or `rounded-[16px]` |
| Inline CTA buttons | `rounded-[12px]` or `rounded-[14px]` |
| Pill/hero CTA buttons | `rounded-full` |
| Navbar logo box | `rounded-2xl` |
| Modal | `rounded-[24px]` |

## Shadows

| Use | Value |
|---|---|
| Cards | `shadow-[0_10px_24px_rgba(12,20,36,0.06)]` |
| Floating overlays | `shadow-[0_8px_18px_rgba(18,63,114,0.18)]` |
| Images | `shadow-[0_10px_24px_rgba(4,12,30,0.16)]` |
| FAQ items | `shadow-[0_10px_24px_rgba(25,20,45,0.04)]` |

## Component Patterns

### Eyebrow + Heading + Description

```jsx
<p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#123f72]">
  Eyebrow Label
</p>
<h2 className="mt-4 text-size-36 font-semibold leading-none tracking-[-0.05em] text-[#172033] sm:text-size-40 lg:text-size-46">
  Section Heading
</h2>
<p className="mt-3 max-w-[720px] text-size-16 leading-6 text-[#667085] sm:text-size-17">
  Description text.
</p>
```

### Primary Button

```jsx
<a href="/contact" className="inline-flex items-center gap-2 rounded-[14px] bg-[#123f72] px-6 py-3.5 text-size-15 font-semibold text-white transition hover:bg-[#0f3460]">
  Button Label
  <ArrowRight size={18} />
</a>
```

### Outline Button

```jsx
<a href="/about" className="inline-flex items-center justify-center rounded-[12px] border border-[#d5d9e2] bg-white px-6 py-3.5 text-size-17 font-semibold text-[#1b2230] transition hover:bg-[#123f72] hover:text-white">
  Button Label
</a>
```

### Icon Container

```jsx
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4fb] text-[#123f72]">
  <Icon size={20} />
</div>
```

### Stat Badge (floating overlay on images)

```jsx
<div className="absolute bottom-6 left-6 rounded-[20px] bg-[#123f72] px-6 py-5 text-white shadow-[0_8px_20px_rgba(18,63,114,0.2)]">
  <p className="text-size-28 font-semibold leading-none tracking-[-0.05em]">1000+</p>
  <p className="mt-1 text-size-12 font-semibold uppercase tracking-[0.18em] text-[#d7e4ff]">Projects Assisted</p>
</div>
```

## Navbar

- Background: `bg-[#0d1a2e]/95 backdrop-blur-md`
- Logo: `src/assets/logo_landscape_v2.png` in white card (`bg-white rounded-2xl`)
- Nav links: `text-size-14 font-medium text-[#c8d4e6]`, hover `text-white`
- CTA button: `bg-[#123f72]` / hover `bg-[#0f3460]`, `rounded-[10px]`
- Mobile menu: dark panel `bg-[#0d1a2e]`, links `rounded-[10px] bg-white/5`
- Active route: `text-white font-semibold` (passed as `activeHref` prop from `App.jsx`)
- Internal links use `<Link>` from `react-router-dom`

## Hero Section (Home)

- Background: dark navy with gradient overlay + building image
- Primary color: `#123f72`
- Layout: two-column at `lg`, stacked below
- Left: heading + description (no CTA buttons — clean)
- Right: image in rounded card (`rounded-[22px]`)
- Heading: `text-size-34 sm:text-size-40 md:text-size-44 lg:text-size-56`
- At `md` breakpoint the text column uses `md:max-w-full` to fill horizontal space

## Inner Page Heroes

All inner pages (About, Services, WhyChooseUs, Testimonials, Contact) use `ContactHeroOverlaySection.jsx` as their hero banner with consistent blur orb positioned at `-left-24 bottom-[-80px]`.

## Footer

- Logo: `src/assets/logo_footer.png`, wrapped in `<Link to="/">` for home navigation
- All nav links use `<Link to={href}>` from React Router (not `<a href>`)
- Social links remain as `<a href>` since they point to external URLs

## Animations

The `aboutMobileStripSlide` keyframe is defined in `src/App.css`. It slides a mobile strip badge left-to-right in the About section on small screens.

## Known Legacy / Unused

- `Welcome.jsx` — legacy component, not imported anywhere
- `AboutPageShowcaseSection.jsx` — not currently used in any page
- `Testomonial.jsx` — filename has a typo; keep as-is for import compatibility
