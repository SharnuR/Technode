import type { FastifyInstance } from "fastify";
import { loginRestController } from "./auth.controller.js";

export async function authRoutes(app: FastifyInstance) {
  app.post(
    "/login",
    {
      schema: {
        description: "Authenticate user and return a JWT access token",
        tags: ["Authentication"],

        //1. Core Data Validation (Kept simple so AJV doesn't crash)
        body: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
            },
            password: { type: "string" },
          },
        },

        // 2. Swagger Specific Example (Tells Swagger what to fill into the UI textboxes)
        response: {
          200: {
            description: "Successful login response",
            type: "object",
            properties: {
              success: { type: "boolean" },
              token: { type: "string" },
            },
          },
        },
      },
    },
    loginRestController,
  );
}
