# Anagha Roy — Portfolio

A personal portfolio site built with Next.js (App Router) and Tailwind CSS.

## Overview

Single-page portfolio covering:
- Hero introduction
- About
- Featured projects (Sandra's Art, CareerQuest) with problem / contribution / stack / GitHub link
- Skills, grouped by category
- Education
- Contact

All content is based on the actual resume — no invented achievements, metrics, or experience.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- Plain JavaScript (no TypeScript, no extra UI libraries) — kept intentionally simple to run and edit

## Local Installation

Requires [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To build a production version:

```bash
npm run build
npm start
```

No API keys or environment variables are required — this site is fully static content.

## Deploying

1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), create a new project, and import that GitHub repo.
3. Vercel will auto-detect Next.js — leave the default build settings and click **Deploy**.
4. Once deployed, you'll get a live URL you can add to your resume, LinkedIn, and job applications.

## Customizing the Content

All editable content lives in **`app/page.js`** at the top of the file, in three arrays:

- `projects` — add/edit/remove project entries (name, tagline, problem, contribution bullets, tech stack, GitHub link)
- `skillGroups` — add/edit/remove skill categories and items
- `education` — add/edit/remove education entries

The hero text, About paragraph, and contact details are further down in the same file, written directly into the JSX — search for your name or email to find them quickly.

To change the color palette or fonts, edit **`tailwind.config.js`** (the `colors` and `fontFamily` sections) and **`app/globals.css`**.

## Project Structure

```
.
├── app/
│   ├── layout.js       # Root layout + page metadata
│   ├── page.js         # All page content and sections
│   └── globals.css     # Global styles, color tokens, animation
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```
