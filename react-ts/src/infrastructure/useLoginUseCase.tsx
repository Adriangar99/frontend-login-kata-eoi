import { useDependencies } from "../infrastructure/DependenciesContext.tsx";
import { Tokens } from "../di/Tokens.ts";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";

export const useLoginUseCase = () => {
  const { container } = useDependencies();
  return container.get<LoginUseCase>(Tokens.LOGIN_USECASE);
};
