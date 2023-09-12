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
    resultsView.displaySpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await loadSearchResults(query);

    resultsView.render(getSearchResultsPage(state.search.currentPage));

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

// Adding event handler functionality
(function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
})();
