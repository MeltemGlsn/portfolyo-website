# Meltem Gülşen — Portfolio

Personal portfolio site built with React, React Router and Tailwind CSS. Showcases my background, skills and projects as a frontend developer.

**Live demo:** _add your deployed URL here (e.g. Vercel/Netlify) once published_

## Tech Stack

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling, with class-based dark mode
- [Vite](https://vitejs.dev/) for tooling and dev server

## Features

- Home, About, Skills, Projects and Contact pages
- Light/dark mode toggle (persisted to `localStorage`)
- Project cards driven by [`src/data/projects.json`](src/data/projects.json)
- Skill cards driven by [`src/data/skills.json`](src/data/skills.json)

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Available Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project Structure

```
src/
  components/   Reusable UI components (Header, Footer, cards, etc.)
  pages/        Route-level pages (Home, About, Skills, Projects, Contact)
  data/         JSON content for skills and projects
  assets/       Images and icons
```

## Contact

- Email: meltemglseen@gmail.com
- GitHub: [github.com/MeltemGlsn](https://github.com/MeltemGlsn)
