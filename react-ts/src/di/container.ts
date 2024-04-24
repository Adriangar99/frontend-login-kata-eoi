import { Container } from "inversify";
import { Tokens } from "./Tokens";
import { TokenRepositoryLocalStorage } from "../infrastructure/TokenRepositoryLocalStorage";
import { UserServiceApi } from "../infrastructure/UserServiceApi";
import { RouterReactRouter } from "../infrastructure/RouterReactRouter";
import { LoginUseCase } from "../use-cases/LoginUseCase";

export const container = new Container();

container
  .bind(Tokens.TOKEN_REPOSITORY)
  .toDynamicValue(TokenRepositoryLocalStorage.fromContainer);
container
  .bind(Tokens.USER_SERVICE)
  .toDynamicValue(UserServiceApi.fromContainer);
container.bind(Tokens.ROUTER).toDynamicValue(RouterReactRouter.fromContainer);
container.bind(Tokens.LOGIN_USECASE).toDynamicValue(LoginUseCase.fromContainer);
