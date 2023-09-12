import View from "./view";
import icons from "url:../../img/icons.svg";

import { Fraction } from "fractional";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage =
    "We could not find the requested recipe. Please try another one!";
  _successMessage = "";

  // When the page initially loads or the url changes
  addHandlerRender(handler) {
    // Fetch recipe data
    ["hashchange", "load"].forEach(ev => window.addEventListener(ev, handler));
  }

  // When the +/- servings button is clicked
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener("click", e => {
      const button = e.target.closest(".btn--update-servings");

      if (!button) return;

      const servings = +button.dataset.updateTo;

      if (servings > 0) {
        handler(servings);
      }
    });
  }

  // When the bookmarks button is clicked
  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener("click", e => {
      const button = e.target.closest(".btn--bookmark");

      if (!button) return;

      handler();
    });
  }

  // Generate the HTML for the recipe section
  _generateMarkup() {
    const {
      image,
      title,
      cookingTime,
      servings,
      ingredients,
      publisher,
      sourceUrl,
    } = this._data;

    // Format HTML code to display recipe
    return `
        <figure class="recipe__fig">
          <img src="${image}" alt="${title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${title}</span>
          </h1>
        </figure>
    
        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${servings}</span>
            <span class="recipe__info-text">servings</span>
    
            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${
                this._data.servings - 1
              }">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${
                this._data.servings + 1
              }">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
    
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${
                this._data.bookmarked ? "-fill" : ""
              }"></use>
            </svg>
          </button>
        </div>
    
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${ingredients
              .map(ingredient => this._generateIngredientMarkup(ingredient))
              .join("")}
          </ul>
        </div>
    
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
  }

  // Generate the HTML for the list of ingredients section
  _generateIngredientMarkup(ingredient) {
    return `
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${
              ingredient.quantity
                ? new Fraction(ingredient.quantity).toString()
                : ""
            }</div>
            <div class="recipe__description">
                <span class="recipe__unit">${ingredient.unit}</span>
                ${ingredient.description}
            </div>
        </li>
        `;
  }
}

export default new RecipeView();

{
  /* <div class="recipe__user-generated">
<svg>
  <use href="${icons}#icon-user"></use>
</svg>
</div> */
}
