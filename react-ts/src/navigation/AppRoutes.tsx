import { Route, Routes, useNavigate } from "react-router-dom";
import { UserService } from "../modules/auth/UserService.ts";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const userService = new UserService();

  return (
    <Routes>
      <Route
        path="/"
        element={<Login navigate={navigate} userService={userService} />}
      />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
