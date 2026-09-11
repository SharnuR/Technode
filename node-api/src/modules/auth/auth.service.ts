export class AuthService {
  async validateUser(email: string, password: string) {
    if (email === "user@example.com" && password === "passwd") {
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
