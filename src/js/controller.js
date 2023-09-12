import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import {
  loadRecipe,
  state,
  loadSearchResults,
  getSearchResultsPage,
  updateServings,
  addBookmark,
  removeBookmark,
} from "./model";

if (module.hot) {
  module.hot.accept();
}

// Displays a single recipe using a single recipe ID
async function controlRecipes() {
  try {
    // Loading Spinner
    recipeView.displaySpinner();

    // Fetch recipe ID from URL
    const id = window.location.hash.slice(1);

    if (!id) return;

    // Update the necessary DOM
    resultsView.update(getSearchResultsPage(state.search.currentPage));
    bookmarksView.update(state.bookmarks);

    // Fetch the recipe
    await loadRecipe(id);

    // Display the recipe
    recipeView.render(state.recipe);
  } catch (error) {
    console.error(error);

    recipeView.renderError();
  }
}

// Fetch the query search results
async function controlSearchResults() {
  try {
    // Show loading state
    resultsView.displaySpinner();

    // Fetch the query parameter from the user input
    const query = searchView.getQuery();

    if (!query) return;

    // Fetch the list of recipes
    await loadSearchResults(query);

    // Render the list of preview recipes
    resultsView.render(getSearchResultsPage(state.search.currentPage));

    // Set the pagination
    paginationView.render(state.search);
  } catch (error) {
    console.error(error);
  }
}

// Render the new recipe preview list
function controlPagination(nextPage) {
  resultsView.render(getSearchResultsPage(nextPage));
  state.search.currentPage = nextPage;
  paginationView.render(state.search);
}

// Update the recipe servings
function controlServings(servings) {
  updateServings(servings);
  recipeView.update(state.recipe);
}

// Saving recipes to the list of bookmarks
function controlBookmark() {
  // If the recipe is not bookmarked
  if (!state.recipe.bookmarked) addBookmark(state.recipe);
  // If the recipe is already bookmarked
  else removeBookmark(state.recipe.id);

  recipeView.update(state.recipe);

  // Display bookmarks under the bookmarks tab
  bookmarksView.render(state.bookmarks);
}

// Adding event handler functionality
(function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
})();
