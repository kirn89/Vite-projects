import axios from "axios";
import React from "react";
import { useState } from "react";

const SearchBar = ({ search, setSearch, data }) => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchResult((prev) => {
      return [
        ...prev,
        ...data?.filter((item) => {
          search === item?.name;
        }),
      ];
    });
  };
  console.log(
    data &&
      data?.filter((item) => {
        item?.name === search;
      })
  );

  console.log(searchResult, search);
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
