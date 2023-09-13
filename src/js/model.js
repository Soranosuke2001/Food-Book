import { async } from "regenerator-runtime";

import { API_KEY, API_URL, RESULTS_PER_PAGE } from "./config";
import { getJSON, sendJSON } from "./helpers";

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

// Transforming recipe object
function createRecipeObject(data) {
  // Restructuring the data received
  const { recipe } = data.data;

  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // Creates the 'key' property if there is a key in the recipe object
    ...(recipe.key && { key: recipe.key }),
  };
}

// Fetch the recipe data
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    state.recipe = createRecipeObject(data);

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

  // Update the bookmarks in local storage
  manageBookmarks();
}

// Remove a recipe from bookmark
export function removeBookmark(recipeId) {
  // Remove recipe from bookmarks array
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipeId);
  state.bookmarks.splice(index, 1);

  // Set recipe bookmarked state to false
  if (recipeId === state.recipe.id) state.recipe.bookmarked = false;

  // Update the bookmarks in local storage
  manageBookmarks();
}

// Update the bookmarks in local storage
function manageBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}

// Upload recipe to the API
export async function uploadRecipe(recipe) {
  try {
    // Fetch the ingredient entries
    const filteredRecipe = Object.entries(recipe).filter(
      key => key[0].startsWith("ingredient") && key[1] !== ""
    );

    const ingredients = filteredRecipe.map(ingredient => {
      const ingredientDetails = ingredient[1].replaceAll(" ", "").split(",");

      if (ingredientDetails.length !== 3)
        throw new Error("Please enter the correct ingredient format!");

      const [quantity, unit, description] = ingredientDetails;

      return { quantity: quantity ? +quantity : null, unit, description };
    });

    const newRecipe = {
      title: recipe.title,
      source_url: recipe.sourceUrl,
      image_url: recipe.image,
      publisher: recipe.publisher,
      cooking_time: +recipe.cookingTime,
      servings: +recipe.servings,
      ingredients,
    };

    // Uploading the new recipe to the database
    const data = await sendJSON(`${API_URL}?key=${API_KEY}`, newRecipe);
    state.recipe = createRecipeObject(data);

    // Save the recipe in the bookmarks list
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
}

// Fetching bookmarks from local storage
(function () {
  // Fetch bookmarks from local storage
  const storage = localStorage.getItem("bookmarks");

  // Save the bookmarks to state variable if there is any
  if (storage) state.bookmarks = JSON.parse(storage);
})();
