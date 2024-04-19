import { Route, Routes, useNavigate } from "react-router-dom";
import { TokenRepositoryLocalStorage } from "../modules/auth/TokenRepositoryLocalStorage.ts";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { UserServiceFetch } from "../modules/auth/UserServiceFetch.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const userService = new UserServiceFetch();
  const tokenRepository = new TokenRepositoryLocalStorage();

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
