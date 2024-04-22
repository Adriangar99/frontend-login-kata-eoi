import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { container } from "../di/container.ts";
import { Tokens } from "../di/Tokens.ts";
import { UserService } from "../domain/UserService.ts";
import { TokenRepository } from "../domain/TokenRepository.ts";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";
import { RouterReactRouter } from "../infrastructure/RouterReactRouter.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const userService: UserService = container.get(Tokens.USER_SERVICE);
  const tokenRepository: TokenRepository = container.get(
    Tokens.TOKEN_REPOSITORY
  );
  const router = new RouterReactRouter(navigate);

  const loginUseCase = new LoginUseCase(userService, tokenRepository, router);

  return (
    <Routes>
      <Route path="/" element={<Login loginUseCase={loginUseCase} />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
