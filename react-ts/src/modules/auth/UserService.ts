export class UserService {
  login = async (email: string, password: string) => {
    const data = await fetch(
      "https://backend-login-placeholder.deno.dev/api/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((response) => response.json());

    if (data.status === "error") throw new Error(data.code);

    return data.payload;
  };
}
