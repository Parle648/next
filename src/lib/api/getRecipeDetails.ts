import { RecipeDetails } from '@/types/recipe';
import { notFound } from 'next/navigation';

export async function getRecipe(id: string): Promise<RecipeDetails> {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
