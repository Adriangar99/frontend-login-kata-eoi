import { Container } from "inversify";
import { Tokens } from "./Tokens";
import { TokenRepositoryLocalStorage } from "../modules/auth/TokenRepositoryLocalStorage";
import { UserServiceFetch } from "../modules/auth/UserServiceFetch";

export const container = new Container();

container
  .bind(Tokens.TOKEN_REPOSITORY)
  .toDynamicValue(TokenRepositoryLocalStorage.fromContainer);

container.bind(Tokens.USER_SERVICE).toConstantValue(new UserServiceFetch());
