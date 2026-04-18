# RealEstate Pixel-Perfect Build Spec

## Purpose

Use this file as the single design and implementation specification for rebuilding the current `RealEstate` project from scratch as closely as possible.

This document is intentionally strict. If you want the rebuilt version to match the current project, do not improvise on colors, spacing, content, structure, naming, or behavior unless this file explicitly tells you to.

## Source Of Truth Order

Follow these rules in order:

1. The current React component structure is the main source of truth.
2. The current Tailwind utility values are the main source of truth for spacing, size, color, radius, and layout.
3. The global CSS in `src/index.css` and `src/App.css` is the main source of truth for body-level styling.
4. The hero section is the one exception: `src/Component/Hero.jsx` is only a placeholder, so the visual source of truth for that section is `public/hero-reference.png`.
5. If a value is unknown, keep it visually consistent with the existing palette, spacing rhythm, and card style used by the rest of the project.

## Project Type

- Single-page marketing landing page
- Real-estate themed brand presentation
- Built with React and Vite
- Styled with Tailwind CSS v4
- Uses `lucide-react` for iconography
- No router is currently implemented
- Navigation links are plain anchor tags

## Required Stack

Rebuild with these exact tools:

- React 19
- Vite 8
- Tailwind CSS 4 using `@tailwindcss/vite`
- ESLint 9
- `lucide-react`

Keep `react-icons` in dependencies only if you want to preserve package parity with the current project, even though it is not used in the current source files.

## Required Folder Structure

Create the project using this structure:

```text
RealEstate/
|-- public/
|   |-- favicon.svg
|   |-- hero-reference.png
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |   |-- logo_landscape_v2.png
|   |   `-- logo_white_bg.png
|   |-- Component/
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Services.jsx
|   |   |-- Testomonial.jsx
|   |   `-- Welcome.jsx
|   |-- Pages/
|   |   `-- Home.jsx
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package.json
|-- reference.md
`-- vite.config.js
```

Important constraints:

- Keep the folder name `Component`, not `Components`.
- Keep the file name `Testomonial.jsx` exactly as written if the goal is strict parity.
- Keep `Home.jsx` inside `src/Pages/`.

## Render Tree

The app renders in this order:

1. `src/main.jsx` mounts the app inside `#root`
2. `src/App.jsx` renders:
   - `Navbar`
   - `Home`
3. `src/Pages/Home.jsx` renders:
   - `Hero`
   - `Welcome`
   - `Services`

Do not add extra wrappers unless they are required by React.

## Global Rules

Apply these global rules exactly:

- Import Tailwind in `src/index.css` using `@import "tailwindcss";`
- Set `:root { color-scheme: light; }`
- Set `html { scroll-behavior: smooth; }`
- Set `body` margin to `0`
- Set `body` min-height to `100vh`
- Set `body` background to `#f7f8fc`
- Set `body` text color to `#0f172a`
- Set `body` font-family to `"Trebuchet MS", "Gill Sans", sans-serif`
- Set `* { box-sizing: border-box; }`
- Set `img { display: block; max-width: 100%; }`
- Set custom selection color to `rgba(96, 165, 250, 0.7)` with text color `#f8fafc`
- Set `#root { min-height: 100vh; }` in `src/App.css`

## Breakpoints

Use Tailwind default breakpoints. These are the only breakpoint behaviors currently expressed in the source:

- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`

Observed responsive behavior:

- Navbar switches from mobile menu to desktop menu at `lg`
- Welcome sections become 2-column layouts at `md`
- Mobile CTA buttons in navbar become a 2-column grid at `sm`

## Theme Tokens

### Core Backgrounds

- Page background: `#f7f8fc`
- Welcome section background: `#f3f4f6`
- Services section background: `#f4f7fb`
- Navbar background: `#232330` at `95%` opacity
- Mobile menu background: `#1d1f2c`
- White surfaces: `#ffffff`

### Brand And Accent Colors

- Primary blue: `#2e6cff`
- Primary blue hover: `#2457d4`
- Service gradient start: Tailwind `blue-600`
- Service gradient end: Tailwind `blue-500`
- Yellow accent button/highlight: Tailwind `yellow-400`
- Green accent text: Tailwind `green-600`
- Green process bullets: Tailwind `green-500`

### Text Colors

- Main body text: `#0f172a`
- Dark headline text: Tailwind `gray-800`
- Muted paragraph text: Tailwind `gray-500`
- Secondary meta text: Tailwind `gray-400`
- Desktop nav text: Tailwind `slate-200`
- Mobile menu text: Tailwind `slate-100`

### Border And Overlay Colors

- Navbar bottom border: `white/6`
- Mobile button border: `white/10`
- Mobile panel border: `white/8`
- Mobile link border: `white/6`
- Card gradient overlays: `from-black/60 to-transparent`

## Radius System

Keep these radii exactly where they appear:

- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- `rounded-2xl`
- `rounded-[18px]`
- `rounded-[20px]`
- `rounded-full`

Use the same radius on the same component type:

- Main cards: `rounded-2xl` or `rounded-[20px]`
- Buttons: `rounded-xl`, `rounded-md`, or `rounded-full` depending on the section
- Floating price circle: `rounded-full`

## Shadow System

Use these shadows exactly:

- Navbar shell: `shadow-[0_18px_48px_rgba(4,8,20,0.32)]`
- Navbar logo box: `shadow-[0_10px_24px_rgba(0,0,0,0.18)]`
- Welcome first card: `shadow-[0_20px_60px_rgba(0,0,0,0.08)]`
- Generic strong shadow: `shadow-xl`
- Button shadow: `shadow-md`
- Mobile menu panel: `shadow-2xl`

## Spacing System

Use the exact spacing already present in the code. The layout rhythm depends heavily on these values:

- Main section vertical padding: `py-20` or `py-24`
- Main content horizontal padding: `px-6`
- Navbar horizontal padding: `px-4`, `sm:px-6`, `lg:px-8`
- Large section gap: `gap-16`
- Component stack gap: `space-y-32`
- Service tab gap: `gap-4`
- Process stack gap: `space-y-6`
- Button group gap: `gap-3`
- Desktop nav gap: `gap-7`

Do not normalize these to a separate spacing scale. Match them literally.

## Typography Rules

### General

- Use the default font from the body unless a browser fallback is needed
- Keep headings bold to extra-bold
- Keep buttons uppercase where the source already uses uppercase text
- Preserve letter spacing values where explicitly defined

### Exact Sizes Found In Source

- Section labels: `text-xs`
- Small body text: `text-sm`
- Hero-like or major section titles: `text-4xl lg:text-5xl`
- Services main heading: `text-3xl`
- Service detail heading: `text-xl`
- Price text: `text-2xl`
- Mobile CTA text: `text-xs`
- Desktop CTA text: `text-[11px]`

### Tracking Values

- Desktop CTA buttons: `tracking-[0.34em]`
- Mobile CTA buttons: `tracking-[0.24em]`
- Services eyebrow label: `tracking-[0.3em]`
- Hero and welcome headings use `tracking-tight`

## Page Blueprint

The page should appear in this order:

1. Fixed dark navbar
2. Dark hero section based on `hero-reference.png`
3. Light welcome/about section
4. Light services section

The overall visual pattern is:

- Dark, premium intro at the top
- Soft light content blocks below
- Rounded cards
- Blue and yellow accent color system
- Heavy use of image cards and shallow depth shadows

## Navbar Spec

### Structure

- Position: fixed at top
- Width: full width using `inset-x-0 top-0`
- Layering: `z-50`
- Outer wrapper width: `w-[100%]`
- Main shell padding: `px-4 py-3`, `sm:px-6`, `lg:px-8`
- Main shell background: `bg-[#232330]/95`
- Add backdrop blur
- Add bottom border using `border-b border-white/6`

### Desktop Layout

- Left: logo inside white rounded box
- Center/right: nav links plus two CTA buttons
- The desktop action group only appears at `lg` and above
- Use `hidden ... lg:flex` for the desktop nav row

### Logo

- Use `src/assets/logo_landscape_v2.png`
- Wrap logo in a white card with:
  - `rounded-2xl`
  - `bg-white`
  - `px-2`
  - `py-1.5`
  - shadow `0 10px 24px rgba(0,0,0,0.18)`
- Logo image sizes:
  - mobile: `h-10`
  - `sm`: `h-11`
  - `lg`: `h-12`

### Nav Links

Use exactly these labels and href values:

- `Home` -> `/`
- `About Us` -> `/about`
- `Services` -> `/services`
- `Facilities` -> `/facilities`
- `Blog` -> `/blog`

Style:

- `text-sm`
- `font-medium`
- `text-slate-200`
- Hover text changes to pure white
- Horizontal gap: `gap-7`

### CTA Buttons

Desktop buttons:

- `CONTACT`
  - href: `/contact`
  - white background
  - dark text
  - `rounded-xl`
  - `px-5 py-2.5`
  - `text-[11px]`
  - `font-bold`
  - `tracking-[0.34em]`
- `VISIT NOW`
  - href: `/visit`
  - background `#2e6cff`
  - hover `#2457d4`
  - white text
  - same sizing as the contact button

### Mobile Menu

- Trigger button shows `Menu` icon when closed and `X` when open
- Icon size: `20`
- Button style:
  - `rounded-xl`
  - `border border-white/10`
  - `bg-white/5`
  - `p-3`
  - text white
  - hover `bg-white/10`
- Only visible below `lg`

Open state panel:

- Margin top: `mt-4`
- Radius: `rounded-[18px]`
- Background: `#1d1f2c`
- Padding: `p-4`
- Border: `border-white/8`
- Text color: white
- Shadow: `shadow-2xl`

Mobile links:

- Full-width block
- `rounded-xl`
- `border border-white/6`
- `bg-white/4`
- `px-4 py-3`
- `text-sm font-medium text-slate-100`
- Hover `bg-white/8`

Mobile CTA row:

- Top margin: `mt-4`
- Grid gap: `gap-3`
- Becomes 2 columns at `sm`

## Hero Spec

### Status

The coded `Hero.jsx` is only a placeholder and currently outputs the word `Hero`. For a real rebuild, use `public/hero-reference.png` as the visual source of truth.

### Visual Intent

The hero is a premium dark real-estate search banner with:

- A full-width dark blue-black gradient background
- The same top navbar style integrated visually into the hero
- Large left-aligned headline
- Accent blue brand word inside the headline
- Short supporting paragraph
- Three property mode options with icons
- A search input and search button
- A large building photo on the right with a rounded arch or capsule-shaped crop
- A floating badge near the top of the building image
- A vertical stack of 4 floating white option cards overlapping the building image

### Hero Background

Use a very dark gradient close to:

- left edge: deep navy / near-black
- center: slightly lighter charcoal-navy
- right edge: deep navy-black

Safe approximation:

- `from-[#090b1a]`
- `via-[#181a27]`
- `to-[#090b1a]`

The hero should feel darker than every section below it.

### Hero Height

Recommended visual target:

- Desktop hero minimum height: around `560px` to `640px`
- Content should sit below the fixed navbar without overlap issues
- Add top padding large enough to visually clear the navbar, around `pt-28` to `pt-32`

### Hero Layout

Desktop:

- Two-column layout
- Left content column: around `45%` to `50%`
- Right image column: around `50%` to `55%`
- Container max width should visually align with `max-w-7xl`
- Horizontal padding should match the navbar and page rhythm

Mobile:

- Stack content vertically
- Headline first
- Option icons second
- Search bar third
- Image last

### Hero Headline

Use this exact text from the reference image:

- Line 1: `Search And`
- Line 2: `Tour With`
- Line 3: `Ozalams`

Style intent:

- Very large, heavy weight
- White for the first two lines
- Bright blue for `Ozalams`
- Tight line-height
- Strong left alignment

### Hero Supporting Copy

Use this exact copy from the reference image:

`Get An In-Depth Look At What Your Monthly And Closing Costs Will Look Like Based On Your Financial Situation And Goals`

Style intent:

- Smaller than the headline
- Soft gray-white text
- Two-line paragraph on desktop
- Max width narrower than headline

### Property Mode Options

Create 3 icon options centered under the supporting text:

- `For Sale`
- `For Buy`
- `For Rent`

Style intent:

- White outlined or white icon style
- Icon above label
- Even horizontal spacing
- Keep labels in white or very light gray

If custom icons are unavailable, use line icons from `lucide-react` with a consistent white stroke weight.

### Search Bar

Create a large horizontal search field plus button:

- Left side: white rounded input field
- Placeholder text:
  - `Address, School, City, Zip or Neighborhood`
- Right side: strong blue button
- Button text: `SEARCH`
- Search module should look like a single joined control with a thick rounded outline
- Desktop width target: about `360px` to `420px`

### Building Image

The image should:

- Sit on the right side
- Be large and dominant
- Use a tall rounded crop, close to an arch or pill-top shape
- Show a blue-and-white apartment building
- Extend downward below the main hero baseline, like the reference image

### Floating Badge

Add a floating badge at the upper-left area of the building image:

- Label: `Super Sales`
- Background: white outer shell with blue inner face
- Rounded shape
- Small drop shadow

### Floating Action Cards

Place a vertical stack of 4 white floating cards on the right side of the building image.

Use these labels from the reference image:

- `Paid Patener Ship`
- `Best Tour It`
- `Get Down Payment`
- `Largest Rental`

Keep the spelling exactly as shown in the reference if strict reproduction is the goal.

Card style:

- White background
- Rounded corners
- Small blue icon block on the left
- Soft shadow
- Even vertical spacing

### Hero Implementation Constraint

If you need to decide between:

- matching the placeholder `Hero.jsx`
- matching `hero-reference.png`

choose `hero-reference.png`.

## Welcome Section Spec

### Outer Shell

- Background: `#f3f4f6`
- Vertical padding: `py-24`
- Content container: `max-w-7xl mx-auto px-6`
- Vertical spacing between the 3 major rows: `space-y-32`

### Row 1: Welcome Intro

Grid:

- `md:grid-cols-2`
- `gap-16`
- `items-center`

Left card:

- White background
- `rounded-2xl`
- `overflow-hidden`
- thin border
- shadow `0 20px 60px rgba(0,0,0,0.08)`
- Main image height: `280px`
- Main image should use `object-cover`

Image URL:

- `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvV4q9iiePxuUwQee-10F8ZTYa_vv16s5rw&s`

Card body:

- Padding: `p-6`
- Quote text:
  - `This is one of the most beautiful and functional interiors I've seen.`
- Quote style:
  - `text-sm`
  - `text-gray-500`
  - `leading-6`

Meta row:

- Margin top: `mt-5`
- Left text: `Sarah, Homeowner`
- Right text: `★★★★★`
- Left style: `text-xs text-gray-400`
- Right style: `text-sm text-yellow-400`

Right text block:

- Width cap: `max-w-lg`
- Heading:
  - `Welcome for`
  - line break
  - `Professionals`
- Heading style:
  - `text-4xl lg:text-5xl`
  - `font-extrabold`
  - `tracking-tight`
  - base color `text-gray-800`
  - highlight word `text-green-600`

Supporting copy:

- Margin top: `mt-6`
- `We specialize in helping forward-thinking individuals and companies elevate their spaces.`
- Style: `text-gray-500 leading-7`

Name line:

- Margin top: `mt-5`
- `Jimmy Kevaly CEO`
- Style: `font-semibold text-gray-700`

Button:

- Margin top: `mt-6`
- Text: `Read More →`
- Background: `yellow-400`
- Padding: `px-6 py-3`
- Radius: `rounded-md`
- Size: `text-sm`
- Weight: `font-semibold`
- Shadow: `shadow-md`
- Hover: slight scale up using `hover:scale-105`

### Row 2: Project Showcase

Grid:

- `md:grid-cols-2`
- `gap-16`
- `items-center`

Left copy block:

- Width cap: `max-w-lg`
- Heading:
  - `900+ Projects All`
  - line break
  - `Over the World`
- Style:
  - `text-4xl lg:text-5xl`
  - `font-extrabold`
  - `tracking-tight`
  - `text-gray-800`

Paragraph:

- `From New York to Tokyo, our portfolio spans continents and cultures.`
- `mt-6 text-gray-500 leading-7`

Button:

- Same style as the previous `Read More →` button

Right collage:

- Wrapper: `relative h-[320px]`
- Left big image:
  - `absolute left-0 top-0`
  - width `55%`
  - full height
  - `rounded-xl overflow-hidden`
  - label `Commercials`
  - label position `bottom-3 left-3`
  - label style `text-white font-semibold`
  - image URL:
    - `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6rZQPI77RSfzQh2KdwMf7c5F-lA8ghPIYw&s`
- Right top image:
  - `absolute right-0 top-0`
  - width `40%`
  - height `48%`
  - `rounded-xl overflow-hidden`
  - label `Residential`
  - label position `bottom-2 left-2`
  - label style `text-white text-xs`
  - source path `/residential.jpg`
- Right bottom image:
  - `absolute right-0 bottom-0`
  - width `40%`
  - height `48%`
  - `rounded-xl overflow-hidden`
  - label `Kitchen`
  - label position `bottom-2 left-2`
  - label style `text-white text-xs`
  - source path `/kitchen.jpg`
- All collage images use a black-to-transparent bottom overlay

Slider marker:

- `absolute bottom-[-35px] left-1/2 -translate-x-1/2`
- `flex items-center gap-2`
- left indicator bar: `w-10 h-[2px] bg-yellow-400`
- text: `1 2 3`
- text style: `text-xs text-gray-600`

### Row 3: Work Process

Grid:

- `md:grid-cols-2`
- `gap-16`
- `items-center`

Left image:

- Wrapper: `rounded-2xl overflow-hidden shadow-xl`
- Image height: `320px`
- Image URL:
  - `https://media.gettyimages.com/id/1146259061/photo/couple-buying-a-couch-at-a-home-improvement-store.jpg?s=612x612&w=gi&k=20&c=VJJsa8klIY-xTTAu6dSN0zFCjTywgEZ4N9YTuHpD0jA=`

Right block heading:

- `Our work process make your dream true`
- `text-4xl lg:text-5xl`
- `font-extrabold`
- `tracking-tight`
- `text-gray-800`

Steps wrapper:

- `mt-8 space-y-6`

Each step row:

- `flex gap-4 items-start`

Number bullet:

- `w-8 h-8`
- `rounded-full`
- `bg-green-500`
- `text-white`
- centered content
- `text-sm font-semibold`

Step content data:

1. Title: `900+ projects all over the world`
   Text: `We craft location-focused plans that match your market, timeline, and investment goals.`
2. Title: `Bespoke Design Tailored to You`
   Text: `From consultation to concept, every detail is aligned with your lifestyle and brand direction.`
3. Title: `From Sketch to Launch, We're With You`
   Text: `You stay informed through every stage with a practical roadmap and clear delivery flow.`

Step text styles:

- Title: `font-semibold text-gray-800`
- Paragraph: `text-gray-500 text-sm`

## Services Section Spec

### Outer Shell

- Background: `#f4f7fb`
- Vertical padding: `py-20`
- Container: `max-w-7xl mx-auto px-6`

### Heading Area

- Center aligned
- Bottom margin: `mb-12`

Eyebrow text:

- `SERVICES`
- `text-blue-500`
- `text-xs`
- `tracking-[0.3em]`
- `uppercase`

Main heading:

- `We Provide Service For You`
- `text-3xl`
- `font-bold`
- `text-gray-800`
- top margin: `mt-2`

### Service Tabs

- Wrapper: `flex flex-wrap justify-center gap-4 mb-12`
- Each card:
  - width `160px`
  - height `110px`
  - `flex flex-col justify-center items-center`
  - `rounded-lg`
  - `cursor-pointer`
  - animated with `transition-all duration-300`

Active tab:

- `bg-blue-600`
- `text-white`
- `shadow-xl`
- `scale-105`

Inactive tab:

- `bg-white`
- `text-gray-600`
- `shadow-sm`
- hover `shadow-md`

Icon:

- size `26`
- use `lucide-react`

Label:

- `text-xs mt-2 font-medium text-center px-2`

### Services Data

Default active tab index: `1`

This means the second item is selected on first render.

Use this exact service data:

1. `Carpet & Upholstery Cleaning`
   - icon: `Brush`
   - desc: `Remove 100% of your carpet dirt with our latest cleaning system. Deep cleaning with 6-12 months guarantee.`
   - price: `300`
   - image: `https://img.freepik.com/free-photo/business-couple-architectural-model_329181-19318.jpg?semt=ais_hybrid&w=740&q=80`
2. `Regular Domestic Cleaning`
   - icon: `Home`
   - desc: `Professional home cleaning services for daily hygiene and comfort.`
   - price: `250`
   - image: same as above
3. `Window Washing Wizards`
   - icon: `Sparkles`
   - desc: `Crystal clear window cleaning for homes and offices.`
   - price: `180`
   - image: same as above
4. `After Building Cleaning`
   - icon: `Building2`
   - desc: `Post construction cleaning to make your space ready to use.`
   - price: `400`
   - image: same as above
5. `Post-Construction Cleaning`
   - icon: `Paintbrush`
   - desc: `Deep cleaning after renovation or construction work.`
   - price: `350`
   - image: same as above

### Main Service Display

Wrapper:

- `relative flex items-center`

Left blue content panel:

- width `60%`
- `relative`
- text color white
- `p-12`
- radius `rounded-[20px]`
- `overflow-hidden`
- gradient background from `blue-600` to `blue-500`

Decorative curve:

- `absolute -right-32 top-0`
- width `400px`
- height `400px`
- white circle
- `rounded-full`
- `opacity-20`

Service title:

- `text-xl font-semibold mb-4`

Description:

- `text-sm leading-6 opacity-90 mb-8 max-w-md`

Price block:

- Wrapper: `flex items-center gap-6 mb-8`
- Circle:
  - `w-24 h-24`
  - `rounded-full`
  - `border-[3px] border-white`
  - centered content
- Price:
  - `text-2xl font-bold`
  - formatted as `$<price>`
- Label:
  - `text-xs`
  - exact text `From`

CTA button:

- Text: `LEARN MORE →`
- Background: `yellow-400`
- Text color: black
- `px-6 py-2`
- `rounded-full`
- `text-sm font-semibold`
- `shadow`
- hover `scale-105`

Right image:

- `absolute right-0`
- width `45%`
- height `360px`
- image fills frame
- `object-cover`
- radius `rounded-[20px]`

## Assets Spec

### Required Local Assets

Use these local assets:

- `src/assets/logo_landscape_v2.png` for the navbar logo
- `src/assets/logo_white_bg.png` keep in project for parity even if unused
- `public/favicon.svg`
- `public/hero-reference.png`
- `public/icons.svg`

### Missing Assets You Must Handle

These files are referenced by the current code but are not present:

- `/residential.jpg`
- `/kitchen.jpg`

If your goal is literal parity with the current codebase:

- keep these references exactly as-is

If your goal is a fully working visual rebuild:

- add files with those exact names into `public/`
- make them visually consistent with the collage

## Content Integrity Rules

Keep all text exactly as written, including imperfect grammar, if strict parity is the goal.

Examples that must remain unchanged:

- `We Provide Service For You`
- `Our work process make your dream true`
- `Jimmy Kevaly CEO`
- `Paid Patener Ship`
- `Best Tour It`

Do not silently correct spelling if you want the rebuild to match the source and reference.

## Interaction Rules

- Navbar mobile menu opens and closes with local React state
- Mobile toggle button changes icon from hamburger to close
- Service cards change the active service with local React state
- Default service is index `1`
- Buttons use subtle scale-up hover where already present
- Desktop nav links use a simple color transition on hover

Do not add extra animation libraries.

## Constraints You Must Not Break

- Do not add React Router
- Do not convert the layout into multiple pages
- Do not replace Tailwind with another styling system
- Do not change the brand color direction from blue/yellow/dark navy
- Do not flatten the rounded card language
- Do not replace the current typeface with a highly modern sans-serif if parity matters
- Do not remove the fixed navbar
- Do not move sections out of the order `Hero -> Welcome -> Services`
- Do not rename `Component` or `Testomonial.jsx` if exact project matching matters

## Build Order

If rebuilding from zero, use this order:

1. Initialize a Vite React app
2. Install Tailwind CSS v4 and `@tailwindcss/vite`
3. Install `lucide-react`
4. Configure `vite.config.js` with React and Tailwind plugins
5. Add global styles to `src/index.css`
6. Add `#root` min-height rule in `src/App.css`
7. Create the folder and file structure exactly as documented
8. Build `Navbar.jsx`
9. Build the hero from `hero-reference.png`
10. Build `Welcome.jsx`
11. Build `Services.jsx`
12. Wire `Home.jsx`, `App.jsx`, and `main.jsx`
13. Add local assets and resolve missing public image files if needed

## Acceptance Checklist

The rebuild is correct only if all of the following are true:

- The navbar is fixed and dark with the Rational logo on the left
- Desktop nav appears only at `lg` and above
- Mobile nav opens into a dark floating panel
- The hero visually matches `hero-reference.png`, not the placeholder component
- The welcome area contains 3 rows with the same text and card arrangement
- The project collage uses one large left image and two stacked right images
- The process row contains 3 numbered green circles
- The services section shows 5 tabs with the second tab active by default
- The blue service panel overlaps with the image panel on the right
- Colors, spacing, corner radii, and shadows match the values in this file
- The project still feels like the same premium real-estate landing page

## Known Gaps In The Current Source

These issues exist in the current project and should be preserved or consciously resolved:

- `Hero.jsx` is still a placeholder in code
- `Testomonial.jsx` exists but is empty and unused
- Some content mixes real-estate, interior, and cleaning-service language
- Two public images are referenced but missing
- The root README is generic and not project-specific

If the goal is a perfect recreation of the current project state, preserve those gaps.
If the goal is a perfect recreation of the intended design, resolve them without changing the visible style system.
