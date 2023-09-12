class SearchView {
  #parentElement = document.querySelector(".search");

  // Event listener to fetch query value
  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", e => {
      e.preventDefault();
      handler();
    });
  }

  // Fetch the query submitted by the user
  getQuery() {
    const query = this.#parentElement.querySelector(".search__field").value;
    this.#clearSearchInput();

    return query;
  }

  // Clear the search input
  #clearSearchInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
