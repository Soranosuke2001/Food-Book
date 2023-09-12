import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import {
  loadRecipe,
  state,
  loadSearchResults,
  getSearchResultsPage,
  updateServings,
} from "./model";
import paginationView from "./views/paginationView";

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

// Adding event handler functionality
(function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
})();
