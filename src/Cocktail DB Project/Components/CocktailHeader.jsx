import React from "react";

const CocktailHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-item">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The CocktailDB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CocktailHeader;
