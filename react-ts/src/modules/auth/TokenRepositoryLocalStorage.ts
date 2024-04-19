import { TokenRepository } from "./TokenRepository";
import type { interfaces } from "inversify";

export class TokenRepositoryLocalStorage implements TokenRepository {
  static fromContainer({ container }: interfaces.Context) {
    return new TokenRepositoryLocalStorage();
  }

  save(token: string): void {
    localStorage.setItem("token", token);
  }
}
