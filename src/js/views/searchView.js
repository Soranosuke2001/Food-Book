class SearchView {
  _parentElement = document.querySelector(".search");

  // Event listener to fetch query value
  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", e => {
      e.preventDefault();
      handler();
    });
  }

  // Fetch the query submitted by the user
  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearSearchInput();

    return query;
  }

  // Clear the search input
  _clearSearchInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
