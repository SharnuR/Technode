import { buildApp } from "./app.js";

const start = async () => {
  try {
    const app = await buildApp();
    const port = Number(process.env.port) || 3000;

    await app.listen({ port, host: "0.0.0.0" });
    console.log(
      `\n🟢 Multi-protocol server listening on http://localhost:${port}`,
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
