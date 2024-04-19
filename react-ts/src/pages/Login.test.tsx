import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Login } from "./Login";
import { userEvent } from "@testing-library/user-event";
import { UserServiceFake } from "../modules/auth/UserServiceFake.ts";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const navigate = vi.fn();
    const userService = new UserServiceFake();

    render(<Login navigate={navigate} userService={userService} />);

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
