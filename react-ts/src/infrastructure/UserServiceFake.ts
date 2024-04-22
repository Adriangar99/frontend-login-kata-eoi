import { LoginResponse, UserService } from "../domain/UserService.ts";

const JWT: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export class UserServiceFake implements UserService {
  login(email: string, password: string): Promise<LoginResponse> {
    return Promise.resolve<LoginResponse>({
      jwt: JWT,
    });
  }
}
