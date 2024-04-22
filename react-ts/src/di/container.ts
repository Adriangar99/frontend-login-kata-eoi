import { Container } from "inversify";
import { Tokens } from "./Tokens";
import { TokenRepositoryLocalStorage } from "../infrastructure/TokenRepositoryLocalStorage";
import { UserServiceApi } from "../infrastructure/UserServiceApi";
import { RouterReactRouter } from "../infrastructure/RouterReactRouter";

export const container = new Container();

container
  .bind(Tokens.TOKEN_REPOSITORY)
  .toDynamicValue(TokenRepositoryLocalStorage.fromContainer);

container.bind(Tokens.USER_SERVICE).toConstantValue(new UserServiceApi());
container.bind(Tokens.ROUTER).toDynamicValue(RouterReactRouter.fromContainer);
