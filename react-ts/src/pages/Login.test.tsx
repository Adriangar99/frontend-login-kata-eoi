import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserServiceFake } from "../modules/auth/UserServiceFake.ts";
import { Login } from "./Login";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const navigate = vi.fn();
    const userService = new UserServiceFake();
    const tokenService = {
      setToken: vi.fn(),
    };

    render(
      <Login
        navigate={navigate}
        userService={userService}
        tokenService={tokenService}
      />,
    );

    await user.type(
      screen.getByLabelText("Your email"),
      "linustorvalds@gmail.com",
    );
    await user.type(screen.getByLabelText("Your password"), "ilovecats");
    await user.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/recipes");
    });
  });
});
