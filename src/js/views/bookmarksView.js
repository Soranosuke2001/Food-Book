import previewView from "./previewView";
import View from "./view";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it!";
  _successMessage = "";

  // render the bookmarks on page load
  addHandlerRenderBookmarks(handler) {
    window.addEventListener("load", handler);
  }

  // Return the entire HTML code to preview recipes
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();

// <div class="preview__user-generated">
// <svg>
//     <use href="${icons}#icon-user"></use>
// </svg>
// </div>
