import type { LoginInput } from "./auth.types.js";

export class AuthService {
  async validateUser(input: LoginInput) {
    const { email, password } = input;

    if (email === "test@example.com" && password === "test") {
      return {
        success: true,
        token: "jwt-token-token-abc-123",
        user: { email, name: "John Doe" },
      };
    }

    return { success: false, error: "Invalid credentials" };
  }
}

export const authService = new AuthService();
