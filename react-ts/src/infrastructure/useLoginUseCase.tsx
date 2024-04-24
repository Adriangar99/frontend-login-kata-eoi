import { useDependencies } from "../infrastructure/DependenciesContext.tsx";
import { Tokens } from "../di/Tokens.ts";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";

export const useLoginUseCase = () => {
  const { container } = useDependencies();
  return (email: string, password: string) =>
    container
      .get<LoginUseCase>(Tokens.LOGIN_USECASE)
      .execute({ email, password });
};
