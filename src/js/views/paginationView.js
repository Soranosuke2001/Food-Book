import View from "./view";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  // Page pagination button click handler
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", e => {
      const button = e.target.closest(".btn--inline");

      if (!button) return;

      // Fetch which is the next page
      const nextPage = +button.dataset.goto;

      // Rerender the list of preview recipes after paginating
      handler(nextPage);
    });
  }

  // Render the HTML for pagination buttons
  _generateMarkup() {
    const { currentPage, resultsPerPage, results } = this._data;
    const numPages = Math.ceil(results.length / resultsPerPage);

    // If the current page is 1 and there is more than 1 page
    if (currentPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto="${
          currentPage + 1
        }">
            <span>${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // If the current page is the last page and there is more than 1 page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          currentPage - 1
        }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
      `;
    }

    // If the current page is not the first and last page
    if (currentPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--prev" data-goto="${
        currentPage - 1
      }">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next" data-goto="${
        currentPage + 1
      }">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }

    // If there is only one page
    return "";
  }
}

export default new PaginationView();
