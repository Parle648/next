// app/recipes/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

async function getRecipes(searchParams: {
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
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Recipes</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
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
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
