import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserServiceFake } from "../modules/auth/UserServiceFake.ts";
import { Login } from "./Login";
import { TokenRepository } from "../modules/auth/TokenRepository.ts";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const navigate = vi.fn();
    const userService = new UserServiceFake();
    const tokenRepository: TokenRepository = {
      save: vi.fn(),
    };

    render(
      <Login
        navigate={navigate}
        userService={userService}
        tokenRepository={tokenRepository}
      />
    );

    await user.type(
      screen.getByLabelText("Your email"),
      "linustorvalds@gmail.com"
    );
    await user.type(screen.getByLabelText("Your password"), "ilovecats");
    await user.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/recipes");
    });
  });
});
