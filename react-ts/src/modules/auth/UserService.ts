export type LoginResponse = {
  jwt: string;
};

export type UserService = {
  login(email: string, password: string): Promise<LoginResponse>;
};
