import { async } from "regenerator-runtime";

import { API_URL, RESULTS_PER_PAGE } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    currentPage: 1,
  },
  bookmarks: [],
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

    // Check if the recipe is already bookmarked
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
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

    state.search.currentPage = 1;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

// Pagination for recipe preview list
export function getSearchResultsPage(page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
}

// Update the amount of servings
export function updateServings(servings) {
  // Calculate the new servings amount
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.quantity =
      (ingredient.quantity * servings) / state.recipe.servings;
  });

  // Save the servings count
  state.recipe.servings = servings;
}

// Save recipe to bookmark
export function addBookmark(recipe) {
  // Add recipe to bookmarks array
  state.bookmarks.push(recipe);

  // Set recipe bookmarked state to true
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
}

// Remove a recipe from bookmark
export function removeBookmark(recipeId) {
  // Remove recipe from bookmarks array
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipeId);
  state.bookmarks.splice(index, 1);

  // Set recipe bookmarked state to false
  if (recipeId === state.recipe.id) state.recipe.bookmarked = false;
}
