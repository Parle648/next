import { getRecipe } from '@/lib/api/getRecipeDetails';
import { RecipeDetails } from '@/types/recipe';

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ recipeId: string }>;
}) {
  const recipe: RecipeDetails = await getRecipe((await params).recipeId);

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-6 shadow">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">{recipe.title}</h1>

      <div className="mb-4 text-gray-600">
        <p>
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>

      <div
        className="prose prose-sm prose-indigo mb-4"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <h2 className="mb-2 text-xl font-semibold">Ingredients</h2>
      <ul className="list-inside list-disc space-y-1 text-gray-700">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
    </div>
  );
}
