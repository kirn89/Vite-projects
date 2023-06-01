import React from "react";
import { useState } from "react";

const SearchBar = ({ search, setSearch, data, setBreedDetail }) => {
  //const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setBreedDetail(() => {
      return data?.filter((item) => {
        return item?.name.toLowerCase().includes(search);
      });
    });
  };
  console.log(data);

  return (
    <div className="form search">
      <section className="form-search d-flex justify-content-center">
        <form
          onSubmit={handleSearchSubmit}
          className="search-form"
          style={{
            backgroundColor: "grey",
            borderRadius: "2px",
            boxShadow: "var(--lightShadow)",
            padding: "20px",
          }}
        >
          <label for="name">Search dog breed detail</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={search}
            onChange={handleSearch}
          ></input>
          <button type="submit">Search</button>
        </form>
        {/* {searchResult.length > 0 && (
          <ul>
            {searchResult.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        )} */}
      </section>
    </div>
  );
};

export default SearchBar;
