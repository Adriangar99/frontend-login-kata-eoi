import { ReactNode, createContext, useContext } from "react";
import { Dependencies } from "../domain/Dependencies";

const DependenciesContext = createContext<Dependencies | null>(null);

type Props = {
  children: ReactNode;
  dependencies: Dependencies;
};

export const DependenciesProvider = ({ children, dependencies }: Props) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = () => {
  const dependenciesContext = useContext(DependenciesContext);

  if (!dependenciesContext) {
    throw new Error("Dependencies context is required.");
  }

  return dependenciesContext;
};
