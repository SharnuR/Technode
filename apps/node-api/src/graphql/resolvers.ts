import { authService } from "@/modules/auth/auth.service.js";

const resolvers = {
  Query: {
    healthCheck: async () => "GraphQL Auth Engine Live.",
  },

  Mutation: {
    login: async (_parent: any, args: any) => {
      const result = await authService.validateUser(args);
    },
  },
};

export default resolvers;
