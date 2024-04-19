import { LoginResponse, UserService } from "./UserService";

export class UserServiceFetch implements UserService {
  login = async (email: string, password: string): Promise<LoginResponse> => {
    const data = await fetch(
      "https://backend-login-placeholder.deno.dev/api/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

    if (data.status === "error") throw new Error(data.code);

    return data.payload;
  };
}
