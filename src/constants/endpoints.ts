import { IGetRecipeRequest } from '@/types/recipe';

const apiKey = process.env.SPOONACULAR_API_KEY;

const endpoints = {
  getRecipeDetails: (id: number) =>
    `${process.env.BASE_API_URL}recipes/${id}/information?apiKey=${apiKey}`,
  getRecipeList: ({ query, cuisine, prepTime }: IGetRecipeRequest) =>
    `${process.env.BASE_API_URL}recipes/complexSearch?query=${query}${cuisine ? `&cuisine=${cuisine}` : ''}${prepTime ? `&maxReadyTime=${prepTime}` : ''}&apiKey=${apiKey}`,
};

export default endpoints;
