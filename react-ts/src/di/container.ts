import { Container } from "inversify";
import { RouterReactRouter } from "../infrastructure/RouterReactRouter.tsx";
import { TokenRepositoryLocalStorage } from "../infrastructure/TokenRepositoryLocalStorage";
import { UserServiceApi } from "../infrastructure/UserServiceApi";
import { LoginUseCase } from "../use-cases/LoginUseCase";
import { Tokens } from "./Tokens";

export const container = new Container();

container
  .bind(Tokens.TOKEN_REPOSITORY)
  .toDynamicValue(TokenRepositoryLocalStorage.fromContainer);

container
  .bind(Tokens.USER_SERVICE)
  .toDynamicValue(UserServiceApi.fromContainer);

container.bind(Tokens.ROUTER).toDynamicValue(RouterReactRouter.fromContainer);
container.bind(Tokens.LOGIN_USECASE).toDynamicValue(LoginUseCase.fromContainer);
