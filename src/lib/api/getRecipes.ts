import endpoints from '@/constants/endpoints';
import { Recipe } from '@/types/recipe';

export async function getRecipes(searchParams: {
  query?: string;
  cuisine?: string;
  prepTime?: string;
}): Promise<Recipe[]> {
  const { query = '', cuisine = '', prepTime = '' } = searchParams;

  const res = await fetch(endpoints.getRecipeList({ query, cuisine, prepTime }), {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch recipes');

  const data = await res.json();
  return data.results || [];
}
