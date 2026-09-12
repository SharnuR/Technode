import type { FastifyReply, FastifyRequest } from "fastify";
import { authService } from "./auth.service.js";
import type { LoginInput } from "./auth.types.js";

export async function loginRestController(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply,
) {
  const result = await authService.validateUser(request.body);

  if (!result.success) {
    return reply.status(401).send(result);
  }

  return result;
}
