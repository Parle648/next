interface Ingredient {
  id: number;
  original: string;
}

export interface RecipeDetails {
  title: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface IGetRecipeRequest {
  query: string;
  cuisine: string;
  prepTime: string;
}
