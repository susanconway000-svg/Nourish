# Haus of Sol Artistry

Free crochet pattern site — browse, search, and print original patterns organized by
category and skill level, with favorites saved locally in your browser.

## Stack

React + TypeScript + Vite, Tailwind CSS v4, React Router. No backend — pattern data lives
in `src/data/patterns.ts` and favorites persist to `localStorage`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Outputs a static site in `dist/` that can be deployed anywhere (Netlify, Vercel,
Cloudflare Pages, GitHub Pages).

## Adding a pattern

Add a new entry to the `patterns` array in `src/data/patterns.ts` following the `Pattern`
type in `src/data/types.ts`. Each pattern needs a unique `id` and `slug`.
