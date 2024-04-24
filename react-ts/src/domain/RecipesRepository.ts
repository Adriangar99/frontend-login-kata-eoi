import type { Recipe } from "../domain/Recipe.ts";

export interface RecipesRepository {
  findAll(): Promise<Recipe[]>;
  save(recipe: Recipe): Promise<void>;
  delete(id: string): Promise<void>;
}
