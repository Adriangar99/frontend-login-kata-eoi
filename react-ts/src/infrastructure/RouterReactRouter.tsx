import { interfaces } from "inversify";
import { createBrowserRouter } from "react-router-dom";
import { Tokens } from "../di/Tokens.ts";
import { Router } from "../domain/Router";

export type RRouter = ReturnType<typeof createBrowserRouter>;
export class RouterReactRouter implements Router {
  constructor(private router: RRouter) {}

  static fromContainer({ container }: interfaces.Context) {
    const router = container.get<RRouter>(Tokens.REACT_ROUTER);
    return new RouterReactRouter(router);
  }

  async goToRecipes() {
    await this.router.navigate("/recipes");
  }
}
