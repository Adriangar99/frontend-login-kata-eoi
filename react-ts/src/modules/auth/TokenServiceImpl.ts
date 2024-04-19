import type { StorageService } from "../modules/shared/StorageService.ts";
import type { TokenService } from "../modules/auth/TokenService.ts";

export class TokenServiceImpl implements TokenService {
  constructor(private readonly storageService: StorageService) {}

  setToken(token: string): void {
    this.storageService.set("token", token);
  }
}
