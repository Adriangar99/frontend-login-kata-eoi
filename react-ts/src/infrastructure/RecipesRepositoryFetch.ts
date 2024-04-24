import type { Recipe } from "../domain/Recipe.ts";
import type { RecipesRepository } from "../domain/RecipesRepository.ts";

export class RecipesRepositoryFetch implements RecipesRepository {
  async delete(id: string): Promise<void> {
    const response = await fetch(
      `https://backend-login-placeholder.deno.dev/api/v2/recipes/${id}`,
      {
        method: "Delete",
        headers: {
          api_token:
            "26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d",
        },
      },
    );

    if (response.status >= 400) throw new Error("Recipe not found");
  }

  async findAll(): Promise<Recipe[]> {
    const data = await fetch(
      "https://backend-login-placeholder.deno.dev/api/v2/recipes",
      {
        method: "GET",
        headers: {
          api_token:
            "26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d",
        },
      },
    );

    return (await data.json()).payload;
  }

  async save(recipe: Recipe): Promise<void> {
    await fetch("https://backend-login-placeholder.deno.dev/api/v2/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
        api_token:
          "26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d",
      },
    });
  }
}
