import { afterEach, describe, expect, it } from "vitest";
import type { Recipe } from "../domain/Recipe.ts";
import { RecipesRepositoryFetch } from "../infrastructure/RecipesRepositoryFetch.ts";

describe("RecipesRepositoryFetch", () => {
  const recipeId = "1";
  const repository = new RecipesRepositoryFetch();

  afterEach(async () => {
    await repository.delete(recipeId);
  });

  it("saves a recipe", async () => {
    const recipe: Recipe = {
      id: recipeId,
      name: "pizza",
      ingredients: ["piña"],
    };

    await repository.save(recipe);
    const recipes = await repository.findAll();

    expect(recipes).toContainEqual(recipe);
  });

  it("deletes a recipe", async () => {
    const recipe: Recipe = {
      id: recipeId,
      name: "pizza",
      ingredients: ["piña"],
    };

    await repository.save(recipe);
    await repository.delete(recipeId);
    const recipes = await repository.findAll();

    expect(recipes).not.toContainEqual(recipe);
  });
});
