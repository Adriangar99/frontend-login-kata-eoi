import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { container } from "../di/container.ts";
import { Tokens } from "../di/Tokens.ts";
import { useEffect } from "react";
import { DependenciesProvider } from "../infrastructure/DependenciesContext.tsx";

export const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    container.bind(Tokens.REACT_ROUTER).toConstantValue(navigate);
  }, []);

  return (
    <DependenciesProvider
      dependencies={{
        container,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </DependenciesProvider>
  );
};
