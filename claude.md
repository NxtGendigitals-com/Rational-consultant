# Rational Consultants — Claude Reference

## Overview

Multi-page marketing website for **Rational Consultants**, a property documentation and liaison firm in Bhopal, Madhya Pradesh. Built with React 19 + Vite 8, styled with Tailwind CSS v4, routed with React Router v6.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router v6 (`BrowserRouter` in `main.jsx`)
- `lucide-react` for icons
- `react-icons/fa6` for social icons in the footer
- ESLint 9

## Commands

```bash
npm run dev      # dev server — localhost:5173
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Project Structure

```text
src/
├── assets/
│   ├── logo_landscape_v2.png   # Navbar logo
│   ├── logo_footer.png         # Footer logo
│   ├── logo_no_bg.png
│   └── logo_white_bg.png
├── Component/
│   ├── Navbar.jsx              # Fixed top nav, mobile hamburger menu, active link highlight
│   ├── Hero.jsx                # Full-width split hero (text left, image right)
│   ├── AboutSection.jsx        # Company intro, stats grid, highlights
│   ├── Services.jsx            # Service cards + modal with per-service accent color
│   ├── ProjectSection.jsx      # Case study cards grid
│   ├── WorkProcessSection.jsx  # Step-by-step process with image
│   ├── Testomonial.jsx         # Client testimonials carousel with stats
│   ├── FAQSection.jsx          # Accordion FAQ
│   ├── ContactSection.jsx      # Contact form
│   ├── FooterSection.jsx       # Footer with React Router <Link> for internal nav
│   ├── AboutPageFeatureSection.jsx     # Used on About + WhyChooseUs
│   ├── AboutPageShowcaseSection.jsx    # Used on About page
│   ├── ContactHeroOverlaySection.jsx   # Hero banner used on inner pages
│   ├── TestimonialsContactCta.jsx      # CTA strip used on Testimonials page
│   ├── WhatMakesUsDifferentSection.jsx # Used on WhyChooseUs page
│   └── Welcome.jsx             # Legacy component — unused
├── Pages/
│   ├── Home.jsx         # Hero → About → Services → Projects → Process → Testimonials → FAQ → Contact → Footer
│   ├── About.jsx
│   ├── ServicesPage.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
├── styles/
│   ├── colors.css       # CSS custom properties (design tokens)
│   └── textSizes.css    # custom text-size-* via Tailwind @theme directive
├── App.jsx              # Routes + scroll-to-top on pathname change
├── App.css              # #root min-height, aboutMobileStripSlide keyframe
├── index.css            # Tailwind import + global resets
└── main.jsx             # React entry — BrowserRouter wraps App
```

## Routes

| Route | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | ServicesPage |
| `/why-choose-us` | WhyChooseUs |
| `/testimonials` | Testimonials |
| `/contact` | Contact |

## Design System

### Color Tokens (`src/styles/colors.css`)

| Token | Value | Purpose |
|---|---|---|
| `--color-primary` | `#123f72` | Buttons, icons, eyebrows, CTA backgrounds |
| `--color-primary-dark` | `#0f3460` | Hover on primary buttons |
| `--color-primary-light` | `#eef4fb` | Icon container fills, chip backgrounds |
| `--color-surface` | `#f7f8fc` | Page background |
| `--color-surface-soft` | `#f8fbfd` | Alternate section backgrounds |
| `--color-heading` | `#172033` | All section headings |
| `--color-body` | `#667085` | Paragraph text |
| `--color-border` | `#e2e8f0` | Card/section borders |
| `--color-star` | `#f59e0b` | Amber for review stars |

### Typography

Custom font-size tokens are defined in `src/styles/textSizes.css` using Tailwind's `@theme` directive. Use the `text-size-*` scale (e.g. `text-size-14`, `text-size-56`) rather than Tailwind's default `text-sm` / `text-5xl` etc.

### Standard Radii

| Context | Class |
|---|---|
| Section/feature cards | `rounded-[20px]` |
| Image containers | `rounded-[24px]` |
| Inline buttons | `rounded-[12px]` |
| Hero/CTA pill buttons | `rounded-full` |
| Icon containers | `rounded-[14px]` |

### Standard Section Padding

`py-20 sm:py-24` — applied to most sections. Some sections use `sm:pt-24 sm:pb-8` for tighter bottom spacing before the next section.

## Services Modal Pattern

`Services.jsx` renders 9 service cards. Each card opens a modal. The modal header gradient, feature icons, process step number circles, and CTA button all use the service's `accentColor` via inline styles. This means every modal has a unique color theme matching its icon.

Services and their accent colors:
- Building Permissions: `#123f72`
- NOC Services: `#cb3c34`
- Property Documentation: `#c28a17`
- Liaison Services: `#1e6f6a`
- Legal Consultation: `#5a3fa4`
- TNCP Approvals: `#ad4c19`
- Namantaran Services: `#214d78`
- Land Diversion: `#2d6b4a`
- Municipal Clearances: `#3b5ba5`

## Key Implementation Notes

- Internal navigation uses React Router `<Link>` — do not use `<a href>` for internal routes.
- `FooterSection.jsx` imports `{ Link }` from `react-router-dom` for its nav columns.
- The `aboutMobileStripSlide` keyframe animation is defined in `src/App.css` (not inline in the component).
- `pointer-events-none` must be applied to decorative absolute elements inside modals/overlays so they don't block click targets.
- `Welcome.jsx` is a legacy component — it is not imported anywhere and should not be modified.
- `AboutPageShowcaseSection.jsx` is currently unused in the routing/page tree.
