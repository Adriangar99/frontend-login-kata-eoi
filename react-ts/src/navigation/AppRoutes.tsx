import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { UserServiceFetch } from "../modules/auth/UserServiceFetch.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const userService = new UserServiceFetch();

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
