import icons from "url:../../img/icons.svg";

import { Fraction } from "fractional";

class RecipeView {
  #parentElement = document.querySelector(".recipe");
  #data;

  // addEventListener function
  addHandlerRender(handler) {
    // Fetch recipe data
    ["hashchange", "load"].forEach(ev => window.addEventListener(ev, handler));
  }

  // Display the recipe section
  render(data) {
    this.#data = data;
    const html = this.#generateMarkup();

    // Display the recipe
    this.#clearHTML();
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // Display the loading spinner
  displaySpinner() {
    const html = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;

    this.#clearHTML();
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // Clear all HTML
  #clearHTML() {
    this.#parentElement.innerHTML = "";
  }

  // Generate the HTML for the recipe section
  #generateMarkup() {
    const {
      image,
      title,
      cookingTime,
      servings,
      ingredients,
      publisher,
      sourceUrl,
    } = this.#data;

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
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
    
          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>
    
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${ingredients
              .map(ingredient => this.#generateIngredientMarkup(ingredient))
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
  #generateIngredientMarkup(ingredient) {
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
