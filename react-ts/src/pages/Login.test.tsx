import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserServiceFake } from "../infrastructure/UserServiceFake.ts";
import { Login } from "./Login";
import { TokenRepository } from "../domain/TokenRepository.ts";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";
import { Router } from "../domain/Router.ts";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const userService = new UserServiceFake();
    const tokenRepository: TokenRepository = {
      save: vi.fn(),
    };
    const goToRecipes = vi.fn();
    const router: Router = {
      goToRecipes,
    };

    const loginUseCase = new LoginUseCase(userService, tokenRepository, router);

    render(<Login />);

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
