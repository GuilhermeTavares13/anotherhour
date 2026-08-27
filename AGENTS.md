# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

`anotherhour` is a personal productivity app for tracking focused hours. Users create projects, break them into items, and record time spent on each item.

## Repository Layout

Monorepo with two independent packages:

- `backend/` — Node.js + Express 5 + Sequelize + MySQL API (CommonJS, port 3000)
- `frontend/` — React 19 + TypeScript + Vite + Tailwind CSS 4 + shadcn/ui + Redux Toolkit (ESM, port 5173)

## Commands

### Backend (`cd backend`)

```bash
npm install   # install dependencies
npm start     # run with nodemon (requires MySQL + .env)
```

- No lint or test scripts are configured (vitest + supertest are installed but unused).
- Tables are created/synced automatically on startup via `sequelize.sync()` in `index.js` — do not add manual migrations.

### Frontend (`cd frontend`)

```bash
npm install
npm run dev     # Vite dev server
npm run lint    # ESLint
npm run build   # tsc -b && vite build
```

Run `npm run lint` and `npm run build` after making frontend changes.

## Environment

Backend requires `backend/.env` (gitignored — never commit it or read secrets into output):

```env
DATABASE_NAME=<mysql database>
DATABASE_LOGIN=<mysql user>
DATABASE_PASSWORD=<mysql password>
SECRETKEYJWT=<jwt secret>
```

MySQL must be running on `localhost`.

## Architecture Notes

### Backend

- `app.js` — Express app, route mounting only. `index.js` — model associations + server startup. Keep this split.
- Layers: `routes/` → `controllers/` → `models/`. Models use Sequelize; associations are declared in `index.js` with cascade deletes.
- Auth: JWT in the `Authorization` header, verified by `middleware/is-auth.js`. Passwords hashed with bcryptjs.
- Routes are mounted at `/user` (auth) and `/user/project` (projects).

### Frontend

- State: Redux Toolkit slices in `src/features/<name>/<name>Slice.ts`, registered in `src/store.ts`.
- The auth token is persisted to `localStorage['UserToken']` via a store subscription in `store.ts`.
- API calls use plain `fetch` with the base URL hardcoded to `http://localhost:3000` (see `src/utils/http.ts`).
- Path alias `@/` maps to `src/` — use it for imports.
- UI components live in `src/components/` (app + shadcn/ui); pages in `src/pages/`.

## Conventions

- Backend: CommonJS (`require`/`module.exports`), 2-space indentation, no comments unless asked.
- Frontend: TypeScript strict, ESLint flat config, follow existing shadcn/ui component patterns.
- Match the style of neighboring files before adding new code.
- README.md is the source of truth for the public API endpoint table — keep it in sync when adding or changing routes.
