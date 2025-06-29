# Next.js Recipes App

## Overview

This is a simple recipe search application built with Next.js (App Router), React, and TypeScript. It allows users to search for recipes by query, cuisine, and preparation time, and view detailed information about each recipe, including ingredients and summary. The app fetches data from the Spoonacular API.

## Features

- **Recipe Search:** Search recipes by keyword, cuisine, and max preparation time.
- **Recipe List:** View a list of matching recipes with images and titles.
- **Recipe Details:** Click on a recipe to see detailed information, including ingredients, preparation time, servings, and a summary.
- **Error Handling:** User-friendly error messages for failed API requests.
- **Responsive UI:** Clean and responsive design using Tailwind CSS.
- **Server Components:** Uses Next.js server components for data fetching and rendering.

## Architecture

- **Next.js App Router:** Uses the `/app` directory for routing and server components.
- **API Integration:** Fetches data from the Spoonacular API using async server functions.
- **TypeScript:** Provides type safety for components and API responses.
- **Tailwind CSS:** For styling and responsive layouts.

### Main Files & Structure

- `src/app/page.tsx` — Home page with search form (client component)
- `src/app/recipes/page.tsx` — Recipe list page (server component)
- `src/app/recipes/[recipeId]/page.tsx` — Recipe details page (server component)
- `src/app/globals.css` — Global styles
- `next.config.ts`, `tsconfig.json` — Project configuration

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Spoonacular API key (set as `SPOONACULAR_API_KEY` in a `.env` file)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd next
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Spoonacular API key:
     ```env
     SPOONACULAR_API_KEY=your_api_key_here
     ```

### Running the Application

To start the development server:

```sh
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production:

```sh
npm run build
```

To start the production server:

```sh
npm start
```

## License

This project is for educational purposes.
