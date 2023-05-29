import React, { useCallback, useEffect, useState } from "react";
import CocktailHeader from "./Components/CocktailHeader";
import CocktailSearch from "./Components/CocktailSearch";
import CocktailMenu from "./Components/CocktailMenu";

const CocktailDB = () => {
  const [cocktailData, setCocktailData] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        setCocktailData(data.drinks);
        setIsLoading(false);
      });
  }, [searchInput]);

  return (
    <div>
      <CocktailHeader />
      <CocktailSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <CocktailMenu data={cocktailData} isLoading={isLoading} />
    </div>
  );
};

export default CocktailDB;
