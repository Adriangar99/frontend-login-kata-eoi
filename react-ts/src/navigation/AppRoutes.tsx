import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { container } from "../di/container.ts";
import { Tokens } from "../di/Tokens.ts";
import { DependenciesProvider } from "../infrastructure/DependenciesContext.tsx";
import { Login } from "../pages/Login.tsx";
import { Recipes } from "../pages/Recipes.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
]);

container.bind(Tokens.REACT_ROUTER).toConstantValue(router);

export const AppRoutes = () => {
  return (
    <DependenciesProvider
      dependencies={{
        container,
      }}
    >
      <RouterProvider router={router} />
    </DependenciesProvider>
  );
};
