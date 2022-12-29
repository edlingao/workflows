export type User = {
  email: string;
  name: string;
  password: string;
}

export interface UserRegisterResponse {
  user: User;
  token: string;
}