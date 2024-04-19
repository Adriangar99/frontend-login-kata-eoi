import { TokenRepository } from "./TokenRepository";

export class TokenRepositoryLocalStorage implements TokenRepository {
  constructor() {}

  save(token: string): void {
    localStorage.setItem("token", token);
  }
}
