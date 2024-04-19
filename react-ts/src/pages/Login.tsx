import { useEffect, useState } from "react";
import "./Login.css";
import { Button } from "../components/Button.js";
import { EmailField } from "../components/EmailField.js";
import { PasswordField } from "../components/PasswordField.js";
import { Title } from "../components/Title.js";
import type { TokenRepository } from "../modules/auth/TokenRepository.ts";
import type { UserService } from "../modules/auth/UserService.ts";
import { translateError } from "../utils/translateError.js";

type LoginProps = {
  navigate: (path: string) => void;
  userService: UserService;
  tokenRepository: TokenRepository;
};

export const Login = ({
  navigate,
  userService,
  tokenRepository,
}: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    userService
      .login(email, password)
      .then((payload) => tokenRepository.save(payload.jwt))
      .then(() => {
        navigate("/recipes");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="login-container">
      <form className="login-form" onSubmit={onLogin}>
        <Title>Login with email</Title>
        <p>Enter your email address to login with your account.</p>

        <EmailField
          id="email"
          labelText="Your email"
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          labelText="Your password"
          value={password}
          onChange={setPassword}
        />
        {errorMessage && <p>{translateError(errorMessage)}</p>}
        <Button title="Login" disabled={isLoading} />
      </form>
    </main>
  );
};
