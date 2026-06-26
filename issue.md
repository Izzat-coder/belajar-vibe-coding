# Project Implementation Plan: ElysiaJS + Drizzle + MySQL with Bun

This document outlines the high-level steps to bootstrap a new backend project using Bun, ElysiaJS, and Drizzle ORM with MySQL. 

## 1. Project Initialization
- Initialize a new Bun project in the root directory.
- Ensure standard project files (`package.json`, `tsconfig.json`) are generated.

## 2. Dependencies Setup
Install the necessary dependencies using Bun:
- **Framework:** `elysia`
- **ORM:** `drizzle-orm`
- **Database Driver:** `mysql2`
- **Dev Tools:** `drizzle-kit` (as a development dependency)

## 3. Environment & Database Configuration
- Setup a MySQL database (local or remote).
- Create a `.env` file to store environment variables.
- Add the `DATABASE_URL` connection string to the `.env` file.

## 4. Drizzle ORM Configuration
- Create a Drizzle configuration file (`drizzle.config.ts`) pointing to your schema and database connection string.
- Create a schema definition file (e.g., `src/db/schema.ts`) and define a basic initial table (e.g., a `users` table) for testing.
- Create a database connection file (e.g., `src/db/index.ts`) that initializes the Drizzle instance with the MySQL driver.

## 5. ElysiaJS Application Setup
- In the main entry file (`src/index.ts`), initialize the Elysia application.
- Connect the database instance to the application.
- Create a basic health-check route (e.g., `GET /` returning "OK").
- (Optional) Create a simple route to verify database read/write using the schema defined earlier.
- Start the server on an appropriate port (e.g., 3000).

## 6. NPM Scripts
Add the following utility scripts to `package.json`:
- `dev`: To run the server with hot-reload (e.g., using `bun --watch`).
- `db:generate`: To generate SQL migration files using `drizzle-kit`.
- `db:push`: To push schema changes directly to the database.

## Acceptance Criteria
- [ ] Project runs successfully via `bun run dev` with hot-reloading.
- [ ] API endpoint responds correctly to HTTP requests.
- [ ] Database connection is successfully established.
- [ ] Drizzle commands for schema generation and pushing work as expected.
