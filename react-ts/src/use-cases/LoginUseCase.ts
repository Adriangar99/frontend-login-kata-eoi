import { Router } from "../domain/Router";
import { TokenRepository } from "../domain/TokenRepository";
import { UserService } from "../domain/UserService";

export class LoginUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly tokenRepository: TokenRepository,
    private readonly router: Router
  ) {}

  async execute({ email, password }: { email: string; password: string }) {
    const { jwt } = await this.userService.login(email, password);
    this.tokenRepository.save(jwt);
    this.router.goToRecipes();
  }
}
