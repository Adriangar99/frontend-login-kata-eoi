import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { container } from "../di/container.ts";
import { Tokens } from "../di/Tokens.ts";
import { UserService } from "../modules/auth/UserService.ts";
import { TokenRepository } from "../modules/auth/TokenRepository.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();

  const userService: UserService = container.get(Tokens.USER_SERVICE);
  const tokenRepository: TokenRepository = container.get(
    Tokens.TOKEN_REPOSITORY
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            navigate={navigate}
            userService={userService}
            tokenRepository={tokenRepository}
          />
        }
      />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
