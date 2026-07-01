# Suryanarayana S — Portfolio

A dark-themed, fully responsive React portfolio built for internship applications.

## Getting started

```bash
npm install
npm start      # runs the dev server at http://localhost:3000
npm run build  # creates an optimized production build in /build
```

This project is set up with Create React App (`react-scripts`), so no extra
tooling is required.

## Before you deploy

Open `src/data/socialLinks.js` and replace the three placeholder values —
GitHub URL, LinkedIn URL, and email address — with your real ones. If you
want the Resume button to open a PDF, drop the file into `/public` (e.g.
`public/resume.pdf`) and keep the path as `/resume.pdf`, or replace it with
a hosted URL.

These are the **only** placeholders in the project; every other piece of
content (projects, skills, education, etc.) is already filled in.

## Folder structure

```
src/
├── data/
│   ├── portfolioData.js   # All site content: profile, projects, skills, education, interests
│   └── socialLinks.js      # GitHub / LinkedIn / email / resume — fill these in
├── hooks/
│   ├── useRevealOnScroll.js  # Fade-up reveal animation on scroll (IntersectionObserver)
│   └── useScrollSpy.js       # Tracks the active section for the navbar highlight
├── components/
│   ├── Navbar/      # Sticky nav, scroll-spy active link, mobile drawer menu
│   ├── Hero/         # Name, title, description, CTA buttons, decorative panel
│   ├── About/
│   ├── Projects/     # Projects.jsx (grid) + ProjectCard.jsx (single card)
│   ├── Skills/        # Grouped skill badges
│   ├── Education/
│   ├── Interests/
│   ├── Contact/
│   └── Footer/
├── App.jsx            # Assembles all sections in order
└── index.css          # Design tokens (colors, type, spacing) + global resets
```

Each component folder contains its own `.jsx` and `.css` file, so styles
stay scoped to the component they belong to. Shared values (colors, fonts,
spacing, button styles) live in `index.css` as CSS custom properties so the
whole theme can be adjusted from one place.
