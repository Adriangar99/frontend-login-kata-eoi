import type { StorageService } from "../modules/shared/StorageService.ts";

export class LocalStorageService implements StorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
