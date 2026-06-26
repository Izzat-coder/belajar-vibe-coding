import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => ({ status: "ok", message: "Welcome to Elysia + Drizzle + MySQL API" }))
  .get("/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error: any) {
      console.error("Error fetching users:", error);
      return { error: "Failed to fetch users", details: error.message };
    }
  })
  .post("/users", async ({ body }) => {
    try {
      await db.insert(users).values({
        name: body.name,
        email: body.email,
      });
      return { success: true, message: "User created successfully" };
    } catch (error: any) {
      console.error("Error creating user:", error);
      return { error: error.message || "Failed to create user" };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: 'email' })
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
