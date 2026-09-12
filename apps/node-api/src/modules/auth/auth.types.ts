export interface LoginInput {
  email: string;
  password: string;
}

export interface UserPayload {
  email: string;
  name: string;
}

export interface AuthResult {
  success: boolean;
  token?: string;
  error?: string;
  user?: UserPayload;
}
