import View from "./view";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = 'No recipes found for your query. Please try again.'
  _successMessage = ''

  // Return the entire HTML code to preview recipes
  _generateMarkup() {
    return this._data
      .map(recipe => this._generatePreviewRecipe(recipe))
      .join("");
  }

  // Return the HTML code to display the recipe preview
  _generatePreviewRecipe(recipe) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${recipe.id}">
            <figure class="preview__fig">
                <img src="${recipe.image}" alt="${recipe.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
  }
}

export default new ResultsView();

// <div class="preview__user-generated">
// <svg>
//     <use href="${icons}#icon-user"></use>
// </svg>
// </div>
