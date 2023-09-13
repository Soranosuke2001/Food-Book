import View from "./view";
import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _buttonOpen = document.querySelector(".nav__btn--add-recipe");
  _buttonClose = document.querySelector(".btn--close-modal");

  _successMessage = "Recipe was successfully published!";

  constructor() {
    super();

    // Add teh click event listeners
    this._addHandlerShowForm();
    this._addHandlerHideForm();
  }

  // Show the form to submit a new recipe
  _addHandlerShowForm() {
    this._buttonOpen.addEventListener(
      "click",
      this.toggleFormWindow.bind(this)
    );
  }

  // Hides the form to submit a new recipe
  _addHandlerHideForm() {
    this._buttonClose.addEventListener(
      "click",
      this.toggleFormWindow.bind(this)
    );

    this._overlay.addEventListener("click", this.toggleFormWindow.bind(this));
  }

  // Toggle the 'hidden' class
  toggleFormWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  // Submit a new recipe
  addHandlerSubmit(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();

      // Fetching the data from the form and converting to an object
      const formData = [...new FormData(this)];
      const data = Object.fromEntries(formData);

      handler(data);
    });
  }

  // Render the HTML for pagination buttons
  _generateMarkup() {}
}

export default new AddRecipeView();
