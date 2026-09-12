import fastify from "fastify";
import cors from "@fastify/cors";
import mercurius from "mercurius";

import schema from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import { registerSwagger } from "./config/swagger.js";
import { authRoutes } from "./modules/auth/auth.routes.js";

export async function buildApp() {
  const app = fastify({ logger: true });

  await app.register(cors, { origin: true, credentials: true });

  await registerSwagger(app);

  await app.register(authRoutes, { prefix: "/api/v1/auth" });

  app.get("/api/v1/health", async () => ({ status: "OK" }));

  await app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true,
    path: "/graphql",
  });

  await app.ready();

  console.log("routes: \n", app.printRoutes());

  return app;
}
