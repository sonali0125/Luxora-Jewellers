# Luxora Jewellers

A modern editorial luxury jewellery website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 18 (JSX only)
- Vite 6
- React Router 7
- Tailwind CSS 3
- Framer Motion
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — editorial hero, categories, mosaic grid, bestsellers |
| `/collections` | Full category grid + Pinterest mosaic + gallery |
| `/products` | All products grid |
| `/bridal` | Bridal collection + radial new collection showcase |
| `/about` | Brand story, gallery, testimonials |
| `/contact` | Store info, contact form, newsletter |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout, PageTransition
│   ├── sections/     # Homepage sections
│   └── ui/           # Button, TextLink, ScrollReveal
├── pages/            # Route pages
├── data/content.js   # Site content & images
├── App.jsx           # Router config
└── main.jsx
```

## Design

Editorial luxury aesthetic — beige tones, arched hero frames, circular category cards, 3×3 Pinterest mosaic, and smooth page transitions.
