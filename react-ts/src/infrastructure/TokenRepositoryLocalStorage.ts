import { TokenRepository } from "../domain/TokenRepository";

export class TokenRepositoryLocalStorage implements TokenRepository {
  static fromContainer() {
    return new TokenRepositoryLocalStorage();
  }

  save(token: string): void {
    localStorage.setItem("token", token);
  }
}
