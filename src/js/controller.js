import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import { loadRecipe, state, loadSearchResults } from "./model";

///////////////////////////////////////

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
    const query = searchView.getQuery();

    if (!query) return;

    await loadSearchResults(query);

    console.log(state.search.results);
  } catch (error) {
    console.error(error);
  }
}

(function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
})();
