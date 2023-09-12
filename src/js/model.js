import { async } from "regenerator-runtime";

import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

// Fetch the recipe data
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    // Restructuring the data received
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Fetch recipes from a query string
export async function loadSearchResults(query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);

    // Save the query result
    state.search.query = query;
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    console.error(error);

    throw error;
  }
}
