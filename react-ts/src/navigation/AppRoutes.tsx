import { Route, Routes, useNavigate } from "react-router-dom";
import { TokenServiceImpl } from "../modules/auth/TokenServiceImpl.ts";
import { LocalStorageService } from "../modules/shared/LocalStorageService.ts";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { UserServiceFetch } from "../modules/auth/UserServiceFetch.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const userService = new UserServiceFetch();
  const tokenService = new TokenServiceImpl(new LocalStorageService());

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            navigate={navigate}
            userService={userService}
            tokenService={tokenService}
          />
        }
      />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
