import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  // Display the recipe section
  render(data) {
    // Check if there is data
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const html = this._generateMarkup();

    // Display the recipe
    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
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

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // Clear all HTML
  _clearHTML() {
    this._parentElement.innerHTML = "";
  }

  // Display success message
  renderSuccess(message = this._successMessage) {
    const html = `
    <div class="message">
        <div>
            <svg>
                <use href="${icons}#icon-smile"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>
    `;

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // Display error message
  renderError(message = this._errorMessage) {
    const html = `
    <div class="error">
        <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>
    `;

    this._clearHTML();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
