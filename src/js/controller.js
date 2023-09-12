import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

import { loadRecipe, state } from "./model";
import recipeView from "./views/recipeView";

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
  }
}

(function () {
  recipeView.addHandlerRender(controlRecipes);
})();
