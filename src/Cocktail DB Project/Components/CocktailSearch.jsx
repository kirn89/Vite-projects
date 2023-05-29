import React from "react";

const CocktailSearch = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e);
  };

  return (
    <div className="form search">
      <section className="form-search d-flex justify-content-center">
        <form
          className="search-form"
          style={{
            backgroundColor: "grey",
            borderRadius: "2px",
            boxShadow: "var(--lightShadow)",
            padding: "20px",
          }}
        >
          <label for="name">Search your favorite cocktail</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={searchInput}
            onChange={handleChange}
          ></input>
        </form>
      </section>
    </div>
  );
};

export default CocktailSearch;
