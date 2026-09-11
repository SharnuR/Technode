import type { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

export async function registerSwagger(app: FastifyInstance) {
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Accounting Multi-Tech API Documentation",
        description: "Testing playground for REST and GraphQL endpoints",
        version: "1.0.0",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  });
}
