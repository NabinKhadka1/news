import { contextApi } from "./context";
import { useContext } from "react";
const SearchForm = () => {
  const { searchText, handleSearch } = useContext(contextApi);
  return (
    <section className="search__news">
      <h2>Search News</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="search__input"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
    </section>
  );
};
export default SearchForm;
