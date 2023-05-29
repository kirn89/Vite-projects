import React from "react";

const CocktailMenu = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (data === null) {
    return <div>Item not found</div>;
  }

  return data.map((item, index) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={index}>
        <img
          src={item?.strDrinkThumb}
          className="card-img-top"
          alt={item?.strDrink}
        />
        <div className="card-body">
          <h5 className="card-title">{item?.strDrink}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};

export default CocktailMenu;
