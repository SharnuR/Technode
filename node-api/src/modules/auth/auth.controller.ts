import type { FastifyReply, FastifyRequest } from "fastify";
import { authService } from "./auth.service.js";

export async function loginRestController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = request.body as any;
  const result = await authService.validateUser(email, password);

  if (!result.success) {
    return reply.status(401).send(result);
  }

  return result;
}
