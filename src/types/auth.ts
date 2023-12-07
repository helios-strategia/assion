export interface AuthResponse {
  userId: number,
  token: string,
  refreshToken: string
}

export interface AuthRequest {
  email: string,
  password: string
}