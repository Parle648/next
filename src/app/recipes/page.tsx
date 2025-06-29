import { getRecipes } from '@/lib/api/getRecipes';
import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import Link from 'next/link';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  let recipes: Recipe[] = [];
  let error: string | null = null;

  try {
    recipes = await getRecipes(await searchParams);
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    }
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50 text-red-700">
        <div className="space-y-2 text-center">
          <p className="text-xl font-semibold">Something went wrong</p>
          <p className="text-sm">{error}</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Recipes</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="block rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={100}
                height={100}
                className="h-48 w-full rounded-t-xl object-cover"
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
}
