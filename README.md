# Rational Consultants — Website

Marketing website for **Rational Consultants**, a property documentation and liaison firm based in Bhopal, Madhya Pradesh. The site presents services, process, testimonials, and contact information for homeowners, builders, and investors seeking permission and documentation support.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router v6
- `lucide-react` for icons
- `react-icons` (fa6) for social icons in the footer
- ESLint 9

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (localhost:5173)
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run ESLint
```

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, About, Services, Projects, Process, Testimonials, FAQ, Contact, Footer |
| `/about` | About | Company story, feature highlights, showcase |
| `/services` | ServicesPage | Full services listing with hero |
| `/why-choose-us` | WhyChooseUs | Differentiators, features, CTA |
| `/testimonials` | Testimonials | Client reviews, process, contact CTA |
| `/contact` | Contact | Hero overlay + contact form |

## Project Structure

```text
src/
├── assets/
│   ├── logo_landscape_v2.png   # used in Navbar
│   ├── logo_footer.png         # used in FooterSection
│   ├── logo_no_bg.png
│   └── logo_white_bg.png
├── Component/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── Services.jsx
│   ├── ProjectSection.jsx
│   ├── WorkProcessSection.jsx
│   ├── Testomonial.jsx
│   ├── FAQSection.jsx
│   ├── ContactSection.jsx
│   ├── FooterSection.jsx
│   ├── AboutPageFeatureSection.jsx
│   ├── AboutPageShowcaseSection.jsx
│   ├── ContactHeroOverlaySection.jsx
│   ├── TestimonialsContactCta.jsx
│   ├── WhatMakesUsDifferentSection.jsx
│   ├── WorkProcessSection.jsx
│   └── Welcome.jsx             # legacy, unused
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── ServicesPage.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
├── styles/
│   ├── colors.css              # CSS custom properties (design tokens)
│   └── textSizes.css           # custom text-size-* Tailwind tokens
├── App.jsx                     # router setup, scroll-to-top on route change
├── App.css                     # #root min-height + keyframe animations
├── index.css                   # Tailwind import, global resets
└── main.jsx                    # React entry point with BrowserRouter
```

## Design Tokens

All core design values live in `src/styles/colors.css` as CSS custom properties:

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#123f72` | Buttons, icons, accents, eyebrows |
| `--color-primary-dark` | `#0f3460` | Hover state for primary buttons |
| `--color-primary-light` | `#eef4fb` | Icon container fills |
| `--color-surface` | `#f7f8fc` | Page background |
| `--color-surface-soft` | `#f8fbfd` | Alternate section backgrounds |
| `--color-heading` | `#172033` | All headings |
| `--color-body` | `#667085` | Paragraph text |
| `--color-border` | `#e2e8f0` | Card and section borders |
| `--color-star` | `#f59e0b` | Review star rating color |

Custom font-size tokens (`text-size-10` through `text-size-74`) are defined in `src/styles/textSizes.css` via the Tailwind `@theme` directive.

## Services

The Services section (`Services.jsx`) renders 9 service cards. Each service has its own `accentColor` used to theme the modal header gradient, feature icons, process step indicators, and the CTA button inside the modal:

- Building Permissions — `#123f72` (navy blue)
- NOC Services — `#cb3c34` (red)
- Property Documentation — `#c28a17` (gold)
- Liaison Services — `#1e6f6a` (teal)
- Legal Consultation — `#5a3fa4` (purple)
- TNCP Approvals — `#ad4c19` (burnt orange)
- Namantaran Services — `#214d78` (steel blue)
- Land Diversion — `#2d6b4a` (forest green)
- Municipal Clearances — `#3b5ba5` (indigo blue)
