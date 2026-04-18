# RealEstate Project Reference

## Overview

This project is a single-page real estate landing page built with React and Vite. It uses Tailwind CSS v4 for styling and `lucide-react` for iconography. The current implementation focuses on a marketing homepage composed of a fixed navigation bar and three main content sections.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- ESLint 9
- `lucide-react`
- `react-icons` listed as a dependency but not currently used in the source files

## Available Commands

Run these commands from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

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

## Application Flow

The render flow is:

1. `src/main.jsx` mounts React into `#root`.
2. `src/App.jsx` renders `Navbar` and `Home`.
3. `src/Pages/Home.jsx` renders the main page sections in order:
   - `Hero`
   - `Welcome`
   - `Services`

## Component Reference

### `Navbar.jsx`

- Fixed header positioned at the top of the page.
- Uses a local logo image from `src/assets/logo_landscape_v2.png`.
- Provides desktop navigation links and two call-to-action buttons.
- Includes a mobile menu powered by React `useState`.
- Uses `Menu` and `X` icons from `lucide-react`.

Current nav links:

- Home
- About Us
- Services
- Facilities
- Blog

Current CTA links:

- `/contact`
- `/visit`

Note: these are standard anchor links to routes that are not currently implemented in this project.

### `Hero.jsx`

- Present in the page layout but currently only renders the text `Hero`.
- This file appears to be a placeholder for a future hero/banner section.

### `Welcome.jsx`

This component renders three content blocks:

1. A welcome/introduction section with a testimonial-style card and a highlighted "Professionals" heading.
2. A project showcase section with mixed image cards and category labels such as "Commercials", "Residential", and "Kitchen".
3. A process section that maps over `processSteps` to display three numbered steps.

Implementation notes:

- Several images are loaded from external URLs.
- Two images are referenced as `/residential.jpg` and `/kitchen.jpg`, but those files are not present in the current `public/` directory.
- Some `<img>` elements do not include `alt` text, which is a possible accessibility improvement area.

### `Services.jsx`

- Renders a services section with selectable cards/tabs.
- Uses local state to track the active service.
- Displays the selected service title, description, price, and image.
- Uses `lucide-react` icons for each service card.

Current services include:

- Carpet & Upholstery Cleaning
- Regular Domestic Cleaning
- Window Washing Wizards
- After Building Cleaning
- Post-Construction Cleaning

Observation: the service copy describes cleaning services rather than real estate offerings, so the content may still be placeholder data.

### `Testomonial.jsx`

- The file exists but is currently empty.
- It is not imported into the current application.
- The file name appears to contain a spelling issue and may have been intended as `Testimonial.jsx`.

## Styling Reference

### Global Styles

`src/index.css` sets:

- Tailwind CSS import
- light color scheme
- smooth scrolling
- body background and text color
- global box sizing
- responsive image defaults
- custom text selection colors

`src/App.css` only ensures `#root` has a minimum height of `100vh`.

### Design Characteristics

- Light gray page background
- Dark fixed navigation bar
- Blue accent color used in service cards and action buttons
- Yellow accent color used in buttons and highlights
- Large rounded corners and shadow-heavy card styling

## Assets Reference

### Local Assets

- `src/assets/logo_landscape_v2.png`
- `src/assets/logo_white_bg.png`
- `public/favicon.svg`
- `public/hero-reference.png`
- `public/icons.svg`

### Missing or Unused References

- `/residential.jpg` is referenced but not found
- `/kitchen.jpg` is referenced but not found
- `public/hero-reference.png` exists but is not used in the current source files
- `src/assets/logo_white_bg.png` exists but is not used in the current source files

## Configuration Reference

### `package.json`

Scripts:

- `dev`: start the Vite development server
- `build`: build the project for production
- `lint`: run ESLint
- `preview`: preview the production build locally

### `vite.config.js`

The Vite config enables:

- React plugin
- Tailwind CSS Vite plugin

## Current Gaps

- The root `README.md` is still the default Vite template and does not describe this app.
- `Hero.jsx` is a placeholder.
- `Testomonial.jsx` is empty and unused.
- Some linked routes are not implemented.
- Some referenced images are missing from the repository.
- Content is partially mixed between real estate, interiors, and cleaning services.

## Suggested Next Steps

1. Replace the placeholder `Hero.jsx` with a full landing hero section.
2. Align the service content with the project's real estate theme.
3. Add the missing local images or update the references.
4. Either implement the linked routes or convert the nav to in-page anchors.
5. Replace the default `README.md` with project-specific documentation.
6. Remove or complete `Testomonial.jsx`.
