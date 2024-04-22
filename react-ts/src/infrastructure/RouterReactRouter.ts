import { NavigateFunction } from "react-router-dom";
import { Router } from "../domain/Router";
import { interfaces } from "inversify";
import { Tokens } from "../di/Tokens";

export class RouterReactRouter implements Router {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  static async fromContainer({ container }: interfaces.Context) {
    return new RouterReactRouter(await container.getAsync(Tokens.REACT_ROUTER));
  }

  goToRecipes(): void {
    this.navigate("/recipes");
  }
}
