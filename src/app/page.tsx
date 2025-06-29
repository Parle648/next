'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const isFormValid = query || cuisine || prepTime;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (prepTime) params.append('prepTime', prepTime);
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-800">Search Recipes</h1>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Query</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. pasta"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cuisine</label>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="">Select a cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Max Preparation Time (min)
          </label>
          <input
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full rounded-md px-4 py-2 text-white transition-colors duration-200 ${
            isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          Next
        </button>
      </form>
    </div>
  );
}
