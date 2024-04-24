import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { Login } from "./Login";
import { Container } from "inversify";
import { Tokens } from "../di/Tokens";
import { UserServiceFake } from "../infrastructure/UserServiceFake";
import { TokenRepository } from "../domain/TokenRepository";
import { Router } from "../domain/Router";
import { LoginUseCase } from "../use-cases/LoginUseCase";
import { DependenciesProvider } from "../infrastructure/DependenciesContext";

describe("Login", () => {
  const testContainer = new Container();
  const goToRecipes = vi.fn();
  const router: Router = {
    goToRecipes,
  };
  const tokenRepository: TokenRepository = {
    save: vi.fn(),
  };

  beforeEach(() => {
    testContainer.bind(Tokens.ROUTER).toConstantValue(router);
    testContainer
      .bind(Tokens.TOKEN_REPOSITORY)
      .toConstantValue(tokenRepository);
    testContainer
      .bind(Tokens.USER_SERVICE)
      .toConstantValue(new UserServiceFake());
    testContainer
      .bind(Tokens.LOGIN_USECASE)
      .toDynamicValue(LoginUseCase.fromContainer);
  });

  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();

    render(
      <DependenciesProvider dependencies={{ container: testContainer }}>
        <Login />
      </DependenciesProvider>
    );

    await user.type(
      screen.getByLabelText("Your email"),
      "linustorvalds@gmail.com"
    );
    await user.type(screen.getByLabelText("Your password"), "ilovecats");
    await user.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(goToRecipes).toHaveBeenCalled();
    });
  });
});
