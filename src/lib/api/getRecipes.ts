import { Recipe } from '@/types/recipe';

export async function getRecipes(searchParams: {
  query?: string;
  cuisine?: string;
  prepTime?: string;
}): Promise<Recipe[]> {
  const { query = '', cuisine = '', prepTime = '' } = searchParams;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${prepTime}&apiKey=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch recipes');

  const data = await res.json();
  return data.results || [];
}
