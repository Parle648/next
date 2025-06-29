import endpoints from '@/constants/endpoints';
import { RecipeDetails } from '@/types/recipe';
import { notFound } from 'next/navigation';

export async function getRecipe(id: number): Promise<RecipeDetails> {
  const res = await fetch(endpoints.getRecipeDetails(id), {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
