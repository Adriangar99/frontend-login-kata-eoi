import { NavigateFunction } from "react-router-dom";
import { Router } from "../domain/Router";

export class RouterReactRouter implements Router {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  goToRecipes(): void {
    this.navigate("/recipes");
  }
}
