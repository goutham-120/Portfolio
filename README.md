# Nagila Goutham — Portfolio

A modern, recruiter-focused portfolio built with React, Vite, and Tailwind CSS.

## Stack

- **React 18** + **Vite 5** — fast dev/build tooling
- **Tailwind CSS 3** — styling, with `class`-based dark mode
- **lucide-react** — general UI icons
- **react-icons** (Simple Icons set) — brand/technology logos in the Skills section

## Project Structure

```
portfolio/
├── public/
│   ├── Goutham_resume.pdf      ← your resume (already added)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          (scroll-spy active section highlighting)
│   │   ├── Hero.jsx            (typewriter subtitle, terminal glow)
│   │   ├── About.jsx
│   │   ├── Skills.jsx          (brand icons via react-icons)
│   │   ├── Projects.jsx        (scroll-reveal, border glow)
│   │   ├── Achievements.jsx    (count-up numbers on scroll)
│   │   ├── CurrentFocus.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── AuroraBackground.jsx (animated background, fixed behind all content)
│   │   ├── FadeUp.jsx           (shared scroll-reveal wrapper)
│   │   └── SectionHeading.jsx   (shared heading + accent underline)
│   ├── hooks/
│   │   ├── useInView.js         (IntersectionObserver scroll-reveal)
│   │   ├── useCountUp.js        (animated number counting)
│   │   └── useTypewriter.js     (cycling typed text)
│   ├── data.js                 ← all your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

## Running locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

## Resume: View & Download — already wired up, no extra steps needed

Your resume PDF is already placed at `public/Goutham_resume.pdf` (copied from
the file you uploaded). Anything inside the `public/` folder is copied as-is
into the final build and served from the site's root URL.

- **View** → opens `/Goutham_resume.pdf` in a new browser tab.
- **Download** → triggers a download named `Nagila_Goutham_Resume.pdf`.

**If you ever need to update your resume:**
1. Replace the file at `public/Goutham_resume.pdf` with your new PDF
   (keep the exact same filename), **or**
2. Use a different filename and update the `resumeFile` path in
   `src/data.js` (`personalInfo.resumeFile`).

No code changes are needed for a routine resume update — just swap the file.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B — GitHub + Vercel dashboard (recommended)**
1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**.
   - Build command: `npm run build` (auto-filled)
   - Output directory: `dist` (auto-filled)
4. Click **Deploy**.

The `vercel.json` included handles client-side routing rewrites (not strictly
required here since this is a single-page scroll site, but it's harmless and
future-proofs you if you add routes later).

## Editing content

Everything text-based — your intro, skills, project descriptions, links,
achievements, current focus — lives in **`src/data.js`**. Edit that one file
to update content without touching any component markup.

## Dark mode

Dark mode is implemented via Tailwind's `class` strategy. It defaults to the
visitor's OS preference and is toggleable via the sun/moon icon in the navbar;
the choice is remembered in `localStorage`.
