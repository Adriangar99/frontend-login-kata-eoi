import { interfaces } from "inversify";
import { Router } from "../domain/Router";
import { TokenRepository } from "../domain/TokenRepository";
import { UserService } from "../domain/UserService";
import { Tokens } from "../di/Tokens";

export class LoginUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly tokenRepository: TokenRepository,
    private readonly router: Router
  ) {}

  async fromContainer({ container }: interfaces.Context) {
    const userService = container.get<UserService>(Tokens.USER_SERVICE);
    const tokenRepository = container.get<TokenRepository>(
      Tokens.TOKEN_REPOSITORY
    );
    const router = await container.getAsync<Router>(Tokens.ROUTER);

    return new LoginUseCase(userService, tokenRepository, router);
  }

  async execute({ email, password }: { email: string; password: string }) {
    const { jwt } = await this.userService.login(email, password);
    this.tokenRepository.save(jwt);
    this.router.goToRecipes();
  }
}
