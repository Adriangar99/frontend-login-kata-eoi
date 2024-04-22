import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { container } from "../di/container.ts";
import { Tokens } from "../di/Tokens.ts";
import { UserService } from "../domain/UserService.ts";
import { TokenRepository } from "../domain/TokenRepository.ts";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";
import { Router } from "../domain/Router.ts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    container.bind(Tokens.REACT_ROUTER).toConstantValue(navigate);
  }, []);

  const userService = container.get<UserService>(Tokens.USER_SERVICE);
  const tokenRepository = container.get<TokenRepository>(
    Tokens.TOKEN_REPOSITORY
  );
  const router = container.get<Router>(Tokens.ROUTER);
  const loginUseCase = new LoginUseCase(userService, tokenRepository, router);

  return (
    <Routes>
      <Route path="/" element={<Login loginUseCase={loginUseCase} />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
