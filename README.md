# anotherhour

A personal productivity app for tracking your focused hours. Create projects, break them down into items, and record the time you spend focusing on each one.

## Features

- User accounts with JWT-based authentication (24h tokens, bcrypt-hashed passwords)
- Manage projects per user
- Track focused time and completion status for each project item

## Tech Stack

| Layer    | Technologies                                                        |
| -------- | ------------------------------------------------------------------- |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, React Router |
| Backend  | Node.js, Express 5, Sequelize, MySQL, JWT (jsonwebtoken, bcryptjs)  |

## Project Structure

```
anotherhour/
├── backend/
│   ├── app.js              # Express app and route mounting
│   ├── index.js            # Entry point, model associations, server startup
│   ├── controllers/        # Request handlers (user, project)
│   ├── middleware/         # is-auth (JWT verification)
│   ├── models/             # Sequelize models (user, project, projectitem)
│   ├── routes/             # Route definitions
│   └── util/               # Database connection
└── frontend/
    └── src/
        ├── components/     # App + shadcn/ui components
        ├── pages/          # LoginPage, MainPage
        └── utils/          # HTTP helpers
```

## Getting Started

### Prerequisites

- Node.js
- MySQL running on `localhost`

### Backend

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in `backend/`:

   ```env
   DATABASE_NAME=your_database
   DATABASE_LOGIN=your_user
   DATABASE_PASSWORD=your_password
   SECRETKEYJWT=your_jwt_secret
   ```

3. Create the database in MySQL (tables are synced automatically on startup via `sequelize.sync()`).

4. Start the server (uses nodemon, listens on port 3000):

   ```bash
   npm start
   ```

### Frontend

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the Vite URL shown in the terminal (default: http://localhost:5173).

## API Endpoints

All project endpoints require a JWT sent via the `Authorization` header.

| Method | Endpoint                        | Auth | Description                |
| ------ | ------------------------------- | ---- | -------------------------- |
| POST   | `/user/create-user`             | No   | Register (name, email, password) |
| POST   | `/user/login`                   | No   | Login (email, password) → returns JWT |
| GET    | `/user/project/`                | Yes  | List all projects          |
| GET    | `/user/project/:id`             | Yes  | Get a single project       |
| POST   | `/user/project/create-project`  | Yes  | Create a project           |
| POST   | `/user/project/delete-project/:id` | Yes | Delete a project         |

## Data Model

- **User** — `id`, `name`, `email` (unique), `password` (bcrypt hash)
- **Project** — `id`, `name` → belongs to a User (cascade delete)
- **ProjectItem** — `id`, `name`, `timeFocused`, `completed` → belongs to a Project (cascade delete)

## Status

Work in progress — authentication and project management are in place; the main page UI is still being built out.
