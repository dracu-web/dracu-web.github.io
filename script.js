const searchForm = document.querySelector("#search-form");
const searchQuery = document.querySelector("#search-query");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchQuery.value.trim();
  if (!query) {
    searchQuery.focus();
    return;
  }
  window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
});
