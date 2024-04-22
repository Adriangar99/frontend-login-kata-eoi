import { Container } from "inversify";
import { Tokens } from "./Tokens";
import { TokenRepositoryLocalStorage } from "../infrastructure/TokenRepositoryLocalStorage";
import { UserServiceApi } from "../infrastructure/UserServiceApi";

export const container = new Container();

container
  .bind(Tokens.TOKEN_REPOSITORY)
  .toDynamicValue(TokenRepositoryLocalStorage.fromContainer);

container.bind(Tokens.USER_SERVICE).toConstantValue(new UserServiceApi());
