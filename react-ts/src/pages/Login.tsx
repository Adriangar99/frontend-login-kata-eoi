import { useEffect, useState } from "react";
import "./Login.css";
import { Button } from "../components/Button.js";
import { EmailField } from "../components/EmailField.js";
import { PasswordField } from "../components/PasswordField.js";
import { Title } from "../components/Title.js";
import { useLoginUseCase } from "../infrastructure/useLoginUseCase.tsx";
import { translateError } from "../utils/translateError.js";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginUseCase = useLoginUseCase();

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    loginUseCase
      .execute({ email, password })
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
